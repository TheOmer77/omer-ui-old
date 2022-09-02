import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import classNames from 'classnames';

import classes from './index.module.css';

export type ButtonColor = 'primary' | 'neutral';
export type ButtonVariant = 'tonal' | 'filled';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'neutral',
      variant = 'tonal',
      size = 'medium',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          classes['button-root'],
          color === 'primary'
            ? classes['button-primary']
            : classes['button-neutral'],
          variant === 'filled'
            ? classes['button-filled']
            : classes['button-tonal'],
          size === 'small'
            ? classes['button-small']
            : size === 'large'
            ? classes['button-large']
            : classes['button-medium'],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
