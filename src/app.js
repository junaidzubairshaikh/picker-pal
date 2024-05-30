(async function () {
  const myComponent = document.querySelector('#pickup-component');
  const inputTextBox = document.getElementById('inputTextBox');
  const randomSelectedItem = document.getElementById('randomSelectedItem');
  const addButton = document.getElementById('addButton');
  const selectRandomButton = document.getElementById('selectRandomButton');
  const clearButton = document.getElementById('clearButton');
  let destinationItems = [];
  // Example usage: passing an array of strings
  myComponent.sourceItems = [];

  myComponent.addEventListener('selectedData', setDestinationItems);
  addButton.addEventListener('click', handleAddClick);
  selectRandomButton.addEventListener('click', getRandomValueFromThePickUpList);
  clearButton.addEventListener('click', setRandomvalueHeader);

  function getRandomValueFromThePickUpList() {
    if (destinationItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * destinationItems.length);
      randomSelectedItem.textContent = 'Randomly selected item: ' + destinationItems[randomIndex];
    }
  }

  function setRandomvalueHeader() {
    randomSelectedItem.textContent = '';
  }

  function setDestinationItems(event) {
    const eventData = event.detail;
    destinationItems = eventData;
    console.log('Received data from Angular component:', eventData);
    console.log('Selected items left in source:', myComponent.sourceItems);
  }

  function handleAddClick() {
    const newItem = inputTextBox.value;
    if (!newItem || newItem.trim() === '')
      return;
    myComponent.sourceItems = [...myComponent.sourceItems, newItem];
    inputTextBox.value = '';
  }
})()