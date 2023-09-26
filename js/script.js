const btns = document.querySelectorAll('.one');
const PRS = ['paper', 'fist', 'scissors'];
const title = document.querySelector('h1');
const playerPick = document.querySelector('.player-pick--btn');
const AIPick = document.querySelector('.ai-pick-btn');
const result = document.querySelector('.result');
const secondScreen = document.querySelector('.second-screen');
const resultScore = document.querySelector('.score');
const playAgainBtn = document.querySelector('.play-again');
let score = 0;
let AIscore =0;

const showResults = e => {
	btns.forEach(el => el.classList.add('hide'));
	title.classList.add('hide');
	secondScreen.classList.add('show');

	let playerPicked = e.target.closest('button').classList.value;
	let AIPicked = PRS[Math.floor(Math.random() * 3)];

	playerPick.innerHTML = `<i class="fa-solid fa-hand-${playerPicked}  show"></i>`;

	AIPick.innerHTML = `<i class="fa-solid fa-hand-${AIPicked}"></i>`;

	console.log(playerPicked);
	console.log(AIPicked);
	if (playerPicked.includes('paper') && AIPicked === 'fist') {
		result.textContent = 'You won';
		score++;
		playerPick.firstChild.style.color = 'green'
		AIPick.firstChild.style.color = 'red'
	} else if (playerPicked.includes('paper') && AIPicked === 'scissors') {
		result.textContent = 'AI wins';
		AIscore++
		playerPick.firstChild.style.color = 'red'
		AIPick.firstChild.style.color = 'green'
	} else if (playerPicked.includes('fist') && AIPicked === 'paper') {
		result.textContent = 'AI wins';
		AIscore++
		playerPick.firstChild.style.color = 'red'
		AIPick.firstChild.style.color = 'green'
	} else if (playerPicked.includes('fist') && AIPicked === 'scissors') {
		result.textContent = 'You won';
		score++;
		playerPick.firstChild.style.color = 'green'
		AIPick.firstChild.style.color = 'red'
	} else if (playerPicked.includes('scissors') && AIPicked === 'paper') {
		result.textContent = 'You won';
		score++;
		playerPick.firstChild.style.color = 'green'
		AIPick.firstChild.style.color = 'red'
	} else if (playerPicked.includes('scissors') && AIPicked === 'fist') {
		result.textContent = 'AI Wins';
		AIscore++
		playerPick.firstChild.style.color = 'red'
		AIPick.firstChild.style.color = 'green'
	} else {
		result.textContent = 'Its a Tie';
	}
	resultScore.innerHTML = `${score} - ${AIscore}`;
};

const replay = () => {
	btns.forEach(el => el.classList.remove('hide'));
	title.classList.remove('hide');
	secondScreen.classList.remove('show');
};

btns.forEach(e => e.addEventListener('click', showResults));
playAgainBtn.addEventListener('click', replay);
