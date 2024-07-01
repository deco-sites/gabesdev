import classNames from 'classnames';
import { TypographyProps } from "site/components/typography/interfaces.ts";

export function Highlight({ children, className }: TypographyProps) {
  return (
    <span className={classNames("text-secondary", className)}>
      {children}
    </span>
  );
}