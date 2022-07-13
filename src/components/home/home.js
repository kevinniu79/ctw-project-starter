/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import ROUTES from '../../constants/routes';

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

  const onStudentTestClick = () => {
    navigate(ROUTES.STUDENT_TEST);
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
        <Typography
          align="center"
          color="text.primary"
          component="h1"
          gutterBottom
          variant="h2"
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
          experiment with the tools.
        </Typography>
        <Stack
          sx={{ pt: 3 }}
          direction="row"
          spacing={2}
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
        </Stack>
        <Button onClick={onStudentTestClick}>
          Open Modal
        </Button>
      </Box>
    </Container>
  );
}
