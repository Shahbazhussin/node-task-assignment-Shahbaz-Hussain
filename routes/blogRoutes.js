const express = require('express');
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlog);
router.put('/:id', authMiddleware.checkBlogOwnership, blogController.updateBlog);
router.delete('/:id', authMiddleware.checkBlogOwnership, blogController.deleteBlog);

module.exports = router;
