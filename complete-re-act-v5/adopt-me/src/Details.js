import React from "react";
import Carousel from "./Carousel.js";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";
import ErrorBoundary from "./ErrorBoundary.js";
import ThemeContext from "./ThemeContext.js";
import Modal from "./Modal.js";

class Details extends React.Component {
  state = { loading: true, showModal: false };
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) =>
        this.setState({
          url: animal.url,
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

  toggleModal = () => this.setState(prev => ({ showModal: !prev.showModal }));
  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      animal,
      breed,
      description,
      name,
      location,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        {/* 
          This console.log proves that the portal that is a child of this div will still
          have its event bubble from where it is on the virtual DOM, not the div that is
          sibling to the root div in the index.html
        */}
        {/* eslint-disable-next-line */}
        <div onClick={console.log}>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {themeHook => (
              <button
                style={{ backgroundColor: themeHook[0] }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
