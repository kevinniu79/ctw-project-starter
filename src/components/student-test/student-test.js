import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import StudentModal from './studentModal';
import {
    getStudents,
    addStudent,
    updateStudent,
} from '../../services/services';

export default function Student() {


    return (
        <StudentModal/>
    );
}