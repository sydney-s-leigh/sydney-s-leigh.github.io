function populateGridBox(){
    
    const gridBoxLeft = document.getElementById("gridBoxLeft");
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
                div.innerHTML = "Image " + i;
            } else {
                div.innerHTML = "Div " + i;
            } 
        } else {
            if (evenOrOddTest){
                div.innerHTML = "Div " + i;
            } else {
                div.innerHTML = "Image " + i;
            } 
        }

        gridBoxLeft.appendChild(div);
    }

    //Create an image for every other box in gridBoxLeft based on number of grid-template-columns/grid-template-rows
    //that is properly resized
    
}
