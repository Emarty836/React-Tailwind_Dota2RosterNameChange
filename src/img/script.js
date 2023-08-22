const onSwitch = document.querySelector('#on');
const offSwitch = document.querySelector('#off');
const carryButton = document.querySelector('#carry');
const supportButton = document.querySelector('#support');




const heroes=[
    {name:'Abaddon', attribute:'strength', carry:true, support:true, image:"abaddon.jpeg"},
    {name:'Alchemist', attribute:'strength', carry:true, support:true, image:"alchemist.jpeg"},
    {name:'Ancient Apparition', attribute:'intelligence', carry:false, support:true, image:"Ancient_Apparition_icon.png"},
    {name:'Anti Mage', attribute:'agility', carry:true, support:false, image:"AntiMage_icon.png"},
    {name:'Arc Warden', attribute:'agility', carry:true, support:false, image:"Arc_Warden_icon.png"},
    {name:'Axe', attribute:'strength', carry:true, support:false, image:"axe.png"},
    {name:'Bane', attribute:'intelligence', carry:false, support:true, image:"Bane_icon.png"},
    {name:'Batrider', attribute:'intelligence', carry:false, support:false, image:"Batrider_icon.png"},
    {name:'Beastmaster', attribute:'strength', carry:false, support:false, image:"Beastmaster.jpeg"},
    {name:'Bloodseeker', attribute:'agility', carry:true, support:false, image:"Bloodseeker_icon.png"},
    {name:'Bounty Hunter', attribute:'agility', carry:false, support:false, image:"Bounty_Hunter_icon.png"},
    {name:'Brewmaster', attribute:'strength', carry:true, support:false, image:"Brewmaster.png"},
    {name:'Bristeback', attribute:'strength', carry:true, support:false, image:"bristleback.png"},
    {name:'Broodmother', attribute:'agility', carry:true, support:false, image:"Broodmother_icon.png"},
    {name:'Centaur Warrunner', attribute:'strength', carry:false, support:false, image:"Centaur_Warrunner_icon.png"},
    {name:'Chaos Knight', attribute:'strength', carry:true, support:false, image:"chaosknight.png"},
    {name:'Chen', attribute:'intelligence', carry:false, support:true, image:"Chen_icon.png"},
    {name:'Clinkz', attribute:'agility', carry:true, support:false, image:"Clinkz_icon.png"},
    {name:'Clockwerk', attribute:'strength', carry:false, carry:false, image:"clockwerk.jpeg"},
    {name:'Crystal Maiden', attribute:'intelligence', carry:false, support:true, image:"Crystal_Maiden_icon.png"},
    {name:'Dark Seer', attribute:'intelligence', carry:false, support:false, image:"Dark_Seer_icon.png"},
    {name:'Dark Willow', attribute:'intelligence', carry:false, support:true, image:"Dark_Willow_icon.png"},
    {name:'Dawnbreaker', attribute:'strength', carry:true, support:false, image:"dawnbreaker.png"},
    {name:'Dazzle', attribute:'intelligence', carry:false, support:true, image:"Dazzle_icon.png"},
    {name:'Death Prophet', attribute:'intelligence', carry:true, support:false, image:"Death_Prophet_icon.png"},
    {name:'Disruptor', attribute:'intelligence', carry:false, support:true, image:"Disruptor_icon.png"},
    {name:'Doom', attribute:'strength', carry:true, support:false, image:"doom.png"},
    {name:'Dragon Knight', attribute:'strength', carry:true, support:false, image:"dragonknight.png"},
    {name:'Drow Ranger', attribute:'agility', carry:true, support:false, image:"Drow_Ranger_icon.png"},
    {name:'Earth Spirit', attribute:'strength', carry:false, support:false, image:"earthspirit.png"},
    {name:'Earth Shaker', attribute:'strength', carry:false, support:true, image:"earthshaker.png"},
    {name:'Elder Titan', attribute:'strength', carry:false, support:false, image:"eldertitan.png"},
    {name:'Ember Spirit', attribute:'agility', carry:true, support:false, image:"Ember_Spirit_icon.png"},
    {name:'Enchantress', attribute:'intelligence', carry:false, support:true, image:"Enchantress_icon.png"},
    {name:'Enigma', attribute:'intelligence', carry:false, support:false, image:"Enigma_icon.png"},
    {name:'Faceless Void', attribute:'agility', carry:true, support:false, image:"Faceless_Void_icon.png"},
    {name:'Grimstroke', attribute:'intelligence', carry:false, support:true, image:"Grimstroke_icon.png"},
    {name:'Gyrocopter', attribute:'agility', carry:true, support:false, image:"Gyrocopter_icon.png"},
    {name:'Hoodwink', attribute:'agility', carry:false, support:true, image:"hoodwink.jpeg"},
    {name:'Huskar', attribute:'strength', carry:true, support:false, image:"huskar.png"},
    {name:'Invoker', attribute:'intelligence', carry:true, support:false, image:"Invoker_icon.png"},
    {name:'Io', attribute:'strength', carry:false, support:true, image:"io.png"},
    {name:'Jakiro', attribute:'intelligence', carry:false, support:true, image:"Jakiro_icon.png"},
    {name:'Juggernaut', attribute:'agility', carry:true, support:false, image:"Juggernaut_icon.png"},
    {name:'Keeper of the Light', attribute:'intelligence', carry:false, support:true, image:"Keeper_of_the_Light_icon.png"},
    {name:'Kunkka', attribute:'strength', carry:true, support:true, image:"kunkka.png"},
    {name:'Legion Commander', attribute:'strength', carry:true, support:false, image:"Legion_Commander_icon.png"},
    {name:'Leshrac', attribute:'intelligence', carry:true, support:true, image:"Leshrac_icon.png"},
    {name:'Lich', attribute:'intelligence', carry:false, support:true, image:"Lich_icon.png"},
    {name:'Lifestealer', attribute:'strength', carry:true, support:false, image:"Lifestealer_icon.png"},
    {name:'Lina', attribute:'intelligence', carry:true, support:true, image:"Lina_icon.png"},
    {name:'Lion', attribute:'intelligence', carry:false, support:true, image:"Lion_icon.png"},
    {name:'Lone Druid', attribute:'agility', carry:true, support:false, image:"Lone_Druid_icon.png"},
    {name:'Luna', attribute:'agility', carry:true, support:false, image:"Luna_icon.png"},
    {name:'Lycan', attribute:'strength', carry:true, support:false, image:"Lycan_icon.png"},
    {name:'Magnus', attribute:'strength', carry:false, support:false, image:"Magnus_icon.png"},
    {name:'Marci', attribute:'strength', carry:true, support:true, image:"marci.png"},
    {name:'Mars', attribute:'strength', carry:true, support:false, image:"Mars_icon.png"},
    {name:'Medusa', attribute:'agility', carry:true, support:false, image:"Medusa_icon.png"},
    {name:'Meepo', attribute:'agility', carry:true, support:false, image:"Meepo_icon.png"},
    {name:'Mirana', attribute:'agility', carry:true, support:true, image:"Mirana_icon.png"},
    {name:'Monkey King', attribute:'agility', carry:true, support:false, image:"monkey_king.jpeg"},
    {name:'Morphling', attribute:'agility', carry:true, support:false, image:"Morphling_icon.png"},
    {name:'Naga Siren', attribute:'agility', carry:true, support:true, image:"Naga_Siren_icon.png"},
    {name:'Nature\'s Prophet', attribute:'intelligence', carry:true, support:false, image:"natures.png"},
    {name:'Necrophos', attribute:'intelligence', carry:true, support:false, image:"Necrophos_icon.png"},
    {name:'Night Stalker', attribute:'strength', carry:true, support:false, image:"Night_Stalker_icon.png"},
    {name:'Nyx Assassin', attribute:'agility', carry:false, support:false, image:"Nyx_Assassin_icon.png"},
    {name:'Ogre Magi', attribute:'intelligence', carry:false, support:true, image:"Ogre_Magi_icon.png"},
    {name:'Omniknight', attribute:'strength', carry:false, support:true, image:"Omniknight_icon.png"},
    {name:'Oracle', attribute:'intelligence', carry:false, support:true, image:"Oracle_icon.png"},
    {name:'Outerworld Destroyer', attribute:'intelligence', carry:true, support:false, image:"Outworld_Destroyer_icon.png"},
    {name:'Pangolier', attribute:'agility', carry:true, support:false, image:"Pangolier_icon.png"},
    {name:'Phantom Assassin', attribute:'agility', carry:true, support:false, image:"Phantom_Assassin_icon.png"},
    {name:'Phantom Lancer', attribute:'agility', carry:true, support:false, image:"Phantom_Lancer_icon.png"},
    {name:'Pheonix', attribute:'strength', carry:false, support:true, image:"benedict-barone-katoglou-phoenix-low.jpeg"},
    {name:'Primal Beast', attribute:'strength', carry:false, support:false, image:"primalBeast.jpg"},
    {name:'Puck', attribute:'intelligence', carry:false, support:false, image:"Puck_icon.png"},
    {name:'Pudge', attribute:'strength', carry:false, support:false, image:"Pudge_icon.png"},
    {name:'Pugna', attribute:'intelligence', carry:false, support:false, image:"Pugna_icon.png"},
    {name:'Queen of Pain', attribute:'intelligence', carry:true, support:false, image:"Queen_of_Pain_icon.png"},
    {name:'Razor', attribute:'agility', carry:true, support:false, image:"Razor_icon.png"},
    {name:'Riki', attribute:'agility', carry:true, support:false, image:"Riki_icon.png"},
    {name:'Rubick', attribute:'intelligence', carry:false, support:true, image:"Rubick_icon.png"},
    {name:'Sand King', attribute:'strength', carry:false, support:true, image:"Sand_King_icon.png"},
    {name:'Shadow Demon', attribute:'intelligence', carry:false, support:true, image:"Shadow_Demon_icon.png"},
    {name:'Shadow Fiend', attribute:'agility', carry:true, support:false, image:"Shadow_Fiend_icon.png"},
    {name:'Shadow Shaman', attribute:'intelligence', carry:false, support:true, image:"Shadow_Shaman_icon.png"},
    {name:'Silencer', attribute:'intelligence', carry:true, support:true, image:"Silencer_icon.png"},
    {name:'Skywrath Mage', attribute:'intelligence', carry:false, support:true, image:"Skywrath_Mage_icon.png"},
    {name:'Slardar', attribute:'strength', carry:true, support:false, image:"Slardar_icon.png"},
    {name:'Slark', attribute:'agility', carry:true, support:false, image:"Slark_icon.png"},
    {name:'Snapfire', attribute:'strength', carry:false, support:true, image:"Snapfire_icon.png"},
    {name:'Sniper', attribute:'agility', carry:true, support:false, image:"Sniper_icon.png"},
    {name:'Spectre', attribute:'agility', carry:true, support:false, image:"Spectre_icon.png"},
    {name:'Spirit Breaker', attribute:'strength', carry:true, support:false, image:"Spirit_Breaker_icon.png"},
    {name:'Storm Spirit', attribute:'intelligence', carry:true, support:false, image:"Storm_Spirit_icon.png"},
    {name:'Sven', attribute:'strength', carry:true, support:false, image:"Sven_icon.png"},
    {name:'Techies', attribute:'intelligence', carry:false, support:false, image:"Techies_icon.png"},
    {name:'Templar Assassin', attribute:'agility', carry:true, support:false, image:"Templar_Assassin_icon.png"},
    {name:'Terrorblade', attribute:'agility', carry:true, support:false, image:"Terrorblade_icon.png"},
    {name:'Tidehunter', attribute:'strength', carry:true, support:false, image:"Tidehunter_icon.png"},
    {name:'Timbersaw', attribute:'strength', carry:false, support:false, image:"Timbersaw_icon.png"},
    {name:'Tinker', attribute:'intelligence', carry:true, support:false, image:"Tinker_icon.png"},
    {name:'Tiny', attribute:'strength', carry:true, support:false, image:"Tiny_icon.png"},
    {name:'Treant Protector', attribute:'strength', carry:false, support:true, image:"Treant_Protector_icon.png"},
    {name:'Troll Warlord', attribute:'agility', carry:true, support:false, image:"Troll_Warlord_icon.png"},
    {name:'Tusk', attribute:'strength', carry:false, support:false, image:"Tusk_icon.png"},
    {name:'Underlord', attribute:'strength', carry:false, support:true, image:"Underlord_icon.png"},
    {name:'Undying', attribute:'strength', carry:false, support:true, image:"Undying_icon.png"},
    {name:'Ursa', attribute:'agility', carry:true, support:false, image:"Ursa_icon.png"},
    {name:'Vengeful Spirit', attribute:'agility', carry:false, support:true, image:"Vengeful_Spirit_icon.png"},
    {name:'Venomancer', attribute:'agility', carry:false, support:true, image:"Venomancer_icon.png"},
    {name:'Viper', attribute:'agility', carry:true, support:false, image:"Viper_icon.png"},
    {name:'Visage', attribute:'intelligence', carry:false, support:true, image:"Visage_icon.png"},
    {name:'Void Spirit', attribute:'intelligence', carry:true, support:false, image:"Void_Spirit_icon.png"},
    {name:'Warlock', attribute:'intelligence', carry:false, support:true, image:"Warlock_icon.png"},
    {name:'Weaver', attribute:'agility', carry:true, support:false, image:"Weaver_icon.png"},
    {name:'Windranger', attribute:'intelligence', carry:true, support:true, image:"Windranger_icon.png"},
    {name:'Winter Wyvern', attribute:'intelligence', carry:false, support:true, image:"Winter_Wyvern_icon.png"},
    {name:'Witch Doctor', attribute:'intelligence', carry:false, support:true, image:"Witch_Doctor_icon.png"},
    {name:'Wraith King', attribute:'strength', carry:true, support:true, image:"Wraith_King_icon.png"},
    {name:'Zeus', attribute:'intelligence', carry:true, support:false, image:"Zeus_icon.png"},
];


