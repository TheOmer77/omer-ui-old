import DocsPlaygroundControl, {
  DocsPlaygroundControlProps,
} from './DocsPlaygroundControl';

const DocsPlaygroundControls = ({
  controls,
}: {
  controls: DocsPlaygroundControlProps[];
}) => {
  return (
    <div className='demo-controls'>
      {controls.map(control => (
        <DocsPlaygroundControl
          key={control.id}
          id={control.id}
          label={control.label}
          component={control.component}
        />
      ))}
    </div>
  );
};

export default DocsPlaygroundControls;
