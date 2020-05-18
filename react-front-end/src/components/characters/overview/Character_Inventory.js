import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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

// function createData(name, damage_dice, equipment_category, weight, cost) {
//   return { name, damage_dice, equipment_category, weight, cost };
// }

// const rows = [
//   createData('Disguise Kit', '-', 'aint working if this shows', 3, 25),
//   createData('Horse, draft', '-', 'Mounts and Vehicles', '-', 50),
//   createData('Crowbar', '-', 'Adventuring Gear', 5, 2),
//   createData('Wand', '-', 'Adventuring Gear', 1, 10),
// ];

export default function CharacterInventory() {
  const classes = useStyles();
  const [data, setData] = useState({ items_owned: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/item');
      setData(result.data);
    };
    fetchData();
  }, []);

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
              {data.items_owned.map((row) => (
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
