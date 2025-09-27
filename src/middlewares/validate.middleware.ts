import { Request, Response, NextFunction } from "express";

export const validateRegister = (_req: Request, _res: Response, next: NextFunction) => {
  // res.status(200).json({message: "validateRegister route"});
  next();
}

export const validateLogin = (_req: Request, _res: Response, next: NextFunction) => {
  // res.status(200).json({message: "validateLogin route"});
  next()
}