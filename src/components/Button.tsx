import { ComponentProps } from "react";
import cn from "classnames";

interface ButtonOwnProps {
  text?: string;
}

type ButtonProps = ButtonOwnProps &
  Omit<ComponentProps<"button">, keyof ButtonOwnProps>;

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "text-text-light bg-primary-main px-8 py-2 rounded-lg",
        "transition-all duration-200",
        "hover:bg-primary-dark enabled:active:text-opacity-50 disabled:bg-gray",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
