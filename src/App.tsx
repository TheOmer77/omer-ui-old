import Button, { ButtonColor, ButtonVariant } from './components/Button';

import classes from './App.module.css';

const buttonsDemo: [ButtonVariant, ButtonColor][] = [
  ['tonal', 'neutral'],
  ['tonal', 'primary'],
  ['filled', 'neutral'],
  ['filled', 'primary'],
];

const App = () => (
  <div>
    <div className={classes['demo-row']}>
      {buttonsDemo.map(([variant, color]) => (
        <div key={`${variant}-${color}`} className={classes['demo-column']}>
          <Button variant={variant} color={color} size='small'>
            Button
          </Button>
          <Button variant={variant} color={color} size='medium'>
            Button
          </Button>
          <Button variant={variant} color={color} size='large'>
            Button
          </Button>
          <Button variant={variant} color={color} size='small' disabled>
            Button
          </Button>
          <Button variant={variant} color={color} size='medium' disabled>
            Button
          </Button>
          <Button variant={variant} color={color} size='large' disabled>
            Button
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default App;
