function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var R = function R(p, id) {
  return typeof window !== 'undefined' && window.__resources && window.__resources[id] || p;
};
var _React = React,
  useState = _React.useState;
var Ornament = function Ornament(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'var(--sage)' : _ref$color,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 60 : _ref$width;
  return React.createElement("svg", {
    width: width,
    height: "12",
    viewBox: "0 0 60 12",
    fill: "none",
    stroke: color,
    strokeWidth: "0.75",
    strokeLinecap: "round"
  }, React.createElement("line", {
    x1: "0",
    y1: "6",
    x2: "22",
    y2: "6"
  }), React.createElement("circle", {
    cx: "30",
    cy: "6",
    r: "1.4",
    fill: color,
    stroke: "none"
  }), React.createElement("line", {
    x1: "38",
    y1: "6",
    x2: "60",
    y2: "6"
  }));
};
var Bracket = function Bracket(_ref2) {
  var children = _ref2.children;
  return React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--warm-gray)',
      letterSpacing: '0.02em'
    }
  }, React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, "/ "), children, React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, " /"));
};
var Eyebrow = function Eyebrow(_ref3) {
  var children = _ref3.children,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? 'var(--warm-gray)' : _ref3$color;
  return React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: color,
      fontWeight: 500
    }
  }, children);
};
var Button = function Button(_ref4) {
  var _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? 'primary' : _ref4$variant,
    onClick = _ref4.onClick,
    children = _ref4.children,
    style = _ref4.style;
  var variants = {
    primary: {
      background: 'var(--olive)',
      color: 'var(--cream)',
      border: '1px solid var(--olive)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--olive)',
      border: '1px solid transparent',
      padding: '14px 8px'
    },
    light: {
      background: 'var(--cream)',
      color: 'var(--ink)',
      border: '1px solid var(--border)'
    }
  };
  return React.createElement("button", {
    onClick: onClick,
    style: _objectSpread(_objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '14px 28px',
      borderRadius: 999,
      cursor: 'pointer',
      transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)'
    }, variants[variant]), style)
  }, children);
};
var Header = function Header(_ref5) {
  var active = _ref5.active,
    onNav = _ref5.onNav;
  var pages = window.__content.nav.items;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isMobile = _React$useState4[0],
    setIsMobile = _React$useState4[1];
  React.useEffect(function () {
    var mq = window.matchMedia('(max-width: 900px)');
    var u = function u() {
      return setIsMobile(mq.matches);
    };
    u();
    mq.addEventListener('change', u);
    return function () {
      return mq.removeEventListener('change', u);
    };
  }, []);
  var go = function go(id) {
    setOpen(false);
    onNav(id);
  };
  return React.createElement(React.Fragment, null, React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 64px',
      background: 'rgba(251, 248, 242, 0.92)',
      backdropFilter: 'saturate(180%) blur(12px)',
      WebkitBackdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--border-soft)',
      transform: 'translateY(0)',
      transition: 'background 260ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      return go('home');
    },
    style: {
      cursor: 'pointer',
      lineHeight: 1.15
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      letterSpacing: '0.04em',
      color: 'var(--ink)'
    }
  }, "\u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041B\u043E\u0433\u0443\u043D\u0446\u043E\u0432\u0430"), React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--warm-gray)',
      marginTop: 3,
      fontWeight: 500
    }
  }, "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \xB7 \u0442\u0435\u043B\u0435\u0441\u043D\u044B\u0439 \u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442")), !isMobile && React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, pages.map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      id = _ref7[0],
      label = _ref7[1];
    return React.createElement("a", {
      key: id,
      onClick: function onClick() {
        return go(id);
      },
      style: {
        cursor: 'pointer',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: active === id ? 'var(--olive)' : 'var(--warm-gray)',
        fontWeight: active === id ? 500 : 400,
        borderBottom: active === id ? '1px solid var(--olive)' : '1px solid transparent',
        paddingBottom: 2,
        transition: 'all 300ms'
      }
    }, label);
  })), !isMobile && React.createElement("a", {
    onClick: function onClick() {
      return go('contact');
    },
    style: {
      cursor: 'pointer',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--olive)',
      fontWeight: 500
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u2192"), isMobile && React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(function (value) {
        return !value;
      });
    },
    "aria-label": "\u041C\u0435\u043D\u044E",
    "aria-expanded": open,
    style: {
      background: 'transparent',
      border: '1px solid var(--border-soft)',
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      width: 40,
      height: 40,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }
  }, React.createElement("span", {
    style: {
      position: open ? 'absolute' : 'static',
      top: '50%',
      left: '50%',
      width: 20,
      height: 1,
      background: 'var(--ink)',
      transform: open ? 'translate(-50%, -50%) rotate(45deg)' : 'none',
      transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)'
    }
  }), React.createElement("span", {
    style: {
      position: open ? 'absolute' : 'static',
      top: '50%',
      left: '50%',
      width: 20,
      height: 1,
      background: 'var(--ink)',
      transform: open ? 'translate(-50%, -50%)' : 'none',
      opacity: open ? 0 : 1,
      transition: 'none'
    }
  }), React.createElement("span", {
    style: {
      position: open ? 'absolute' : 'static',
      top: '50%',
      left: '50%',
      width: 20,
      height: 1,
      background: 'var(--ink)',
      transform: open ? 'translate(-50%, -50%) rotate(-45deg)' : 'none',
      transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)'
    }
  }))), isMobile && open && React.createElement(React.Fragment, null, React.createElement("div", {
    onClick: function onClick() {
      return setOpen(false);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(43,38,34,0.34)',
      zIndex: 40
    }
  }), React.createElement("nav", {
    "aria-label": "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u041C\u0435\u043D\u044E",
    className: "mobile-drawer-nav",
    style: {
      position: 'fixed',
      top: 72,
      left: 16,
      right: 16,
      zIndex: 60,
      padding: '22px 24px 24px',
      borderRadius: 18,
      background: 'rgba(251,248,242,0.98)',
      border: '1px solid var(--border-soft)',
      boxShadow: '0 24px 70px rgba(43,38,34,0.22)',
      backdropFilter: 'saturate(160%) blur(16px)',
      WebkitBackdropFilter: 'saturate(160%) blur(16px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      animation: 'mobileMenuIn 260ms cubic-bezier(0.16,1,0.3,1) both'
    }
  }, React.createElement("style", null, "@keyframes mobileMenuIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }"), pages.map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      id = _ref9[0],
      label = _ref9[1];
    return React.createElement("a", {
      key: id,
      onClick: function onClick() {
        return go(id);
      },
      style: {
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        letterSpacing: '0.03em',
        color: active === id ? 'var(--olive)' : 'var(--ink)',
        padding: '15px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, label);
  }), React.createElement("a", {
    onClick: function onClick() {
      return go('contact');
    },
    className: "mobile-drawer-cta",
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 22,
      minHeight: 52,
      borderRadius: 999,
      background: 'var(--olive)',
      color: 'var(--cream)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0443"))));
};
var Footer = function Footer() {
  return React.createElement("footer", {
    style: {
      padding: '80px 64px 48px',
      borderTop: '1px solid var(--border-soft)',
      background: 'var(--cream)',
      textAlign: 'center'
    }
  }, React.createElement("img", {
    src: R('../../assets/monogram.svg', 'monogram'),
    style: {
      width: 42,
      height: 42,
      color: 'var(--olive)',
      marginBottom: 18
    }
  }), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--ink)',
      letterSpacing: '0.04em'
    }
  }, "\u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041B\u043E\u0433\u0443\u043D\u0446\u043E\u0432\u0430"), React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--warm-gray)',
      marginTop: 6,
      fontWeight: 500
    }
  }, "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \xB7 \u0442\u0435\u043B\u0435\u0441\u043D\u044B\u0439 \u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442"), React.createElement("div", {
    style: {
      margin: '32px auto',
      maxWidth: 380,
      display: 'flex',
      justifyContent: 'center',
      gap: 24,
      fontSize: 12,
      color: 'var(--warm-gray)'
    }
  }, React.createElement("a", {
    style: {
      color: 'var(--warm-gray)'
    }
  }, "Telegram"), React.createElement("span", {
    style: {
      color: 'var(--sage)'
    }
  }, "\xB7"), React.createElement("a", {
    style: {
      color: 'var(--warm-gray)'
    }
  }, "Instagram"), React.createElement("span", {
    style: {
      color: 'var(--sage)'
    }
  }, "\xB7"), React.createElement("a", {
    style: {
      color: 'var(--warm-gray)'
    }
  }, "hello@loguntsova.ru")), React.createElement("div", {
    style: {
      marginTop: 40,
      fontSize: 11,
      color: 'var(--sage)',
      letterSpacing: '0.08em'
    }
  }, "\xA9 2026 \xB7 \u0441\u0434\u0435\u043B\u0430\u043D\u043E \u0441 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C"));
};
var Watermark = function Watermark(_ref0) {
  var children = _ref0.children,
    style = _ref0.style;
  return React.createElement("div", {
    style: _objectSpread({
      position: 'absolute',
      pointerEvents: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(80px, 10vw, 160px)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--whisper)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }, style)
  }, children);
};
Object.assign(window, {
  Ornament: Ornament,
  Bracket: Bracket,
  Eyebrow: Eyebrow,
  Button: Button,
  Header: Header,
  Footer: Footer,
  Watermark: Watermark
});