var toggled=false;
var toggled2=false;

//--------------------------------------Strength--------------------------------------------------------------

/// strength filters------------------------------------------------

const strengthHeroes = heroes.filter((hero) => {
    if(hero.attribute=='strength'){
        return true;
    }
});


function StrengthCarryFilter(x){
    for (i=0; i<x.length; i++){
        if(x[i].carry == false){
        let sample = document.querySelector(`.strength > .frame:nth-of-type(${i+1})`);
        if(!toggled){
            sample.classList.add('carry');
        }else{
            sample.classList.remove('carry');
        }
        }
    }
}

function StrengthSupportFilter(x){
    for (i=0; i<x.length; i++){
        if(x[i].support == false){
        let sample = document.querySelector(`.strength > .frame:nth-of-type(${i+1})`);
        if(!toggled2){
            sample.classList.add('carry');
        }else{
            sample.classList.remove('carry');
        }
        }
    }
}

//// strength non-filters -------------------------------------------------------------------------------

let abaddon = document.querySelector(".strength > div:nth-child(1) > p");
let abaddonImage = document.querySelector('.strength > div:nth-child(1) > img');
let alchemist = document.querySelector('.strength > div:nth-child(2) > p');
let alchemistImage = document.querySelector('.strength > div:nth-child(2) > img');
let axe = document.querySelector('.strength > div:nth-child(3) > p');
let axeImage = document.querySelector('.strength > div:nth-child(3) > img');
let beastmaster = document.querySelector('.strength > div:nth-child(4) > p');
let beastmasterImage = document.querySelector('.strength > div:nth-child(4) > img');
let brewmaster = document.querySelector('.strength > div:nth-child(5) > p');
let brewmasterImage = document.querySelector('.strength > div:nth-child(5) > img');
let bristleback = document.querySelector('.strength > div:nth-child(6) > p');
let bristlebackImage = document.querySelector('.strength > div:nth-child(6) > img');
let centaur = document.querySelector('.strength > div:nth-child(7) > p');
let centaurImage = document.querySelector('.strength > div:nth-child(7) > img');
let chaosKnight = document.querySelector('.strength > div:nth-child(8) > p');
let chaosKnightImage = document.querySelector('.strength > div:nth-child(8) > img');
let clockwork = document.querySelector('.strength > div:nth-child(9) > p');
let clockworkImage = document.querySelector('.strength > div:nth-child(9) > img');
let dawnbreaker = document.querySelector('.strength > div:nth-child(10) > p');
let dawnbreakerImage = document.querySelector('.strength > div:nth-child(10) > img');
let doom = document.querySelector('.strength > div:nth-child(11) > p');
let doomImage = document.querySelector('.strength > div:nth-child(11) > img');
let dragonKnight = document.querySelector('.strength > div:nth-child(12) > p');
let dragonKnightImage = document.querySelector('.strength > div:nth-child(12) > img');
let earthSpirit = document.querySelector('.strength > div:nth-child(13) > p');
let earthSpiritImage = document.querySelector('.strength > div:nth-child(13) > img');
let earthshaker = document.querySelector('.strength > div:nth-child(14) > p');
let earthshakerImage = document.querySelector('.strength > div:nth-child(14) > img');
let elderTitan = document.querySelector('.strength > div:nth-child(15) > p');
let elderTitanImage = document.querySelector('.strength > div:nth-child(15) > img');
let huskar = document.querySelector('.strength > div:nth-child(16) > p');
let huskarImage = document.querySelector('.strength > div:nth-child(16) > img');
let io = document.querySelector('.strength > div:nth-child(17) > p');
let ioImage = document.querySelector('.strength > div:nth-child(17) > img');
let kunkka = document.querySelector('.strength > div:nth-child(18) > p');
let kunkkaImage = document.querySelector('.strength > div:nth-child(18) > img');
let legion = document.querySelector('.strength > div:nth-child(19) > p');
let legionImage = document.querySelector('.strength > div:nth-child(19) > img');
let lifestealer = document.querySelector('.strength > div:nth-child(20) > p');
let lifestealerImage = document.querySelector('.strength > div:nth-child(20) > img');
let lycan = document.querySelector('.strength > div:nth-child(21) > p');
let lycanImage = document.querySelector('.strength > div:nth-child(21) > img');
let magnus = document.querySelector('.strength > div:nth-child(22) > p');
let magnusImage = document.querySelector('.strength > div:nth-child(22) > img');
let marci = document.querySelector('.strength > div:nth-child(23) > p');
let marciImage = document.querySelector('.strength > div:nth-child(23) > img');
let mars = document.querySelector('.strength > div:nth-child(24) > p');
let marsImage = document.querySelector('.strength > div:nth-child(24) > img');
let nightStalker = document.querySelector('.strength > div:nth-child(25) > p');
let nightStalkerImage = document.querySelector('.strength > div:nth-child(25) > img');
let omniknight = document.querySelector('.strength > div:nth-child(26) > p');
let omniknightImage = document.querySelector('.strength > div:nth-child(26) > img');
let pheonix = document.querySelector('.strength > div:nth-child(27) > p');
let pheonixImage = document.querySelector('.strength > div:nth-child(27) > img');
let primalBeast = document.querySelector('.strength > div:nth-child(28) > p');
let primalBeastImage = document.querySelector('.strength > div:nth-child(28) > img');
let pudge = document.querySelector('.strength > div:nth-child(29) > p');
let pudgeImage = document.querySelector('.strength > div:nth-child(29) > img');
let sandKing = document.querySelector('.strength > div:nth-child(30) > p');
let sandKingImage = document.querySelector('.strength > div:nth-child(30) > img');
let slardar = document.querySelector('.strength > div:nth-child(31) > p');
let slardarImage = document.querySelector('.strength > div:nth-child(31) > img');
let snapfire = document.querySelector('.strength > div:nth-child(32) > p');
let snapfireImage = document.querySelector('.strength > div:nth-child(32) > img');
let spiritBreaker = document.querySelector('.strength > div:nth-child(33) > p');
let spiritBreakerImage = document.querySelector('.strength > div:nth-child(33) > img');
let sven = document.querySelector('.strength > div:nth-child(34) > p');
let svenImage = document.querySelector('.strength > div:nth-child(34) > img');
let tidehunter = document.querySelector('.strength > div:nth-child(35) > p');
let tidehunterImage = document.querySelector('.strength > div:nth-child(35) > img');
let timbersaw = document.querySelector('.strength > div:nth-child(36) > p');
let timbersawImage = document.querySelector('.strength > div:nth-child(36) > img');
let tiny = document.querySelector('.strength > div:nth-child(37) > p');
let tinyImage = document.querySelector('.strength > div:nth-child(37) > img');
let treant = document.querySelector('.strength > div:nth-child(38) > p');
let treantImage = document.querySelector('.strength > div:nth-child(38) > img');
let tusk = document.querySelector('.strength > div:nth-child(39) > p');
let tuskImage = document.querySelector('.strength > div:nth-child(39) > img');
let underlord = document.querySelector('.strength > div:nth-child(40) > p');
let underlordImage = document.querySelector('.strength > div:nth-child(40) > img');
let undying = document.querySelector('.strength > div:nth-child(41) > p');
let undyingImage = document.querySelector('.strength > div:nth-child(41) > img');
let wraithKing = document.querySelector('.strength > div:nth-child(42) > p');
let wraithKingImage = document.querySelector('.strength > div:nth-child(42) > img');

