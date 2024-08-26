let blogs = [];
let blogId = 1;

class Blog {
    constructor(title, content, userId) {
        this.id = blogId++;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
}

function addBlog(title, content, userId) {
    const blog = new Blog(title, content, userId);
    blogs.push(blog);
    return blog;
}

function getBlogs() {
    return blogs;
}

function getBlogById(id) {
    return blogs.find(blog => blog.id === parseInt(id));
}

function updateBlog(id, title, content) {
    const blog = getBlogById(id);
    if (blog) {
        blog.title = title;
        blog.content = content;
        return blog;
    }
    return null;
}

function deleteBlog(id) {
    blogs = blogs.filter(blog => blog.id !== parseInt(id));
}

module.exports = {
    addBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};
