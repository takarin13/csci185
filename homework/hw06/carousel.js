const photos = [
    "images/img1-600x400.jpg", //0
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg" //9a
];

let idx = 0;

function showImage() {
    console.log("Show image", idx);
    const img = document.querySelector("#the_image");
    const caption = document.querySelector(".caption");
    img.src = photos[idx]
    caption.textContent = (idx + 1) + ' of ' + photos.length;
}

function forward() {
    if(idx === 9){
        idx=0;
    }
    else{idx += 1;
    }
    showImage();
}

function back() {
    if(idx === 0){
        idx = 9
    }
    else{
        idx -= 1;
    }
    //console.log(idx);
    showImage();
    for (let i = 0; i < photos.length; i++){
        let template = `<div class = "back" ("${images[i]}")></div>`;
        document.querySelector("#the_image").insertAdjacentHTML("beforeend, template);")
    }
}
