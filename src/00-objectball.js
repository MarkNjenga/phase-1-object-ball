function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    const gameData = gameObject();

    // Check the home team players
    for (let player in gameData.home.players) {
        if (player === playerName) {
            return gameData.home.players[player].points;
        }
    }

    // Check the away team players
    for (let player in gameData.away.players) {
        if (player === playerName) {
            return gameData.away.players[player].points;
        }
    }

    // If player is not found
    return `${playerName} is not a valid player name.`;
}

function shoeSize(playerName) {
    const gameData = gameObject();

    // Check the home team players
    for (let player in gameData.home.players) {
        if (player === playerName) {
            return gameData.home.players[player].shoe;
        }
    }

    // Check the away team players
    for (let player in gameData.away.players) {
        if (player === playerName) {
            return gameData.away.players[player].shoe;
        }
    }

    // If player is not found
    return `${playerName} is not a valid player name.`;
}

function teamColors(teamName) {
    const gameData = gameObject();

    if (gameData.home.teamName === teamName) {
        return gameData.home.colors;
    } else if (gameData.away.teamName === teamName) {
        return gameData.away.colors;
    } else {
        return `${teamName} is not a valid team name.`;
    }
}

function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
}

function playerNumbers(teamName) {
    const gameData = gameObject();

    if (gameData.home.teamName === teamName) {
        return Object.values(gameData.home.players).map(player => player.number);
    } else if (gameData.away.teamName === teamName) {
        return Object.values(gameData.away.players).map(player => player.number);
    } else {
        return `${teamName} is not a valid team name.`;
    }
}

function playerStats(playerName) {
    const gameData = gameObject();

    // Check the home team players
    for (let player in gameData.home.players) {
        if (player === playerName) {
            return gameData.home.players[player];
        }
    }

    // Check the away team players
    for (let player in gameData.away.players) {
        if (player === playerName) {
            return gameData.away.players[player];
        }
    }

    // If player is not found
    return `${playerName} is not a valid player name.`;
}

function bigShoeRebounds() {
    const gameData = gameObject();

    let largestShoeSize = -Infinity;
    let playerWithLargestShoe = null;

    // Check the home team players
    for (let player in gameData.home.players) {
        if (gameData.home.players[player].shoe > largestShoeSize) {
            largestShoeSize = gameData.home.players[player].shoe;
            playerWithLargestShoe = player;
        }
    }

    // Check the away team players
    for (let player in gameData.away.players) {
        if (gameData.away.players[player].shoe > largestShoeSize) {
            largestShoeSize = gameData.away.players[player].shoe;
            playerWithLargestShoe = player;
        }
    }

    // Return rebounds of player with largest shoe size
    return gameData.home.players[playerWithLargestShoe].rebounds || gameData.away.players[playerWithLargestShoe].rebounds;
}

function mostPointsScored() {
    const gameData = gameObject();

    let maxPoints = -Infinity;
    let playerWithMostPoints = null;

    // Check the home team players
    for (let player in gameData.home.players) {
        if (gameData.home.players[player].points > maxPoints) {
            maxPoints = gameData.home.players[player].points;
            playerWithMostPoints = player;
        }
    }

    // Check the away team players
    for (let player in gameData.away.players) {
        if (gameData.away.players[player].points > maxPoints) {
            maxPoints = gameData.away.players[player].points;
            playerWithMostPoints = player;
        }
    }

    return playerWithMostPoints;
}

function winningTeam() {
    const gameData = gameObject();

    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    // Calculate total points for home team
    for (let player in gameData.home.players) {
        homeTeamPoints += gameData.home.players[player].points;
    }

    // Calculate total points for away team
    for (let player in gameData.away.players) {
        awayTeamPoints += gameData.away.players[player].points;
    }

    // Determine winning team based on points
    if (homeTeamPoints > awayTeamPoints) {
        return gameData.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return gameData.away.teamName;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    const gameData = gameObject();

    let longestName = "";
    let playerWithLongestName = null;

    // Check the home team players
    for (let player in gameData.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }

    // Check the away team players
    for (let player in gameData.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }

    return playerWithLongestName;
}