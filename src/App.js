import './App.css';
import React, { useState, useEffect, useCotext } from 'react';
import List from './components/List';

function App() {
	const ID = 'b35dec28';
	const KEY = '1a3645ecbe1bb298893c72a60201e901';
	// const REQ = `"https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${KEY}"
	// `;
	// const [counter, setCounter] = useState(0);
	const [intRes, setRes] = useState([]);
	const [search, setSearch] = useState('');
	const [q, sq] = useState('');
	const [emp, setEmp] = useState(false);
	useEffect(() => {
		// console.log('Effect run');
		getResp();
		// setSearch('');
	}, [q]);

	const getResp = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}`
		);

		const data = await response.json();
		// console.log(data.hits);
		setRes(data.hits);
		setSearch('');
		// if (data.hits.size === 0) {
		// 	setEmp(true);
		// }
		// console.log(data.hits.size);

		// console.log(data.hits);
	};

	const buttonTag = (e) => {
		// e.preventDefault();
		// console.log(intRes);
		setSearch(e.target.value);
	};
	const getSearch = (e) => {
		e.preventDefault();
		if (search === '') {
			alert('Please Enter a recipe');
			return;
		}
		sq(search);
		//
	};
	// const a = [1823, 312];
	return (
		<div className="App">
			<h1 className="h__">Search Your Recipe (10 Best)</h1>
			<form className="form--main">
				<input
					onChange={buttonTag}
					type="text"
					value={search}
					className="search__bar"
					placeholder="Search For food?"
				/>
				<button onClick={getSearch} className="button">
					Search Items
				</button>
			</form>
			<div className="rendered__list">
				{intRes.map((res, ind) => (
					<List
						className="rendered__list__x"
						key={res.recipe.url}
						title={res.recipe.label}
						img={res.recipe.image}
						cal={res.recipe.calories}
						ings={res.recipe.ingredients}
					></List>
				))}
				{emp && <li>Sorry We Could'nt Find Any Item</li>}
			</div>
		</div>
	);
}

export default App;
