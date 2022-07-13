/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const GridText = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function TabsFunction() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '140vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Education" {...a11yProps(0)} />
          <Tab label="Goals" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={12}>
              <GridText>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Post Secondary Plan</b>
                </h3>
                <h5>
                  <b>Plans After College:</b>
                </h5>
                <h5>
                  <b>I have applied to a college: </b>
                </h5>
                <h5>
                  <b>Colleges they’ve applied to/plan to apply to: </b>
                </h5>
                <h5>
                  <b>I have begun my work on my college essay:</b>
                </h5>
                <h5>
                  <b>I need help writing my college essay:</b>
                </h5>
                <h5>
                  <b>First choice of college:</b>
                </h5>
                <h3 style={{ color: '#2656A5' }}>
                  <b>College Entrance Exam Information: </b>
                </h3>
                <h5>
                  <b>
                    PACT Score: 100
                    <div>Date of PACT: 10/22/2021</div>
                  </b>
                </h5>
                <h5>
                  <b>
                    PSAT Score: 100
                    <div> Date of PSAT: 10/22/2021</div>
                  </b>
                </h5>
                <h5>
                  <b>
                    ACT Score: 100
                    <div> Date of ACT: 10/22/2021</div>
                  </b>
                </h5>
                <h5>
                  <b>
                    SAT Score: 100
                    <div> Date of SAT: 10/22/2021 </div>
                  </b>
                </h5>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Financial Aid:</b>
                </h3>
                <h5>
                  <b>I have already completed the financial aid process:</b>
                </h5>
                <h5>
                  <b>
                    I need assistance filling out my FAFSA/Financial aid forms:
                  </b>
                </h5>
                <h5>
                  <b>Support they need:</b>
                </h5>
              </GridText>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={12}>
              <GridText>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Goal One</b>
                </h3>
                <h5>
                  <b>Goal: </b>
                </h5>
                <h5>
                  <b>Goal Set Date: </b>
                </h5>
                <h5>
                  <b>SEL: </b>
                </h5>
                <h5>
                  <b>Goal Review Date: </b>
                </h5>
                <h5>
                  <b>Accomplishment State: </b>
                </h5>
                <h5>
                  <b>Explanation: </b>
                </h5>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Goal Two</b>
                </h3>
                <h5>
                  <b>Goal: </b>
                </h5>
                <h5>
                  <b>Goal Set Date: </b>
                </h5>
                <h5>
                  <b>SEL: </b>
                </h5>
                <h5>
                  <b>Goal Review Date: </b>
                </h5>
                <h5>
                  <b>Accomplishment State: </b>
                </h5>
                <h5>
                  <b>Explanation: </b>
                </h5>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Goal Three</b>
                </h3>
                <h5>
                  <b>Goal: </b>
                </h5>
                <h5>
                  <b>Goal Set Date: </b>
                </h5>
                <h5>
                  <b>SEL: </b>
                </h5>
                <h5>
                  <b>Goal Review Date: </b>
                </h5>
                <h5>
                  <b>Accomplishment State: </b>
                </h5>
                <h5>
                  <b>Explanation: </b>
                </h5>
              </GridText>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={12}>
              <GridText>
                <h3>
                  <b style={{ color: '#2656A5' }}>Parent Information</b>
                </h3>
                <h5>
                  <b>First Name: </b>
                </h5>
                <h5>
                  <b>Last Name: </b>
                </h5>
                <h5>
                  <b>Address: </b>
                </h5>
                <h5>
                  <b>Parent Apartment Number: </b>
                </h5>
                <h5>
                  <b>City: </b>
                </h5>
                <h5>
                  <b>State: </b>
                </h5>
                <h5>
                  <b>Zip Code: </b>
                </h5>
                <h5>
                  <b>Home Phone: </b>
                </h5>
                <h5>
                  <b>Cell Phone: </b>
                </h5>
                <h5>
                  <b>Parent Email: </b>
                </h5>
                <h3>
                  <b style={{ color: '#2656A5' }}>Guidance Couselor Info: </b>
                </h3>
                <h5>
                  <b>I know my guidance counselor: </b>
                </h5>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Admin Details: </b>
                </h3>
                <h5>
                  <b>Activity Status: </b>
                </h5>
                <h5>
                  <b>Acceptance Status: </b>
                </h5>
                <h3 style={{ color: '#2656A5' }}>
                  <b>Signatures </b>
                </h3>
                <h5>
                  <b>Student Signature: </b>
                </h5>
                <h5>
                  <b>Date Signed: </b>
                </h5>
                <h5>
                  <b>Parent Signature: </b>
                </h5>
                <h5>
                  <b>Date Signed: </b>
                </h5>
              </GridText>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}
