import React, { useState, useEffect } from 'react';

const ProfileImagePicker = () => {
  const [image, setImage] = useState('none');

  const loadState = () => {
    const imageFromStorage = localStorage.getItem('image');

    if (imageFromStorage || imageFromStorage !== null) {
      setImage(imageFromStorage);
    } else {
      setImage('none');
    }
  };

  useEffect(() => {
    loadState();
  }, []);

  const saveImage = (newImage) => {
    localStorage.setItem('image', newImage);
    setImage(newImage);
  };

  const openImageUploadWindow = () => {
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
          saveImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  if (image === 'none') {
    return (
      <div className="profileImage fail rollInFromLeft delay-7">
        <img src="https://placehold.jp/150x150.png" alt="profile" />
        <button type="button" className="imageButton button rounded" onClick={openImageUploadWindow}>
          <i className="fas fa-upload" />
        </button>
      </div>
    );
  }

  return (
    <div className="profileImage success rollInFromLeft delay-9">
      <img src={image} alt="profile" />
      <button type="button" className="imageButton button rounded" onClick={openImageUploadWindow}>
        <i className="fas fa-upload" />
      </button>
    </div>
  );
};

export default ProfileImagePicker;
