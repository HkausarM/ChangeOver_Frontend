import React from 'react'
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import '../../App.css'

const Cart = ({ cartItems }) => {
console.log(cartItems)
    const handleSubmit = () => {
       if(localStorage.getItem('isLoggedIn') && cartItems){
       alert('Order placed successfully')
       window.location.reload()
       } else if (localStorage.getItem('isLoggedIn') || cartItems ==[]) {
        alert('Please add tems to the cart')
       }
    }
  return (
    <div className='cart'>
           {cartItems.map((item, index) => (
          <Card key={index} style={{ marginBottom: '10px' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>{item}</Typography>
             </CardContent>
           </Card>
        ))}
        <Button className="submit-btn" sx={{ mt: 1, mr: 1 }} type="submit" onClick={handleSubmit} variant="outlined">
           Place Order
       </Button>
       {!cartItems && <p>Cart is empty!!!</p>}
    </div>
  );
};

export default Cart;
