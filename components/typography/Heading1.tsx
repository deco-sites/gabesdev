import classNames from "classnames";
import { TypographyProps } from "site/components/typography/interfaces.ts";

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1
      className={classNames(
        "font-roboto-slab font-bold md:font-semibold text-4xl md:text-7xl lg:text-8xl leading-normal text-black",
        className,
      )}
    >
      {children}
    </h1>
  );
}
