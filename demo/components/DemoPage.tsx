import { ReactNode } from 'react';

import classes from './index.module.css';

export interface DemoPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

const DemoPage = ({ title, description, children }: DemoPageProps) => {
  return (
    <div>
      <h1 className={classes['demo-title']}>{title}</h1>
      <p className={classes['demo-description']}>{description}</p>
      {children}
    </div>
  );
};

export default DemoPage;
