import {Link, useParams} from 'react-router-dom';
import './ArtImageTile.css';

function ArtImageTile({ art }) {
	const { galleryId } = useParams();


	if (!art.images[0]) {
		return 
		<Link className="image-tile" to={`/gallerties/${galleryId}/art/${art.id}`}>
			{art.title}
		</Link>
	}
 		
	return (
		<Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
			<img height="100px" width="100px" src={art.images[0].baseimageurl} alt={art.title} />
		</Link>
		)
}

export default ArtImageTile