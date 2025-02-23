import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CloseBtn,
  OptionsAnimationWrapper,
  VisitationEndButtonsOptions,
  VisitationStartButtonsOptions,
  VisitationProvider,
} from "./visitationOptionsClient";
import "dayjs/locale/de";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import { Prisma } from "@prisma/client";
import { AnimatePresence } from "framer-motion";
dayjs.locale("de");
dayjs.extend(weekday);

export default async function VisitationOptions({ visitation }: { visitation: Prisma.VisitationGetPayload<{}> | null }) {
  return (
    <AnimatePresence>
      {visitation && (
        <VisitationProvider visitation={visitation} key={visitation?.id + (!visitation?.end ? "_start" : "_end") + "_visitation"}>
          <OptionsAnimationWrapper>
            <Card className="w-[500px]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Weitere Optionen</CardTitle>
                  <CloseBtn />
                </div>
              </CardHeader>
              <CardContent>{!visitation.end ? <VisitationStartButtonsOptions /> : <VisitationEndButtonsOptions />}</CardContent>
            </Card>
          </OptionsAnimationWrapper>
        </VisitationProvider>
      )}
    </AnimatePresence>
  );
}
