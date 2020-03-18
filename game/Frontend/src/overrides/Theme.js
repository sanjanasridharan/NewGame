import { createMuiTheme } from '@material-ui/core/styles';

export const StepIconTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root:{
        color:'white',
        '&$active':{
          color:'#f44336'
        },
        '&$completed':{
        color:'#f44336'
      }
      },
      text:{
        fill:'black',
        fontSize: 13,        
      }      
    },
  },
});
export const BadgeTheme = createMuiTheme({
  overrides: {
    MuiPaper:{
    root:{
      justifyContent:"center"
    }
    },
    MuiStepConnector: {
      root: {
        flex: '0 0 auto'
      },
      line: {
        display: 'block',
      },
      lineHorizontal: {
        borderTopStyle: 'solid',
        borderTopWidth: 0
      },
  },
}
});

export const LoginTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root:{
        color:'white'
       },
        
    },
  },
});