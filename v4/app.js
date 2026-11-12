/* Catalogue Sopalux 2000 — versions Parfumerie (V3 claire / V4 sombre) */
var SXD = (function () {
  var BP = 'https://boulevardparfums.com/wp-content/uploads/';
  var PR = 'https://princesseparfums.com/wp-content/uploads/';
  var PB = 'https://parisbleu.com/cdn/shop/files/';
  var FQ = 'https://www.parfum-exclusif.fr/';
  function cb(code) { return [PR + '2025/11/' + code + '-600x600.webp', PR + '2025/11/' + code + '-300x400.webp']; }
  function pb(file) { return [PB + file + (file.indexOf('?') > -1 ? '&' : '?') + 'width=900']; }

  var brands = {
    bp: { n: 'Boulevard Paris', o: 'Princesse Parfums · Paris', s: 'Des eaux de parfum qui racontent chacune un lieu de Paris : ses ponts, ses places, ses quartiers.' },
    cb: { n: 'Christian Blanc', o: 'Princesse Parfums · Paris', s: 'Des créations françaises intemporelles, gourmandes, boisées ou orientales.' },
    pb: { n: 'Paris Bleu', o: 'Paris Bleu Parfums · depuis 1989', s: 'Une maison parisienne présente dans plus de 95 pays, fabriquée en France.' },
    lo: { n: 'Lomani', o: 'Parfums Parour · Paris', s: 'La signature Lomani : AB Spirit, Millionaire, Code… des classiques qui se vendent seuls.' },
    fq: { n: 'Fouquet’s', o: 'Parfums Parour · Paris', s: 'Cinq créations Parfums Parour pour le Fouquet’s, fabriquées en France avec les nez Corinne Cachen et Christian Dussoulier.' },
    au: { n: 'Autres maisons', o: 'Distribution Sopalux 2000', s: 'Richard Laurent, Ô fil de l’eau, Parfum d’Or, Karen Low, Johan.b, Marc Joseph.' },
    msl: { n: 'Mon Secret Love', o: 'Fabrication Sopalux 2000', s: 'Déodorant femme 250 ml, 48 h de fraîcheur, sans paraben ni sel d’aluminium.' },
    ie: { n: 'Inspiration Extrême', o: 'Fabrication Sopalux 2000', s: 'Anti-transpirant homme 250 ml, protection 72 h.' },
    na: { n: 'Nanine', o: 'Fabrication Sopalux 2000', s: 'Le déodorant parfumé féminin, cinq personnalités.' },
    fr: { n: 'Inspiration Freshness', o: 'Fabrication Sopalux 2000', s: 'Déodorant parfumé homme, 48 h.' },
    dp: { n: 'Déos parfumés', o: 'Fabrication Sopalux 2000', s: 'Le déodorant assorti à votre parfum préféré.' }
  };

  var fam = {
    frais: { n: 'Frais & hespéridé', e: 'Agrumes, lavande, notes vertes' },
    floral: { n: 'Floral', e: 'Rose, jasmin, tubéreuse' },
    fruite: { n: 'Fruité', e: 'Pêche, cassis, mangue, poire' },
    boise: { n: 'Boisé', e: 'Cèdre, vétiver, santal' },
    oriental: { n: 'Oriental & ambré', e: 'Ambre, encens, épices' },
    gourmand: { n: 'Gourmand', e: 'Vanille, praliné, caramel' }
  };

  // u: p = parfum, d = déodorant ; g: F / H / M (mixte)
  var P = [
    // ---------- Boulevard Paris ----------
    { id: 'port-royal', n: 'Port Royal', b: 'bp', u: 'p', g: 'H', f: 'boise', i: [BP + '2025/04/Port-Royal_B-copy.webp'], lieu: 'Le quartier né d’une ancienne abbaye, au bord des jardins du Luxembourg.', t: ['Bergamote', 'Lavande'], c: ['Iris', 'Ambre gris', 'Cacao', 'Ambrette'], d: ['Cèdre', 'Patchouli', 'Vétiver', 'Cuir'] },
    { id: 'pont-alexandre-iii', n: 'Pont Alexandre III', b: 'bp', u: 'p', g: 'H', f: 'oriental', i: [BP + '2025/04/Alexander-III_B-copy.webp', BP + '2025/04/Alexander-III_C.webp'], lieu: 'Le pont Belle Époque de la Seine, ses lampadaires de bronze et ses pierres grises.', t: ['Bergamote', 'Poivre rose', 'Menthe', 'Citron'], c: ['Jasmin', 'Muscade', 'Gingembre'], d: ['Ambre', 'Encens', 'Patchouli', 'Santal'] },
    { id: 'palais-royal', n: 'Palais Royal', b: 'bp', u: 'p', g: 'F', f: 'oriental', i: [BP + '2025/04/palais_royal_thumbnail.webp'], lieu: 'Les fêtes royales et les jardins du Palais-Royal, à deux pas du Louvre.', t: ['Litchi', 'Oxyde de rose'], c: ['Rose', 'Vanille', 'Praliné'], d: ['Benjoin', 'Patchouli', 'Encens', 'Papyrus'] },
    { id: '7eme', n: '7ème', b: 'bp', u: 'p', g: 'H', f: 'boise', i: [BP + '2025/04/7eme_thumbnail-3.webp'], lieu: 'La sérénité classique du 7e arrondissement, autour des Invalides.', t: ['Bergamote de Calabre', 'Poivre'], c: ['Ambroxan', 'Géranium', 'Lavande', 'Vétiver'], d: ['Ambroxan', 'Cèdre'], duo: 'deo-7eme' },
    { id: 'paris-je-taime', n: 'Paris Je T’aime', b: 'bp', u: 'p', g: 'F', f: 'fruite', i: [BP + '2025/09/Je-taime-paris-parfum-Bottle-Boulevard-Paris-Packshot.jpg'], lieu: 'Une déclaration d’amour à Paris, à ses lumières et à ses quais la nuit.', t: ['Bergamote', 'Citronnelle', 'Pamplemousse'], c: ['Cassis', 'Pêche', 'Rose'], d: ['Cèdre', 'Muscs blancs'] },
    { id: 'haussmann', n: 'Haussmann', b: 'bp', u: 'p', g: 'H', f: 'boise', i: [BP + '2025/04/haussman_thumbnail-1.webp'], lieu: 'L’élégance des grands immeubles haussmanniens et de leurs balcons.', t: ['Lavandin', 'Bergamote', 'Feuille d’ananas'], c: ['Jasmin', 'Rose', 'Cèdre', 'Pomarose'], d: ['Ambroxan', 'Santal', 'Fève tonka'] },
    { id: 'concorde', n: 'Concorde', b: 'bp', u: 'p', g: 'M', f: 'oriental', i: [BP + '2026/01/Parfum-Concorde-Boulevard-Paris-Packshot-JPEG.webp'], lieu: 'La plus grande place de Paris, entre grandeur classique et lumière.', t: ['Bergamote', 'Néroli', 'Poire'], c: ['Mousse', 'Jasmin', 'Néroli'], d: ['Vanille', 'Ambre', 'Vanille Bourbon'] },
    { id: 'champ-de-mars', n: 'Champ de Mars', b: 'bp', u: 'p', g: 'H', f: 'boise', i: [BP + '2025/04/champ_de_mars_thumbnail.webp'], lieu: 'Le grand jardin au pied de la tour Eiffel.', t: ['Romarin', 'Cardamome', 'Pamplemousse'], c: ['Tubéreuse', 'Ylang-ylang', 'Cèdre de l’Atlas', 'Oliban'], d: ['Vétiver', 'Cèdre', 'Cuir', 'Daim'] },
    { id: 'montmartre', n: 'Montmartre', b: 'bp', u: 'p', g: 'F', f: 'floral', i: [BP + '2025/04/montmartre_thumbnail-1.webp'], lieu: 'La butte des peintres, des cabarets et des ruelles pavées.', t: ['Orange', 'Notes vertes'], c: ['Tubéreuse', 'Jasmin', 'Chèvrefeuille'], d: ['Iris', 'Santal', 'Vanille'] },
    { id: 'la-seine', n: 'La Seine', b: 'bp', u: 'p', g: 'F', f: 'fruite', i: [BP + '2025/04/La-Seine_OK.webp'], lieu: 'Le fleuve de Paris, ses berges et ses ponts.', t: ['Mandarine', 'Cassis', 'Lavande'], c: ['Fleur d’oranger', 'Lavande', 'Jasmin'], d: ['Ambroxan', 'Jasmin'] },

    // ---------- Christian Blanc ----------
    { id: 'admiration', n: 'Admiration', b: 'cb', u: 'p', g: 'F', f: 'gourmand', i: cb('0011.2'), s: 'Agrumes amers, fleurs blanches et vanille chaleureuse.', t: ['Bigarade', 'Petit-grain'], c: ['Jasmin sambac', 'Ylang-ylang', 'Poivre rose'], d: ['Lys', 'Vanille', 'Benjoin'] },
    { id: 'always-paris', n: 'Always Paris', b: 'cb', u: 'p', g: 'F', f: 'gourmand', i: cb('0001.2'), s: 'Une vanille généreuse, adoucie de lavande.', t: ['Vanille', 'Lavande'], c: ['Caviar de vanille'], d: ['Absolue de vanille'] },
    { id: 'montparnasse', n: 'Montparnasse', b: 'cb', u: 'p', g: 'F', f: 'floral', i: cb('0012.2'), s: 'Pivoine et ylang-ylang sur un fond vanillé.', t: ['Bergamote', 'Amande amère'], c: ['Pivoine', 'Ylang-ylang'], d: ['Vanille', 'Coumarine'] },
    { id: 'perle-damour', n: 'Perle d’Amour', b: 'cb', u: 'p', g: 'F', f: 'fruite', i: [PR + '2025/10/perle-damour2-300x400.webp', PR + '2025/10/perle-damour2.webp'], s: 'Poire, fraise et praliné : fruité et tendre.', t: ['Mandarine', 'Bergamote', 'Poire'], c: ['Fraise', 'Fruit de la passion', 'Rose noire'], d: ['Praliné', 'Vanille', 'Encens', 'Papyrus'] },
    { id: 'bois-parisien', n: 'Bois Parisien', b: 'cb', u: 'p', g: 'H', f: 'boise', i: cb('0010.2'), s: 'Oliban résineux, iris poudré, miel et cuir.', t: ['Oliban', 'Iris'], c: ['Patchouli'], d: ['Miel', 'Cuir'] },
    { id: 'gold', n: 'Gold', b: 'cb', u: 'p', g: 'H', f: 'oriental', i: cb('0014.2'), s: 'Encens et cardamome sur un fond de cèdre.', t: ['Encens', 'Cardamome'], c: ['Patchouli', 'Vétiver'], d: ['Ciste', 'Cèdre'] },
    { id: 'rexton', n: 'Rexton', b: 'cb', u: 'p', g: 'H', f: 'gourmand', i: cb('0006.2'), s: 'Toffee, cannelle et ambre : chaud et enveloppant.', t: ['Poivre rose', 'Genévrier', 'Violette'], c: ['Toffee', 'Cannelle', 'Lavande', 'Sauge'], d: ['Vanille', 'Ambre', 'Fève tonka', 'Daim'] },
    { id: 'top-king', n: 'Top King', b: 'cb', u: 'p', g: 'H', f: 'frais', i: cb('0004.2'), s: 'Agrumes vifs, touche épicée, fond boisé.', t: ['Genièvre', 'Orange sanguine', 'Citron de Sicile'], c: ['Piment', 'Lavande', 'Sauge sclarée', 'Géranium'], d: ['Vétiver', 'Cèdre', 'Patchouli'] },
    { id: 'hors-norme', n: 'Hors Norme', b: 'cb', u: 'p', g: 'H', f: 'oriental', i: [PR + '2025/10/ChristianBlanc-HorsNorme-300x400.jpg', PR + '2025/10/ChristianBlanc-HorsNorme.jpg'], s: 'Agrumes et menthe, rose épicée, cuir et ambre.', t: ['Mandarine', 'Menthe poivrée', 'Pamplemousse'], c: ['Rose', 'Cannelle', 'Épices'], d: ['Patchouli', 'Cuir', 'Ambre'] },

    // ---------- Paris Bleu ----------
    { id: 'golden-girl', n: 'Golden Girl', b: 'pb', u: 'p', g: 'F', f: 'fruite', i: pb('goldengirl.jpg'), s: 'Solaire et fruité : mangue, jasmin et vanille.', t: ['Bergamote', 'Orange', 'Mangue'], c: ['Jasmin', 'Tubéreuse', 'Patchouli', 'Poivre'], d: ['Cèdre', 'Vanille', 'Mousse'] },
    { id: 'mondaine', n: 'Mondaine', b: 'pb', u: 'p', g: 'F', f: 'gourmand', i: pb('mondaine.jpg'), s: 'Pêche veloutée et jasmin, gourmand et assuré.', t: ['Pêche', 'Pamplemousse', 'Baies roses'], c: ['Jasmin', 'Rose', 'Iris'], d: ['Cèdre', 'Musc'] },
    { id: 'only-me', n: 'Beyond Stars · Only Me', b: 'pb', u: 'p', g: 'F', f: 'fruite', i: pb('only-me.jpg'), s: 'Cassis, rose et praliné : un sillage lumineux.', t: ['Cassis', 'Mandarine', 'Violette'], c: ['Rose', 'Néroli', 'Pêche'], d: ['Praliné', 'Cèdre', 'Patchouli', 'Musc'] },
    { id: 'dear-madam', n: 'Dear Madam', b: 'pb', u: 'p', g: 'F', f: 'floral', i: pb('dear-madam.jpg'), s: 'Pêche juteuse et fleurs délicates, fond musqué.', t: ['Pêche', 'Pamplemousse', 'Baies roses'], c: ['Jasmin', 'Rose', 'Iris'], d: ['Cèdre', 'Musc'] },
    { id: 'aviator-lady', n: 'Aviator Lady', b: 'pb', u: 'p', g: 'F', f: 'floral', i: pb('AviatorLady-BOUTEILLE_67cd278e-2cb3-4b64-b218-bbceae6f2d15.png'), s: 'Chypré floral énergique : cassis, rose et jasmin.', t: ['Bergamote', 'Mandarine jaune', 'Poivre noir'], c: ['Cassis', 'Rose', 'Jasmin'], d: ['Cèdre', 'Patchouli', 'Mousse'] },
    { id: 'tobacco-club', n: 'Tobacco Club', b: 'pb', u: 'p', g: 'H', f: 'oriental', i: pb('tobacco-club.jpg'), s: 'Tabac, caramel et cacao, entre ombre et lumière.', t: ['Bergamote', 'Cardamome', 'Sauge sclarée'], c: ['Gingembre', 'Caramel', 'Osmanthus'], d: ['Tabac', 'Cacao', 'Vétiver'] },
    { id: 'writer', n: 'Writer', b: 'pb', u: 'p', g: 'H', f: 'boise', i: pb('writer_c6f954f9-37f9-4968-8787-f7c49e35da74.jpg'), s: 'Boisé aromatique, agrumes et ambre gris.', t: ['Citron', 'Orange', 'Lavande'], c: ['Géranium', 'Élémi'], d: ['Patchouli', 'Ambre gris', 'Vétiver'] },
    { id: 'diplomate-legend', n: 'Diplomate Legend', b: 'pb', u: 'p', g: 'H', f: 'boise', i: pb('legend.jpg'), s: 'Agrumes lumineux, poivre noir et bois ambrés.', t: ['Bergamote', 'Orange sanguine', 'Lavandin'], c: ['Sauge sclarée', 'Poivre noir', 'Bois ambrés'], d: ['Patchouli', 'Cèdre', 'Vétiver'] },
    { id: 'chairman-legacy', n: 'Chairman Legacy', b: 'pb', u: 'p', g: 'H', f: 'frais', i: pb('ChairmanLegacy.jpg').concat(['/img/chairman.webp']), s: 'Fraîcheur pétillante, iris soyeux, fond ambré vanillé.', t: ['Bergamote', 'Géranium', 'Lavande', 'Ananas'], c: ['Iris', 'Jasmin'], d: ['Ambre', 'Fève tonka', 'Vanille', 'Labdanum'] },

    // ---------- Fouquet's (Parfums Parour) ----------
    { id: 'french-riviera', n: 'French Riviera', b: 'fq', u: 'p', g: 'F', f: 'floral', ed: 'Eau de parfum', i: [FQ + '110-large_default/french-riviera-eau-de-toilette-pour-femme.jpg', FQ + '110-home_default/french-riviera-eau-de-toilette-pour-femme.jpg'], s: 'Un bouquet de fleurs blanches éclairé de cassis et d’agrumes.', t: ['Bergamote', 'Mandarine', 'Citron', 'Cassis'], c: ['Cyclamen', 'Jasmin', 'Ylang-ylang'], d: [] },
    { id: 'rose-de-marrakech', n: 'Rose de Marrakech', b: 'fq', u: 'p', g: 'F', f: 'fruite', ed: 'Eau de parfum', i: [FQ + '113-large_default/rose-de-marrakech-eau-de-toilette-pour-femme.jpg', FQ + '113-home_default/rose-de-marrakech-eau-de-toilette-pour-femme.jpg'], s: 'Un chypre rosé et aérien, sur un cocktail de fruits.' },
    { id: 'fugue-a-paris', n: 'Fugue à Paris', b: 'fq', u: 'p', g: 'H', f: 'gourmand', ed: 'Eau de toilette', i: [FQ + '597-large_default/fugue-a-paris-eau-de-toilette-pour-homme.jpg', FQ + '712-home_default/fugue-a-paris-eau-de-toilette-pour-homme.jpg'], s: 'La gourmandise au masculin, bois précieux et épices rares.' },
    { id: 'lune-dete', n: 'Lune d’Été', b: 'fq', u: 'p', g: 'H', f: 'frais', ed: 'Eau de toilette', i: [FQ + '125-large_default/lune-d-ete-eau-de-toilette-pour-homme.jpg', FQ + '125-home_default/lune-d-ete-eau-de-toilette-pour-homme.jpg'], s: 'Une fougère pétillante, roses fraîches et épices chaudes.' },
    { id: 'jardins-du-sud', n: 'Jardins du Sud', b: 'fq', u: 'p', g: 'M', f: 'frais', ed: 'Eau fraîche', i: [FQ + '285-large_default/jardins-du-sud-une-eau-fraiche-aromatique-et-unisexe.jpg'], s: 'Une grande eau hespéridée, aromatique et chyprée, unisexe.' },

    // ---------- Lomani ----------
    { id: 'ab-spirit', n: 'AB Spirit', b: 'lo', u: 'p', g: 'H', i: ['/img/ab-spirit.webp'], loc: 1, s: 'Le grand classique masculin de Lomani.', duo: 'deo-ab-spirit' },
    { id: 'millionaire', n: 'AB Spirit Millionaire', b: 'lo', u: 'p', g: 'H', i: ['/img/millionaire.webp'], loc: 1, s: 'La version dorée et plus intense d’AB Spirit.', duo: 'deo-millionaire' },
    { id: 'code', n: 'Code', b: 'lo', u: 'p', g: 'H', i: ['/img/lomani-code.webp'], loc: 1, s: 'Un masculin frais et bleuté.' },
    { id: 'donna', n: 'Donna', b: 'lo', u: 'p', g: 'F', i: ['/img/donna.webp'], loc: 1, s: 'Un féminin rose et gourmand.' },
    { id: 'solara', n: 'Solara', b: 'lo', u: 'p', g: 'F', i: ['/img/solara.webp'], loc: 1, s: 'Lumineux et solaire.' },
    { id: 'attractive', n: 'Attractive', b: 'lo', u: 'p', g: 'F', i: ['/img/attractive.webp'], loc: 1, s: 'Le flacon nœud, tendre et poudré.' },

    // ---------- Autres maisons ----------
    { id: 'rl-ambre', n: 'Ambre Extrême', b: 'au', m: 'Richard Laurent', u: 'p', g: 'M', i: ['/img/rl-ambre.webp'], loc: 1, s: 'Collection privée Richard Laurent.' },
    { id: 'rl-bois', n: 'Bois Précieux', b: 'au', m: 'Richard Laurent', u: 'p', g: 'M', i: ['/img/rl-bois.webp'], loc: 1, s: 'Collection privée Richard Laurent.' },
    { id: 'rl-bleu', n: 'Bleu Roi', b: 'au', m: 'Richard Laurent', u: 'p', g: 'M', i: ['/img/rl-bleu.webp'], loc: 1, s: 'Collection privée Richard Laurent.' },
    { id: 'ofil-joy', n: 'Joy', b: 'au', m: 'Ô fil de l’eau', u: 'p', g: 'F', i: ['/img/ofil-joy.webp'], loc: 1, s: 'Le flacon fleuri d’Ô fil de l’eau.' },
    { id: 'ofil-charm', n: 'Charm', b: 'au', m: 'Ô fil de l’eau', u: 'p', g: 'F', i: ['/img/ofil-charm.webp'], loc: 1, s: 'Ambré et féminin.' },
    { id: 'xchange', n: 'Unlimited Xchange', b: 'au', m: 'Karen Low', u: 'p', g: 'H', i: ['/img/xchange-parfum.webp'], loc: 1, s: 'Le masculin Karen Low.' },
    { id: 'parfum-dor', n: 'Parfum d’Or', b: 'au', m: 'Parfum d’Or', u: 'p', g: 'F', i: ['/img/parfum-dor-femme.webp'], loc: 1, s: 'L’or en flacon, version femme.' },
    { id: 'see-you', n: 'See You', b: 'au', m: 'Marc Joseph', u: 'p', g: 'H', i: ['/img/see-you.webp'], loc: 1, s: 'Flacon noir sculpté, masculin.' },

    // ---------- Déodorants Sopalux ----------
    { id: 'msl-original', n: 'Original', b: 'msl', u: 'd', g: 'F', f: 'floral', i: ['/img/msl-original.webp'], loc: 1, s: 'Le parfum signature Mon Secret Love.' },
    { id: 'msl-concombre', n: 'Go Fresh · Concombre & thé vert', b: 'msl', u: 'd', g: 'F', f: 'frais', i: ['/img/msl-concombre.webp'], loc: 1, s: 'Fraîcheur verte et désaltérante.' },
    { id: 'msl-grenade', n: 'Go Fresh · Grenade', b: 'msl', u: 'd', g: 'F', f: 'fruite', i: ['/img/msl-grenade.webp'], loc: 1, s: 'Fruité et pétillant.' },
    { id: 'msl-pamplemousse', n: 'Go Fresh · Pamplemousse', b: 'msl', u: 'd', g: 'F', f: 'frais', i: ['/img/msl-pamplemousse.webp'], loc: 1, s: 'Agrumes vifs.' },
    { id: 'ie-charbon', n: 'Charbon Protect', b: 'ie', u: 'd', g: 'H', f: 'boise', i: ['/img/ie-charbon.webp'], loc: 1, s: 'Au charbon actif.' },
    { id: 'ie-cold', n: 'Cold Power', b: 'ie', u: 'd', g: 'H', f: 'frais', i: ['/img/ie-cold.webp'], loc: 1, s: 'Effet glacé.' },
    { id: 'ie-fresh', n: 'Fresh Express', b: 'ie', u: 'd', g: 'H', f: 'frais', i: ['/img/ie-fresh.webp'], loc: 1, s: 'Fraîcheur immédiate.' },
    { id: 'ie-sport', n: 'Invincible Sport', b: 'ie', u: 'd', g: 'H', f: 'frais', i: ['/img/ie-sport.webp'], loc: 1, s: 'Pour l’effort.' },
    { id: 'ie-force', n: 'Force Thermique 40 °C', b: 'ie', u: 'd', g: 'H', f: 'boise', i: ['/img/ie-force.webp'], loc: 1, s: 'Tient jusqu’à 40 °C.' },
    { id: 'nanine', n: 'Nanine', b: 'na', u: 'd', g: 'F', f: 'floral', i: ['/img/nanine.webp'], loc: 1, s: 'L’original.' },
    { id: 'nanine-girl', n: 'Nanine Girl', b: 'na', u: 'd', g: 'F', f: 'fruite', i: ['/img/nanine-girl.webp'], loc: 1, s: 'Jeune et pétillant.' },
    { id: 'nanine-intense', n: 'Nanine Intense', b: 'na', u: 'd', g: 'F', f: 'oriental', i: ['/img/nanine-intense.webp'], loc: 1, s: 'Plus profond.' },
    { id: 'nanine-flower', n: 'Nanine Flower', b: 'na', u: 'd', g: 'F', f: 'floral', i: ['/img/nanine-flower.webp'], loc: 1, s: 'Bouquet floral.' },
    { id: 'so-nanine', n: 'So Nanine', b: 'na', u: 'd', g: 'F', f: 'gourmand', i: ['/img/so-nanine.webp'], loc: 1, s: 'Doux et poudré.' },
    { id: 'fr-apollo', n: 'Apollo', b: 'fr', u: 'd', g: 'H', f: 'frais', i: ['/img/insp-apollo.webp'], loc: 1, s: 'Déodorant parfumé 48 h.' },
    { id: 'fr-black', n: 'Black Night', b: 'fr', u: 'd', g: 'H', f: 'boise', i: ['/img/insp-black.webp'], loc: 1, s: 'Déodorant parfumé 48 h.' },
    { id: 'fr-africana', n: 'Africana', b: 'fr', u: 'd', g: 'H', f: 'oriental', i: ['/img/insp-africana.webp'], loc: 1, s: 'Déodorant parfumé 48 h.' },
    { id: 'fr-dark', n: 'Dark Temptation', b: 'fr', u: 'd', g: 'H', f: 'gourmand', i: ['/img/insp-dark.webp'], loc: 1, s: 'Déodorant parfumé 48 h.' },
    { id: 'fr-sun', n: 'Sun White', b: 'fr', u: 'd', g: 'H', f: 'frais', i: ['/img/sun-white.webp'], loc: 1, s: 'Déodorant parfumé 48 h.' },
    { id: 'deo-ab-spirit', n: 'AB Spirit · déodorant', b: 'dp', u: 'd', g: 'H', i: ['/img/ab-spirit-deo.webp'], loc: 1, s: 'Le sillage d’AB Spirit, au quotidien.', duo: 'ab-spirit' },
    { id: 'deo-millionaire', n: 'Millionaire · déodorant homme', b: 'dp', u: 'd', g: 'H', i: ['/img/millionaire-men-deo.webp'], loc: 1, s: 'La signature Millionaire en spray.', duo: 'millionaire' },
    { id: 'deo-millionaire-w', n: 'Millionaire · déodorant femme', b: 'dp', u: 'd', g: 'F', i: ['/img/millionaire-women-deo.webp'], loc: 1, s: 'La version féminine dorée.' },
    { id: 'deo-7eme', n: '7ème · déodorant', b: 'dp', u: 'd', g: 'H', f: 'boise', i: ['/img/septieme-deo.webp'], loc: 1, s: 'Le 7ème de Boulevard Paris, en déodorant.', duo: '7eme' },
    { id: 'deo-incidence', n: 'Incidence Chrome', b: 'dp', u: 'd', g: 'H', f: 'frais', i: ['/img/incidence-chrome.webp'], loc: 1, s: 'Déodorant parfumé 48 h.' }
  ];

  var W = ['Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'M’Sila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane', 'Timimoun', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès', 'In Salah', 'In Guezzam', 'Touggourt', 'Djanet', 'El M’Ghair', 'El Meniaa'];

  var V = [
    ['/', 'Version corporate', 'Sobre et rassurante'],
    ['/catalogue/', 'Version catalogue', 'Fiches techniques et revendeurs'],
    ['/boutique/', 'Version boutique', 'E-commerce avec panier'],
    ['/wow/', 'Version expérience', 'Ultra animée, effet wow'],
    ['/v3/', 'Version Parfumerie claire', 'Parfums des fournisseurs + déos'],
    ['/v4/', 'Version Parfumerie sombre', 'Luxe nuit, parfums + déos'],
    ['/v5/', 'Version Maison bleue', 'Esprit Paris Bleu, en mieux'],
    ['/v6/', 'Version Boulevard', 'Esprit Boulevard Parfums, en mieux'],
    ['/v7/', 'Version Grossiste', 'Esprit Princesse Parfums : devis revendeurs']
  ];

  var hero = {
    pb: [PB + '2_a1b5a24b-5f48-485d-8830-e99b20416bac.jpg?width=1920', PB + 'Incidence_Candy_656f3f2e-3b0c-4701-9d98-b05e5a7dfde9.png?width=1920', PB + '8bd65b62-1806-4744-be29-6c8537b8056f.png?width=1920'],
    bp: [BP + '2025/04/Bulevard-Flower-Shop-Blue_01-1.jpg', BP + '2025/04/FOR-HER.jpg', BP + '2025/04/FOR-HIM.jpg'],
    pr: [PR + '2025/12/homme1.jpg', PR + '2025/12/Femme1.jpg', PR + '2025/12/homme2.jpg', PR + '2025/12/Femme2.jpg']
  };

  return { hero: hero, brands: brands, fam: fam, P: P, W: W, V: V, wa: '213797372452' };
})();

