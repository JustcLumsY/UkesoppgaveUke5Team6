updateView()
function updateView(){
    document.getElementById('app').innerHTML = `
        <h1 onclick="chooseType()">supre duper stein saks papper</h1>
        <button class="button" id="stein" value="🥌" onclick="playerSelect = this.value;checkWinCondition()">stein</button>
        <button class="button" id="saks" value="✂" onclick="playerSelect = this.value;checkWinCondition()">saks</button>
        <button class="button" id="papir" value="📄" onclick="playerSelect = this.value;checkWinCondition()">papir</button><br/>
        ${compResponse}<br/>
        ${response}<br/>
        ${playerSelect}<br/>
        ${viewWins}
        ${viewLosses}
        ${viewDraws}
        <!--You have won a total of: ${wins} times.<br/>
        You have lost a total of: ${loss} times.<br/>
        There has been ${draw} draws.-->

    `;
}