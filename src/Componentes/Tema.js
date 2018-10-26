import {createMuiTheme} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
    palette:{
        primary: {
            main:grey[300],
        },
        secondary:{
            main:'#546E7A',
        },
        white:{
            main:'#fff'
        }
    },
    shape:{
        borderRadius: 4,
    }
});

export default theme;