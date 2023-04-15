import { ReactNode } from 'react';

import { DemoControlProps } from './DemoControl';
import DemoControls from './DemoControls';
import DemoComponents from './DemoComponents';

export interface DemoProps {
  controls: DemoControlProps[];
  children: ReactNode;
}

const DocsPlayground = ({ controls, children }: DemoProps) => {
  return (
    <div className='demo'>
      <DemoControls controls={controls} />
      <DemoComponents>{children}</DemoComponents>
    </div>
  );
};

export default DocsPlayground;
