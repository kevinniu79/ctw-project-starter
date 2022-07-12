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
          component="h2"
          gutterBottom
          variant="h3"
          sx={{ mt: 5 }}
        >
          Welcome!
        </Typography>
        <Button onClick={onStudentTestClick} variant='outlined' size='large'>
          Open Student List
        </Button>
      </Box>
    </Container>
  );
}
