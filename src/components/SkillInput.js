import React from 'react';
import PropTypes from 'prop-types';

export default function SkillInput(props) {
  const {
    skillId,
    skillName,
    removeSkill,
    editSkill,
  } = props;

  let status = 'success';
  if (
    skillName === ''
    || skillName === ' '
    || skillName === undefined
    || skillName === null
    || skillName === 'New Skill'
  ) {
    status = 'fail';
  }

  return (
    <div className="flex is-fullWidth">
      <span className={`medium formIcon left ${status}`}><i className="fas fa-angle-right" /></span>
      <h2
        id={skillId}
        className={`medium formGroup borderRadius ${status}`}
        contentEditable="true"
        suppressContentEditableWarning="true"
        onFocus={(e) => {
          if (e.target.textContent === 'New Skill') {
            e.target.textContent = '';
          } else {
            e.target.textContent = skillName;
          }
        }}
        onBlur={(e) => {
          if (e.target.textContent === '') {
            e.target.textContent = 'New Skill';
          }
          editSkill(skillId, e.target.textContent);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.target.blur();
          }
        }}
      >
        {skillName}
      </h2>
      <div
        className="medium formIcon right danger"
        onClick={() => removeSkill(skillId)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            removeSkill(skillId);
          }
        }}
      >
        X
      </div>
    </div>
  );
}

SkillInput.propTypes = {
  skillId: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
  removeSkill: PropTypes.func.isRequired,
  editSkill: PropTypes.func.isRequired,
};
