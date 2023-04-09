import { Router as expressRouter } from 'express';
import {
    // getAllSessionRequests,
    createSessionRequest,
} from '../../controllers/session-request';

const router = expressRouter();

// router.get('', getAllSessionRequests);
router.post('', createSessionRequest);

export default router;
