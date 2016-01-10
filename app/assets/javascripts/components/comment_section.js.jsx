var CommentSection = React.createClass({

  childContextTypes: {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  getChildContext: function() {
    return {
      store: Store,
      actions: Actions
    }
  },

  componentDidMount: function() {
    debugger
    Actions.setComments(JSON.parse(this.props.comments))
  },

  render: function() {
    return <div>
      <CommentForm isReplying={true} />
      <CommentList parent_id={null} />
    </div>
  }

})



//
// class CommentSection extends React.Component {
//
//   constructor(props) {
//     super()
//     this.store = new CommentStore()
//     this.actions = Actions
//     this.actions.setComments(JSON.parse(props.comments));
//   }
//
//   static get childContextTypes() {
//     return {
//       store: React.PropTypes.object.isRequired,
//       actions: React.PropTypes.func.isRequired
//     }
//   }
//
//   getChildContext() {
//     return {
//       store: this.store,
//       actions: this.actions
//     }
//   }
//
//   render() {
//     return <div>
//       <CommentForm isReplying={true} />
//       <CommentList parent_id={null} />
//     </div>
//   }
// }
