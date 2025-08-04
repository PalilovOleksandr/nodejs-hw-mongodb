import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

// GET
router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
// POST
router.post('/contacts', ctrlWrapper(createContactController));
// PATCH
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));
// DELETE
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
