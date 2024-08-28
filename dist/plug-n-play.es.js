import { HttpAgent as vr, Actor as ht, AnonymousIdentity as It } from "@dfinity/agent";
import { Principal as St } from "@dfinity/principal";
import { AuthClient as kr } from "@dfinity/auth-client";
function Rt(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
const Ht = new Int32Array([
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
function dt(y) {
  if (Buffer.isBuffer(y))
    return y;
  if (typeof y == "number")
    return Buffer.alloc(y);
  if (typeof y == "string")
    return Buffer.from(y);
  throw new Error("input must be buffer, number, or string, received " + typeof y);
}
function Ut(y) {
  const A = dt(4);
  return A.writeInt32BE(y, 0), A;
}
function Ar(y, A) {
  y = dt(y), Buffer.isBuffer(A) && (A = A.readUInt32BE(0));
  let a = ~~A ^ -1;
  for (var i = 0; i < y.length; i++)
    a = Ht[(a ^ y[i]) & 255] ^ a >>> 8;
  return a ^ -1;
}
function Er() {
  return Ut(Ar.apply(null, arguments));
}
Er.signed = function() {
  return Ar.apply(null, arguments);
};
Er.unsigned = function() {
  return Ar.apply(null, arguments) >>> 0;
};
var Pt = Er;
const zt = /* @__PURE__ */ Rt(Pt);
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Tt(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
function Wt(y) {
  if (y.__esModule) return y;
  var A = y.default;
  if (typeof A == "function") {
    var a = function i() {
      return this instanceof i ? Reflect.construct(A, arguments, this.constructor) : A.apply(this, arguments);
    };
    a.prototype = A.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(y).forEach(function(i) {
    var E = Object.getOwnPropertyDescriptor(y, i);
    Object.defineProperty(a, i, E.get ? E : {
      enumerable: !0,
      get: function() {
        return y[i];
      }
    });
  }), a;
}
var R0 = {}, H0 = {};
H0.byteLength = Nt;
H0.toByteArray = Mt;
H0.fromByteArray = Gt;
var d0 = [], l0 = [], Lt = typeof Uint8Array < "u" ? Uint8Array : Array, P0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var k0 = 0, qt = P0.length; k0 < qt; ++k0)
  d0[k0] = P0[k0], l0[P0.charCodeAt(k0)] = k0;
l0[45] = 62;
l0[95] = 63;
function pt(y) {
  var A = y.length;
  if (A % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var a = y.indexOf("=");
  a === -1 && (a = A);
  var i = a === A ? 0 : 4 - a % 4;
  return [a, i];
}
function Nt(y) {
  var A = pt(y), a = A[0], i = A[1];
  return (a + i) * 3 / 4 - i;
}
function Ot(y, A, a) {
  return (A + a) * 3 / 4 - a;
}
function Mt(y) {
  var A, a = pt(y), i = a[0], E = a[1], C = new Lt(Ot(y, i, E)), b = 0, n = E > 0 ? i - 4 : i, F;
  for (F = 0; F < n; F += 4)
    A = l0[y.charCodeAt(F)] << 18 | l0[y.charCodeAt(F + 1)] << 12 | l0[y.charCodeAt(F + 2)] << 6 | l0[y.charCodeAt(F + 3)], C[b++] = A >> 16 & 255, C[b++] = A >> 8 & 255, C[b++] = A & 255;
  return E === 2 && (A = l0[y.charCodeAt(F)] << 2 | l0[y.charCodeAt(F + 1)] >> 4, C[b++] = A & 255), E === 1 && (A = l0[y.charCodeAt(F)] << 10 | l0[y.charCodeAt(F + 1)] << 4 | l0[y.charCodeAt(F + 2)] >> 2, C[b++] = A >> 8 & 255, C[b++] = A & 255), C;
}
function Kt(y) {
  return d0[y >> 18 & 63] + d0[y >> 12 & 63] + d0[y >> 6 & 63] + d0[y & 63];
}
function Xt(y, A, a) {
  for (var i, E = [], C = A; C < a; C += 3)
    i = (y[C] << 16 & 16711680) + (y[C + 1] << 8 & 65280) + (y[C + 2] & 255), E.push(Kt(i));
  return E.join("");
}
function Gt(y) {
  for (var A, a = y.length, i = a % 3, E = [], C = 16383, b = 0, n = a - i; b < n; b += C)
    E.push(Xt(y, b, b + C > n ? n : b + C));
  return i === 1 ? (A = y[a - 1], E.push(
    d0[A >> 2] + d0[A << 4 & 63] + "=="
  )) : i === 2 && (A = (y[a - 2] << 8) + y[a - 1], E.push(
    d0[A >> 10] + d0[A >> 4 & 63] + d0[A << 2 & 63] + "="
  )), E.join("");
}
var Cr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Cr.read = function(y, A, a, i, E) {
  var C, b, n = E * 8 - i - 1, F = (1 << n) - 1, x = F >> 1, c = -7, D = a ? E - 1 : 0, s = a ? -1 : 1, l = y[A + D];
  for (D += s, C = l & (1 << -c) - 1, l >>= -c, c += n; c > 0; C = C * 256 + y[A + D], D += s, c -= 8)
    ;
  for (b = C & (1 << -c) - 1, C >>= -c, c += i; c > 0; b = b * 256 + y[A + D], D += s, c -= 8)
    ;
  if (C === 0)
    C = 1 - x;
  else {
    if (C === F)
      return b ? NaN : (l ? -1 : 1) * (1 / 0);
    b = b + Math.pow(2, i), C = C - x;
  }
  return (l ? -1 : 1) * b * Math.pow(2, C - i);
};
Cr.write = function(y, A, a, i, E, C) {
  var b, n, F, x = C * 8 - E - 1, c = (1 << x) - 1, D = c >> 1, s = E === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = i ? 0 : C - 1, h = i ? 1 : -1, v = A < 0 || A === 0 && 1 / A < 0 ? 1 : 0;
  for (A = Math.abs(A), isNaN(A) || A === 1 / 0 ? (n = isNaN(A) ? 1 : 0, b = c) : (b = Math.floor(Math.log(A) / Math.LN2), A * (F = Math.pow(2, -b)) < 1 && (b--, F *= 2), b + D >= 1 ? A += s / F : A += s * Math.pow(2, 1 - D), A * F >= 2 && (b++, F /= 2), b + D >= c ? (n = 0, b = c) : b + D >= 1 ? (n = (A * F - 1) * Math.pow(2, E), b = b + D) : (n = A * Math.pow(2, D - 1) * Math.pow(2, E), b = 0)); E >= 8; y[a + l] = n & 255, l += h, n /= 256, E -= 8)
    ;
  for (b = b << E | n, x += E; x > 0; y[a + l] = b & 255, l += h, b /= 256, x -= 8)
    ;
  y[a + l - h] |= v * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(y) {
  const A = H0, a = Cr, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  y.Buffer = n, y.SlowBuffer = f, y.INSPECT_MAX_BYTES = 50;
  const E = 2147483647;
  y.kMaxLength = E, n.TYPED_ARRAY_SUPPORT = C(), !n.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function C() {
    try {
      const e = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), e.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(n.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (n.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(n.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (n.isBuffer(this))
        return this.byteOffset;
    }
  });
  function b(e) {
    if (e > E)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
    const r = new Uint8Array(e);
    return Object.setPrototypeOf(r, n.prototype), r;
  }
  function n(e, r, t) {
    if (typeof e == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return D(e);
    }
    return F(e, r, t);
  }
  n.poolSize = 8192;
  function F(e, r, t) {
    if (typeof e == "string")
      return s(e, r);
    if (ArrayBuffer.isView(e))
      return h(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
      );
    if (i0(e, ArrayBuffer) || e && i0(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (i0(e, SharedArrayBuffer) || e && i0(e.buffer, SharedArrayBuffer)))
      return v(e, r, t);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const o = e.valueOf && e.valueOf();
    if (o != null && o !== e)
      return n.from(o, r, t);
    const B = p(e);
    if (B) return B;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
      return n.from(e[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
    );
  }
  n.from = function(e, r, t) {
    return F(e, r, t);
  }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array);
  function x(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
  }
  function c(e, r, t) {
    return x(e), e <= 0 ? b(e) : r !== void 0 ? typeof t == "string" ? b(e).fill(r, t) : b(e).fill(r) : b(e);
  }
  n.alloc = function(e, r, t) {
    return c(e, r, t);
  };
  function D(e) {
    return x(e), b(e < 0 ? 0 : w(e) | 0);
  }
  n.allocUnsafe = function(e) {
    return D(e);
  }, n.allocUnsafeSlow = function(e) {
    return D(e);
  };
  function s(e, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !n.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const t = u(e, r) | 0;
    let o = b(t);
    const B = o.write(e, r);
    return B !== t && (o = o.slice(0, B)), o;
  }
  function l(e) {
    const r = e.length < 0 ? 0 : w(e.length) | 0, t = b(r);
    for (let o = 0; o < r; o += 1)
      t[o] = e[o] & 255;
    return t;
  }
  function h(e) {
    if (i0(e, Uint8Array)) {
      const r = new Uint8Array(e);
      return v(r.buffer, r.byteOffset, r.byteLength);
    }
    return l(e);
  }
  function v(e, r, t) {
    if (r < 0 || e.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < r + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let o;
    return r === void 0 && t === void 0 ? o = new Uint8Array(e) : t === void 0 ? o = new Uint8Array(e, r) : o = new Uint8Array(e, r, t), Object.setPrototypeOf(o, n.prototype), o;
  }
  function p(e) {
    if (n.isBuffer(e)) {
      const r = w(e.length) | 0, t = b(r);
      return t.length === 0 || e.copy(t, 0, 0, r), t;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || u0(e.length) ? b(0) : l(e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return l(e.data);
  }
  function w(e) {
    if (e >= E)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + E.toString(16) + " bytes");
    return e | 0;
  }
  function f(e) {
    return +e != e && (e = 0), n.alloc(+e);
  }
  n.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== n.prototype;
  }, n.compare = function(r, t) {
    if (i0(r, Uint8Array) && (r = n.from(r, r.offset, r.byteLength)), i0(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), !n.isBuffer(r) || !n.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === t) return 0;
    let o = r.length, B = t.length;
    for (let k = 0, U = Math.min(o, B); k < U; ++k)
      if (r[k] !== t[k]) {
        o = r[k], B = t[k];
        break;
      }
    return o < B ? -1 : B < o ? 1 : 0;
  }, n.isEncoding = function(r) {
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
  }, n.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return n.alloc(0);
    let o;
    if (t === void 0)
      for (t = 0, o = 0; o < r.length; ++o)
        t += r[o].length;
    const B = n.allocUnsafe(t);
    let k = 0;
    for (o = 0; o < r.length; ++o) {
      let U = r[o];
      if (i0(U, Uint8Array))
        k + U.length > B.length ? (n.isBuffer(U) || (U = n.from(U)), U.copy(B, k)) : Uint8Array.prototype.set.call(
          B,
          U,
          k
        );
      else if (n.isBuffer(U))
        U.copy(B, k);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      k += U.length;
    }
    return B;
  };
  function u(e, r) {
    if (n.isBuffer(e))
      return e.length;
    if (ArrayBuffer.isView(e) || i0(e, ArrayBuffer))
      return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e
      );
    const t = e.length, o = arguments.length > 2 && arguments[2] === !0;
    if (!o && t === 0) return 0;
    let B = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return A0(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return E0(e).length;
        default:
          if (B)
            return o ? -1 : A0(e).length;
          r = ("" + r).toLowerCase(), B = !0;
      }
  }
  n.byteLength = u;
  function d(e, r, t) {
    let o = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return J(this, r, t);
        case "utf8":
        case "utf-8":
          return N(this, r, t);
        case "ascii":
          return $(this, r, t);
        case "latin1":
        case "binary":
          return Q(this, r, t);
        case "base64":
          return T(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return j(this, r, t);
        default:
          if (o) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), o = !0;
      }
  }
  n.prototype._isBuffer = !0;
  function _(e, r, t) {
    const o = e[r];
    e[r] = e[t], e[t] = o;
  }
  n.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2)
      _(this, t, t + 1);
    return this;
  }, n.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4)
      _(this, t, t + 3), _(this, t + 1, t + 2);
    return this;
  }, n.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8)
      _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
    return this;
  }, n.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? N(this, 0, r) : d.apply(this, arguments);
  }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(r) {
    if (!n.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : n.compare(this, r) === 0;
  }, n.prototype.inspect = function() {
    let r = "";
    const t = y.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  }, i && (n.prototype[i] = n.prototype.inspect), n.prototype.compare = function(r, t, o, B, k) {
    if (i0(r, Uint8Array) && (r = n.from(r, r.offset, r.byteLength)), !n.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (t === void 0 && (t = 0), o === void 0 && (o = r ? r.length : 0), B === void 0 && (B = 0), k === void 0 && (k = this.length), t < 0 || o > r.length || B < 0 || k > this.length)
      throw new RangeError("out of range index");
    if (B >= k && t >= o)
      return 0;
    if (B >= k)
      return -1;
    if (t >= o)
      return 1;
    if (t >>>= 0, o >>>= 0, B >>>= 0, k >>>= 0, this === r) return 0;
    let U = k - B, X = o - t;
    const e0 = Math.min(U, X), t0 = this.slice(B, k), n0 = r.slice(t, o);
    for (let Z = 0; Z < e0; ++Z)
      if (t0[Z] !== n0[Z]) {
        U = t0[Z], X = n0[Z];
        break;
      }
    return U < X ? -1 : X < U ? 1 : 0;
  };
  function m(e, r, t, o, B) {
    if (e.length === 0) return -1;
    if (typeof t == "string" ? (o = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, u0(t) && (t = B ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
      if (B) return -1;
      t = e.length - 1;
    } else if (t < 0)
      if (B) t = 0;
      else return -1;
    if (typeof r == "string" && (r = n.from(r, o)), n.isBuffer(r))
      return r.length === 0 ? -1 : I(e, r, t, o, B);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? B ? Uint8Array.prototype.indexOf.call(e, r, t) : Uint8Array.prototype.lastIndexOf.call(e, r, t) : I(e, [r], t, o, B);
    throw new TypeError("val must be string, number or Buffer");
  }
  function I(e, r, t, o, B) {
    let k = 1, U = e.length, X = r.length;
    if (o !== void 0 && (o = String(o).toLowerCase(), o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le")) {
      if (e.length < 2 || r.length < 2)
        return -1;
      k = 2, U /= 2, X /= 2, t /= 2;
    }
    function e0(n0, Z) {
      return k === 1 ? n0[Z] : n0.readUInt16BE(Z * k);
    }
    let t0;
    if (B) {
      let n0 = -1;
      for (t0 = t; t0 < U; t0++)
        if (e0(e, t0) === e0(r, n0 === -1 ? 0 : t0 - n0)) {
          if (n0 === -1 && (n0 = t0), t0 - n0 + 1 === X) return n0 * k;
        } else
          n0 !== -1 && (t0 -= t0 - n0), n0 = -1;
    } else
      for (t + X > U && (t = U - X), t0 = t; t0 >= 0; t0--) {
        let n0 = !0;
        for (let Z = 0; Z < X; Z++)
          if (e0(e, t0 + Z) !== e0(r, Z)) {
            n0 = !1;
            break;
          }
        if (n0) return t0;
      }
    return -1;
  }
  n.prototype.includes = function(r, t, o) {
    return this.indexOf(r, t, o) !== -1;
  }, n.prototype.indexOf = function(r, t, o) {
    return m(this, r, t, o, !0);
  }, n.prototype.lastIndexOf = function(r, t, o) {
    return m(this, r, t, o, !1);
  };
  function H(e, r, t, o) {
    t = Number(t) || 0;
    const B = e.length - t;
    o ? (o = Number(o), o > B && (o = B)) : o = B;
    const k = r.length;
    o > k / 2 && (o = k / 2);
    let U;
    for (U = 0; U < o; ++U) {
      const X = parseInt(r.substr(U * 2, 2), 16);
      if (u0(X)) return U;
      e[t + U] = X;
    }
    return U;
  }
  function q(e, r, t, o) {
    return s0(A0(r, e.length - t), e, t, o);
  }
  function g(e, r, t, o) {
    return s0(g0(r), e, t, o);
  }
  function S(e, r, t, o) {
    return s0(E0(r), e, t, o);
  }
  function z(e, r, t, o) {
    return s0(S0(r, e.length - t), e, t, o);
  }
  n.prototype.write = function(r, t, o, B) {
    if (t === void 0)
      B = "utf8", o = this.length, t = 0;
    else if (o === void 0 && typeof t == "string")
      B = t, o = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(o) ? (o = o >>> 0, B === void 0 && (B = "utf8")) : (B = o, o = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const k = this.length - t;
    if ((o === void 0 || o > k) && (o = k), r.length > 0 && (o < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    B || (B = "utf8");
    let U = !1;
    for (; ; )
      switch (B) {
        case "hex":
          return H(this, r, t, o);
        case "utf8":
        case "utf-8":
          return q(this, r, t, o);
        case "ascii":
        case "latin1":
        case "binary":
          return g(this, r, t, o);
        case "base64":
          return S(this, r, t, o);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return z(this, r, t, o);
        default:
          if (U) throw new TypeError("Unknown encoding: " + B);
          B = ("" + B).toLowerCase(), U = !0;
      }
  }, n.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function T(e, r, t) {
    return r === 0 && t === e.length ? A.fromByteArray(e) : A.fromByteArray(e.slice(r, t));
  }
  function N(e, r, t) {
    t = Math.min(e.length, t);
    const o = [];
    let B = r;
    for (; B < t; ) {
      const k = e[B];
      let U = null, X = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
      if (B + X <= t) {
        let e0, t0, n0, Z;
        switch (X) {
          case 1:
            k < 128 && (U = k);
            break;
          case 2:
            e0 = e[B + 1], (e0 & 192) === 128 && (Z = (k & 31) << 6 | e0 & 63, Z > 127 && (U = Z));
            break;
          case 3:
            e0 = e[B + 1], t0 = e[B + 2], (e0 & 192) === 128 && (t0 & 192) === 128 && (Z = (k & 15) << 12 | (e0 & 63) << 6 | t0 & 63, Z > 2047 && (Z < 55296 || Z > 57343) && (U = Z));
            break;
          case 4:
            e0 = e[B + 1], t0 = e[B + 2], n0 = e[B + 3], (e0 & 192) === 128 && (t0 & 192) === 128 && (n0 & 192) === 128 && (Z = (k & 15) << 18 | (e0 & 63) << 12 | (t0 & 63) << 6 | n0 & 63, Z > 65535 && Z < 1114112 && (U = Z));
        }
      }
      U === null ? (U = 65533, X = 1) : U > 65535 && (U -= 65536, o.push(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), o.push(U), B += X;
    }
    return K(o);
  }
  const O = 4096;
  function K(e) {
    const r = e.length;
    if (r <= O)
      return String.fromCharCode.apply(String, e);
    let t = "", o = 0;
    for (; o < r; )
      t += String.fromCharCode.apply(
        String,
        e.slice(o, o += O)
      );
    return t;
  }
  function $(e, r, t) {
    let o = "";
    t = Math.min(e.length, t);
    for (let B = r; B < t; ++B)
      o += String.fromCharCode(e[B] & 127);
    return o;
  }
  function Q(e, r, t) {
    let o = "";
    t = Math.min(e.length, t);
    for (let B = r; B < t; ++B)
      o += String.fromCharCode(e[B]);
    return o;
  }
  function J(e, r, t) {
    const o = e.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > o) && (t = o);
    let B = "";
    for (let k = r; k < t; ++k)
      B += m0[e[k]];
    return B;
  }
  function j(e, r, t) {
    const o = e.slice(r, t);
    let B = "";
    for (let k = 0; k < o.length - 1; k += 2)
      B += String.fromCharCode(o[k] + o[k + 1] * 256);
    return B;
  }
  n.prototype.slice = function(r, t) {
    const o = this.length;
    r = ~~r, t = t === void 0 ? o : ~~t, r < 0 ? (r += o, r < 0 && (r = 0)) : r > o && (r = o), t < 0 ? (t += o, t < 0 && (t = 0)) : t > o && (t = o), t < r && (t = r);
    const B = this.subarray(r, t);
    return Object.setPrototypeOf(B, n.prototype), B;
  };
  function R(e, r, t) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
  }
  n.prototype.readUintLE = n.prototype.readUIntLE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let B = this[r], k = 1, U = 0;
    for (; ++U < t && (k *= 256); )
      B += this[r + U] * k;
    return B;
  }, n.prototype.readUintBE = n.prototype.readUIntBE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let B = this[r + --t], k = 1;
    for (; t > 0 && (k *= 256); )
      B += this[r + --t] * k;
    return B;
  }, n.prototype.readUint8 = n.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || R(r, 1, this.length), this[r];
  }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || R(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || R(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, n.prototype.readBigUInt64LE = h0(function(r) {
    r = r >>> 0, o0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const B = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, k = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + o * 2 ** 24;
    return BigInt(B) + (BigInt(k) << BigInt(32));
  }), n.prototype.readBigUInt64BE = h0(function(r) {
    r = r >>> 0, o0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const B = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], k = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + o;
    return (BigInt(B) << BigInt(32)) + BigInt(k);
  }), n.prototype.readIntLE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let B = this[r], k = 1, U = 0;
    for (; ++U < t && (k *= 256); )
      B += this[r + U] * k;
    return k *= 128, B >= k && (B -= Math.pow(2, 8 * t)), B;
  }, n.prototype.readIntBE = function(r, t, o) {
    r = r >>> 0, t = t >>> 0, o || R(r, t, this.length);
    let B = t, k = 1, U = this[r + --B];
    for (; B > 0 && (k *= 256); )
      U += this[r + --B] * k;
    return k *= 128, U >= k && (U -= Math.pow(2, 8 * t)), U;
  }, n.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || R(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, n.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || R(r, 2, this.length);
    const o = this[r] | this[r + 1] << 8;
    return o & 32768 ? o | 4294901760 : o;
  }, n.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || R(r, 2, this.length);
    const o = this[r + 1] | this[r] << 8;
    return o & 32768 ? o | 4294901760 : o;
  }, n.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, n.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, n.prototype.readBigInt64LE = h0(function(r) {
    r = r >>> 0, o0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const B = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (o << 24);
    return (BigInt(B) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), n.prototype.readBigInt64BE = h0(function(r) {
    r = r >>> 0, o0(r, "offset");
    const t = this[r], o = this[r + 7];
    (t === void 0 || o === void 0) && x0(r, this.length - 8);
    const B = (t << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(B) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + o);
  }), n.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), a.read(this, r, !0, 23, 4);
  }, n.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || R(r, 4, this.length), a.read(this, r, !1, 23, 4);
  }, n.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || R(r, 8, this.length), a.read(this, r, !0, 52, 8);
  }, n.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || R(r, 8, this.length), a.read(this, r, !1, 52, 8);
  };
  function P(e, r, t, o, B, k) {
    if (!n.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > B || r < k) throw new RangeError('"value" argument is out of bounds');
    if (t + o > e.length) throw new RangeError("Index out of range");
  }
  n.prototype.writeUintLE = n.prototype.writeUIntLE = function(r, t, o, B) {
    if (r = +r, t = t >>> 0, o = o >>> 0, !B) {
      const X = Math.pow(2, 8 * o) - 1;
      P(this, r, t, o, X, 0);
    }
    let k = 1, U = 0;
    for (this[t] = r & 255; ++U < o && (k *= 256); )
      this[t + U] = r / k & 255;
    return t + o;
  }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(r, t, o, B) {
    if (r = +r, t = t >>> 0, o = o >>> 0, !B) {
      const X = Math.pow(2, 8 * o) - 1;
      P(this, r, t, o, X, 0);
    }
    let k = o - 1, U = 1;
    for (this[t + k] = r & 255; --k >= 0 && (U *= 256); )
      this[t + k] = r / U & 255;
    return t + o;
  }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function L(e, r, t, o, B) {
    v0(r, o, B, e, t, 7);
    let k = Number(r & BigInt(4294967295));
    e[t++] = k, k = k >> 8, e[t++] = k, k = k >> 8, e[t++] = k, k = k >> 8, e[t++] = k;
    let U = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t++] = U, U = U >> 8, e[t++] = U, U = U >> 8, e[t++] = U, U = U >> 8, e[t++] = U, t;
  }
  function W(e, r, t, o, B) {
    v0(r, o, B, e, t, 7);
    let k = Number(r & BigInt(4294967295));
    e[t + 7] = k, k = k >> 8, e[t + 6] = k, k = k >> 8, e[t + 5] = k, k = k >> 8, e[t + 4] = k;
    let U = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t + 3] = U, U = U >> 8, e[t + 2] = U, U = U >> 8, e[t + 1] = U, U = U >> 8, e[t] = U, t + 8;
  }
  n.prototype.writeBigUInt64LE = h0(function(r, t = 0) {
    return L(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), n.prototype.writeBigUInt64BE = h0(function(r, t = 0) {
    return W(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), n.prototype.writeIntLE = function(r, t, o, B) {
    if (r = +r, t = t >>> 0, !B) {
      const e0 = Math.pow(2, 8 * o - 1);
      P(this, r, t, o, e0 - 1, -e0);
    }
    let k = 0, U = 1, X = 0;
    for (this[t] = r & 255; ++k < o && (U *= 256); )
      r < 0 && X === 0 && this[t + k - 1] !== 0 && (X = 1), this[t + k] = (r / U >> 0) - X & 255;
    return t + o;
  }, n.prototype.writeIntBE = function(r, t, o, B) {
    if (r = +r, t = t >>> 0, !B) {
      const e0 = Math.pow(2, 8 * o - 1);
      P(this, r, t, o, e0 - 1, -e0);
    }
    let k = o - 1, U = 1, X = 0;
    for (this[t + k] = r & 255; --k >= 0 && (U *= 256); )
      r < 0 && X === 0 && this[t + k + 1] !== 0 && (X = 1), this[t + k] = (r / U >> 0) - X & 255;
    return t + o;
  }, n.prototype.writeInt8 = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  }, n.prototype.writeInt16LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, n.prototype.writeInt16BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, n.prototype.writeInt32LE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  }, n.prototype.writeInt32BE = function(r, t, o) {
    return r = +r, t = t >>> 0, o || P(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  }, n.prototype.writeBigInt64LE = h0(function(r, t = 0) {
    return L(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), n.prototype.writeBigInt64BE = h0(function(r, t = 0) {
    return W(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function r0(e, r, t, o, B, k) {
    if (t + o > e.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  function Y(e, r, t, o, B) {
    return r = +r, t = t >>> 0, B || r0(e, r, t, 4), a.write(e, r, t, o, 23, 4), t + 4;
  }
  n.prototype.writeFloatLE = function(r, t, o) {
    return Y(this, r, t, !0, o);
  }, n.prototype.writeFloatBE = function(r, t, o) {
    return Y(this, r, t, !1, o);
  };
  function c0(e, r, t, o, B) {
    return r = +r, t = t >>> 0, B || r0(e, r, t, 8), a.write(e, r, t, o, 52, 8), t + 8;
  }
  n.prototype.writeDoubleLE = function(r, t, o) {
    return c0(this, r, t, !0, o);
  }, n.prototype.writeDoubleBE = function(r, t, o) {
    return c0(this, r, t, !1, o);
  }, n.prototype.copy = function(r, t, o, B) {
    if (!n.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (o || (o = 0), !B && B !== 0 && (B = this.length), t >= r.length && (t = r.length), t || (t = 0), B > 0 && B < o && (B = o), B === o || r.length === 0 || this.length === 0) return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (o < 0 || o >= this.length) throw new RangeError("Index out of range");
    if (B < 0) throw new RangeError("sourceEnd out of bounds");
    B > this.length && (B = this.length), r.length - t < B - o && (B = r.length - t + o);
    const k = B - o;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, o, B) : Uint8Array.prototype.set.call(
      r,
      this.subarray(o, B),
      t
    ), k;
  }, n.prototype.fill = function(r, t, o, B) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (B = t, t = 0, o = this.length) : typeof o == "string" && (B = o, o = this.length), B !== void 0 && typeof B != "string")
        throw new TypeError("encoding must be a string");
      if (typeof B == "string" && !n.isEncoding(B))
        throw new TypeError("Unknown encoding: " + B);
      if (r.length === 1) {
        const U = r.charCodeAt(0);
        (B === "utf8" && U < 128 || B === "latin1") && (r = U);
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < o)
      throw new RangeError("Out of range index");
    if (o <= t)
      return this;
    t = t >>> 0, o = o === void 0 ? this.length : o >>> 0, r || (r = 0);
    let k;
    if (typeof r == "number")
      for (k = t; k < o; ++k)
        this[k] = r;
    else {
      const U = n.isBuffer(r) ? r : n.from(r, B), X = U.length;
      if (X === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (k = 0; k < o - t; ++k)
        this[k + t] = U[k % X];
    }
    return this;
  };
  const M = {};
  function p0(e, r, t) {
    M[e] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
      }
      get code() {
        return e;
      }
      set code(B) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: B,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  p0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), p0(
    "ERR_INVALID_ARG_TYPE",
    function(e, r) {
      return `The "${e}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), p0(
    "ERR_OUT_OF_RANGE",
    function(e, r, t) {
      let o = `The value of "${e}" is out of range.`, B = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? B = B0(String(t)) : typeof t == "bigint" && (B = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (B = B0(B)), B += "n"), o += ` It must be ${r}. Received ${B}`, o;
    },
    RangeError
  );
  function B0(e) {
    let r = "", t = e.length;
    const o = e[0] === "-" ? 1 : 0;
    for (; t >= o + 4; t -= 3)
      r = `_${e.slice(t - 3, t)}${r}`;
    return `${e.slice(0, t)}${r}`;
  }
  function I0(e, r, t) {
    o0(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && x0(r, e.length - (t + 1));
  }
  function v0(e, r, t, o, B, k) {
    if (e > t || e < r) {
      const U = typeof r == "bigint" ? "n" : "";
      let X;
      throw r === 0 || r === BigInt(0) ? X = `>= 0${U} and < 2${U} ** ${(k + 1) * 8}${U}` : X = `>= -(2${U} ** ${(k + 1) * 8 - 1}${U}) and < 2 ** ${(k + 1) * 8 - 1}${U}`, new M.ERR_OUT_OF_RANGE("value", X, e);
    }
    I0(o, B, k);
  }
  function o0(e, r) {
    if (typeof e != "number")
      throw new M.ERR_INVALID_ARG_TYPE(r, "number", e);
  }
  function x0(e, r, t) {
    throw Math.floor(e) !== e ? (o0(e, t), new M.ERR_OUT_OF_RANGE("offset", "an integer", e)) : r < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS() : new M.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${r}`,
      e
    );
  }
  const _0 = /[^+/0-9A-Za-z-_]/g;
  function D0(e) {
    if (e = e.split("=")[0], e = e.trim().replace(_0, ""), e.length < 2) return "";
    for (; e.length % 4 !== 0; )
      e = e + "=";
    return e;
  }
  function A0(e, r) {
    r = r || 1 / 0;
    let t;
    const o = e.length;
    let B = null;
    const k = [];
    for (let U = 0; U < o; ++U) {
      if (t = e.charCodeAt(U), t > 55295 && t < 57344) {
        if (!B) {
          if (t > 56319) {
            (r -= 3) > -1 && k.push(239, 191, 189);
            continue;
          } else if (U + 1 === o) {
            (r -= 3) > -1 && k.push(239, 191, 189);
            continue;
          }
          B = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && k.push(239, 191, 189), B = t;
          continue;
        }
        t = (B - 55296 << 10 | t - 56320) + 65536;
      } else B && (r -= 3) > -1 && k.push(239, 191, 189);
      if (B = null, t < 128) {
        if ((r -= 1) < 0) break;
        k.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0) break;
        k.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((r -= 3) < 0) break;
        k.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((r -= 4) < 0) break;
        k.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return k;
  }
  function g0(e) {
    const r = [];
    for (let t = 0; t < e.length; ++t)
      r.push(e.charCodeAt(t) & 255);
    return r;
  }
  function S0(e, r) {
    let t, o, B;
    const k = [];
    for (let U = 0; U < e.length && !((r -= 2) < 0); ++U)
      t = e.charCodeAt(U), o = t >> 8, B = t % 256, k.push(B), k.push(o);
    return k;
  }
  function E0(e) {
    return A.toByteArray(D0(e));
  }
  function s0(e, r, t, o) {
    let B;
    for (B = 0; B < o && !(B + t >= r.length || B >= e.length); ++B)
      r[B + t] = e[B];
    return B;
  }
  function i0(e, r) {
    return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
  }
  function u0(e) {
    return e !== e;
  }
  const m0 = function() {
    const e = "0123456789abcdef", r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const o = t * 16;
      for (let B = 0; B < 16; ++B)
        r[o + B] = e[t] + e[B];
    }
    return r;
  }();
  function h0(e) {
    return typeof BigInt > "u" ? C0 : e;
  }
  function C0() {
    throw new Error("BigInt not supported");
  }
})(R0);
var Bt = { exports: {} };
function Vt(y) {
  throw new Error('Could not dynamically require "' + y + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var z0 = { exports: {} };
const Qt = {}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qt
}, Symbol.toStringTag, { value: "Module" })), Zt = /* @__PURE__ */ Wt(jt);
var Ir;
function V() {
  return Ir || (Ir = 1, function(y, A) {
    (function(a, i) {
      y.exports = i();
    })(G, function() {
      var a = a || function(i, E) {
        var C;
        if (typeof window < "u" && window.crypto && (C = window.crypto), typeof self < "u" && self.crypto && (C = self.crypto), typeof globalThis < "u" && globalThis.crypto && (C = globalThis.crypto), !C && typeof window < "u" && window.msCrypto && (C = window.msCrypto), !C && typeof globalThis < "u" && globalThis.crypto && (C = globalThis.crypto), !C && typeof Vt == "function")
          try {
            C = Zt;
          } catch {
          }
        var b = function() {
          if (C) {
            if (typeof C.getRandomValues == "function")
              try {
                return C.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof C.randomBytes == "function")
              try {
                return C.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, n = Object.create || /* @__PURE__ */ function() {
          function f() {
          }
          return function(u) {
            var d;
            return f.prototype = u, d = new f(), f.prototype = null, d;
          };
        }(), F = {}, x = F.lib = {}, c = x.Base = /* @__PURE__ */ function() {
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
            extend: function(f) {
              var u = n(this);
              return f && u.mixIn(f), (!u.hasOwnProperty("init") || this.init === u.init) && (u.init = function() {
                u.$super.init.apply(this, arguments);
              }), u.init.prototype = u, u.$super = this, u;
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
              var f = this.extend();
              return f.init.apply(f, arguments), f;
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
            mixIn: function(f) {
              for (var u in f)
                f.hasOwnProperty(u) && (this[u] = f[u]);
              f.hasOwnProperty("toString") && (this.toString = f.toString);
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
        }(), D = x.WordArray = c.extend({
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
          init: function(f, u) {
            f = this.words = f || [], u != E ? this.sigBytes = u : this.sigBytes = f.length * 4;
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
          toString: function(f) {
            return (f || l).stringify(this);
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
          concat: function(f) {
            var u = this.words, d = f.words, _ = this.sigBytes, m = f.sigBytes;
            if (this.clamp(), _ % 4)
              for (var I = 0; I < m; I++) {
                var H = d[I >>> 2] >>> 24 - I % 4 * 8 & 255;
                u[_ + I >>> 2] |= H << 24 - (_ + I) % 4 * 8;
              }
            else
              for (var q = 0; q < m; q += 4)
                u[_ + q >>> 2] = d[q >>> 2];
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
            var f = this.words, u = this.sigBytes;
            f[u >>> 2] &= 4294967295 << 32 - u % 4 * 8, f.length = i.ceil(u / 4);
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
            var f = c.clone.call(this);
            return f.words = this.words.slice(0), f;
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
          random: function(f) {
            for (var u = [], d = 0; d < f; d += 4)
              u.push(b());
            return new D.init(u, f);
          }
        }), s = F.enc = {}, l = s.Hex = {
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
          stringify: function(f) {
            for (var u = f.words, d = f.sigBytes, _ = [], m = 0; m < d; m++) {
              var I = u[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              _.push((I >>> 4).toString(16)), _.push((I & 15).toString(16));
            }
            return _.join("");
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
          parse: function(f) {
            for (var u = f.length, d = [], _ = 0; _ < u; _ += 2)
              d[_ >>> 3] |= parseInt(f.substr(_, 2), 16) << 24 - _ % 8 * 4;
            return new D.init(d, u / 2);
          }
        }, h = s.Latin1 = {
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
          stringify: function(f) {
            for (var u = f.words, d = f.sigBytes, _ = [], m = 0; m < d; m++) {
              var I = u[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              _.push(String.fromCharCode(I));
            }
            return _.join("");
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
          parse: function(f) {
            for (var u = f.length, d = [], _ = 0; _ < u; _++)
              d[_ >>> 2] |= (f.charCodeAt(_) & 255) << 24 - _ % 4 * 8;
            return new D.init(d, u);
          }
        }, v = s.Utf8 = {
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
          stringify: function(f) {
            try {
              return decodeURIComponent(escape(h.stringify(f)));
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
          parse: function(f) {
            return h.parse(unescape(encodeURIComponent(f)));
          }
        }, p = x.BufferedBlockAlgorithm = c.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new D.init(), this._nDataBytes = 0;
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
          _append: function(f) {
            typeof f == "string" && (f = v.parse(f)), this._data.concat(f), this._nDataBytes += f.sigBytes;
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
          _process: function(f) {
            var u, d = this._data, _ = d.words, m = d.sigBytes, I = this.blockSize, H = I * 4, q = m / H;
            f ? q = i.ceil(q) : q = i.max((q | 0) - this._minBufferSize, 0);
            var g = q * I, S = i.min(g * 4, m);
            if (g) {
              for (var z = 0; z < g; z += I)
                this._doProcessBlock(_, z);
              u = _.splice(0, g), d.sigBytes -= S;
            }
            return new D.init(u, S);
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
            var f = c.clone.call(this);
            return f._data = this._data.clone(), f;
          },
          _minBufferSize: 0
        });
        x.Hasher = p.extend({
          /**
           * Configuration options.
           */
          cfg: c.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(f) {
            this.cfg = this.cfg.extend(f), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            p.reset.call(this), this._doReset();
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
          update: function(f) {
            return this._append(f), this._process(), this;
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
          finalize: function(f) {
            f && this._append(f);
            var u = this._doFinalize();
            return u;
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
          _createHelper: function(f) {
            return function(u, d) {
              return new f.init(d).finalize(u);
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
          _createHmacHelper: function(f) {
            return function(u, d) {
              return new w.HMAC.init(f, d).finalize(u);
            };
          }
        });
        var w = F.algo = {};
        return F;
      }(Math);
      return a;
    });
  }(z0)), z0.exports;
}
var T0 = { exports: {} }, Sr;
function U0() {
  return Sr || (Sr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function(i) {
        var E = a, C = E.lib, b = C.Base, n = C.WordArray, F = E.x64 = {};
        F.Word = b.extend({
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
          init: function(x, c) {
            this.high = x, this.low = c;
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
        }), F.WordArray = b.extend({
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
          init: function(x, c) {
            x = this.words = x || [], c != i ? this.sigBytes = c : this.sigBytes = x.length * 8;
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
            for (var x = this.words, c = x.length, D = [], s = 0; s < c; s++) {
              var l = x[s];
              D.push(l.high), D.push(l.low);
            }
            return n.create(D, this.sigBytes);
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
            for (var x = b.clone.call(this), c = x.words = this.words.slice(0), D = c.length, s = 0; s < D; s++)
              c[s] = c[s].clone();
            return x;
          }
        });
      }(), a;
    });
  }(T0)), T0.exports;
}
var W0 = { exports: {} }, Rr;
function Yt() {
  return Rr || (Rr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var i = a, E = i.lib, C = E.WordArray, b = C.init, n = C.init = function(F) {
            if (F instanceof ArrayBuffer && (F = new Uint8Array(F)), (F instanceof Int8Array || typeof Uint8ClampedArray < "u" && F instanceof Uint8ClampedArray || F instanceof Int16Array || F instanceof Uint16Array || F instanceof Int32Array || F instanceof Uint32Array || F instanceof Float32Array || F instanceof Float64Array) && (F = new Uint8Array(F.buffer, F.byteOffset, F.byteLength)), F instanceof Uint8Array) {
              for (var x = F.byteLength, c = [], D = 0; D < x; D++)
                c[D >>> 2] |= F[D] << 24 - D % 4 * 8;
              b.call(this, c, x);
            } else
              b.apply(this, arguments);
          };
          n.prototype = C;
        }
      }(), a.lib.WordArray;
    });
  }(W0)), W0.exports;
}
var L0 = { exports: {} }, Hr;
function Jt() {
  return Hr || (Hr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.WordArray, b = i.enc;
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
          stringify: function(F) {
            for (var x = F.words, c = F.sigBytes, D = [], s = 0; s < c; s += 2) {
              var l = x[s >>> 2] >>> 16 - s % 4 * 8 & 65535;
              D.push(String.fromCharCode(l));
            }
            return D.join("");
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
          parse: function(F) {
            for (var x = F.length, c = [], D = 0; D < x; D++)
              c[D >>> 1] |= F.charCodeAt(D) << 16 - D % 2 * 16;
            return C.create(c, x * 2);
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
          stringify: function(F) {
            for (var x = F.words, c = F.sigBytes, D = [], s = 0; s < c; s += 2) {
              var l = n(x[s >>> 2] >>> 16 - s % 4 * 8 & 65535);
              D.push(String.fromCharCode(l));
            }
            return D.join("");
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
          parse: function(F) {
            for (var x = F.length, c = [], D = 0; D < x; D++)
              c[D >>> 1] |= n(F.charCodeAt(D) << 16 - D % 2 * 16);
            return C.create(c, x * 2);
          }
        };
        function n(F) {
          return F << 8 & 4278255360 | F >>> 8 & 16711935;
        }
      }(), a.enc.Utf16;
    });
  }(L0)), L0.exports;
}
var q0 = { exports: {} }, Ur;
function w0() {
  return Ur || (Ur = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.WordArray, b = i.enc;
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
          stringify: function(F) {
            var x = F.words, c = F.sigBytes, D = this._map;
            F.clamp();
            for (var s = [], l = 0; l < c; l += 3)
              for (var h = x[l >>> 2] >>> 24 - l % 4 * 8 & 255, v = x[l + 1 >>> 2] >>> 24 - (l + 1) % 4 * 8 & 255, p = x[l + 2 >>> 2] >>> 24 - (l + 2) % 4 * 8 & 255, w = h << 16 | v << 8 | p, f = 0; f < 4 && l + f * 0.75 < c; f++)
                s.push(D.charAt(w >>> 6 * (3 - f) & 63));
            var u = D.charAt(64);
            if (u)
              for (; s.length % 4; )
                s.push(u);
            return s.join("");
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
          parse: function(F) {
            var x = F.length, c = this._map, D = this._reverseMap;
            if (!D) {
              D = this._reverseMap = [];
              for (var s = 0; s < c.length; s++)
                D[c.charCodeAt(s)] = s;
            }
            var l = c.charAt(64);
            if (l) {
              var h = F.indexOf(l);
              h !== -1 && (x = h);
            }
            return n(F, x, D);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function n(F, x, c) {
          for (var D = [], s = 0, l = 0; l < x; l++)
            if (l % 4) {
              var h = c[F.charCodeAt(l - 1)] << l % 4 * 2, v = c[F.charCodeAt(l)] >>> 6 - l % 4 * 2, p = h | v;
              D[s >>> 2] |= p << 24 - s % 4 * 8, s++;
            }
          return C.create(D, s);
        }
      }(), a.enc.Base64;
    });
  }(q0)), q0.exports;
}
var N0 = { exports: {} }, Pr;
function $t() {
  return Pr || (Pr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.WordArray, b = i.enc;
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
          stringify: function(F, x) {
            x === void 0 && (x = !0);
            var c = F.words, D = F.sigBytes, s = x ? this._safe_map : this._map;
            F.clamp();
            for (var l = [], h = 0; h < D; h += 3)
              for (var v = c[h >>> 2] >>> 24 - h % 4 * 8 & 255, p = c[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, w = c[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, f = v << 16 | p << 8 | w, u = 0; u < 4 && h + u * 0.75 < D; u++)
                l.push(s.charAt(f >>> 6 * (3 - u) & 63));
            var d = s.charAt(64);
            if (d)
              for (; l.length % 4; )
                l.push(d);
            return l.join("");
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
          parse: function(F, x) {
            x === void 0 && (x = !0);
            var c = F.length, D = x ? this._safe_map : this._map, s = this._reverseMap;
            if (!s) {
              s = this._reverseMap = [];
              for (var l = 0; l < D.length; l++)
                s[D.charCodeAt(l)] = l;
            }
            var h = D.charAt(64);
            if (h) {
              var v = F.indexOf(h);
              v !== -1 && (c = v);
            }
            return n(F, c, s);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function n(F, x, c) {
          for (var D = [], s = 0, l = 0; l < x; l++)
            if (l % 4) {
              var h = c[F.charCodeAt(l - 1)] << l % 4 * 2, v = c[F.charCodeAt(l)] >>> 6 - l % 4 * 2, p = h | v;
              D[s >>> 2] |= p << 24 - s % 4 * 8, s++;
            }
          return C.create(D, s);
        }
      }(), a.enc.Base64url;
    });
  }(N0)), N0.exports;
}
var O0 = { exports: {} }, zr;
function b0() {
  return zr || (zr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function(i) {
        var E = a, C = E.lib, b = C.WordArray, n = C.Hasher, F = E.algo, x = [];
        (function() {
          for (var v = 0; v < 64; v++)
            x[v] = i.abs(i.sin(v + 1)) * 4294967296 | 0;
        })();
        var c = F.MD5 = n.extend({
          _doReset: function() {
            this._hash = new b.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(v, p) {
            for (var w = 0; w < 16; w++) {
              var f = p + w, u = v[f];
              v[f] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360;
            }
            var d = this._hash.words, _ = v[p + 0], m = v[p + 1], I = v[p + 2], H = v[p + 3], q = v[p + 4], g = v[p + 5], S = v[p + 6], z = v[p + 7], T = v[p + 8], N = v[p + 9], O = v[p + 10], K = v[p + 11], $ = v[p + 12], Q = v[p + 13], J = v[p + 14], j = v[p + 15], R = d[0], P = d[1], L = d[2], W = d[3];
            R = D(R, P, L, W, _, 7, x[0]), W = D(W, R, P, L, m, 12, x[1]), L = D(L, W, R, P, I, 17, x[2]), P = D(P, L, W, R, H, 22, x[3]), R = D(R, P, L, W, q, 7, x[4]), W = D(W, R, P, L, g, 12, x[5]), L = D(L, W, R, P, S, 17, x[6]), P = D(P, L, W, R, z, 22, x[7]), R = D(R, P, L, W, T, 7, x[8]), W = D(W, R, P, L, N, 12, x[9]), L = D(L, W, R, P, O, 17, x[10]), P = D(P, L, W, R, K, 22, x[11]), R = D(R, P, L, W, $, 7, x[12]), W = D(W, R, P, L, Q, 12, x[13]), L = D(L, W, R, P, J, 17, x[14]), P = D(P, L, W, R, j, 22, x[15]), R = s(R, P, L, W, m, 5, x[16]), W = s(W, R, P, L, S, 9, x[17]), L = s(L, W, R, P, K, 14, x[18]), P = s(P, L, W, R, _, 20, x[19]), R = s(R, P, L, W, g, 5, x[20]), W = s(W, R, P, L, O, 9, x[21]), L = s(L, W, R, P, j, 14, x[22]), P = s(P, L, W, R, q, 20, x[23]), R = s(R, P, L, W, N, 5, x[24]), W = s(W, R, P, L, J, 9, x[25]), L = s(L, W, R, P, H, 14, x[26]), P = s(P, L, W, R, T, 20, x[27]), R = s(R, P, L, W, Q, 5, x[28]), W = s(W, R, P, L, I, 9, x[29]), L = s(L, W, R, P, z, 14, x[30]), P = s(P, L, W, R, $, 20, x[31]), R = l(R, P, L, W, g, 4, x[32]), W = l(W, R, P, L, T, 11, x[33]), L = l(L, W, R, P, K, 16, x[34]), P = l(P, L, W, R, J, 23, x[35]), R = l(R, P, L, W, m, 4, x[36]), W = l(W, R, P, L, q, 11, x[37]), L = l(L, W, R, P, z, 16, x[38]), P = l(P, L, W, R, O, 23, x[39]), R = l(R, P, L, W, Q, 4, x[40]), W = l(W, R, P, L, _, 11, x[41]), L = l(L, W, R, P, H, 16, x[42]), P = l(P, L, W, R, S, 23, x[43]), R = l(R, P, L, W, N, 4, x[44]), W = l(W, R, P, L, $, 11, x[45]), L = l(L, W, R, P, j, 16, x[46]), P = l(P, L, W, R, I, 23, x[47]), R = h(R, P, L, W, _, 6, x[48]), W = h(W, R, P, L, z, 10, x[49]), L = h(L, W, R, P, J, 15, x[50]), P = h(P, L, W, R, g, 21, x[51]), R = h(R, P, L, W, $, 6, x[52]), W = h(W, R, P, L, H, 10, x[53]), L = h(L, W, R, P, O, 15, x[54]), P = h(P, L, W, R, m, 21, x[55]), R = h(R, P, L, W, T, 6, x[56]), W = h(W, R, P, L, j, 10, x[57]), L = h(L, W, R, P, S, 15, x[58]), P = h(P, L, W, R, Q, 21, x[59]), R = h(R, P, L, W, q, 6, x[60]), W = h(W, R, P, L, K, 10, x[61]), L = h(L, W, R, P, I, 15, x[62]), P = h(P, L, W, R, N, 21, x[63]), d[0] = d[0] + R | 0, d[1] = d[1] + P | 0, d[2] = d[2] + L | 0, d[3] = d[3] + W | 0;
          },
          _doFinalize: function() {
            var v = this._data, p = v.words, w = this._nDataBytes * 8, f = v.sigBytes * 8;
            p[f >>> 5] |= 128 << 24 - f % 32;
            var u = i.floor(w / 4294967296), d = w;
            p[(f + 64 >>> 9 << 4) + 15] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, p[(f + 64 >>> 9 << 4) + 14] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, v.sigBytes = (p.length + 1) * 4, this._process();
            for (var _ = this._hash, m = _.words, I = 0; I < 4; I++) {
              var H = m[I];
              m[I] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360;
            }
            return _;
          },
          clone: function() {
            var v = n.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function D(v, p, w, f, u, d, _) {
          var m = v + (p & w | ~p & f) + u + _;
          return (m << d | m >>> 32 - d) + p;
        }
        function s(v, p, w, f, u, d, _) {
          var m = v + (p & f | w & ~f) + u + _;
          return (m << d | m >>> 32 - d) + p;
        }
        function l(v, p, w, f, u, d, _) {
          var m = v + (p ^ w ^ f) + u + _;
          return (m << d | m >>> 32 - d) + p;
        }
        function h(v, p, w, f, u, d, _) {
          var m = v + (w ^ (p | ~f)) + u + _;
          return (m << d | m >>> 32 - d) + p;
        }
        E.MD5 = n._createHelper(c), E.HmacMD5 = n._createHmacHelper(c);
      }(Math), a.MD5;
    });
  }(O0)), O0.exports;
}
var M0 = { exports: {} }, Tr;
function vt() {
  return Tr || (Tr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.WordArray, b = E.Hasher, n = i.algo, F = [], x = n.SHA1 = b.extend({
          _doReset: function() {
            this._hash = new C.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(c, D) {
            for (var s = this._hash.words, l = s[0], h = s[1], v = s[2], p = s[3], w = s[4], f = 0; f < 80; f++) {
              if (f < 16)
                F[f] = c[D + f] | 0;
              else {
                var u = F[f - 3] ^ F[f - 8] ^ F[f - 14] ^ F[f - 16];
                F[f] = u << 1 | u >>> 31;
              }
              var d = (l << 5 | l >>> 27) + w + F[f];
              f < 20 ? d += (h & v | ~h & p) + 1518500249 : f < 40 ? d += (h ^ v ^ p) + 1859775393 : f < 60 ? d += (h & v | h & p | v & p) - 1894007588 : d += (h ^ v ^ p) - 899497514, w = p, p = v, v = h << 30 | h >>> 2, h = l, l = d;
            }
            s[0] = s[0] + l | 0, s[1] = s[1] + h | 0, s[2] = s[2] + v | 0, s[3] = s[3] + p | 0, s[4] = s[4] + w | 0;
          },
          _doFinalize: function() {
            var c = this._data, D = c.words, s = this._nDataBytes * 8, l = c.sigBytes * 8;
            return D[l >>> 5] |= 128 << 24 - l % 32, D[(l + 64 >>> 9 << 4) + 14] = Math.floor(s / 4294967296), D[(l + 64 >>> 9 << 4) + 15] = s, c.sigBytes = D.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var c = b.clone.call(this);
            return c._hash = this._hash.clone(), c;
          }
        });
        i.SHA1 = b._createHelper(x), i.HmacSHA1 = b._createHmacHelper(x);
      }(), a.SHA1;
    });
  }(M0)), M0.exports;
}
var K0 = { exports: {} }, Wr;
function Fr() {
  return Wr || (Wr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      return function(i) {
        var E = a, C = E.lib, b = C.WordArray, n = C.Hasher, F = E.algo, x = [], c = [];
        (function() {
          function l(w) {
            for (var f = i.sqrt(w), u = 2; u <= f; u++)
              if (!(w % u))
                return !1;
            return !0;
          }
          function h(w) {
            return (w - (w | 0)) * 4294967296 | 0;
          }
          for (var v = 2, p = 0; p < 64; )
            l(v) && (p < 8 && (x[p] = h(i.pow(v, 1 / 2))), c[p] = h(i.pow(v, 1 / 3)), p++), v++;
        })();
        var D = [], s = F.SHA256 = n.extend({
          _doReset: function() {
            this._hash = new b.init(x.slice(0));
          },
          _doProcessBlock: function(l, h) {
            for (var v = this._hash.words, p = v[0], w = v[1], f = v[2], u = v[3], d = v[4], _ = v[5], m = v[6], I = v[7], H = 0; H < 64; H++) {
              if (H < 16)
                D[H] = l[h + H] | 0;
              else {
                var q = D[H - 15], g = (q << 25 | q >>> 7) ^ (q << 14 | q >>> 18) ^ q >>> 3, S = D[H - 2], z = (S << 15 | S >>> 17) ^ (S << 13 | S >>> 19) ^ S >>> 10;
                D[H] = g + D[H - 7] + z + D[H - 16];
              }
              var T = d & _ ^ ~d & m, N = p & w ^ p & f ^ w & f, O = (p << 30 | p >>> 2) ^ (p << 19 | p >>> 13) ^ (p << 10 | p >>> 22), K = (d << 26 | d >>> 6) ^ (d << 21 | d >>> 11) ^ (d << 7 | d >>> 25), $ = I + K + T + c[H] + D[H], Q = O + N;
              I = m, m = _, _ = d, d = u + $ | 0, u = f, f = w, w = p, p = $ + Q | 0;
            }
            v[0] = v[0] + p | 0, v[1] = v[1] + w | 0, v[2] = v[2] + f | 0, v[3] = v[3] + u | 0, v[4] = v[4] + d | 0, v[5] = v[5] + _ | 0, v[6] = v[6] + m | 0, v[7] = v[7] + I | 0;
          },
          _doFinalize: function() {
            var l = this._data, h = l.words, v = this._nDataBytes * 8, p = l.sigBytes * 8;
            return h[p >>> 5] |= 128 << 24 - p % 32, h[(p + 64 >>> 9 << 4) + 14] = i.floor(v / 4294967296), h[(p + 64 >>> 9 << 4) + 15] = v, l.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var l = n.clone.call(this);
            return l._hash = this._hash.clone(), l;
          }
        });
        E.SHA256 = n._createHelper(s), E.HmacSHA256 = n._createHmacHelper(s);
      }(Math), a.SHA256;
    });
  }(K0)), K0.exports;
}
var X0 = { exports: {} }, Lr;
function re() {
  return Lr || (Lr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), Fr());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.WordArray, b = i.algo, n = b.SHA256, F = b.SHA224 = n.extend({
          _doReset: function() {
            this._hash = new C.init([
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
            var x = n._doFinalize.call(this);
            return x.sigBytes -= 4, x;
          }
        });
        i.SHA224 = n._createHelper(F), i.HmacSHA224 = n._createHmacHelper(F);
      }(), a.SHA224;
    });
  }(X0)), X0.exports;
}
var G0 = { exports: {} }, qr;
function At() {
  return qr || (qr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), U0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.Hasher, b = i.x64, n = b.Word, F = b.WordArray, x = i.algo;
        function c() {
          return n.create.apply(n, arguments);
        }
        var D = [
          c(1116352408, 3609767458),
          c(1899447441, 602891725),
          c(3049323471, 3964484399),
          c(3921009573, 2173295548),
          c(961987163, 4081628472),
          c(1508970993, 3053834265),
          c(2453635748, 2937671579),
          c(2870763221, 3664609560),
          c(3624381080, 2734883394),
          c(310598401, 1164996542),
          c(607225278, 1323610764),
          c(1426881987, 3590304994),
          c(1925078388, 4068182383),
          c(2162078206, 991336113),
          c(2614888103, 633803317),
          c(3248222580, 3479774868),
          c(3835390401, 2666613458),
          c(4022224774, 944711139),
          c(264347078, 2341262773),
          c(604807628, 2007800933),
          c(770255983, 1495990901),
          c(1249150122, 1856431235),
          c(1555081692, 3175218132),
          c(1996064986, 2198950837),
          c(2554220882, 3999719339),
          c(2821834349, 766784016),
          c(2952996808, 2566594879),
          c(3210313671, 3203337956),
          c(3336571891, 1034457026),
          c(3584528711, 2466948901),
          c(113926993, 3758326383),
          c(338241895, 168717936),
          c(666307205, 1188179964),
          c(773529912, 1546045734),
          c(1294757372, 1522805485),
          c(1396182291, 2643833823),
          c(1695183700, 2343527390),
          c(1986661051, 1014477480),
          c(2177026350, 1206759142),
          c(2456956037, 344077627),
          c(2730485921, 1290863460),
          c(2820302411, 3158454273),
          c(3259730800, 3505952657),
          c(3345764771, 106217008),
          c(3516065817, 3606008344),
          c(3600352804, 1432725776),
          c(4094571909, 1467031594),
          c(275423344, 851169720),
          c(430227734, 3100823752),
          c(506948616, 1363258195),
          c(659060556, 3750685593),
          c(883997877, 3785050280),
          c(958139571, 3318307427),
          c(1322822218, 3812723403),
          c(1537002063, 2003034995),
          c(1747873779, 3602036899),
          c(1955562222, 1575990012),
          c(2024104815, 1125592928),
          c(2227730452, 2716904306),
          c(2361852424, 442776044),
          c(2428436474, 593698344),
          c(2756734187, 3733110249),
          c(3204031479, 2999351573),
          c(3329325298, 3815920427),
          c(3391569614, 3928383900),
          c(3515267271, 566280711),
          c(3940187606, 3454069534),
          c(4118630271, 4000239992),
          c(116418474, 1914138554),
          c(174292421, 2731055270),
          c(289380356, 3203993006),
          c(460393269, 320620315),
          c(685471733, 587496836),
          c(852142971, 1086792851),
          c(1017036298, 365543100),
          c(1126000580, 2618297676),
          c(1288033470, 3409855158),
          c(1501505948, 4234509866),
          c(1607167915, 987167468),
          c(1816402316, 1246189591)
        ], s = [];
        (function() {
          for (var h = 0; h < 80; h++)
            s[h] = c();
        })();
        var l = x.SHA512 = C.extend({
          _doReset: function() {
            this._hash = new F.init([
              new n.init(1779033703, 4089235720),
              new n.init(3144134277, 2227873595),
              new n.init(1013904242, 4271175723),
              new n.init(2773480762, 1595750129),
              new n.init(1359893119, 2917565137),
              new n.init(2600822924, 725511199),
              new n.init(528734635, 4215389547),
              new n.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(h, v) {
            for (var p = this._hash.words, w = p[0], f = p[1], u = p[2], d = p[3], _ = p[4], m = p[5], I = p[6], H = p[7], q = w.high, g = w.low, S = f.high, z = f.low, T = u.high, N = u.low, O = d.high, K = d.low, $ = _.high, Q = _.low, J = m.high, j = m.low, R = I.high, P = I.low, L = H.high, W = H.low, r0 = q, Y = g, c0 = S, M = z, p0 = T, B0 = N, I0 = O, v0 = K, o0 = $, x0 = Q, _0 = J, D0 = j, A0 = R, g0 = P, S0 = L, E0 = W, s0 = 0; s0 < 80; s0++) {
              var i0, u0, m0 = s[s0];
              if (s0 < 16)
                u0 = m0.high = h[v + s0 * 2] | 0, i0 = m0.low = h[v + s0 * 2 + 1] | 0;
              else {
                var h0 = s[s0 - 15], C0 = h0.high, e = h0.low, r = (C0 >>> 1 | e << 31) ^ (C0 >>> 8 | e << 24) ^ C0 >>> 7, t = (e >>> 1 | C0 << 31) ^ (e >>> 8 | C0 << 24) ^ (e >>> 7 | C0 << 25), o = s[s0 - 2], B = o.high, k = o.low, U = (B >>> 19 | k << 13) ^ (B << 3 | k >>> 29) ^ B >>> 6, X = (k >>> 19 | B << 13) ^ (k << 3 | B >>> 29) ^ (k >>> 6 | B << 26), e0 = s[s0 - 7], t0 = e0.high, n0 = e0.low, Z = s[s0 - 16], Ft = Z.high, Dr = Z.low;
                i0 = t + n0, u0 = r + t0 + (i0 >>> 0 < t >>> 0 ? 1 : 0), i0 = i0 + X, u0 = u0 + U + (i0 >>> 0 < X >>> 0 ? 1 : 0), i0 = i0 + Dr, u0 = u0 + Ft + (i0 >>> 0 < Dr >>> 0 ? 1 : 0), m0.high = u0, m0.low = i0;
              }
              var yt = o0 & _0 ^ ~o0 & A0, gr = x0 & D0 ^ ~x0 & g0, Dt = r0 & c0 ^ r0 & p0 ^ c0 & p0, gt = Y & M ^ Y & B0 ^ M & B0, wt = (r0 >>> 28 | Y << 4) ^ (r0 << 30 | Y >>> 2) ^ (r0 << 25 | Y >>> 7), wr = (Y >>> 28 | r0 << 4) ^ (Y << 30 | r0 >>> 2) ^ (Y << 25 | r0 >>> 7), bt = (o0 >>> 14 | x0 << 18) ^ (o0 >>> 18 | x0 << 14) ^ (o0 << 23 | x0 >>> 9), _t = (x0 >>> 14 | o0 << 18) ^ (x0 >>> 18 | o0 << 14) ^ (x0 << 23 | o0 >>> 9), br = D[s0], mt = br.high, _r = br.low, f0 = E0 + _t, F0 = S0 + bt + (f0 >>> 0 < E0 >>> 0 ? 1 : 0), f0 = f0 + gr, F0 = F0 + yt + (f0 >>> 0 < gr >>> 0 ? 1 : 0), f0 = f0 + _r, F0 = F0 + mt + (f0 >>> 0 < _r >>> 0 ? 1 : 0), f0 = f0 + i0, F0 = F0 + u0 + (f0 >>> 0 < i0 >>> 0 ? 1 : 0), mr = wr + gt, kt = wt + Dt + (mr >>> 0 < wr >>> 0 ? 1 : 0);
              S0 = A0, E0 = g0, A0 = _0, g0 = D0, _0 = o0, D0 = x0, x0 = v0 + f0 | 0, o0 = I0 + F0 + (x0 >>> 0 < v0 >>> 0 ? 1 : 0) | 0, I0 = p0, v0 = B0, p0 = c0, B0 = M, c0 = r0, M = Y, Y = f0 + mr | 0, r0 = F0 + kt + (Y >>> 0 < f0 >>> 0 ? 1 : 0) | 0;
            }
            g = w.low = g + Y, w.high = q + r0 + (g >>> 0 < Y >>> 0 ? 1 : 0), z = f.low = z + M, f.high = S + c0 + (z >>> 0 < M >>> 0 ? 1 : 0), N = u.low = N + B0, u.high = T + p0 + (N >>> 0 < B0 >>> 0 ? 1 : 0), K = d.low = K + v0, d.high = O + I0 + (K >>> 0 < v0 >>> 0 ? 1 : 0), Q = _.low = Q + x0, _.high = $ + o0 + (Q >>> 0 < x0 >>> 0 ? 1 : 0), j = m.low = j + D0, m.high = J + _0 + (j >>> 0 < D0 >>> 0 ? 1 : 0), P = I.low = P + g0, I.high = R + A0 + (P >>> 0 < g0 >>> 0 ? 1 : 0), W = H.low = W + E0, H.high = L + S0 + (W >>> 0 < E0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var h = this._data, v = h.words, p = this._nDataBytes * 8, w = h.sigBytes * 8;
            v[w >>> 5] |= 128 << 24 - w % 32, v[(w + 128 >>> 10 << 5) + 30] = Math.floor(p / 4294967296), v[(w + 128 >>> 10 << 5) + 31] = p, h.sigBytes = v.length * 4, this._process();
            var f = this._hash.toX32();
            return f;
          },
          clone: function() {
            var h = C.clone.call(this);
            return h._hash = this._hash.clone(), h;
          },
          blockSize: 1024 / 32
        });
        i.SHA512 = C._createHelper(l), i.HmacSHA512 = C._createHmacHelper(l);
      }(), a.SHA512;
    });
  }(G0)), G0.exports;
}
var V0 = { exports: {} }, Nr;
function te() {
  return Nr || (Nr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), U0(), At());
    })(G, function(a) {
      return function() {
        var i = a, E = i.x64, C = E.Word, b = E.WordArray, n = i.algo, F = n.SHA512, x = n.SHA384 = F.extend({
          _doReset: function() {
            this._hash = new b.init([
              new C.init(3418070365, 3238371032),
              new C.init(1654270250, 914150663),
              new C.init(2438529370, 812702999),
              new C.init(355462360, 4144912697),
              new C.init(1731405415, 4290775857),
              new C.init(2394180231, 1750603025),
              new C.init(3675008525, 1694076839),
              new C.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var c = F._doFinalize.call(this);
            return c.sigBytes -= 16, c;
          }
        });
        i.SHA384 = F._createHelper(x), i.HmacSHA384 = F._createHmacHelper(x);
      }(), a.SHA384;
    });
  }(V0)), V0.exports;
}
var Q0 = { exports: {} }, Or;
function ee() {
  return Or || (Or = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), U0());
    })(G, function(a) {
      return function(i) {
        var E = a, C = E.lib, b = C.WordArray, n = C.Hasher, F = E.x64, x = F.Word, c = E.algo, D = [], s = [], l = [];
        (function() {
          for (var p = 1, w = 0, f = 0; f < 24; f++) {
            D[p + 5 * w] = (f + 1) * (f + 2) / 2 % 64;
            var u = w % 5, d = (2 * p + 3 * w) % 5;
            p = u, w = d;
          }
          for (var p = 0; p < 5; p++)
            for (var w = 0; w < 5; w++)
              s[p + 5 * w] = w + (2 * p + 3 * w) % 5 * 5;
          for (var _ = 1, m = 0; m < 24; m++) {
            for (var I = 0, H = 0, q = 0; q < 7; q++) {
              if (_ & 1) {
                var g = (1 << q) - 1;
                g < 32 ? H ^= 1 << g : I ^= 1 << g - 32;
              }
              _ & 128 ? _ = _ << 1 ^ 113 : _ <<= 1;
            }
            l[m] = x.create(I, H);
          }
        })();
        var h = [];
        (function() {
          for (var p = 0; p < 25; p++)
            h[p] = x.create();
        })();
        var v = c.SHA3 = n.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: n.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var p = this._state = [], w = 0; w < 25; w++)
              p[w] = new x.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(p, w) {
            for (var f = this._state, u = this.blockSize / 2, d = 0; d < u; d++) {
              var _ = p[w + 2 * d], m = p[w + 2 * d + 1];
              _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360;
              var I = f[d];
              I.high ^= m, I.low ^= _;
            }
            for (var H = 0; H < 24; H++) {
              for (var q = 0; q < 5; q++) {
                for (var g = 0, S = 0, z = 0; z < 5; z++) {
                  var I = f[q + 5 * z];
                  g ^= I.high, S ^= I.low;
                }
                var T = h[q];
                T.high = g, T.low = S;
              }
              for (var q = 0; q < 5; q++)
                for (var N = h[(q + 4) % 5], O = h[(q + 1) % 5], K = O.high, $ = O.low, g = N.high ^ (K << 1 | $ >>> 31), S = N.low ^ ($ << 1 | K >>> 31), z = 0; z < 5; z++) {
                  var I = f[q + 5 * z];
                  I.high ^= g, I.low ^= S;
                }
              for (var Q = 1; Q < 25; Q++) {
                var g, S, I = f[Q], J = I.high, j = I.low, R = D[Q];
                R < 32 ? (g = J << R | j >>> 32 - R, S = j << R | J >>> 32 - R) : (g = j << R - 32 | J >>> 64 - R, S = J << R - 32 | j >>> 64 - R);
                var P = h[s[Q]];
                P.high = g, P.low = S;
              }
              var L = h[0], W = f[0];
              L.high = W.high, L.low = W.low;
              for (var q = 0; q < 5; q++)
                for (var z = 0; z < 5; z++) {
                  var Q = q + 5 * z, I = f[Q], r0 = h[Q], Y = h[(q + 1) % 5 + 5 * z], c0 = h[(q + 2) % 5 + 5 * z];
                  I.high = r0.high ^ ~Y.high & c0.high, I.low = r0.low ^ ~Y.low & c0.low;
                }
              var I = f[0], M = l[H];
              I.high ^= M.high, I.low ^= M.low;
            }
          },
          _doFinalize: function() {
            var p = this._data, w = p.words;
            this._nDataBytes * 8;
            var f = p.sigBytes * 8, u = this.blockSize * 32;
            w[f >>> 5] |= 1 << 24 - f % 32, w[(i.ceil((f + 1) / u) * u >>> 5) - 1] |= 128, p.sigBytes = w.length * 4, this._process();
            for (var d = this._state, _ = this.cfg.outputLength / 8, m = _ / 8, I = [], H = 0; H < m; H++) {
              var q = d[H], g = q.high, S = q.low;
              g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, I.push(S), I.push(g);
            }
            return new b.init(I, _);
          },
          clone: function() {
            for (var p = n.clone.call(this), w = p._state = this._state.slice(0), f = 0; f < 25; f++)
              w[f] = w[f].clone();
            return p;
          }
        });
        E.SHA3 = n._createHelper(v), E.HmacSHA3 = n._createHmacHelper(v);
      }(Math), a.SHA3;
    });
  }(Q0)), Q0.exports;
}
var j0 = { exports: {} }, Mr;
function ne() {
  return Mr || (Mr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(i) {
        var E = a, C = E.lib, b = C.WordArray, n = C.Hasher, F = E.algo, x = b.create([
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
        ]), c = b.create([
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
        ]), D = b.create([
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
        ]), s = b.create([
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
        ]), l = b.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), h = b.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = F.RIPEMD160 = n.extend({
          _doReset: function() {
            this._hash = b.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(m, I) {
            for (var H = 0; H < 16; H++) {
              var q = I + H, g = m[q];
              m[q] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var S = this._hash.words, z = l.words, T = h.words, N = x.words, O = c.words, K = D.words, $ = s.words, Q, J, j, R, P, L, W, r0, Y, c0;
            L = Q = S[0], W = J = S[1], r0 = j = S[2], Y = R = S[3], c0 = P = S[4];
            for (var M, H = 0; H < 80; H += 1)
              M = Q + m[I + N[H]] | 0, H < 16 ? M += p(J, j, R) + z[0] : H < 32 ? M += w(J, j, R) + z[1] : H < 48 ? M += f(J, j, R) + z[2] : H < 64 ? M += u(J, j, R) + z[3] : M += d(J, j, R) + z[4], M = M | 0, M = _(M, K[H]), M = M + P | 0, Q = P, P = R, R = _(j, 10), j = J, J = M, M = L + m[I + O[H]] | 0, H < 16 ? M += d(W, r0, Y) + T[0] : H < 32 ? M += u(W, r0, Y) + T[1] : H < 48 ? M += f(W, r0, Y) + T[2] : H < 64 ? M += w(W, r0, Y) + T[3] : M += p(W, r0, Y) + T[4], M = M | 0, M = _(M, $[H]), M = M + c0 | 0, L = c0, c0 = Y, Y = _(r0, 10), r0 = W, W = M;
            M = S[1] + j + Y | 0, S[1] = S[2] + R + c0 | 0, S[2] = S[3] + P + L | 0, S[3] = S[4] + Q + W | 0, S[4] = S[0] + J + r0 | 0, S[0] = M;
          },
          _doFinalize: function() {
            var m = this._data, I = m.words, H = this._nDataBytes * 8, q = m.sigBytes * 8;
            I[q >>> 5] |= 128 << 24 - q % 32, I[(q + 64 >>> 9 << 4) + 14] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360, m.sigBytes = (I.length + 1) * 4, this._process();
            for (var g = this._hash, S = g.words, z = 0; z < 5; z++) {
              var T = S[z];
              S[z] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            return g;
          },
          clone: function() {
            var m = n.clone.call(this);
            return m._hash = this._hash.clone(), m;
          }
        });
        function p(m, I, H) {
          return m ^ I ^ H;
        }
        function w(m, I, H) {
          return m & I | ~m & H;
        }
        function f(m, I, H) {
          return (m | ~I) ^ H;
        }
        function u(m, I, H) {
          return m & H | I & ~H;
        }
        function d(m, I, H) {
          return m ^ (I | ~H);
        }
        function _(m, I) {
          return m << I | m >>> 32 - I;
        }
        E.RIPEMD160 = n._createHelper(v), E.HmacRIPEMD160 = n._createHmacHelper(v);
      }(), a.RIPEMD160;
    });
  }(j0)), j0.exports;
}
var Z0 = { exports: {} }, Kr;
function yr() {
  return Kr || (Kr = 1, function(y, A) {
    (function(a, i) {
      y.exports = i(V());
    })(G, function(a) {
      (function() {
        var i = a, E = i.lib, C = E.Base, b = i.enc, n = b.Utf8, F = i.algo;
        F.HMAC = C.extend({
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
          init: function(x, c) {
            x = this._hasher = new x.init(), typeof c == "string" && (c = n.parse(c));
            var D = x.blockSize, s = D * 4;
            c.sigBytes > s && (c = x.finalize(c)), c.clamp();
            for (var l = this._oKey = c.clone(), h = this._iKey = c.clone(), v = l.words, p = h.words, w = 0; w < D; w++)
              v[w] ^= 1549556828, p[w] ^= 909522486;
            l.sigBytes = h.sigBytes = s, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var x = this._hasher;
            x.reset(), x.update(this._iKey);
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
          update: function(x) {
            return this._hasher.update(x), this;
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
          finalize: function(x) {
            var c = this._hasher, D = c.finalize(x);
            c.reset();
            var s = c.finalize(this._oKey.clone().concat(D));
            return s;
          }
        });
      })();
    });
  }(Z0)), Z0.exports;
}
var Y0 = { exports: {} }, Xr;
function ie() {
  return Xr || (Xr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), Fr(), yr());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.Base, b = E.WordArray, n = i.algo, F = n.SHA256, x = n.HMAC, c = n.PBKDF2 = C.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: C.extend({
            keySize: 128 / 32,
            hasher: F,
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
          init: function(D) {
            this.cfg = this.cfg.extend(D);
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
          compute: function(D, s) {
            for (var l = this.cfg, h = x.create(l.hasher, D), v = b.create(), p = b.create([1]), w = v.words, f = p.words, u = l.keySize, d = l.iterations; w.length < u; ) {
              var _ = h.update(s).finalize(p);
              h.reset();
              for (var m = _.words, I = m.length, H = _, q = 1; q < d; q++) {
                H = h.finalize(H), h.reset();
                for (var g = H.words, S = 0; S < I; S++)
                  m[S] ^= g[S];
              }
              v.concat(_), f[0]++;
            }
            return v.sigBytes = u * 4, v;
          }
        });
        i.PBKDF2 = function(D, s, l) {
          return c.create(l).compute(D, s);
        };
      }(), a.PBKDF2;
    });
  }(Y0)), Y0.exports;
}
var J0 = { exports: {} }, Gr;
function y0() {
  return Gr || (Gr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), vt(), yr());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.Base, b = E.WordArray, n = i.algo, F = n.MD5, x = n.EvpKDF = C.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: C.extend({
            keySize: 128 / 32,
            hasher: F,
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
          init: function(c) {
            this.cfg = this.cfg.extend(c);
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
          compute: function(c, D) {
            for (var s, l = this.cfg, h = l.hasher.create(), v = b.create(), p = v.words, w = l.keySize, f = l.iterations; p.length < w; ) {
              s && h.update(s), s = h.update(c).finalize(D), h.reset();
              for (var u = 1; u < f; u++)
                s = h.finalize(s), h.reset();
              v.concat(s);
            }
            return v.sigBytes = w * 4, v;
          }
        });
        i.EvpKDF = function(c, D, s) {
          return x.create(s).compute(c, D);
        };
      }(), a.EvpKDF;
    });
  }(J0)), J0.exports;
}
var $0 = { exports: {} }, Vr;
function a0() {
  return Vr || (Vr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), y0());
    })(G, function(a) {
      a.lib.Cipher || function(i) {
        var E = a, C = E.lib, b = C.Base, n = C.WordArray, F = C.BufferedBlockAlgorithm, x = E.enc;
        x.Utf8;
        var c = x.Base64, D = E.algo, s = D.EvpKDF, l = C.Cipher = F.extend({
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
          createEncryptor: function(g, S) {
            return this.create(this._ENC_XFORM_MODE, g, S);
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
          createDecryptor: function(g, S) {
            return this.create(this._DEC_XFORM_MODE, g, S);
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
          init: function(g, S, z) {
            this.cfg = this.cfg.extend(z), this._xformMode = g, this._key = S, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            F.reset.call(this), this._doReset();
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
          process: function(g) {
            return this._append(g), this._process();
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
          finalize: function(g) {
            g && this._append(g);
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
            function g(S) {
              return typeof S == "string" ? q : m;
            }
            return function(S) {
              return {
                encrypt: function(z, T, N) {
                  return g(T).encrypt(S, z, T, N);
                },
                decrypt: function(z, T, N) {
                  return g(T).decrypt(S, z, T, N);
                }
              };
            };
          }()
        });
        C.StreamCipher = l.extend({
          _doFinalize: function() {
            var g = this._process(!0);
            return g;
          },
          blockSize: 1
        });
        var h = E.mode = {}, v = C.BlockCipherMode = b.extend({
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
          createEncryptor: function(g, S) {
            return this.Encryptor.create(g, S);
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
          createDecryptor: function(g, S) {
            return this.Decryptor.create(g, S);
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
          init: function(g, S) {
            this._cipher = g, this._iv = S;
          }
        }), p = h.CBC = function() {
          var g = v.extend();
          g.Encryptor = g.extend({
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
            processBlock: function(z, T) {
              var N = this._cipher, O = N.blockSize;
              S.call(this, z, T, O), N.encryptBlock(z, T), this._prevBlock = z.slice(T, T + O);
            }
          }), g.Decryptor = g.extend({
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
            processBlock: function(z, T) {
              var N = this._cipher, O = N.blockSize, K = z.slice(T, T + O);
              N.decryptBlock(z, T), S.call(this, z, T, O), this._prevBlock = K;
            }
          });
          function S(z, T, N) {
            var O, K = this._iv;
            K ? (O = K, this._iv = i) : O = this._prevBlock;
            for (var $ = 0; $ < N; $++)
              z[T + $] ^= O[$];
          }
          return g;
        }(), w = E.pad = {}, f = w.Pkcs7 = {
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
          pad: function(g, S) {
            for (var z = S * 4, T = z - g.sigBytes % z, N = T << 24 | T << 16 | T << 8 | T, O = [], K = 0; K < T; K += 4)
              O.push(N);
            var $ = n.create(O, T);
            g.concat($);
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
          unpad: function(g) {
            var S = g.words[g.sigBytes - 1 >>> 2] & 255;
            g.sigBytes -= S;
          }
        };
        C.BlockCipher = l.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: l.cfg.extend({
            mode: p,
            padding: f
          }),
          reset: function() {
            var g;
            l.reset.call(this);
            var S = this.cfg, z = S.iv, T = S.mode;
            this._xformMode == this._ENC_XFORM_MODE ? g = T.createEncryptor : (g = T.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == g ? this._mode.init(this, z && z.words) : (this._mode = g.call(T, this, z && z.words), this._mode.__creator = g);
          },
          _doProcessBlock: function(g, S) {
            this._mode.processBlock(g, S);
          },
          _doFinalize: function() {
            var g, S = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (S.pad(this._data, this.blockSize), g = this._process(!0)) : (g = this._process(!0), S.unpad(g)), g;
          },
          blockSize: 128 / 32
        });
        var u = C.CipherParams = b.extend({
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
          init: function(g) {
            this.mixIn(g);
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
          toString: function(g) {
            return (g || this.formatter).stringify(this);
          }
        }), d = E.format = {}, _ = d.OpenSSL = {
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
          stringify: function(g) {
            var S, z = g.ciphertext, T = g.salt;
            return T ? S = n.create([1398893684, 1701076831]).concat(T).concat(z) : S = z, S.toString(c);
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
          parse: function(g) {
            var S, z = c.parse(g), T = z.words;
            return T[0] == 1398893684 && T[1] == 1701076831 && (S = n.create(T.slice(2, 4)), T.splice(0, 4), z.sigBytes -= 16), u.create({ ciphertext: z, salt: S });
          }
        }, m = C.SerializableCipher = b.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: b.extend({
            format: _
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
          encrypt: function(g, S, z, T) {
            T = this.cfg.extend(T);
            var N = g.createEncryptor(z, T), O = N.finalize(S), K = N.cfg;
            return u.create({
              ciphertext: O,
              key: z,
              iv: K.iv,
              algorithm: g,
              mode: K.mode,
              padding: K.padding,
              blockSize: g.blockSize,
              formatter: T.format
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
          decrypt: function(g, S, z, T) {
            T = this.cfg.extend(T), S = this._parse(S, T.format);
            var N = g.createDecryptor(z, T).finalize(S.ciphertext);
            return N;
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
          _parse: function(g, S) {
            return typeof g == "string" ? S.parse(g, this) : g;
          }
        }), I = E.kdf = {}, H = I.OpenSSL = {
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
          execute: function(g, S, z, T, N) {
            if (T || (T = n.random(64 / 8)), N)
              var O = s.create({ keySize: S + z, hasher: N }).compute(g, T);
            else
              var O = s.create({ keySize: S + z }).compute(g, T);
            var K = n.create(O.words.slice(S), z * 4);
            return O.sigBytes = S * 4, u.create({ key: O, iv: K, salt: T });
          }
        }, q = C.PasswordBasedCipher = m.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: m.cfg.extend({
            kdf: H
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
          encrypt: function(g, S, z, T) {
            T = this.cfg.extend(T);
            var N = T.kdf.execute(z, g.keySize, g.ivSize, T.salt, T.hasher);
            T.iv = N.iv;
            var O = m.encrypt.call(this, g, S, N.key, T);
            return O.mixIn(N), O;
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
          decrypt: function(g, S, z, T) {
            T = this.cfg.extend(T), S = this._parse(S, T.format);
            var N = T.kdf.execute(z, g.keySize, g.ivSize, S.salt, T.hasher);
            T.iv = N.iv;
            var O = m.decrypt.call(this, g, S, N.key, T);
            return O;
          }
        });
      }();
    });
  }($0)), $0.exports;
}
var rr = { exports: {} }, Qr;
function xe() {
  return Qr || (Qr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.mode.CFB = function() {
        var i = a.lib.BlockCipherMode.extend();
        i.Encryptor = i.extend({
          processBlock: function(C, b) {
            var n = this._cipher, F = n.blockSize;
            E.call(this, C, b, F, n), this._prevBlock = C.slice(b, b + F);
          }
        }), i.Decryptor = i.extend({
          processBlock: function(C, b) {
            var n = this._cipher, F = n.blockSize, x = C.slice(b, b + F);
            E.call(this, C, b, F, n), this._prevBlock = x;
          }
        });
        function E(C, b, n, F) {
          var x, c = this._iv;
          c ? (x = c.slice(0), this._iv = void 0) : x = this._prevBlock, F.encryptBlock(x, 0);
          for (var D = 0; D < n; D++)
            C[b + D] ^= x[D];
        }
        return i;
      }(), a.mode.CFB;
    });
  }(rr)), rr.exports;
}
var tr = { exports: {} }, jr;
function oe() {
  return jr || (jr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.mode.CTR = function() {
        var i = a.lib.BlockCipherMode.extend(), E = i.Encryptor = i.extend({
          processBlock: function(C, b) {
            var n = this._cipher, F = n.blockSize, x = this._iv, c = this._counter;
            x && (c = this._counter = x.slice(0), this._iv = void 0);
            var D = c.slice(0);
            n.encryptBlock(D, 0), c[F - 1] = c[F - 1] + 1 | 0;
            for (var s = 0; s < F; s++)
              C[b + s] ^= D[s];
          }
        });
        return i.Decryptor = E, i;
      }(), a.mode.CTR;
    });
  }(tr)), tr.exports;
}
var er = { exports: {} }, Zr;
function ae() {
  return Zr || (Zr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return a.mode.CTRGladman = function() {
        var i = a.lib.BlockCipherMode.extend();
        function E(n) {
          if ((n >> 24 & 255) === 255) {
            var F = n >> 16 & 255, x = n >> 8 & 255, c = n & 255;
            F === 255 ? (F = 0, x === 255 ? (x = 0, c === 255 ? c = 0 : ++c) : ++x) : ++F, n = 0, n += F << 16, n += x << 8, n += c;
          } else
            n += 1 << 24;
          return n;
        }
        function C(n) {
          return (n[0] = E(n[0])) === 0 && (n[1] = E(n[1])), n;
        }
        var b = i.Encryptor = i.extend({
          processBlock: function(n, F) {
            var x = this._cipher, c = x.blockSize, D = this._iv, s = this._counter;
            D && (s = this._counter = D.slice(0), this._iv = void 0), C(s);
            var l = s.slice(0);
            x.encryptBlock(l, 0);
            for (var h = 0; h < c; h++)
              n[F + h] ^= l[h];
          }
        });
        return i.Decryptor = b, i;
      }(), a.mode.CTRGladman;
    });
  }(er)), er.exports;
}
var nr = { exports: {} }, Yr;
function ce() {
  return Yr || (Yr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.mode.OFB = function() {
        var i = a.lib.BlockCipherMode.extend(), E = i.Encryptor = i.extend({
          processBlock: function(C, b) {
            var n = this._cipher, F = n.blockSize, x = this._iv, c = this._keystream;
            x && (c = this._keystream = x.slice(0), this._iv = void 0), n.encryptBlock(c, 0);
            for (var D = 0; D < F; D++)
              C[b + D] ^= c[D];
          }
        });
        return i.Decryptor = E, i;
      }(), a.mode.OFB;
    });
  }(nr)), nr.exports;
}
var ir = { exports: {} }, Jr;
function se() {
  return Jr || (Jr = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.mode.ECB = function() {
        var i = a.lib.BlockCipherMode.extend();
        return i.Encryptor = i.extend({
          processBlock: function(E, C) {
            this._cipher.encryptBlock(E, C);
          }
        }), i.Decryptor = i.extend({
          processBlock: function(E, C) {
            this._cipher.decryptBlock(E, C);
          }
        }), i;
      }(), a.mode.ECB;
    });
  }(ir)), ir.exports;
}
var xr = { exports: {} }, $r;
function fe() {
  return $r || ($r = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.pad.AnsiX923 = {
        pad: function(i, E) {
          var C = i.sigBytes, b = E * 4, n = b - C % b, F = C + n - 1;
          i.clamp(), i.words[F >>> 2] |= n << 24 - F % 4 * 8, i.sigBytes += n;
        },
        unpad: function(i) {
          var E = i.words[i.sigBytes - 1 >>> 2] & 255;
          i.sigBytes -= E;
        }
      }, a.pad.Ansix923;
    });
  }(xr)), xr.exports;
}
var or = { exports: {} }, rt;
function ue() {
  return rt || (rt = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.pad.Iso10126 = {
        pad: function(i, E) {
          var C = E * 4, b = C - i.sigBytes % C;
          i.concat(a.lib.WordArray.random(b - 1)).concat(a.lib.WordArray.create([b << 24], 1));
        },
        unpad: function(i) {
          var E = i.words[i.sigBytes - 1 >>> 2] & 255;
          i.sigBytes -= E;
        }
      }, a.pad.Iso10126;
    });
  }(or)), or.exports;
}
var ar = { exports: {} }, tt;
function le() {
  return tt || (tt = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.pad.Iso97971 = {
        pad: function(i, E) {
          i.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(i, E);
        },
        unpad: function(i) {
          a.pad.ZeroPadding.unpad(i), i.sigBytes--;
        }
      }, a.pad.Iso97971;
    });
  }(ar)), ar.exports;
}
var cr = { exports: {} }, et;
function he() {
  return et || (et = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.pad.ZeroPadding = {
        pad: function(i, E) {
          var C = E * 4;
          i.clamp(), i.sigBytes += C - (i.sigBytes % C || C);
        },
        unpad: function(i) {
          for (var E = i.words, C = i.sigBytes - 1, C = i.sigBytes - 1; C >= 0; C--)
            if (E[C >>> 2] >>> 24 - C % 4 * 8 & 255) {
              i.sigBytes = C + 1;
              break;
            }
        }
      }, a.pad.ZeroPadding;
    });
  }(cr)), cr.exports;
}
var sr = { exports: {} }, nt;
function de() {
  return nt || (nt = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return a.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, a.pad.NoPadding;
    });
  }(sr)), sr.exports;
}
var fr = { exports: {} }, it;
function pe() {
  return it || (it = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), a0());
    })(G, function(a) {
      return function(i) {
        var E = a, C = E.lib, b = C.CipherParams, n = E.enc, F = n.Hex, x = E.format;
        x.Hex = {
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
          stringify: function(c) {
            return c.ciphertext.toString(F);
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
          parse: function(c) {
            var D = F.parse(c);
            return b.create({ ciphertext: D });
          }
        };
      }(), a.format.Hex;
    });
  }(fr)), fr.exports;
}
var ur = { exports: {} }, xt;
function Be() {
  return xt || (xt = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), w0(), b0(), y0(), a0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.BlockCipher, b = i.algo, n = [], F = [], x = [], c = [], D = [], s = [], l = [], h = [], v = [], p = [];
        (function() {
          for (var u = [], d = 0; d < 256; d++)
            d < 128 ? u[d] = d << 1 : u[d] = d << 1 ^ 283;
          for (var _ = 0, m = 0, d = 0; d < 256; d++) {
            var I = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
            I = I >>> 8 ^ I & 255 ^ 99, n[_] = I, F[I] = _;
            var H = u[_], q = u[H], g = u[q], S = u[I] * 257 ^ I * 16843008;
            x[_] = S << 24 | S >>> 8, c[_] = S << 16 | S >>> 16, D[_] = S << 8 | S >>> 24, s[_] = S;
            var S = g * 16843009 ^ q * 65537 ^ H * 257 ^ _ * 16843008;
            l[I] = S << 24 | S >>> 8, h[I] = S << 16 | S >>> 16, v[I] = S << 8 | S >>> 24, p[I] = S, _ ? (_ = H ^ u[u[u[g ^ H]]], m ^= u[u[m]]) : _ = m = 1;
          }
        })();
        var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], f = b.AES = C.extend({
          _doReset: function() {
            var u;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var d = this._keyPriorReset = this._key, _ = d.words, m = d.sigBytes / 4, I = this._nRounds = m + 6, H = (I + 1) * 4, q = this._keySchedule = [], g = 0; g < H; g++)
                g < m ? q[g] = _[g] : (u = q[g - 1], g % m ? m > 6 && g % m == 4 && (u = n[u >>> 24] << 24 | n[u >>> 16 & 255] << 16 | n[u >>> 8 & 255] << 8 | n[u & 255]) : (u = u << 8 | u >>> 24, u = n[u >>> 24] << 24 | n[u >>> 16 & 255] << 16 | n[u >>> 8 & 255] << 8 | n[u & 255], u ^= w[g / m | 0] << 24), q[g] = q[g - m] ^ u);
              for (var S = this._invKeySchedule = [], z = 0; z < H; z++) {
                var g = H - z;
                if (z % 4)
                  var u = q[g];
                else
                  var u = q[g - 4];
                z < 4 || g <= 4 ? S[z] = u : S[z] = l[n[u >>> 24]] ^ h[n[u >>> 16 & 255]] ^ v[n[u >>> 8 & 255]] ^ p[n[u & 255]];
              }
            }
          },
          encryptBlock: function(u, d) {
            this._doCryptBlock(u, d, this._keySchedule, x, c, D, s, n);
          },
          decryptBlock: function(u, d) {
            var _ = u[d + 1];
            u[d + 1] = u[d + 3], u[d + 3] = _, this._doCryptBlock(u, d, this._invKeySchedule, l, h, v, p, F);
            var _ = u[d + 1];
            u[d + 1] = u[d + 3], u[d + 3] = _;
          },
          _doCryptBlock: function(u, d, _, m, I, H, q, g) {
            for (var S = this._nRounds, z = u[d] ^ _[0], T = u[d + 1] ^ _[1], N = u[d + 2] ^ _[2], O = u[d + 3] ^ _[3], K = 4, $ = 1; $ < S; $++) {
              var Q = m[z >>> 24] ^ I[T >>> 16 & 255] ^ H[N >>> 8 & 255] ^ q[O & 255] ^ _[K++], J = m[T >>> 24] ^ I[N >>> 16 & 255] ^ H[O >>> 8 & 255] ^ q[z & 255] ^ _[K++], j = m[N >>> 24] ^ I[O >>> 16 & 255] ^ H[z >>> 8 & 255] ^ q[T & 255] ^ _[K++], R = m[O >>> 24] ^ I[z >>> 16 & 255] ^ H[T >>> 8 & 255] ^ q[N & 255] ^ _[K++];
              z = Q, T = J, N = j, O = R;
            }
            var Q = (g[z >>> 24] << 24 | g[T >>> 16 & 255] << 16 | g[N >>> 8 & 255] << 8 | g[O & 255]) ^ _[K++], J = (g[T >>> 24] << 24 | g[N >>> 16 & 255] << 16 | g[O >>> 8 & 255] << 8 | g[z & 255]) ^ _[K++], j = (g[N >>> 24] << 24 | g[O >>> 16 & 255] << 16 | g[z >>> 8 & 255] << 8 | g[T & 255]) ^ _[K++], R = (g[O >>> 24] << 24 | g[z >>> 16 & 255] << 16 | g[T >>> 8 & 255] << 8 | g[N & 255]) ^ _[K++];
            u[d] = Q, u[d + 1] = J, u[d + 2] = j, u[d + 3] = R;
          },
          keySize: 256 / 32
        });
        i.AES = C._createHelper(f);
      }(), a.AES;
    });
  }(ur)), ur.exports;
}
var lr = { exports: {} }, ot;
function ve() {
  return ot || (ot = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), w0(), b0(), y0(), a0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.WordArray, b = E.BlockCipher, n = i.algo, F = [
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
        ], x = [
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
        ], c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], D = [
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
        ], s = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], l = n.DES = b.extend({
          _doReset: function() {
            for (var w = this._key, f = w.words, u = [], d = 0; d < 56; d++) {
              var _ = F[d] - 1;
              u[d] = f[_ >>> 5] >>> 31 - _ % 32 & 1;
            }
            for (var m = this._subKeys = [], I = 0; I < 16; I++) {
              for (var H = m[I] = [], q = c[I], d = 0; d < 24; d++)
                H[d / 6 | 0] |= u[(x[d] - 1 + q) % 28] << 31 - d % 6, H[4 + (d / 6 | 0)] |= u[28 + (x[d + 24] - 1 + q) % 28] << 31 - d % 6;
              H[0] = H[0] << 1 | H[0] >>> 31;
              for (var d = 1; d < 7; d++)
                H[d] = H[d] >>> (d - 1) * 4 + 3;
              H[7] = H[7] << 5 | H[7] >>> 27;
            }
            for (var g = this._invSubKeys = [], d = 0; d < 16; d++)
              g[d] = m[15 - d];
          },
          encryptBlock: function(w, f) {
            this._doCryptBlock(w, f, this._subKeys);
          },
          decryptBlock: function(w, f) {
            this._doCryptBlock(w, f, this._invSubKeys);
          },
          _doCryptBlock: function(w, f, u) {
            this._lBlock = w[f], this._rBlock = w[f + 1], h.call(this, 4, 252645135), h.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), h.call(this, 1, 1431655765);
            for (var d = 0; d < 16; d++) {
              for (var _ = u[d], m = this._lBlock, I = this._rBlock, H = 0, q = 0; q < 8; q++)
                H |= D[q][((I ^ _[q]) & s[q]) >>> 0];
              this._lBlock = I, this._rBlock = m ^ H;
            }
            var g = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = g, h.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), h.call(this, 16, 65535), h.call(this, 4, 252645135), w[f] = this._lBlock, w[f + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function h(w, f) {
          var u = (this._lBlock >>> w ^ this._rBlock) & f;
          this._rBlock ^= u, this._lBlock ^= u << w;
        }
        function v(w, f) {
          var u = (this._rBlock >>> w ^ this._lBlock) & f;
          this._lBlock ^= u, this._rBlock ^= u << w;
        }
        i.DES = b._createHelper(l);
        var p = n.TripleDES = b.extend({
          _doReset: function() {
            var w = this._key, f = w.words;
            if (f.length !== 2 && f.length !== 4 && f.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var u = f.slice(0, 2), d = f.length < 4 ? f.slice(0, 2) : f.slice(2, 4), _ = f.length < 6 ? f.slice(0, 2) : f.slice(4, 6);
            this._des1 = l.createEncryptor(C.create(u)), this._des2 = l.createEncryptor(C.create(d)), this._des3 = l.createEncryptor(C.create(_));
          },
          encryptBlock: function(w, f) {
            this._des1.encryptBlock(w, f), this._des2.decryptBlock(w, f), this._des3.encryptBlock(w, f);
          },
          decryptBlock: function(w, f) {
            this._des3.decryptBlock(w, f), this._des2.encryptBlock(w, f), this._des1.decryptBlock(w, f);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        i.TripleDES = b._createHelper(p);
      }(), a.TripleDES;
    });
  }(lr)), lr.exports;
}
var hr = { exports: {} }, at;
function Ae() {
  return at || (at = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), w0(), b0(), y0(), a0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.StreamCipher, b = i.algo, n = b.RC4 = C.extend({
          _doReset: function() {
            for (var c = this._key, D = c.words, s = c.sigBytes, l = this._S = [], h = 0; h < 256; h++)
              l[h] = h;
            for (var h = 0, v = 0; h < 256; h++) {
              var p = h % s, w = D[p >>> 2] >>> 24 - p % 4 * 8 & 255;
              v = (v + l[h] + w) % 256;
              var f = l[h];
              l[h] = l[v], l[v] = f;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(c, D) {
            c[D] ^= F.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function F() {
          for (var c = this._S, D = this._i, s = this._j, l = 0, h = 0; h < 4; h++) {
            D = (D + 1) % 256, s = (s + c[D]) % 256;
            var v = c[D];
            c[D] = c[s], c[s] = v, l |= c[(c[D] + c[s]) % 256] << 24 - h * 8;
          }
          return this._i = D, this._j = s, l;
        }
        i.RC4 = C._createHelper(n);
        var x = b.RC4Drop = n.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: n.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            n._doReset.call(this);
            for (var c = this.cfg.drop; c > 0; c--)
              F.call(this);
          }
        });
        i.RC4Drop = C._createHelper(x);
      }(), a.RC4;
    });
  }(hr)), hr.exports;
}
var dr = { exports: {} }, ct;
function Ee() {
  return ct || (ct = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), w0(), b0(), y0(), a0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.StreamCipher, b = i.algo, n = [], F = [], x = [], c = b.Rabbit = C.extend({
          _doReset: function() {
            for (var s = this._key.words, l = this.cfg.iv, h = 0; h < 4; h++)
              s[h] = (s[h] << 8 | s[h] >>> 24) & 16711935 | (s[h] << 24 | s[h] >>> 8) & 4278255360;
            var v = this._X = [
              s[0],
              s[3] << 16 | s[2] >>> 16,
              s[1],
              s[0] << 16 | s[3] >>> 16,
              s[2],
              s[1] << 16 | s[0] >>> 16,
              s[3],
              s[2] << 16 | s[1] >>> 16
            ], p = this._C = [
              s[2] << 16 | s[2] >>> 16,
              s[0] & 4294901760 | s[1] & 65535,
              s[3] << 16 | s[3] >>> 16,
              s[1] & 4294901760 | s[2] & 65535,
              s[0] << 16 | s[0] >>> 16,
              s[2] & 4294901760 | s[3] & 65535,
              s[1] << 16 | s[1] >>> 16,
              s[3] & 4294901760 | s[0] & 65535
            ];
            this._b = 0;
            for (var h = 0; h < 4; h++)
              D.call(this);
            for (var h = 0; h < 8; h++)
              p[h] ^= v[h + 4 & 7];
            if (l) {
              var w = l.words, f = w[0], u = w[1], d = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360, _ = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, m = d >>> 16 | _ & 4294901760, I = _ << 16 | d & 65535;
              p[0] ^= d, p[1] ^= m, p[2] ^= _, p[3] ^= I, p[4] ^= d, p[5] ^= m, p[6] ^= _, p[7] ^= I;
              for (var h = 0; h < 4; h++)
                D.call(this);
            }
          },
          _doProcessBlock: function(s, l) {
            var h = this._X;
            D.call(this), n[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, n[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, n[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, n[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
            for (var v = 0; v < 4; v++)
              n[v] = (n[v] << 8 | n[v] >>> 24) & 16711935 | (n[v] << 24 | n[v] >>> 8) & 4278255360, s[l + v] ^= n[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function D() {
          for (var s = this._X, l = this._C, h = 0; h < 8; h++)
            F[h] = l[h];
          l[0] = l[0] + 1295307597 + this._b | 0, l[1] = l[1] + 3545052371 + (l[0] >>> 0 < F[0] >>> 0 ? 1 : 0) | 0, l[2] = l[2] + 886263092 + (l[1] >>> 0 < F[1] >>> 0 ? 1 : 0) | 0, l[3] = l[3] + 1295307597 + (l[2] >>> 0 < F[2] >>> 0 ? 1 : 0) | 0, l[4] = l[4] + 3545052371 + (l[3] >>> 0 < F[3] >>> 0 ? 1 : 0) | 0, l[5] = l[5] + 886263092 + (l[4] >>> 0 < F[4] >>> 0 ? 1 : 0) | 0, l[6] = l[6] + 1295307597 + (l[5] >>> 0 < F[5] >>> 0 ? 1 : 0) | 0, l[7] = l[7] + 3545052371 + (l[6] >>> 0 < F[6] >>> 0 ? 1 : 0) | 0, this._b = l[7] >>> 0 < F[7] >>> 0 ? 1 : 0;
          for (var h = 0; h < 8; h++) {
            var v = s[h] + l[h], p = v & 65535, w = v >>> 16, f = ((p * p >>> 17) + p * w >>> 15) + w * w, u = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            x[h] = f ^ u;
          }
          s[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, s[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, s[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, s[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, s[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, s[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, s[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, s[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        i.Rabbit = C._createHelper(c);
      }(), a.Rabbit;
    });
  }(dr)), dr.exports;
}
var pr = { exports: {} }, st;
function Ce() {
  return st || (st = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), w0(), b0(), y0(), a0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.StreamCipher, b = i.algo, n = [], F = [], x = [], c = b.RabbitLegacy = C.extend({
          _doReset: function() {
            var s = this._key.words, l = this.cfg.iv, h = this._X = [
              s[0],
              s[3] << 16 | s[2] >>> 16,
              s[1],
              s[0] << 16 | s[3] >>> 16,
              s[2],
              s[1] << 16 | s[0] >>> 16,
              s[3],
              s[2] << 16 | s[1] >>> 16
            ], v = this._C = [
              s[2] << 16 | s[2] >>> 16,
              s[0] & 4294901760 | s[1] & 65535,
              s[3] << 16 | s[3] >>> 16,
              s[1] & 4294901760 | s[2] & 65535,
              s[0] << 16 | s[0] >>> 16,
              s[2] & 4294901760 | s[3] & 65535,
              s[1] << 16 | s[1] >>> 16,
              s[3] & 4294901760 | s[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              D.call(this);
            for (var p = 0; p < 8; p++)
              v[p] ^= h[p + 4 & 7];
            if (l) {
              var w = l.words, f = w[0], u = w[1], d = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360, _ = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, m = d >>> 16 | _ & 4294901760, I = _ << 16 | d & 65535;
              v[0] ^= d, v[1] ^= m, v[2] ^= _, v[3] ^= I, v[4] ^= d, v[5] ^= m, v[6] ^= _, v[7] ^= I;
              for (var p = 0; p < 4; p++)
                D.call(this);
            }
          },
          _doProcessBlock: function(s, l) {
            var h = this._X;
            D.call(this), n[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, n[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, n[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, n[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
            for (var v = 0; v < 4; v++)
              n[v] = (n[v] << 8 | n[v] >>> 24) & 16711935 | (n[v] << 24 | n[v] >>> 8) & 4278255360, s[l + v] ^= n[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function D() {
          for (var s = this._X, l = this._C, h = 0; h < 8; h++)
            F[h] = l[h];
          l[0] = l[0] + 1295307597 + this._b | 0, l[1] = l[1] + 3545052371 + (l[0] >>> 0 < F[0] >>> 0 ? 1 : 0) | 0, l[2] = l[2] + 886263092 + (l[1] >>> 0 < F[1] >>> 0 ? 1 : 0) | 0, l[3] = l[3] + 1295307597 + (l[2] >>> 0 < F[2] >>> 0 ? 1 : 0) | 0, l[4] = l[4] + 3545052371 + (l[3] >>> 0 < F[3] >>> 0 ? 1 : 0) | 0, l[5] = l[5] + 886263092 + (l[4] >>> 0 < F[4] >>> 0 ? 1 : 0) | 0, l[6] = l[6] + 1295307597 + (l[5] >>> 0 < F[5] >>> 0 ? 1 : 0) | 0, l[7] = l[7] + 3545052371 + (l[6] >>> 0 < F[6] >>> 0 ? 1 : 0) | 0, this._b = l[7] >>> 0 < F[7] >>> 0 ? 1 : 0;
          for (var h = 0; h < 8; h++) {
            var v = s[h] + l[h], p = v & 65535, w = v >>> 16, f = ((p * p >>> 17) + p * w >>> 15) + w * w, u = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            x[h] = f ^ u;
          }
          s[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, s[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, s[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, s[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, s[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, s[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, s[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, s[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        i.RabbitLegacy = C._createHelper(c);
      }(), a.RabbitLegacy;
    });
  }(pr)), pr.exports;
}
var Br = { exports: {} }, ft;
function Fe() {
  return ft || (ft = 1, function(y, A) {
    (function(a, i, E) {
      y.exports = i(V(), w0(), b0(), y0(), a0());
    })(G, function(a) {
      return function() {
        var i = a, E = i.lib, C = E.BlockCipher, b = i.algo;
        const n = 16, F = [
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
        ], x = [
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
        var c = {
          pbox: [],
          sbox: []
        };
        function D(p, w) {
          let f = w >> 24 & 255, u = w >> 16 & 255, d = w >> 8 & 255, _ = w & 255, m = p.sbox[0][f] + p.sbox[1][u];
          return m = m ^ p.sbox[2][d], m = m + p.sbox[3][_], m;
        }
        function s(p, w, f) {
          let u = w, d = f, _;
          for (let m = 0; m < n; ++m)
            u = u ^ p.pbox[m], d = D(p, u) ^ d, _ = u, u = d, d = _;
          return _ = u, u = d, d = _, d = d ^ p.pbox[n], u = u ^ p.pbox[n + 1], { left: u, right: d };
        }
        function l(p, w, f) {
          let u = w, d = f, _;
          for (let m = n + 1; m > 1; --m)
            u = u ^ p.pbox[m], d = D(p, u) ^ d, _ = u, u = d, d = _;
          return _ = u, u = d, d = _, d = d ^ p.pbox[1], u = u ^ p.pbox[0], { left: u, right: d };
        }
        function h(p, w, f) {
          for (let I = 0; I < 4; I++) {
            p.sbox[I] = [];
            for (let H = 0; H < 256; H++)
              p.sbox[I][H] = x[I][H];
          }
          let u = 0;
          for (let I = 0; I < n + 2; I++)
            p.pbox[I] = F[I] ^ w[u], u++, u >= f && (u = 0);
          let d = 0, _ = 0, m = 0;
          for (let I = 0; I < n + 2; I += 2)
            m = s(p, d, _), d = m.left, _ = m.right, p.pbox[I] = d, p.pbox[I + 1] = _;
          for (let I = 0; I < 4; I++)
            for (let H = 0; H < 256; H += 2)
              m = s(p, d, _), d = m.left, _ = m.right, p.sbox[I][H] = d, p.sbox[I][H + 1] = _;
          return !0;
        }
        var v = b.Blowfish = C.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var p = this._keyPriorReset = this._key, w = p.words, f = p.sigBytes / 4;
              h(c, w, f);
            }
          },
          encryptBlock: function(p, w) {
            var f = s(c, p[w], p[w + 1]);
            p[w] = f.left, p[w + 1] = f.right;
          },
          decryptBlock: function(p, w) {
            var f = l(c, p[w], p[w + 1]);
            p[w] = f.left, p[w + 1] = f.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        i.Blowfish = C._createHelper(v);
      }(), a.Blowfish;
    });
  }(Br)), Br.exports;
}
(function(y, A) {
  (function(a, i, E) {
    y.exports = i(V(), U0(), Yt(), Jt(), w0(), $t(), b0(), vt(), Fr(), re(), At(), te(), ee(), ne(), yr(), ie(), y0(), a0(), xe(), oe(), ae(), ce(), se(), fe(), ue(), le(), he(), de(), pe(), Be(), ve(), Ae(), Ee(), Ce(), Fe());
  })(G, function(a) {
    return a;
  });
})(Bt);
var ye = Bt.exports;
const Et = /* @__PURE__ */ Tt(ye);
window.Buffer = R0.Buffer;
const De = R0.Buffer.alloc(32), ge = `
account-id`, we = (y) => y < 0 ? (Number(y) >>> 0).toString(16) : Number(y).toString(16), be = (y) => {
  const A = new Uint8Array(y), a = zt.unsigned(R0.Buffer.from(A));
  return we(a).padStart(8, "0");
}, ut = (y) => {
  const A = [];
  for (let a = 0; a < y.length; a += 1)
    A[a / 4 | 0] |= y[a] << 24 - 8 * (a % 4);
  return Et.lib.WordArray.create(A, y.length);
}, _e = (y, A) => {
  const a = [];
  return A > 0 && a.push(y >>> 24), A > 1 && a.push(y >>> 16 & 255), A > 2 && a.push(y >>> 8 & 255), A > 3 && a.push(y & 255), a;
}, me = (y, A) => {
  y.hasOwnProperty("sigBytes") && y.hasOwnProperty("words") && (A = y.sigBytes, y = y.words);
  let a = [], i, E = 0;
  for (; A > 0; )
    i = _e(y[E], Math.min(4, A)), A -= i.length, a = [...a, ...i], E++;
  return a;
}, lt = (y, A = "") => {
  try {
    const a = St.from(y), i = Et.algo.SHA224.create();
    i.update(ge), i.update(ut(a.toUint8Array()));
    const E = R0.Buffer.from(De);
    A && E.writeUInt32BE(Number(A)), i.update(ut(E));
    const C = i.finalize(), b = me(C, 28);
    return be(b) + C.toString();
  } catch (a) {
    return console.error(a), !1;
  }
};
class ke {
  constructor() {
    this.name = "NNS", this.logo = "path_to_nns_logo.svg", this.readyState = "Loadable", this.url = "http://localhost:4943", this.authClient = null, this.agent = null;
  }
  async isAvailable() {
    return this.authClient || (this.authClient = await kr.create()), !0;
  }
  async connect(A) {
    return this.authClient || (this.authClient = await kr.create()), await this.authClient.isAuthenticated() ? this._continueLogin(A.host || this.url) : new Promise((i, E) => {
      this.authClient.login({
        identityProvider: A.identityProvider || this.url,
        onSuccess: async () => {
          try {
            const C = await this._continueLogin(A.host || this.url);
            i(C);
          } catch (C) {
            E(C);
          }
        },
        onError: (C) => {
          E(new Error("Authentication failed: " + C));
        }
      });
    });
  }
  async _continueLogin(A) {
    try {
      const a = this.authClient.getIdentity(), i = a.getPrincipal();
      return this.agent = vr.createSync({
        identity: a,
        host: A
      }), (this.url.includes("localhost") || this.url.includes("127.0.0.1")) && await this.agent.fetchRootKey(), {
        accountId: lt(i.toString()),
        principalId: i.toString()
      };
    } catch (a) {
      throw console.error("Error during _continueLogin:", a), a;
    }
  }
  async disconnect() {
    this.authClient && (this.readyState = "Loadable", this.agent = null, await this.authClient.logout(), this.authClient = null);
  }
  async createActor(A, a) {
    if (!A || !a)
      throw new Error("Canister ID and Interface Factory are required");
    if (!this.agent)
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    return ht.createActor(a, { agent: this.agent, canisterId: A });
  }
  async createAgent(A) {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized");
    const a = this.authClient.getIdentity(), i = vr.createSync({ identity: a, host: A });
    return (this.url.includes("localhost") || this.url.includes("127.0.0.1")) && await i.fetchRootKey(), i;
  }
  async getAccountId() {
    if (!this.authClient || !this.agent)
      throw new Error("Wallet is not connected or initialized");
    const a = await this.authClient.getIdentity().getPrincipal();
    return lt(a.toString());
  }
  async getPrincipal() {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized");
    return this.authClient.getIdentity().getPrincipal().toString();
  }
  async getBalance() {
    throw new Error("Method not implemented.");
  }
  async transfer(A) {
    throw new Error("Method not implemented.");
  }
  async whoAmI() {
    if (!this.authClient || !this.agent)
      throw new Error("Wallet is not connected or initialized");
    return this.authClient.getIdentity().getPrincipal().toString();
  }
  async isConnected() {
    var A;
    return await ((A = this.authClient) == null ? void 0 : A.isAuthenticated());
  }
}
class Ct {
  getBalance() {
    throw new Error("Method not implemented.");
  }
  async isConnected() {
    return await window.ic.plug.isConnected();
  }
  whoAmI() {
    throw new Error("Method not implemented.");
  }
  constructor() {
    this.name = "Plug", this.logo = "path_to_plug_logo.svg", this.readyState = "NotDetected", this.url = "https://plugwallet.ooo/";
  }
  async isAvailable() {
    return !!(window.ic && window.ic.plug);
  }
  async connect(A) {
    if (!await this.isAvailable())
      throw this.readyState = "NotDetected", window.open(this.url, "_blank"), new Error("Plug wallet is not available");
    try {
      if (!await window.ic.plug.isConnected() && !await window.ic.plug.requestConnect({
        whitelist: A.whitelist || [],
        host: A.host || "",
        timeout: A.timeout || 12e4,
        onConnectionUpdate: () => {
          console.log("Connection updated");
        }
      }))
        throw new Error("Failed to connect to Plug wallet");
      await window.ic.plug.createAgent({
        whitelist: A.whitelist || [],
        host: A.host || ""
      });
      const i = await window.ic.plug.agent.getPrincipal(), E = window.ic.plug.accountId;
      return this.readyState = "Installed", {
        accountId: E,
        principalId: i.toString()
      };
    } catch (a) {
      throw console.error("Error connecting to Plug wallet:", a), a;
    }
  }
  async disconnect() {
    window.ic && window.ic.plug && window.ic.plug.disconnect && await window.ic.plug.disconnect();
  }
  async transfer(A) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.requestTransfer(A);
  }
  async createActor(A, a) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.createActor({
      canisterId: A,
      interfaceFactory: a
    });
  }
  async getAccountId() {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.accountId;
  }
  async getPrincipal() {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.principalId;
  }
  // Additional methods specific to Plug wallet
  async requestTransferToken(A) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.requestTransferToken(A);
  }
  async requestBurnXTC(A) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.requestBurnXTC(A);
  }
  async batchTransactions(A) {
    if (!window.ic || !window.ic.plug)
      throw new Error("Plug wallet is not installed or initialized");
    return window.ic.plug.batchTransactions(A);
  }
}
window.ic && window.ic.plug && window.ic.plug.init();
window.addEventListener("load", () => {
  window.ic && window.ic.plug && (Ct.prototype.readyState = "Installed");
});
const Ie = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e", Se = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAoICAgICAgICAgICAgICAgICQgICAgICQgICAgICAkICAgICAoICAgICgkKCAgLDQsIDAgICggBAwQEBgUGCgYGCg0OCw0NDg8NDg8PDQ0ODRANDQ4PDg0QDQ0ODQ4PEA4ODw0ODg4QDQ0PDQ8ODxAOEA8ODQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAeAAEAAgMAAwEBAAAAAAAAAAAABwgFBgkDBAoCAf/EAE8QAAIBAwEEBAcJDAYLAAAAAAECAwAEEQUGBxIhCBMxQQkUIjJRYYEkNHFzkZKhs7QVI0JSdHWChbLB0dMzNTZTctQXJSZDYmODk5Sio//EAB0BAQABBQEBAQAAAAAAAAAAAAAHAwQFBggCAQn/xABBEQABAwIDBAUIBwgCAwAAAAABAAIDBBEFITEGEkFRMmFxgZEHEyKhscHR0iMkQoKSsvEWM1JicnPh8KLCFBVD/9oADAMBAAIRAxEAPwDqnREoiURKIlEUdar0kNnYJHhn1jRYZomKSRS6pYxyRuOTI8bzhkYHkVYAivtl5LgNSts2U20s7+EXFjc217ASVE9pPFcwll5Mokhd0JXvHFkV8X0G6zNF9SiLGbR7T21nC9xeTwWtvHgyT3MscEKAnA45ZWVFySAOJhzNEWj2vSb2akZUTWtDd3YKiJq1gzMxOAqqLgliTyAAJJr7ZeQ9p4hSUDXxel/aIlESiJREoiURKIlESiL5ntvD7uvfyu4+ueq40WKf0j2rq/4Gc/6h1T87n7Ha1Tdqryn6PeugVeFcpRFSzwtx/wBkv1nZfsz16bqqM3QK4qVWWNX01bL+9rf4iH6tat1mFlKIlESiJREoiURKIlESiL5nduvf15+VXH1z1XGixT+ke1dX/Az/ANQ6p+dz9jtapu1V5T9HvXQOvCuUoipZ4W/+yX6zsv2bivTdVRm6BXFSqyxq+mrZf3tbfEQ/VrVuswspREoiURKIlESiJREoiURfM7t17+vPyq4+ueq40WKf0j2rq/4Gf+odU/O5+x2tU3aq8p+j3roHXhXKURUs8Lf/AGS/Wdl+zcV6bqqM3QK4qVWWNX01bL+9rb4iH6tat1mFlKIlESiJREoiURKIoo3j735bW4a3gSMmMLxtIGOSyhwFCsuAFYcyTknsGOcdY5tNLRVBp4Gt9EDeLrnUXsACOBCibaTbGfD6s0lMxt2gbxdc5uANgARwIzufUtU/0+Xv4tv8yT+bWuftlXfwx+DvmWp/t/iX8EX4XfOqSar0D9DllkleS/DyyPI2LiEDidixwPFuQyeQq8i2oxaUXjiaexjz7CrR23dfe5EQ7j8ynzo26LFstaz2emkyRXFx4y5umEriTq0iwpjEIC8Ma8ipOc8+dVnbQY03N1P4xyD3qpH5Qa5osBD4O+dTFFv6vD+Db/Mf+bVodra9ps9jAetrh/2V23b7EHfZi/C7517Ue/G7P4MHzH/mVUG1tYfsx+B+ZXTdua8/Zi/C75lHm/8A0hNptP8AubqHElv18dxm1Ijk44w4UcUgmXh8s5HDk4HMc8127VVfJngfmVY7Z1zxYtj8HfMq5R+Df2fP+81L/wAmD/K1cN2oqzwZ4H4r03amrPBngfmV4tM3mTxxpGBERGioCVbJCgKM4cDOBzwBVUbR1J4M8D8Vkm7W1h4M8D8y2HZ3eRJJKiSKmHYKCgIIJOB2scjJGez91ZSixySWVscrRZxAyuLX04lZrDtpJZpmxTNbZxAuLggnIak8VIVbqpDSiJREoiURKIqpb89Z4NTuVAyR1PM9nO3iPt+irCDyeDF6p1fVS7sTiN1rOkd1oabuOTcwdA645Lkvb2v81jVQxoz+jzOn7pijWfUXbtY/AOQ+ipVw3ZLCMOAEFOy4+04b7u3edcjusFF0lVLJq492XsUCb6elvY6RI1siNe3i+fDG4SOI4ziWYq/C3Z5CJIw/C4eWa+I4nT030YG84cBkB2n3WUg7ObDVuLsFQ9wihOjnC5d1tbcXHWSByuos0Pwhr9YPGdO4YSRloLnikRe8hHiVZD6uOP4RWqOxJrz6TMuo/wCPgt8n8lwDPq9Vd3JzLA94cSPBytfu43n2mp263VlKJIzyYebJE/ekiecjDtweRGGBZSCac9DDVsvuhw5EA+oqIcRw+rwqcwVLS13A8HDm08R7NDY5LYtod48FhbyXV3KkUEQy7yH5FXHlM7HkqKGZicAE1H+I7JUkl3MG4ebdPw6eFlfYY+qqpmwQNL3HQe+/ADiTkOKq1tV4TcLKVsNOaWJTymubjqmf04hjifhHeCZSfSq9la3Fsgfty+DfiVOlJsU7cBqZgHfwtG8B94kX8FJm4nwgWn6pOlpewtplzIwSIvKJraVyQFTruCJo3Y+arx8J7OsJIBx1ds9PSt34zvtGuViO7O/j3KyxHZeekYZYXecaNbCzh3XNx2G/UrZwzVrjXLVGPWf2Wl90QfHRftrWYw931mL+tv5gs/hT/rcP9xn5gp7qYlPqURKIlESiJRFT3f64GrXeeX9B9mhqV8ENqGO/8353LkXbHDavEtpqimoonyyO83ZjGl7j9DHwaCe06BQJvk3heIaZeXUf9JHFiI45CWRlijbB7QrurEY5gGrqurBDC57dQMu05BSHhfkJx5sQrsWEcMTS0ujL96VwLgLWj3mi9+LwRyXMG4mZ3Z3JZ3ZmdmOWZmJLMSeZJJJJPaTUUOJJJOql/wA22IebYLBuQAyAAyGS/FeUUg7jt7M2j3yXEZLQuQlzBnyZYs8wAeQdPOjbkQwx5rMDe0k5hffhxHMf7otY2hwKPGaUwOtvjON3FrvgdCOXWAVn+kvvufWbzCFhY25K20fNeLuad1PPjk7gccCYXAJct9rZRLId3ojT4rG7JbOjBqb6QfTv/eHlyYDyHHmc9LWh+rFbyhFeHN3hZegbLrX0Nt5smpaHbvOxee1d7OaRjkyGII0bEnmWMEkXExJLMGPfUJ4xTimqnNbkD6QHK+vrBUI4/StpK1zWZNcA4DlfUeIPcrGbJy+6bf4+L6xap4a761F/W38wVLCXfXIP7jPzBWHqa10SlESiJREoiURUm6Rrn7s3g9Hi/wBlgqScIP1Rn3vzFdCbE4fSwYe2piiY2WUuMjw0Bz91zmt3nandaABc5AZKu+/jZ57rSbyJBl+BJQBzJ6mRJmAHeSqEAenFXFfGZIHNHK/gbrYcfp3VFBLG3WwP4SHewKZujJ0QNhNW0XT9Q+5/WzSQIt2HvtQ8m8jUJcqUW7VVHWhmUcKgxsjAAMKjN92my5bmpmseQRxWL6QXgztLvbzTX0eOGwsUE8eowxTyJOxZc29xFLOl2r9XJgSROFzGPIPExK+Q5WroQSLLWOmHszs7YWlrs3o+m6VLrl2kEdxeJY2wmtIFVTJcGTgLQz3HDxDBykRkfkTCWvKWB8zw1v8Av6LM0GGSVbwyJtydPee7isR0MtC0CC7uNm9otO0u4uGkM2l6jc2VuZLuN85t2mdS5fI4oVLsc9bFnMcQatXUr6d5B/Uc16xDC30chZI31ajmt23FeDI061v7yfWhBfW5nuhbQJIy28ltKYmtmMKJDLbTwETBwtxLGQyKo8lnbGlywbYQDmpK3mdCXd/ZWV1fXOnCKG1heZzHf6ghPCMqijxvBeRsRooHlMygAk0BJNgvsjY2NLnaBQh0HtINrpGGHB43dTXUa5JxGVjhUZPM5EHEpPapB760Ta3B5AxtezogbrhyFzZ3eTY93WucNosVZPiZhH2Ghvfm4juv6irU7Hy+6rb8oh+sWtCwx31qH+4z8wXvB3fXYP7rPzhWTqdV0qlESiJREoiURVF3/wCxM8mrzui+RKkD8bcl5RLEfWecZ5AH2Vkpdr8NwWlayqk+kztG0XeRc520A6yRexteyn7ZTEoY8Kja45tLxYa9Iu9601N3IA8tix9CgAfTnP0VpkvlQdK61PC1o/mJcfVugdma2N2Lb3RaO/NRpZbtdV0K6lu9npUMM7cdxplyfc8jelPKQKfQQ8TIPJDlMILaLaZtQbygDsGSjjFcBbUuMkNs87aW7DpbqOnBZrW99+2N1GYIrKy05mHC92ZFlMee1o166UA+gmKb2dtZqLEadxzN1gYNlp3O9IZdZbb1EnwWn7F7pPEDLPM73V7cEtcXkhLO7MeJgCxLBS3M8RLOQCTyULJeDz0j2/Quu62YOR7AOXZdTFguF09Cz0M3kZnTuA5e3jws3g7u4dQiVZMxyxnignTlJC/I5U8iQSBlcjOAQVIVhmqmmZO3dd3Hkr3E8JgxCPckGfB3EfEcx+qyGzG/3azToxbyQWurog4Y7l5OqnK9iiQ9bHxkDtLRlj3yP21qMuCyB3ojwt71ENXsTVNefNC45gi3gSCPYsVtImtbRSJ92pIrWxicSDTrQnEjjsMjB5M8jjiMrlefCsZbirKUGB53l8OJ9wXN/lTkxTZhkYdGd2W4Y/Ita5uoNibutm0GwI57rgpV04iIIqAIqBVRVGAoUYUADkAAAAPRWZrMMjmjdE4XaQQR1EWsuPhUv3/OEneve/G/NTBuwk666tcf3iufVweWfk4TXJwwqSgxoUTvsSAg82j0ge9vrUybKv8A/Lract/jBP3cz7FZ2pdXUCURKIlESiJRFoO9XZ/rFSYDmnkN/hJyvyNkfpVB3lRo3MpYsSj/APmdx/8AS8+ie52X3ltmA1fm3OiPHMdo19XsUT3Ok1AtLjfWt8ZOoW6Re0s2nQ2NytyLG1N/HBf3JsvHxBbyxTBJmtxNA7ItwIVfq5VfhcleMgI0t7IVNPiNSaecnNhLbGxuCPdc9yscUxCanhEkFrh2dxfIg++y2LT9gteuIEutMk2e1+0ceRPa3lxp7N/02i1OEN3FTdAqeRA54l8bPhucUpt1gH2WWFi2ulb+8jB7CR7d5ejNsdtMMiTZ+ZvXBqukyqf+7c27Y+FBV5DQVUJBbILjQ5g+9ZePbOIZujcOwg/Ba9d7q9pnb7zoNwoP99qekIB7UvJWx8Ck/DUl0OOSMi3akbzhxGV+3LX2rLt2+gDbGJ5PaB8V71r0fNpeB5r1dE0a1jUvLcXeoy3RiQdrMkVtbQAL3l7xAOXM91w/H3fYjHeb+4Kwm8oLzlDAAetxPqAb7VFOw+1Yl1C/S3v4tWsbXxeJbyCxNlBJcnrWuUgD3V280cadRiZpAHZm4RwhXkzGEVs05c+S1hYCw8fcsRimFz7eYHW0NY1gNgacgWDJmhxa65JPJrv5XEcVKYNbevysljfE90bwQ5pIIOoINiO4qfOjBoTM01y3mJ97j9bsAXx/hXA/TqJtpsOh/wDYx1g6fmy0j73ont6Q7F0D5KsPe8y1j+i30Wf1EAu8BYfeKsLWDXRSURKIlESiJRF4rq2DqyNzVgQR6jVnWUkVZA+mnF2PaWuHMEKpG8xuDm6hRBruitDIUbmO1W/GXuP8R3Gvz+2m2eqdnq51LLfd1jfwe3ge0aOHA9RBMiUtS2eMPb3jkVpm3mwNvqNpcWVyvFDcxtHIAcEZ5qynuZGCupwcMoPOsdhuNVGHzsqIj6TDcfA9RGR6ldSASMLHaFcvdu90es7K3zCCe6tgx9z3tpLLAlxGCSMtE4w4HnwOSVP4ylWbsLANrqfF4BLA6zx02X9Jp945O0PbcDSaikMLt1wy4Hms7pfTN2uhAC6nM4AxiWG1mPzpIGf28XOtzbibuatfMtPBeTU+mztfIMHUpEH/AC7azQ/OW34x7GFXAxAnivQgbyUW6lJrm0FysVzc3t+2Qc3M8skMCntchiY4lHPkqjixgAkgHb8OYaxo82M+PV2rPYdhclY8RwNz4ngOsn/erNW/3bbAxaZZxWkXMJlpHxgyStzeQjJxk8gMnhUKMnFSRTU7YIxG39TzU/4Zh7KCnbAzhqeZOp/3QKWNidnpbySKCEFnc49SqPOdj3Ko5k+zmSAcjLVMp4TLIch6+Q71+X/lN2Sm/biqoKRmUz2zDk0StDnuPINeX9trDMgK7WyOzEdnbxW8fmxrgnvdjzZz62bJ9XZ3VEdVUuqZXSv1Pq5DuU74RhcOF0kdHD0WC1+Ljxcesm5WZq0WYSiJREoiURKIlEWP1rREnThf9Fh2qfSP3jvrVdo9nKTH6U01UOtjx0mHmPeNCFd01U+nfvM7xzUX61s9JAcMMr3OPNP8D6j9NcSbS7H4hs/KRUN3oyfRlaCWO5X/AIT/ACnuJAut6payOoF2nPiOK17WtDhuY2huI454nGGjlRZEb4VYEcu0HHI1p0FRLTvEsLi1w0LSQR3hXjmhws4XChDaHoSaHOxaNbm1zzxbzAr8lwk+B6lIA9VSBS7f4tALOLH/ANTc/wDgWrHuw+I6XHZ/m69PSegtosZy5u7j/hmmVV/+EULf+1ZB3lGxJ+QDG9bWkn/kXD1L0yghbrc9/wALLMbe7t7Wxt4RaQxW8auUKxIF4uJchmPa7eT5zEk57a6H8ie1U1dXVVFO8u3oxILnQscGm3K4ePBSNs3I1jnwsAAtfwy96wmxO7661CTq7aMtgjjkPKKMHvd+wenhGWPcDXWdTVxUzd6Q9g4nuWyYli1NhsfnKh1uTdXO7B79BxKuPur3VQ6XDwJ98mfnNMRgsfxVH4KDuXJz2nJ7I+rq+Srdnk0aDl/lcz4zWMxLEH4h5trXlrWX+1uMJLQTxzcT+i3isYsUlESiJREoiURKIlESiL8SRBgQQCD2gjIPsqlLCyZhjlaHNIsQQCCORByXpri03BzUcbeaLHEyGNeEOGyBnGRjs9Hb2Vx55VdnKLCJ6eWhi3BKH74F927d21ho3InIWHUtzwmpfM1wkN7WtzWrVBF1nkpdF7+ibIQXsgiuE6yJfvnDkgFl5LnhIJHPszzqd/I0+WPHnSR3FoH3PK7mD9P8Kyq8QmoY/OU7t1xyvkcjra6lnTNKigRY4USKNRhURQqj2AAe3vrst73PO84knmVoE08k7zJK4ucdSTc+te3XhUEoiURKIlESiJREoiURKIlEWL2h0VZ4yrciPKVh2g/wPYRWnbVbN02P0Jpqi4I9Jjxq1wGvWCMiOPaAVfUdU6nk3m9hHNRBX54KRUoilHYrRFjiVxzaVVYk9wIyFHqH0/JXc3k32bpsLwyOrYS6SoYx73HgC24YOoXPWTnyA0TE6p0spYdGkgfFbFUtLDpREoiURKIlESiJREoiURKIlEX5Zcgj015c3eBHNfQbKHNT0aSJirKeR5HBww9INfnZjezGIYRUvp54nkA2a8NO68cCDmMxwvlodFJEFTHM0OaR2cQvDa6c7kKqsSfQD9Po+E1YUGCV9fMIKaB7nE26JsL8SbWA6yQFUkmZGN5xACmHS7Tq440PMqiqT6wAK/QvBqE4fQU9G43McTGE8y1oBPqUczyeckc8cSSvarMqglESiJREoiURKIlESiJREoiURKIlESiJREoiURKIlESiJRF//9k=", Re = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: Ie,
    adapter: ke
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: Se,
    adapter: Ct
  }
];
class Te {
  constructor(A = {}) {
    this.account = null, this.activeWallet = null, this.provider = null, this.balance = 0, this.canisterActors = {}, this.anonCanisterActors = {}, this.walletState = {
      account: null,
      activeWallet: null,
      exeBalance: 0,
      icpBalance: 0
    }, this.callbacks = [], this.wallets = Re.map((a) => ({
      id: a.id,
      adapter: a.adapter,
      icon: a.icon,
      name: a.name
    })), this.config = {
      hostUrl: A.hostUrl || "http://localhost:4943",
      localStorageKey: A.localStorageKey || "connectedWallet",
      defaultCanisterId: A.defaultCanisterId || "",
      identityProvider: A.identityProvider,
      ...A
    }, this._initializeFromLocalStorage();
  }
  async _initializeFromLocalStorage() {
    const A = localStorage.getItem(this.config.localStorageKey || "");
    A && await this.connect(A);
  }
  registerCallback(A) {
    this.callbacks.push(A);
  }
  triggerCallbacks() {
    for (const A of this.callbacks)
      A(this.walletState);
  }
  async connect(A, a = {}) {
    const i = this.wallets.find((E) => E.id === A);
    if (!i) return !1;
    try {
      const E = new i.adapter();
      if (await E.isAvailable()) {
        const C = await E.connect({
          ...this.config,
          ...a
        });
        if (C && typeof C != "boolean")
          return this.account = C, this.activeWallet = A, this.provider = E, localStorage.setItem(this.config.localStorageKey || "", this.activeWallet), this._dispatchWalletConnectedEvent(A), await this.getWalletBalance(), this.walletState = {
            account: this.account,
            activeWallet: this.activeWallet,
            exeBalance: this.balance,
            icpBalance: 0
          }, this.triggerCallbacks(), this.account.principalId;
      } else
        window.open(E.url, "_blank");
    } catch (E) {
      console.error("Error connecting to wallet:", E);
    }
    return !1;
  }
  async disconnect() {
    return this.provider && await this.provider.disconnect(), localStorage.removeItem(this.config.localStorageKey || ""), this.provider = null, this.account = null, this.activeWallet = null, this.walletState = {
      account: null,
      activeWallet: null,
      exeBalance: 0,
      icpBalance: 0
    }, this.triggerCallbacks(), !0;
  }
  async getWalletBalance() {
    return 0;
  }
  async getSignedActor(A, a) {
    if (!this.provider)
      throw new Error("Wallet not connected");
    try {
      return await this.provider.createActor(A, a);
    } catch (i) {
      throw console.error(
        `Error creating signed actor for canister ${A}:`,
        i
      ), i;
    }
  }
  async getCanisterActor(A, a, i = !1, E = !1, C = !1) {
    var n;
    if (C)
      return this.getSignedActor(A, a);
    let b;
    if (i)
      if (E || !this.anonCanisterActors[A]) {
        const F = vr.createSync({
          identity: new It(),
          host: this.config.hostUrl
        });
        (n = this.config.hostUrl) != null && n.includes("localhost") && await F.fetchRootKey(), b = ht.createActor(a, {
          agent: F,
          canisterId: A
        }), this.anonCanisterActors[A] = b;
      } else
        b = this.anonCanisterActors[A];
    else {
      if (!this.provider)
        throw new Error("Wallet not connected");
      E || !this.canisterActors[A] ? (b = await this.provider.createActor(A, a), this.canisterActors[A] = b) : b = this.canisterActors[A];
    }
    return b;
  }
  async transfer(A) {
    if (!this.provider)
      throw new Error("Wallet not connected");
    return this.provider.transfer(A);
  }
  isWalletConnected() {
    return !!this.activeWallet;
  }
  _dispatchWalletConnectedEvent(A) {
    const a = new CustomEvent("walletConnected", { detail: { walletId: A } });
    window.dispatchEvent(a);
  }
}
export {
  Te as default
};
//# sourceMappingURL=plug-n-play.es.js.map
