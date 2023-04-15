import { ReactNode } from 'react';

const DemoComponents = ({ children }: { children: ReactNode }) => {
  return <div className='demo-components'>{children}</div>;
};

export default DemoComponents;
