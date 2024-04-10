console.log('Content script working');

// Select text
window.addEventListener('mouseup', textSelected);

function textSelected() {
  let selectedText = window.getSelection()?.toString();
  if (selectedText) {
    console.log('selectedText: ' + selectedText);
    chrome.runtime.sendMessage(selectedText); // Send selected text to background page
  }
}

// Edit actual HTML
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'change-color') {
    document.body.style.backgroundColor = 'black';
  } else if (message.type === 'replace-body') {
    document.body.innerHTML = '<h1>Hello I am the new body :D</h1>';
  } else if (message.type === 'add-button') {
    var newButton = document.createElement('button');
    newButton.id = 'bodyButton';
    newButton.type = 'button';
    newButton.textContent = 'A new button';
    document.body.appendChild(newButton);
  } else if (message.type === 'replace-titles') {
    var h1Texts = document.querySelectorAll('h1');
    var h2Texts = document.getElementsByTagName('h2');
    var h3Texts = document.getElementsByTagName('h3');
    for (var index in h1Texts) {
      if (h1Texts[index] && h1Texts[index].style) {
        h1Texts[index].style.fontWeight = 'bolder';
        h1Texts[index].style.color = 'green';
      }
    }
    for (var index in h2Texts) {
      if (h2Texts[index] && h2Texts[index].style) {
        h2Texts[index].style.fontWeight = 'bold';
        h2Texts[index].style.color = 'red';
      }
    }
    for (var index in h3Texts) {
      if (h3Texts[index] && h3Texts[index].style) {
        h3Texts[index].style.fontWeight = 'bold';
        h3Texts[index].style.color = 'blue';
      }
    }
  }
});
