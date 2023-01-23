import React from 'react';
import ProfileImagePicker from '../helpers/ProfileImagePicker';
import BasicFormInfo from './BasicFormInfo';
import SkillsFormInfo from './SkillsFormInfo';
import EmploymentFormInfo from './EmploymentFormInfo';

export default function Form() {
  return (
    <div className="center slideInFromTop delay-6">
      <div className="box">
        <div className="form">
          <ProfileImagePicker />
          <BasicFormInfo />
          <div className="flex">
            <div className="is-third slideInFromLeft delay-10">
              <SkillsFormInfo />
            </div>
            <div className="is-two-third slideInFromBottom delay-10">
              <EmploymentFormInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
