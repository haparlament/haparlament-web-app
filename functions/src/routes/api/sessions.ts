import { Router as expressRouter } from 'express';
import { getAllSessions } from '../../controllers/session';

const router = expressRouter();

router.get('', getAllSessions);

export default router;
