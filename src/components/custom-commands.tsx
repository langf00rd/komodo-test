"use client";

import { useEffect, useState } from "react";

export default function CustomCommands() {
  const [commandWindow, setCommandWindow] = useState<Window | null>(null);
  const [response, setResponse] = useState<any>(null);

  function handleSendCommand(command: string) {
    window.name = "parent-window";

    let newWindow = commandWindow;
    if (!commandWindow || !newWindow) {
      newWindow = window.open(
        COMMAND_PAGE_URL + `?auto-run=true&command=${JSON.stringify(command)}`,
        "command-window",
      );
      setCommandWindow(newWindow);
    } else {
      newWindow.location.href =
        COMMAND_PAGE_URL + `?auto-run=true&command=${JSON.stringify(command)}`;
      newWindow.focus();
    }
  }

  // Listen for messages from the command window
  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      if (event.origin === COMMAND_PAGE_URL) {
        setResponse(event.data);
        window.focus();
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
          <button
            onClick={() => handleSendCommand(JSON.stringify(JSON_COMMAND_1))}
          >
            make call
          </button>
        </div>
        <div className="space-y-3 w-[50vw]">
          <pre className="w-full">
            <code className="language-json">
              {JSON.stringify(JSON_COMMAND_2)}
            </code>
          </pre>
          <button
            onClick={() => handleSendCommand(JSON.stringify(JSON_COMMAND_2))}
          >
            make call
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

const COMMAND_PAGE_URL = "https://react-komodefi-wasm.vercel.app/";

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
