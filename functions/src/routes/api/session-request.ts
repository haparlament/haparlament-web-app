import { Router as expressRouter } from 'express';
import { getAllSessionRequests } from '../../controllers/session-request';

const router = expressRouter();

router.get('', getAllSessionRequests);

export default router;
