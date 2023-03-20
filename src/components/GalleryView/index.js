import React from 'react';
import { useParams, Route, Redirect } from 'react-router-dom';
import ArtDescription from '../ArtDescription/index';
import ArtImageTile from '../ArtImageTile';
import './GalleryView.css';

function GalleryView({galleries}) {

	const { galleryId } = useParams();

  const gallery = galleries.find(gallery => gallery.gallerynumber === galleryId);

	if (!gallery) return (<Redirect to="/" />);

	return (
		<div>
			<h1> {gallery.name}</h1>
			<Route path="/galleries/:galleryId" exact>
				<div className="art-nav">
					{gallery.objects.map((art) => (
						<ArtImageTile art={art} key={art.id}/>
					))}
				</div>
			</Route>
			<Route path="/galleries/:galleryId/art/:artId">
						<ArtDescription gallery={gallery}/>
			</Route>
		</div>
	)
}

export default GalleryView;