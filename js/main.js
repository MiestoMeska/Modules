const overlayContainer = document.getElementById('overlay-container');
const langBlock = document.getElementById('lang-dropdown');
const langOption_1 = document.getElementsByClassName('lang-option')[0];
const langOption_2 = document.getElementsByClassName('lang-option')[1];

function openLangSelect() {
    langBlock.classList.add('shadow');
    langOption_1.classList.remove('hide');
    langOption_2.classList.remove('hide');
}

function closeLangSelect() {
    langBlock.classList.remove('shadow')
    langOption_1.classList.add('hide');
    langOption_2.classList.add('hide');
}

function playVideo() {
    openOverlay()
    const video = document.createElement('img');
    const closeBtn = document.getElementById('close-overlay');
    const cloneBtn = closeBtn.cloneNode(true);
    video.setAttribute("src", '../dist/video/Presentation.gif');
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
    const closeBtn = document.getElementById('close-overlay');
    const cloneBtn = closeBtn.cloneNode(true);
    openOverlay();
    var size = String(el.classList.item(0))
   if(size !== 'wide') {
        overlayContainer.style.width = '35rem';
    } else {
        overlayContainer.style.width = '50rem';
    }
    clone.classList.remove('duo', 'trio', 'shadow');
    clone.style.height= '35rem';
    clone.style.padding= '5%'
    clone.style.backgroundColor= 'white';
    clone.onclick = 'false'
    overlayContainer.appendChild(clone);
    overlayContainer.appendChild(cloneBtn);
    cloneBtn.style.display= 'flex';
    console.log(el.classList.item(0))
}

function openOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener(onclick,closeOverlay)
    overlay.classList.add('show');
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlayContainer.innerHTML = '';
    overlay.classList.remove('show');
}

