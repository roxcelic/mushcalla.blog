let info = {
    image: [
        'IMG_2844.PNG',
        'IMG_2851.jpg',
        'IMG_3236.HEIC',
        'IMG_3260.HEIC',
        'IMG_3264.HEIC',
        'IMG_3266.HEIC',
        'IMG_3302.HEIC',
        'IMG_3627.JPG',
        'IMG_3650.HEIC',
        'IMG_3663.HEIC',
        'IMG_3708.JPG',
        'IMG_3838.JPG'
    ],
    used: []
}

let editByClass = async (name, run) => {
    let foundItems = Array.prototype.slice.call( document.getElementsByClassName(name));

    if (foundItems.length > 0) {
        run(foundItems);
    }
}

document.addEventListener("DOMContentLoaded", async (event) => {
    await editByClass("spotify", async (spotify) => {
        let response = await fetch(`https://api.mushcalla.blog`);
        let data = await response.json();

        if (data.image == null) {
            spotify.forEach(el => {
                el.children[0].children[0].innerText = ``;
            
                let image = info.image[Math.floor(Math.random() * info.image.length)];
                while (info.used.includes(image)) image = info.image[Math.floor(Math.random() * info.image.length)];
                info.used.push(image);

                el.children[0].style.backgroundImage = `url('/images/${image}')`;
            });
            
            return;
        };

        spotify.forEach(el => {
            el.href = data.url;
            el.children[0].style.backgroundImage = `url('${data.image[data.image.length - 1]['#text']}')`;
            el.children[0].children[0].innerText = `Roxy is currently listening to ${data.name} by ${data.artist[`#text`]}`;
        });
    });

    await editByClass("random", (random) => {
        random.forEach(el => {
            el.children[0].children[0].innerText = ``;
            
            let image = info.image[Math.floor(Math.random() * info.image.length)];
            while (info.used.includes(image)) image = info.image[Math.floor(Math.random() * info.image.length)];
            info.used.push(image);

            el.children[0].style.backgroundImage = `url('/images/${image}')`;
        });
    });

});