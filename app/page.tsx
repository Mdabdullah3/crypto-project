"use client";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

export default function Home() {
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">Mini TON Portal</h1>

      {/* Wallet connect button */}
      <TonConnectButton className="mb-6" />

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