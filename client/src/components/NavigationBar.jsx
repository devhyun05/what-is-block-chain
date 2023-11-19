import "../App.css"
const NavigationBar = () => {
    return (
        <>
            <nav>
                <a href="http://locahost:5173" >
                   <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg>
                </a>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="http://localhost:5173/">Transactions</a></li>
                        <li><a>Mining</a></li>
                        <li><a>Smart Contract</a></li>
                        <li><a>Decentralized</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar; 