import { ReactNode } from 'react';

import classes from './index.module.css';

export interface DemoControlProps {
  id: string;
  label: string;
  component: ReactNode;
}

const DemoControl = ({ id, label, component }: DemoControlProps) => {
  return (
    <>
      <div id={`${id}-label`} className={classes['demo-controls-label']}>
        {label}
      </div>
      <div id={`${id}`} className={classes['demo-controls-row']}>
        {component}
      </div>
    </>
  );
};

export default DemoControl;
