/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, required: true, unique: true },

    role: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
    needsPasswordChange: { type: Boolean, dafault: true },
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

userSchema.statics.isUserExist = async function (
  id: string
): Promise<IUser | null> {
  return await User.findOne(
    { id },
    { id: 1, password: 1, role: 1, needsPasswordChange: 1 }
  );
};

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
