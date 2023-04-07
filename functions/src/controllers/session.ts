import { Request, Response } from 'express';
import { db } from '..';

const sessionsCollection = 'sessions';

export const getAllSessions = async (req: Request, res: Response) => {
    try {
        const sessions = await db.collection(sessionsCollection).get();
        res.status(200).json(sessions);
    } catch (error) {
        console.log(error);
    }
};
