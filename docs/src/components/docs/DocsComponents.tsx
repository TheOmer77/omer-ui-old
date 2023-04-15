import { ReactNode } from 'react';

const DocsComponents = ({ children }: { children: ReactNode }) => {
  return <div className='docs-components'>{children}</div>;
};

export default DocsComponents;
