const overlayContainer = document.getElementById('overlay-container');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-overlay');
const langBlock = document.getElementById('lang-dropdown');
const langOption_1 = document.getElementById('lang-EN');
const langOption_2 = document.getElementById('lang-RU');
let projectsArr = []
let filteredArr = []


function populateGaleryData() {
    // Creates projects data array of objects based on random number 
    document.getElementById('projects-showing')
    const optionsArr = [
        [1, 2, 3, 4, 5, 6],
        ["Kempingo nameliai", "Komercinės patalpos", "Gyvenamasis namas"],
        ["Ligoninė", "Darželis", "Mokykla", "Gyvenamasis namas"],
        ["2018. Lietuva", "2019. Danija", "2020. Norvegija"],
        ["Mod", "Spec"]
    ]
    let total = Math.round(Math.random() * 48);
    let i = 0;
    let tmp = 0

    while (i < total) {
        tmp = Math.random();
        projectsArr.push({
            id: optionsArr[0][Math.round(tmp * 5)],
            name: optionsArr[1][Math.round(tmp * 2)],
            buildingType: optionsArr[2][Math.round(tmp * 3)],
            date: optionsArr[3][Math.round(tmp * 2)],
            type: optionsArr[4][Math.round(tmp * 1)]
        });
        i++;
    }
}

function filterGaleryData() {
    // Filter of projects data array
    filterModular = document.getElementById('modularFilter');
    filterSpecial = document.getElementById('specialFilter');
    if (filterModular.checked === true & filterSpecial.checked === true) {
        filteredArr = projectsArr;
    } else if (filterModular.checked === true & filterSpecial.checked === false) {
        filteredArr = projectsArr.filter((f) => f.type === filterModular.name)
    } else if (filterModular.checked === false & filterSpecial.checked === true) {
        filteredArr = projectsArr.filter((f) => f.type === filterSpecial.name)
    } else if (filterModular.checked === false & filterSpecial.checked === false) {
        filteredArr = []
    }
    drawGalery()
}

function drawGalery() {
    let i = 0;
    let j = 0;
    let galery = document.getElementById('galery-completed');
    let info = document.getElementById('projects-showing');
    let template = document.createElement('div');

    let galeryContent = "";
    if (filteredArr.length < 8) {
        i = 8 - filteredArr.length
    }
    while (i < 8) {
        galeryContent = galeryContent += "<div class='galery-showcase-container'><div class='galery-showcase shadow' onclick='showContent(this)'><div class='galery-showcase-item'><div class='galery-image-container'><img class='showcase-image' src='img/projects/Project" + filteredArr[j].id + "_small.jpg' srcset='img/projects/Project" + filteredArr[j].id + ".jpg 1920w ,img/projects/Project" + filteredArr[j].id + "_small.jpg 900w' ><div class='galery-showcase-gradient'></div></div><div class='showcase-tag h5'>" + filteredArr[j].buildingType + "</div><div class='galery-showcase-text'><div class='h5 galery-date-info'>" + filteredArr[j].date + "</div><div class='h3'>" + filteredArr[j].name + "</div></div></div></div></div></div>";
        i++;
        j++;
    }
    info.innerHTML = "Rodomi " + j + " iš " + filteredArr.length + " projektų"
    galery.innerHTML = galeryContent;
}
function langSelectToggle() {
    langBlock.classList.toggle('shadow');
    langOption_1.classList.toggle('hide');
    langOption_2.classList.toggle('hide');
}

function langSelectClose() {
    langBlock.classList.remove('shadow');
    langOption_1.classList.add('hide');
    langOption_2.classList.add('hide');
}

function playVideo() {
    openOverlay()
    const video = document.createElement('img');
    const cloneBtn = closeBtn.cloneNode(true);
    video.setAttribute("src", 'https://raw.githubusercontent.com/MiestoMeska/Modules/main/video/Presentation.gif');
    video.classList.add('gif','presentation');
    video.style.height = '100%';
    video.style.width = '100%';
    overlayContainer.style.width = '50rem';
    overlayContainer.appendChild(video);
    overlayContainer.appendChild(cloneBtn);
    cloneBtn.style.display= 'flex';
}

function showContent(el) {
    const clone = el.cloneNode(true);
    const cloneBtn = closeBtn.cloneNode(true);
    openOverlay();
    var size = String(el.classList.item(0))
   if(size !== 'wide') {
        overlayContainer.style.width = '35rem';
    } else {
        overlayContainer.style.width = '50rem';
    }
    clone.classList.remove('shadow');
    clone.style.zIndex = '100';
    clone.style.height= '35rem';
    clone.style.padding= '5%'
    clone.style.backgroundColor= 'white';
    clone.onclick = 'false'
    overlayContainer.appendChild(clone);
    overlayContainer.appendChild(cloneBtn);
    cloneBtn.style.display= 'flex';
}

function openOverlay() {
    overlay.classList.add('show');
    overlayContainer.addEventListener("mouseup",closeOverlayOnClick)
}

function closeOverlay() {
    overlayContainer.innerHTML = '';
    overlay.classList.remove('show');
}

function closeOverlayOnClick() {
    console.log('clicked')
    if (EventTarget.id !="overlayContainer") {
    overlay.classList.remove('show');
    overlayContainer.innerHTML = '';
    }
}

function mobileMenuToggle() {
document.getElementById("mobile-menu").classList.toggle("change");
document.getElementById("nav-links-container").classList.toggle("visible");
}

function mobileMenuClose() {
document.getElementById("mobile-menu").classList.remove("change");
document.getElementById("nav-links-container").classList.remove("visible");
}

