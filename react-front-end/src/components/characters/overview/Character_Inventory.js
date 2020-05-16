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

function createData(name, weight, quantity, cost) {
  return { name, weight, quantity, cost };
}

const rows = [
  createData('Breastplate', '20lb', 1, 400),
  createData('Potion of Acid Resistance', '-', 1, '-'),
  createData('Wand of Secrets', '-', '-', '-'),
  createData('Antimatter Rifle', '10lb', 1, '-'),
  createData('Wand of Enemy Detection', '-', '-', '-'),
];

export default function CharacterInventory() {
  const classes = useStyles();

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
                <StyledTableCell align="right">Weight</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Cost&nbsp;(GP)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.weight}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.quantity}
                  </StyledTableCell>
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
// <form className={classes.root} noValidate autoComplete="off">
//   <div>
//     <TextField
//       id="outlined-helperText"
//       label="Platinum"
//       defaultValue="50"
//       helperText="Some important text"
//       variant="outlined"
//     />
//     <TextField
//       id="outlined-helperText"
//       label="Gold"
//       defaultValue="6"
//       helperText="Some important text"
//       variant="outlined"
//     />
//     <TextField
//       id="outlined-helperText"
//       label="Electrum"
//       defaultValue="1"
//       helperText="Some important text"
//       variant="outlined"
//     />
//     <TextField
//       id="outlined-helperText"
//       label="Silver"
//       defaultValue="22"
//       helperText="Some important text"
//       variant="outlined"
//     />
//     <TextField
//       id="outlined-helperText"
//       label="Copper"
//       defaultValue="120"
//       helperText="Some important text"
//       variant="outlined"
//     />
//   </div>
// </form>
