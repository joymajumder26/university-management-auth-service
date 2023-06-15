import { NextFunction, RequestHandler, Request, Response } from 'express';
import { UserService } from './user.service';
import catctAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IUser } from './user.interface';

// import { z } from 'zod'

const createUser: RequestHandler = catctAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      suceess: true,
      message: 'User Created Successfully',
      data: result,
    });
    next();
  }
);

export const UserController = {
  createUser,
};
