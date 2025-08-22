// Buy.jsx
import React, { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Sun, Moon } from "lucide-react";
import "./Buy.css";

const SOLANA_RPC = "https://api.mainnet-beta.solana.com";
const connection = new Connection(SOLANA_RPC);

export default function Buy() {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState(null);
  const [theme, setTheme] = useState("light");
  const [network, setNetwork] = useState("solana");
  const [amount, setAmount] = useState("");
  const [frep, setFrep] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (connected && publicKey) {
      connection.getBalance(publicKey).then((lamports) => {
        setBalance(lamports / 1e9);
      });
    }
  }, [connected, publicKey]);

  useEffect(() => {
    if (amount) {
      setFrep(amount / 0.001);
    } else {
      setFrep(0);
    }
  }, [amount]);

  const availableNetworks = ["solana", "ethereum", "bsc"];

  return (
    <div
      className={`buy-container min-h-screen flex flex-col items-center justify-center p-6 transition ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      {/* Header */}
      <div className="flex w-full justify-between items-center max-w-4xl mb-8">
        <h1 className="text-2xl font-bold">FREP Launchpad</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full theme-toggle"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <WalletMultiButton />
        </div>
      </div>

      {/* Wallet Info */}
      {connected && publicKey && (
        <div className="mb-6 text-center">
          <p className="text-sm">
            Connected Wallet:{" "}
            <span className="font-mono">{publicKey.toBase58()}</span>
          </p>
          <p className="text-sm">
            Balance:{" "}
            <span className="font-semibold">
              {balance !== null ? `${balance.toFixed(3)} SOL` : "..."}
            </span>
          </p>
        </div>
      )}

      {/* Network Switcher */}
      {connected && (
        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Network:</label>
          <select
            className="px-4 py-2 rounded-lg border network-select"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            {availableNetworks.map((net) => (
              <option key={net} value={net}>
                {net.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Calculator */}
      <div className="card bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-bold mb-4">Token Calculator</h2>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter USD amount"
            className="flex-1 px-4 py-2 rounded-lg border"
          />
          <span className="font-medium">USD</span>
        </div>
        <p className="mb-2">$0.001 = 1 FREP</p>
        <p className="font-bold">You Get: {frep.toFixed(2)} FREP</p>
      </div>

      {/* Buy Button */}
      <div className="mt-6">
        <button
          disabled={!connected || network !== "solana"}
          className={`buy-button px-6 py-3 rounded-2xl font-bold transition ${
            connected && network === "solana"
              ? "enabled"
              : "disabled"
          }`}
        >
          Buy Now
        </button>
        {connected && network !== "solana" && (
          <p className="mt-2 text-red-500 font-medium">
            Please switch to Solana network
          </p>
        )}
      </div>
    </div>
  );
}
