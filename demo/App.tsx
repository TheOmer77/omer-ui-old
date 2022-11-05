import { useState } from 'react';

// Components
import Button, {
  ButtonColor,
  ButtonIconPosition,
  ButtonVariant,
} from 'components/Button';

// Icons
import { ReactComponent as AddIcon } from './assets/icons/add.svg';

// CSS
import '@fontsource/figtree/variable.css';
import 'styles/index.css';
import './styles/theme.css';
import classes from './styles/index.module.css';
import Demo from './components/Demo';

const buttonsDemo: [ButtonVariant, ButtonColor][] = [
  ['tonal', 'neutral'],
  ['tonal', 'primary'],
  ['filled', 'neutral'],
  ['filled', 'primary'],
];

const App = () => {
  const [buttonIcon, setButtonIcon] = useState<ButtonIconPosition | false>(
    false
  );

  return (
    <Demo
      controls={[
        {
          id: 'icon',
          label: 'Button icon',
          component: (
            <>
              <Button
                color={buttonIcon === false ? 'primary' : 'neutral'}
                onClick={() => setButtonIcon(false)}
              >
                None
              </Button>
              <Button
                color={buttonIcon === 'start' ? 'primary' : 'neutral'}
                onClick={() => setButtonIcon('start')}
              >
                Start
              </Button>
              <Button
                color={buttonIcon === 'end' ? 'primary' : 'neutral'}
                onClick={() => setButtonIcon('end')}
              >
                End
              </Button>
              <Button
                color={buttonIcon === 'top' ? 'primary' : 'neutral'}
                onClick={() => setButtonIcon('top')}
              >
                Top
              </Button>
              <Button
                color={buttonIcon === 'bottom' ? 'primary' : 'neutral'}
                onClick={() => setButtonIcon('bottom')}
              >
                Bottom
              </Button>
            </>
          ),
        },
      ]}
    >
      {buttonsDemo.map(([variant, color]) => (
        <div key={`${variant}-${color}`} className={classes['demo-column']}>
          <Button
            variant={variant}
            color={color}
            size='small'
            icon={buttonIcon && <AddIcon />}
            {...(buttonIcon ? { iconPosition: buttonIcon } : {})}
          >
            Button
          </Button>
          <Button
            variant={variant}
            color={color}
            size='medium'
            icon={buttonIcon && <AddIcon />}
            {...(buttonIcon ? { iconPosition: buttonIcon } : {})}
          >
            Button
          </Button>
          <Button
            variant={variant}
            color={color}
            size='large'
            icon={buttonIcon && <AddIcon />}
            {...(buttonIcon ? { iconPosition: buttonIcon } : {})}
          >
            Button
          </Button>
          <Button
            variant={variant}
            color={color}
            size='small'
            icon={buttonIcon && <AddIcon />}
            {...(buttonIcon ? { iconPosition: buttonIcon } : {})}
            disabled
          >
            Button
          </Button>
          <Button
            variant={variant}
            color={color}
            size='medium'
            icon={buttonIcon && <AddIcon />}
            {...(buttonIcon ? { iconPosition: buttonIcon } : {})}
            disabled
          >
            Button
          </Button>
          <Button
            variant={variant}
            color={color}
            size='large'
            icon={buttonIcon && <AddIcon />}
            {...(buttonIcon ? { iconPosition: buttonIcon } : {})}
            disabled
          >
            Button
          </Button>
        </div>
      ))}
    </Demo>
  );
};

export default App;
