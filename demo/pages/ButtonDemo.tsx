import { Fragment, useState } from 'react';

import Button, {
  ButtonColor,
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
} from 'components/Button';
import Demo from '../components/Demo';
import DemoComponents from '../components/DemoComponents';

import type { DemoOption } from '../types';

import { ReactComponent as AddIcon } from '../assets/icons/add.svg';

const buttonSizes: DemoOption<ButtonSize>[] = [
    { label: 'Extra small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
  ],
  buttonVariants: DemoOption<ButtonVariant>[] = [
    { label: 'Text', value: 'text' },
    { label: 'Tonal', value: 'tonal' },
    { label: 'Elevated', value: 'elevated' },
    { label: 'Filled', value: 'filled' },
  ],
  buttonColors: DemoOption<ButtonColor>[] = [
    { label: 'Neutral', value: 'neutral' },
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Error', value: 'error' },
  ],
  buttonIconPositions: DemoOption<ButtonIconPosition>[] = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];
const noneDemoOption: DemoOption<false> = { label: 'None', value: false };

const ButtonDemo = () => {
  const [color, setColor] = useState<ButtonColor>('neutral'),
    [icon, setIcon] = useState<ButtonIconPosition | false>(false),
    [size, setSize] = useState<ButtonSize>('md'),
    [variant, setVariant] = useState<ButtonVariant>('tonal');

  return (
    <>
      <h1>Button</h1>
      <Demo
        controls={[
          {
            id: 'color',
            label: 'Color',
            component: (
              <>
                {buttonColors.map(({ label, value }) => (
                  <Button
                    key={value}
                    color={color === value ? 'primary' : 'neutral'}
                    onClick={() => setColor(value)}
                  >
                    {label}
                  </Button>
                ))}
              </>
            ),
          },
          {
            id: 'variant',
            label: 'Variant',
            component: (
              <>
                {buttonVariants.map(({ label, value }) => (
                  <Button
                    key={value}
                    color={variant === value ? 'primary' : 'neutral'}
                    onClick={() => setVariant(value)}
                  >
                    {label}
                  </Button>
                ))}
              </>
            ),
          },
          {
            id: 'size',
            label: 'Size',
            component: (
              <>
                {buttonSizes.map(({ label, value }) => (
                  <Button
                    key={value}
                    color={size === value ? 'primary' : 'neutral'}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </Button>
                ))}
              </>
            ),
          },
          {
            id: 'icon',
            label: 'Icon',
            component: (
              <>
                {[noneDemoOption, ...buttonIconPositions].map(
                  ({ label, value }) => (
                    <Button
                      key={value || 'none'}
                      color={icon === value ? 'primary' : 'neutral'}
                      onClick={() => setIcon(value)}
                    >
                      {label}
                    </Button>
                  )
                )}
              </>
            ),
          },
        ]}
      >
        <Button
          variant={variant}
          color={color}
          size={size}
          icon={icon && <AddIcon />}
          {...(icon ? { iconPosition: icon } : {})}
        >
          Button
        </Button>
      </Demo>
      <h2>Button variants & colors</h2>
      {buttonVariants.map(({ label: variantLabel, value: variant }) => (
        <Fragment key={variant}>
          <h3>{variantLabel}</h3>
          <DemoComponents>
            {buttonColors.map(({ label: colorLabel, value: color }) => (
              <Button
                key={`${variant}-${color}`}
                id={`demo-btn-${variant}-${color}`}
                variant={variant}
                color={color}
              >
                {colorLabel}
              </Button>
            ))}
          </DemoComponents>
        </Fragment>
      ))}
      <h2>Button sizes</h2>
      <DemoComponents>
        {buttonSizes.map(({ label, value }) => (
          <Button key={value} size={value} id={`demo-btn-${value}`}>
            {label}
          </Button>
        ))}
      </DemoComponents>
      <h2>Disabled buttons</h2>
      <DemoComponents>
        {buttonVariants.map(({ value: variant }) =>
          buttonColors.slice(0, 2).map(({ value: color }) => (
            <Button
              key={`${variant}-${color}`}
              id={`demo-btn-${variant}-${color}-disabled`}
              variant={variant}
              color={color}
              disabled
            >
              Disabled
            </Button>
          ))
        )}
      </DemoComponents>
      <h2>Buttons with icons</h2>
      <DemoComponents>
        {buttonIconPositions.map(({ label, value }) => (
          <Button
            key={value}
            id={`demo-btn-icon-${value}`}
            icon={<AddIcon />}
            iconPosition={value}
          >
            {label}
          </Button>
        ))}
      </DemoComponents>
    </>
  );
};

export default ButtonDemo;
