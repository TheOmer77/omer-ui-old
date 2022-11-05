import DemoControl, { DemoControlProps } from './DemoControl';

import classes from './index.module.css';

const DemoControls = ({ controls }: { controls: DemoControlProps[] }) => {
  return (
    <div className={classes['demo-controls']}>
      {controls.map(control => (
        <DemoControl
          key={control.id}
          id={control.id}
          label={control.label}
          component={control.component}
        />
      ))}
    </div>
  );
};

export default DemoControls;
