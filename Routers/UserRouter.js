import express from 'express';
import { 
    registerStudent, 
    loginStudent, 
    getStudents, 
    updateStudent, 
    deleteStudent 
} from '../Controlers/AuthControler.js';

const router = express.Router();

router.post('/register', registerStudent);
router.post('/login', loginStudent);
router.get('/gett', getStudents);
router.put('/putt/:id', updateStudent);
router.delete('/dltt/:id', deleteStudent);

export default router;
