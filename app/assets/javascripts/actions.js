var Actions = new _.extend({}, {

  addComment: function(params) {
    Api.post('/restaurant/1/comments', {
      comment: params
    })
    AppDispather.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  },


  setComments(params) {
    AppDispather.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
  }


});
