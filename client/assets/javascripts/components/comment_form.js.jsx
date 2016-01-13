var CommentForm = React.createClass({

  getInitialState: function() {
    this.defaultState = { body: "", author: "" };
    return this.defaultState;
  },

  contextTypes: function() {
    return {
      actions: React.PropTypes.object.isRequired
    }
  },

  propTypes: function() {
    return {
      isReplying: React.PropTypes.bool,
      onCommentSubmitted: React.PropTypes.func,
      parent_id: React.PropTypes.number
    }
  },

  submitComment: function(event) {
    event.preventDefault();
    Actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }));
    this.setState(this.defaultState);
    if (this.props.onCommentSubmitted) {
      // root form will not have this props and thus will not hide
      this.props.onCommentSubmitted();
    }
  },

  onFieldChange: function(event) {
    var prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop)
  },

  render: function() {
    return (
      <div>

        <form className={ this.props.isReplying ? "" : "hide"}>
          <label>Author</label>
          <input type='text' name='author' onChange={this.onFieldChange} value={this.state.author} />
          <label>Comment</label>
          <textarea name='body' value={this.state.body} onChange={this.onFieldChange} />
          <button onClick={this.submitComment} type="submit" >Submit</button>
        </form>

      </div>
    );
  },

})
