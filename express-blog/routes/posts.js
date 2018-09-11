module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },

    addPost(req, res) {
        var posts = req.store.posts
        var id = posts.length
        if (!req.body.name || !req.body.url ||!req.body.text) {
            return res.sendStatus(400)
        }
        var newPost = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments: Array.isArray(req.body.comments) ? req.body.comments : []
        }
        posts.push(newPost)
        res.status(201).send({id: id})
    },

    updatePost(req, res) {
        var posts = req.store.posts
        var postId = req.params.postId
        if (isNaN(postId) || postId > posts.length - 1 || postId < 0) {
            return res.sendStatus(400)
        } else if (!req.body.name || !req.body.url || !req.body.text) {
            return res.sendStatus(400)
        }
        var newPost = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments: Array.isArray(req.body.comments) ? req.body.comments : []
        }
        posts[postId] = newPost
        res.status(200).send(posts[postId])
    },
    
    removePost(req, res) {
        var posts = req.store.posts
        var postId = req.params.postId
        if (isNaN(postId) || postId > posts.length - 1 || postId < 0) {
            return res.sendStatus(400)
        } else if (!req.body.name || !req.body.url || !req.body.text) {
            return res.sendStatus(400)
        }
        posts.splice(postId, 1)
        res.status(204).send()
    }
  }