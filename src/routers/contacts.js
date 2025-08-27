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
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const contactsRouter = Router();
// Middlewares authenticate
contactsRouter.use(authenticate);
// GET
contactsRouter.get('/', getAllContactsController);
contactsRouter.get('/:contactId', isValidId, getContactByIdController);
// POST
contactsRouter.post(
  '/',
  validateBody(createContactsSchema),
  upload.single('photo'),
  createContactController,
);
// PATCH
contactsRouter.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(updateContactsSchema),
  patchContactController,
);
// DELETE
contactsRouter.delete('/:contactId', isValidId, deleteContactController);

export default contactsRouter;
