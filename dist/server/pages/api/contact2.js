"use strict";
(() => {
var exports = {};
exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 2744:
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ 7654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mysql = __webpack_require__(2744);
const dbConfig = {
    host: process.env.HOST_MYSQL,
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL,
    port: process.env.PORT_MYSQL,
    connectTimeout: 20000
};
const connection = mysql.createConnection(dbConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method !== "POST") {
        return res.status(405).json({
            msg: "Seules les requ\xeates POST sont autoris\xe9es"
        });
    }
    try {
        const { name , email , subject , message  } = JSON.parse(req.body);
        const query = "INSERT INTO DATABASE_MYSQL (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)";
        const values = [
            name,
            email,
            subject,
            message
        ];
        connection.query(query, values, (error, results)=>{
            if (error) {
                console.error(error);
                res.status(500).json({
                    msg: "\xc9chec"
                });
            } else {
                console.log("Donn\xe9es ins\xe9r\xe9es avec succ\xe8s");
                res.status(201).json({
                    msg: "Succ\xe8s"
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "\xc9chec"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7654));
module.exports = __webpack_exports__;

})();