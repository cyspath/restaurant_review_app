// var CommentForm = React.createClass({
//
//   contextTypes: {
//     actions: React.PropTypes.func.isRequired
//   },
//
//   // run once right after a component is mounted on DOM
//   componentDidMount: function() {
//     this.context.addChangeListener(this._onChange);
//   },
//
//   // runs once right before component is removed
//   componentWillUnmount: function() {
//     this.context.removeChangeListener(this._onChange);
//   },
//
//   render: function() {
//     return (
//       <div>
//         {this.context.comments().map(function(comment) {
//             return <Comment key={comment.id} {... comment} />;
//           })
//         }
//       </div>
//     );
//   },
//
//   _onChange: function() {
//     this.forceUpdate();
//   }
//
// })
