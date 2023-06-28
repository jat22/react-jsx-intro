const Tweet = (props) => (
	<div>
		<p>User: {props.username}</p>
		<p>Name: {props.name}</p>
		<p>Date: {props.date}</p>
		<p>Message: {props.message}</p>
		<hr/>
	</div>
);