import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/gallerynavigation/index.js";
import GalleryView from "./components/GalleryView/index.js";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (

	<div className="page-wrapper">
			<GalleryNavigation galleries={harvardArt.records}/>
		<Switch>
			<Route path="/" exact>
				<h2>Harvard Art Museum</h2>
				<p>Look, but Don't Touch Please select a Gallery in the navigation bar.</p>
			</Route>
			<Route path="/galleries/:galleryId">
				<GalleryView galleries={harvardArt.records} />
			</Route>
			<Route>
				<h1>Page Not Found</h1>
			</Route>
		</Switch>
		
	</div>
  );
}

export default App;
