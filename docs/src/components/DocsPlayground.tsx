import { ReactNode } from 'react';

import { DemoControlProps } from './DocsPlaygroundControl';
import DemoControls from './DocsPlaygroundControls';
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
