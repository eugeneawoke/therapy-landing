function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var R = function R(p, id) {
  return typeof window !== 'undefined' && window.__resources && window.__resources[id] || p;
};
var AboutPage = function AboutPage() {
  return React.createElement("div", null, React.createElement("section", {
    style: {
      padding: '64px 64px 32px',
      textAlign: 'center'
    }
  }, React.createElement(Bracket, null, "\u043E\u0431\u043E \u043C\u043D\u0435"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 400,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      margin: '20px 0 14px',
      color: 'var(--ink)'
    }
  }, "\u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041B\u043E\u0433\u0443\u043D\u0446\u043E\u0432\u0430"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 20,
      color: 'var(--warm-gray)'
    }
  }, "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \xB7 \u0442\u0435\u043B\u0435\u0441\u043D\u044B\u0439 \u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442 \xB7 8 \u043B\u0435\u0442 \u0447\u0430\u0441\u0442\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438")), React.createElement("section", {
    style: {
      padding: '64px 64px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 64,
      alignItems: 'start',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: '3/4',
      backgroundImage: "url(".concat(window.__resources.photoPortrait, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 4,
      boxShadow: 'var(--shadow-soft)',
      position: 'sticky',
      top: 120
    }
  }), React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, React.createElement(Eyebrow, {
    color: "var(--olive)"
  }, "\u043A\u043E\u0440\u043E\u0442\u043A\u043E"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '16px 0 24px',
      letterSpacing: '0.01em'
    }
  }, "\u041A\u0430\u043A \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E"), React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--ink)',
      marginBottom: 20
    }
  }, window.__content.about.bio_1), React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--ink)',
      marginBottom: 36
    }
  }, window.__content.about.bio_2), React.createElement(Ornament, {
    width: 80,
    color: "var(--olive)"
  }), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--ink)',
      margin: '40px 0 20px'
    }
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430"), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, window.__content.about.education.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      year = _ref2[0],
      text = _ref2[1];
    return React.createElement("li", {
      key: year,
      style: {
        display: 'grid',
        gridTemplateColumns: '130px 1fr',
        gap: 20,
        padding: '16px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        color: 'var(--olive)',
        fontSize: 16
      }
    }, year), React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--ink)',
        lineHeight: 1.5
      }
    }, text));
  })), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--ink)',
      margin: '48px 0 20px'
    }
  }, "\u0421 \u0447\u0435\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, window.__content.about.topics.map(function (t) {
    return React.createElement("div", {
      key: t,
      style: {
        padding: '14px 18px',
        background: 'var(--cream-2)',
        borderRadius: 4,
        fontSize: 14,
        color: 'var(--ink)'
      }
    }, "\u2014 ", t);
  })))));
};
Object.assign(window, {
  AboutPage: AboutPage
});