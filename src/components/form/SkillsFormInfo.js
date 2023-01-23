import React from 'react';

import SumableInput from '../helpers/SumableInput';
import IconButton from '../helpers/IconButton';

export default class SkillsFormInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {},
    };
  }

  componentDidMount() {
    this.loadState();
  }

  loadState = () => {
    const skills = localStorage.getItem('skills');
    if (skills) {
      this.setState({ skills: JSON.parse(skills) });
    } else {
      this.setState({ skills: {} });
    }
  }

  addSkill = (skill) => {
    const { skills } = this.state;
    skills[skill] = skill;
    this.setState({ skills });
    localStorage.setItem('skills', JSON.stringify(skills));
    // wait for the state to update before focusing on the new skill
    setTimeout(() => {
      const newSkill = document.getElementById(skill);
      newSkill.focus();
    }, 0);
  }

  removeSkill = (skillId) => {
    const { skills } = this.state;
    delete skills[skillId];
    this.setState({ skills });
    localStorage.setItem('skills', JSON.stringify(skills));
  }

  editSkill = (skillId, newSkill) => {
    const { skills } = this.state;
    skills[skillId] = newSkill;
    if (skillId !== newSkill) {
      skills[newSkill] = skills[skillId];
      delete skills[skillId];
    }
    if (skillId === 'New Skill' || newSkill === '') {
      delete skills[skillId];
    }
    this.setState({ skills });
    localStorage.setItem('skills', JSON.stringify(skills));
  }

  render() {
    const { skills } = this.state;
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
            onClick={() => this.addSkill('New Skill')}
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
            removeInput={this.removeSkill}
            editInput={(value) => this.editSkill(skill, value)}
          />
        ))}
      </div>
    );
  }
}
