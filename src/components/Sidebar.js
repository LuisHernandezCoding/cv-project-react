import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="title slideInFromLeft delay-0">
        Curriculum Vitae App
      </h1>
      <hr />
      <div>
        <div className="p-1">
          <h2 className="subtitle slideInFromLeft delay-0">Create your CV</h2>
          <p className="text slideInFromLeft delay-1">
            Here you can create your CV and download it in PDF format.
            We have a lot of templates for you to choose from.
          </p>
          <p className="text slideInFromLeft delay-2">
            We make sure to include all the information you need to create your CV.
            <br />
            You can also add your own information if you want.
          </p>
          <p className="text subtitle slideInFromLeft delay-3">
            You can also save your CV and edit it later if you want.
          </p>
          <hr className="slideInFromLeft delay-4" />
          <p className="text slideInFromLeft delay-4">
            Start by filling out the form on the right.
            <br />
            First place your basic information then Add your skills and experience.
          </p>
          <p className="text slideInFromLeft delay-5">
            when you are done, click on the download button. and you will get your CV in PDF format.
          </p>
          <p className="text slideInFromLeft delay-6">
            Your Cv will be saved in your browser locally so you can edit it later.
          </p>
        </div>
      </div>
    </aside>
  );
}
