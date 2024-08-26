const blogModel = require('../models/blogModel');

function createBlog(req, res) {
    const { title, content, userId } = req.body;
    if(title && content && userId){
    const blog = blogModel.addBlog(title, content, userId);
    res.status(201).json(blog);

    }
    else
    res.status(400).json({ message: 'One of the blog entity fields is empty' });

}

function getAllBlogs(req, res) {
    res.json(blogModel.getBlogs());
}

function getBlog(req, res) {
    const blog = blogModel.getBlogById(req.params.id);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
}

function updateBlog(req, res) {
    const { title, content } = req.body;
    const blog = blogModel.updateBlog(req.params.id, title, content);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
}

function deleteBlog(req, res) {
    blogModel.deleteBlog(req.params.id);
    res.status(204).end();
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlog,
    updateBlog,
    deleteBlog
};
