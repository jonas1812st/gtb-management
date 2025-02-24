"use client";

import { mdiArrowLeft, mdiClose, mdiContentSave } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Prisma } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { CreateExceptionInputSchema } from "@/utils/zodSchema";
import { RuleSelect } from "@/app/(others)/students/[id]/exceptions/_components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createException } from "@/app/(others)/students/[id]/exceptions/_methods/createException";
import { updateVisitation } from "../_methods/visit";
import toast from "react-hot-toast";
import { timeToString } from "@/utils/time";

export const VisitationOpenContext = createContext<{
  value: boolean;
  setValue: (value: boolean) => void;
} | null>(null);
export const VisitationOpenProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <VisitationOpenContext.Provider
      value={{
        value: open,
        setValue: setOpen,
      }}
    >
      {children}
    </VisitationOpenContext.Provider>
  );
};
export const VisitationOpenProviderController = (props: { renderChildren: (open: boolean) => React.ReactNode }) => {
  const openContext = useContext(VisitationOpenContext);

  return props.renderChildren(openContext?.value ?? false);
};

export const VisitationContext = createContext<Prisma.VisitationGetPayload<{}> | null>(null);
export const VisitationProvider = ({ visitation, children }: { visitation: Prisma.VisitationGetPayload<{}>; children: React.ReactNode }) => {
  return (
    <VisitationOpenProvider>
      <VisitationContext.Provider value={visitation}>
        <VisitationOptionsProvider>{children}</VisitationOptionsProvider>
      </VisitationContext.Provider>
    </VisitationOpenProvider>
  );
};
export const useVisitation = () => {
  const visitation = useContext(VisitationContext);

  if (!visitation) {
    throw new Error("useVisitation must be used within a VisitationsProvider");
  }

  return visitation;
};

type VisitationStartOptions = {
  hasHomework: boolean;
  text: string;
  endTime: number | null;
};

type VisitationEndOptions = {
  text: string;
};

export const VisitationOptionsContext = createContext<{
  startOptions: VisitationStartOptions;
  setStartOptions: (options: VisitationStartOptions) => void;
  endOptions: VisitationEndOptions;
  setEndOptions: (options: VisitationEndOptions) => void;
} | null>(null);
export const VisitationOptionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [startOptions, setStartOptions] = useState<VisitationStartOptions>({
    hasHomework: true,
    text: "",
    endTime: null,
  });

  const [endOptions, setEndOptions] = useState<VisitationEndOptions>({
    text: "",
  });

  return (
    <VisitationOptionsContext.Provider
      value={{
        startOptions,
        setStartOptions,
        endOptions,
        setEndOptions,
      }}
    >
      {children}
    </VisitationOptionsContext.Provider>
  );
};
export const useVisitationOptions = () => {
  const visitationOptions = useContext(VisitationOptionsContext);

  if (!visitationOptions) {
    throw new Error("useVisitationOptions must be used within a VisitationOptionsProvider");
  }

  return visitationOptions;
};

const useOptionsMethods = () => {
  const router = useRouter();
  const visitation = useVisitation();
  const visitationOptions = useVisitationOptions();
  const openContext = useContext(VisitationOpenContext);

  const { startOptions, endOptions } = visitationOptions;

  const closeOptions = useCallback(async () => {
    // close the options manually for better performance
    openContext?.setValue(false);

    const startTime = timeToString(visitation.start);
    if (!startTime) return;

    await updateVisitation(
      visitation.studentId,
      {
        start: startTime,
        end: timeToString(visitation.end),
        ...(!visitation.end
          ? {
              startNotes: startOptions.text || undefined,
              hasHomework: startOptions.hasHomework,
            }
          : {
              startNotes: visitation.startNotes || undefined,
              hasHomework: visitation.hasHomework ?? undefined,
              endNotes: endOptions.text,
            }),
      },
      visitation.listId,
      visitation.date
    );

    router.replace(location.pathname, { scroll: false });
  }, [startOptions, endOptions, visitation, openContext, router]);

  return {
    startOptions,
    endOptions,
    closeOptions,
  };
};

