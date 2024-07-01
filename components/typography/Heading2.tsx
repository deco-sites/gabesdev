import classNames from 'classnames';
import { TypographyProps } from "site/components/typography/interfaces.ts";

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2 className={classNames("font-open-sans font-bold text-2xl md:text-4xl lg:text-4xl leading-normal text-black", className)}>
      {children}
    </h2>
  );
}