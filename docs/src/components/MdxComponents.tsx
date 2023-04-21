import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export const H1 = ({
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => <h1>{children}</h1>;

export const H2 = ({
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => <h2>{children}</h2>;

export const H3 = ({
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => <h3>{children}</h3>;
