function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var R = function R(p, id) {
  return typeof window !== 'undefined' && window.__resources && window.__resources[id] || p;
};
var _React = React,
  useState = _React.useState;
var ShopPage = function ShopPage() {
  var _useState = useState('все'),
    _useState2 = _slicedToArray(_useState, 2),
    filter = _useState2[0],
    setFilter = _useState2[1];
  var products = window.__content.shop.products.map(function(p) {
    return Object.assign({}, p, { img: window.__resources[p.photoKey] });
  });
  var cats = ['все', 'медитации', 'гайды', 'практики'];
  var filtered = filter === 'все' ? products : products.filter(function (p) {
    return p.cat === filter;
  });
  return React.createElement("div", null, React.createElement("section", {
    style: {
      padding: '64px 64px 48px',
      textAlign: 'center'
    }
  }, React.createElement(Bracket, null, "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 400,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      margin: '20px 0 14px',
      color: 'var(--ink)'
    }
  }, window.__content.shop.title), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--warm-gray)',
      maxWidth: 520,
      margin: '0 auto 40px'
    }
  }, window.__content.shop.subtitle), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 32
    }
  }, cats.map(function (c) {
    return React.createElement("a", {
      key: c,
      onClick: function onClick() {
        return setFilter(c);
      },
      style: {
        cursor: 'pointer',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: filter === c ? 'var(--olive)' : 'var(--warm-gray)',
        borderBottom: filter === c ? '1px solid var(--olive)' : '1px solid transparent',
        paddingBottom: 4,
        transition: 'all 300ms'
      }
    }, c);
  }))), React.createElement("section", {
    style: {
      padding: '32px 64px 96px'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28,
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, filtered.map(function (p) {
    return React.createElement(ProductCard, _extends({
      key: p.title
    }, p));
  }))), React.createElement("section", {
    style: {
      padding: '80px 64px',
      textAlign: 'center',
      background: 'var(--cream-2)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, React.createElement(Eyebrow, null, "\u0430 \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 400,
      margin: '14px 0 20px',
      color: 'var(--ink)',
      letterSpacing: '0.02em'
    }
  }, window.__content.shop.coming_soon_title), React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--warm-gray)',
      maxWidth: 480,
      margin: '0 auto'
    }
  }, window.__content.shop.coming_soon_body)));
};
Object.assign(window, {
  ShopPage: ShopPage
});