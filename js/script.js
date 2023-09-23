const btns = document.querySelectorAll('button')
const PRS = ['paper', 'rock', 'scissors']

const showPickedBtn = e => {
	let choosedBtn = e.target.closest('button')
	console.log(choosedBtn.classList.value)
}

const showResults = e => {
	let playerPicked = e.target.closest('button').classList.value
    let AIPicked = PRS[Math.floor(Math.random()*3)]
    if( playerPicked === 'paper' && AIPicked === 'paper'){
        console.log('its a tie');
    }else if (playerPicked === 'paper' && AIPicked === 'rock'){
        console.log('player wins');
    }else if( playerPicked === 'paper' && AIPicked === 'scissors'){
        console.log('AI wins');
    }else if (playerPicked === 'rock' && AIPicked === 'paper'){
        console.log('AI wins');
    }else if(playerPicked === 'rock' && AIPicked === 'rock'){
        console.log('its a tie');
    }else if (playerPicked === 'rock' && AIPicked === 'scissors'){
        console.log('player wins');
    }else if (playerPicked === 'scissors' && AIPicked ==='paper'){
        console.log('player wins');
    }else if (playerPicked === 'scissors' && AIPicked ==='rock'){
        console.log('AI wins');
    }else if (playerPicked === 'scissors' && AIPicked ==='scissors'){
        console.log('its a tie');
    }

}
btns.forEach(e => e.addEventListener('click', showResults))
