var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { watch as e, getCurrentScope as t, onScopeDispose as n, unref as i, ref as r, computed as a, nextTick as s, onMounted as o, onBeforeUnmount as l, defineComponent as c, openBlock as f, createElementBlock as d, createElementVNode as u, resolveComponent as g, normalizeClass as h, normalizeStyle as p, Fragment as b, renderList as m, toDisplayString as v, createVNode as _, createCommentVNode as y, toRaw as w, createBlock as x } from "vue";
function E(e2) {
  if (t()) {
    n(e2);
    return true;
  }
  return false;
}
const k = typeof window !== "undefined";
function N(e2, t2) {
  function n2(...n3) {
    e2(() => t2.apply(this, n3), { fn: t2, thisArg: this, args: n3 });
  }
  return n2;
}
const A = (e2) => e2();
function O(e2, t2 = {}) {
  let n2;
  let r2;
  const a2 = (a3) => {
    const s2 = i(e2);
    const o2 = i(t2.maxWait);
    if (n2)
      clearTimeout(n2);
    if (s2 <= 0 || o2 !== void 0 && o2 <= 0) {
      if (r2) {
        clearTimeout(r2);
        r2 = null;
      }
      return a3();
    }
    if (o2 && !r2)
      r2 = setTimeout(() => {
        if (n2)
          clearTimeout(n2);
        r2 = null;
        a3();
      }, o2);
    n2 = setTimeout(() => {
      if (r2)
        clearTimeout(r2);
      r2 = null;
      a3();
    }, s2);
  };
  return a2;
}
function M(e2, t2 = true, n2 = true) {
  let r2 = 0;
  let a2;
  let s2 = !n2;
  const o2 = () => {
    if (a2) {
      clearTimeout(a2);
      a2 = void 0;
    }
  };
  const l2 = (l3) => {
    const c2 = i(e2);
    const f2 = Date.now() - r2;
    o2();
    if (c2 <= 0) {
      r2 = Date.now();
      return l3();
    }
    if (f2 > c2) {
      r2 = Date.now();
      if (s2)
        s2 = false;
      else
        l3();
    }
    if (t2)
      a2 = setTimeout(() => {
        r2 = Date.now();
        if (!n2)
          s2 = true;
        o2();
        l3();
      }, c2);
    if (!n2 && !a2)
      a2 = setTimeout(() => s2 = true, c2);
  };
  return l2;
}
function S(e2, t2 = 200, n2 = true, i2 = true) {
  return N(M(t2, n2, i2), e2);
}
var R = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var D = Object.prototype.propertyIsEnumerable;
var I = (e2, t2) => {
  var n2 = {};
  for (var i2 in e2)
    if (T.call(e2, i2) && t2.indexOf(i2) < 0)
      n2[i2] = e2[i2];
  if (e2 != null && R) {
    for (var i2 of R(e2))
      if (t2.indexOf(i2) < 0 && D.call(e2, i2))
        n2[i2] = e2[i2];
  }
  return n2;
};
function C(t2, n2, i2 = {}) {
  const r2 = i2, { eventFilter: a2 = A } = r2, s2 = I(r2, ["eventFilter"]);
  return e(t2, N(a2, n2), s2);
}
var j = Object.defineProperty;
var B = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty;
var z = Object.prototype.propertyIsEnumerable;
var U = (e2, t2, n2) => t2 in e2 ? j(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2;
var H = (e2, t2) => {
  for (var n2 in t2 || (t2 = {}))
    if ($.call(t2, n2))
      U(e2, n2, t2[n2]);
  if (P) {
    for (var n2 of P(t2))
      if (z.call(t2, n2))
        U(e2, n2, t2[n2]);
  }
  return e2;
};
var Z = (e2, t2) => B(e2, L(t2));
var F = (e2, t2) => {
  var n2 = {};
  for (var i2 in e2)
    if ($.call(e2, i2) && t2.indexOf(i2) < 0)
      n2[i2] = e2[i2];
  if (e2 != null && P) {
    for (var i2 of P(e2))
      if (t2.indexOf(i2) < 0 && z.call(e2, i2))
        n2[i2] = e2[i2];
  }
  return n2;
};
function G(e2, t2, n2 = {}) {
  const i2 = n2, { debounce: r2 = 0 } = i2, a2 = F(i2, ["debounce"]);
  return C(e2, t2, Z(H({}, a2), { eventFilter: O(r2) }));
}
function K(e2) {
  var t2;
  const n2 = i(e2);
  return (t2 = n2 == null ? void 0 : n2.$el) != null ? t2 : n2;
}
const W = k ? window : void 0;
const q = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const X = "__vueuse_ssr_handlers__";
q[X] = q[X] || {};
q[X];
var J = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty;
var V = Object.prototype.propertyIsEnumerable;
var Y = (e2, t2) => {
  var n2 = {};
  for (var i2 in e2)
    if (Q.call(e2, i2) && t2.indexOf(i2) < 0)
      n2[i2] = e2[i2];
  if (e2 != null && J) {
    for (var i2 of J(e2))
      if (t2.indexOf(i2) < 0 && V.call(e2, i2))
        n2[i2] = e2[i2];
  }
  return n2;
};
function ee(t2, n2, i2 = {}) {
  const r2 = i2, { window: a2 = W } = r2, s2 = Y(r2, ["window"]);
  let o2;
  const l2 = a2 && "ResizeObserver" in a2;
  const c2 = () => {
    if (o2) {
      o2.disconnect();
      o2 = void 0;
    }
  };
  const f2 = e(() => K(t2), (e2) => {
    c2();
    if (l2 && a2 && e2) {
      o2 = new ResizeObserver(n2);
      o2.observe(e2, s2);
    }
  }, { immediate: true, flush: "post" });
  const d2 = () => {
    c2();
    f2();
  };
  E(d2);
  return { isSupported: l2, stop: d2 };
}
var te, ne;
k && (window == null ? void 0 : window.navigator) && ((te = window == null ? void 0 : window.navigator) == null ? void 0 : te.platform) && /iP(ad|hone|od)/.test((ne = window == null ? void 0 : window.navigator) == null ? void 0 : ne.platform);
var ie = { exports: {} };
(function(e2) {
  var t2 = function() {
    this.Diff_Timeout = 1;
    this.Diff_EditCost = 4;
    this.Match_Threshold = 0.5;
    this.Match_Distance = 1e3;
    this.Patch_DeleteThreshold = 0.5;
    this.Patch_Margin = 4;
    this.Match_MaxBits = 32;
  };
  var n2 = -1;
  var i2 = 1;
  var r2 = 0;
  t2.Diff = function(e3, t3) {
    return [e3, t3];
  };
  t2.prototype.diff_main = function(e3, n3, i3, a2) {
    if (typeof a2 == "undefined")
      if (this.Diff_Timeout <= 0)
        a2 = Number.MAX_VALUE;
      else
        a2 = new Date().getTime() + 1e3 * this.Diff_Timeout;
    var s2 = a2;
    if (e3 == null || n3 == null)
      throw new Error("Null input. (diff_main)");
    if (e3 == n3) {
      if (e3)
        return [new t2.Diff(r2, e3)];
      return [];
    }
    if (typeof i3 == "undefined")
      i3 = true;
    var o2 = i3;
    var l2 = this.diff_commonPrefix(e3, n3);
    var c2 = e3.substring(0, l2);
    e3 = e3.substring(l2);
    n3 = n3.substring(l2);
    l2 = this.diff_commonSuffix(e3, n3);
    var f2 = e3.substring(e3.length - l2);
    e3 = e3.substring(0, e3.length - l2);
    n3 = n3.substring(0, n3.length - l2);
    var d2 = this.diff_compute_(e3, n3, o2, s2);
    if (c2)
      d2.unshift(new t2.Diff(r2, c2));
    if (f2)
      d2.push(new t2.Diff(r2, f2));
    this.diff_cleanupMerge(d2);
    return d2;
  };
  t2.prototype.diff_compute_ = function(e3, a2, s2, o2) {
    var l2;
    if (!e3)
      return [new t2.Diff(i2, a2)];
    if (!a2)
      return [new t2.Diff(n2, e3)];
    var c2 = e3.length > a2.length ? e3 : a2;
    var f2 = e3.length > a2.length ? a2 : e3;
    var d2 = c2.indexOf(f2);
    if (d2 != -1) {
      l2 = [new t2.Diff(i2, c2.substring(0, d2)), new t2.Diff(r2, f2), new t2.Diff(i2, c2.substring(d2 + f2.length))];
      if (e3.length > a2.length)
        l2[0][0] = l2[2][0] = n2;
      return l2;
    }
    if (f2.length == 1)
      return [new t2.Diff(n2, e3), new t2.Diff(i2, a2)];
    var u2 = this.diff_halfMatch_(e3, a2);
    if (u2) {
      var g2 = u2[0];
      var h2 = u2[1];
      var p2 = u2[2];
      var b2 = u2[3];
      var m2 = u2[4];
      var v2 = this.diff_main(g2, p2, s2, o2);
      var _2 = this.diff_main(h2, b2, s2, o2);
      return v2.concat([new t2.Diff(r2, m2)], _2);
    }
    if (s2 && e3.length > 100 && a2.length > 100)
      return this.diff_lineMode_(e3, a2, o2);
    return this.diff_bisect_(e3, a2, o2);
  };
  t2.prototype.diff_lineMode_ = function(e3, a2, s2) {
    var o2 = this.diff_linesToChars_(e3, a2);
    e3 = o2.chars1;
    a2 = o2.chars2;
    var l2 = o2.lineArray;
    var c2 = this.diff_main(e3, a2, false, s2);
    this.diff_charsToLines_(c2, l2);
    this.diff_cleanupSemantic(c2);
    c2.push(new t2.Diff(r2, ""));
    var f2 = 0;
    var d2 = 0;
    var u2 = 0;
    var g2 = "";
    var h2 = "";
    while (f2 < c2.length) {
      switch (c2[f2][0]) {
        case i2:
          u2++;
          h2 += c2[f2][1];
          break;
        case n2:
          d2++;
          g2 += c2[f2][1];
          break;
        case r2:
          if (d2 >= 1 && u2 >= 1) {
            c2.splice(f2 - d2 - u2, d2 + u2);
            f2 = f2 - d2 - u2;
            var p2 = this.diff_main(g2, h2, false, s2);
            for (var b2 = p2.length - 1; b2 >= 0; b2--)
              c2.splice(f2, 0, p2[b2]);
            f2 += p2.length;
          }
          u2 = 0;
          d2 = 0;
          g2 = "";
          h2 = "";
          break;
      }
      f2++;
    }
    c2.pop();
    return c2;
  };
  t2.prototype.diff_bisect_ = function(e3, r3, a2) {
    var s2 = e3.length;
    var o2 = r3.length;
    var l2 = Math.ceil((s2 + o2) / 2);
    var c2 = l2;
    var f2 = 2 * l2;
    var d2 = new Array(f2);
    var u2 = new Array(f2);
    for (var g2 = 0; g2 < f2; g2++) {
      d2[g2] = -1;
      u2[g2] = -1;
    }
    d2[c2 + 1] = 0;
    u2[c2 + 1] = 0;
    var h2 = s2 - o2;
    var p2 = h2 % 2 != 0;
    var b2 = 0;
    var m2 = 0;
    var v2 = 0;
    var _2 = 0;
    for (var y2 = 0; y2 < l2; y2++) {
      if (new Date().getTime() > a2)
        break;
      for (var w2 = -y2 + b2; w2 <= y2 - m2; w2 += 2) {
        var x2 = c2 + w2;
        var E2;
        if (w2 == -y2 || w2 != y2 && d2[x2 - 1] < d2[x2 + 1])
          E2 = d2[x2 + 1];
        else
          E2 = d2[x2 - 1] + 1;
        var k2 = E2 - w2;
        while (E2 < s2 && k2 < o2 && e3.charAt(E2) == r3.charAt(k2)) {
          E2++;
          k2++;
        }
        d2[x2] = E2;
        if (E2 > s2)
          m2 += 2;
        else if (k2 > o2)
          b2 += 2;
        else if (p2) {
          var N2 = c2 + h2 - w2;
          if (N2 >= 0 && N2 < f2 && u2[N2] != -1) {
            var A2 = s2 - u2[N2];
            if (E2 >= A2)
              return this.diff_bisectSplit_(e3, r3, E2, k2, a2);
          }
        }
      }
      for (var O2 = -y2 + v2; O2 <= y2 - _2; O2 += 2) {
        var N2 = c2 + O2;
        var A2;
        if (O2 == -y2 || O2 != y2 && u2[N2 - 1] < u2[N2 + 1])
          A2 = u2[N2 + 1];
        else
          A2 = u2[N2 - 1] + 1;
        var M2 = A2 - O2;
        while (A2 < s2 && M2 < o2 && e3.charAt(s2 - A2 - 1) == r3.charAt(o2 - M2 - 1)) {
          A2++;
          M2++;
        }
        u2[N2] = A2;
        if (A2 > s2)
          _2 += 2;
        else if (M2 > o2)
          v2 += 2;
        else if (!p2) {
          var x2 = c2 + h2 - O2;
          if (x2 >= 0 && x2 < f2 && d2[x2] != -1) {
            var E2 = d2[x2];
            var k2 = c2 + E2 - x2;
            A2 = s2 - A2;
            if (E2 >= A2)
              return this.diff_bisectSplit_(e3, r3, E2, k2, a2);
          }
        }
      }
    }
    return [new t2.Diff(n2, e3), new t2.Diff(i2, r3)];
  };
  t2.prototype.diff_bisectSplit_ = function(e3, t3, n3, i3, r3) {
    var a2 = e3.substring(0, n3);
    var s2 = t3.substring(0, i3);
    var o2 = e3.substring(n3);
    var l2 = t3.substring(i3);
    var c2 = this.diff_main(a2, s2, false, r3);
    var f2 = this.diff_main(o2, l2, false, r3);
    return c2.concat(f2);
  };
  t2.prototype.diff_linesToChars_ = function(e3, t3) {
    var n3 = [];
    var i3 = {};
    n3[0] = "";
    function r3(e4) {
      var t4 = "";
      var r4 = 0;
      var s3 = -1;
      var o3 = n3.length;
      while (s3 < e4.length - 1) {
        s3 = e4.indexOf("\n", r4);
        if (s3 == -1)
          s3 = e4.length - 1;
        var l2 = e4.substring(r4, s3 + 1);
        if (i3.hasOwnProperty ? i3.hasOwnProperty(l2) : i3[l2] !== void 0)
          t4 += String.fromCharCode(i3[l2]);
        else {
          if (o3 == a2) {
            l2 = e4.substring(r4);
            s3 = e4.length;
          }
          t4 += String.fromCharCode(o3);
          i3[l2] = o3;
          n3[o3++] = l2;
        }
        r4 = s3 + 1;
      }
      return t4;
    }
    var a2 = 4e4;
    var s2 = r3(e3);
    a2 = 65535;
    var o2 = r3(t3);
    return { chars1: s2, chars2: o2, lineArray: n3 };
  };
  t2.prototype.diff_charsToLines_ = function(e3, t3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var i3 = e3[n3][1];
      var r3 = [];
      for (var a2 = 0; a2 < i3.length; a2++)
        r3[a2] = t3[i3.charCodeAt(a2)];
      e3[n3][1] = r3.join("");
    }
  };
  t2.prototype.diff_commonPrefix = function(e3, t3) {
    if (!e3 || !t3 || e3.charAt(0) != t3.charAt(0))
      return 0;
    var n3 = 0;
    var i3 = Math.min(e3.length, t3.length);
    var r3 = i3;
    var a2 = 0;
    while (n3 < r3) {
      if (e3.substring(a2, r3) == t3.substring(a2, r3)) {
        n3 = r3;
        a2 = n3;
      } else
        i3 = r3;
      r3 = Math.floor((i3 - n3) / 2 + n3);
    }
    return r3;
  };
  t2.prototype.diff_commonSuffix = function(e3, t3) {
    if (!e3 || !t3 || e3.charAt(e3.length - 1) != t3.charAt(t3.length - 1))
      return 0;
    var n3 = 0;
    var i3 = Math.min(e3.length, t3.length);
    var r3 = i3;
    var a2 = 0;
    while (n3 < r3) {
      if (e3.substring(e3.length - r3, e3.length - a2) == t3.substring(t3.length - r3, t3.length - a2)) {
        n3 = r3;
        a2 = n3;
      } else
        i3 = r3;
      r3 = Math.floor((i3 - n3) / 2 + n3);
    }
    return r3;
  };
  t2.prototype.diff_commonOverlap_ = function(e3, t3) {
    var n3 = e3.length;
    var i3 = t3.length;
    if (n3 == 0 || i3 == 0)
      return 0;
    if (n3 > i3)
      e3 = e3.substring(n3 - i3);
    else if (n3 < i3)
      t3 = t3.substring(0, n3);
    var r3 = Math.min(n3, i3);
    if (e3 == t3)
      return r3;
    var a2 = 0;
    var s2 = 1;
    while (true) {
      var o2 = e3.substring(r3 - s2);
      var l2 = t3.indexOf(o2);
      if (l2 == -1)
        return a2;
      s2 += l2;
      if (l2 == 0 || e3.substring(r3 - s2) == t3.substring(0, s2)) {
        a2 = s2;
        s2++;
      }
    }
  };
  t2.prototype.diff_halfMatch_ = function(e3, t3) {
    if (this.Diff_Timeout <= 0)
      return null;
    var n3 = e3.length > t3.length ? e3 : t3;
    var i3 = e3.length > t3.length ? t3 : e3;
    if (n3.length < 4 || 2 * i3.length < n3.length)
      return null;
    var r3 = this;
    function a2(e4, t4, n4) {
      var i4 = e4.substring(n4, n4 + Math.floor(e4.length / 4));
      var a3 = -1;
      var s3 = "";
      var o3, l3, c3, f3;
      while ((a3 = t4.indexOf(i4, a3 + 1)) != -1) {
        var d3 = r3.diff_commonPrefix(e4.substring(n4), t4.substring(a3));
        var u3 = r3.diff_commonSuffix(e4.substring(0, n4), t4.substring(0, a3));
        if (s3.length < u3 + d3) {
          s3 = t4.substring(a3 - u3, a3) + t4.substring(a3, a3 + d3);
          o3 = e4.substring(0, n4 - u3);
          l3 = e4.substring(n4 + d3);
          c3 = t4.substring(0, a3 - u3);
          f3 = t4.substring(a3 + d3);
        }
      }
      if (2 * s3.length >= e4.length)
        return [o3, l3, c3, f3, s3];
      else
        return null;
    }
    var s2 = a2(n3, i3, Math.ceil(n3.length / 4));
    var o2 = a2(n3, i3, Math.ceil(n3.length / 2));
    var l2;
    if (!s2 && !o2)
      return null;
    else if (!o2)
      l2 = s2;
    else if (!s2)
      l2 = o2;
    else
      l2 = s2[4].length > o2[4].length ? s2 : o2;
    var c2, f2, d2, u2;
    if (e3.length > t3.length) {
      c2 = l2[0];
      f2 = l2[1];
      d2 = l2[2];
      u2 = l2[3];
    } else {
      d2 = l2[0];
      u2 = l2[1];
      c2 = l2[2];
      f2 = l2[3];
    }
    var g2 = l2[4];
    return [c2, f2, d2, u2, g2];
  };
  t2.prototype.diff_cleanupSemantic = function(e3) {
    var a2 = false;
    var s2 = [];
    var o2 = 0;
    var l2 = null;
    var c2 = 0;
    var f2 = 0;
    var d2 = 0;
    var u2 = 0;
    var g2 = 0;
    while (c2 < e3.length) {
      if (e3[c2][0] == r2) {
        s2[o2++] = c2;
        f2 = u2;
        d2 = g2;
        u2 = 0;
        g2 = 0;
        l2 = e3[c2][1];
      } else {
        if (e3[c2][0] == i2)
          u2 += e3[c2][1].length;
        else
          g2 += e3[c2][1].length;
        if (l2 && l2.length <= Math.max(f2, d2) && l2.length <= Math.max(u2, g2)) {
          e3.splice(s2[o2 - 1], 0, new t2.Diff(n2, l2));
          e3[s2[o2 - 1] + 1][0] = i2;
          o2--;
          o2--;
          c2 = o2 > 0 ? s2[o2 - 1] : -1;
          f2 = 0;
          d2 = 0;
          u2 = 0;
          g2 = 0;
          l2 = null;
          a2 = true;
        }
      }
      c2++;
    }
    if (a2)
      this.diff_cleanupMerge(e3);
    this.diff_cleanupSemanticLossless(e3);
    c2 = 1;
    while (c2 < e3.length) {
      if (e3[c2 - 1][0] == n2 && e3[c2][0] == i2) {
        var h2 = e3[c2 - 1][1];
        var p2 = e3[c2][1];
        var b2 = this.diff_commonOverlap_(h2, p2);
        var m2 = this.diff_commonOverlap_(p2, h2);
        if (b2 >= m2) {
          if (b2 >= h2.length / 2 || b2 >= p2.length / 2) {
            e3.splice(c2, 0, new t2.Diff(r2, p2.substring(0, b2)));
            e3[c2 - 1][1] = h2.substring(0, h2.length - b2);
            e3[c2 + 1][1] = p2.substring(b2);
            c2++;
          }
        } else if (m2 >= h2.length / 2 || m2 >= p2.length / 2) {
          e3.splice(c2, 0, new t2.Diff(r2, h2.substring(0, m2)));
          e3[c2 - 1][0] = i2;
          e3[c2 - 1][1] = p2.substring(0, p2.length - m2);
          e3[c2 + 1][0] = n2;
          e3[c2 + 1][1] = h2.substring(m2);
          c2++;
        }
        c2++;
      }
      c2++;
    }
  };
  t2.prototype.diff_cleanupSemanticLossless = function(e3) {
    function n3(e4, n4) {
      if (!e4 || !n4)
        return 6;
      var i4 = e4.charAt(e4.length - 1);
      var r3 = n4.charAt(0);
      var a3 = i4.match(t2.nonAlphaNumericRegex_);
      var s3 = r3.match(t2.nonAlphaNumericRegex_);
      var o3 = a3 && i4.match(t2.whitespaceRegex_);
      var l3 = s3 && r3.match(t2.whitespaceRegex_);
      var c3 = o3 && i4.match(t2.linebreakRegex_);
      var f3 = l3 && r3.match(t2.linebreakRegex_);
      var d3 = c3 && e4.match(t2.blanklineEndRegex_);
      var u3 = f3 && n4.match(t2.blanklineStartRegex_);
      if (d3 || u3)
        return 5;
      else if (c3 || f3)
        return 4;
      else if (a3 && !o3 && l3)
        return 3;
      else if (o3 || l3)
        return 2;
      else if (a3 || s3)
        return 1;
      return 0;
    }
    var i3 = 1;
    while (i3 < e3.length - 1) {
      if (e3[i3 - 1][0] == r2 && e3[i3 + 1][0] == r2) {
        var a2 = e3[i3 - 1][1];
        var s2 = e3[i3][1];
        var o2 = e3[i3 + 1][1];
        var l2 = this.diff_commonSuffix(a2, s2);
        if (l2) {
          var c2 = s2.substring(s2.length - l2);
          a2 = a2.substring(0, a2.length - l2);
          s2 = c2 + s2.substring(0, s2.length - l2);
          o2 = c2 + o2;
        }
        var f2 = a2;
        var d2 = s2;
        var u2 = o2;
        var g2 = n3(a2, s2) + n3(s2, o2);
        while (s2.charAt(0) === o2.charAt(0)) {
          a2 += s2.charAt(0);
          s2 = s2.substring(1) + o2.charAt(0);
          o2 = o2.substring(1);
          var h2 = n3(a2, s2) + n3(s2, o2);
          if (h2 >= g2) {
            g2 = h2;
            f2 = a2;
            d2 = s2;
            u2 = o2;
          }
        }
        if (e3[i3 - 1][1] != f2) {
          if (f2)
            e3[i3 - 1][1] = f2;
          else {
            e3.splice(i3 - 1, 1);
            i3--;
          }
          e3[i3][1] = d2;
          if (u2)
            e3[i3 + 1][1] = u2;
          else {
            e3.splice(i3 + 1, 1);
            i3--;
          }
        }
      }
      i3++;
    }
  };
  t2.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
  t2.whitespaceRegex_ = /\s/;
  t2.linebreakRegex_ = /[\r\n]/;
  t2.blanklineEndRegex_ = /\n\r?\n$/;
  t2.blanklineStartRegex_ = /^\r?\n\r?\n/;
  t2.prototype.diff_cleanupEfficiency = function(e3) {
    var a2 = false;
    var s2 = [];
    var o2 = 0;
    var l2 = null;
    var c2 = 0;
    var f2 = false;
    var d2 = false;
    var u2 = false;
    var g2 = false;
    while (c2 < e3.length) {
      if (e3[c2][0] == r2) {
        if (e3[c2][1].length < this.Diff_EditCost && (u2 || g2)) {
          s2[o2++] = c2;
          f2 = u2;
          d2 = g2;
          l2 = e3[c2][1];
        } else {
          o2 = 0;
          l2 = null;
        }
        u2 = g2 = false;
      } else {
        if (e3[c2][0] == n2)
          g2 = true;
        else
          u2 = true;
        if (l2 && (f2 && d2 && u2 && g2 || l2.length < this.Diff_EditCost / 2 && f2 + d2 + u2 + g2 == 3)) {
          e3.splice(s2[o2 - 1], 0, new t2.Diff(n2, l2));
          e3[s2[o2 - 1] + 1][0] = i2;
          o2--;
          l2 = null;
          if (f2 && d2) {
            u2 = g2 = true;
            o2 = 0;
          } else {
            o2--;
            c2 = o2 > 0 ? s2[o2 - 1] : -1;
            u2 = g2 = false;
          }
          a2 = true;
        }
      }
      c2++;
    }
    if (a2)
      this.diff_cleanupMerge(e3);
  };
  t2.prototype.diff_cleanupMerge = function(e3) {
    e3.push(new t2.Diff(r2, ""));
    var a2 = 0;
    var s2 = 0;
    var o2 = 0;
    var l2 = "";
    var c2 = "";
    var f2;
    while (a2 < e3.length)
      switch (e3[a2][0]) {
        case i2:
          o2++;
          c2 += e3[a2][1];
          a2++;
          break;
        case n2:
          s2++;
          l2 += e3[a2][1];
          a2++;
          break;
        case r2:
          if (s2 + o2 > 1) {
            if (s2 !== 0 && o2 !== 0) {
              f2 = this.diff_commonPrefix(c2, l2);
              if (f2 !== 0) {
                if (a2 - s2 - o2 > 0 && e3[a2 - s2 - o2 - 1][0] == r2)
                  e3[a2 - s2 - o2 - 1][1] += c2.substring(0, f2);
                else {
                  e3.splice(0, 0, new t2.Diff(r2, c2.substring(0, f2)));
                  a2++;
                }
                c2 = c2.substring(f2);
                l2 = l2.substring(f2);
              }
              f2 = this.diff_commonSuffix(c2, l2);
              if (f2 !== 0) {
                e3[a2][1] = c2.substring(c2.length - f2) + e3[a2][1];
                c2 = c2.substring(0, c2.length - f2);
                l2 = l2.substring(0, l2.length - f2);
              }
            }
            a2 -= s2 + o2;
            e3.splice(a2, s2 + o2);
            if (l2.length) {
              e3.splice(a2, 0, new t2.Diff(n2, l2));
              a2++;
            }
            if (c2.length) {
              e3.splice(a2, 0, new t2.Diff(i2, c2));
              a2++;
            }
            a2++;
          } else if (a2 !== 0 && e3[a2 - 1][0] == r2) {
            e3[a2 - 1][1] += e3[a2][1];
            e3.splice(a2, 1);
          } else
            a2++;
          o2 = 0;
          s2 = 0;
          l2 = "";
          c2 = "";
          break;
      }
    if (e3[e3.length - 1][1] === "")
      e3.pop();
    var d2 = false;
    a2 = 1;
    while (a2 < e3.length - 1) {
      if (e3[a2 - 1][0] == r2 && e3[a2 + 1][0] == r2) {
        if (e3[a2][1].substring(e3[a2][1].length - e3[a2 - 1][1].length) == e3[a2 - 1][1]) {
          e3[a2][1] = e3[a2 - 1][1] + e3[a2][1].substring(0, e3[a2][1].length - e3[a2 - 1][1].length);
          e3[a2 + 1][1] = e3[a2 - 1][1] + e3[a2 + 1][1];
          e3.splice(a2 - 1, 1);
          d2 = true;
        } else if (e3[a2][1].substring(0, e3[a2 + 1][1].length) == e3[a2 + 1][1]) {
          e3[a2 - 1][1] += e3[a2 + 1][1];
          e3[a2][1] = e3[a2][1].substring(e3[a2 + 1][1].length) + e3[a2 + 1][1];
          e3.splice(a2 + 1, 1);
          d2 = true;
        }
      }
      a2++;
    }
    if (d2)
      this.diff_cleanupMerge(e3);
  };
  t2.prototype.diff_xIndex = function(e3, t3) {
    var r3 = 0;
    var a2 = 0;
    var s2 = 0;
    var o2 = 0;
    var l2;
    for (l2 = 0; l2 < e3.length; l2++) {
      if (e3[l2][0] !== i2)
        r3 += e3[l2][1].length;
      if (e3[l2][0] !== n2)
        a2 += e3[l2][1].length;
      if (r3 > t3)
        break;
      s2 = r3;
      o2 = a2;
    }
    if (e3.length != l2 && e3[l2][0] === n2)
      return o2;
    return o2 + (t3 - s2);
  };
  t2.prototype.diff_prettyHtml = function(e3) {
    var t3 = [];
    var a2 = /&/g;
    var s2 = /</g;
    var o2 = />/g;
    var l2 = /\n/g;
    for (var c2 = 0; c2 < e3.length; c2++) {
      var f2 = e3[c2][0];
      var d2 = e3[c2][1];
      var u2 = d2.replace(a2, "&amp;").replace(s2, "&lt;").replace(o2, "&gt;").replace(l2, "&para;<br>");
      switch (f2) {
        case i2:
          t3[c2] = '<ins style="background:#e6ffe6;">' + u2 + "</ins>";
          break;
        case n2:
          t3[c2] = '<del style="background:#ffe6e6;">' + u2 + "</del>";
          break;
        case r2:
          t3[c2] = "<span>" + u2 + "</span>";
          break;
      }
    }
    return t3.join("");
  };
  t2.prototype.diff_text1 = function(e3) {
    var t3 = [];
    for (var n3 = 0; n3 < e3.length; n3++)
      if (e3[n3][0] !== i2)
        t3[n3] = e3[n3][1];
    return t3.join("");
  };
  t2.prototype.diff_text2 = function(e3) {
    var t3 = [];
    for (var i3 = 0; i3 < e3.length; i3++)
      if (e3[i3][0] !== n2)
        t3[i3] = e3[i3][1];
    return t3.join("");
  };
  t2.prototype.diff_levenshtein = function(e3) {
    var t3 = 0;
    var a2 = 0;
    var s2 = 0;
    for (var o2 = 0; o2 < e3.length; o2++) {
      var l2 = e3[o2][0];
      var c2 = e3[o2][1];
      switch (l2) {
        case i2:
          a2 += c2.length;
          break;
        case n2:
          s2 += c2.length;
          break;
        case r2:
          t3 += Math.max(a2, s2);
          a2 = 0;
          s2 = 0;
          break;
      }
    }
    t3 += Math.max(a2, s2);
    return t3;
  };
  t2.prototype.diff_toDelta = function(e3) {
    var t3 = [];
    for (var a2 = 0; a2 < e3.length; a2++)
      switch (e3[a2][0]) {
        case i2:
          t3[a2] = "+" + encodeURI(e3[a2][1]);
          break;
        case n2:
          t3[a2] = "-" + e3[a2][1].length;
          break;
        case r2:
          t3[a2] = "=" + e3[a2][1].length;
          break;
      }
    return t3.join("	").replace(/%20/g, " ");
  };
  t2.prototype.diff_fromDelta = function(e3, a2) {
    var s2 = [];
    var o2 = 0;
    var l2 = 0;
    var c2 = a2.split(/\t/g);
    for (var f2 = 0; f2 < c2.length; f2++) {
      var d2 = c2[f2].substring(1);
      switch (c2[f2].charAt(0)) {
        case "+":
          try {
            s2[o2++] = new t2.Diff(i2, decodeURI(d2));
          } catch (e4) {
            throw new Error("Illegal escape in diff_fromDelta: " + d2);
          }
          break;
        case "-":
        case "=":
          var u2 = parseInt(d2, 10);
          if (isNaN(u2) || u2 < 0)
            throw new Error("Invalid number in diff_fromDelta: " + d2);
          var g2 = e3.substring(l2, l2 += u2);
          if (c2[f2].charAt(0) == "=")
            s2[o2++] = new t2.Diff(r2, g2);
          else
            s2[o2++] = new t2.Diff(n2, g2);
          break;
        default:
          if (c2[f2])
            throw new Error("Invalid diff operation in diff_fromDelta: " + c2[f2]);
      }
    }
    if (l2 != e3.length)
      throw new Error("Delta length (" + l2 + ") does not equal source text length (" + e3.length + ").");
    return s2;
  };
  t2.prototype.match_main = function(e3, t3, n3) {
    if (e3 == null || t3 == null || n3 == null)
      throw new Error("Null input. (match_main)");
    n3 = Math.max(0, Math.min(n3, e3.length));
    if (e3 == t3)
      return 0;
    else if (!e3.length)
      return -1;
    else if (e3.substring(n3, n3 + t3.length) == t3)
      return n3;
    else
      return this.match_bitap_(e3, t3, n3);
  };
  t2.prototype.match_bitap_ = function(e3, t3, n3) {
    if (t3.length > this.Match_MaxBits)
      throw new Error("Pattern too long for this browser.");
    var i3 = this.match_alphabet_(t3);
    var r3 = this;
    function a2(e4, i4) {
      var a3 = e4 / t3.length;
      var s3 = Math.abs(n3 - i4);
      if (!r3.Match_Distance)
        return s3 ? 1 : a3;
      return a3 + s3 / r3.Match_Distance;
    }
    var s2 = this.Match_Threshold;
    var o2 = e3.indexOf(t3, n3);
    if (o2 != -1) {
      s2 = Math.min(a2(0, o2), s2);
      o2 = e3.lastIndexOf(t3, n3 + t3.length);
      if (o2 != -1)
        s2 = Math.min(a2(0, o2), s2);
    }
    var l2 = 1 << t3.length - 1;
    o2 = -1;
    var c2, f2;
    var d2 = t3.length + e3.length;
    var u2;
    for (var g2 = 0; g2 < t3.length; g2++) {
      c2 = 0;
      f2 = d2;
      while (c2 < f2) {
        if (a2(g2, n3 + f2) <= s2)
          c2 = f2;
        else
          d2 = f2;
        f2 = Math.floor((d2 - c2) / 2 + c2);
      }
      d2 = f2;
      var h2 = Math.max(1, n3 - f2 + 1);
      var p2 = Math.min(n3 + f2, e3.length) + t3.length;
      var b2 = Array(p2 + 2);
      b2[p2 + 1] = (1 << g2) - 1;
      for (var m2 = p2; m2 >= h2; m2--) {
        var v2 = i3[e3.charAt(m2 - 1)];
        if (g2 === 0)
          b2[m2] = (b2[m2 + 1] << 1 | 1) & v2;
        else
          b2[m2] = (b2[m2 + 1] << 1 | 1) & v2 | ((u2[m2 + 1] | u2[m2]) << 1 | 1) | u2[m2 + 1];
        if (b2[m2] & l2) {
          var _2 = a2(g2, m2 - 1);
          if (_2 <= s2) {
            s2 = _2;
            o2 = m2 - 1;
            if (o2 > n3)
              h2 = Math.max(1, 2 * n3 - o2);
            else
              break;
          }
        }
      }
      if (a2(g2 + 1, n3) > s2)
        break;
      u2 = b2;
    }
    return o2;
  };
  t2.prototype.match_alphabet_ = function(e3) {
    var t3 = {};
    for (var n3 = 0; n3 < e3.length; n3++)
      t3[e3.charAt(n3)] = 0;
    for (var n3 = 0; n3 < e3.length; n3++)
      t3[e3.charAt(n3)] |= 1 << e3.length - n3 - 1;
    return t3;
  };
  t2.prototype.patch_addContext_ = function(e3, n3) {
    if (n3.length == 0)
      return;
    if (e3.start2 === null)
      throw Error("patch not initialized");
    var i3 = n3.substring(e3.start2, e3.start2 + e3.length1);
    var a2 = 0;
    while (n3.indexOf(i3) != n3.lastIndexOf(i3) && i3.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
      a2 += this.Patch_Margin;
      i3 = n3.substring(e3.start2 - a2, e3.start2 + e3.length1 + a2);
    }
    a2 += this.Patch_Margin;
    var s2 = n3.substring(e3.start2 - a2, e3.start2);
    if (s2)
      e3.diffs.unshift(new t2.Diff(r2, s2));
    var o2 = n3.substring(e3.start2 + e3.length1, e3.start2 + e3.length1 + a2);
    if (o2)
      e3.diffs.push(new t2.Diff(r2, o2));
    e3.start1 -= s2.length;
    e3.start2 -= s2.length;
    e3.length1 += s2.length + o2.length;
    e3.length2 += s2.length + o2.length;
  };
  t2.prototype.patch_make = function(e3, a2, s2) {
    var o2, l2;
    if (typeof e3 == "string" && typeof a2 == "string" && typeof s2 == "undefined") {
      o2 = e3;
      l2 = this.diff_main(o2, a2, true);
      if (l2.length > 2) {
        this.diff_cleanupSemantic(l2);
        this.diff_cleanupEfficiency(l2);
      }
    } else if (e3 && typeof e3 == "object" && typeof a2 == "undefined" && typeof s2 == "undefined") {
      l2 = e3;
      o2 = this.diff_text1(l2);
    } else if (typeof e3 == "string" && a2 && typeof a2 == "object" && typeof s2 == "undefined") {
      o2 = e3;
      l2 = a2;
    } else if (typeof e3 == "string" && typeof a2 == "string" && s2 && typeof s2 == "object") {
      o2 = e3;
      l2 = s2;
    } else
      throw new Error("Unknown call format to patch_make.");
    if (l2.length === 0)
      return [];
    var c2 = [];
    var f2 = new t2.patch_obj();
    var d2 = 0;
    var u2 = 0;
    var g2 = 0;
    var h2 = o2;
    var p2 = o2;
    for (var b2 = 0; b2 < l2.length; b2++) {
      var m2 = l2[b2][0];
      var v2 = l2[b2][1];
      if (!d2 && m2 !== r2) {
        f2.start1 = u2;
        f2.start2 = g2;
      }
      switch (m2) {
        case i2:
          f2.diffs[d2++] = l2[b2];
          f2.length2 += v2.length;
          p2 = p2.substring(0, g2) + v2 + p2.substring(g2);
          break;
        case n2:
          f2.length1 += v2.length;
          f2.diffs[d2++] = l2[b2];
          p2 = p2.substring(0, g2) + p2.substring(g2 + v2.length);
          break;
        case r2:
          if (v2.length <= 2 * this.Patch_Margin && d2 && l2.length != b2 + 1) {
            f2.diffs[d2++] = l2[b2];
            f2.length1 += v2.length;
            f2.length2 += v2.length;
          } else if (v2.length >= 2 * this.Patch_Margin) {
            if (d2) {
              this.patch_addContext_(f2, h2);
              c2.push(f2);
              f2 = new t2.patch_obj();
              d2 = 0;
              h2 = p2;
              u2 = g2;
            }
          }
          break;
      }
      if (m2 !== i2)
        u2 += v2.length;
      if (m2 !== n2)
        g2 += v2.length;
    }
    if (d2) {
      this.patch_addContext_(f2, h2);
      c2.push(f2);
    }
    return c2;
  };
  t2.prototype.patch_deepCopy = function(e3) {
    var n3 = [];
    for (var i3 = 0; i3 < e3.length; i3++) {
      var r3 = e3[i3];
      var a2 = new t2.patch_obj();
      a2.diffs = [];
      for (var s2 = 0; s2 < r3.diffs.length; s2++)
        a2.diffs[s2] = new t2.Diff(r3.diffs[s2][0], r3.diffs[s2][1]);
      a2.start1 = r3.start1;
      a2.start2 = r3.start2;
      a2.length1 = r3.length1;
      a2.length2 = r3.length2;
      n3[i3] = a2;
    }
    return n3;
  };
  t2.prototype.patch_apply = function(e3, t3) {
    if (e3.length == 0)
      return [t3, []];
    e3 = this.patch_deepCopy(e3);
    var a2 = this.patch_addPadding(e3);
    t3 = a2 + t3 + a2;
    this.patch_splitMax(e3);
    var s2 = 0;
    var o2 = [];
    for (var l2 = 0; l2 < e3.length; l2++) {
      var c2 = e3[l2].start2 + s2;
      var f2 = this.diff_text1(e3[l2].diffs);
      var d2;
      var u2 = -1;
      if (f2.length > this.Match_MaxBits) {
        d2 = this.match_main(t3, f2.substring(0, this.Match_MaxBits), c2);
        if (d2 != -1) {
          u2 = this.match_main(t3, f2.substring(f2.length - this.Match_MaxBits), c2 + f2.length - this.Match_MaxBits);
          if (u2 == -1 || d2 >= u2)
            d2 = -1;
        }
      } else
        d2 = this.match_main(t3, f2, c2);
      if (d2 == -1) {
        o2[l2] = false;
        s2 -= e3[l2].length2 - e3[l2].length1;
      } else {
        o2[l2] = true;
        s2 = d2 - c2;
        var g2;
        if (u2 == -1)
          g2 = t3.substring(d2, d2 + f2.length);
        else
          g2 = t3.substring(d2, u2 + this.Match_MaxBits);
        if (f2 == g2)
          t3 = t3.substring(0, d2) + this.diff_text2(e3[l2].diffs) + t3.substring(d2 + f2.length);
        else {
          var h2 = this.diff_main(f2, g2, false);
          if (f2.length > this.Match_MaxBits && this.diff_levenshtein(h2) / f2.length > this.Patch_DeleteThreshold)
            o2[l2] = false;
          else {
            this.diff_cleanupSemanticLossless(h2);
            var p2 = 0;
            var b2;
            for (var m2 = 0; m2 < e3[l2].diffs.length; m2++) {
              var v2 = e3[l2].diffs[m2];
              if (v2[0] !== r2)
                b2 = this.diff_xIndex(h2, p2);
              if (v2[0] === i2)
                t3 = t3.substring(0, d2 + b2) + v2[1] + t3.substring(d2 + b2);
              else if (v2[0] === n2)
                t3 = t3.substring(0, d2 + b2) + t3.substring(d2 + this.diff_xIndex(h2, p2 + v2[1].length));
              if (v2[0] !== n2)
                p2 += v2[1].length;
            }
          }
        }
      }
    }
    t3 = t3.substring(a2.length, t3.length - a2.length);
    return [t3, o2];
  };
  t2.prototype.patch_addPadding = function(e3) {
    var n3 = this.Patch_Margin;
    var i3 = "";
    for (var a2 = 1; a2 <= n3; a2++)
      i3 += String.fromCharCode(a2);
    for (var a2 = 0; a2 < e3.length; a2++) {
      e3[a2].start1 += n3;
      e3[a2].start2 += n3;
    }
    var s2 = e3[0];
    var o2 = s2.diffs;
    if (o2.length == 0 || o2[0][0] != r2) {
      o2.unshift(new t2.Diff(r2, i3));
      s2.start1 -= n3;
      s2.start2 -= n3;
      s2.length1 += n3;
      s2.length2 += n3;
    } else if (n3 > o2[0][1].length) {
      var l2 = n3 - o2[0][1].length;
      o2[0][1] = i3.substring(o2[0][1].length) + o2[0][1];
      s2.start1 -= l2;
      s2.start2 -= l2;
      s2.length1 += l2;
      s2.length2 += l2;
    }
    s2 = e3[e3.length - 1];
    o2 = s2.diffs;
    if (o2.length == 0 || o2[o2.length - 1][0] != r2) {
      o2.push(new t2.Diff(r2, i3));
      s2.length1 += n3;
      s2.length2 += n3;
    } else if (n3 > o2[o2.length - 1][1].length) {
      var l2 = n3 - o2[o2.length - 1][1].length;
      o2[o2.length - 1][1] += i3.substring(0, l2);
      s2.length1 += l2;
      s2.length2 += l2;
    }
    return i3;
  };
  t2.prototype.patch_splitMax = function(e3) {
    var a2 = this.Match_MaxBits;
    for (var s2 = 0; s2 < e3.length; s2++) {
      if (e3[s2].length1 <= a2)
        continue;
      var o2 = e3[s2];
      e3.splice(s2--, 1);
      var l2 = o2.start1;
      var c2 = o2.start2;
      var f2 = "";
      while (o2.diffs.length !== 0) {
        var d2 = new t2.patch_obj();
        var u2 = true;
        d2.start1 = l2 - f2.length;
        d2.start2 = c2 - f2.length;
        if (f2 !== "") {
          d2.length1 = d2.length2 = f2.length;
          d2.diffs.push(new t2.Diff(r2, f2));
        }
        while (o2.diffs.length !== 0 && d2.length1 < a2 - this.Patch_Margin) {
          var g2 = o2.diffs[0][0];
          var h2 = o2.diffs[0][1];
          if (g2 === i2) {
            d2.length2 += h2.length;
            c2 += h2.length;
            d2.diffs.push(o2.diffs.shift());
            u2 = false;
          } else if (g2 === n2 && d2.diffs.length == 1 && d2.diffs[0][0] == r2 && h2.length > 2 * a2) {
            d2.length1 += h2.length;
            l2 += h2.length;
            u2 = false;
            d2.diffs.push(new t2.Diff(g2, h2));
            o2.diffs.shift();
          } else {
            h2 = h2.substring(0, a2 - d2.length1 - this.Patch_Margin);
            d2.length1 += h2.length;
            l2 += h2.length;
            if (g2 === r2) {
              d2.length2 += h2.length;
              c2 += h2.length;
            } else
              u2 = false;
            d2.diffs.push(new t2.Diff(g2, h2));
            if (h2 == o2.diffs[0][1])
              o2.diffs.shift();
            else
              o2.diffs[0][1] = o2.diffs[0][1].substring(h2.length);
          }
        }
        f2 = this.diff_text2(d2.diffs);
        f2 = f2.substring(f2.length - this.Patch_Margin);
        var p2 = this.diff_text1(o2.diffs).substring(0, this.Patch_Margin);
        if (p2 !== "") {
          d2.length1 += p2.length;
          d2.length2 += p2.length;
          if (d2.diffs.length !== 0 && d2.diffs[d2.diffs.length - 1][0] === r2)
            d2.diffs[d2.diffs.length - 1][1] += p2;
          else
            d2.diffs.push(new t2.Diff(r2, p2));
        }
        if (!u2)
          e3.splice(++s2, 0, d2);
      }
    }
  };
  t2.prototype.patch_toText = function(e3) {
    var t3 = [];
    for (var n3 = 0; n3 < e3.length; n3++)
      t3[n3] = e3[n3];
    return t3.join("");
  };
  t2.prototype.patch_fromText = function(e3) {
    var a2 = [];
    if (!e3)
      return a2;
    var s2 = e3.split("\n");
    var o2 = 0;
    var l2 = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
    while (o2 < s2.length) {
      var c2 = s2[o2].match(l2);
      if (!c2)
        throw new Error("Invalid patch string: " + s2[o2]);
      var f2 = new t2.patch_obj();
      a2.push(f2);
      f2.start1 = parseInt(c2[1], 10);
      if (c2[2] === "") {
        f2.start1--;
        f2.length1 = 1;
      } else if (c2[2] == "0")
        f2.length1 = 0;
      else {
        f2.start1--;
        f2.length1 = parseInt(c2[2], 10);
      }
      f2.start2 = parseInt(c2[3], 10);
      if (c2[4] === "") {
        f2.start2--;
        f2.length2 = 1;
      } else if (c2[4] == "0")
        f2.length2 = 0;
      else {
        f2.start2--;
        f2.length2 = parseInt(c2[4], 10);
      }
      o2++;
      while (o2 < s2.length) {
        var d2 = s2[o2].charAt(0);
        try {
          var u2 = decodeURI(s2[o2].substring(1));
        } catch (e4) {
          throw new Error("Illegal escape in patch_fromText: " + u2);
        }
        if (d2 == "-")
          f2.diffs.push(new t2.Diff(n2, u2));
        else if (d2 == "+")
          f2.diffs.push(new t2.Diff(i2, u2));
        else if (d2 == " ")
          f2.diffs.push(new t2.Diff(r2, u2));
        else if (d2 == "@")
          break;
        else if (d2 === "")
          ;
        else
          throw new Error('Invalid patch mode "' + d2 + '" in: ' + u2);
        o2++;
      }
    }
    return a2;
  };
  t2.patch_obj = function() {
    this.diffs = [];
    this.start1 = null;
    this.start2 = null;
    this.length1 = 0;
    this.length2 = 0;
  };
  t2.patch_obj.prototype.toString = function() {
    var e3, t3;
    if (this.length1 === 0)
      e3 = this.start1 + ",0";
    else if (this.length1 == 1)
      e3 = this.start1 + 1;
    else
      e3 = this.start1 + 1 + "," + this.length1;
    if (this.length2 === 0)
      t3 = this.start2 + ",0";
    else if (this.length2 == 1)
      t3 = this.start2 + 1;
    else
      t3 = this.start2 + 1 + "," + this.length2;
    var a2 = ["@@ -" + e3 + " +" + t3 + " @@\n"];
    var s2;
    for (var o2 = 0; o2 < this.diffs.length; o2++) {
      switch (this.diffs[o2][0]) {
        case i2:
          s2 = "+";
          break;
        case n2:
          s2 = "-";
          break;
        case r2:
          s2 = " ";
          break;
      }
      a2[o2 + 1] = s2 + encodeURI(this.diffs[o2][1]) + "\n";
    }
    return a2.join("").replace(/%20/g, " ");
  };
  e2.exports = t2;
  e2.exports["diff_match_patch"] = t2;
  e2.exports["DIFF_DELETE"] = n2;
  e2.exports["DIFF_INSERT"] = i2;
  e2.exports["DIFF_EQUAL"] = r2;
})(ie);
var re = { exports: {} };
function ae(e2) {
  if (e2 instanceof Map)
    e2.clear = e2.delete = e2.set = function() {
      throw new Error("map is read-only");
    };
  else if (e2 instanceof Set)
    e2.add = e2.clear = e2.delete = function() {
      throw new Error("set is read-only");
    };
  Object.freeze(e2);
  Object.getOwnPropertyNames(e2).forEach(function(t2) {
    var n2 = e2[t2];
    if (typeof n2 == "object" && !Object.isFrozen(n2))
      ae(n2);
  });
  return e2;
}
re.exports = ae;
re.exports.default = ae;
var se = re.exports;
class oe {
  constructor(e2) {
    if (e2.data === void 0)
      e2.data = {};
    this.data = e2.data;
    this.isMatchIgnored = false;
  }
  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}
