"use client";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

export default function Home() {
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const [balance, setBalance] = useState<string | null>(null);

  fetch(`https://toncenter.com/api/v2/getAddressBalance?address=${userFriendlyAddress}`)
    .then((r) => r.json())
    .then((d) => {
      console.log("raw balance", d);               // ← paste what this shows
      if (!d.balance) { setBalance("0"); return; }
      const ton = (BigInt(d.balance) / BigInt(1_000_000_000)).toString();
      setBalance(ton);
    })
    .catch((e) => { console.error(e); setBalance("err"); });
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">Mini TON Portal</h1>

      {/* Wallet connect button */}
      <TonConnectButton className="mb-6" />
      {balance && (
        <p className="mt-2 text-xl">Balance: {balance} TON</p>
      )}
      {/* Address display */}
      {userFriendlyAddress && (
        <div className="mt-4">
          <p className="text-sm text-gray-300">Connected as:</p>
          <p className="font-mono text-xs">{userFriendlyAddress}</p>
        </div>
      )}
    </main>
  );
}