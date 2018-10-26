import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {NavLink} from "react-router-dom";
import Tema from "./Tema";


const theme = Tema;
const styles = {
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
        whiteSpace: 'nowrap',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        overflow:'visible',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        width: '100%',
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        color: theme.palette.secondary.main,
    },
    sublinhado: {
        textDecoration: 'none',
        color: 'black',
    },
};

class PrimarySearchAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    logout = () =>{
        localStorage.removeItem('user');
        localStorage.removeItem('id');
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        var loginButton;
        if (localStorage.getItem('user') !== null) {
            loginButton = <NavLink to={"/"} className={classes.sublinhado}  ><MenuItem onClick={this.logout.bind(this)}>Logout</MenuItem></NavLink>;
        } else {
            loginButton = <div><NavLink to={"/login"} className={classes.sublinhado}><MenuItem>Logar</MenuItem></NavLink>
                <NavLink to={"/cadastrar"} className={classes.sublinhado}><MenuItem>Cadastrar</MenuItem></NavLink></div>;

        }
        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} aria-label="Menu" color={"secondary"}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" className={classes.grow} color={"secondary"}>
                                Silver Shop
                            </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon  color={"secondary"}/>
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    color={"secondary"}
                                />
                            </div>
                            <div className={classes.grow} />
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color={"secondary"}
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}

                                    onClose={this.handleClose}
                                >
                                    {loginButton}
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        );
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);