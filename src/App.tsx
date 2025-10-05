import React, { Component } from 'react';


import './app/styles/global.scss';
import { CvForm } from 'app/models/cvForm.model';

// Define the component's state type using your model
interface AppState {
  form: CvForm;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    // Initialize the state using your CvForm interface
    this.state = {
      form: {
        personal: {
          fullName: 'John Doe',
          email: 'john@example.com',
          phone: '+46 70 123 45 67',
        },
        summary: 'Motivated frontend developer passionate about clean design.',
      },
    };
  }

  render() {
    const { personal, summary } = this.state.form;

    return (
      <div className="App" style={{ padding: 20 }}>
        <h1>CV Creator (Class Component)</h1>

        <h2>Personal Info</h2>
        <p><strong>Name:</strong> {personal.fullName}</p>
        <p><strong>Email:</strong> {personal.email}</p>
        <p><strong>Phone:</strong> {personal.phone}</p>

        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    );
  }
}

export default App;
