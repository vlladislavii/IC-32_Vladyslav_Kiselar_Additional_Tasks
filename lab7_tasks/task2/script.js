const square = document.getElementById('square');
const shrinkButton = document.getElementById('shrink');
const enlargeButton = document.getElementById('enlarge');

function changeSize(amount) {
    const currentWidth = parseInt(getComputedStyle(square).width);
    const currentHeight = parseInt(getComputedStyle(square).height);

    const newWidth = currentWidth + amount;
    const newHeight = currentHeight + amount;

    if (newWidth >= 15 && newHeight >= 15) {
        square.style.width = newWidth + 'px';
        square.style.height = newHeight + 'px';
    }
}

shrinkButton.addEventListener('click', () => changeSize(-15));
enlargeButton.addEventListener('click', () => changeSize(15));
