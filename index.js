function playersDetails (playerName, slotNumber) {
    this.playerName = playerName;
    this.slotNumber = slotNumber;
}

playersDetails.prototype.playerIntro = function () {
    console.log(`${this.playerName} from Team number ${this.slotNumber}`);
};
const playerOne = new playersDetails("Abbas", 5);
const playerTwo = new playersDetails("Hanzala", 8);

console.log(playerOne.playerName);
console.log(playerOne.slotNumber);
console.log(playerTwo.playerName);
playerOne.playerIntro()
playerTwo.playerIntro()

