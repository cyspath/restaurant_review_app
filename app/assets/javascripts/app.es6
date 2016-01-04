
class Store extends EventEmitter {

  constructor() {
    super()
    this._comments = []
  }

  addComment(comment) {
    this._comments[comment.id] = comment
  }

  comments() {
    return this._comments
  }

  // boilerplate
  // '.on' is from EventEmitter prototype, when this change happens, make sure let the callback know about it
  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback)
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
}

let commentStore = new Store()

// There should be only one dispatcher in app
let AppDispatcher = new Flux.Dispatcher()

AppDispatcher.register((payload) => {
  console.log('payload');
  switch(payload.actionType) {
    case Constants.ADD_COMMENT:
      commentStore.addComment(payload.comment)
      commentStore.emitChange()
      break
    default:
      //  NO-OP
  }
});


// Actions
class Actions {
  addComment(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    })
  }
}

let commentActions = new Actions()
