import React from 'react';
import AbilityPointsAll from './AP_all';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// ROUTE 4B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > OVERVIEW > SKILL-THROW
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6f0000',
    },
    secondary: {
      main: '#6f0000',
    },
  },
});

export default function CharacterSkillThrow(props) {
  return (
    <div className="overview-skill-throw">
      <div className="skill-throw-internal">
        <AbilityPointsAll
          constitution={props.characterObject.constitution}
          strength={props.characterObject.strength}
          dexterity={props.characterObject.dexterity}
          charisma={props.characterObject.charisma}
          wisdom={props.characterObject.wisdom}
          intelligence={props.characterObject.intelligence}
        />
      </div>
    </div>
  );
}
