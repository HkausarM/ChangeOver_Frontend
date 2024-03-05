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
import { UrlProvider } from "../../providers/domainUrlProvider";
import SellItemPage from "../Pages/SellItem"
// import BasicSelect from "../nav/Filter"
import AboutUsPage from '../Pages/AboutUs';
import Badge from '@mui/material/Badge';

export default function HomePage() {

    const [datas, setData] = useState();
    const [title, setTitle] = useState();
    const [page, setPage] = useState('');

    const drawerWidth = 240;

    const navItems = ['Buy', 'Sell', 'About Us'];
    const sideNavItems = ['All Products', 'Men', 'Women', 'Kids', 'On Sale'];

    const handleOption = (i) => {
        setPage(i)
    }

    const handleSideMenuOption = (i) => {
        if (i !== 'On Sale' && i !== 'All Products') {
            fetch(new UrlProvider().getDomainUrl() + '/category/' + i)
                .then(async (response) => {
                    const productResponse = await response.json()
                    setData(productResponse.categoryProducts)
                    setTitle(i)
                })
                .catch(error => console.error(error));
        } else if (i === 'On Sale') {
            fetch(new UrlProvider().getDomainUrl() + '/home')
                .then(async (response) => {
                    const productResponse = await response.json()
                    setData(productResponse.saleProducts)
                })
                .catch(error => console.error(error));
            setTitle(i)
        }
        else if (i === 'All Products') {
            fetch(new UrlProvider().getDomainUrl() + '/home')
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
        setPage('Buy')
        fetch(new UrlProvider().getDomainUrl() + '/home')
            .then(async (response) => {
                const productResponse = await response.json()
                setData(productResponse.allProducts)
                setTitle('All Products')
            })
            .catch(error => console.error(error));
    }, []);

    function CallBack(childData) {
        setData(childData.filterProducts)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
                        {/* {title === 'All Products' && <div className='select'>
                            <BasicSelect handleCallBack={CallBack} />
                        </div>
                        } */}
                    </div>
                    <div className="cards-shower">
                        {datas ? datas.map((product) => (
                            <div className="cards-details" onClick={handleProductClick}>
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        component="img"
                                        alt={product.ProductName}
                                        height="140"
                                        image={product.ImgLink}
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
                <Box>
        {(page === 'Sell') &&
          <SellItemPage />
        }
      </Box>
      <Box>
        {(page === 'About Us') &&
          <AboutUsPage />
        }
      </Box>
        </Box>
    );
}
