import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { db } from '../';
import { CreateSessionRequestDto } from '../dto/session-request';

const sessionRequestsCollection = 'session_requests';

export const getAllSessionRequests = async (req: Request, res: Response) => {
    try {
        const sessionRequests = await db
            .collection(sessionRequestsCollection).get();
        res.status(200).json(sessionRequests);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};

export const createSessionRequest = async (req: Request, res: Response) => {
    const createsessionRequestDto = new CreateSessionRequestDto();
    createsessionRequestDto.username = req.body.username;
    createsessionRequestDto.phoneNumber = req.body.phoneNumber;
    createsessionRequestDto.imageId = req.body.imageId;
    createsessionRequestDto.feeling = req.body.feeling;
    createsessionRequestDto.day = req.body.day;
    createsessionRequestDto.hourRange = req.body.hourRange;

    const errors = await validate(createsessionRequestDto);
    if (errors.length > 0) {
        const constraints: Record<string, string[]> = {};
        errors.forEach((error) => {
            const propertyName = error.property;
            if (error.constraints) {
                const errorConstraints = Object.values(error.constraints);
                constraints[propertyName] = errorConstraints;
            }
        });
        res.status(400).json({ constraints });
        return;
    }


    try {
        await db.collection(sessionRequestsCollection).doc().create(req.body);
        res.status(200).json(createsessionRequestDto);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};
