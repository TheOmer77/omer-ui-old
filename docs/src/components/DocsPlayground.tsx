import { ReactNode } from 'react';

import DocsPlaygroundControls from './DocsPlaygroundControls';
import DocsComponents from './DocsComponents';
import type { DocsPlaygroundControlProps } from './DocsPlaygroundControl';

export interface DocsPlaygroundOption<Value, Options extends object = object> {
  label: string;
  value: Value;
  options?: Options;
}

export interface DocsPlaygroundProps {
  controls: DocsPlaygroundControlProps[];
  children: ReactNode;
}

const DocsPlayground = ({ controls, children }: DocsPlaygroundProps) => {
  return (
    <div className='demo'>
      <DocsPlaygroundControls controls={controls} />
      <DocsComponents>{children}</DocsComponents>
    </div>
  );
};

export default DocsPlayground;
