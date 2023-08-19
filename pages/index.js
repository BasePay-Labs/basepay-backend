import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBarcodeRead, faPaperPlane, faFileInvoice, faMessagePen, faShareFromSquare } from '@fortawesome/pro-solid-svg-icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useBalance } from 'wagmi';
import { useAccount } from "wagmi";
import { faEthereum } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const [formattedBalance, setFormattedBalance] = useState('0.0000');

  useEffect(() => {
    const balanceValue = parseFloat(data?.formatted || '0.0000');
    setFormattedBalance(balanceValue.toFixed(4));
  }, [data]);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Head>
        {/* Head content */}
      </Head>
      <div className="pb-8 pt-6 px-4 flex items-center">
        <div className="flex items-center border-2 border-blue-500 rounded-3xl w-full p-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-2 mr-2 text-black w-6 h-6" />
          <input
            type="text"
            placeholder="Search for an ENS or Base address..."
            className="w-full bg-transparent outline-none"
          />
        </div>
        <FontAwesomeIcon icon={faBarcodeRead} className="ml-4 mr-0 h-8 w-8 text-gray-600" />
      </div>
      <div className="px-4"> {/* Container for padding */}
        <div className="bg-gray-100 h-20 rounded-3xl flex items-center justify-start w-full shadow-sm drop-shadow-sm p-4"> {/* Wrapper div */}
          <div className="flex justify-center items-center relative w-10 h-10 rounded-full bg-gray-300 shadow drop-shadow ml-4"> {/* Ethereum logo */}
            <FontAwesomeIcon icon={faEthereum} className="text-black h-6 w-6 z-10" />
          </div>
          <div className="text-left text-black ml-4 flex flex-col">
            <div>{formattedBalance} ETH</div> {/* Display formatted balance */}
            <div className="text-sm text-black">Goerli Basechain Balance</div> {/* Label */}
          </div>
        </div>
      </div>
      <div className="px-4 mt-6 text-xl font-semibold text-black"> {/* Quick Actions */}
        Quick Actions
      </div>
      <div className="px-8 mt-6 flex justify-between text-xl text-black"> {/* Action Buttons */}
  <div className="flex flex-col items-center"> {/* Pay */}
    <div className="flex justify-center items-center relative w-12 h-12 mb-2 rounded-full bg-gray-300 shadow drop-shadow">
      <FontAwesomeIcon icon={faPaperPlane} className="text-black h-5 w-5 z-10" />
    </div>
    <div>Pay</div>
  </div>
  <div className="flex flex-col items-center"> {/* Request */}
    <div className="flex justify-center items-center relative w-12 h-12 rounded-full bg-gray-300 shadow drop-shadow mb-2">
      <FontAwesomeIcon icon={faFileInvoice} className="text-black h-5 w-5 z-10" />
    </div>
    <div>Request</div>
  </div>
  <div className="flex flex-col items-center"> {/* Share */}
    <div className="flex justify-center items-center relative w-12 h-12 mb-2 rounded-full bg-gray-300 shadow drop-shadow">
      <FontAwesomeIcon icon={faMessagePen} className="text-black h-5 w-5 z-10" />
    </div>
    <div>Share</div>
  </div>
  <div className="flex flex-col items-center"> {/* Test */}
    <div className="flex justify-center items-center relative w-12 h-12 mb-2 rounded-full bg-gray-300 shadow drop-shadow">
      <FontAwesomeIcon icon={faShareFromSquare} className="text-black h-5 w-5 z-10" />
    </div>
    <div>Test</div>
  </div>
</div>
      <div className="flex-grow flex items-center justify-center">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <ConnectButton className="dark:invert" width={100} height={24} priority />
        </a>
      </div>
    </main>
  );
}