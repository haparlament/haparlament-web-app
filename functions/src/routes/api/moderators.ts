import { Router as expressRouter } from 'express';
import { getAllModerators } from '../../controllers/moderator';

const router = expressRouter();

router.get('', getAllModerators);

export default router;
