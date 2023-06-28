const Person = (props) => {
	let voteMsg;
	if(props.age >= 18) voteMsg = "Please go vote!";
	if(props.age < 18) voteMsg = "You must be 18";

	let name = props.name;
	if(name.length > 8) name = name.slice(0,7);
	return (
		<div>
		<p>Learn some information about this person.</p>
		<p>Name: {name}</p>
		<p>Age: {props.age}</p>
		<h3>{voteMsg}</h3>
		<h3>Hobbies:</h3>
		<ul>
			{ props.hobbies.map(h => <li>{h}</li>) }
		</ul>
		<hr/>
	</div>
	)
	
	
}