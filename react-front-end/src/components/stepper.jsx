import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select Class,Background and race', 'Select your stats', 'Select your proficiencies', 'Select your equipment','Select your name'];
}

function getStepContent(stepIndex,props) {
  switch (stepIndex) {
    case 0:
      return props.pages[0];
    case 1:
      return props.pages[1];
    case 2:
      return props.pages[2];
    case 3:
      return props.pages[3];
    case 4:
      return props.pages[4];
    case 5:
      return props.pages[5];
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const submitCharacter = () => {
    axios
      .post(`/api/character/submit`, {
        raceState: props.raceState,
        characterState: props.characterState,

      })
      .then (
      window.location = `/ShowCharacterByUser`)
      // .catch((error) => setState({ error })); 
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep,props)}</div>
            <div>
            <Grid container justify="center">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>

                {activeStep === steps.length - 1 ? 
                <Button variant="contained" color="primary" onClick={submitCharacter}>Finish</Button> : 
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>}
              </Grid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}