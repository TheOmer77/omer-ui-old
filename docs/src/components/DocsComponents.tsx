import { ReactNode } from 'react';

const DocsComponents = ({ children }: { children: ReactNode }) => {
  return <div className='demo-components'>{children}</div>;
};

export default DocsComponents;
