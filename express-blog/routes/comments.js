module.exports = {
    getComments(req, res) {
      res.status(200).send(getPostComments(req))
    }, 

    addComment(req, res) {
        var comments = getPostComments(req)
        var id = comments.length
        var newComment = req.body
        comments.push(newComment)
        res.status(201).send({id: id})
    },

    updateComment(req, res) {
        var postId = req.params.postId
        var post = req.store.posts[postId]
        var comments = post.comments
        comments[req.params.commentId] = req.body
        res.status(200).send(req.store.posts[postId])
    },
    
    removeComment(req, res) {
        var comments = getPostComments(req)
        comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }  
}

function getPostComments(req) {
    var postId = req.params.postId
    var post = req.store.posts[postId]
    return post.comments
}

