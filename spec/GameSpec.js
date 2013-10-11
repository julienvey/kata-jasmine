describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.setPlayerOneName("Federer");
    game.setPlayerTwoName("Djokovic");
  });

  it("should translate score", function() {
    var score = game.translateScore(0);
    expect(score).toEqual('0');

    var score = game.translateScore(1);
    expect(score).toEqual('15');

    var score = game.translateScore(2);
    expect(score).toEqual('30');

    var score = game.translateScore(3);
    expect(score).toEqual('40');

    var score = game.translateScore(4);
    expect(score).toEqual('A');
  });

  it("should get the score", function() {
    expect(game.getScore()).toEqual('0 - 0');

    game.playerOneScores();
    expect(game.getScore()).toEqual('15 - 0');

    game.playerOneScores();
    expect(game.getScore()).toEqual('30 - 0');

    game.playerTwoScores();
    expect(game.getScore()).toEqual('30 - 15');

    game.playerTwoScores();
    expect(game.getScore()).toEqual('30 - 30');

    game.playerTwoScores();
    expect(game.getScore()).toEqual('30 - 40');

    game.playerOneScores();
    expect(game.getScore()).toEqual('40 - 40');

    game.playerOneScores();
    expect(game.getScore()).toEqual('A - 40');

    game.playerTwoScores();
    expect(game.getScore()).toEqual('40 - 40');
  });

  it("verify isDeuce", function() {
    expect(game.isDeuce()).toBeFalsy();
    game.playerOneScores();
    expect(game.isDeuce()).toBeFalsy();
    game.playerOneScores();
    expect(game.isDeuce()).toBeFalsy();
    game.playerOneScores();
    expect(game.isDeuce()).toBeFalsy();
    game.playerTwoScores();
    expect(game.isDeuce()).toBeFalsy();
    game.playerTwoScores();
    expect(game.isDeuce()).toBeFalsy();
    game.playerTwoScores();
    
    expect(game.isDeuce()).toBeTruthy();

    game.playerOneScores();
    expect(game.isDeuce()).toBeFalsy();
    game.playerTwoScores();

    expect(game.isDeuce()).toBeTruthy();
  });

  it("verify the game has winner", function() {
    expect(game.hasWinner()).toBeFalsy();
    game.playerOneScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerOneScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerOneScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasWinner()).toBeFalsy();
    
    game.playerOneScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasWinner()).toBeFalsy();

    game.playerTwoScores();
    expect(game.hasWinner()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasWinner()).toBeTruthy();

    });

   it("verify a player has advantage", function() {
    expect(game.hasAdvantage()).toBeFalsy();
    game.playerOneScores();
    expect(game.hasAdvantage()).toBeFalsy();
    game.playerOneScores();
    expect(game.hasAdvantage()).toBeFalsy();
    game.playerOneScores();
    expect(game.hasAdvantage()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasAdvantage()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasAdvantage()).toBeFalsy();
    game.playerTwoScores();
    expect(game.hasAdvantage()).toBeFalsy();
    
    game.playerOneScores();
    expect(game.hasAdvantage()).toBeTruthy();
    game.playerTwoScores();
    expect(game.hasAdvantage()).toBeFalsy();

    game.playerTwoScores();
    expect(game.hasAdvantage()).toBeTruthy();
    
    });

   it("verify the player with highest score", function() {
    expect(game.playerWithHighestScore()).toEqual("None");
    game.playerOneScores();
    expect(game.playerWithHighestScore()).toEqual("Federer");
    game.playerOneScores();
    expect(game.playerWithHighestScore()).toEqual("Federer");
    game.playerOneScores();
    expect(game.playerWithHighestScore()).toEqual("Federer");
    game.playerTwoScores();
    expect(game.playerWithHighestScore()).toEqual("Federer");
    game.playerTwoScores();
    expect(game.playerWithHighestScore()).toEqual("Federer");
    game.playerTwoScores();
    expect(game.playerWithHighestScore()).toEqual("None");
    
    game.playerOneScores();
    expect(game.playerWithHighestScore()).toEqual("Federer");
    game.playerTwoScores();
    expect(game.playerWithHighestScore()).toEqual("None");

    game.playerTwoScores();
    expect(game.playerWithHighestScore()).toEqual("Djokovic");
    
    });



});