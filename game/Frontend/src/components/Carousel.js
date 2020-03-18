import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PetSemetary2019/80127f07-d2c3-4801-a6d1-92fecc188611._UR3000,600_SX1500_FMjpg_.jpg",
  },
  {
    imgPath: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Pagalpanti/3e6e1d36-b52b-429e-bb51-322b97eb4da9._UR3000,600_SX1500_FMjpg_.jpg",
  },
  {
    imgPath: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BigBrotherMalayalam/cc408176-43a1-4f85-9ca7-0cef6d65072e._UR3000,600_SX1500_FMjpg_.jpg",
  },
  {
    imgPath: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SareiluNeeravarum/95131dad-f522-4cb7-8d75-dee00bc7b3ee._UR3000,600_SX1500_FMjpg_.jpg"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    Width: 200,
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 5,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#0f171e',
  },
  img: {
    height: 400,
    display: 'flex',
    Width: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}/>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Carousel;