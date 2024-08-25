import { cn } from "@/utils";

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const TesloTitle = ({ title, subtitle, className }: Props) => {
  return (
    <article className={cn(className)}>
      <h1 className="font-alternates font-semibold text-4xl antialiased mt-10 mb-3">
        {title}
      </h1>
      {subtitle && <p className="text-lg mb-5">{subtitle}</p>}
    </article>
  );
};
