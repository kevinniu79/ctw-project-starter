import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ROUTES from '../../constants/routes';
import SignUp from '../sign-up/sign-up';
import App from '../app/app';
import Home from '../home/home';
import Students from '../students/students';
import SignUpSuccess from '../sign-up-success/sign-up-success';
import WasteItem from '../waste-management/waste-management';
import Student from '../student-test/student-test';
import FullWidthGrid from '../student-test/details-tabs-box';

const theme = createTheme();

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGN_UP_SUCCESS} element={<SignUpSuccess />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.STUDENTS} element={<Students />} />
            <Route path={ROUTES.WASTE_MANAGEMENT} element={<WasteItem />} />
            <Route path={ROUTES.STUDENT_TEST} element={<Student />} />
            <Route path={ROUTES.DETAILS_TABS_BOX} element={<FullWidthGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
