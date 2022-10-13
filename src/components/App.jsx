import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    searchImg: '',
  };
  hendleFormSubmit = searchImg => {
    this.setState({ searchImg });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGalleryItem searchImg={this.state.searchImg} />
      </div>
    );
  }
}
