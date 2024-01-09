function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

for (let count = 0; count < keyList.length; count++) {

    const key = keyList[count];

    const instrument = key.classList[1];

    const idAudio = `#som_${instrument}`
    console.log(idAudio);

    key.onclick = function () {
        playSound(idAudio)
    }

    console.log(count);

    key.onkeydown = function (e) {

        console.log(e.code);

        if(e.code === ' ' || 'Enter'){
            key.classList.add('ativa');
        }
        
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}