abaddon.textContent=strengthHeroes[0].name;
abaddonImage.src=strengthHeroes[0].image;
alchemist.textContent=strengthHeroes[1].name;
alchemistImage.src=strengthHeroes[1].image;
axe.textContent=strengthHeroes[2].name;
axeImage.src=strengthHeroes[2].image;
beastmaster.textContent=strengthHeroes[3].name;
beastmasterImage.src=strengthHeroes[3].image;
brewmaster.textContent=strengthHeroes[4].name;
brewmasterImage.src=strengthHeroes[4].image;
bristleback.textContent=strengthHeroes[5].name;
bristlebackImage.src=strengthHeroes[5].image;
centaur.textContent=strengthHeroes[6].name;
centaurImage.src=strengthHeroes[6].image;
chaosKnight.textContent=strengthHeroes[7].name;
chaosKnightImage.src=strengthHeroes[7].image;
clockwork.textContent=strengthHeroes[8].name;
clockworkImage.src=strengthHeroes[8].image;
dawnbreaker.textContent=strengthHeroes[9].name;
dawnbreakerImage.src=strengthHeroes[9].image;
doom.textContent=strengthHeroes[10].name;
doomImage.src=strengthHeroes[10].image;
dragonKnight.textContent=strengthHeroes[11].name;
dragonKnightImage.src=strengthHeroes[11].image;
earthSpirit.textContent=strengthHeroes[12].name;
earthSpiritImage.src=strengthHeroes[12].image;
earthshaker.textContent=strengthHeroes[13].name;
earthshakerImage.src=strengthHeroes[13].image;
elderTitan.textContent=strengthHeroes[14].name;
elderTitanImage.src=strengthHeroes[14].image;
huskar.textContent=strengthHeroes[15].name;
huskarImage.src=strengthHeroes[15].image;
io.textContent=strengthHeroes[16].name;
ioImage.src=strengthHeroes[16].image;
kunkka.textContent=strengthHeroes[17].name;
kunkkaImage.src=strengthHeroes[17].image;
legion.textContent=strengthHeroes[18].name;
legionImage.src=strengthHeroes[18].image;
lifestealer.textContent=strengthHeroes[19].name;
lifestealerImage.src=strengthHeroes[19].image;
lycan.textContent=strengthHeroes[20].name;
lycanImage.src=strengthHeroes[20].image;
magnus.textContent=strengthHeroes[21].name;
magnusImage.src=strengthHeroes[21].image;
marci.textContent=strengthHeroes[22].name;
marciImage.src=strengthHeroes[22].image;
mars.textContent=strengthHeroes[23].name;
marsImage.src=strengthHeroes[23].image;
nightStalker.textContent=strengthHeroes[24].name;
nightStalkerImage.src=strengthHeroes[24].image;
omniknight.textContent=strengthHeroes[25].name;
omniknightImage.src=strengthHeroes[25].image;
pheonix.textContent=strengthHeroes[26].name;
pheonixImage.src=strengthHeroes[26].image;
primalBeast.textContent=strengthHeroes[27].name;
primalBeastImage.src=strengthHeroes[27].image;
pudge.textContent=strengthHeroes[28].name;
pudgeImage.src=strengthHeroes[28].image;
sandKing.textContent=strengthHeroes[29].name;
sandKingImage.src=strengthHeroes[29].image;
slardar.textContent=strengthHeroes[30].name;
slardarImage.src=strengthHeroes[30].image;
snapfire.textContent=strengthHeroes[31].name;
snapfireImage.src=strengthHeroes[31].image;
spiritBreaker.textContent=strengthHeroes[32].name;
spiritBreakerImage.src=strengthHeroes[32].image;
sven.textContent=strengthHeroes[33].name;
svenImage.src=strengthHeroes[33].image;
tidehunter.textContent=strengthHeroes[34].name;
tidehunterImage.src=strengthHeroes[34].image;
timbersaw.textContent=strengthHeroes[35].name;
timbersawImage.src=strengthHeroes[35].image;
tiny.textContent=strengthHeroes[36].name;
tinyImage.src=strengthHeroes[36].image;
treant.textContent=strengthHeroes[37].name;
treantImage.src=strengthHeroes[37].image;
tusk.textContent=strengthHeroes[38].name;
tuskImage.src=strengthHeroes[38].image;
underlord.textContent=strengthHeroes[39].name;
underlordImage.src=strengthHeroes[39].image;
undying.textContent=strengthHeroes[40].name;
undyingImage.src=strengthHeroes[40].image;
wraithKing.textContent=strengthHeroes[41].name;
wraithKingImage.src=strengthHeroes[41].image;




