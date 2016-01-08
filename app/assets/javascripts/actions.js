var Actions = new _.extend({}, {

  addComment: function(params) {
    Api.post('/restaurants/1/comments', {
      comment: params
    }).then( function(resp) {
      console.log(resp);
      return resp.json();
    }).then( function(comment) {

      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: params
      });

    })
  },

  setComments: function(params) {
    AppDispather.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
  }


});


// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });
