var CommentSection = React.createClass({

  childContextTypes: {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  getChildContext: function() {
    return {
      store: Store,
      actions: Actions
    }
  },

  componentDidMount: function() {
    Actions.setComments(JSON.parse(this.props.comments))
    Actions.restaurantId = this.props.restaurant_id
    Actions.startRealtimeInterval()
  },

  render: function() {
    return <div>
      <CommentForm isReplying={true} />
      <CommentList parent_id={null} />
    </div>
  }

})
