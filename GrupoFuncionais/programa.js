
function exibirNotificacao(){
  const exemplo = " C4H7OH ";
  const nome = " Amida "
  const gramatica = " e escreva corretamente a palavra."
  const palavraGrande = "Ácido acético"
  alert(`Para escrever a fórmula molécular, escreva as letras maiúsculas. Por exemplo: ${exemplo}. Para digitar o nome do grupo funcional, utilize a primeira letra maiúscula. Por exemplo: ${nome}, ${palavraGrande} ${gramatica} Estamos processando sua aplicação. Obrigado! `)

 
 }
const imagens = {
  //'Amida': 'https://64f16a77535ac72203983d6b--melodic-taffy-313de1.netlify.app/125px-FunktionelleGruppen_Carbons%C3%A4ureanhydrid.svg-removebg-preview.png',
  'Álcool': ' https://wezelhis12.github.io/alcool/37b9d8ee-8dab-416a-8b00-7f5ae755855c-removebg-preview.png',
  'Fenol': 'https://64b2bc2a8584bd1c53a707d8--incredible-melomakarona-e01338.netlify.app/fenol-removebg-preview.png',
  'Éter': 'https://wezelhis12.github.io/3/120px-Ether-_general_-removebg-preview.png',
  'Aldeído': 'https://64b2cee58ca8dd282332aa16--helpful-longma-83c404.netlify.app/aldeido-estrutura-geral-removebg-preview.png',
  'Cetona': 'https://64f16bd39983eb23e9fc95f0--soft-sable-c5c214.netlify.app/cetona-300x252-removebg-preview.png',
  'Éster': 'https://64f16b03afccd1202c693af2--celebrated-haupia-385345.netlify.app/ester.png',
  'Anidrido': 'https://64f16bb245401d2324aedeac--sparkling-toffee-50c550.netlify.app/125px-FunktionelleGruppen_Carbons%C3%A4ureanhydrid.svg-removebg-preview.png',
  'Amina': '',
  'C4H10O': 'https://wondrous-monstera-59d708.netlify.app/Benzanoico.png',
  //Metóxi-propano': 'https://wondrous-monstera-59d708.netlify.app/Benzanoico.png',
  //'C8H10O': 'https://magenta-madeleine-f9d1a8.netlify.app/Benzanoico.png',

 //ÁCIDO
  'Ácido Carboxílico': 'https://64f146f004eefe110629e887--admirable-belekoy-f8bea1.netlify.app/acido-carboxilico-removebg-preview.png',
  'Ácido': 'https://64f146733172de1100b966b4--sparkling-horse-35a65b.netlify.app/117096999_3446995945310903_1157242714007837711_n-removebg-preview.png',
  'Ácido acético': 'https://64f1468704eefe113629e82d--deluxe-profiterole-c8e29e.netlify.app/formulaacidoacetico-cke-removebg-preview.png',
  'Ácido benzóico': 'https://64f146bca0b54c10644a276e--elaborate-meringue-8ef9a9.netlify.app/Benzanoico.png',
  'C7H602': 'https://64f146bca0b54c10644a276e--elaborate-meringue-8ef9a9.netlify.app/Benzanoico.png',
  'Ácido butírico': 'https://64f146d8f4e4b010b1238ebb--effortless-strudel-52d636.netlify.app/Benzanoico.png',
  'Ácido cítrico': 'https://64f1471f45401d112aaee034--superlative-scone-d7793b.netlify.app/Benzanoico.png',
  'Ácido etanóico': 'https://64f14739c5bb2e0fc790f3a2--joyful-meringue-966988.netlify.app/Benzanoico.png',
  //'Ácido formíco':'',
  'Ácido nítrico': 'https://64f1477b7069f60e5ba28fac--silly-conkies-26e75a.netlify.app/Benzanoico.png',
  'Ácido pentanoico': 'https://64f1478c7069f60f38a28d41--radiant-yeot-98584a.netlify.app/Benzanoico.png',
  'Ácido propanóico': 'https://64f14817e5326011e5208f61--profound-dragon-7cd454.netlify.app/Benzanoico.png',
  'Ácido sufúrico': 'https://64f147ffafccd10e95696fb6--shiny-dragon-52959e.netlify.app/Benzanoico.png',
  'Ácido valério': 'https://64f14832535ac71144983da9--startling-strudel-f1f6be.netlify.app/Benzanoico.png',
  //ÁCIDO


  
  //ÉTER
  'Etóxi-benzeno': 'https://64f14b19f4e4b01441238c39--splendorous-lily-fc3647.netlify.app/Benzanoico.png',
  'Etóxi-butano': 'https://64f14b36b27a5414a0afa4f8--chipper-seahorse-4feeae.netlify.app/Benzanoico.png',
  'C6H14O': 'https://64f14b36b27a5414a0afa4f8--chipper-seahorse-4feeae.netlify.app/Benzanoico.png',
  'Etóxi-dectano': 'https://64f14b75e53260140b208eb7--melodious-lily-639ea7.netlify.app/Benzanoico.png',
  'C12H26O': 'https://64f14b75e53260140b208eb7--melodious-lily-639ea7.netlify.app/Benzanoico.png',
  'Etóxi-etano': 'https://64f14edf099ed8110efa538b--idyllic-manatee-833448.netlify.app/Benzanoico.png',
  'C4H10O': 'https://64f14edf099ed8110efa538b--idyllic-manatee-833448.netlify.app/Benzanoico.png',
  'Etóxi-heptano': 'https://64f14f369983eb14b6fc94f4--bejewelled-stardust-115565.netlify.app/Benzanoico.png',
  'C9H20O': 'https://64f14f369983eb14b6fc94f4--bejewelled-stardust-115565.netlify.app/Benzanoico.png',
  'Etóxi-hexano': 'https://64f14f52e5326016242091a5--resonant-bavarois-6d7ac2.netlify.app/Benzanoico.png',
  'C8H18O': 'https://64f14f52e5326016242091a5--resonant-bavarois-6d7ac2.netlify.app/Benzanoico.png',
  'Etóxi-nonano': 'https://64f14f6626c22214b6bb7fb6--peppy-pudding-5945ee.netlify.app/Benzanoico.png',
  'C11H24O': 'https://64f14f6626c22214b6bb7fb6--peppy-pudding-5945ee.netlify.app/Benzanoico.png',
  'Etóxi-octano': 'https://64f14f92c1b6bb166bb99abc--comforting-salamander-f3191d.netlify.app/Benzanoico.png',
  'C10H22O': 'https://64f14f92c1b6bb166bb99abc--comforting-salamander-f3191d.netlify.app/Benzanoico.png',
  'Etóxi-pentano': 'https://64f14fb2f4e4b015bf238c42--keen-zuccutto-de1619.netlify.app/Benzanoico.png',
  'C7H16O':'https://64f14fb2f4e4b015bf238c42--keen-zuccutto-de1619.netlify.app/Benzanoico.png',
  'Etóxi-propano': 'https://64f15666099ed814f6fa52f1--teal-fudge-52d99b.netlify.app/Benzanoico.png',
  'C5H12O': 'https://64f15666099ed814f6fa52f1--teal-fudge-52d99b.netlify.app/Benzanoico.png',

'Metóxi-butano': 'https://64f1567a04eefe18bf29e871--chic-strudel-319dd9.netlify.app/Benzanoico.png',
'C5H12O': 'https://64f1567a04eefe18bf29e871--chic-strudel-319dd9.netlify.app/Benzanoico.png',
'Metóxi-etano': 'https://64f15692b27a541b2eafa490--velvety-melomakarona-1b3ef8.netlify.app/Benzanoico.png',
'C3H8O': 'https://64f15692b27a541b2eafa490--velvety-melomakarona-1b3ef8.netlify.app/Benzanoico.png',
'Metóxi-heptano': 'https://64f156ade532601985208fef--stirring-mandazi-8cd536.netlify.app/Benzanoico.png',
'C8H18O': 'https://64f156ade532601985208fef--stirring-mandazi-8cd536.netlify.app/Benzanoico.png',
'Metóxi-hexano': 'https://64f156c49983eb18b5fc94fb--tourmaline-malabi-2f09fa.netlify.app/Benzanoico.png',
'C7H16O': 'https://64f156c49983eb18b5fc94fb--tourmaline-malabi-2f09fa.netlify.app/Benzanoico.png',
//'Metóxi-nonano': '',
//'C10H22O': '',
'Metóxi-octano': 'https://64f15717c5bb2e191890f367--classy-chaja-10bfa0.netlify.app/Benzanoico.png',
'C9H20O': 'https://64f15717c5bb2e191890f367--classy-chaja-10bfa0.netlify.app/Benzanoico.png',
'Metóxi-pentano': 'https://64f1579fc1b6bb1aa9b99919--peppy-squirrel-a0972e.netlify.app/Benzanoico.png',
'C6H14O': 'https://64f1579fc1b6bb1aa9b99919--peppy-squirrel-a0972e.netlify.app/Benzanoico.png',
'Metóxi-propano': 'https://64f157b604eefe19e629e8cc--fascinating-seahorse-1225ce.netlify.app/Benzanoico.png',
'C4H10O': 'https://64f157b604eefe19e629e8cc--fascinating-seahorse-1225ce.netlify.app/Benzanoico.png',
//ÉTER


//ALCOOL
'2-Hexanol': 'https://64f15e713172de1d6ab966cd--courageous-bubblegum-d99016.netlify.app/Benzanoico.png',
'C6H14O': 'https://64f15e713172de1d6ab966cd--courageous-bubblegum-d99016.netlify.app/Benzanoico.png',


'2-metilpropan-2-ol': 'https://64f15e86f4e4b01d28238c4d--inquisitive-kulfi-46b4b4.netlify.app/Benzanoico.png',
'C4H9OH': 'https://64f15e86f4e4b01d28238c4d--inquisitive-kulfi-46b4b4.netlify.app/Benzanoico.png',

'3,3-dimetilbutan-2-ol': 'https://64f15ecec1b6bb1e3cb99989--heroic-chebakia-b1872b.netlify.app/Benzanoico.png',
'C6H13OH': 'https://64f15ecec1b6bb1e3cb99989--heroic-chebakia-b1872b.netlify.app/Benzanoico.png',

'3-Hexanol': 'https://64f15ee1afccd11a4d693a77--flourishing-choux-4f525c.netlify.app/Benzanoico.png',
'C6H14O': 'https://64f15ee1afccd11a4d693a77--flourishing-choux-4f525c.netlify.app/Benzanoico.png',

'But-2-en-2-ol ': 'https://64f15ef0e532601e28208ec4--superb-quokka-3bd31b.netlify.app/Benzanoico.png',
'C4H9OH': 'https://64f15ef0e532601e28208ec4--superb-quokka-3bd31b.netlify.app/Benzanoico.png'
,
//'Butan-2-ol': '',  Não tem nada na pasta dele
//'C4H7OH':'', 

'Ciclobutanol':'https://64f15f2504eefe1d7b29ea24--silly-fox-791640.netlify.app/Benzanoico.png',
'C4H7OH':'https://64f15f2504eefe1d7b29ea24--silly-fox-791640.netlify.app/Benzanoico.png',

'Decanol':'https://64f15f36afccd11a40693bf6--earnest-wisp-807c50.netlify.app/Benzanoico.png',
'C10H21OH':'https://64f15f36afccd11a40693bf6--earnest-wisp-807c50.netlify.app/Benzanoico.png',

'Etanol':'https://64f15f45c38df21d641b3a30--gleaming-kashata-676c2c.netlify.app/Benzanoico.png',
'C2H6OH':'https://64f15f45c38df21d641b3a30--gleaming-kashata-676c2c.netlify.app/Benzanoico.png',

'Hexanol':'https://64f15f56c38df21da01b3bb5--effulgent-rolypoly-f392b7.netlify.app/Benzanoico.png',
'C6H14O':'https://64f15f56c38df21da01b3bb5--effulgent-rolypoly-f392b7.netlify.app/Benzanoico.png',


'Nonanol':'https://64f15f7056155b1e791263e0--cheerful-arithmetic-3d87d6.netlify.app/Benzanoico.png',
'C9H19OH':'https://64f15f7056155b1e791263e0--cheerful-arithmetic-3d87d6.netlify.app/Benzanoico.png',

'Octanol ':'https://64f15f81c1b6bb1e9bb998ff--thunderous-melomakarona-591186.netlify.app/Benzanoico.png',
'C8H17OH':'https://64f15f81c1b6bb1e9bb998ff--thunderous-melomakarona-591186.netlify.app/Benzanoico.png',

'Pentan-2-ol':'https://64f15f919983eb1db7fc9818--lighthearted-bublanina-7f31ca.netlify.app/Benzanoico.png',
'C5H11OH':'https://64f15f919983eb1db7fc9818--lighthearted-bublanina-7f31ca.netlify.app/Benzanoico.png',

'Propan-2-ol':'https://64f15fa4e532601e28208fa7--wonderful-gecko-93eb71.netlify.app/Benzanoico.png',
'C3H8O':'https://64f15fa4e532601e28208fa7--wonderful-gecko-93eb71.netlify.app/Benzanoico.png',

'Propanol':'https://64f15fb7b27a542055afa490--phenomenal-semifreddo-5658b8.netlify.app/Benzanoico.png',
'C3H7OH':'https://64f15fb7b27a542055afa490--phenomenal-semifreddo-5658b8.netlify.app/Benzanoico.png',

//ALCOOL



//FENOL
'Benzenodiol':'https://celebrated-treacle-f7fd80.netlify.app/Benzanoico.png',
'C6H6O2':'https://celebrated-treacle-f7fd80.netlify.app/Benzanoico.png',

'Benzenotriol':'https://64ee26a3ce5c8e006e514452--playful-unicorn-0526a4.netlify.app/Benzanoico.png',
'C6H6O3':'https://64ee26a3ce5c8e006e514452--playful-unicorn-0526a4.netlify.app/Benzanoico.png',

'Bromoclorofenol':'https://64f160a54fc8aa1e40e7f3c0--marvelous-kitsune-b8dc1c.netlify.app/Benzanoico.png',
'C6H5BrClO':'https://64f160a54fc8aa1e40e7f3c0--marvelous-kitsune-b8dc1c.netlify.app/Benzanoico.png',

////'Bromofenol':'https://64ee271588a2d700a6dddfbb--spectacular-toffee-acf368.netlify.app/Benzanoico.png', imagem repetida
//'C6H5BrO':'https://64ee271588a2d700a6dddfbb--spectacular-toffee-acf368.netlify.app/Benzanoico.png',

'Diclorofenol':'https://64ee27a63fd610008a55d6b2--profound-taffy-37c903.netlify.app/Benzanoico.png',
'C6H4Cl2O':'https://64ee27a63fd610008a55d6b2--profound-taffy-37c903.netlify.app/Benzanoico.png',

'Dimetilfenol':'https://64ee27cd25b5bb02906d3095--glittering-cobbler-6a7bb3.netlify.app/Benzanoico.png',
'C8H10O':'https://64ee27cd25b5bb02906d3095--glittering-cobbler-6a7bb3.netlify.app/Benzanoico.png',

'Etilhidroxibenzeno':'https://64ee27f6ce5c8e009251447d--stupendous-heliotrope-abd8d2.netlify.app/Benzanoico.png',
'C8H10O':'https://64ee27f6ce5c8e009251447d--stupendous-heliotrope-abd8d2.netlify.app/Benzanoico.png',

'Hidróxi-benzeno':'https://64ee28203fd610009f55d595--candid-khapse-6d0a83.netlify.app/Benzanoico.png',
'C6H6O':'https://64ee28203fd610009f55d595--candid-khapse-6d0a83.netlify.app/Benzanoico.png',

'Trimetilfenol ':'https://64ee2840bbebc702c51028a6--incandescent-conkies-6c2e65.netlify.app/Benzanoico.png',
'C9H12O':'https://64ee2840bbebc702c51028a6--incandescent-conkies-6c2e65.netlify.app/Benzanoico.png',
//FENOL





//'C4H7OH': '',
//'eu': 'https://leafy-twilight-394930.netlify.app/Benzanoico.png',

//'2-etil-3,3-dimetilpentanal': 'https://reliable-chaja-7ae84e.netlify.app/Benzanoico.png',
//'C9H18': 'https://reliable-chaja-7ae84e.netlify.app/Benzanoico.png',

//'2-etil-4-metilpentanal': 'https://heroic-pegasus-edbeeb.netlify.app/Benzanoico.png',
//'C8H15': 'https://heroic-pegasus-edbeeb.netlify.app/Benzanoico.png',

//'2-metilpropanal': '',
//'C4H7O': '',

//'3-metil-3-pentanal': 'https://flourishing-gingersnap-315140.netlify.app/Benzanoico.png',
//'C6H11O': 'https://flourishing-gingersnap-315140.netlify.app/Benzanoico.png',

//'3-metilpent-3-anal': '',
//'C6H9O': '',



// Aldeidos

'2 butanal':'https://64eb44790ade1060de35e3d8--jolly-basbousa-6ea3e6.netlify.app/Benzanoico.png',
'C4H8O':'https://64eb44790ade1060de35e3d8--jolly-basbousa-6ea3e6.netlify.app/Benzanoico.png',

'2,2-dimetilbutanal':'https://64eb4495ee3f7a5a2ab6ff55--splendorous-lollipop-a42873.netlify.app/Benzanoico.png',
'C6H14':'https://64eb4495ee3f7a5a2ab6ff55--splendorous-lollipop-a42873.netlify.app/Benzanoico.png',

'2,3-dimetilbutanal':'https://64eb44cbe5e53c5a2dcb6da9--remarkable-toffee-ed642d.netlify.app/Benzanoico.png',
'C6H14':'https://64eb44cbe5e53c5a2dcb6da9--remarkable-toffee-ed642d.netlify.app/Benzanoico.png',

//'3-metilbutanal':'https://64f1628f099ed81b17fa69c0--moonlit-liger-8468a4.netlify.app/Benzanoico.png',
'C5H10O':'https://64f1628f099ed81b17fa69c0--moonlit-liger-8468a4.netlify.app/Benzanoico.png',

'2-metilpentanal':'https://64eb44f1e5e53c5ae6cb6d7e--musical-piroshki-7d6f05.netlify.app/Benzanoico.png',
'C6H14':'https://64eb44f1e5e53c5ae6cb6d7e--musical-piroshki-7d6f05.netlify.app/Benzanoico.png',

'Aldeído acético':'https://64eb45e013ef6f6402f4b93c--gilded-froyo-961f1f.netlify.app/Benzanoico.png',
'C2H4O':'https://64eb45e013ef6f6402f4b93c--gilded-froyo-961f1f.netlify.app/Benzanoico.png',

'Etanal':'https://64eb45f3d561de60bf06a08c--warm-panda-f4b38b.netlify.app/Benzanoico.png',
'C2H4O':'https://64eb45f3d561de60bf06a08c--warm-panda-f4b38b.netlify.app/Benzanoico.png',

'Fenilbutanal':'https://64eb460980904f5da5692039--cheery-lebkuchen-8d7f67.netlify.app/Benzanoico.png',
'C9H12O':'https://64eb460980904f5da5692039--cheery-lebkuchen-8d7f67.netlify.app/Benzanoico.png',

'Formaldeído':'https://64eb461e4e0fc55e8943b34f--startling-baklava-6cf71c.netlify.app/Benzanoico.png',
'CH2O':'https://64eb461e4e0fc55e8943b34f--startling-baklava-6cf71c.netlify.app/Benzanoico.png',

'Metanal':'https://64eb463285b56b662390dd72--loquacious-croquembouche-4b458d.netlify.app/Benzanoico.png',
'CH2O':'https://64eb463285b56b662390dd72--loquacious-croquembouche-4b458d.netlify.app/Benzanoico.png',

'Propanaldeido':'https://64eb4649c2bf4d5fd1bc5cfd--effortless-sorbet-b9920c.netlify.app/Benzanoico.png',
'C3H6O':'https://64eb4649c2bf4d5fd1bc5cfd--effortless-sorbet-b9920c.netlify.app/Benzanoico.png',

'Propanodial':'https://64eb465ba025aa60549192cc--aesthetic-semifreddo-55dc9e.netlify.app/Benzanoico.png',
'C3H4O2':'https://64eb465ba025aa60549192cc--aesthetic-semifreddo-55dc9e.netlify.app/Benzanoico.png',
//aldeidos


//cetona

//'2-metil-pentan-3-ona':'https://64ee24a988a2d70088dddfbb--creative-torte-a05587.netlify.app/Benzanoico.png',
' C6H12O':'https://64ee24a988a2d70088dddfbb--creative-torte-a05587.netlify.app/Benzanoico.png',

'3-isopropilhexanon-2-ona':'https://64ee2604c8fefb00a96b5637--endearing-pegasus-24a9ce.netlify.app/Benzanoico.png',
'C9H20O':'https://64ee2604c8fefb00a96b5637--endearing-pegasus-24a9ce.netlify.app/Benzanoico.png',

'4-etil-2-metil-hexanona':'https://64ee26323fd610008155d697--dainty-malasada-28c676.netlify.app/Benzanoico.png',
'C7H140':'https://64ee26323fd610008155d697--dainty-malasada-28c676.netlify.app/Benzanoico.png',

'4-etil-4-penten-2-ona':'https://64ee2649823b400082d871bb--precious-pithivier-2b64ec.netlify.app/Benzanoico.png',
'C7H13O':'https://64ee2649823b400082d871bb--precious-pithivier-2b64ec.netlify.app/Benzanoico.png',

'5-metil-hexan-2-ona':'https://64ee266f95c9e2009c5e03ad--keen-melomakarona-a54766.netlify.app/Benzanoico.png',
'C7H14O':'https://64ee266f95c9e2009c5e03ad--keen-melomakarona-a54766.netlify.app/Benzanoico.png',

'Cicloexanona':'https://64ee269e95c9e200745eb985--precious-salmiakki-33095b.netlify.app/Benzanoico.png',
'C6H16':'https://64ee269e95c9e200745eb985--precious-salmiakki-33095b.netlify.app/Benzanoico.png',

'Ciclohex-3-nona':'',

'Etil-propil-cetona':'https://64ee26b788a2d70084dde025--fluffy-entremet-3d36f9.netlify.app/Benzanoico.png',
'C6H120':'https://64ee26b788a2d70084dde025--fluffy-entremet-3d36f9.netlify.app/Benzanoico.png',

'hex-1-en-3-ona':'https://64ee26fbc8fefb00806b5ab3--peaceful-alfajores-a29ec7.netlify.app/Benzanoico.png',
'C6H10O':'https://64ee26fbc8fefb00806b5ab3--peaceful-alfajores-a29ec7.netlify.app/Benzanoico.png',

'Metil-etil-cetona':'https://64ee2710683a79007bf3267d--cute-medovik-081a69.netlify.app/Benzanoico.png',
'C4H80':'https://64ee2710683a79007bf3267d--cute-medovik-081a69.netlify.app/Benzanoico.png',

'Metil-fenil-cetona':'https://64ee272f080d55009a45b8aa--legendary-dragon-13933e.netlify.app/Benzanoico.png',
'C8H14O':'https://64ee272f080d55009a45b8aa--legendary-dragon-13933e.netlify.app/Benzanoico.png',

'Pentan-3-ona':'https://64ee276c683a790077f3268e--incomparable-rolypoly-71cbc7.netlify.app/Benzanoico.png',
'C5H10O':'https://64ee276c683a790077f3268e--incomparable-rolypoly-71cbc7.netlify.app/Benzanoico.png',

'3,3-dimetil-hexan-2-ona':'https://64ee2b5f3a9d5303e3958793--playful-sorbet-d1a755.netlify.app/Benzanoico.png',
'C8H160':'https://64ee2b5f3a9d5303e3958793--playful-sorbet-d1a755.netlify.app/Benzanoico.png',

'4-metilpenta-2-ona':'https://64ee2c1ece5c8e055251448d--delicate-bienenstitch-90ff20.netlify.app/Benzanoico.png',
'C6H12O':'https://64ee2c1ece5c8e055251448d--delicate-bienenstitch-90ff20.netlify.app/Benzanoico.png',

'Acetofenona':'https://64ee2cbfbbebc705891028a0--tiny-gumption-2d1bab.netlify.app/Benzanoico.png',
'C8H8O':'https://64ee2cbfbbebc705891028a0--tiny-gumption-2d1bab.netlify.app/Benzanoico.png',

'Acetona ':'https://64ee2d3cbe000406207ec325--wonderful-douhua-d51390.netlify.app/Benzanoico.png',
'(C3H6O)':'https://64ee2d3cbe000406207ec325--wonderful-douhua-d51390.netlify.app/Benzanoico.png',


'Benzofenona':'https://64ee2d9725b5bb07626c6c0b--brilliant-bunny-d934ce.netlify.app/Benzanoico.png',
'C13H10O':'https://64ee2d9725b5bb07626c6c0b--brilliant-bunny-d934ce.netlify.app/Benzanoico.png',

'Hept-2-ona':'https://64ee2f12ae869e00775dc643--fabulous-torrone-659b17.netlify.app/Benzanoico.png',
'C7H14O':'https://64ee2f12ae869e00775dc643--fabulous-torrone-659b17.netlify.app/Benzanoico.png',

'Heptan-2-ona':'https://64ee2f8c4fe00e07f86224b8--eclectic-frangipane-4dcd58.netlify.app/Benzanoico.png',
'C7H14O':'https://64ee2f8c4fe00e07f86224b8--eclectic-frangipane-4dcd58.netlify.app/Benzanoico.png',

'Pentan-2,3-diona':'https://64ee30272e1b7a03e709c3d4--earnest-belekoy-d4b54f.netlify.app/Benzanoico.png',
'C6H802':'https://64ee30272e1b7a03e709c3d4--earnest-belekoy-d4b54f.netlify.app/Benzanoico.png',

'pentan-2-ona':'https://64ee30ecbbebc70803102839--kaleidoscopic-croquembouche-b91eb3.netlify.app/Benzanoico.png',
'C5H10O':'https://64ee30ecbbebc70803102839--kaleidoscopic-croquembouche-b91eb3.netlify.app/Benzanoico.png',


'Propanona':'https://64ee313612adfc07af62c0a6--visionary-sprite-ce4f83.netlify.app/Benzanoico.png',
'C3H6O':'https://64ee313612adfc07af62c0a6--visionary-sprite-ce4f83.netlify.app/Benzanoico.png',

'Ciclobutanona':'https://64ee320e4fe00e0a366224fd--lighthearted-zuccutto-9b0bb6.netlify.app/Benzanoico.png',
' C4H6O':'https://64ee320e4fe00e0a366224fd--lighthearted-zuccutto-9b0bb6.netlify.app/Benzanoico.png',


'Butan-2-ona':'https://64ee32c4927dea008e7747ba--helpful-mousse-492dae.netlify.app/Benzanoico.png',
' C4H8O':'https://64ee32c4927dea008e7747ba--helpful-mousse-492dae.netlify.app/Benzanoico.png',
//cetona



//hidrocarbonetos

'Buteno':'https://64eb3b6013ef6f5e42f4d15b--taupe-nougat-1b308d.netlify.app/Benzanoico.png',
'':'https://64eb3b6013ef6f5e42f4d15b--taupe-nougat-1b308d.netlify.app/Benzanoico.png',

'Deceno':'https://64eb3d5efb981f5bacacea91--benevolent-truffle-55fcb5.netlify.app/Benzanoico.png',
'':'https://64eb3d5efb981f5bacacea91--benevolent-truffle-55fcb5.netlify.app/Benzanoico.png',

'Hepteno':'https://64eb3e6f4e0fc559bc43b503--sprightly-bombolone-5a64ec.netlify.app/Benzanoico.png',
'':'https://64eb3e6f4e0fc559bc43b503--sprightly-bombolone-5a64ec.netlify.app/Benzanoico.png',

'Hexeno':'https://64eb3f3fc2bf4d5bd4bc5dc9--courageous-mermaid-26884e.netlify.app/Benzanoico.png',
'':'https://64eb3f3fc2bf4d5bd4bc5dc9--courageous-mermaid-26884e.netlify.app/Benzanoico.png',

'Noneno':'https://64eb3f6817d1f35be5f0df28--merry-smakager-c91880.netlify.app/Benzanoico.png',
'':'https://64eb3f6817d1f35be5f0df28--merry-smakager-c91880.netlify.app/Benzanoico.png',

'Octeno':'https://64eb3fbee5e53c56decb6ea2--dancing-wisp-b3ee64.netlify.app/Benzanoico.png',
'':'https://64eb3fbee5e53c56decb6ea2--dancing-wisp-b3ee64.netlify.app/Benzanoico.png',

'Penteno':'https://64eb4000067a0260e026a6d5--stalwart-queijadas-42a43a.netlify.app/Benzanoico.png',
'':'https://64eb4000067a0260e026a6d5--stalwart-queijadas-42a43a.netlify.app/Benzanoico.png',


'Buteno':'https://64eb4015a025aa5c5291923a--superb-medovik-196b1d.netlify.app/Benzanoico.png',
'':'https://64eb4015a025aa5c5291923a--superb-medovik-196b1d.netlify.app/Benzanoico.png',

'2-deceno':'https://64eb4031d561de5d6e06a22c--mellow-douhua-21275e.netlify.app/Benzanoico.png',
'':'https://64eb4031d561de5d6e06a22c--mellow-douhua-21275e.netlify.app/Benzanoico.png',

'2-etil-4-metil-1-penteno':'https://64eb406f067a0261d326a615--stately-pixie-0ba690.netlify.app/Benzanoico.png',
'':'https://64eb406f067a0261d326a615--stately-pixie-0ba690.netlify.app/Benzanoico.png',

'2-hepteno':'https://64eb4126ee3f7a591db6fe2d--shimmering-sherbet-d08323.netlify.app/Benzanoico.png',
'':'https://64eb4126ee3f7a591db6fe2d--shimmering-sherbet-d08323.netlify.app/Benzanoico.png',

'2-metil-1-penteno':'https://64eb4252e5e53c57f5cb6f9c--curious-meerkat-8d6119.netlify.app/Benzanoico.png',
'':'https://64eb4252e5e53c57f5cb6f9c--curious-meerkat-8d6119.netlify.app/Benzanoico.png',


'2-metil-2-buteno':'https://64eb42747acdd660847b9aec--poetic-rugelach-a090f2.netlify.app/Benzanoico.png',
'':'https://64eb42747acdd660847b9aec--poetic-rugelach-a090f2.netlify.app/Benzanoico.png',

'Butano':'https://64eb42a480904f5c06691eba--heartfelt-biscuit-c81e9e.netlify.app/Benzanoico.png',
'':'https://64eb42a480904f5c06691eba--heartfelt-biscuit-c81e9e.netlify.app/Benzanoico.png',

'Etano':'https://64eb4ebbfb981f6558acedda--roaring-meringue-705664.netlify.app/Benzanoico.png',
'':'https://64eb4ebbfb981f6558acedda--roaring-meringue-705664.netlify.app/Benzanoico.png',


'Heptano':'https://64eb42c78c801460f52c0377--velvety-florentine-847f2a.netlify.app/Benzanoico.png',
'':'https://64eb42c78c801460f52c0377--velvety-florentine-847f2a.netlify.app/Benzanoico.png',

'Hexano':'https://64eb42dc4e0fc55c1343b5c8--stalwart-llama-ad0b93.netlify.app/Benzanoico.png',
'':'https://64eb42dc4e0fc55c1343b5c8--stalwart-llama-ad0b93.netlify.app/Benzanoico.png',

'Metano':'https://64eb42f0e5e53c58cccb6e88--strong-praline-a9f8a3.netlify.app/Benzanoico.png',
'':'https://64eb42f0e5e53c58cccb6e88--strong-praline-a9f8a3.netlify.app/Benzanoico.png',

'Propano':'https://64eb43bcb05a0f5c908881ce--lighthearted-marshmallow-e0bad6.netlify.app/Benzanoico.png',
'':'https://64eb43bcb05a0f5c908881ce--lighthearted-marshmallow-e0bad6.netlify.app/Benzanoico.png',

//hidrocarbonetos




//Amida

//'H3C-CH2':'https://lucky-crumble-bd8f8f.netlify.app/Benzanoico.png',
//'':'https://lucky-crumble-bd8f8f.netlify.app/Benzanoico.png',

'(R-CO)2NH':'https://64ee2762693d06008db346ab--gentle-gumdrop-c8bea0.netlify.app/Benzanoico.png',
'':'https://64ee2762693d06008db346ab--gentle-gumdrop-c8bea0.netlify.app/Benzanoico.png',

'C2H5NO':'https://64ee27a23fd61000a355d63e--heroic-sopapillas-e48323.netlify.app/Benzanoico.png',
'':'https://64ee27a23fd61000a355d63e--heroic-sopapillas-e48323.netlify.app/Benzanoico.png',

'C3H7NHO':'https://64ee27ca372a950083c329ae--vocal-sprite-1f8fcd.netlify.app/Benzanoico.png',
'':'https://64ee27ca372a950083c329ae--vocal-sprite-1f8fcd.netlify.app/Benzanoico.png',


'C3H7NO':'https://64ee2861bbebc7009010269c--fluffy-capybara-5a1b27.netlify.app/Benzanoico.png',
'':'https://64ee2861bbebc7009010269c--fluffy-capybara-5a1b27.netlify.app/Benzanoico.png',

'C3H9N':'https://64ee288b3fd61000a755d5a7--singular-medovik-bcffd3.netlify.app/Benzanoico.png',
'':'https://64ee288b3fd61000a755d5a7--singular-medovik-bcffd3.netlify.app/Benzanoico.png',

'C4H8ON':'https://64ee28b2c8fefb03126b5418--dazzling-palmier-a3447e.netlify.app/Benzanoico.png',
'':'https://64ee28b2c8fefb03126b5418--dazzling-palmier-a3447e.netlify.app/Benzanoico.png',

'C5H11NO':'https://64ee28ce88a2d70234dde10b--frabjous-starlight-0cae5c.netlify.app/Benzanoico.png',
'':'https://64ee28ce88a2d70234dde10b--frabjous-starlight-0cae5c.netlify.app/Benzanoico.png',

'C7H7NO':'https://64ee28f5080d55027545b868--shiny-babka-e25343.netlify.app/Benzanoico.png',
'':'https://64ee28f5080d55027545b868--shiny-babka-e25343.netlify.app/Benzanoico.png',

'C8H5NO2':'https://64ee2910bbebc70368102676--peppy-pastelito-ce411e.netlify.app/Benzanoico.png',
'':'https://64ee2910bbebc70368102676--peppy-pastelito-ce411e.netlify.app/Benzanoico.png',


'CH3NO':'https://64ee29580abdd6034b1eed81--sage-dolphin-7d47d0.netlify.app/Benzanoico.png',
'N, N-dimetil-benzamida ':'https://64ee29580abdd6034b1eed81--sage-dolphin-7d47d0.netlify.app/Benzanoico.png',

'R-CO NH2':'https://64ee2938372a950334c32a59--singular-travesseiro-feea6b.netlify.app/Benzanoico.png',
'':'https://64ee2938372a950334c32a59--singular-travesseiro-feea6b.netlify.app/Benzanoico.png',

//Amida



//Amina

'Dimetilamina':'https://64ee1ff18ae49502ec4ddad3--voluble-gaufre-016e11.netlify.app/Benzanoico.png',
'(CH3)2NH':'https://64ee1ff18ae49502ec4ddad3--voluble-gaufre-016e11.netlify.app/Benzanoico.png',

'Trimetilamina':'https://64ee20398f210802a20e9da1--cool-jelly-43a612.netlify.app/Benzanoico.png',
'C3H9N':'https://64ee20398f210802a20e9da1--cool-jelly-43a612.netlify.app/Benzanoico.png',

'2-aminopentano':'https://64ee224a0de28807742c2982--celebrated-marigold-e0d80d.netlify.app/Benzanoico.png',
'C5H13NH2':'https://64ee224a0de28807742c2982--celebrated-marigold-e0d80d.netlify.app/Benzanoico.png',

'3-amino-2-metil-heptano':'https://64ee242248726108393c7793--earnest-kataifi-732d46.netlify.app/Benzanoico.png',
'':'',

'Fetalimida':'https://64ee22d57ac67506fec067f9--fanciful-phoenix-c5f005.netlify.app/Benzanoico.png',
'C8H5NO2':'https://64ee22d57ac67506fec067f9--fanciful-phoenix-c5f005.netlify.app/Benzanoico.png',

'C8H10O2NH2':'https://64ee23166b047e067b346c37--preeminent-paprenjak-d0bc64.netlify.app/Benzanoico.png',
'':'',

'Fenilmetilamina':'https://64ee23dae90ffd07011fa97c--dreamy-meerkat-d4b3e5.netlify.app/Benzanoico.png',
'':'', 

'C12H11N':'https://64ee2348f779bf0709923bf6--eloquent-nasturtium-a82814.netlify.app/Benzanoico.png',
'':'',

'R1R2R3N':'https://64ee239e6b047e07c8346856--bright-caramel-747260.netlify.app/Benzanoico.png',
'':'',

'2C6H12O':'https://64ee4e2dbbebc72bc2102630--comforting-mandazi-e9d75b.netlify.app/Benzanoico.png',
'':'',

'C3H8O2':'https://64ee4e573fd6102b2555d591--eclectic-cobbler-9e6154.netlify.app/Benzanoico.png',
'':'',

'C3H8O2_2':'https://64ee4e9395c9e228e25e04d8--astounding-bunny-639774.netlify.app/Benzanoico.png',

//Amina


//anidrido
'C3H6O2':'https://64ee4c3916667e1f46e0a731--dainty-froyo-afbb5a.netlify.app/Benzanoico.png',
'':'https://64ee4c3916667e1f46e0a731--dainty-froyo-afbb5a.netlify.app/Benzanoico.png',

'C6H8O7':'https://64ee4c7216667e1f46e0a739--guileless-begonia-93faab.netlify.app/Benzanoico.png',
'':'https://64ee4c7216667e1f46e0a739--guileless-begonia-93faab.netlify.app/Benzanoico.png',

'C6H12O2':'https://64ee4c9cae869e225b5dc334--celadon-yeot-1cb500.netlify.app/Benzanoico.png',
'':'https://64ee4c9cae869e225b5dc334--celadon-yeot-1cb500.netlify.app/Benzanoico.png',

'C7H12O2':'https://64ee4cb8ee42d61ea545c667--cute-seahorse-5c3cb5.netlify.app/Benzanoico.png',
'C8H3O2':'https://64ee4cde3a9d5328d3958359--tranquil-moxie-a8516a.netlify.app/Benzanoico.png',

'C8H16O2':'https://64ee4cf9ee42d61f2a45c4c7--splendid-nougat-f2aefa.netlify.app/Benzanoico.png',
'C9H10O2':'https://64ee4d2b927dea2200775535--fancy-platypus-935c0c.netlify.app/Benzanoico.png',

//'':'https://64ee4d4bc8fefb2a8c6b55af--harmonious-griffin-a4075b.netlify.app/Benzanoico.png',

'Anidrido':'https://64ee4d6ebbebc729b1102816--scintillating-pasca-84ca4b.netlify.app/Benzanoico.png',

'Etanol de vilina':'https://64ee4d9295c9e226fd5e03a1--visionary-pixie-3047a8.netlify.app/Benzanoico.png',
'':'',

'C4H6O2':'https://64ee4eef12adfc28ef62bd11--brilliant-lokum-8a1762.netlify.app/Benzanoico.png',
'':'',

'C4H8O2':'https://64ee4f1c080d552c4f45b877--tranquil-kleicha-610692.netlify.app/Benzanoico.png',
'':'',

'C5H10O2':'https://64ee4f3f95c9e22b1e5e0391--lambent-profiterole-daca89.netlify.app/Benzanoico.png',
'':'',

'C5H10O2_3':'https://64ee4f63bbebc72dee10263d--startling-lolly-7878b4.netlify.app/Benzanoico.png',
'':'',

'C5H12O2':'https://64ee4f8a95c9e22c8a5e038a--silly-longma-56bf73.netlify.app/Benzanoico.png',
'':'',

'C5H1202':'https://64ee4fa9080d552cdf45bac3--dainty-halva-366c16.netlify.app/Benzanoico.png',
'':'',

'C10H20O2':'https://64ee4fd43a9d532c809584bf--starlit-mandazi-1e41b4.netlify.app/Benzanoico.png',
'':'',


//anidrido

};




