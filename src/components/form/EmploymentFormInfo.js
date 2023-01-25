import React, { useState, useEffect } from 'react';

import SimpleInput from '../helpers/SimpleInput';
import SumableInput from '../helpers/SumableInput';
import IconButton from '../helpers/IconButton';
import DateInput from '../helpers/DateInput';

const EmploymentFormInfo = () => {
  const [employments, setEmployments] = useState({});

  useEffect(() => {
    const employmentsFromStorage = localStorage.getItem('employments');
    if (employmentsFromStorage) {
      const parsedEmployments = JSON.parse(employmentsFromStorage);
      if (JSON.stringify(parsedEmployments) !== JSON.stringify(employments)) {
        setEmployments(parsedEmployments);
      }
    } else {
      setEmployments({});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('employments', JSON.stringify(employments));
  }, [employments]);

  const addEmployment = () => {
    const newEmployment = {
      company: 'Company',
      position: 'Position',
      startDate: 'Start Date',
      endDate: 'End Date',
      descriptions: {},
    };
    setEmployments({ ...employments, [Object.keys(employments).length]: newEmployment });
  };

  const removeEmployment = (key) => {
    const newEmployments = { ...employments };
    delete newEmployments[key];
    setEmployments(newEmployments);
  };

  const editEmployment = (key, name, value) => {
    const newEmployments = { ...employments };
    newEmployments[key][name] = value;
    setEmployments(newEmployments);
  };

  const addDescription = (key, description) => {
    const newEmployments = { ...employments };
    newEmployments[key].descriptions[description] = description;
    setEmployments(newEmployments);
    setTimeout(() => {
      const newDescription = document.getElementById(description);
      newDescription.focus();
    }, 0);
  };

  const removeDescription = (key, id) => {
    const newEmployments = { ...employments };
    delete newEmployments[key].descriptions[id];
    setEmployments(newEmployments);
  };

  const editDescription = (key, id, value) => {
    const newEmployments = { ...employments };
    newEmployments[key].descriptions[id] = value;
    if (id !== value) {
      newEmployments[key].descriptions[value] = newEmployments[key].descriptions[id];
      delete newEmployments[key].descriptions[id];
    }
    if (id === 'New Description' || value === '') {
      delete newEmployments[key].descriptions[id];
    }
    setEmployments(newEmployments);
  };

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
          onClick={addEmployment}
          icon="fas fa-plus"
        />
      </span>
      {Object.keys(employments).map((key) => (
        <div key={key} className="p-1">
          <hr />
          <div className="flex mobile">
            <div className="is-half flex">
              <SimpleInput
                size="big"
                defaultValue="Position"
                icon=""
                callback={(value) => editEmployment(key, 'position', value)}
                actualValue={employments[key].position}
              />
            </div>
            <div className="is-half flex">
              <span className="hidden-mobile">At: </span>
              <SimpleInput
                size="big"
                defaultValue="Company"
                icon=""
                callback={(value) => editEmployment(key, 'company', value)}
                actualValue={employments[key].company}
              />
            </div>
            <div>
              <IconButton
                className="button employment close"
                onClick={() => removeEmployment(key)}
                icon="fas fa-times"
              />
            </div>
          </div>
          <hr />
          <div className="flex mobile mt-1">
            <div className="is-half flex p-1">
              <DateInput
                actualValue={employments[key].startDate}
                callback={(value) => editEmployment(key, 'startDate', value)}
                defaultValue="Start Date"
                prefix="From: "
                dateRange="past"
              />
              <DateInput
                actualValue={employments[key].endDate}
                callback={(value) => editEmployment(key, 'endDate', value)}
                defaultValue="End Date"
                prefix="To: "
                dateRange="past"
              />
            </div>
            <div className="is-half flex p-1">
              <span className="formIcon big"><i className="fas fa-pencil" /></span>
              <div className="descriptionTitle">
                Job Responsibilities
                <IconButton
                  className="descriptionButton"
                  onClick={() => addDescription(key, 'New Description')}
                  icon="fas fa-plus"
                />
              </div>
            </div>
          </div>
          <div>
            {Object.keys(employments[key].descriptions).map((id) => (
              <SumableInput
                key={id}
                inputId={id}
                inputName={employments[key].descriptions[id]}
                defaultValue="New Description"
                removeInput={(value) => removeDescription(key, value)}
                editInput={(value) => editDescription(key, id, value)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmploymentFormInfo;
