import { ReactNode } from 'react';

export interface DemoControlProps {
  id: string;
  label: string;
  component: ReactNode;
}

const DemoControl = ({ id, label, component }: DemoControlProps) => {
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

export default DemoControl;