window.SXT = {
  init: function (X, D) {
    var d = document, $ = function (s, r) { return (r || d).querySelector(s); };
    /* index des maisons */
    var ol = $('[data-mais]');
    if (ol) ol.innerHTML = ['bp', 'cb', 'pb', 'fq', 'lo', 'au'].map(function (k, i) {
      var l = D.P.filter(function (p) { return p.b === k; }), p = l[0];
      return '<li><a href="parfums.html?m=' + k + '"><span class="mi">0' + (i + 1) + '</span><b>' + X.esc(D.brands[k].n) + '</b><small>' + X.esc(D.brands[k].o) + '</small><em>' + l.length + ' réf.</em><span class="mp">' + X.img(p) + '</span></a></li>';
    }).join('');
    /* héros : diaporama de flacons + brume */
    var hx = $('[data-hx]'); if (!hx) return;
    var S = [['/img/see-you.webp', 'See You', 'Marc Joseph'], ['/img/rl-bois.webp', 'Bois Précieux', 'Richard Laurent'], ['/img/ofil-charm.webp', 'Charm', 'Ô fil de l’eau'], ['/img/septieme-deo.webp', '7ème · déodorant', 'Sopalux 2000'], ['/img/xchange-parfum.webp', 'Unlimited Xchange', 'Karen Low']];
    var box = $('[data-slides]'), dots = $('[data-dots]'), cur = 0, tm;
    box.innerHTML = S.map(function (s, i) { return '<img src="' + s[0] + '" alt="' + X.esc(s[2] + ' ' + s[1]) + '" draggable="false"' + (i ? ' loading="lazy"' : '') + '>'; }).join('');
    dots.innerHTML = S.map(function (s, i) { return '<button type="button" aria-label="Flacon ' + (i + 1) + '"></button>'; }).join('');
    $('[data-sl-t]').textContent = ('0' + S.length).slice(-2);
    function go(i) {
      cur = (i + S.length) % S.length;
      [].forEach.call(box.children, function (im, k) { im.classList.toggle('on', k === cur); });
      [].forEach.call(dots.children, function (b, k) { b.setAttribute('aria-current', k === cur); });
      $('[data-sl-n]').textContent = S[cur][1]; $('[data-sl-b]').textContent = S[cur][2]; $('[data-sl-i]').textContent = ('0' + (cur + 1)).slice(-2);
      clearTimeout(tm); tm = setTimeout(function () { go(cur + 1); }, 4800);
    }
    [].forEach.call(dots.children, function (b, k) { b.onclick = function () { go(k); puff(.5); }; });
    go(0);
    var sx = 0; box.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); }, { passive: true });
    /* brume */
    var cv = $('.hx-mist'), cx = cv.getContext('2d'), P = [], run = 0, dpr = Math.min(2, devicePixelRatio || 1);
    function size() { cv.width = hx.clientWidth * dpr; cv.height = hx.clientHeight * dpr; }
    size(); addEventListener('resize', size);
    function puff(k) {
      var r = box.getBoundingClientRect(), h = hx.getBoundingClientRect();
      var ox = (r.left - h.left + r.width * .5) * dpr, oy = (r.top - h.top + r.height * .12) * dpr;
      for (var i = 0; i < 160 * (k || 1); i++) { var a = -Math.PI / 2 + (Math.random() - .5) * 1.5, v = (1.5 + Math.random() * 6) * dpr; P.push({ x: ox, y: oy, vx: Math.cos(a) * v * (Math.random() < .5 ? -1 : 1) * .9, vy: Math.sin(a) * v * .6, r: (6 + Math.random() * 26) * dpr, l: 1 }); }
      hx.classList.add('psh'); setTimeout(function () { hx.classList.remove('psh'); }, 380);
      if (!run) { run = 1; requestAnimationFrame(tick); }
    }
    function tick() {
      cx.clearRect(0, 0, cv.width, cv.height);
      P = P.filter(function (p) { return p.l > .02; });
      P.forEach(function (p) { p.x += p.vx; p.y += p.vy; p.vx *= .97; p.vy = p.vy * .97 - .03; p.r *= 1.012; p.l *= .975;
        var g = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); g.addColorStop(0, 'rgba(232,214,176,' + (.16 * p.l) + ')'); g.addColorStop(1, 'rgba(232,214,176,0)'); cx.fillStyle = g; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); });
      if (P.length) requestAnimationFrame(tick); else { run = 0; cx.clearRect(0, 0, cv.width, cv.height); }
    }
    $('[data-psh]').onclick = function () { puff(1); };
    box.addEventListener('click', function () { puff(.8); });
    setTimeout(function () { puff(.6); }, 900);
  }
};

