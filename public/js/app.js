/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Row.js":
/*!*******************!*\
  !*** ./js/Row.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Row)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Row = /*#__PURE__*/function () {
  function Row(tiles) {
    _classCallCheck(this, Row);

    _defineProperty(this, "tiles", []);

    this.tiles = tiles;
  }

  _createClass(Row, [{
    key: "updateStatus",
    value: function updateStatus(theWord) {
      var _this = this;

      var _iterator = _createForOfIteratorHelper(this.tiles),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile = _step.value;
          tile.updateStatus(theWord);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.tiles.filter(function (t) {
        return t.status === 'present';
      }).forEach(function (tile) {
        if (_this.tiles.some(function (t) {
          return t.letter === tile.letter && t.status === 'correct';
        })) {
          tile.status = 'absent';
        }
      });
    }
  }]);

  return Row;
}();



/***/ }),

/***/ "./js/Tile.js":
/*!********************!*\
  !*** ./js/Tile.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tile = /*#__PURE__*/function () {
  function Tile(index) {
    _classCallCheck(this, Tile);

    _defineProperty(this, "letter", '');

    _defineProperty(this, "status", '');

    _defineProperty(this, "position", 0);

    this.position = index;
  }

  _createClass(Tile, [{
    key: "fill",
    value: function fill(key) {
      this.letter = key.toLowerCase();
    }
  }, {
    key: "empty",
    value: function empty() {
      this.letter = '';
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(theWord) {
      if (!theWord.includes(this.letter)) {
        return this.status = 'absent';
      }

      if (this.letter === theWord[this.position]) {
        return this.status = 'correct';
      }

      this.status = 'present';
    }
  }]);

  return Tile;
}();



/***/ }),

