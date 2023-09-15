(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 2973:
/***/ ((module) => {

// Exports
module.exports = {
	"code": "ContactCode_code__eZpTM",
	"code2": "ContactCode_code2__oLx1u",
	"line": "ContactCode_line__HEU_b",
	"className": "ContactCode_className__LCTTe"
};


/***/ }),

/***/ 6602:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ContactPage_container__ApSoI",
	"flex": "ContactPage_flex__YPyzr",
	"form": "ContactPage_form__3P_5V",
	"heading": "ContactPage_heading__886zg"
};


/***/ }),

/***/ 1418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/ContactCode.module.css
var ContactCode_module = __webpack_require__(2973);
var ContactCode_module_default = /*#__PURE__*/__webpack_require__.n(ContactCode_module);
;// CONCATENATED MODULE: ./components/ContactCode.jsx


const contactItems = [
    {
        social: "website",
        link: "pierre-jean-sappey-marinier.com",
        href: "https://pierre-jean-sappey-marinier.com/"
    },
    {
        social: "email",
        link: "pierrejean.sm@gmail.com@gmail.com",
        href: "mailto:pierrejean.sm@gmail.com@gmail.com"
    },
    {
        social: "github",
        link: "Pierre-Jean-Sappey-Marinier",
        href: "https://github.com/Pierre-Jean-Sappey-Marinier"
    },
    {
        social: "linkedin",
        link: "Pierre-Jean-Sappey-Marinier",
        href: "https://www.linkedin.com/in/pierre-jean-sappey-marinier-4873a468/"
    }, 
];
const contactPeople = [
    {
        social: "Adeline Siegrist, d\xe9veloppeuse fullstack Senior",
        link: "adeline.siegrist@gmail.com",
        href: "adeline.siegrist@gmail.com"
    }, 
];
const ContactCode = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ContactCode_module_default()).code,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (ContactCode_module_default()).line,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (ContactCode_module_default()).className,
                            children: ".socials"
                        }),
                        " {"
                    ]
                }),
                contactItems.slice(0, 8).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (ContactCode_module_default()).line,
                        children: [
                            "\xa0\xa0\xa0",
                            item.social,
                            ":",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.href,
                                target: "_blank",
                                rel: "noopener",
                                children: item.link
                            }),
                            ";"
                        ]
                    }, index)
                ),
                contactItems.slice(8, contactItems.length).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (ContactCode_module_default()).line,
                        children: [
                            "\xa0\xa0",
                            item.social,
                            ":",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.href,
                                target: "_blank",
                                rel: "noopener",
                                children: item.link
                            }),
                            ";"
                        ]
                    }, index)
                ),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (ContactCode_module_default()).line,
                    children: "}"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ContactCode_module_default()).code2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: (ContactCode_module_default()).line,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (ContactCode_module_default()).className,
                                    children: ".recommandations"
                                }),
                                " {"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (ContactCode_module_default()).p,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (ContactCode_module_default()).line,
                                    children: [
                                        "\xa0\xa0 Adeline Siegrist, d\xe9veloppeuse Senior :",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (ContactCode_module_default()).line,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:adeline.siegrist@gmail.com",
                                        children: "\xa0\xa0 adeline.siegrist@gmail.com"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (ContactCode_module_default()).line,
                                    children: [
                                        "\xa0\xa0Virgile Marin, d\xe9veloppeur Senior :",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (ContactCode_module_default()).line,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:marin.virgile@gmail.com",
                                        children: "\xa0\xa0marin.virgile@gmail.com"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (ContactCode_module_default()).line,
                            children: "}"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ContactCode = (ContactCode);

// EXTERNAL MODULE: ./styles/ContactPage.module.css
var ContactPage_module = __webpack_require__(6602);
var ContactPage_module_default = /*#__PURE__*/__webpack_require__.n(ContactPage_module);
;// CONCATENATED MODULE: ./pages/contact.jsx




const ContactPage = ()=>{
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: subject , 1: setSubject  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const submitForm = async (e)=>{
        e.preventDefault();
        console.log("http://localhost:3000/api");
        const res = await fetch(`${"http://192.168.1.5:3000/api"}/contact2`, {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        });
        console.log("🚀 ~ file: contact.jsx:16 ~ submitForm ~ res:", res);
        if (res.ok) {
            alert("Votre message \xe0 bien \xe9t\xe9 envoy\xe9 !");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } else {
            alert("There was an error. Please try again in a while.");
        }
    };
    // const submitForm = async (e) => {
    //   e.preventDefault();
    //   console.log(process.env.NEXT_PUBLIC_API_URL);
    //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
    //     method: "POST",
    //     body: JSON.stringify({ name, email, subject, message }),
    //   });
    //   if (res.ok) {
    //     alert("Votre message à bien été envoyé !");
    //     setName("");
    //     setEmail("");
    //     setSubject("");
    //     setMessage("");
    //   } else {
    //     alert("There was an error. Please try again in a while.");
    //   }
    // };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ContactPage_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (ContactPage_module_default()).heading,
                        children: "Contactez-moi par les r\xe9seaux"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ContactCode, {
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (ContactPage_module_default()).heading,
                        children: "Ou envoyez-moi un message !"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: (ContactPage_module_default()).form,
                        onSubmit: submitForm,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ContactPage_module_default()).flex,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "name",
                                                children: "Nom"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "name",
                                                id: "name",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value)
                                                ,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                name: "email",
                                                id: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                                ,
                                                required: true
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "name",
                                        children: "Sujet"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "subject",
                                        id: "subject",
                                        value: subject,
                                        onChange: (e)=>setSubject(e.target.value)
                                        ,
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "message",
                                        children: "Message"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        name: "message",
                                        id: "message",
                                        rows: "5",
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                        ,
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                children: "Envoyez"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    return {
        props: {
            title: "Contact"
        }
    };
}
/* harmony default export */ const contact = (ContactPage);


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
var __webpack_exports__ = (__webpack_exec__(1418));
module.exports = __webpack_exports__;

})();