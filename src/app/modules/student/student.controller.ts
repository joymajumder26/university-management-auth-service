import { Request, Response } from 'express';

import catctAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { studentFilterableFields } from './student.constant';
import { IStudent } from './student.interface';
import { StudentService } from './student.service';

const getAllStudents = catctAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  console.log(filters);
  // console.log(paginationOptions);
  const result = await StudentService.getAllStudent(filters, paginationOptions);
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Studentss retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleStudents = catctAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.getSingleStudent(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Studentss retrieved successfully',

    data: result,
  });
});

const updateStudents = catctAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentService.updateStudent(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Studentss updated successfully',

    data: result,
  });
});
const deleteStudents = catctAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudent(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Studentss deleted successfully',

    data: result,
  });
});
export const StudentController = {
  getAllStudents,
  getSingleStudents,
  updateStudents,
  deleteStudents,
};
