import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
// ROUTE 3B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > COMBAT > STATS - WEAPONS - SPELLS - DICE
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
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

function createData(name, level, school, casting_time, range, duration) {
  return { name, level, school, casting_time, range, duration };
}

const rows = [
  createData(
    'Acid Splash',
    'Cantrip',
    'Conjuration',
    '1 Action',
    '60ft.',
    'Instantaneous'
  ),
  createData(
    'Mage Hand',
    'Cantrip',
    'Conjuration',
    '1 Action',
    '30ft.',
    '1 Minute'
  ),
  createData(
    'Sacred Flame',
    'Cantrip',
    'Evocation',
    '1 Action',
    '60ft.',
    'Instantaneous'
  ),
  createData(
    'Divine Favor',
    'Evocation',
    'Conjuration',
    '1 Bonus Action',
    'Self',
    'Concentration, up to 1 minute'
  ),
  createData(
    'Expeditious Retreat',
    '1',
    'Transmutation',
    '1 Bonus Action',
    'Self',
    'Concentration, up to 10 minutes'
  ),
];

export default function CombatSpells() {
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
                <StyledTableCell>Spells</StyledTableCell>
                <StyledTableCell align="right">Level</StyledTableCell>
                <StyledTableCell align="right">School</StyledTableCell>
                <StyledTableCell align="right">
                  Casting&nbsp;Time
                </StyledTableCell>
                <StyledTableCell align="right">Range</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.level}</StyledTableCell>
                  <StyledTableCell align="right">{row.school}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.casting_time}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.range}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.duration}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}
