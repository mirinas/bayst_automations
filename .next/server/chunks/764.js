exports.id = 764;
exports.ids = [764];
exports.modules = {

/***/ 5902:
/***/ ((module) => {

// Exports
module.exports = {
	"menu_container": "Menu_menu_container__jLl4_",
	"selected_page": "Menu_selected_page___VvF4",
	"menu_root": "Menu_menu_root__7OQbr",
	"menu_icon": "Menu_menu_icon__akQpb",
	"menu_toggle": "Menu_menu_toggle__DNO_H",
	"socials": "Menu_socials__YXHOf",
	"blurScreen": "Menu_blurScreen__NHwz4",
	"top_bar": "Menu_top_bar__DxnTP",
	"middle_bar": "Menu_middle_bar__tVUZz",
	"bottom_bar": "Menu_bottom_bar__w0O8a",
	"lang_logo": "Menu_lang_logo__fU_X6",
	"lang_root": "Menu_lang_root__sa7_Z",
	"lang_toggle": "Menu_lang_toggle__e3E66"
};


/***/ }),

/***/ 8764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_y": () => (/* binding */ Context),
  "ZK": () => (/* binding */ useLanguage),
  "vt": () => (/* binding */ useSelected)
});

// UNUSED EXPORTS: LanguageContext, SelectedContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/Menu.module.css
var Menu_module = __webpack_require__(5902);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/menu.js





function Menu() {
    const { t  } = useLanguage();
    const about = t({
        en: "About",
        lt: "Apie"
    });
    const services = t({
        en: "Services",
        lt: "Paslaugos"
    });
    const portfolio = t({
        en: "Portfolio",
        lt: "Darbai"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Menu_module_default()).menu_root,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Menu_module_default()).menu_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        id: "about",
                        text: about,
                        href: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        id: "services",
                        text: services,
                        href: "/services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LanguageSwitch, {})
                ]
            })
        })
    });
}
function LanguageSwitch() {
    const { setLang  } = useLanguage();
    const toggleLang = ()=>{
        const toggle = document.querySelector("#lang_toggle");
        toggle.checked = !toggle.checked;
        switch(toggle.checked){
            case true:
                {
                    setLang("lt");
                    break;
                }
            case false:
                {
                    setLang("en");
                }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Menu_module_default()).lang_root,
            onClick: toggleLang,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: (Menu_module_default()).lang_toggle,
                    type: "checkbox",
                    id: "lang_toggle"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "",
                    // alt={'Toggle language'}
                    className: (Menu_module_default()).lang_logo
                })
            ]
        })
    });
}
function Button({ id , text , href  }) {
    const { selected  } = useSelected();
    const selectPage = ()=>{
        document.querySelector("#menu_toggle").checked = false;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        onClick: selectPage,
        className: selected === id ? (Menu_module_default()).selected_page : "",
        children: text
    });
}
function SocialIcon({ url , icon  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: url,
        target: "_blank",
        style: {
            backgroundImage: `url(${icon})`
        }
    });
}
function MenuIcon() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Menu_module_default()).menu_toggle,
                type: "checkbox",
                id: "menu_toggle"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Menu_module_default()).menu_icon,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Menu_module_default()).top_bar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Menu_module_default()).middle_bar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Menu_module_default()).bottom_bar
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/context.js




const LanguageContext = /*#__PURE__*/ (0,external_react_.createContext)({
    t: (d)=>""
});
const SelectedContext = /*#__PURE__*/ (0,external_react_.createContext)({});
function useLanguage() {
    return (0,external_react_.useContext)(LanguageContext);
}
function useSelected() {
    return (0,external_react_.useContext)(SelectedContext);
}
function Context({ children  }) {
    if (typeof document !== "undefined") {
        const blur = document.querySelector(`.${(Menu_module_default()).blurScreen}`);
        blur.addEventListener("click", ()=>{
            document.querySelector("#menu_toggle").checked = false;
        });
    }
    const reducer = (t, lang)=>(d)=>d[lang];
    const [t, setLang] = (0,external_react_.useReducer)(reducer, (d)=>d["en"]);
    const [selected, setSelected] = (0,external_react_.useState)("About");
    return /*#__PURE__*/ jsx_runtime_.jsx(LanguageContext.Provider, {
        value: {
            t,
            setLang
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectedContext.Provider, {
            value: {
                selected,
                setSelected
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MenuIcon, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Menu_module_default()).socials,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                            url: "https://www.linkedin.com/in/augustas-mirinas/",
                            icon: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                            url: "https://git.soton.ac.uk/am26g21",
                            icon: "https://about.gitlab.com/images/press/press-kit-icon.svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                            url: "https://www.fiverr.com/mirinas",
                            icon: "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/fiverr-icon.svg"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BlurScreen, {}),
                children
            ]
        })
    });
}
function BlurScreen() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Menu_module_default()).blurScreen
    });
}


/***/ })

};
;