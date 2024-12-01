function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
    boxesContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.border = "2px solid #fff";
        box.style.borderRadius = "5px";
        fragment.appendChild(box);
        boxSize += 10;
    }

    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
    const amount = parseInt(input.value.trim(), 10);

    if (!amount || amount < 1 || amount > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createBoxes(amount);
    input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
