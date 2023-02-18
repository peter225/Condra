const getAllArticles = async(req,res) => {
    res.send('get all posts')
}

const getArticle = async(req,res) => {
    res.send('get a post')
}
const createArticle = async(req,res) => {
    res.send('create a new post')
}

const editArticle = async(req,res) => {
    res.send('edit and a update a post')
}

const deleteArticle = async(req,res) => {
    res.send('delete a post')
}

module.exports = {getAllArticles,getArticle, createArticle, editArticle, deleteArticle}
