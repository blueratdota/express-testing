let posts = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" }
];

// @desc Get all post
// @route GET /api/posts
const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit); // for localhost:8080/api/posts?limit=number
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
};

// @desc Get "/:id" post
// @route GET /api/posts/:id
const getPost = (req, res, next) => {
  //   console.log(req.params.id);
  const id = parseInt(req.params.id);
  const post = posts.find((x) => {
    return x.id === id;
  });
  if (!post) {
    const error = new Error(`post id: ${id} does not exist`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(
    posts.filter((post) => {
      return post.id === id;
    })
  );
};

// @desc Push "/:id" post
// @route POST /api/posts/:id
const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };
  if (!newPost.title) {
    const error = new Error(`please put title on post`);
    error.status = 400;
    return next(error);
    // return res.status(400).json({ msg: "Please put title on your post" });
    // refactored
  }
  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc Update "/:id" post
// @route PUT /api/posts/:id
const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((x) => x.id == id);
  if (!post) {
    const error = new Error(`to update id ${id} not found`);
    error.status = 404;
    return next(error);
    // return res.status(404).json({ msg: "error to update not found" });
    // refactored
  }
  post.title = req.body.title; // directly modifies the object
  res.status(200).json(posts);
};

// @desc Delete "/:id" post
// @route DELET /api/posts/:id
const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((x) => x.id == id);
  if (!post) {
    const error = new Error(`to delete id ${id} not found`);
    error.status = 404;
    return next(error);
    // return res.status(404).json({ msg: "error to update not found" });
    // refactored
  }
  posts = posts.filter((x) => {
    return x.id !== id;
  });
  res.status(200).json(posts);
};

export { getPost, getPosts, createPost, updatePost, deletePost };
