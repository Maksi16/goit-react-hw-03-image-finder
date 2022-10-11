import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, SearchForm, SearchInput } from './Searchbar.style';

export class Searchbar extends Component {
  state = {
    ImgName: '',
  };
  handleNameChenge = e => {
    this.setState({ ImgName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.ImgName.trim() === '') {
      alert('Please, write the correct query!');
      return;
    }
    this.props.onSubmit(this.state.ImgName);
    this.setState({ ImgName: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <AiOutlineSearch type="submit">
            <span class="button-label">Search</span>
          </AiOutlineSearch>

          <SearchInput
            value={this.state.ImgName}
            onChange={this.handleNameChenge}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