///// Agility Heroes ----------------------------------------------------------

/// filters-----------------------------------------------------

const agilityHeroes = heroes.filter((hero) => {
    if(hero.attribute=='agility'){
        return true;
    }
});

function AgilityCarryFilter(x){
    for (i=0; i<x.length; i++){
        if(x[i].carry == false){
        let sample = document.querySelector(`.agilities > .frame:nth-of-type(${i+1})`);
        if(!toggled){
            sample.classList.add('carry');
        }else{
            sample.classList.remove('carry');
        }
        }
    }
}

function AgilitySupportFilter(x){
    for (i=0; i<x.length; i++){
        if(x[i].support == false){
        let sample = document.querySelector(`.agilities > .frame:nth-of-type(${i+1})`);
        if(!toggled2){
            sample.classList.add('carry');
        }else{
            sample.classList.remove('carry');
        }
        }
    }
}


//------------------------------------Agility non-filters-------------------------------

let antiMage = document.querySelector('.agilities > div:nth-child(1) > p');
let antiMageImage = document.querySelector('.agilities > div:nth-child(1) > img');
let arcWarden = document.querySelector('.agilities > div:nth-child(2) > p');
let arcWardenImage = document.querySelector('.agilities > div:nth-child(2) > img');
let bloodseeker = document.querySelector('.agilities > div:nth-child(3) > p');
let bloodseekerImage = document.querySelector('.agilities > div:nth-child(3) > img');
let bountyHunter = document.querySelector('.agilities > div:nth-child(4) > p');
let bountyHunterImage = document.querySelector('.agilities > div:nth-child(4) > img');
let broodmother = document.querySelector('.agilities > div:nth-child(5) > p');
let broodmotherImage = document.querySelector('.agilities > div:nth-child(5) > img');
let clinkz = document.querySelector('.agilities > div:nth-child(6) > p');
let clinkzImage = document.querySelector('.agilities > div:nth-child(6) > img');
let drowRanger = document.querySelector('.agilities > div:nth-child(7) > p');
let drowRangerImage = document.querySelector('.agilities > div:nth-child(7) > img');
let emberSpirit = document.querySelector('.agilities > div:nth-child(8) > p');
let emberSpiritImage = document.querySelector('.agilities > div:nth-child(8) > img');
let facelessVoid = document.querySelector('.agilities > div:nth-child(9) > p');
let facelessVoidImage = document.querySelector('.agilities > div:nth-child(9) > img');
let gyrocopter = document.querySelector('.agilities > div:nth-child(10) > p');
let gyrocopterImage = document.querySelector('.agilities > div:nth-child(10) > img');
let hoodwink = document.querySelector('.agilities > div:nth-child(11) > p');
let hoodwinkImage = document.querySelector('.agilities > div:nth-child(11) > img');
let juggernaut = document.querySelector('.agilities > div:nth-child(12) > p');
let juggernautImage = document.querySelector('.agilities > div:nth-child(12) > img');
let loneDruid = document.querySelector('.agilities > div:nth-child(13) > p');
let loneDruidImage = document.querySelector('.agilities > div:nth-child(13) > img');
let luna = document.querySelector('.agilities > div:nth-child(14) > p');
let lunaImage = document.querySelector('.agilities > div:nth-child(14) > img');
let medusa = document.querySelector('.agilities > div:nth-child(15) > p');
let medusaImage = document.querySelector('.agilities > div:nth-child(15) > img');
let meepo = document.querySelector('.agilities > div:nth-child(16) > p');
let meepoImage = document.querySelector('.agilities > div:nth-child(16) > img');
let mirana = document.querySelector('.agilities > div:nth-child(17) > p');
let miranaImage = document.querySelector('.agilities > div:nth-child(17) > img');
let monkeyKing = document.querySelector('.agilities > div:nth-child(18) > p');
let monkeyKingImage = document.querySelector('.agilities > div:nth-child(18) > img');
let morphling = document.querySelector('.agilities > div:nth-child(19) > p');
let morphlingImage = document.querySelector('.agilities > div:nth-child(19) > img');
let nagaSiren = document.querySelector('.agilities > div:nth-child(20) > p');
let nagaSirenImage = document.querySelector('.agilities > div:nth-child(20) > img');
let nyxAssassin = document.querySelector('.agilities > div:nth-child(21) > p');
let nyxAssassinImage = document.querySelector('.agilities > div:nth-child(21) > img');
let pangolier = document.querySelector('.agilities > div:nth-child(22) > p');
let pangolierImage = document.querySelector('.agilities > div:nth-child(22) > img');
let phantomAssassin = document.querySelector('.agilities > div:nth-child(23) > p');
let phantomAssassinImage = document.querySelector('.agilities > div:nth-child(23) > img');
let phantomLancer = document.querySelector('.agilities > div:nth-child(24) > p');
let phantomLancerImage = document.querySelector('.agilities > div:nth-child(24) > img');
let razor = document.querySelector('.agilities > div:nth-child(25) > p');
let razorImage = document.querySelector('.agilities > div:nth-child(25) > img');
let riki = document.querySelector('.agilities > div:nth-child(26) > p');
let rikiImage = document.querySelector('.agilities > div:nth-child(26) > img');
let shadowFiend = document.querySelector('.agilities > div:nth-child(27) > p');
let shadowFiendImage = document.querySelector('.agilities > div:nth-child(27) > img');
let slark = document.querySelector('.agilities > div:nth-child(28) > p');
let slarkImage = document.querySelector('.agilities > div:nth-child(28) > img');
let sniper = document.querySelector('.agilities > div:nth-child(29) > p');
let sniperImage = document.querySelector('.agilities > div:nth-child(29) > img');
let spectre = document.querySelector('.agilities > div:nth-child(30) > p');
let spectreImage = document.querySelector('.agilities > div:nth-child(30) > img');
let templarAssassin = document.querySelector('.agilities > div:nth-child(31) > p');
let templarAssassinImage = document.querySelector('.agilities > div:nth-child(31) > img');
let terrorblade = document.querySelector('.agilities > div:nth-child(32) > p');
let terrorbladeImage = document.querySelector('.agilities > div:nth-child(32) > img');
let trollWarlord = document.querySelector('.agilities > div:nth-child(33) > p');
let trollWarlordImage = document.querySelector('.agilities > div:nth-child(33) > img');
let ursa = document.querySelector('.agilities > div:nth-child(34) > p');
let ursaImage = document.querySelector('.agilities > div:nth-child(34) > img');
let vengefulSpirit = document.querySelector('.agilities > div:nth-child(35) > p');
let vengefulSpiritImage = document.querySelector('.agilities > div:nth-child(35) > img');
let venomancer = document.querySelector('.agilities > div:nth-child(36) > p');
let venomancerImage = document.querySelector('.agilities > div:nth-child(36) > img');
let viper = document.querySelector('.agilities > div:nth-child(37) > p');
let viperImage = document.querySelector('.agilities > div:nth-child(37) > img');
let weaver = document.querySelector('.agilities > div:nth-child(38) > p');
let weaverImage = document.querySelector('.agilities > div:nth-child(38) > img');


