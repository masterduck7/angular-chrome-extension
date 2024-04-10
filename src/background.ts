console.log('Background script working');

chrome.runtime.onMessage.addListener(receiver);

var selectedText = '';

function receiver(message: string, sender: any, sendResponse: any) {
  console.log('message Received: ' + message);
  selectedText = message;
}
