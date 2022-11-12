import { ComponentProps, forwardRef } from "react";
import cn from "classnames";

interface InputOwnProps {
  label?: string;
}

type InputProps = InputOwnProps &
  Omit<ComponentProps<"input">, keyof InputOwnProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <label
        className={cn(
          "block transition-all duration-200 text-text-main w-fit",
          "focus-within:text-primary-main"
        )}
        htmlFor={id}
      >
        <span className="text-xs block">{label}</span>
        <input
          className={cn(
            "px-3 py-2 border-gray border-[1px] block rounded-xl outline-none",
            "transition-all duration-200 text-text-main",
            "placeholder:font-bold placeholder:text-gray",
            "focus:border-primary-main focus:shadow-input disabled:bg-transparent"
          )}
          {...props}
          id={id}
        />
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
