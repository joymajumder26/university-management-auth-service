import { RequestHandler } from 'express';

import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  // console.log("hi")
  // console.log(req.body);

  try {
    const { ...academicSemesterData } = req.body;

    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Academic Semester is created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
