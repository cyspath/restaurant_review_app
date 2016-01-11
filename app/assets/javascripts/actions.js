var Actions = new _.extend({}, {

  setComments: function(params, restaurant_id) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
    this.restaurant_id = restaurant_id
  },

  addComment: function(params) {
    Api
      .post(
        '/restaurants/' + this.restaurant_id + '/comments',
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
        '/restaurants/' + this.restaurant_id + '/comments/' + comment.id + '/upvote')
      .then(function(comment) {
        window.AppDispatcher.dispatch({
          actionType: Constants.UPVOTE_COMMENT,
          comment: comment
        });
      })
  },


  deleteComment: function(comment) {
    Api
      .delete('/restaurants/' + this.restaurant_id + '/comments/' + comment.id)
      .then(function(deletedComment) {
        window.AppDispatcher.dispatch({
          actionType: Constants.DELETE_COMMENT,
          comment: deletedComment
        });
      })
  }

});
