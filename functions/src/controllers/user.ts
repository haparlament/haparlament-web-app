import { Request, Response } from 'express';
import db from '../utils/firestore-client';
import logger from '../utils/logger';

const userCollection = 'users';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await db.getAll(userCollection);
        res.status(200).json(users);
    } catch (error) {
        logger.error(error);
        res.status(500);
    }
};
