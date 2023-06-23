import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },

    role: { type: String, required: true },
    password: { type: String, required: true },
    student: {
      type: Schema.Types.ObjectId,
      /// <reference path="" />
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      /// <reference path="" />
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
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

export const User = model<IUser, UserModel>('User', userSchema);
