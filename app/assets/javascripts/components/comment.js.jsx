var Comment = React.createClass({

  contextTypes() {
    return {
      actions: React.PropTypes.object.isRequired
    }
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

  render: function() {

    var replyText = this.state.isReplying ? "Hide" : "Reply";

    return (
      <li className='comment row collapse'>

        <blockquote>
          {this.props.body}
          <cite className="right"> by {this.props.author}</cite>
        </blockquote>

        <button className='button tiny secondary' onClick={this.onToggleReply}>{replyText}</button>

        <CommentForm
          parent_id={this.props.id}
          isReplying={this.state.isReplying}
          onCommentSubmitted={this.onCommentSubmitted}
          />
        <CommentList parent_id={this.props.id} />

      </li>);
  }

});


// class Comment extends React.Component {
//   static get propTypes() {
//     return {
//       id: React.PropTypes.number,
//       author: React.PropTypes.string,
//       body: React.PropTypes.string,
//       rank: React.PropTypes.number
//     }
//   }
//
//   constructor()  {
//     super()
//     this.state = { isReplying: false }
//   }
//
//   onToggleReply() {
//     this.setState({ isReplying: !this.state.isReplying })
//   }
//
//   render() {
//     const replyText = this.state.isReplying ? "Hide" : "Reply";
//     return (
//       <li className='comment row collapse'>
//
//         <blockquote>
//           {this.props.body}
//           <cite className="right"> by {this.props.author}</cite>
//         </blockquote>
//
//         <button className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</button>
//
//         <CommentForm parent_id={this.props.id} isReplying={this.state.isReplying} />
//         <CommentList parent_id={this.props.id} />
//
//       </li>);
//   }
//
// }
