import { ComponentProps } from "react";
import cn from "classnames";

interface ButtonOwnProps {
  picked: boolean;
  setPicked: () => void;
}

type ButtonProps = ButtonOwnProps &
  Omit<ComponentProps<"button">, keyof ButtonOwnProps>;

const PickButton = ({
  picked,
  children,
  setPicked,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={() => setPicked()}
      className={cn(
        "relative border-none p-[4px]",
        "before:border-[1px] before:border-gray before:rounded-xl",
        "before:w-full before:absolute before:h-full before:transition-all before:duration-200",
        "before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2",
        picked && "before:scale-125 before:bg-second-light before:border-none",
        className
      )}
    >
      <span className={cn("relative text-lg")}>{children}</span>
    </button>
  );
};

export default PickButton;
