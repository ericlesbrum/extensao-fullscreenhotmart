function startApp(contentMedia, contentPageVideo) {
    const bgFull = document.createElement('div');
    bgFull.classList.add('bg-full');


    const btn = document.createElement('div');
    btn.classList.add('btn-fullscreen');
    btn.innerHTML = 'FULL';
    contentMedia.appendChild(btn);

    let isFC = false;

    btn.onclick = function () {
        if (!isFC) {
            document.body.append(bgFull);
            bgFull.appendChild(contentMedia)
            isFC = true;
        }
        else {
            contentPageVideo.appendChild(contentMedia)
            isFC = false;
            bgFull.remove();
        }

    }
}
const interval = setInterval(() => {
    const contentMedia = document.querySelector('.content-media');
    if (contentMedia) {
        const contentPageVideo = contentMedia.parentNode;
        clearInterval(interval);
        startApp(contentMedia, contentPageVideo);
    }
}, 50)