// import './App.css';  ---  This is my regular CSS files before trying Tailwind!!! 
import './AppTail.css';
import React, {useState, useEffect} from 'react';
import ToggleButton from './ToggleButton';
import FilterButtons from './FilterButtons';
// Imported Dota 2 Heroes by type
import { alchemist, axe, bristleback, centaur, chaosknight, dawnbreaker, doom, dragonKnight, earthSpirit, earthShaker, elderTitan, huskar, kunkka, legion, lifestealer, mars, nightStalker, ogreMagi, omniknight, primal, pudge, slardar, spiritBreaker, sven, tidehunter, tiny, treant, tusk, underlord, undying, wraithKing, pharah} from './images';
import { antiMage, arcWarden, bloodseeker, bounty, clinkz, drowRanger, emberSpirit, facelessVoid, gyrocopter, hoodwink, juggernaut, kez, luna, medusa, meepo, monkeyKing, morphling, nagaSiren, PA, PL, razor, riki, shadowFiend, slark, sniper, spectre, TA, terrorblade, trollWarlord, ursa, viper, weaver} from './images';
import { AA, CM, deathProphet, disruptor, enchantress, grimstroke, jakiro, KOTL, leshrac, lich, lina, lion, muerta, natures, necrophos, oracle, OD, puck, pugna, QoP, ringmaster, rubick, shadowDemon, shadowShaman, silencer, skywrath, stormSpirit, tinker, warlock, witchDoctor, zeus} from './images';
import { abaddon, bane, batrider, beastmaster, brewmaster, broodmother, chen, clockwerk, darkSeer, darkWillow, dazzle, engima, invoker, io, loneDruid, lycan, magnus, marci, mirana, nyx, pangolier, pheonix, sandKing, snapfire, techies, timbersaw, vengeful, venomancer, visage, voidSpirit, windranger, winterWyvern} from './images';
// Imported Fictonal charactors that look like dota 2 heroes
import { ashoka, bambi, butters, chewy, davion, elsa, falco, generalGrievous, genie, groot, hopps, ironGiant, panda, liShang, liamNeeson, lucius, majinBuu, manny, meowth, merlin, obiwan, ceb, pussNboots, roadhog, rock, scorpion, shaiapouf, shrek, steveBuscemi, terry, tony, torbjorn, wonka} from './images';

