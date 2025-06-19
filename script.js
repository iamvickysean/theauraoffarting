// Fart sound data with funny names and descriptions
const fartSounds = [
    {
        id: 1,
        name: "The Trumpet Soloist",
        description: "A brass-like blast that would make any orchestra proud",
        image: "trumpet.png",
        audio: "trumpet.mp3"
    },
    {
        id: 2,
        name: "The Squeaky Door",
        description: "High-pitched and drawn out, like an unoiled hinge",
        image: "squeaky.png",
        audio: "squeaky.mp3"
    },
    {
        id: 3,
        name: "The Foghorn",
        description: "Deep, resonant, and could be heard from miles away",
        image: "foghorn.png",
        audio: "foghorn.mp3"
    },
    {
        id: 4,
        name: "The Machine Gun",
        description: "Rapid-fire succession that leaves no survivors",
        image: "machinegun.png",
        audio: "machinegun.mp3"
    },
    {
        id: 5,
        name: "The Bubble Bath",
        description: "Wet and bubbly, like someone blowing into a straw in milk",
        image: "bubblebath.png",
        audio: "bubblebath.mp3"
    },
    {
        id: 6,
        name: "The Silent Assassin",
        description: "Barely audible but deadly effective",
        image: "silent.png",
        audio: "silent.mp3"
    },
    {
        id: 7,
        name: "The Earthquake",
        description: "Rumbling that shakes the very foundations",
        image: "earthquake.png",
        audio: "earthquake.mp3"
    },
    {
        id: 8,
        name: "The Whoopee Cushion",
        description: "A classic sound that never gets old",
        image: "whoopee.png",
        audio: "whoopee.mp3"
    },
    {
        id: 9,
        name: "The Balloon Deflation",
        description: "Like letting air out of a balloon, but from a different source",
        image: "balloon.png",
        audio: "balloon.mp3"
    },
    {
        id: 10,
        name: "The Tuba Player",
        description: "Deep, resonant, and surprisingly musical",
        image: "tuba.png",
        audio: "tuba.mp3"
    },
    {
        id: 11,
        name: "The Motorboat",
        description: "Rapid vibrations that could propel a small watercraft",
        image: "motorboat.png",
        audio: "motorboat.mp3"
    },
    {
        id: 12,
        name: "The Duck Call",
        description: "Quacking that would attract any waterfowl",
        image: "duck.png",
        audio: "duck.mp3"
    },
    {
        id: 13,
        name: "The Thunderclap",
        description: "A sudden explosive sound that echoes for miles",
        image: "thunder.png",
        audio: "thunder.mp3"
    },
    {
        id: 14,
        name: "The Whisper",
        description: "Soft but insistent, like a secret being shared",
        image: "whisper.png",
        audio: "whisper.mp3"
    },
    {
        id: 15,
        name: "The Grand Finale",
        description: "The crescendo that brings down the house",
        image: "finale.png",
        audio: "finale.mp3"
    }
];

// Current audio playing
let currentAudio = null;

