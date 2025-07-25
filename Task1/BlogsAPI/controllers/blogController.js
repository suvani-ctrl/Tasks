const asyncHandler = require("express-async-handler");
const Blog = require("../models/BlogModel"); // make sure path is correct

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlog = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 }); // newest first
  res.status(200).json(blogs);
});

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Public (for now)
const createBlog = asyncHandler(async (req, res) => {
  const { title, description, category } = req.body;

  if (!title || !description || !category) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const newBlog = await Blog.create({ title, description, category });

  res.status(201).json({
    message: "Blog created successfully",
    blog: newBlog,
  });
});

// @desc    Get a single blog
// @route   GET /api/blogs/:id
// @access  Public
const getsingleBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.status(200).json(blog);
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Public (for now)
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    message: "Blog updated successfully",
    blog: updatedBlog,
  });
});

module.exports = {
  getBlog,
  createBlog,
  getsingleBlog,
  updateBlog,
};
