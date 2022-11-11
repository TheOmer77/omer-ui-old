import { Fragment, useState } from 'react';

// Components
import Button, {
  ButtonColor,
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
} from 'components/Button';
import Demo from '../components/Demo';
import DemoComponents from '../components/DemoComponents';

// Icons
import { ReactComponent as AddIcon } from '../assets/icons/add.svg';

const buttonColors: ButtonColor[] = ['neutral', 'primary', 'secondary'],
  buttonIconPositions: ButtonIconPosition[] = ['start', 'end'],
  buttonSizes: ButtonSize[] = ['small', 'medium', 'large'],
  buttonVariants: ButtonVariant[] = ['tonal', 'filled'];

const ButtonDemo = () => {
  const [color, setColor] = useState<ButtonColor>('neutral'),
    [icon, setIcon] = useState<ButtonIconPosition | false>(false),
    [size, setSize] = useState<ButtonSize>('medium'),
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
                {buttonColors.map(buttonColor => (
                  <Button
                    key={buttonColor}
                    color={color === buttonColor ? 'primary' : 'neutral'}
                    onClick={() => setColor(buttonColor)}
                  >
                    {`${buttonColor[0].toUpperCase()}${buttonColor.slice(1)}`}
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
                {buttonVariants.map(buttonVariant => (
                  <Button
                    key={buttonVariant}
                    color={variant === buttonVariant ? 'primary' : 'neutral'}
                    onClick={() => setVariant(buttonVariant)}
                  >
                    {`${buttonVariant[0].toUpperCase()}${buttonVariant.slice(
                      1
                    )}`}
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
                {buttonSizes.map(buttonSize => (
                  <Button
                    key={buttonSize}
                    color={size === buttonSize ? 'primary' : 'neutral'}
                    onClick={() => setSize(buttonSize)}
                  >
                    {`${buttonSize[0].toUpperCase()}${buttonSize.slice(1)}`}
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
                {([false, ...buttonIconPositions] as typeof icon[]).map(
                  buttonIconPos => (
                    <Button
                      key={buttonIconPos || 'none'}
                      color={icon === buttonIconPos ? 'primary' : 'neutral'}
                      onClick={() => setIcon(buttonIconPos)}
                    >
                      {buttonIconPos
                        ? `${buttonIconPos[0].toUpperCase()}${buttonIconPos.slice(
                            1
                          )}`
                        : 'None'}
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
      {buttonVariants.map(variant => (
        <Fragment key={variant}>
          <h3>{`${variant[0].toUpperCase()}${variant.slice(1)} button`}</h3>
          <DemoComponents>
            {buttonColors.map(color => (
              <Button
                key={`${variant}-${color}`}
                variant={variant}
                color={color}
              >
                {`${color[0].toUpperCase()}${color.slice(1)}`}
              </Button>
            ))}
          </DemoComponents>
        </Fragment>
      ))}
      <h2>Button sizes</h2>
      <DemoComponents>
        {buttonSizes.map(size => (
          <Button key={size} size={size}>
            {`${size[0].toUpperCase()}${size.slice(1)}`}
          </Button>
        ))}
      </DemoComponents>
      <h2>Disabled buttons</h2>
      <DemoComponents>
        {buttonVariants.map(variant =>
          buttonColors.map(color => (
            <Button
              key={`${variant}-${color}`}
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
        {buttonIconPositions.map(iconPosition => (
          <Button
            key={iconPosition}
            icon={<AddIcon />}
            iconPosition={iconPosition}
          >
            {`${iconPosition[0].toUpperCase()}${iconPosition.slice(1)}`}
          </Button>
        ))}
      </DemoComponents>
    </>
  );
};

export default ButtonDemo;
