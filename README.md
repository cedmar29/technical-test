# Entretien technique Peopulse

Cette application inspirée du logiciel Peopulse permet d'afficher une liste d'intérimaires et les missions pour lesquelles ils ont été embauchés. Elle est composée d'une API (générée via mockapi.io) et de ce projet Angular.

Les deux routes API sont :
- https://6863e77388359a373e96ce2c.mockapi.io/api/workers
- https://6863e77388359a373e96ce2c.mockapi.io/api/missions

Voici la documentation de mockapi : https://github.com/mockapi-io/docs/wiki

Lien vers le repo Github : https://github.com/cedmar29/technical-test

## Exercice n°1

Voici la charte graphique de Peopulse :

<img width="790" height="831" alt="image" src="https://github.com/user-attachments/assets/3e86e44b-990c-483d-86f0-f7818a344c68" />

### Gris :

#2F2347

#6C6380

#ADB3C5

#DEE2ED

#EFF0F5

#FAFAFA

#ffffff

### Couleurs :

#b73b68

#4786FF

#29A059

#E59B34

#C43C39

### Objectifs :
- créer un thème avec ces couleurs, proposer des moyens de créer d'autres thèmes (dark mode par exemple)
- rendre le tableau plus lisible (lignes alternées, hover...)

## Exercice n°2

Développer les fonctionnalités suivantes :
- créer un nouvel intérimaire
- modifier un intérimaire existant
- supprimer un intérimaire

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