// Function to create fart cards
function createFartCards() {
    const fartGallery = document.querySelector('.fart-gallery');
    
    fartSounds.forEach(fart => {
        // Create card element
        const fartCard = document.createElement('div');
        fartCard.classList.add('fart-card');
        
        // Create image container
        const fartImage = document.createElement('div');
        fartImage.classList.add('fart-image');
        
        // Add image with fallback
        const img = document.createElement('img');
        img.src = `images/${fart.image}`;
        img.alt = fart.name;
        img.onerror = function() {
            // If image fails to load, create an SVG element instead
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.setAttribute("viewBox", "0 0 300 300");
            
            // Chair
            const chair1 = document.createElementNS(svgNS, "rect");
            chair1.setAttribute("x", "75");
            chair1.setAttribute("y", "200");
            chair1.setAttribute("width", "150");
            chair1.setAttribute("height", "20");
            chair1.setAttribute("fill", "#8B4513");
            svg.appendChild(chair1);
            
            const chair2 = document.createElementNS(svgNS, "rect");
            chair2.setAttribute("x", "75");
            chair2.setAttribute("y", "220");
            chair2.setAttribute("width", "20");
            chair2.setAttribute("height", "60");
            chair2.setAttribute("fill", "#8B4513");
            svg.appendChild(chair2);
            
            const chair3 = document.createElementNS(svgNS, "rect");
            chair3.setAttribute("x", "205");
            chair3.setAttribute("y", "220");
            chair3.setAttribute("width", "20");
            chair3.setAttribute("height", "60");
            chair3.setAttribute("fill", "#8B4513");
            svg.appendChild(chair3);
            
            // Character
            const head = document.createElementNS(svgNS, "circle");
            head.setAttribute("cx", "150");
            head.setAttribute("cy", "150");
            head.setAttribute("r", "50");
            head.setAttribute("fill", "#A9A9A9");
            svg.appendChild(head);
            
            const leftEye = document.createElementNS(svgNS, "circle");
            leftEye.setAttribute("cx", "135");
            leftEye.setAttribute("cy", "140");
            leftEye.setAttribute("r", "5");
            leftEye.setAttribute("fill", "#000");
            svg.appendChild(leftEye);
            
            const rightEye = document.createElementNS(svgNS, "circle");
            rightEye.setAttribute("cx", "165");
            rightEye.setAttribute("cy", "140");
            rightEye.setAttribute("r", "5");
            rightEye.setAttribute("fill", "#000");
            svg.appendChild(rightEye);
            
            const mouth = document.createElementNS(svgNS, "path");
            mouth.setAttribute("d", "M130 165 Q150 170 170 165");
            mouth.setAttribute("stroke", "#000");
            mouth.setAttribute("stroke-width", "2");
            mouth.setAttribute("fill", "none");
            svg.appendChild(mouth);
            
            // Body
            const body = document.createElementNS(svgNS, "rect");
            body.setAttribute("x", "125");
            body.setAttribute("y", "200");
            body.setAttribute("width", "50");
            body.setAttribute("height", "60");
            body.setAttribute("fill", "#A9A9A9");
            svg.appendChild(body);
            
            // Arms
            const leftArm = document.createElementNS(svgNS, "rect");
            leftArm.setAttribute("x", "100");
            leftArm.setAttribute("y", "210");
            leftArm.setAttribute("width", "25");
            leftArm.setAttribute("height", "10");
            leftArm.setAttribute("fill", "#A9A9A9");
            svg.appendChild(leftArm);
            
            const rightArm = document.createElementNS(svgNS, "rect");
            rightArm.setAttribute("x", "175");
            rightArm.setAttribute("y", "210");
            rightArm.setAttribute("width", "25");
            rightArm.setAttribute("height", "10");
            rightArm.setAttribute("fill", "#A9A9A9");
            svg.appendChild(rightArm);
            
            // Legs
            const leftLeg = document.createElementNS(svgNS, "rect");
            leftLeg.setAttribute("x", "125");
            leftLeg.setAttribute("y", "260");
            leftLeg.setAttribute("width", "15");
            leftLeg.setAttribute("height", "30");
            leftLeg.setAttribute("fill", "#A9A9A9");
            svg.appendChild(leftLeg);
            
            const rightLeg = document.createElementNS(svgNS, "rect");
            rightLeg.setAttribute("x", "160");
            rightLeg.setAttribute("y", "260");
            rightLeg.setAttribute("width", "15");
            rightLeg.setAttribute("height", "30");
            rightLeg.setAttribute("fill", "#A9A9A9");
            svg.appendChild(rightLeg);
            
            // Gas cloud
            const gasCloud = document.createElementNS(svgNS, "ellipse");
            gasCloud.setAttribute("cx", "220");
            gasCloud.setAttribute("cy", "210");
            gasCloud.setAttribute("rx", "30");
            gasCloud.setAttribute("ry", "20");
            gasCloud.setAttribute("fill", "#4CAF50");
            gasCloud.setAttribute("opacity", "0.5");
            svg.appendChild(gasCloud);
            
            // Replace the img with the SVG
            fartImage.removeChild(img);
            fartImage.appendChild(svg);
        };
        fartImage.appendChild(img);
        
        // Add gas clouds
        for (let i = 0; i < 3; i++) {
            const gasCloud = document.createElement('div');
            gasCloud.classList.add('gas-cloud');
            
            // Randomize position and animation
            const left = 50 + (Math.random() * 40 - 20) + '%';
            const bottom = Math.random() * 20 + '%';
            const delay = Math.random() * 2 + 's';
            const size = 50 + Math.random() * 50 + 'px';
            
            gasCloud.style.left = left;
            gasCloud.style.bottom = bottom;
            gasCloud.style.animationDelay = delay;
            gasCloud.style.width = size;
            gasCloud.style.height = size;
            
            fartImage.appendChild(gasCloud);
        }
        
        // Create info container
        const fartInfo = document.createElement('div');
        fartInfo.classList.add('fart-info');
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = fart.name;
        fartInfo.appendChild(title);
        
        // Add description
        const description = document.createElement('p');
        description.textContent = fart.description;
        fartInfo.appendChild(description);
        
        // Add play button
        const playButton = document.createElement('button');
        playButton.classList.add('play-button');
        playButton.innerHTML = '<i class="fas fa-play"></i> Play Sound';
        playButton.addEventListener('click', () => playFartSound(fart.audio));
        fartInfo.appendChild(playButton);
        
        // Assemble card
        fartCard.appendChild(fartImage);
        fartCard.appendChild(fartInfo);
        
        // Add card to gallery
        fartGallery.appendChild(fartCard);
    });
}

// Function to play fart sound
function playFartSound(audioFile) {
    // Extract sound name from file name (remove .mp3)
    const soundName = audioFile.replace('.mp3', '');
    
    // Initialize the sound generator if not already done
    if (!window.fartSoundGenerator) {
        window.fartSoundGenerator = new FartSoundGenerator();
    }
    
    // Play the sound
    window.fartSoundGenerator.playSound(soundName);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createFartCards();
});
