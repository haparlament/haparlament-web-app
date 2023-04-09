import { Request, Response } from 'express';
import db from '../utils/firestore-client';
import logger from '../utils/logger';

const moderatorsCollection = 'moderators';

export const getAllModerators = async (req: Request, res: Response) => {
    try {
        const moderators = await db.getAll(moderatorsCollection);
        res.status(200).json(moderators);
    } catch (error) {
        logger.error(error);
    }
};
