function gameObject() {
  return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 17
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 2,
          "blocks": 2,
          "slamDunks": 15
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 14,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 12,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 28,
          "shoe": 14,
          "points": 2,
          "rebounds": 3,
          "assists": 2,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 33,
          "shoe": 15,
          "points": 33,
          "rebounds": 1,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 2,
          "blocks": 5,
          "slamDunks": 12
        }
      }
    }
  };
}

console.log(gameObject());

function getPlayerStatsObject(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null; // Player not found
}

//Player stats
function numPointsScored(playerName) {
  // debugger; 
  const playerStats = getPlayerStatsObject(playerName);
  return playerStats ? playerStats.points : 0; // Return 0 if player not found
}

// --- Testing numPointsScored ---
console.log("Alan Anderson's points:", numPointsScored("Alan Anderson")); // Expected: 22
console.log("Ben Gordon's points:", numPointsScored("Ben Gordon"));     // Expected: 33
console.log("NonExistent Player's points:", numPointsScored("LeBron James")); // Expected: 0

//Player shoe size
function shoeSize(playerName) {
  // debugger;
  const playerStats = getPlayerStatsObject(playerName);
  return playerStats ? playerStats.shoe : null; // Return null if player not found
}

// --- Testing shoeSize ---
console.log("Reggie Evans' shoe size:", shoeSize("Reggie Evans")); // Expected: 14
console.log("Jeff Adrien's shoe size:", shoeSize("Jeff Adrien"));   // Expected: 18

//Teacm colors
function teamColors(teamName) {
  // debugger;
  const game = gameObject();
  for (const teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
  return []; // Return empty array if team not found
}

// --- Testing teamColors ---
console.log("Brooklyn Nets colors:", teamColors("Brooklyn Nets"));     // Expected: ["Black", "White"]
console.log("Charlotte Hornets colors:", teamColors("Charlotte Hornets")); // Expected: ["Turquoise", "Purple"]
console.log("NonExistent Team colors:", teamColors("Golden State Warriors")); // Expected: []

//Team names
function teamNames() {
  // debugger;
  const game = gameObject();
  const names = [];
  for (const teamKey in game) {
    names.push(game[teamKey].teamName);
  }
  return names;
}

// --- Testing teamNames ---
console.log("All team names:", teamNames()); // Expected: ["Brooklyn Nets", "Charlotte Hornets"]

function playerNumbers(teamName) {
  // debugger;
  const game = gameObject();
  const numbers = [];
  for (const teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      const players = game[teamKey].players;
      for (const playerName in players) {
        numbers.push(players[playerName].number);
      }
      return numbers; // Found team, return numbers and exit
    }
  }
  return []; // Return empty array if team not found
}

// --- Testing playerNumbers ---
console.log("Brooklyn Nets player numbers:", playerNumbers("Brooklyn Nets")); // Expected: [0, 30, 11, 1, 31]
console.log("Charlotte Hornets player numbers:", playerNumbers("Charlotte Hornets")); // Expected: [4, 0, 28, 33, 33]

function playerStats(playerName) {
  // debugger;
  const playerStats = getPlayerStatsObject(playerName);
  // Using spread syntax to create a shallow copy, ensuring it's an object even if playerStats is null
  return playerStats ? { ...playerStats } : {}; // Return empty object if player not found
}

// --- Testing playerStats ---
console.log("Alan Anderson's stats:", playerStats("Alan Anderson"));
console.log("Bismak Biyombo's stats:", playerStats("Bismak Biyombo"));
console.log("NonExistent Player stats:", playerStats("LeBron James")); // Expected: {}

function bigShoeRebounds() {
  // debugger;
  const game = gameObject();
  let largestShoeSize = 0;
  let reboundsOfLargestShoePlayer = 0;

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        reboundsOfLargestShoePlayer = player.rebounds;
      }
      // If there are multiple players with the same largest shoe size, this will return the rebounds of the *last* one encountered.
      
    }
  }
  return reboundsOfLargestShoePlayer;
}

// --- Testing bigShoeRebounds ---
console.log("Rebounds of player with largest shoe size:", bigShoeRebounds()); // Expected: 12 (Mason Plumlee: shoe 19, rebounds 12)

function mostPointsScored() {
  // debugger;
  const game = gameObject();
  let highestPoints = -1;
  let playerWithMostPoints = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (player.points > highestPoints) {
        highestPoints = player.points;
        playerWithMostPoints = playerName;
      }
    }
  }
  return playerWithMostPoints;
}

// --- Testing mostPointsScored ---
console.log("Player with most points:", mostPointsScored()); // Expected: Ben Gordon (33 points)

function winningTeam() {
  // debugger;
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  // Calculate home team points
  for (const playerName in game.home.players) {
    homeTeamPoints += game.home.players[playerName].points;
  }

  // Calculate away team points
  for (const playerName in game.away.players) {
    awayTeamPoints += game.away.players[playerName].points;
  }

  if (homeTeamPoints > awayTeamPoints) {
    return game.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    return game.away.teamName;
  } else {
    return "It's a tie!"; // In case of a tie
  }
}

// --- Testing winningTeam ---
console.log("Winning team:", winningTeam());


function playerWithLongestName() {
  // debugger;
  const game = gameObject();
  let longestName = "";
  let maxLength = 0;

  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      if (playerName.length > maxLength) {
        maxLength = playerName.length;
        longestName = playerName;
      }
    }
  }
  return longestName;
}

// --- Testing playerWithLongestName ---
console.log("Player with longest name:", playerWithLongestName()); 

function doesLongNameStealATon() {
  // debugger;
  const longestNamePlayer = playerWithLongestName();
  const longestNamePlayerSteals = numPointsScored(longestNamePlayer); // Renamed to numPointsScored (typo in prompt, should be steals)
  const actualLongestNamePlayerSteals = getPlayerStatsObject(longestNamePlayer).steals;

  let mostSteals = -1;
  // Get all players and find the max steals
  const game = gameObject();
  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      if (players[playerName].steals > mostSteals) {
        mostSteals = players[playerName].steals;
      }
    }
  }
  // Compare the steals of the longest name player with the max steals found
  return actualLongestNamePlayerSteals === mostSteals;
}

// --- Testing doesLongNameStealATon ---

console.log("Does the player with the longest name steal a ton?", doesLongNameStealATon());