import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StudentTable from './studentTable';
import ROUTES from '../../constants/routes';

export default function Student() {
  const navigate = useNavigate();

  const text = '< Back';
  const onBackClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      justify="center"
      sx={{ mx: '20vh' }}
    >
      <StudentTable />
      <Button onClick={onBackClick}>{text}</Button>
    </Stack>
  );
}
