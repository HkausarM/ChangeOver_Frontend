import React, { useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions, IconButton } from "@mui/material";
import SellItemPage from "../Pages/SellItem"
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import EvaluationList from "../Pages/EvaluationList";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Pages/Cart';
// import {Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
export default function HomePage() {
    const [datas, setData] = useState();
    const [title, setTitle] = useState();
    const [page, setPage] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer visibility
    const [cartItems, setCartItems] = useState([]);


    const navigate = useNavigate();
    const drawerWidth = 240;

    const navItems = ['Buy'];
    const sideNavItems = ['All Products', 'men', 'women', 'kids'];

    const handleOption = (i, cartItems) => {
        setPage(i)
        if (i === 'Login') {
            navigate('/Login')
        }
        if (i === 'Logout') {
            localStorage.clear()
            window.location.reload()
        }
        if (i === 'Sell') {
            setPage('Sell')
        }
        if (i === 'EvaluationList') {
            setPage('EvaluationList')
        }
        if (i === 'Cart') {
            console.log(cartItems, cartItems)
            setPage('Cart')
        }
    }

    const handleCartItems = (cartItems) => {
        setCartItems(prevCartItems => [...prevCartItems, cartItems]);
    }

    const handleSideMenuOption = (i) => {
        if (i !== 'On Sale' && i !== 'All Products') {
            fetch('http://13.53.44.194:9000/category/' + i)
                .then(async (response) => {
                    const productResponse = await response.json()
                    setData(productResponse.categoryProducts)
                    setTitle(i)
                })
                .catch(error => console.error(error));
        } else if (i === 'On Sale') {
            fetch('http://13.53.44.194:9000/home')
                .then(async (response) => {
                    const productResponse = await response.json()
                    setData(productResponse.saleProducts)
                })
                .catch(error => console.error(error));
            setTitle(i)
        }
        else if (i === 'All Products') {
            fetch('http://13.53.44.194:9000/home')
                .then(async (response) => {
                    const productResponse = await response.json()
                    setData(productResponse.allProducts)
                    setTitle('All Products')
                })
                .catch(error => console.error(error));
        }
    }

    useEffect(() => {
        fetch('http://13.53.44.194:9000/home')
            .then(async (response) => {
                const productResponse = await response.json()
                setData(productResponse.allProducts)
                setTitle('All Products')
                setPage('Buy')
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#9c27b0" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        edge="start"
                        sx={{ mr: 2, display: { md: 'none' } }} // Hide the hamburger icon on medium and up screens
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        ChangeOver
                    </Typography>
                    {localStorage.getItem("isLoggedIn") && localStorage.getItem('customerType') !== "admin" && (
                        <IconButton color="inherit" aria-label="cart" onClick={event => handleOption('Cart')}>
                            <ShoppingCartIcon />
                        </IconButton>
                    )}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Display nav items on medium and up screens */}
                        {navItems.map((item) => (
                            <Button className="topnav-buttons" key={item} sx={{ color: '#fff' }} onClick={event => handleOption(item)}>
                                {item}
                            </Button>
                        ))}
                        {localStorage.getItem("isLoggedIn") && localStorage.getItem('customerType') === "admin" && (
                            <Button
                                className="topnav-buttons"
                                key={"EvaluationList"}
                                sx={{ color: '#fff' }}
                                onClick={event => handleOption("EvaluationList")}
                            >
                                {"EvaluationList"}
                            </Button>
                        )}

                        {localStorage.getItem("isLoggedIn") && localStorage.getItem('customerType') !== "admin" && (
                            <Button
                                className="topnav-buttons"
                                key={"Sell"}
                                sx={{ color: '#fff' }}
                                onClick={event => handleOption("Sell")}
                            >
                                {"Sell"}
                            </Button>
                        )}

                        {!localStorage.getItem("isLoggedIn") && (
                            <Button
                                className="topnav-buttons"
                                key={"Login"}
                                sx={{ color: '#fff' }}
                                onClick={event => handleOption("Login")}
                            >
                                {"LogIn"}
                            </Button>
                        )}

                        {localStorage.getItem("isLoggedIn") && (
                            <Button
                                className="topnav-buttons"
                                key={"Logout"}
                                sx={{ color: '#fff' }}
                                onClick={event => handleOption("Logout")}
                            >
                                {"Logout"}
                            </Button>
                        )}


                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: drawerWidth },
                }}
            >
                <Toolbar />
                <List>
                    {navItems.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={event => handleOption(text)}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                     {localStorage.getItem("isLoggedIn") && localStorage.getItem('customerType') === "admin" && (
                            <ListItem disablePadding>
                            <ListItemButton onClick={event => handleOption("EvaluationList")}>
                                <ListItemText primary={"EvaluationList"} />
                            </ListItemButton>
                        </ListItem>
                        )}

                        {localStorage.getItem("isLoggedIn") && localStorage.getItem('customerType') !== "admin" && (
                             <ListItem disablePadding>
                             <ListItemButton onClick={event => handleOption("Sell")}>
                                 <ListItemText primary={"Sell"} />
                             </ListItemButton>
                         </ListItem>
                        )}
                    {!localStorage.getItem("isLoggedIn") && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={event => handleOption("Login")}>
                                <ListItemText primary={"Login"} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {localStorage.getItem("isLoggedIn") && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={event => handleOption("Logout")}>
                                <ListItemText primary={"Logout"} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Drawer>
            {page === ('Buy' || '') && <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {sideNavItems.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton className="buttons" onClick={event => handleSideMenuOption(text)}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>}
            {page === ('Buy' || '') &&
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <div className='home-title'>
                        <Typography variant="h6" sx={{ marginBottom: 3, marginLeft: 4 }}>{title}
                        </Typography>
                        {title === 'All Products' && <div className='select'>
                        </div>
                        }
                    </div>
                    <div className="cards-shower">
                        {datas ? datas.map((product) => (
                            <div className="cards-details">
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        component="img"
                                        alt={product.ProductName}
                                        height="140"
                                        image={'http://13.53.44.194:9000' + product.ImgLink}
                                    />
                                    <CardContent>
                                        <Typography className='prod-name' gutterBottom variant="h6" component="div">
                                            {product.ProductName}
                                        </Typography>
                                        <div className="price-discount">
                                            <Typography gutterBottom variant="h6" component="div">
                                                {'€' + product.Price}
                                            </Typography>
                                            <div className='badge'>
                                                {product.Discount ? <Badge sx={{
                                                    "& .MuiBadge-badge": {
                                                        color: "white",
                                                        backgroundColor: "red"
                                                    }
                                                }} badgeContent={'%' + product.Discount} /> : <></>}
                                            </div>
                                        </div>
                                    </CardContent>
                                    {localStorage.getItem("isLoggedIn") && localStorage.getItem('customerType') !== "admin" && (
                        <CardActions>
                        <Button className="topnav-buttons" size="small" onClick={() => { handleCartItems(product.ProductName) }}>Add To Cart</Button>
                    </CardActions>
                    )}
                                </Card>
                            </div>
                        )) : <div>Loading</div>}
                    </div>

                </Box>
            }
            {page === 'Sell' && <Box>
                <SellItemPage />
            </Box>}
            {page === 'EvaluationList' && <Box>
                <EvaluationList />
            </Box>}
            {page === 'Cart' && <Box>
                <Cart cartItems={cartItems} />
            </Box>}
        </Box>
    );
}