function exibirImagem() {// funçao de pegar imagem
  const nameInput = document.getElementById('nameInput');// aqui ira gravar o elemento nameInput na variavel NameImput
  const imageContainer = document.getElementById('imageContainer');// aqui ira gravar o elemento imageContainerna variavel imageContainer
  const nome = nameInput.value.trim();// aqui cria uma variavel nome  que recebe o valor digitado no imput 

  if (nome === '') {
    alert('Por favor, digite um nome do grupo funcional ou escreva a fórmula molécular desejada para obter ela pronta')
  }

  if (imagens.hasOwnProperty(nome)) { //aqui faz outra verificação 
    const imageUrl = imagens[nome];//aqui é armazenado o  nome da variavel imageUrl que recebe o nome da variavel imagens de acordo com o valor digitado no imput de texto
    const imageElement = document.createElement('img');// aqui ele cria uma variavel imageElement e cria a imagem no documento HTML A IMAGEM FORMADA PELO O LINK
    imageElement.src = imageUrl; // AQUI ELE PASSA
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);

  } else {
    alert('Nenhuma fómula estrutural  encontrada para a fórmula molécular/Nome fornecido. Por favor digite  o nome certo')
  }
 
 // Obtém o valor do campo de entrada e remove espaços em branco extras
const nomef = nameInput.value.trim();

