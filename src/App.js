
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './Team';

// https://lospec.com/palette-list/tofu-20k
// https://lospec.com/palette-list/mulfok32

const TEAMS = [
  {
    name: "TEAM GRASS",
    backgroundColor: "#85c448",
    textAccent: "#29694e",
    secondary: "#439d40",
    teamPokemon: "turtwig.gif",
    type: "grass.png",
    players: [
      {
        name: "Ernst S",
        game: "Valorant",
        pokemon: "serperior.gif"
      },
      {
        name: "Gavin F",
        game: "Path of Exile",
        pokemon: "torterra.gif"
      },
      {
        name: "Frankie S",
        game: "Ark",
        pokemon: "victreebell.gif"
      },
      {
        name: "Ethan B",
        game: "Rocket League",
        pokemon: "tropius.gif"
      },
      {
        name: "Brenden B",
        game: "UU",
        pokemon: "shiftry.gif"
      }
    ]
  },
  {
    name: "TEAM FIRE",
    backgroundColor: "#dc4926",
    textAccent: "#81173f",
    secondary: "#cc1825",
    teamPokemon: "chimchar.gif",
    type: "fire.png",
    players: [
      {
        name: "Dylan P",
        game: "Super Smash Bros",
        pokemon: "charizard.gif"
      },
      {
        name: "Jack P",
        game: "Brawlstars",
        pokemon: "emboar.gif"
      },
      {
        name: "Seth H",
        game: "My Heart",
        pokemon: "maltress.gif"
      },
      {
        name: "Carter P",
        game: "Lethal Company",
        pokemon: "torkoal.gif"
      },
      {
        name: "Harrison D",
        game: "Fortnite",
        pokemon: "blazikin.gif"
      }
    ]
  },
  {
    name: "TEAM WATER",
    backgroundColor: "#4477ff",
    textAccent: "#422490",
    secondary: "#2749d0",
    teamPokemon: "pipplup.gif",
    type: "water.png",
    players: [
      {
        name: "Dalton S",
        game: "Call of Duty",
        pokemon: "whale.gif"
      },
      {
        name: "Brennan N",
        game: "Rainbow Six Siege",
        pokemon: "blastoise.gif"
      },
      {
        name: "Harrison F",
        game: "DOTA2",
        pokemon: "lochness.gif"
      },
      {
        name: "Sam C",
        game: "Rust",
        pokemon: "squidgames.gif"
      },
      {
        name: "Tate G",
        game: "FB Marketplace",
        pokemon: "gyrados.gif"
      }
    ]
  },
]


