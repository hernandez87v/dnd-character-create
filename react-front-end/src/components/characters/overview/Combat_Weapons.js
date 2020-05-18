import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Popup from './pop-up';

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

function createData(name, properties, damage) {
  return { name, properties, damage };
}

const rows = [
  createData('Crossbow', '+5', '1d8 piercing'),
  createData('Longbow', '+5', '1d8 piercing'),
];
let rows2 = [];
export default function CombatWeapons(props) {
  const classes = useStyles();

  const getWeapons = () => {
    axios
      .get(`/api/item/weapon/${props.characterObject.id}`)
      .then((response) => {
        rows2 = response;
      });
    // .catch((error) => setState({ error }));
  };

  useEffect(() => {
    // getWeapons();
  }, []);

  // const getWeapons = () => {
  //   axios
  //     .get(`/api/item/weapon/${props.characterObject.id}`)
  //     .then((response) => {
  //       // console.log(response);
  //       rows2 = response;
  //       // console.log(rows2);
  //     });
  //   // .catch((error) => setState({ error }));
  // };

  // useEffect(() => {
  //   getWeapons();
  // }, []);

  return (
    <React.Fragment>
      {rows2}
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
                <StyledTableCell align="justify">ATK Bonus</StyledTableCell>
                <StyledTableCell align="justify">Damage</StyledTableCell>
                <StyledTableCell align="justify">Attack Roll</StyledTableCell>
                <StyledTableCell align="justify">Damage Roll</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="justify" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    {row.properties}
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    {row.damage}
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    <Popup
                      strength={props.characterObject.strength}
                      true={true}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    <Popup
                      strength={props.characterObject.strength}
                      true={false}
                    />
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
