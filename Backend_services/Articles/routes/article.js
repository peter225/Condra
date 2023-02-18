const express = require('express')

const router = express.Router()

const {getAllArticles,getArticle, createArticle, editArticle, deleteArticle } = require('../controllers/article')

router.route('/').get(getAllArticles).post(createArticle);
router.route('/:id').get(getArticle).patch(editArticle).delete(deleteArticle);


module.exports = router