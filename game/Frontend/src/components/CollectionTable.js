import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({

}))(TableRow);

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Marvel', 22, 40),
  createData('Harry Potter', 8, 40),
  createData('DC', 15, 40),
  createData('Disney', 20, 40),
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
      },
});

export default function CollectionTable() {
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell style={{fontSize:20}}>Collection watched</StyledTableCell>
            <StyledTableCell style={{fontSize:20}}>Number of movies</StyledTableCell>
            <StyledTableCell style={{fontSize:20}} >Points Gained</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.calories}</StyledTableCell>
              <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.fat}</StyledTableCell>
       
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
