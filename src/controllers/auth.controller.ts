import { Request, Response } from "express";

export const register = async (_req: Request, res: Response) => {
  try {
    res.status(200).json({message: "Registser route"})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
  }
}

export const login = async (_req: Request, res: Response) => {
  try {
    res.status(200).json({message: "Login route"})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
  }
}