/* Moteur commun des versions V3 à V7 — Sopalux 2000 (maquette Webminds) */
(function () {
  var D = SXD, C = window.SXT || {}, d = document;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || d).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var byId = {}; D.P.forEach(function (p) { byId[p.id] = p; });
  var G = { F: 'Femme', H: 'Homme', M: 'Mixte' };
  var ls = function (k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
  var qs = function (k) { var m = new RegExp('[?&]' + k + '=([^&]+)').exec(location.search); return m ? decodeURIComponent(m[1]) : ''; };

  var X = window.SXC = {};
  X.byId = byId; X.esc = esc;
  X.brand = function (p) { return p.m || D.brands[p.b].n; };
  X.fam = function (p) { return p.f ? D.fam[p.f].n : ''; };
  X.gen = function (p) { return G[p.g] || ''; };
  X.kind = function (p) { return p.ed || (p.u === 'p' ? ((p.loc || p.b === 'pb') ? 'Eau de parfum' : 'Eau de parfum · 100 ml') : 'Déodorant'); };

  /* ---------- images avec repli ---------- */
  X.ie = function (im) {
    var a = []; try { a = JSON.parse(im.getAttribute('data-alt') || '[]'); } catch (e) {}
    if (a.length) { im.setAttribute('data-alt', JSON.stringify(a.slice(1))); im.src = a[0]; return; }
    var ph = d.createElement('div'); ph.className = 'ph';
    ph.innerHTML = '<i></i><b>' + esc(im.getAttribute('data-n') || '') + '</b><small>' + esc(im.getAttribute('data-b') || '') + '</small>';
    im.replaceWith(ph);
  };
  X.img = function (p, cls, eager) {
    return '<img class="' + (cls || '') + (p.loc ? ' det' : ' shot') + '" src="' + esc(p.i[0]) + '" data-alt=\'' + esc(JSON.stringify(p.i.slice(1))) + '\' data-n="' + esc(p.n) + '" data-b="' + esc(X.brand(p)) + '" alt="' + esc(X.brand(p) + ' ' + p.n) + '" referrerpolicy="no-referrer" ' + (eager ? '' : 'loading="lazy" ') + 'decoding="async" draggable="false" onerror="SXC.ie(this)">';
  };
  X.url = function (p) { return 'produit.html?p=' + p.id; };

  /* ---------- carte produit ---------- */
  X.card = function (p) {
    var tag = p.f ? '<span class="tg">' + esc(X.fam(p)) + '</span>' : '';
    var add = C.devisCard ? '<button class="addq" type="button" data-addq="' + p.id + '">+ Ajouter au devis</button>' : '';
    return '<article class="card ' + (p.u === 'p' ? 'is-p' : 'is-d') + '"><a href="' + X.url(p) + '"><div class="ci">' + X.img(p) + tag + '</div><div class="cb"><small>' + esc(X.brand(p)) + '</small><h3>' + esc(p.n) + '</h3><span>' + esc(X.kind(p)) + ' · ' + esc(X.gen(p)) + '</span></div></a>' + add + '</article>';
  };
  X.grid = function (el, list) { el.innerHTML = list.map(X.card).join(''); };
  X.list = function (f) { return D.P.filter(f); };

  /* ---------- onglets par marque ---------- */
  function tabs() {
    $$('[data-tabs]').forEach(function (box) {
      var keys = (box.getAttribute('data-tabs') || 'bp,cb,pb,fq,lo,au').split(','), n = +(box.getAttribute('data-n') || 8);
      var bar = d.createElement('div'); bar.className = 'tabs'; bar.setAttribute('role', 'tablist');
      var g = d.createElement('div'); g.className = 'grid';
      var desc = d.createElement('p'); desc.className = 'tabd';
      keys.forEach(function (k, i) {
        var b = d.createElement('button'); b.type = 'button'; b.textContent = D.brands[k].n; b.setAttribute('role', 'tab');
        b.onclick = function () {
          $$('button', bar).forEach(function (x) { x.setAttribute('aria-selected', 'false'); }); b.setAttribute('aria-selected', 'true');
          var l = X.list(function (p) { return p.b === k; }); X.grid(g, l.slice(0, n));
          desc.innerHTML = '<b>' + esc(D.brands[k].o) + '</b> — ' + esc(D.brands[k].s) + ' <a href="parfums.html?m=' + k + '">Voir les ' + l.length + ' références →</a>';
        };
        bar.appendChild(b); if (!i) setTimeout(function () { b.click(); }, 0);
      });
      box.appendChild(bar); box.appendChild(desc); box.appendChild(g);
    });
  }

  /* ---------- duos parfum + déo ---------- */
  function duos() {
    $$('[data-duos]').forEach(function (el) {
      var l = D.P.filter(function (p) { return p.u === 'p' && p.duo && byId[p.duo]; });
      el.innerHTML = l.map(function (p) {
        var q = byId[p.duo];
        return '<a class="duo" href="' + X.url(p) + '"><div class="duo-v"><div>' + X.img(p) + '</div><em>+</em><div>' + X.img(q) + '</div></div><div class="duo-t"><small>' + esc(X.brand(p)) + '</small><h3>' + esc(p.n) + '</h3><p>Le parfum et son déodorant assorti, fabriqué par Sopalux 2000.</p></div></a>';
      }).join('');
    });
  }

  /* ---------- gammes de déodorants ---------- */
  var VID = { msl: 'msl', ie: 'ie' };
  X.video = function (name, cls) {
    return '<video class="' + (cls || '') + '" muted loop playsinline preload="none" poster="/video/' + name + '.jpg" data-auto><source src="/video/' + name + '.mp4" type=\'video/mp4; codecs="avc1.640028"\'><source src="/video/' + name + '.webm" type="video/webm"></video>';
  };
  function deos() {
    $$('[data-deos]').forEach(function (el) {
      el.innerHTML = ['msl', 'ie', 'na', 'fr', 'dp'].map(function (k) {
        var l = X.list(function (p) { return p.b === k; }), br = D.brands[k];
        return '<article class="gam gam-' + k + '"><div class="gam-v">' + l.slice(0, 4).map(function (p) { return '<a href="' + X.url(p) + '">' + X.img(p) + '</a>'; }).join('') + '</div><div class="gam-t"><small>' + l.length + ' parfums · ' + esc(br.o) + '</small><h3>' + esc(br.n) + '</h3><p>' + esc(br.s) + '</p><a class="lnk" href="parfums.html?m=' + k + '">Voir la gamme →</a></div>' + (VID[k] && el.hasAttribute('data-vid') ? '<div class="gam-vid">' + X.video(VID[k]) + '</div>' : '') + '</article>';
      }).join('');
    });
  }
  function films() {
    $$('[data-films]').forEach(function (el) {
      el.innerHTML = [['pub-msl', 'Mon Secret Love · le film', 1], ['msl', 'Gamme Mon Secret Love'], ['ie', 'Gamme Inspiration Extrême']].map(function (f) {
        return '<figure>' + X.video(f[0]) + '<figcaption>' + esc(f[1]) + '</figcaption>' + (f[2] ? '<button class="snd" type="button" data-snd>🔊 Activer le son</button>' : '') + '</figure>';
      }).join('');
    });
    d.addEventListener('click', function (e) { var b = e.target.closest('[data-snd]'); if (!b) return; var v = b.parentNode.querySelector('video'); v.muted = !v.muted; b.textContent = v.muted ? '🔊 Activer le son' : '🔇 Couper le son'; if (!v.muted) { v.currentTime = 0; v.play(); } });
  }
  function videos() {
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { var v = e.target; if (e.isIntersecting) { if (v.preload === 'none') { v.preload = 'auto'; v.load(); } var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } else v.pause(); });
    }, { threshold: .25 }) : null;
    $$('video[data-auto]').forEach(function (v) { v.muted = true; v.defaultMuted = true; if (io) io.observe(v); });
  }

  /* ---------- quiz « Trouvez votre parfum » ---------- */
  function quiz() {
    $$('[data-quiz]').forEach(function (el) {
      var st = { g: '', f: '', u: '' }, step = 0;
      var Q = [
        ['g', 'C’est pour qui ?', [['F', 'Pour elle'], ['H', 'Pour lui'], ['', 'Peu importe']]],
        ['f', 'Quelle ambiance vous attire ?', Object.keys(D.fam).map(function (k) { return [k, D.fam[k].n, D.fam[k].e]; })],
        ['u', 'Vous cherchez…', [['p', 'Un parfum'], ['d', 'Un déodorant'], ['', 'Les deux']]]
      ];
      function draw() {
        if (step < Q.length) {
          var q = Q[step];
          el.innerHTML = '<div class="qz-h"><span>Question ' + (step + 1) + ' / 3</span><i style="--w:' + ((step) / 3 * 100) + '%"></i></div><h3>' + q[1] + '</h3><div class="qz-o">' + q[2].map(function (o) { return '<button type="button" data-v="' + o[0] + '">' + esc(o[1]) + (o[2] ? '<small>' + esc(o[2]) + '</small>' : '') + '</button>'; }).join('') + '</div>' + (step ? '<button class="qz-b" type="button" data-back>← Retour</button>' : '');
          $$('[data-v]', el).forEach(function (b) { b.onclick = function () { st[q[0]] = b.getAttribute('data-v'); step++; draw(); }; });
          var bk = $('[data-back]', el); if (bk) bk.onclick = function () { step--; draw(); };
        } else {
          var r = D.P.filter(function (p) { return p.f && (!st.u || p.u === st.u) && (!st.g || p.g === st.g || p.g === 'M'); })
            .map(function (p) { return [p, (p.f === st.f ? 3 : 0) + (p.u === 'p' ? 1 : 0) + (p.i[0].charAt(0) !== '/' ? .5 : 0)]; })
            .sort(function (a, b) { return b[1] - a[1]; }).slice(0, 4).map(function (x) { return x[0]; });
          el.innerHTML = '<div class="qz-h"><span>Notre sélection pour vous</span><i style="--w:100%"></i></div><h3>' + (st.f ? esc(D.fam[st.f].n) : 'Vos parfums') + '</h3><div class="grid qz-r">' + r.map(X.card).join('') + '</div><button class="qz-b" type="button" data-re>↺ Recommencer</button>';
          $('[data-re]', el).onclick = function () { st = { g: '', f: '', u: '' }; step = 0; draw(); };
        }
      }
      draw();
    });
  }

  /* ---------- catalogue filtrable ---------- */
  function catalogue() {
    var el = $('[data-cat]'); if (!el) return;
    var F = { m: qs('m'), u: qs('u'), g: qs('g'), f: qs('f'), q: '' };
    if (F.m && D.brands[F.m] && ['msl', 'ie', 'na', 'fr', 'dp'].indexOf(F.m) > -1) F.u = 'd';
    var box = $('[data-filters]'), cnt = $('[data-count]');
    var groups = [
      ['u', 'Univers', [['', 'Tout'], ['p', 'Parfums'], ['d', 'Déodorants']]],
      ['m', 'Marque', [['', 'Toutes']].concat(Object.keys(D.brands).map(function (k) { return [k, D.brands[k].n]; }))],
      ['g', 'Pour qui', [['', 'Tous'], ['F', 'Femme'], ['H', 'Homme'], ['M', 'Mixte']]],
      ['f', 'Famille olfactive', [['', 'Toutes']].concat(Object.keys(D.fam).map(function (k) { return [k, D.fam[k].n]; }))]
    ];
    box.innerHTML = '<label class="srch"><span>Rechercher</span><input type="search" placeholder="Nom, marque, note…" data-q></label>' + groups.map(function (g) {
      return '<fieldset><legend>' + g[1] + '</legend><div class="chips">' + g[2].map(function (o) { return '<button type="button" data-k="' + g[0] + '" data-v="' + o[0] + '">' + esc(o[1]) + '</button>'; }).join('') + '</div></fieldset>';
    }).join('');
    function run() {
      $$('[data-k]', box).forEach(function (b) { b.setAttribute('aria-pressed', F[b.getAttribute('data-k')] === b.getAttribute('data-v') ? 'true' : 'false'); });
      var q = F.q.toLowerCase();
      var l = D.P.filter(function (p) {
        return (!F.u || p.u === F.u) && (!F.m || p.b === F.m) && (!F.g || p.g === F.g) && (!F.f || p.f === F.f) &&
          (!q || (p.n + ' ' + X.brand(p) + ' ' + (p.t || []).concat(p.c || [], p.d || []).join(' ')).toLowerCase().indexOf(q) > -1);
      });
      X.grid(el, l); cnt.textContent = l.length + (l.length > 1 ? ' produits' : ' produit');
      if (!l.length) el.innerHTML = '<p class="empty">Aucun produit ne correspond. <button type="button" data-reset>Effacer les filtres</button></p>';
      var rs = $('[data-reset]', el); if (rs) rs.onclick = function () { F = { m: '', u: '', g: '', f: '', q: '' }; $('[data-q]', box).value = ''; run(); };
    }
    box.addEventListener('click', function (e) { var b = e.target.closest('[data-k]'); if (!b) return; F[b.getAttribute('data-k')] = b.getAttribute('data-v'); run(); });
    $('[data-q]', box).addEventListener('input', function (e) { F.q = e.target.value.trim(); run(); });
    var tg = $('[data-ftoggle]'); if (tg) tg.onclick = function () { d.body.classList.toggle('f-open'); };
    run();
  }

  /* ---------- fiche produit ---------- */
  function product() {
    var el = $('[data-prod]'); if (!el) return;
    var p = byId[qs('p')] || byId['palais-royal'];
    var pyr = p.t ? '<div class="pyr"><h4>Pyramide olfactive</h4>' + [['Tête', p.t, 'Les premières minutes'], ['Cœur', p.c, 'Après 30 minutes'], ['Fond', p.d, 'Le sillage qui reste']].filter(function (r) { return r[1] && r[1].length; }).map(function (r, i) {
      return '<div class="pyr-r pyr-' + i + '"><div><b>' + r[0] + '</b><small>' + r[2] + '</small></div><ul>' + r[1].map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></div>';
    }).join('') + '</div>' : '';
    var duo = p.duo && byId[p.duo] ? '<a class="pduo" href="' + X.url(byId[p.duo]) + '">' + X.img(byId[p.duo]) + '<span><small>' + (p.u === 'p' ? 'Son déodorant assorti' : 'Le parfum d’origine') + '</small><b>' + esc(byId[p.duo].n) + '</b></span><em>→</em></a>' : '';
    var sim = D.P.filter(function (q) { return q.id !== p.id && q.u === p.u && (q.f && q.f === p.f || q.b === p.b); }).slice(0, 4);
    d.title = 'Sopalux 2000';
    el.innerHTML = '<nav class="crumb"><a href="index.html">Accueil</a><span>/</span><a href="parfums.html?m=' + p.b + '">' + esc(D.brands[p.b].n) + '</a><span>/</span>' + esc(p.n) + '</nav>' +
      '<div class="pd"><div class="pd-g">' + X.img(p, 'pd-im', 1) + '</div><div class="pd-i"><small class="pd-b">' + esc(X.brand(p)) + (D.brands[p.b].o ? ' · ' + esc(D.brands[p.b].o) : '') + '</small><h1>' + esc(p.n) + '</h1>' +
      '<div class="pd-m"><span>' + esc(X.kind(p)) + '</span><span>' + esc(X.gen(p)) + '</span>' + (p.f ? '<span>' + esc(X.fam(p)) + '</span>' : '') + '</div>' +
      (p.lieu ? '<p class="pd-l"><b>L’inspiration</b>' + esc(p.lieu) + '</p>' : '<p class="pd-l">' + esc(p.s || D.brands[p.b].s) + '</p>') + pyr + duo +
      '<div class="pd-c"><button class="btn b1" type="button" data-order="' + p.id + '">Commander · paiement à la livraison</button><button class="btn b2" type="button" data-addq="' + p.id + '">Ajouter à ma liste revendeur</button></div>' +
      '<ul class="pd-ok"><li>Livraison dans les 58 wilayas</li><li>Paiement à la réception</li><li>Prix revendeur sur devis</li></ul></div></div>' +
      (sim.length ? '<section class="sim"><h2>Vous aimerez aussi</h2><div class="grid">' + sim.map(X.card).join('') + '</div></section>' : '');
  }

  /* ---------- liste de devis revendeur ---------- */
  var Q = {}; try { Q = JSON.parse(ls('sx-devis') || '{}') || {}; } catch (e) { Q = {}; }
  function saveQ() { ls('sx-devis', JSON.stringify(Q)); var n = Object.keys(Q).length; $$('[data-qn]').forEach(function (b) { b.textContent = n; b.hidden = !n; }); drawQ(); }
  X.addQ = function (id) { if (!byId[id]) return; Q[id] = Q[id] || (C.minQ || 10); saveQ(); X.toast('« ' + byId[id].n + ' » ajouté à votre liste revendeur'); };
  function drawQ() {
    var el = $('[data-devis]'); if (!el) return;
    var ids = Object.keys(Q).filter(function (k) { return byId[k]; });
    el.innerHTML = ids.length ? '<ul class="dv">' + ids.map(function (k) {
      var p = byId[k];
      return '<li>' + X.img(p) + '<div><small>' + esc(X.brand(p)) + '</small><b>' + esc(p.n) + '</b></div><label><span>Quantité</span><input type="number" min="1" step="1" value="' + Q[k] + '" data-qq="' + k + '" inputmode="numeric"></label><button type="button" aria-label="Retirer" data-qx="' + k + '">✕</button></li>';
    }).join('') + '</ul><p class="dv-s">' + ids.length + ' référence' + (ids.length > 1 ? 's' : '') + ' · ' + ids.reduce(function (s, k) { return s + (+Q[k] || 0); }, 0) + ' unités</p>' :
      '<p class="dv-e">Votre liste est vide. Ajoutez des références depuis le <a href="parfums.html">catalogue</a>.</p>';
  }
  d.addEventListener('click', function (e) {
    var a = e.target.closest('[data-addq]'); if (a) { e.preventDefault(); X.addQ(a.getAttribute('data-addq')); }
    var x = e.target.closest('[data-qx]'); if (x) { delete Q[x.getAttribute('data-qx')]; saveQ(); }
    var o = e.target.closest('[data-order]'); if (o) X.order(o.getAttribute('data-order'));
  });
  d.addEventListener('change', function (e) { var i = e.target.closest('[data-qq]'); if (i) { Q[i.getAttribute('data-qq')] = Math.max(1, parseInt(i.value, 10) || 1); saveQ(); } });

  /* ---------- formulaires (fictifs) ---------- */
  X.wilayas = function () { return D.W.map(function (w, i) { return '<option>' + (i < 9 ? '0' : '') + (i + 1) + ' · ' + esc(w) + '</option>'; }).join(''); };
  function forms() {
    $$('select[data-wil]').forEach(function (s) { s.innerHTML = '<option value="">Votre wilaya</option>' + X.wilayas(); });
    $$('form[data-demo]').forEach(function (f) {
      f.addEventListener('submit', function (e) { e.preventDefault(); X.toast(f.getAttribute('data-demo') || 'Démonstration : le formulaire n’est pas envoyé.'); f.reset(); });
    });
  }
  X.order = function (id) {
    var p = byId[id], m = d.createElement('div'); m.className = 'md on';
    m.innerHTML = '<div class="md-b" role="dialog" aria-modal="true" aria-label="Commander"><button class="md-x" type="button" aria-label="Fermer">✕</button><div class="md-p">' + X.img(p) + '<div><small>' + esc(X.brand(p)) + '</small><b>' + esc(p.n) + '</b></div></div><h3>Commander, payer à la livraison</h3><form><label>Nom et prénom<input required autocomplete="name"></label><label>Téléphone<input required type="tel" inputmode="tel" autocomplete="tel"></label><label>Wilaya<select required data-wil></select></label><label>Quantité<input type="number" min="1" value="1" inputmode="numeric"></label><button class="btn b1" type="submit">Valider la commande</button><p class="md-n">Démonstration : aucune commande n’est envoyée.</p></form></div>';
    d.body.appendChild(m); $('select', m).innerHTML = '<option value="">Choisir</option>' + X.wilayas();
    var close = function () { m.remove(); };
    m.addEventListener('click', function (e) { if (e.target === m || e.target.closest('.md-x')) close(); });
    $('form', m).onsubmit = function (e) { e.preventDefault(); close(); X.toast('Démonstration : la commande serait transmise à Sopalux 2000, confirmation par téléphone.'); };
  };

  X.toast = function (t) {
    var el = $('.toast') || d.body.appendChild(Object.assign(d.createElement('div'), { className: 'toast' }));
    el.textContent = t; el.classList.add('on'); clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('on'); }, 3200);
  };

  /* ---------- en-tête, apparitions, compteurs ---------- */
  function chrome() {
    var bu = $('[data-burger]'); if (bu) bu.onclick = function () { var o = d.body.classList.toggle('nav-open'); bu.setAttribute('aria-expanded', o); };
    $$('.nav a').forEach(function (a) { a.addEventListener('click', function () { d.body.classList.remove('nav-open'); }); });
    var pg = d.body.getAttribute('data-page'); $$('[data-nav="' + pg + '"]').forEach(function (a) { a.setAttribute('aria-current', 'page'); });
    var hd = $('.hd'); var sc = function () { if (hd) hd.classList.toggle('sc', scrollY > 30); }; addEventListener('scroll', sc, { passive: true }); sc();
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
      $$('.rv').forEach(function (e) { io.observe(e); });
    } else $$('.rv').forEach(function (e) { e.classList.add('in'); });
    $$('[data-cnt-p]').forEach(function (el) { el.setAttribute('data-cnt', D.P.filter(function (p) { return p.u === el.getAttribute('data-cnt-p'); }).length); });
    $$('[data-cnt]').forEach(function (el) {
      var to = parseFloat(el.getAttribute('data-cnt')), dec = (el.getAttribute('data-cnt').split('.')[1] || '').length, suf = el.getAttribute('data-suf') || '', done = 0;
      var go = function () { if (done) return; done = 1; var t0 = performance.now(); (function f(t) { var k = Math.min(1, (t - t0) / 1400); el.textContent = (to * (1 - Math.pow(1 - k, 3))).toFixed(dec).replace('.', ',') + suf; if (k < 1) requestAnimationFrame(f); })(t0); };
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { go(); o.disconnect(); } }).observe(el); else go();
    });
    $$('[data-pcount]').forEach(function (el) { var u = el.getAttribute('data-pcount'); el.textContent = D.P.filter(function (p) { return !u || p.u === u; }).length; });
  }

  /* ---------- diaporama, rails, pop-up d'accueil ---------- */
  function sliders() {
    $$('[data-slider]').forEach(function (el) {
      var sl = $$('.sl', el), cur = 0, tm, n = sl.length; if (!n) return;
      var dots = d.createElement('div'); dots.className = 'sl-dots';
      dots.innerHTML = sl.map(function (s, i) { return '<button type="button" aria-label="Diapositive ' + (i + 1) + '"></button>'; }).join('');
      el.appendChild(dots);
      var nav = d.createElement('div'); nav.className = 'sl-nav';
      nav.innerHTML = '<button type="button" aria-label="Précédent" data-p>‹</button><button type="button" aria-label="Suivant" data-n>›</button>';
      el.appendChild(nav);
      function go(i) {
        cur = (i + n) % n;
        sl.forEach(function (s, k) { s.classList.toggle('on', k === cur); });
        $$('button', dots).forEach(function (b, k) { b.setAttribute('aria-current', k === cur); });
        clearTimeout(tm); tm = setTimeout(function () { go(cur + 1); }, +(el.getAttribute('data-slider') || 5500));
      }
      $$('button', dots).forEach(function (b, k) { b.onclick = function () { go(k); }; });
      $('[data-p]', nav).onclick = function () { go(cur - 1); }; $('[data-n]', nav).onclick = function () { go(cur + 1); };
      var sx = 0; el.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
      el.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 45) go(cur + (dx < 0 ? 1 : -1)); }, { passive: true });
      go(0);
    });
  }
  function rails() {
    $$('[data-rail]').forEach(function (el) {
      var ids = el.getAttribute('data-rail').split(','), l = ids.map(function (k) { return byId[k]; }).filter(Boolean);
      var tr = d.createElement('div'); tr.className = 'rail'; tr.innerHTML = l.map(X.card).join('');
      var nav = d.createElement('div'); nav.className = 'rail-nav';
      nav.innerHTML = '<button type="button" aria-label="Précédent">←</button><button type="button" aria-label="Suivant">→</button>';
      var bs = $$('button', nav);
      bs[0].onclick = function () { tr.scrollBy({ left: -tr.clientWidth * .8, behavior: 'smooth' }); };
      bs[1].onclick = function () { tr.scrollBy({ left: tr.clientWidth * .8, behavior: 'smooth' }); };
      el.appendChild(tr); el.appendChild(nav);
    });
  }
  function welcome() {
    var m = $('[data-welcome]'); if (!m) return;
    var k = 'wel-' + location.pathname.split('/')[1];
    m.addEventListener('click', function (e) { if (e.target === m || e.target.closest('.md-x') || e.target.closest('[data-wc]')) m.classList.remove('on'); });
    if (ls(k)) return;
    setTimeout(function tryOpen() { if ($('.md.on')) return setTimeout(tryOpen, 4000); ls(k, '1'); m.classList.add('on'); }, +(m.getAttribute('data-welcome') || 7000));
  }

  /* ---------- versions, intérêt (WhatsApp), protection ---------- */
  function versions() {
    var cur = location.pathname.replace(/[^/]*$/, '');
    var w = d.createElement('div'); w.className = 'wv';
    w.innerHTML = '<ul>' + D.V.filter(function (v) { return v[0] !== cur; }).map(function (v) { return '<li><a href="' + v[0] + '">' + esc(v[1]) + '<small>' + esc(v[2]) + '</small></a></li>'; }).join('') + '</ul><button type="button" aria-expanded="false"><i></i>Découvrir les autres versions</button>';
    d.body.appendChild(w);
    var b = $('button', w); b.onclick = function () { var o = w.classList.toggle('open'); b.setAttribute('aria-expanded', o); };
    d.addEventListener('click', function (e) { if (!w.contains(e.target)) { w.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); } });
  }
  function lead() {
    var cur = location.pathname.replace(/[^/]*$/, ''), ci = 0; D.V.forEach(function (v, i) { if (v[0] === cur) ci = i; });
    var off = d.createElement('div'); off.className = 'md wl';
    off.innerHTML = '<div class="md-b wl-o" role="dialog" aria-modal="true" aria-label="Offre réseaux sociaux"><button class="md-x" type="button" aria-label="Fermer">✕</button><span class="wl-t">OFFERT</span><div class="wl-big">1 mois<small>de gestion de vos réseaux sociaux</small></div><p>Pour la création de votre site, Webminds gère gratuitement vos pages Facebook et Instagram pendant le premier mois.</p><button class="btn b1" type="button" data-wi>Ça m’intéresse</button><button class="btn b3" type="button" data-wc>Continuer la visite</button></div>';
    var it = d.createElement('div'); it.className = 'md wl';
    it.innerHTML = '<div class="md-b" role="dialog" aria-modal="true" aria-label="Ça m’intéresse"><button class="md-x" type="button" aria-label="Fermer">✕</button><div data-s1><h3>Cette maquette vous plaît ?</h3><p>Choisissez la version qui vous intéresse : Webminds vous recontacte pour vous la présenter.</p><div class="wl-ch">' + D.V.map(function (v, i) { return '<label><input type="radio" name="wlv" value="' + esc(v[1]) + '"' + (i === ci ? ' checked' : '') + '><span>' + esc(v[1]) + '<small>' + esc(v[2]) + '</small></span></label>'; }).join('') + '<label><input type="checkbox" value="Gestion des réseaux sociaux (1 mois offert)"><span>+ Réseaux sociaux<small>1 mois de gestion offert avec le site</small></span></label></div><div class="wl-f"><input name="n" placeholder="Votre nom" autocomplete="name"><input name="t" type="tel" inputmode="tel" placeholder="Votre téléphone (facultatif)" autocomplete="tel"></div><button class="btn wa" type="button" data-ww>Envoyer sur WhatsApp</button></div><div data-s2 hidden class="wl-ok"><i>✓</i><h3>Merci !</h3><p>Votre choix a bien été transmis à Webminds.</p><button class="btn b1" type="button" data-wc>Continuer la visite</button></div></div>';
    d.body.appendChild(off); d.body.appendChild(it);
    var bt = d.createElement('button'); bt.type = 'button'; bt.className = 'wi'; bt.innerHTML = '<b>♥</b>Ça m’intéresse'; d.body.appendChild(bt);
    var op = function (m) { off.classList.remove('on'); it.classList.remove('on'); m.classList.add('on'); };
    [off, it].forEach(function (m) { m.addEventListener('click', function (e) { if (e.target === m || e.target.closest('.md-x') || e.target.closest('[data-wc]')) m.classList.remove('on'); }); });
    bt.onclick = function () { op(it); }; $('[data-wi]', off).onclick = function () { op(it); };
    $('[data-ww]', it).onclick = function () {
      var v = ($('input[name=wlv]:checked', it) || {}).value || D.V[ci][1], x = $$('input[type=checkbox]:checked', it).map(function (c) { return c.value; }), n = $('[name=n]', it).value.trim(), t = $('[name=t]', it).value.trim();
      var txt = 'Bonjour Webminds, la maquette Sopalux 2000 m’intéresse.\nVersion préférée : ' + v + (x.length ? '\nEn plus : ' + x.join(', ') : '') + (n ? '\nNom : ' + n : '') + (t ? '\nTéléphone : ' + t : '') + '\nLien : ' + location.origin + D.V[ci][0];
      $('[data-s1]', it).hidden = true; $('[data-s2]', it).hidden = false;
      location.href = 'https://wa.me/' + D.wa + '?text=' + encodeURIComponent(txt);
    };
    var shown = ls('wm-off');
    addEventListener('scroll', function () { if (shown || $('.md.on')) return; var r = (scrollY + innerHeight) / d.documentElement.scrollHeight; if (scrollY > 500 && r > .3) { shown = 1; ls('wm-off', '1'); op(off); } }, { passive: true });
  }
  function protect() {
    var wm = d.createElement('div'); wm.className = 'wmk'; wm.setAttribute('aria-hidden', 'true');
    var day = new Date(), ds = ('0' + day.getDate()).slice(-2) + '/' + ('0' + (day.getMonth() + 1)).slice(-2) + '/' + day.getFullYear();
    var s = ''; for (var i = 0; i < 60; i++) s += '<span>MAQUETTE CONFIDENTIELLE · WEBMINDS · SOPALUX 2000 · ' + ds + '</span>';
    wm.innerHTML = s; d.body.appendChild(wm);
    var bn = d.createElement('div'); bn.className = 'demo'; bn.textContent = 'Maquette de démonstration réalisée par Webminds · les formulaires du site sont fictifs'; d.body.appendChild(bn);
    var ok = function (t) { return t && t.closest && t.closest('input,textarea,select,[contenteditable]'); };
    ['contextmenu', 'dragstart', 'selectstart', 'copy', 'cut'].forEach(function (ev) { d.addEventListener(ev, function (e) { if (!ok(e.target)) e.preventDefault(); }); });
    d.addEventListener('keydown', function (e) {
      var k = (e.key || '').toLowerCase(), m = e.ctrlKey || e.metaKey;
      if (k === 'f12' || (m && ['s', 'u', 'p'].indexOf(k) > -1) || (m && e.shiftKey && ['i', 'j', 'c'].indexOf(k) > -1) || (m && e.altKey && ['i', 'j', 'u'].indexOf(k) > -1) || k === 'printscreen') {
        e.preventDefault(); if (k === 'printscreen') { d.body.classList.add('veil'); setTimeout(function () { d.body.classList.remove('veil'); }, 1200); }
      }
    });
    d.addEventListener('visibilitychange', function () { d.body.classList.toggle('veil', d.hidden); });
    addEventListener('blur', function () { d.body.classList.add('veil'); }); addEventListener('focus', function () { d.body.classList.remove('veil'); });
  }

  /* ---------- démarrage ---------- */
  function start() {
    protect(); sliders(); rails(); chrome(); tabs(); duos(); deos(); films(); quiz(); catalogue(); product(); forms(); videos(); versions(); lead(); welcome(); saveQ();
    if (C.init) C.init(X, D);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start); else start();
})();
