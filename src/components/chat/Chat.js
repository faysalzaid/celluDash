import React from "react";

export default function Chat() {
  function sendChat(e) {
    const msg = document.getElementById("chat");
    const cont = document.getElementById("chatContainer");
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("flex");
    outerDiv.classList.add("w-full");
    outerDiv.classList.add("mt-2");
    outerDiv.classList.add("space-x-3");
    outerDiv.classList.add("max-w-xs");
    outerDiv.classList.add("ml-auto");
    outerDiv.classList.add("justify-end");

    let innerDiv = document.createElement("div");
    innerDiv.classList.add("bg-blue-600");
    innerDiv.classList.add("text-white");
    innerDiv.classList.add("p-3");
    innerDiv.classList.add("rounded-l-lg");
    innerDiv.classList.add("rounded-br-lg");

    let content = document.createElement("p");
    content.classList.add("text-sm");

    content.innerHTML = msg.value;
    innerDiv.appendChild(content);
    outerDiv.appendChild(innerDiv);

    cont.appendChild(outerDiv);
    msg.value = "";
    var xH = cont.scrollHeight;
    cont.scrollTo(0, xH);

    e.preventDefault();
  }
  return (
    <>
      <div className="flex h-full mx-auto justify-center w-full overflow-x-hidden">
        <div className="flex flex-col py-8 px-4 my-2 w-64 flex-shrink-0 dark:text-white bg-gray-100 dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">QuickChat</div>
          </div>
          <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="text-sm text-black font-semibold mt-2">
              Aminos Co.
            </div>
            <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
          </div>
          <div className="flex flex-col mt-8 overflow-auto">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Contacts</span>
              <span className="flex items-center justify-center bg-gray-300 text-black h-4 w-4 rounded-full">
                5
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center text-black justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  H
                </div>
                <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center text-black justify-center h-8 w-8 bg-gray-200 rounded-full">
                  M
                </div>
                <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  2
                </div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center text-black justify-center h-8 w-8 bg-orange-200 rounded-full">
                  P
                </div>
                <div className="ml-2 text-sm font-semibold">Philip Tucker</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center text-black justify-center h-8 w-8 bg-pink-200 rounded-full">
                  C
                </div>
                <div className="ml-2 text-sm font-semibold">Christine Reid</div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center text-black justify-center h-8 w-8 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 text-sm font-semibold">Jerry Guzman</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 px-2 text-gray-800 py-2">
          <div className="flex flex-col flex-grow w-full max-w-xl bg-gray-100 dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden">
            <div
              id="chatContainer"
              className="flex flex-col flex-grow h-0 p-4 overflow-auto"
            >
              <div className="flex w-full mt-2 space-x-3 max-w-xs">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Hello Sir!</p>
                  </div>
                  {/* <span className="text-xs text-gray-500 leading-none">2 min ago</span> */}
                </div>
              </div>
            </div>
            <div>
              <form
                action=""
                className="bg-gray-300 p-4 flex"
                onSubmit={sendChat}
              >
                <input
                  id="chat"
                  className="flex items-center h-10 w-full rounded px-3 text-sm"
                  type="text"
                  placeholder="Type your message…"
                />
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-blue bg-orange-500 rounded px-3 text-white ml-2 hover:bg-blue-700 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