// Define um objeto que mapeia nomes funcionais a textos correspondentes
const mapeamentoNomes = {
  "Ácido": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido carboxílico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido benzóico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido acético": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido butírico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido": "GRUPO FUNCIONAL ÁCIDO",

  "Ácido etanóico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido nítrico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido pentanoico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido propanóico": "GRUPO FUNCIONAL ÁCIDO",

  "Ácido sufúrico": "GRUPO FUNCIONAL ÁCIDO",
  "Ácido valério": "GRUPO FUNCIONAL ÁCIDO",
 
  //ALCOOL

  "Álcool": "GRUPO FUNCIONAL ÁLCOOL",

  "2-Hexanol": "GRUPO FUNCIONAL ÁLCOOL",
  "2-metilpropan-2-ol": "GRUPO FUNCIONAL ÁLCOOL",
  "3,3-dimetilbutan-2-ol": "GRUPO FUNCIONAL ÁLCOOL",
  "3-Hexanol": "GRUPO FUNCIONAL ÁLCOOL",
  "But-2-en-2-ol": "GRUPO FUNCIONAL ÁLCOOL",
  "Ciclobutanol": "GRUPO FUNCIONAL ÁLCOOL",
  "Decanol": "GRUPO FUNCIONAL ÁLCOOL",
  "Etanol": "GRUPO FUNCIONAL ÁLCOOL",
  "Hexanol": "GRUPO FUNCIONAL ÁLCOOL",
  "Nonanol": "GRUPO FUNCIONAL ÁLCOOL",
  "Octanol": "GRUPO FUNCIONAL ÁLCOOL",
  "Pentan-2-ol": "GRUPO FUNCIONAL ÁLCOOL",
  "Propan-2-ol": "GRUPO FUNCIONAL ÁLCOOL",
  "Propanol": "GRUPO FUNCIONAL ÁLCOOL",
  
  //AMINA
  
  "Amina": "GRUPO FUNCIONAL AMINA",
  "Dimetilamina": "GRUPO FUNCIONAL AMINA",
  "Trimetilamina": "GRUPO FUNCIONAL AMINA",
  "2-aminopentano": "GRUPO FUNCIONAL AMINA",
  "3-amino-2-metil-heptano": "GRUPO FUNCIONAL AMINA",
  
  "Fetalimida": "GRUPO FUNCIONAL AMINA",
  "C8H10O2NH2": "GRUPO FUNCIONAL AMINA",
  "Fenilmetilamina": "GRUPO FUNCIONAL AMINA",
  "C12H11N": "GRUPO FUNCIONAL AMINA",
  "R1R2R3N": "GRUPO FUNCIONAL AMINA",
  
  "2C6H12O": "GRUPO FUNCIONAL AMINA",
  "C3H8O2": "GRUPO FUNCIONAL AMINA",
  "C3H8O2_2": "GRUPO FUNCIONAL AMINA",
  
  //AMIDA

  
  "Amida": "GRUPO FUNCIONAL AMIDA",
  "(R-CO)2NH": "GRUPO FUNCIONAL AMIDA",
  "C2H5NO": "GRUPO FUNCIONAL AMIDA",
  "C3H7NHO": "GRUPO FUNCIONAL AMIDA",
  "C3H7NO": "GRUPO FUNCIONAL AMIDA",
  "C3H9N": "GRUPO FUNCIONAL AMIDA",
  
  "C4H8ON": "GRUPO FUNCIONAL AMIDA",
  "C5H11NO": "GRUPO FUNCIONAL AMIDA",
  "C7H7NO": "GRUPO FUNCIONAL AMIDA",
  "C8H5NO2": "GRUPO FUNCIONAL AMIDA",
  "CH3NO": "GRUPO FUNCIONAL AMIDA",
  "R-CO NH2": "GRUPO FUNCIONAL AMIDA",
  

  //ETER
"Éter": "GRUPO FUNCIONAL ÉTER",
"Etóxi-benzeno": "GRUPO FUNCIONAL ÉTER",
"Etóxi-butano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-dectano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-etano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-heptano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-hexano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-nonano": "GRUPO FUNCIONAL ÉTER",

"Etóxi-octano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-pentano": "GRUPO FUNCIONAL ÉTER",
"Etóxi-propano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-butano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-etano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-heptano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-hexano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-nonano": "GRUPO FUNCIONAL ÉTER",


"Metóxi-propano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-pentano": "GRUPO FUNCIONAL ÉTER",
"Metóxi-octano": "GRUPO FUNCIONAL ÉTER",
//HIDROCARBONETOS


    "Hidrocarboneto" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Buteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Propano" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Metano" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Hexano" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Heptano" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Etano" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Butano" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "2-metil-2-buteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "2-metil-1-penteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "2-hepteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "2-etil-4-metil-1-penten" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Octeno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Noneno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Hexeno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "epteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Deceno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "epteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Deceno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    "Buteno" :"GRUPO FUNCIONAL HIDROCARBONETO",
    

    //ANIDRIDO

    "Anidrido": "GRUPO FUNCIONAL ANIDRIDO",
    "C10H20O2": "GRUPO FUNCIONAL ANIDRIDO",
    "C8H16O2": "GRUPO FUNCIONAL ANIDRIDO",
    "C9H10O2": "GRUPO FUNCIONAL ANIDRIDO",
    "Etanol de vilina": "GRUPO FUNCIONAL ANIDRIDO",
    "C4H6O2": "GRUPO FUNCIONAL ANIDRIDO",
    "C4H8O2": "GRUPO FUNCIONAL ANIDRIDO",
    "C3H6O2": "GRUPO FUNCIONAL ANIDRIDO",
    "C5H10O2_3": "GRUPO FUNCIONAL ANIDRIDO",
    "C5H1202": "GRUPO FUNCIONAL ANIDRIDO",
    "C10H20O2": "GRUPO FUNCIONAL ANIDRIDO",
    
    //FENOL


    "Fenol":"GRUPO FUNCIONAL FENOL",
    "Benzenodio":"GRUPO FUNCIONAL FENOL",
    "Benzenotriol":"GRUPO FUNCIONAL FENOL",
    "Bromoclorofenol":"GRUPO FUNCIONAL FENOL",
    "Diclorofenol":"GRUPO FUNCIONAL FENOL",
    "Dimetilfenol":"GRUPO FUNCIONAL FENOL",
    "Etilhidroxibenzeno":"GRUPO FUNCIONAL FENOL",
    "Hidróxi-benzeno":"GRUPO FUNCIONAL FENOL",
    "Trimetilfenol":"GRUPO FUNCIONAL FENOL",
    

    //cetona


    "Cetona":"GRUPO FUNCIONAL CETONA",
    "2-metil-pentan-3-ona":"GRUPO FUNCIONAL CETONA",
    "3-isopropilhexanon-2-ona":"GRUPO FUNCIONAL CETONA",
    "4-etil-2-metil-hexanona":"GRUPO FUNCIONAL CETONA",
    "4-etil-4-penten-2-ona":"GRUPO FUNCIONAL CETONA",
    "5-metil-hexan-2-ona":"GRUPO FUNCIONAL CETONA",
    "Cicloexanona":"GRUPO FUNCIONAL CETONA",
    "Etil-propil-cetona":"GRUPO FUNCIONAL CETONA",
    "hex-1-en-3-ona":"GRUPO FUNCIONAL CETONA",
    "Metil-etil-cetona":"GRUPO FUNCIONAL CETONA",
    "Metil-fenil-cetona":"GRUPO FUNCIONAL CETONA",
    "Pentan-3-ona":"GRUPO FUNCIONAL CETONA",
    "3-dimetil-hexan-2-ona":"GRUPO FUNCIONAL CETONA",
    "4-metilpenta-2-ona":"GRUPO FUNCIONAL CETONA",
    "Acetofenona":"GRUPO FUNCIONAL CETONA",
    "Acetona":"GRUPO FUNCIONAL CETONA",
    "Cenzofenona":"GRUPO FUNCIONAL CETONA",
    "Ciclobutanona":"GRUPO FUNCIONAL CETONA",
"Propanona":"GRUPO FUNCIONAL CETONA",

//ALDEÍDOS


"Ropanodial":"GRUPO FUNCIONAL ALDEÍDO",
"Propanaldeido":"GRUPO FUNCIONAL ALDEÍDO",
"Metanal":"GRUPO FUNCIONAL ALDEÍDO",


"Formaldeído":"GRUPO FUNCIONAL ALDEÍDO",
"Fenilbutanal":"GRUPO FUNCIONAL ALDEÍDO",
"Etanal":"GRUPO FUNCIONAL ALDEÍDO",

"Acético":"GRUPO FUNCIONAL ALDEÍDO",
"Aldeído":"GRUPO FUNCIONAL ALDEÍDO",
"2-metilpentanal":"GRUPO FUNCIONAL ALDEÍDO",

"3-metilbutanal":"GRUPO FUNCIONAL ALDEÍDO",
"2,3-dimetilbutanal":"GRUPO FUNCIONAL ALDEÍDO",
"2,2-dimetilbutanal":"GRUPO FUNCIONAL ALDEÍDO",

"2 butanal":"GRUPO FUNCIONAL ALDEÍDO",
};

// Função para atualizar o conteúdo do elemento HTML se o texto ainda não foi exibido
function atualizarConteudo(elementoId, conteudo) {
  const elemento = document.getElementById(elementoId);
  if (elemento && elemento.textContent !== conteudo) {
    elemento.textContent = conteudo;
    
  }
}

// Verifica se o nome funcional existe no mapeamento
if (mapeamentoNomes.hasOwnProperty(nomef)) {
  const conteudo = mapeamentoNomes[nomef]; // Obtém o conteúdo correspondente
  atualizarConteudo("aci", conteudo);
  
  
}
}