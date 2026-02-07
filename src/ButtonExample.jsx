// ButtonExample.jsx
import ReactiveButton from 'reactive-button';
import { useState } from 'react';

function ButtonExample() {
  const [state, setState] = useState('idle');

  const handleClick = () => {
    setState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setState('success');
      setTimeout(() => setState('idle'), 2000);
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', margin: '20px 0', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Reactive Button Component Example</h3>
      <p>This button shows different states: idle → loading → success</p>
      
      <ReactiveButton
        onClick={handleClick}
        color="primary"
        idleText="Add New Todo"
        loadingText="Adding..."
        successText="Added Successfully!"
        errorText="Error"
        type="button"
        buttonState={state}
        style={{ 
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px'
        }}
      />
      
      <p style={{ marginTop: '20px', color: '#666' }}>
        Button state: <strong>{state}</strong>
      </p>
    </div>
  );
}

export default ButtonExample;