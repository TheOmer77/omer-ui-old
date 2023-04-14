import { ReactNode } from 'react';

import classes from './index.module.css';

const DemoComponents = ({ children }: { children: ReactNode }) => {
  return <div className={classes['demo-components']}>{children}</div>;
};

export default DemoComponents;
