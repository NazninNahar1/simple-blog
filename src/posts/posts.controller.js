
const postservice = require('./posts.service');
module.exports.createblog = async function (req, res, next) {
    const blog = req.body;
    const createdBlog = await postservice.createblog(blog);
    return res.json(createdBlog);

}
module.exports.getBlogs = async function (req, res) {

    const blogs = await postservice.getBlogs();
    return res.json(blogs);

}
module.exports.getBlogById = async function (req, res) {

    const blogId = req.params.id;
    const blog = await postservice.getBlogById(blogId);
    return res.json(blog);

}
module.exports.updateBlogById = async function (req, res) {

    const blogId = req.params.id;
    const update = req.body;
    const blog = await postservice.updateBlogById(blogId, update);
    return res.json(blog);

}
module.exports.deleteBlogById = async function (req, res) {

    const blogId = req.params.id;

    const blog = await postservice.deleteBlogById(blogId);
    return res.json(blog);

}