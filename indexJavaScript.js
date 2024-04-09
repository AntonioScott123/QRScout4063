const gameData = {
			initials: "",
			matchNum: 0,
			robot: "",
			teamNum: 0,
			speakerScored: 0,
			speakerMissed: 0,
			tampScored: 0,
			tampMissed: 0,
			tspeakerScored: 0,
			tspeakerMissed: 0,
			noteTrap: 0,
			endPos: "",
			harmony: "",
			offSkill: "",
			defSkill: "",
			died: false,
			tippedOver: false,
			card: "",
			comments: "",
			speed: "",
			centerlineNotes: false
			
		
			
			}

let smallify = {};

smallify["Not_Observed"] = "NOB";
smallify["Choose_Answer"] = "CAN";
smallify["false"] = "no";
smallify["true"] = "yes";
smallify["NOB"] = "NOB";
smallify["CAN"] = "CAN";
smallify["yes"] = "yes";
smallify["no"] = "no";

var teamsCompeting = [148, 324, 624, 1296, 2687, 2689, 2714, 2848, 2882, 3310, 3679, 3847, 4063, 4153, 4192, 4206, 5212, 5414, 5427, 5431, 5572, 6369, 6488, 6645, 6768, 6800, 7115, 7121, 7691, 8088, 8177, 8528, 8749, 8858, 8874, 9054, 9080, 9088, 9121, 9181, 9418, 9512, 9786];

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function checkIfTeamSigma(enteredTeam) 
{
	return teamsCompeting.includes(enteredTeam);
}

		function ClearAll() {
			document.getElementById('prematch-match-number').value = '';
			document.getElementById('prematch-team-number').value = '';
			document.getElementById('Died').checked = false;
			document.getElementById('Tipped-Over').checked = false;
			document.getElementById('Spotlight').checked = false;
			document.getElementById("centerlineNotes").checked = false;
			document.getElementById('End-Position').value = 'Choose_Answer';
			document.getElementById('Harmony').value = 'Choose_Answer';
			document.getElementById('Offensive Skill').value = 'Not_Observed';
			document.getElementById('Defensive Skill').value = 'Not_Observed';
			document.getElementById('Card').value = 'No_Card';
			document.getElementById('Comments').value = '';
			document.getElementById('Speed').value = "Not_Observed";
			
			gameData.initials = '';
			gameData.matchNum = 0;
			gameData.robot = 'Choose_Answer';
			gameData.teamNum = 0;
			gameData.died = false;
			gameData.tippedOver = false;
			gameData.centerlineNotes = false;
			gameData.endPos = 'Choose_Answer';
			gameData.harmony = 'Choose_Answer';
			gameData.offSkill = 'Not_Observed';
			gameData.defSkill = 'Not_Observed';
			gameData.card = 'No_Card';
			gameData.comments = '';
			gameData.speakerScored = 0;
			gameData.speakerMissed = 0;
			gameData.tampScored = 0;
			gameData.tampMissed = 0;
			gameData.tspeakerScored = 0;
			gameData.tspeakerMissed = 0;
			gameData.noteTrap = 0;

			document.getElementById('speakerScored').textContent = gameData.speakerScored;
			document.getElementById('speakerMissed').textContent = gameData.speakerMissed;
			document.getElementById('tampScored').textContent = gameData.tampScored;
			document.getElementById('tampMissed').textContent = gameData.tampMissed;
			document.getElementById('tspeakerScored').textContent = gameData.tspeakerScored;
			document.getElementById('tspeakerMissed').textContent = gameData.tspeakerMissed;
			document.getElementById('noteTrap').textContent = gameData.noteTrap;
			teamNumInput.classList.remove('error');
			matchNumInput.classList.remove('error');
			initialsInput.classList.remove('error');

		}


        function updateButtonNum(variable, value) {
    gameData[variable] += value;
	gameData[variable] = Math.max(gameData[variable], 0);
    // Update HTML element value
    document.getElementById(variable).textContent = gameData[variable];

        function updateGameData(section, key, value) {
            gameData[section][key] = value;
        }
		}
		
        function updateQRCodeOnSubmit() {
		// Update all the gameData fields with the form values
		gameData.initials = document.getElementById('prematch-scout-initials').value.split(' ').join('');
		gameData.matchNum = parseInt(document.getElementById('prematch-match-number').value.split(' ').join(''));
		if(document.getElementById('prematch-robot').value in smallify)
		{
			gameData.robot = smallify[document.getElementById('prematch-robot').value];
		}
		else
		{
			gameData.robot = document.getElementById('prematch-robot').value;
		}
		gameData.teamNum = parseInt(document.getElementById('prematch-team-number').value.split(' ').join(''));
		gameData.died = smallify[document.getElementById('Died').checked];
		gameData.tippedOver = smallify[document.getElementById('Tipped-Over').checked];
		gameData.centerlineNotes = smallify[document.getElementById('centerlineNotes').checked];
		if(document.getElementById('End-Position').value in smallify)
		{
			gameData.endPos = smallify[document.getElementById('End-Position').value];
		}
		else
		{
			gameData.endPos = document.getElementById('End-Position').value;
		}
		if(gameData.harmony = document.getElementById('Harmony').value in smallify)
		{
			gameData.harmony = smallify[document.getElementById('Harmony').value];
		}
		else
		{
			gameData.harmony = document.getElementById('Harmony').value;
		}
		
		if(document.getElementById('Offensive Skill').value in smallify)
		{
			gameData.offSkill = smallify[document.getElementById('Offensive Skill').value];
		}
		else
		{
			gameData.offSkill = document.getElementById('Offensive Skill').value;
		}

		if(document.getElementById('Defensive Skill').value in smallify)
		{
			gameData.defSkill = smallify[document.getElementById('Defensive Skill').value];
		}
		else
		{
			gameData.defSkill = document.getElementById('Defensive Skill').value
		}

		if (document.getElementById('Card').value in smallify)
		{
			gameData.card = smallify[document.getElementById('Card').value]
		}
		else
		{
			gameData.card = document.getElementById('Card').value
		}
		gameData.comments = document.getElementById('Comments').value;
		gameData.spotlight = smallify[document.getElementById('Spotlight').checked];
		if(document.getElementById('Speed').value in smallify)
		{
			gameData.speed = smallify[document.getElementById('Speed').value];
		}
		else
		{
			gameData.speed = document.getElementById('Speed').value;
		}
		// Update other fields similarly
		
		const initialsInput = document.getElementById('prematch-scout-initials');
		const matchNumInput = document.getElementById('prematch-match-number');
		const teamNumInput = document.getElementById('prematch-team-number');
		
		if (initialsInput.value === '') {
			initialsInput.classList.add('error');
		} 
		else {
			initialsInput.classList.remove('error');
		}

		if (matchNumInput.value === '') {
			matchNumInput.classList.add('error');
		} 
		else {
			matchNumInput.classList.remove('error');
		}

		if (teamNumInput.value === '') {
			teamNumInput.classList.add('error');
		} 
		else {
			teamNumInput.classList.remove('error');
		}
		// Generate QR code with updated gameData
		teamNumTrue = checkIfTeamSigma(gameData.teamNum)
		if(teamNumTrue)
		{
			generateQRCode();
		}
		else
		{
			openPopup();
		}
		}
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(event) {
	event.preventDefault();
	deferredPrompt = event;

});

		
		// Function to generate QR code
