(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProjectCard_card__Ilp8p",
	"content": "ProjectCard_content__SHdnM",
	"tags": "ProjectCard_tags__Atl1P",
	"cta": "ProjectCard_cta__J86_O",
	"underline": "ProjectCard_underline__IoTds"
};


/***/ }),

/***/ 9872:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProjectsPage_container__f2WwY"
};


/***/ }),

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/ProjectCard.module.css
var ProjectCard_module = __webpack_require__(7068);
var ProjectCard_module_default = /*#__PURE__*/__webpack_require__.n(ProjectCard_module);
;// CONCATENATED MODULE: ./components/ProjectCard.jsx




const ProjectCard = ({ project  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProjectCard_module_default()).card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-15a6cce932e86afa" + " " + ((ProjectCard_module_default()).image || ""),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        className: "Image",
                        objectFit: "cover",
                        src: project.image,
                        height: 300,
                        width: 600,
                        alt: project.name
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "15a6cce932e86afa",
                        children: ".Image {border-radius:20px}"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProjectCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: project.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).tags,
                        children: project.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: tag,
                                children: tag
                            }, tag)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ProjectCard_module_default()).cta,
                        children: [
                            project.source_code && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.source_code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Source Code"
                            }),
                            project.demo && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Live Demo"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

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

// EXTERNAL MODULE: ./styles/ProjectsPage.module.css
var ProjectsPage_module = __webpack_require__(9872);
var ProjectsPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsPage_module);
;// CONCATENATED MODULE: ./pages/projects.jsx




const ProjectsPage = ({ projects  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Projets accomplis"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProjectsPage_module_default()).container,
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        project: project
                    }, project.id)
                )
            })
        ]
    }));
};
async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            title: "Projects",
            projects
        }
    };
}
/* harmony default export */ const pages_projects = (ProjectsPage);


/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675], () => (__webpack_exec__(4986)));
module.exports = __webpack_exports__;

})();