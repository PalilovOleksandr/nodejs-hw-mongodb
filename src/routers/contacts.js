import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';

const router = Router();

// GET
router.get('/contacts', getAllContactsController);
router.get('/contacts/:contactId', getContactByIdController);
// POST
router.post('/contacts', createContactController);
// PATCH
router.patch('/contacts/:contactId', patchContactController);
// DELETE
router.delete('/contacts/:contactId', deleteContactController);

export default router;