export const CloseBtn = () => {
  const { closeOptions } = useOptionsMethods();

  return (
    <button onClick={closeOptions}>
      <Icon path={mdiClose} size={0.8} className="text-muted-foreground transition hover:text-foreground" />
    </button>
  );
};

export const OptionsAnimationWrapper = ({ children }: PropsWithChildren<{}>) => {
  const openContext = useContext(VisitationOpenContext);
  const { closeOptions } = useOptionsMethods();

  const variants = {
    open: { translateY: 0, translateX: 0, scale: 1 },
    closeRight: { translateX: "110%", scale: 0.95 },
    closeBottom: { translateY: "110%", scale: 0.95 },
  };

  /*
  useEffect(() => {
    // set timeout to close the options after 30 seconds
    const timeout = setTimeout(closeOptions, 30 * 1000);

    return () => clearTimeout(timeout);
  }, []);
  */

  return (
    <motion.div
      initial="closeBottom"
      animate={openContext?.value === false ? { ...variants.closeRight, translateY: 0 } : "open"}
      exit="closeRight"
      variants={variants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-2 right-2"
      // initiate dragging
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_event, info) => {
        if (info.offset.x > 100) {
          closeOptions();
        }
      }}
      whileDrag={{ scale: 0.95, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.div>
  );
};

const VisitationAnimateSwitchScreen = ({ children, animationKey, direction }: PropsWithChildren<{ animationKey: string; direction: 1 | -1 }>) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const directionValue = direction === 1 ? "100%" : "-100%";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | "auto">("auto");

  const swipeDuration = 0.3;

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height;
        setContainerHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      style={{ height: containerHeight }}
      animate={{ height: containerHeight }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: swipeDuration }}
      className={cn(isAnimating ? "overflow-hidden" : "", "relative")}
    >
      <div ref={containerRef}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={animationKey}
            initial={{ x: directionValue, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: directionValue, opacity: 0, bottom: 0, position: "absolute" }}
            transition={{ duration: swipeDuration, ease: "easeInOut" }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const VisitationStartButtonsOptions = () => {
  const { startOptions: options, setStartOptions: setOptions } = useVisitationOptions();

  const [nextText, setNextText] = useState(false);
  const [nextTime, setNextTime] = useState(false);

  const toggleHomework = () => {
    setOptions({ ...options, hasHomework: !options.hasHomework });
  };

  return (
    <VisitationChangeScreen
      direction={nextText || nextTime ? 1 : -1}
      next={nextText || nextTime}
      nextChildren={
        nextTime ? (
          <VisitationEndTimeInput returnBack={() => setNextTime(false)} />
        ) : (
          <VisitationTextInput
            returnBack={() => setNextText(false)}
            value={options.text}
            setValue={(value) => setOptions({ ...options, text: value })}
          />
        )
      }
    >
      <div className="flex flex-col space-y-2">
        <div className="relative group">
          <Switch className="absolute scale-[83%] top-1/2 -translate-y-1/2 right-2" checked={options.hasHomework} onCheckedChange={toggleHomework} />
          <Button variant={"light"} className="group-hover:bg-primary/20 w-full" onClick={toggleHomework}>
            Hausaufgaben
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant={"light"} className="w-full" onClick={() => setNextTime(true)}>
            Endzeit ändern
          </Button>
          <Button variant={"light"} className="w-full" onClick={() => setNextText(true)}>
            Anmerkung hinzufügen
          </Button>
        </div>
      </div>
    </VisitationChangeScreen>
  );
};

export const VisitationEndButtonsOptions = () => {
  const { endOptions: options, setEndOptions: setOptions } = useVisitationOptions();

  const [next, setNext] = useState(false);

  const endOptions: {
    value: "isPickedUp" | "isSick" | "isCalledOff";
    label: string;
    text: string;
  }[] = [
    {
      value: "isPickedUp",
      label: "Abgeholt",
      text: "Wurde von den Eltern abgeholt.",
    },
    {
      value: "isSick",
      label: "Krank",
      text: "Ist krank.",
    },
    {
      value: "isCalledOff",
      label: "Telefonisch abgemeldet",
      text: "Wurde telefonisch abgemeldet.",
    },
  ];

  const onSelectEndOption = (option?: (typeof endOptions)[number]["value"]) => {
    const selectedEndOption = endOptions.find((o) => o.value === option);

    setOptions({ ...options, text: selectedEndOption ? selectedEndOption.text : "" });

    setNext(true);
  };

  return (
    <VisitationChangeScreen
      direction={next ? 1 : -1}
      next={next}
      nextChildren={
        <VisitationTextInput value={options.text} setValue={(value) => setOptions({ ...options, text: value })} returnBack={() => setNext(false)} />
      }
    >
      <div className="flex flex-col space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {endOptions.map((option) => (
            <Button key={option.value + "_end_option"} variant={"light"} onClick={() => onSelectEndOption(option.value)}>
              {option.label}
            </Button>
          ))}

          <Button variant={"light"} onClick={() => onSelectEndOption()}>
            Eigene Anmerkung
          </Button>
        </div>
      </div>
    </VisitationChangeScreen>
  );
};

