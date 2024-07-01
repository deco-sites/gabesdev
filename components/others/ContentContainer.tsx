import { ComponentChildren } from 'preact'

import classNames from 'classnames';

interface Props {
  children: ComponentChildren,
  className?: string
}

export function ContentContainer({ children, className, ...otherProps }: Props) {
  return (
    <div className={classNames("max-w-7xl px-8", className)} {...otherProps}>
      {children}
    </div>
  );
}