"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"Kasa","image":"/Kasa.png","description":"Création d\'une single page application responsive en composants fonctionnels sous React.js en utilisant la méthode CRA. Implémentation de routes avec React Router. Intégration dynamique des métadonnées via React-Helmet.","tags":["react","node","CRA","SingPageApplication","Responsive"],"source_code":"https://github.com/Pierre-Jean-Sappey-Marinier/Kasa","demo":"https://pierre-jean-sappey-marinier.github.io/Kasa/"},{"id":2,"name":"Mon Vieux Grimoire","image":"https://imgur.com/tAZotn3.png","description":"Conception de la partie Backend d\'une site de notation de livres sous Node.js, express et MongoDB. Sécurisation de la base de donnée par des systèmes authentification dans des middleware,","tags":["react","node","mongodb","express","authentification","middleware"],"source_code":"https://github.com/Pierre-Jean-Sappey-Marinier/Mon-Vieux-Grimoire"},{"id":3,"name":"Nina Carducci","image":"/Nina.png","description":"Correction de bugs d\'un site web en Javascript. Optimisation de l\'application et compilation optimisée avec le serveur de développement Vite. Amélioration du référencement (SEO) et de l\'accessibilité du site.","tags":["debugging","SEO","accessibilité","optimisation","javascript"],"source_code":"https://github.com/Pierre-Jean-Sappey-Marinier/NinacarducciVite","demo":"https://pierre-jean-sappey-marinier.github.io/NinacarducciVite/"},{"id":4,"name":"VSCode Portfolio","image":"/vscode.png","description":"Un portfolio minimaliste pour les développeurs, construit avec Next.js et CSS Modules sur le thème de VSCode.","tags":["next","css-modules"],"source_code":"https://github.com/Pierre-Jean-Sappey-Marinier/portfolio--Pierre-Jean","demo":"http://vscode-portfolio.vercel.app/"},{"id":5,"name":"Booki","image":"/booki.png","description":"Création de la page d\'accueil d\'une agence de voyage en HTML et CSS tout en respectant une maquette figma, le web sémantique et la validité générale du code.","tags":["html","css","figma","web-sémantique"],"source_code":"https://github.com/Pierre-Jean-Sappey-Marinier/Site_Booki_Sappey-Marinier_Pierre-Jean","demo":"https://pierre-jean-sappey-marinier.github.io/Site_Booki_Sappey-Marinier_Pierre-Jean/"},{"id":6,"name":"Portfolio statique","image":"/portfolio.png","description":"Création d\'une application, relatant mon parcours et projets, responsive en composants fonctionnels sous Next.js.","tags":["next","responsive"],"source_code":"https://github.com/Pierre-Jean-Sappey-Marinier/portfolio--Pierre-Jean","demo":"https://pierre-jean-sappey-marinier.com/"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();