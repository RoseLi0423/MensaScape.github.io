let structureCanvas = document.getElementById('structureCanvas');
let shadowCanvas = document.getElementById('shadowCanvas');
let structureCtx = structureCanvas.getContext('2d');
let shadowCtx = shadowCanvas.getContext('2d');

let brickX = 0;
let shadowX = 0;
const size = 60;
let structureY = structureCanvas.height - size;  // Y for bricks/roof
let shadowY = 0;         // Y for shadows


structureCtx.strokeStyle = "#FFFEF8"; 
structureCtx.lineWidth = 1;           
structureCtx.setLineDash([5, 10]);

structureCtx.beginPath();
structureCtx.moveTo(0, structureCanvas.height - structureCtx.lineWidth / 2);  // Start at the left-bottom corner
structureCtx.lineTo(structureCanvas.width, structureCanvas.height - structureCtx.lineWidth / 2); // Draw to the right-bottom corner
structureCtx.stroke();

//structureCtx.strokeRect(0, 0, structureCanvas.width, structureCanvas.height);

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
            shadowCtx.globalAlpha = 0.5; 
            shadowCtx.drawImage(img, brickX, shadowY, size, size);
            shadowX += size;
        }
    }
}

document.getElementById('legend').addEventListener('click', function() {
    var overlay = document.getElementById('imageOverlay');
    overlay.classList.remove('hidden');
});

document.getElementById('imageOverlay').addEventListener('click', function() {
    this.classList.add('hidden');
});
