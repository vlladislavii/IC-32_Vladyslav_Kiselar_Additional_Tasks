const doubleButton = document.getElementById('double-button');
const numberList = document.getElementById('number-list');

doubleButton.addEventListener('click', () => {
    const listItems = numberList.querySelectorAll('li');
    listItems.forEach(item => {
        const currentValue = parseInt(item.textContent);
        item.textContent = currentValue * 2;
    });
});
