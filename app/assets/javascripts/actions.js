var Actions = new _.extend({}, {
  addComment: function(params) {
    AppDispather.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }
});
