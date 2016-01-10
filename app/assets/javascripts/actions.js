var Actions = new _.extend({}, {

  setComments: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
  },

  addComment: function(params) {
    Api
      .post(
        '/restaurants/1/comments',
        { comment: params}
      )
      .then(function(comment) {
        window.AppDispatcher.dispatch({
          actionType: Constants.ADD_COMMENT,
          comment: comment
        });
      })
  },

  upvoteComment: function(comment) {
    Api
      .put(
        '/restaurants/1/comments/' + comment.id + '/upvote')
      .then(function(comment) {
        window.AppDispatcher.dispatch({
          actionType: Constants.UPVOTE_COMMENT,
          comment: comment
        });
      })
  },


  deleteComment: function(comment) {
    Api
      .delete('/restaurants/1/comments/' + comment.id)
      .then(function(deletedComment) {
        window.AppDispatcher.dispatch({
          actionType: Constants.DELETE_COMMENT,
          comment: deletedComment
        });
      })
  }

});
