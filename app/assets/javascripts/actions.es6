import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api';

class Actions {

  addComment(params) {
    Api.post('/restaurants/1/comments', {
      comment: params
    }).then( comment => {

      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      });

    })

  }

  setComments(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    });
  }

}
export default Actions
