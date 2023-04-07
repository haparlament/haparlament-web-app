import { Request, Response } from 'express';
import { db } from '../';

const sessionRequestsCollection = 'session_requests';

export const getAllSessionRequests = async (req: Request, res: Response) => {
    try {
        const sessionRequests = await db.collection(sessionRequestsCollection).get();
        res.status(200).json(sessionRequests);
    } catch (error) {
        console.log(error);
    }
};
