import React from 'react';

function GalleryNavigation(props) {
	let galleries = props.galleries.map(ele => {
		return <li key={ele.id}>{ele.name}</li> 
	})
	return ( 
		<h1>{galleries}</h1>
	)
}

export default GalleryNavigation;