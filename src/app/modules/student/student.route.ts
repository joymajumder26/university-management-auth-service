import express from 'express';

import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudents);
router.get('/', StudentController.getAllStudents);
router.delete('/:id', StudentController.deleteStudents);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudents
);

export const StudentRoutes = router;
