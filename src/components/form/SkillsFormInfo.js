import React, { useState, useEffect } from 'react';
import SumableInput from '../helpers/SumableInput';
import IconButton from '../helpers/IconButton';

const SkillsFormInfo = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const skillsFromStorage = localStorage.getItem('skills');
    if (skillsFromStorage) {
      setSkills(JSON.parse(skillsFromStorage));
    } else {
      setSkills({});
    }
  }, []);

  const addSkill = (skill) => {
    setSkills({ ...skills, [skill]: skill });
    localStorage.setItem('skills', JSON.stringify({ ...skills, [skill]: skill }));
    setTimeout(() => {
      const newSkill = document.getElementById(skill);
      newSkill.focus();
    }, 0);
  };

  const removeSkill = (skillId) => {
    const newSkills = { ...skills };
    delete newSkills[skillId];
    setSkills(newSkills);
    localStorage.setItem('skills', JSON.stringify(newSkills));
  };

  const editSkill = (skillId, newSkill) => {
    const newSkills = { ...skills };
    newSkills[skillId] = newSkill;
    if (skillId !== newSkill) {
      newSkills[newSkill] = newSkills[skillId];
      delete newSkills[skillId];
    }
    if (skillId === 'New Skill' || newSkill === '') {
      delete newSkills[skillId];
    }
    setSkills(newSkills);
    localStorage.setItem('skills', JSON.stringify(newSkills));
  };

  return (
    <div>
      <span className="profileTitle">
        <span className="icon">
          <i className="fas fa-book" />
        </span>
        &nbsp;
        Skills
        <IconButton
          className="titleButton"
          onClick={() => addSkill('New Skill')}
          icon="fas fa-plus"
        />
      </span>
      <br />
      <br />
      {Object.keys(skills).map((skill) => (
        <SumableInput
          key={skill}
          inputId={skill}
          inputName={skills[skill]}
          defaultValue="New Skill"
          removeInput={removeSkill}
          editInput={(value) => editSkill(skill, value)}
        />
      ))}
    </div>
  );
};

export default SkillsFormInfo;
