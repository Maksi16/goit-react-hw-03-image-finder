import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    ImgName: '',
  };
  hendleFormSubmit = ImgName => {
    this.setState({ ImgName });
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=29588752-430649e043d243bbba80a88c8&q=yellow+flowers&image_type=photo'
    )
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />
      </div>
    );
  }
}
