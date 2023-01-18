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
  color: Record<ButtonColor, `button-${ButtonColor}`>;
  variant: Record<ButtonVariant, `button-${ButtonVariant}`>;
  size: Record<ButtonSize, `button-${ButtonSize}`>;
}

const classNameMap: ButtonClassNameMap = {
  color: {
    neutral: 'button-neutral',
    primary: 'button-primary',
    secondary: 'button-secondary',
    error: 'button-error',
  },
  variant: {
    text: 'button-text',
    tonal: 'button-tonal',
    elevated: 'button-elevated',
    filled: 'button-filled',
  },
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
          classes[classNameMap.color[color]],
          classes[classNameMap.variant[variant]],
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
