import express from 'express';
import { getUsers } from '../controller/userController.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// router.get('/about', (req, res) => {
//   res.send('About Page');
// });


//router.get('payj',callBackFn())

router.get('/users',getUsers);
// router.get('/user/:id',getUserById);
// router.post('/createuser',createUser);
// router.patch('/updateusers/:id',updateUser);
// router.delete('/deleteuser/:id',deleteUser);


export default router;
