"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiClose, mdiContentSave } from "@mdi/js";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { createException } from "@/app/(others)/students/[id]/exceptions/_methods/createException";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateExceptionInputSchema } from "@/utils/zodSchema";
import { Textarea } from "@/components/ui/textarea";
import { RuleSelect } from "@/app/(others)/students/[id]/exceptions/_components/form";
import { z } from "zod";
import { useShallow } from "zustand/react/shallow";
import { useVisitationOptionsState } from "./visitationOptionsState";
import { updateVisitation } from "../_methods/visit";

const useVisitationMethods = () => {
  const { visitation, setOpen } = useVisitationOptionsState(
    useShallow((state) => ({
      visitation: state.visitation,
      setVisitation: state.setVisitation,
      setOpen: state.setOpen,
    }))
  );

  const saveVisitation = async () => {
    if (visitation) {
      await updateVisitation(
        visitation.studentId,
        {
          start: visitation.start,
          end: visitation.end,
          ...(!visitation.end
            ? { startNotes: visitation.startNotes || null, hasHomework: visitation.hasHomework }
            : { endNotes: visitation.endNotes || null }),
        },
        visitation.listId,
        visitation.date
      );

      setOpen(false);
    }
  };

  return { saveVisitation };
};

export const VisitationsOptions = () => {
  const { visitation, open } = useVisitationOptionsState(
    useShallow((state) => ({
      visitation: state.visitation,
      open: state.open,
    }))
  );

  return (
    <AnimatePresence>
      {visitation && open && (
        <VisitationsAnimationWrapper key={visitation.id + (!visitation.end ? "_start" : "_end") + "_visitation"}>
          <Card className="w-[500px]">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Weitere Optionen</CardTitle>
                <CloseBtn />
              </div>
            </CardHeader>
            <CardContent>
              {!visitation.end ? <VisitationStartButtonsOptions /> : <VisitationEndButtonsOptions />}
            </CardContent>
          </Card>
        </VisitationsAnimationWrapper>
      )}
    </AnimatePresence>
  );
};

export const CloseBtn = () => {
  const { saveVisitation } = useVisitationMethods();

  return (
    <button onClick={saveVisitation}>
      <Icon path={mdiClose} size={0.8} className="text-muted-foreground transition hover:text-foreground" />
    </button>
  );
};

const VisitationsAnimationWrapper = ({ children }: PropsWithChildren<{}>) => {
  const { saveVisitation } = useVisitationMethods();

  const variants: Variants = {
    open: { translateY: 0, translateX: 0, scale: 1, transition: { duration: 0.3, delay: 0.3, ease: "easeOut" } },
    closeRight: { translateX: "110%", scale: 0.95 },
    closeBottom: { translateY: "110%", scale: 0.95 },
  };

  return (
    <motion.div
      initial="closeBottom"
      animate="open"
      exit="closeRight"
      variants={variants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-2 right-2"
      // initiate dragging
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_event, info) => {
        if (info.offset.x > 100) {
          saveVisitation();
        }
      }}
      whileDrag={{ scale: 0.95, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.div>
  );
};

const VisitationAnimateSwitchScreen = ({
  children,
  animationKey,
  direction,
}: PropsWithChildren<{ animationKey: string; direction: 1 | -1 }>) => {
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
  const { setVisitation, visitation } = useVisitationOptionsState(
    useShallow((state) => ({
      visitation: state.visitation,
      setVisitation: state.setVisitation,
    }))
  );

  const [nextText, setNextText] = useState(false);
  const [nextTime, setNextTime] = useState(false);

  const toggleHomework = () => {
    if (visitation) {
      setVisitation({ ...visitation, hasHomework: !visitation?.hasHomework });
    }
  };

  return (
    <VisitationAnimateSwitchScreen
      direction={nextText || nextTime ? 1 : -1}
      animationKey={!nextText && !nextTime ? "initial" : "next"}
    >
      {!nextText && !nextTime ? (
        <div className="flex flex-col space-y-2">
          <div className="relative group">
            <Switch
              className="absolute scale-[83%] top-1/2 -translate-y-1/2 right-2"
              checked={visitation?.hasHomework ?? false}
              onCheckedChange={toggleHomework}
            />
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
      ) : nextTime ? (
        <VisitationEndTimeInput returnBack={() => setNextTime(false)} />
      ) : (
        <VisitationTextInput
          returnBack={() => setNextText(false)}
          value={visitation?.startNotes ?? ""}
          setValue={(value) => visitation && setVisitation({ ...visitation, startNotes: value })}
        />
      )}
    </VisitationAnimateSwitchScreen>
  );
};

export const VisitationEndButtonsOptions = () => {
  const { setVisitation, visitation } = useVisitationOptionsState(
    useShallow((state) => ({
      visitation: state.visitation,
      setVisitation: state.setVisitation,
    }))
  );

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

    if (visitation) setVisitation({ ...visitation, endNotes: selectedEndOption ? selectedEndOption.text : "" });

    setNext(true);
  };

  return (
    <VisitationAnimateSwitchScreen animationKey={!next ? "initial" : "next"} direction={next ? 1 : -1}>
      {!next ? (
        <div className="flex flex-col space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {endOptions.map((option) => (
              <Button
                key={option.value + "_end_option"}
                variant={"light"}
                onClick={() => onSelectEndOption(option.value)}
              >
                {option.label}
              </Button>
            ))}

            <Button variant={"light"} onClick={() => onSelectEndOption()}>
              Eigene Anmerkung
            </Button>
          </div>
        </div>
      ) : (
        <VisitationTextInput
          value={visitation?.endNotes ?? ""}
          setValue={(value) => visitation && setVisitation({ ...visitation, endNotes: value })}
          returnBack={() => setNext(false)}
        />
      )}
    </VisitationAnimateSwitchScreen>
  );
};

const VisitationEndTimeInput = ({ returnBack }: { returnBack: () => void }) => {
  const { visitation } = useVisitationOptionsState(
    useShallow((state) => ({
      visitation: state.visitation,
    }))
  );
  const { saveVisitation } = useVisitationMethods();

  const initialValues = {
    mode: "multiple" as const,
    dates: visitation ? [visitation.date] : [],
    lists: visitation ? [visitation.listId] : [],
    studentId: visitation ? visitation.studentId : undefined,
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

    saveVisitation();
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

const VisitationTextInput = ({
  value,
  setValue,
  returnBack,
}: {
  value: string;
  setValue: (value: string) => void;
  returnBack: () => void;
}) => {
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
