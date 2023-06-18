import { Schema, model } from 'mongoose';

import {
  AcademicDepartmentModel,
  IAcademicDepartment,
} from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<
  IAcademicDepartment,
  AcademicDepartmentModel
>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      // id ta normally dekhanor jonno
      virtuals: true,
    },
  }
);

export const AcademicDepartment = model<IAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema
);

//handling same year and same semester issue

//data -> check -? same year && same semester