const TEAMNIGHT = [
  {
    name: "TEAM DRAGON",
    backgroundColor: "#a6859f",
    textAccent: "#4a3052",
    secondary: "#7b5480",
    teamPokemon: "axew.gif",
    type: "dragon.png",
    players: [
      {
        name: "Ernst S",
        game: "Valorant",
        pokemon: "dragonite.gif"
      },
      {
        name: "Gavin F",
        game: "Path of Exile",
        pokemon: "zekrom.gif"
      },
      {
        name: "Frankie S",
        game: "Ark",
        pokemon: "salamance.gif"
      },
      {
        name: "Ethan B",
        game: "Rocket League",
        pokemon: "rayquaza.gif"
      },
      {
        name: "Brenden B",
        game: "UU",
        pokemon: "garchomp.gif"
      }
    ]
  },
  {
    name: "TEAM GHOST",
    backgroundColor: "#834dc4",
    textAccent: "#4e187c",
    secondary: "#7d2da0",
    teamPokemon: "ghastly.gif",
    type: "ghost.png",
    players: [
      {
        name: "Dylan P",
        game: "Super Smash Bros",
        pokemon: "gengar.gif"
      },
      {
        name: "Jack P",
        game: "Brawlstars",
        pokemon: "dustclops.gif"
      },
      {
        name: "Seth H",
        game: "My Heart",
        pokemon: "driftloon.gif"
      },
      {
        name: "Carter P",
        game: "Lethal Company",
        pokemon: "chandalure.gif"
      },
      {
        name: "Harrison D",
        game: "Fortnite",
        pokemon: "giratona.gif"
      }
    ]
  },
  {
    name: "TEAM PSYCH",
    backgroundColor: "#ee8fcb",
    textAccent: "#873e84",
    secondary: "#d46eb3",
    teamPokemon: "abra.gif",
    type: "psychic.png",
    players: [
      {
        name: "Dalton S",
        game: "Call of Duty",
        pokemon: "mewtwo.gif"
      },
      {
        name: "Brennan N",
        game: "Rainbow Six Siege",
        pokemon: "mrmime.gif"
      },
      {
        name: "Harrison F",
        game: "DOTA2",
        pokemon: "gardivor.gif"
      },
      {
        name: "Sam C",
        game: "Rust",
        pokemon: "deoxys.gif"
      },
      {
        name: "Tate G",
        game: "FB Marketplace",
        pokemon: "alakazam.gif"
      }
    ]
  },
]


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [team, setTeam] = useState(TEAMS);

  // Load the user's preference from local storage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Update the body class and local storage whenever darkMode changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      setTeam(TEAMNIGHT);
    } else {
      htmlElement.classList.remove('dark');
      setTeam(TEAMS);
    }
    scrollToTop();
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <div className='bg-[#feffe5]  dark:bg-[#1f102a]  dark:text-[#d9bdc8] font-chronotype flex flex-col items-center px-2 w-100 m-0 p-0'>
      <div className='bg-[#787d8b] dark:bg-[#4a3052] grow shadow-dollafade p-5 my-4 items-center flex flex-col'>
        <div className='text-5xl overflow-hidden whitespace-nowrap'>{darkMode ? "HAWK TUAH" : "POOP VALO"} LEAGUE</div>
        <div className='text-[#404863] dark:text-[#a6859f] text-[20px] leading-[10px] mt-2'>Tuesday, Sep. 24th, 8:30PM CET</div>
        <div className='text-[#404863] dark:text-[#a6859f] text-[20px] leading-[10px] image-pop mt-2'>@ <a className='underline text-[#85285f] dark:text-[#fcef8d]' href="https://www.twitch.tv/homekhomek">twitch.tv/homekhomek</a></div>
      </div>
      <div className='flex flex-row flex-wrap justify-center px-2'>
        {team.map(t => (
          <Team team={t}></Team>
        ))}
      </div>
      <div className='bg-[#ff26a8] dark:bg-[#5ba675] dark:text-[#4a3052] shadow-dollafade p-3 m-4 items-center flex flex-col image-pop'>
        <div className='text-[50px] underline'>Schedule</div>
        <div className='text-[30px]'><span className='text-[#81173f] dark:text-[#4e187c]'>{darkMode ? "Ghost" : "Fire"}</span> VS <span className='text-[#422490] dark:text-[#873e84]'>{darkMode ? "Psych" : "Water"}</span></div>
        <div className='text-[30px]'><span className='text-[#81173f] dark:text-[#4e187c]'>{darkMode ? "Ghost" : "Fire"}</span> VS <span className='text-[#29694e] dark:text-[#4a3052]'>{darkMode ? "Dragon" : "Grass"}</span></div>
        <div className='text-[30px]'><span className='text-[#29694e] dark:text-[#4a3052]'>{darkMode ? "Dragon" : "Grass"}</span> VS <span className='text-[#422490] dark:text-[#873e84]'>{darkMode ? "Psych" : "Water"}</span></div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="underline image-sway mt-4"
      >
        toggle evil mode &gt;:)
      </button>
      <div className='mt-5'>site made by <a className='underline' href="http://homek.org">homek</a></div>
    </div>

  );
}

export default App;
