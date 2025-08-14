import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

// GET
router.get('/contacts', getAllContactsController);
router.get('/contacts/:contactId', isValidId, getContactByIdController);
// POST
router.post(
  '/contacts',
  validateBody(createContactsSchema),
  createContactController,
);
// PATCH
router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactsSchema),
  patchContactController,
);
// DELETE
router.delete('/contacts/:contactId', isValidId, deleteContactController);

export default router;
