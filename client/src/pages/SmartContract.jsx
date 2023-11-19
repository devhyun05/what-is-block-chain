import { useState } from 'react'; 
import personOne from '../images/person1.png';
import personTwo from '../images/person2.png';
import vendingMachine from '../images/vending-machine.png'; 
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';
import functionImage from '../images/function.png'; 

const SmartContract = () => {
    const [displaySmartContractImages, setDisplaySmartContractImages] = useState(false); 
    const [displayStartButton, setDisplayStartButton] = useState(true);
    const handleSmartContract = () => {
        setDisplaySmartContractImages(true); 
        setDisplayStartButton(false);
    }
    return (
        <>
        <div style={{marginTop: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {displayStartButton ? 
            <>            
                <h2>Click below button for explanation</h2>
                <div style={{marginTop: '2%', display: 'flex', gap: '100px'}}>
                    <button className="button-33" role="button" style={{marginRight: 'auto'}}
                            onClick={handleSmartContract}>Smart Contract</button>
            
                </div>
            </>
            : ""}
            {displaySmartContractImages ? 
            <>
                <div style={{marginTop: '3%', display: 'flex', gap: '200px'}}>
                    <div>
                        <h2 style={{marginTop: '3%', marginBottom: '3%', textAlign: 'center'}}>1. Vending Machine example</h2>
                        <div style={{display: 'flex'}}>
                            <img src={personOne} alt="" className="people-images"/>
                            <div>
                                <img src={arrowRight} alt="" className="arrow-images"/><br/> 
                                <img src={arrowLeft} alt="" className="arrow-images"/>
                            </div>
                            <img src={vendingMachine} alt="" className="people-images"/>                            
                        </div>
                        <div style={{padding: '20px'}}>
                            <h4 >
                                Smart contract is like a vending machine. Always expected <br/>
                                behavior replies based on the user action. When the user <br/>
                                puts coin and click the item, it verfies the amount of <br/>
                                money and returns the item.
                            </h4>
                        </div>
                    </div>
                    
                    <div>
                        <h2 style={{marginTop: '3%', marginBottom: '3%', textAlign: 'center'}}>2. Function example</h2>
                        <div style={{display: 'flex'}}>
                            <img src={personTwo} alt="" className="people-images"/>
                            <div>
                                <img src={arrowRight} alt="" className="arrow-images"/><br/> 
                                <img src={arrowLeft} alt="" className="arrow-images"/>
                            </div>
                            <img src={functionImage} alt="" className="people-images" style={{marginLeft: '20px'}}/>
                        </div>
                        <div style={{padding: '20px'}}>
                            <h4 >
                                Smart contract is like function in programming. One input <br/>
                                goes into the function, one output comes out based on input.<br/>
                                There is no way that unexpected behavior will be returned <br/>
                                from the function. It always returns based on the user input.
                            </h4>
                        </div>
                    </div>                    
                </div>
                <h2 style={{marginTop: '2%', marginBottom: '1%'}}>Now what is the smart contract?</h2>
                <button className="button-33" role="button" 
                        onClick={handleSmartContract}>Continue</button>
            </>
            : ""
            }
        </div>
        </>
    )
}

export default SmartContract; 
