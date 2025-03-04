function updateName(){
    const name = document.getElementById('name');
    const nameInput = document.getElementById('input_name').value;
    name.innerText = nameInput;
}
function updateBio(){
    const bio = document.getElementById('bio');
    const bioInput = document.getElementById('input_bio').value;
    bio.innerText = bioInput;
}
function updateColor(){
    const bg = document.getElementById("card");
    const color = document.getElementById('input_background_color').value;
    bg.style.backgroundColor = color;
}
function updateImg(){
    const imgUrl = document.getElementById('input_img_url').value;
    const img = document.getElementById('img');
    img.src = imgUrl;
}