let goodChoice = false;
function statgood() {
    goodChoice=true;
    goToChapter('chapitre22');
    localStorage.setItem( 'choixspecial',goodChoice);
}
let keyFounded = false;
function statKey() {
    keyFounded = true;
    goToChapter("chapitre4");
    localStorage.setItem( 'keyspecial', keyFounded);
    
}
function reset(){
keyFounded = false;
goodChoice = false;
goToChapter('chapitre1')
}

function gererStatKey(){
    if(keyFounded == false){
        goToChapter("chapitre25")
    }
    if(keyFounded == true){
        goToChapter("chapitre24")
    }
}
function gererChoix(){
    if(goodChoice == false){
        goToChapter("chapitre35")
    }
    if(goodChoice == true){
        goToChapter("chapitre34")
    }
}
const chaptersObj = {
    chapitre1: {
        subtitle: "Lendemain de veille",
        text: "Vous vous réveillez, vous semblez perdu, car vous n'êtes clairement pas chez vous. Vous cherchez votre cellulaire. Vous vous souvenez de rien.",
        img: "assets/img/lumiere.jpg",
        video:"assets/video/lumiere.mp4",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre2')"
            }
            ]
    },
    chapitre2: {
        subtitle: "Texto ami",
        text: "Encore endormi, vous entendez un son famillier. Votre main est guidée vers votre cellulaire. Vous le prenez. Votre ami vous a texté pour savoir où vous êtes.",
        img: "assets/img/texto_2.jpg",
        options:[
            {
            text: "Dire la vérité à son ami",
            action: "goToChapter('chapitre3')"
            },
            {
            text: "Ignorer",
            action: "goToChapter('chapitre6')"
            }
            ]
        },
    chapitre3: {
        subtitle: "Dire la vérité à son ami",
        text: "Votre ami ne vous croit pas, car vous êtes nul avec les femmes. Il demande une preuve.",
        img: "assets/img/texto.jpg",
        options:[
            {
            text: "Prendre une photo",
            action: "statKey()"
            },
            {
            text: "Ne pas répondre",
            action: "goToChapter('chapitre5')"
            }
            ]
    },
    chapitre4: {
        subtitle: "Prendre une photo",
        text: "Vous prenez la photo de la femme qui dort à vos côtés et vous lui envoyez. Votre ami vous félicite avec un: « Nice job Bro! »",
        img: "assets/img/photoX.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre5')"
            }
            ]
    },
    chapitre5: {
        subtitle: "Ne pas répondre",
        text: "Plus de batterie! Votre téléphone s'éteint. Vous espérez que votre ami ne soit pas vexé.",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre6')"
            }
            ]
    },
    chapitre6: {
        subtitle: "Ignorer",
        text: "Vous recevez la couverture dans le visage. Vous entendez des pas quitter la pièce rapidement. Il semble que la femme qui était à vos côtés a eu une urgence lendemain de veille.",
        img: "assets/img/stress.png",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre7')"
            },
            ]
    },
    chapitre7: {
        subtitle: "Attendre dans la chambre.",
        text: "Vous êtes seul dans la chambre. Qu'allez-vous faire?",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Mettre ses vêtements",
            action: "goToChapter('chapitre8')"
            },
            {
            text: "Fouiller",
            action: "goToChapter('chapitre10')"
            },
            {
            text: "Regarder dans sa biblio",
            action: "goToChapter('chapitre13')"
            },
            {
            text: "Fuir",
            action: "goToChapter('chapitre9')"
            },
            ]
    },
    chapitre8: {
        subtitle: "Mettre ses vêtements",
        text: "Vous êtes habillé. Malgré que vous aimez votre corps de Dieu, il faut se garder une gêne chez une Lady.",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre7')"
            },
            ]
},
    chapitre9: {
        subtitle: "Fuir",
        text: "Vous decidez de ne pas prendre contact avec elle. Vous prenez vos jambes à votre cou et vous dégagez. Elle vous bloquera sûrement, mais ça vous importe peu. Peut-être vous auriez fait un choix différent si ça s'etait passé autrement",
        img: "assets/img/dehors.jpg",
        options:[
            {
            text: "Recommencer",
            action: "reset()"
            },
            ]
},
    chapitre10: {
        subtitle: "Fouiller dans ses effets personels",
        text: "Vous voulez découvrir qui elle est. Pas le temps aux enfantillages! Vous prenez son sac à main et vous trouvez son portefeuille. Parfait! Avec une carte d'identité, vous pourriez découvrir son nom. Vous décidez de prendre quelle carte.",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Permis de conduire",
            action: "goToChapter('chapitre11')"
            },
            {
            text: "Carte étudiante",
            action: "goToChapter('chapitre12')"
            }
            ]
},
    chapitre11: {
        subtitle: "Permis de conduire",
        text: "Vous découvrez que son nom est Elena",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Retour dans la chambre",
            action: "goToChapter('chapitre14')"
            }
            ]
},
    chapitre12: {
        subtitle: "Carte étudiante",
        text: "Vous découvrez que son nom est Emillie et elle est étudiante en théâtre.",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Retour dans la chambre",
            action: "goToChapter('chapitre14')"
            }
            ]
},
    chapitre13: {
        subtitle: "Regarder sa bibliothèque",
        text: "Vous découvrez le type de littérature qu'elle apprécie. C'est surtout du théàtre et ses goûts sont divers et variés. Elle semble appréciée la romance, mais a un coup de coeur sur les tragédies grecques.",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre14')"
            }
            ]
},
    chapitre14: {
        subtitle: "Retour dans la chambre",
        text: "Elle revient dans la chambre et vous dit qu'elle est soulagée que vous n'êtes pas partie comme un lapin. Elle vous explique que vous vous êtes donnés un rendez-vous dans un Bar à partir de l'application Tinder. Vous aviez tous les deux préféré d'apprendre à faire connaissance en personne au lieu de derrière un écran. Vous aviez pris beaucoup d'alcool et vous êtes rentré chez elle. Vous vous doutiez de ce qui s'était passé par la suite. Elle vous rassure que vous vous êtes protégés. Ne sachant pas quoi rajouter, elle vous regarde pour que vous rompiez le silence. Qu'allez-vous dire? ",
        img: "assets/img/fatigue.jpg",
        options:[
            {
            text: "Parler de elle",
            action: "goToChapter('chapitre15')"
            },
            {
            text: "Parler de livre",
            action: "goToChapter('chapitre20')"
            }
            ]
},
    chapitre15: {
        subtitle: "Parler d'elle",
        text: "Elle cache sa gêne et décide de détendre l'atmosphère. Vous parlez de tout et de rien. Jusqu'au moment où elle vous regarde d'un air malin. Elle vous demande si vous vous rappelez de son nom.",
        img: "assets/img/happy_1.png",
        options:[
            {
            text: "Elena",
            action: "goToChapter('chapitre16')"
            },
            {
            text: "Kareen",
            action: "goToChapter('chapitre17')"
            },
            {
            text: "Emillie",
            action: "goToChapter('chapitre18')"
            }
            ]
},
    chapitre16: {
        subtitle: "Elena",
        text: "Elle découvre que vous aviez fouillé dans ses affaires, car elle dit qu'elle ne vous a jamais donnez son vrai nom. Elle est furieuse. Tellement qu'elle vous jette dehors habilié ou non.",
        img: "assets/img/angry_1.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre19')"
            },
            ]
},
    chapitre17: {
        subtitle: "Kareen",
        text: "Elle découvre que vous n'aviez même pas pris la peine d'apprendre son prénom. Elle semble être dégouté. Vous avez mal à la tête, elle part vous chercher des médicaments à contre-coeur.",
        img: "assets/img/timide.png",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre25')"
            }
            ]
},
    chapitre18: {
        subtitle: "Emillie",
        text: "Elle découvre que vous aviez pris la peine d'apprendre son prénom. Elle semble s'en réjouir. Vous avez mal à la tête, elle part vous chercher des médicaments avec bienveillance",
        img: "assets/img/happy_3.png",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre25')"
            }
            ]
},
    chapitre19: {
        subtitle: "Elle vous mets dehors",
        text: "Habillé ou pas, elle vous donne un bon coup de pieds dans les foufounes. Vous êtes un connard à ses yeux et elle vous souhaite la pire des journées. Vous êtes humillié, car tout son voisinage vous remarque. Peut-être que les choses se seraient mieux passé si vous aviez agit autrement?",
        img: "assets/img/dehors.jpg",
        video:"assets/video/fuck.mp4",
        options:[
            {
            text: "Recommencer",
            action: "reset()"
            },
            ]
},
    chapitre20: {
        subtitle: "Parler du contenue de sa bibliothèque",
        text: "Vous discutez de livres afin de créer un lien avec elle. La discussion va du bon sens. Elle demande qu'elle est votre pièce de théâtre préféré.",
        img: "assets/img/pensive.jpg",
        options:[
            {
            text: "Roméo et Juliette",
            action: "goToChapter('chapitre21')"
            },
            {
            text: "Antigone",
            action: "statgood()"
            },
            {
            text: "Toi",
            action: "goToChapter('chapitre23')"
            }
            ]
           
},
    chapitre21: {
        subtitle: "Roméo et juliette",
        text: "Vous jouez la carte du romantique et de la sécurité. C'est une fille, donc elle devrait aimer. Vous lui faites un clin d'oeil en lui disant que l'amour interdit est si beau. Elle vous regarde étrangement, mais satisfaite que vous connaissiez vos classiques. Vous auriez peut-être dû vous informer sur ses goûts si vous espériez la draguer.Vous commenciez à avoir mal à la tête et elle le remarque. Elle part vous chercher des médiacaments.",
        img: "assets/img/tannante.jpg",
        options:[
            {
            text: "Suite",
            action: "gererStatKey()"
            }
            ]
},
    chapitre22: {
        subtitle: "Antigone",
        text: "Vous êtes certain que c'est une femme avec de la profondeur, sinon le fait d'avoir regardé dans sa bibliothèque en ait pour quelques choses. Elle semble satisfaite de votre réponse. Elle vous en parle avec passion. Vous commenciez à avoir mal à la tête et elle le remarque. Elle part vous chercher des médiacaments.",
        img: "assets/img/happy_4.png",
        options:[
            {
            text: "Suite",
            action: "gererStatKey()"
            }
            ]
},
    chapitre23: {
        subtitle: "Toi",
        text: "Vous lui dites d'un ton charmeur et théâtral, car elle est une magnifique illusion. Elle vous dévisage. Vous espérez qu'elle soit conquise par vos douces paroles, mais il semblerait que c'est l'inverse qui s'est produit. Vous sembliez avoir mal à la tête. Elle propose d'aller vous chercher des médicaments, sûrement pour fuir ce silence. ",
        img: "assets/img/timide.png",
        options:[
            {
            text: "Suite",
            action: "gererStatKey()"
            }
            ]
},
    chapitre24: {
        subtitle: "Photo compromettante",
        text: "Elle revient en furie en demandant des explications. Elle semble vouloir vous devisser la tête. Elle vous hurle et vous insulte. Il semblerait que votre ami a envoyé sur internet la photo que vous aviez pris d'elle nue ce matin. Il semblerait que son cousin l'ait tout de suite prévenu. Vous êtes dans de beaux draps. Vous sembliez avoir ruiné sa réputation, tout son entourage a vu la photo. Pas besoin de tenter la discussion, elle est déjà entrain de lancer vos affaires dehors et elle s'approche de vous. ",
        img: "assets/img/gene.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre19')"
            },
            
            ]
},
    chapitre25: {
        subtitle: "Seule une dernière fois",
        text: "Vous vous habillez, car vous n'êtes pas nudiste et vous vous demandez quoi faire pendant qu'elle part chercher les médicaments.",
        img: "assets/img/chambre_jour_1.jpg",
        options:[
            {
            text: "Prendre sa petite culotte",
            action: "goToChapter('chapitre26')"
            },
            {
            text: "Attendre",
            action: "goToChapter('chapitre31')"
            },
            {
            text: "Fuir",
            action: "goToChapter('chapitre9')"
            }
            ]
},
    chapitre26: {
        subtitle: "Prendre sa petite culotte",
        text: "Vous preniez sa petite culotte. Elle est d'un magnifique violet avec de la dentelle. Votre coeur se met à battre la chamade. Elle a l'air si fraiche et confortable. Le temps est compté... Que voulez-vous faire?",
        img: "assets/img/pervert_4.jpg",
        options:[
            {
            text: "Mettre la culotte",
            action: "goToChapter('chapitre27')"
            },
            {
            text: "Sentir sa petite culotte",
            action: "goToChapter('chapitre28')"
            },
            ]
},
    chapitre27: {
        subtitle: "Mettre la petite culotte",
        text: "Vous enfilez sa petite culotte. Vous vous regardez dans le mirroir. Cela mets votre 'saucisson' en valeur. Qui eu cru que c'était aussi confortable? Vous pensez emprunter potentiellement ceux de votre soeur. Vous entendiez un cri et vous vous retournez. ",
        img: "assets/img/pervert_5.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre29')"
            }
            ]
},
    chapitre28: {
        subtitle: "Sentir sa petite culotte",
        text: "Vous sentiez le doux parfum qui se dégage de la culotte. Impossible d'y resister, vous mettez l'objet de vos désirs sur votre visage avec fougue afin de vous en empreigner l'odeur qui s'en émane. Vous entendiez un cri et vous vous retournez.",
        img: "assets/img/pervert_3.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre30')"
            }
            ]
},
    chapitre29: {
        subtitle: "Avoir la culotte",
        text: "Elle vous demande des explications. Vous lui avouez que vous ne comprenez pas sa colère. Vous la rassurez pour que se soit équitable, elle peut essayer le votre. Elle vous demande sèchement de partir. Vous lui demandiez si elle veut ravoir sa culotte et elle grogne que vous pouvez la garder. Vous gagnez sa culotte en souvenir, GÉNIAL! ",
        img: "assets/img/cool.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre19')"
            }
            ]
},
    chapitre30: {
        subtitle: "Perdre la culotte",
        text: "Elle vous reprend la culotte des mains et vous traite comme si vous étiez un malade mentale. Vous ne voulez pas de cette folle. Vous êtes juste déçu de ne pas repartir avec votre trophée.",
        img: "assets/img/colere.png",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre19')"
            }
            ]
},
    chapitre31: {
        subtitle: "Attendre",
        text: "Vous attendiez qu'elle revienne et vous vérifiez que vous n'aviez rien oublié. Elle revient dans la chambre et il est temps de partir. Quelle relation voulez-vous avec elle?",
        img: "assets/img/partir_3.jpg",
        options:[
            {
            text: "Vouloir se revoir",
            action: "goToChapter('chapitre32')"
            },
            {
            text: "Rien de plus",
            action: "goToChapter('chapitre33')"
            }
            ]
},
    chapitre32: {
        subtitle: "Vouloir se revoir",
        text: "Vous exprimez votre désire de rester en contact avec elle. ",
        img: "assets/img/pensive.jpg",
        options:[
            {
            text: "Suite",
            action: "gererChoix()"
            }
            ]
},
    chapitre33: {
        subtitle: "Rien de plus",
        text: "Vous exprimez votre désire de ne pas rester en contact avec elle. Elle était seulement pour vous un coup d'un soir. ",
        img: "assets/img/large.jpg",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre36')"
            }
            ]
},
    chapitre34: {
        subtitle: "Rester en contact",
        text: "Vous aviez fait les bons choix. Vous voulez vous revoir. Peut-être seriez-vous plus qu'ami à l'avenir. N'oubliez pas de moins boire les prochaines fois. Votre nouvelle amie vous le rappel en rigolant. Elle vous raccompagne jusqu'à la porte. Fin heureuse.",
        img: "assets/img/timide_gene.jpg",
        options:[
            {
            text: "Recommencer",
            action:"reset()"
            }
            ]
},
    chapitre35: {
        subtitle: "Coeur brisé",
        text: "Vous n'aviez pas fait les bons choix pour rester en contact. Vous vous êtes fait briser le coeur",
        img: "assets/img/timide.png",
        options:[
            {
            text: "Suite",
            action: "goToChapter('chapitre36')"
            }
            ]
},
    chapitre36: {
        subtitle: "Chemin séparer",
        text: "Il vaut mieux ne pas rester en contact. Que ça soit votre choix ou pas, certaines personnes sont là pour être de passage dans votre vie. Elle vous raccompagne jusqu'à la porte et une fois que vous sortez, elle referme aussitôt la porte. Peut-être si vous aviez fait d'autres choix, votre destin aurait été différent.",
        img: "assets/img/dehors_2.jpg",
        options:[
            {
            text: "Recommencer",
            action: "reset()"
            }
            ]

},
}
let checkbox =document.querySelector('.input');

