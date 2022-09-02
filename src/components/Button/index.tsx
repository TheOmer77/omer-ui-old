import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';

import classes from './index.module.css';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'tonal' | 'filled';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  variant = 'tonal',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        classes['button-root'],
        variant === 'filled'
          ? classes['button-filled']
          : classes['button-tonal'],
        size === 'small'
          ? classes['button-small']
          : size === 'large'
          ? classes['button-large']
          : classes['button-medium']
      )}
      {...props}
    />
  );
};

export default Button;
