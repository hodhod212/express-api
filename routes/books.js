const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')
router.get('/', async (req, res) => {
    res.send('All books')
})
router.get('/new',async (req,res)=>{
    try{
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new',{
            authors:authors,
            book:book
        })
    }catch{
        res.redirect('/books')
    }
})
router.post('/', async (req, res) => {
    const book = new Book({
        title:req.body.title,
        author:req.body.author,
        publishDate:new Date(req.body.publishDate),
        pageCount:req.body.pageCount,
        description:req.body.description
    })
  })
 


module.exports = router