/***/ "./js/dictionary.js":
/*!**************************!*\
  !*** ./js/dictionary.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["aahs", "abet", "able", "ably", "abut", "aced", "aces", "ache", "achy", "acid", "acme", "acne", "acre", "acts", "acyl", "adds", "adze", "afar", "afro", "agar", "aged", "ages", "agin", "agog", "ague", "ahas", "ahem", "ahoy", "aide", "aids", "ails", "aims", "airs", "airy", "ajar", "akin", "alas", "albs", "alef", "ales", "alga", "ally", "alms", "aloe", "alps", "also", "alto", "alum", "ambo", "amen", "amid", "amok", "amps", "amyl", "anal", "ands", "anew", "anon", "ante", "ants", "anus", "aped", "aper", "apes", "apex", "apps", "aqua", "arch", "arcs", "area", "ares", "aria", "arid", "aril", "arks", "arms", "army", "arts", "arty", "aryl", "ashs", "ashy", "asks", "asps", "atom", "atop", "aunt", "aura", "auto", "aven", "aver", "avid", "avow", "away", "awed", "awes", "awls", "awns", "awny", "awol", "awry", "axed", "axel", "axes", "axis", "axle", "axon", "ayes", "ayin", "azym", "baas", "babe", "baby", "back", "bade", "bags", "baht", "bail", "bait", "bake", "bald", "bale", "balk", "ball", "balm", "band", "bane", "bang", "bank", "bans", "barb", "bard", "bare", "barf", "bark", "barm", "barn", "bars", "base", "bash", "bask", "bass", "bath", "bats", "baud", "bawd", "bawl", "bays", "bead", "beak", "beam", "bean", "bear", "beat", "beau", "beds", "beef", "been", "beep", "beer", "bees", "beet", "begs", "bell", "belt", "bend", "bene", "bens", "bent", "berk", "berm", "best", "beta", "beth", "bets", "bevy", "bias", "bibs", "bide", "bids", "bike", "bile", "bilk", "bill", "bind", "bins", "bios", "bird", "birr", "bite", "bits", "bitt", "blab", "blah", "blat", "bleb", "bled", "blew", "blip", "blob", "bloc", "blog", "blot", "blow", "blue", "blur", "boar", "boas", "boat", "bobs", "bode", "body", "bogs", "boil", "bold", "bole", "boll", "bolt", "bomb", "bond", "bone", "bonk", "bony", "book", "boom", "boon", "boor", "boos", "boot", "bops", "bore", "born", "boss", "both", "bots", "bout", "bowl", "bows", "boxy", "boys", "brad", "brag", "bran", "bras", "brat", "bray", "bred", "brew", "brie", "brim", "brin", "bris", "brow", "brux", "bubo", "buck", "buds", "buff", "bugs", "buhl", "buhr", "bulb", "bulk", "bull", "bump", "bums", "bunk", "buns", "bunt", "buoy", "burl", "burn", "burp", "burr", "burs", "bury", "bush", "busk", "bust", "busy", "buts", "butt", "buys", "buzz", "byes", "byte", "cabs", "cads", "cafe", "cage", "cake", "calf", "call", "calm", "calx", "came", "camp", "cams", "cane", "cans", "cant", "cape", "caps", "card", "care", "carp", "cars", "cart", "case", "cash", "cask", "cast", "cats", "cave", "caws", "ceca", "cede", "cedi", "cees", "cell", "celt", "cent", "cere", "chad", "chap", "char", "chat", "chef", "chew", "chic", "chin", "chip", "chis", "chiv", "chop", "chow", "chub", "chug", "chum", "cite", "city", "clad", "clag", "clan", "clap", "claw", "clay", "clef", "clip", "clod", "clog", "clop", "clot", "cloy", "club", "clue", "coak", "coal", "coat", "coax", "cobs", "cock", "coda", "code", "cods", "coed", "cogs", "coho", "coif", "coil", "coin", "cola", "cold", "cole", "colt", "coma", "comb", "come", "cone", "conk", "cons", "cook", "cool", "coop", "coos", "coot", "cope", "cops", "copy", "cord", "core", "cork", "corm", "corn", "cost", "cosy", "cots", "coup", "cove", "cowl", "cows", "coys", "cozy", "crab", "crag", "cram", "crap", "crew", "crib", "crop", "crow", "crud", "crux", "cube", "cubs", "cuds", "cued", "cues", "cuff", "cull", "culm", "cult", "cups", "curb", "curd", "cure", "curl", "curs", "curt", "cusp", "cuss", "cute", "cuts", "cwms", "cyan", "cyma", "cyme", "cyst", "czar", "dabs", "dado", "dads", "daft", "dame", "damn", "damp", "dams", "dank", "dare", "dark", "darn", "dart", "dash", "data", "date", "daub", "dawn", "days", "daze", "dead", "deaf", "deal", "dean", "dear", "debt", "deck", "deed", "deem", "deep", "deer", "dees", "deet", "deft", "defy", "deil", "dele", "delf", "deli", "dell", "deme", "demo", "demy", "dene", "dens", "dent", "deny", "dere", "derm", "desk", "deva", "dews", "dewy", "deys", "dhow", "dial", "dibs", "dice", "died", "dies", "diet", "digs", "dill", "dime", "dims", "dine", "ding", "dins", "dint", "dips", "dire", "dirt", "disc", "dish", "disk", "ditz", "diva", "dive", "dock", "dodo", "doer", "does", "doff", "doge", "dogs", "dojo", "dole", "doll", "dolt", "dome", "done", "dons", "doom", "door", "dope", "dork", "dorm", "dorr", "dors", "dose", "dote", "doth", "dots", "doty", "dove", "down", "doxx", "doxy", "doze", "dozy", "drab", "drag", "dram", "draw", "dray", "dreg", "drew", "drey", "drib", "drip", "drop", "drub", "drug", "drum", "dual", "dubs", "duck", "duct", "dude", "duds", "duel", "dues", "duet", "duff", "duke", "dull", "duly", "dumb", "dump", "dune", "dung", "dunk", "duos", "dupe", "dusk", "dust", "duty", "dyad", "dyed", "dyer", "dyes", "dyne", "dzos", "each", "earl", "earn", "ears", "ease", "east", "easy", "eats", "eave", "ebbs", "echo", "ecru", "eddy", "edge", "edgy", "edit", "eeks", "eels", "eely", "eery", "effs", "eggs", "eggy", "egos", "eked", "eker", "ekes", "elix", "elks", "ells", "elms", "else", "emir", "emit", "emus", "ends", "enol", "envy", "eons", "epic", "eras", "ergo", "ergs", "eros", "etas", "etch", "euro", "even", "ever", "eves", "evil", "ewer", "ewes", "exam", "exes", "exit", "exon", "expo", "eyed", "eyes", "face", "fact", "fade", "fads", "fail", "fain", "fair", "fake", "fall", "fame", "fang", "fans", "fare", "farm", "fast", "fate", "fats", "faun", "faux", "fave", "fawn", "faze", "fear", "feat", "feds", "feed", "feel", "fees", "feet", "fell", "felt", "fend", "fens", "fern", "feta", "feud", "fibs", "figs", "file", "fill", "film", "find", "fine", "fink", "fins", "fire", "firm", "firs", "fish", "fist", "fits", "five", "fizz", "flab", "flag", "flan", "flap", "flat", "flaw", "flax", "flay", "flea", "fled", "flee", "flew", "flex", "flip", "flit", "floe", "flog", "flop", "flow", "flox", "flub", "flue", "flux", "foal", "foam", "fobs", "foci", "foes", "fogs", "fogy", "fohs", "foil", "fold", "folk", "fond", "font", "food", "fool", "foot", "fops", "fora", "forb", "fore", "fork", "form", "fort", "foul", "four", "fowl", "foxy", "fozy", "fray", "free", "fret", "friz", "frog", "from", "fuel", "fuff", "fuki", "full", "fume", "fumy", "fund", "funk", "furl", "furs", "fury", "fuse", "fuss", "fuze", "fuzz", "gabs", "gaff", "gaga", "gage", "gags", "gain", "gait", "gala", "gale", "gall", "gals", "game", "gang", "gaol", "gape", "gaps", "garb", "gash", "gasp", "gate", "gave", "gawk", "gawp", "gaze", "gear", "geek", "gees", "geld", "gell", "gels", "gems", "gene", "gent", "germ", "gets", "gift", "gigs", "gild", "gill", "gilt", "gimp", "gins", "gird", "girl", "girn", "gist", "give", "glad", "glee", "glen", "glia", "glib", "glob", "glow", "glue", "glug", "glum", "glut", "gnar", "gnat", "gnaw", "gnus", "goad", "goal", "goat", "gobs", "goby", "gods", "goer", "goes", "goji", "gold", "golf", "gone", "gong", "good", "goof", "goon", "goop", "goos", "gore", "gory", "gosh", "goth", "gout", "gown", "grab", "gram", "gray", "grew", "grey", "grid", "grim", "grin", "grip", "grit", "grow", "grub", "guck", "guff", "gulf", "gull", "gulp", "gums", "gunk", "guns", "guru", "gush", "gust", "guts", "guys", "gyms", "gyne", "gyps", "gyre", "gyro", "hack", "hags", "hail", "hair", "half", "hall", "halo", "halt", "hams", "hand", "hang", "haps", "hard", "hare", "hark", "harm", "harp", "hash", "hasp", "hate", "hath", "hats", "haul", "have", "hawk", "haws", "hays", "haze", "hazy", "head", "heal", "heap", "hear", "heat", "heck", "heed", "heel", "heir", "held", "hell", "helm", "help", "heme", "hems", "hens", "herb", "herd", "here", "hero", "hers", "heth", "hewn", "hews", "hick", "hics", "hide", "high", "hike", "hill", "hilt", "hind", "hint", "hips", "hire", "hiss", "hits", "hive", "hoar", "hoax", "hobo", "hoed", "hoer", "hoes", "hogs", "hold", "hole", "holy", "home", "hone", "honk", "hood", "hoof", "hook", "hoop", "hoot", "hope", "hops", "horn", "horo", "hose", "host", "hots", "hour", "howl", "hows", "hubs", "hued", "hues", "huff", "huge", "hugs", "huhs", "hula", "hulk", "hull", "hump", "hums", "hung", "hunk", "hunt", "hurl", "hurt", "hush", "husk", "huts", "hymn", "hype", "hypo", "iamb", "ibex", "ibis", "iced", "icer", "ices", "icky", "icon", "idea", "ides", "idle", "idly", "idol", "iffy", "ilea", "ilka", "ilks", "ills", "imam", "imps", "inch", "inks", "inky", "inns", "into", "ions", "iota", "ipad", "ired", "ires", "irid", "iris", "irks", "iron", "isle", "isms", "itch", "item", "jabs", "jack", "jade", "jags", "jail", "jali", "jamb", "jams", "jars", "java", "jaws", "jays", "jazz", "jean", "jeep", "jeer", "jeli", "jell", "jerk", "jest", "jets", "jibe", "jigs", "jilt", "jink", "jinx", "jive", "jivy", "jobs", "jock", "jogs", "join", "joke", "jolt", "josh", "jots", "jowl", "joys", "judo", "jugs", "juke", "july", "jump", "june", "junk", "jury", "just", "jute", "juts", "kale", "kaon", "kaph", "kata", "kats", "kava", "kays", "keek", "keel", "keen", "keep", "kegs", "kelp", "keps", "kept", "kern", "keys", "kick", "kids", "kill", "kiln", "kilt", "kina", "kind", "kine", "king", "kink", "kips", "kiss", "kite", "kits", "kiwi", "knar", "knee", "knew", "knit", "knob", "knot", "know", "knur", "kook", "kudu", "kuna", "kyak", "kyat", "labs", "lace", "lack", "lacy", "lade", "lads", "lady", "lags", "laid", "lain", "lair", "lake", "lamb", "lame", "lamp", "land", "lane", "lank", "laps", "lard", "lari", "lark", "lash", "lass", "last", "late", "laud", "lava", "lave", "lawn", "laws", "lays", "laze", "lazy", "lead", "leaf", "leak", "lean", "leap", "lear", "leas", "lede", "leek", "leer", "lees", "left", "legs", "leks", "lend", "lens", "lent", "lept", "less", "lest", "lets", "leus", "levs", "levy", "lewd", "liar", "lice", "lick", "lids", "lied", "lien", "lier", "lies", "lieu", "life", "lift", "like", "lilt", "lily", "limb", "lime", "limn", "limo", "limp", "limy", "line", "link", "lint", "lion", "lips", "lira", "lire", "lirk", "lisp", "list", "lite", "live", "load", "loaf", "loam", "loan", "lobe", "lobs", "loch", "loci", "lock", "loco", "lode", "loft", "logo", "logs", "loin", "loll", "lone", "long", "look", "loom", "loon", "loop", "loos", "loot", "lope", "lops", "lord", "lore", "lory", "lose", "loss", "lost", "loti", "lots", "loud", "lout", "love", "lows", "luau", "lube", "luck", "luff", "luge", "lugs", "lull", "lump", "lung", "lure", "lurk", "lush", "lust", "lute", "lynx", "lyre", "mace", "mach", "made", "mage", "magi", "maid", "mail", "maim", "main", "make", "male", "mall", "malt", "mama", "mane", "mans", "many", "maps", "mara", "mare", "mark", "marl", "mars", "mart", "mash", "mask", "mass", "mast", "mate", "math", "mats", "matt", "maul", "maws", "mayo", "mays", "maze", "mead", "meal", "mean", "meat", "meek", "meet", "meld", "melt", "meme", "memo", "mend", "mens", "menu", "meow", "mere", "mesa", "mesh", "mess", "mews", "mica", "mice", "midi", "miff", "mild", "mile", "milk", "mill", "mils", "mime", "mind", "mine", "mini", "mink", "mint", "minx", "mire", "miss", "mist", "mite", "mitt", "moan", "moat", "mobs", "mock", "mode", "mods", "moho", "mold", "mole", "molt", "moms", "monk", "mood", "moon", "moor", "moos", "moot", "mope", "mops", "more", "moss", "most", "moth", "move", "mown", "mows", "much", "muck", "muff", "mugs", "mule", "mull", "mums", "muon", "murk", "muse", "mush", "musk", "must", "mute", "mutt", "myna", "myth", "nabs", "nags", "nail", "name", "nand", "nape", "naps", "naut", "nave", "navy", "nays", "nazi", "neap", "near", "neat", "neck", "need", "neon", "nerd", "nest", "nets", "nevi", "news", "newt", "next", "nibs", "nice", "nick", "nigh", "nils", "nine", "nips", "nits", "nobs", "nock", "node", "nods", "noel", "none", "noon", "nope", "norm", "nose", "nosy", "note", "noun", "nova", "nubs", "nude", "nuke", "null", "numb", "nuns", "nuts", "oafs", "oaks", "oars", "oath", "oats", "obey", "oboe", "octo", "odds", "odes", "odor", "offs", "ogle", "ogre", "ohms", "oils", "oily", "oink", "okay", "okra", "olea", "oleo", "omen", "omit", "omni", "once", "ones", "only", "onto", "onus", "onyx", "oohs", "ooid", "oops", "ooze", "oozy", "opal", "open", "opts", "oral", "orbs", "orca", "ores", "oryx", "ouch", "ours", "oust", "outs", "ouzo", "oval", "oven", "over", "ovum", "owed", "ower", "owes", "owls", "owly", "owns", "oxea", "oxen", "oxes", "pace", "pack", "pact", "pads", "page", "paid", "pail", "pain", "pair", "pale", "pall", "palm", "palp", "pals", "pane", "pang", "pans", "pant", "papa", "paps", "pare", "park", "pars", "part", "pass", "past", "pate", "path", "pats", "pave", "pawn", "paws", "pays", "peak", "peal", "pear", "peas", "peat", "peck", "peek", "peel", "peep", "peer", "pegs", "pelf", "pelt", "pend", "pens", "pent", "peon", "pepo", "peps", "perk", "perm", "pert", "peso", "pest", "pets", "pews", "phis", "phiz", "phub", "pica", "pick", "pied", "pier", "pies", "pigs", "pike", "pile", "pili", "pill", "pimp", "pine", "ping", "pink", "pins", "pint", "pion", "pipe", "pips", "pita", "pith", "pits", "pity", "pius", "plan", "play", "plea", "pleb", "pled", "plod", "plop", "plot", "plow", "ploy", "plug", "plum", "plus", "pock", "pods", "poem", "poet", "pogo", "poke", "poky", "pole", "poll", "polo", "pomp", "pond", "pony", "pooh", "pool", "poop", "poor", "pope", "pops", "pore", "pork", "porn", "port", "pose", "posh", "post", "posy", "pots", "pouf", "pour", "pout", "poxy", "pram", "pray", "prep", "prey", "prim", "prod", "prom", "prop", "pros", "prow", "psis", "pubs", "puce", "puck", "puff", "pugs", "puke", "pull", "pulp", "puma", "pump", "punk", "puns", "punt", "puny", "pupa", "pups", "pure", "purr", "push", "puts", "putt", "pyre", "qadi", "qaid", "qats", "qoph", "quad", "quay", "quid", "quin", "quip", "quit", "quiz", "race", "rack", "racy", "raft", "rage", "rags", "raid", "rail", "rain", "rake", "rami", "ramp", "rams", "rand", "rang", "rank", "rant", "rape", "raps", "rapt", "rare", "rash", "rasp", "rate", "rats", "rave", "raws", "rays", "raze", "razz", "read", "reak", "real", "ream", "reap", "rear", "redo", "reds", "reed", "reef", "reek", "reel", "refs", "rein", "rely", "rend", "rent", "repo", "resh", "rest", "revs", "rhos", "rial", "ribs", "rice", "rich", "rick", "ride", "rids", "riel", "rife", "riff", "rift", "rigs", "rile", "rill", "rily", "rime", "rims", "rind", "ring", "rink", "riot", "ripe", "rips", "rise", "risk", "rite", "rive", "road", "roam", "roan", "roar", "robe", "robs", "rock", "rode", "rods", "roes", "roil", "role", "roll", "romp", "rood", "roof", "rook", "room", "root", "rope", "ropy", "rose", "rosy", "rote", "rots", "roue", "rout", "rove", "rows", "rubs", "ruby", "rude", "rued", "rues", "ruff", "rugs", "ruin", "rule", "rums", "rune", "rung", "runs", "runt", "ruse", "rush", "rust", "rute", "ruts", "sack", "sacs", "safe", "saga", "sage", "sags", "sagy", "said", "sail", "sake", "saki", "sale", "salt", "same", "sand", "sane", "sang", "sank", "saps", "sard", "sari", "sash", "sass", "sate", "save", "sawn", "saws", "says", "scab", "scam", "scan", "scar", "scat", "scot", "scry", "scud", "scum", "scuz", "seal", "seam", "sear", "seas", "seat", "sect", "seed", "seek", "seem", "seen", "seep", "seer", "sees", "self", "sell", "seme", "send", "sent", "sera", "sere", "serf", "seta", "sets", "sewn", "sews", "sext", "sexy", "shah", "sham", "shed", "shew", "shim", "shin", "ship", "shiv", "shmo", "shoe", "shoo", "shop", "shot", "show", "shun", "shut", "shwa", "sick", "side", "sift", "sigh", "sign", "sikh", "siku", "silk", "sill", "silo", "silt", "sine", "sing", "sink", "sins", "sips", "sire", "sirs", "site", "sits", "sitz", "size", "skep", "skew", "skid", "skim", "skin", "skip", "skis", "skit", "slab", "slam", "slap", "slat", "slaw", "slay", "sled", "slew", "slid", "slim", "slip", "slit", "slob", "sloe", "slog", "slop", "slot", "slow", "slug", "slum", "slur", "smit", "smog", "smug", "smut", "snag", "snap", "snip", "snit", "snob", "snog", "snot", "snow", "snub", "snug", "soak", "soap", "soar", "sobs", "sock", "soda", "sods", "sofa", "soft", "soil", "sold", "sole", "soli", "solo", "sols", "some", "soms", "sone", "song", "sons", "soon", "soot", "sops", "sore", "sort", "sots", "soul", "soup", "sour", "sown", "sows", "soya", "soys", "spam", "span", "spar", "spas", "spat", "spay", "sped", "spin", "spit", "spot", "spry", "spud", "spun", "spur", "stab", "stag", "star", "stat", "stay", "stem", "step", "stew", "stir", "stop", "stow", "stub", "stud", "stun", "stye", "styx", "subs", "such", "suck", "suds", "sued", "suer", "sues", "suet", "suit", "sulk", "sumo", "sump", "sums", "sung", "sunk", "suns", "suqs", "sure", "surf", "swab", "swag", "swam", "swan", "swap", "swat", "sway", "swig", "swim", "swiz", "swop", "swum", "sync", "tabs", "tabu", "tack", "taco", "tact", "tags", "tail", "taka", "take", "tala", "talc", "tale", "talk", "tall", "tame", "tamp", "tams", "tank", "tans", "tape", "taps", "tare", "tarn", "taro", "tarp", "tars", "tart", "task", "taus", "taut", "taxa", "taxi", "teak", "teal", "team", "tear", "teas", "tech", "teed", "teem", "teen", "tees", "tell", "tend", "tens", "tent", "term", "tern", "terp", "test", "teth", "text", "than", "that", "thaw", "thee", "them", "then", "they", "thin", "this", "thou", "thru", "thud", "thug", "thus", "tick", "tics", "tidetidy", "tied", "tier", "ties", "tiff", "tike", "tile", "till", "tilt", "time", "tine", "ting", "tins", "tint", "tiny", "tipi", "tips", "tire", "tizz", "toad", "toed", "toes", "toff", "tofu", "toga", "toil", "toke", "told", "toll", "tomb", "tome", "toms", "tone", "tong", "tons", "took", "tool", "toot", "tops", "tore", "torn", "toro", "tort", "toss", "tote", "tots", "tour", "tout", "town", "tows", "toys", "tram", "trap", "tray", "tree", "trek", "trim", "trio", "trip", "trod", "tron", "trot", "troy", "true", "tsar", "tuba", "tube", "tubs", "tuck", "tufa", "tuff", "tuft", "tugs", "tums", "tuna", "tune", "turf", "turn", "tusk", "tutu", "twig", "twin", "twit", "twos", "tyke", "type", "typo", "tyro", "tzar", "ughs", "ugly", "ukes", "ulna", "umbo", "umps", "undo", "unit", "unix", "unto", "upon", "urea", "urge", "uric", "urns", "used", "user", "uses", "uvea", "vain", "vale", "vamp", "vane", "vang", "vans", "vape", "vara", "vary", "vase", "vast", "vats", "vatu", "veal", "vear", "veer", "vees", "veil", "vein", "vela", "vend", "vent", "verb", "very", "vest", "veto", "vets", "vial", "vibe", "vice", "vied", "vies", "view", "vile", "vine", "viol", "visa", "vise", "vita", "voes", "void", "vole", "volt", "vote", "vows", "vugs", "wack", "wade", "wadi", "wads", "waft", "wage", "wags", "waif", "wail", "wait", "wake", "wale", "walk", "wall", "waly", "wand", "wane", "want", "ward", "ware", "warm", "warn", "warp", "wars", "wart", "wary", "wash", "wasp", "watt", "wauk", "waul", "wave", "wavy", "wawl", "waxy", "ways", "weak", "weal", "wean", "wear", "webs", "weds", "weed", "week", "ween", "weep", "weir", "weld", "well", "welt", "wend", "went", "wept", "were", "west", "wets", "wham", "what", "when", "whet", "whew", "whey", "whim", "whip", "whir", "whiz", "whoa", "whom", "whop", "whup", "wick", "wide", "wife", "wifi", "wigs", "wild", "wile", "will", "wilt", "wily", "wimp", "wind", "wine", "wing", "wink", "wins", "wipe", "wire", "wiry", "wise", "wish", "wisp", "wist", "with", "wits", "wive", "woad", "woes", "woke", "woks", "wolf", "womb", "wons", "wont", "wood", "woof", "wool", "woos", "word", "wore", "work", "worm", "worn", "wort", "wove", "wows", "wrap", "wren", "writ", "wyes", "xray", "xyst", "yack", "yaff", "yagi", "yaks", "yald", "yams", "yang", "yank", "yaps", "yard", "yare", "yarn", "yaud", "yaup", "yawl", "yawn", "yawp", "yaws", "yeah", "yean", "year", "yeas", "yegg", "yeld", "yelk", "yell", "yelm", "yelp", "yens", "yerk", "yesk", "yeti", "yett", "yeuk", "yews", "yill", "yins", "yipe", "yips", "yird", "yirr", "ynal", "yodh", "yods", "yoga", "yogh", "yogi", "yoke", "yolk", "yond", "yoni", "yore", "your", "yowe", "yowl", "yows", "yoyo", "yuan", "yuck", "yuga", "yuks", "yule", "yurt", "yutz", "ywis", "zags", "zany", "zaps", "zarf", "zati", "zeal", "zebu", "zeds", "zees", "zein", "zens", "zeps", "zerk", "zero", "zest", "zeta", "zhos", "zigs", "zinc", "zine", "zing", "zips", "ziti", "zits", "zizz", "zoea", "zoic", "zone", "zonk", "zoom", "zoon", "zoos", "zori", "zulu", "zyme"]);

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./js/Tile.js");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ "./js/dictionary.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row */ "./js/Row.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  guessesAllowed: 5,
  currentRowIndex: 0,
  theWord: _dictionary__WEBPACK_IMPORTED_MODULE_1__["default"][Math.floor(Math.random() * _dictionary__WEBPACK_IMPORTED_MODULE_1__["default"].length)],
  state: 'active',
  message: '',
  errors: false,
  letters: ['QWERTYUIOP'.split(''), 'ASDFGHJKL'.split(''), ['Backspace'].concat(_toConsumableArray('ZXCVBNM'.split('')), ['Enter'])],
  init: function init() {
    var _this = this;

    this.board = Array.from({
      length: this.guessesAllowed
    }, function () {
      return new _Row__WEBPACK_IMPORTED_MODULE_2__["default"](Array.from({
        length: _this.theWord.length
      }, function (item, index) {
        return new _Tile__WEBPACK_IMPORTED_MODULE_0__["default"](index);
      }));
    });
  },

  get currentGuess() {
    return this.currentRow.tiles.map(function (tile) {
      return tile.letter;
    }).join('');
  },

  get currentRow() {
    return this.board[this.currentRowIndex];
  },

  get remainingGuesses() {
    return this.guessesAllowed - this.currentRowIndex - 1;
  },

  onKeyPress: function onKeyPress(key) {
    this.message = '';
    this.errors = false;

    if (this.state === 'complete') {
      return;
    }

    if (/^[A-z]$/.test(key)) {
      this.fillTile(key);
    } else if (key === 'Enter') {
      this.submitGuess();
    } else if (key === 'Backspace') {
      this.emptyTile();
    }
  },
  matchingTileForKey: function matchingTileForKey(key) {
    return this.board.map(function (row) {
      return row.tiles;
    }).flat().find(function (tile) {
      return tile.letter === key.toLowerCase();
    });
  },
  fillTile: function fillTile(key) {
    var _iterator = _createForOfIteratorHelper(this.currentRow.tiles),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tile = _step.value;

        if (tile.letter === '') {
          tile.fill(key);
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  emptyTile: function emptyTile() {
    var _iterator2 = _createForOfIteratorHelper(_toConsumableArray(this.currentRow.tiles).reverse()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tile = _step2.value;

        if (tile.letter !== '') {
          tile.empty();
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  submitGuess: function submitGuess() {
    if (this.currentGuess.length < this.theWord.length) {
      return;
    }

    if (!_dictionary__WEBPACK_IMPORTED_MODULE_1__["default"].includes(this.currentGuess)) {
      this.errors = true;
      return this.message = 'Not a word.';
    }

    this.currentRow.updateStatus(this.theWord);

    if (this.currentGuess === this.theWord.toLowerCase()) {
      this.state = 'complete';
      return this.message = 'You Win';
    }

    if (this.remainingGuesses === 0) {
      this.state = 'complete';
      return this.message = 'Game Over, the word was ' + this.theWord;
    }

    return this.currentRowIndex++;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./app.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./app.css ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --correct-color: #47d747;\n    --present-color: #f7f749;\n    --absent-color: #888;\n    --invalid-color: #ff3f3f;\n}\n\nhtml, body {\n    height: 100%;\n    touch-action: none;\n}\n\nbody {\n    display: grid;\n    place-items: center;\n    background-color: #0e1626;\n    color: white;\n    margin: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh1 {\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 1.5rem;\n}\n\n#game {\n    color: white;\n    background-image: linear-gradient(153deg, #1c2b45 13%, #0c1321 85%), linear-gradient(149deg, #fec63b 3%, rgba(254, 198, 59, 0) 80%);\n    position: relative;\n    border-radius: 20px;\n    width: 300px;\n    margin: auto;\n}\n\n#game:before {\n    content: '';\n    display: block;\n    position: absolute;\n    inset: -7px;\n    background-image: linear-gradient(138deg, #6ba0e2 -20%, #131e32 105%);\n    z-index: -1;\n    border-radius: 25px;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n}\n\n.row.current .tile:empty:first-of-type {\n    -webkit-animation: fade 2s;\n            animation: fade 2s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes fade {\n    50% {\n        background: rgba(255, 255, 255, .05)\n    }\n}\n\n@keyframes fade {\n    50% {\n        background: rgba(255, 255, 255, .05)\n    }\n}\n\n.tile {\n    outline: 1px solid rgba(73, 110, 158, 0.1);\n    width: 100%;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: #496e9e;\n}\n\n#keyboard {\n    margin-top: 2rem;\n}\n\n.key {\n    background: #c5c5c5;\n    border: 0;\n    margin: 2px;\n    height: 50px;\n    min-width: 40px;\n    border-radius: 4px;\n}\n\n.row.invalid .tile, .tile.invalid {\n    color: var(--invalid-color);\n    text-shadow: 0 0 12px rgba(246, 38, 38, 0.42);\n}\n\n.tile.correct {\n    color: var(--correct-color);\n    text-shadow: 0 0 12px rgba(38, 246, 110, 0.42);\n}\n\n.key.correct {\n    background: var(--correct-color);\n}\n\n.tile.present {\n    color: var(--present-color);\n    text-shadow: 0 0 12px rgba(246, 171, 38, 0.42);\n}\n\n.key.present {\n    background: var(--present-color);\n}\n\n.key.absent {\n    background: var(--absent-color);\n}\n\nheader {\n    position: relative;\n}\n\noutput {\n    display: block;\n    font-weight: 500;\n    font-style: italic;\n    font-size: 17px;\n    margin-top: 1rem;\n    position: absolute;\n    top: 0;\n    right: -1.5rem;\n    width: 150px;\n}\n\noutput:empty {\n    display: none;\n    color: #496e9e;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./js/game.js");

document.addEventListener('alpine:init', function () {
  Alpine.data('game', function () {
    return _game__WEBPACK_IMPORTED_MODULE_0__["default"];
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************!*\
  !*** ./app.css ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./app.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./app.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});
})();

/******/ })()
;