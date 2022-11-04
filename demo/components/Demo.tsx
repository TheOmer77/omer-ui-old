import { ReactNode } from 'react';

import { DemoControlProps } from './DemoControl';
import DemoControls from './DemoControls';

import classes from '../styles/index.module.css';
import DemoComponents from './DemoComponents';

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
