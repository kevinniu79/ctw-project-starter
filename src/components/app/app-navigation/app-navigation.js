import PropTypes from 'prop-types';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

export default function AppNavigation(props) {
  const { active, onCloseClick } = props;

  const navigate = useNavigate();
  const onListItemButtonClick = (route) => {
    navigate(route);
    onCloseClick();
  };

  return (
    <Drawer onClose={onCloseClick} open={active}>
      <Toolbar sx={{ justifyContent: 'flex-end', minWidth: 300 }}>
        <IconButton onClick={onCloseClick}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton onClick={() => onListItemButtonClick(ROUTES.HOME)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={() => onListItemButtonClick(ROUTES.SIGN_UP)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItemButton>
        <ListItemButton onClick={() => onListItemButtonClick(ROUTES.WASTE_MANAGEMENT)}>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Waste Management" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

AppNavigation.propTypes = {
  active: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

AppNavigation.defaultProps = {
  active: false,
  onCloseClick: undefined,
};
