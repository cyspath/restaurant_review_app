var CommentList = React.createClass({

  // run once right after a component is mounted on DOM
  componentDidMount: function() {
    commentStore.addChangeListener(this._onChange);
  },

  // runs once right before component is removed
  componentWillUnmount: function() {
    commentStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {
          // JSON.parse(this.props.comments).map(function(comment) {
          //   return <Comment key={comment.id} {... comment} />;
          // })
          commentStore.comments().map(function(comment) {
            return <Comment key={comment.id} {... comment} />;
          })
        }
      </div>
    );
  },

  _onChange: function() {
    this.forceUpdate();
  }

})


// destructor refactor - 'splat'
// rank={comment.rank} body={comment.body} author={comment.author}
// {... comment}
