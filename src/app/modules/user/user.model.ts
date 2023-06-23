/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },

    role: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
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
userSchema.pre('save', async function (next) {
  //hashing user password

  //hash password
  // console.log(this);
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
