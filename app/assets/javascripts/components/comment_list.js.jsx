var CommentList = React.createClass({

  // contextTypes: {
  //   store: React.PropTypes.object.isRequired
  // },

  // run once right after a component is mounted on DOM
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  // runs once right before component is removed
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {Store.comments().map(function(comment) {
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