const audio = new Audio('assets/sons/mixkit-unlock-game-notification-253.wav');


function goToChapter(chapterName){
    const body = document.querySelector('body');
    body.className=chapterName;
  
    console.clear();
    console.log(body);
    const chapter=chaptersObj[chapterName];
    let changeBalise='';
    console.log(chapter)
  
    audio.currentTime = 0; // Son au début
    if(checkbox.checked){
        audio.play(); // Jouer le son
    }
    else{
        audio.pause()
    };
    
    document.querySelector('.chapitre').innerText=chapter.subtitle;
    document.querySelector('.message').innerText=chapter.text;
    document.querySelector(".bouton");
    
    if(chapter.video!= undefined){
        changeBalise =`<video src=${chapter.video} autoplay loop muted></video>`
    } else {
        changeBalise =`<img src=${chapter.img}></img>`
    }
    
    document.getElementById("image").innerHTML=changeBalise;
    
    
    const optionsArr = chaptersObj[chapterName].options.length;
    let textChoix=" ";
  

    for (let index = 0; index < optionsArr; index++) {
        document.querySelector(".bouton").innerHTML=textChoix += `<div class="bouton"><input class="choix" type="button" value='${chaptersObj[chapterName].options[index].text} 'onclick="${chaptersObj[chapterName].options[index].action}"/></div>`;
    };

    localStorage.setItem('chapterUser', chapterName); 
};

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('chapterUser') != null) {
        goToChapter(`${localStorage.getItem('chapterUser')}`)
    } else {
        goToChapter('chapitre1');
    }

    if (localStorage.getItem('keyspecial')!= undefined){
        keyFounded = localStorage.getItem('keyspecial');
    } else { 
        keyFounded = false;
    }

    if (localStorage.getItem('choixspecial') != undefined){
        goodChoice = localStorage.getItem('choixspecial');
    } else {
        goodChoice = false;
    }
})
let effacer= document.querySelector('.resets');

function resets(){
    localStorage.clear();
    goToChapter('chapitre1')
};
effacer.addEventListener('click', function(){
resets();
});

