import React from 'react';

import SimpleInput from '../helpers/SimpleInput';
import SumableInput from '../helpers/SumableInput';
import IconButton from '../helpers/IconButton';
import DateInput from '../helpers/DateInput';

export default class EmploymentFormInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employments: {},
    };
  }

  componentDidMount() {
    this.loadState();
  }

  componentDidUpdate() {
    this.saveState();
  }

  saveState = () => {
    const { employments } = this.state;
    localStorage.setItem('employments', JSON.stringify(employments));
  }

  loadState = () => {
    const employments = JSON.parse(localStorage.getItem('employments'));
    if (employments) {
      this.setState({ employments });
    }
  }

  addEmployment = () => {
    const { employments } = this.state;
    const newEmployment = {
      company: 'Company',
      position: 'Position',
      startDate: 'Start Date',
      endDate: 'End Date',
      descriptions: {},
    };
    this.setState(
      {
        employments: {
          ...employments,
          [Object.keys(employments).length]: newEmployment,
        },
      },
    );
  }

  removeEmployment = (key) => {
    const { employments } = this.state;
    delete employments[key];
    this.setState({ employments });
  }

  editEmployment = (key, name, value) => {
    const { employments } = this.state;
    employments[key][name] = value;
    this.setState({ employments });
  }

  addDescription = (key, description) => {
    const { employments } = this.state;
    const { descriptions } = employments[key];
    descriptions[description] = description;
    this.setState({ employments });
    setTimeout(() => {
      const newDescription = document.getElementById(description);
      newDescription.focus();
    }, 0);
  }

  removeDescription = (key, id) => {
    const { employments } = this.state;
    const { descriptions } = employments[key];
    delete descriptions[id];
    this.setState({ employments });
  }

  editDescription = (key, id, value) => {
    const { employments } = this.state;
    const { descriptions } = employments[key];
    descriptions[id] = value;
    if (id !== value) {
      descriptions[value] = descriptions[id];
      delete descriptions[id];
    }
    if (id === 'New Description' || value === '') {
      delete descriptions[id];
    }
    this.setState({ employments });
  }

  render() {
    const { employments } = this.state;
    return (
      <div>
        <span className="profileTitle">
          <span className="icon">
            <i className="fas fa-book" />
          </span>
          &nbsp;
          Employment History
          <IconButton
            className="titleButton"
            onClick={this.addEmployment}
            icon="fas fa-plus"
          />
        </span>
        <br />
        <br />
        {Object.keys(employments).map((key) => (
          <div key={key} className="p-1">
            <hr />
            <div className="flex">
              <div className="is-half flex">
                <span>Charge: </span>
                <SimpleInput
                  size="medium"
                  defaultValue="Position"
                  icon=""
                  callback={(value) => this.editEmployment(key, 'position', value)}
                  actualValue={employments[key].position}
                />
              </div>
              <div className="is-half flex">
                <span>At: </span>
                <SimpleInput
                  size="medium"
                  defaultValue="Company"
                  icon=""
                  callback={(value) => this.editEmployment(key, 'company', value)}
                  actualValue={employments[key].company}
                />
              </div>
              <div>
                <IconButton
                  className="button employment close"
                  onClick={() => this.removeEmployment(key)}
                  icon="fas fa-times"
                />
              </div>
            </div>
            <div className="flex mt-1">
              <div className="is-half flex">
                <span className="formIcon big"><i className="fas fa-pencil" /></span>
                <div className="descriptionTitle">
                  Job Responsibilities
                  <IconButton
                    className="descriptionButton"
                    onClick={() => this.addDescription(key, 'New Description')}
                    icon="fas fa-plus"
                  />
                </div>
              </div>
              <div className="is-half flex">
                <DateInput
                  actualValue={employments[key].startDate}
                  callback={(value) => this.editEmployment(key, 'startDate', value)}
                  defaultValue="Start Date"
                  prefix="From: "
                  dateRange="past"
                />
                <DateInput
                  actualValue={employments[key].endDate}
                  callback={(value) => this.editEmployment(key, 'endDate', value)}
                  defaultValue="End Date"
                  prefix="To: "
                  dateRange="past"
                />
              </div>
            </div>
            <div>
              {Object.keys(employments[key].descriptions).map((id) => (
                <SumableInput
                  key={id}
                  inputId={id}
                  inputName={employments[key].descriptions[id]}
                  defaultValue="New Description"
                  removeInput={(value) => this.removeDescription(key, value)}
                  editInput={(value) => this.editDescription(key, id, value)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
