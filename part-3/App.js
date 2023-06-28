const people = [
	{
		id : 1,
		name : "Jake",
		age : 16,
		hobbies : ["running", "barking", "tug"]
	},
	{
		id : 2,
		name : "Atticus",
		age : 21,
		hobbies : ["purrrr", "sleeping", "chasing things"]
	},
	{
		id : 3,
		name : "JohnJingleHimmerSmith",
		age : 18,
		hobbies : ["running", "barking", "tug"]
	}
];

const App = () => {
	
	return (
		<div>
			{ people.map(p => <Person key={p.id} name={p.name} age={p.age} hobbies={p.hobbies}/>) }
		</div>	
	)
}

ReactDOM.render(<App />, document.getElementById(
	"root"))