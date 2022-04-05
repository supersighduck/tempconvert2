document.querySelector('#farenToCelButton').addEventListener('click', buttonClick)

let mainBody = document.querySelector('body')

function buttonClick(){
    let getUserInfo = document.querySelector('#farenToCel').value
    let farenToCelMath = (getUserInfo - 32) * 5/9
    document.querySelector('#farenToCelDisplay').innerText = farenToCelMath.toPrecision(3)
    document.querySelector('#reset1').reset()
    if(getUserInfo <= 32){
        mainBody.style.background = 'url(image/freezingcold-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else if (getUserInfo <= 60){
        mainBody.style.background = 'url(image/niceday-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else if (getUserInfo <= 85){
        mainBody.style.background = 'url(image/goodday-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else if (getUserInfo <=100){
        mainBody.style.background = 'url(image/sweatingfan-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else {
        mainBody.style.background = 'url(image/this-is-fine-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '350px';
    }

    
}

document.querySelector('#celToFarenButton').addEventListener('click', celToClick)

function celToClick(){
    let getUserInfo = document.querySelector('#celToFaren').value
    let celToFarenMath = (getUserInfo * 1.8) + 32
    document.querySelector('#celToFarenDisplay').innerText = celToFarenMath.toFixed(1)
    document.querySelector('#reset2').reset()

    if(getUserInfo <= 0){
        mainBody.style.background = 'url(image/freezingcold-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else if (getUserInfo <= 15.6){
        mainBody.style.background = 'url(image/niceday-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else if (getUserInfo <= 29.4){
        mainBody.style.background = 'url(image/goodday-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else if (getUserInfo <= 37.8){
        mainBody.style.background = 'url(image/sweatingfan-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '200px';
    }
    else {
        mainBody.style.background = 'url(image/this-is-fine-1.gif) no-repeat 50% 410px fixed'
        mainBody.style.backgroundSize = '350px';
    }

}   