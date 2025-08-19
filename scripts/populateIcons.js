const svgImageNames = ["Beastie", 
    "Blender",
    "C_Sharp",
    "C",
    "C++",
    "CSS3",
    "Docker",
    "GIMP",
    "GIT",
    "Github",
    "HTML5",
    "Java",
    "JavaScript",
    "Kali",
    "Krita",
    "Lua",
    "Perl",
    "PHP",
    "Python",
    "Redhat",
    "Ruby",
    "Tux",
    "Ubuntu",
    "Visual_Basic",
    "Visual_Studio",
    "W3Schools",
    "Wireshark"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Return the shuffled array (optional, as it's modified in-place)
}

function populateGridBox(){
    const gridBoxLeft = document.getElementById("gridBoxLeft");
    const randomizedImages = shuffleArray(svgImageNames);
    const imgSrcName = randomizedImages.map(name => "/images/svgs/" + name + ".svg");
    // document.getElementById("gridBoxLeft").innerHTML = "Y";

    //Grab icons from /images/svgs
    // const container = document.getElementById('gridBoxLeft');
    // const newImage = document.createElement('img');

    // newImage.src = '/images/svgs/HTML5.svg';
    // newImage.style.width = "2.5rem";
    // newImage.style.height = "2.5rem";
    // newImage.alt = 'HTML5 SVG Logo';
    // container.appendChild(newImage);

    const divBoxes = 50;
    const rowSize = 10;
    

    if (imgSrcName.length < divBoxes/2) {
        alert("Error trying to load banner background images.");
    } else {
        let imageCounter = 0;

        for (let i = 0; i < divBoxes; i++) {
            const div = document.createElement("div");
            div.className = "gridBox";

            // Determine which block we're in
            const block = Math.floor(i / rowSize);
            const evenOrOddTest = (i % 2 === 0);

            // For even blocks (0, 2, 4...), even index = "Image", odd = "Div"
            // For odd blocks (1, 3, ...), even index = "Div", odd = "Image"
            if (block % 2 === 0) {
                if (evenOrOddTest){
                    // const img = document.createAttribute("img");                    
                    // img.src = imgSrcName[i];
                    // img.style.width = "2.5rem";
                    // img.style.height = "2.5rem";
                    // img.alt = randomizedImages[i];
                    // div.appendChild(img);
                    div.style.backgroundImage = "url('" + imgSrcName[imageCounter] + "')";
                    div.style.backgroundSize = "contain";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                    div.style.filter = "grayscale(100%)";
                    imageCounter++;
                } else {
                    //div.innerHTML = "Div " + i;
                } 
            } else {
                if (evenOrOddTest){
                    //div.innerHTML = "Div " + i;
                } else {
                    // const img = document.createAttribute("img");                    
                    // img.src = imgSrcName[i];
                    // img.style.width = "2.5rem";
                    // img.style.height = "2.5rem";
                    // img.alt = randomizedImages[i];
                    // div.appendChild(img);
                    div.style.backgroundImage = "url('" + imgSrcName[imageCounter] + "')";
                    div.style.backgroundSize = "contain";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                    div.style.filter = "grayscale(100%)";
                    imageCounter++;
                } 
            }

            gridBoxLeft.appendChild(div);
        }
    }
    //Create an image for every other box in gridBoxLeft based on number of grid-template-columns/grid-template-rows
    //that is properly resized
    
}
