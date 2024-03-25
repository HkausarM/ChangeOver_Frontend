// // import React, { useEffect } from 'react';

// // export default function EvaluationList() {
// //     useEffect(() => {
// //         fetch("http://localhost:9000/sell")
// //             .then(async (response) => {
// //                 const listResponse = await response.json()
// //                 console.log(listResponse)
// //             })
// //             .catch(error => console.error(error));
// //     }, []);
// //     return(
// //         <p>List</p>
// //     )
// // }

// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
// import "./Pages.css"

// const EvaluationList = () => {
//     const [evaluationList, setEvaluationList] = useState([])
//     let listResponse = []
//       useEffect(() => {
//         fetch("http://localhost:9000/sell")
//             .then(async (response) => {
//                 listResponse = await response.json()
//                 setEvaluationList(listResponse.evaluationList)
//             })
//             .catch(error => console.error(error));
//     }, []); 


//   const handleEdit = (index) => {
//     // Implement editing logic here
//     console.log(`Editing evaluation at index ${index}`);
//   };

//   const handleSubmit = (index) => {
//     // Implement submit logic here
//     console.log(`Submitting changes for evaluation at index ${index}`);
//   };
//   return (
//     <Grid container spacing={2}>
//       {evaluationList.map((evaluation, index) => (
//         <Grid item xs={12} key={index}>
//           <Paper elevation={3} style={{ padding: 20 }}>
//             <Typography variant="h6">Evaluation {index + 1}</Typography>
//             <TextField
//               label="Customer Name"
//               value={evaluation.CustomerName}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Phone Number"
//               value={evaluation.PhoneNumber}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Email ID"
//               value={evaluation.EmailID}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Address"
//               value={evaluation.Address}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Age"
//               value={evaluation.Age}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Category"
//               value={evaluation.Category}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Price Negotiable"
//               value={evaluation.PriceNegotiable}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Price Quoted"
//               value={evaluation.PriceQuoted}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Product Description"
//               value={evaluation.ProductDescription}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Product Name"
//               value={evaluation.ProductName}
//               fullWidth
//               disabled
//             />
//             <TextField
//               label="Size"
//               value={evaluation.Size}
//               fullWidth
//               disabled
//             />
//             <Button
//               variant="outlined"
//               color="primary"
//               style={{ marginRight: 10 }}
//               onClick={() => handleEdit(index)}
//             >
//               Edit
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleSubmit(index)}
//             >
//               Submit
//             </Button>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default EvaluationList;

import React, { useState , useEffect} from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import './EvaluationList.css'; // Importing CSS file

const EvaluationList = () => {
    const [evaluationList, setEvaluationList] = useState([])
    let listResponse = []
      useEffect(() => {
        fetch("http://13.53.44.194:9000/sell")
            .then(async (response) => {
                listResponse = await response.json()
                console.log(listResponse.evaluationList)
                setEvaluationList(listResponse.evaluationList)
            })
            .catch(error => console.error(error));
    }, []); 

  const handleEdit = (index) => {
    // Implement editing logic here
    console.log(`Editing evaluation at index ${index}`);
    // You can set the editing flag for the respective evaluation item if needed
  };

  const handleSave = (index) => {
    // Implement save logic here
    console.log(`Saving changes for evaluation at index ${index}`);
    // You can update the state or perform other operations based on the changes
  };

  return (
    <Grid container spacing={2} className="evaluation-container">
      {evaluationList.map((evaluation, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3} className="evaluation-paper">
            <Typography variant="h6" className="evaluation-title">Evaluation {index + 1}</Typography>
            <TextField
              label="Customer Name"
              value={evaluation.CustomerName}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Phone Number"
              value={evaluation.PhoneNumber}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Email ID"
              value={evaluation.EmailID}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Address"
              value={evaluation.Address}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Age"
              value={evaluation.Age}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Category"
              value={evaluation.Category}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Price Negotiable"
              value={evaluation.PriceNegotiable}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Price Quoted"
              value={evaluation.PriceQuoted}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Product Description"
              value={evaluation.ProductDescription}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Product Name"
              value={evaluation.ProductName}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <TextField
              label="Size"
              value={evaluation.Size}
              fullWidth
              disabled={!evaluation.editing} // Disable if not editing
              className="text-field"
            />
            <div className="button-group">
             
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

