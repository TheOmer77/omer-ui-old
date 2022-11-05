import { ReactNode } from 'react';

import { DemoControlProps } from './DemoControl';
import DemoControls from './DemoControls';
import DemoComponents from './DemoComponents';

import classes from './index.module.css';

export interface DemoProps {
  controls: DemoControlProps[];
  children: ReactNode;
}

const Demo = ({ controls, children }: DemoProps) => {
  return (
    <div className={classes.demo}>
      <DemoControls controls={controls} />
      <DemoComponents>{children}</DemoComponents>
    </div>
  );
};

export default Demo;
