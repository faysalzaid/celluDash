import React from 'react'

export default function Chat() {
    function sendChat() {
        const msg = document.getElementById('chat');
        const cont = document.getElementById('chatContainer');
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('flex')
        outerDiv.classList.add('w-full')
        outerDiv.classList.add('mt-2')
        outerDiv.classList.add('space-x-3')
        outerDiv.classList.add('max-w-xs')
        outerDiv.classList.add('ml-auto')
        outerDiv.classList.add('justify-end')

        let innerDiv = document.createElement('div');
        innerDiv.classList.add('bg-blue-600');
        innerDiv.classList.add('text-white');
        innerDiv.classList.add('p-3');
        innerDiv.classList.add('rounded-l-lg');
        innerDiv.classList.add('rounded-br-lg');

        let content = document.createElement('p');
        content.classList.add('text-sm')

        content.innerHTML = msg.value;
        innerDiv.appendChild(content);
        outerDiv.appendChild(innerDiv);

        cont.appendChild(outerDiv);
        msg.value = '';
        var xH = cont.scrollHeight; 
cont.scrollTo(0, xH);

        let newMsg = `
        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        `
        msg.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
            }
        })
    }
    return (
        <>
           <div className="flex flex-col items-center justify-center w-screen   text-gray-800 px-10 py-2">
<div className="flex flex-col flex-grow w-full max-w-xl light:bg-white shadow-xl rounded-lg overflow-hidden">
    <div id='chatContainer' className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
        </div>
        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
    </div>
    
    <div className="bg-gray-300 p-4 flex">
                        <input id='chat' className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
                        <input type="submit" value="Send" className="btn btn-blue bg-orange-500 rounded px-3 text-white" onClick={sendChat} />
    </div>
</div>


</div>
        </>
    )
}