# Architecture du projet

Tufting DNA est un site mono-page TanStack Start déployé sur Netlify. L’expérience publique est concentrée sur la route d’accueil : présentation de l’atelier, portfolio, estimation de prix, aperçu boutique et prise de contact.

## Répertoires clés

- `src/routes/index.tsx` contient la page, les données éditoriales, le calculateur et la logique du formulaire.
- `src/routes/__root.tsx` définit le document HTML et les métadonnées de partage.
- `src/styles.css` porte l’ensemble de la direction visuelle et des adaptations responsive.
- `public/img/` contient les visuels sources ; ils sont servis via Netlify Image CDN.
- `public/contact-form.html` est le squelette statique requis pour que Netlify détecte les champs du formulaire React.

## Conventions

- Garder les textes publics en français et le ton direct, artisanal et chaleureux.
- Réutiliser les variables CSS de couleur avant d’ajouter une nouvelle teinte.
- Toute modification des champs du formulaire React doit être reproduite dans `public/contact-form.html`.
- Conserver des libellés accessibles, des états de focus visibles et une mise en page mobile en une colonne.
- Le tarif affiché est une estimation indicative calculée côté client, pas une promesse contractuelle.

## Décisions importantes

Le formulaire utilise un POST AJAX encodé vers `/contact-form.html` afin de ne pas être intercepté par le rendu serveur TanStack. La boutique est une section d’annonce et de prise d’intérêt ; aucun paiement ni catalogue persistant n’est activé à ce stade.
