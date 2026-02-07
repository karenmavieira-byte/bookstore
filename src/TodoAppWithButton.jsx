// TodoAppWithButton.jsx
import ReactiveButton from 'reactive-button';
import { useState } from 'react';

function TodoAppWithButton() {
  const [state, setState] = useState('idle');
  
  const handleClick = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
      setTimeout(() => setState('idle'), 1000);
    }, 2000);
  };

  return (
    <div>
      <h2>Add New Todo</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input placeholder="Description" style={{ padding: '8px', width: '200px' }} />
        <input placeholder="Date" style={{ padding: '8px', width: '100px' }} />
        <input placeholder="Status" style={{ padding: '8px', width: '100px' }} />
        
        <ReactiveButton
          onClick={handleClick}
          color="blue"
          idleText="Add"
          loadingText="Adding..."
          successText="Done!"
          buttonState={state}
        />
      </div>

      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Go to coffee</td>
            <td>3.8.2020</td>
            <td>Low</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoAppWithButton;