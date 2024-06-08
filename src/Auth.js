import React, { useState, useEffect } from 'react';
import { connect } from 'starknetkit'; // Import connect method from StarknetKit

const Auth = () => {
  const [connection, setConnection] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);

  // Function to establish wallet connection
  const connectWallet = async () => {
    try {
      const connection = await connect({ webWalletUrl: "https://web.argent.xyz" });
  
      if (connection && connection.isConnected) {
        setConnection(connection);
        setProvider(connection.account);
        setAddress(connection.selectedAddress);
      }
    } catch (error) {
      console.error("Error connecting to Argent X wallet:", error);
    }
  };

  useEffect(() => {
    connectWallet(); // Automatically connect wallet on component load
  }, []);

  return (
    <div>
      {connection && connection.isConnected ? (
        <p>Connected to Argent X wallet. Address: {address}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Auth;

