import { useState } from 'react';

// Components
import Button, { ButtonColor, ButtonVariant } from 'components/Button';

// Icons
import { ReactComponent as AddIcon } from './assets/icons/add.svg';
import { ReactComponent as ChevronRightIcon } from './assets/icons/chevron_right.svg';

// CSS
import '@fontsource/figtree/variable.css';
import 'styles/index.css';
import classes from './index.module.css';

const buttonsDemo: [ButtonVariant, ButtonColor][] = [
  ['tonal', 'neutral'],
  ['tonal', 'primary'],
  ['filled', 'neutral'],
  ['filled', 'primary'],
];

const DemoApp = () => {
  const [startIcon, setStartIcon] = useState(false),
    [endIcon, setEndIcon] = useState(false);

  return (
    <>
      <div className={classes['demo-row']}>
        {buttonsDemo.map(([variant, color]) => (
          <div key={`${variant}-${color}`} className={classes['demo-column']}>
            <Button
              variant={variant}
              color={color}
              size='small'
              startIcon={startIcon && <AddIcon />}
              endIcon={endIcon && <ChevronRightIcon />}
            >
              Button
            </Button>
            <Button
              variant={variant}
              color={color}
              size='medium'
              startIcon={startIcon && <AddIcon />}
              endIcon={endIcon && <ChevronRightIcon />}
            >
              Button
            </Button>
            <Button
              variant={variant}
              color={color}
              size='large'
              startIcon={startIcon && <AddIcon />}
              endIcon={endIcon && <ChevronRightIcon />}
            >
              Button
            </Button>
            <Button
              variant={variant}
              color={color}
              size='small'
              startIcon={startIcon && <AddIcon />}
              endIcon={endIcon && <ChevronRightIcon />}
              disabled
            >
              Button
            </Button>
            <Button
              variant={variant}
              color={color}
              size='medium'
              startIcon={startIcon && <AddIcon />}
              endIcon={endIcon && <ChevronRightIcon />}
              disabled
            >
              Button
            </Button>
            <Button
              variant={variant}
              color={color}
              size='large'
              startIcon={startIcon && <AddIcon />}
              endIcon={endIcon && <ChevronRightIcon />}
              disabled
            >
              Button
            </Button>
          </div>
        ))}
      </div>
      {/* TEMPORARY CONTROLS */}
      <div className={classes['margin-top']}>
        <div className={classes['demo-row']}>
          <input
            id='buttonsStartIcon'
            name='buttonsStartIcon'
            type='checkbox'
            checked={startIcon}
            onChange={e => setStartIcon(e.target.checked)}
          />
          <label htmlFor='buttonsStartIcon'>Start icon</label>
        </div>
        <div className={classes['demo-row']}>
          <input
            id='buttonsEndIcon'
            name='buttonsEndIcon'
            type='checkbox'
            checked={endIcon}
            onChange={e => setEndIcon(e.target.checked)}
          />
          <label htmlFor='buttonsEndIcon'>End icon</label>
        </div>
      </div>
    </>
  );
};

export default DemoApp;
