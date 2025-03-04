const Warrior = [
    {
        name: "Zeus",
        hp: 100,
        stength: 12,
        attack: function(){
            let attack = Math.floor(Math.random() * 13);
            return attack;
        }
    },
    {
        name: "Thor",
        hp: 100,
        stength: 12,
        attack: function(){
            let attack = Math.floor(Math.random() * 13);
            return attack;
        }
    }
]
// I destructure the Warrior array and assign each object, so I can easily access the zeus and thor directly without acessing it using index
const [zeus, thor] = Warrior;

function battle(){
let turns = 1;
const battleTurn = setInterval(()=>{
        
    let zeusDamage = zeus.attack();
    let thorDamage = thor.attack();

    zeus.hp -= thorDamage;
    thor.hp -= zeusDamage;

    display(turns, thorDamage, zeusDamage);

    turns++;
    if(turns > 10){
        clearInterval(battleTurn);
        result();
    }

}, 1000);

}

function display(turn, thorDamage, zeusDamage){
console.log(`=== Round ${turn} === `);
console.log(`Thor attacks Zeus and does ${thorDamage} damage!\nThor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);
console.log(`Zeus attacks Thor and does ${zeusDamage} damage!\nThor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);
}

function result(){
if(zeus.hp > thor.hp){
    console.log("\n👑 Zeus WINS the battle! 👑");
}else if(thor.hp > zeus.hp){
    console.log("\n⚡ Thor WINS the battle! ⚡");
}else{
    console.log("\n💪 Battle ends in Draw 💪");
}
}

battle();