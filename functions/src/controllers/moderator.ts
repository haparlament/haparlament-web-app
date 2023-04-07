import { Request, Response } from 'express';
import { db } from '..';

const moderatorsCollection = 'moderators';

export const getAllModerators = async (req: Request, res: Response) => {
    try {
        const moderators = await db.collection(moderatorsCollection).get();
        res.status(200).json(moderators);
    } catch (error) {
        console.log(error);
    }
};
