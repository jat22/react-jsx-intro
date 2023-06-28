const App = () => {
	const tweets = [
		{
			id: 1,
			username : "apple",
			name : "Jarod",
			date : "Dec. 4, 2022",
			message : "This is a tweet about you."
		},
		{
			id : 2, 
			username : "rose",
			name : "Betty",
			date : "July 25, 1945",
			message : "What's up?"
		},
		{ 
			id : 3,
			username : "kringle",
			name : "Chris",
			date : "Dec. 25, 1985",
			message : "Merry Christmas"
		}
	]
	return (
		<div>
			{tweets.map(t => (
				<Tweet key={t.id} username={t.username} name={t.name} date={t.date} message={t.message} />
			))}

		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))