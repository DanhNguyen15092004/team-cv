// script.js

// Chọn icon bằng id
const icons = document.querySelectorAll(".icon");
var urls =  [
    "https://www.facebook.com/?stype=lo&deoia=1&jlou=AfdGa4vt8XNJn0VL4wWk2IZ0il-I1CYwsUGEvaraxxvwKRB_nGDn5x7JpGWGbgoMINa65nMWr7bXGBMJol3xqaWdTrGs7JAVDpVD5t-s9SjoCg&smuh=17326&lh=Ac-10piyxGe7sZEb3p8", 
    "https://www.messenger.com/", 
    "https://www.instagram.com/",
    "https://twitter.com/home",
    "https://www.linkedin.com/login"
]
icons.forEach((icon,e) => { 
        icon.addEventListener("click" , () => {
            const clickedIndex = Array.from(icons).indexOf(icon);

            window.location.href = urls[clickedIndex];
        })
});

