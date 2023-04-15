import DemoControl, { DemoControlProps } from './DocsPlaygroundControl';

const DemoControls = ({ controls }: { controls: DemoControlProps[] }) => {
  return (
    <div className='demo-controls'>
      {controls.map(control => (
        <DemoControl
          key={control.id}
          id={control.id}
          label={control.label}
          component={control.component}
        />
      ))}
    </div>
  );
};

export default DemoControls;
