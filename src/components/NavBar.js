import CartWidget from "./CartWidget";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link, NavLink} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { cartContext } from "./CartContext";
import { useContext } from 'react';

const pages = [{ name: "Energizantes", url: "Energizantes" }, { name: "Bebidas s/ alcohol", url: "analcoholicas" }, { name: "Bebidas con alcohol", url: "Bebidas con alcohol" }];
const settings = ['Mi perfil', 'Mis compras', 'Salir'];

const NavBar = () => {
    const useCartContext = useContext(cartContext);
    const { cart } = useCartContext;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar id="navbar" position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">
                            <img id="Mars attack" src="https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/173/564/original/WhatsApp_Image_2020-09-26_at_8.25.30_PM.jpeg?1601225431" alt="Mars attack" />
                        </Link>
                    </Typography>

                    <Box justifyContent="flex-start" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <NavLink className="navLink" to={/bebidas/ + page.url}>{page.name}</NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to="/">
                            <img id="mars" src="https://i.pinimg.com/originals/48/a7/7e/48a77eeb2eaefbf1f1eefccb4f042678.png" alt="mars" />
                        </Link>
                    </Typography>

                    <NavLink className="navIcon" to="/">
                        <HomeOutlinedIcon />
                    </NavLink>

                    {{cart}.length === 0 || <NavLink className="navIcon" to="/cart/"><CartWidget /></NavLink>}

                    <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button id="navButton"
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                <NavLink to={/bebidas/ + page.url}>{page.name}</NavLink>
                            </Button>
                        ))}
                    </Box>

                    <Box className="settingsNav" sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton id="userMenu" className="dropShadow" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Rodrigo Ibañez" src="https://i.pinimg.com/originals/48/a7/7e/48a77eeb2eaefbf1f1eefccb4f042678.png" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;