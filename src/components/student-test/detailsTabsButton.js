import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function EditButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="Edit">Text</Button>
    </Stack>
  );
}