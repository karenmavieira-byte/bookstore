import { Tooltip, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function Todolist() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* JUST "Todolist" heading - NO "Home" */}
      <h3 style={{ marginBottom: '20px' }}>Todolist</h3>
      
      {/* Table */}
      <div style={{ 
        width: '100%',
        border: '1px solid #ccc'
      }}>
        {/* Table Header */}
        <div style={{ 
          display: 'flex',
          borderBottom: '2px solid #000',
          padding: '10px',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{ flex: 2, fontWeight: 'bold' }}>Description</div>
          <div style={{ flex: 1, fontWeight: 'bold' }}>Date</div>
          <div style={{ flex: 1, fontWeight: 'bold' }}>ADD</div>
        </div>
        
        {/* Table Row */}
        <div style={{ display: 'flex', padding: '10px' }}>
          {/* Description */}
          <div style={{ flex: 2 }}>Go to coffee</div>
          
          {/* Date */}
          <div style={{ flex: 1 }}>1.1.2021</div>
          
          {/* ADD Column - TWO SEPARATE BUTTONS stacked */}
          <div style={{ flex: 1 }}>
            {/* DELETE button - first row in ADD column */}
            <div style={{ marginBottom: '10px' }}>
              <Tooltip title="Delete todo" arrow>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  fullWidth
                >
                  Delete
                </Button>
              </Tooltip>
            </div>
            
            {/* SAVE button - second row in ADD column */}
            <div>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                size="small"
                fullWidth
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;