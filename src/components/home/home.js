import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import ROUTES from '../../constants/routes';

export default function Home() {
  return (
    <Container>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs alignItems="center">
          <Button variant="contained">This is a button</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">This is a button</Button>
        </Grid>
        <Grid item xs>
          <Button variant="contained">This is a button</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
