"use client";

import { useEffect, useState } from "react";

export default function CustomCommands() {
  const [commandWindow, setCommandWindow] = useState<Window | null>(null);
  const [response, setResponse] = useState<any>(null);

  function handleSendCommand(command: any) {
    let newWindow = commandWindow;
    if (!commandWindow || !newWindow) {
      newWindow = window.open(COMMAND_PAGE_URL, "_blank");
      setCommandWindow(newWindow);
      postCommandToNewWindow(command, newWindow!);
    } else {
      postCommandToNewWindow(command, commandWindow);
      commandWindow.focus();
    }
  }

  function postCommandToNewWindow(command: string, window_: Window) {
    setTimeout(() => {
      window_?.postMessage(
        {
          jsonDataForRpcRequest: JSON.stringify(command),
        },
        COMMAND_PAGE_URL,
      );
    }, 5000);
  }

  // Listen for messages from the command window
  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      if (event.origin === COMMAND_PAGE_URL) {
        setResponse(event.data);
        window.focus(); // Focus the main window
      }
    };
    window.addEventListener("message", messageHandler);
    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-10">
        <div className="space-y-3 w-[50vw]">
          <pre>
            <code className="language-json">
              {JSON.stringify(JSON_COMMAND_1)}
            </code>
          </pre>
          <button onClick={() => handleSendCommand(JSON_COMMAND_1)}>
            Show response
          </button>
        </div>
        <div className="space-y-3 w-[50vw]">
          <pre className="w-full">
            <code className="language-json">
              {JSON.stringify(JSON_COMMAND_2)}
            </code>
          </pre>
          <button onClick={() => handleSendCommand(JSON_COMMAND_2)}>
            Show response
          </button>
        </div>
      </div>
      {response && (
        <textarea
          value={JSON.stringify(response)}
          className="w-full bg-background h-[300px]"
        ></textarea>
      )}
    </>
  );
}

const COMMAND_PAGE_URL = "https://react-komodefi-wasm.vercel.app";
// const COMMAND_PAGE_URL = "http://localhost:3001";

const JSON_COMMAND_1 = {
  userpass: "testpsw",
  method: "version",
};

const JSON_COMMAND_2 = {
  userpass: "testpsw",
  method: "electrum",
  mm2: 1,
  coin: "KMD",
  tx_history: true,
  servers: [
    {
      url: "electrum3.cipig.net:30001",
      protocol: "WSS",
    },
  ],
};
