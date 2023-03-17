import React from 'react';
import {NavLink} from 'react-router-dom';


function GalleryNavigation(props) {
	let galleries = props.galleries.map(ele => {
		return(
			<nav>
				<NavLink to="/">
				<li key={ele.id}>{ele.name}</li> 
				</NavLink>
			</nav>
		)
	})
	return ( 
		<nav>
			<h1>{galleries}</h1>
		</nav>
	)
}

export default GalleryNavigation;