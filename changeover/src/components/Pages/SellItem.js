import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { UrlProvider } from "../../providers/domainUrlProvider";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

let result = {}

export default function SellItemPage() {

    const categories = ['Men', 'Women', 'Kids'];
    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL']
    const [customerName, setCustomerName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmailId] = useState("")
    const [address, setAddress] = useState("")
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productSize, setProductSize] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productAge, setProductAge] = useState("")
    const [priceQuoted, setPriceQuoted] = useState("")
    const [priceNegotiable, setPriceNegotiable] = useState("")
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [isCustomerNameInvalid, setCustomerNameError] = useState(false);
    const [isPhoneNumberInvalid, setPhoneNumberError] = useState(false);
    const [isEmailIDInvalid, setEmailIDError] = useState(false);
    const [isAddressInvalid, setAddressError] = useState(false);
    const [isProductNameInvalid, setProductNameError] = useState(false);
    const [isproductDescription, setProductDescriptionError] = useState(false)
    const [isCategoryInvalid, setCategoryError] = useState(false);
    const [isSizeInvalid, setSizeError] = useState(false);
    const [isPriceNegotiableInvalid, setPriceNegotiableError] = useState(false);
    const [isAgeInvalid, setAgeError] = useState(false);
    const [isPriceQuotedInvalid, setPriceQuotedError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const sendSellItem = [];
        sendSellItem.push({
            "CustomerName": customerName ? customerName : setCustomerNameError(true),
            "PhoneNumber": phoneNumber ? phoneNumber : setPhoneNumberError(true),
            "EmailID": email ? email : setEmailIDError(true),
            "Address": address ? address : setAddressError(true),
            "ProductName": productName ? productName : setProductNameError(true),
            "ProductDescription": productDescription ? productDescription : setProductDescriptionError(true),
            "Size": productSize ? productSize : setSizeError(true),
            "Category": productCategory ? productCategory : setCategoryError(true),
            "PriceNegotiable": priceNegotiable ? priceNegotiable : setPriceNegotiableError(true),
            "Age": productAge ? productAge : setAgeError(true),
            "PriceQuoted": priceQuoted ? priceQuoted : setPriceQuotedError(true)
        })
        if (customerName && phoneNumber && email && address && productName && productDescription && productSize && productCategory && productAge && priceNegotiable && priceQuoted) {
            fetch("http://localhost:9000/sell", {
                method: 'POST',
                body: JSON.stringify(sendSellItem[0]),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async (response) => {
                const res = await response.json();
                console.log(res)
                if (res.acknowledged == true) {
                    setDialogOpen(true);
                }
            });
        }
    }

    const handleChange = (event) => {
        setPriceNegotiable(event.target.value)
        if (event.target.value != '') {
            setPriceNegotiableError(false)
        }
        else {
            setPriceNegotiableError(true)
        }
    };

    const handleClose = () => {
        setDialogOpen(false);
        window.location.reload(true);
    };

    return (
        <Box className="sell-item-page"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form autoComplete="off" onSubmit={handleSubmit}>
                <p>Give more details about the apparel you want to sell</p>
                <TextField
                    id="customer-name"
                    label="Customer Name"
                    type="input"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setCustomerName(e.target.value)
                        if (e.target.value != '') {
                            setCustomerNameError(false)
                        }
                        else {
                            setCustomerNameError(true)
                        }
                    }}
                    fullWidth
                    required
                    error={isCustomerNameInvalid}
                />
                <TextField
                    id="phone-number"
                    label="Phone Number"
                    type="telephone"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setPhoneNumber(e.target.value)
                        if (e.target.value != '') {
                            setPhoneNumberError(false)
                        }
                        else {
                            setPhoneNumberError(true)
                        }
                    }}
                    required
                    error={isPhoneNumberInvalid}
                />
                <TextField
                    id="emailid"
                    label="Email Id"
                    type="email"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setEmailId(e.target.value)
                        if (e.target.value != '') {
                            setEmailIDError(false)
                        }
                        else {
                            setEmailIDError(true)
                        }
                    }}
                    required
                    error={isEmailIDInvalid}
                />
                <TextField
                    id="address"
                    label="Address"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setAddress(e.target.value);
                        if (e.target.value != '') {
                            setAddressError(false)
                        }
                        else {
                            setAddressError(true)
                        }
                    }}
                    required
                    error={isAddressInvalid}
                />
                <TextField
                    id="product-name"
                    label="Product Name"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setProductName(e.target.value)
                        if (e.target.value != '') {
                            setProductNameError(false)
                        }
                        else {
                            setProductNameError(true)
                        }
                    }}
                    required
                    error={isProductNameInvalid}
                />
                <TextField
                    id="product-description"
                    label="Product Description"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setProductDescription(e.target.value)
                        if (e.target.value != '') {
                            setProductDescriptionError(false)
                        }
                        else {
                            setProductDescriptionError(true)
                        }
                    }}
                    required
                    error={isproductDescription}
                />
                <TextField
                    id="product-size"
                    select
                    required
                    defaultValue=""
                    label="Size"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    onChange={e => {
                        setProductSize(e.target.value)
                        if (e.target.value != '') {
                            setSizeError(false)
                        }
                        else {
                            setSizeError(true)
                        }
                    }}
                    error={isSizeInvalid}
                > {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                        {size}
                    </MenuItem>
                ))}
                </TextField>
                <TextField
                    id="product-category"
                    select
                    required
                    defaultValue=""
                    label="Category"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    error={isCategoryInvalid}
                    onChange={e => {
                        setProductCategory(e.target.value)
                        if (e.target.value != '') {
                            setCategoryError(false)
                        }
                        else {
                            setCategoryError(true)
                        }
                    }}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="product-age"
                    label="Product Age"
                    type="text"
                    variant="standard"
                    onChange={e => {
                        setProductAge(e.target.value)
                        if (e.target.value != '') {
                            setAgeError(false)
                        }
                        else {
                            setAgeError(true)
                        }
                    }
                    }
                    required
                    error={isAgeInvalid}
                />
                <TextField
                    id="price-quoted"
                    label="Price Quoted"
                    type="text"
                    variant="standard"
                    onChange={e => {
                        setPriceQuoted(e.target.value)
                        if (e.target.value != '') {
                            setPriceQuotedError(false)
                        }
                        else {
                            setPriceQuotedError(true)
                        }
                    }}
                    required
                    error={isPriceQuotedInvalid}
                />
                <br></br>
                <FormLabel id="demo-controlled-radio-buttons-group">Price Negotiable</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={priceNegotiable}
                    onChange={handleChange}
                    error={isPriceNegotiableInvalid}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <Button className="submit-btn" sx={{ mt: 1, mr: 1 }} type="submit" onClick={handleSubmit} variant="outlined">
                    Submit
                </Button>
                <Dialog
                    open={dialogOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {"Apparel submitted for reviewing successfully!"}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}
