import { Router } from "express"; 
import { postController } from "./post.controller.js";

const router = Router()

router.get('/', postController.getAll)
router.get('/:id', postController.getOneById)
router.post('/', postController.create)
router.put('/:id', postController.update)
router.delete('/:id', postController.remove)

export default router