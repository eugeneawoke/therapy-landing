var R = function R(p, id) {
  return typeof window !== 'undefined' && window.__resources && window.__resources[id] || p;
};
var ServicesPage = function ServicesPage(_ref) {
  var onNav = _ref.onNav;
  var services = window.__content.services.map(function(s) {
    return Object.assign({}, s, { img: window.__resources[s.photoKey] });
  });
  return React.createElement("div", null, React.createElement("section", {
    style: {
      padding: '64px 64px 48px',
      textAlign: 'center'
    }
  }, React.createElement(Bracket, null, "\u0442\u0440\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 400,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      margin: '20px 0 14px',
      color: 'var(--ink)'
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--warm-gray)',
      maxWidth: 520,
      margin: '0 auto'
    }
  }, "\u041C\u043E\u0436\u043D\u043E \u043D\u0430\u0447\u0430\u0442\u044C \u0441 \u043E\u0434\u043D\u043E\u0433\u043E \u2014 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0442\u0441\u044F \u043F\u043E \u043C\u0435\u0440\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0431\u0443\u0434\u0443\u0442 \u043D\u0443\u0436\u043D\u044B.")), services.map(function (s, i) {
    return React.createElement("section", {
      key: s.n,
      style: {
        padding: '64px 64px',
        display: 'grid',
        gridTemplateColumns: i % 2 ? '1.3fr 1fr' : '1fr 1.3fr',
        gap: 64,
        alignItems: 'center',
        maxWidth: 1280,
        margin: '0 auto',
        background: i % 2 ? 'var(--cream-2)' : 'transparent'
      }
    }, React.createElement("div", {
      style: {
        aspectRatio: '4/5',
        borderRadius: 4,
        backgroundImage: "url(".concat(s.img, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'var(--shadow-soft)',
        order: i % 2 ? 2 : 1
      }
    }), React.createElement("div", {
      style: {
        order: i % 2 ? 1 : 2
      }
    }, React.createElement(Eyebrow, {
      color: "var(--olive)"
    }, s.n, " \xB7 ", s.tag), React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 48,
        fontWeight: 400,
        margin: '16px 0 24px',
        color: 'var(--ink)',
        letterSpacing: '0.02em'
      }
    }, s.title), React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.75,
        color: 'var(--ink)',
        marginBottom: 28
      }
    }, s.body), React.createElement(Ornament, {
      width: 60,
      color: "var(--sage)"
    }), React.createElement("div", {
      style: {
        margin: '24px 0 32px'
      }
    }, s.format.map(function (f) {
      return React.createElement("div", {
        key: f,
        style: {
          fontSize: 14,
          color: 'var(--warm-gray)',
          padding: '8px 0',
          borderBottom: '1px solid var(--border-soft)'
        }
      }, "\u2014 ", f);
    })), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        color: 'var(--ink)'
      }
    }, s.price), React.createElement(Button, {
      variant: "primary",
      onClick: function onClick() {
        return onNav('contact');
      }
    }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))));
  }));
};
Object.assign(window, {
  ServicesPage: ServicesPage
});