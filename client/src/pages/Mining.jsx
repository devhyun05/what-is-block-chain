import { useState } from 'react';
import cpuImage from '../images/cpu.png';
import gpuImage from '../images/gpu.png'; 
import arrowRight from '../images/arrow-right.png'; 
import blockChain from '../images/blockchain.png';

const Mining = () => {
    const [displayMining, setDisplayMining] = useState(true);
    const [displayMiningImages, setDisplayMiningImages] = useState(false); 
    
    const handleDisplayImages = () => {
        setDisplayMiningImages(true);
        setDisplayMining(false); 
    }; 

    const handleReset = () => {
        setDisplayMiningImages(false);
        setDisplayMining(true); 

    }
    return (
        <>
            {displayMining ?
                <>
                    <div style={{ marginTop: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Click below button for explanation</h2>
                        <div style={{ marginTop: '2%', display: 'flex', gap: '100px' }}>
                            <button className="button-33" role="button" style={{ marginRight: 'auto' }}
                                    onClick={handleDisplayImages}
                            >Mining</button>
                        </div>
                    </div>
                </>
                : ""}
            {displayMiningImages ? 
                <>
                    <div style={{marginTop: '3%', display: 'flex', justifyContent: 'center'}}>
                        <button className="button-30" role="button" onClick={handleReset}>Reset</button>
                    </div>
                    <div style={{marginTop: '5%', display: 'flex', justifyContent: 'center', gap: '50px'}}>
                        <img src={cpuImage} alt="" className="people-images"/> 
                        <img src={gpuImage} alt="" className="people-images"/>
                        <img src={arrowRight} alt="" className="people-images"/>
                        <img src={blockChain} alt="" className="people-images"/>
                    </div>
                    <div style={{width: '50%', margin: '5% auto'}}>
                        <h3>
                            Mining is concept of adding block to the blockchain. Calculating previous 
                            transactions availability, the wallet balance after transaction, digital 
                            signature to check the private key, and the public key, etc. It requires a 
                            lot of computing power to calculate, we use CPU, GPU, etc. Since, partipants
                            help to maintain the blockchain environment, we receive rewards as coins.
                            This is a concept of mining.
                        </h3>
                    </div>
                </>
                :
                ""
            }
            

        </>
    )
}

export default Mining; 