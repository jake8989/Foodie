import React from 'react';
import './List.css';
const List = (props) => {
	return (
		<div className="holder">
			<h1 className="title">{props.title}</h1>
			<img className="res__img" src={props.img} alt="" />
			<p className="cal">
				{' '}
				<strong>Calories: </strong>
				{props.cal}
			</p>
			<h3 className="cal">
				Ingredients <br />
			</h3>
			<ol className="i__">
				{props.ings.map((ing, ind) => (
					<li key={ind} className="item">
						{ing.text}
					</li>
				))}
			</ol>
		</div>
	);
};

export default List;
