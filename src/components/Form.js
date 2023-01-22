import React from 'react';
import ProfileImagePicker from './ProfileImagePicker';
import BasicFormInfo from './BasicFormInfo';
import SkillsFormInfo from './SkillsFormInfo';

export default function Form() {
  return (
    <div className="center slideInFromTop delay-6">
      <div className="box">
        <div className="form">
          <ProfileImagePicker />
          <BasicFormInfo />
          <div className="flex">
            <div className="is-third slideInFromTop delay-9">
              <SkillsFormInfo />
            </div>
            <div className="is-two-third slideInFromTop delay-9">
              <span className="profileTitle"> Experience </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
