var Actions = new _.extend({}, {

  setComments: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
  },

  addComment: function(params) {

    Api.post('/restaurants/1/comments', { comment: params})
      .then(function(comment) {

        window.AppDispatcher.dispatch({
          actionType: Constants.ADD_COMMENT,
          comment: params
        });

      })
  }

});

// class Actions {
//
//   constructor(restaurantId) {
//     this.restaurantId = restaurantId;
//     this.watchInterval = setInterval(this.watch.bind(this), 1000);
//   }
//
//   setComments(params) {
//     AppDispatcher.dispatch({
//       actionType: Constants.SET_COMMENTS,
//       comments: params
//     });
//   }
//
//   upvoteComment(comment) {
//     Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then( comment => {
//       AppDispatcher.dispatch({
//         actionType: Constants.UPVOTE_COMMENT,
//         comment: comment
//       });
//     });
//   }
//
//   addComment(params) {
//     Api.post(`/restaurants/${this.restaurantId}/comments`, {
//       comment: params
//     }).then( comment => {
//       AppDispatcher.dispatch({
//         actionType: Constants.ADD_COMMENT,
//         comment: comment
//       });
//     })
//   }
//
//   watch() {
//     Api.get(`/restaurants/${this.restaurantId}/comments`).then( comments => {
//       this.setComments(comments)
//     });
//   }
// }

// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });
