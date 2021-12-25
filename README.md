# Chatlinks

Proof of concept library to add clickable buttons to execute toolbox commands  
![](https://i.gyazo.com/60d1d2bbd338a2627d35219a66b4bec1.gif)

## Usage For Developers
Included in this repo is an example.js for reference  
First: require this library `const chatlinks = require('../chatlinks');`  

Second: define a list of messages to be shown in the format of an array of arrays with the following items  
```
//['message text', 'message color', 'button message', 'button color', uniqueId, 'command to execute']
const commandlist = [
  ['test button 1', '#ff6961', 'click', '#6169ff', 999901, 'chatlinkstest 1'],
  ['test button 2', '#ff6961', 'click', '#6169ff', 999902, 'chatlinkstest 2'],
  ['test button 3', '#ff6961', 'click', '#6169ff', 999903, 'chatlinkstest 3'],
  ['test button 4', '#ff6961', 'click', '#6169ff', 999904, 'chatlinkstest 4']
]
```
Third: construct the library  
`const buttons = new chatlinks(mod, array commandlist, bool suppressNextCommandMessage, 'command to rerun');`  
```
//supressNextCommandMessage and 'command to rerun' are optional flags
const buttons = new chatlinks(mod, commandlist, false, 'chatlinkstest');
```
Last: Thats it! You can now call `buttons.printlist()` to get a fully formatted list of messages to use in `mod.command.message` or however you wish to show them in chat

## Supporting "placeholder" changes

If you want your text or color to be able to dynamically change as shown in the preview above, you will need to make a couple changes  
First: change `commandlist` to be a function that returns your list, this will generate new strings with the new values  
```
const commandlist = () => {
  return [
    [`test button 1 ${flag1 ? 'en' : 'dis'}abled `, flag1 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999901, 'chatlinkstest 1'],
    [`test button 2 ${flag2 ? 'en' : 'dis'}abled `, flag2 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999902, 'chatlinkstest 2'],
    [`test button 3 ${flag3 ? 'en' : 'dis'}abled `, flag3 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999903, 'chatlinkstest 3'],
    [`test button 4 ${flag4 ? 'en' : 'dis'}abled `, flag4 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999904, 'chatlinkstest 4']
  ]
}
```
Next: change `commandlist` with `commandlist()` when you construct the library in the third step  
Last: set `buttons.chatlist = commandlist()` before you do `buttons.printlist()` to update your list

## Add lib to module.json

By adding the library as a dependency in your module.json you remove the need for the user to manually install it  
You can do so by adding the following to your module.json  
```
"dependencies": {
  "chatlinks": "https://raw.githubusercontent.com/SupremeSorc/chatlinks/main/module.json"
}
```
