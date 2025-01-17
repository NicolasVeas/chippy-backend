import { Router } from 'express';
import { deletePet, getPet, getPetsCount, getPets, savePet, updatePet } from '../controllers/pets';

const router = Router()

router.get('/pets', getPets)
router.get('/pets/count', getPetsCount)
router.get('/pets/:id', getPet)
router.post('/pets', savePet)
router.delete('/pets/:id', deletePet)
router.put('/pets/:id', updatePet)

export default router