import React from 'react';

export default class ProfileImagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'none',
    };
  }

  componentDidMount() {
    this.loadState();
  }

  loadState = () => {
    const image = localStorage.getItem('image');

    if (image || image !== null) {
      this.setState({ image });
    } else {
      this.setState({ image: 'none' });
    }
  }

  saveImage = (image) => {
    localStorage.setItem('image', image);
    this.setState({ image });
  }

  openImageUploadWindow = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg, image/png';
    input.multiple = false;
    input.maxFiles = 1;
    input.maxFileSize = 500000;
    input.onchange = () => {
      const file = input.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = () => {
          this.saveImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  render() {
    const { image } = this.state;

    if (image === 'none') {
      return (
        <div className="profileImage fail rollInFromLeft delay-7">
          <img src="https://placehold.jp/150x150.png" alt="profile" />
          <button type="button" className="imageButton" onClick={this.openImageUploadWindow}>
            <i className="fas fa-upload" />
          </button>
        </div>
      );
    }

    return (
      <div className="profileImage success rollInFromLeft delay-9">
        <img src={image} alt="profile" />
        <button type="button" className="imageButton" onClick={this.openImageUploadWindow}>
          <i className="fas fa-upload" />
        </button>
      </div>
    );
  }
}
