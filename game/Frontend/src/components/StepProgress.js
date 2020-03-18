import React,{useContext,useEffect,useRef}from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PostData from '../data/movieCard.json'
import StepButton from '@material-ui/core/StepButton';
import MediaControlCard from "./MediaControlCard"
import {CheckStatus} from '../context/CheckStatus'
import {StepIconTheme} from '../overrides/Theme'
import {ThemeProvider} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Poster from './Poster.js';

const useStyles1 = makeStyles(theme => ({
  paper: {
    opacity:0.2
  },
}));
const useStyles2 = makeStyles(theme => ({
  paper: {
    opacity:1
  },
}));
function Movie({movie}){ 
  let isNotcomplete
  const user = useContext(CheckStatus)
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  var currentLevel=user.currentLevel
  console.log(currentLevel,"getting from context api")
  if( movie.level===1 || movie.level<=currentLevel)
    {
      isNotcomplete=false
    }
    else
    {
      isNotcomplete=true
    }
  
  return (
    <div className = { isNotcomplete ? classes1.paper : classes2.paper }> 
        <Poster props={movie}/>
    </div>
  )
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 275,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    width:108,   
    height: 10,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    marginLeft: 23,
  },
})(StepConnector);

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:'50px',
    width: '100%',
  },
}));

export default function StepProgress() {
  const scrollToRef=(ref)=>{window.scrollTo(0,ref.current.offsetBottom)}
  const useMountEffect=(fun)=>useEffect(fun)
  useEffect(() => {
      scrollToRef(myRef)
  })
  const myRef=useRef(null)
  useMountEffect(()=>{scrollToRef(myRef)})
  const classes = useStyles();
  const user = useContext(CheckStatus)
  let activeStep=user.activeStep
  const [level,changeLevel] = React.useState(0)
  var cl=user.currentLevel
  let getMovie=<MediaControlCard props={level} />
  const getDetails = index => () => {
    changeLevel(index)   
  }

  return (
    <div className={classes.root}>
        <center>
          <ThemeProvider theme={StepIconTheme}>
            <Stepper ref={myRef} style={{background:'#0f171e'}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector/>}>
              {PostData.map((movie,index) => (
                <Step key={movie.level}>
                <StepButton onClick={getDetails(index)}> 
                <Movie movie={movie}/>
                </StepButton>
                </Step>
              ))}
            </Stepper> 
          </ThemeProvider>
          
        </center>
        <ListSubheader component="div" style={{WebkitTextFillColor:'#ffffff',fontSize:24,marginTop:18}}>Watch your movie</ListSubheader>
        {getMovie}
    </div>
  );
}