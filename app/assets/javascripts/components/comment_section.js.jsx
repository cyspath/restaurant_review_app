var CommentSection = React.createClass({

  getInitialState: function() {
    // debugger
    return { comments: JSON.parse(this.props.comments) };
  },

  // componentDidMount: function() {
  //   debugger
  //   Actions.setComments(JSON.parse(props.comments))
  // },

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
    Actions.setComments(this.state.comments)
    return <div>
      <CommentList />
    </div>
  }

})