antiMage.textContent=agilityHeroes[0].name;
antiMageImage.src=agilityHeroes[0].image;
arcWarden.textContent=agilityHeroes[1].name;
arcWardenImage.src=agilityHeroes[1].image;
bloodseeker.textContent=agilityHeroes[2].name;
bloodseekerImage.src=agilityHeroes[2].image;
bountyHunter.textContent=agilityHeroes[3].name;
bountyHunterImage.src=agilityHeroes[3].image;
broodmother.textContent=agilityHeroes[4].name;
broodmotherImage.src=agilityHeroes[4].image;
clinkz.textContent=agilityHeroes[5].name;
clinkzImage.src=agilityHeroes[5].image;
drowRanger.textContent=agilityHeroes[6].name;
drowRangerImage.src=agilityHeroes[6].image;
emberSpirit.textContent=agilityHeroes[7].name;
emberSpiritImage.src=agilityHeroes[7].image;
facelessVoid.textContent=agilityHeroes[8].name;
facelessVoidImage.src=agilityHeroes[8].image;
gyrocopter.textContent=agilityHeroes[9].name;
gyrocopterImage.src=agilityHeroes[9].image;
hoodwink.textContent=agilityHeroes[10].name;
hoodwinkImage.src=agilityHeroes[10].image;
juggernaut.textContent=agilityHeroes[11].name;
juggernautImage.src=agilityHeroes[11].image;
loneDruid.textContent=agilityHeroes[12].name;
loneDruidImage.src=agilityHeroes[12].image;
luna.textContent=agilityHeroes[13].name;
lunaImage.src=agilityHeroes[13].image;
medusa.textContent=agilityHeroes[14].name;
medusaImage.src=agilityHeroes[14].image;
meepo.textContent=agilityHeroes[15].name;
meepoImage.src=agilityHeroes[15].image;
mirana.textContent=agilityHeroes[16].name;
miranaImage.src=agilityHeroes[16].image;
monkeyKing.textContent=agilityHeroes[17].name;
monkeyKingImage.src=agilityHeroes[17].image;
morphling.textContent=agilityHeroes[18].name;
morphlingImage.src=agilityHeroes[18].image;
nagaSiren.textContent=agilityHeroes[19].name;
nagaSirenImage.src=agilityHeroes[19].image;
nyxAssassin.textContent=agilityHeroes[20].name;
nyxAssassinImage.src=agilityHeroes[20].image;
pangolier.textContent=agilityHeroes[21].name;
pangolierImage.src=agilityHeroes[21].image;
phantomAssassin.textContent=agilityHeroes[22].name;
phantomAssassinImage.src=agilityHeroes[22].image;
phantomLancer.textContent=agilityHeroes[23].name;
phantomLancerImage.src=agilityHeroes[23].image;
razor.textContent=agilityHeroes[24].name;
razorImage.src=agilityHeroes[24].image;
riki.textContent=agilityHeroes[25].name;
rikiImage.src=agilityHeroes[25].image;
shadowFiend.textContent=agilityHeroes[26].name;
shadowFiendImage.src=agilityHeroes[26].image;
slark.textContent=agilityHeroes[27].name;
slarkImage.src=agilityHeroes[27].image;
sniper.textContent=agilityHeroes[28].name;
sniperImage.src=agilityHeroes[28].image;
spectre.textContent=agilityHeroes[29].name;
spectreImage.src=agilityHeroes[29].image;
templarAssassin.textContent=agilityHeroes[30].name;
templarAssassinImage.src=agilityHeroes[30].image;
terrorblade.textContent=agilityHeroes[31].name;
terrorbladeImage.src=agilityHeroes[31].image;
trollWarlord.textContent=agilityHeroes[32].name;
trollWarlordImage.src=agilityHeroes[32].image;
ursa.textContent=agilityHeroes[33].name;
ursaImage.src=agilityHeroes[33].image;
vengefulSpirit.textContent=agilityHeroes[34].name;
vengefulSpiritImage.src=agilityHeroes[34].image;
venomancer.textContent=agilityHeroes[35].name;
venomancerImage.src=agilityHeroes[35].image;
viper.textContent=agilityHeroes[36].name;
viperImage.src=agilityHeroes[36].image;
weaver.textContent=agilityHeroes[37].name;
weaverImage.src=agilityHeroes[37].image;








