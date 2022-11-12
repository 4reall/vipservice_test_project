import cn from "classnames";
import S7 from "public/logo.png";
import Image from "next/image";
import FlightInfo, { FlightInfoProps } from "src/components/FlightInfo";
import Bags from "public/bags.svg";
import PickButton from "src/components/PickButton";
import { useMemo, useState } from "react";
import { dateSubtraction } from "src/helpers/dateSubtraction";

export interface FlightVariant {
  startTime: string;
  endTime: string;
}

interface FlightCardOwnProps {
  dashedTop?: boolean;
  flightVariants: FlightVariant[];
}

type FlightCardProps = FlightCardOwnProps &
  Pick<FlightInfoProps, "toDate" | "startPoint" | "endPoint">;

const FlightCard = ({
  dashedTop,
  flightVariants,
  toDate,
  ...props
}: FlightCardProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(flightVariants[0]);

  const handlePicked = (index: number, variant: FlightVariant) => () => {
    setSelectedIndex(index);
    setSelectedVariant(variant);
  };

  const [hours, minutes] = useMemo(
    () => dateSubtraction(selectedVariant.startTime, selectedVariant.endTime),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedIndex]
  );

  return (
    <div
      className={cn(
        "relative px-6 py-8 rounded-tl-2xl ",
        dashedTop && "border-t-[1px] border-dashed"
      )}
    >
      <div
        className={cn(
          "py-1 px-6 bg-second-main w-fit rounded-br-2xl z-10 rounded-tl-2xl",
          "absolute -top-[1px] left-0 text-text-light text-xs font-bold"
        )}
      >
        Невозвратный
      </div>
      <div className="grid grid-cols-10">
        <div className="md:flex flex-col col-span-2 justify-center items-center w-fit hidden">
          <Image src={S7} width={40} height={40} alt="s7 logo" />
          <span className="text-text-main">S7 Airlines</span>
        </div>
        <div className="col-span-10 md:col-span-7 relative">
          <FlightInfo
            {...props}
            toDate={toDate}
            fromDate={toDate}
            fromTime={selectedVariant.startTime}
            toTime={selectedVariant.endTime}
            duration={`${hours} ч ${minutes} мин`}
          />
          <Bags className="absolute -right-16 -top-12 -z-10 md:block hidden" />
          <div className="mt-4 flex md:flex-row flex-col md:px-0 px-8">
            {flightVariants.map((variant, i) => (
              <PickButton
                className="md:ml-6 md:first-of-type:ml-0 mt-4 first-of-type:mt-0"
                picked={selectedIndex === i}
                setPicked={handlePicked(i, variant)}
                key={i}
              >
                <span className="text-sm">
                  <span className="text-lg">{variant.startTime}</span> -{" "}
                  {variant.endTime}
                </span>
              </PickButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
