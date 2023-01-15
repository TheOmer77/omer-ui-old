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
export type ButtonVariant = 'text' | 'tonal' | 'elevated' | 'filled';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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

export interface ButtonClassNameMap {
  size: Record<ButtonSize, `button-${ButtonSize}`>;
}

const classNameMap: ButtonClassNameMap = {
  size: {
    xs: 'button-xs',
    sm: 'button-sm',
    md: 'button-md',
    lg: 'button-lg',
    xl: 'button-xl',
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'neutral',
      variant = 'tonal',
      size = 'md',
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
            : variant === 'elevated'
            ? classes['button-elevated']
            : variant === 'text'
            ? classes['button-text']
            : classes['button-tonal'],
          classes[classNameMap.size[size]],
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
