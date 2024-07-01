import { ComponentChildren, JSX } from 'preact'

export interface TypographyProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  children: ComponentChildren
  className?: string
}