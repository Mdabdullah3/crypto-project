"use client";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
export default function TonConnectProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TonConnectUIProvider
            manifestUrl="https://raw.githubusercontent.com/Mdabdullah3/crypto-project/main/public/tonconnect-manifest.json"
            actionsConfiguration={{
                twaReturnUrl: "https://t.me/<your-bot-username>",
            }}
        >
            {children}
        </TonConnectUIProvider>
    );
}