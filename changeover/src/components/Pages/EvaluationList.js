import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import '../../App.css' ;
import Box from '@mui/material/Box';
import './EvaluationList.css';

const EvaluationList = () => {
  const [evaluationList, setEvaluationList] = useState([]);
  const [editing, setEditing] = useState(-1); // Add a new state variable to keep track of which evaluation is being edited

  useEffect(() => {
    fetch("http://13.53.44.194:9000/sell")
     .then(async (response) => {
        const listResponse = await response.json();
        console.log(listResponse.evaluationList);
        setEvaluationList(listResponse.evaluationList);
      })
     .catch(error => console.error(error));
  }, []);

  const handleEdit = (index) => {
    setEditing(index); // Set the editing state variable to the index of the evaluation being edited
  };

  const onChange = (e) => {
    console.log(e.target.value)
  }

  const handleSave = (index) => {
    // Save the changes to the evaluation and reset the editing state variable
    const updatedEvaluationList = [...evaluationList];
    updatedEvaluationList[index] = {
     ...updatedEvaluationList[index],
      editing: false,
    };
    setEvaluationList(updatedEvaluationList);
    setEditing(-1);
  };

  return (
    <Grid container spacing={3} className="evaluation-container">
      {evaluationList.map((evaluation, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ marginTop: '5%' }} >
          <Paper elevation={3} className="evaluation-paper">
          <Typography variant="h6" className="evaluation-title">Evaluation {index + 1}</Typography>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%', marginTop: '10%'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
              label="Customer Name"
              value={evaluation.CustomerName}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
          <TextField
              label="Phone Number"
              value={evaluation.PhoneNumber}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Email ID"
              value={evaluation.EmailID}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Address"
              value={evaluation.Address}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Age"
              value={evaluation.Age}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Category"
              value={evaluation.Category}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Price Negotiable"
              value={evaluation.PriceNegotiable}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Price Quoted"
              value={evaluation.PriceQuoted}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Product Description"
              value={evaluation.ProductDescription}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Product Name"
              value={evaluation.ProductName}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Size"
              value={evaluation.Size}
              fullWidth
              disabled={index!== editing} // Disable if not editing
              className="text-field"
              onChange={e => onChange(e)}
            />
            </div>
            </Box>
           
            <div>
              <Button
                variant="outlined"
                color="primary"
                className="edit-button"
                onClick={() => handleEdit(index)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className="edit-button"
                onClick={() => handleSave(index)}
              >
                Save
              </Button>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default EvaluationList;
