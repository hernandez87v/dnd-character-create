import React from 'react';
import AbilityPointsAll from './AP_all';
import Avatar from './Character_Avatar';
import BasicInfo from './Character_Basic_info';

// ROUTE 4 - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > OVERVIEW > MAIN - Profile Card

export default function CharacterMain(props) {
  return (
    <div className="profile-card-outer">
      <div className="overview-main">
        <div className="overview-internal">
          <div className="img-info-cont">
            <div className="img-info-div">
              <Avatar avatar_url={props.characterObject.avatar_url} />
              <BasicInfo
                race={props.characterObject.race}
                character_class={props.characterObject.character_class}
                name={props.characterObject.name}
                level={props.characterObject.level}
                background={props.characterObject.background}
              />
            </div>
          </div>

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
    </div>
  );
}
