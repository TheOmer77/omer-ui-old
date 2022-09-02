import Button from './components/Button';

const App = () => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <Button variant='tonal' size='small'>
          Button
        </Button>
        <Button variant='tonal' size='medium'>
          Button
        </Button>
        <Button variant='tonal' size='large'>
          Button
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <Button variant='filled' size='small'>
          Button
        </Button>
        <Button variant='filled' size='medium'>
          Button
        </Button>
        <Button variant='filled' size='large'>
          Button
        </Button>
      </div>
    </div>
  </div>
);

export default App;
