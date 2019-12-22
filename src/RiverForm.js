import React from 'react';

class RiverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station_array: [],
      isLoading: false,
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioChange(event) {
    console.log(event.currentTarget.value);
    this.setState({
      abbrev: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    alert('These rivers were selected: ' + event );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose the rivers you'd like to see:
          <input
            type='radio'
            name='South Platte River Below Cheesman Reservoir'
            value='PLACHECO'
            checked={this.state.abbrev === 'PLACHECO'}
            onChange={this.handleRadioChange}
          /> test
          <input
            type='radio'
            name='South Platte River Below Cheesman Reservoir'
            value='PLACHECO'
            checked={this.state.abbrev === 'PLACHECO'}
            onChange={this.handleRadioChange}
          /> test
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }

}

export default RiverForm;