function le(e2) {
  return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function ce(e2, ...t2) {
  const n2 = /* @__PURE__ */ Object.create(null);
  for (const t3 in e2)
    n2[t3] = e2[t3];
  t2.forEach(function(e3) {
    for (const t3 in e3)
      n2[t3] = e3[t3];
  });
  return n2;
}
const fe = "</span>";
const de = (e2) => !!e2.kind;
const ue = (e2, { prefix: t2 }) => {
  if (e2.includes(".")) {
    const n2 = e2.split(".");
    return [`${t2}${n2.shift()}`, ...n2.map((e3, t3) => `${e3}${"_".repeat(t3 + 1)}`)].join(" ");
  }
  return `${t2}${e2}`;
};
class ge {
  constructor(e2, t2) {
    this.buffer = "";
    this.classPrefix = t2.classPrefix;
    e2.walk(this);
  }
  addText(e2) {
    this.buffer += le(e2);
  }
  openNode(e2) {
    if (!de(e2))
      return;
    let t2 = e2.kind;
    if (e2.sublanguage)
      t2 = `language-${t2}`;
    else
      t2 = ue(t2, { prefix: this.classPrefix });
    this.span(t2);
  }
  closeNode(e2) {
    if (!de(e2))
      return;
    this.buffer += fe;
  }
  value() {
    return this.buffer;
  }
  span(e2) {
    this.buffer += `<span class="${e2}">`;
  }
}
class he {
  constructor() {
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(e2) {
    this.top.children.push(e2);
  }
  openNode(e2) {
    const t2 = { kind: e2, children: [] };
    this.add(t2);
    this.stack.push(t2);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
    return;
  }
  closeAllNodes() {
    while (this.closeNode())
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(e2) {
    return this.constructor._walk(e2, this.rootNode);
  }
  static _walk(e2, t2) {
    if (typeof t2 === "string")
      e2.addText(t2);
    else if (t2.children) {
      e2.openNode(t2);
      t2.children.forEach((t3) => this._walk(e2, t3));
      e2.closeNode(t2);
    }
    return e2;
  }
  static _collapse(e2) {
    if (typeof e2 === "string")
      return;
    if (!e2.children)
      return;
    if (e2.children.every((e3) => typeof e3 === "string"))
      e2.children = [e2.children.join("")];
    else
      e2.children.forEach((e3) => {
        he._collapse(e3);
      });
  }
}
class pe extends he {
  constructor(e2) {
    super();
    this.options = e2;
  }
  addKeyword(e2, t2) {
    if (e2 === "")
      return;
    this.openNode(t2);
    this.addText(e2);
    this.closeNode();
  }
  addText(e2) {
    if (e2 === "")
      return;
    this.add(e2);
  }
  addSublanguage(e2, t2) {
    const n2 = e2.root;
    n2.kind = t2;
    n2.sublanguage = true;
    this.add(n2);
  }
  toHTML() {
    const e2 = new ge(this, this.options);
    return e2.value();
  }
  finalize() {
    return true;
  }
}
function be(e2) {
  if (!e2)
    return null;
  if (typeof e2 === "string")
    return e2;
  return e2.source;
}
function me(e2) {
  return ye("(?=", e2, ")");
}
function ve(e2) {
  return ye("(?:", e2, ")*");
}
function _e(e2) {
  return ye("(?:", e2, ")?");
}
function ye(...e2) {
  const t2 = e2.map((e3) => be(e3)).join("");
  return t2;
}
function we(e2) {
  const t2 = e2[e2.length - 1];
  if (typeof t2 === "object" && t2.constructor === Object) {
    e2.splice(e2.length - 1, 1);
    return t2;
  } else
    return {};
}
function xe(...e2) {
  const t2 = we(e2);
  const n2 = "(" + (t2.capture ? "" : "?:") + e2.map((e3) => be(e3)).join("|") + ")";
  return n2;
}
function Ee(e2) {
  return new RegExp(e2.toString() + "|").exec("").length - 1;
}
function ke(e2, t2) {
  const n2 = e2 && e2.exec(t2);
  return n2 && n2.index === 0;
}
const Ne = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ae(e2, { joinWith: t2 }) {
  let n2 = 0;
  return e2.map((e3) => {
    n2 += 1;
    const t3 = n2;
    let i2 = be(e3);
    let r2 = "";
    while (i2.length > 0) {
      const e4 = Ne.exec(i2);
      if (!e4) {
        r2 += i2;
        break;
      }
      r2 += i2.substring(0, e4.index);
      i2 = i2.substring(e4.index + e4[0].length);
      if (e4[0][0] === "\\" && e4[1])
        r2 += "\\" + String(Number(e4[1]) + t3);
      else {
        r2 += e4[0];
        if (e4[0] === "(")
          n2++;
      }
    }
    return r2;
  }).map((e3) => `(${e3})`).join(t2);
}
const Oe = /\b\B/;
const Me = "[a-zA-Z]\\w*";
const Se = "[a-zA-Z_]\\w*";
const Re = "\\b\\d+(\\.\\d+)?";
const Te = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
const De = "\\b(0b[01]+)";
const Ie = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
const Ce = (e2 = {}) => {
  const t2 = /^#![ ]*\//;
  if (e2.binary)
    e2.begin = ye(t2, /.*\b/, e2.binary, /\b.*/);
  return ce({ scope: "meta", begin: t2, end: /$/, relevance: 0, "on:begin": (e3, t3) => {
    if (e3.index !== 0)
      t3.ignoreMatch();
  } }, e2);
};
const je = { begin: "\\\\[\\s\\S]", relevance: 0 };
const Be = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [je] };
const Le = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [je] };
const Pe = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ };
const $e = function(e2, t2, n2 = {}) {
  const i2 = ce({ scope: "comment", begin: e2, end: t2, contains: [] }, n2);
  i2.contains.push({ scope: "doctag", begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: true, relevance: 0 });
  const r2 = xe("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
  i2.contains.push({ begin: ye(/[ ]+/, "(", r2, /[.]?[:]?([.][ ]|[ ])/, "){3}") });
  return i2;
};
const ze = $e("//", "$");
const Ue = $e("/\\*", "\\*/");
const He = $e("#", "$");
const Ze = { scope: "number", begin: Re, relevance: 0 };
const Fe = { scope: "number", begin: Te, relevance: 0 };
const Ge = { scope: "number", begin: De, relevance: 0 };
const Ke = { begin: /(?=\/[^/\n]*\/)/, contains: [{ scope: "regexp", begin: /\//, end: /\/[gimuy]*/, illegal: /\n/, contains: [je, { begin: /\[/, end: /\]/, relevance: 0, contains: [je] }] }] };
const We = { scope: "title", begin: Me, relevance: 0 };
const qe = { scope: "title", begin: Se, relevance: 0 };
const Xe = { begin: "\\.\\s*" + Se, relevance: 0 };
const Je = function(e2) {
  return Object.assign(e2, { "on:begin": (e3, t2) => {
    t2.data._beginMatch = e3[1];
  }, "on:end": (e3, t2) => {
    if (t2.data._beginMatch !== e3[1])
      t2.ignoreMatch();
  } });
};
var Qe = Object.freeze({ __proto__: null, MATCH_NOTHING_RE: Oe, IDENT_RE: Me, UNDERSCORE_IDENT_RE: Se, NUMBER_RE: Re, C_NUMBER_RE: Te, BINARY_NUMBER_RE: De, RE_STARTERS_RE: Ie, SHEBANG: Ce, BACKSLASH_ESCAPE: je, APOS_STRING_MODE: Be, QUOTE_STRING_MODE: Le, PHRASAL_WORDS_MODE: Pe, COMMENT: $e, C_LINE_COMMENT_MODE: ze, C_BLOCK_COMMENT_MODE: Ue, HASH_COMMENT_MODE: He, NUMBER_MODE: Ze, C_NUMBER_MODE: Fe, BINARY_NUMBER_MODE: Ge, REGEXP_MODE: Ke, TITLE_MODE: We, UNDERSCORE_TITLE_MODE: qe, METHOD_GUARD: Xe, END_SAME_AS_BEGIN: Je });
function Ve(e2, t2) {
  const n2 = e2.input[e2.index - 1];
  if (n2 === ".")
    t2.ignoreMatch();
}
function Ye(e2, t2) {
  if (e2.className !== void 0) {
    e2.scope = e2.className;
    delete e2.className;
  }
}
function et(e2, t2) {
  if (!t2)
    return;
  if (!e2.beginKeywords)
    return;
  e2.begin = "\\b(" + e2.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
  e2.__beforeBegin = Ve;
  e2.keywords = e2.keywords || e2.beginKeywords;
  delete e2.beginKeywords;
  if (e2.relevance === void 0)
    e2.relevance = 0;
}
function tt(e2, t2) {
  if (!Array.isArray(e2.illegal))
    return;
  e2.illegal = xe(...e2.illegal);
}
function nt(e2, t2) {
  if (!e2.match)
    return;
  if (e2.begin || e2.end)
    throw new Error("begin & end are not supported with match");
  e2.begin = e2.match;
  delete e2.match;
}
function it(e2, t2) {
  if (e2.relevance === void 0)
    e2.relevance = 1;
}
const rt = (e2, t2) => {
  if (!e2.beforeMatch)
    return;
  if (e2.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const n2 = Object.assign({}, e2);
  Object.keys(e2).forEach((t3) => {
    delete e2[t3];
  });
  e2.keywords = n2.keywords;
  e2.begin = ye(n2.beforeMatch, me(n2.begin));
  e2.starts = { relevance: 0, contains: [Object.assign(n2, { endsParent: true })] };
  e2.relevance = 0;
  delete n2.beforeMatch;
};
const at = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
const st = "keyword";
function ot(e2, t2, n2 = st) {
  const i2 = /* @__PURE__ */ Object.create(null);
  if (typeof e2 === "string")
    r2(n2, e2.split(" "));
  else if (Array.isArray(e2))
    r2(n2, e2);
  else
    Object.keys(e2).forEach(function(n3) {
      Object.assign(i2, ot(e2[n3], t2, n3));
    });
  return i2;
  function r2(e3, n3) {
    if (t2)
      n3 = n3.map((e4) => e4.toLowerCase());
    n3.forEach(function(t3) {
      const n4 = t3.split("|");
      i2[n4[0]] = [e3, lt(n4[0], n4[1])];
    });
  }
}
function lt(e2, t2) {
  if (t2)
    return Number(t2);
  return ct(e2) ? 0 : 1;
}
function ct(e2) {
  return at.includes(e2.toLowerCase());
}
const ft = {};
const dt = (e2) => {
};
const ut = (e2, ...t2) => {
};
const gt = (e2, t2) => {
  if (ft[`${e2}/${t2}`])
    return;
  ft[`${e2}/${t2}`] = true;
};
const ht = new Error();
function pt(e2, t2, { key: n2 }) {
  let i2 = 0;
  const r2 = e2[n2];
  const a2 = {};
  const s2 = {};
  for (let e3 = 1; e3 <= t2.length; e3++) {
    s2[e3 + i2] = r2[e3];
    a2[e3 + i2] = true;
    i2 += Ee(t2[e3 - 1]);
  }
  e2[n2] = s2;
  e2[n2]._emit = a2;
  e2[n2]._multi = true;
}
function bt(e2) {
  if (!Array.isArray(e2.begin))
    return;
  if (e2.skip || e2.excludeBegin || e2.returnBegin) {
    dt("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw ht;
  }
  if (typeof e2.beginScope !== "object" || e2.beginScope === null) {
    dt("beginScope must be object");
    throw ht;
  }
  pt(e2, e2.begin, { key: "beginScope" });
  e2.begin = Ae(e2.begin, { joinWith: "" });
}
function mt(e2) {
  if (!Array.isArray(e2.end))
    return;
  if (e2.skip || e2.excludeEnd || e2.returnEnd) {
    dt("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw ht;
  }
  if (typeof e2.endScope !== "object" || e2.endScope === null) {
    dt("endScope must be object");
    throw ht;
  }
  pt(e2, e2.end, { key: "endScope" });
  e2.end = Ae(e2.end, { joinWith: "" });
}
function vt(e2) {
  if (e2.scope && typeof e2.scope === "object" && e2.scope !== null) {
    e2.beginScope = e2.scope;
    delete e2.scope;
  }
}
function _t(e2) {
  vt(e2);
  if (typeof e2.beginScope === "string")
    e2.beginScope = { _wrap: e2.beginScope };
  if (typeof e2.endScope === "string")
    e2.endScope = { _wrap: e2.endScope };
  bt(e2);
  mt(e2);
}
function yt(e2) {
  function t2(t3, n3) {
    return new RegExp(be(t3), "m" + (e2.case_insensitive ? "i" : "") + (e2.unicodeRegex ? "u" : "") + (n3 ? "g" : ""));
  }
  class n2 {
    constructor() {
      this.matchIndexes = {};
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }
    addRule(e3, t3) {
      t3.position = this.position++;
      this.matchIndexes[this.matchAt] = t3;
      this.regexes.push([t3, e3]);
      this.matchAt += Ee(e3) + 1;
    }
    compile() {
      if (this.regexes.length === 0)
        this.exec = () => null;
      const e3 = this.regexes.map((e4) => e4[1]);
      this.matcherRe = t2(Ae(e3, { joinWith: "|" }), true);
      this.lastIndex = 0;
    }
    exec(e3) {
      this.matcherRe.lastIndex = this.lastIndex;
      const t3 = this.matcherRe.exec(e3);
      if (!t3)
        return null;
      const n3 = t3.findIndex((e4, t4) => t4 > 0 && e4 !== void 0);
      const i3 = this.matchIndexes[n3];
      t3.splice(0, n3);
      return Object.assign(t3, i3);
    }
  }
  class i2 {
    constructor() {
      this.rules = [];
      this.multiRegexes = [];
      this.count = 0;
      this.lastIndex = 0;
      this.regexIndex = 0;
    }
    getMatcher(e3) {
      if (this.multiRegexes[e3])
        return this.multiRegexes[e3];
      const t3 = new n2();
      this.rules.slice(e3).forEach(([e4, n3]) => t3.addRule(e4, n3));
      t3.compile();
      this.multiRegexes[e3] = t3;
      return t3;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(e3, t3) {
      this.rules.push([e3, t3]);
      if (t3.type === "begin")
        this.count++;
    }
    exec(e3) {
      const t3 = this.getMatcher(this.regexIndex);
      t3.lastIndex = this.lastIndex;
      let n3 = t3.exec(e3);
      if (this.resumingScanAtSamePosition())
        if (n3 && n3.index === this.lastIndex)
          ;
        else {
          const t4 = this.getMatcher(0);
          t4.lastIndex = this.lastIndex + 1;
          n3 = t4.exec(e3);
        }
      if (n3) {
        this.regexIndex += n3.position + 1;
        if (this.regexIndex === this.count)
          this.considerAll();
      }
      return n3;
    }
  }
  function r2(e3) {
    const t3 = new i2();
    e3.contains.forEach((e4) => t3.addRule(e4.begin, { rule: e4, type: "begin" }));
    if (e3.terminatorEnd)
      t3.addRule(e3.terminatorEnd, { type: "end" });
    if (e3.illegal)
      t3.addRule(e3.illegal, { type: "illegal" });
    return t3;
  }
  function a2(n3, i3) {
    const s2 = n3;
    if (n3.isCompiled)
      return s2;
    [Ye, nt, _t, rt].forEach((e3) => e3(n3, i3));
    e2.compilerExtensions.forEach((e3) => e3(n3, i3));
    n3.__beforeBegin = null;
    [et, tt, it].forEach((e3) => e3(n3, i3));
    n3.isCompiled = true;
    let o2 = null;
    if (typeof n3.keywords === "object" && n3.keywords.$pattern) {
      n3.keywords = Object.assign({}, n3.keywords);
      o2 = n3.keywords.$pattern;
      delete n3.keywords.$pattern;
    }
    o2 = o2 || /\w+/;
    if (n3.keywords)
      n3.keywords = ot(n3.keywords, e2.case_insensitive);
    s2.keywordPatternRe = t2(o2, true);
    if (i3) {
      if (!n3.begin)
        n3.begin = /\B|\b/;
      s2.beginRe = t2(s2.begin);
      if (!n3.end && !n3.endsWithParent)
        n3.end = /\B|\b/;
      if (n3.end)
        s2.endRe = t2(s2.end);
      s2.terminatorEnd = be(s2.end) || "";
      if (n3.endsWithParent && i3.terminatorEnd)
        s2.terminatorEnd += (n3.end ? "|" : "") + i3.terminatorEnd;
    }
    if (n3.illegal)
      s2.illegalRe = t2(n3.illegal);
    if (!n3.contains)
      n3.contains = [];
    n3.contains = [].concat(...n3.contains.map(function(e3) {
      return xt(e3 === "self" ? n3 : e3);
    }));
    n3.contains.forEach(function(e3) {
      a2(e3, s2);
    });
    if (n3.starts)
      a2(n3.starts, i3);
    s2.matcher = r2(s2);
    return s2;
  }
  if (!e2.compilerExtensions)
    e2.compilerExtensions = [];
  if (e2.contains && e2.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  e2.classNameAliases = ce(e2.classNameAliases || {});
  return a2(e2);
}
function wt(e2) {
  if (!e2)
    return false;
  return e2.endsWithParent || wt(e2.starts);
}
function xt(e2) {
  if (e2.variants && !e2.cachedVariants)
    e2.cachedVariants = e2.variants.map(function(t2) {
      return ce(e2, { variants: null }, t2);
    });
  if (e2.cachedVariants)
    return e2.cachedVariants;
  if (wt(e2))
    return ce(e2, { starts: e2.starts ? ce(e2.starts) : null });
  if (Object.isFrozen(e2))
    return ce(e2);
  return e2;
}
var Et = "11.5.1";
class kt extends Error {
  constructor(e2, t2) {
    super(e2);
    this.name = "HTMLInjectionError";
    this.html = t2;
  }
}
const Nt = le;
const At = ce;
const Ot = Symbol("nomatch");
const Mt = 7;
const St = function(e2) {
  const t2 = /* @__PURE__ */ Object.create(null);
  const n2 = /* @__PURE__ */ Object.create(null);
  const i2 = [];
  let r2 = true;
  const a2 = "Could not find the language '{}', did you forget to load/include a language module?";
  const s2 = { disableAutodetect: true, name: "Plain text", contains: [] };
  let o2 = { ignoreUnescapedHTML: false, throwUnescapedHTML: false, noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-", cssSelector: "pre code", languages: null, __emitter: pe };
  function l2(e3) {
    return o2.noHighlightRe.test(e3);
  }
  function c2(e3) {
    let t3 = e3.className + " ";
    t3 += e3.parentNode ? e3.parentNode.className : "";
    const n3 = o2.languageDetectRe.exec(t3);
    if (n3) {
      const t4 = N2(n3[1]);
      if (!t4) {
        ut(a2.replace("{}", n3[1]));
        ut("Falling back to no-highlight mode for this block.", e3);
      }
      return t4 ? n3[1] : "no-highlight";
    }
    return t3.split(/\s+/).find((e4) => l2(e4) || N2(e4));
  }
  function f2(e3, t3, n3) {
    let i3 = "";
    let r3 = "";
    if (typeof t3 === "object") {
      i3 = e3;
      n3 = t3.ignoreIllegals;
      r3 = t3.language;
    } else {
      gt("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      gt("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      r3 = e3;
      i3 = t3;
    }
    if (n3 === void 0)
      n3 = true;
    const a3 = { code: i3, language: r3 };
    R2("before:highlight", a3);
    const s3 = a3.result ? a3.result : d2(a3.language, a3.code, n3);
    s3.code = a3.code;
    R2("after:highlight", s3);
    return s3;
  }
  function d2(e3, n3, i3, s3) {
    const l3 = /* @__PURE__ */ Object.create(null);
    function c3(e4, t3) {
      return e4.keywords[t3];
    }
    function f3() {
      if (!M3.keywords) {
        R3.addText(T3);
        return;
      }
      let e4 = 0;
      M3.keywordPatternRe.lastIndex = 0;
      let t3 = M3.keywordPatternRe.exec(T3);
      let n4 = "";
      while (t3) {
        n4 += T3.substring(e4, t3.index);
        const i4 = k3.case_insensitive ? t3[0].toLowerCase() : t3[0];
        const r3 = c3(M3, i4);
        if (r3) {
          const [e5, a3] = r3;
          R3.addText(n4);
          n4 = "";
          l3[i4] = (l3[i4] || 0) + 1;
          if (l3[i4] <= Mt)
            D2 += a3;
          if (e5.startsWith("_"))
            n4 += t3[0];
          else {
            const n5 = k3.classNameAliases[e5] || e5;
            R3.addKeyword(t3[0], n5);
          }
        } else
          n4 += t3[0];
        e4 = M3.keywordPatternRe.lastIndex;
        t3 = M3.keywordPatternRe.exec(T3);
      }
      n4 += T3.substr(e4);
      R3.addText(n4);
    }
    function u3() {
      if (T3 === "")
        return;
      let e4 = null;
      if (typeof M3.subLanguage === "string") {
        if (!t2[M3.subLanguage]) {
          R3.addText(T3);
          return;
        }
        e4 = d2(M3.subLanguage, T3, true, S3[M3.subLanguage]);
        S3[M3.subLanguage] = e4._top;
      } else
        e4 = g2(T3, M3.subLanguage.length ? M3.subLanguage : null);
      if (M3.relevance > 0)
        D2 += e4.relevance;
      R3.addSublanguage(e4._emitter, e4.language);
    }
    function h3() {
      if (M3.subLanguage != null)
        u3();
      else
        f3();
      T3 = "";
    }
    function p3(e4, t3) {
      let n4 = 1;
      const i4 = t3.length - 1;
      while (n4 <= i4) {
        if (!e4._emit[n4]) {
          n4++;
          continue;
        }
        const i5 = k3.classNameAliases[e4[n4]] || e4[n4];
        const r3 = t3[n4];
        if (i5)
          R3.addKeyword(r3, i5);
        else {
          T3 = r3;
          f3();
          T3 = "";
        }
        n4++;
      }
    }
    function b3(e4, t3) {
      if (e4.scope && typeof e4.scope === "string")
        R3.openNode(k3.classNameAliases[e4.scope] || e4.scope);
      if (e4.beginScope) {
        if (e4.beginScope._wrap) {
          R3.addKeyword(T3, k3.classNameAliases[e4.beginScope._wrap] || e4.beginScope._wrap);
          T3 = "";
        } else if (e4.beginScope._multi) {
          p3(e4.beginScope, t3);
          T3 = "";
        }
      }
      M3 = Object.create(e4, { parent: { value: M3 } });
      return M3;
    }
    function m3(e4, t3, n4) {
      let i4 = ke(e4.endRe, n4);
      if (i4) {
        if (e4["on:end"]) {
          const n5 = new oe(e4);
          e4["on:end"](t3, n5);
          if (n5.isMatchIgnored)
            i4 = false;
        }
        if (i4) {
          while (e4.endsParent && e4.parent)
            e4 = e4.parent;
          return e4;
        }
      }
      if (e4.endsWithParent)
        return m3(e4.parent, t3, n4);
    }
    function v3(e4) {
      if (M3.matcher.regexIndex === 0) {
        T3 += e4[0];
        return 1;
      } else {
        j2 = true;
        return 0;
      }
    }
    function _3(e4) {
      const t3 = e4[0];
      const n4 = e4.rule;
      const i4 = new oe(n4);
      const r3 = [n4.__beforeBegin, n4["on:begin"]];
      for (const n5 of r3) {
        if (!n5)
          continue;
        n5(e4, i4);
        if (i4.isMatchIgnored)
          return v3(t3);
      }
      if (n4.skip)
        T3 += t3;
      else {
        if (n4.excludeBegin)
          T3 += t3;
        h3();
        if (!n4.returnBegin && !n4.excludeBegin)
          T3 = t3;
      }
      b3(n4, e4);
      return n4.returnBegin ? 0 : t3.length;
    }
    function y3(e4) {
      const t3 = e4[0];
      const i4 = n3.substr(e4.index);
      const r3 = m3(M3, e4, i4);
      if (!r3)
        return Ot;
      const a3 = M3;
      if (M3.endScope && M3.endScope._wrap) {
        h3();
        R3.addKeyword(t3, M3.endScope._wrap);
      } else if (M3.endScope && M3.endScope._multi) {
        h3();
        p3(M3.endScope, e4);
      } else if (a3.skip)
        T3 += t3;
      else {
        if (!(a3.returnEnd || a3.excludeEnd))
          T3 += t3;
        h3();
        if (a3.excludeEnd)
          T3 = t3;
      }
      do {
        if (M3.scope)
          R3.closeNode();
        if (!M3.skip && !M3.subLanguage)
          D2 += M3.relevance;
        M3 = M3.parent;
      } while (M3 !== r3.parent);
      if (r3.starts)
        b3(r3.starts, e4);
      return a3.returnEnd ? 0 : t3.length;
    }
    function w3() {
      const e4 = [];
      for (let t3 = M3; t3 !== k3; t3 = t3.parent)
        if (t3.scope)
          e4.unshift(t3.scope);
      e4.forEach((e5) => R3.openNode(e5));
    }
    let x3 = {};
    function E3(t3, a3) {
      const s4 = a3 && a3[0];
      T3 += t3;
      if (s4 == null) {
        h3();
        return 0;
      }
      if (x3.type === "begin" && a3.type === "end" && x3.index === a3.index && s4 === "") {
        T3 += n3.slice(a3.index, a3.index + 1);
        if (!r2) {
          const t4 = new Error(`0 width match regex (${e3})`);
          t4.languageName = e3;
          t4.badRule = x3.rule;
          throw t4;
        }
        return 1;
      }
      x3 = a3;
      if (a3.type === "begin")
        return _3(a3);
      else if (a3.type === "illegal" && !i3) {
        const e4 = new Error('Illegal lexeme "' + s4 + '" for mode "' + (M3.scope || "<unnamed>") + '"');
        e4.mode = M3;
        throw e4;
      } else if (a3.type === "end") {
        const e4 = y3(a3);
        if (e4 !== Ot)
          return e4;
      }
      if (a3.type === "illegal" && s4 === "")
        return 1;
      if (C2 > 1e5 && C2 > 3 * a3.index) {
        const e4 = new Error("potential infinite loop, way more iterations than matches");
        throw e4;
      }
      T3 += s4;
      return s4.length;
    }
    const k3 = N2(e3);
    if (!k3) {
      dt(a2.replace("{}", e3));
      throw new Error('Unknown language: "' + e3 + '"');
    }
    const A3 = yt(k3);
    let O3 = "";
    let M3 = s3 || A3;
    const S3 = {};
    const R3 = new o2.__emitter(o2);
    w3();
    let T3 = "";
    let D2 = 0;
    let I2 = 0;
    let C2 = 0;
    let j2 = false;
    try {
      M3.matcher.considerAll();
      for (; ; ) {
        C2++;
        if (j2)
          j2 = false;
        else
          M3.matcher.considerAll();
        M3.matcher.lastIndex = I2;
        const e4 = M3.matcher.exec(n3);
        if (!e4)
          break;
        const t3 = n3.substring(I2, e4.index);
        const i4 = E3(t3, e4);
        I2 = e4.index + i4;
      }
      E3(n3.substr(I2));
      R3.closeAllNodes();
      R3.finalize();
      O3 = R3.toHTML();
      return { language: e3, value: O3, relevance: D2, illegal: false, _emitter: R3, _top: M3 };
    } catch (t3) {
      if (t3.message && t3.message.includes("Illegal"))
        return { language: e3, value: Nt(n3), illegal: true, relevance: 0, _illegalBy: { message: t3.message, index: I2, context: n3.slice(I2 - 100, I2 + 100), mode: t3.mode, resultSoFar: O3 }, _emitter: R3 };
      else if (r2)
        return { language: e3, value: Nt(n3), illegal: false, relevance: 0, errorRaised: t3, _emitter: R3, _top: M3 };
      else
        throw t3;
    }
  }
  function u2(e3) {
    const t3 = { value: Nt(e3), illegal: false, relevance: 0, _top: s2, _emitter: new o2.__emitter(o2) };
    t3._emitter.addText(e3);
    return t3;
  }
  function g2(e3, n3) {
    n3 = n3 || o2.languages || Object.keys(t2);
    const i3 = u2(e3);
    const r3 = n3.filter(N2).filter(O2).map((t3) => d2(t3, e3, false));
    r3.unshift(i3);
    const a3 = r3.sort((e4, t3) => {
      if (e4.relevance !== t3.relevance)
        return t3.relevance - e4.relevance;
      if (e4.language && t3.language) {
        if (N2(e4.language).supersetOf === t3.language)
          return 1;
        else if (N2(t3.language).supersetOf === e4.language)
          return -1;
      }
      return 0;
    });
    const [s3, l3] = a3;
    const c3 = s3;
    c3.secondBest = l3;
    return c3;
  }
  function h2(e3, t3, i3) {
    const r3 = t3 && n2[t3] || i3;
    e3.classList.add("hljs");
    e3.classList.add(`language-${r3}`);
  }
  function p2(e3) {
    let t3 = null;
    const n3 = c2(e3);
    if (l2(n3))
      return;
    R2("before:highlightElement", { el: e3, language: n3 });
    if (e3.children.length > 0) {
      if (!o2.ignoreUnescapedHTML) {
      }
      if (o2.throwUnescapedHTML) {
        const t4 = new kt("One of your code blocks includes unescaped HTML.", e3.innerHTML);
        throw t4;
      }
    }
    t3 = e3;
    const i3 = t3.textContent;
    const r3 = n3 ? f2(i3, { language: n3, ignoreIllegals: true }) : g2(i3);
    e3.innerHTML = r3.value;
    h2(e3, n3, r3.language);
    e3.result = { language: r3.language, re: r3.relevance, relevance: r3.relevance };
    if (r3.secondBest)
      e3.secondBest = { language: r3.secondBest.language, relevance: r3.secondBest.relevance };
    R2("after:highlightElement", { el: e3, result: r3, text: i3 });
  }
  function b2(e3) {
    o2 = At(o2, e3);
  }
  const m2 = () => {
    y2();
    gt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function v2() {
    y2();
    gt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let _2 = false;
  function y2() {
    if (document.readyState === "loading") {
      _2 = true;
      return;
    }
    const e3 = document.querySelectorAll(o2.cssSelector);
    e3.forEach(p2);
  }
  function w2() {
    if (_2)
      y2();
  }
  if (typeof window !== "undefined" && window.addEventListener)
    window.addEventListener("DOMContentLoaded", w2, false);
  function x2(n3, i3) {
    let a3 = null;
    try {
      a3 = i3(e2);
    } catch (e3) {
      dt("Language definition for '{}' could not be registered.".replace("{}", n3));
      if (!r2)
        throw e3;
      else
        dt(e3);
      a3 = s2;
    }
    if (!a3.name)
      a3.name = n3;
    t2[n3] = a3;
    a3.rawDefinition = i3.bind(null, e2);
    if (a3.aliases)
      A2(a3.aliases, { languageName: n3 });
  }
  function E2(e3) {
    delete t2[e3];
    for (const t3 of Object.keys(n2))
      if (n2[t3] === e3)
        delete n2[t3];
  }
  function k2() {
    return Object.keys(t2);
  }
  function N2(e3) {
    e3 = (e3 || "").toLowerCase();
    return t2[e3] || t2[n2[e3]];
  }
  function A2(e3, { languageName: t3 }) {
    if (typeof e3 === "string")
      e3 = [e3];
    e3.forEach((e4) => {
      n2[e4.toLowerCase()] = t3;
    });
  }
  function O2(e3) {
    const t3 = N2(e3);
    return t3 && !t3.disableAutodetect;
  }
  function M2(e3) {
    if (e3["before:highlightBlock"] && !e3["before:highlightElement"])
      e3["before:highlightElement"] = (t3) => {
        e3["before:highlightBlock"](Object.assign({ block: t3.el }, t3));
      };
    if (e3["after:highlightBlock"] && !e3["after:highlightElement"])
      e3["after:highlightElement"] = (t3) => {
        e3["after:highlightBlock"](Object.assign({ block: t3.el }, t3));
      };
  }
  function S2(e3) {
    M2(e3);
    i2.push(e3);
  }
  function R2(e3, t3) {
    const n3 = e3;
    i2.forEach(function(e4) {
      if (e4[n3])
        e4[n3](t3);
    });
  }
  function T2(e3) {
    gt("10.7.0", "highlightBlock will be removed entirely in v12.0");
    gt("10.7.0", "Please use highlightElement now.");
    return p2(e3);
  }
  Object.assign(e2, { highlight: f2, highlightAuto: g2, highlightAll: y2, highlightElement: p2, highlightBlock: T2, configure: b2, initHighlighting: m2, initHighlightingOnLoad: v2, registerLanguage: x2, unregisterLanguage: E2, listLanguages: k2, getLanguage: N2, registerAliases: A2, autoDetection: O2, inherit: At, addPlugin: S2 });
  e2.debugMode = function() {
    r2 = false;
  };
  e2.safeMode = function() {
    r2 = true;
  };
  e2.versionString = Et;
  e2.regex = { concat: ye, lookahead: me, either: xe, optional: _e, anyNumberOfTimes: ve };
  for (const e3 in Qe)
    if (typeof Qe[e3] === "object")
      se(Qe[e3]);
  Object.assign(e2, Qe);
  return e2;
};
var Rt = St({});
var Tt = Rt;
Rt.HighlightJS = Rt;
Rt.default = Rt;
var Dt = Tt;
const It = (e2) => ({ IMPORTANT: { scope: "meta", begin: "!important" }, BLOCK_COMMENT: e2.C_BLOCK_COMMENT_MODE, HEXCOLOR: { scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ }, FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ }, ATTRIBUTE_SELECTOR_MODE: { scope: "selector-attr", begin: /\[/, end: /\]/, illegal: "$", contains: [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE] }, CSS_NUMBER_MODE: { scope: "number", begin: e2.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", relevance: 0 }, CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ } });
const Ct = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"];
const jt = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"];
const Bt = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"];
const Lt = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"];
const Pt = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
function $t(e2) {
  const t2 = e2.regex;
  const n2 = It(e2);
  const i2 = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
  const r2 = "and or not only";
  const a2 = /@-?\w[\w]*(-\w+)*/;
  const s2 = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const o2 = [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE];
  return { name: "CSS", case_insensitive: true, illegal: /[=|'\$]/, keywords: { keyframePosition: "from to" }, classNameAliases: { keyframePosition: "selector-tag" }, contains: [n2.BLOCK_COMMENT, i2, n2.CSS_NUMBER_MODE, { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 }, { className: "selector-class", begin: "\\." + s2, relevance: 0 }, n2.ATTRIBUTE_SELECTOR_MODE, { className: "selector-pseudo", variants: [{ begin: ":(" + Bt.join("|") + ")" }, { begin: ":(:)?(" + Lt.join("|") + ")" }] }, n2.CSS_VARIABLE, { className: "attribute", begin: "\\b(" + Pt.join("|") + ")\\b" }, { begin: /:/, end: /[;}{]/, contains: [n2.BLOCK_COMMENT, n2.HEXCOLOR, n2.IMPORTANT, n2.CSS_NUMBER_MODE, ...o2, { begin: /(url|data-uri)\(/, end: /\)/, relevance: 0, keywords: { built_in: "url data-uri" }, contains: [{ className: "string", begin: /[^)]/, endsWithParent: true, excludeEnd: true }] }, n2.FUNCTION_DISPATCH] }, { begin: t2.lookahead(/@/), end: "[{;]", relevance: 0, illegal: /:/, contains: [{ className: "keyword", begin: a2 }, { begin: /\s/, endsWithParent: true, excludeEnd: true, relevance: 0, keywords: { $pattern: /[a-z-]+/, keyword: r2, attribute: jt.join(" ") }, contains: [{ begin: /[a-z-]+(?=:)/, className: "attribute" }, ...o2, n2.CSS_NUMBER_MODE] }] }, { className: "selector-tag", begin: "\\b(" + Ct.join("|") + ")\\b" }] };
}
function zt(e2) {
  const t2 = e2.regex;
  const n2 = t2.concat(/[A-Z_]/, t2.optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/);
  const i2 = /[A-Za-z0-9._:-]+/;
  const r2 = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ };
  const a2 = { begin: /\s/, contains: [{ className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] };
  const s2 = e2.inherit(a2, { begin: /\(/, end: /\)/ });
  const o2 = e2.inherit(e2.APOS_STRING_MODE, { className: "string" });
  const l2 = e2.inherit(e2.QUOTE_STRING_MODE, { className: "string" });
  const c2 = { endsWithParent: true, illegal: /</, relevance: 0, contains: [{ className: "attr", begin: i2, relevance: 0 }, { begin: /=\s*/, relevance: 0, contains: [{ className: "string", endsParent: true, variants: [{ begin: /"/, end: /"/, contains: [r2] }, { begin: /'/, end: /'/, contains: [r2] }, { begin: /[^\s"'=<>`]+/ }] }] }] };
  return { name: "HTML, XML", aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"], case_insensitive: true, contains: [{ className: "meta", begin: /<![a-z]/, end: />/, relevance: 10, contains: [a2, l2, o2, s2, { begin: /\[/, end: /\]/, contains: [{ className: "meta", begin: /<![a-z]/, end: />/, contains: [a2, s2, l2, o2] }] }] }, e2.COMMENT(/<!--/, /-->/, { relevance: 10 }), { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 }, r2, { className: "meta", end: /\?>/, variants: [{ begin: /<\?xml/, relevance: 10, contains: [l2] }, { begin: /<\?[a-z][a-z0-9]+/ }] }, { className: "tag", begin: /<style(?=\s|>)/, end: />/, keywords: { name: "style" }, contains: [c2], starts: { end: /<\/style>/, returnEnd: true, subLanguage: ["css", "xml"] } }, { className: "tag", begin: /<script(?=\s|>)/, end: />/, keywords: { name: "script" }, contains: [c2], starts: { end: /<\/script>/, returnEnd: true, subLanguage: ["javascript", "handlebars", "xml"] } }, { className: "tag", begin: /<>|<\/>/ }, { className: "tag", begin: t2.concat(/</, t2.lookahead(t2.concat(n2, t2.either(/\/>/, />/, /\s/)))), end: /\/?>/, contains: [{ className: "name", begin: n2, relevance: 0, starts: c2 }] }, { className: "tag", begin: t2.concat(/<\//, t2.lookahead(t2.concat(n2, />/))), contains: [{ className: "name", begin: n2, relevance: 0 }, { begin: />/, relevance: 0, endsParent: true }] }] };
}
function Ut(e2) {
  const t2 = e2.regex;
  const n2 = { begin: /<\/?[A-Za-z_]/, end: ">", subLanguage: "xml", relevance: 0 };
  const i2 = { begin: "^[-\\*]{3,}", end: "$" };
  const r2 = { className: "code", variants: [{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" }, { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" }, { begin: "```", end: "```+[ ]*$" }, { begin: "~~~", end: "~~~+[ ]*$" }, { begin: "`.+?`" }, { begin: "(?=^( {4}|\\t))", contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }], relevance: 0 }] };
  const a2 = { className: "bullet", begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)", end: "\\s+", excludeEnd: true };
  const s2 = { begin: /^\[[^\n]+\]:/, returnBegin: true, contains: [{ className: "symbol", begin: /\[/, end: /\]/, excludeBegin: true, excludeEnd: true }, { className: "link", begin: /:\s*/, end: /$/, excludeBegin: true }] };
  const o2 = /[A-Za-z][A-Za-z0-9+.-]*/;
  const l2 = { variants: [{ begin: /\[.+?\]\[.*?\]/, relevance: 0 }, { begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 }, { begin: t2.concat(/\[.+?\]\(/, o2, /:\/\/.*?\)/), relevance: 2 }, { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 }, { begin: /\[.*?\]\(.*?\)/, relevance: 0 }], returnBegin: true, contains: [{ match: /\[(?=\])/ }, { className: "string", relevance: 0, begin: "\\[", end: "\\]", excludeBegin: true, returnEnd: true }, { className: "link", relevance: 0, begin: "\\]\\(", end: "\\)", excludeBegin: true, excludeEnd: true }, { className: "symbol", relevance: 0, begin: "\\]\\[", end: "\\]", excludeBegin: true, excludeEnd: true }] };
  const c2 = { className: "strong", contains: [], variants: [{ begin: /_{2}/, end: /_{2}/ }, { begin: /\*{2}/, end: /\*{2}/ }] };
  const f2 = { className: "emphasis", contains: [], variants: [{ begin: /\*(?!\*)/, end: /\*/ }, { begin: /_(?!_)/, end: /_/, relevance: 0 }] };
  const d2 = e2.inherit(c2, { contains: [] });
  const u2 = e2.inherit(f2, { contains: [] });
  c2.contains.push(u2);
  f2.contains.push(d2);
  let g2 = [n2, l2];
  [c2, f2, d2, u2].forEach((e3) => {
    e3.contains = e3.contains.concat(g2);
  });
  g2 = g2.concat(c2, f2);
  const h2 = { className: "section", variants: [{ begin: "^#{1,6}", end: "$", contains: g2 }, { begin: "(?=^.+?\\n[=-]{2,}$)", contains: [{ begin: "^[=-]*$" }, { begin: "^", end: "\\n", contains: g2 }] }] };
  const p2 = { className: "quote", begin: "^>\\s+", contains: g2, end: "$" };
  return { name: "Markdown", aliases: ["md", "mkdown", "mkd"], contains: [h2, n2, a2, c2, f2, p2, r2, i2, l2, s2] };
}
const Ht = "[A-Za-z$_][0-9A-Za-z$_]*";
const Zt = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"];
const Ft = ["true", "false", "null", "undefined", "NaN", "Infinity"];
const Gt = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"];
const Kt = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"];
const Wt = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"];
const qt = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"];
const Xt = [].concat(Wt, Gt, Kt);
function Jt(e2) {
  const t2 = e2.regex;
  const n2 = (e3, { after: t3 }) => {
    const n3 = "</" + e3[0].slice(1);
    const i3 = e3.input.indexOf(n3, t3);
    return i3 !== -1;
  };
  const i2 = Ht;
  const r2 = { begin: "<>", end: "</>" };
  const a2 = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const s2 = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e3, t3) => {
    const i3 = e3[0].length + e3.index;
    const r3 = e3.input[i3];
    if (r3 === "<" || r3 === ",") {
      t3.ignoreMatch();
      return;
    }
    if (r3 === ">") {
      if (!n2(e3, { after: i3 }))
        t3.ignoreMatch();
    }
    let a3;
    const s3 = e3.input.substr(i3);
    if (a3 = s3.match(/^\s+extends\s+/)) {
      if (a3.index === 0) {
        t3.ignoreMatch();
        return;
      }
    }
  } };
  const o2 = { $pattern: Ht, keyword: Zt, literal: Ft, built_in: Xt, "variable.language": qt };
  const l2 = "[0-9](_?[0-9])*";
  const c2 = `\\.(${l2})`;
  const f2 = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const d2 = { className: "number", variants: [{ begin: `(\\b(${f2})((${c2})|\\.)?|(${c2}))[eE][+-]?(${l2})\\b` }, { begin: `\\b(${f2})\\b((${c2})\\b|\\.)?|(${c2})\\b` }, { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` }, { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" }, { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, { begin: "\\b0[0-7]+n?\\b" }], relevance: 0 };
  const u2 = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: o2, contains: [] };
  const g2 = { begin: "html`", end: "", starts: { end: "`", returnEnd: false, contains: [e2.BACKSLASH_ESCAPE, u2], subLanguage: "xml" } };
  const h2 = { begin: "css`", end: "", starts: { end: "`", returnEnd: false, contains: [e2.BACKSLASH_ESCAPE, u2], subLanguage: "css" } };
  const p2 = { className: "string", begin: "`", end: "`", contains: [e2.BACKSLASH_ESCAPE, u2] };
  const b2 = e2.COMMENT(/\/\*\*(?!\/)/, "\\*/", { relevance: 0, contains: [{ begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }, { className: "type", begin: "\\{", end: "\\}", excludeEnd: true, excludeBegin: true, relevance: 0 }, { className: "variable", begin: i2 + "(?=\\s*(-)|$)", endsParent: true, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] });
  const m2 = { className: "comment", variants: [b2, e2.C_BLOCK_COMMENT_MODE, e2.C_LINE_COMMENT_MODE] };
  const v2 = [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, g2, h2, p2, d2];
  u2.contains = v2.concat({ begin: /\{/, end: /\}/, keywords: o2, contains: ["self"].concat(v2) });
  const _2 = [].concat(m2, u2.contains);
  const y2 = _2.concat([{ begin: /\(/, end: /\)/, keywords: o2, contains: ["self"].concat(_2) }]);
  const w2 = { className: "params", begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: o2, contains: y2 };
  const x2 = { variants: [{ match: [/class/, /\s+/, i2, /\s+/, /extends/, /\s+/, t2.concat(i2, "(", t2.concat(/\./, i2), ")*")], scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" } }, { match: [/class/, /\s+/, i2], scope: { 1: "keyword", 3: "title.class" } }] };
  const E2 = { relevance: 0, match: t2.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: "title.class", keywords: { _: [...Gt, ...Kt] } };
  const k2 = { label: "use_strict", className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ };
  const N2 = { variants: [{ match: [/function/, /\s+/, i2, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [w2], illegal: /%/ };
  const A2 = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" };
  function O2(e3) {
    return t2.concat("(?!", e3.join("|"), ")");
  }
  const M2 = { match: t2.concat(/\b/, O2([...Wt, "super"]), i2, t2.lookahead(/\(/)), className: "title.function", relevance: 0 };
  const S2 = { begin: t2.concat(/\./, t2.lookahead(t2.concat(i2, /(?![0-9A-Za-z$_(])/))), end: i2, excludeBegin: true, keywords: "prototype", className: "property", relevance: 0 };
  const R2 = { match: [/get|set/, /\s+/, i2, /(?=\()/], className: { 1: "keyword", 3: "title.function" }, contains: [{ begin: /\(\)/ }, w2] };
  const T2 = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e2.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const D2 = { match: [/const|var|let/, /\s+/, i2, /\s*/, /=\s*/, /(async\s*)?/, t2.lookahead(T2)], keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [w2] };
  return { name: "Javascript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: o2, exports: { PARAMS_CONTAINS: y2, CLASS_REFERENCE: E2 }, illegal: /#(?![$_A-z])/, contains: [e2.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), k2, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, g2, h2, p2, m2, d2, E2, { className: "attr", begin: i2 + t2.lookahead(":"), relevance: 0 }, D2, { begin: "(" + e2.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", keywords: "return throw case", relevance: 0, contains: [m2, e2.REGEXP_MODE, { className: "function", begin: T2, returnBegin: true, end: "\\s*=>", contains: [{ className: "params", variants: [{ begin: e2.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: true }, { begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: o2, contains: y2 }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: r2.begin, end: r2.end }, { match: a2 }, { begin: s2.begin, "on:begin": s2.isTrulyOpeningTag, end: s2.end }], subLanguage: "xml", contains: [{ begin: s2.begin, end: s2.end, skip: true, contains: ["self"] }] }] }, N2, { beginKeywords: "while if switch catch for" }, { begin: "\\b(?!function)" + e2.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", returnBegin: true, label: "func.def", contains: [w2, e2.inherit(e2.TITLE_MODE, { begin: i2, className: "title.function" })] }, { match: /\.\.\./, relevance: 0 }, S2, { match: "\\$" + i2, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [w2] }, M2, A2, x2, R2, { match: /\$[(.]/ }] };
}
function Qt(e2) {
  const t2 = { className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 };
  const n2 = { match: /[{}[\],:]/, className: "punctuation", relevance: 0 };
  const i2 = { beginKeywords: ["true", "false", "null"].join(" ") };
  return { name: "JSON", contains: [t2, n2, e2.QUOTE_STRING_MODE, i2, e2.C_NUMBER_MODE, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE], illegal: "\\S" };
}
function Vt(e2) {
  return { name: "Plain text", aliases: ["text", "txt"], disableAutodetect: true };
}
const Yt = "[A-Za-z$_][0-9A-Za-z$_]*";
const en = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"];
const tn = ["true", "false", "null", "undefined", "NaN", "Infinity"];
const nn = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"];
const rn = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"];
const an = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"];
const sn = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"];
const on = [].concat(an, nn, rn);
function ln(e2) {
  const t2 = e2.regex;
  const n2 = (e3, { after: t3 }) => {
    const n3 = "</" + e3[0].slice(1);
    const i3 = e3.input.indexOf(n3, t3);
    return i3 !== -1;
  };
  const i2 = Yt;
  const r2 = { begin: "<>", end: "</>" };
  const a2 = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const s2 = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e3, t3) => {
    const i3 = e3[0].length + e3.index;
    const r3 = e3.input[i3];
    if (r3 === "<" || r3 === ",") {
      t3.ignoreMatch();
      return;
    }
    if (r3 === ">") {
      if (!n2(e3, { after: i3 }))
        t3.ignoreMatch();
    }
    let a3;
    const s3 = e3.input.substr(i3);
    if (a3 = s3.match(/^\s+extends\s+/)) {
      if (a3.index === 0) {
        t3.ignoreMatch();
        return;
      }
    }
  } };
  const o2 = { $pattern: Yt, keyword: en, literal: tn, built_in: on, "variable.language": sn };
  const l2 = "[0-9](_?[0-9])*";
  const c2 = `\\.(${l2})`;
  const f2 = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const d2 = { className: "number", variants: [{ begin: `(\\b(${f2})((${c2})|\\.)?|(${c2}))[eE][+-]?(${l2})\\b` }, { begin: `\\b(${f2})\\b((${c2})\\b|\\.)?|(${c2})\\b` }, { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` }, { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" }, { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, { begin: "\\b0[0-7]+n?\\b" }], relevance: 0 };
  const u2 = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: o2, contains: [] };
  const g2 = { begin: "html`", end: "", starts: { end: "`", returnEnd: false, contains: [e2.BACKSLASH_ESCAPE, u2], subLanguage: "xml" } };
  const h2 = { begin: "css`", end: "", starts: { end: "`", returnEnd: false, contains: [e2.BACKSLASH_ESCAPE, u2], subLanguage: "css" } };
  const p2 = { className: "string", begin: "`", end: "`", contains: [e2.BACKSLASH_ESCAPE, u2] };
  const b2 = e2.COMMENT(/\/\*\*(?!\/)/, "\\*/", { relevance: 0, contains: [{ begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }, { className: "type", begin: "\\{", end: "\\}", excludeEnd: true, excludeBegin: true, relevance: 0 }, { className: "variable", begin: i2 + "(?=\\s*(-)|$)", endsParent: true, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] });
  const m2 = { className: "comment", variants: [b2, e2.C_BLOCK_COMMENT_MODE, e2.C_LINE_COMMENT_MODE] };
  const v2 = [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, g2, h2, p2, d2];
  u2.contains = v2.concat({ begin: /\{/, end: /\}/, keywords: o2, contains: ["self"].concat(v2) });
  const _2 = [].concat(m2, u2.contains);
  const y2 = _2.concat([{ begin: /\(/, end: /\)/, keywords: o2, contains: ["self"].concat(_2) }]);
  const w2 = { className: "params", begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: o2, contains: y2 };
  const x2 = { variants: [{ match: [/class/, /\s+/, i2, /\s+/, /extends/, /\s+/, t2.concat(i2, "(", t2.concat(/\./, i2), ")*")], scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" } }, { match: [/class/, /\s+/, i2], scope: { 1: "keyword", 3: "title.class" } }] };
  const E2 = { relevance: 0, match: t2.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: "title.class", keywords: { _: [...nn, ...rn] } };
  const k2 = { label: "use_strict", className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ };
  const N2 = { variants: [{ match: [/function/, /\s+/, i2, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [w2], illegal: /%/ };
  const A2 = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" };
  function O2(e3) {
    return t2.concat("(?!", e3.join("|"), ")");
  }
  const M2 = { match: t2.concat(/\b/, O2([...an, "super"]), i2, t2.lookahead(/\(/)), className: "title.function", relevance: 0 };
  const S2 = { begin: t2.concat(/\./, t2.lookahead(t2.concat(i2, /(?![0-9A-Za-z$_(])/))), end: i2, excludeBegin: true, keywords: "prototype", className: "property", relevance: 0 };
  const R2 = { match: [/get|set/, /\s+/, i2, /(?=\()/], className: { 1: "keyword", 3: "title.function" }, contains: [{ begin: /\(\)/ }, w2] };
  const T2 = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e2.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const D2 = { match: [/const|var|let/, /\s+/, i2, /\s*/, /=\s*/, /(async\s*)?/, t2.lookahead(T2)], keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [w2] };
  return { name: "Javascript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: o2, exports: { PARAMS_CONTAINS: y2, CLASS_REFERENCE: E2 }, illegal: /#(?![$_A-z])/, contains: [e2.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), k2, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, g2, h2, p2, m2, d2, E2, { className: "attr", begin: i2 + t2.lookahead(":"), relevance: 0 }, D2, { begin: "(" + e2.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", keywords: "return throw case", relevance: 0, contains: [m2, e2.REGEXP_MODE, { className: "function", begin: T2, returnBegin: true, end: "\\s*=>", contains: [{ className: "params", variants: [{ begin: e2.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: true }, { begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: o2, contains: y2 }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: r2.begin, end: r2.end }, { match: a2 }, { begin: s2.begin, "on:begin": s2.isTrulyOpeningTag, end: s2.end }], subLanguage: "xml", contains: [{ begin: s2.begin, end: s2.end, skip: true, contains: ["self"] }] }] }, N2, { beginKeywords: "while if switch catch for" }, { begin: "\\b(?!function)" + e2.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", returnBegin: true, label: "func.def", contains: [w2, e2.inherit(e2.TITLE_MODE, { begin: i2, className: "title.function" })] }, { match: /\.\.\./, relevance: 0 }, S2, { match: "\\$" + i2, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [w2] }, M2, A2, x2, R2, { match: /\$[(.]/ }] };
}
function cn(e2) {
  const t2 = ln(e2);
  const n2 = Yt;
  const i2 = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"];
  const r2 = { beginKeywords: "namespace", end: /\{/, excludeEnd: true, contains: [t2.exports.CLASS_REFERENCE] };
  const a2 = { beginKeywords: "interface", end: /\{/, excludeEnd: true, keywords: { keyword: "interface extends", built_in: i2 }, contains: [t2.exports.CLASS_REFERENCE] };
  const s2 = { className: "meta", relevance: 10, begin: /^\s*['"]use strict['"]/ };
  const o2 = ["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"];
  const l2 = { $pattern: Yt, keyword: en.concat(o2), literal: tn, built_in: on.concat(i2), "variable.language": sn };
  const c2 = { className: "meta", begin: "@" + n2 };
  const f2 = (e3, t3, n3) => {
    const i3 = e3.contains.findIndex((e4) => e4.label === t3);
    if (i3 === -1)
      throw new Error("can not find mode to replace");
    e3.contains.splice(i3, 1, n3);
  };
  Object.assign(t2.keywords, l2);
  t2.exports.PARAMS_CONTAINS.push(c2);
  t2.contains = t2.contains.concat([c2, r2, a2]);
  f2(t2, "shebang", e2.SHEBANG());
  f2(t2, "use_strict", s2);
  const d2 = t2.contains.find((e3) => e3.label === "func.def");
  d2.relevance = 0;
  Object.assign(t2, { name: "TypeScript", aliases: ["ts", "tsx"] });
  return t2;
}
Dt.registerLanguage("css", $t);
Dt.registerLanguage("xml", zt);
Dt.registerLanguage("markdown", Ut);
Dt.registerLanguage("javascript", Jt);
Dt.registerLanguage("json", Qt);
Dt.registerLanguage("plaintext", Vt);
Dt.registerLanguage("typescript", cn);
const fn = "<vue-diff-modified>";
const dn = "</vue-diff-modified>";
var un = ((e2) => {
  e2[e2["removed"] = -1] = "removed";
  e2[e2["equal"] = 0] = "equal";
  e2[e2["added"] = 1] = "added";
  e2[e2["disabled"] = 2] = "disabled";
  return e2;
})(un || {});
const gn = (e2) => {
  if (!un[e2])
    return "disabled";
  return un[e2];
};
const hn = (e2) => {
  const t2 = [];
  const n2 = { prev: 0, current: 0 };
  e2.map((e3) => {
    const i2 = e3[0][1].replace(/\n$/, "").split("\n");
    const r2 = e3[1][1].replace(/\n$/, "").split("\n");
    const a2 = Math.max(i2.length, r2.length);
    for (let s2 = 0; s2 < a2; s2++) {
      const a3 = gn(e3[0][0]) !== "disabled" && typeof i2[s2] !== "undefined";
      const o2 = gn(e3[1][0]) !== "disabled" && typeof r2[s2] !== "undefined";
      if (a3)
        n2.prev = n2.prev + 1;
      if (o2)
        n2.current = n2.current + 1;
      const l2 = Boolean(gn(e3[0][0]).match(/added|removed/) && gn(e3[1][0]).match(/added|removed/));
      t2.push([{ type: a3 ? gn(e3[0][0]) : "disabled", lineNum: a3 ? n2.prev : void 0, value: a3 ? i2[s2] : void 0, chkWords: l2 }, { type: o2 ? gn(e3[1][0]) : "disabled", lineNum: o2 ? n2.current : void 0, value: o2 ? r2[s2] : void 0, chkWords: l2 }]);
    }
  });
  return t2;
};
const pn = (e2) => {
  const t2 = [];
  let n2 = 0;
  e2.map((e3) => {
    const i2 = e3[0][1].replace(/\n$/, "").split("\n");
    const r2 = e3[1][1].replace(/\n$/, "").split("\n");
    i2.map((n3) => {
      const i3 = gn(e3[0][0]);
      if (i3 !== "removed")
        return;
      t2.push([{ type: gn(e3[0][0]), lineNum: void 0, value: n3 }]);
    });
    r2.map((i3) => {
      const r3 = gn(e3[1][0]);
      if (r3 === "disabled")
        return;
      n2 += 1;
      t2.push([{ type: gn(e3[1][0]), lineNum: n2, value: i3 }]);
    });
  });
  return t2;
};
const bn = (e2, t2, n2) => {
  function i2(e3, t3) {
    const n3 = new ie.exports.diff_match_patch();
    const i3 = n3.diff_linesToChars_(e3, t3);
    const r3 = i3.chars1;
    const a2 = i3.chars2;
    const s2 = i3.lineArray;
    const o2 = n3.diff_main(r3, a2, false);
    n3.diff_charsToLines_(o2, s2);
    return o2;
  }
  const r2 = i2(t2, n2).reduce((e3, t3) => {
    const n3 = gn(t3[0]);
    if (n3 === "equal")
      e3.push([t3]);
    if (n3 === "removed")
      e3.push([t3]);
    if (n3 === "added") {
      const n4 = e3.length && e3[e3.length - 1][0] ? e3[e3.length - 1][0] : null;
      if (n4 && gn(n4[0]) === "removed")
        e3[e3.length - 1].push(t3);
      else
        e3.push([t3]);
    }
    return e3;
  }, []);
  r2.map((e3) => {
    if (e3.length > 1)
      return;
    const t3 = gn(e3[0][0]);
    if (t3 === "added")
      e3.unshift([2, ""]);
    else if (t3 === "removed")
      e3.push([2, ""]);
    else if (t3 === "equal")
      e3.push([...e3[0]]);
  });
  if (e2 === "split")
    return hn(r2);
  else if (e2 === "unified")
    return pn(r2);
  else
    return [];
};
const mn = (e2, t2) => {
  const n2 = new ie.exports.diff_match_patch();
  const i2 = n2.diff_main(e2, t2);
  n2.diff_cleanupSemantic(i2);
  return i2.filter((e3) => gn(e3[0]) !== "removed").map((e3) => gn(e3[0]) === "added" ? `${fn}${e3[1]}${dn}` : e3[1]).join("");
};
const vn = ({ highlightCode: e2, language: t2, code: n2 }) => {
  const i2 = n2.match(new RegExp(`(${fn}|${dn})`, "g"));
  if (!i2) {
    e2.value = Dt.highlight(n2, { language: t2 }).value;
    return;
  }
  let r2 = n2;
  const a2 = n2.replace(new RegExp(`(${fn}|${dn})`, "g"), "");
  let s2 = document.createElement("div");
  s2.innerHTML = Dt.highlight(a2, { language: t2 }).value;
  let o2 = false;
  const l2 = (e3) => {
    e3.childNodes.forEach((e4) => {
      if (e4.nodeType === 1)
        l2(e4);
      if (e4.nodeType === 3) {
        if (!e4.textContent)
          return;
        let t3 = e4.textContent;
        let n3 = "";
        if (o2)
          n3 += fn;
        while (t3.length) {
          if (r2.startsWith(fn)) {
            r2 = r2.slice(fn.length);
            n3 += fn;
            o2 = true;
            continue;
          }
          if (r2.startsWith(dn)) {
            r2 = r2.slice(dn.length);
            n3 += dn;
            o2 = false;
            continue;
          }
          const e5 = r2.match(new RegExp(`(${fn}|${dn})`));
          const i3 = e5 && e5.index ? e5.index : r2.length;
          const a3 = Math.min(i3, t3.length);
          n3 += r2.substring(0, a3);
          r2 = r2.slice(a3);
          t3 = t3.slice(a3);
        }
        if (o2)
          n3 += dn;
        e4.textContent = n3;
      }
    });
  };
  l2(s2);
  const c2 = fn.replace("<", "&lt;").replace(">", "&gt;");
  const f2 = dn.replace("<", "&lt;").replace(">", "&gt;");
  e2.value = s2.innerHTML.replace(new RegExp(c2, "g"), '<span class="modified">').replace(new RegExp(f2, "g"), "</span>");
  s2 = null;
};
const _n = (e2, t2, n2) => {
  const i2 = r([]);
  const s2 = r([]);
  const o2 = a(() => s2.value.filter((t3) => e2.folding ? !t3.foldable && t3.visible : t3.visible));
  const l2 = () => {
    const t3 = bn(e2.mode, e2.prev, e2.current);
    i2.value = t3;
    s2.value.splice(i2.value.length);
    i2.value.map((t4, r2) => {
      var _a;
      const a2 = s2.value[r2];
      const o3 = e2.folding && t4[0].type === "equal" && ((_a = i2.value[r2 - 1]) == null ? void 0 : _a[0].type) === "equal";
      const l3 = { index: r2, foldable: o3, visible: true };
      if (n2.value)
        s2.value[r2] = __spreadProps(__spreadValues({}, l3), { visible: (a2 == null ? void 0 : a2.visible) || false, top: (a2 == null ? void 0 : a2.top) || void 0, height: (a2 == null ? void 0 : a2.height) || n2.value.lineMinHeight });
      else
        s2.value[r2] = __spreadValues({}, l3);
    });
  };
  G([() => e2.mode, () => e2.prev, () => e2.current, () => e2.folding], l2, { debounce: e2.inputDelay, immediate: true });
  return { meta: s2, render: i2, list: o2 };
};
const yn = (t2, n2, i2, r2) => {
  const c2 = a(() => {
    if (!i2.value)
      return;
    const e2 = r2.value.reduce((e3, t3) => {
      t3.top = e3;
      return t3.foldable ? e3 : e3 + t3.height;
    }, 0);
    return e2 + "px";
  });
  const f2 = () => {
    if (!n2.value || !i2.value)
      return;
    const e2 = n2.value.scrollTop;
    const t3 = i2.value.height;
    const a2 = e2 - 1.5 * t3;
    const s2 = e2 + t3 + 1.5 * t3;
    r2.value.reduce((e3, t4) => {
      if (e3 >= a2 && e3 <= s2)
        t4.visible = true;
      else
        t4.visible = false;
      t4.top = e3;
      return t4.foldable ? e3 : e3 + t4.height;
    }, 0);
  };
  G([() => t2.mode, () => t2.prev, () => t2.current, () => t2.folding], () => s(f2), { debounce: t2.inputDelay, immediate: true });
  o(() => {
    var _a;
    if (!i2.value)
      return;
    (_a = n2.value) == null ? void 0 : _a.addEventListener("scroll", S(f2, i2.value.delay));
  });
  l(() => {
    var _a;
    if (!i2.value)
      return;
    (_a = n2.value) == null ? void 0 : _a.removeEventListener("scroll", S(f2, i2.value.delay));
  });
  e(i2, (e2, t3) => {
    var _a, _b;
    if (!t3 && e2)
      (_a = n2.value) == null ? void 0 : _a.addEventListener("scroll", S(f2, e2.delay));
    if (t3 && !e2)
      (_b = n2.value) == null ? void 0 : _b.removeEventListener("scroll", S(f2, t3.delay));
  });
  return { minHeight: c2 };
};
var wn = (e2, t2) => {
  const n2 = e2.__vccOpts || e2;
  for (const [e3, i2] of t2)
    n2[e3] = i2;
  return n2;
};
const xn = c({ props: { language: { type: String, required: true }, code: { type: String, required: true }, scrollOptions: { type: [Boolean, Object], default: false } }, emits: ["rendered"], setup(t2, { emit: n2 }) {
  const i2 = r("");
  o(() => {
    e([() => t2.language, () => t2.code], () => {
      vn({ highlightCode: i2, language: t2.language, code: t2.code });
      s(() => n2("rendered"));
    }, { immediate: true });
    e([() => t2.scrollOptions], () => {
      s(() => n2("rendered"));
    }, { deep: true });
  });
  return { highlightCode: i2 };
} });
const En = ["innerHTML"];
function kn(e2, t2, n2, i2, r2, a2) {
  return f(), d("pre", null, [u("code", { class: "hljs", innerHTML: e2.highlightCode }, null, 8, En)]);
}
var Nn = wn(xn, [["render", kn]]);
const An = c({ components: { Code: Nn }, props: { mode: { type: String, required: true }, folding: { type: Boolean, default: false }, language: { type: String, required: true }, meta: { type: Object, required: true }, render: { type: Object, required: true }, scrollOptions: { type: [Boolean, Object], default: false } }, setup(e2, { emit: t2 }) {
  const n2 = r(null);
  const i2 = a(() => {
    if (!e2.scrollOptions)
      return;
    return { position: "absolute", left: 0, top: 0, transform: `translate3d(0, ${e2.meta.top}px, 0)`, minHeight: e2.scrollOptions.lineMinHeight + "px" };
  });
  const s2 = a(() => e2.folding && e2.render[0].type === "equal");
  const o2 = (e3, t3, n3) => {
    if (!e3.value)
      return "\n";
    if (typeof t3 === "undefined" || typeof n3 === "undefined" || !e3.chkWords)
      return e3.value;
    const i3 = t3[n3 === 0 ? 1 : 0];
    if (!i3.value)
      return e3.value;
    return mn(i3.value, e3.value);
  };
  const l2 = () => {
    if (!n2.value || e2.meta.height === n2.value.offsetHeight)
      return;
    t2("setLineHeight", e2.meta.index, n2.value.offsetHeight);
  };
  if (e2.scrollOptions)
    ee(n2, S(() => {
      if (!n2.value || e2.meta.height === n2.value.offsetHeight)
        return;
      t2("setLineHeight", e2.meta.index, n2.value.offsetHeight);
    }, e2.scrollOptions.delay));
  return { line: n2, isFoldLine: s2, rendered: l2, rowStyle: i2, setCode: o2 };
} });
const On = u("div", { class: "lineNum vue-diff-cell-fold" }, null, -1);
const Mn = u("div", { class: "code vue-diff-cell-fold" }, null, -1);
const Sn = u("div", { class: "lineNum vue-diff-cell-fold" }, null, -1);
const Rn = u("div", { class: "code vue-diff-cell-fold" }, null, -1);
function Tn(e2, t2, n2, i2, r2, a2) {
  const s2 = g("Code");
  return f(), d("div", { ref: "line", class: h(["vue-diff-row", `vue-diff-row-${e2.mode}`]), style: p(e2.rowStyle) }, [e2.mode === "split" ? (f(true), d(b, { key: 0 }, m(e2.render, (t3, n3) => (f(), d(b, { key: n3 }, [e2.isFoldLine ? (f(), d(b, { key: 0 }, [On, Mn], 64)) : (f(), d(b, { key: 1 }, [u("div", { class: h(["lineNum", `vue-diff-cell-${t3.type}`]) }, v(t3.lineNum), 3), u("div", { class: h(["code", `vue-diff-cell-${t3.type}`]) }, [_(s2, { language: e2.language, code: e2.setCode(t3, e2.render, n3), scrollOptions: e2.scrollOptions, onRendered: e2.rendered }, null, 8, ["language", "code", "scrollOptions", "onRendered"])], 2)], 64))], 64))), 128)) : y("", true), e2.mode === "unified" ? (f(), d(b, { key: 1 }, [e2.isFoldLine ? (f(), d(b, { key: 0 }, [Sn, Rn], 64)) : (f(), d(b, { key: 1 }, [u("div", { class: h(["lineNum", `vue-diff-cell-${e2.render[0].type}`]) }, v(e2.render[0].lineNum), 3), u("div", { class: h(["code", `vue-diff-cell-${e2.render[0].type}`]) }, [_(s2, { language: e2.language, code: e2.setCode(e2.render[0]), scrollOptions: e2.scrollOptions, onRendered: e2.rendered }, null, 8, ["language", "code", "scrollOptions", "onRendered"])], 2)], 64))], 64)) : y("", true)], 6);
}
var Dn = wn(An, [["render", Tn]]);
const In = c({ components: { Line: Dn }, props: { mode: { type: String, default: "split" }, theme: { type: String, default: "dark" }, language: { type: String, default: "plaintext" }, prev: { type: String, default: "" }, current: { type: String, default: "" }, folding: { type: Boolean, default: false }, inputDelay: { type: Number, default: 0 }, virtualScroll: { type: [Boolean, Object], default: false } }, setup(e2) {
  const t2 = r(null);
  const n2 = a(() => {
    if (!e2.virtualScroll)
      return false;
    return __spreadValues({ height: 500, lineMinHeight: 24, delay: 100 }, typeof e2.virtualScroll === "object" ? w(e2.virtualScroll) : {});
  });
  const { meta: i2, render: s2, list: o2 } = _n(e2, t2, n2);
  const { minHeight: l2 } = yn(e2, t2, n2, i2);
  const c2 = (e3, t3) => {
    if (i2.value[e3] && i2.value[e3].height !== t3)
      i2.value[e3].height = t3;
  };
  return { list: o2, meta: i2, minHeight: l2, render: s2, scrollOptions: n2, setLineHeight: c2, viewer: t2 };
} });
function Cn(e2, t2, n2, i2, r2, a2) {
  const s2 = g("Line");
  return f(), d("div", { class: h(["vue-diff-wrapper", `vue-diff-mode-${e2.mode} vue-diff-theme-${e2.theme}`]) }, [u("div", { ref: "viewer", class: "vue-diff-viewer", style: p({ height: e2.scrollOptions ? e2.scrollOptions.height + "px" : void 0 }) }, [u("div", { class: "vue-diff-viewer-inner", style: p({ minHeight: e2.minHeight }) }, [(f(true), d(b, null, m(e2.list, (t3, n3) => (f(), x(s2, { key: n3, mode: e2.mode, folding: e2.folding, language: e2.language, meta: e2.meta[t3.index], render: e2.render[t3.index], scrollOptions: e2.scrollOptions, onSetLineHeight: e2.setLineHeight }, null, 8, ["mode", "folding", "language", "meta", "render", "scrollOptions", "onSetLineHeight"]))), 128))], 4)], 4)], 2);
}
var jn = wn(In, [["render", Cn]]);
var Bn = "";
var Ln = { install: (e2, t2 = {}) => {
  const { componentName: n2 = "Diff" } = t2;
  e2.component(n2, jn);
}, hljs: Dt };
export { jn as Diff, Ln as default };
