let structureCanvas = document.getElementById('structureCanvas');
let shadowCanvas = document.getElementById('shadowCanvas');
let structureCtx = structureCanvas.getContext('2d');
let shadowCtx = shadowCanvas.getContext('2d');

let brickX = 0;
let shadowX = 0;
const size = 60;
let structureY = structureCanvas.height - size;  // Y for bricks/roof
let shadowY = 0;         // Y for shadows

function draw(type,wordElement) {
    let imagePath = wordElement.getAttribute('data-image-path');

    if (type === 'BRICK') {
        let img = new Image();
        img.src = imagePath;
        img.onload = () => {
            structureCtx.drawImage(img, brickX, structureY, size, size);
            structureY -= size;
        }
    } else if (type === 'ROOF') {
        let img = new Image();
        img.src = imagePath;
        img.onload = () => {
            structureCtx.drawImage(img, brickX, structureY, size, size);
            brickX += size;
            structureY = structureCanvas.height - size;
        }
    } else if (type === 'SHADOW') {
        let img = new Image();
        img.src = imagePath;
        img.onload = () => {
            shadowCtx.drawImage(img, brickX, shadowY, size, size);
            shadowX += size;
        }
    }
}

