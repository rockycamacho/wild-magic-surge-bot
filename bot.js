var Discord = require('discord.io');
var logger = require('winston');
var xml2js = require('xml2js');
var fs = require('fs');
var auth = require('./auth.json');

var parser = new xml2js.Parser({ attrkey: "ATTR" });
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}


var surges = []
surges[surges.length] = "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls."
surges[surges.length] = "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls."
surges[surges.length] = "For the next minute, you can see any invisible creature if you have line of sight to it."
surges[surges.length] = "For the next minute, you can see any invisible creature if you have line of sight to it."
surges[surges.length] = "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later."
surges[surges.length] = "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later."
surges[surges.length] = "You cast Fireball as a 3rd-level spell centered on yourself."
surges[surges.length] = "You cast Fireball as a 3rd-level spell centered on yourself."
surges[surges.length] = "You cast Magic Missile as a 5th-level spell."
surges[surges.length] = "You cast Magic Missile as a 5th-level spell."
surges[surges.length] = "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow."
surges[surges.length] = "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow."
surges[surges.length] = "You cast Confusion centered on yourself."
surges[surges.length] = "You cast Confusion centered on yourself."
surges[surges.length] = "For the next minute, you regain 5 hit points at the start of each of your turns."
surges[surges.length] = "For the next minute, you regain 5 hit points at the start of each of your turns."
surges[surges.length] = "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face."
surges[surges.length] = "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face."
surges[surges.length] = "You cast Grease centered on yourself."
surges[surges.length] = "You cast Grease centered on yourself."
surges[surges.length] = "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw."
surges[surges.length] = "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw."
surges[surges.length] = "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect."
surges[surges.length] = "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect."
surges[surges.length] = "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight."
surges[surges.length] = "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight."
surges[surges.length] = "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action."
surges[surges.length] = "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action."
surges[surges.length] = "You teleport up to 60 feet to an unoccupied space of your choice that you can see."
surges[surges.length] = "You teleport up to 60 feet to an unoccupied space of your choice that you can see."
surges[surges.length] = "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied."
surges[surges.length] = "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied."
surges[surges.length] = "Maximize the damage of the next damaging spell you cast within the next minute."
surges[surges.length] = "Maximize the damage of the next damaging spell you cast within the next minute."
surges[surges.length] = "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older."
surges[surges.length] = "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older."
surges[surges.length] = "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute."
surges[surges.length] = "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute."
surges[surges.length] = "You regain 2d10 hit points."
surges[surges.length] = "You regain 2d10 hit points."
surges[surges.length] = "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts."
surges[surges.length] = "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts."
surges[surges.length] = "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns."
surges[surges.length] = "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns."
surges[surges.length] = "You cast Levitate on yourself."
surges[surges.length] = "You cast Levitate on yourself."
surges[surges.length] = "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later."
surges[surges.length] = "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later."
surges[surges.length] = "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
surges[surges.length] = "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
surges[surges.length] = "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile."
surges[surges.length] = "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile."
surges[surges.length] = "You are immune to being intoxicated by alcohol for the next 5d6 days."
surges[surges.length] = "You are immune to being intoxicated by alcohol for the next 5d6 days."
surges[surges.length] = "Your hair falls out but grows back within 24 hours."
surges[surges.length] = "Your hair falls out but grows back within 24 hours."
surges[surges.length] = "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame."
surges[surges.length] = "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame."
surges[surges.length] = "You regain your lowest-level expended spell slot."
surges[surges.length] = "You regain your lowest-level expended spell slot."
surges[surges.length] = "For the next minute, you must shout when you speak."
surges[surges.length] = "For the next minute, you must shout when you speak."
surges[surges.length] = "You cast Fog Cloud centered on yourself."
surges[surges.length] = "You cast Fog Cloud centered on yourself."
surges[surges.length] = "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage."
surges[surges.length] = "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage."
surges[surges.length] = "You are frightened by the nearest creature until the end of your next turn."
surges[surges.length] = "You are frightened by the nearest creature until the end of your next turn."
surges[surges.length] = "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell."
surges[surges.length] = "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell."
surges[surges.length] = "You gain resistance to all damage for the next minute."
surges[surges.length] = "You gain resistance to all damage for the next minute."
surges[surges.length] = "A random creature within 60 feet of you becomes poisoned for 1d4 hours."
surges[surges.length] = "A random creature within 60 feet of you becomes poisoned for 1d4 hours."
surges[surges.length] = "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn."
surges[surges.length] = "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn."
surges[surges.length] = "You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration."
surges[surges.length] = "You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration."
surges[surges.length] = "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute."
surges[surges.length] = "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute."
surges[surges.length] = "You can take one additional action immediately."
surges[surges.length] = "You can take one additional action immediately."
surges[surges.length] = "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt."
surges[surges.length] = "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt."
surges[surges.length] = "You cast Mirror Image."
surges[surges.length] = "You cast Mirror Image."
surges[surges.length] = "You cast Fly on a random creature within 60 feet of you."
surges[surges.length] = "You cast Fly on a random creature within 60 feet of you."
surges[surges.length] = "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell."
surges[surges.length] = "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell."
surges[surges.length] = "If you die within the next minute, you immediately come back to life as if by the Reincarnate spell."
surges[surges.length] = "If you die within the next minute, you immediately come back to life as if by the Reincarnate spell."
surges[surges.length] = "Your size increases by one size category for the next minute."
surges[surges.length] = "Your size increases by one size category for the next minute."
surges[surges.length] = "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute."
surges[surges.length] = "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute."
surges[surges.length] = "You are surrounded by faint, ethereal music for the next minute."
surges[surges.length] = "You are surrounded by faint, ethereal music for the next minute."
surges[surges.length] = "You regain all expended sorcery points."
surges[surges.length] = "You regain all expended sorcery points."

