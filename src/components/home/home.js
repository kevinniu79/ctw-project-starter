import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import ROUTES from '../../constants/routes';
import './home.css';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default function Home() {
  const navigate = useNavigate();

  const onRepositoryClick = () => {
    window.open(
      'https://github.com/joeyschroeder/code-the-way-project-starter'
    );
  };

  const onDemoSignUpFormClick = () => {
    navigate(ROUTES.SIGN_UP);
  };

  const onStudentListClick = () => {
    navigate(ROUTES.STUDENTS);
  };


  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography className='test'
          align="center"
          color="text.primary"
          component="h2"
          gutterBottom
          variant="h4"
          sx={{ mt: 5 }}
        >
          Welcome!
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          paragraph
          variant="h5"
        >
          This is a demo project using{' '}
          <Link
            color="primary"
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
          >
            React
          </Link>
          , and{' '}
          <Link
            color="primary"
            href="https://mui.com/material-ui/getting-started"
            target="_blank"
          >
            Material UI
          </Link>
          . It&apos;s designed to serve as a playground for students to
          experiment with the tools. Click{' '} 
          <Link
          color="primary"
          href="https://www.codetheway.org/"
          target="_blank"
          >
            here
          </Link>
          {' '}for more information!
        </Typography>
        <Stack
          sx={{ pt: 5 }}
          direction="column"
          spacing={3}
          justifyContent="center"
        >
          <Button variant="contained" onClick={onDemoSignUpFormClick}>
            Demo Sign-Up Form
          </Button>

          <Button variant="outlined" onClick={onRepositoryClick}>
            Repository
          </Button>
          <Button variant="contained" onClick={onStudentListClick}>
            Students List
          </Button>
          <Button variant="outlined" onClick="href=https://www.codetheway.org/about-us">
            Mission Statement
          </Button>
          <div className="btn-group">
  <Button>About Us</Button>
  <Button>Register</Button>
  <Button>More Info</Button>
</div>

        </Stack>
      </Box>
    </Container>
  );
}
