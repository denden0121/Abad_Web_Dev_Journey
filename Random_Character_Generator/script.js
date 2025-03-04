//character object practice
const character = {
    name : "hero",
    health : 100,
    class : classGenerator(),
    specialAbility : specialAbilityGenerator(),
    randomizeHealth(){
        this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }
}

//Function that can be called to generate class practice
function classGenerator() {
    switch(Math.floor(Math.random() * 5)){
        case 0 : 
            return "Warrior";
        case 1 : 
            return "Mage";
        case 2 : 
            return "Archer";
        case 3 :
            return "Healer";
        case 4 : 
            return "Assassin";
    }
}

//Function that can be called to generate special ability practice
function specialAbilityGenerator(){
    switch(Math.floor(Math.random() * 5)){
        case 0 :
            return "Fireball";
        case 1 :
            return "Healing Touch";
        case 2 :
            return "Stealth";
        case 3 :
            return "Lightning Strike";
        case 4 : 
            return "Power Slash";
    }
}

//This function is used to create random character
function generateCharacter(name = "none"){
    //I first check if the user add a argument in the function and if they don't, It will select a random name
    //I separate the random number selector to avoid have the same abilities,class,names,health
    if(name == "none"){
        switch(Math.floor(Math.random() * 5)){
            case 0 :
                name = "Thorin";
                break;
            case 1 :
                name = "Elara";
                break;
            case 2 :
                name = "Zane";
                break;
            case 3 :
                name = "Ivy";
                break;
            case 4 :
                name = "Dante";
                break;
        }
    }
    //This randomly select an ability
    let specialAbility;
    switch(Math.floor(Math.random() * 5)){
        case 0 :
            specialAbility = "Fireball";
        case 1 :
            specialAbility = "Healing Touch";
        case 2 :
            specialAbility = "Stealth";
        case 3 :
            specialAbility = "Lightning Strike";
        case 4 : 
            specialAbility = "Power Slash";
    }
    //This randomly select an class
    let classGenerator;
    switch(Math.floor(Math.random() * 5)){
        case 0 : 
            classGenerator = "Warrior";
        case 1 : 
            classGenerator = "Mage";
        case 2 : 
            classGenerator = "Archer";
        case 3 :
            classGenerator = "Healer";
        case 4 : 
            classGenerator = "Assassin";
    }
    //This randomly select an health
    let healthGenerator = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    return {
        name : name,
        class : classGenerator,
        health : healthGenerator,
        specialAbility : specialAbility,
        //This method is used to battle other characters
        battle(target){
            const originalHealth = target.health;
            const attack = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            target.health -= attack;
            console.log(`Character ${this.name} attacked Character ${target.name} with ${this.specialAbility}. ${target.name}'s health dropped from ${originalHealth} to ${target.health}.`);
        }
    }
}

//This function create an array of characters
//First I accept an argument that let the function know how many characters are need to be generated, and the default value is 1
//Then using forloop it will call the genereateCharacter() function then push the object into array, and return it
function generateMultipleCharacters(count = 1){
    let party = [];
    for(let i = 0; i<count; i++){
        party.push(generateCharacter());
    }
    return party;
}

//create 2 players
const player1 = generateCharacter("Denden");
const player2 = generateCharacter();

//create an array of 5 different characters
const party = generateMultipleCharacters(5);
//display party
console.log(party);

//battle, player1 attacks player2
player1.battle(player2);
player1.battle(player2);
player1.battle(player2);

//display players
console.log(player1);
console.log(player2);