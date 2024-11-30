import { Component } from "react";
import axios from "axios";
import { GALLERY_IMAGES_API_URL } from "../constants";
import GalleryListing from "../components/Gallery";

class Gallery extends Component {

    state = {
      images: [],
      carouselOpen: false,
      selectedImage: false,
    };

    componentDidMount() {
      this.resetState();
    }

    getData = () => {
      axios.get(GALLERY_IMAGES_API_URL).then(res => this.setState({ images: res.data }));
    };

    resetState = () => {
      this.getData();
    };


  render() {
    return (
        <div class="min-h-screen">
          <GalleryListing
            images = {this.state.images}
          />
        </div>
    );
}
}

export default Gallery;