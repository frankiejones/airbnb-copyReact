import React, {Component} from 'react';
import './App.css';
import MainImage from './components/MainImage';
import bedroom1 from './bedroom1.jpg';
import bedroom2 from './bedroom2.jpg';
import garden from './garden1.jpg';
import profile1 from './profile1.png';
import profile2 from './profile2.png';
import profile3 from './profile3.png';

class App extends Component {
  render () {
    return (
      <div className= "container">
        <div><MainImage img={bedroom1} para="Frankie was such a great host during our time in Manchester. She made us feel at home and ws helpful with any questions we had about directions or things to do. She has..." profile={profile1} name="Frankie" city="Manchester"/></div>
        <div><MainImage img={bedroom2} para="Very accomodating with my booking and welcoming to all of us. Thanks!" profile={profile2} name="Sam" city="London"/></div>
        <div><MainImage img={garden} para="Wow, Lauren is a truly amazing person. 1st class accomodations and we got the difficult news that a loved one had passed the morning we were scheduled to leave Laure..." profile={profile3} name="Lauren" city="Glasgow"/></div>
      </div>
    )
  }
}

export default App;
