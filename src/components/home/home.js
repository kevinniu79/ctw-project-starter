import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
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

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

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
          sx={{ pt: 4 }}
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
      </Box>

    
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>

    </Container>
  );
}
