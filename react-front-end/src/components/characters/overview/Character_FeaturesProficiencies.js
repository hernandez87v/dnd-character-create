import React, { useState, useEffect } from 'react';
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
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

// ROUTE 4C - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > OVERVIEW > Features/Proficiencies

export default function CharacterFeaturesProficiencies(props) {
  const classes = useStyles();
  const [data, setData] = useState({
    languages: [],
    proficiencies: [],
    traits: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/character/features/${props.characterObject.id}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log('outside result: ', data);

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
                <StyledTableCell align="right">Languages</StyledTableCell>
                <StyledTableCell align="right">Proficiencies</StyledTableCell>
                <StyledTableCell align="right">Traits</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.languages.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {data.proficiencies.map((row) => (
                <StyledTableRow key={row.proficiencies}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {data.traits.map((row) => (
                <StyledTableRow key={row.traits}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
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

//   return (
//     <Box display="flex" alignItems="center" justifyContent="center">
//       {/* <h1>{data}</h1> */}
//       <ul>
//         {data.languages.map((item) => (
//           <li key={item.id} name={item.name}></li>
//         ))}
//       </ul>
//       <List>
//         <ListItem alignItems="center">
//           <ListItemAvatar>
//             <Avatar src="https://img.icons8.com/material/96/000000/armored-breastplate.png" />
//           </ListItemAvatar>
//           <ListItemText
//             primary="ARMOUR"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   component="span"
//                   variant="body2"
//                   className={classes.inline}
//                   color="textPrimary"
//                 >
//                   Light Armour
//                 </Typography>
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//         <Divider variant="inset" component="li" />
//         <ListItem alignItems="center">
//           <ListItemAvatar>
//             <Avatar
//               alt="Travis Howard"
//               src="https://img.icons8.com/material/96/000000/sword.png"
//             />
//           </ListItemAvatar>
//           <ListItemText
//             primary="WEAPONS"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   component="span"
//                   variant="body2"
//                   className={classes.inline}
//                   color="textPrimary"
//                 >
//                   Crossbow, Hand, Longsword, Rapier, Shortsword, Simple Weapons
//                 </Typography>
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//         <Divider variant="inset" component="li" />
//         <ListItem alignItems="center">
//           <ListItemAvatar>
//             <Avatar src="https://img.icons8.com/material/96/000000/toolbox--v1.png" />
//           </ListItemAvatar>
//           <ListItemText
//             primary="TOOLS"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   component="span"
//                   variant="body2"
//                   className={classes.inline}
//                   color="textPrimary"
//                 >
//                   Drum, Lyre, Shawm
//                 </Typography>
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//       </List>
//     </Box>
//   );
// }
