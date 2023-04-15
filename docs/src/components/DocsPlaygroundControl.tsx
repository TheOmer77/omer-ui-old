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
      <div id={`${id}-label`} className='demo-controls-label'>
        {label}
      </div>
      <div id={`${id}`} className='demo-controls-row'>
        {component}
      </div>
    </>
  );
};

export default DocsPlaygroundControl;
