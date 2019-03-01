import React, {Component} from 'react';
import './Home.css';
import UnityGame from './game-holder';
import img_android from './images/android.png';
import img_316 from './images/316_home.png';
import img_pickup_home from './images/pick_up_home.png';
import img_bee_clicker from './images/bee_clicker.png';

const pickupDesc = "This game investigates changing scenees and inventory slots\
  with interactable items. You are inside the Innsmouth Hotel. (Inspired by H.P.\
  Lovecraft short stories.) With the Deep Ones closing in, you must find materials\
  around the hotel to help escape unscathed. Items currently appear as white cubes\
  that place items in the inventory when interacted with. Open doors to check rooms,\
  pick up items, then locate the escape area. (Press F to interact.) Once you've made\
  it back to the homescreen you're safe!\
  ";
const beeClickerDesc = "Exploring raycasting, instatiating objects, and menus Bee\
 Clicker is a game where your character is in the middle with bees flying towards you.\
 The bees will damage you and when your health reaches zero or the timer runs out it\
 is game over. Kill bees to earn points, collect stumps to earn time, and collect\
 mushroom tops to regain health. Try to the the highest score!";

 const runnerDBDesc = "Creating a Flask Application with SQL, we (a group of five)\
  created an application that allows for the querying of the power 5 conferences\
  using SQL Alchemy. Projected consisted of gathering the data, creating SQL tables\
  through converting schema design and ER diagrams, producing queries, and linking\
  our DB with the Flask App."

const lost_and_found = "Android application made in cs290 Spring of 2018 with a group of four\
  members. The app allows users to create their own authenticated log in, post to a message\
  board, and access a map view of missing items. The goal was for students on campus to be\
  able to communicate and locate missing items in one convenient spot. Firebase was used to\
  store information and for user authentication and Node was used as a backend for the messaging\
  system. Posting messages sent to a universal board with a notification system for new messages\
  received."

class Home extends Component {
  render() {
    return (<main className="Home">
      <h2 className="App-proj-title">Unity Games:</h2>
      <div className="proj-container">
        <div className="single_game">
          <img className="images" src={img_pickup_home}/>
          <UnityGame name="Pick Up" linker="https://s-garrett.github.io/portfolio/src/final_proj.html" paragraph={pickupDesc}/>
        </div>
        <div className="single_game">
          <img className="images" src={img_bee_clicker}/>
          <UnityGame name="Bee Clicker" linker="https://s-garrett.github.io/portfolio/src/bee_clicker.html" paragraph={beeClickerDesc}/>
        </div>
      </div>
      <h2 className="App-proj-title">Applications:</h2>
      <div className="proj-container">
        <div className="single_game">
          <img className="images" src={img_316}/>
          <UnityGame name="Power 5 Conference Distance Database" linker="https://github.com/s-garrett/cs316_project" paragraph={runnerDBDesc}/>
        </div>
        <div className="single_game">
          <img className="images" src={img_android}/>
          <UnityGame name="Lost and Found" linker="https://github.com/s-garrett/LostandFound" paragraph={lost_and_found}/>
        </div>
      </div>
    </main>);
  }
}

export default Home;
