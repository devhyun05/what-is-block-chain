import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import personOne from '../images/person1.png';
import personTwo from '../images/person2.png';
import smartContract from '../images/smart-contract.png';
import rightArrowImage from '../images/arrow-right.png';
import leftArrowImage from '../images/arrow-left.png'; 
import verified from '../images/check.png';

const Main = () => {
  const [ethValue, setEthValue] = useState(0);
  const [secondEthValue, setSecondEthValue] = useState(0);
  const [miningInProgress, setMiningInProgress] = useState(false);
  const [miningInProgressSecond, setMiningInProgressSecond] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [firstInputAmount, setFirstInputAmount] = useState(0);
  const [secondInputAmount, setSecondInputAmount] = useState(0);
  const [arrowDisplay, setArrowDisplay] = useState(false);
  const [leftArrowDisplay, setLeftArrowDisplay] = useState(false); 
  // const [transactionArray, setTransactionArray] = useState([]); 

  const startMining = () => {
    if (!miningInProgress) {
      mineOnce();

      const firstId = setInterval(mineOnce, 1000);
      setIntervalId(firstId);

      setMiningInProgress(true);
    } else {
      clearInterval(intervalId);
      setMiningInProgress(false);
    }
  };

  const mineOnce = () => {
    const randomIncrease = (Math.random() * (0.9 - 0.4) + 0.4).toFixed(2);
    setEthValue((prevEthValue) => (parseFloat(prevEthValue) + parseFloat(randomIncrease)).toFixed(2));
  };

  const startMiningSecond = () => {
    if (!miningInProgressSecond) {
      mineSecond();

      const id = setInterval(mineSecond, 1000);
      setIntervalId(id);

      setMiningInProgressSecond(true);
    } else {
      clearInterval(intervalId);
      setMiningInProgressSecond(false);
    }
  };

  const mineSecond = () => {
    const randomIncrease = (Math.random() * (0.9 - 0.4) + 0.4).toFixed(2);
    setSecondEthValue((prevEthValue) => (parseFloat(prevEthValue) + parseFloat(randomIncrease)).toFixed(2));
  };

  const sendToUserTwo = () => {
    setArrowDisplay(true);
    setSecondEthValue((parseFloat(secondEthValue) + parseFloat(firstInputAmount)).toFixed(2));
    setEthValue((parseFloat(ethValue) - parseFloat(firstInputAmount)).toFixed(2));
  }

  const sendToUserOne = () => {
    setLeftArrowDisplay(true);
    setEthValue((parseFloat(ethValue) + parseFloat(secondInputAmount)).toFixed(2));
    setSecondEthValue((parseFloat(secondEthValue) - parseFloat(secondInputAmount)).toFixed(2));
  }

  const handleFirstInputAmountChange = (event) => {
    setFirstInputAmount(event.target.value);
  }

  const handleSecondInputAmountChange = (event) => {
    setSecondInputAmount(event.target.value);
  }
  const clearArrow = () => {
    setArrowDisplay(false); 
    setLeftArrowDisplay(false);
  }
  return (
    <>
 
      <div style={{ paddingTop: '3%', padding: '5% 5% 0 5%' }}>
        <div style={{ display: 'flex', textAlign: 'center' }}>
          <div style={{ marginRight: 'auto', width: '200px', height: '100px', backgroundColor: 'white', borderRadius: '10px' }}>
            <h3 style={{ color: 'black', marginTop: '20px' }}>{ethValue} ETH</h3>
            <button
              style={{ width: '100px', padding: '3px', marginTop: '15px', backgroundColor: miningInProgress ? 'red' : '#6b6b6b', border: 'none', borderRadius: '5px' }}
              onClick={startMining}
            >
              {miningInProgress ? 'Stop Mining' : 'Start Mining'}
            </button>
          </div>
          {arrowDisplay || leftArrowDisplay?
            <div>
                <button className="button-30" role="button" onClick={clearArrow}>Clear</button>
            </div>
            : ""}

          <div style={{ marginLeft: 'auto', width: '200px', height: '100px', backgroundColor: 'white', borderRadius: '10px' }}>
            <h3 style={{ color: 'black', marginTop: '20px' }}>{secondEthValue} ETH</h3>
            <button style={{ width: '100px', padding: '3px', marginTop: '15px', backgroundColor: miningInProgressSecond ? 'red' : '#6b6b6b', border: 'none', borderRadius: '5px' }}
              onClick={startMiningSecond}
            >
              {miningInProgressSecond ? 'Stop Mining' : 'Start Mining'}
            </button>
          </div>
        </div>
        <div style={{ marginTop: '2%', display: 'flex', textAlign: 'center' }}>
          <h2 className="text-sizes" style={{ marginRight: 'auto' }}>User 1</h2>

          <h2 className="text-sizes" style={{ margin: 'auto' }}>
            {arrowDisplay || leftArrowDisplay ? <h5 ><img src={verified} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />verified</h5> : ""}
            Smart Contract
          </h2>
          <h2 className="text-sizes" style={{ marginLeft: 'auto' }}>User 2</h2>
        </div>
        <div style={{ display: 'flex', marginTop: '1%' }}>
          <img src={personOne} alt="" style={{ marginRight: 'auto' }} className="people-images" />
          {arrowDisplay ? <img src={rightArrowImage} alt="" className="people-images" /> : ""}
          {leftArrowDisplay ? <img src={leftArrowImage} alt="" className="people-images" />: ""}
          <img src={smartContract} alt="" style={{ margin: 'auto' }} className="people-images" />
          {arrowDisplay ? <img src={rightArrowImage} alt="" className="people-images" /> : ""}
          {leftArrowDisplay ? <img src={leftArrowImage} alt="" className="people-images"/> : ""}
          <img src={personTwo} alt="" style={{ marginLeft: 'auto' }} className="people-images" />
        </div>
        <div style={{ marginTop: '1%', height: '30px', display: 'flex', textAlign: 'center' }}>

       

          <Popup trigger={<button className="button-33" role="button" style={{marginRight: 'auto'}}>Send ETH</button>}
            position="bottom center">
            <div style={{ padding: '5%', display: 'flex', flexDirection: 'column' }}>
              <h5 style={{ color: 'black' }}>Target Wallet: User 2 </h5>
              <span style={{ color: 'black', marginBottom: '5%' }}>Amount: <input type="number" style={{ width: '100px' }} onChange={handleFirstInputAmountChange} /></span>
              <button onClick={sendToUserTwo}>Send ETH</button>
            </div>
          </Popup>
          <Popup trigger={<button className="button-33" role="button" style={{marginLeft: 'auto'}}>Send ETH</button>}
            position="bottom center">
            <div style={{ padding: '5%', display: 'flex', flexDirection: 'column' }}>
              <h5 style={{ color: 'black' }}>Target Wallet: User 1 </h5>
              <span style={{ color: 'black', marginBottom: '5%' }}>Amount: <input type="number" style={{ width: '100px' }} onChange={handleSecondInputAmountChange} /></span>
              <button onClick={sendToUserOne}>Send ETH</button>
            </div>
          </Popup>
        </div>
      </div>
      <div>
        <h2 style={{ marginTop: '2%', textAlign: 'center' }}>BlockChain Transactions</h2>
        <div style={{ width: '90%', height: '200px', backgroundColor: 'white', margin: '1% auto', borderRadius: '10px' }}>

        </div>
      </div>
    </>
  )
}

export default Main; 