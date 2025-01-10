import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
//import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyGallery from "./components/MyGallery";

function App() {
  return (
    <>
      <MyHeader />
      <MyGallery
        query={"http://www.omdbapi.com/?apikey=57fb0e95&s=Harry%20Potter"}
        carousel={0}
        galleryName={"Harry Potter"}
      />
      <MyGallery
        query={
          "http://www.omdbapi.com/?apikey=57fb0e95&s=The%20Lord%20Of%20The%20Rings"
        }
        carousel={1}
        galleryName={"The Lord Of The Rings"}
      />
      <MyGallery
        query={"http://www.omdbapi.com/?apikey=57fb0e95&s=Twilight"}
        carousel={2}
        galleryName={"Twilight"}
      />
      <MyFooter />
    </>
  );
}

export default App;
