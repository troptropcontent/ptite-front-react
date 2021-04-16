![](https://github.com/troptropcontent/ptite-front-react/blob/master/src/logo.svg)

# Ptite?

Une application pour l'organisation de repas entre amis ou pour se rassembler, tout simplement. 

L'idée ? En quelques clics, je peux inviter des d'amis :

1. En créant différents groupes d'amis dans l'application;

2. En renseignant:
    a. **Quoi ?** Ptit boeuf bourguignon ? Ptit brunch ?
    b. **Quand ?** Demain
    c. **Où ?** Chez moi
    d. **Qui ?** Anciens du lycée

Et toutes les personnes du groupe concerné ("Anciens du lycée") reçoivent une invitation sous forme de notification ! 
Il leur suffit alors de répondre Oui || Peut-etre || Non, d'un seul click.

S'ils acceptent, l'évènement s'ajoute à leur agenda.

# Fonctionnement de l'application

L'application est séparée en deux : 

* Une application SPA en React (ce même repo) pour le **front-end**
* Une application API en Ruby On Rails ([repo consultable ici](https://github.com/troptropcontent/ptite-api)) pour le **back-end** qui génère tout le JSON dont le **front-end** a besoin.

L'Authentification des utilisateurs se fait par transmission de JSON Web Token entre les deux Application. 
Pour ce faire j'utilise les Gems **'bcrypt'** et **'jwt'**