//// -----------------------------Intelligence-----------------------------------------------------

/// filters-----------------------------------------------

const intelligenceHeroes = heroes.filter((hero) => {
    if(hero.attribute=='intelligence'){
        return true;
    }
});

function IntelligenceCarryFilter(x){
    for (i=0; i<x.length; i++){
       // console.log(i);
       // console.log(x[i].name);
        if(x[i].carry == false){
        let sample = document.querySelector(`.intelligence > .frame:nth-of-type(${i+1})`);
        if(!toggled){
            sample.classList.add('carry');
        }else{
            sample.classList.remove('carry');
        }
        }
    }
}

function IntelligenceSupportFilter(x){
    for (i=0; i<x.length; i++){
        if(x[i].support == false){
        let sample = document.querySelector(`.intelligence > .frame:nth-of-type(${i+1})`);
        if(!toggled2){
            sample.classList.add('carry');
        }else{
            sample.classList.remove('carry');
        }
        }
    }
}

///// ---------------------------- Intelligence non-filters----------------------------------------

let ancientApparition = document.querySelector('.intelligence > div:nth-child(1) > p');
let ancientApparitionImage = document.querySelector('.intelligence > div:nth-child(1) > img');
let bane = document.querySelector('.intelligence > div:nth-child(2) > p');
let baneImage = document.querySelector('.intelligence > div:nth-child(2) > img');
let batrider = document.querySelector('.intelligence > div:nth-child(3) > p');
let batriderImage = document.querySelector('.intelligence > div:nth-child(3) > img');
let chen = document.querySelector('.intelligence > div:nth-child(4) > p');
let chenImage = document.querySelector('.intelligence > div:nth-child(4) > img');
let crystalMaiden = document.querySelector('.intelligence > div:nth-child(5) > p');
let crystalMaidenImage = document.querySelector('.intelligence > div:nth-child(5) > img');
let darkSeer = document.querySelector('.intelligence > div:nth-child(6) > p');
let darkSeerImage = document.querySelector('.intelligence > div:nth-child(6) > img');
let darkWillow = document.querySelector('.intelligence > div:nth-child(7) > p');
let darkWillowImage = document.querySelector('.intelligence > div:nth-child(7) > img');
let dazzle = document.querySelector('.intelligence > div:nth-child(8) > p');
let dazzleImage = document.querySelector('.intelligence > div:nth-child(8) > img');
let deathProphet = document.querySelector('.intelligence > div:nth-child(9) > p');
let deathProphetImage = document.querySelector('.intelligence > div:nth-child(9) > img');
let disruptor = document.querySelector('.intelligence > div:nth-child(10) > p');
let disruptorImage = document.querySelector('.intelligence > div:nth-child(10) > img');
let enchantress = document.querySelector('.intelligence > div:nth-child(11) > p');
let enchantressImage = document.querySelector('.intelligence > div:nth-child(11) > img');
let enigma = document.querySelector('.intelligence > div:nth-child(12) > p');
let enigmaImage = document.querySelector('.intelligence > div:nth-child(12) > img');
let grimstroke = document.querySelector('.intelligence > div:nth-child(13) > p');
let grimstrokeImage = document.querySelector('.intelligence > div:nth-child(13) > img');
let invoker = document.querySelector('.intelligence > div:nth-child(14) > p');
let invokerImage = document.querySelector('.intelligence > div:nth-child(14) > img');
let jakiro = document.querySelector('.intelligence > div:nth-child(15) > p');
let jakiroImage = document.querySelector('.intelligence > div:nth-child(15) > img');
let keeperOfTheLight = document.querySelector('.intelligence > div:nth-child(16) > p');
let keeperOfTheLightImage = document.querySelector('.intelligence > div:nth-child(16) > img');
let leshrac = document.querySelector('.intelligence > div:nth-child(17) > p');
let leshracImage = document.querySelector('.intelligence > div:nth-child(17) > img');
let lich = document.querySelector('.intelligence > div:nth-child(18) > p');
let lichImage = document.querySelector('.intelligence > div:nth-child(18) > img');
let lina = document.querySelector('.intelligence > div:nth-child(19) > p');
let linaImage = document.querySelector('.intelligence > div:nth-child(19) > img');
let lion = document.querySelector('.intelligence > div:nth-child(20) > p');
let lionImage = document.querySelector('.intelligence > div:nth-child(20) > img');
let naturesProphet = document.querySelector('.intelligence > div:nth-child(21) > p');
let naturesProphetImage = document.querySelector('.intelligence > div:nth-child(21) > img');
let necrophos = document.querySelector('.intelligence > div:nth-child(22) > p');
let necrophosImage = document.querySelector('.intelligence > div:nth-child(22) > img');
let ogreMagi = document.querySelector('.intelligence > div:nth-child(23) > p');
let ogreMagiImage = document.querySelector('.intelligence > div:nth-child(23) > img');
let oracle = document.querySelector('.intelligence > div:nth-child(24) > p');
let oracleImage = document.querySelector('.intelligence > div:nth-child(24) > img');
let outworldDestroyer = document.querySelector('.intelligence > div:nth-child(25) > p');
let outworldDestroyerImage = document.querySelector('.intelligence > div:nth-child(25) > img');
let puck = document.querySelector('.intelligence > div:nth-child(26) > p');
let puckImage = document.querySelector('.intelligence > div:nth-child(26) > img');
let pugna = document.querySelector('.intelligence > div:nth-child(27) > p');
let pugnaImage = document.querySelector('.intelligence > div:nth-child(27) > img');
let queenOfPain = document.querySelector('.intelligence > div:nth-child(28) > p');
let queenOfPainImage = document.querySelector('.intelligence > div:nth-child(28) > img');
let rubick = document.querySelector('.intelligence > div:nth-child(29) > p');
let rubickImage = document.querySelector('.intelligence > div:nth-child(29) > img');
let shadowDemon = document.querySelector('.intelligence > div:nth-child(30) > p');
let shadowDemonImage = document.querySelector('.intelligence > div:nth-child(30) > img');
let shadowShaman = document.querySelector('.intelligence > div:nth-child(31) > p');
let shadowShamanImage = document.querySelector('.intelligence > div:nth-child(31) > img');
let silencer = document.querySelector('.intelligence > div:nth-child(32) > p');
let silencerImage = document.querySelector('.intelligence > div:nth-child(32) > img');
let skywrathMage = document.querySelector('.intelligence > div:nth-child(33) > p');
let skywrathMageImage = document.querySelector('.intelligence > div:nth-child(33) > img');
let stormSpirit = document.querySelector('.intelligence > div:nth-child(34) > p');
let stormSpiritImage = document.querySelector('.intelligence > div:nth-child(34) > img');
let techies = document.querySelector('.intelligence > div:nth-child(35) > p');
let techiesImage = document.querySelector('.intelligence > div:nth-child(35) > img');
let tinker = document.querySelector('.intelligence > div:nth-child(36) > p');
let tinkerImage = document.querySelector('.intelligence > div:nth-child(36) > img');
let visage = document.querySelector('.intelligence > div:nth-child(37) > p');
let visageImage = document.querySelector('.intelligence > div:nth-child(37) > img');
let voidSpirit = document.querySelector('.intelligence > div:nth-child(38) > p');
let voidSpiritImage = document.querySelector('.intelligence > div:nth-child(38) > img');
let warlock = document.querySelector('.intelligence > div:nth-child(39) > p');
let warlockImage = document.querySelector('.intelligence > div:nth-child(39) > img');
let windranger = document.querySelector('.intelligence > div:nth-child(40) > p');
let windrangerImage = document.querySelector('.intelligence > div:nth-child(40) > img');
let winterWyvern = document.querySelector('.intelligence > div:nth-child(41) > p');
let winterWyvernImage = document.querySelector('.intelligence > div:nth-child(41) > img');
let witchDoctor = document.querySelector('.intelligence > div:nth-child(42) > p');
let witchDoctorImage = document.querySelector('.intelligence > div:nth-child(42) > img');
let zeus = document.querySelector('.intelligence > div:nth-child(43) > p');
let zeusImage = document.querySelector('.intelligence > div:nth-child(43) > img');

