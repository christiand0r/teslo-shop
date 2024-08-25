import { useId } from "react";

interface Props extends React.ComponentProps<"input"> {
  label: string;
}

export const TesloField = ({ label, ...props }: Props) => {
  const id = useId();
  return (
    <article className="flex flex-col-reverse gap-1 relative">
      <input
        {...props}
        id={id}
        placeholder={label}
        className="peer px-4 py-2 border rounded-lg border-gray-200/70 focus:outline-none placeholder:text-white"
      />
      <label
        htmlFor={id}
        className={
          "flex items-center absolute px-3 py-2 inset-0 leading-none transition-transform text-gray-400 peer-focus:-translate-y-5 peer-[:not(:placeholder-shown)]:-translate-y-5"
        }
      >
        <span className="px-1 bg-white">{label}</span>
      </label>
    </article>
  );
};
