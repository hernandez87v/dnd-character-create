import React from 'react';
// import AbilityPointsAll from './AP_all';
// import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from 'axios';

// ROUTE 0 - THIS IS THE BEGINNING
// QUICKVIEW - INVENTORY - DETAILS NOTES
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(name, damage_dice, equipment_category, weight, cost) {
  return { name, damage_dice, equipment_category, weight, cost };
}

const rows = [
  createData('Breastplate', 'null', 'null', 400, 1),
  createData('Breastplate', 'null', 'null', 400, 1),
  createData('Breastplate', 'null', 'null', 400, 1),
  createData('Breastplate', 'null', 'null', 400, 1),
];

export default function CharacterInventory() {
  const classes = useStyles();

  const getItemsOwned = async () => {
    return await axios({
      url: '/api/character',
    });
  };

  (async () => {
    const itemsOwned = await getItemsOwned();
    console.log(itemsOwned.data);
  })();

  // make a query to the items_owned table where character id is equal to the current character, and you return all of the items_owned entries for that character_id

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">
                  Damage&nbsp;Dice
                </StyledTableCell>
                <StyledTableCell align="right">
                  Equipment&nbsp;Category
                </StyledTableCell>
                <StyledTableCell align="right">
                  Weight&nbsp;(LB)
                </StyledTableCell>
                <StyledTableCell align="right">Cost&nbsp;(GP)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.damage_dice}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.equipment_category}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.weight}</StyledTableCell>
                  <StyledTableCell align="right">{row.cost}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}
