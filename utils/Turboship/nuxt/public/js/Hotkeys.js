console.log('Hotkeys.js')
/*! hotkeys-js v3.12.0 | MIT © 2023 kenny wong <wowohoo@qq.com> https://jaywcjlove.github.io/hotkeys-js */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).hotkeys = t())
})(this, function () {
  'use strict'
  var e = 'undefined' != typeof navigator && 0 < navigator.userAgent.toLowerCase().indexOf('firefox')
  function p(e, t, n, o) {
    e.addEventListener
      ? e.addEventListener(t, n, o)
      : e.attachEvent &&
        e.attachEvent('on'.concat(t), function () {
          n(window.event)
        })
  }
  function d(e, t) {
    for (var n = t.slice(0, t.length - 1), o = 0; o < n.length; o++) n[o] = e[n[o].toLowerCase()]
    return n
  }
  function y(e) {
    for (
      var t = (e = (e = 'string' != typeof e ? '' : e).replace(/\s/g, '')).split(','), n = t.lastIndexOf('');
      0 <= n;

    )
      (t[n - 1] += ','), t.splice(n, 1), (n = t.lastIndexOf(''))
    return t
  }
  for (
    var o = {
        backspace: 8,
        '\u232b': 8,
        tab: 9,
        clear: 12,
        enter: 13,
        '\u21a9': 13,
        return: 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        delete: 46,
        ins: 45,
        insert: 45,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        capslock: 20,
        num_0: 96,
        num_1: 97,
        num_2: 98,
        num_3: 99,
        num_4: 100,
        num_5: 101,
        num_6: 102,
        num_7: 103,
        num_8: 104,
        num_9: 105,
        num_multiply: 106,
        num_add: 107,
        num_enter: 108,
        num_subtract: 109,
        num_decimal: 110,
        num_divide: 111,
        '\u21ea': 20,
        ',': 188,
        '.': 190,
        '/': 191,
        '`': 192,
        '-': e ? 173 : 189,
        '=': e ? 61 : 187,
        ';': e ? 59 : 186,
        "'": 222,
        '[': 219,
        ']': 221,
        '\\': 220,
      },
      h = {
        '\u21e7': 16,
        shift: 16,
        '\u2325': 18,
        alt: 18,
        option: 18,
        '\u2303': 17,
        ctrl: 17,
        control: 17,
        '\u2318': 91,
        cmd: 91,
        command: 91,
      },
      m = {
        16: 'shiftKey',
        18: 'altKey',
        17: 'ctrlKey',
        91: 'metaKey',
        shiftKey: 16,
        ctrlKey: 17,
        altKey: 18,
        metaKey: 91,
      },
      g = { 16: !1, 18: !1, 17: !1, 91: !1 },
      v = {},
      t = 1;
    t < 20;
    t++
  )
    o['f'.concat(t)] = 111 + t
  var k = [],
    w = !1,
    n = 'all',
    O = [],
    K = function (e) {
      return o[e.toLowerCase()] || h[e.toLowerCase()] || e.toUpperCase().charCodeAt(0)
    }
  function i(e) {
    n = e || 'all'
  }
  function b() {
    return n || 'all'
  }
  function c(e) {
    var r = e.scope,
      i = e.method,
      t = e.splitKey,
      c = void 0 === t ? '+' : t
    y(e.key).forEach(function (e) {
      var t,
        e = e.split(c),
        n = e.length,
        o = e[n - 1],
        o = '*' === o ? '*' : K(o)
      v[o] &&
        ((r = r || b()),
        (t = 1 < n ? d(h, e) : []),
        (v[o] = v[o].filter(function (e) {
          return !(
            (!i || e.method === i) &&
            e.scope === r &&
            (function (e, t) {
              for (
                var n = e.length < t.length ? t : e, o = e.length < t.length ? e : t, r = !0, i = 0;
                i < n.length;
                i++
              )
                ~o.indexOf(n[i]) || (r = !1)
              return r
            })(e.mods, t)
          )
        })))
    })
  }
  function x(e, t, n, o) {
    var r
    if (t.element === o && (t.scope === n || 'all' === t.scope)) {
      for (var i in ((r = 0 < t.mods.length), g))
        Object.prototype.hasOwnProperty.call(g, i) &&
          ((!g[i] && ~t.mods.indexOf(+i)) || (g[i] && !~t.mods.indexOf(+i))) &&
          (r = !1)
      ;((0 !== t.mods.length || g[16] || g[18] || g[17] || g[91]) && !r && '*' !== t.shortcut) ||
        ((t.keys = []),
        (t.keys = t.keys.concat(k)),
        !1 === t.method(e, t) &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          e.stopPropagation && e.stopPropagation(),
          e.cancelBubble) &&
          (e.cancelBubble = !0))
    }
  }
  function C(n, e) {
    var t = v['*'],
      o = n.keyCode || n.which || n.charCode
    if (E.filter.call(this, n)) {
      if (
        (~k.indexOf((o = 93 !== o && 224 !== o ? o : 91)) || 229 === o || k.push(o),
        ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (e) {
          var t = m[e]
          n[e] && !~k.indexOf(t)
            ? k.push(t)
            : !n[e] && ~k.indexOf(t)
            ? k.splice(k.indexOf(t), 1)
            : 'metaKey' !== e ||
              !n[e] ||
              3 !== k.length ||
              n.ctrlKey ||
              n.shiftKey ||
              n.altKey ||
              (k = k.slice(k.indexOf(t)))
        }),
        o in g)
      ) {
        for (var r in ((g[o] = !0), h)) h[r] === o && (E[r] = !0)
        if (!t) return
      }
      for (var i in g) Object.prototype.hasOwnProperty.call(g, i) && (g[i] = n[m[i]])
      n.getModifierState &&
        (!n.altKey || n.ctrlKey) &&
        n.getModifierState('AltGraph') &&
        (~k.indexOf(17) || k.push(17), ~k.indexOf(18) || k.push(18), (g[17] = !0), (g[18] = !0))
      var c = b()
      if (t)
        for (var f = 0; f < t.length; f++)
          t[f].scope === c &&
            (('keydown' === n.type && t[f].keydown) || ('keyup' === n.type && t[f].keyup)) &&
            x(n, t[f], c, e)
      if (o in v)
        for (var a = 0; a < v[o].length; a++)
          if ((('keydown' === n.type && v[o][a].keydown) || ('keyup' === n.type && v[o][a].keyup)) && v[o][a].key) {
            for (var s = v[o][a], l = s.key.split(s.splitKey), u = [], p = 0; p < l.length; p++) u.push(K(l[p]))
            u.sort().join('') === k.sort().join('') && x(n, s, c, e)
          }
    }
  }
  function E(e, t, n) {
    k = []
    var o = y(e),
      r = [],
      i = 'all',
      c = document,
      f = 0,
      a = !1,
      s = !0,
      l = '+',
      u = !1
    for (
      void 0 === n && 'function' == typeof t && (n = t),
        '[object Object]' === Object.prototype.toString.call(t) &&
          (t.scope && (i = t.scope),
          t.element && (c = t.element),
          t.keyup && (a = t.keyup),
          void 0 !== t.keydown && (s = t.keydown),
          void 0 !== t.capture && (u = t.capture),
          'string' == typeof t.splitKey) &&
          (l = t.splitKey),
        'string' == typeof t && (i = t);
      f < o.length;
      f++
    )
      (r = []),
        1 < (e = o[f].split(l)).length && (r = d(h, e)),
        (e = '*' === (e = e[e.length - 1]) ? '*' : K(e)) in v || (v[e] = []),
        v[e].push({
          keyup: a,
          keydown: s,
          scope: i,
          mods: r,
          shortcut: o[f],
          method: n,
          key: o[f],
          splitKey: l,
          element: c,
        })
    void 0 !== c &&
      ((t = c), !~O.indexOf(t)) &&
      window &&
      (O.push(c),
      p(
        c,
        'keydown',
        function (e) {
          C(e, c)
        },
        u,
      ),
      w ||
        ((w = !0),
        p(
          window,
          'focus',
          function () {
            k = []
          },
          u,
        )),
      p(
        c,
        'keyup',
        function (e) {
          C(e, c)
          var t = e.keyCode || e.which || e.charCode,
            n = k.indexOf(t)
          if (
            (n < 0 || k.splice(n, 1),
            e.key && 'meta' == e.key.toLowerCase() && k.splice(0, k.length),
            (t = 93 !== t && 224 !== t ? t : 91) in g)
          )
            for (var o in ((g[t] = !1), h)) h[o] === t && (E[o] = !1)
        },
        u,
      ))
  }
  var r,
    f,
    a = {
      getPressedKeyString: function () {
        return k.map(function (e) {
          return (
            (n = e),
            Object.keys(o).find(function (e) {
              return o[e] === n
            }) ||
              ((t = e),
              Object.keys(h).find(function (e) {
                return h[e] === t
              })) ||
              String.fromCharCode(e)
          )
          var t, n
        })
      },
      setScope: i,
      getScope: b,
      deleteScope: function (e, t) {
        var n, o, r
        for (r in ((e = e || b()), v))
          if (Object.prototype.hasOwnProperty.call(v, r))
            for (n = v[r], o = 0; o < n.length; ) n[o].scope === e ? n.splice(o, 1) : o++
        b() === e && i(t || 'all')
      },
      getPressedKeyCodes: function () {
        return k.slice(0)
      },
      getAllKeyCodes: function () {
        var n = []
        return (
          Object.keys(v).forEach(function (e) {
            v[e].forEach(function (e) {
              var t = e.key
              n.push({
                scope: e.scope,
                shortcut: e.shortcut,
                mods: e.mods,
                keys: t.split('+').map(function (e) {
                  return K(e)
                }),
              })
            })
          }),
          n
        )
      },
      isPressed: function (e) {
        return 'string' == typeof e && (e = K(e)), !!~k.indexOf(e)
      },
      filter: function (e) {
        var t = (e = e.target || e.srcElement).tagName
        return !e.isContentEditable && (('INPUT' !== t && 'TEXTAREA' !== t && 'SELECT' !== t) || e.readOnly) ? !0 : !1
      },
      trigger: function (t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'all'
        Object.keys(v).forEach(function (e) {
          v[e]
            .filter(function (e) {
              return e.scope === n && e.shortcut === t
            })
            .forEach(function (e) {
              e && e.method && e.method()
            })
        })
      },
      unbind: function (e) {
        if (void 0 === e)
          Object.keys(v).forEach(function (e) {
            return delete v[e]
          })
        else if (Array.isArray(e))
          e.forEach(function (e) {
            e.key && c(e)
          })
        else if ('object' == typeof e) e.key && c(e)
        else if ('string' == typeof e) {
          for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o]
          var r = n[0],
            i = n[1]
          'function' == typeof r && ((i = r), (r = '')), c({ key: e, scope: r, method: i, splitKey: '+' })
        }
      },
      keyMap: o,
      modifier: h,
      modifierMap: m,
    }
  for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (E[r] = a[r])
  return (
    'undefined' != typeof window &&
      ((f = window.hotkeys),
      (E.noConflict = function (e) {
        return e && window.hotkeys === E && (window.hotkeys = f), E
      }),
      (window.hotkeys = E)),
    E
  )
})
