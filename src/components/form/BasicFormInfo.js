import React from 'react';

import SimpleInput from '../helpers/SimpleInput';

function saveToLocalStorage(inputName, value) {
  localStorage.setItem(inputName, value);
}

export default function BasicFormInfo() {
  const name = localStorage.getItem('name');
  const title = localStorage.getItem('title');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');
  const address = localStorage.getItem('address');
  const address2 = localStorage.getItem('address2');
  const city = localStorage.getItem('city');
  const country = localStorage.getItem('country');
  const profile = localStorage.getItem('profile');

  return (
    <div>
      <div className="slideInFromBottom delay-8 is-third">
        <SimpleInput size="big" actualValue={name} defaultValue="Full Name" icon="user" callback={(value) => saveToLocalStorage('name', value)} />
      </div>
      <div className="flex slideInFromBottom delay-8 is-two-third">
        <SimpleInput size="medium" actualValue={title} defaultValue="Job Title" icon="briefcase" callback={(value) => saveToLocalStorage('title', value)} />
        <SimpleInput size="medium" actualValue={email} defaultValue="yourEmail@mail.to" icon="envelope" callback={(value) => saveToLocalStorage('email', value)} />
        <SimpleInput size="medium" actualValue={phone} defaultValue="123456789" icon="phone" callback={(value) => saveToLocalStorage('phone', value)} />
      </div>
      <hr className="slideInFromBottom delay-8" />
      <div className="flex">
        <div className="is-third slideInFromLeft delay-9">
          <span className="profileTitle">
            <span className="icon">
              <i className="fas fa-map-marker-alt" />
            </span>
            &nbsp;
            Details
          </span>
          <br />
          <br />
          <SimpleInput size="medium" actualValue={address} defaultValue="Address Line 1" icon="map-marker-alt" callback={(value) => saveToLocalStorage('address', value)} />
          <SimpleInput size="medium" actualValue={address2} defaultValue="Address Line 2" icon="map-marker-alt" callback={(value) => saveToLocalStorage('address2', value)} />
          <SimpleInput size="medium" actualValue={city} defaultValue="City" icon="city" callback={(value) => saveToLocalStorage('city', value)} />
          <SimpleInput size="medium" actualValue={country} defaultValue="Country" icon="globe" callback={(value) => saveToLocalStorage('country', value)} />
        </div>
        <div className="is-two-third slideInFromTop delay-9">
          <span className="profileTitle">Profile</span>
          <SimpleInput size="description" actualValue={profile} defaultValue="Profile Description" icon="user" callback={(value) => saveToLocalStorage('profile', value)} />
        </div>
      </div>
      <hr className="slideInFromBottom delay-9" />
    </div>
  );
}
