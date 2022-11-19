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

import classes from './index.module.scss';

export type ButtonColor = 'neutral' | 'primary' | 'secondary' | 'error';
export type ButtonVariant = 'text' | 'tonal' | 'filled';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonIconPosition = 'start' | 'end';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'neutral',
      variant = 'tonal',
      size = 'medium',
      icon,
      iconPosition = 'start',
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
            : color === 'secondary'
            ? classes['button-secondary']
            : color === 'error'
            ? classes['button-error']
            : classes['button-neutral'],
          variant === 'filled'
            ? classes['button-filled']
            : variant === 'text'
            ? classes['button-text']
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
        {iconPosition === 'start' &&
          isValidElement(icon) &&
          cloneElement(
            icon as ReactElement<
              DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
            >,
            {
              className: classNames(
                icon.props?.className,
                classes['button-icon'],
                classes['button-icon-start']
              ),
            }
          )}
        {children}
        {iconPosition === 'end' &&
          isValidElement(icon) &&
          cloneElement(
            icon as ReactElement<
              DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
            >,
            {
              className: classNames(
                icon.props?.className,
                classes['button-icon'],
                classes['button-icon-end']
              ),
            }
          )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
