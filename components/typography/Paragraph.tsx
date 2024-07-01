import classNames from 'classnames';
import { TypographyProps } from "site/components/typography/interfaces.ts";

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={classNames("font-open-sans font-semibold leading-normal text-gray text-base md:text-lg", className)}>
      {children}
    </p>
  );
}