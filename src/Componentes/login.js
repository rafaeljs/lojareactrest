import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button/Button";
import Arrowback from "@material-ui/icons/ArrowBack";
import axios from 'axios';
import {NavLink} from "react-router-dom";

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class login extends React.Component {
    state = {
        id: 0,
        usuario: '',
        senha:''
    };
    handleUserIDChange = event => {this.setState({ usuario: event.target.value })}
    handleFullNameChange = event => {this.setState({ senha: event.target.value })}

    handleSubmit = event => {
        event.preventDefault();

        axios.get('http://localhost:61353/api/Clientes/GetCliente/'+this.state.usuario,
            { id: this.state.id, usuario: this.state.usuario, senha: this.state.senha},)
            .then(res => {
                try{
                    if(this.state.senha === res.data[0].senha){
                        this.props.history.push('/');
                        localStorage.setItem('user',this.state.usuario);
                        localStorage.setItem('id',res.data[0].Id);
                    }
                    else{
                        alert("senha incorreta");
                    }
                }
                catch (e) {
                }
                
            })
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>

                        <Avatar className={classes.avatar}>
                            <LockIcon color={"secundary"} />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className={classes.form}
                              action={this.props.action}
                              method={this.props.method}
                              onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleUserIDChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleFullNameChange}
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign in
                            </Button>
                        </form>
                        <NavLink to={"/"}>
                            <Avatar className={classes.avatar}>
                                <Arrowback/>
                            </Avatar>
                        </NavLink>
                    </Paper>


                </main>
            </React.Fragment>
        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);