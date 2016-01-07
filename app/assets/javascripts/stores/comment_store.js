var Store = new _.extend({}, EventEmitter.prototype, {

  _comments: [],

  addComment: function(comment) {
    this._comments[comment.id] = comment
  },

  comments: function() {
    return this._comments
  },

  // boilerplate
  // '.on' is from EventEmitter prototype, when this change happens, make sure let the callback know about it
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback)
  },

  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  }

});


// There should be only one dispatcher in app
var AppDispather = new Flux.Dispatcher();

AppDispather.register(function(payload) {
  var action = payload.actionType;
  switch(action) {
    case Constants.ADD_COMMENT:
      Store.addComment(payload.comment);
      Store.emitChange();
      break;
    default:
      //  NO-OP
  }
});
