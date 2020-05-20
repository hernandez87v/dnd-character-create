import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 38;
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    opacity: 0.9,
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function SimpleModal(props) {
  let dice = props.damage[2]
  console.log('dice',dice)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
let random = Math.floor(Math.random() * 20 + 1)
  const body = 
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Attack Roll</h2>
      <p id="simple-modal-description">
        Your attack roll is ({random}) + Proficiency Bonus ({5}) = {random + 5} 
      </p>
      <p id="simple-modal-description">
        Does a {random + 5} hit? (Ask Dungeon Master) 
      </p>
    </div>

let random2 = Math.floor(Math.random() * dice + 1)
  const body2 = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Damage Roll</h2>
      <p id="simple-modal-description">
        {/* + (props.strength - 10)/2 */}
        Your D{dice} roll was {random2} + Strength Bonus {Math.floor((props.strength - 10) / 2)} = Total Damage {random2 + Math.floor((props.strength - 10) / 2)}
      
      </p>
    </div>
  );
  if (props.true) {
    return (
      <div>
        <Avatar
          type="button"
          variant="square"
          Style="cursor:pointer;"
          src="https://img.icons8.com/windows/96/000000/dice-cubes.png"
          onClick={handleOpen}
        />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Avatar
          type="button"
          Style="cursor:pointer; "
          src="https://img.icons8.com/small/24/000000/battle.png"
          onClick={handleOpen}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body2}
        </Modal>
      </div>
    );
  }
}
