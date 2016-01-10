var Store = new _.extend({}, EventEmitter.prototype, {

  _comments: [],

  setComments: function(comments) {
    comments.forEach(function(comment) {
      this.addComment(comment)
    }.bind(this))
  },

  addComment: function(comment) {
    this._comments[comment.id || this._comments.length] = comment
  },

  upvoteComment: function(comment) {
    this._comments[comment.id].rank++;
  },

  deleteComment: function(comment) {
    delete(this._comments[comment.id])
  },

  comments: function(parentId) {
    return this._comments.filter(function(c) { return c && c.parent_id === parentId })
  },

  // boilerplate, '.on' is from EventEmitter prototype, when this change happens, make sure let the callback know about it
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback)
  },

  emitChange: function() {
    debugger
    this.emit(Constants.CHANGE_EVENT);
  }

});


var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register(function(payload) {

  switch(payload.actionType) {

    case Constants.ADD_COMMENT:
      Store.addComment(payload.comment);
      Store.emitChange();
      break;

    case Constants.SET_COMMENTS:
      Store.setComments(payload.comments);
      Store.emitChange();
      break;

    case Constants.UPVOTE_COMMENT:
      Store.upvoteComment(payload.comment)
      Store.emitChange();
      break;

    case Constants.DELETE_COMMENT:
      Store.deleteComment(payload.comment)
      Store.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
