import {
  ButtonHTMLAttributes,
  cloneElement,
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
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
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'neutral',
      variant = 'tonal',
      size = 'medium',
      startIcon,
      endIcon,
      className,
      children,
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
      >
        {isValidElement(startIcon) &&
          cloneElement(
            startIcon as ReactElement<
              DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
            >,
            {
              className: classNames(
                startIcon.props?.className,
                classes['button-start-icon']
              ),
            }
          )}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(
            endIcon as ReactElement<
              DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
            >,
            {
              className: classNames(
                endIcon.props?.className,
                classes['button-end-icon']
              ),
            }
          )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
