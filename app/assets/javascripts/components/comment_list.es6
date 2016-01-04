import Comment from '/components/comment'

class CommentList extends React.Component {

  static get contextTypes() {
    return {
      store: React.PropTypes.object.isRequired
    }
  }

  // run once right after a component is mounted on DOM
  componentDidMount() {
    this.context.store.addChangeListener(this._onChange.bind(this));
  }

  // runs once right before component is removed
  componentWillUnmount() {
    this.context.store.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return <div>
      {this.context.store.comments().map((comment) => {
        return <Comment key={comment.id} {... comment} />;
      })}
    </div>
  }

  _onChange() {
    this.forceUpdate();
  }

}
export default CommentList

// destructor refactor - 'splat'
// rank={comment.rank} body={comment.body} author={comment.author}
// {... comment}
