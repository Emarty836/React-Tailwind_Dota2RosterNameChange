import './App.css';
import React, {useState} from 'react';
import ToggleButton from './ToggleButton';
import FilterButtons from './FilterButtons';
// Imported Dota 2 Heroes by type
import { alchemist, axe, bristleback, centaur, chaosknight, dawnbreaker, doom, dragonKnight, earthSpirit, earthShaker, elderTitan, huskar, kunkka, legion, lifestealer, mars, nightStalker, ogreMagi, omniknight, primal, pudge, slardar, spiritBreaker, sven, tidehunter, tiny, treant, tusk, underlord, undying, wraithKing, pharah} from './images';
import { antiMage, arcWarden, bloodseeker, bounty, clinkz, drowRanger, emberSpirit, facelessVoid, gyrocopter, hoodwink, juggernaut, luna, medusa, meepo, monkeyKing, morphling, nagaSiren, PA, PL, razor, riki, shadowFiend, slark, sniper, spectre, TA, terrorblade, trollWarlord, ursa, viper, weaver} from './images';
import { AA, CM, deathProphet, disruptor, enchantress, grimstroke, jakiro, KOTL, leshrac, lich, lina, lion, muerta, natures, necrophos, oracle, OD, puck, pugna, QoP, rubick, shadowDemon, shadowShaman, silencer, skywrath, stormSpirit, tinker, warlock, witchDoctor, zeus} from './images';
import { abaddon, bane, batrider, beastmaster, brewmaster, broodmother, chen, clockwerk, darkSeer, darkWillow, dazzle, engima, invoker, io, loneDruid, lycan, magnus, marci, mirana, nyx, pangolier, pheonix, sandKing, snapfire, techies, timbersaw, vengeful, venomancer, visage, voidSpirit, windranger, winterWyvern} from './images';
// Imported Fictonal charactors that look like dota 2 heroes
import { ashoka, bambi, butters, chewy, davion, elsa, generalGrievous, genie, groot, hopps, ironGiant, panda, liShang, liamNeeson, lucius, majinBuu, manny, meowth, merlin, obiwan, ceb, pussNboots, roadhog, rock, scorpion, shaiapouf, shrek, steveBuscemi, terry, tony, torbjorn} from './images';

