var CommentForm = React.createClass({

  getInitialState: function() {
    this.defaultState = { body: "", author: "" };
    return this.defaultState;
  },

  submitComment: function(event) {
    event.preventDefault();
    Actions.addComment(this.state);
    this.setState(this.defaultState);
  },

  onFieldChange: function(event) {
    var prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop)
  },

  render: function() {
    return (
       <form>
        <label>Author</label>
        <input type='text' name='author' onChange={this.onFieldChange} value={this.state.author} />
        <label>Comment</label>
        <textarea name='body' value={this.state.body} onChange={this.onFieldChange} />
        <button onClick={this.submitComment} type="submit" >Submit</button>
      </form>
    );
  },

})
