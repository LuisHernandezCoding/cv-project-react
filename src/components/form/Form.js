import React from 'react';
import ProfileImagePicker from '../helpers/ProfileImagePicker';
import BasicFormInfo from './BasicFormInfo';
import SkillsFormInfo from './SkillsFormInfo';
import IconButton from '../helpers/IconButton';

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
              <span className="profileTitle">
                <span className="icon">
                  <i className="fas fa-briefcase" />
                </span>
                &nbsp;
                Employment History
                <IconButton
                  className="button title"
                  onClick={() => null}
                  icon="fas fa-plus"
                />
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
