import axios from 'axios';
import { withRouter } from 'next/router';

// const Post = (props) => (
// 	<h1>You are looking at post #{props.router.query.id}</h1>
// );

// export default withRouter(Post);

const Post = ({ id, comments }) => (
	<div>
		<h1>Comments for post #{id}</h1>
		{comments.map((comment) => <Comment {...comment} key={comment.id} />)}
	</div>
);

const Comment = ({ email, body }) => (
	<div>
		<h5>{email}</h5>
		<p>{body}</p>
	</div>
);

Post.getInitialProps = async ({ query }) => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
	);
	const { data } = res;
	return { ...query, comments: data };
};

export default Post;
