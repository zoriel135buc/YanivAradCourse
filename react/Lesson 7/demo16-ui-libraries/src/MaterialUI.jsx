/* https://mui.com/material-ui/getting-started/installation */
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Option 2 - Destructuring
// import { Button, Stack, IconButton } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MaterialUI = () => {
  const [movies, setMovies] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows').then((resp) => {
      setMovies(resp.data.slice(0, 10));
    });
  }, []);

  return (
    <>
      <Stack direction='row' spacing={2}>
        <Button
          variant='contained'
          color='success'
          size='large'
          startIcon={
            <>
              <DeleteIcon /> <SendIcon />
            </>
          }
          onClick={() => {
            setShowTable(!showTable);
          }}
        >
          Table
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          endIcon={<SendIcon />}
          onClick={() => {
            setShowCards(!showCards);
          }}
        >
          Cards
        </Button>
      </Stack>
      <Button
        variant='outlined'
        color='primary'
        // https://mui.com/system/getting-started/the-sx-prop/
        sx={{
          width: 150,
          height: 50,
          color: 'error.main',
          fontWeight: 'bold',
          borderRadius: '25px',
          fontSize: 18,
          mt: 3,
          mb: 2,
        }}
        href='https://www.google.com/'
      >
        Hello
      </Button>
      <IconButton color='primary' aria-label='add to shopping cart'>
        <AddShoppingCartIcon />
      </IconButton>

      {/* Table */}
      {showTable && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Language</TableCell>
                <TableCell align='center'>Premiered Year</TableCell>
                <TableCell align='center'>Rating Average</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow
                  key={movie.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 3 } }}
                >
                  <TableCell component='th' scope='row'>
                    {movie.id}
                  </TableCell>
                  <TableCell align='center'>{movie.name}</TableCell>
                  <TableCell align='center'>{movie.language}</TableCell>
                  <TableCell align='center'>{movie.premiered}</TableCell>
                  <TableCell align='center'>{movie.rating.average}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Card */}
      {showCards &&
        movies.map((movie) => {
          return (
            <Card key={movie.id} sx={{ maxWidth: 250, mb: 2 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], color: 'cyan' }}
                    aria-label='recipe'
                  >
                    R
                  </Avatar>
                }
                title={movie.name}
                subheader={movie.premiered}
              />
              <CardActionArea href={movie.image.original} target='_blank'>
                <CardMedia
                  component='img'
                  image={movie.image.medium}
                  alt={`${movie.name}'s image`}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Language: {movie.language}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Rating Average: {movie.rating.average}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label='add to favorites' color='secondary'>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
};

export default MaterialUI;
