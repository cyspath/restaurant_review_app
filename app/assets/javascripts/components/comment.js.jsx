var Comment = React.createClass({

  contextTypes: {
    actions: React.PropTypes.object.isRequired
  },

  propTypes: {
    id: React.PropTypes.number,
    author: React.PropTypes.string,
    body: React.PropTypes.string,
    rank: React.PropTypes.number
  },

  getInitialState: function() {
    return { isReplying: false }
  },

  onToggleReply: function() {
    this.setState({ isReplying: !this.state.isReplying })
  },

  onCommentSubmitted: function(event) {
    this.setState({isReplying: false });
  },

  onUpvote: function(event) {
    this.context.actions.upvoteComment(this.props);
  },

  render: function() {
    var replyText = this.state.isReplying ? "Hide" : "Reply";

    return (
      <li className='comment row collapse'>

        <blockquote>
          {this.props.body}
          <cite>
            by {this.props.author}
            <span className='label secondary right'>{this.props.rank || 0}</span>
          </cite>
        </blockquote>

        <button className='button tiny secondary' onClick={this.onToggleReply}>{replyText}</button>
        <button className='button tiny' onClick={this.onUpvote} >+1</button>

        <CommentForm
          parent_id={this.props.id}
          isReplying={this.state.isReplying}
          onCommentSubmitted={this.onCommentSubmitted}
          />
        <CommentList parent_id={this.props.id} />

      </li>);
  }

});