ancientApparition.textContent=intelligenceHeroes[0].name;
ancientApparitionImage.src=intelligenceHeroes[0].image;
bane.textContent=intelligenceHeroes[1].name;
baneImage.src=intelligenceHeroes[1].image;
batrider.textContent=intelligenceHeroes[2].name;
batriderImage.src=intelligenceHeroes[2].image;
chen.textContent=intelligenceHeroes[3].name;
chenImage.src=intelligenceHeroes[3].image;
crystalMaiden.textContent=intelligenceHeroes[4].name;
crystalMaidenImage.src=intelligenceHeroes[4].image;
darkSeer.textContent=intelligenceHeroes[5].name;
darkSeerImage.src=intelligenceHeroes[5].image;
darkWillow.textContent=intelligenceHeroes[6].name;
darkWillowImage.src=intelligenceHeroes[6].image;
dazzle.textContent=intelligenceHeroes[7].name;
dazzleImage.src=intelligenceHeroes[7].image;
deathProphet.textContent=intelligenceHeroes[8].name;
deathProphetImage.src=intelligenceHeroes[8].image;
disruptor.textContent=intelligenceHeroes[9].name;
disruptorImage.src=intelligenceHeroes[9].image;
enchantress.textContent=intelligenceHeroes[10].name;
enchantressImage.src=intelligenceHeroes[10].image;
enigma.textContent=intelligenceHeroes[11].name;
enigmaImage.src=intelligenceHeroes[11].image;
grimstroke.textContent=intelligenceHeroes[12].name;
grimstrokeImage.src=intelligenceHeroes[12].image;
invoker.textContent=intelligenceHeroes[13].name;
invokerImage.src=intelligenceHeroes[13].image;
jakiro.textContent=intelligenceHeroes[14].name;
jakiroImage.src=intelligenceHeroes[14].image;
keeperOfTheLight.textContent=intelligenceHeroes[15].name;
keeperOfTheLightImage.src=intelligenceHeroes[15].image;
leshrac.textContent=intelligenceHeroes[16].name;
leshracImage.src=intelligenceHeroes[16].image;
lich.textContent=intelligenceHeroes[17].name;
lichImage.src=intelligenceHeroes[17].image;
lina.textContent=intelligenceHeroes[18].name;
linaImage.src=intelligenceHeroes[18].image;
lion.textContent=intelligenceHeroes[19].name;
lionImage.src=intelligenceHeroes[19].image;
naturesProphet.textContent=intelligenceHeroes[20].name;
naturesProphetImage.src=intelligenceHeroes[20].image;
necrophos.textContent=intelligenceHeroes[21].name;
necrophosImage.src=intelligenceHeroes[21].image;
ogreMagi.textContent=intelligenceHeroes[22].name;
ogreMagiImage.src=intelligenceHeroes[22].image;
oracle.textContent=intelligenceHeroes[23].name;
oracleImage.src=intelligenceHeroes[23].image;
outworldDestroyer.textContent=intelligenceHeroes[24].name;
outworldDestroyerImage.src=intelligenceHeroes[24].image;
puck.textContent=intelligenceHeroes[25].name;
puckImage.src=intelligenceHeroes[25].image;
pugna.textContent=intelligenceHeroes[26].name;
pugnaImage.src=intelligenceHeroes[26].image;
queenOfPain.textContent=intelligenceHeroes[27].name;
queenOfPainImage.src=intelligenceHeroes[27].image;
rubick.textContent=intelligenceHeroes[28].name;
rubickImage.src=intelligenceHeroes[28].image;
shadowDemon.textContent=intelligenceHeroes[29].name;
shadowDemonImage.src=intelligenceHeroes[29].image;
shadowShaman.textContent=intelligenceHeroes[30].name;
shadowShamanImage.src=intelligenceHeroes[30].image;
silencer.textContent=intelligenceHeroes[31].name;
silencerImage.src=intelligenceHeroes[31].image;
skywrathMage.textContent=intelligenceHeroes[32].name;
skywrathMageImage.src=intelligenceHeroes[32].image;
stormSpirit.textContent=intelligenceHeroes[33].name;
stormSpiritImage.src=intelligenceHeroes[33].image;
techies.textContent=intelligenceHeroes[34].name;
techiesImage.src=intelligenceHeroes[34].image;
tinker.textContent=intelligenceHeroes[35].name;
tinkerImage.src=intelligenceHeroes[35].image;
visage.textContent=intelligenceHeroes[36].name;
visageImage.src=intelligenceHeroes[36].image;
voidSpirit.textContent=intelligenceHeroes[37].name;
voidSpiritImage.src=intelligenceHeroes[37].image;
warlock.textContent=intelligenceHeroes[38].name;
warlockImage.src=intelligenceHeroes[38].image;
windranger.textContent=intelligenceHeroes[39].name;
windrangerImage.src=intelligenceHeroes[39].image;
winterWyvern.textContent=intelligenceHeroes[40].name;
winterWyvernImage.src=intelligenceHeroes[40].image;
witchDoctor.textContent=intelligenceHeroes[41].name;
witchDoctorImage.src=intelligenceHeroes[41].image;
zeus.textContent=intelligenceHeroes[42].name;
zeusImage.src=intelligenceHeroes[42].image;

