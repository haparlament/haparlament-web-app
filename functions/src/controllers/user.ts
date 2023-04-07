import { Request, Response } from 'express';
import { db } from '../';

const userCollection = 'users';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await db.collection(userCollection).get();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
};
