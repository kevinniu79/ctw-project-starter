/* eslint-disable prettier/prettier */
import Stack from '@mui/material/Stack';
import StudentTable from './studentTable';

export default function Student() {
  return (
    <Stack spacing={2} sx={{ mx:50 }}>
      <StudentTable/>
    </Stack>
  );
}