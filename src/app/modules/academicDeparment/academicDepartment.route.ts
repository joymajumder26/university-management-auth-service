import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-Department',
  validateRequest(AcademicDepartmentValidation.createDepartmentZodSchema),
  AcademicDepartmentController.createDepartment
);

router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateDepartmentZodSchema),
  AcademicDepartmentController.updateDepartment
);
router.patch('/:id', AcademicDepartmentController.updateDepartment);
router.get('/', AcademicDepartmentController.getAllDepartment);

router.delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoutes = router;