function generateQRCode() {
	if (
		document.getElementById('prematch-scout-initials').value === "" ||
		document.getElementById('prematch-match-number').value === "" ||
		document.getElementById('prematch-team-number').value === "" ||
		document.getElementById('prematch-robot').value === "Choose_Answer"
	) {
		// Fields are empty
	} else {
		const qrCodeData = `${gameData.initials.toUpperCase()} ${gameData.matchNum} ${gameData.robot} ${gameData.teamNum} ${gameData.centerlineNotes} ${gameData.speakerScored} ${gameData.speakerMissed} ${gameData.tampScored} ${gameData.tampMissed} ${gameData.tspeakerScored} ${gameData.tspeakerMissed} ${gameData.noteTrap} ${gameData.spotlight} ${gameData.endPos} ${gameData.harmony} ${gameData.offSkill} ${gameData.defSkill} ${gameData.speed} ${gameData.died} ${gameData.tippedOver} ${gameData.card}`;
		const qrCodeDataWithCommas = qrCodeData.split(' ').join('~');
		const qrCodeDataWithCommasWithComment = qrCodeDataWithCommas + '~' + gameData.comments;
		const qrCodeContainer = document.getElementById('qr-code-popup');
		qrCodeContainer.innerHTML = '';
		
		const qrCode = new QRCode(qrCodeContainer, {
			text: qrCodeDataWithCommasWithComment,
			width: 300,
			height: 300,
		});
		
		document.getElementById('popupQR').style.display = 'block';
		document.getElementById('overlay').style.display = 'block';
	}
}
		
function closePopupQR() {
	document.getElementById('popupQR').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}
