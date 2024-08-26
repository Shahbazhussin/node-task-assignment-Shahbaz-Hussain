const blogModel = require('../models/blogModel');

function checkBlogOwnership(req, res, next) {
    const blog = blogModel.getBlogById(req.params.id);
    if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
    }
    if (blog.userId !== parseInt(req.headers['user-id'])) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}

module.exports = {
    checkBlogOwnership
};