const App = () => {

  const [showImage, setShowImage] = useState(false);
  const [filterCarry, setfilterCarry] = useState(false);
  const [filterSupport, setfilterSupport] = useState(false);
  const toggleCarry = () => {
       setfilterCarry(!filterCarry);
    };
    const toggleSupport = () => {
      setfilterSupport(!filterSupport);
   };

  return (
    <>
    {/* START */}
    <div id='titleBar'>
      <h1 id='projectTitle'>DOTA 2 ROSTER</h1>
      
      <ToggleButton
        onToggleOn={() => {
          setShowImage(true);
        }}
        onToggleOff={() => {
          setShowImage(false);
        }}
      />
      <span id='lower'>Note: I do not own these pictures and this website is not for commercial purposes, just for personal use.</span>
      </div>

{/* showCarry, showSupport, showCarry || showSupport*/}
<section className="heroRoster">
        <div className="strength">
            <div className='frame'><img src={showImage ? shrek: alchemist} alt={showImage ? 'image 2' : 'image 1'}/><p>Alchemist</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? ceb: axe} alt={showImage ? 'image 2' : 'image 1'}/><p>Axe</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={bristleback} alt={showImage ? 'image 2' : 'image 1'}/><p>Bristleback</p></div>
            <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={showImage ? terry: centaur} alt={showImage ? 'image 2' : 'image 1'}/><p>Centaur Warrunner</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? butters: chaosknight} alt={showImage ? 'image 2' : 'image 1'}/><p>Chaos Knight</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={dawnbreaker} alt={showImage ? 'image 2' : 'image 1'}/><p>Dawnbreaker</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={doom} alt={showImage ? 'image 2' : 'image 1'}/><p>Doom</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? davion: dragonKnight} alt={showImage ? 'image 2' : 'image 1'}/><p>Dragon Knight</p></div>
            <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={showImage ? ironGiant: earthSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>Earth Spirit</p></div>
            <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? chewy: earthShaker} alt={showImage ? 'image 2' : 'image 1'}/><p>Earthshaker</p></div>
            <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={elderTitan} alt={showImage ? 'image 2' : 'image 1'}/><p>Elder Titan</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={huskar} alt={showImage ? 'image 2' : 'image 1'}/><p>Huskar</p></div>
            <div className='frame'><img src={kunkka} alt={showImage ? 'image 2' : 'image 1'}/><p>Kunkka</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? pharah: legion} alt={showImage ? 'image 2' : 'image 1'}/><p>Legion Commander</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={lifestealer} alt={showImage ? 'image 2' : 'image 1'}/><p>Lifestealer</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={mars} alt={showImage ? 'image 2' : 'image 1'}/><p>Mars</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={nightStalker} alt={showImage ? 'image 2' : 'image 1'}/><p>Night Stalker</p></div>
            <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? majinBuu: ogreMagi} alt={showImage ? 'image 2' : 'image 1'}/><p>Ogre Magi</p></div>
            <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? obiwan: omniknight} alt={showImage ? 'image 2' : 'image 1'}/><p>Omniknight</p></div>
            <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={primal} alt={showImage ? 'image 2' : 'image 1'}/><p>Primal Beast</p></div>
            <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={showImage ? roadhog: pudge} alt={showImage ? 'image 2' : 'image 1'}/><p>Pudge</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={slardar} alt={showImage ? 'image 2' : 'image 1'}/><p>Slardar</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={spiritBreaker} alt={showImage ? 'image 2' : 'image 1'}/><p>Spirit Breaker</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? generalGrievous: sven} alt={showImage ? 'image 2' : 'image 1'}/><p>Sven</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={tidehunter} alt={showImage ? 'image 2' : 'image 1'}/><p>Tidehunter</p></div>
            <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? rock: tiny} alt={showImage ? 'image 2' : 'image 1'}/><p>Tiny</p></div>
            <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? groot: treant} alt={showImage ? 'image 2' : 'image 1'}/><p>Treant Protector</p></div>
            <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={tusk} alt={showImage ? 'image 2' : 'image 1'}/><p>Tusk</p></div>
            <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={underlord} alt={showImage ? 'image 2' : 'image 1'}/><p>Underlord</p></div>
            <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={undying} alt={showImage ? 'image 2' : 'image 1'}/><p>Undying</p></div>
            <div className='frame'><img src={wraithKing} alt={showImage ? 'image 2' : 'image 1'}/><p>Wraith King</p></div>
        </div>
        <div class="agilities">
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={antiMage} alt={showImage ? 'image 2' : 'image 1'}/><p>Anti Mage</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={arcWarden} alt={showImage ? 'image 2' : 'image 1'}/><p>Arc Warden</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={bloodseeker} alt={showImage ? 'image 2' : 'image 1'}/><p>Bloodseeker</p></div>
          <div className='frame'><img className={filterSupport || filterCarry ? 'filterHighlight ' : ''}  src={showImage ? meowth : bounty} alt={showImage ? 'image 2' : 'image 1'}/><p>Bounty Hunter</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={clinkz} alt={showImage ? 'image 2' : 'image 1'}/><p>Clinkz</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={drowRanger} alt={showImage ? 'image 2' : 'image 1'}/><p>Drow Ranger</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={emberSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>Ember Spirit</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={facelessVoid} alt={showImage ? 'image 2' : 'image 1'}/><p>Faceless Void</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={gyrocopter} alt={showImage ? 'image 2' : 'image 1'}/><p>Gyrocopter</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? hopps : hoodwink} alt={showImage ? 'image 2' : 'image 1'}/><p>Hoodwink</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={juggernaut} alt={showImage ? 'image 2' : 'image 1'}/><p>Juggernaut</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={luna} alt={showImage ? 'image 2' : 'image 1'}/><p>Luna</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={medusa} alt={showImage ? 'image 2' : 'image 1'}/><p>Medusa</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? steveBuscemi : meepo} alt={showImage ? 'image 2' : 'image 1'}/><p>Meepo</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={monkeyKing} alt={showImage ? 'image 2' : 'image 1'}/><p>Monkey King</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={morphling} alt={showImage ? 'image 2' : 'image 1'}/><p>Morphling</p></div>
          <div className='frame'><img src={showImage ? ashoka : nagaSiren} alt={showImage ? 'image 2' : 'image 1'}/><p>Naga Siren</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={PA} alt={showImage ? 'image 2' : 'image 1'}/><p>Phantom Assassin</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? tony : PL} alt={showImage ? 'image 2' : 'image 1'}/><p>Phantom Lancer</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={razor} alt={showImage ? 'image 2' : 'image 1'}/><p>Razor</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={riki} alt={showImage ? 'image 2' : 'image 1'}/><p>Riki</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={shadowFiend} alt={showImage ? 'image 2' : 'image 1'}/><p>Shadow Fiend</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={slark} alt={showImage ? 'image 2' : 'image 1'}/><p>Slark</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? torbjorn : sniper} alt={showImage ? 'image 2' : 'image 1'}/><p>Sniper</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={spectre} alt={showImage ? 'image 2' : 'image 1'}/><p>Spectre</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={TA} alt={showImage ? 'image 2' : 'image 1'}/><p>Templar Assassin</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={terrorblade} alt={showImage ? 'image 2' : 'image 1'}/><p>Terrorblade</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={trollWarlord} alt={showImage ? 'image 2' : 'image 1'}/><p>Troll Warlord</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={ursa} alt={showImage ? 'image 2' : 'image 1'}/><p>Ursa</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={viper} alt={showImage ? 'image 2' : 'image 1'}/><p>Viper</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={weaver} alt={showImage ? 'image 2' : 'image 1'}/><p>Weaver</p></div>
        </div>


        <div class="intelligence">
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={AA} alt={showImage ? 'image 2' : 'image 1'}/><p>Ancient Apparition</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? elsa : CM} alt={showImage ? 'image 2' : 'image 1'}/><p>Crystal Maiden</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={deathProphet} alt={showImage ? 'image 2' : 'image 1'}/><p>Death Prophet</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={disruptor} alt={showImage ? 'image 2' : 'image 1'}/><p>Disruptor</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? bambi : enchantress} alt={showImage ? 'image 2' : 'image 1'}/><p>Enchantress</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={grimstroke} alt={showImage ? 'image 2' : 'image 1'}/><p>Grimstroke</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={jakiro} alt={showImage ? 'image 2' : 'image 1'}/><p>Jakiro</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? merlin : KOTL} alt={showImage ? 'image 2' : 'image 1'}/><p>Keeper of the Light</p></div>
          <div className='frame'><img src={leshrac} alt={showImage ? 'image 2' : 'image 1'}/><p>Leshrac</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={lich} alt={showImage ? 'image 2' : 'image 1'}/><p>Lich</p></div>
          <div className='frame'><img src={lina} alt={showImage ? 'image 2' : 'image 1'}/><p>Lina</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={lion} alt={showImage ? 'image 2' : 'image 1'}/><p>Lion</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={muerta} alt={showImage ? 'image 2' : 'image 1'}/><p>Muerta</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={natures} alt={showImage ? 'image 2' : 'image 1'}/><p>Nature's Prophet</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={necrophos} alt={showImage ? 'image 2' : 'image 1'}/><p>Necrophos</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={oracle} alt={showImage ? 'image 2' : 'image 1'}/><p>Oracle</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={OD} alt={showImage ? 'image 2' : 'image 1'}/><p>Outerworld Destroyer</p></div>
          <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={puck} alt={showImage ? 'image 2' : 'image 1'}/><p>Puck</p></div>
          <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={pugna} alt={showImage ? 'image 2' : 'image 1'}/><p>Pugna</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={QoP} alt={showImage ? 'image 2' : 'image 1'}/><p>Queen of Pain</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={rubick} alt={showImage ? 'image 2' : 'image 1'}/><p>Rubick</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={shadowDemon} alt={showImage ? 'image 2' : 'image 1'}/><p>Shadow Demon</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? scorpion : shadowShaman} alt={showImage ? 'image 2' : 'image 1'}/><p>Shadow Shaman</p></div>
          <div className='frame'><img src={silencer} alt={showImage ? 'image 2' : 'image 1'}/><p>Silencer</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? shaiapouf : skywrath} alt={showImage ? 'image 2' : 'image 1'}/><p>Skywrath Mage</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={stormSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>Storm Spirit</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={tinker} alt={showImage ? 'image 2' : 'image 1'}/><p>Tinker</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={warlock} alt={showImage ? 'image 2' : 'image 1'}/><p>Warlock</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={witchDoctor} alt={showImage ? 'image 2' : 'image 1'}/><p>Witch Doctor</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={zeus} alt={showImage ? 'image 2' : 'image 1'}/><p>Zeus</p></div>
        </div>
        <div class='universal'>
        <div className='frame'><img src={abaddon} alt={showImage ? 'image 2' : 'image 1'}/><p>Abaddon</p></div>
        <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={bane} alt={showImage ? 'image 2' : 'image 1'}/><p>Bane</p></div>
        <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={batrider} alt={showImage ? 'image 2' : 'image 1'}/><p>Batrider</p></div>
        <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={beastmaster} alt={showImage ? 'image 2' : 'image 1'}/><p>Beastmaster</p></div>
        <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? panda : brewmaster} alt={showImage ? 'image 2' : 'image 1'}/><p>Brewmaster</p></div>
        <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={broodmother} alt={showImage ? 'image 2' : 'image 1'}/><p>Broodmother</p></div>
        <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={showImage ? liShang : chen} alt={showImage ? 'image 2' : 'image 1'}/><p>Chen</p></div>
        <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={clockwerk} alt={showImage ? 'image 2' : 'image 1'}/><p>Clockwerk</p></div>
        <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={darkSeer} alt={showImage ? 'image 2' : 'image 1'}/><p>Dark Seer</p></div>
        <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={darkWillow} alt={showImage ? 'image 2' : 'image 1'}/><p>Dark Willow</p></div>
        <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={dazzle} alt={showImage ? 'image 2' : 'image 1'}/><p>Dazzle</p></div>
        <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''}  src={engima} alt={showImage ? 'image 2' : 'image 1'}/><p>Enigma</p></div>
        <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? lucius : invoker} alt={showImage ? 'image 2' : 'image 1'}/><p>Invoker</p></div>
        <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={io} alt={showImage ? 'image 2' : 'image 1'}/><p>Io</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? liamNeeson : loneDruid} alt={showImage ? 'image 2' : 'image 1'}/><p>Lone Druid</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''} src={lycan} alt={showImage ? 'image 2' : 'image 1'}/><p>Lycan</p></div>
          <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''} src={showImage ? manny : magnus} alt={showImage ? 'image 2' : 'image 1'}/><p>Magnus</p></div>
          <div className='frame'><img src={marci} alt={showImage ? 'image 2' : 'image 1'}/><p>Marci</p></div>
          <div className='frame'><img src={mirana} alt={showImage ? 'image 2' : 'image 1'}/><p>Mirana</p></div>
          <div className='frame'><img className={filterSupport || filterCarry ? 'filterHighlight ' : ''}  src={nyx} alt={showImage ? 'image 2' : 'image 1'}/><p>Nyx Assassin</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''}  src={showImage ? pussNboots : pangolier} alt={showImage ? 'image 2' : 'image 1'}/><p>Pangolier</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''} src={pheonix} alt={showImage ? 'image 2' : 'image 1'}/><p>Pheonix</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''} src={sandKing} alt={showImage ? 'image 2' : 'image 1'}/><p>Sand King</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''} src={snapfire} alt={showImage ? 'image 2' : 'image 1'}/><p>Snapfire</p></div>
          <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''} src={techies} alt={showImage ? 'image 2' : 'image 1'}/><p>Techies</p></div>
          <div className='frame'><img className={filterCarry || filterSupport ? 'filterHighlight ' : ''} src={timbersaw} alt={showImage ? 'image 2' : 'image 1'}/><p>Timbersaw</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={vengeful} alt={showImage ? 'image 2' : 'image 1'}/><p>Vengeful Spirit</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''}  src={venomancer} alt={showImage ? 'image 2' : 'image 1'}/><p>Venomancer</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''} src={visage} alt={showImage ? 'image 2' : 'image 1'}/><p>Visage</p></div>
          <div className='frame'><img className={filterSupport ? 'filterHighlight ' : ''} src={voidSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>Void Spirit</p></div>
          <div className='frame'><img src={windranger} alt={showImage ? 'image 2' : 'image 1'}/><p>Windranger</p></div>
          <div className='frame'><img className={filterCarry ? 'filterHighlight ' : ''} src={winterWyvern} alt={showImage ? 'image 2' : 'image 1'}/><p>Winter Wyvern</p></div>
          </div>
        </section>
        
      
{/* Filter Section      */}
      <FilterButtons
      carry={()=>{
        toggleCarry();
      }}
      support={()=>{
        toggleSupport();
      }}
      />
      {/* END */}
    </>
  );
};

export default App;


