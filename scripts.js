const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        return this.civilImages[Math.floor(Math.random() * 4)];
    }
    
    getRandomMilitary() {
        return this.militaryImages[Math.floor(Math.random() * 4)];
    }
    
    getAll() {
        return [...this.civilImages, ...this.militaryImages];
    }
}

class Painter {
    constructor(gallery) {
        this.createGallery();
    }

    createGallery(gallery) {
        this.gallery = document.createElement("section");
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        return `
        <picture>
            <img src="${imageUrl}" />
        </picture>
        `
    }

    paintSingleImage(imageUrl) {
        
        this.gallery.innerHTML += this.createImageTag(imageUrl);
    }

    paintMultipleImages(arrayOfImages) {
        for (let i = 0; i < arrayOfImages.length; i++) {
            this.gallery.innerHTML += this.createImageTag(arrayOfImages[i]);
            
        }
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();