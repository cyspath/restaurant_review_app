var CommentList = React.createClass({

  contextTypes: {
      store: React.PropTypes.object.isRequired,
      actions: React.PropTypes.object.isRequired
  },

  // run once right after a component is mounted on DOM
  componentDidMount: function() {
    this.context.store.addChangeListener(this._onChange);
  },

  // runs once right before component is removed
  componentWillUnmount: function() {
    this.context.store.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <ul>
        {this.context.store.comments(this.props.parent_id).map(function(comment, i) {
          return <Comment key={i} {... comment} />;
        })}
      </ul>
    );
  },

  _onChange: function() {
    this.forceUpdate();
  }

})
