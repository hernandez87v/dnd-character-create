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

function createData(name, cost, damage, weight, properties) {
  return { name, cost, damage, weight, properties };
}

const rows = [
  createData(
    'Crossbow, light',
    '25gp',
    '1d8 piercing',
    5,
    'Ammunition (range 80/320), loading, two-handed'
  ),
  createData(
    'Longbow',
    '50gp',
    '1d8 piercing',
    2,
    'Ammunition (range 80/320), loading, two-handed'
  ),
  createData('Longsword', '15gp', '1d8 slashing', 3, 'Versatile (1d10)'),
  createData('Rapier', '25gp', '1d8 piercing', 2, 'Finesse'),
  createData(
    'Sling',
    '1sp',
    '1d4 bludgeoning',
    '-',
    'Ammunition (range 30/120)'
  ),
];

export default function CombatWeapons() {
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
                <StyledTableCell>Weapons</StyledTableCell>
                <StyledTableCell align="right">Cost</StyledTableCell>
                <StyledTableCell align="right">Damage</StyledTableCell>
                <StyledTableCell align="right">
                  Weight&nbsp;(lb)
                </StyledTableCell>
                <StyledTableCell align="right">Properties</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.cost}</StyledTableCell>
                  <StyledTableCell align="right">{row.damage}</StyledTableCell>
                  <StyledTableCell align="right">{row.weight}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.properties}
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
