import React, {Component} from 'react';
import './Home.css';
import NewApp from '../game-holder/game-holder';
import MobileApp from '../mobile-game-holder/mobile-game-holder';
import img_android from '../../images/android.png';
import img_316 from '../../images/316_home.png';
import img_pickup_home from '../../images/pick_up_home.png';
import img_bee_clicker from '../../images/bee_clicker.png';

const pickupDesc = "This game investigates changing scenes and inventory slots\
  with interactable items. You are inside the Innsmouth Hotel. (Inspired by H.P.\
  Lovecraft short stories.) With the Deep Ones closing in, you must find materials\
  around the hotel to help escape unscathed. Items currently appear as white cubes\
  that move to your inventory when interacted with. Open doors to check rooms,\
  pick up items, then locate the escape area. (Press F to interact.) Once you've made\
  it back to the homescreen you're safe!";

const beeClickerDesc = "Exploring raycasting, instatiating objects, and menus, Bee\
 Clicker is a game where your character is in the middle with bees flying towards you.\
 The bees will damage you, and when your health reaches zero or the timer runs out, it\
 is game over. Kill bees to earn points, collect stumps to gain more time, and collect\
 mushroom tops to regain health. Try to get the highest score!";

const runnerDBDesc = "Creating a Flask Application with SQL, we (a group of five)\
  created an application that allows for the querying of the power 5 conferences\
  using SQL Alchemy. Projecting data that consists of distance runners on cross country\
  teams creating SQL tables. We converted schema design to ER diagrams and produced queries\
  finally, linking our DB with the Flask App.";

const lost_and_found = "Android application made in cs290 Spring of 2018 with a group of four\
  members. The app allows users to create their own authenticated log in, post to a message\
  board, and access a map view of missing items. The goal was for students on campus to be\
  able to communicate and locate missing items in one convenient spot. Firebase was used to\
  store information and for user authentication and Node was used as a backend for the messaging\
  system. Posting messages sent to a universal board with a notification system for new messages\
  received.";

class Home extends Component {
  render() {
    return (<main className="Home">



      <h2 className="App-proj-title">Unity Games:</h2>
      {/*
      <NewApp name="Pick Up" item={img_pickup_home} linker="https://github.com/s-garrett/VMS_unity/tree/master/final_proj" paragraph={pickupDesc}/>

      <NewApp name="Bee Clicker" item={img_bee_clicker} linker="https://github.com/s-garrett/VMS_unity/tree/master/clicker_game_proj3" paragraph={beeClickerDesc}/>
      */}

      <h2 className="App-proj-title">Applications:</h2>
      {/*
      <NewApp name="Power 5 Conference Distance Database" item={img_316} linker="https://github.com/s-garrett/cs316_project" paragraph={runnerDBDesc}/>

      <NewApp name="Lost and Found" item={img_android} linker="https://github.com/s-garrett/LostandFound" paragraph={lost_and_found}/>*/}

    </main>);
  }
}

export default Home;
