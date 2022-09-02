import Button from './components/Button';

import classes from './App.module.css';

const App = () => (
  <div>
    <div className={classes['demo-row']}>
      <div className={classes['demo-column']}>
        <Button variant='tonal' size='small'>
          Button
        </Button>
        <Button variant='tonal' size='medium'>
          Button
        </Button>
        <Button variant='tonal' size='large'>
          Button
        </Button>
      </div>
      <div className={classes['demo-column']}>
        <Button variant='filled' size='small'>
          Button
        </Button>
        <Button variant='filled' size='medium'>
          Button
        </Button>
        <Button variant='filled' size='large'>
          Button
        </Button>
      </div>
    </div>
  </div>
);

export default App;
