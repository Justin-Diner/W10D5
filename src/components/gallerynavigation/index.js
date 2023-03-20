import React from 'react';
import  {NavLink } from 'react-router-dom';
import './GalleryNavigation.css';


function GalleryNavigation(props) {
	const galleries = props.galleries.map(gallery => {
		return(
				<NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
					{gallery.name} 
				</NavLink>
		)
	})
	return ( 
		<nav>
			<h1> Galleries </h1>
			<NavLink to='/' exact>Home</NavLink>
			{galleries}
		</nav>
	)
}

export default GalleryNavigation;