let gitHub = document.getElementById('gitHub');
let popUp = document.querySelector('.userName')
let userInput = document.getElementById('nameInput')
let submitBtn = document.getElementById('submitBtn')
let welcomeMsg = document.getElementById('welcomeMsg')
let webPage = document.getElementById('main')
let abort = false;

function blurPage(){
	if(abort === false){
	webPage.style.filter = 'blur(20px)'
	webPage.style.pointerEvents = 'none'
	webPage.style.userSelect = 'none'
	}
}

	function normalView(){
		webPage.style.transition = '1s'
		webPage.style.filter = 'none'
		webPage.style.pointerEvents = 'auto'	
	}

blurPage()

gitHub.addEventListener('click' , () =>{
	let gitHubIcon = document.createElement('img')
	gitHubIcon.src='./assets/github-mark-white.png';
	gitHubIcon.setAttribute('class','icon')
	gitHubIcon.style.opacity = '0';
	gitHub.parentNode.appendChild(gitHubIcon);
	gitHubIcon.style.transition = 'opacity ease-out 1s';
	gitHubIcon.offsetHeight;
	gitHubIcon.style.opacity = '1';
	gitHub.remove();
})

function popUpMsg(){
	popUp.style.background = 'black'
}

submitBtn.addEventListener('click',()=>{
	abort = true;
	if(userInput.value){
	welcomeMsg.textContent = `Welcome, ${userInput.value} !`
	console.log('clicked')
	popUp.classList.add('hidden');
	normalView()
	}
	
})


