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
    makeIcons("gridBoxLeft");
    makeIcons("gridBoxRight");
}

function makeIcons(gridBoxName){
    const gridBoxLeft = document.getElementById(gridBoxName);
    const randomizedImages = shuffleArray(svgImageNames);
    const imgSrcName = randomizedImages.map(name => "/images/svgs/" + name + ".svg");
    const savedTheme = localStorage.getItem("theme");

    const divBoxes = 50;
    const rowSize = 10;
    

    if (imgSrcName.length < divBoxes/2) {
        alert("Error trying to load banner background images.");
    } else {
        let imageCounter = 0;
        
        //Variable to start on cell 1 or cell 2
        const evenOrOdd = Math.floor(Math.random() * 2);

        for (let i = 0; i < divBoxes; i++) {
            const div = document.createElement("div");
            div.className = "gridBox";

            // Determine which block we're in
            const block = Math.floor(i / rowSize);
            let evenOrOddTest = 1;

            evenOrOddTest = evenOrOdd ? (i % 2 === 0) : (i % 2 !== 0);

            // For even blocks (0, 2, 4...), even index = "Image", odd = "Div"
            // For odd blocks (1, 3, ...), even index = "Div", odd = "Image"
            if (block % 2 === 0) {
                if (evenOrOddTest){
                    div.style.backgroundImage = "url('" + imgSrcName[imageCounter] + "')";
                    div.style.backgroundSize = "contain";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                    if(savedTheme == "VGAGreen") {
                        div.style.filter = "grayscale(100%) hue-rotate(120deg)";
                    } else {
                        div.style.filter = "grayscale(100%)";
                    }                    
                    imageCounter++;
                } else {
                    //Populate an empty grid
                } 
            } else {
                if (evenOrOddTest){
                    //Populate an empty grid
                } else {
                    div.style.backgroundImage = "url('" + imgSrcName[imageCounter] + "')";
                    div.style.backgroundSize = "contain";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                    if(savedTheme == "VGAGreen") {
                        div.style.filter = "grayscale(100%) hue-rotate(120deg)";
                    } else {
                        div.style.filter = "grayscale(100%)";
                    }   
                    imageCounter++;
                } 
            }

            gridBoxLeft.appendChild(div);
        }
    }    
}
