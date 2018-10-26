import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tema from './Tema';
import axios from "axios";

const theme = Tema;

const styles = {
    card: {
        maxWidth: 300,
        backgroundColor: theme.palette.white.main,
    },
    imagem:{
        display: 'block',
        padding:16,
        maxWidth:200,
        height: 200,
    }
};

class MediaCard extends React.Component {
    state = {
        id: 0,
        nome: '',
        preco:'',
        img:'',
    };
    constructor(props){
        super(props)

        axios.get('http://localhost:61353/api/Produtos/',
            { id: this.state.id, nome: this.state.nome, preco: this.state.preco, img: this.state.img},)
            .then(res => {
                try{
                    localStorage.setItem('Nome',res.data[0].Nome);
                    localStorage.setItem('Id',res.data[0].Id);
                    localStorage.setItem('Preco',res.data[0].Preco);
                    localStorage.setItem('Img',res.data[0].Img);
                }
                catch (e) {
                }

            })
    }
    render(){
        var info,img;
        if (localStorage.getItem('Nome') !== null) {
            info = <Typography >
                <h1>{localStorage.getItem('Nome')}</h1>
                <h3>R$ {localStorage.getItem('Preco')}</h3>
            </Typography>;
            img = <img src={require('../Img/'+localStorage.getItem('Nome')+'.jpg')} alt={'aaa'} className={this.props.classes.imagem}/>;
        }
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Card className={classes.card}>
                    <CardActionArea>
                        {img}
                        <CardContent>
                            {info}
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary">
                            Share
                        </Button>
                        <Button size="small" color="secondary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);