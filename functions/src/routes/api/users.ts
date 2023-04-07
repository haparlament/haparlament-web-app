import { Router as expressRouter } from 'express';
import { getAllUsers } from '../../controllers/user';

const router = expressRouter();

router.get('', getAllUsers);

export default router;
