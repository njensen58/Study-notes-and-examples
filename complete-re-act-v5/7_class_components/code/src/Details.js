import React from "react";
import Carousel from "./Carousel.js";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) =>
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, description, name, location, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    );
  }
}

export default Details;
