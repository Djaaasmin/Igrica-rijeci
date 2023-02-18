 const prijevodInput = document.getElementById('prijevod-input');
const feedback = document.getElementById('feedback');
const bosanskaRijec = document.getElementById('bosanska-rijec');
const novaRijecButton = document.querySelector('button:last-of-type');
const provjeriButton = document.getElementById('provjeri-button');

// definira rječnik sa prijevodima
const rijecnik = {
  'jabuka': 'jabolko',
  'banana': 'banana',
  'naranča': ['pomaranča', 'pomaranca'],
  'krastavac': 'kumara',
  'mrkva': 'korenje',
  'čamac': ['čoln', 'coln'],
  'crtani' : 'risanka',
  'djecojčica' : 'deklica',
  'pljusak'  :  ['močan dež','mocan dez'],
  'kancelarija' : 'pisarna',
   'ruksak' : 'nahrbtnik',
   'miris'  :  'vonj',
   'sukob'  :   'spopad',
   'siguran sam' : [ 'prepričan sem' , 'preprican sem'],
   'kaciga'  :  ['čelada','celada'],
   'tene'   :  'superge',
   'čini mi se' : 'zdi mi se',
   'kutija' : ['škatla','skatla'],
   'šuma' :  'gozd',
   'glupo' : 'neumen',
   'budalica' : 'trapasto',
   'stablo' : 'drevo',
    'put'   :  ['cesta','put'],
    'putovanje' : 'potovanje',
    'kofer' : ['kovček','kovcek'],
    'ovca'  :  'ovca',
    'dužina' : ['dolžina','dolzina'],
    'visina' :  ['višina', 'visina'],
    'trotuar':  ['pločnik','plocnik'],
    'kroz'   :   'skozi',
    'zgrade' :   'zgradbe',
    'trebam' :   'rabim',
    'vjetar' :  'veter',
    'prijaviti se' : 'prijaviti se',
    'šolja' : 'skodelica',
    'tanjir' : ['krožnik','kroznik'],
    'kašika' : ['žlica','zlica'],
    'hljeb'  : 'kruh',
    'viljuška' : 'vilica',
    'naravno'  : 'seveda',
    'otvoreno'  : 'otkrito',
    'brinem'   :  'skrbim',
    'poziv'     :  'klic',
    'izgubiti'  :  'izgubiti',
    'vježbe'    :  'vaje',
    'smanjiti'  :  ['zmanjšati','zmanjsati'],
    'zaboraviti' : 'pozabiti',
    'napisati'  :  'napisati',
    'zadnji' :  'zadnji',
    'plivati' : 'plavati',
    'mogu podnjeti' :'lahko prenesem',
    'farmer' :'kmet',
    'život'  : ['življenje','zivljenje'],
    'želja'  : ['želja','zelja'],
    'prsti'  : 'prsti',
    'često'  :  'pogosto',
    'pitanje' :  ['vprašanje','vprasanje'],
    'svađati se' : 'prepirati se',
    'požuri' : 'mudi',
    'propustit' : 'zamudit',
    'tijesno' :  'tesno',
    'volim te' : 'ljubim te',
    'tužan': ['žalosten','zalostan'],
    'dotaknuo': 'dotaknil',
    'udarne vijesti': 'udarne novice',
    'svijet' : 'svet',
    'predivno' : ['čudovito','cudovito'],
    'obično'  : 'navadno',
    'doktor'  :  'zdravnik',
    'srce'    :   'srce',
    'maženje' :   'crkljanje',
    'važnije' :   ['pomembnejše', 'pomembnejse'],
    'oženiti ' :  ['poročiti','porociti'],
    'završiti' :  ['končati','koncati'],
    'sljedeći' :  'naslednji',
    'kakav'   :  'katera',
    'prihvatiti' : 'sprejeti',
    'tražim'  :  ['iščem','iscem'],
    'desiti'  :  'zgoditi',
    'pretučen' :  'pretepan',
    'ležim'   :   ['ležim','lezim'],
    'ustati'  :   'vstati',
    'šečer'    :   'sladkor',
    'možda'   :  'morda',
    'više'    :   ['več','vec'],
    'nazad'   :   'nazaj',
    'iza ugla' :  'za vogalom',
    'raskrsnica' : ['križišče','krizisce'],
    'obečanje'  :  'obljub',
    'upravo sada' :  'pravkar',
    'nastaviti' :  'nadaljevati',
    'započeti'   : ['začeti','zaceti'],
    'uskoro'  :   'kmalu',
    'pogrešno' :   'narobe',
    'lutati'   :   'potepati',
    'stojim'   :   'stojim',
    'dosadno'  :   ['dolgočasno','dolgocasno'],
    'daj mi '   :   'daj mi',
    'uraditi'   :    'narediti'



};

let kljucevi = Object.keys(rijecnik);
let nasumicniKljuc = kljucevi[Math.floor(Math.random() * kljucevi.length)];

// provjerava prijevod
function provjeriPrijevod() {
  const bosanskaRijecTekst = bosanskaRijec.textContent.toLowerCase();
  const prijevod = prijevodInput.value.trim().toLowerCase();
  if (typeof rijecnik[bosanskaRijecTekst] === 'string') {
    if (prijevod === rijecnik[bosanskaRijecTekst]) {
      feedback.textContent = 'Tačno!';
    } else {
      feedback.textContent = `Netačno! Slovenska riječ je "${rijecnik[bosanskaRijecTekst]}".`;
    }
  } else if (Array.isArray(rijecnik[bosanskaRijecTekst])) {
    if (rijecnik[bosanskaRijecTekst].includes(prijevod)) {
      feedback.textContent = 'Tačno!';
    } else {
      feedback.textContent = `Netačno! Slovenska riječ je "${rijecnik[bosanskaRijecTekst][0]}".`;
    }
  }
}

// nasumično odabire riječ iz rječnika i prikazuje je na stranici
function prikaziNasumicnuRijec() {
  if (kljucevi.length === 0) {
    bosanskaRijec.textContent = 'Završeno!';
    novaRijecButton.disabled = true;
    return;
  }
  nasumicniKljuc = kljucevi[Math.floor(Math.random() * kljucevi.length)];
  bosanskaRijec.textContent = nasumicniKljuc;
  kljucevi = kljucevi.filter((item) => item !== nasumicniKljuc);
  prijevodInput.value = '';
  feedback.textContent = '';
}

novaRijecButton.addEventListener('click', prikaziNasumicnuRijec);
provjeriButton.addEventListener('click', provjeriPrijevod);
prijevodInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    provjeriPrijevod();
  }
});
