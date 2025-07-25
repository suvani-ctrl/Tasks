const express = require('express');
const router = express.Router();
const {
  getBlog,
  createBlog,
  getsingleBlog,
  updateBlog
} = require("../controllers/blogController");

// @route   GET /api/v1          
router.get('/', getBlog);

// @route   POST /api/v1        
router.post('/', createBlog); 

router.route('/:id')
  .get(getsingleBlog)
  .put(updateBlog);

module.exports = router;
