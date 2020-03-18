import React,{useEffect,useState}  from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridData from '../data/gridData.json'
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: '#0f171e',
    marginLeft: 15,
    marginRight: 15,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    padding:0
  },
}));

export default function MovieGrid() {
  const classes = useStyles();
  const [data,setdata]=useState({})
  useEffect(() => {
          getData()   
          }, {data})
      
  const getData = async ()=> {
      const response = await axios.get('http://localhost:5000/data/getMovies')
      setdata(response.data)
      console.log(response.data.contents[0].thumbnails[0].uri)
  }

  return (
    <div className={classes.root}>
      <GridList cols={4}  cellHeight={120}  className={classes.gridList}>
        <GridListTile key="Subheader" cols={4}  style={{ height:'auto'}}>
          <ListSubheader component="div" style={{WebkitTextFillColor:'#ffffff',fontSize:24}}>Watch next TV and movies</ListSubheader>
        </GridListTile>
        {GridData.map(poster => (
          <GridListTile rows={2} cols={1} >
            <img src={poster.src}/>            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}