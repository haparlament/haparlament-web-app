import { Request, Response } from 'express';
import db from '../utils/firestore-client';
import logger from '../utils/logger';

const sessionsCollection = 'sessions';

export const getAllSessions = async (req: Request, res: Response) => {
    try {
        const sessions = await db.getAll(sessionsCollection);
        res.status(200).json(sessions);
    } catch (error) {
        logger.error(error);
        res.status(500);
    }
};
