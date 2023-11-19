import { useState } from 'react'; 
import personOne from '../images/person1.png'; 
import personTwo from '../images/person2.png'; 
import smartContract from '../images/smart-contract.png'; 

const Main = () => {
    const [ethValue, setEthValue] = useState(0);
    const [secondEthValue, setSecondEthValue] = useState(0); 
    const [miningInProgress, setMiningInProgress] = useState(false);
    const [miningInProgressSecond, setMiningInProgressSecond] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
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

    return (
        <>
            <div style={{paddingTop: '3%', padding: '5% 5% 0 5%'}}>
                <div style={{display: 'flex', textAlign: 'center'}}>
                    <div style={{marginRight: 'auto',  width:'200px', height: '100px', backgroundColor: 'white', borderRadius: '10px'}}>
                        <h3 style={{color: 'black', marginTop: '20px'}}>{ethValue} ETH</h3>
                        <button
                            style={{ width: '100px', padding: '3px', marginTop: '15px', backgroundColor: miningInProgress ? 'red' : '#6b6b6b', border: 'none', borderRadius: '5px' }}
                            onClick={startMining}
                        >
                            {miningInProgress ? 'Stop Mining' : 'Start Mining'}
                        </button>
                    </div>
                    <div style={{marginLeft: 'auto',  width:'200px', height: '100px', backgroundColor: 'white', borderRadius: '10px'}}>
                        <h3 style={{color: 'black', marginTop: '20px'}}>{secondEthValue} ETH</h3>
                        <button style={{width: '100px', padding: '3px', marginTop: '15px', backgroundColor: miningInProgressSecond ? 'red' : '#6b6b6b', border: 'none', borderRadius: '5px'}} 
                                        onClick={startMiningSecond}
                        >
                            {miningInProgressSecond ? 'Stop Mining' : 'Start Mining'}
                        </button>
                    </div>
                </div>
                <div style={{marginTop: '2%', display: 'flex', textAlign: 'center'}}>
                    <h2 className="text-sizes" style={{marginRight: 'auto'}}>User 1</h2>
                    <h2 className="text-sizes" style={{margin:'auto'}}>Smart Contract</h2>
                    <h2 className="text-sizes" style={{marginLeft: 'auto'}}>User 2</h2>
                </div>
                <div style={{display: 'flex', marginTop: '1%'}}>
                    <img src={personOne} alt="" style={{marginRight: 'auto'}}className="people-images"/>             
                    <img src={smartContract} alt="" style={{margin: 'auto'}}className="people-images"/>
                    <img src={personTwo} alt="" style={{marginLeft: 'auto'}}className="people-images"/> 
                </div>
                <div style={{marginTop: '1%', height:'30px', display: 'flex', textAlign: 'center'}}>
                    <button className="text-sizes" style={{marginRight: 'auto', backgroundColor: '#9ADE7B', color: '#333333', fontWeight: 'bold', borderRadius: '10px', border: 'none'}}>Send ETH</button>             
                    <button className="text-sizes" style={{marginLeft: 'auto', backgroundColor: '#9ADE7B', color: '#333333', fontWeight: 'bold', borderRadius: '10px', border: 'none'}}>Send ETH</button>
                </div>
            </div>
            <div>
                <h2 style={{marginTop: '2%', textAlign: 'center'}}>BlockChain Transactions</h2>
                <div style={{width: '90%', height: '200px', backgroundColor: 'white', margin: '1% auto', borderRadius: '10px'}}>
                        
                </div>
            </div>
        </>
    )
}

export default Main; 