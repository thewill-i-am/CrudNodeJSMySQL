import { Router } from 'express';

import { getAllGroceries, postGrocery, putGrocery, deleteGrocery } from '../controllers/grocery';

const router = Router();
router.get('/', getAllGroceries);

router.post('/', postGrocery);

router.put('/', putGrocery);

router.delete('/:id', deleteGrocery);

export default router;