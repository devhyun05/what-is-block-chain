import { useState } from 'react';
import personOne from '../images/person1.png';
import personTwo from '../images/person2.png';
import code from '../images/code.png';
import vendingMachine from '../images/vending-machine.png';
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';
import functionImage from '../images/function.png';

const SmartContract = () => {
    const [displaySmartContractImages, setDisplaySmartContractImages] = useState(false);
    const [displayStartButton, setDisplayStartButton] = useState(true);
    const [displayNextSmartContract, setDisplayNextSmartContract] = useState(false);

    const handleSmartContract = () => {
        setDisplaySmartContractImages(true);
        setDisplayStartButton(false);
    }

    const handleNextSmartContract = () => {
        setDisplaySmartContractImages(false);
        setDisplayNextSmartContract(true);
    }

    const handleReset = () => {
        setDisplaySmartContractImages(false);
        setDisplayNextSmartContract(false);
        setDisplayStartButton(true);
    }
    return (
        <>
            <div style={{ marginTop: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {displayStartButton ?
                    <>

                        <h2>Click below button for explanation</h2>
                        <div style={{ marginTop: '2%', display: 'flex', gap: '100px' }}>
                            <button className="button-33" role="button" style={{ marginRight: 'auto' }}
                                onClick={handleSmartContract}>Smart Contract</button>

                        </div>
                    </>
                    : ""}
                {displaySmartContractImages ?
                    <>
                        <div>
                            <button className="button-30" role="button" onClick={handleReset}>Reset</button>
                        </div>
                        <div style={{ marginTop: '3%', display: 'flex', gap: '200px' }}>
                            <div>
                                <h2 style={{ marginTop: '3%', marginBottom: '3%', textAlign: 'center' }}>1. Vending Machine example</h2>
                                <div style={{ display: 'flex' }}>
                                    <img src={personOne} alt="" className="people-images" />
                                    <div>
                                        <img src={arrowRight} alt="" className="arrow-images" /><br />
                                        <img src={arrowLeft} alt="" className="arrow-images" />
                                    </div>
                                    <img src={vendingMachine} alt="" className="people-images" />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h4 >
                                        Smart contract is like a vending machine. Always expected <br />
                                        behavior replies based on the user action. When the user <br />
                                        puts coin and click the item, it verfies the amount of <br />
                                        money and returns the item.
                                    </h4>
                                </div>
                            </div>

                            <div>
                                <h2 style={{ marginTop: '3%', marginBottom: '3%', textAlign: 'center' }}>2. Function example</h2>
                                <div style={{ display: 'flex' }}>
                                    <img src={personTwo} alt="" className="people-images" />
                                    <div>
                                        <img src={arrowRight} alt="" className="arrow-images" /><br />
                                        <img src={arrowLeft} alt="" className="arrow-images" />
                                    </div>
                                    <img src={functionImage} alt="" className="people-images" style={{ marginLeft: '20px' }} />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h4 >
                                        Smart contract is like function in programming. One input <br />
                                        goes into the function, one output comes out based on input.<br />
                                        There is no way that unexpected behavior will be returned <br />
                                        from the function. It always returns based on the user input.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <h2 style={{ marginTop: '2%', marginBottom: '1%' }}>Now what is the smart contract?</h2>
                        <button className="button-33" role="button"
                            onClick={handleNextSmartContract}>Continue</button>
                    </>
                    : ""
                }
                {displayNextSmartContract ?
                    <>
                        <div>
                            <button className="button-30" role="button" onClick={handleReset}>Reset</button>
                        </div>
                        <div style={{ width: '85%' }}>
                            <div style={{ marginTop: '2%', display: 'flex', textAlign: 'center' }}>
                                <h2 className="text-sizes" style={{ marginRight: 'auto' }}>User 1</h2>
                                <h2 className="text-sizes" style={{ margin: 'auto' }}>
                                    Smart Contract
                                </h2>
                                <h2 className="text-sizes" style={{ marginLeft: 'auto' }}>User 2</h2>
                            </div>
                            <div style={{ display: 'flex', marginTop: '1%' }}>
                                <img src={personOne} alt="" style={{ marginRight: 'auto' }} className="people-images" />
                                <div>
                                        <img src={arrowRight} alt="" className="arrow-images" /><br />
                                        <img src={arrowLeft} alt="" className="arrow-images" />
                                </div>
                                <img src={code} alt="" style={{ margin: 'auto', paddingLeft: '30px' }} className="people-images" />
                                <div>
                                        <img src={arrowRight} alt="" className="arrow-images" /><br />
                                        <img src={arrowLeft} alt="" className="arrow-images" />
                                </div>
                                <img src={personTwo} alt="" style={{ marginLeft: 'auto' }} className="people-images" />
                            </div>
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <h3>
                                Smart contract is a programming code that is working in the blockchain environment. <br/>
                                The blockchain application should perform operations and it should be distributed<br/>
                                at the same time. The solution is the smart contract. The smart contract deployed <br/>
                                into the blockchain and no one cannot modify it even the person who writes it. It <br/> 
                                just performs based on the code like a function based on user request or actions.

                            </h3>
                        </div>
                    </>
                    : ""
                }
            </div>
        </>
    )
}

export default SmartContract; 
