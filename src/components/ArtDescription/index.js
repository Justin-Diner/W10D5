import { useParams, Link } from 'react-router-dom';
import './ArtDescription.css'
import { useState, useEffect } from 'react';

function ArtDescription({gallery}) {
	const {galleryId, artId } = useParams();
	const [colorNum, setColorNum] = useState(
		localStorage.getItem('colorStatus') || 0
	);
	const [colorStatus, setColorStatus] = useState(
		localStorage.getItem('colorStatus') || 0
	);
	
	const art = gallery.objects.find(art => art.id === Number(artId));
	const colors = art.colors.map(selectedColor => {
		return selectedColor.color;
	})

	useEffect(() => {
		const colorInterval = setInterval(() => {
			setColorNum(prevNum => ++prevNum % colors.length);
		}, 3000)

		return () => clearInterval(colorInterval)
	}, []);

	useEffect(() => {
		localStorage.setItem('colorStatus', colorNum);
		setColorNum(localStorage.getItem('colorStatus'));
		setColorStatus(localStorage.colorStatus)
	}, [colorNum]);


	return (
		<div className="art-description" style={{
				backgroundColor: colors[colorStatus],
				transition: 'background-color 4s',
			}}>
			<a href={art.url}><h3>{art.title}</h3></a>
			<Link to={`/galleries/${galleryId}`}> Back to {gallery.name} Gallery </Link>
			<p> Credit: {art.creditline}</p>
			<p>Technique: {art.technique}</p>
			<p>Division: {art.division}</p>
			<div className="art-image-list">
        {art.images.map(image => (
          <img src={image.baseimageurl} key={image.imageid} alt={art.title} />
        ))}
      </div>
		</div>
	)
}

export default ArtDescription;