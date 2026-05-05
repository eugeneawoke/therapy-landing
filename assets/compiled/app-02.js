function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var R = function R(p, id) {
  return typeof window !== 'undefined' && window.__resources && window.__resources[id] || p;
};
var HomePage = function HomePage(_ref) {
  var onNav = _ref.onNav;
  var services = window.__content.home.services_preview.map(function(s) {
    return Object.assign({}, s, { img: window.__resources[s.photoKey] });
  });
  var products = window.__content.home.products_preview.map(function(p) {
    return Object.assign({}, p, { img: window.__resources[p.photoKey] });
  });
  return React.createElement("div", null, React.createElement("section", {
    style: {
      padding: '48px 64px 96px',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 48
    }
  }, React.createElement(Bracket, null, "\u0442\u0438\u0445\u043E \u0438 \u043F\u043E-\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443")), React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px, 2vw, 28px)',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      marginBottom: 64,
      fontWeight: 400
    }
  }, "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \xB7 \u0442\u0435\u043B\u0435\u0441\u043D\u044B\u0439 \u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.25fr',
      gap: 24,
      alignItems: 'stretch'
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--porcelain)',
      padding: '56px 48px',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 20,
      boxShadow: 'var(--shadow-whisper)'
    }
  }, React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: '50%',
      backgroundImage: "url(".concat(R('../../assets/photo-portrait.jpg', 'photoPortrait'), ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '3px solid var(--cream)',
      boxShadow: 'var(--shadow-whisper)'
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      letterSpacing: '0.02em',
      color: 'var(--ink)',
      lineHeight: 1.1
    }
  }, "\u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041B\u043E\u0433\u0443\u043D\u0446\u043E\u0432\u0430"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--warm-gray)',
      marginTop: 8
    }
  }, "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \xB7 \u0442\u0435\u043B\u0435\u0441\u043D\u044B\u0439 \u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442")), React.createElement(Ornament, null), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      lineHeight: 1.25,
      marginTop: 12
    }
  }, window.__content.home.hero_title.split('\n').reduce(function(acc, line, i) {
      return acc.concat(i > 0 ? [React.createElement("br", null), line] : [line]);
    }, [])), React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--warm-gray)',
      lineHeight: 1.6,
      maxWidth: 360,
      marginTop: 4
    }
  }, window.__content.home.hero_body), React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, React.createElement(Bracket, null, "\u0437\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u0434\u044B\u0448\u0430\u0442\u044C"))), React.createElement("div", {
    style: {
      borderRadius: 4,
      backgroundImage: "url(".concat(R('../../assets/photo-landscape.jpg', 'photoLandscape'), ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: 560,
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 32,
      right: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      letterSpacing: '0.02em',
      textShadow: '0 2px 20px rgba(43,38,34,0.4)'
    }
  }, "/ \u0442\u0438\u0448\u0438\u043D\u0430 \u043A\u0430\u043A \u043E\u043F\u043E\u0440\u0430 /"), React.createElement(Button, {
    variant: "light",
    onClick: function onClick() {
      return onNav('contact');
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))))), React.createElement("section", {
    style: {
      padding: '96px 64px',
      background: 'var(--cream-2)'
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, React.createElement(Eyebrow, {
    color: "var(--olive)"
  }, "\u0442\u0440\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '16px 0 12px',
      letterSpacing: '0.03em',
      textTransform: 'uppercase'
    }
  }, "\u041A\u0430\u043A \u044F \u043C\u043E\u0433\u0443 \u0431\u044B\u0442\u044C \u0440\u044F\u0434\u043E\u043C"), React.createElement(Bracket, null, "\u0432\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043F\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u044E")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28,
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, services.map(function (s) {
    return React.createElement("div", {
      key: s.n,
      onClick: function onClick() {
        return onNav('services');
      },
      style: {
        background: 'var(--porcelain)',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-whisper)',
        cursor: 'pointer',
        transition: 'box-shadow 400ms'
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.boxShadow = 'var(--shadow-whisper)';
      }
    }, React.createElement("div", {
      style: {
        aspectRatio: '4/5',
        backgroundImage: "url(".concat(s.img, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }), React.createElement("div", {
      style: {
        padding: '28px 24px 32px'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--olive)',
        marginBottom: 12
      }
    }, s.n, " \xB7 ", s.sub), React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 400,
        color: 'var(--ink)',
        margin: '0 0 12px',
        letterSpacing: '0.02em'
      }
    }, s.title), React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--warm-gray)',
        lineHeight: 1.6,
        margin: '0 0 20px'
      }
    }, s.body), React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--olive)'
      }
    }, "\u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192")));
  }))), React.createElement("section", {
    style: {
      padding: '96px 64px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48
    }
  }, React.createElement("div", null, React.createElement(Eyebrow, null, "\u043F\u0435\u0440\u0432\u044B\u0435 \u0448\u0430\u0433\u0438"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '14px 0 10px',
      letterSpacing: '0.02em'
    }
  }, "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"), React.createElement(Bracket, null, "\u043C\u044F\u0433\u043A\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E")), React.createElement("a", {
    onClick: function onClick() {
      return onNav('shop');
    },
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--olive)',
      cursor: 'pointer'
    }
  }, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u2192")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, products.map(function (p) {
    return React.createElement(ProductCard, _extends({
      key: p.title
    }, p));
  }))), React.createElement("section", {
    style: {
      padding: '120px 64px',
      textAlign: 'center',
      backgroundImage: "url(".concat(R('../../assets/photo-fabric.jpg', 'photoFabric'), ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(251,248,242,0.7), rgba(251,248,242,0.55))'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, React.createElement(Ornament, {
    width: 80,
    color: "var(--olive)"
  }), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 34,
      lineHeight: 1.4,
      color: 'var(--ink)',
      margin: '32px 0 24px'
    }
  }, "\xAB\u0416\u0438\u0442\u044C \u2014 \u044D\u0442\u043E \u0442\u043E\u0436\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0440\u043E\u0449\u0435 \u043E\u0441\u0432\u043E\u0438\u0442\u044C \u0440\u044F\u0434\u043E\u043C \u0441 \u0442\u0435\u043C, \u043A\u0442\u043E \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438\xBB."), React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--warm-gray)'
    }
  }, "\u2014 \u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430"))), React.createElement("section", {
    style: {
      padding: '96px 64px',
      background: 'var(--porcelain)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 56,
      flexWrap: 'wrap',
      gap: 24
    }
  }, React.createElement("div", null, React.createElement(Bracket, null, "\u0433\u043E\u043B\u043E\u0441\u0430"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '18px 0 0',
      letterSpacing: '0.01em',
      maxWidth: 560,
      lineHeight: 1.15
    }
  }, "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0442\u0435, ", React.createElement("br", null), React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--olive)'
    }
  }, "\u043A\u0442\u043E \u0443\u0436\u0435 \u0440\u044F\u0434\u043E\u043C \u043F\u0440\u043E\u0448\u0451\u043B \u0447\u0430\u0441\u0442\u044C \u043F\u0443\u0442\u0438"))), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--warm-gray)',
      letterSpacing: '0.04em',
      maxWidth: 280,
      lineHeight: 1.7
    }
  }, "\u041E\u0442\u0437\u044B\u0432\u044B \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u044E\u0442\u0441\u044F \u0441 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u0418\u043C\u0435\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B \u2014 \u0431\u0435\u0440\u0435\u0436\u043D\u043E \u043A \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u0438.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24
    }
  }, window.__content.reviews.map(function (r, i) {
    return React.createElement("div", {
      key: i,
      style: {
        background: 'var(--cream)',
        padding: '32px 28px 28px',
        borderRadius: 4,
        boxShadow: 'var(--shadow-whisper)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }
    }, React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 56,
        lineHeight: 0.7,
        color: 'var(--olive)',
        opacity: 0.5,
        marginBottom: 4
      }
    }, "\u201C"), React.createElement("div", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.75,
        color: 'var(--ink)',
        flex: 1,
        marginBottom: 24,
        textWrap: 'pretty'
      }
    }, r.text), React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-soft)',
        paddingTop: 16
      }
    }, React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 17,
        color: 'var(--ink)',
        letterSpacing: '0.02em'
      }
    }, r.name), React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--warm-gray)',
        marginTop: 4,
        fontWeight: 500
      }
    }, r.tag)));
  }))), React.createElement("section", {
    style: {
      padding: '120px 64px 96px'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 340px) 1fr',
      gap: 80,
      alignItems: 'start'
    },
    className: "faq-grid"
  }, React.createElement("div", {
    style: {
      position: 'sticky',
      top: 120
    },
    className: "faq-intro"
  }, React.createElement(Bracket, null, "\u0447\u0430\u0441\u0442\u043E \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u044E\u0442"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '18px 0 20px',
      letterSpacing: '0.01em',
      lineHeight: 1.2
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 ", React.createElement("br", null), React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--olive)'
    }
  }, "\u043F\u0435\u0440\u0432\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B")), React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      color: 'var(--warm-gray)',
      maxWidth: 300
    }
  }, "\u0415\u0441\u043B\u0438 \u043D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435. \u041E\u0442\u0432\u0435\u0447\u0443 \u043B\u0438\u0447\u043D\u043E, \u0431\u0435\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432.")), React.createElement("div", null, window.__content.faq.map(function (item, i) {
    return React.createElement(FAQItem, {
      key: i,
      q: item.question,
      a: item.answer,
      defaultOpen: i === 0
    });
  }))), React.createElement("style", null, "\n          @media (max-width: 900px) {\n            .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }\n            .faq-intro { position: static !important; }\n          }\n        ")), React.createElement("section", {
    style: {
      padding: '96px 64px',
      textAlign: 'center'
    }
  }, React.createElement(Eyebrow, {
    color: "var(--olive)"
  }, "\u043F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0433"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '18px 0 20px',
      letterSpacing: '0.02em'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0443"), React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--warm-gray)',
      maxWidth: 480,
      margin: '0 auto 36px',
      lineHeight: 1.7
    }
  }, "\u041E\u0442\u0432\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F. \u0412\u0441\u0442\u0440\u0435\u0447\u0430 \u2014 \u043E\u043D\u043B\u0430\u0439\u043D \u0438\u043B\u0438 \u043E\u0447\u043D\u043E. \u041F\u0435\u0440\u0432\u044B\u0435 20 \u043C\u0438\u043D\u0443\u0442 \u2014 \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E, \u0431\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B."), React.createElement(Button, {
    variant: "primary",
    onClick: function onClick() {
      return onNav('contact');
    }
  }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C")));
};
var ProductCard = function ProductCard(_ref2) {
  var title = _ref2.title,
    kind = _ref2.kind,
    was = _ref2.was,
    now = _ref2.now,
    off = _ref2.off,
    img = _ref2.img;
  return React.createElement("div", {
    style: {
      background: 'var(--porcelain)',
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-whisper)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      background: 'var(--blush-2)',
      color: '#7a3a2a',
      borderRadius: 999,
      padding: '5px 12px',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 500,
      zIndex: 2
    }
  }, "\u2212", off, "%"), React.createElement("div", {
    style: {
      aspectRatio: '5/4',
      backgroundImage: "url(".concat(img, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), React.createElement("div", {
    style: {
      padding: '22px 22px 26px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--warm-gray)',
      marginBottom: 10
    }
  }, kind), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      color: 'var(--ink)',
      margin: '0 0 20px'
    }
  }, title), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 'auto'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--ink)'
    }
  }, now, "\xA0\u20BD"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      color: 'var(--warm-gray)',
      textDecoration: 'line-through'
    }
  }, was, "\xA0\u20BD"))));
};
var FAQItem = function FAQItem(_ref3) {
  var q = _ref3.q,
    a = _ref3.a,
    defaultOpen = _ref3.defaultOpen;
  var _React$useState = React.useState(!!defaultOpen),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  return React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-soft)'
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      width: '100%',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '26px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      textAlign: 'left'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 400,
      color: open ? 'var(--olive)' : 'var(--ink)',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      transition: 'color 300ms'
    }
  }, q), React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 14,
      color: 'var(--olive)',
      transform: open ? 'rotate(90deg)' : 'none',
      transition: 'transform 300ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("svg", {
    width: "12",
    height: "16",
    viewBox: "0 0 12 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("polyline", {
    points: "3.5,4 8.5,8 3.5,12"
  })))), React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: open ? 400 : 0,
      opacity: open ? 1 : 0,
      transition: 'max-height 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms'
    }
  }, React.createElement("div", {
    style: {
      padding: '0 60px 28px 0',
      fontSize: 14.5,
      lineHeight: 1.8,
      color: 'var(--warm-gray)',
      textWrap: 'pretty'
    }
  }, a)));
};
Object.assign(window, {
  HomePage: HomePage,
  ProductCard: ProductCard,
  FAQItem: FAQItem
});