displayInitiativeOrder = false;
numberOfPosts = 0;
showInitiativeOrderEvery = 7;

function showInitiativeOrderDisplay(postCount) {
	displayInitiativeOrder = true;
	numberOfPosts = 0;
	showInitiativeOrderEvery = postCount;	
}

function getInitiativeOrderMessage(channelID) {	
	var initiativeOrder = getInitiativeOrder(channelID);
	logger.info(initiativeOrder);
	
	if(initiativeOrder.length > 0) {
		var message = '**Initiative Order:** \n';
		for(var i = 0; i < initiativeOrder.length; i++) {
			var item = initiativeOrder[i];
			logger.info(item);
			message += '>\t' + item.initiative.toString().lpad(' ', 2) + '\t\t' + item.name + '\n'
		}
		return message;	
	}
	else {
		return 'Error: Set initiatives first';
	}
	
}

function getInitiativeOrder(channelID) {
	var filename = 'games/' + channelID + '.json';
	try {
		data = fs.readFileSync(filename, 'utf8');
		return JSON.parse(data);
	} catch (err) {
	  logger.error(err);
	}
}

function stopInitiativeOrderDisplay() {
	displayInitiativeOrder = false;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function rollForDeathSavingThrow(character, attribute, rollType, callback) {
	fs.readFile("./characters/" + character + ".json", 'utf8', function(err, contents) {
		if(!err) {
			parser.parseString(contents, function(error, result) {
				if(error === null) {
					logger.info('Rolling for ' + attribute + ' Save');
				
					var roll = getRndInteger(1, 20);
					var roll1 = roll;
					var roll2 = getRndInteger(1, 20);
					var rollMessage = '' + roll
					if(rollType == 'dis') {
						roll = Math.min(roll1, roll2);
						if(roll1 < roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					if(rollType == 'adv') {
						roll = Math.max(roll, roll2);
						if(roll1 > roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					
					logger.info(result.character.abilityScores);
					var message = '`' + character + '` rolled a ['+rollMessage+'] = `' + (roll) + '` on the ' + attribute + ' Saving Throw'
					callback(message)
				}
				else {
					callback(err)
				}
			});
		}
		else {
			callback(err)
		}
	});
}

function rollForSavingThrow(character, attribute, rollType, callback) {
	var attributes = {
		'Str': 0,
		'Dex': 1,
		'Con': 2,
		'Int': 3,
		'Wis': 4,
		'Cha': 5
	};
	fs.readFile("./characters/" + character + ".json", 'utf8', function(err, contents) {
		if(!err) {
			parser.parseString(contents, function(error, result) {
				if(error === null) {
					var attributeIndex = attributes[attribute];
					var abilityScores = result.character.abilityScores.toString().split('⊠');
					var proficiencyBonus = result.character.proficiencyBonus;
					var abilityScore = Math.floor(abilityScores[attributeIndex]/2)-5;
					var proficiencyScore = parseInt(abilityScores[attributeIndex+6] == 'true' ? proficiencyBonus : 0);
					var additionalBonus = parseInt(abilityScores[attributeIndex+6+6]);
					logger.info('Rolling for ' + attribute + ' Save');
				
					var roll = getRndInteger(1, 20);
					var roll1 = roll;
					var roll2 = getRndInteger(1, 20);
					var rollMessage = '' + roll
					if(rollType == 'dis') {
						roll = Math.min(roll1, roll2);
						if(roll1 < roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					if(rollType == 'adv') {
						roll = Math.max(roll, roll2);
						if(roll1 > roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					
					logger.info(result.character.abilityScores);
					var message = '`' + character + '` rolled a ['+rollMessage+'] + ' + (abilityScore + proficiencyScore + additionalBonus) + ' = `' + (roll + abilityScore + proficiencyScore + additionalBonus) + '` on the ' + attribute + ' Saving Throw'
					callback(message)
				}
				else {
					callback(err)
				}
			});
		}
		else {
			callback(err)
		}
	});
}

function rollForInitiative(characterName, rollType, channelID, callback) {
	var attributes = {
		'Str': 0,
		'Dex': 1,
		'Con': 2,
		'Int': 3,
		'Wis': 4,
		'Cha': 5
	};
	
	fs.readFile("./characters/" + characterName + ".json", 'utf8', function(err, contents) {
		if(!err) {
			parser.parseString(contents, function(error, result) {
				if(error === null) {
					var characterSheet = result.character;
					var attributeIndex = attributes['Dex'];
					var abilityScores = characterSheet.abilityScores.toString().split('⊠');
					var skillInfo = characterSheet.skillInfo.toString().split('⊠');
					var abilityScore = Math.floor(abilityScores[attributeIndex]/2)-5;
					var roll = getRndInteger(1, 20);
					var roll1 = roll;
					var roll2 = getRndInteger(1, 20);
					var rollMessage = '' + roll
					if(rollType == 'dis') {
						roll = Math.min(roll1, roll2);
						if(roll1 < roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					if(rollType == 'adv') {
						roll = Math.max(roll, roll2);
						if(roll1 > roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					
					logger.info(characterSheet.abilityScores);
					
					setInitiative(characterName, roll + abilityScore, channelID);
					
					var message = '`' + characterName + '` rolled a ['+rollMessage+'] + ' + (abilityScore) + ' = `' + (roll + abilityScore) + '` as Initiative'
					callback(message)
				}
				else {
					callback(err)
				}
			});
		}
		else {
			callback(err)
		}
	});
}

function setInitiative(characterName, initiativeRoll, channelID) {
	var filename = 'games/' + channelID + '.json';
	fs.readFile(filename, (err, data) => {
		var initiativeOrder = [];
		if (data) {	//file doesnt exist?
			initiativeOrder = JSON.parse(data);
		}
		initiativeOrder = initiativeOrder.filter(function(value, index, arr){ return value.name != characterName;});
		if(initiativeRoll != null) {
			initiativeOrder[initiativeOrder.length] = {'name': characterName, 'initiative': initiativeRoll, 'time': new Date().getMilliseconds()};
		}
		logger.info(initiativeOrder)
		initiativeOrder.sort(function(a, b) {
			if(a.initiative == b.initiative) {
				return a.time - b.time;
			}
			else {
				return b.initiative - a.initiative;
			}
		});
		var fileData = JSON.stringify(initiativeOrder);
		fs.writeFileSync(filename, fileData);
	});
}

function clearInitiativeOrder(channelID) {
	var filename = 'games/' + channelID + '.json';
	var fileData = JSON.stringify([]);
	fs.writeFileSync(filename, fileData);
}

function getCharacterInfo(characterName, callback) {
	var attributes = {
		'Str': 0,
		'Dex': 1,
		'Con': 2,
		'Int': 3,
		'Wis': 4,
		'Cha': 5
	};
	
	fs.readFile("./characters/" + characterName + ".json", 'utf8', function(err, contents) {
		if(!err) {
			parser.parseString(contents, function(error, result) {
				if(error === null) {
					var characterSheet = result.character;
					var attributeIndex = attributes['Dex'];
					var abilityScores = characterSheet.abilityScores.toString().split('⊠');
					var abilityScore = Math.floor(abilityScores[attributeIndex]/2)-5;
					
					var ac = parseInt(characterSheet.armorBonus) + parseInt(characterSheet.shieldBonus) + parseInt(characterSheet.miscArmorBonus) + Math.min(parseInt(characterSheet.maxDex), abilityScore) + parseInt(characterSheet.unarmoredDefense);
					var pp = 10 + getSkillModifier(result, 'Perception');
					var hp = characterSheet.maxHealth
					
					var message = '`' + characterName + '` ' + ac + 'AC ' + pp + 'PP ' + hp + 'HP'
					callback(message)
				}
				else {
					callback(err)
				}
			});
		}
		else {
			callback(err)
		}
	});
}

function getSkillModifier(characterSheet, skill) {
	var attributes = {
		'Str': 0,
		'Dex': 1,
		'Con': 2,
		'Int': 3,
		'Wis': 4,
		'Cha': 5
	};
	var skills = {
		'Athletics': 0,
		'Acrobatics': 1,
		'Sleight of Hand': 2,
		'Stealth': 3,
		'Arcana': 4,
		'History': 5,
		'Investigation': 6,
		'Nature': 7,
		'Religion': 8,
		'Animal Handling': 9,
		'Insight': 10,
		'Medicine': 11,
		'Perception': 12,
		'Survival': 13,
		'Deception': 14,
		'Intimidation': 15,
		'Performance': 16,
		'Persuasion': 17
	};
	var skillAttributeMap = {
		'Athletics': 0,
		'Acrobatics': 1,
		'Sleight of Hand': 1,
		'Stealth': 1,
		'Arcana': 3,
		'History': 3,
		'Investigation': 3,
		'Nature': 3,
		'Religion': 3,
		'Animal Handling': 4,
		'Insight': 4,
		'Medicine': 4,
		'Perception': 4,
		'Survival': 4,
		'Deception': 5,
		'Intimidation': 5,
		'Performance': 5,
		'Persuasion': 5
	}
	
	var attributeIndex = skillAttributeMap[skill];
	var abilityScores = characterSheet.character.abilityScores.toString().split('⊠');
	var skillInfo = characterSheet.character.skillInfo.toString().split('⊠');
	//is proficient
	//false⊠true⊠true⊠true⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠true⊠true⊠false⊠true⊠false⊠
	//fixed bonus
	//0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠0⊠
	//is double proficient
	//false⊠false⊠true⊠true⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠true⊠true⊠false⊠false⊠false⊠
	//half proficiency bonus
	//false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠
	//round up half proficiency?
	//false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false⊠false
	var proficiencyBonus = characterSheet.character.proficiencyBonus;
	var abilityScore = Math.floor(abilityScores[attributeIndex]/2)-5;
	var proficiencyScore = parseInt(skillInfo[skills[skill]] == 'true' ? proficiencyBonus : 0);
	var doubleProficiencyScore = parseInt(skillInfo[skills[skill] + 19 + 19] == 'true' ? proficiencyBonus : 0);
	var halfProficiencyScore = parseInt(skillInfo[skills[skill] + 19 + 19 + 19] == 'true' ? skillInfo[skills[skill] + 19 + 19 + 19 + 19] == 'true' ? Math.ceil(proficiencyBonus / 2) : Math.floor(proficiencyBonus / 2) : 0);
	var additionalBonus = parseInt(skillInfo[skills[skill] + 19]);
	
	
	logger.info('proficiencyBonus ' + proficiencyBonus);
	logger.info('abilityScore ' + abilityScore);
	logger.info('proficiencyScore ' + proficiencyScore);
	logger.info('doubleProficiencyScore ' + doubleProficiencyScore);
	logger.info('halfProficiencyScore ' + halfProficiencyScore);
	logger.info('additionalBonus ' + additionalBonus);
	
	return abilityScore + proficiencyScore + doubleProficiencyScore + halfProficiencyScore + additionalBonus;
}

function rollForCheck(character, skill, rollType, callback) {
	var attributes = {
		'Str': 0,
		'Dex': 1,
		'Con': 2,
		'Int': 3,
		'Wis': 4,
		'Cha': 5
	};
	var skills = {
		'Athletics': 0,
		'Acrobatics': 1,
		'Sleight of Hand': 2,
		'Stealth': 3,
		'Arcana': 4,
		'History': 5,
		'Investigation': 6,
		'Nature': 7,
		'Religion': 8,
		'Animal Handling': 9,
		'Insight': 10,
		'Medicine': 11,
		'Perception': 12,
		'Survival': 13,
		'Deception': 14,
		'Intimidation': 15,
		'Performance': 16,
		'Persuasion': 17
	};
	var skillAttributeMap = {
		'Athletics': 0,
		'Acrobatics': 1,
		'Sleight of Hand': 1,
		'Stealth': 1,
		'Arcana': 3,
		'History': 3,
		'Investigation': 3,
		'Nature': 3,
		'Religion': 3,
		'Animal Handling': 4,
		'Insight': 4,
		'Medicine': 4,
		'Perception': 4,
		'Survival': 4,
		'Deception': 5,
		'Intimidation': 5,
		'Performance': 5,
		'Persuasion': 5
	}
	fs.readFile("./characters/" + character + ".json", 'utf8', function(err, contents) {
		if(!err) {
			parser.parseString(contents, function(error, result) {
				if(error === null) {
					var roll = getRndInteger(1, 20);
					var roll1 = roll;
					var roll2 = getRndInteger(1, 20);
					var rollMessage = '' + roll
					if(rollType == 'dis') {
						roll = Math.min(roll1, roll2);
						if(roll1 < roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					if(rollType == 'adv') {
						roll = Math.max(roll, roll2);
						if(roll1 > roll2) {
							rollMessage = '' + roll1 + ', ~~' + roll2 +  '~~'
						}
						else {
							rollMessage = '~~' + roll1 + '~~, ' + roll2 +  ''
						}
					}
					var modifier = getSkillModifier(result, skill);
					
					logger.info(result.character.abilityScores);
					var message = '`' + character + '` rolled a ['+rollMessage+'] + ' + (modifier) + ' = `' + (roll + modifier) + '` on the ' + skill + ' Check'
					callback(message)
				}
				else {
					callback(err)
				}
			});
		}
		else {
			callback(err)
		}
	});
}

function getCharacter(event, args) {
	var character = event.d.member.nick
	if(args.length > 0) {
		if(args[0] != 'adv' && args[0] != 'dis') {
			character = args[0]
		}
	}
	return character;
}

function getRollType(args) {	
	for(var i = 0; i < args.length; i++) {
		if(args[i] == 'dis') {
			return 'dis';
		}
		if(args[i] == 'adv') {
			return 'adv';
		}
	}
	return 'flat';
}


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});


var fallen = 'https://cdn.discordapp.com/attachments/688250978772058155/693436362946248744/unknown.png'


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	//logger.info('message: ');
	//logger.info('user: ' + user);
	//logger.info('userID: ' + userID);
	//logger.info('channelID: ' + channelID);
	//logger.info('message: ' + message);
	//logger.info('evt: ' + JSON.stringify(evt));
	
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
		
		logger.info('user:' + user);
		logger.info('nick:' + evt.d.member.nick);
        switch(cmd) {
            // !ping
            case 'wms':
				var roll = getRndInteger(1, 100);
				if(args.length > 0) {
					roll = parseInt(args[0])
					if(Number.isNaN(roll)) {
						logger.info('Not a number [' + args[0] + ']');
						bot.sendMessage({
							to: channelID,
							message: 'Error: Not a number. Try again.'
						});
						return
					}
					if(roll < 1 || roll > 100) {
						logger.info('Invalid wild magic surge roll [' + args[0] + ']. Try again');
						bot.sendMessage({
							to: channelID,
							message: 'Error: Invalid wild magic surge roll. Try again'
						});
						return
					}
				}
				logger.info('You rolled a ' + roll + '.\n\n' + surges[roll]);
                bot.sendMessage({
                    to: channelID,
                    message: 'You rolled a ' + roll + '.\n\n```' + surges[roll] + '```'
                });
			break;
			case 'thefallen':
				logger.info('Press F');
                bot.sendMessage({
                    to: channelID,
                    message: fallen
                });
			break;
			case 'hp':
			case 'HP':
				logger.info('Drink Healing Potion');
				
				var rolls = []
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				var totalHeal = 0
				var message = 'Heal for ('
				for(var i = 0; i < rolls.length; i++) {
					totalHeal += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalHeal += 2
				message += ') + 2 = ' + totalHeal
				
				
				
                bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'ghp':
			case 'GHP':
				logger.info('Drink Greater Healing Potion');
				
				var rolls = []
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				var totalHeal = 0
				var message = 'Heal for ('
				for(var i = 0; i < rolls.length; i++) {
					totalHeal += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalHeal += 4
				message += ') + 4 = ' + totalHeal
				
				
	
                bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'superior':
			case 'Superior':
			case 'SUPERIOR':
				logger.info('Drink Superior Healing Potion');
				
				var rolls = []
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				var totalHeal = 0
				var message = 'Heal for ('
				for(var i = 0; i < rolls.length; i++) {
					totalHeal += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalHeal += 8
				message += ') + 8 = ' + totalHeal
				
				
	
                bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'supreme':
			case 'Supreme':
			case 'SUPREME':
				logger.info('Drink Supreme Healing Potion');
				
				var rolls = []
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				rolls.push(getRndInteger(1, 4))
				var totalHeal = 0
				var message = 'Heal for ('
				for(var i = 0; i < rolls.length; i++) {
					totalHeal += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalHeal += 20
				message += ') + 20 = ' + totalHeal
				
				
	
                bot.sendMessage({
                    to: channelID,
                    message: message
                });
			break;
			case 'enc':
			case 'encounter':
				logger.info('Rolling for encounter');
				
				var roll = getRndInteger(1, 10)
				
				if(roll == 1) {
					bot.sendMessage({
						to: channelID,
						message: 'Rolled a ' + roll + '. Enemies approach...'
					});						
				}
				else {
					bot.sendMessage({
						to: channelID,
						message: 'Rolled a ' + roll + '. It\'s quiet here...'
					});
				}
            break;
			case 'fire5':
				logger.info('Rolling for fire damage');
				
				
				var rolls = []
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				
				totalDamage = 0
				var message = 'Damage 5d10 ('
				for(var i = 0; i < rolls.length; i++) {
					totalDamage += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalDamage += 0
				message += ') = ' + totalDamage
				
				bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'fire4':
				logger.info('Rolling for fire damage');
				
				
				var rolls = []
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				
				totalDamage = 0
				var message = 'Damage 4d10 ('
				for(var i = 0; i < rolls.length; i++) {
					totalDamage += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalDamage += 0
				message += ') = ' + totalDamage
				
				bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'fire3':
				logger.info('Rolling for fire damage');
				
				
				var rolls = []
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				
				totalDamage = 0
				var message = 'Damage 3d10 ('
				for(var i = 0; i < rolls.length; i++) {
					totalDamage += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalDamage += 0
				message += ') = ' + totalDamage
				
				bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'fire2':
				logger.info('Rolling for fire damage');
				
				
				var rolls = []
				rolls.push(getRndInteger(1, 10))
				rolls.push(getRndInteger(1, 10))
				
				totalDamage = 0
				var message = 'Damage 2d10 ('
				for(var i = 0; i < rolls.length; i++) {
					totalDamage += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalDamage += 0
				message += ') = ' + totalDamage
				
				bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'fire1':
				logger.info('Rolling for fire damage');
				
				var rolls = []
				rolls.push(getRndInteger(1, 10))
				
				totalDamage = 0
				var message = 'Damage 1d10 ('
				for(var i = 0; i < rolls.length; i++) {
					totalDamage += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalDamage += 0
				message += ') = ' + totalDamage
				
				bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'fire6':
				logger.info('Rolling for fire damage');
				
				var rolls = []
				rolls.push(getRndInteger(1, 6))
				
				totalDamage = 0
				var message = 'Damage 1d6 ('
				for(var i = 0; i < rolls.length; i++) {
					totalDamage += parseInt(rolls[i])
					message += rolls[i] + '' 
					if(i + 1 < rolls.length) {
						message += ' + '
					}
				}
				totalDamage += 0
				message += ') = ' + totalDamage
				
				bot.sendMessage({
                    to: channelID,
                    message: message
                });
            break;
			case 'death':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForDeathSavingThrow(character, 'Death', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'str':
			case 'strength':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForSavingThrow(character, 'Str', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'dex':
			case 'dexterity':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				logger.info('rollType: ' + rollType)
				rollForSavingThrow(character, 'Dex', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'con':
			case 'constitution':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForSavingThrow(character, 'Con', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'int':
			case 'intelligence':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForSavingThrow(character, 'Int', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'wis':
			case 'wisdom':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForSavingThrow(character, 'Wis', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'cha':
			case 'charisma':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForSavingThrow(character, 'Cha', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			
			
			case 'athletics':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Athletics', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'acrobatics':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Acrobatics', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'sleight':
			case 'sleightofhand':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Sleight of Hand', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'stealth':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Stealth', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'arcana':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Arcana', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'history':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'History', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'investigation':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Investigation', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'nature':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Nature', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'religion':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Religion', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'animal':
			case 'animalhandling':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Animal Handling', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'insight':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Insight', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'medicine':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Medicine', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'perception':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Perception', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'survival':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Survival', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'deception':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Deception', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'intimidation':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Intimidation', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'performance':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Performance', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'persuasion':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForCheck(character, 'Persuasion', rollType, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'initiative':
				var character = getCharacter(evt, args);
				var rollType = getRollType(args);
				rollForInitiative(character, rollType, channelID, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
					
				}); 
			break;
			case 'info':
			case 'char':
			case 'character':
			case 'player':
				var character = getCharacter(evt, args);
				getCharacterInfo(character, function(message) {
					bot.sendMessage({
						to: channelID,
						message: message
					});
				}); 
			break;
			case 'init':
				command = args[0];
				logger.info('command: ' + command);
				if('show' == command) {
					var everyNumberOfPosts = 7;
					if(args.length > 1) {
						everyNumberOfPosts = parseInt(args[1]);
					}
					showInitiativeOrderDisplay(everyNumberOfPosts);
					var initativeOrderMessage = getInitiativeOrderMessage(channelID)
					logger.info(initativeOrderMessage);
					bot.sendMessage({
						to: channelID,
						message: initativeOrderMessage
					});
				}
				else if('stop' == command) {
					stopInitiativeOrderDisplay();
					bot.sendMessage({
						to: channelID,
						message: 'Initiative Order display stopped.'
					});
				}
				else if('new' == command) {
					stopInitiativeOrderDisplay();
					bot.sendMessage({
						to: channelID,
						message: 'Initiative Order has been cleared.'
					});
				}
				else if('clear' == command) {
					stopInitiativeOrderDisplay();
					clearInitiativeOrder(channelID);
					bot.sendMessage({
						to: channelID,
						message: 'Initiative Order has been cleared.'
					});
				}
				else {
					var characterName = getCharacter(evt, args);
					if(args.length > 1) {
						if("remove" == args[1]) {								
							setInitiative(characterName, null, channelID);
							bot.sendMessage({
								to: channelID,
								message: characterName + ' has been removed from Initiative Order.'
							});
							return;
						}
						else {
							initiativeRoll = parseInt(args[1]);
							setInitiative(characterName, initiativeRoll, channelID);
							bot.sendMessage({
								to: channelID,
								message: 'Initiative added. To display initiative order: `!init show`'
							});
						}						
					}
					else {
						bot.sendMessage({
							to: channelID,
							message: 'Please include intiative roll. `!init [CharacterName] [InitiativeRoll]`'
						});
					}
				}
				
			break;
			case 'token':
			case 'tokenlink':
				bot.sendMessage({
					to: channelID,
					message: 'http://rolladvantage.com/tokenstamp/'
				});
			break;
            // Just add any case commands if you want to..
         }
     }

	numberOfPosts++;
	if(displayInitiativeOrder && numberOfPosts >= showInitiativeOrderEvery) {
		numberOfPosts = 0;
		var initativeOrderMessage = getInitiativeOrderMessage(channelID)
		logger.info(initativeOrderMessage);
		bot.sendMessage({
			to: channelID,
			message: initativeOrderMessage
		});
	}
});