var arr = new Array;
arr.push('<i class="fa-solid fa-house"></i>')
arr.push('<i class="fa-solid fa-book"></i>')
arr.push('<i class="fa-solid fa-bicycle"></i>')
arr.push('<i class="fa-solid fa-address-book"></i>')
arr.push('<i class="fa-solid fa-magnifying-glass"></i>')
arr.push('<i class="fa-solid fa-user"></i>')
arr.push('<i class="fa-brands fa-tiktok"></i>')
arr.push('<i class="fa-regular fa-envelope"></i>')
arr.push('<i class="fa-solid fa-star"></i>')
arr.push('<i class="fa-brands fa-github"></i>')
arr.push('<i class="fa-solid fa-music"></i>')
arr.push('<i class="fa-brands fa-discord"></i>')
arr.push('<i class="fa-solid fa-camera-retro"></i>')
arr.push('<i class="fa-regular fa-comment"></i>')
arr.push('<i class="fa-solid fa-bolt"></i>')
arr.push('<i class="fa-solid fa-car"></i>')
arr.push('<i class="fa-solid fa-ghost"></i>')
arr.push('<i class="fa-solid fa-gift"></i>')
arr.push('<i class="fa-solid fa-film"></i>')
arr.push('<i class="fa-solid fa-clock"></i>')
arr.push('<i class="fa-solid fa-house"></i>')
arr.push('<i class="fa-solid fa-book"></i>')
arr.push('<i class="fa-solid fa-bicycle"></i>')
arr.push('<i class="fa-solid fa-address-book"></i>')
arr.push('<i class="fa-solid fa-magnifying-glass"></i>')
arr.push('<i class="fa-solid fa-user"></i>')
arr.push('<i class="fa-brands fa-tiktok"></i>')
arr.push('<i class="fa-regular fa-envelope"></i>')
arr.push('<i class="fa-solid fa-star"></i>')
arr.push('<i class="fa-brands fa-github"></i>')
arr.push('<i class="fa-solid fa-music"></i>')
arr.push('<i class="fa-brands fa-discord"></i>')
arr.push('<i class="fa-solid fa-camera-retro"></i>')
arr.push('<i class="fa-regular fa-comment"></i>')
arr.push('<i class="fa-solid fa-bolt"></i>')
arr.push('<i class="fa-solid fa-car"></i>')
arr.push('<i class="fa-solid fa-ghost"></i>')
arr.push('<i class="fa-solid fa-gift"></i>')
arr.push('<i class="fa-solid fa-film"></i>')
arr.push('<i class="fa-solid fa-clock"></i>')
for(let i=0; i<80; i++){
    // create an array with numbers 0 to 40
    let numbers = Array.from(Array(arr.length).keys());

    // shuffle the array
    for (let l = numbers.length-1; l > 0; l--) {
        const j = Math.floor(Math.random() * (l + 1));
        [numbers[l], numbers[j]] = [numbers[j], numbers[l]];
    }
    let tempHTML = "";
    numbers.forEach(function(re, index){
        tempHTML += arr[re]
    })
    document.getElementsByClassName("icons")[i].innerHTML = tempHTML;
}