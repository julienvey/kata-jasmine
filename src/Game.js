var Game = function() {
	this._playerOneName  = '';
    this._playerTwoName  = '';
    this._playerOneScore = 0;
    this._playerTwoScore = 0;
}

Game.prototype.setPlayerOneName = function (name) {
    this._playerOneName = name;
}

Game.prototype.getPlayerOneName = function () {
    return this._playerOneName;
}

Game.prototype.setPlayerTwoName = function (name) {
    this._playerTwoName = name;
}

Game.prototype.getPlayerTwoName = function () {
    return this._playerTwoName;
}

Game.prototype.playerOneScores = function () {
	if(this._playerTwoScore == 4){
		this._playerTwoScore--;
	} else {
		if((this._playerTwoScore != 3 && this._playerOneScore == 3) || (this._playerTwoScore != 4 && this._playerOneScore == 4)){
			this._playerOneScore = 5;	
		} else {
			this._playerOneScore++;		
		}
		
	}
}

Game.prototype.playerTwoScores = function () {
	if(this._playerOneScore == 4){
		this._playerOneScore--;		
	} else {
		if((this._playerOneScore != 3 && this._playerTwoScore == 3) || (this._playerOneScore != 4 && this._playerTwoScore == 4)){
			this._playerTwoScore = 5;
		} else {
			this._playerTwoScore++;
		}
	}
}

Game.prototype.getScore = function () {
	return this.translateScore(this._playerOneScore) + ' - ' + this.translateScore(this._playerTwoScore);
}

Game.prototype.isDeuce = function () {
	return this.getScore() == '40 - 40';
}

Game.prototype.hasWinner = function () {
	return this._playerOneScore == 5 || this._playerTwoScore == 5;
}

Game.prototype.hasAdvantage = function () {
	return this._playerOneScore == 4 || this._playerTwoScore == 4;
}

Game.prototype.playerWithHighestScore = function () {
	if(this._playerOneScore > this._playerTwoScore) {
		return this._playerOneName;
	} else if(this._playerOneScore < this._playerTwoScore) {
		return this._playerTwoName;
	} else {
		return "None";
	}
}

Game.prototype.translateScore = function (score) {
	switch(score) {
		case 0 : return '0';
		case 1 : return '15';
		case 2 : return '30';
		case 3 : return '40';
		case 4 : return 'A';
	}
}