import React from 'react';
import ProfileImagePicker from '../helpers/ProfileImagePicker';
import BasicFormInfo from './BasicFormInfo';
import SkillsFormInfo from './SkillsFormInfo';
import EmploymentFormInfo from './EmploymentFormInfo';

const Form = () => (
  <div className="center slideInFromTop delay-6">
    <div className="box">
      <div className="form">
        <ProfileImagePicker />
        <BasicFormInfo />
        <div className="flex mobile">
          <div className="is-third slideInFromLeft delay-10">
            <SkillsFormInfo />
          </div>
          <hr className="slideInFromRight delay-9" />
          <div className="is-two-third slideInFromBottom delay-10">
            <EmploymentFormInfo />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Form;
