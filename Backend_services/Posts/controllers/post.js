const getPosts = async(req,res) => {
    res.send('get all posts')
}
const createPost = async(req,res) => {
    res.send('create a new post')
}

const editPost = async(req,res) => {
    res.send('edit and a update a post')
}

const deletePost = async(req,res) => {
    res.send('delete a post')
}

module.exports = {getPosts, createPost, editPost, deletePost}