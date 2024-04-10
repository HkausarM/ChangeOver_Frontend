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
import { Button, CardActions } from "@mui/material";
import SellItemPage from "../Pages/SellItem"
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import EvaluationList from "../Pages/EvaluationList";

export default function HomePage() {

    const [datas, setData] = useState();
    const [title, setTitle] = useState();
    const [page, setPage] = useState('');
    const navigate = useNavigate();
    const drawerWidth = 240;

    const navItems = ['Buy', 'Sell'];
    const sideNavItems = ['All Products', 'men', 'women', 'kids'];

    const handleOption = (i) => {
        setPage(i)
        if(i === 'Login'){
            navigate('/Login')
        }
        if(i === 'Logout'){
            localStorage.removeItem("isLoggedIn");
            window.location.reload()
        }
        if(i === 'EvaluationList'){
           setPage('EvaluationList')
        }
    }

    const handleSideMenuOption = (i) => {
        if (i !== 'On Sale' && i !== 'All Products') {
            fetch ('http://13.53.44.194:9000/category/' + i)
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

    const handleProductClick = (e) => {
        const prodName = e.target.alt
        setPage('ProductDetails')
    }

    useEffect(() => {
        fetch ('http://13.53.44.194:9000/home')
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
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , bgcolor: "#9c27b0" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ChangeOver
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button className="topnav-buttons" key={item} sx={{ color: '#fff' }} onClick={event => handleOption(item)}>
                                {item}
                         </Button>
                        ))}
                         { (localStorage.getItem("customerType") === "admin") && <Button className="topnav-buttons" key={"My List"} sx={{ color: '#fff' }} onClick={event => handleOption("EvaluationList")}>
                             {"Evaluation List"}
                         </Button>}
                         { (localStorage.getItem("isLoggedIn") === null) && <Button className="topnav-buttons" key={"Login"} sx={{ color: '#fff' }} onClick={event => handleOption("Login")}>
                             {"LogIn"}
                         </Button>}
                          { (localStorage.getItem("isLoggedIn") === "true") && <Button className="topnav-buttons" key={"Logout"} sx={{ color: '#fff' }} onClick={event => handleOption("Logout")}>
                             {"Logout"}
                         </Button>}
                    </Box>
                </Toolbar>
            </AppBar>
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
                            {/* <Filter handleCallBack={CallBack} /> */}
                        </div>
                        }
                    </div>
                    <div className="cards-shower">
                        {datas ? datas.map((product) => (
                            <div className="cards-details" onClick={handleProductClick}>
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        component="img"
                                        alt={product.ProductName}
                                        height="140"
                                        image={'http://13.53.44.194:9000'+ product.ImgLink}
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
                                    <CardActions>
                                        <Button className="topnav-buttons" size="small">Add To Cart</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        )) : <div>Loading</div>}
                    </div>
                </Box>}
                {page === 'Sell' && <Box>
                    <SellItemPage/>
                    </Box>}
               {page === 'EvaluationList' && <Box>
                <EvaluationList/>
                </Box>}
        </Box>
    );
}
