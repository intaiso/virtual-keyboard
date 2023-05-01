const BODY = document.querySelector('.body');

const keys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Left Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Right Shift'],
  ['Left Ctrl', 'Win', 'Left Alt', 'Space', 'Right Alt', 'Right Ctrl', 'Arrow Left', 'Arrow Up', 'Arrow Bottom', 'Arrow Right'],
];

const keyboard = document.createElement('div');
BODY.prepend(keyboard);
keyboard.className = 'keyboard';

const textField = document.createElement('textarea');
BODY.prepend(textField);
textField.rows = 24;
textField.cols = 80;
textField.className = 'text-field';

keys.forEach((keysArray) => {
  const keysRow = document.createElement('div');
  keysRow.className = 'keys-row';
  keysArray.forEach((keyValue) => {
    const keyBtn = document.createElement('button');
    keyBtn.innerText = keyValue;
    keyBtn.className = `key-button key-button_${keyValue.toLowerCase().split(' ').join('-')}`;
    keysRow.append(keyBtn);
  });
  keyboard.append(keysRow);
});
