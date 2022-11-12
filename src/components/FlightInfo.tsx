import cn from "classnames";

export interface FlightInfoProps {
  toDate: string;
  fromDate: string;
  fromTime: string;
  toTime: string;
  startPoint: {
    name: string;
    short: string;
  };
  endPoint: {
    name: string;
    short: string;
  };
  duration: string;
}

const FlightInfo = ({
  toDate,
  fromDate,
  fromTime,
  toTime,
  endPoint,
  startPoint,
  duration,
}: FlightInfoProps) => {
  return (
    <div className="grid grid-cols-10 w-full">
      <div className="md:col-span-2 col-span-5 md:order-none order-1">
        <span className="block text-2xl text-black font-bold mb-[4px]">
          {fromTime}
        </span>
        <span className="block text-sm text-text-main leading-none">
          {startPoint.name}
        </span>
        <span className="block text-sm text-text-main leading-none">
          {fromDate}
        </span>
      </div>
      <div
        className={cn(
          "flex -mt-2 relative grow h-14 items-center text-gray",
          "md:col-span-6 col-span-10 md:mx-8"
        )}
      >
        <span className="absolute -left-[10px] top-0">{startPoint.short}</span>
        <span className="absolute -right-[10px] top-0">{endPoint.short}</span>
        <span
          className={cn(
            "relative w-full block h-[1px] bg-gray",
            "before:h-2 before:w-2 before:rounded-full before:bg-gray",
            "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
            "after:h-2 after:w-2 after:rounded-full after:bg-gray",
            "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
          )}
        />
        <span
          className={cn(
            "w-full absolute bottom-0 left-1/2 -translate-x-1/2",
            "text-center text-sm"
          )}
        >
          В пути {duration}
        </span>
      </div>
      <div className="md:col-span-2 col-span-5 md:order-none order-1 text-end">
        <span className="block text-2xl text-black font-bold mb-[4px]">
          {toTime}
        </span>
        <span className="block text-sm text-text-main leading-none">
          {endPoint.name}
        </span>
        <span className="block text-sm text-text-main leading-none">
          {toDate}
        </span>
      </div>
    </div>
  );
};

export default FlightInfo;
