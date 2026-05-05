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
var ContactPage = function ContactPage() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    sent = _useState2[0],
    setSent = _useState2[1];
  return React.createElement("div", null, React.createElement("section", {
    style: {
      padding: '64px 64px 32px',
      textAlign: 'center'
    }
  }, React.createElement(Bracket, null, "\u043F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0433"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 400,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      margin: '20px 0 14px',
      color: 'var(--ink)'
    }
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--warm-gray)',
      maxWidth: 480,
      margin: '0 auto'
    }
  }, window.__content.contact.subtitle)), React.createElement("section", {
    style: {
      padding: '48px 64px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      maxWidth: 1100,
      margin: '0 auto',
      alignItems: 'start'
    }
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--olive)"
  }, "\u0433\u0434\u0435 \u043D\u0430\u0439\u0442\u0438"), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      margin: '14px 0 28px'
    }
  }, "\u0422\u0438\u0445\u0438\u0435 \u043A\u0430\u043D\u0430\u043B\u044B"), window.__content.contact.channels.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return React.createElement("div", {
      key: k,
      style: {
        padding: '18px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--warm-gray)',
        marginBottom: 4
      }
    }, k), React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        color: 'var(--ink)'
      }
    }, v));
  }), React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, React.createElement(Bracket, null, "\u043F\u0438\u0448\u0438\u0442\u0435 \u0442\u0430\u043A, \u043A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F"))), React.createElement("div", {
    style: {
      background: 'var(--porcelain)',
      padding: '36px 36px 40px',
      borderRadius: 4,
      boxShadow: 'var(--shadow-whisper)'
    }
  }, sent ? React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, React.createElement(Ornament, {
    width: 80,
    color: "var(--olive)"
  }), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      margin: '24px 0 12px',
      color: 'var(--ink)'
    }
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E"), React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--warm-gray)',
      lineHeight: 1.7
    }
  }, window.__content.contact.success_body)) : React.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setSent(true);
    }
  }, React.createElement(Eyebrow, {
    color: "var(--olive)"
  }, "\u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      margin: '12px 0 24px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432"), React.createElement(Field, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F"
  }), React.createElement(Field, {
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442",
    placeholder: "Telegram, email \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
  }), React.createElement(Field, {
    label: "\u0427\u0442\u043E \u0432\u0430\u0441 \u043F\u0440\u0438\u0432\u0435\u043B\u043E",
    multiline: true,
    placeholder: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432 \u2014 \u043A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F"
  }), React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, React.createElement(Button, {
    variant: "primary"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")), React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 12,
      color: 'var(--warm-gray)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic'
    }
  }, "/ \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E, \u0435\u0441\u043B\u0438 \u0441\u043B\u043E\u0436\u043D\u043E \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C /")))));
};
var Field = function Field(_ref3) {
  var label = _ref3.label,
    multiline = _ref3.multiline,
    placeholder = _ref3.placeholder;
  return React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--warm-gray)',
      marginBottom: 8
    }
  }, label), multiline ? React.createElement("textarea", {
    rows: 3,
    placeholder: placeholder,
    style: fieldStyle
  }) : React.createElement("input", {
    placeholder: placeholder,
    style: fieldStyle
  }));
};
var fieldStyle = {
  width: '100%',
  background: 'var(--cream)',
  border: '1px solid var(--border)',
  borderRadius: 4,
  padding: '14px 16px',
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color 300ms',
  resize: 'vertical'
};
Object.assign(window, {
  ContactPage: ContactPage
});