import { SubmitHandler, useForm } from "react-hook-form";
import Input from "src/components/Input";
import DatePicker from "src/components/DatePicker";
import Button from "src/components/Button";
import cn from "classnames";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

interface SearchFormValues {
  from: string;
  to: string;
  toDate: string;
  fromDate: string;
}

const validationSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  toDate: z.string().min(1),
  fromDate: z.string().optional(),
});

interface SearchFormProps {}

const SearchForm = ({}: SearchFormProps) => {
  const { handleSubmit, register, formState } = useForm<SearchFormValues>({
    defaultValues: {
      from: "",
      to: "",
      toDate: "",
      fromDate: "",
    },
    reValidateMode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const { isValid } = formState;
  const router = useRouter();

  const _onSubmit: SubmitHandler<SearchFormValues> = (data, event) => {
    event?.preventDefault();
    const { fromDate, ...rest } = data;
    const queries = fromDate ? data : rest;
    router.push({
      pathname: "avia/info",
      query: {
        ...queries,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(_onSubmit)}
      className="rounded-2xl overflow-hidden shadow-widget"
    >
      <div
        className={cn(
          "bg-primary-main gap-6 grid p-8",
          "md:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        )}
      >
        <Input
          {...register("from")}
          label="Откуда"
          id="from"
          placeholder="Город вылета"
        />
        <Input
          {...register("to")}
          label="Откуда"
          id="to"
          placeholder="Город прилёта"
        />
        <DatePicker {...register("toDate")} label="Откуда" id="toDate" />
        <DatePicker {...register("fromDate")} label="Откуда" id="fromDate" />
      </div>
      <div className="p-8 flex justify-end">
        <Button disabled={!isValid} text="Найти билеты" />
      </div>
    </form>
  );
};

export default SearchForm;
