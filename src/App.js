import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/gallerynavigation/index.js";

function App() {
  return (
	<GalleryNavigation galleries={harvardArt.records} info={harvardArt.info}/>
  );
}

export default App;
