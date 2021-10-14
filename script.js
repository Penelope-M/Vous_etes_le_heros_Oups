const chaptersObj = {
    chapitre1: {
        subtitle: "Lendemain de veille",
        text: "Vous vous réveillez, vous semblez perdu, car vous n'êtes clairement pas chez vous. Vous cherchez votre cellulaire.Vous vous souvenez de rien.",
        img: "One-Night-Stand.gif",
        option:[

        {
        text:'Texto ami',
        action:"goToChapter('chapitre2')" 
        },
        {
            text:'Ignorer',
            action:"goToChapter('chapitre6')" 
            },
        ]
    },
    chapitre2: {
        subtitle: "Texto ami",
        text: "Encore endormi, vous entendez un son famillier. Votre main est guider vers votre cellulaire. Vous le prenez. Votre ami vous a textez pour savoir où vous êtes.",
        img: "One-Night-Stand.gif"
        },
    chapitre3: {
        subtitle: "Dire la vérité à son ami",
        text: "Votre ami vous ne croit pas, car vous êtes nulle avec les femmes. Il demande un preuve.",
        img: "One-Night-Stand.gif"
    },
    chapitre4: {
        subtitle: "Prendre une photo",
        text: "Vous prenez la photo de la femme qui dors à vos côtés.",
        img: "One-Night-Stand.gif"
    },
    chapitre5: {
        subtitle: "Ne pas répondre",
        text: "Plus de batterie! Votre téléphone s'éteint. Vous espérez que votre ami ne soit pas vexé.",
        img: "One-Night-Stand.gif"
    },
    chapitre6: {
        subtitle: "Ignorer",
        text: "Vous recevez la couverture dans le visage. Vous entendez des pas quitter la pièce rapidement. Il semble que la femme qui était à vos côtés a eu une urgence lendemain de veille.",
        img: "One-Night-Stand.gif"
    },
    chapitre7: {
        subtitle: "Attendre dans la chambre.",
        text: "Vous êtes seul dans la chambre et nue comme un vers. Qu'allez-vous faire?",
        img: "One-Night-Stand.gif"
    },
    chapitre8: {
        subtitle: "Mettre ses vêtements",
        text: "Vous êtes habillé. Malgré que vous aimez votre corps de Dieu, il faut se garder une gène chez une Lady.",
        img: "One-Night-Stand.gif"
},
    chapitre9: {
        subtitle: "Fuir",
        text: "Vous decidez de ne pas contact avec elle. Vous prenez vos jambes à votre cou et vous dégagez. Elle vous bloquera surement mais ça vous importe peu. Peut-être vous auriez fait un choix différement si ça serait passé autrement",
        img: "One-Night-Stand.gif"
},
    chapitre10: {
        subtitle: "Fouiller dans ses effets personelle",
        text: "Vous voulez découvrir qui elle est. Pas le temps au enfantillage. Vous prenez son sac à main et vous trouvez son portefeuille. Parfait! Avec une carte identité vous pourriez découvrir son nom. Vous décidez de prendre quel cartes.",
        img: "One-Night-Stand.gif"
},
    chapitre11: {
        subtitle: "Permis de conduire",
        text: "Vous découvrez que son nom est Elena",
        img: "One-Night-Stand.gif"
},
    chapitre12: {
        subtitle: "Carte étudiante",
        text: "Vous découvrez que son nom est Emillie et elle est étudiante en théâtre.",
        img: "One-Night-Stand.gif"
},
    chapitre13: {
        subtitle: "Regarder sa bibliothèque",
        text: "Vous découvrez le type de littérature qu'elle apprécie. C'est surtout du théàtre et ces goûts sont divers et variés. Elle semble appréciée la romance, mais elle semble avoir un coup de coeur sur le thème des tragédies dramatiques.",
        img: "One-Night-Stand.gif"
},
    chapitre14: {
        subtitle: "Retour dans la chambre",
        text: "Elle revient dans la chambre. Elle vous dit qu'elle soit soulagée que vous n'êtes pas partie comme un lapin. Elle vous explique que vous vous êtes donnez rendez-vous sur dans un Bar à partir de l'application Tinder. Vous aviez tous les deux préférez d'apprendre à faire connaissance en personne au lieu derrière un écran. Vous aviez pris beaucoup d'alcool et vous êtes rentrer chez elle. Vous vous doutiez ce qui s'est passé par la suite. Elle vous rassure que vous vous êtes protégé. Ne sachant pas rajouter d'avantage, elle vous regarde pour que vous rompiez ce silence. Qu'allez vous dire? ",
        img: "One-Night-Stand.gif"
},
    chapitre15: {
        subtitle: "Parler d'elle",
        text: "Vous parlez de tout et de rien. Jusqu'au moment où elle vous regard d'un air maligne. Elle vous demande si vous vous rappelez de son nom.",
        img: "One-Night-Stand.gif"
},
    chapitre16: {
        subtitle: "Elena",
        text: "Elle découvre que vous aviez fouiller dans ses affaires, car elle dit qu'elle vous a jamais donnez son vrai nom. Elle est furieuse. Tellement qu'elle vous jette dehors habilier ou non.",
        img: "One-Night-Stand.gif"
},
    chapitre17: {
        subtitle: "Kareen",
        text: "Elle découvre que vous n'aviez même pas pris la peine d'apprendre son prénom. Elle semble être dégouter. Vous avez mal à la tête, elle part vous chercher des médicaments à contre-coeur.",
        img: "One-Night-Stand.gif"
},
    chapitre18: {
        subtitle: "Emillie",
        text: "Elle découvre que vous aviez pris la peine d'apprendre son prénom. Elle semble être s'en réjouir. Vous avez mal à la tête, elle part vous chercher des médicaments avec bienveillance",
        img: "One-Night-Stand.gif"
},
    chapitre19: {
        subtitle: "Elle vous mets dehors",
        text: "Habillé ou pas, elle vous donne un bon coup de pieds dans les jambes. Vous êtes un connard à ses yeux et vous souhaite la pire des journées. Vous êtes humillier, car tout son voisinage vous remarque. Peut-être les choses se seraient mieux passer si vous auriez agit autrement?",
        img: "One-Night-Stand.gif"
},
    chapitre20: {
        subtitle: "Parler du contenue de sa bibliothèque",
        text: "Vous discutez de livre afin de créer un lien avec elle. La discussion va du bon sens. Elle demande qu'elle est votre pièce de théâtre préféré.",
        img: "One-Night-Stand.gif"
},
    chapitre21: {
        subtitle: "Roméo et juliette",
        text: "Vous jouez la carte du romantique et de la sécurité. C'est une fille donc elle devrait aimé. Vous lui fait un clin d'oeil en lui disant que l'amour interdit est si beau. Elle vous regarde étrangement mais satisfait que vous connaissiez vos classiques. Vous auriez peut-être dû vous informer sur ses goûts si vous espérez la draguer.Vous commenciez à avoir mal à la tête, et elle le remarque. Elle part vous cherchez des médiacaments.",
        img: "One-Night-Stand.gif"
},
    chapitre22: {
        subtitle: "Les misérables",
        text: "Vous êtes certain que c'est une femme avec de la profondeur, sinon le fait d'avoir regarder dans sa bibliothèque en ait pour quelques choses. Elle semble satisfait de votre réponse. Elle vous en parle avec passion. Vous commenciez à avoir mal à la tête, et elle le remarque. Elle part vous cherchez des médiacaments.",
        img: "One-Night-Stand.gif"
},
    chapitre23: {
        subtitle: "Toi",
        text: "Vous lui dites d'un ton charmeur et théâtral elle, car elle est magnifique illusion. Elle vous dévisage. Vous espérez qu'elle soient conquise par vos douces paroles, mais il semblerait que ses l'inverse qui s'est produit. Vous sembliez avoir mal à la tête. Elle se propose d'aller vous chercher des médicaments, surement pour fuir ce silence. ",
        img: "One-Night-Stand.gif"
},
    chapitre24: {
        subtitle: "Photo compremetante",
        text: "Elle revient en furie en demandant des explications. Elle semble vouloir vous devissez la tête. Elle vous hurle et vous insulte. Il semblerait que votre ami à envoyer sur internet la photo que vous aviez pris d'elle nue ce matin. Il semblerait que son frère est sur la photo et la tout de suite prévenu. Vous êtes dans de beau draps. Vous sembliez avoir ruiner sa réputation, tout son entourage a vu la photo. Pas besoin de tenter la discussion, elle est déjà entrain de lancer vos affaires dehors et s'approche de vous. ",
        img: "One-Night-Stand.gif"
},
    chapitre25: {
        subtitle: "Seule une dernière fois",
        text: "Vous vous habillez, car vous êtes pas nudiste et vous vous demander quoi faire pendant qu'elle part chercher les médicaments.",
        img: "One-Night-Stand.gif"
},
    chapitre26: {
        subtitle: "Prendre sa petite culotte",
        text: "Vous preniez sa petite culotte. Elle est d'un magnifique rouge avec de la dentelle noir. Votre coeur se met à battre à la chamale. Elle a l'air si fraiche et confortable. Le temps est compter... Que voulez-vous faire?",
        img: "One-Night-Stand.gif"
},
    chapitre27: {
        subtitle: "Mettre la petite culotte",
        text: "Vous enfilez sa petite culotte. Vous vous regardez dans le mirroir. Cela mets votre 'saucissons' en valeur. Qui eu cru que c'était aussi confortable? Vous pensez emprunter potentiellement ceux de votre soeur. Vous entendiez un cri et vous vous retournez. ",
        img: "One-Night-Stand.gif"
},
    chapitre28: {
        subtitle: "Sentir sa petite culotte",
        text: "Vous sentiez le doux parfum qui se dégage de la culotte. Impossible d'y resister, vous mettez l'objet de vos désirs sur votre visage avec fougue afin de vous en empreigner l'odeur qui s'en émagne. Vous entendiez un cri et vous vous retournez.",
        img: "One-Night-Stand.gif"
},
    chapitre29: {
        subtitle: "Avoir la culotte",
        text: "Elle vous demande des explications. Vous lui avouez que vous comprenez pas sa colère. Vous la rassurez pour que se soit équitable, elle peut essayer le votre. Elle vous demande sèchement de partir. Vous lui demandiez si elle veut avoir sa culotte et grogne que vous pouvez le garder. Vous gagnez sa culotte en souvenir, GÉNIAL! ",
        img: "One-Night-Stand.gif"
},
    chapitre30: {
        subtitle: "Perdre la culotte",
        text: "Elle vous reprend la culotte des mains et vous traitre comme si vous étiez un malade mentale. Vous voulez pas cette folle , vous êtes juste déçu de ne pas partir avec votre trophée.",
        img: "One-Night-Stand.gif"
},
    chapitre31: {
        subtitle: "Attendre",
        text: "Vous attendiez qu'elle revienne et vous vérifiez que vous aviez rien oublié. Elle revient dans la chambre et il est temps que vous partiez. Quelle retaion voulez vous avec elle?",
        img: "One-Night-Stand.gif"
},
    chapitre32: {
        subtitle: "Vouloir se revoir",
        text: "Vous exprimez votre désire de rester en contact avec elle. ",
        img: "One-Night-Stand.gif"
},
    chapitre33: {
        subtitle: "Rien de plus",
        text: "Vous exprimez votre désire de ne pas rester en contact avec elle. Elle était seulement pour vous un coup d'un soir. ",
        img: "One-Night-Stand.gif"
},
    chapitre34: {
        subtitle: "Rester en contact",
        text: "Vous aviez fait les bons choix. Vous voulez vous revoir mutuellement. Peut-être vous seriez plus qu'ami à l'avenir. N'oublier pas de moins boire à l'avenir. Votre nouvelle ami vous le fait clairement rapeller en rigolant. Elle vous raccompagne jusqu'à la porte. Fin heureuse.",
        img: "One-Night-Stand.gif"
},
    chapitre35: {
        subtitle: "Coeur brisé",
        text: "Vous aviez pas fait les bons choix pour rester en contact. Vous vous êtes fait brisé le coeur",
        img: "One-Night-Stand.gif"
},
    chapitre36: {
        subtitle: "Chemin séparer",
        text: "Il vaut mieux ne pas rester en contact. Que ça soit votre choix ou pas, certaines personnes sont là pour être de passage à notre vie. Elle vous raccompagne jusqu'à la porte et une fois que vous sortez, elle referme aussitôt la porte. Peut-être si vous aviez fait d'autre choix, votre destin aurait changer.",
        img: "One-Night-Stand.gif"
}
}
function goToChapter(chapterName){
    const chapter=chaptersObj[chapterName];
    console.log(chapter.subtitle);
    console.log(chapter.text);
}