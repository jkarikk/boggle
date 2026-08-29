import './App.css'
import {useState} from "react";
import type {AlphabetMap, CountsMap, SortedLetterMap} from "./types";
import Boggle from './assets/boggle_logo.webp';
import {alphabet, rotateAngles} from "./constants";

function App() {
    const [randomLetters, setRandomLetters] = useState<Array<{letter: string, angle: number}>>([]);
    //const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

    function weightedPick(weights: AlphabetMap, counts: CountsMap) {
        const entries = Object.entries(weights).filter(([letter, props]) => (counts[letter] || 0) < props.maxRepeat);
        const total = entries.reduce((sum, [, props]) => sum + props.frequency, 0);

        if (total === 0) return null;

        let r = Math.random() * total;
        for (const [letter, props] of entries) {
            r -= props.frequency;
            if (r < 0) return letter;
        }
        return entries[entries.length - 1][0];
    }

    function getRandomLetters(weights: AlphabetMap, count = 16) {
        const result: SortedLetterMap = [];
        const counts: CountsMap = {};

        for (let i = 0; i < count; i++) {
            const letter = weightedPick(weights, counts);
            if (!letter) break;
            result.push({letter: letter, angle: rotateAngles[Math.floor(Math.random() * rotateAngles.length)]});
            counts[letter] = (counts[letter] || 0) + 1;
        }

        return result;
    }

    function shake() {
        //setIsGameStarted(true);
        setRandomLetters(getRandomLetters(alphabet, 16));
    };

    // function stopGame() {
    //     setIsGameStarted(false);
    // };

  return (
    <>
      <section className='wrapper'>
          <div className='logo'>
              <img src={Boggle} width='100%'/>
          </div>
          <div className='board'>
              {randomLetters.map((item, i) => (
                  <div className='letter' key={i} style={{
                      transform: `rotate(${item.angle}deg)`,
                  }}>
                      {item.letter}
                  </div>
              ))}
          </div>
          {/*<Timer isGameStarted={isGameStarted}/>*/}
          {/*{isGameStarted ?*/}
          {/*    <button className='start-button' onClick={() => stopGame()}>ОСТАНОВИТЬ</button>*/}
          {/*    :*/}
          <button className='start-button' onClick={() => shake()}>НОВАЯ ИГРА</button>
          {/*}*/}
      </section>
    </>
  )
}

export default App
