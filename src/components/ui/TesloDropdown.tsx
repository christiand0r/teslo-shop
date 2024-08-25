import { useId } from "react";

interface Props extends React.ComponentProps<"select"> {
  label: string;
  options: {
    value: any;
    text?: string;
    hidden?: boolean;
    disabled?: boolean;
  }[];
}

export const TesloDropdown = ({ label, options, ...props }: Props) => {
  const id = useId();

  return (
    <article >
      <label htmlFor={id}>{label}</label>
      <select id={id} {...props}>
        {options.map((option) => (
          <option
            value={option.value}
            hidden={option.hidden}
            disabled={option.disabled}
          >
            {option?.text ?? option.value}
          </option>
        ))}
      </select>
    </article>
  );
};
