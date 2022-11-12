import Calendar from "public/calendar 1.svg";
import cn from "classnames";
import { ComponentProps, forwardRef, useState, ChangeEvent } from "react";

interface InputOwnProps {
  label?: string;
}

type InputProps = InputOwnProps &
  Omit<ComponentProps<"input">, keyof InputOwnProps>;

const DatePicker = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, className, value, onChange, ...props }, ref) => {
    const [_value, _setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      _setValue(e.target.value);
    };

    return (
      <label className="relative block">
        <span className="text-xs block">{label}</span>
        <input
          value={value ?? _value}
          onChange={onChange ?? handleChange}
          ref={ref}
          {...props}
          className={cn(
            "pl-8 pr-4 py-2 border-gray border-[1px] block rounded-xl outline-none",
            "transition-all duration-200 font-bold",
            "placeholder:font-bold placeholder:text-gray",
            "[&::-webkit-calendar-picker-indicator]:opacity-0",
            "[&::-webkit-calendar-picker-indicator]:absolute",
            "[&::-webkit-calendar-picker-indicator]:left-0",
            "[&::-webkit-calendar-picker-indicator]:w-8",
            "[&::-webkit-calendar-picker-indicator]:h-full",
            "[&::-webkit-calendar-picker-indicator]:z-10",
            "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
            _value || value ? "text-text-main" : "text-gray"
          )}
          type="date"
        />
        <Calendar
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-3",
            _value || value ? "text-primary-main" : "text-text-main"
          )}
        />
      </label>
    );
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
