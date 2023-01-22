import React from 'react';

import InputElement from './inputElement';

export default function BasicFormInfo() {
  return (
    <div>
      <div className="slideInFromBottom delay-8">
        <InputElement size="big" inputName="name" defaultValue="Full Name" icon="user" />
      </div>
      <div className="flex slideInFromBottom delay-8 is-two-third">
        <InputElement size="medium" inputName="title" defaultValue="Job Title" icon="briefcase" />
        <InputElement size="medium" inputName="email" defaultValue="yourEmail@mail.to" icon="envelope" />
        <InputElement size="medium" inputName="phone" defaultValue="123456789" icon="phone" />
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
          <InputElement size="medium" inputName="address" defaultValue="Address Line 1" icon="map-marker-alt" />
          <InputElement size="medium" inputName="address2" defaultValue="Address Line 2" icon="map-marker-alt" />
          <InputElement size="medium" inputName="city" defaultValue="City" icon="city" />
          <InputElement size="medium" inputName="country" defaultValue="Country" icon="globe" />
        </div>
        <div className="is-two-third slideInFromTop delay-9">
          <span className="profileTitle">Profile</span>
          <InputElement size="description" inputName="Profile" defaultValue="Profile Description" icon="user" />
        </div>
      </div>
      <hr className="slideInFromBottom delay-9" />
    </div>
  );
}
