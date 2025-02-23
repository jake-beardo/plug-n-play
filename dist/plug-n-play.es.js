import { Actor as N0, HttpAgent as Fr, AnonymousIdentity as Et } from "@dfinity/agent";
import { Principal as yr } from "@dfinity/principal";
import { AuthClient as Nr } from "@dfinity/auth-client";
function qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const zt = new Int32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function Ct(e) {
  if (Buffer.isBuffer(e))
    return e;
  if (typeof e == "number")
    return Buffer.alloc(e);
  if (typeof e == "string")
    return Buffer.from(e);
  throw new Error("input must be buffer, number, or string, received " + typeof e);
}
function Ot(e) {
  const u = Ct(4);
  return u.writeInt32BE(e, 0), u;
}
function gr(e, u) {
  e = Ct(e), Buffer.isBuffer(u) && (u = u.readUInt32BE(0));
  let a = ~~u ^ -1;
  for (var x = 0; x < e.length; x++)
    a = zt[(a ^ e[x]) & 255] ^ a >>> 8;
  return a ^ -1;
}
function wr() {
  return Ot(gr.apply(null, arguments));
}
wr.signed = function() {
  return gr.apply(null, arguments);
};
wr.unsigned = function() {
  return gr.apply(null, arguments) >>> 0;
};
var Wt = wr;
const Mt = /* @__PURE__ */ qt(Wt);
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Vt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function It(e) {
  if (e.__esModule) return e;
  var u = e.default;
  if (typeof u == "function") {
    var a = function x() {
      return this instanceof x ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    a.prototype = u.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(e).forEach(function(x) {
    var A = Object.getOwnPropertyDescriptor(e, x);
    Object.defineProperty(a, x, A.get ? A : {
      enumerable: !0,
      get: function() {
        return e[x];
      }
    });
  }), a;
}
var T0 = {}, P0 = {};
P0.byteLength = Xt;
P0.toByteArray = jt;
P0.fromByteArray = Jt;
var d0 = [], l0 = [], Kt = typeof Uint8Array < "u" ? Uint8Array : Array, z0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var k0 = 0, Gt = z0.length; k0 < Gt; ++k0)
  d0[k0] = z0[k0], l0[z0.charCodeAt(k0)] = k0;
l0[45] = 62;
l0[95] = 63;
function Ft(e) {
  var u = e.length;
  if (u % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var a = e.indexOf("=");
  a === -1 && (a = u);
  var x = a === u ? 0 : 4 - a % 4;
  return [a, x];
}
function Xt(e) {
  var u = Ft(e), a = u[0], x = u[1];
  return (a + x) * 3 / 4 - x;
}
function Qt(e, u, a) {
  return (u + a) * 3 / 4 - a;
}
function jt(e) {
  var u, a = Ft(e), x = a[0], A = a[1], y = new Kt(Qt(e, x, A)), b = 0, i = A > 0 ? x - 4 : x, E;
  for (E = 0; E < i; E += 4)
    u = l0[e.charCodeAt(E)] << 18 | l0[e.charCodeAt(E + 1)] << 12 | l0[e.charCodeAt(E + 2)] << 6 | l0[e.charCodeAt(E + 3)], y[b++] = u >> 16 & 255, y[b++] = u >> 8 & 255, y[b++] = u & 255;
  return A === 2 && (u = l0[e.charCodeAt(E)] << 2 | l0[e.charCodeAt(E + 1)] >> 4, y[b++] = u & 255), A === 1 && (u = l0[e.charCodeAt(E)] << 10 | l0[e.charCodeAt(E + 1)] << 4 | l0[e.charCodeAt(E + 2)] >> 2, y[b++] = u >> 8 & 255, y[b++] = u & 255), y;
}
function Zt(e) {
  return d0[e >> 18 & 63] + d0[e >> 12 & 63] + d0[e >> 6 & 63] + d0[e & 63];
}
function Yt(e, u, a) {
  for (var x, A = [], y = u; y < a; y += 3)
    x = (e[y] << 16 & 16711680) + (e[y + 1] << 8 & 65280) + (e[y + 2] & 255), A.push(Zt(x));
  return A.join("");
}
function Jt(e) {
  for (var u, a = e.length, x = a % 3, A = [], y = 16383, b = 0, i = a - x; b < i; b += y)
    A.push(Yt(e, b, b + y > i ? i : b + y));
  return x === 1 ? (u = e[a - 1], A.push(
    d0[u >> 2] + d0[u << 4 & 63] + "=="
  )) : x === 2 && (u = (e[a - 2] << 8) + e[a - 1], A.push(
    d0[u >> 10] + d0[u >> 4 & 63] + d0[u << 2 & 63] + "="
  )), A.join("");
}
var _r = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
_r.read = function(e, u, a, x, A) {
  var y, b, i = A * 8 - x - 1, E = (1 << i) - 1, o = E >> 1, s = -7, g = a ? A - 1 : 0, f = a ? -1 : 1, d = e[u + g];
  for (g += f, y = d & (1 << -s) - 1, d >>= -s, s += i; s > 0; y = y * 256 + e[u + g], g += f, s -= 8)
    ;
  for (b = y & (1 << -s) - 1, y >>= -s, s += x; s > 0; b = b * 256 + e[u + g], g += f, s -= 8)
    ;
  if (y === 0)
    y = 1 - o;
  else {
    if (y === E)
      return b ? NaN : (d ? -1 : 1) * (1 / 0);
    b = b + Math.pow(2, x), y = y - o;
  }
  return (d ? -1 : 1) * b * Math.pow(2, y - x);
};
_r.write = function(e, u, a, x, A, y) {
  var b, i, E, o = y * 8 - A - 1, s = (1 << o) - 1, g = s >> 1, f = A === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = x ? 0 : y - 1, p = x ? 1 : -1, C = u < 0 || u === 0 && 1 / u < 0 ? 1 : 0;
  for (u = Math.abs(u), isNaN(u) || u === 1 / 0 ? (i = isNaN(u) ? 1 : 0, b = s) : (b = Math.floor(Math.log(u) / Math.LN2), u * (E = Math.pow(2, -b)) < 1 && (b--, E *= 2), b + g >= 1 ? u += f / E : u += f * Math.pow(2, 1 - g), u * E >= 2 && (b++, E /= 2), b + g >= s ? (i = 0, b = s) : b + g >= 1 ? (i = (u * E - 1) * Math.pow(2, A), b = b + g) : (i = u * Math.pow(2, g - 1) * Math.pow(2, A), b = 0)); A >= 8; e[a + d] = i & 255, d += p, i /= 256, A -= 8)
    ;
  for (b = b << A | i, o += A; o > 0; e[a + d] = b & 255, d += p, b /= 256, o -= 8)
    ;
  e[a + d - p] |= C * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const u = P0, a = _r, x = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = i, e.SlowBuffer = l, e.INSPECT_MAX_BYTES = 50;
  const A = 2147483647;
  e.kMaxLength = A, i.TYPED_ARRAY_SUPPORT = y(), !i.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function y() {
    try {
      const n = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(n, r), n.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(i.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (i.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(i.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (i.isBuffer(this))
        return this.byteOffset;
    }
  });
  function b(n) {
    if (n > A)
      throw new RangeError('The value "' + n + '" is invalid for option "size"');
    const r = new Uint8Array(n);
    return Object.setPrototypeOf(r, i.prototype), r;
  }
  function i(n, r, t) {
    if (typeof n == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(n);
    }
    return E(n, r, t);
  }
  i.poolSize = 8192;
  function E(n, r, t) {
    if (typeof n == "string")
      return f(n, r);
    if (ArrayBuffer.isView(n))
      return p(n);
    if (n == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n
      );
    if (i0(n, ArrayBuffer) || n && i0(n.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (i0(n, SharedArrayBuffer) || n && i0(n.buffer, SharedArrayBuffer)))
      return C(n, r, t);
    if (typeof n == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const c = n.valueOf && n.valueOf();
    if (c != null && c !== n)
      return i.from(c, r, t);
    const F = v(n);
    if (F) return F;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof n[Symbol.toPrimitive] == "function")
      return i.from(n[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n
    );
  }
  i.from = function(n, r, t) {
    return E(n, r, t);
  }, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array);
  function o(n) {
    if (typeof n != "number")
      throw new TypeError('"size" argument must be of type number');
    if (n < 0)
      throw new RangeError('The value "' + n + '" is invalid for option "size"');
  }
  function s(n, r, t) {
    return o(n), n <= 0 ? b(n) : r !== void 0 ? typeof t == "string" ? b(n).fill(r, t) : b(n).fill(r) : b(n);
  }
  i.alloc = function(n, r, t) {
    return s(n, r, t);
  };
  function g(n) {
    return o(n), b(n < 0 ? 0 : _(n) | 0);
  }
  i.allocUnsafe = function(n) {
    return g(n);
  }, i.allocUnsafeSlow = function(n) {
    return g(n);
  };
  function f(n, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !i.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const t = h(n, r) | 0;
    let c = b(t);
    const F = c.write(n, r);
    return F !== t && (c = c.slice(0, F)), c;
  }
  function d(n) {
    const r = n.length < 0 ? 0 : _(n.length) | 0, t = b(r);
    for (let c = 0; c < r; c += 1)
      t[c] = n[c] & 255;
    return t;
  }
  function p(n) {
    if (i0(n, Uint8Array)) {
      const r = new Uint8Array(n);
      return C(r.buffer, r.byteOffset, r.byteLength);
    }
    return d(n);
  }
  function C(n, r, t) {
    if (r < 0 || n.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (n.byteLength < r + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let c;
    return r === void 0 && t === void 0 ? c = new Uint8Array(n) : t === void 0 ? c = new Uint8Array(n, r) : c = new Uint8Array(n, r, t), Object.setPrototypeOf(c, i.prototype), c;
  }
  function v(n) {
    if (i.isBuffer(n)) {
      const r = _(n.length) | 0, t = b(r);
      return t.length === 0 || n.copy(t, 0, 0, r), t;
    }
    if (n.length !== void 0)
      return typeof n.length != "number" || u0(n.length) ? b(0) : d(n);
    if (n.type === "Buffer" && Array.isArray(n.data))
      return d(n.data);
  }
  function _(n) {
    if (n >= A)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + A.toString(16) + " bytes");
    return n | 0;
  }
  function l(n) {
    return +n != n && (n = 0), i.alloc(+n);
  }
  i.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== i.prototype;
  }, i.compare = function(r, t) {
    if (i0(r, Uint8Array) && (r = i.from(r, r.offset, r.byteLength)), i0(t, Uint8Array) && (t = i.from(t, t.offset, t.byteLength)), !i.isBuffer(r) || !i.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === t) return 0;
    let c = r.length, F = t.length;
    for (let R = 0, T = Math.min(c, F); R < T; ++R)
      if (r[R] !== t[R]) {
        c = r[R], F = t[R];
        break;
      }
    return c < F ? -1 : F < c ? 1 : 0;
  }, i.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, i.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return i.alloc(0);
    let c;
    if (t === void 0)
      for (t = 0, c = 0; c < r.length; ++c)
        t += r[c].length;
    const F = i.allocUnsafe(t);
    let R = 0;
    for (c = 0; c < r.length; ++c) {
      let T = r[c];
      if (i0(T, Uint8Array))
        R + T.length > F.length ? (i.isBuffer(T) || (T = i.from(T)), T.copy(F, R)) : Uint8Array.prototype.set.call(
          F,
          T,
          R
        );
      else if (i.isBuffer(T))
        T.copy(F, R);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      R += T.length;
    }
    return F;
  };
  function h(n, r) {
    if (i.isBuffer(n))
      return n.length;
    if (ArrayBuffer.isView(n) || i0(n, ArrayBuffer))
      return n.byteLength;
    if (typeof n != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n
      );
    const t = n.length, c = arguments.length > 2 && arguments[2] === !0;
    if (!c && t === 0) return 0;
    let F = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return A0(n).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return E0(n).length;
        default:
          if (F)
            return c ? -1 : A0(n).length;
          r = ("" + r).toLowerCase(), F = !0;
      }
  }
  i.byteLength = h;
  function B(n, r, t) {
    let c = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
      return "";
    for (n || (n = "utf8"); ; )
      switch (n) {
        case "hex":
          return $(this, r, t);
        case "utf8":
        case "utf-8":
          return M(this, r, t);
        case "ascii":
          return L(this, r, t);
        case "latin1":
        case "binary":
          return j(this, r, t);
        case "base64":
          return q(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Z(this, r, t);
        default:
          if (c) throw new TypeError("Unknown encoding: " + n);
          n = (n + "").toLowerCase(), c = !0;
      }
  }
  i.prototype._isBuffer = !0;
  function D(n, r, t) {
    const c = n[r];
    n[r] = n[t], n[t] = c;
  }
  i.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2)
      D(this, t, t + 1);
    return this;
  }, i.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4)
      D(this, t, t + 3), D(this, t + 1, t + 2);
    return this;
  }, i.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8)
      D(this, t, t + 7), D(this, t + 1, t + 6), D(this, t + 2, t + 5), D(this, t + 3, t + 4);
    return this;
  }, i.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? M(this, 0, r) : B.apply(this, arguments);
  }, i.prototype.toLocaleString = i.prototype.toString, i.prototype.equals = function(r) {
    if (!i.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : i.compare(this, r) === 0;
  }, i.prototype.inspect = function() {
    let r = "";
    const t = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  }, x && (i.prototype[x] = i.prototype.inspect), i.prototype.compare = function(r, t, c, F, R) {
    if (i0(r, Uint8Array) && (r = i.from(r, r.offset, r.byteLength)), !i.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (t === void 0 && (t = 0), c === void 0 && (c = r ? r.length : 0), F === void 0 && (F = 0), R === void 0 && (R = this.length), t < 0 || c > r.length || F < 0 || R > this.length)
      throw new RangeError("out of range index");
    if (F >= R && t >= c)
      return 0;
    if (F >= R)
      return -1;
    if (t >= c)
      return 1;
    if (t >>>= 0, c >>>= 0, F >>>= 0, R >>>= 0, this === r) return 0;
    let T = R - F, G = c - t;
    const e0 = Math.min(T, G), t0 = this.slice(F, R), n0 = r.slice(t, c);
    for (let Y = 0; Y < e0; ++Y)
      if (t0[Y] !== n0[Y]) {
        T = t0[Y], G = n0[Y];
        break;
      }
    return T < G ? -1 : G < T ? 1 : 0;
  };
  function m(n, r, t, c, F) {
    if (n.length === 0) return -1;
    if (typeof t == "string" ? (c = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, u0(t) && (t = F ? 0 : n.length - 1), t < 0 && (t = n.length + t), t >= n.length) {
      if (F) return -1;
      t = n.length - 1;
    } else if (t < 0)
      if (F) t = 0;
      else return -1;
    if (typeof r == "string" && (r = i.from(r, c)), i.isBuffer(r))
      return r.length === 0 ? -1 : k(n, r, t, c, F);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? F ? Uint8Array.prototype.indexOf.call(n, r, t) : Uint8Array.prototype.lastIndexOf.call(n, r, t) : k(n, [r], t, c, F);
    throw new TypeError("val must be string, number or Buffer");
  }
  function k(n, r, t, c, F) {
    let R = 1, T = n.length, G = r.length;
    if (c !== void 0 && (c = String(c).toLowerCase(), c === "ucs2" || c === "ucs-2" || c === "utf16le" || c === "utf-16le")) {
      if (n.length < 2 || r.length < 2)
        return -1;
      R = 2, T /= 2, G /= 2, t /= 2;
    }
    function e0(n0, Y) {
      return R === 1 ? n0[Y] : n0.readUInt16BE(Y * R);
    }
    let t0;
    if (F) {
      let n0 = -1;
      for (t0 = t; t0 < T; t0++)
        if (e0(n, t0) === e0(r, n0 === -1 ? 0 : t0 - n0)) {
          if (n0 === -1 && (n0 = t0), t0 - n0 + 1 === G) return n0 * R;
        } else
          n0 !== -1 && (t0 -= t0 - n0), n0 = -1;
    } else
      for (t + G > T && (t = T - G), t0 = t; t0 >= 0; t0--) {
        let n0 = !0;
        for (let Y = 0; Y < G; Y++)
          if (e0(n, t0 + Y) !== e0(r, Y)) {
            n0 = !1;
            break;
          }
        if (n0) return t0;
      }
    return -1;
  }
  i.prototype.includes = function(r, t, c) {
    return this.indexOf(r, t, c) !== -1;
  }, i.prototype.indexOf = function(r, t, c) {
    return m(this, r, t, c, !0);
  }, i.prototype.lastIndexOf = function(r, t, c) {
    return m(this, r, t, c, !1);
  };
  function U(n, r, t, c) {
    t = Number(t) || 0;
    const F = n.length - t;
    c ? (c = Number(c), c > F && (c = F)) : c = F;
    const R = r.length;
    c > R / 2 && (c = R / 2);
    let T;
    for (T = 0; T < c; ++T) {
      const G = parseInt(r.substr(T * 2, 2), 16);
      if (u0(G)) return T;
      n[t + T] = G;
    }
    return T;
  }
  function W(n, r, t, c) {
    return s0(A0(r, n.length - t), n, t, c);
  }
  function w(n, r, t, c) {
    return s0(w0(r), n, t, c);
  }
  function S(n, r, t, c) {
    return s0(E0(r), n, t, c);
  }
  function P(n, r, t, c) {
    return s0(H0(r, n.length - t), n, t, c);
  }
  i.prototype.write = function(r, t, c, F) {
    if (t === void 0)
      F = "utf8", c = this.length, t = 0;
    else if (c === void 0 && typeof t == "string")
      F = t, c = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(c) ? (c = c >>> 0, F === void 0 && (F = "utf8")) : (F = c, c = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const R = this.length - t;
    if ((c === void 0 || c > R) && (c = R), r.length > 0 && (c < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    F || (F = "utf8");
    let T = !1;
    for (; ; )
      switch (F) {
        case "hex":
          return U(this, r, t, c);
        case "utf8":
        case "utf-8":
          return W(this, r, t, c);
        case "ascii":
        case "latin1":
        case "binary":
          return w(this, r, t, c);
        case "base64":
          return S(this, r, t, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return P(this, r, t, c);
        default:
          if (T) throw new TypeError("Unknown encoding: " + F);
          F = ("" + F).toLowerCase(), T = !0;
      }
  }, i.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function q(n, r, t) {
    return r === 0 && t === n.length ? u.fromByteArray(n) : u.fromByteArray(n.slice(r, t));
  }
  function M(n, r, t) {
    t = Math.min(n.length, t);
    const c = [];
    let F = r;
    for (; F < t; ) {
      const R = n[F];
      let T = null, G = R > 239 ? 4 : R > 223 ? 3 : R > 191 ? 2 : 1;
      if (F + G <= t) {
        let e0, t0, n0, Y;
        switch (G) {
          case 1:
            R < 128 && (T = R);
            break;
          case 2:
            e0 = n[F + 1], (e0 & 192) === 128 && (Y = (R & 31) << 6 | e0 & 63, Y > 127 && (T = Y));
            break;
          case 3:
            e0 = n[F + 1], t0 = n[F + 2], (e0 & 192) === 128 && (t0 & 192) === 128 && (Y = (R & 15) << 12 | (e0 & 63) << 6 | t0 & 63, Y > 2047 && (Y < 55296 || Y > 57343) && (T = Y));
            break;
          case 4:
            e0 = n[F + 1], t0 = n[F + 2], n0 = n[F + 3], (e0 & 192) === 128 && (t0 & 192) === 128 && (n0 & 192) === 128 && (Y = (R & 15) << 18 | (e0 & 63) << 12 | (t0 & 63) << 6 | n0 & 63, Y > 65535 && Y < 1114112 && (T = Y));
        }
      }
      T === null ? (T = 65533, G = 1) : T > 65535 && (T -= 65536, c.push(T >>> 10 & 1023 | 55296), T = 56320 | T & 1023), c.push(T), F += G;
    }
    return K(c);
  }
  const V = 4096;
  function K(n) {
    const r = n.length;
    if (r <= V)
      return String.fromCharCode.apply(String, n);
    let t = "", c = 0;
    for (; c < r; )
      t += String.fromCharCode.apply(
        String,
        n.slice(c, c += V)
      );
    return t;
  }
  function L(n, r, t) {
    let c = "";
    t = Math.min(n.length, t);
    for (let F = r; F < t; ++F)
      c += String.fromCharCode(n[F] & 127);
    return c;
  }
  function j(n, r, t) {
    let c = "";
    t = Math.min(n.length, t);
    for (let F = r; F < t; ++F)
      c += String.fromCharCode(n[F]);
    return c;
  }
  function $(n, r, t) {
    const c = n.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > c) && (t = c);
    let F = "";
    for (let R = r; R < t; ++R)
      F += R0[n[R]];
    return F;
  }
  function Z(n, r, t) {
    const c = n.slice(r, t);
    let F = "";
    for (let R = 0; R < c.length - 1; R += 2)
      F += String.fromCharCode(c[R] + c[R + 1] * 256);
    return F;
  }
  i.prototype.slice = function(r, t) {
    const c = this.length;
    r = ~~r, t = t === void 0 ? c : ~~t, r < 0 ? (r += c, r < 0 && (r = 0)) : r > c && (r = c), t < 0 ? (t += c, t < 0 && (t = 0)) : t > c && (t = c), t < r && (t = r);
    const F = this.subarray(r, t);
    return Object.setPrototypeOf(F, i.prototype), F;
  };
  function H(n, r, t) {
    if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
    if (n + r > t) throw new RangeError("Trying to access beyond buffer length");
  }
  i.prototype.readUintLE = i.prototype.readUIntLE = function(r, t, c) {
    r = r >>> 0, t = t >>> 0, c || H(r, t, this.length);
    let F = this[r], R = 1, T = 0;
    for (; ++T < t && (R *= 256); )
      F += this[r + T] * R;
    return F;
  }, i.prototype.readUintBE = i.prototype.readUIntBE = function(r, t, c) {
    r = r >>> 0, t = t >>> 0, c || H(r, t, this.length);
    let F = this[r + --t], R = 1;
    for (; t > 0 && (R *= 256); )
      F += this[r + --t] * R;
    return F;
  }, i.prototype.readUint8 = i.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || H(r, 1, this.length), this[r];
  }, i.prototype.readUint16LE = i.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || H(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, i.prototype.readUint16BE = i.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || H(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, i.prototype.readUint32LE = i.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || H(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, i.prototype.readUint32BE = i.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || H(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, i.prototype.readBigUInt64LE = h0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], c = this[r + 7];
    (t === void 0 || c === void 0) && x0(r, this.length - 8);
    const F = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, R = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + c * 2 ** 24;
    return BigInt(F) + (BigInt(R) << BigInt(32));
  }), i.prototype.readBigUInt64BE = h0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], c = this[r + 7];
    (t === void 0 || c === void 0) && x0(r, this.length - 8);
    const F = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], R = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c;
    return (BigInt(F) << BigInt(32)) + BigInt(R);
  }), i.prototype.readIntLE = function(r, t, c) {
    r = r >>> 0, t = t >>> 0, c || H(r, t, this.length);
    let F = this[r], R = 1, T = 0;
    for (; ++T < t && (R *= 256); )
      F += this[r + T] * R;
    return R *= 128, F >= R && (F -= Math.pow(2, 8 * t)), F;
  }, i.prototype.readIntBE = function(r, t, c) {
    r = r >>> 0, t = t >>> 0, c || H(r, t, this.length);
    let F = t, R = 1, T = this[r + --F];
    for (; F > 0 && (R *= 256); )
      T += this[r + --F] * R;
    return R *= 128, T >= R && (T -= Math.pow(2, 8 * t)), T;
  }, i.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || H(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, i.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || H(r, 2, this.length);
    const c = this[r] | this[r + 1] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, i.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || H(r, 2, this.length);
    const c = this[r + 1] | this[r] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, i.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || H(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, i.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || H(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, i.prototype.readBigInt64LE = h0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], c = this[r + 7];
    (t === void 0 || c === void 0) && x0(r, this.length - 8);
    const F = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (c << 24);
    return (BigInt(F) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), i.prototype.readBigInt64BE = h0(function(r) {
    r = r >>> 0, a0(r, "offset");
    const t = this[r], c = this[r + 7];
    (t === void 0 || c === void 0) && x0(r, this.length - 8);
    const F = (t << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(F) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c);
  }), i.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || H(r, 4, this.length), a.read(this, r, !0, 23, 4);
  }, i.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || H(r, 4, this.length), a.read(this, r, !1, 23, 4);
  }, i.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || H(r, 8, this.length), a.read(this, r, !0, 52, 8);
  }, i.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || H(r, 8, this.length), a.read(this, r, !1, 52, 8);
  };
  function N(n, r, t, c, F, R) {
    if (!i.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > F || r < R) throw new RangeError('"value" argument is out of bounds');
    if (t + c > n.length) throw new RangeError("Index out of range");
  }
  i.prototype.writeUintLE = i.prototype.writeUIntLE = function(r, t, c, F) {
    if (r = +r, t = t >>> 0, c = c >>> 0, !F) {
      const G = Math.pow(2, 8 * c) - 1;
      N(this, r, t, c, G, 0);
    }
    let R = 1, T = 0;
    for (this[t] = r & 255; ++T < c && (R *= 256); )
      this[t + T] = r / R & 255;
    return t + c;
  }, i.prototype.writeUintBE = i.prototype.writeUIntBE = function(r, t, c, F) {
    if (r = +r, t = t >>> 0, c = c >>> 0, !F) {
      const G = Math.pow(2, 8 * c) - 1;
      N(this, r, t, c, G, 0);
    }
    let R = c - 1, T = 1;
    for (this[t + R] = r & 255; --R >= 0 && (T *= 256); )
      this[t + R] = r / T & 255;
    return t + c;
  }, i.prototype.writeUint8 = i.prototype.writeUInt8 = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  }, i.prototype.writeUint16LE = i.prototype.writeUInt16LE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, i.prototype.writeUint16BE = i.prototype.writeUInt16BE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, i.prototype.writeUint32LE = i.prototype.writeUInt32LE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  }, i.prototype.writeUint32BE = i.prototype.writeUInt32BE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function O(n, r, t, c, F) {
    v0(r, c, F, n, t, 7);
    let R = Number(r & BigInt(4294967295));
    n[t++] = R, R = R >> 8, n[t++] = R, R = R >> 8, n[t++] = R, R = R >> 8, n[t++] = R;
    let T = Number(r >> BigInt(32) & BigInt(4294967295));
    return n[t++] = T, T = T >> 8, n[t++] = T, T = T >> 8, n[t++] = T, T = T >> 8, n[t++] = T, t;
  }
  function z(n, r, t, c, F) {
    v0(r, c, F, n, t, 7);
    let R = Number(r & BigInt(4294967295));
    n[t + 7] = R, R = R >> 8, n[t + 6] = R, R = R >> 8, n[t + 5] = R, R = R >> 8, n[t + 4] = R;
    let T = Number(r >> BigInt(32) & BigInt(4294967295));
    return n[t + 3] = T, T = T >> 8, n[t + 2] = T, T = T >> 8, n[t + 1] = T, T = T >> 8, n[t] = T, t + 8;
  }
  i.prototype.writeBigUInt64LE = h0(function(r, t = 0) {
    return O(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), i.prototype.writeBigUInt64BE = h0(function(r, t = 0) {
    return z(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), i.prototype.writeIntLE = function(r, t, c, F) {
    if (r = +r, t = t >>> 0, !F) {
      const e0 = Math.pow(2, 8 * c - 1);
      N(this, r, t, c, e0 - 1, -e0);
    }
    let R = 0, T = 1, G = 0;
    for (this[t] = r & 255; ++R < c && (T *= 256); )
      r < 0 && G === 0 && this[t + R - 1] !== 0 && (G = 1), this[t + R] = (r / T >> 0) - G & 255;
    return t + c;
  }, i.prototype.writeIntBE = function(r, t, c, F) {
    if (r = +r, t = t >>> 0, !F) {
      const e0 = Math.pow(2, 8 * c - 1);
      N(this, r, t, c, e0 - 1, -e0);
    }
    let R = c - 1, T = 1, G = 0;
    for (this[t + R] = r & 255; --R >= 0 && (T *= 256); )
      r < 0 && G === 0 && this[t + R + 1] !== 0 && (G = 1), this[t + R] = (r / T >> 0) - G & 255;
    return t + c;
  }, i.prototype.writeInt8 = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  }, i.prototype.writeInt16LE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, i.prototype.writeInt16BE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, i.prototype.writeInt32LE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  }, i.prototype.writeInt32BE = function(r, t, c) {
    return r = +r, t = t >>> 0, c || N(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  }, i.prototype.writeBigInt64LE = h0(function(r, t = 0) {
    return O(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), i.prototype.writeBigInt64BE = h0(function(r, t = 0) {
    return z(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function r0(n, r, t, c, F, R) {
    if (t + c > n.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  function J(n, r, t, c, F) {
    return r = +r, t = t >>> 0, F || r0(n, r, t, 4), a.write(n, r, t, c, 23, 4), t + 4;
  }
  i.prototype.writeFloatLE = function(r, t, c) {
    return J(this, r, t, !0, c);
  }, i.prototype.writeFloatBE = function(r, t, c) {
    return J(this, r, t, !1, c);
  };
  function c0(n, r, t, c, F) {
    return r = +r, t = t >>> 0, F || r0(n, r, t, 8), a.write(n, r, t, c, 52, 8), t + 8;
  }
  i.prototype.writeDoubleLE = function(r, t, c) {
    return c0(this, r, t, !0, c);
  }, i.prototype.writeDoubleBE = function(r, t, c) {
    return c0(this, r, t, !1, c);
  }, i.prototype.copy = function(r, t, c, F) {
    if (!i.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (c || (c = 0), !F && F !== 0 && (F = this.length), t >= r.length && (t = r.length), t || (t = 0), F > 0 && F < c && (F = c), F === c || r.length === 0 || this.length === 0) return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (c < 0 || c >= this.length) throw new RangeError("Index out of range");
    if (F < 0) throw new RangeError("sourceEnd out of bounds");
    F > this.length && (F = this.length), r.length - t < F - c && (F = r.length - t + c);
    const R = F - c;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, c, F) : Uint8Array.prototype.set.call(
      r,
      this.subarray(c, F),
      t
    ), R;
  }, i.prototype.fill = function(r, t, c, F) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (F = t, t = 0, c = this.length) : typeof c == "string" && (F = c, c = this.length), F !== void 0 && typeof F != "string")
        throw new TypeError("encoding must be a string");
      if (typeof F == "string" && !i.isEncoding(F))
        throw new TypeError("Unknown encoding: " + F);
      if (r.length === 1) {
        const T = r.charCodeAt(0);
        (F === "utf8" && T < 128 || F === "latin1") && (r = T);
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < c)
      throw new RangeError("Out of range index");
    if (c <= t)
      return this;
    t = t >>> 0, c = c === void 0 ? this.length : c >>> 0, r || (r = 0);
    let R;
    if (typeof r == "number")
      for (R = t; R < c; ++R)
        this[R] = r;
    else {
      const T = i.isBuffer(r) ? r : i.from(r, F), G = T.length;
      if (G === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (R = 0; R < c - t; ++R)
        this[R + t] = T[R % G];
    }
    return this;
  };
  const I = {};
  function p0(n, r, t) {
    I[n] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${n}]`, this.stack, delete this.name;
      }
      get code() {
        return n;
      }
      set code(F) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: F,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${n}]: ${this.message}`;
      }
    };
  }
  p0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(n) {
      return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), p0(
    "ERR_INVALID_ARG_TYPE",
    function(n, r) {
      return `The "${n}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), p0(
    "ERR_OUT_OF_RANGE",
    function(n, r, t) {
      let c = `The value of "${n}" is out of range.`, F = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? F = B0(String(t)) : typeof t == "bigint" && (F = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (F = B0(F)), F += "n"), c += ` It must be ${r}. Received ${F}`, c;
    },
    RangeError
  );
  function B0(n) {
    let r = "", t = n.length;
    const c = n[0] === "-" ? 1 : 0;
    for (; t >= c + 4; t -= 3)
      r = `_${n.slice(t - 3, t)}${r}`;
    return `${n.slice(0, t)}${r}`;
  }
  function S0(n, r, t) {
    a0(r, "offset"), (n[r] === void 0 || n[r + t] === void 0) && x0(r, n.length - (t + 1));
  }
  function v0(n, r, t, c, F, R) {
    if (n > t || n < r) {
      const T = typeof r == "bigint" ? "n" : "";
      let G;
      throw r === 0 || r === BigInt(0) ? G = `>= 0${T} and < 2${T} ** ${(R + 1) * 8}${T}` : G = `>= -(2${T} ** ${(R + 1) * 8 - 1}${T}) and < 2 ** ${(R + 1) * 8 - 1}${T}`, new I.ERR_OUT_OF_RANGE("value", G, n);
    }
    S0(c, F, R);
  }
  function a0(n, r) {
    if (typeof n != "number")
      throw new I.ERR_INVALID_ARG_TYPE(r, "number", n);
  }
  function x0(n, r, t) {
    throw Math.floor(n) !== n ? (a0(n, t), new I.ERR_OUT_OF_RANGE("offset", "an integer", n)) : r < 0 ? new I.ERR_BUFFER_OUT_OF_BOUNDS() : new I.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${r}`,
      n
    );
  }
  const m0 = /[^+/0-9A-Za-z-_]/g;
  function g0(n) {
    if (n = n.split("=")[0], n = n.trim().replace(m0, ""), n.length < 2) return "";
    for (; n.length % 4 !== 0; )
      n = n + "=";
    return n;
  }
  function A0(n, r) {
    r = r || 1 / 0;
    let t;
    const c = n.length;
    let F = null;
    const R = [];
    for (let T = 0; T < c; ++T) {
      if (t = n.charCodeAt(T), t > 55295 && t < 57344) {
        if (!F) {
          if (t > 56319) {
            (r -= 3) > -1 && R.push(239, 191, 189);
            continue;
          } else if (T + 1 === c) {
            (r -= 3) > -1 && R.push(239, 191, 189);
            continue;
          }
          F = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && R.push(239, 191, 189), F = t;
          continue;
        }
        t = (F - 55296 << 10 | t - 56320) + 65536;
      } else F && (r -= 3) > -1 && R.push(239, 191, 189);
      if (F = null, t < 128) {
        if ((r -= 1) < 0) break;
        R.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0) break;
        R.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((r -= 3) < 0) break;
        R.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((r -= 4) < 0) break;
        R.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return R;
  }
  function w0(n) {
    const r = [];
    for (let t = 0; t < n.length; ++t)
      r.push(n.charCodeAt(t) & 255);
    return r;
  }
  function H0(n, r) {
    let t, c, F;
    const R = [];
    for (let T = 0; T < n.length && !((r -= 2) < 0); ++T)
      t = n.charCodeAt(T), c = t >> 8, F = t % 256, R.push(F), R.push(c);
    return R;
  }
  function E0(n) {
    return u.toByteArray(g0(n));
  }
  function s0(n, r, t, c) {
    let F;
    for (F = 0; F < c && !(F + t >= r.length || F >= n.length); ++F)
      r[F + t] = n[F];
    return F;
  }
  function i0(n, r) {
    return n instanceof r || n != null && n.constructor != null && n.constructor.name != null && n.constructor.name === r.name;
  }
  function u0(n) {
    return n !== n;
  }
  const R0 = function() {
    const n = "0123456789abcdef", r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const c = t * 16;
      for (let F = 0; F < 16; ++F)
        r[c + F] = n[t] + n[F];
    }
    return r;
  }();
  function h0(n) {
    return typeof BigInt > "u" ? C0 : n;
  }
  function C0() {
    throw new Error("BigInt not supported");
  }
})(T0);
var yt = { exports: {} };
function $t(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var O0 = { exports: {} };
const Lt = {}, re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lt
}, Symbol.toStringTag, { value: "Module" })), te = /* @__PURE__ */ It(re);
var Pr;
function Q() {
  return Pr || (Pr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x();
    })(X, function() {
      var a = a || function(x, A) {
        var y;
        if (typeof window < "u" && window.crypto && (y = window.crypto), typeof self < "u" && self.crypto && (y = self.crypto), typeof globalThis < "u" && globalThis.crypto && (y = globalThis.crypto), !y && typeof window < "u" && window.msCrypto && (y = window.msCrypto), !y && typeof globalThis < "u" && globalThis.crypto && (y = globalThis.crypto), !y && typeof $t == "function")
          try {
            y = te;
          } catch {
          }
        var b = function() {
          if (y) {
            if (typeof y.getRandomValues == "function")
              try {
                return y.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof y.randomBytes == "function")
              try {
                return y.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, i = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(h) {
            var B;
            return l.prototype = h, B = new l(), l.prototype = null, B;
          };
        }(), E = {}, o = E.lib = {}, s = o.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(l) {
              var h = i(this);
              return l && h.mixIn(l), (!h.hasOwnProperty("init") || this.init === h.init) && (h.init = function() {
                h.$super.init.apply(this, arguments);
              }), h.init.prototype = h, h.$super = this, h;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var l = this.extend();
              return l.init.apply(l, arguments), l;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(l) {
              for (var h in l)
                l.hasOwnProperty(h) && (this[h] = l[h]);
              l.hasOwnProperty("toString") && (this.toString = l.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), g = o.WordArray = s.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(l, h) {
            l = this.words = l || [], h != A ? this.sigBytes = h : this.sigBytes = l.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(l) {
            return (l || d).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(l) {
            var h = this.words, B = l.words, D = this.sigBytes, m = l.sigBytes;
            if (this.clamp(), D % 4)
              for (var k = 0; k < m; k++) {
                var U = B[k >>> 2] >>> 24 - k % 4 * 8 & 255;
                h[D + k >>> 2] |= U << 24 - (D + k) % 4 * 8;
              }
            else
              for (var W = 0; W < m; W += 4)
                h[D + W >>> 2] = B[W >>> 2];
            return this.sigBytes += m, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, h = this.sigBytes;
            l[h >>> 2] &= 4294967295 << 32 - h % 4 * 8, l.length = x.ceil(h / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var l = s.clone.call(this);
            return l.words = this.words.slice(0), l;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(l) {
            for (var h = [], B = 0; B < l; B += 4)
              h.push(b());
            return new g.init(h, l);
          }
        }), f = E.enc = {}, d = f.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(l) {
            for (var h = l.words, B = l.sigBytes, D = [], m = 0; m < B; m++) {
              var k = h[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              D.push((k >>> 4).toString(16)), D.push((k & 15).toString(16));
            }
            return D.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(l) {
            for (var h = l.length, B = [], D = 0; D < h; D += 2)
              B[D >>> 3] |= parseInt(l.substr(D, 2), 16) << 24 - D % 8 * 4;
            return new g.init(B, h / 2);
          }
        }, p = f.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(l) {
            for (var h = l.words, B = l.sigBytes, D = [], m = 0; m < B; m++) {
              var k = h[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              D.push(String.fromCharCode(k));
            }
            return D.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(l) {
            for (var h = l.length, B = [], D = 0; D < h; D++)
              B[D >>> 2] |= (l.charCodeAt(D) & 255) << 24 - D % 4 * 8;
            return new g.init(B, h);
          }
        }, C = f.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(l) {
            try {
              return decodeURIComponent(escape(p.stringify(l)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(l) {
            return p.parse(unescape(encodeURIComponent(l)));
          }
        }, v = o.BufferedBlockAlgorithm = s.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new g.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(l) {
            typeof l == "string" && (l = C.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(l) {
            var h, B = this._data, D = B.words, m = B.sigBytes, k = this.blockSize, U = k * 4, W = m / U;
            l ? W = x.ceil(W) : W = x.max((W | 0) - this._minBufferSize, 0);
            var w = W * k, S = x.min(w * 4, m);
            if (w) {
              for (var P = 0; P < w; P += k)
                this._doProcessBlock(D, P);
              h = D.splice(0, w), B.sigBytes -= S;
            }
            return new g.init(h, S);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var l = s.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        o.Hasher = v.extend({
          /**
           * Configuration options.
           */
          cfg: s.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(l) {
            return this._append(l), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(l) {
            l && this._append(l);
            var h = this._doFinalize();
            return h;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(l) {
            return function(h, B) {
              return new l.init(B).finalize(h);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(l) {
            return function(h, B) {
              return new _.HMAC.init(l, B).finalize(h);
            };
          }
        });
        var _ = E.algo = {};
        return E;
      }(Math);
      return a;
    });
  }(O0)), O0.exports;
}
var W0 = { exports: {} }, qr;
function q0() {
  return qr || (qr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function(x) {
        var A = a, y = A.lib, b = y.Base, i = y.WordArray, E = A.x64 = {};
        E.Word = b.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(o, s) {
            this.high = o, this.low = s;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), E.WordArray = b.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(o, s) {
            o = this.words = o || [], s != x ? this.sigBytes = s : this.sigBytes = o.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var o = this.words, s = o.length, g = [], f = 0; f < s; f++) {
              var d = o[f];
              g.push(d.high), g.push(d.low);
            }
            return i.create(g, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var o = b.clone.call(this), s = o.words = this.words.slice(0), g = s.length, f = 0; f < g; f++)
              s[f] = s[f].clone();
            return o;
          }
        });
      }(), a;
    });
  }(W0)), W0.exports;
}
var M0 = { exports: {} }, zr;
function ee() {
  return zr || (zr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var x = a, A = x.lib, y = A.WordArray, b = y.init, i = y.init = function(E) {
            if (E instanceof ArrayBuffer && (E = new Uint8Array(E)), (E instanceof Int8Array || typeof Uint8ClampedArray < "u" && E instanceof Uint8ClampedArray || E instanceof Int16Array || E instanceof Uint16Array || E instanceof Int32Array || E instanceof Uint32Array || E instanceof Float32Array || E instanceof Float64Array) && (E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength)), E instanceof Uint8Array) {
              for (var o = E.byteLength, s = [], g = 0; g < o; g++)
                s[g >>> 2] |= E[g] << 24 - g % 4 * 8;
              b.call(this, s, o);
            } else
              b.apply(this, arguments);
          };
          i.prototype = y;
        }
      }(), a.lib.WordArray;
    });
  }(M0)), M0.exports;
}
var V0 = { exports: {} }, Or;
function ne() {
  return Or || (Or = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.WordArray, b = x.enc;
        b.Utf16 = b.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(E) {
            for (var o = E.words, s = E.sigBytes, g = [], f = 0; f < s; f += 2) {
              var d = o[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              g.push(String.fromCharCode(d));
            }
            return g.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(E) {
            for (var o = E.length, s = [], g = 0; g < o; g++)
              s[g >>> 1] |= E.charCodeAt(g) << 16 - g % 2 * 16;
            return y.create(s, o * 2);
          }
        }, b.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(E) {
            for (var o = E.words, s = E.sigBytes, g = [], f = 0; f < s; f += 2) {
              var d = i(o[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              g.push(String.fromCharCode(d));
            }
            return g.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(E) {
            for (var o = E.length, s = [], g = 0; g < o; g++)
              s[g >>> 1] |= i(E.charCodeAt(g) << 16 - g % 2 * 16);
            return y.create(s, o * 2);
          }
        };
        function i(E) {
          return E << 8 & 4278255360 | E >>> 8 & 16711935;
        }
      }(), a.enc.Utf16;
    });
  }(V0)), V0.exports;
}
var I0 = { exports: {} }, Wr;
function b0() {
  return Wr || (Wr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.WordArray, b = x.enc;
        b.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(E) {
            var o = E.words, s = E.sigBytes, g = this._map;
            E.clamp();
            for (var f = [], d = 0; d < s; d += 3)
              for (var p = o[d >>> 2] >>> 24 - d % 4 * 8 & 255, C = o[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, v = o[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, _ = p << 16 | C << 8 | v, l = 0; l < 4 && d + l * 0.75 < s; l++)
                f.push(g.charAt(_ >>> 6 * (3 - l) & 63));
            var h = g.charAt(64);
            if (h)
              for (; f.length % 4; )
                f.push(h);
            return f.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(E) {
            var o = E.length, s = this._map, g = this._reverseMap;
            if (!g) {
              g = this._reverseMap = [];
              for (var f = 0; f < s.length; f++)
                g[s.charCodeAt(f)] = f;
            }
            var d = s.charAt(64);
            if (d) {
              var p = E.indexOf(d);
              p !== -1 && (o = p);
            }
            return i(E, o, g);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function i(E, o, s) {
          for (var g = [], f = 0, d = 0; d < o; d++)
            if (d % 4) {
              var p = s[E.charCodeAt(d - 1)] << d % 4 * 2, C = s[E.charCodeAt(d)] >>> 6 - d % 4 * 2, v = p | C;
              g[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return y.create(g, f);
        }
      }(), a.enc.Base64;
    });
  }(I0)), I0.exports;
}
var K0 = { exports: {} }, Mr;
function ie() {
  return Mr || (Mr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.WordArray, b = x.enc;
        b.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(E, o) {
            o === void 0 && (o = !0);
            var s = E.words, g = E.sigBytes, f = o ? this._safe_map : this._map;
            E.clamp();
            for (var d = [], p = 0; p < g; p += 3)
              for (var C = s[p >>> 2] >>> 24 - p % 4 * 8 & 255, v = s[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, _ = s[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, l = C << 16 | v << 8 | _, h = 0; h < 4 && p + h * 0.75 < g; h++)
                d.push(f.charAt(l >>> 6 * (3 - h) & 63));
            var B = f.charAt(64);
            if (B)
              for (; d.length % 4; )
                d.push(B);
            return d.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(E, o) {
            o === void 0 && (o = !0);
            var s = E.length, g = o ? this._safe_map : this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var d = 0; d < g.length; d++)
                f[g.charCodeAt(d)] = d;
            }
            var p = g.charAt(64);
            if (p) {
              var C = E.indexOf(p);
              C !== -1 && (s = C);
            }
            return i(E, s, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function i(E, o, s) {
          for (var g = [], f = 0, d = 0; d < o; d++)
            if (d % 4) {
              var p = s[E.charCodeAt(d - 1)] << d % 4 * 2, C = s[E.charCodeAt(d)] >>> 6 - d % 4 * 2, v = p | C;
              g[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return y.create(g, f);
        }
      }(), a.enc.Base64url;
    });
  }(K0)), K0.exports;
}
var G0 = { exports: {} }, Vr;
function D0() {
  return Vr || (Vr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function(x) {
        var A = a, y = A.lib, b = y.WordArray, i = y.Hasher, E = A.algo, o = [];
        (function() {
          for (var C = 0; C < 64; C++)
            o[C] = x.abs(x.sin(C + 1)) * 4294967296 | 0;
        })();
        var s = E.MD5 = i.extend({
          _doReset: function() {
            this._hash = new b.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(C, v) {
            for (var _ = 0; _ < 16; _++) {
              var l = v + _, h = C[l];
              C[l] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
            }
            var B = this._hash.words, D = C[v + 0], m = C[v + 1], k = C[v + 2], U = C[v + 3], W = C[v + 4], w = C[v + 5], S = C[v + 6], P = C[v + 7], q = C[v + 8], M = C[v + 9], V = C[v + 10], K = C[v + 11], L = C[v + 12], j = C[v + 13], $ = C[v + 14], Z = C[v + 15], H = B[0], N = B[1], O = B[2], z = B[3];
            H = g(H, N, O, z, D, 7, o[0]), z = g(z, H, N, O, m, 12, o[1]), O = g(O, z, H, N, k, 17, o[2]), N = g(N, O, z, H, U, 22, o[3]), H = g(H, N, O, z, W, 7, o[4]), z = g(z, H, N, O, w, 12, o[5]), O = g(O, z, H, N, S, 17, o[6]), N = g(N, O, z, H, P, 22, o[7]), H = g(H, N, O, z, q, 7, o[8]), z = g(z, H, N, O, M, 12, o[9]), O = g(O, z, H, N, V, 17, o[10]), N = g(N, O, z, H, K, 22, o[11]), H = g(H, N, O, z, L, 7, o[12]), z = g(z, H, N, O, j, 12, o[13]), O = g(O, z, H, N, $, 17, o[14]), N = g(N, O, z, H, Z, 22, o[15]), H = f(H, N, O, z, m, 5, o[16]), z = f(z, H, N, O, S, 9, o[17]), O = f(O, z, H, N, K, 14, o[18]), N = f(N, O, z, H, D, 20, o[19]), H = f(H, N, O, z, w, 5, o[20]), z = f(z, H, N, O, V, 9, o[21]), O = f(O, z, H, N, Z, 14, o[22]), N = f(N, O, z, H, W, 20, o[23]), H = f(H, N, O, z, M, 5, o[24]), z = f(z, H, N, O, $, 9, o[25]), O = f(O, z, H, N, U, 14, o[26]), N = f(N, O, z, H, q, 20, o[27]), H = f(H, N, O, z, j, 5, o[28]), z = f(z, H, N, O, k, 9, o[29]), O = f(O, z, H, N, P, 14, o[30]), N = f(N, O, z, H, L, 20, o[31]), H = d(H, N, O, z, w, 4, o[32]), z = d(z, H, N, O, q, 11, o[33]), O = d(O, z, H, N, K, 16, o[34]), N = d(N, O, z, H, $, 23, o[35]), H = d(H, N, O, z, m, 4, o[36]), z = d(z, H, N, O, W, 11, o[37]), O = d(O, z, H, N, P, 16, o[38]), N = d(N, O, z, H, V, 23, o[39]), H = d(H, N, O, z, j, 4, o[40]), z = d(z, H, N, O, D, 11, o[41]), O = d(O, z, H, N, U, 16, o[42]), N = d(N, O, z, H, S, 23, o[43]), H = d(H, N, O, z, M, 4, o[44]), z = d(z, H, N, O, L, 11, o[45]), O = d(O, z, H, N, Z, 16, o[46]), N = d(N, O, z, H, k, 23, o[47]), H = p(H, N, O, z, D, 6, o[48]), z = p(z, H, N, O, P, 10, o[49]), O = p(O, z, H, N, $, 15, o[50]), N = p(N, O, z, H, w, 21, o[51]), H = p(H, N, O, z, L, 6, o[52]), z = p(z, H, N, O, U, 10, o[53]), O = p(O, z, H, N, V, 15, o[54]), N = p(N, O, z, H, m, 21, o[55]), H = p(H, N, O, z, q, 6, o[56]), z = p(z, H, N, O, Z, 10, o[57]), O = p(O, z, H, N, S, 15, o[58]), N = p(N, O, z, H, j, 21, o[59]), H = p(H, N, O, z, W, 6, o[60]), z = p(z, H, N, O, K, 10, o[61]), O = p(O, z, H, N, k, 15, o[62]), N = p(N, O, z, H, M, 21, o[63]), B[0] = B[0] + H | 0, B[1] = B[1] + N | 0, B[2] = B[2] + O | 0, B[3] = B[3] + z | 0;
          },
          _doFinalize: function() {
            var C = this._data, v = C.words, _ = this._nDataBytes * 8, l = C.sigBytes * 8;
            v[l >>> 5] |= 128 << 24 - l % 32;
            var h = x.floor(_ / 4294967296), B = _;
            v[(l + 64 >>> 9 << 4) + 15] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, v[(l + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, C.sigBytes = (v.length + 1) * 4, this._process();
            for (var D = this._hash, m = D.words, k = 0; k < 4; k++) {
              var U = m[k];
              m[k] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360;
            }
            return D;
          },
          clone: function() {
            var C = i.clone.call(this);
            return C._hash = this._hash.clone(), C;
          }
        });
        function g(C, v, _, l, h, B, D) {
          var m = C + (v & _ | ~v & l) + h + D;
          return (m << B | m >>> 32 - B) + v;
        }
        function f(C, v, _, l, h, B, D) {
          var m = C + (v & l | _ & ~l) + h + D;
          return (m << B | m >>> 32 - B) + v;
        }
        function d(C, v, _, l, h, B, D) {
          var m = C + (v ^ _ ^ l) + h + D;
          return (m << B | m >>> 32 - B) + v;
        }
        function p(C, v, _, l, h, B, D) {
          var m = C + (_ ^ (v | ~l)) + h + D;
          return (m << B | m >>> 32 - B) + v;
        }
        A.MD5 = i._createHelper(s), A.HmacMD5 = i._createHmacHelper(s);
      }(Math), a.MD5;
    });
  }(G0)), G0.exports;
}
var X0 = { exports: {} }, Ir;
function gt() {
  return Ir || (Ir = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.WordArray, b = A.Hasher, i = x.algo, E = [], o = i.SHA1 = b.extend({
          _doReset: function() {
            this._hash = new y.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(s, g) {
            for (var f = this._hash.words, d = f[0], p = f[1], C = f[2], v = f[3], _ = f[4], l = 0; l < 80; l++) {
              if (l < 16)
                E[l] = s[g + l] | 0;
              else {
                var h = E[l - 3] ^ E[l - 8] ^ E[l - 14] ^ E[l - 16];
                E[l] = h << 1 | h >>> 31;
              }
              var B = (d << 5 | d >>> 27) + _ + E[l];
              l < 20 ? B += (p & C | ~p & v) + 1518500249 : l < 40 ? B += (p ^ C ^ v) + 1859775393 : l < 60 ? B += (p & C | p & v | C & v) - 1894007588 : B += (p ^ C ^ v) - 899497514, _ = v, v = C, C = p << 30 | p >>> 2, p = d, d = B;
            }
            f[0] = f[0] + d | 0, f[1] = f[1] + p | 0, f[2] = f[2] + C | 0, f[3] = f[3] + v | 0, f[4] = f[4] + _ | 0;
          },
          _doFinalize: function() {
            var s = this._data, g = s.words, f = this._nDataBytes * 8, d = s.sigBytes * 8;
            return g[d >>> 5] |= 128 << 24 - d % 32, g[(d + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), g[(d + 64 >>> 9 << 4) + 15] = f, s.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var s = b.clone.call(this);
            return s._hash = this._hash.clone(), s;
          }
        });
        x.SHA1 = b._createHelper(o), x.HmacSHA1 = b._createHmacHelper(o);
      }(), a.SHA1;
    });
  }(X0)), X0.exports;
}
var Q0 = { exports: {} }, Kr;
function br() {
  return Kr || (Kr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      return function(x) {
        var A = a, y = A.lib, b = y.WordArray, i = y.Hasher, E = A.algo, o = [], s = [];
        (function() {
          function d(_) {
            for (var l = x.sqrt(_), h = 2; h <= l; h++)
              if (!(_ % h))
                return !1;
            return !0;
          }
          function p(_) {
            return (_ - (_ | 0)) * 4294967296 | 0;
          }
          for (var C = 2, v = 0; v < 64; )
            d(C) && (v < 8 && (o[v] = p(x.pow(C, 1 / 2))), s[v] = p(x.pow(C, 1 / 3)), v++), C++;
        })();
        var g = [], f = E.SHA256 = i.extend({
          _doReset: function() {
            this._hash = new b.init(o.slice(0));
          },
          _doProcessBlock: function(d, p) {
            for (var C = this._hash.words, v = C[0], _ = C[1], l = C[2], h = C[3], B = C[4], D = C[5], m = C[6], k = C[7], U = 0; U < 64; U++) {
              if (U < 16)
                g[U] = d[p + U] | 0;
              else {
                var W = g[U - 15], w = (W << 25 | W >>> 7) ^ (W << 14 | W >>> 18) ^ W >>> 3, S = g[U - 2], P = (S << 15 | S >>> 17) ^ (S << 13 | S >>> 19) ^ S >>> 10;
                g[U] = w + g[U - 7] + P + g[U - 16];
              }
              var q = B & D ^ ~B & m, M = v & _ ^ v & l ^ _ & l, V = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), K = (B << 26 | B >>> 6) ^ (B << 21 | B >>> 11) ^ (B << 7 | B >>> 25), L = k + K + q + s[U] + g[U], j = V + M;
              k = m, m = D, D = B, B = h + L | 0, h = l, l = _, _ = v, v = L + j | 0;
            }
            C[0] = C[0] + v | 0, C[1] = C[1] + _ | 0, C[2] = C[2] + l | 0, C[3] = C[3] + h | 0, C[4] = C[4] + B | 0, C[5] = C[5] + D | 0, C[6] = C[6] + m | 0, C[7] = C[7] + k | 0;
          },
          _doFinalize: function() {
            var d = this._data, p = d.words, C = this._nDataBytes * 8, v = d.sigBytes * 8;
            return p[v >>> 5] |= 128 << 24 - v % 32, p[(v + 64 >>> 9 << 4) + 14] = x.floor(C / 4294967296), p[(v + 64 >>> 9 << 4) + 15] = C, d.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var d = i.clone.call(this);
            return d._hash = this._hash.clone(), d;
          }
        });
        A.SHA256 = i._createHelper(f), A.HmacSHA256 = i._createHmacHelper(f);
      }(Math), a.SHA256;
    });
  }(Q0)), Q0.exports;
}
var j0 = { exports: {} }, Gr;
function xe() {
  return Gr || (Gr = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), br());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.WordArray, b = x.algo, i = b.SHA256, E = b.SHA224 = i.extend({
          _doReset: function() {
            this._hash = new y.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var o = i._doFinalize.call(this);
            return o.sigBytes -= 4, o;
          }
        });
        x.SHA224 = i._createHelper(E), x.HmacSHA224 = i._createHmacHelper(E);
      }(), a.SHA224;
    });
  }(j0)), j0.exports;
}
var Z0 = { exports: {} }, Xr;
function wt() {
  return Xr || (Xr = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), q0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.Hasher, b = x.x64, i = b.Word, E = b.WordArray, o = x.algo;
        function s() {
          return i.create.apply(i, arguments);
        }
        var g = [
          s(1116352408, 3609767458),
          s(1899447441, 602891725),
          s(3049323471, 3964484399),
          s(3921009573, 2173295548),
          s(961987163, 4081628472),
          s(1508970993, 3053834265),
          s(2453635748, 2937671579),
          s(2870763221, 3664609560),
          s(3624381080, 2734883394),
          s(310598401, 1164996542),
          s(607225278, 1323610764),
          s(1426881987, 3590304994),
          s(1925078388, 4068182383),
          s(2162078206, 991336113),
          s(2614888103, 633803317),
          s(3248222580, 3479774868),
          s(3835390401, 2666613458),
          s(4022224774, 944711139),
          s(264347078, 2341262773),
          s(604807628, 2007800933),
          s(770255983, 1495990901),
          s(1249150122, 1856431235),
          s(1555081692, 3175218132),
          s(1996064986, 2198950837),
          s(2554220882, 3999719339),
          s(2821834349, 766784016),
          s(2952996808, 2566594879),
          s(3210313671, 3203337956),
          s(3336571891, 1034457026),
          s(3584528711, 2466948901),
          s(113926993, 3758326383),
          s(338241895, 168717936),
          s(666307205, 1188179964),
          s(773529912, 1546045734),
          s(1294757372, 1522805485),
          s(1396182291, 2643833823),
          s(1695183700, 2343527390),
          s(1986661051, 1014477480),
          s(2177026350, 1206759142),
          s(2456956037, 344077627),
          s(2730485921, 1290863460),
          s(2820302411, 3158454273),
          s(3259730800, 3505952657),
          s(3345764771, 106217008),
          s(3516065817, 3606008344),
          s(3600352804, 1432725776),
          s(4094571909, 1467031594),
          s(275423344, 851169720),
          s(430227734, 3100823752),
          s(506948616, 1363258195),
          s(659060556, 3750685593),
          s(883997877, 3785050280),
          s(958139571, 3318307427),
          s(1322822218, 3812723403),
          s(1537002063, 2003034995),
          s(1747873779, 3602036899),
          s(1955562222, 1575990012),
          s(2024104815, 1125592928),
          s(2227730452, 2716904306),
          s(2361852424, 442776044),
          s(2428436474, 593698344),
          s(2756734187, 3733110249),
          s(3204031479, 2999351573),
          s(3329325298, 3815920427),
          s(3391569614, 3928383900),
          s(3515267271, 566280711),
          s(3940187606, 3454069534),
          s(4118630271, 4000239992),
          s(116418474, 1914138554),
          s(174292421, 2731055270),
          s(289380356, 3203993006),
          s(460393269, 320620315),
          s(685471733, 587496836),
          s(852142971, 1086792851),
          s(1017036298, 365543100),
          s(1126000580, 2618297676),
          s(1288033470, 3409855158),
          s(1501505948, 4234509866),
          s(1607167915, 987167468),
          s(1816402316, 1246189591)
        ], f = [];
        (function() {
          for (var p = 0; p < 80; p++)
            f[p] = s();
        })();
        var d = o.SHA512 = y.extend({
          _doReset: function() {
            this._hash = new E.init([
              new i.init(1779033703, 4089235720),
              new i.init(3144134277, 2227873595),
              new i.init(1013904242, 4271175723),
              new i.init(2773480762, 1595750129),
              new i.init(1359893119, 2917565137),
              new i.init(2600822924, 725511199),
              new i.init(528734635, 4215389547),
              new i.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(p, C) {
            for (var v = this._hash.words, _ = v[0], l = v[1], h = v[2], B = v[3], D = v[4], m = v[5], k = v[6], U = v[7], W = _.high, w = _.low, S = l.high, P = l.low, q = h.high, M = h.low, V = B.high, K = B.low, L = D.high, j = D.low, $ = m.high, Z = m.low, H = k.high, N = k.low, O = U.high, z = U.low, r0 = W, J = w, c0 = S, I = P, p0 = q, B0 = M, S0 = V, v0 = K, a0 = L, x0 = j, m0 = $, g0 = Z, A0 = H, w0 = N, H0 = O, E0 = z, s0 = 0; s0 < 80; s0++) {
              var i0, u0, R0 = f[s0];
              if (s0 < 16)
                u0 = R0.high = p[C + s0 * 2] | 0, i0 = R0.low = p[C + s0 * 2 + 1] | 0;
              else {
                var h0 = f[s0 - 15], C0 = h0.high, n = h0.low, r = (C0 >>> 1 | n << 31) ^ (C0 >>> 8 | n << 24) ^ C0 >>> 7, t = (n >>> 1 | C0 << 31) ^ (n >>> 8 | C0 << 24) ^ (n >>> 7 | C0 << 25), c = f[s0 - 2], F = c.high, R = c.low, T = (F >>> 19 | R << 13) ^ (F << 3 | R >>> 29) ^ F >>> 6, G = (R >>> 19 | F << 13) ^ (R << 3 | F >>> 29) ^ (R >>> 6 | F << 26), e0 = f[s0 - 7], t0 = e0.high, n0 = e0.low, Y = f[s0 - 16], mt = Y.high, Rr = Y.low;
                i0 = t + n0, u0 = r + t0 + (i0 >>> 0 < t >>> 0 ? 1 : 0), i0 = i0 + G, u0 = u0 + T + (i0 >>> 0 < G >>> 0 ? 1 : 0), i0 = i0 + Rr, u0 = u0 + mt + (i0 >>> 0 < Rr >>> 0 ? 1 : 0), R0.high = u0, R0.low = i0;
              }
              var Rt = a0 & m0 ^ ~a0 & A0, kr = x0 & g0 ^ ~x0 & w0, kt = r0 & c0 ^ r0 & p0 ^ c0 & p0, St = J & I ^ J & B0 ^ I & B0, Ht = (r0 >>> 28 | J << 4) ^ (r0 << 30 | J >>> 2) ^ (r0 << 25 | J >>> 7), Sr = (J >>> 28 | r0 << 4) ^ (J << 30 | r0 >>> 2) ^ (J << 25 | r0 >>> 7), Ut = (a0 >>> 14 | x0 << 18) ^ (a0 >>> 18 | x0 << 14) ^ (a0 << 23 | x0 >>> 9), Tt = (x0 >>> 14 | a0 << 18) ^ (x0 >>> 18 | a0 << 14) ^ (x0 << 23 | a0 >>> 9), Hr = g[s0], Nt = Hr.high, Ur = Hr.low, f0 = E0 + Tt, F0 = H0 + Ut + (f0 >>> 0 < E0 >>> 0 ? 1 : 0), f0 = f0 + kr, F0 = F0 + Rt + (f0 >>> 0 < kr >>> 0 ? 1 : 0), f0 = f0 + Ur, F0 = F0 + Nt + (f0 >>> 0 < Ur >>> 0 ? 1 : 0), f0 = f0 + i0, F0 = F0 + u0 + (f0 >>> 0 < i0 >>> 0 ? 1 : 0), Tr = Sr + St, Pt = Ht + kt + (Tr >>> 0 < Sr >>> 0 ? 1 : 0);
              H0 = A0, E0 = w0, A0 = m0, w0 = g0, m0 = a0, g0 = x0, x0 = v0 + f0 | 0, a0 = S0 + F0 + (x0 >>> 0 < v0 >>> 0 ? 1 : 0) | 0, S0 = p0, v0 = B0, p0 = c0, B0 = I, c0 = r0, I = J, J = f0 + Tr | 0, r0 = F0 + Pt + (J >>> 0 < f0 >>> 0 ? 1 : 0) | 0;
            }
            w = _.low = w + J, _.high = W + r0 + (w >>> 0 < J >>> 0 ? 1 : 0), P = l.low = P + I, l.high = S + c0 + (P >>> 0 < I >>> 0 ? 1 : 0), M = h.low = M + B0, h.high = q + p0 + (M >>> 0 < B0 >>> 0 ? 1 : 0), K = B.low = K + v0, B.high = V + S0 + (K >>> 0 < v0 >>> 0 ? 1 : 0), j = D.low = j + x0, D.high = L + a0 + (j >>> 0 < x0 >>> 0 ? 1 : 0), Z = m.low = Z + g0, m.high = $ + m0 + (Z >>> 0 < g0 >>> 0 ? 1 : 0), N = k.low = N + w0, k.high = H + A0 + (N >>> 0 < w0 >>> 0 ? 1 : 0), z = U.low = z + E0, U.high = O + H0 + (z >>> 0 < E0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, C = p.words, v = this._nDataBytes * 8, _ = p.sigBytes * 8;
            C[_ >>> 5] |= 128 << 24 - _ % 32, C[(_ + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), C[(_ + 128 >>> 10 << 5) + 31] = v, p.sigBytes = C.length * 4, this._process();
            var l = this._hash.toX32();
            return l;
          },
          clone: function() {
            var p = y.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        x.SHA512 = y._createHelper(d), x.HmacSHA512 = y._createHmacHelper(d);
      }(), a.SHA512;
    });
  }(Z0)), Z0.exports;
}
var Y0 = { exports: {} }, Qr;
function ae() {
  return Qr || (Qr = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), q0(), wt());
    })(X, function(a) {
      return function() {
        var x = a, A = x.x64, y = A.Word, b = A.WordArray, i = x.algo, E = i.SHA512, o = i.SHA384 = E.extend({
          _doReset: function() {
            this._hash = new b.init([
              new y.init(3418070365, 3238371032),
              new y.init(1654270250, 914150663),
              new y.init(2438529370, 812702999),
              new y.init(355462360, 4144912697),
              new y.init(1731405415, 4290775857),
              new y.init(2394180231, 1750603025),
              new y.init(3675008525, 1694076839),
              new y.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var s = E._doFinalize.call(this);
            return s.sigBytes -= 16, s;
          }
        });
        x.SHA384 = E._createHelper(o), x.HmacSHA384 = E._createHmacHelper(o);
      }(), a.SHA384;
    });
  }(Y0)), Y0.exports;
}
var J0 = { exports: {} }, jr;
function oe() {
  return jr || (jr = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), q0());
    })(X, function(a) {
      return function(x) {
        var A = a, y = A.lib, b = y.WordArray, i = y.Hasher, E = A.x64, o = E.Word, s = A.algo, g = [], f = [], d = [];
        (function() {
          for (var v = 1, _ = 0, l = 0; l < 24; l++) {
            g[v + 5 * _] = (l + 1) * (l + 2) / 2 % 64;
            var h = _ % 5, B = (2 * v + 3 * _) % 5;
            v = h, _ = B;
          }
          for (var v = 0; v < 5; v++)
            for (var _ = 0; _ < 5; _++)
              f[v + 5 * _] = _ + (2 * v + 3 * _) % 5 * 5;
          for (var D = 1, m = 0; m < 24; m++) {
            for (var k = 0, U = 0, W = 0; W < 7; W++) {
              if (D & 1) {
                var w = (1 << W) - 1;
                w < 32 ? U ^= 1 << w : k ^= 1 << w - 32;
              }
              D & 128 ? D = D << 1 ^ 113 : D <<= 1;
            }
            d[m] = o.create(k, U);
          }
        })();
        var p = [];
        (function() {
          for (var v = 0; v < 25; v++)
            p[v] = o.create();
        })();
        var C = s.SHA3 = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: i.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], _ = 0; _ < 25; _++)
              v[_] = new o.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, _) {
            for (var l = this._state, h = this.blockSize / 2, B = 0; B < h; B++) {
              var D = v[_ + 2 * B], m = v[_ + 2 * B + 1];
              D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360;
              var k = l[B];
              k.high ^= m, k.low ^= D;
            }
            for (var U = 0; U < 24; U++) {
              for (var W = 0; W < 5; W++) {
                for (var w = 0, S = 0, P = 0; P < 5; P++) {
                  var k = l[W + 5 * P];
                  w ^= k.high, S ^= k.low;
                }
                var q = p[W];
                q.high = w, q.low = S;
              }
              for (var W = 0; W < 5; W++)
                for (var M = p[(W + 4) % 5], V = p[(W + 1) % 5], K = V.high, L = V.low, w = M.high ^ (K << 1 | L >>> 31), S = M.low ^ (L << 1 | K >>> 31), P = 0; P < 5; P++) {
                  var k = l[W + 5 * P];
                  k.high ^= w, k.low ^= S;
                }
              for (var j = 1; j < 25; j++) {
                var w, S, k = l[j], $ = k.high, Z = k.low, H = g[j];
                H < 32 ? (w = $ << H | Z >>> 32 - H, S = Z << H | $ >>> 32 - H) : (w = Z << H - 32 | $ >>> 64 - H, S = $ << H - 32 | Z >>> 64 - H);
                var N = p[f[j]];
                N.high = w, N.low = S;
              }
              var O = p[0], z = l[0];
              O.high = z.high, O.low = z.low;
              for (var W = 0; W < 5; W++)
                for (var P = 0; P < 5; P++) {
                  var j = W + 5 * P, k = l[j], r0 = p[j], J = p[(W + 1) % 5 + 5 * P], c0 = p[(W + 2) % 5 + 5 * P];
                  k.high = r0.high ^ ~J.high & c0.high, k.low = r0.low ^ ~J.low & c0.low;
                }
              var k = l[0], I = d[U];
              k.high ^= I.high, k.low ^= I.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, _ = v.words;
            this._nDataBytes * 8;
            var l = v.sigBytes * 8, h = this.blockSize * 32;
            _[l >>> 5] |= 1 << 24 - l % 32, _[(x.ceil((l + 1) / h) * h >>> 5) - 1] |= 128, v.sigBytes = _.length * 4, this._process();
            for (var B = this._state, D = this.cfg.outputLength / 8, m = D / 8, k = [], U = 0; U < m; U++) {
              var W = B[U], w = W.high, S = W.low;
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, k.push(S), k.push(w);
            }
            return new b.init(k, D);
          },
          clone: function() {
            for (var v = i.clone.call(this), _ = v._state = this._state.slice(0), l = 0; l < 25; l++)
              _[l] = _[l].clone();
            return v;
          }
        });
        A.SHA3 = i._createHelper(C), A.HmacSHA3 = i._createHmacHelper(C);
      }(Math), a.SHA3;
    });
  }(J0)), J0.exports;
}
var $0 = { exports: {} }, Zr;
function ce() {
  return Zr || (Zr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(x) {
        var A = a, y = A.lib, b = y.WordArray, i = y.Hasher, E = A.algo, o = b.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), s = b.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), g = b.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), f = b.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), d = b.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = b.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), C = E.RIPEMD160 = i.extend({
          _doReset: function() {
            this._hash = b.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(m, k) {
            for (var U = 0; U < 16; U++) {
              var W = k + U, w = m[W];
              m[W] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            var S = this._hash.words, P = d.words, q = p.words, M = o.words, V = s.words, K = g.words, L = f.words, j, $, Z, H, N, O, z, r0, J, c0;
            O = j = S[0], z = $ = S[1], r0 = Z = S[2], J = H = S[3], c0 = N = S[4];
            for (var I, U = 0; U < 80; U += 1)
              I = j + m[k + M[U]] | 0, U < 16 ? I += v($, Z, H) + P[0] : U < 32 ? I += _($, Z, H) + P[1] : U < 48 ? I += l($, Z, H) + P[2] : U < 64 ? I += h($, Z, H) + P[3] : I += B($, Z, H) + P[4], I = I | 0, I = D(I, K[U]), I = I + N | 0, j = N, N = H, H = D(Z, 10), Z = $, $ = I, I = O + m[k + V[U]] | 0, U < 16 ? I += B(z, r0, J) + q[0] : U < 32 ? I += h(z, r0, J) + q[1] : U < 48 ? I += l(z, r0, J) + q[2] : U < 64 ? I += _(z, r0, J) + q[3] : I += v(z, r0, J) + q[4], I = I | 0, I = D(I, L[U]), I = I + c0 | 0, O = c0, c0 = J, J = D(r0, 10), r0 = z, z = I;
            I = S[1] + Z + J | 0, S[1] = S[2] + H + c0 | 0, S[2] = S[3] + N + O | 0, S[3] = S[4] + j + z | 0, S[4] = S[0] + $ + r0 | 0, S[0] = I;
          },
          _doFinalize: function() {
            var m = this._data, k = m.words, U = this._nDataBytes * 8, W = m.sigBytes * 8;
            k[W >>> 5] |= 128 << 24 - W % 32, k[(W + 64 >>> 9 << 4) + 14] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360, m.sigBytes = (k.length + 1) * 4, this._process();
            for (var w = this._hash, S = w.words, P = 0; P < 5; P++) {
              var q = S[P];
              S[P] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function() {
            var m = i.clone.call(this);
            return m._hash = this._hash.clone(), m;
          }
        });
        function v(m, k, U) {
          return m ^ k ^ U;
        }
        function _(m, k, U) {
          return m & k | ~m & U;
        }
        function l(m, k, U) {
          return (m | ~k) ^ U;
        }
        function h(m, k, U) {
          return m & U | k & ~U;
        }
        function B(m, k, U) {
          return m ^ (k | ~U);
        }
        function D(m, k) {
          return m << k | m >>> 32 - k;
        }
        A.RIPEMD160 = i._createHelper(C), A.HmacRIPEMD160 = i._createHmacHelper(C);
      }(), a.RIPEMD160;
    });
  }($0)), $0.exports;
}
var L0 = { exports: {} }, Yr;
function Dr() {
  return Yr || (Yr = 1, function(e, u) {
    (function(a, x) {
      e.exports = x(Q());
    })(X, function(a) {
      (function() {
        var x = a, A = x.lib, y = A.Base, b = x.enc, i = b.Utf8, E = x.algo;
        E.HMAC = y.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(o, s) {
            o = this._hasher = new o.init(), typeof s == "string" && (s = i.parse(s));
            var g = o.blockSize, f = g * 4;
            s.sigBytes > f && (s = o.finalize(s)), s.clamp();
            for (var d = this._oKey = s.clone(), p = this._iKey = s.clone(), C = d.words, v = p.words, _ = 0; _ < g; _++)
              C[_] ^= 1549556828, v[_] ^= 909522486;
            d.sigBytes = p.sigBytes = f, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var o = this._hasher;
            o.reset(), o.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(o) {
            return this._hasher.update(o), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(o) {
            var s = this._hasher, g = s.finalize(o);
            s.reset();
            var f = s.finalize(this._oKey.clone().concat(g));
            return f;
          }
        });
      })();
    });
  }(L0)), L0.exports;
}
var rr = { exports: {} }, Jr;
function se() {
  return Jr || (Jr = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), br(), Dr());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.Base, b = A.WordArray, i = x.algo, E = i.SHA256, o = i.HMAC, s = i.PBKDF2 = y.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: y.extend({
            keySize: 128 / 32,
            hasher: E,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(g) {
            this.cfg = this.cfg.extend(g);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(g, f) {
            for (var d = this.cfg, p = o.create(d.hasher, g), C = b.create(), v = b.create([1]), _ = C.words, l = v.words, h = d.keySize, B = d.iterations; _.length < h; ) {
              var D = p.update(f).finalize(v);
              p.reset();
              for (var m = D.words, k = m.length, U = D, W = 1; W < B; W++) {
                U = p.finalize(U), p.reset();
                for (var w = U.words, S = 0; S < k; S++)
                  m[S] ^= w[S];
              }
              C.concat(D), l[0]++;
            }
            return C.sigBytes = h * 4, C;
          }
        });
        x.PBKDF2 = function(g, f, d) {
          return s.create(d).compute(g, f);
        };
      }(), a.PBKDF2;
    });
  }(rr)), rr.exports;
}
var tr = { exports: {} }, $r;
function y0() {
  return $r || ($r = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), gt(), Dr());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.Base, b = A.WordArray, i = x.algo, E = i.MD5, o = i.EvpKDF = y.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: y.extend({
            keySize: 128 / 32,
            hasher: E,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(s) {
            this.cfg = this.cfg.extend(s);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(s, g) {
            for (var f, d = this.cfg, p = d.hasher.create(), C = b.create(), v = C.words, _ = d.keySize, l = d.iterations; v.length < _; ) {
              f && p.update(f), f = p.update(s).finalize(g), p.reset();
              for (var h = 1; h < l; h++)
                f = p.finalize(f), p.reset();
              C.concat(f);
            }
            return C.sigBytes = _ * 4, C;
          }
        });
        x.EvpKDF = function(s, g, f) {
          return o.create(f).compute(s, g);
        };
      }(), a.EvpKDF;
    });
  }(tr)), tr.exports;
}
var er = { exports: {} }, Lr;
function o0() {
  return Lr || (Lr = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), y0());
    })(X, function(a) {
      a.lib.Cipher || function(x) {
        var A = a, y = A.lib, b = y.Base, i = y.WordArray, E = y.BufferedBlockAlgorithm, o = A.enc;
        o.Utf8;
        var s = o.Base64, g = A.algo, f = g.EvpKDF, d = y.Cipher = E.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: b.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(w, S) {
            return this.create(this._ENC_XFORM_MODE, w, S);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(w, S) {
            return this.create(this._DEC_XFORM_MODE, w, S);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(w, S, P) {
            this.cfg = this.cfg.extend(P), this._xformMode = w, this._key = S, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            E.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(w) {
            return this._append(w), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(w) {
            w && this._append(w);
            var S = this._doFinalize();
            return S;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function w(S) {
              return typeof S == "string" ? W : m;
            }
            return function(S) {
              return {
                encrypt: function(P, q, M) {
                  return w(q).encrypt(S, P, q, M);
                },
                decrypt: function(P, q, M) {
                  return w(q).decrypt(S, P, q, M);
                }
              };
            };
          }()
        });
        y.StreamCipher = d.extend({
          _doFinalize: function() {
            var w = this._process(!0);
            return w;
          },
          blockSize: 1
        });
        var p = A.mode = {}, C = y.BlockCipherMode = b.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(w, S) {
            return this.Encryptor.create(w, S);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(w, S) {
            return this.Decryptor.create(w, S);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(w, S) {
            this._cipher = w, this._iv = S;
          }
        }), v = p.CBC = function() {
          var w = C.extend();
          w.Encryptor = w.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(P, q) {
              var M = this._cipher, V = M.blockSize;
              S.call(this, P, q, V), M.encryptBlock(P, q), this._prevBlock = P.slice(q, q + V);
            }
          }), w.Decryptor = w.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(P, q) {
              var M = this._cipher, V = M.blockSize, K = P.slice(q, q + V);
              M.decryptBlock(P, q), S.call(this, P, q, V), this._prevBlock = K;
            }
          });
          function S(P, q, M) {
            var V, K = this._iv;
            K ? (V = K, this._iv = x) : V = this._prevBlock;
            for (var L = 0; L < M; L++)
              P[q + L] ^= V[L];
          }
          return w;
        }(), _ = A.pad = {}, l = _.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(w, S) {
            for (var P = S * 4, q = P - w.sigBytes % P, M = q << 24 | q << 16 | q << 8 | q, V = [], K = 0; K < q; K += 4)
              V.push(M);
            var L = i.create(V, q);
            w.concat(L);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(w) {
            var S = w.words[w.sigBytes - 1 >>> 2] & 255;
            w.sigBytes -= S;
          }
        };
        y.BlockCipher = d.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: d.cfg.extend({
            mode: v,
            padding: l
          }),
          reset: function() {
            var w;
            d.reset.call(this);
            var S = this.cfg, P = S.iv, q = S.mode;
            this._xformMode == this._ENC_XFORM_MODE ? w = q.createEncryptor : (w = q.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == w ? this._mode.init(this, P && P.words) : (this._mode = w.call(q, this, P && P.words), this._mode.__creator = w);
          },
          _doProcessBlock: function(w, S) {
            this._mode.processBlock(w, S);
          },
          _doFinalize: function() {
            var w, S = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (S.pad(this._data, this.blockSize), w = this._process(!0)) : (w = this._process(!0), S.unpad(w)), w;
          },
          blockSize: 128 / 32
        });
        var h = y.CipherParams = b.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(w) {
            this.mixIn(w);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(w) {
            return (w || this.formatter).stringify(this);
          }
        }), B = A.format = {}, D = B.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(w) {
            var S, P = w.ciphertext, q = w.salt;
            return q ? S = i.create([1398893684, 1701076831]).concat(q).concat(P) : S = P, S.toString(s);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(w) {
            var S, P = s.parse(w), q = P.words;
            return q[0] == 1398893684 && q[1] == 1701076831 && (S = i.create(q.slice(2, 4)), q.splice(0, 4), P.sigBytes -= 16), h.create({ ciphertext: P, salt: S });
          }
        }, m = y.SerializableCipher = b.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: b.extend({
            format: D
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(w, S, P, q) {
            q = this.cfg.extend(q);
            var M = w.createEncryptor(P, q), V = M.finalize(S), K = M.cfg;
            return h.create({
              ciphertext: V,
              key: P,
              iv: K.iv,
              algorithm: w,
              mode: K.mode,
              padding: K.padding,
              blockSize: w.blockSize,
              formatter: q.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(w, S, P, q) {
            q = this.cfg.extend(q), S = this._parse(S, q.format);
            var M = w.createDecryptor(P, q).finalize(S.ciphertext);
            return M;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(w, S) {
            return typeof w == "string" ? S.parse(w, this) : w;
          }
        }), k = A.kdf = {}, U = k.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(w, S, P, q, M) {
            if (q || (q = i.random(64 / 8)), M)
              var V = f.create({ keySize: S + P, hasher: M }).compute(w, q);
            else
              var V = f.create({ keySize: S + P }).compute(w, q);
            var K = i.create(V.words.slice(S), P * 4);
            return V.sigBytes = S * 4, h.create({ key: V, iv: K, salt: q });
          }
        }, W = y.PasswordBasedCipher = m.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: m.cfg.extend({
            kdf: U
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(w, S, P, q) {
            q = this.cfg.extend(q);
            var M = q.kdf.execute(P, w.keySize, w.ivSize, q.salt, q.hasher);
            q.iv = M.iv;
            var V = m.encrypt.call(this, w, S, M.key, q);
            return V.mixIn(M), V;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(w, S, P, q) {
            q = this.cfg.extend(q), S = this._parse(S, q.format);
            var M = q.kdf.execute(P, w.keySize, w.ivSize, S.salt, q.hasher);
            q.iv = M.iv;
            var V = m.decrypt.call(this, w, S, M.key, q);
            return V;
          }
        });
      }();
    });
  }(er)), er.exports;
}
var nr = { exports: {} }, rt;
function fe() {
  return rt || (rt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.mode.CFB = function() {
        var x = a.lib.BlockCipherMode.extend();
        x.Encryptor = x.extend({
          processBlock: function(y, b) {
            var i = this._cipher, E = i.blockSize;
            A.call(this, y, b, E, i), this._prevBlock = y.slice(b, b + E);
          }
        }), x.Decryptor = x.extend({
          processBlock: function(y, b) {
            var i = this._cipher, E = i.blockSize, o = y.slice(b, b + E);
            A.call(this, y, b, E, i), this._prevBlock = o;
          }
        });
        function A(y, b, i, E) {
          var o, s = this._iv;
          s ? (o = s.slice(0), this._iv = void 0) : o = this._prevBlock, E.encryptBlock(o, 0);
          for (var g = 0; g < i; g++)
            y[b + g] ^= o[g];
        }
        return x;
      }(), a.mode.CFB;
    });
  }(nr)), nr.exports;
}
var ir = { exports: {} }, tt;
function ue() {
  return tt || (tt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.mode.CTR = function() {
        var x = a.lib.BlockCipherMode.extend(), A = x.Encryptor = x.extend({
          processBlock: function(y, b) {
            var i = this._cipher, E = i.blockSize, o = this._iv, s = this._counter;
            o && (s = this._counter = o.slice(0), this._iv = void 0);
            var g = s.slice(0);
            i.encryptBlock(g, 0), s[E - 1] = s[E - 1] + 1 | 0;
            for (var f = 0; f < E; f++)
              y[b + f] ^= g[f];
          }
        });
        return x.Decryptor = A, x;
      }(), a.mode.CTR;
    });
  }(ir)), ir.exports;
}
var xr = { exports: {} }, et;
function le() {
  return et || (et = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return a.mode.CTRGladman = function() {
        var x = a.lib.BlockCipherMode.extend();
        function A(i) {
          if ((i >> 24 & 255) === 255) {
            var E = i >> 16 & 255, o = i >> 8 & 255, s = i & 255;
            E === 255 ? (E = 0, o === 255 ? (o = 0, s === 255 ? s = 0 : ++s) : ++o) : ++E, i = 0, i += E << 16, i += o << 8, i += s;
          } else
            i += 1 << 24;
          return i;
        }
        function y(i) {
          return (i[0] = A(i[0])) === 0 && (i[1] = A(i[1])), i;
        }
        var b = x.Encryptor = x.extend({
          processBlock: function(i, E) {
            var o = this._cipher, s = o.blockSize, g = this._iv, f = this._counter;
            g && (f = this._counter = g.slice(0), this._iv = void 0), y(f);
            var d = f.slice(0);
            o.encryptBlock(d, 0);
            for (var p = 0; p < s; p++)
              i[E + p] ^= d[p];
          }
        });
        return x.Decryptor = b, x;
      }(), a.mode.CTRGladman;
    });
  }(xr)), xr.exports;
}
var ar = { exports: {} }, nt;
function he() {
  return nt || (nt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.mode.OFB = function() {
        var x = a.lib.BlockCipherMode.extend(), A = x.Encryptor = x.extend({
          processBlock: function(y, b) {
            var i = this._cipher, E = i.blockSize, o = this._iv, s = this._keystream;
            o && (s = this._keystream = o.slice(0), this._iv = void 0), i.encryptBlock(s, 0);
            for (var g = 0; g < E; g++)
              y[b + g] ^= s[g];
          }
        });
        return x.Decryptor = A, x;
      }(), a.mode.OFB;
    });
  }(ar)), ar.exports;
}
var or = { exports: {} }, it;
function de() {
  return it || (it = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.mode.ECB = function() {
        var x = a.lib.BlockCipherMode.extend();
        return x.Encryptor = x.extend({
          processBlock: function(A, y) {
            this._cipher.encryptBlock(A, y);
          }
        }), x.Decryptor = x.extend({
          processBlock: function(A, y) {
            this._cipher.decryptBlock(A, y);
          }
        }), x;
      }(), a.mode.ECB;
    });
  }(or)), or.exports;
}
var cr = { exports: {} }, xt;
function pe() {
  return xt || (xt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.pad.AnsiX923 = {
        pad: function(x, A) {
          var y = x.sigBytes, b = A * 4, i = b - y % b, E = y + i - 1;
          x.clamp(), x.words[E >>> 2] |= i << 24 - E % 4 * 8, x.sigBytes += i;
        },
        unpad: function(x) {
          var A = x.words[x.sigBytes - 1 >>> 2] & 255;
          x.sigBytes -= A;
        }
      }, a.pad.Ansix923;
    });
  }(cr)), cr.exports;
}
var sr = { exports: {} }, at;
function Be() {
  return at || (at = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.pad.Iso10126 = {
        pad: function(x, A) {
          var y = A * 4, b = y - x.sigBytes % y;
          x.concat(a.lib.WordArray.random(b - 1)).concat(a.lib.WordArray.create([b << 24], 1));
        },
        unpad: function(x) {
          var A = x.words[x.sigBytes - 1 >>> 2] & 255;
          x.sigBytes -= A;
        }
      }, a.pad.Iso10126;
    });
  }(sr)), sr.exports;
}
var fr = { exports: {} }, ot;
function ve() {
  return ot || (ot = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.pad.Iso97971 = {
        pad: function(x, A) {
          x.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(x, A);
        },
        unpad: function(x) {
          a.pad.ZeroPadding.unpad(x), x.sigBytes--;
        }
      }, a.pad.Iso97971;
    });
  }(fr)), fr.exports;
}
var ur = { exports: {} }, ct;
function Ae() {
  return ct || (ct = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.pad.ZeroPadding = {
        pad: function(x, A) {
          var y = A * 4;
          x.clamp(), x.sigBytes += y - (x.sigBytes % y || y);
        },
        unpad: function(x) {
          for (var A = x.words, y = x.sigBytes - 1, y = x.sigBytes - 1; y >= 0; y--)
            if (A[y >>> 2] >>> 24 - y % 4 * 8 & 255) {
              x.sigBytes = y + 1;
              break;
            }
        }
      }, a.pad.ZeroPadding;
    });
  }(ur)), ur.exports;
}
var lr = { exports: {} }, st;
function Ee() {
  return st || (st = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return a.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, a.pad.NoPadding;
    });
  }(lr)), lr.exports;
}
var hr = { exports: {} }, ft;
function Ce() {
  return ft || (ft = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), o0());
    })(X, function(a) {
      return function(x) {
        var A = a, y = A.lib, b = y.CipherParams, i = A.enc, E = i.Hex, o = A.format;
        o.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(s) {
            return s.ciphertext.toString(E);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(s) {
            var g = E.parse(s);
            return b.create({ ciphertext: g });
          }
        };
      }(), a.format.Hex;
    });
  }(hr)), hr.exports;
}
var dr = { exports: {} }, ut;
function Fe() {
  return ut || (ut = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), b0(), D0(), y0(), o0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.BlockCipher, b = x.algo, i = [], E = [], o = [], s = [], g = [], f = [], d = [], p = [], C = [], v = [];
        (function() {
          for (var h = [], B = 0; B < 256; B++)
            B < 128 ? h[B] = B << 1 : h[B] = B << 1 ^ 283;
          for (var D = 0, m = 0, B = 0; B < 256; B++) {
            var k = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
            k = k >>> 8 ^ k & 255 ^ 99, i[D] = k, E[k] = D;
            var U = h[D], W = h[U], w = h[W], S = h[k] * 257 ^ k * 16843008;
            o[D] = S << 24 | S >>> 8, s[D] = S << 16 | S >>> 16, g[D] = S << 8 | S >>> 24, f[D] = S;
            var S = w * 16843009 ^ W * 65537 ^ U * 257 ^ D * 16843008;
            d[k] = S << 24 | S >>> 8, p[k] = S << 16 | S >>> 16, C[k] = S << 8 | S >>> 24, v[k] = S, D ? (D = U ^ h[h[h[w ^ U]]], m ^= h[h[m]]) : D = m = 1;
          }
        })();
        var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], l = b.AES = y.extend({
          _doReset: function() {
            var h;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var B = this._keyPriorReset = this._key, D = B.words, m = B.sigBytes / 4, k = this._nRounds = m + 6, U = (k + 1) * 4, W = this._keySchedule = [], w = 0; w < U; w++)
                w < m ? W[w] = D[w] : (h = W[w - 1], w % m ? m > 6 && w % m == 4 && (h = i[h >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[h & 255]) : (h = h << 8 | h >>> 24, h = i[h >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[h & 255], h ^= _[w / m | 0] << 24), W[w] = W[w - m] ^ h);
              for (var S = this._invKeySchedule = [], P = 0; P < U; P++) {
                var w = U - P;
                if (P % 4)
                  var h = W[w];
                else
                  var h = W[w - 4];
                P < 4 || w <= 4 ? S[P] = h : S[P] = d[i[h >>> 24]] ^ p[i[h >>> 16 & 255]] ^ C[i[h >>> 8 & 255]] ^ v[i[h & 255]];
              }
            }
          },
          encryptBlock: function(h, B) {
            this._doCryptBlock(h, B, this._keySchedule, o, s, g, f, i);
          },
          decryptBlock: function(h, B) {
            var D = h[B + 1];
            h[B + 1] = h[B + 3], h[B + 3] = D, this._doCryptBlock(h, B, this._invKeySchedule, d, p, C, v, E);
            var D = h[B + 1];
            h[B + 1] = h[B + 3], h[B + 3] = D;
          },
          _doCryptBlock: function(h, B, D, m, k, U, W, w) {
            for (var S = this._nRounds, P = h[B] ^ D[0], q = h[B + 1] ^ D[1], M = h[B + 2] ^ D[2], V = h[B + 3] ^ D[3], K = 4, L = 1; L < S; L++) {
              var j = m[P >>> 24] ^ k[q >>> 16 & 255] ^ U[M >>> 8 & 255] ^ W[V & 255] ^ D[K++], $ = m[q >>> 24] ^ k[M >>> 16 & 255] ^ U[V >>> 8 & 255] ^ W[P & 255] ^ D[K++], Z = m[M >>> 24] ^ k[V >>> 16 & 255] ^ U[P >>> 8 & 255] ^ W[q & 255] ^ D[K++], H = m[V >>> 24] ^ k[P >>> 16 & 255] ^ U[q >>> 8 & 255] ^ W[M & 255] ^ D[K++];
              P = j, q = $, M = Z, V = H;
            }
            var j = (w[P >>> 24] << 24 | w[q >>> 16 & 255] << 16 | w[M >>> 8 & 255] << 8 | w[V & 255]) ^ D[K++], $ = (w[q >>> 24] << 24 | w[M >>> 16 & 255] << 16 | w[V >>> 8 & 255] << 8 | w[P & 255]) ^ D[K++], Z = (w[M >>> 24] << 24 | w[V >>> 16 & 255] << 16 | w[P >>> 8 & 255] << 8 | w[q & 255]) ^ D[K++], H = (w[V >>> 24] << 24 | w[P >>> 16 & 255] << 16 | w[q >>> 8 & 255] << 8 | w[M & 255]) ^ D[K++];
            h[B] = j, h[B + 1] = $, h[B + 2] = Z, h[B + 3] = H;
          },
          keySize: 256 / 32
        });
        x.AES = y._createHelper(l);
      }(), a.AES;
    });
  }(dr)), dr.exports;
}
var pr = { exports: {} }, lt;
function ye() {
  return lt || (lt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), b0(), D0(), y0(), o0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.WordArray, b = A.BlockCipher, i = x.algo, E = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], o = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], s = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], g = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], f = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], d = i.DES = b.extend({
          _doReset: function() {
            for (var _ = this._key, l = _.words, h = [], B = 0; B < 56; B++) {
              var D = E[B] - 1;
              h[B] = l[D >>> 5] >>> 31 - D % 32 & 1;
            }
            for (var m = this._subKeys = [], k = 0; k < 16; k++) {
              for (var U = m[k] = [], W = s[k], B = 0; B < 24; B++)
                U[B / 6 | 0] |= h[(o[B] - 1 + W) % 28] << 31 - B % 6, U[4 + (B / 6 | 0)] |= h[28 + (o[B + 24] - 1 + W) % 28] << 31 - B % 6;
              U[0] = U[0] << 1 | U[0] >>> 31;
              for (var B = 1; B < 7; B++)
                U[B] = U[B] >>> (B - 1) * 4 + 3;
              U[7] = U[7] << 5 | U[7] >>> 27;
            }
            for (var w = this._invSubKeys = [], B = 0; B < 16; B++)
              w[B] = m[15 - B];
          },
          encryptBlock: function(_, l) {
            this._doCryptBlock(_, l, this._subKeys);
          },
          decryptBlock: function(_, l) {
            this._doCryptBlock(_, l, this._invSubKeys);
          },
          _doCryptBlock: function(_, l, h) {
            this._lBlock = _[l], this._rBlock = _[l + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), C.call(this, 2, 858993459), C.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var B = 0; B < 16; B++) {
              for (var D = h[B], m = this._lBlock, k = this._rBlock, U = 0, W = 0; W < 8; W++)
                U |= g[W][((k ^ D[W]) & f[W]) >>> 0];
              this._lBlock = k, this._rBlock = m ^ U;
            }
            var w = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = w, p.call(this, 1, 1431655765), C.call(this, 8, 16711935), C.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), _[l] = this._lBlock, _[l + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(_, l) {
          var h = (this._lBlock >>> _ ^ this._rBlock) & l;
          this._rBlock ^= h, this._lBlock ^= h << _;
        }
        function C(_, l) {
          var h = (this._rBlock >>> _ ^ this._lBlock) & l;
          this._lBlock ^= h, this._rBlock ^= h << _;
        }
        x.DES = b._createHelper(d);
        var v = i.TripleDES = b.extend({
          _doReset: function() {
            var _ = this._key, l = _.words;
            if (l.length !== 2 && l.length !== 4 && l.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var h = l.slice(0, 2), B = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4), D = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            this._des1 = d.createEncryptor(y.create(h)), this._des2 = d.createEncryptor(y.create(B)), this._des3 = d.createEncryptor(y.create(D));
          },
          encryptBlock: function(_, l) {
            this._des1.encryptBlock(_, l), this._des2.decryptBlock(_, l), this._des3.encryptBlock(_, l);
          },
          decryptBlock: function(_, l) {
            this._des3.decryptBlock(_, l), this._des2.encryptBlock(_, l), this._des1.decryptBlock(_, l);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        x.TripleDES = b._createHelper(v);
      }(), a.TripleDES;
    });
  }(pr)), pr.exports;
}
var Br = { exports: {} }, ht;
function ge() {
  return ht || (ht = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), b0(), D0(), y0(), o0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.StreamCipher, b = x.algo, i = b.RC4 = y.extend({
          _doReset: function() {
            for (var s = this._key, g = s.words, f = s.sigBytes, d = this._S = [], p = 0; p < 256; p++)
              d[p] = p;
            for (var p = 0, C = 0; p < 256; p++) {
              var v = p % f, _ = g[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              C = (C + d[p] + _) % 256;
              var l = d[p];
              d[p] = d[C], d[C] = l;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(s, g) {
            s[g] ^= E.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function E() {
          for (var s = this._S, g = this._i, f = this._j, d = 0, p = 0; p < 4; p++) {
            g = (g + 1) % 256, f = (f + s[g]) % 256;
            var C = s[g];
            s[g] = s[f], s[f] = C, d |= s[(s[g] + s[f]) % 256] << 24 - p * 8;
          }
          return this._i = g, this._j = f, d;
        }
        x.RC4 = y._createHelper(i);
        var o = b.RC4Drop = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: i.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            i._doReset.call(this);
            for (var s = this.cfg.drop; s > 0; s--)
              E.call(this);
          }
        });
        x.RC4Drop = y._createHelper(o);
      }(), a.RC4;
    });
  }(Br)), Br.exports;
}
var vr = { exports: {} }, dt;
function we() {
  return dt || (dt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), b0(), D0(), y0(), o0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.StreamCipher, b = x.algo, i = [], E = [], o = [], s = b.Rabbit = y.extend({
          _doReset: function() {
            for (var f = this._key.words, d = this.cfg.iv, p = 0; p < 4; p++)
              f[p] = (f[p] << 8 | f[p] >>> 24) & 16711935 | (f[p] << 24 | f[p] >>> 8) & 4278255360;
            var C = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], v = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              g.call(this);
            for (var p = 0; p < 8; p++)
              v[p] ^= C[p + 4 & 7];
            if (d) {
              var _ = d.words, l = _[0], h = _[1], B = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, D = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, m = B >>> 16 | D & 4294901760, k = D << 16 | B & 65535;
              v[0] ^= B, v[1] ^= m, v[2] ^= D, v[3] ^= k, v[4] ^= B, v[5] ^= m, v[6] ^= D, v[7] ^= k;
              for (var p = 0; p < 4; p++)
                g.call(this);
            }
          },
          _doProcessBlock: function(f, d) {
            var p = this._X;
            g.call(this), i[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, i[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, i[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, i[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var C = 0; C < 4; C++)
              i[C] = (i[C] << 8 | i[C] >>> 24) & 16711935 | (i[C] << 24 | i[C] >>> 8) & 4278255360, f[d + C] ^= i[C];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function g() {
          for (var f = this._X, d = this._C, p = 0; p < 8; p++)
            E[p] = d[p];
          d[0] = d[0] + 1295307597 + this._b | 0, d[1] = d[1] + 3545052371 + (d[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, d[2] = d[2] + 886263092 + (d[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, d[3] = d[3] + 1295307597 + (d[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, d[4] = d[4] + 3545052371 + (d[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, d[5] = d[5] + 886263092 + (d[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, d[6] = d[6] + 1295307597 + (d[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, d[7] = d[7] + 3545052371 + (d[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = d[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var C = f[p] + d[p], v = C & 65535, _ = C >>> 16, l = ((v * v >>> 17) + v * _ >>> 15) + _ * _, h = ((C & 4294901760) * C | 0) + ((C & 65535) * C | 0);
            o[p] = l ^ h;
          }
          f[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, f[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, f[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, f[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, f[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, f[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, f[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, f[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        x.Rabbit = y._createHelper(s);
      }(), a.Rabbit;
    });
  }(vr)), vr.exports;
}
var Ar = { exports: {} }, pt;
function _e() {
  return pt || (pt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), b0(), D0(), y0(), o0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.StreamCipher, b = x.algo, i = [], E = [], o = [], s = b.RabbitLegacy = y.extend({
          _doReset: function() {
            var f = this._key.words, d = this.cfg.iv, p = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], C = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              g.call(this);
            for (var v = 0; v < 8; v++)
              C[v] ^= p[v + 4 & 7];
            if (d) {
              var _ = d.words, l = _[0], h = _[1], B = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, D = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, m = B >>> 16 | D & 4294901760, k = D << 16 | B & 65535;
              C[0] ^= B, C[1] ^= m, C[2] ^= D, C[3] ^= k, C[4] ^= B, C[5] ^= m, C[6] ^= D, C[7] ^= k;
              for (var v = 0; v < 4; v++)
                g.call(this);
            }
          },
          _doProcessBlock: function(f, d) {
            var p = this._X;
            g.call(this), i[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, i[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, i[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, i[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var C = 0; C < 4; C++)
              i[C] = (i[C] << 8 | i[C] >>> 24) & 16711935 | (i[C] << 24 | i[C] >>> 8) & 4278255360, f[d + C] ^= i[C];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function g() {
          for (var f = this._X, d = this._C, p = 0; p < 8; p++)
            E[p] = d[p];
          d[0] = d[0] + 1295307597 + this._b | 0, d[1] = d[1] + 3545052371 + (d[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, d[2] = d[2] + 886263092 + (d[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, d[3] = d[3] + 1295307597 + (d[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, d[4] = d[4] + 3545052371 + (d[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, d[5] = d[5] + 886263092 + (d[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, d[6] = d[6] + 1295307597 + (d[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, d[7] = d[7] + 3545052371 + (d[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = d[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var C = f[p] + d[p], v = C & 65535, _ = C >>> 16, l = ((v * v >>> 17) + v * _ >>> 15) + _ * _, h = ((C & 4294901760) * C | 0) + ((C & 65535) * C | 0);
            o[p] = l ^ h;
          }
          f[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, f[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, f[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, f[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, f[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, f[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, f[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, f[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        x.RabbitLegacy = y._createHelper(s);
      }(), a.RabbitLegacy;
    });
  }(Ar)), Ar.exports;
}
var Er = { exports: {} }, Bt;
function be() {
  return Bt || (Bt = 1, function(e, u) {
    (function(a, x, A) {
      e.exports = x(Q(), b0(), D0(), y0(), o0());
    })(X, function(a) {
      return function() {
        var x = a, A = x.lib, y = A.BlockCipher, b = x.algo;
        const i = 16, E = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], o = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var s = {
          pbox: [],
          sbox: []
        };
        function g(v, _) {
          let l = _ >> 24 & 255, h = _ >> 16 & 255, B = _ >> 8 & 255, D = _ & 255, m = v.sbox[0][l] + v.sbox[1][h];
          return m = m ^ v.sbox[2][B], m = m + v.sbox[3][D], m;
        }
        function f(v, _, l) {
          let h = _, B = l, D;
          for (let m = 0; m < i; ++m)
            h = h ^ v.pbox[m], B = g(v, h) ^ B, D = h, h = B, B = D;
          return D = h, h = B, B = D, B = B ^ v.pbox[i], h = h ^ v.pbox[i + 1], { left: h, right: B };
        }
        function d(v, _, l) {
          let h = _, B = l, D;
          for (let m = i + 1; m > 1; --m)
            h = h ^ v.pbox[m], B = g(v, h) ^ B, D = h, h = B, B = D;
          return D = h, h = B, B = D, B = B ^ v.pbox[1], h = h ^ v.pbox[0], { left: h, right: B };
        }
        function p(v, _, l) {
          for (let k = 0; k < 4; k++) {
            v.sbox[k] = [];
            for (let U = 0; U < 256; U++)
              v.sbox[k][U] = o[k][U];
          }
          let h = 0;
          for (let k = 0; k < i + 2; k++)
            v.pbox[k] = E[k] ^ _[h], h++, h >= l && (h = 0);
          let B = 0, D = 0, m = 0;
          for (let k = 0; k < i + 2; k += 2)
            m = f(v, B, D), B = m.left, D = m.right, v.pbox[k] = B, v.pbox[k + 1] = D;
          for (let k = 0; k < 4; k++)
            for (let U = 0; U < 256; U += 2)
              m = f(v, B, D), B = m.left, D = m.right, v.sbox[k][U] = B, v.sbox[k][U + 1] = D;
          return !0;
        }
        var C = b.Blowfish = y.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, _ = v.words, l = v.sigBytes / 4;
              p(s, _, l);
            }
          },
          encryptBlock: function(v, _) {
            var l = f(s, v[_], v[_ + 1]);
            v[_] = l.left, v[_ + 1] = l.right;
          },
          decryptBlock: function(v, _) {
            var l = d(s, v[_], v[_ + 1]);
            v[_] = l.left, v[_ + 1] = l.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        x.Blowfish = y._createHelper(C);
      }(), a.Blowfish;
    });
  }(Er)), Er.exports;
}
(function(e, u) {
  (function(a, x, A) {
    e.exports = x(Q(), q0(), ee(), ne(), b0(), ie(), D0(), gt(), br(), xe(), wt(), ae(), oe(), ce(), Dr(), se(), y0(), o0(), fe(), ue(), le(), he(), de(), pe(), Be(), ve(), Ae(), Ee(), Ce(), Fe(), ye(), ge(), we(), _e(), be());
  })(X, function(a) {
    return a;
  });
})(yt);
var De = yt.exports;
const _t = /* @__PURE__ */ Vt(De);
typeof window < "u" && (window.Buffer = T0.Buffer);
const me = T0.Buffer.alloc(32), Re = `
account-id`, ke = (e) => e < 0 ? (Number(e) >>> 0).toString(16) : Number(e).toString(16), vt = (e) => {
  const u = [];
  for (let a = 0; a < e.length; a += 1)
    u[a / 4 | 0] |= e[a] << 24 - 8 * (a % 4);
  return _t.lib.WordArray.create(u, e.length);
}, Se = (e, u) => {
  const a = [];
  return u > 0 && a.push(e >>> 24), u > 1 && a.push(e >>> 16 & 255), u > 2 && a.push(e >>> 8 & 255), u > 3 && a.push(e & 255), a;
}, He = (e, u) => {
  "sigBytes" in e && "words" in e && (u = e.sigBytes, e = e.words);
  let a = [], x, A = 0;
  for (; u > 0; )
    x = Se(e[A], Math.min(4, u)), u -= x.length, a = [...a, ...x], A++;
  return a;
}, Ue = (e) => {
  const u = new Uint8Array(e), a = Mt.unsigned(T0.Buffer.from(u));
  return ke(a).padStart(8, "0");
}, mr = (e, u = "") => {
  try {
    const a = yr.from(e), x = _t.algo.SHA224.create();
    x.update(Re), x.update(vt(a.toUint8Array()));
    const A = T0.Buffer.from(me);
    u && A.writeUInt32BE(Number(u)), x.update(vt(A));
    const y = x.finalize(), b = He(y, 28);
    return Ue(b) + y.toString();
  } catch (a) {
    return console.error(a), !1;
  }
}, _0 = ({ IDL: e }) => {
  const u = e.Record({ e8s: e.Nat64 }), a = e.Record({ secs: e.Nat64, nanos: e.Nat32 }), x = e.Record({
    owner: e.Principal,
    subaccount: e.Opt(e.Vec(e.Nat8))
  }), A = e.Record({
    num_blocks_to_archive: e.Nat64,
    max_transactions_per_response: e.Opt(e.Nat64),
    trigger_threshold: e.Nat64,
    max_message_size_bytes: e.Opt(e.Nat64),
    cycles_for_archive_creation: e.Opt(e.Nat64),
    node_max_memory_size_bytes: e.Opt(e.Nat64),
    controller_id: e.Principal
  });
  e.Record({
    send_whitelist: e.Vec(e.Principal),
    token_symbol: e.Opt(e.Text),
    transfer_fee: e.Opt(u),
    minting_account: e.Text,
    transaction_window: e.Opt(a),
    max_message_size_bytes: e.Opt(e.Nat64),
    icrc1_minting_account: e.Opt(x),
    archive_options: e.Opt(A),
    initial_values: e.Vec(e.Tuple(e.Text, u)),
    token_name: e.Opt(e.Text)
  });
  const y = e.Record({
    account: e.Vec(e.Nat8)
  }), b = e.Record({ account: e.Text }), i = e.Record({ canister_id: e.Principal }), E = e.Record({ archives: e.Vec(i) }), o = e.Record({ decimals: e.Nat32 }), s = e.Variant({
    Int: e.Int,
    Nat: e.Nat,
    Blob: e.Vec(e.Nat8),
    Text: e.Text
  }), g = e.Record({ url: e.Text, name: e.Text }), f = e.Record({
    to: x,
    fee: e.Opt(e.Nat),
    memo: e.Opt(e.Vec(e.Nat8)),
    from_subaccount: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(e.Nat64),
    amount: e.Nat
  }), d = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    BadBurn: e.Record({ min_burn_amount: e.Nat }),
    Duplicate: e.Record({ duplicate_of: e.Nat }),
    BadFee: e.Record({ expected_fee: e.Nat }),
    CreatedInFuture: e.Record({ ledger_time: e.Nat64 }),
    TooOld: e.Null,
    InsufficientFunds: e.Record({ balance: e.Nat })
  }), p = e.Variant({ Ok: e.Nat, Err: d }), C = e.Record({ name: e.Text }), v = e.Record({
    start: e.Nat64,
    length: e.Nat64
  }), _ = e.Record({ timestamp_nanos: e.Nat64 }), l = e.Variant({
    Approve: e.Record({
      fee: u,
      from: e.Vec(e.Nat8),
      allowance_e8s: e.Int,
      expires_at: e.Opt(_),
      spender: e.Vec(e.Nat8)
    }),
    Burn: e.Record({ from: e.Vec(e.Nat8), amount: u }),
    Mint: e.Record({ to: e.Vec(e.Nat8), amount: u }),
    Transfer: e.Record({
      to: e.Vec(e.Nat8),
      fee: u,
      from: e.Vec(e.Nat8),
      amount: u
    }),
    TransferFrom: e.Record({
      to: e.Vec(e.Nat8),
      fee: u,
      from: e.Vec(e.Nat8),
      amount: u,
      spender: e.Vec(e.Nat8)
    })
  }), h = e.Record({
    memo: e.Nat64,
    icrc1_memo: e.Opt(e.Vec(e.Nat8)),
    operation: e.Opt(l),
    created_at_time: _
  }), B = e.Record({
    transaction: h,
    timestamp: _,
    parent_hash: e.Opt(e.Vec(e.Nat8))
  }), D = e.Record({ blocks: e.Vec(B) }), m = e.Variant({
    BadFirstBlockIndex: e.Record({
      requested_index: e.Nat64,
      first_valid_index: e.Nat64
    }),
    Other: e.Record({
      error_message: e.Text,
      error_code: e.Nat64
    })
  }), k = e.Record({
    callback: e.Func(
      [v],
      [e.Variant({ Ok: D, Err: m })],
      ["query"]
    ),
    start: e.Nat64,
    length: e.Nat64
  }), U = e.Record({
    certificate: e.Opt(e.Vec(e.Nat8)),
    blocks: e.Vec(B),
    chain_length: e.Nat64,
    first_block_index: e.Nat64,
    archived_blocks: e.Vec(k)
  }), W = e.Record({
    to: e.Text,
    fee: u,
    memo: e.Nat64,
    from_subaccount: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(_),
    amount: u
  }), w = e.Record({ symbol: e.Text }), S = e.Record({
    to: e.Vec(e.Nat8),
    fee: u,
    memo: e.Nat64,
    from_subaccount: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(_),
    amount: u
  }), P = e.Variant({
    TxTooOld: e.Record({ allowed_window_nanos: e.Nat64 }),
    BadFee: e.Record({ expected_fee: u }),
    TxDuplicate: e.Record({ duplicate_of: e.Nat64 }),
    TxCreatedInFuture: e.Null,
    InsufficientFunds: e.Record({ balance: u })
  }), q = e.Variant({ Ok: e.Nat64, Err: P }), M = e.Record({ transfer_fee: u });
  return e.Service({
    account_balance: e.Func(
      [y],
      [u],
      ["query"]
    ),
    account_balance_dfx: e.Func([b], [u], ["query"]),
    archives: e.Func([], [E], ["query"]),
    decimals: e.Func([], [o], ["query"]),
    icrc1_balance_of: e.Func([x], [e.Nat], ["query"]),
    icrc1_decimals: e.Func([], [e.Nat8], ["query"]),
    icrc1_fee: e.Func([], [e.Nat], ["query"]),
    icrc1_metadata: e.Func(
      [],
      [e.Vec(e.Tuple(e.Text, s))],
      ["query"]
    ),
    icrc1_minting_account: e.Func([], [e.Opt(x)], ["query"]),
    icrc1_name: e.Func([], [e.Text], ["query"]),
    icrc1_supported_standards: e.Func(
      [],
      [e.Vec(g)],
      ["query"]
    ),
    icrc1_symbol: e.Func([], [e.Text], ["query"]),
    icrc1_total_supply: e.Func([], [e.Nat], ["query"]),
    icrc1_transfer: e.Func([f], [p], []),
    name: e.Func([], [C], ["query"]),
    query_blocks: e.Func(
      [v],
      [U],
      ["query"]
    ),
    send_dfx: e.Func([W], [e.Nat64], []),
    symbol: e.Func([], [w], ["query"]),
    transfer: e.Func([S], [q], []),
    transfer_fee: e.Func([e.Record({})], [M], ["query"])
  });
};
var Te = ((e) => (e[e.FractionalMoreThan8Decimals = 0] = "FractionalMoreThan8Decimals", e[e.InvalidFormat = 1] = "InvalidFormat", e[e.FractionalTooManyDecimals = 2] = "FractionalTooManyDecimals", e))(Te || {});
BigInt(1e8);
var Ne = class extends Error {
}, Pe = (e, u) => {
  if (e == null) throw new Ne(u);
}, qe = (e) => {
  let u = e.match(/.{1,2}/g);
  return Pe(u, "Invalid hex string."), Uint8Array.from(u.map((a) => parseInt(a, 16)));
}, At = "abcdefghijklmnopqrstuvwxyz234567", U0 = /* @__PURE__ */ Object.create(null);
for (let e = 0; e < At.length; e++) U0[At[e]] = e;
U0[0] = U0.o;
U0[1] = U0.i;
var ze = (e) => {
  let u = e.toUint8Array(), a = new Uint8Array(32);
  return a[0] = u.length, a.set(u, 1), a;
};
class Oe {
  constructor() {
    this.name = "NNS", this.logo = "path_to_nns_logo.svg", this.readyState = "Loadable", this.url = "http://localhost:4943", this.authClient = null, this.agent = null;
  }
  icrc1Metadata(u) {
    return N0.createActor(_0, {
      agent: this.agent,
      canisterId: u
    }).icrc1_metadata();
  }
  async requestTransfer(u) {
    throw new Error("Method not implemented.");
  }
  async isAvailable() {
    return this.authClient || (this.authClient = await Nr.create()), !0;
  }
  async connect(u) {
    return this.authClient || (this.authClient = await Nr.create()), await this.authClient.isAuthenticated() ? this._continueLogin(u.host || this.url) : new Promise((x, A) => {
      this.authClient.login({
        identityProvider: u.identityProvider || this.url,
        onSuccess: async () => {
          try {
            const y = await this._continueLogin(u.host || this.url);
            x(y);
          } catch (y) {
            A(y);
          }
        },
        onError: (y) => {
          A(new Error("Authentication failed: " + y));
        }
      });
    });
  }
  async _continueLogin(u) {
    try {
      const a = this.authClient.getIdentity(), x = a.getPrincipal();
      return this.agent = Fr.createSync({
        identity: a,
        host: u
      }), (this.url.includes("localhost") || this.url.includes("127.0.0.1")) && await this.agent.fetchRootKey(), {
        subaccount: ze(x),
        owner: x || null
      };
    } catch (a) {
      throw console.error("Error during _continueLogin:", a), a;
    }
  }
  async icrc1BalanceOf(u, a) {
    if (!this.agent)
      throw new Error(
        "Agent is not initialized. Ensure the wallet is connected."
      );
    return await N0.createActor(_0, {
      agent: this.agent,
      canisterId: u
    }).icrc1_balance_of(a);
  }
  async disconnect() {
    this.authClient && (this.readyState = "Loadable", this.agent = null, await this.authClient.logout(), this.authClient = null);
  }
  async createActor(u, a) {
    if (!u || !a)
      throw new Error("Canister ID and Interface Factory are required");
    if (!this.agent)
      throw new Error(
        "Agent is not initialized. Ensure the wallet is connected."
      );
    return N0.createActor(a, { agent: this.agent, canisterId: u });
  }
  async createAgent(u) {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized");
    const a = this.authClient.getIdentity(), x = Fr.createSync({ identity: a, host: u.host });
    (this.url.includes("localhost") || this.url.includes("127.0.0.1")) && await x.fetchRootKey();
  }
  async getAccountId() {
    if (!this.authClient || !this.agent)
      throw new Error("Wallet is not connected or initialized");
    const a = await this.authClient.getIdentity().getPrincipal(), x = mr(a.toString());
    return x !== !1 ? x : null;
  }
  async getPrincipal() {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized");
    return this.authClient.getIdentity().getPrincipal();
  }
  async getBalance() {
    throw new Error("Method not implemented.");
  }
  async icrc1Transfer(u, a) {
    await N0.createActor(_0, {
      agent: this.agent,
      canisterId: u
    }).icrc1_transfer(a);
  }
  async whoAmI() {
    return (!this.authClient || !this.agent) && console.warn("NNS wallet is not connected or initialized"), this.authClient.getIdentity().getPrincipal();
  }
  async isConnected() {
    var u;
    return await ((u = this.authClient) == null ? void 0 : u.isAuthenticated()) ?? !1;
  }
}
class bt {
  constructor() {
    this.name = "Plug", this.logo = "path_to_plug_logo.svg", this.readyState = "NotDetected", this.url = "https://plugwallet.ooo/";
  }
  icrc1Metadata(u) {
    return window.ic.plug.createActor({ canisterId: u, interfaceFactory: _0 }).icrc1_metadata();
  }
  async isAvailable() {
    return !!(window.ic && window.ic.plug);
  }
  async requestConnect(u) {
    if (!await this.isAvailable())
      throw this.readyState = "NotDetected", window.open(this.url, "_blank"), new Error("Plug wallet is not available");
    try {
      const a = await window.ic.plug.requestConnect(u);
      return this.readyState = "Connected", a;
    } catch (a) {
      throw console.error("Error connecting to Plug wallet:", a), a;
    }
  }
  async isConnected() {
    return await window.ic.plug.isConnected();
  }
  async createActor(u, a) {
    const x = { canisterId: u, interfaceFactory: a };
    return window.ic.plug.createActor(x);
  }
  async requestBalance() {
    return window.ic.plug.requestBalance();
  }
  async requestTransfer(u) {
    return window.ic.plug.requestTransfer(u);
  }
  async requestTransferToken(u) {
    return window.ic.plug.requestTransferToken(u);
  }
  async requestBurnXTC(u) {
    return window.ic.plug.requestBurnXTC(u);
  }
  async batchTransactions(u) {
    return window.ic.plug.batchTransactions(u);
  }
  async createAgent(u) {
    return await window.ic.plug.createAgent(u);
  }
  async disconnect() {
    await window.ic.plug.disconnect(), this.readyState = "Disconnected";
  }
  getAccountId() {
    return Promise.resolve(window.ic.plug.accountId);
  }
  getPrincipal() {
    return Promise.resolve(yr.fromText(window.ic.plug.principalId));
  }
  async icrc1BalanceOf(u, a) {
    return (await window.ic.plug.createActor({
      canisterId: u,
      interfaceFactory: _0
    })).icrc1_balance_of(a);
  }
  // Additional methods to satisfy Adapter.Interface
  async connect(u) {
    await this.requestConnect(u);
    const a = await this.getPrincipal(), x = await this.getAccountId();
    return {
      subaccount: qe(x),
      owner: a
    };
  }
  async getBalance() {
    const a = (await this.requestBalance()).find((x) => x.currency === "ICP");
    return BigInt(a ? a.amount : 0);
  }
  async icrc1Transfer(u, a) {
    await window.ic.plug.createActor(
      {
        canisterId: u.toString(),
        interfaceFactory: _0
      }
    ).icrc1_transfer(u, a);
  }
  async whoAmI() {
    return this.getPrincipal();
  }
}
typeof window < "u" && (window.ic && window.ic.plug && window.ic.plug.init(), window.addEventListener("load", () => {
  window.ic && window.ic.plug && (bt.prototype.readyState = "Installed");
}));
const We = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e", Me = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAoICAgICAgICAgICAgICAgICQgICAgICQgICAgICAkICAgICAoICAgICgkKCAgLDQsIDAgICggBAwQEBgUGCgYGCg0OCw0NDg8NDg8PDQ0ODRANDQ4PDg0QDQ0ODQ4PEA4ODw0ODg4QDQ0PDQ8ODxAOEA8ODQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAeAAEAAgMAAwEBAAAAAAAAAAAABwgFBgkDBAoCAf/EAE8QAAIBAwEEBAcJDAYLAAAAAAECAwAEEQUGBxIhCBMxQQkUIjJRYYEkNHFzkZKhs7QVI0JSdHWChbLB0dMzNTZTctQXJSZDYmODk5Sio//EAB0BAQABBQEBAQAAAAAAAAAAAAAHAwQFBggCAQn/xABBEQABAwIDBAUIBwgCAwAAAAABAAIDBBEFITEGEkFRMmFxgZEHEyKhscHR0iMkQoKSsvEWM1JicnPh8KLCFBVD/9oADAMBAAIRAxEAPwDqnREoiURKIlEUdar0kNnYJHhn1jRYZomKSRS6pYxyRuOTI8bzhkYHkVYAivtl5LgNSts2U20s7+EXFjc217ASVE9pPFcwll5Mokhd0JXvHFkV8X0G6zNF9SiLGbR7T21nC9xeTwWtvHgyT3MscEKAnA45ZWVFySAOJhzNEWj2vSb2akZUTWtDd3YKiJq1gzMxOAqqLgliTyAAJJr7ZeQ9p4hSUDXxel/aIlESiJREoiURKIlESiL5ntvD7uvfyu4+ueq40WKf0j2rq/4Gc/6h1T87n7Ha1Tdqryn6PeugVeFcpRFSzwtx/wBkv1nZfsz16bqqM3QK4qVWWNX01bL+9rf4iH6tat1mFlKIlESiJREoiURKIlESiL5nduvf15+VXH1z1XGixT+ke1dX/Az/ANQ6p+dz9jtapu1V5T9HvXQOvCuUoipZ4W/+yX6zsv2bivTdVRm6BXFSqyxq+mrZf3tbfEQ/VrVuswspREoiURKIlESiJREoiURfM7t17+vPyq4+ueq40WKf0j2rq/4Gf+odU/O5+x2tU3aq8p+j3roHXhXKURUs8Lf/AGS/Wdl+zcV6bqqM3QK4qVWWNX01bL+9rb4iH6tat1mFlKIlESiJREoiURKIoo3j735bW4a3gSMmMLxtIGOSyhwFCsuAFYcyTknsGOcdY5tNLRVBp4Gt9EDeLrnUXsACOBCibaTbGfD6s0lMxt2gbxdc5uANgARwIzufUtU/0+Xv4tv8yT+bWuftlXfwx+DvmWp/t/iX8EX4XfOqSar0D9DllkleS/DyyPI2LiEDidixwPFuQyeQq8i2oxaUXjiaexjz7CrR23dfe5EQ7j8ynzo26LFstaz2emkyRXFx4y5umEriTq0iwpjEIC8Ma8ipOc8+dVnbQY03N1P4xyD3qpH5Qa5osBD4O+dTFFv6vD+Db/Mf+bVodra9ps9jAetrh/2V23b7EHfZi/C7517Ue/G7P4MHzH/mVUG1tYfsx+B+ZXTdua8/Zi/C75lHm/8A0hNptP8AubqHElv18dxm1Ijk44w4UcUgmXh8s5HDk4HMc8127VVfJngfmVY7Z1zxYtj8HfMq5R+Df2fP+81L/wAmD/K1cN2oqzwZ4H4r03amrPBngfmV4tM3mTxxpGBERGioCVbJCgKM4cDOBzwBVUbR1J4M8D8Vkm7W1h4M8D8y2HZ3eRJJKiSKmHYKCgIIJOB2scjJGez91ZSixySWVscrRZxAyuLX04lZrDtpJZpmxTNbZxAuLggnIak8VIVbqpDSiJREoiURKIqpb89Z4NTuVAyR1PM9nO3iPt+irCDyeDF6p1fVS7sTiN1rOkd1oabuOTcwdA645Lkvb2v81jVQxoz+jzOn7pijWfUXbtY/AOQ+ipVw3ZLCMOAEFOy4+04b7u3edcjusFF0lVLJq492XsUCb6elvY6RI1siNe3i+fDG4SOI4ziWYq/C3Z5CJIw/C4eWa+I4nT030YG84cBkB2n3WUg7ObDVuLsFQ9wihOjnC5d1tbcXHWSByuos0Pwhr9YPGdO4YSRloLnikRe8hHiVZD6uOP4RWqOxJrz6TMuo/wCPgt8n8lwDPq9Vd3JzLA94cSPBytfu43n2mp263VlKJIzyYebJE/ekiecjDtweRGGBZSCac9DDVsvuhw5EA+oqIcRw+rwqcwVLS13A8HDm08R7NDY5LYtod48FhbyXV3KkUEQy7yH5FXHlM7HkqKGZicAE1H+I7JUkl3MG4ebdPw6eFlfYY+qqpmwQNL3HQe+/ADiTkOKq1tV4TcLKVsNOaWJTymubjqmf04hjifhHeCZSfSq9la3Fsgfty+DfiVOlJsU7cBqZgHfwtG8B94kX8FJm4nwgWn6pOlpewtplzIwSIvKJraVyQFTruCJo3Y+arx8J7OsJIBx1ds9PSt34zvtGuViO7O/j3KyxHZeekYZYXecaNbCzh3XNx2G/UrZwzVrjXLVGPWf2Wl90QfHRftrWYw931mL+tv5gs/hT/rcP9xn5gp7qYlPqURKIlESiJRFT3f64GrXeeX9B9mhqV8ENqGO/8353LkXbHDavEtpqimoonyyO83ZjGl7j9DHwaCe06BQJvk3heIaZeXUf9JHFiI45CWRlijbB7QrurEY5gGrqurBDC57dQMu05BSHhfkJx5sQrsWEcMTS0ujL96VwLgLWj3mi9+LwRyXMG4mZ3Z3JZ3ZmdmOWZmJLMSeZJJJJPaTUUOJJJOql/wA22IebYLBuQAyAAyGS/FeUUg7jt7M2j3yXEZLQuQlzBnyZYs8wAeQdPOjbkQwx5rMDe0k5hffhxHMf7otY2hwKPGaUwOtvjON3FrvgdCOXWAVn+kvvufWbzCFhY25K20fNeLuad1PPjk7gccCYXAJct9rZRLId3ojT4rG7JbOjBqb6QfTv/eHlyYDyHHmc9LWh+rFbyhFeHN3hZegbLrX0Nt5smpaHbvOxee1d7OaRjkyGII0bEnmWMEkXExJLMGPfUJ4xTimqnNbkD6QHK+vrBUI4/StpK1zWZNcA4DlfUeIPcrGbJy+6bf4+L6xap4a761F/W38wVLCXfXIP7jPzBWHqa10SlESiJREoiURUm6Rrn7s3g9Hi/wBlgqScIP1Rn3vzFdCbE4fSwYe2piiY2WUuMjw0Bz91zmt3nandaABc5AZKu+/jZ57rSbyJBl+BJQBzJ6mRJmAHeSqEAenFXFfGZIHNHK/gbrYcfp3VFBLG3WwP4SHewKZujJ0QNhNW0XT9Q+5/WzSQIt2HvtQ8m8jUJcqUW7VVHWhmUcKgxsjAAMKjN92my5bmpmseQRxWL6QXgztLvbzTX0eOGwsUE8eowxTyJOxZc29xFLOl2r9XJgSROFzGPIPExK+Q5WroQSLLWOmHszs7YWlrs3o+m6VLrl2kEdxeJY2wmtIFVTJcGTgLQz3HDxDBykRkfkTCWvKWB8zw1v8Av6LM0GGSVbwyJtydPee7isR0MtC0CC7uNm9otO0u4uGkM2l6jc2VuZLuN85t2mdS5fI4oVLsc9bFnMcQatXUr6d5B/Uc16xDC30chZI31ajmt23FeDI061v7yfWhBfW5nuhbQJIy28ltKYmtmMKJDLbTwETBwtxLGQyKo8lnbGlywbYQDmpK3mdCXd/ZWV1fXOnCKG1heZzHf6ghPCMqijxvBeRsRooHlMygAk0BJNgvsjY2NLnaBQh0HtINrpGGHB43dTXUa5JxGVjhUZPM5EHEpPapB760Ta3B5AxtezogbrhyFzZ3eTY93WucNosVZPiZhH2Ghvfm4juv6irU7Hy+6rb8oh+sWtCwx31qH+4z8wXvB3fXYP7rPzhWTqdV0qlESiJREoiURVF3/wCxM8mrzui+RKkD8bcl5RLEfWecZ5AH2Vkpdr8NwWlayqk+kztG0XeRc520A6yRexteyn7ZTEoY8Kja45tLxYa9Iu9601N3IA8tix9CgAfTnP0VpkvlQdK61PC1o/mJcfVugdma2N2Lb3RaO/NRpZbtdV0K6lu9npUMM7cdxplyfc8jelPKQKfQQ8TIPJDlMILaLaZtQbygDsGSjjFcBbUuMkNs87aW7DpbqOnBZrW99+2N1GYIrKy05mHC92ZFlMee1o166UA+gmKb2dtZqLEadxzN1gYNlp3O9IZdZbb1EnwWn7F7pPEDLPM73V7cEtcXkhLO7MeJgCxLBS3M8RLOQCTyULJeDz0j2/Quu62YOR7AOXZdTFguF09Cz0M3kZnTuA5e3jws3g7u4dQiVZMxyxnignTlJC/I5U8iQSBlcjOAQVIVhmqmmZO3dd3Hkr3E8JgxCPckGfB3EfEcx+qyGzG/3azToxbyQWurog4Y7l5OqnK9iiQ9bHxkDtLRlj3yP21qMuCyB3ojwt71ENXsTVNefNC45gi3gSCPYsVtImtbRSJ92pIrWxicSDTrQnEjjsMjB5M8jjiMrlefCsZbirKUGB53l8OJ9wXN/lTkxTZhkYdGd2W4Y/Ita5uoNibutm0GwI57rgpV04iIIqAIqBVRVGAoUYUADkAAAAPRWZrMMjmjdE4XaQQR1EWsuPhUv3/OEneve/G/NTBuwk666tcf3iufVweWfk4TXJwwqSgxoUTvsSAg82j0ge9vrUybKv8A/Lract/jBP3cz7FZ2pdXUCURKIlESiJRFoO9XZ/rFSYDmnkN/hJyvyNkfpVB3lRo3MpYsSj/APmdx/8AS8+ie52X3ltmA1fm3OiPHMdo19XsUT3Ok1AtLjfWt8ZOoW6Re0s2nQ2NytyLG1N/HBf3JsvHxBbyxTBJmtxNA7ItwIVfq5VfhcleMgI0t7IVNPiNSaecnNhLbGxuCPdc9yscUxCanhEkFrh2dxfIg++y2LT9gteuIEutMk2e1+0ceRPa3lxp7N/02i1OEN3FTdAqeRA54l8bPhucUpt1gH2WWFi2ulb+8jB7CR7d5ejNsdtMMiTZ+ZvXBqukyqf+7c27Y+FBV5DQVUJBbILjQ5g+9ZePbOIZujcOwg/Ba9d7q9pnb7zoNwoP99qekIB7UvJWx8Ck/DUl0OOSMi3akbzhxGV+3LX2rLt2+gDbGJ5PaB8V71r0fNpeB5r1dE0a1jUvLcXeoy3RiQdrMkVtbQAL3l7xAOXM91w/H3fYjHeb+4Kwm8oLzlDAAetxPqAb7VFOw+1Yl1C/S3v4tWsbXxeJbyCxNlBJcnrWuUgD3V280cadRiZpAHZm4RwhXkzGEVs05c+S1hYCw8fcsRimFz7eYHW0NY1gNgacgWDJmhxa65JPJrv5XEcVKYNbevysljfE90bwQ5pIIOoINiO4qfOjBoTM01y3mJ97j9bsAXx/hXA/TqJtpsOh/wDYx1g6fmy0j73ont6Q7F0D5KsPe8y1j+i30Wf1EAu8BYfeKsLWDXRSURKIlESiJRF4rq2DqyNzVgQR6jVnWUkVZA+mnF2PaWuHMEKpG8xuDm6hRBruitDIUbmO1W/GXuP8R3Gvz+2m2eqdnq51LLfd1jfwe3ge0aOHA9RBMiUtS2eMPb3jkVpm3mwNvqNpcWVyvFDcxtHIAcEZ5qynuZGCupwcMoPOsdhuNVGHzsqIj6TDcfA9RGR6ldSASMLHaFcvdu90es7K3zCCe6tgx9z3tpLLAlxGCSMtE4w4HnwOSVP4ylWbsLANrqfF4BLA6zx02X9Jp945O0PbcDSaikMLt1wy4Hms7pfTN2uhAC6nM4AxiWG1mPzpIGf28XOtzbibuatfMtPBeTU+mztfIMHUpEH/AC7azQ/OW34x7GFXAxAnivQgbyUW6lJrm0FysVzc3t+2Qc3M8skMCntchiY4lHPkqjixgAkgHb8OYaxo82M+PV2rPYdhclY8RwNz4ngOsn/erNW/3bbAxaZZxWkXMJlpHxgyStzeQjJxk8gMnhUKMnFSRTU7YIxG39TzU/4Zh7KCnbAzhqeZOp/3QKWNidnpbySKCEFnc49SqPOdj3Ko5k+zmSAcjLVMp4TLIch6+Q71+X/lN2Sm/biqoKRmUz2zDk0StDnuPINeX9trDMgK7WyOzEdnbxW8fmxrgnvdjzZz62bJ9XZ3VEdVUuqZXSv1Pq5DuU74RhcOF0kdHD0WC1+Ljxcesm5WZq0WYSiJREoiURKIlEWP1rREnThf9Fh2qfSP3jvrVdo9nKTH6U01UOtjx0mHmPeNCFd01U+nfvM7xzUX61s9JAcMMr3OPNP8D6j9NcSbS7H4hs/KRUN3oyfRlaCWO5X/AIT/ACnuJAut6payOoF2nPiOK17WtDhuY2huI454nGGjlRZEb4VYEcu0HHI1p0FRLTvEsLi1w0LSQR3hXjmhws4XChDaHoSaHOxaNbm1zzxbzAr8lwk+B6lIA9VSBS7f4tALOLH/ANTc/wDgWrHuw+I6XHZ/m69PSegtosZy5u7j/hmmVV/+EULf+1ZB3lGxJ+QDG9bWkn/kXD1L0yghbrc9/wALLMbe7t7Wxt4RaQxW8auUKxIF4uJchmPa7eT5zEk57a6H8ie1U1dXVVFO8u3oxILnQscGm3K4ePBSNs3I1jnwsAAtfwy96wmxO7661CTq7aMtgjjkPKKMHvd+wenhGWPcDXWdTVxUzd6Q9g4nuWyYli1NhsfnKh1uTdXO7B79BxKuPur3VQ6XDwJ98mfnNMRgsfxVH4KDuXJz2nJ7I+rq+Srdnk0aDl/lcz4zWMxLEH4h5trXlrWX+1uMJLQTxzcT+i3isYsUlESiJREoiURKIlESiL8SRBgQQCD2gjIPsqlLCyZhjlaHNIsQQCCORByXpri03BzUcbeaLHEyGNeEOGyBnGRjs9Hb2Vx55VdnKLCJ6eWhi3BKH74F927d21ho3InIWHUtzwmpfM1wkN7WtzWrVBF1nkpdF7+ibIQXsgiuE6yJfvnDkgFl5LnhIJHPszzqd/I0+WPHnSR3FoH3PK7mD9P8Kyq8QmoY/OU7t1xyvkcjra6lnTNKigRY4USKNRhURQqj2AAe3vrst73PO84knmVoE08k7zJK4ucdSTc+te3XhUEoiURKIlESiJREoiURKIlEWL2h0VZ4yrciPKVh2g/wPYRWnbVbN02P0Jpqi4I9Jjxq1wGvWCMiOPaAVfUdU6nk3m9hHNRBX54KRUoilHYrRFjiVxzaVVYk9wIyFHqH0/JXc3k32bpsLwyOrYS6SoYx73HgC24YOoXPWTnyA0TE6p0spYdGkgfFbFUtLDpREoiURKIlESiJREoiURKIlEX5Zcgj015c3eBHNfQbKHNT0aSJirKeR5HBww9INfnZjezGIYRUvp54nkA2a8NO68cCDmMxwvlodFJEFTHM0OaR2cQvDa6c7kKqsSfQD9Po+E1YUGCV9fMIKaB7nE26JsL8SbWA6yQFUkmZGN5xACmHS7Tq440PMqiqT6wAK/QvBqE4fQU9G43McTGE8y1oBPqUczyeckc8cSSvarMqglESiJREoiURKIlESiJREoiURKIlESiJREoiURKIlESiJRF//9k=", Ve = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: We,
    adapter: Oe
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: Me,
    adapter: bt
  }
];
class Ie {
  constructor(u = {}) {
    this.state = {
      account: null,
      activeWallet: null,
      provider: null,
      canisterActors: {},
      anonCanisterActors: {},
      config: {
        hostUrl: u.hostUrl || "http://localhost:4943",
        localStorageKey: u.localStorageKey || "pnpConnectedWallet",
        identityProvider: u.identityProvider,
        ...u
      },
      callbacks: []
    };
  }
  getAccountId() {
    var x, A;
    if (!this.state.provider) return null;
    const u = ((A = (x = this.state.account) == null ? void 0 : x.owner) == null ? void 0 : A.toString()) || "";
    return mr(u) || null;
  }
  getPrincipalId() {
    return this.state.provider ? this.state.account.owner : null;
  }
  async connect(u) {
    const a = Ke.find((y) => y.id === u);
    if (!a) throw new Error("Selected wallet not found");
    const x = new a.adapter();
    if (!await x.isAvailable())
      throw window.open(x.url, "_blank"), new Error("Wallet not available");
    const A = await x.connect(this.state.config);
    if (!A || typeof A == "boolean")
      throw new Error("Error connecting to wallet");
    return this.state = {
      ...this.state,
      account: A,
      activeWallet: u,
      provider: x
    }, localStorage.setItem(this.state.config.localStorageKey, u), A;
  }
  async disconnect() {
    this.state.provider && await this.state.provider.disconnect(), localStorage.removeItem(this.state.config.localStorageKey), this.state = {
      ...this.state,
      account: null,
      activeWallet: null,
      provider: null,
      canisterActors: {},
      anonCanisterActors: {}
    };
  }
  async icrc1BalanceOf(u, a) {
    if (!this.state.provider) throw new Error("Wallet not connected");
    return await this.state.provider.icrc1BalanceOf(u, a);
  }
  async icrc1Transfer(u, a) {
    if (!this.state.provider) throw new Error("Wallet not connected");
    return await this.state.provider.icrc1Transfer(u, a);
  }
  async icrc1Metadata(u) {
    if (!this.state.provider) throw new Error("Wallet not connected");
    return await (await this.state.provider.createActor(u, _0)).icrc1_metadata();
  }
  async getSignedActor(u, a) {
    if (!this.state.provider) throw new Error("Wallet not connected");
    try {
      return await this.state.provider.createActor(u, a);
    } catch (x) {
      throw console.error("Error creating signed actor:", x), x;
    }
  }
  async getCanisterActor(u, a, x = !1, A = !1, y = !1) {
    var b;
    if (y) return this.getSignedActor(u, a);
    if (x)
      if (A || !this.state.anonCanisterActors[u]) {
        const i = Fr.createSync({
          identity: new Et(),
          host: this.state.config.hostUrl
        });
        (b = this.state.config.hostUrl) != null && b.includes("localhost") && await i.fetchRootKey();
        const E = this.state.provider.createActor(a, {
          canisterId: u,
          idl: a
        });
        return this.state.anonCanisterActors[u] = E, E;
      } else
        return this.state.anonCanisterActors[u];
    else {
      if (!this.state.provider) throw new Error("Wallet not connected");
      if (A || !this.state.canisterActors[u]) {
        const i = await this.state.provider.createActor(u, a);
        return this.state.canisterActors[u] = i, i;
      } else
        return this.state.canisterActors[u];
    }
  }
  createAgent(u) {
    if (u != null && u.host ? this.state.config.hostUrl = u.host : u = { whitelist: this.state.config.whitelist, host: this.state.config.hostUrl }, !this.state.provider) throw new Error("Wallet not connected");
    return this.state.provider.createAgent(u);
  }
  isWalletConnected() {
    return !!this.state.activeWallet;
  }
  activeWallet() {
    return this.state.activeWallet;
  }
  registerCallback(u) {
    this.state.callbacks.push(u);
  }
}
const Ke = Ve, Dt = (e = {}) => new Ie(e);
class Ge {
  constructor(u = {}, a) {
    this.state = "idle", this.transactionLlist = {}, this.stepsList = [], this.completed = [], this.activeStep = "", this.failedSteps = [], this.transactionResults = {}, this.trxArray = [], this._info = !1, this._adapterObj = !1, !(!a || !a.provider) && (Object.entries(u).forEach(([x, A]) => {
      typeof A == "object" && (this.transactionLlist[x] = A);
    }), Object.keys(this.transactionLlist).length > 0 && (this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = a));
  }
  _prepareTrxArry() {
    this.trxArray = [];
    let u = [];
    Object.values(this.transactionLlist).forEach((x) => {
      u.push(x), x.updateNextStep && (this.trxArray.push(u), u = []);
    }), u.length > 0 && this.trxArray.push(u);
    let a = 0;
    return this.trxArray.forEach((x, A) => {
      x.forEach((y, b) => {
        this.trxArray[A][b].stepIndex = a, this.trxArray[A][b].state = "idle", this.trxArray[A][b].onSuccessMain = async (i, E) => {
          const o = E.stepIndex, s = y.onSuccess, g = y.onFail;
          if (i.err || i.Err || i.ERR)
            return this.failedSteps.push(this.stepsList[o]), this.transactionResults[this.stepsList[o]] = i, this.state = "error", E.state = "error", g && await g(i), !1;
          this.completed.push(this.stepsList[o]), this.activeStep = this.stepsList[o + 1], this.transactionResults[this.stepsList[o]] = i, E.state = "done", E.updateNextStep && this.trxArray[A + 1] && await E.updateNextStep(i, this.trxArray[A + 1][0]), s && await s(i);
        }, this.trxArray[A][b].onFailMain = async (i, E) => {
          const o = y.onFail, s = E.stepIndex;
          return console.error(`error in  ${this.stepsList[s]} `, this.trxArray[A][b]), console.error(i), this.failedSteps.push(this.stepsList[s]), this.activeStep = this.stepsList[s], this.state = "error", E.state = "error", o && await o(i), !1;
        }, a++;
      });
    }), this.trxArray;
  }
  // ... rest of the methods (retryExecute, execute, _processBatch) remain the same,
  // but you should add type annotations to their parameters and return types.
}
const Xe = "http://localhost:4943", Qe = "ryjl3-tyaaa-aaaaa-aaaba-cai", Le = mr;
let Cr = null;
function je() {
  return Cr || (Cr = Dt({
    whitelist: [Qe],
    host: Xe,
    identityProvider: ""
  })), Cr;
}
typeof window < "u" && (window.pnp = {
  PnP: Dt,
  BatchTransact: Ge,
  nns: { AnonymousIdentity: Et, Principal: yr },
  getPnPAdapter: je
});
export {
  Ge as BatchTransact,
  Dt as createPnP,
  mr as getAccountIdentifier,
  je as getPnPAdapter,
  Le as principalIdFromHex,
  Ke as walletsList
};
//# sourceMappingURL=plug-n-play.es.js.map
