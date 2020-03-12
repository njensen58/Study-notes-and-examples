import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  // This one way to say, you will receive a prop called media and
  // we need to derive inital "photos" state from it.
  // essentially this is just making it so when I map the photos
  // below, I dont have to say "photo.large" instead of just "photo"
  static getDerivedStateFromProps({ media }) {
    let photos = [`http://placecorgi.com/600/600`];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  handleIndexClick = e => {
    // this is grabbing the data-index property from the event (img), and cooercing
    // it to be a number
    this.setState({
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // This comment below makes it so eslint lets us break
            // assessibility rules by putting an onclick on the img.
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
