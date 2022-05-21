import { Router } from 'express';
import { typeController } from '../controllers/type-controller';
import { checkRole } from '../middleware/check-role';

const router = Router();

router.post('/', checkRole('ADMIN') , typeController.create);
router.get('/', typeController.getAll)


export default router;