import { NextPage } from "next";
import FlightCard, { FlightVariant } from "src/components/FlightCard";
import cn from "classnames";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

const variants: FlightVariant[] = [
  { endTime: "10:35", startTime: "09:20" },
  { endTime: "11:10", startTime: "10:20" },
  { endTime: "13:15", startTime: "11:20" },
];

const FLIGHT_PRICE = 4150;

const requiredParams = ["to", "from", "toDate"];

const Info: NextPage = () => {
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);

  useLayoutEffect(() => {
    let shouldReplace = false;
    if (!router.isReady) return;
    const queries = Object.keys(router.query);
    if (queries.length === 0) {
      router.replace("/avia");
      return;
    }
    requiredParams.forEach((param) => {
      if (!queries.includes(param)) {
        router.replace("/avia");
        shouldReplace = true;
      }
    });
    if (!shouldReplace) setShouldRender(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      {shouldRender && (
        <div className="rounded-2xl overflow-hidden shadow-widget grid grid-cols-10">
          <div className="col-span-8">
            <FlightCard
              toDate={router.query.toDate as string}
              endPoint={{ name: router.query.to as string, short: "ROV" }}
              startPoint={{ name: router.query.from as string, short: "SVO" }}
              flightVariants={variants}
            />
            {router.query.fromDate && (
              <FlightCard
                dashedTop
                toDate={router.query.fromDate as string}
                endPoint={{ name: router.query.to as string, short: "ROV" }}
                startPoint={{ name: router.query.from as string, short: "SVO" }}
                flightVariants={variants}
              />
            )}
          </div>
          <div
            className={cn(
              "col-start-9 col-span-2 border-second-light border-l-[1px]",
              "h-full w-full flex justify-center items-center"
            )}
          >
            <span className="font-bold text-3xl">
              {router.query.fromDate ? FLIGHT_PRICE * 2 : FLIGHT_PRICE} ₽
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
