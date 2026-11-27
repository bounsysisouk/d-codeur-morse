# Kata JS 9 -- Encodeur et decodeur Morse

Application web permettant de traduire du texte latin en code morse et inversement 

## Démarche et périmètre

- **HTML & CSS :** reprise du template fourni.
- **JavaScript :** implémentation complète dans le script :
  - `getLatinCharacterList(text)` : découpe une chaîne en liste de caractères.
  - `translateLatinCharacter(character)` : traduit un caractère en morse (`/` pour les espaces).
  - `encode(text)` : convertit un texte complet en morse.
  - `getMorseCharacterList(morseText)` et `translateMorseCharacter(morseChar)` : découpent et traduisent une chaîne morse.
  - `decode(morseText)` : reconstruit le texte en majuscules à partir du morse.
  - Liaison avec les champs `input` et les boutons de traduction dans la page.

  ## Utilisation

  Ouvrir `ìndex.html` dans un navigateur, saisir du latin ou code morse (lettres séparées par un espace, les mot par un `/`), puis cliquer sur bouton correspondant 