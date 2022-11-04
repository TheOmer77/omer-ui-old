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
  icon?: ReactNode;
  iconPosition?: 'start' | 'end' | 'top' | 'bottom';
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
            : classes['button-neutral'],
          variant === 'filled'
            ? classes['button-filled']
            : classes['button-tonal'],
          size === 'small'
            ? classes['button-small']
            : size === 'large'
            ? classes['button-large']
            : classes['button-medium'],
          ['top', 'bottom'].includes(iconPosition) &&
            classes['button-vertical'],
          className
        )}
        {...props}
      >
        {['start', 'top'].includes(iconPosition) &&
          isValidElement(icon) &&
          cloneElement(
            icon as ReactElement<
              DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
            >,
            {
              className: classNames(
                icon.props?.className,
                classes['button-icon'],
                iconPosition === 'top'
                  ? classes['button-icon-start']
                  : classes['button-icon-start']
              ),
            }
          )}
        {children}
        {['end', 'bottom'].includes(iconPosition) &&
          isValidElement(icon) &&
          cloneElement(
            icon as ReactElement<
              DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
            >,
            {
              className: classNames(
                icon.props?.className,
                classes['button-icon'],
                iconPosition === 'bottom'
                  ? classes['button-icon-end']
                  : classes['button-icon-end']
              ),
            }
          )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
