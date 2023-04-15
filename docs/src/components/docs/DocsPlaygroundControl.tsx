import { ReactNode } from 'react';

export interface DocsPlaygroundControlProps {
  id: string;
  label: string;
  component: ReactNode;
}

const DocsPlaygroundControl = ({
  id,
  label,
  component,
}: DocsPlaygroundControlProps) => {
  return (
    <>
      <div id={`${id}-label`} className='docs-playground-controls-label'>
        {label}
      </div>
      <div id={`${id}`} className='docs-playground-controls-row'>
        {component}
      </div>
    </>
  );
};

export default DocsPlaygroundControl;
