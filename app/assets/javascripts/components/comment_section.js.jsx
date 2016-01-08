var CommentSection = React.createClass({

  // getInitialState: function() {
  //   // debugger
  //   return { comments: JSON.parse(this.props.comments) };
  // },

  componentDidMount: function() {
    Actions.setComments(JSON.parse(this.props.comments))
  },

  // contextTypes: {
  //   Actions: React.PropTypes.func.isRequired
  // },
  //
  // childContextTypes: {
  //   Store: React.PropTypes.object.isRequired,
  //   Actions: React.PropTypes.func.isRequired
  // },

  // getChildContext: function() {
  //   return {
  //     store: Store,
  //     actions: Actions
  //   }
  // },

  render: function() {
    // Actions.setComments(this.state.comments)
    return <div>
      <CommentForm />
      <CommentList />
    </div>
  }

})
