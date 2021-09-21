
const Post = require('./posts.model');

module.exports.createblog = function (blog) {

    return Post.create(blog);
}

module.exports.getBlogs = function (blog) {

    return Post.find({});
}
module.exports.getBlogById = function (blogId) {

    return Post.find({ _id: blogId });
}
module.exports.updateBlogById = function (blogId, update) {

    return Post.findByIdAndUpdate(blogId, update, { new: true });
}
module.exports.deleteBlogById = function (blogId) {

    return Post.findByIdAndDelete(blogId);
}