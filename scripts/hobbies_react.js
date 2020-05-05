'use strict';

const learning_details = React.createElement;
const outdoors_details = React.createElement;
const traveling_details = React.createElement;

//class for the Leanring hobby
class SelectedLearning extends React.Component {
  constructor(props) {
    super(props);
    //initiates the state of the selectedLearning variable so that it doesn't change until clicked
    this.state = { selectedLearning: false };
  }
  //fuction that runs on load
  render() {
    //if the selectedLearning state is true, the div inn the HTML is replaced with the text below
    if (this.state.selectedLearning) {
      return learning_details('div',
      { onClick: () => this.setState({ selectedLearning: false }) },
      //'\u25BC' adds a down pointing black triangle to the beginning of the details to show it has been expanded
      '\u25BC I love learning about anything and everything. I would much rather know a little about everything than a lot about any one thing. This universe is enormous and I intend to understand as much about it as I can while I am here. '
      );
    } 
    return outdoors_details(
      'div',
      { onClick: () => this.setState({ selectedLearning: true }) },
      //'\u25B7' adds right pointing white triangle to show the details have not been expanded
      '\u25B7Learning'
    );
  }
}

class SelectedOutdoors extends React.Component {
  constructor(props) {
    super(props);
    //initiates the state of the selectedOutdoors variable so that it doesn't change until clicked
    this.state = { selectedOutdoors: false };
  }
  //fuction that runs on load
  render() {
    //if the selectedOutdoors state is true, the div inn the HTML is replaced with the text below
    if (this.state.selectedOutdoors) {
      return outdoors_details('div',
      { onClick: () => this.setState({ selectedOutdoors: false }) },
      //'\u25BC' adds a down pointing black triangle to the beginning of the details to show it has been expanded
      '\u25BC The outdoors has always been a place I have loved since I was a kid. It was where I spent the best times with family and friends. As I got older, my love and appreciation for the outdoors has only grown.'
      );
    }
    return outdoors_details(
      'div',
      { onClick: () => this.setState({ selectedOutdoors: true }) },
      //'\u25B7' adds right pointing white triangle to show the details have not been expanded
      '\u25B7Outdoors'
    );
  }
}

class SelectedTraveling extends React.Component {
  constructor(props) {
    super(props);
    //initiates the state of the selectedTraveling variable so that it doesn't change until clicked
    this.state = { selectedTraveling: false };
  }
 //fuction that runs on load
 render() {
   //if the selectedTraveling state is true, the div inn the HTML is replaced with the text below
    if (this.state.selectedTraveling) {
      return traveling_details('div',
      { onClick: () => this.setState({ selectedTraveling: false }) },
      //'\u25BC' adds a down pointing black triangle to the beginning of the details to show it has been expanded
      '\u25BC My enjoyment of traveling is not new. I have always traveled across the country to visit family and to go on vacations with family. Growing up, I never got the opportunity to travel abroad but now that I am older that is my goal!'
      );
    }
    return traveling_details(
      'div',
      { onClick: () => this.setState({ selectedTraveling: true }) } ,
      //'\u25B7' adds right pointing white triangle to show the details have not been expanded
      '\u25B7Traveling'
    );
  }
}

const learningDomContainer = document.querySelector('#learning_hobby_textbox');
ReactDOM.render(learning_details(SelectedLearning), learningDomContainer);

const outdoorsDomContainer = document.querySelector('#outdoors_hobby_textbox');
ReactDOM.render(outdoors_details(SelectedOutdoors), outdoorsDomContainer);

const travelingDomContainer = document.querySelector('#traveling_hobby_textbox');
ReactDOM.render(traveling_details(SelectedTraveling), travelingDomContainer);