import { Request, Response } from 'express';

import catctAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

import { academicDepartmentFilterableFields } from './academicDepartment.constant';
import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentService } from './academicDepartment.service';

const createDepartment = catctAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body;

  const result = await AcademicDepartmentService.createDepartment(
    academicDepartmentData
  );

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    suceess: true,
    message: 'Academic Department Created Successfully',
    data: result,
  });
});

const getAllDepartment = catctAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  console.log(filters);
  // console.log(paginationOptions);
  const result = await AcademicDepartmentService.getAllDepartment(
    filters,
    paginationOptions
  );
  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: httpStatus.OK,
    suceess: true,
    message: 'Department retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleDepartment = catctAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicDepartmentService.getSingleDepartment(id);

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    suceess: true,
    message: 'Department retrieved successfully',

    data: result,
  });
});

const updateDepartment = catctAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await AcademicDepartmentService.updateDepartment(
    id,
    updatedData
  );

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    suceess: true,
    message: 'Department updated successfully',

    data: result,
  });
});
const deleteDepartment = catctAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicDepartmentService.deleteDepartment(id);

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    suceess: true,
    message: 'Department deleted successfully',

    data: result,
  });
});
export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
