"use client";
import { TonConnectUIProvider } from '@tonconnect/ui-react'; 
export default function TonConnectProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TonConnectUIProvider
            manifestUrl="https://mdabdullah3.github.io/crypto-project/tonconnect-manifest.json"
            actionsConfiguration={{
                twaReturnUrl: "https://t.me/<your-bot-username>",
            }}
        >
            {children}
        </TonConnectUIProvider>
    );
}