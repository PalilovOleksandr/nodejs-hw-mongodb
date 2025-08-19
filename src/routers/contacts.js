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
router.get('/', getAllContactsController);
router.get('/:contactId', isValidId, getContactByIdController);
// POST
router.post('/', validateBody(createContactsSchema), createContactController);
// PATCH
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactsSchema),
  patchContactController,
);
// DELETE
router.delete('/:contactId', isValidId, deleteContactController);

export default router;
