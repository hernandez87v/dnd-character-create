import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      flexGrow: 1,
    },
  },
  table: {
    minWidth: 700,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

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

export default function CharacterDetailsNotes() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={8}>
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
                    <StyledTableCell align="right">
                      Cost&nbsp;(GP)
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.weight}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.cost}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={4}>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              centered
            >
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Notes"
                  multiline
                  rows={15}
                  defaultValue="...."
                  variant="outlined"
                />
              </div>
            </form>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