const App = () => {

  const [showImage, setShowImage] = useState(false);
  const [filterCarry, setfilterCarry] = useState(false);
  const [filterSupport, setfilterSupport] = useState(false);
  const [filterHealer, setfilterHealer] = useState(false);
  const [selectedCarry, setSelectedCarry] = useState(null);
  const [selectedSupport, setSelectedSupport] = useState(null);
  const [selectedHealer, setSelectedHealer] = useState(null);
  const toggleCarry = () => {
       setfilterCarry(!filterCarry);
       setSelectedCarry(selectedCarry === 'carry' ? null : 'carry');
    };
  const toggleSupport = () => {
      setfilterSupport(!filterSupport);
      setSelectedSupport(selectedSupport === 'support' ? null : 'support');
   };
   const toggleHealer = () => {
      setfilterHealer(!filterHealer);
      setSelectedHealer(selectedHealer === 'healer' ? null : 'healer');
 };

 ///////////////////// - I wanted to add API calls to this repo instead of simply typing each heroes (124) inside the section line 316------------------------------------
 
 //---------------------- The changes made were replacing the text between each <p> tag with each individual state gathered from useEffect that fetched the API.
  const [AntiMageT, setAntiMage] = useState([]);
  const [AxeT, setAxe] = useState([]);
  const [BaneT, setBane] = useState([]);
  const [BloodseekerT, setBloodseeker] = useState([]);
  const [Crystal_maidenT, setCrystal_maiden] = useState([]);
  const [DrowRangerT, setDrowRanger] = useState([]);
  const [EarthShakerT, setEarthShaker] = useState([]);
  const [JuggernautT, setJuggernaut] = useState([]);
  const [MiranaT, setMirana] = useState([]);
  const [MorphlingT, setMorphling] = useState([]);
  const [ShadowFiendT, setShadowFiend] = useState([]);
  const [PhantomLancerT, setPhantomLancer] = useState([]);
  const [PuckT, setPuck] = useState([]);
  const [PudgeT, setPudge] = useState([]);
  const [RazorT, setRazor] = useState([]);
  const [SandKingT, setSandKing] = useState([]);
  const [StormSpiritT, setStormSpirit] = useState([]);
  const [SvenT, setSven] = useState([]);
  const [TinyT, setTiny] = useState([]);
  const [VengefulSpiritT, setVengefulSpirit] = useState([]);
  const [WindrangerT, setWindranger] = useState([]);
  const [ZeusT, setZeus] = useState([]);
  const [KunkkaT, setKunkka] = useState([]);
  const [LinaT, setLina] = useState([]);
  const [LionT, setLion] = useState([]);
  const [ShadowShamanT, setShadowShaman] = useState([]);
  const [SlardarT, setSlardar] = useState([]);
  const [TidehunterT, setTidehunter] = useState([]);
  const [WitchDoctorT, setWitchDoctor] = useState([]);
  const [LichT, setLich] = useState([]);
  const [RikiT, setRiki] = useState([]);
  const [EnigmaT, setEnigma] = useState([]);
  const [TinkerT, setTinker] = useState([]);
  const [SniperT, setSniper] = useState([]);
  const [NecrophosT, setNecrophos] = useState([]);
  const [WarlockT, setWarlock] = useState([]);
  const [BeastmasterT, setBeastmaster] = useState([]);
  const [QueenOfPainT, setQueenOfPain] = useState([]);
  const [VenomancerT, setVenomancer] = useState([]);
  const [FacelessVoidT, setFacelessVoid] = useState([]);
  const [WraithKingT, setWraithKing] = useState([]);
  const [DeathProphetT, setDeathProphet] = useState([]);
  const [PhantomAssassinT, setPhantomAssassin] = useState([]);
  const [PugnaT, setPugna] = useState([]);
  const [TemplarT, setTemplar] = useState([]);
  const [ViperT, setViper] = useState([]);
  const [LunaT, setLuna] = useState([]);
  const [DragonKnightT, setDragonKnight] = useState([]);
  const [DazzleT, setDazzle] = useState([]);
  const [ClockwerkT, setClockwerk] = useState([]);
  const [LeshracT, setLeshrac] = useState([]);
  const [NaturesT, setNatures] = useState([]);
  const [LifestealerT, setLifestealer] = useState([]);
  const [DarkSeerT, setDarkSeer] = useState();
  const [ClinkzT, setClinkz] = useState();
  const [OmniknightT, setOmniknight] = useState();
  const [EnchantressT, setEnchantress] = useState();
  const [HuskarT, setHuskar] = useState();
  const [NightStalkerT, setNightStalker] = useState();
  const [BroodmotherT, setBroodmother] = useState();
  const [BountyHunterT, setBountyHunter] = useState();
  const [WeaverT, setWeaver] = useState();
  const [JakiroT, setJakiro] = useState();
  const [BatriderT, setBatrider] = useState();
  const [ChenT, setChen] = useState();
  const [SpectreT, setSpectre] = useState();
  const [AncientApparitionT, setAncientApparition] = useState();
  const [DoomT, setDoom] = useState();
  const [UrsaT, setUrsa] = useState();
  const [SpiritBreakerT, setSpiritBreaker] = useState();
  const [GyrocopterT, setGyrocopter] = useState();
  const [AlchemistT, setAlchemist] = useState();
  const [InvokerT, setInvoker] = useState();
  const [SilencerT, setSilencer] = useState();
  const [OutworldDestroyerT, setOutworldDestroyer] = useState();
  const [LycanT, setLycan] = useState();
  const [BrewmasterT, setBrewmaster] = useState();
  const [ShadowDemonT, setShadowDemon] = useState();
  const [LoneDruidT, setLoneDruid] = useState();
  const [ChaosKnightT, setChaosKnight] = useState();
  const [MeepoT, setMeepo] = useState();
  const [TreantProtectorT, setTreantProtector] = useState();
  const [OgreMagiT, setOgreMagi] = useState();
  const [UndyingT, setUndying] = useState();
  const [RubickT, setRubick] = useState();
  const [DisruptorT, setDisruptor] = useState();
  const [NyxAssassinT, setNyxAssassin] = useState();
  const [NagaSirenT, setNagaSiren] = useState();
  const [KotlT, setKotl] = useState();
  const [IoT, setIo] = useState();
  const [VisageT, setVisage] = useState();
  const [SlarkT, setSlark] = useState();
  const [MedusaT, setMedusa] = useState();
  const [TrollWarlordT, setTrollWarlord] = useState();
  const [CentaurT, setCentaur] = useState();
  const [MagnusT, setMagnus] = useState();
  const [TimbersawT, setTimbersaw] = useState();
  const [BristlebackT, setBristleback] = useState();
  const [TuskT, setTusk] = useState();
  const [SkywrathMageT, setSkywrathMage] = useState();
  const [AbaddonT, setAbaddon] = useState();
  const [ElderTitanT, setElderTitan] = useState();
  const [LegionT, setLegion] = useState();
  const [TechiesT, setTechies] = useState();
  const [EmberSpiritT, setEmberSpirit] = useState();
  const [EarthSpiritT, setEarthSpirit] = useState();
  const [UnderlordT, setUnderlord] = useState();
  const [TerrorbladeT, setTerrorblade] = useState();
  const [PhoenixT, setPhoenix] = useState();
  const [OracleT, setOracle] = useState();
  const [WinterWyvernT, setWinterWyvern] = useState();
  const [ArcWardenT, setArcWarden] = useState();
  const [MonkeyKingT, setMonkeyKing] = useState();
  const [DarkWillowT, setDarkWillow] = useState();
  const [PangolierT, setPangolier] = useState();
  const [GrimstrokeT, setGrimstroke] = useState();
  const [HoodwinkT, setHoodwink] = useState();
  const [VoidSpiritT, setVoidSpirit] = useState();
  const [SnapfireT, setSnapfire] = useState();
  const [MarsT, setMars] = useState();
  const [DawnbreakerT, setDawnbreaker] = useState();
  const [MarciT, setMarci] = useState();
  const [PrimalBeastT, setPrimalBeast] = useState();
  const [MuertaT, setMuerta] = useState();
  const [RingmasterT, setRingmaster] = useState();
  const [KezT, setKez] = useState();

  

useEffect(() => {
  const fetchHeroes = async () => {
    try {
      const response = await fetch('https://api.opendota.com/api/heroes');
      const data = await response.json();
      setAntiMage(data[0].localized_name);
      setAxe(data[1].localized_name);
      setBane(data[2].localized_name);
      setBloodseeker(data[3].localized_name);
      setCrystal_maiden(data[4].localized_name);
      setDrowRanger(data[5].localized_name);
      setEarthShaker(data[6].localized_name);
      setJuggernaut(data[7].localized_name);
      setMirana(data[8].localized_name);
      setMorphling(data[9].localized_name);
      setShadowFiend(data[10].localized_name);
      setPhantomLancer(data[11].localized_name);
      setPuck(data[12].localized_name);
      setPudge(data[13].localized_name);
      setRazor(data[14].localized_name);
      setSandKing(data[15].localized_name);
      setStormSpirit(data[16].localized_name);
      setSven(data[17].localized_name);
      setTiny(data[18].localized_name);
      setVengefulSpirit(data[19].localized_name);
      setWindranger(data[20].localized_name);
      setZeus(data[21].localized_name);
      setKunkka(data[22].localized_name);
      setLina(data[23].localized_name);
      setLion(data[24].localized_name);
      setShadowShaman(data[25].localized_name);
      setSlardar(data[26].localized_name);
      setTidehunter(data[27].localized_name);
      setWitchDoctor(data[28].localized_name);
      setLich(data[29].localized_name);
      setRiki(data[30].localized_name);
      setEnigma(data[31].localized_name);
      setTinker(data[32].localized_name);
      setSniper(data[33].localized_name);
      setNecrophos(data[34].localized_name);
      setWarlock(data[35].localized_name);
      setBeastmaster(data[36].localized_name);
      setQueenOfPain(data[37].localized_name);
      setVenomancer(data[38].localized_name);
      setFacelessVoid(data[39].localized_name);
      setWraithKing(data[40].localized_name);
      setDeathProphet(data[41].localized_name);
      setPhantomAssassin(data[42].localized_name);
      setPugna(data[43].localized_name);
      setTemplar(data[44].localized_name);
      setViper(data[45].localized_name);
      setLuna(data[46].localized_name);
      setDragonKnight(data[47].localized_name);
      setDazzle(data[48].localized_name);
      setClockwerk(data[49].localized_name);
      setLeshrac(data[50].localized_name);
      setNatures(data[51].localized_name);
      setLifestealer(data[52].localized_name);
      setDarkSeer(data[53].localized_name);
      setClinkz(data[54].localized_name);
      setOmniknight(data[55].localized_name);
      setEnchantress(data[56].localized_name);
      setHuskar(data[57].localized_name);
      setNightStalker(data[58].localized_name);
      setBroodmother(data[59].localized_name);
      setBountyHunter(data[60].localized_name);
      setWeaver(data[61].localized_name);
      setJakiro(data[62].localized_name);
      setBatrider(data[63].localized_name);
      setChen(data[64].localized_name);
      setSpectre(data[65].localized_name);
      setAncientApparition(data[66].localized_name);
      setDoom(data[67].localized_name);
      setUrsa(data[68].localized_name);
      setSpiritBreaker(data[69].localized_name);
      setGyrocopter(data[70].localized_name);
      setAlchemist(data[71].localized_name);
      setInvoker(data[72].localized_name);
      setSilencer(data[73].localized_name);
      setOutworldDestroyer(data[74].localized_name);
      setLycan(data[75].localized_name);
      setBrewmaster(data[76].localized_name);
      setShadowDemon(data[77].localized_name);
      setLoneDruid(data[78].localized_name);
      setChaosKnight(data[79].localized_name);
      setMeepo(data[80].localized_name);
      setTreantProtector(data[81].localized_name);
      setOgreMagi(data[82].localized_name);
      setUndying(data[83].localized_name);
      setRubick(data[84].localized_name);
      setDisruptor(data[85].localized_name);
      setNyxAssassin(data[86].localized_name);
      setNagaSiren(data[87].localized_name);
      setKotl(data[88].localized_name);
      setIo(data[89].localized_name);
      setVisage(data[90].localized_name);
      setSlark(data[91].localized_name);
      setMedusa(data[92].localized_name);
      setTrollWarlord(data[93].localized_name);
      setCentaur(data[94].localized_name);
      setMagnus(data[95].localized_name);
      setTimbersaw(data[96].localized_name);
      setBristleback(data[97].localized_name);
      setTusk(data[98].localized_name);
      setSkywrathMage(data[99].localized_name);
      setAbaddon(data[100].localized_name);
      setElderTitan(data[101].localized_name);
      setLegion(data[102].localized_name);
      setTechies(data[103].localized_name);
      setEmberSpirit(data[104].localized_name);
      setEarthSpirit(data[105].localized_name);
      setUnderlord(data[106].localized_name);
      setTerrorblade(data[107].localized_name);
      setPhoenix(data[108].localized_name);
      setOracle(data[109].localized_name);
      setWinterWyvern(data[110].localized_name);
      setArcWarden(data[111].localized_name);
      setMonkeyKing(data[112].localized_name);
      setDarkWillow(data[113].localized_name);
      setPangolier(data[114].localized_name);
      setGrimstroke(data[115].localized_name);
      setHoodwink(data[116].localized_name);
      setVoidSpirit(data[117].localized_name);
      setSnapfire(data[118].localized_name);
      setMars(data[119].localized_name);
      setDawnbreaker(data[121].localized_name);
      setMarci(data[122].localized_name);
      setPrimalBeast(data[123].localized_name);
      setMuerta(data[124].localized_name);
      setRingmaster(data[120].localized_name);
      setKez(data[125].localized_name);
      
      // console.log(data);
      
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  fetchHeroes();
}, []);


/////////////////////////////////////////////////////////////////////////////////////----------------------------------------------------------------------------

  return (
    <>
    {/* START */}
    <div className='text-white w-full h-48 z-10 bg-red-900 mx-auto mb-0 -mt-5 p-0 text-center uppercase fixed'>
      <h1 className= 'text-2xl  ssm:text-4xl sm:text-5xl pt-4 mt-4'>DOTA 2 ROSTER</h1> 
      <ToggleButton
        onToggleOn={() => {
          setShowImage(true);
        }}
        onToggleOff={() => {
          setShowImage(false);
        }}
      />
      <span className= 'relative top-16 text-xs sm:text-base'>Note: I do not own these pictures and this website is not for commercial purposes, just for personal use.</span>
    </div>

{/* showCarry, showSupport, showCarry || showSupport*/}
<section className="pt-44 -mb-8 sm:mb-16">
        <div className="strength">
            <div className={filterHealer ? 'filterHighlight frame' : 'frame'}><img src={showImage ? shrek: alchemist} alt={showImage ? 'image 2' : 'image 1'}/><p>{AlchemistT}</p></div>
            <div className={filterSupport || filterHealer || filterHealer ? 'filterHighlight frame' : 'frame'}><img   src={showImage ? ceb: axe} alt={showImage ? 'image 2' : 'image 1'}/><p>{AxeT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'} ><img  src={bristleback} alt={showImage ? 'image 2' : 'image 1'}/><p>{BristlebackT}</p></div>
            <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img   src={showImage ? terry: centaur} alt={showImage ? 'image 2' : 'image 1'}/><p>{CentaurT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img   src={showImage ? butters: chaosknight} alt={showImage ? 'image 2' : 'image 1'}/><p>{ChaosKnightT}</p></div>
            <div className={filterSupport ? 'filterHighlight frame' : 'frame'}><img   src={dawnbreaker} alt={showImage ? 'image 2' : 'image 1'}/><p>{DawnbreakerT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img src={doom} alt={showImage ? 'image 2' : 'image 1'}/><p>{DoomT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img src={showImage ? davion: dragonKnight} alt={showImage ? 'image 2' : 'image 1'}/><p>{DragonKnightT}</p></div>
            <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img src={showImage ? ironGiant: earthSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>{EarthSpiritT}</p></div>
            <div className={filterCarry || filterHealer ? 'filterHighlight frame' : 'frame'}><img src={showImage ? chewy: earthShaker} alt={showImage ? 'image 2' : 'image 1'}/><p>{EarthShakerT}</p></div>
            <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img src={elderTitan} alt={showImage ? 'image 2' : 'image 1'}/><p>{ElderTitanT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame' : 'frame'}><img  src={huskar} alt={showImage ? 'image 2' : 'image 1'}/><p>{HuskarT}</p></div>
            <div className={filterHealer ? 'filterHighlight frame' : 'frame'}><img  src={kunkka} alt={showImage ? 'image 2' : 'image 1'}/><p>{KunkkaT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? pharah: legion} alt={showImage ? 'image 2' : 'image 1'}/><p>{LegionT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={lifestealer} alt={showImage ? 'image 2' : 'image 1'}/><p>{LifestealerT}</p></div>
            <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={marci} alt={showImage ? 'image 2' : 'image 1'}/><p>{MarciT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={mars} alt={showImage ? 'image 2' : 'image 1'}/><p>{MarsT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={nightStalker} alt={showImage ? 'image 2' : 'image 1'}/><p>{NightStalkerT}</p></div>
            <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? majinBuu: ogreMagi} alt={showImage ? 'image 2' : 'image 1'}/><p>{OgreMagiT}</p></div>
            <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? obiwan: omniknight} alt={showImage ? 'image 2' : 'image 1'}/><p>{OmniknightT}</p></div>
            <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={primal} alt={showImage ? 'image 2' : 'image 1'}/><p>{PrimalBeastT}</p></div>
            <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img  src={showImage ? roadhog: pudge} alt={showImage ? 'image 2' : 'image 1'}/><p>{PudgeT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={slardar} alt={showImage ? 'image 2' : 'image 1'}/><p>{SlardarT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={spiritBreaker} alt={showImage ? 'image 2' : 'image 1'}/><p>{SpiritBreakerT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? generalGrievous: sven} alt={showImage ? 'image 2' : 'image 1'}/><p>{SvenT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={tidehunter} alt={showImage ? 'image 2' : 'image 1'}/><p>{TidehunterT}</p></div>
            <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? rock: tiny} alt={showImage ? 'image 2' : 'image 1'}/><p>{TinyT}</p></div>
            <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? groot: treant} alt={showImage ? 'image 2' : 'image 1'}/><p>{TreantProtectorT}</p></div>
            <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={tusk} alt={showImage ? 'image 2' : 'image 1'}/><p>{TuskT}</p></div>
            <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={underlord} alt={showImage ? 'image 2' : 'image 1'}/><p>{UnderlordT}</p></div>
            <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img   src={undying} alt={showImage ? 'image 2' : 'image 1'}/><p>{UndyingT}</p></div>
            <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={wraithKing} alt={showImage ? 'image 2' : 'image 1'}/><p>{WraithKingT}</p></div>
        </div>
        <div class="agilities">
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={antiMage} alt={showImage ? 'image 2' : 'image 1'}/><p>{AntiMageT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={arcWarden} alt={showImage ? 'image 2' : 'image 1'}/><p>{ArcWardenT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={bloodseeker} alt={showImage ? 'image 2' : 'image 1'}/><p>{BloodseekerT}</p></div>
          <div className={filterSupport || filterHealer  || filterCarry ? 'filterHighlight frame ' : 'frame'} ><img src={showImage ? meowth : bounty} alt={showImage ? 'image 2' : 'image 1'}/><p>{BountyHunterT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={clinkz} alt={showImage ? 'image 2' : 'image 1'}/><p>{ClinkzT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={drowRanger} alt={showImage ? 'image 2' : 'image 1'}/><p>{DrowRangerT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={emberSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>{EmberSpiritT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={facelessVoid} alt={showImage ? 'image 2' : 'image 1'}/><p>{FacelessVoidT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={gyrocopter} alt={showImage ? 'image 2' : 'image 1'}/><p>{GyrocopterT}</p></div>
          <div className={filterCarry || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={showImage ? hopps : hoodwink} alt={showImage ? 'image 2' : 'image 1'}/><p>{HoodwinkT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={juggernaut} alt={showImage ? 'image 2' : 'image 1'}/><p>{JuggernautT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={showImage ? falco : kez} alt={showImage ? 'image 2' : 'image 1'}/><p>{KezT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={luna} alt={showImage ? 'image 2' : 'image 1'}/><p>{LunaT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={medusa} alt={showImage ? 'image 2' : 'image 1'}/><p>{MedusaT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'} ><img src={showImage ? steveBuscemi : meepo} alt={showImage ? 'image 2' : 'image 1'}/><p>{MeepoT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame' : 'frame'} ><img src={monkeyKing} alt={showImage ? 'image 2' : 'image 1'}/><p>{MonkeyKingT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight ' : 'frame'} ><img src={morphling} alt={showImage ? 'image 2' : 'image 1'}/><p>{MorphlingT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={showImage ? ashoka : nagaSiren} alt={showImage ? 'image 2' : 'image 1'}/><p>{NagaSirenT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img src={PA} alt={showImage ? 'image 2' : 'image 1'}/><p>{PhantomAssassinT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? tony : PL} alt={showImage ? 'image 2' : 'image 1'}/><p>{PhantomLancerT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={razor} alt={showImage ? 'image 2' : 'image 1'}/><p>{RazorT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={riki} alt={showImage ? 'image 2' : 'image 1'}/><p>{RikiT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={shadowFiend} alt={showImage ? 'image 2' : 'image 1'}/><p>{ShadowFiendT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={slark} alt={showImage ? 'image 2' : 'image 1'}/><p>{SlarkT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? torbjorn : sniper} alt={showImage ? 'image 2' : 'image 1'}/><p>{SniperT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={spectre} alt={showImage ? 'image 2' : 'image 1'}/><p>{SpectreT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={TA} alt={showImage ? 'image 2' : 'image 1'}/><p>{TemplarT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={terrorblade} alt={showImage ? 'image 2' : 'image 1'}/><p>{TerrorbladeT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={trollWarlord} alt={showImage ? 'image 2' : 'image 1'}/><p>{TrollWarlordT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={ursa} alt={showImage ? 'image 2' : 'image 1'}/><p>{UrsaT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={viper} alt={showImage ? 'image 2' : 'image 1'}/><p>{ViperT}</p></div>
          <div className={filterSupport || filterHealer  ? 'filterHighlight frame ' : 'frame'}><img  src={weaver} alt={showImage ? 'image 2' : 'image 1'}/><p>{WeaverT}</p></div>
        </div>


        <div class="intelligence">
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={AA} alt={showImage ? 'image 2' : 'image 1'}/><p>{AncientApparitionT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? elsa : CM} alt={showImage ? 'image 2' : 'image 1'}/><p>{Crystal_maidenT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={deathProphet} alt={showImage ? 'image 2' : 'image 1'}/><p>{DeathProphetT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={disruptor} alt={showImage ? 'image 2' : 'image 1'}/><p>{DisruptorT}</p></div>
          <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? bambi : enchantress} alt={showImage ? 'image 2' : 'image 1'}/><p>{EnchantressT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={grimstroke} alt={showImage ? 'image 2' : 'image 1'}/><p>{GrimstrokeT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={jakiro} alt={showImage ? 'image 2' : 'image 1'}/><p>{JakiroT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? merlin : KOTL} alt={showImage ? 'image 2' : 'image 1'}/><p>{KotlT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={leshrac} alt={showImage ? 'image 2' : 'image 1'}/><p>{LeshracT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={lich} alt={showImage ? 'image 2' : 'image 1'}/><p>{LichT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={lina} alt={showImage ? 'image 2' : 'image 1'}/><p>{LinaT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img src={lion} alt={showImage ? 'image 2' : 'image 1'}/><p>{LionT}</p></div>
          <div className={filterSupport || filterHealer || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={muerta} alt={showImage ? 'image 2' : 'image 1'}/><p>{MuertaT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={natures} alt={showImage ? 'image 2' : 'image 1'}/><p>{NaturesT}</p></div>
          <div className={filterSupport ? 'filterHighlight frame ' : 'frame'} ><img src={necrophos} alt={showImage ? 'image 2' : 'image 1'}/><p>{NecrophosT}</p></div>
          <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img  src={oracle} alt={showImage ? 'image 2' : 'image 1'}/><p>{OracleT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={OD} alt={showImage ? 'image 2' : 'image 1'}/><p>{OutworldDestroyerT}</p></div>
          <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={puck} alt={showImage ? 'image 2' : 'image 1'}/><p>{PuckT}</p></div>
          <div className={filterCarry || filterSupport ? 'filterHighlight frame ' : 'frame'}><img  src={pugna} alt={showImage ? 'image 2' : 'image 1'}/><p>{PugnaT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={QoP} alt={showImage ? 'image 2' : 'image 1'}/><p>{QueenOfPainT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? wonka : ringmaster} alt={showImage ? 'image 2' : 'image 1'}/><p>{RingmasterT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={rubick} alt={showImage ? 'image 2' : 'image 1'}/><p>{RubickT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={shadowDemon} alt={showImage ? 'image 2' : 'image 1'}/><p>{ShadowDemonT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? scorpion : shadowShaman} alt={showImage ? 'image 2' : 'image 1'}/><p>{ShadowShamanT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={silencer} alt={showImage ? 'image 2' : 'image 1'}/><p>{SilencerT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? shaiapouf : skywrath} alt={showImage ? 'image 2' : 'image 1'}/><p>{SkywrathMageT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? genie : stormSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>{StormSpiritT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={tinker} alt={showImage ? 'image 2' : 'image 1'}/><p>{TinkerT}</p></div>
          <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img  src={warlock} alt={showImage ? 'image 2' : 'image 1'}/><p>{WarlockT}</p></div>
          <div className={filterCarry ? 'filterHighlight frame ' : 'frame'} ><img src={witchDoctor} alt={showImage ? 'image 2' : 'image 1'}/><p>{WitchDoctorT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img src={zeus} alt={showImage ? 'image 2' : 'image 1'}/><p>{ZeusT}</p></div>
        </div>
        <div class='universal'>
        <div className='frame'><img src={abaddon} alt={showImage ? 'image 2' : 'image 1'}/><p>{AbaddonT}</p></div>
        <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={bane} alt={showImage ? 'image 2' : 'image 1'}/><p>{BaneT}</p></div>
        <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={batrider} alt={showImage ? 'image 2' : 'image 1'}/><p>{BatriderT}</p></div>
        <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={beastmaster} alt={showImage ? 'image 2' : 'image 1'}/><p>{BeastmasterT}</p></div>
        <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? panda : brewmaster} alt={showImage ? 'image 2' : 'image 1'}/><p>{BrewmasterT}</p></div>
        <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={broodmother} alt={showImage ? 'image 2' : 'image 1'}/><p>{BroodmotherT}</p></div>
        <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? liShang : chen} alt={showImage ? 'image 2' : 'image 1'}/><p>{ChenT}</p></div>
        <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={clockwerk} alt={showImage ? 'image 2' : 'image 1'}/><p>{ClockwerkT}</p></div>
        <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={darkSeer} alt={showImage ? 'image 2' : 'image 1'}/><p>{DarkSeerT}</p></div>
        <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img  src={darkWillow} alt={showImage ? 'image 2' : 'image 1'}/><p>{DarkWillowT}</p></div>
        <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img   src={dazzle} alt={showImage ? 'image 2' : 'image 1'}/><p>{DazzleT}</p></div>
        <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img  src={engima} alt={showImage ? 'image 2' : 'image 1'}/><p>{EnigmaT}</p></div>
        <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img  src={showImage ? lucius : invoker} alt={showImage ? 'image 2' : 'image 1'}/><p>{InvokerT}</p></div>
        <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img   src={io} alt={showImage ? 'image 2' : 'image 1'}/><p>{IoT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img   src={showImage ? liamNeeson : loneDruid} alt={showImage ? 'image 2' : 'image 1'}/><p>{LoneDruidT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={lycan} alt={showImage ? 'image 2' : 'image 1'}/><p>{LycanT}</p></div>
          <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={showImage ? manny : magnus} alt={showImage ? 'image 2' : 'image 1'}/><p>{MagnusT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={marci} alt={showImage ? 'image 2' : 'image 1'}/><p>{MarciT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={mirana} alt={showImage ? 'image 2' : 'image 1'}/><p>{MiranaT}</p></div>
          <div className={filterSupport || filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={nyx} alt={showImage ? 'image 2' : 'image 1'}/><p>{NyxAssassinT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={showImage ? pussNboots : pangolier} alt={showImage ? 'image 2' : 'image 1'}/><p>{PangolierT}</p></div>
          <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img  src={pheonix} alt={showImage ? 'image 2' : 'image 1'}/><p>{PhoenixT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={sandKing} alt={showImage ? 'image 2' : 'image 1'}/><p>{SandKingT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={snapfire} alt={showImage ? 'image 2' : 'image 1'}/><p>{SnapfireT}</p></div>
          <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={techies} alt={showImage ? 'image 2' : 'image 1'}/><p>{TechiesT}</p></div>
          <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={timbersaw} alt={showImage ? 'image 2' : 'image 1'}/><p>{TimbersawT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={vengeful} alt={showImage ? 'image 2' : 'image 1'}/><p>{VengefulSpiritT}</p></div>
          <div className={filterCarry || filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'} ><img src={venomancer} alt={showImage ? 'image 2' : 'image 1'}/><p>{VenomancerT}</p></div>
          <div className={filterCarry || filterHealer ? 'filterHighlight frame ' : 'frame'}><img  src={visage} alt={showImage ? 'image 2' : 'image 1'}/><p>{VisageT}</p></div>
          <div className={filterSupport || filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={voidSpirit} alt={showImage ? 'image 2' : 'image 1'}/><p>{VoidSpiritT}</p></div>
          <div className={filterHealer ? 'filterHighlight frame ' : 'frame'}><img src={windranger} alt={showImage ? 'image 2' : 'image 1'}/><p>{WindrangerT}</p></div>
          <div className={filterCarry ? 'filterHighlight frame ' : 'frame'}><img src={winterWyvern} alt={showImage ? 'image 2' : 'image 1'}/><p>{WinterWyvernT}</p></div>
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
      healer={()=>{
        toggleHealer();
      }}
      selectedCarry={selectedCarry}
      selectedSupport={selectedSupport}
      selectedHealer={selectedHealer}
      />
      {/* END */}
    </>
  );
};

export default App;


