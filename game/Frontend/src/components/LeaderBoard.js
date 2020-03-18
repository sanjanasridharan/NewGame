import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 24,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#d3d3d3',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#9e9e9e',
    },
  },
}))(TableRow);

function createData(username, rewards, badges, watched, rank) {
  return { username, rewards, badges, watched, rank };
}

const rows = [
  createData('ansh', 28, 16, 26, 1),
  createData('sanjana', 27, 15, 25, 2),
  createData('chetan', 26, 16, 23, 3),
  createData('mithun', 24, 13, 24, 4),
  createData('sneha', 23, 14, 21, 5),
  createData('sharath', 22, 12, 23, 6),
  createData('pawan', 21, 16, 29, 7),
  createData('tarun', 20, 12, 18, 8),
  createData('abhishek', 19, 12, 16, 9),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <center>
      <h1 style={{fontSize:44}}>Leaderboard</h1>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="center">Reward Points</StyledTableCell>
              <StyledTableCell align="center">Badges Earned</StyledTableCell>
              <StyledTableCell align="center">Movies Watched</StyledTableCell>
              <StyledTableCell align="right">Rank</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.rank}>
                <StyledTableCell >{row.username}</StyledTableCell>
                <StyledTableCell align="center">{row.rewards}</StyledTableCell>
                <StyledTableCell align="center">{row.badges}</StyledTableCell>
                <StyledTableCell align="center">{row.watched}</StyledTableCell>
                <StyledTableCell align="right"># {row.rank}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  );
}