/////  intelligence filters -----------------------------------------





////// filters ------------------------------------------------------------

function FilterAllCarry(e){
    StrengthCarryFilter(strengthHeroes);
    AgilityCarryFilter(agilityHeroes);
    IntelligenceCarryFilter(intelligenceHeroes);
}

function FilterAllSupport(e){
    StrengthSupportFilter(strengthHeroes);
    AgilitySupportFilter(agilityHeroes);
    IntelligenceSupportFilter(intelligenceHeroes);
}




///// switch functions


function carryToggle(e){
    FilterAllCarry(e);
    if (!toggled){
        toggled=true; 
    }else{
        toggled=false;   
    }
}

function supportToggle(e){
    FilterAllSupport(e);
    if (!toggled2){
        toggled2=true; 
    }else{
        toggled2=false;   
    }
}

function nameChange(){
    /////////////strength
    alchemistImage.src="shrek.jpeg";
    axeImage.src="ogceb2.jpg";
    brewmasterImage.src="kungfupanda.jpeg";
    centaurImage.src="terry.png";
    chaosKnightImage.src="butters.jpeg";
    dragonKnightImage.src="Dota-anime-Dragons-Blood-Dragon-Knight-Netflix.jpeg";
    earthSpiritImage.src="irongiant.jpeg";
    earthshakerImage.src="chewy.jpeg";
    legionImage.src="pharah.png";
    magnusImage.src="Manny.png";
    omniknightImage.src="obi-wan.jpeg";
    pudgeImage.src="roadhog.jpeg";
    tinyImage.src="rock.jpeg";
    treantImage.src="groot.png";
    //////////agility
    bountyHunterImage.src="meowth.jpeg";
    hoodwinkImage.src="hopps.png";
    loneDruidImage.src="liamneeson.jpeg";
    meepoImage.src="steve_buscemi.jpeg";
    nagaSirenImage.src="ashoka_tanp.jpeg";
    pangolierImage.src="pussnboots.jpeg";
    phantomLancerImage.src="Tony.png";
    sniperImage.src="Torbjorn.png";
    /////////////intelligence
    chenImage.src="li_shang_mulan.png";
    crystalMaidenImage.src="elsa.jpeg";
    enchantressImage.src="bambi.jpeg";
    invokerImage.src="lucius.jpeg";
    keeperOfTheLightImage.src="merlin.jpeg";
    ogreMagiImage.src="majinbuu.jpeg";
    shadowShamanImage.src="scorpion.png";
    skywrathMageImage.src="Shaiapouf.png";
    stormSpiritImage.src="genie.jpeg";
}
function nameRevert(){
    ////////////strength
    alchemistImage.src=strengthHeroes[1].image;
    axeImage.src=strengthHeroes[2].image;
    brewmasterImage.src=strengthHeroes[4].image;
    centaurImage.src=strengthHeroes[6].image;
    chaosKnightImage.src=strengthHeroes[7].image;
    dragonKnightImage.src=strengthHeroes[11].image;
    earthSpiritImage.src=strengthHeroes[12].image;
    earthshakerImage.src=strengthHeroes[13].image;
    legionImage.src=strengthHeroes[18].image;
    magnusImage.src=strengthHeroes[21].image;    
    omniknightImage.src=strengthHeroes[25].image;
    pudgeImage.src=strengthHeroes[28].image;
    tinyImage.src=strengthHeroes[36].image;
    treantImage.src=strengthHeroes[37].image;
    
    /////////////agility
    bountyHunterImage.src=agilityHeroes[3].image;
    hoodwinkImage.src=agilityHeroes[10].image;
    loneDruidImage.src=agilityHeroes[12].image;
    meepoImage.src=agilityHeroes[15].image;
    nagaSirenImage.src=agilityHeroes[19].image;
    pangolierImage.src=agilityHeroes[21].image;
    phantomLancerImage.src=agilityHeroes[23].image;
    sniperImage.src=agilityHeroes[28].image;
    
    //intelligence
    chenImage.src=intelligenceHeroes[3].image;
    crystalMaidenImage.src=intelligenceHeroes[4].image;
    enchantressImage.src=intelligenceHeroes[10].image;
    invokerImage.src=intelligenceHeroes[13].image;
    keeperOfTheLightImage.src=intelligenceHeroes[15].image;
    ogreMagiImage.src=intelligenceHeroes[22].image;
    shadowShamanImage.src=intelligenceHeroes[30].image;
    skywrathMageImage.src=intelligenceHeroes[32].image;
    stormSpiritImage.src=intelligenceHeroes[33].image;
}

onSwitch.addEventListener('click',nameChange);
offSwitch.addEventListener('click',nameRevert);
carryButton.addEventListener('click',carryToggle);
supportButton.addEventListener('click',supportToggle);


/* ------------pulled off location div with index from array
function StrengthCarryFilter(x){
    for (i=0; i<x.length; i++){
        console.log(i);
        console.log(x[i].name);
        let sample = document.querySelector(`.frame:nth-of-type(${i+1})`);
        sample.style.opacity = '.4';
    }
}
*/
