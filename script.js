const players = { team1: [], team2: [] };

// Get HTML elements
const addPlayerButton = document.getElementById("add-player");
const playerInput = document.getElementById("player-input");
const teamDisplay = document.getElementById("team-display");
const team1List = document.getElementById("team1-list");
const team2List = document.getElementById("team2-list");

// Add event listeners
addPlayerButton.addEventListener("click", () => {
    const playerName = playerInput.value.trim();
    if (playerName) {
        distributePlayer(playerName);
        playerInput.value = "";
        displayPlayers();
    }
});

function distributePlayer(playerName) {
    if (players.team1.length <= players.team2.length) {
        players.team1.push(playerName);
    } else {
        players.team2.push(playerName);
    }
}

// Display players in a list
function displayPlayers() {
    team1List.innerHTML = players.team1.map(player => `<li>${player}</li>`).join('');
    team2List.innerHTML = players.team2.map(player => `<li>${player}</li>`).join('');
    teamDisplay.style.display = "block";
}