const VisitationChangeScreen = ({
  children,
  next,
  nextChildren,
  direction,
}: PropsWithChildren<{ next: boolean; nextChildren: React.ReactNode; direction: 1 | -1 }>) => {
  return (
    <VisitationAnimateSwitchScreen direction={direction} animationKey={!next ? "initial" : "next"}>
      {!next ? children : nextChildren}
    </VisitationAnimateSwitchScreen>
  );
};

const VisitationNavigation = ({ returnBack, save }: { returnBack?: () => void; save?: () => void }) => {
  return (
    <div className="flex justify-between">
      {returnBack && (
        <Button type="button" variant={"link"} onClick={returnBack} className="flex space-x-1 items-center h-8 p-0">
          <Icon path={mdiArrowLeft} size={0.8} />
          <span>Zurück</span>
        </Button>
      )}
      {save && (
        <Button variant={"link"} onClick={save} className="flex space-x-1 items-center h-8 p-0">
          <Icon path={mdiContentSave} size={0.8} />
          <span>Speichern</span>
        </Button>
      )}
    </div>
  );
};

const VisitationTextInput = ({ value, setValue, returnBack }: { value: string; setValue: (value: string) => void; returnBack: () => void }) => {
  return (
    <div className="flex flex-col">
      <VisitationNavigation
        returnBack={() => {
          returnBack();
          setValue("");
        }}
      />
      <Textarea
        placeholder="Füge hier eine Anmerkung hinzu."
        rows={5}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        spellCheck={false}
      />
    </div>
  );
};

const VisitationEndTimeInput = ({ returnBack }: { returnBack: () => void }) => {
  const visitation = useVisitation();
  const { closeOptions } = useOptionsMethods();

  const initialValues = {
    mode: "multiple" as const,
    dates: [visitation.date],
    lists: [visitation.listId],
    studentId: visitation.studentId,
    rule: {
      presence: "PRESENT" as const,
    },
  };

  const methods = useForm<z.infer<typeof CreateExceptionInputSchema>>({
    resolver: zodResolver(CreateExceptionInputSchema),
    mode: "onChange",
    defaultValues: {
      ...initialValues,
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const response = await createException(data);

    if (response.success) {
      toast.success("Ausnahme erstellt");
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }

    closeOptions();
  });

  return (
    <div className="flex flex-col">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <VisitationNavigation
            returnBack={() => {
              returnBack();
            }}
            save={() => {}}
          />
          <RuleSelect disabled={{ presence: true }} className="border-0 p-0" />
        </form>
      </FormProvider>
    </div>
  );
};
