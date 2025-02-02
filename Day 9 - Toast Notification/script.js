
const successBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const invalidBtn = document.getElementById("invalid");
let toastBox = document.getElementById("toastBox");

function showToast(){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'success';
    toastBox.appendChild(toast);
}

successBtn.onclick = showToast;
errorBtn.onclick = showToast;
invalidBtn.onclick = showToast;