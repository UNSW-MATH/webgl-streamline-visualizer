import { LngLatBounds as Rt, LngLat as je, MercatorCoordinate as St } from "maplibre-gl";
var Et = typeof global == "object" && global && global.Object === Object && global, Ot = typeof self == "object" && self && self.Object === Object && self, et = Et || Ot || Function("return this")(), fe = et.Symbol, tt = Object.prototype, Dt = tt.hasOwnProperty, Ft = tt.toString, z = fe ? fe.toStringTag : void 0;
function Bt(r) {
  var e = Dt.call(r, z), t = r[z];
  try {
    r[z] = void 0;
    var i = !0;
  } catch {
  }
  var s = Ft.call(r);
  return i && (e ? r[z] = t : delete r[z]), s;
}
var It = Object.prototype, Mt = It.toString;
function Ut(r) {
  return Mt.call(r);
}
var Ct = "[object Null]", Lt = "[object Undefined]", Ne = fe ? fe.toStringTag : void 0;
function jt(r) {
  return r == null ? r === void 0 ? Lt : Ct : Ne && Ne in Object(r) ? Bt(r) : Ut(r);
}
function Nt(r) {
  return r != null && typeof r == "object";
}
var Gt = "[object Symbol]";
function Vt(r) {
  return typeof r == "symbol" || Nt(r) && jt(r) == Gt;
}
var kt = /\s/;
function Kt(r) {
  for (var e = r.length; e-- && kt.test(r.charAt(e)); )
    ;
  return e;
}
var zt = /^\s+/;
function Xt(r) {
  return r && r.slice(0, Kt(r) + 1).replace(zt, "");
}
function Te(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Ge = NaN, Yt = /^[-+]0x[0-9a-f]+$/i, qt = /^0b[01]+$/i, $t = /^0o[0-7]+$/i, Wt = parseInt;
function Ve(r) {
  if (typeof r == "number")
    return r;
  if (Vt(r))
    return Ge;
  if (Te(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Te(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = Xt(r);
  var t = qt.test(r);
  return t || $t.test(r) ? Wt(r.slice(2), t ? 2 : 8) : Yt.test(r) ? Ge : +r;
}
var ye = function() {
  return et.Date.now();
}, Ht = "Expected a function", Zt = Math.max, Jt = Math.min;
function Qt(r, e, t) {
  var i, s, o, a, n, l, u = 0, c = !1, h = !1, f = !0;
  if (typeof r != "function")
    throw new TypeError(Ht);
  e = Ve(e) || 0, Te(t) && (c = !!t.leading, h = "maxWait" in t, o = h ? Zt(Ve(t.maxWait) || 0, e) : o, f = "trailing" in t ? !!t.trailing : f);
  function d(_) {
    var S = i, P = s;
    return i = s = void 0, u = _, a = r.apply(P, S), a;
  }
  function p(_) {
    return u = _, n = setTimeout(x, e), c ? d(_) : a;
  }
  function m(_) {
    var S = _ - l, P = _ - u, M = e - S;
    return h ? Jt(M, o - P) : M;
  }
  function g(_) {
    var S = _ - l, P = _ - u;
    return l === void 0 || S >= e || S < 0 || h && P >= o;
  }
  function x() {
    var _ = ye();
    if (g(_))
      return b(_);
    n = setTimeout(x, m(_));
  }
  function b(_) {
    return n = void 0, f && i ? d(_) : (i = s = void 0, a);
  }
  function v() {
    n !== void 0 && clearTimeout(n), u = 0, i = l = s = n = void 0;
  }
  function T() {
    return n === void 0 ? a : b(ye());
  }
  function w() {
    var _ = ye(), S = g(_);
    if (i = arguments, s = this, l = _, S) {
      if (n === void 0)
        return p(l);
      if (h)
        return clearTimeout(n), n = setTimeout(x, e), d(l);
    }
    return n === void 0 && (n = setTimeout(x, e)), a;
  }
  return w.cancel = v, w.flush = T, w;
}
function ke(r) {
  const e = (a) => {
    const n = 4007501668e-2, l = St.fromLngLat(a), u = (l.x - 0.5) * n, c = (0.5 - l.y) * n;
    return [u, c];
  }, [t, i] = e(r.getSouthWest()), [s, o] = e(r.getNorthEast());
  return [t, i, s, o];
}
class de {
  constructor(e, t) {
    Object.defineProperty(this, "renderingMode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "2d"
    }), Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "custom"
    }), Object.defineProperty(this, "_id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "map", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "gl", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_visualiser", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "previousFrameTime", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "boundingBoxWMS", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "times", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "elevationBounds", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "timeIndex", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "elevation", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "colorScaleRange", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "isInitialised", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "abortController", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "onLayerAdd", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "onStartLoading", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "onEndLoading", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "onResizeStart", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: () => this._visualiser?.stop()
    }), Object.defineProperty(this, "debouncedOnMapMoveEnd", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Qt(() => this.onMapMoveEnd(), 100)
    }), Object.defineProperty(this, "onMapMoveStart", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: () => this.debouncedOnMapMoveEnd.cancel()
    }), this._id = e, this.map = null, this.gl = null, this.options = t, this._visualiser = null, this.previousFrameTime = null, this.boundingBoxWMS = null, this.times = [], this.elevationBounds = null, this.timeIndex = 0, this.elevation = null, this.colorScaleRange = null, this.isInitialised = !1, this.abortController = new AbortController(), this.onLayerAdd = null, this.onStartLoading = null, this.onEndLoading = null;
  }
  get id() {
    return this._id;
  }
  get visualiser() {
    return this._visualiser;
  }
  get signal() {
    return this.abortController.signal;
  }
  get time() {
    if (this.times.length === 0)
      throw new Error("No available times.");
    const e = this.times[this.timeIndex];
    if (!e)
      throw new Error(`Requested time index ${this.timeIndex} out of range; only ${this.times.length} times available.`);
    return e;
  }
  get size() {
    if (!this.gl)
      throw new Error("Not initialised.");
    const e = this.gl.drawingBufferWidth, t = this.gl.drawingBufferHeight;
    return [e, t];
  }
  onAdd(e, t) {
    this.map = e, this.gl = t, this._visualiser = this.createVisualiser(t, this.options), this.times = [], this.elevationBounds = null, this.timeIndex = 0, this.elevation = null, this.colorScaleRange = null, this.onLayerAdd && (this.onLayerAdd(), this.onLayerAdd = null);
  }
  onRemove() {
    this.abortController.abort(), this.map?.off("resize", this.onResizeStart).off("movestart", this.onMapMoveStart).off("moveend", this.debouncedOnMapMoveEnd), this._visualiser?.destruct(), this._visualiser = null, this.previousFrameTime = null;
  }
  render() {
    if (!this.map || !this.boundingBoxWMS || !this._visualiser)
      return;
    const [e, t, i, s] = ke(this.map.getBounds()), [o, a, n, l] = this.boundingBoxWMS, u = n - o, c = i - e, h = l - a, f = s - t, d = 0.5 * (e + i), p = 0.5 * (t + s), m = 0.5 * (o + n), g = 0.5 * (a + l), x = {
      scaleX: u / c,
      scaleY: h / f,
      offsetX: -2 * (d - m) / c,
      offsetY: -2 * (p - g) / f
    };
    this._visualiser?.setScaling(x);
    const b = performance.now(), v = this.previousFrameTime ? (b - this.previousFrameTime) / 1e3 : 1 / 60;
    this.previousFrameTime = b, this._visualiser?.renderFrame(v), this.map.triggerRepaint();
  }
  once(e, t) {
    this.onLayerAdd = t;
  }
  on(e, t) {
    e === "start-loading" ? this.onStartLoading = t : e === "end-loading" && (this.onEndLoading = t);
  }
  async waitForInitialisation(e) {
    return new Promise((t) => {
      const i = () => {
        if (this.isInitialised)
          return t(!0);
        if (this.signal.aborted || e?.aborted)
          return t(!1);
        window.setTimeout(i, 50);
      };
      i();
    });
  }
  async initialise(e, t, i) {
    if (!this._visualiser || !this.map)
      throw new Error("Not added to a map.");
    const s = await Ze(this.options.baseUrl, this.options.layer, i, this.signal, this.options.transformRequest), o = await fi(this.options.baseUrl, this.options.layer, this.signal, this.options.transformRequest);
    this.times = o.times, this.elevationBounds = o.elevationBounds, this.timeIndex = e ? this.findTimeIndex(e) : 0, this.elevation = t ?? null, this.colorScaleRange = i ?? null, await this._visualiser.initialise(s), await this.updateVelocityField(!0), !this.signal.aborted && (this.map.on("resize", this.onResizeStart), this.map.on("movestart", this.onMapMoveStart), this.map.on("moveend", this.debouncedOnMapMoveEnd), this.isInitialised = !0, this.map.triggerRepaint());
  }
  async setWmsLayer(e, t) {
    this.options.baseUrl = e, this.options.layer = t, await this.initialise();
  }
  async setStyle(e) {
    this.options.style = e, await this.updateVelocityField(!1);
  }
  async setTime(e) {
    await this.setTimeIndex(this.findTimeIndex(e));
  }
  async setTimeIndex(e) {
    if (e !== this.timeIndex) {
      if (e < 0 || e > this.times.length - 1)
        throw new Error("Invalid time index.");
      this.timeIndex = e, await this.updateVelocityField(!0);
    }
  }
  async setElevation(e) {
    if (e !== this.elevation) {
      if (e === null)
        this.elevation = null;
      else {
        if (this.elevationBounds === null || e < this.elevationBounds[0] || e > this.elevationBounds[1])
          throw new Error("Invalid elevation.");
        this.elevation = e;
      }
      await this.updateVelocityField(!0);
    }
  }
  async setColorScaleRange(e) {
    if (e === null && this.colorScaleRange === null || e !== null && this.colorScaleRange !== null && e[0] === this.colorScaleRange[0] && e[1] === this.colorScaleRange[1])
      return;
    this.colorScaleRange = e;
    const t = await Ze(this.options.baseUrl, this.options.layer, e ?? void 0, this.signal, this.options.transformRequest);
    this._visualiser?.setColorMap(t);
  }
  setNumParticles(e) {
    this._visualiser?.setNumParticles(e);
  }
  async setVisualiserOptions(e) {
    await this._visualiser?.updateOptions(e);
  }
  async setDisplayUnits(e) {
    e !== this.options.useDisplayUnits && (this.options.useDisplayUnits = e, await this.updateVelocityField(!1));
  }
  async setUseLastValue(e) {
    e !== this.options.useLastValue && (this.options.useLastValue = e, await this.updateVelocityField(!1));
  }
  createVisualiser(e, t) {
    if (!this.map)
      throw new Error("Not initialised.");
    const i = de.getVisualiserOptionsFromLayerOptions(t), [s, o] = this.size;
    return new q(e, s, o, this.options.numParticles, i);
  }
  onMapMoveEnd() {
    this.updateVelocityField(!0).catch(() => console.error("Failed to update velocity field."));
  }
  async updateVelocityField(e) {
    if (!this.map)
      throw new Error("Not added to a map");
    if (this.map.isMoving())
      return;
    this.onStartLoading && this.onStartLoading();
    const [t, i] = this.size;
    this._visualiser?.setDimensions(t, i), this._visualiser?.start();
    let s = 1, o = this.map.getBounds();
    const a = o.getEast() - o.getWest();
    a > 360 && (s = 360 / a, o = new Rt(new je(0, o.getSouth()), new je(360, o.getNorth())));
    const n = ke(o), l = (h) => {
      const f = this.options.downsampleFactorWMS ?? 1;
      return Math.round(h / f);
    }, u = l(s * t), c = l(i);
    try {
      const h = await di(this.options.baseUrl, this.options.layer, this.time, n, u, c, this.options.style, this.options.useDisplayUnits, this.options.useLastValue, this.elevation ?? void 0, this.signal, this.options.transformRequest);
      this._visualiser?.setVelocityImage(h, e);
    } catch (h) {
      if (!this.signal.aborted) {
        const f = h.toString();
        console.error(`Failed to fetch WMS velocity field, or received empty image: ${f}.`);
      }
      this._visualiser?.stop(), this.boundingBoxWMS = null;
      return;
    }
    this._visualiser?.start(), this.boundingBoxWMS = n, this.map.triggerRepaint(), this.onEndLoading && this.onEndLoading();
  }
  findTimeIndex(e) {
    const t = this.times.map((a) => new Date(a).getTime()), i = e.getTime(), s = t.map((a) => Math.abs(i - a)), o = Math.min(...s);
    return s.findIndex((a) => a == o) ?? 0;
  }
  static getVisualiserOptionsFromLayerOptions(e) {
    return {
      style: e.streamlineStyle,
      particleSize: e.particleSize,
      speedFactor: e.speedFactor,
      fadeAmountPerSecond: e.fadeAmountPerSecond,
      maxDisplacement: de.MAX_PARTICLE_DISPLACEMENT,
      maxAge: e.maxAge ?? 1,
      growthRate: e.growthRate,
      speedExponent: e.speedExponent,
      particleColor: e.particleColor,
      spriteUrl: e.spriteUrl,
      trailParticleOptions: e.trailParticleOptions,
      particleOverlayOpacity: e.particleOverlayOpacity
    };
  }
}
Object.defineProperty(de, "MAX_PARTICLE_DISPLACEMENT", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 1
});
class Re {
  constructor(e, t, i) {
    Object.defineProperty(this, "_exponent", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_factor", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_baseFactor", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this._exponent = e, this._factor = t, this._baseFactor = i;
  }
  /** Exponent of the curve. */
  get exponent() {
    return this._exponent;
  }
  /** Factor applied after exponentiation. */
  get factor() {
    return this._factor;
  }
  /** Base speed factor
   *
   *  This is the multiplication factor that would be applied if the exponent
   *  would be 1.
   */
  get baseFactor() {
    return this._baseFactor;
  }
  /**
   * Returns a speed curve from an exponent and a speed.
   *
   * The specified speed is used to compute the factor of the curve. At this
   * speed, the transformed speed is equal to the original speed.
   *
   * @param exponent  exponent applied to the speed.
   * @param factor factor applied to the transformed speed.
   * @param speed  speed where the transformation does not change the speed
   */
  static fromExponentFactorAndSpeed(e, t, i) {
    const s = Math.pow(i, e), o = t * i / s;
    return new Re(e, o, t);
  }
}
class re {
  constructor(e, t, i, s) {
    Object.defineProperty(this, "gl", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "program", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "vertexShader", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "fragmentShader", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "isLinked", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "attributes", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "uniforms", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
    const o = e.createProgram();
    if (o === null)
      throw new Error("Failed to create shader program.");
    e.attachShader(o, t.shader), e.attachShader(o, i.shader), s && e.transformFeedbackVaryings(o, s, e.SEPARATE_ATTRIBS), this.gl = e, this.vertexShader = t, this.fragmentShader = i, this.program = o, this.isLinked = !1, this.attributes = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map();
  }
  destruct() {
    this.gl.deleteProgram(this.program);
  }
  async link() {
    this.isLinked || (this.vertexShader.compile(), this.fragmentShader.compile(), this.gl.linkProgram(this.program), await this.waitForLinking(), this.checkLinkStatus(), this.updateActiveAttributes(), this.updateActiveUniforms(), this.isLinked = !0);
  }
  use() {
    if (!this.isLinked)
      throw new Error("Link shader program before using it.");
    this.gl.useProgram(this.program);
  }
  getAttributeLocation(e) {
    if (!this.isLinked)
      throw new Error("Link shader program before getting attribute locations.");
    const t = this.attributes.get(e);
    if (t === void 0)
      throw new Error(`No attribute "${e}" exists.`);
    return t;
  }
  getUniformLocation(e) {
    if (!this.isLinked)
      throw new Error("Link shader program before getting uniform locations.");
    const t = this.uniforms.get(e);
    if (t === void 0)
      throw new Error(`No uniform "${e}" exists.`);
    return t;
  }
  async waitForLinking() {
    const e = this.gl.getExtension("KHR_parallel_shader_compile");
    if (!e) {
      this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS);
      return;
    }
    const t = 20;
    return new Promise((i) => {
      const s = () => {
        this.gl.getProgramParameter(this.program, e.COMPLETION_STATUS_KHR) ? i() : setTimeout(s, t);
      };
      s();
    });
  }
  checkLinkStatus() {
    const e = this.gl;
    if (!this.gl.getProgramParameter(this.program, e.LINK_STATUS)) {
      const i = (o, a) => {
        const n = o.shader;
        if (!e.getShaderParameter(n, e.COMPILE_STATUS)) {
          const u = e.getShaderInfoLog(n);
          throw new Error(`Failed to compile ${a} shader: ${u}`);
        }
      };
      i(this.vertexShader, "vertex"), i(this.fragmentShader, "fragment");
      const s = e.getProgramInfoLog(this.program);
      throw new Error(`Failed to link program: ${s}`);
    }
  }
  updateActiveAttributes() {
    const e = this.gl, t = this.program, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < i; s++) {
      const o = e.getActiveAttrib(t, s);
      if (o === null)
        continue;
      const a = e.getAttribLocation(t, o.name);
      this.attributes.set(o.name, a);
    }
  }
  updateActiveUniforms() {
    const e = this.gl, t = this.program, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; s++) {
      const o = e.getActiveUniform(t, s);
      if (o === null)
        continue;
      const a = e.getUniformLocation(t, o.name);
      a !== null && this.uniforms.set(o.name, a);
    }
  }
}
function Ke(r, e) {
  const t = r.createBuffer();
  if (t === null)
    throw new Error("Failed to create buffer.");
  return r.bindBuffer(r.ARRAY_BUFFER, t), r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), t;
}
function pe(r, e, t, i) {
  r.bindBuffer(r.ARRAY_BUFFER, e), r.enableVertexAttribArray(t);
  const s = r.FLOAT;
  r.vertexAttribPointer(t, i, s, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, null);
}
function B(r, e, t, i) {
  const s = r.gl;
  s.activeTexture(s.TEXTURE0 + t), s.bindTexture(s.TEXTURE_2D, i), s.uniform1i(r.getUniformLocation(e), t);
}
function A(r) {
  return (e, ...t) => er(r, e, t);
}
function j(r, e) {
  return A(
    rt(
      r,
      e
    ).get
  );
}
const {
  apply: er,
  getOwnPropertyDescriptor: rt,
  getPrototypeOf: Se,
  ownKeys: tr
} = Reflect, {
  iterator: Z,
  toStringTag: rr
} = Symbol, ir = Object, {
  create: Ee,
  defineProperty: sr
} = ir, or = Array, ar = or.prototype, it = ar[Z], nr = A(it), st = ArrayBuffer, lr = st.prototype;
j(lr, "byteLength");
const ze = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
ze && j(ze.prototype, "byteLength");
const ot = Se(Uint8Array);
ot.from;
const R = ot.prototype;
R[Z];
A(R.keys);
A(
  R.values
);
A(
  R.entries
);
A(R.set);
A(
  R.reverse
);
A(R.fill);
A(
  R.copyWithin
);
A(R.sort);
A(R.slice);
A(
  R.subarray
);
j(
  R,
  "buffer"
);
j(
  R,
  "byteOffset"
);
j(
  R,
  "length"
);
j(
  R,
  rr
);
const ur = Uint8Array, at = Uint16Array, Oe = Uint32Array, cr = Float32Array, $ = Se([][Z]()), nt = A($.next), hr = A((function* () {
})().next), fr = Se($), dr = DataView.prototype, pr = A(
  dr.getUint16
), De = WeakMap, lt = De.prototype, ut = A(lt.get), gr = A(lt.set), ct = new De(), mr = Ee(null, {
  next: {
    value: function() {
      const e = ut(ct, this);
      return nt(e);
    }
  },
  [Z]: {
    value: function() {
      return this;
    }
  }
});
function br(r) {
  if (r[Z] === it && $.next === nt)
    return r;
  const e = Ee(mr);
  return gr(ct, e, nr(r)), e;
}
const xr = new De(), yr = Ee(fr, {
  next: {
    value: function() {
      const e = ut(xr, this);
      return hr(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const r of tr($))
  r !== "next" && sr(yr, r, rt($, r));
const ht = new st(4), _r = new cr(ht), vr = new Oe(ht), O = new at(512), D = new ur(512);
for (let r = 0; r < 256; ++r) {
  const e = r - 127;
  e < -24 ? (O[r] = 0, O[r | 256] = 32768, D[r] = 24, D[r | 256] = 24) : e < -14 ? (O[r] = 1024 >> -e - 14, O[r | 256] = 1024 >> -e - 14 | 32768, D[r] = -e - 1, D[r | 256] = -e - 1) : e <= 15 ? (O[r] = e + 15 << 10, O[r | 256] = e + 15 << 10 | 32768, D[r] = 13, D[r | 256] = 13) : e < 128 ? (O[r] = 31744, O[r | 256] = 64512, D[r] = 24, D[r | 256] = 24) : (O[r] = 31744, O[r | 256] = 64512, D[r] = 13, D[r | 256] = 13);
}
const Fe = new Oe(2048);
for (let r = 1; r < 1024; ++r) {
  let e = r << 13, t = 0;
  for (; (e & 8388608) === 0; )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, Fe[r] = e | t;
}
for (let r = 1024; r < 2048; ++r)
  Fe[r] = 939524096 + (r - 1024 << 13);
const N = new Oe(64);
for (let r = 1; r < 31; ++r)
  N[r] = r << 23;
N[31] = 1199570944;
N[32] = 2147483648;
for (let r = 33; r < 63; ++r)
  N[r] = 2147483648 + (r - 32 << 23);
N[63] = 3347054592;
const ft = new at(64);
for (let r = 1; r < 64; ++r)
  r !== 32 && (ft[r] = 1024);
function wr(r) {
  const e = r >> 10;
  return vr[0] = Fe[ft[e] + (r & 1023)] + N[e], _r[0];
}
function dt(r, e, ...t) {
  return wr(
    pr(r, e, ...br(t))
  );
}
function pt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ie = { exports: {} }, Xe;
function Tr() {
  if (Xe) return ie.exports;
  Xe = 1;
  function r(e, t, i) {
    const s = i && i.debug || !1;
    s && console.log("[xml-utils] getting " + t + " in " + e);
    const o = typeof e == "object" ? e.outer : e, a = o.slice(0, o.indexOf(">") + 1), n = ['"', "'"];
    for (let l = 0; l < n.length; l++) {
      const u = n[l], c = t + "\\=" + u + "([^" + u + "]*)" + u;
      s && console.log("[xml-utils] pattern:", c);
      const f = new RegExp(c).exec(a);
      if (s && console.log("[xml-utils] match:", f), f) return f[1];
    }
  }
  return ie.exports = r, ie.exports.default = r, ie.exports;
}
var Pr = Tr();
const _e = /* @__PURE__ */ pt(Pr);
var se = { exports: {} }, oe = { exports: {} }, ae = { exports: {} }, Ye;
function Ar() {
  if (Ye) return ae.exports;
  Ye = 1;
  function r(e, t, i) {
    const o = new RegExp(t).exec(e.slice(i));
    return o ? i + o.index : -1;
  }
  return ae.exports = r, ae.exports.default = r, ae.exports;
}
var ne = { exports: {} }, qe;
function Rr() {
  if (qe) return ne.exports;
  qe = 1;
  function r(e, t, i) {
    const o = new RegExp(t).exec(e.slice(i));
    return o ? i + o.index + o[0].length - 1 : -1;
  }
  return ne.exports = r, ne.exports.default = r, ne.exports;
}
var le = { exports: {} }, $e;
function Sr() {
  if ($e) return le.exports;
  $e = 1;
  function r(e, t) {
    const i = new RegExp(t, "g"), s = e.match(i);
    return s ? s.length : 0;
  }
  return le.exports = r, le.exports.default = r, le.exports;
}
var We;
function Er() {
  if (We) return oe.exports;
  We = 1;
  const r = Ar(), e = Rr(), t = Sr();
  function i(s, o, a) {
    const n = a && a.debug || !1, l = !(a && typeof a.nested === !1), u = a && a.startIndex || 0;
    n && console.log("[xml-utils] starting findTagByName with", o, " and ", a);
    const c = r(s, `<${o}[ 
>/]`, u);
    if (n && console.log("[xml-utils] start:", c), c === -1) return;
    const h = s.slice(c + o.length);
    let f = e(h, "^[^<]*[ /]>", 0);
    const d = f !== -1 && h[f - 1] === "/";
    if (n && console.log("[xml-utils] selfClosing:", d), d === !1)
      if (l) {
        let x = 0, b = 1, v = 0;
        for (; (f = e(h, "[ /]" + o + ">", x)) !== -1; ) {
          const T = h.substring(x, f + 1);
          if (b += t(T, "<" + o + `[ 
	>]`), v += t(T, "</" + o + ">"), v >= b) break;
          x = f;
        }
      } else
        f = e(h, "[ /]" + o + ">", 0);
    const p = c + o.length + f + 1;
    if (n && console.log("[xml-utils] end:", p), p === -1) return;
    const m = s.slice(c, p);
    let g;
    return d ? g = null : g = m.slice(m.indexOf(">") + 1, m.lastIndexOf("<")), { inner: g, outer: m, start: c, end: p };
  }
  return oe.exports = i, oe.exports.default = i, oe.exports;
}
var He;
function Or() {
  if (He) return se.exports;
  He = 1;
  const r = Er();
  function e(t, i, s) {
    const o = [], a = s && s.debug || !1, n = s && typeof s.nested == "boolean" ? s.nested : !0;
    let l = s && s.startIndex || 0, u;
    for (; u = r(t, i, { debug: a, startIndex: l }); )
      n ? l = u.start + 1 + i.length : l = u.end, o.push(u);
    return a && console.log("findTagsByName found", o.length, "tags"), o;
  }
  return se.exports = e, se.exports.default = e, se.exports;
}
var Dr = Or();
const Fr = /* @__PURE__ */ pt(Dr), X = {
  // TIFF Baseline
  315: "Artist",
  258: "BitsPerSample",
  265: "CellLength",
  264: "CellWidth",
  320: "ColorMap",
  259: "Compression",
  33432: "Copyright",
  306: "DateTime",
  338: "ExtraSamples",
  266: "FillOrder",
  289: "FreeByteCounts",
  288: "FreeOffsets",
  291: "GrayResponseCurve",
  290: "GrayResponseUnit",
  316: "HostComputer",
  270: "ImageDescription",
  257: "ImageLength",
  256: "ImageWidth",
  271: "Make",
  281: "MaxSampleValue",
  280: "MinSampleValue",
  272: "Model",
  254: "NewSubfileType",
  274: "Orientation",
  262: "PhotometricInterpretation",
  284: "PlanarConfiguration",
  296: "ResolutionUnit",
  278: "RowsPerStrip",
  277: "SamplesPerPixel",
  305: "Software",
  279: "StripByteCounts",
  273: "StripOffsets",
  255: "SubfileType",
  263: "Threshholding",
  282: "XResolution",
  283: "YResolution",
  // TIFF Extended
  326: "BadFaxLines",
  327: "CleanFaxData",
  343: "ClipPath",
  328: "ConsecutiveBadFaxLines",
  433: "Decode",
  434: "DefaultImageColor",
  269: "DocumentName",
  336: "DotRange",
  321: "HalftoneHints",
  346: "Indexed",
  347: "JPEGTables",
  285: "PageName",
  297: "PageNumber",
  317: "Predictor",
  319: "PrimaryChromaticities",
  532: "ReferenceBlackWhite",
  339: "SampleFormat",
  340: "SMinSampleValue",
  341: "SMaxSampleValue",
  559: "StripRowCounts",
  330: "SubIFDs",
  292: "T4Options",
  293: "T6Options",
  325: "TileByteCounts",
  323: "TileLength",
  324: "TileOffsets",
  322: "TileWidth",
  301: "TransferFunction",
  318: "WhitePoint",
  344: "XClipPathUnits",
  286: "XPosition",
  529: "YCbCrCoefficients",
  531: "YCbCrPositioning",
  530: "YCbCrSubSampling",
  345: "YClipPathUnits",
  287: "YPosition",
  // EXIF
  37378: "ApertureValue",
  40961: "ColorSpace",
  36868: "DateTimeDigitized",
  36867: "DateTimeOriginal",
  34665: "Exif IFD",
  36864: "ExifVersion",
  33434: "ExposureTime",
  41728: "FileSource",
  37385: "Flash",
  40960: "FlashpixVersion",
  33437: "FNumber",
  42016: "ImageUniqueID",
  37384: "LightSource",
  37500: "MakerNote",
  37377: "ShutterSpeedValue",
  37510: "UserComment",
  // IPTC
  33723: "IPTC",
  // ICC
  34675: "ICC Profile",
  // XMP
  700: "XMP",
  // GDAL
  42112: "GDAL_METADATA",
  42113: "GDAL_NODATA",
  // Photoshop
  34377: "Photoshop",
  // GeoTiff
  33550: "ModelPixelScale",
  33922: "ModelTiepoint",
  34264: "ModelTransformation",
  34735: "GeoKeyDirectory",
  34736: "GeoDoubleParams",
  34737: "GeoAsciiParams",
  // LERC
  50674: "LercParameters"
}, F = {};
for (const r in X)
  X.hasOwnProperty(r) && (F[X[r]] = parseInt(r, 10));
const Br = [
  F.BitsPerSample,
  F.ExtraSamples,
  F.SampleFormat,
  F.StripByteCounts,
  F.StripOffsets,
  F.StripRowCounts,
  F.TileByteCounts,
  F.TileOffsets,
  F.SubIFDs
], ve = {
  1: "BYTE",
  2: "ASCII",
  3: "SHORT",
  4: "LONG",
  5: "RATIONAL",
  6: "SBYTE",
  7: "UNDEFINED",
  8: "SSHORT",
  9: "SLONG",
  10: "SRATIONAL",
  11: "FLOAT",
  12: "DOUBLE",
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  13: "IFD",
  // introduced by BigTIFF
  16: "LONG8",
  17: "SLONG8",
  18: "IFD8"
}, y = {};
for (const r in ve)
  ve.hasOwnProperty(r) && (y[ve[r]] = parseInt(r, 10));
const E = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8
}, Ir = {
  Unspecified: 0
}, Ai = {
  AddCompression: 1
}, Ri = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, Mr = {
  1024: "GTModelTypeGeoKey",
  1025: "GTRasterTypeGeoKey",
  1026: "GTCitationGeoKey",
  2048: "GeographicTypeGeoKey",
  2049: "GeogCitationGeoKey",
  2050: "GeogGeodeticDatumGeoKey",
  2051: "GeogPrimeMeridianGeoKey",
  2052: "GeogLinearUnitsGeoKey",
  2053: "GeogLinearUnitSizeGeoKey",
  2054: "GeogAngularUnitsGeoKey",
  2055: "GeogAngularUnitSizeGeoKey",
  2056: "GeogEllipsoidGeoKey",
  2057: "GeogSemiMajorAxisGeoKey",
  2058: "GeogSemiMinorAxisGeoKey",
  2059: "GeogInvFlatteningGeoKey",
  2060: "GeogAzimuthUnitsGeoKey",
  2061: "GeogPrimeMeridianLongGeoKey",
  2062: "GeogTOWGS84GeoKey",
  3072: "ProjectedCSTypeGeoKey",
  3073: "PCSCitationGeoKey",
  3074: "ProjectionGeoKey",
  3075: "ProjCoordTransGeoKey",
  3076: "ProjLinearUnitsGeoKey",
  3077: "ProjLinearUnitSizeGeoKey",
  3078: "ProjStdParallel1GeoKey",
  3079: "ProjStdParallel2GeoKey",
  3080: "ProjNatOriginLongGeoKey",
  3081: "ProjNatOriginLatGeoKey",
  3082: "ProjFalseEastingGeoKey",
  3083: "ProjFalseNorthingGeoKey",
  3084: "ProjFalseOriginLongGeoKey",
  3085: "ProjFalseOriginLatGeoKey",
  3086: "ProjFalseOriginEastingGeoKey",
  3087: "ProjFalseOriginNorthingGeoKey",
  3088: "ProjCenterLongGeoKey",
  3089: "ProjCenterLatGeoKey",
  3090: "ProjCenterEastingGeoKey",
  3091: "ProjCenterNorthingGeoKey",
  3092: "ProjScaleAtNatOriginGeoKey",
  3093: "ProjScaleAtCenterGeoKey",
  3094: "ProjAzimuthAngleGeoKey",
  3095: "ProjStraightVertPoleLongGeoKey",
  3096: "ProjRectifiedGridAngleGeoKey",
  4096: "VerticalCSTypeGeoKey",
  4097: "VerticalCitationGeoKey",
  4098: "VerticalDatumGeoKey",
  4099: "VerticalUnitsGeoKey"
};
function Ur(r, e) {
  const { width: t, height: i } = r, s = new Uint8Array(t * i * 3);
  let o;
  for (let a = 0, n = 0; a < r.length; ++a, n += 3)
    o = 256 - r[a] / e * 256, s[n] = o, s[n + 1] = o, s[n + 2] = o;
  return s;
}
function Cr(r, e) {
  const { width: t, height: i } = r, s = new Uint8Array(t * i * 3);
  let o;
  for (let a = 0, n = 0; a < r.length; ++a, n += 3)
    o = r[a] / e * 256, s[n] = o, s[n + 1] = o, s[n + 2] = o;
  return s;
}
function Lr(r, e) {
  const { width: t, height: i } = r, s = new Uint8Array(t * i * 3), o = e.length / 3, a = e.length / 3 * 2;
  for (let n = 0, l = 0; n < r.length; ++n, l += 3) {
    const u = r[n];
    s[l] = e[u] / 65536 * 256, s[l + 1] = e[u + o] / 65536 * 256, s[l + 2] = e[u + a] / 65536 * 256;
  }
  return s;
}
function jr(r) {
  const { width: e, height: t } = r, i = new Uint8Array(e * t * 3);
  for (let s = 0, o = 0; s < r.length; s += 4, o += 3) {
    const a = r[s], n = r[s + 1], l = r[s + 2], u = r[s + 3];
    i[o] = 255 * ((255 - a) / 256) * ((255 - u) / 256), i[o + 1] = 255 * ((255 - n) / 256) * ((255 - u) / 256), i[o + 2] = 255 * ((255 - l) / 256) * ((255 - u) / 256);
  }
  return i;
}
function Nr(r) {
  const { width: e, height: t } = r, i = new Uint8ClampedArray(e * t * 3);
  for (let s = 0, o = 0; s < r.length; s += 3, o += 3) {
    const a = r[s], n = r[s + 1], l = r[s + 2];
    i[o] = a + 1.402 * (l - 128), i[o + 1] = a - 0.34414 * (n - 128) - 0.71414 * (l - 128), i[o + 2] = a + 1.772 * (n - 128);
  }
  return i;
}
const Gr = 0.95047, Vr = 1, kr = 1.08883;
function Kr(r) {
  const { width: e, height: t } = r, i = new Uint8Array(e * t * 3);
  for (let s = 0, o = 0; s < r.length; s += 3, o += 3) {
    const a = r[s + 0], n = r[s + 1] << 24 >> 24, l = r[s + 2] << 24 >> 24;
    let u = (a + 16) / 116, c = n / 500 + u, h = u - l / 200, f, d, p;
    c = Gr * (c * c * c > 8856e-6 ? c * c * c : (c - 16 / 116) / 7.787), u = Vr * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), h = kr * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), f = c * 3.2406 + u * -1.5372 + h * -0.4986, d = c * -0.9689 + u * 1.8758 + h * 0.0415, p = c * 0.0557 + u * -0.204 + h * 1.057, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f, d = d > 31308e-7 ? 1.055 * d ** (1 / 2.4) - 0.055 : 12.92 * d, p = p > 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p, i[o] = Math.max(0, Math.min(1, f)) * 255, i[o + 1] = Math.max(0, Math.min(1, d)) * 255, i[o + 2] = Math.max(0, Math.min(1, p)) * 255;
  }
  return i;
}
const gt = /* @__PURE__ */ new Map();
function I(r, e) {
  Array.isArray(r) || (r = [r]), r.forEach((t) => gt.set(t, e));
}
async function zr(r) {
  const e = gt.get(r.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${r.Compression}`);
  const t = await e();
  return new t(r);
}
I([void 0, 1], () => import("./raw-CaSL8pVO.js").then((r) => r.default));
I(5, () => import("./lzw-DQ6ibF74.js").then((r) => r.default));
I(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
I(7, () => import("./jpeg-CqPRbuRp.js").then((r) => r.default));
I([8, 32946], () => import("./deflate-DbhbvOaP.js").then((r) => r.default));
I(32773, () => import("./packbits-BuzK6gM3.js").then((r) => r.default));
I(
  34887,
  () => import("./lerc-DorajzBT.js").then(async (r) => (await r.zstd.init(), r)).then((r) => r.default)
);
I(50001, () => import("./webimage--SJddlky.js").then((r) => r.default));
function ge(r, e, t, i = 1) {
  return new (Object.getPrototypeOf(r)).constructor(e * t * i);
}
function Xr(r, e, t, i, s) {
  const o = e / i, a = t / s;
  return r.map((n) => {
    const l = ge(n, i, s);
    for (let u = 0; u < s; ++u) {
      const c = Math.min(Math.round(a * u), t - 1);
      for (let h = 0; h < i; ++h) {
        const f = Math.min(Math.round(o * h), e - 1), d = n[c * e + f];
        l[u * i + h] = d;
      }
    }
    return l;
  });
}
function C(r, e, t) {
  return (1 - t) * r + t * e;
}
function Yr(r, e, t, i, s) {
  const o = e / i, a = t / s;
  return r.map((n) => {
    const l = ge(n, i, s);
    for (let u = 0; u < s; ++u) {
      const c = a * u, h = Math.floor(c), f = Math.min(Math.ceil(c), t - 1);
      for (let d = 0; d < i; ++d) {
        const p = o * d, m = p % 1, g = Math.floor(p), x = Math.min(Math.ceil(p), e - 1), b = n[h * e + g], v = n[h * e + x], T = n[f * e + g], w = n[f * e + x], _ = C(
          C(b, v, m),
          C(T, w, m),
          c % 1
        );
        l[u * i + d] = _;
      }
    }
    return l;
  });
}
function qr(r, e, t, i, s, o = "nearest") {
  switch (o.toLowerCase()) {
    case "nearest":
      return Xr(r, e, t, i, s);
    case "bilinear":
    case "linear":
      return Yr(r, e, t, i, s);
    default:
      throw new Error(`Unsupported resampling method: '${o}'`);
  }
}
function $r(r, e, t, i, s, o) {
  const a = e / i, n = t / s, l = ge(r, i, s, o);
  for (let u = 0; u < s; ++u) {
    const c = Math.min(Math.round(n * u), t - 1);
    for (let h = 0; h < i; ++h) {
      const f = Math.min(Math.round(a * h), e - 1);
      for (let d = 0; d < o; ++d) {
        const p = r[c * e * o + f * o + d];
        l[u * i * o + h * o + d] = p;
      }
    }
  }
  return l;
}
function Wr(r, e, t, i, s, o) {
  const a = e / i, n = t / s, l = ge(r, i, s, o);
  for (let u = 0; u < s; ++u) {
    const c = n * u, h = Math.floor(c), f = Math.min(Math.ceil(c), t - 1);
    for (let d = 0; d < i; ++d) {
      const p = a * d, m = p % 1, g = Math.floor(p), x = Math.min(Math.ceil(p), e - 1);
      for (let b = 0; b < o; ++b) {
        const v = r[h * e * o + g * o + b], T = r[h * e * o + x * o + b], w = r[f * e * o + g * o + b], _ = r[f * e * o + x * o + b], S = C(
          C(v, T, m),
          C(w, _, m),
          c % 1
        );
        l[u * i * o + d * o + b] = S;
      }
    }
  }
  return l;
}
function Hr(r, e, t, i, s, o, a = "nearest") {
  switch (a.toLowerCase()) {
    case "nearest":
      return $r(
        r,
        e,
        t,
        i,
        s,
        o
      );
    case "bilinear":
    case "linear":
      return Wr(
        r,
        e,
        t,
        i,
        s,
        o
      );
    default:
      throw new Error(`Unsupported resampling method: '${a}'`);
  }
}
function Zr(r, e, t) {
  let i = 0;
  for (let s = e; s < t; ++s)
    i += r[s];
  return i;
}
function Pe(r, e, t) {
  switch (r) {
    case 1:
      if (e <= 8)
        return new Uint8Array(t);
      if (e <= 16)
        return new Uint16Array(t);
      if (e <= 32)
        return new Uint32Array(t);
      break;
    case 2:
      if (e === 8)
        return new Int8Array(t);
      if (e === 16)
        return new Int16Array(t);
      if (e === 32)
        return new Int32Array(t);
      break;
    case 3:
      switch (e) {
        case 16:
        case 32:
          return new Float32Array(t);
        case 64:
          return new Float64Array(t);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function Jr(r, e) {
  return (r === 1 || r === 2) && e <= 32 && e % 8 === 0 ? !1 : !(r === 3 && (e === 16 || e === 32 || e === 64));
}
function Qr(r, e, t, i, s, o, a) {
  const n = new DataView(r), l = t === 2 ? a * o : a * o * i, u = t === 2 ? 1 : i, c = Pe(e, s, l), h = parseInt("1".repeat(s), 2);
  if (e === 1) {
    let f;
    t === 1 ? f = i * s : f = s;
    let d = o * f;
    (d & 7) !== 0 && (d = d + 7 & -8);
    for (let p = 0; p < a; ++p) {
      const m = p * d;
      for (let g = 0; g < o; ++g) {
        const x = m + g * u * s;
        for (let b = 0; b < u; ++b) {
          const v = x + b * s, T = (p * o + g) * u + b, w = Math.floor(v / 8), _ = v % 8;
          if (_ + s <= 8)
            c[T] = n.getUint8(w) >> 8 - s - _ & h;
          else if (_ + s <= 16)
            c[T] = n.getUint16(w) >> 16 - s - _ & h;
          else if (_ + s <= 24) {
            const S = n.getUint16(w) << 8 | n.getUint8(w + 2);
            c[T] = S >> 24 - s - _ & h;
          } else
            c[T] = n.getUint32(w) >> 32 - s - _ & h;
        }
      }
    }
  }
  return c.buffer;
}
class ei {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, i, s, o, a) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = i, this.littleEndian = s, this.tiles = o ? {} : null, this.isTiled = !e.StripOffsets;
    const n = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof n > "u" ? 1 : n, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = a;
  }
  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }
  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }
  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }
  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }
  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return typeof this.fileDirectory.SamplesPerPixel < "u" ? this.fileDirectory.SamplesPerPixel : 1;
  }
  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }
  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    return this.isTiled ? this.fileDirectory.TileLength : typeof this.fileDirectory.RowsPerStrip < "u" ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
  }
  getBlockWidth() {
    return this.getTileWidth();
  }
  getBlockHeight(e) {
    return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let e = 0;
    for (let t = 0; t < this.fileDirectory.BitsPerSample.length; ++t)
      e += this.getSampleByteSize(t);
    return e;
  }
  getSampleByteSize(e) {
    if (e >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${e} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
  }
  getReaderForSample(e) {
    const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, i = this.fileDirectory.BitsPerSample[e];
    switch (t) {
      case 1:
        if (i <= 8)
          return DataView.prototype.getUint8;
        if (i <= 16)
          return DataView.prototype.getUint16;
        if (i <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (i <= 8)
          return DataView.prototype.getInt8;
        if (i <= 16)
          return DataView.prototype.getInt16;
        if (i <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (i) {
          case 16:
            return function(s, o) {
              return dt(this, s, o);
            };
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
        }
        break;
    }
    throw Error("Unsupported data format/bitsPerSample");
  }
  getSampleFormat(e = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1;
  }
  getBitsPerSample(e = 0) {
    return this.fileDirectory.BitsPerSample[e];
  }
  getArrayForSample(e, t) {
    const i = this.getSampleFormat(e), s = this.getBitsPerSample(e);
    return Pe(i, s, t);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(e, t, i, s, o) {
    const a = Math.ceil(this.getWidth() / this.getTileWidth()), n = Math.ceil(this.getHeight() / this.getTileHeight());
    let l;
    const { tiles: u } = this;
    this.planarConfiguration === 1 ? l = t * a + e : this.planarConfiguration === 2 && (l = i * a * n + t * a + e);
    let c, h;
    this.isTiled ? (c = this.fileDirectory.TileOffsets[l], h = this.fileDirectory.TileByteCounts[l]) : (c = this.fileDirectory.StripOffsets[l], h = this.fileDirectory.StripByteCounts[l]);
    const f = (await this.source.fetch([{ offset: c, length: h }], o))[0];
    let d;
    return u === null || !u[l] ? (d = (async () => {
      let p = await s.decode(this.fileDirectory, f);
      const m = this.getSampleFormat(), g = this.getBitsPerSample();
      return Jr(m, g) && (p = Qr(
        p,
        m,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        g,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), p;
    })(), u !== null && (u[l] = d)) : d = u[l], { x: e, y: t, sample: i, data: await d };
  }
  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {import("./geotiff").Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @param {number} width the width of window to be read into
   * @param {number} height the height of window to be read into
   * @param {number} resampleMethod the resampling method to be used when interpolating
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise<ReadRasterResult>}
   */
  async _readRaster(e, t, i, s, o, a, n, l, u) {
    const c = this.getTileWidth(), h = this.getTileHeight(), f = this.getWidth(), d = this.getHeight(), p = Math.max(Math.floor(e[0] / c), 0), m = Math.min(
      Math.ceil(e[2] / c),
      Math.ceil(f / c)
    ), g = Math.max(Math.floor(e[1] / h), 0), x = Math.min(
      Math.ceil(e[3] / h),
      Math.ceil(d / h)
    ), b = e[2] - e[0];
    let v = this.getBytesPerPixel();
    const T = [], w = [];
    for (let P = 0; P < t.length; ++P)
      this.planarConfiguration === 1 ? T.push(Zr(this.fileDirectory.BitsPerSample, 0, t[P]) / 8) : T.push(0), w.push(this.getReaderForSample(t[P]));
    const _ = [], { littleEndian: S } = this;
    for (let P = g; P < x; ++P)
      for (let M = p; M < m; ++M) {
        let be;
        this.planarConfiguration === 1 && (be = this.getTileOrStrip(M, P, 0, o, u));
        for (let J = 0; J < t.length; ++J) {
          const Q = J, Ce = t[J];
          this.planarConfiguration === 2 && (v = this.getSampleByteSize(Ce), be = this.getTileOrStrip(M, P, Ce, o, u));
          const bt = be.then((G) => {
            const xt = G.data, yt = new DataView(xt), xe = this.getBlockHeight(G.y), V = G.y * h, ee = G.x * c, _t = V + xe, vt = (G.x + 1) * c, wt = w[Q], Tt = Math.min(xe, xe - (_t - e[3]), d - V), Pt = Math.min(c, c - (vt - e[2]), f - ee);
            for (let k = Math.max(0, e[1] - V); k < Tt; ++k)
              for (let K = Math.max(0, e[0] - ee); K < Pt; ++K) {
                const At = (k * c + K) * v, Le = wt.call(
                  yt,
                  At + T[Q],
                  S
                );
                let te;
                s ? (te = (k + V - e[1]) * b * t.length + (K + ee - e[0]) * t.length + Q, i[te] = Le) : (te = (k + V - e[1]) * b + K + ee - e[0], i[Q][te] = Le);
              }
          });
          _.push(bt);
        }
      }
    if (await Promise.all(_), a && e[2] - e[0] !== a || n && e[3] - e[1] !== n) {
      let P;
      return s ? P = Hr(
        i,
        e[2] - e[0],
        e[3] - e[1],
        a,
        n,
        t.length,
        l
      ) : P = qr(
        i,
        e[2] - e[0],
        e[3] - e[1],
        a,
        n,
        l
      ), P.width = a, P.height = n, P;
    }
    return i.width = a || e[2] - e[0], i.height = n || e[3] - e[1], i;
  }
  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
   */
  async readRasters({
    window: e,
    samples: t = [],
    interleave: i,
    pool: s = null,
    width: o,
    height: a,
    resampleMethod: n,
    fillValue: l,
    signal: u
  } = {}) {
    const c = e || [0, 0, this.getWidth(), this.getHeight()];
    if (c[0] > c[2] || c[1] > c[3])
      throw new Error("Invalid subsets");
    const h = c[2] - c[0], f = c[3] - c[1], d = h * f, p = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let b = 0; b < p; ++b)
        t.push(b);
    else
      for (let b = 0; b < t.length; ++b)
        if (t[b] >= p)
          return Promise.reject(new RangeError(`Invalid sample index '${t[b]}'.`));
    let m;
    if (i) {
      const b = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, v = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      m = Pe(b, v, d * t.length), l && m.fill(l);
    } else {
      m = [];
      for (let b = 0; b < t.length; ++b) {
        const v = this.getArrayForSample(t[b], d);
        Array.isArray(l) && b < l.length ? v.fill(l[b]) : l && !Array.isArray(l) && v.fill(l), m.push(v);
      }
    }
    const g = s || await zr(this.fileDirectory);
    return await this._readRaster(
      c,
      t,
      m,
      i,
      g,
      o,
      a,
      n,
      u
    );
  }
  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * grayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array<number>} [options.window] the subset to read data from in pixels.
   * @param {boolean} [options.interleave=true] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {import("./geotiff").Pool} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is no the
   *                                 same as the images, resampling will be performed.
   * @param {number} [options.height] The desired height of the output. When the width is no the
   *                                  same as the images, resampling will be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {boolean} [options.enableAlpha=false] Enable reading alpha channel if present.
   * @param {AbortSignal} [options.signal] An AbortSignal that may be signalled if the request is
   *                                       to be aborted
   * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
   */
  async readRGB({
    window: e,
    interleave: t = !0,
    pool: i = null,
    width: s,
    height: o,
    resampleMethod: a,
    enableAlpha: n = !1,
    signal: l
  } = {}) {
    const u = e || [0, 0, this.getWidth(), this.getHeight()];
    if (u[0] > u[2] || u[1] > u[3])
      throw new Error("Invalid subsets");
    const c = this.fileDirectory.PhotometricInterpretation;
    if (c === E.RGB) {
      let x = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Ir.Unspecified && n) {
        x = [];
        for (let b = 0; b < this.fileDirectory.BitsPerSample.length; b += 1)
          x.push(b);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: x,
        pool: i,
        width: s,
        height: o,
        resampleMethod: a,
        signal: l
      });
    }
    let h;
    switch (c) {
      case E.WhiteIsZero:
      case E.BlackIsZero:
      case E.Palette:
        h = [0];
        break;
      case E.CMYK:
        h = [0, 1, 2, 3];
        break;
      case E.YCbCr:
      case E.CIELab:
        h = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const f = {
      window: u,
      interleave: !0,
      samples: h,
      pool: i,
      width: s,
      height: o,
      resampleMethod: a,
      signal: l
    }, { fileDirectory: d } = this, p = await this.readRasters(f), m = 2 ** this.fileDirectory.BitsPerSample[0];
    let g;
    switch (c) {
      case E.WhiteIsZero:
        g = Ur(p, m);
        break;
      case E.BlackIsZero:
        g = Cr(p, m);
        break;
      case E.Palette:
        g = Lr(p, d.ColorMap);
        break;
      case E.CMYK:
        g = jr(p);
        break;
      case E.YCbCr:
        g = Nr(p);
        break;
      case E.CIELab:
        g = Kr(p);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const x = new Uint8Array(g.length / 3), b = new Uint8Array(g.length / 3), v = new Uint8Array(g.length / 3);
      for (let T = 0, w = 0; T < g.length; T += 3, ++w)
        x[w] = g[T], b[w] = g[T + 1], v[w] = g[T + 2];
      g = [x, b, v];
    }
    return g.width = p.width, g.height = p.height, g;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const e = [];
    for (let t = 0; t < this.fileDirectory.ModelTiepoint.length; t += 6)
      e.push({
        i: this.fileDirectory.ModelTiepoint[t],
        j: this.fileDirectory.ModelTiepoint[t + 1],
        k: this.fileDirectory.ModelTiepoint[t + 2],
        x: this.fileDirectory.ModelTiepoint[t + 3],
        y: this.fileDirectory.ModelTiepoint[t + 4],
        z: this.fileDirectory.ModelTiepoint[t + 5]
      });
    return e;
  }
  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(e = null) {
    const t = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const i = this.fileDirectory.GDAL_METADATA;
    let s = Fr(i, "Item");
    e === null ? s = s.filter((o) => _e(o, "sample") === void 0) : s = s.filter((o) => Number(_e(o, "sample")) === e);
    for (let o = 0; o < s.length; ++o) {
      const a = s[o];
      t[_e(a, "name")] = a.inner;
    }
    return t;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA)
      return null;
    const e = this.fileDirectory.GDAL_NODATA;
    return Number(e.substring(0, e.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const e = this.fileDirectory.ModelTiepoint, t = this.fileDirectory.ModelTransformation;
    if (e && e.length === 6)
      return [
        e[3],
        e[4],
        e[5]
      ];
    if (t)
      return [
        t[3],
        t[7],
        t[11]
      ];
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array<number>} The resolution as a vector
   */
  getResolution(e = null) {
    const t = this.fileDirectory.ModelPixelScale, i = this.fileDirectory.ModelTransformation;
    if (t)
      return [
        t[0],
        -t[1],
        t[2]
      ];
    if (i)
      return i[1] === 0 && i[4] === 0 ? [
        i[0],
        -i[5],
        i[10]
      ] : [
        Math.sqrt(i[0] * i[0] + i[4] * i[4]),
        -Math.sqrt(i[1] * i[1] + i[5] * i[5]),
        i[10]
      ];
    if (e) {
      const [s, o, a] = e.getResolution();
      return [
        s * e.getWidth() / this.getWidth(),
        o * e.getHeight() / this.getHeight(),
        a * e.getWidth() / this.getWidth()
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }
  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @param {boolean} [tilegrid=false] If true return extent for a tilegrid
   *                                   without adjustment for ModelTransformation.
   * @returns {Array<number>} The bounding box
   */
  getBoundingBox(e = !1) {
    const t = this.getHeight(), i = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [s, o, a, n, l, u, c, h] = this.fileDirectory.ModelTransformation, d = [
        [0, 0],
        [0, t],
        [i, 0],
        [i, t]
      ].map(([g, x]) => [
        n + s * g + o * x,
        h + l * g + u * x
      ]), p = d.map((g) => g[0]), m = d.map((g) => g[1]);
      return [
        Math.min(...p),
        Math.min(...m),
        Math.max(...p),
        Math.max(...m)
      ];
    } else {
      const s = this.getOrigin(), o = this.getResolution(), a = s[0], n = s[1], l = a + o[0] * i, u = n + o[1] * t;
      return [
        Math.min(a, l),
        Math.min(n, u),
        Math.max(a, l),
        Math.max(n, u)
      ];
    }
  }
}
class ti {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const i = this.getUint32(e, t), s = this.getUint32(e + 4, t);
    let o;
    if (t) {
      if (o = i + 2 ** 32 * s, !Number.isSafeInteger(o))
        throw new Error(
          `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return o;
    }
    if (o = 2 ** 32 * i + s, !Number.isSafeInteger(o))
      throw new Error(
        `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return o;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let i = 0;
    const s = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let o = !0;
    for (let a = 0; a < 8; a++) {
      let n = this._dataView.getUint8(e + (t ? a : 7 - a));
      s && (o ? n !== 0 && (n = ~(n - 1) & 255, o = !1) : n = ~n & 255), i += n * 256 ** a;
    }
    return s && (i = -i), i;
  }
  getUint8(e, t) {
    return this._dataView.getUint8(e, t);
  }
  getInt8(e, t) {
    return this._dataView.getInt8(e, t);
  }
  getUint16(e, t) {
    return this._dataView.getUint16(e, t);
  }
  getInt16(e, t) {
    return this._dataView.getInt16(e, t);
  }
  getUint32(e, t) {
    return this._dataView.getUint32(e, t);
  }
  getInt32(e, t) {
    return this._dataView.getInt32(e, t);
  }
  getFloat16(e, t) {
    return dt(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class ri {
  constructor(e, t, i, s) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = i, this._bigTiff = s;
  }
  get sliceOffset() {
    return this._sliceOffset;
  }
  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }
  get littleEndian() {
    return this._littleEndian;
  }
  get bigTiff() {
    return this._bigTiff;
  }
  get buffer() {
    return this._dataView.buffer;
  }
  covers(e, t) {
    return this.sliceOffset <= e && this.sliceTop >= e + t;
  }
  readUint8(e) {
    return this._dataView.getUint8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(e) {
    return this._dataView.getInt8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(e) {
    return this._dataView.getUint16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(e) {
    return this._dataView.getInt16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(e) {
    return this._dataView.getUint32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(e) {
    return this._dataView.getInt32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(e) {
    return this._dataView.getFloat32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(e) {
    return this._dataView.getFloat64(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(e) {
    const t = this.readUint32(e), i = this.readUint32(e + 4);
    let s;
    if (this._littleEndian) {
      if (s = t + 2 ** 32 * i, !Number.isSafeInteger(s))
        throw new Error(
          `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return s;
    }
    if (s = 2 ** 32 * t + i, !Number.isSafeInteger(s))
      throw new Error(
        `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return s;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const i = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let s = !0;
    for (let o = 0; o < 8; o++) {
      let a = this._dataView.getUint8(
        e + (this._littleEndian ? o : 7 - o)
      );
      i && (s ? a !== 0 && (a = ~(a - 1) & 255, s = !1) : a = ~a & 255), t += a * 256 ** o;
    }
    return i && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
class ii {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, t = void 0) {
    return Promise.all(
      e.map((i) => this.fetchSlice(i, t))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(e) {
    throw new Error(`fetching of slice ${e} not possible, not implemented`);
  }
  /**
   * Returns the filesize if already determined and null otherwise
   */
  get fileSize() {
    return null;
  }
  async close() {
  }
}
class Be extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, Be), this.name = "AbortError";
  }
}
class si extends ii {
  constructor(e) {
    super(), this.arrayBuffer = e;
  }
  fetchSlice(e, t) {
    if (t && t.aborted)
      throw new Be("Request aborted");
    return this.arrayBuffer.slice(e.offset, e.offset + e.length);
  }
}
function oi(r) {
  return new si(r);
}
function Ae(r) {
  switch (r) {
    case y.BYTE:
    case y.ASCII:
    case y.SBYTE:
    case y.UNDEFINED:
      return 1;
    case y.SHORT:
    case y.SSHORT:
      return 2;
    case y.LONG:
    case y.SLONG:
    case y.FLOAT:
    case y.IFD:
      return 4;
    case y.RATIONAL:
    case y.SRATIONAL:
    case y.DOUBLE:
    case y.LONG8:
    case y.SLONG8:
    case y.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${r}`);
  }
}
function ai(r) {
  const e = r.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let i = 4; i <= e[3] * 4; i += 4) {
    const s = Mr[e[i]], o = e[i + 1] ? X[e[i + 1]] : null, a = e[i + 2], n = e[i + 3];
    let l = null;
    if (!o)
      l = n;
    else {
      if (l = r[o], typeof l > "u" || l === null)
        throw new Error(`Could not get value of geoKey '${s}'.`);
      typeof l == "string" ? l = l.substring(n, n + a - 1) : l.subarray && (l = l.subarray(n, n + a), a === 1 && (l = l[0]));
    }
    t[s] = l;
  }
  return t;
}
function U(r, e, t, i) {
  let s = null, o = null;
  const a = Ae(e);
  switch (e) {
    case y.BYTE:
    case y.ASCII:
    case y.UNDEFINED:
      s = new Uint8Array(t), o = r.readUint8;
      break;
    case y.SBYTE:
      s = new Int8Array(t), o = r.readInt8;
      break;
    case y.SHORT:
      s = new Uint16Array(t), o = r.readUint16;
      break;
    case y.SSHORT:
      s = new Int16Array(t), o = r.readInt16;
      break;
    case y.LONG:
    case y.IFD:
      s = new Uint32Array(t), o = r.readUint32;
      break;
    case y.SLONG:
      s = new Int32Array(t), o = r.readInt32;
      break;
    case y.LONG8:
    case y.IFD8:
      s = new Array(t), o = r.readUint64;
      break;
    case y.SLONG8:
      s = new Array(t), o = r.readInt64;
      break;
    case y.RATIONAL:
      s = new Uint32Array(t * 2), o = r.readUint32;
      break;
    case y.SRATIONAL:
      s = new Int32Array(t * 2), o = r.readInt32;
      break;
    case y.FLOAT:
      s = new Float32Array(t), o = r.readFloat32;
      break;
    case y.DOUBLE:
      s = new Float64Array(t), o = r.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === y.RATIONAL || e === y.SRATIONAL)
    for (let n = 0; n < t; n += 2)
      s[n] = o.call(
        r,
        i + n * a
      ), s[n + 1] = o.call(
        r,
        i + (n * a + 4)
      );
  else
    for (let n = 0; n < t; ++n)
      s[n] = o.call(
        r,
        i + n * a
      );
  return e === y.ASCII ? new TextDecoder("utf-8").decode(s) : s;
}
class ni {
  constructor(e, t, i) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = i;
  }
}
class ue extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class li {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {import('./geotiffimage').ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
   */
  async readRasters(e = {}) {
    const { window: t, width: i, height: s } = e;
    let { resX: o, resY: a, bbox: n } = e;
    const l = await this.getImage();
    let u = l;
    const c = await this.getImageCount(), h = l.getBoundingBox();
    if (t && n)
      throw new Error('Both "bbox" and "window" passed.');
    if (i || s) {
      if (t) {
        const [p, m] = l.getOrigin(), [g, x] = l.getResolution();
        n = [
          p + t[0] * g,
          m + t[1] * x,
          p + t[2] * g,
          m + t[3] * x
        ];
      }
      const d = n || h;
      if (i) {
        if (o)
          throw new Error("Both width and resX passed");
        o = (d[2] - d[0]) / i;
      }
      if (s) {
        if (a)
          throw new Error("Both width and resY passed");
        a = (d[3] - d[1]) / s;
      }
    }
    if (o || a) {
      const d = [];
      for (let p = 0; p < c; ++p) {
        const m = await this.getImage(p), { SubfileType: g, NewSubfileType: x } = m.fileDirectory;
        (p === 0 || g === 2 || x & 1) && d.push(m);
      }
      d.sort((p, m) => p.getWidth() - m.getWidth());
      for (let p = 0; p < d.length; ++p) {
        const m = d[p], g = (h[2] - h[0]) / m.getWidth(), x = (h[3] - h[1]) / m.getHeight();
        if (u = m, o && o > g || a && a > x)
          break;
      }
    }
    let f = t;
    if (n) {
      const [d, p] = l.getOrigin(), [m, g] = u.getResolution(l);
      f = [
        Math.round((n[0] - d) / m),
        Math.round((n[1] - p) / g),
        Math.round((n[2] - d) / m),
        Math.round((n[3] - p) / g)
      ], f = [
        Math.min(f[0], f[2]),
        Math.min(f[1], f[3]),
        Math.max(f[0], f[2]),
        Math.max(f[1], f[3])
      ];
    }
    return u.readRasters({ ...e, window: f });
  }
}
class Ie extends li {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, i, s, o = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = i, this.firstIFDOffset = s, this.cache = o.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const i = this.bigTiff ? 4048 : 1024;
    return new ri(
      (await this.source.fetch([{
        offset: e,
        length: typeof t < "u" ? t : i
      }]))[0],
      e,
      this.littleEndian,
      this.bigTiff
    );
  }
  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {Promise<ImageFileDirectory>} the parsed IFD
   */
  async parseFileDirectoryAt(e) {
    const t = this.bigTiff ? 20 : 12, i = this.bigTiff ? 8 : 2;
    let s = await this.getSlice(e);
    const o = this.bigTiff ? s.readUint64(e) : s.readUint16(e), a = o * t + (this.bigTiff ? 16 : 6);
    s.covers(e, a) || (s = await this.getSlice(e, a));
    const n = {};
    let l = e + (this.bigTiff ? 8 : 2);
    for (let h = 0; h < o; l += t, ++h) {
      const f = s.readUint16(l), d = s.readUint16(l + 2), p = this.bigTiff ? s.readUint64(l + 4) : s.readUint32(l + 4);
      let m, g;
      const x = Ae(d), b = l + (this.bigTiff ? 12 : 8);
      if (x * p <= (this.bigTiff ? 8 : 4))
        m = U(s, d, p, b);
      else {
        const v = s.readOffset(b), T = Ae(d) * p;
        if (s.covers(v, T))
          m = U(s, d, p, v);
        else {
          const w = await this.getSlice(v, T);
          m = U(w, d, p, v);
        }
      }
      p === 1 && Br.indexOf(f) === -1 && !(d === y.RATIONAL || d === y.SRATIONAL) ? g = m[0] : g = m, n[X[f]] = g;
    }
    const u = ai(n), c = s.readOffset(
      e + i + t * o
    );
    return new ni(
      n,
      u,
      c
    );
  }
  async requestIFD(e) {
    if (this.ifdRequests[e])
      return this.ifdRequests[e];
    if (e === 0)
      return this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
    if (!this.ifdRequests[e - 1])
      try {
        this.ifdRequests[e - 1] = this.requestIFD(e - 1);
      } catch (t) {
        throw t instanceof ue ? new ue(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new ue(e);
      return this.parseFileDirectoryAt(t.nextIFDByteOffset);
    })(), this.ifdRequests[e];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    const t = await this.requestIFD(e);
    return new ei(
      t.fileDirectory,
      t.geoKeyDirectory,
      this.dataView,
      this.littleEndian,
      this.cache,
      this.source
    );
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    let e = 0, t = !0;
    for (; t; )
      try {
        await this.requestIFD(e), ++e;
      } catch (i) {
        if (i instanceof ue)
          t = !1;
        else
          throw i;
      }
    return e;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const e = this.bigTiff ? 16 : 8;
    if (this.ghostValues)
      return this.ghostValues;
    const t = "GDAL_STRUCTURAL_METADATA_SIZE=", i = t.length + 100;
    let s = await this.getSlice(e, i);
    if (t === U(s, y.ASCII, t.length, e)) {
      const a = U(s, y.ASCII, i, e).split(`
`)[0], n = Number(a.split("=")[1].split(" ")[0]) + a.length;
      n > i && (s = await this.getSlice(e, n));
      const l = U(s, y.ASCII, n, e);
      this.ghostValues = {}, l.split(`
`).filter((u) => u.length > 0).map((u) => u.split("=")).forEach(([u, c]) => {
        this.ghostValues[u] = c;
      });
    }
    return this.ghostValues;
  }
  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {*} source The source of data to parse from.
   * @param {GeoTIFFOptions} [options] Additional options.
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   */
  static async fromSource(e, t, i) {
    const s = (await e.fetch([{ offset: 0, length: 1024 }], i))[0], o = new ti(s), a = o.getUint16(0, 0);
    let n;
    if (a === 18761)
      n = !0;
    else if (a === 19789)
      n = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const l = o.getUint16(2, n);
    let u;
    if (l === 42)
      u = !1;
    else if (l === 43) {
      if (u = !0, o.getUint16(4, n) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const c = u ? o.getUint64(8, n) : o.getUint32(4, n);
    return new Ie(e, n, u, c, t);
  }
  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    return typeof this.source.close == "function" ? this.source.close() : !1;
  }
}
async function ui(r, e) {
  return Ie.fromSource(oi(r), e);
}
function Y(r, e, t, i, s) {
  const o = r.createTexture();
  if (o === null)
    throw new Error("Failed to create texture.");
  if (r.bindTexture(r.TEXTURE_2D, o), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, e), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, e), ArrayBuffer.isView(t)) {
    const a = i * s;
    let n, l;
    if (3 * a === t.length)
      n = r.RGB, l = r.RGB8;
    else if (4 * a === t.length)
      n = r.RGBA, l = r.RGBA8;
    else
      throw new Error("Only RGB or RGBA textures are supported.");
    r.texStorage2D(r.TEXTURE_2D, 1, l, i, s), r.texSubImage2D(
      r.TEXTURE_2D,
      0,
      // level
      0,
      // x-offset
      0,
      // y-offset
      i,
      s,
      n,
      r.UNSIGNED_BYTE,
      t
    );
  } else
    r.texStorage2D(r.TEXTURE_2D, 1, r.RGBA8, i, s), r.texSubImage2D(
      r.TEXTURE_2D,
      0,
      // level
      0,
      // x-offset
      0,
      // y-offset
      r.RGBA,
      r.UNSIGNED_BYTE,
      t
    );
  return r.bindTexture(r.TEXTURE_2D, null), o;
}
class me {
  constructor(e, t, i) {
    Object.defineProperty(this, "r", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "g", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "b", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.r = e, this.g = t, this.b = i;
  }
  /**
   * Parses a color from a hexadecimal color string.
   * @param hex hexadecimal color string.
   * @returns color parsed from the hexadecimal color string.
   */
  static fromHex(e) {
    const t = parseInt(e.substring(1, 3), 16), i = parseInt(e.substring(3, 5), 16), s = parseInt(e.substring(5, 7), 16);
    return new me(t, i, s);
  }
}
class ci {
  constructor(e, t) {
    if (Object.defineProperty(this, "values", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "colors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), e.length !== t.length)
      throw new Error("Number of colormap values should be the same as the number of colors.");
    this.values = e, this.colors = t;
  }
  /** Number of points in the colormap. */
  get num() {
    return this.values.length;
  }
  /** Start value of the colormap. */
  get start() {
    if (this.values.length === 0)
      throw new Error("Colormap contains no values.");
    return this.values[0];
  }
  /** End value of the colormap. */
  get end() {
    if (this.values.length === 0)
      throw new Error("Colormap contains no values.");
    return this.values[this.values.length - 1];
  }
  /** Range of the colormap (i.e. difference between start and end). */
  get range() {
    return this.end - this.start;
  }
  /**
   * Creates a 1D texture from this colormap.
   *
   * The colormap as obtained from the GetLegendGraphic FEWS WMS endpoint may be non-uniformly
   * spaced. This function linearly interpolates this non-uniformly spaced colormap to a uniformly
   * spaced texture, from the colormap's start to its end.
   *
   * @param numPoints number of points in the texture.
   * @returns Colour map as a WebGL texture (note: not RGBA).
   */
  toTexture(e, t) {
    return Y(e, e.LINEAR, this.to1DRGBTextureData(t), t, 1);
  }
  to1DRGBTextureData(e) {
    if (this.colors.length === 0 || this.values.length === 0)
      return new Uint8Array();
    const t = this.range / (e - 1), i = new Uint8Array(3 * e);
    for (let s = 0; s < e; s++) {
      let o;
      if (s == 0)
        o = this.colors[0];
      else if (s == e - 1)
        o = this.colors[this.num - 1];
      else {
        const n = this.start + s * t, l = this.values.findIndex((g) => g > n), u = l - 1, c = Math.abs(n - this.values[u]), h = Math.abs(n - this.values[l]), f = h / (c + h), d = c / (c + h), p = this.colors[u], m = this.colors[l];
        o = new me(p.r * f + m.r * d, p.g * f + m.g * d, p.b * f + m.b * d);
      }
      const a = 3 * s;
      i[a] = o.r, i[a + 1] = o.g, i[a + 2] = o.b;
    }
    return i;
  }
}
class hi {
  constructor(e, t, i, s, o, a, n) {
    Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: e
    }), Object.defineProperty(this, "width", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "height", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: i
    }), Object.defineProperty(this, "uOffset", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: s
    }), Object.defineProperty(this, "vOffset", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: o
    }), Object.defineProperty(this, "uScale", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: a
    }), Object.defineProperty(this, "vScale", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  maxVelocity() {
    const e = (i) => i * this.uScale + this.uOffset, t = (i) => i * this.vScale + this.vOffset;
    return [
      Math.max(e(0), e(1)),
      Math.max(t(0), t(1))
    ];
  }
  toTexture(e, t) {
    return Y(e, t ? e.LINEAR : e.NEAREST, this.data, this.width, this.height);
  }
}
async function Ze(r, e, t, i, s) {
  const o = new URL(r);
  o.searchParams.append("request", "GetLegendGraphic"), o.searchParams.append("format", "application/json"), o.searchParams.append("version", "1.3"), o.searchParams.append("layers", e), t && o.searchParams.append("colorScaleRange", `${t.join(",")}`);
  const a = new Request(o), n = await s?.(a) ?? a, u = await (await fetch(new Request(n, { signal: i }))).json();
  return new ci(u.legend.map((c) => c.lowerValue), u.legend.map((c) => me.fromHex(c.color)));
}
async function fi(r, e, t, i) {
  const s = new URL(r);
  s.searchParams.append("request", "GetCapabilities"), s.searchParams.append("format", "application/json"), s.searchParams.append("version", "1.3"), s.searchParams.append("layers", e);
  const o = new Request(s), a = await i?.(o) ?? o, u = (await (await fetch(new Request(a, { signal: t }))).json()).layers?.[0];
  if (!u)
    throw new Error("WMS GetCapabilities response contains no layers.");
  if (!u.times)
    throw new Error("WMS GetCapabilities response contains no times.");
  const c = u.elevation?.lowerValue, h = u.elevation?.upperValue, f = c !== void 0 && h !== void 0 ? [+c, +h] : null;
  return {
    times: u.times,
    elevationBounds: f
  };
}
async function di(r, e, t, i, s, o, a, n, l, u, c, h) {
  const f = new URL(r);
  return f.searchParams.append("request", "GetMap"), f.searchParams.append("version", "1.3"), f.searchParams.append("layers", e), f.searchParams.append("crs", "EPSG:3857"), f.searchParams.append("time", t), f.searchParams.append("width", s.toString()), f.searchParams.append("height", o.toString()), f.searchParams.append("bbox", `${i.join(",")}`), f.searchParams.append("format", "image/tiff"), f.searchParams.append("convertVectortoRG", "true"), a && f.searchParams.append("styles", a), l !== void 0 && f.searchParams.append("useLastValue", l ? "true" : "false"), n !== void 0 && f.searchParams.append("useDisplayUnits", n ? "true" : "false"), u && f.searchParams.append("elevation", `${u}`), pi(f, c, h);
}
async function pi(r, e, t) {
  const i = new Request(r), s = await t?.(i) ?? i, a = await (await fetch(new Request(s, { signal: e }))).arrayBuffer(), l = await (await ui(a, e)).getImage(), u = l.getFileDirectory(), c = [
    "BitsPerSample",
    "ImageWidth",
    "ImageLength",
    "ModelTiepoint",
    "ModelPixelScale"
  ];
  if (!c.every((w) => w in u)) {
    const w = c.map((_) => `"${_}"`).join(", ");
    throw new Error(`GeoTIFF metadata does not contain all expected properties; need the following properties: ${w}`);
  }
  if (!u.BitsPerSample.every((w) => w === 8))
    throw new Error("Fetched GeoTIFF does not have the expected 8 bits bitdepth per channel.");
  const p = await l.readRasters({ interleave: !0 }), m = u.ImageWidth, g = u.ImageLength, x = u.ModelTiepoint[0], b = u.ModelPixelScale[0] * 255, v = u.ModelTiepoint[1], T = u.ModelPixelScale[1] * 255;
  return new hi(p, m, g, x, v, b, T);
}
class W {
  constructor(e, t) {
    Object.defineProperty(this, "gl", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "age", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.gl = e, this.data = W.createBuffer(e, 4, t), this.age = W.createBuffer(e, 1, t);
  }
  destroy() {
    this.gl.deleteBuffer(this.data), this.gl.deleteBuffer(this.age);
  }
  initialise(e, t) {
    const i = this.gl;
    i.bindBuffer(i.ARRAY_BUFFER, this.data), i.bufferSubData(i.ARRAY_BUFFER, 0, e), i.bindBuffer(i.ARRAY_BUFFER, this.age), i.bufferSubData(i.ARRAY_BUFFER, 0, t), i.bindBuffer(i.ARRAY_BUFFER, null);
  }
  resetAges(e) {
    const t = this.gl;
    t.bindBuffer(t.ARRAY_BUFFER, this.age), t.bufferSubData(t.ARRAY_BUFFER, 0, e), t.bindBuffer(t.ARRAY_BUFFER, null);
  }
  static createBuffer(e, t, i) {
    const s = e.createBuffer(), o = 4 * t * i;
    return e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, null), s;
  }
}
class Me {
  constructor(e, t, i, s, o, a, n) {
    Object.defineProperty(this, "program", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "width", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "height", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "numParticles", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "numParticlesAllocate", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "maxAge", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "speedCurve", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "inputBuffers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "outputBuffers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "transformFeedback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "velocityImage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "velocityTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.program = e, this.width = t, this.height = i, this.numParticles = s, this.numParticlesAllocate = o, this.maxAge = a, this.velocityImage = null, this.velocityTexture = null, this.speedCurve = n, this.inputBuffers = null, this.outputBuffers = null, this.transformFeedback = null;
  }
  get buffers() {
    if (!this.outputBuffers)
      throw new Error("No output buffer defined, particle renderer was not initialised?");
    return this.outputBuffers;
  }
  initialise() {
    const e = this.program.gl;
    this.resetBuffers(), this.transformFeedback = e.createTransformFeedback();
  }
  destruct() {
    const e = this.program.gl;
    this.inputBuffers && this.inputBuffers.destroy(), this.outputBuffers && this.outputBuffers.destroy(), e.deleteTransformFeedback(this.transformFeedback), e.deleteTexture(this.velocityTexture), this.program.destruct();
  }
  setDimensions(e, t) {
    this.width = e, this.height = t;
  }
  setVelocityImage(e) {
    this.velocityImage = e, this.velocityTexture = e.toTexture(this.program.gl, !1);
  }
  setNumParticles(e, t) {
    this.numParticles = e, this.numParticlesAllocate = t, this.resetBuffers();
  }
  setMaxAge(e) {
    this.maxAge = e, this.resetBuffers();
  }
  setSpeedCurve(e) {
    this.speedCurve = e;
  }
  resetBuffers() {
    this.inputBuffers && this.inputBuffers.destroy(), this.outputBuffers && this.outputBuffers.destroy();
    const e = this.program.gl;
    this.inputBuffers = new W(e, this.numParticlesAllocate), this.outputBuffers = new W(e, this.numParticlesAllocate);
    const t = this.generateInitialParticleData(), i = this.generateInitialParticleAges();
    this.inputBuffers.initialise(t, i), this.swapBuffers();
  }
  resetAges() {
    const e = this.generateInitialParticleAges();
    this.outputBuffers?.resetAges(e);
  }
  update(e) {
    const t = this.program.gl;
    if (this.program.use(), !this.inputBuffers || !this.outputBuffers)
      throw new Error("Input buffer and/or output buffer is not defined, particle renderer was not initialised?");
    if (!this.velocityTexture)
      throw new Error("Velocity texture is not defined, no velocity image was set?");
    this.swapBuffers(), pe(t, this.inputBuffers.data, this.program.getAttributeLocation("a_particle_data"), 4), pe(t, this.inputBuffers.age, this.program.getAttributeLocation("a_particle_age"), 1), B(this.program, "u_velocity_texture", 0, this.velocityTexture), this.bindUniforms(e), t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, this.transformFeedback), t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, 0, this.outputBuffers.data), t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, 1, this.outputBuffers.age), t.enable(t.RASTERIZER_DISCARD), t.beginTransformFeedback(t.POINTS), t.drawArrays(t.POINTS, 0, this.numParticles), t.endTransformFeedback(), t.disable(t.RASTERIZER_DISCARD), t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  bindUniforms(e) {
    if (!this.velocityImage)
      throw new Error("Velocity image is not defined, no velocity image was set?");
    const t = this.program.gl;
    t.uniform1f(this.program.getUniformLocation("u_dt"), e), t.uniform1f(this.program.getUniformLocation("u_aspect_ratio"), this.height / this.width), t.uniform2f(this.program.getUniformLocation("u_scale_in"), this.velocityImage.uScale, this.velocityImage.vScale), t.uniform2f(this.program.getUniformLocation("u_offset_in"), this.velocityImage.uOffset, this.velocityImage.vOffset), t.uniform1f(this.program.getUniformLocation("u_speed_factor"), this.speedCurve.exponent === 0 ? this.speedCurve.baseFactor : this.speedCurve.factor), t.uniform1f(this.program.getUniformLocation("u_speed_exponent"), this.speedCurve.exponent), t.uniform1f(this.program.getUniformLocation("u_max_age"), this.maxAge);
  }
  swapBuffers() {
    const e = this.inputBuffers;
    this.inputBuffers = this.outputBuffers, this.outputBuffers = e;
  }
  generateInitialParticleData() {
    const e = new Float32Array(this.numParticles * 4);
    for (let t = 0; t < this.numParticles; t++) {
      const [i, s] = Me.randomClipCoords(), o = 4 * t;
      e[o] = i, e[o + 1] = s, e[o + 2] = 1e-6, e[o + 3] = 1e-6;
    }
    return e;
  }
  generateInitialParticleAges() {
    const e = new Float32Array(this.numParticles);
    for (let t = 0; t < this.numParticles; t++)
      e[t] = Math.random() * this.maxAge;
    return e;
  }
  static randomClipCoords() {
    const e = () => Math.random() * 2 - 1;
    return [e(), e()];
  }
}
function Ue(r, e, t, i, s, o, a, n) {
  const l = r.gl, u = l.createVertexArray();
  if (u === null)
    throw new Error("Failed to create vertex array.");
  l.bindVertexArray(u);
  const c = [t, s, e, s, t, i, e, i], h = o ? [1, 0, 0, 0, 1, 1, 0, 1] : [1, 1, 0, 1, 1, 0, 0, 0], f = Ke(l, new Float32Array(c)), d = Ke(l, new Float32Array(h));
  return pe(l, f, r.getAttributeLocation(a), 2), pe(l, d, r.getAttributeLocation(n), 2), l.bindVertexArray(null), [f, d, u];
}
class we {
  constructor(e, t, i, s, o, a, n, l, u, c, h, f) {
    Object.defineProperty(this, "particleSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "maxAge", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "growthRate", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "program", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "width", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "height", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "numParticles", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "particleTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "particleDataTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "particleAgeTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "positionBuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "texCoordBuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "vertexArray", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "widthParticleDataTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "heightParticleDataTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "isSpriteRenderer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "doRotateParticles", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.program = e, this.width = t, this.height = i, this.numParticles = s, this.particleSize = o, this.particleTexture = a, this.particleDataTexture = null, this.particleAgeTexture = null, this.widthParticleDataTexture = n, this.heightParticleDataTexture = l, this.maxAge = c, this.growthRate = h, this.positionBuffer = null, this.texCoordBuffer = null, this.vertexArray = null, this.isSpriteRenderer = u, this.doRotateParticles = f;
  }
  initialise() {
    const [t, i, s] = Ue(this.program, -0.5, 0.5, -0.5, 0.5, !0, "a_position", "a_tex_coord");
    this.positionBuffer = t, this.texCoordBuffer = i, this.vertexArray = s, this.resetParticleDataTextures();
  }
  destruct(e = !1) {
    const t = this.program.gl;
    t.deleteBuffer(this.positionBuffer), t.deleteBuffer(this.texCoordBuffer), t.deleteVertexArray(this.vertexArray), e && (t.deleteTexture(this.particleTexture), t.deleteTexture(this.particleDataTexture), t.deleteTexture(this.particleAgeTexture), this.program.destruct());
  }
  setDimensions(e, t) {
    this.width = e, this.height = t;
  }
  setNumParticles(e, t, i) {
    this.numParticles = e, this.widthParticleDataTexture = t, this.heightParticleDataTexture = i, this.resetParticleDataTextures();
  }
  setMaxAge(e) {
    this.maxAge = e;
  }
  setParticleTexture(e) {
    this.particleTexture = e;
  }
  setDoRotateParticles(e) {
    this.doRotateParticles = e;
  }
  render(e, t) {
    if (!this.particleDataTexture || !this.particleAgeTexture)
      throw new Error("No particle data textures defined, particle renderer was not initialised?");
    if (this.isSpriteRenderer && t === void 0)
      throw new Error("Must specify bounding box scaling when rendering sprites.");
    const i = this.program.gl;
    this.program.use(), i.enable(i.BLEND), this.isSpriteRenderer ? (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquationSeparate(i.FUNC_ADD, i.MAX), i.blendFunc(i.ONE, i.ONE)), i.bindVertexArray(this.vertexArray), this.updateParticleDataTextureFromBuffer(e.data, this.particleDataTexture, 4), this.updateParticleDataTextureFromBuffer(e.age, this.particleAgeTexture, 1), B(this.program, "u_particle_texture", 0, this.particleTexture), B(this.program, "u_particle_data_texture", 1, this.particleDataTexture), B(this.program, "u_particle_age_texture", 2, this.particleAgeTexture), this.bindUniforms(t), i.drawArraysInstanced(i.TRIANGLE_STRIP, 0, 4, this.numParticles), i.bindVertexArray(null), i.disable(i.BLEND);
  }
  resetParticleDataTextures() {
    const e = this.program.gl;
    this.particleDataTexture && e.deleteTexture(this.particleDataTexture), this.particleAgeTexture && e.deleteTexture(this.particleAgeTexture), this.particleDataTexture = this.createParticleDataTexture(4), this.particleAgeTexture = this.createParticleDataTexture(1);
  }
  createParticleDataTexture(e) {
    const t = this.program.gl, i = t.createTexture();
    if (i === null)
      throw new Error("Failed to create texture.");
    return t.bindTexture(t.TEXTURE_2D, i), t.texStorage2D(t.TEXTURE_2D, 1, e === 1 ? t.R32F : t.RGBA32F, this.widthParticleDataTexture, this.heightParticleDataTexture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.bindTexture(t.TEXTURE_2D, null), i;
  }
  updateParticleDataTextureFromBuffer(e, t, i) {
    if (!this.particleDataTexture)
      throw new Error("No particle position texture defined, particle renderer was not initialised?");
    const s = this.program.gl;
    s.bindBuffer(s.PIXEL_UNPACK_BUFFER, e), s.bindTexture(s.TEXTURE_2D, t), s.texSubImage2D(
      s.TEXTURE_2D,
      0,
      // level
      0,
      // x-offset
      0,
      // y-offset
      this.widthParticleDataTexture,
      this.heightParticleDataTexture,
      i === 1 ? s.RED : s.RGBA,
      s.FLOAT,
      0
      // offset into the pixel unpack buffer
    ), s.bindTexture(s.TEXTURE_2D, null), s.bindBuffer(s.PIXEL_UNPACK_BUFFER, null);
  }
  bindUniforms(e) {
    const t = this.program.gl, i = window.devicePixelRatio ?? 1, s = this.particleSize * i / this.width;
    t.uniform1f(this.program.getUniformLocation("u_particle_size"), s), t.uniform1f(this.program.getUniformLocation("u_aspect_ratio"), this.width / this.height), t.uniform1i(this.program.getUniformLocation("u_do_rotate_particles"), this.doRotateParticles ? 1 : 0), t.uniform1i(this.program.getUniformLocation("u_width"), this.widthParticleDataTexture), t.uniform2f(this.program.getUniformLocation("u_bbox_scale"), e?.scaleX ?? 1, e?.scaleY ?? 1), t.uniform2f(this.program.getUniformLocation("u_bbox_offset"), e?.offsetX ?? 0, e?.offsetY ?? 0), t.uniform1f(this.program.getUniformLocation("u_max_age"), this.maxAge), t.uniform1f(this.program.getUniformLocation("u_growth_rate"), this.growthRate);
  }
}
class gi {
  constructor(e) {
    Object.defineProperty(this, "program", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "positionBuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "texCoordBuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "vertexArray", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "previousFramebuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "currentFramebuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.program = e, this.positionBuffer = null, this.texCoordBuffer = null, this.vertexArray = null, this.previousFramebuffer = this.program.gl.createFramebuffer(), this.currentFramebuffer = this.program.gl.createFramebuffer();
  }
  initialise() {
    const [t, i, s] = Ue(this.program, -1, 1, -1, 1, !1, "a_position", "a_tex_coord");
    this.positionBuffer = t, this.texCoordBuffer = i, this.vertexArray = s;
  }
  destruct() {
    const e = this.program.gl;
    e.deleteBuffer(this.positionBuffer), e.deleteBuffer(this.texCoordBuffer), e.deleteVertexArray(this.vertexArray), e.deleteFramebuffer(this.currentFramebuffer), this.program.destruct();
  }
  resetParticleTextures(e, t) {
    this.setupFramebuffer(this.previousFramebuffer, e), this.setupFramebuffer(this.currentFramebuffer, t);
  }
  render(e, t) {
    const i = this.program.gl;
    this.program.use(), i.bindVertexArray(this.vertexArray), B(this.program, "u_texture", 0, e), i.uniform1f(this.program.getUniformLocation("u_fade_amount"), t), i.bindFramebuffer(i.FRAMEBUFFER, this.currentFramebuffer), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.drawArrays(i.TRIANGLE_STRIP, 0, 4), i.bindVertexArray(null);
  }
  swapBuffers() {
    const e = this.previousFramebuffer;
    this.previousFramebuffer = this.currentFramebuffer, this.currentFramebuffer = e;
  }
  setupFramebuffer(e, t) {
    const i = this.program.gl;
    i.bindFramebuffer(i.FRAMEBUFFER, e), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, t, 0), i.clearColor(0, 0, 0, 0), i.disable(i.BLEND), i.bindFramebuffer(i.FRAMEBUFFER, null);
  }
}
var Je;
(function(r) {
  r[r.LightParticlesOnMagnitude = 0] = "LightParticlesOnMagnitude", r[r.DarkParticlesOnMagnitude = 1] = "DarkParticlesOnMagnitude", r[r.MagnitudeColoredParticles = 2] = "MagnitudeColoredParticles", r[r.ColoredParticles = 3] = "ColoredParticles";
})(Je || (Je = {}));
class H {
  constructor(e, t, i, s = 1) {
    Object.defineProperty(this, "style", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "particleOverlayOpacity", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "program", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "positionBuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "texCoordBuffer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "vertexArray", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "velocityImage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "colormap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "colormapTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "velocityTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.program = e, this.style = t, this.particleOverlayOpacity = s, this.positionBuffer = null, this.texCoordBuffer = null, this.vertexArray = null, this.velocityImage = null, this.colormap = i, this.colormapTexture = null, this.velocityTexture = null;
  }
  initialise() {
    const e = this.program.gl, t = !1, [i, s, o] = Ue(this.program, -1, 1, -1, 1, t, "a_position", "a_tex_coord");
    this.positionBuffer = i, this.texCoordBuffer = s, this.vertexArray = o, this.colormapTexture = this.colormap.toTexture(e, H.NUM_SEGMENTS_COLORMAP);
  }
  destruct() {
    const e = this.program.gl;
    e.deleteBuffer(this.positionBuffer), e.deleteBuffer(this.texCoordBuffer), e.deleteVertexArray(this.vertexArray), e.deleteTexture(this.colormapTexture), e.deleteTexture(this.velocityTexture), this.program.destruct();
  }
  render(e, t) {
    const i = this.program.gl;
    this.program.use(), i.bindVertexArray(this.vertexArray), this.bindUniforms(t), this.bindTextures(e), i.bindFramebuffer(i.FRAMEBUFFER, null), i.enable(i.BLEND), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), i.drawArrays(i.TRIANGLE_STRIP, 0, 4);
  }
  setVelocityImage(e) {
    this.velocityImage = e, this.velocityTexture = e.toTexture(this.program.gl, !1);
  }
  setColorMap(e) {
    this.colormap = e, this.colormapTexture = this.colormap.toTexture(this.program.gl, H.NUM_SEGMENTS_COLORMAP);
  }
  bindUniforms(e) {
    if (!this.velocityImage)
      throw new Error("Velocity image is not defined, no velocity image was set?");
    const t = this.program.gl;
    t.uniform2f(this.program.getUniformLocation("u_bbox_scale"), e.scaleX, e.scaleY), t.uniform2f(this.program.getUniformLocation("u_bbox_offset"), e.offsetX, e.offsetY), t.uniform1i(this.program.getUniformLocation("u_style"), this.style), t.uniform1f(this.program.getUniformLocation("u_particle_opacity"), this.particleOverlayOpacity), t.uniform1f(this.program.getUniformLocation("u_colormap_start"), this.colormap.start), t.uniform1f(this.program.getUniformLocation("u_colormap_end"), this.colormap.end), t.uniform2f(this.program.getUniformLocation("u_scale"), this.velocityImage.uScale, this.velocityImage.vScale), t.uniform2f(this.program.getUniformLocation("u_offset"), this.velocityImage.uOffset, this.velocityImage.vOffset);
  }
  bindTextures(e) {
    if (this.colormapTexture === null || this.velocityTexture === null)
      throw new Error("Textures have not been initialised.");
    B(this.program, "u_particle_texture", 0, e), B(this.program, "u_colormap_texture", 1, this.colormapTexture), B(this.program, "u_velocity_texture", 2, this.velocityTexture);
  }
}
Object.defineProperty(H, "NUM_SEGMENTS_COLORMAP", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 64
});
var mi = `#version 300 es
precision highp float;uniform sampler2D u_velocity_texture;uniform float u_speed_factor;uniform float u_speed_exponent;uniform float u_aspect_ratio;uniform vec2 u_scale_in;uniform vec2 u_offset_in;uniform float u_dt;uniform float u_max_age;in vec4 a_particle_data;in float a_particle_age;out vec4 v_new_particle_data;out float v_new_particle_age;bool is_missing_velocity(vec4 raw){return raw.a<0.004;}float gold_noise(vec2 pos,float seed){const float phi=1.61803398874989484820459;return fract(tan(distance(pos*phi,pos)*seed)*pos.x);}vec2 random_position(){vec2 pos=a_particle_data.xy;float x=gold_noise(pos,-123.456)*2.0-1.0;float y=gold_noise(pos,789.012)*2.0-1.0;return vec2(x,y);}vec2 get_clip_space_velocity(vec2 pos){vec2 pos_texture=vec2(0.5+0.5*pos.x,0.5-0.5*pos.y);vec4 velocity_raw=texture(u_velocity_texture,pos_texture);if(is_missing_velocity(velocity_raw)){return vec2(0.0,0.0);}vec2 velocity=velocity_raw.rg*u_scale_in+u_offset_in;if(u_speed_exponent==0.0){velocity=normalize(velocity)*u_speed_factor;}else{float speed_compressed=pow(length(velocity),u_speed_exponent);speed_compressed*=u_speed_factor;velocity=normalize(velocity)*speed_compressed;}velocity.x*=u_aspect_ratio;velocity*=velocity_raw.a;return velocity;}void main(){vec2 pos=a_particle_data.xy;vec2 velocity=a_particle_data.zw;vec2 new_position;float new_age;if(a_particle_age>u_max_age){new_position=random_position();new_age=0.0;}else if(velocity.x==0.0&&velocity.y==0.0){new_position=random_position();new_age=gold_noise(pos,987.65)*u_max_age;}else if(pos.x<-1.0||pos.x>1.0||pos.y<-1.0||pos.y>1.0){new_position=random_position();new_age=0.0;}else{new_position=pos+velocity*u_dt;new_age=a_particle_age+u_dt;}vec2 new_velocity=get_clip_space_velocity(new_position);v_new_particle_data=vec4(new_position,new_velocity);v_new_particle_age=new_age;}`, bi = `#version 300 es
precision highp float;in vec2 a_position;in vec2 a_tex_coord;uniform int u_width;uniform highp sampler2D u_particle_data_texture;uniform highp sampler2D u_particle_age_texture;uniform float u_particle_size;uniform float u_aspect_ratio;uniform lowp int u_do_rotate_particles;uniform vec2 u_bbox_scale;uniform vec2 u_bbox_offset;uniform float u_max_age;uniform float u_growth_rate;out vec2 v_tex_coord;float compute_particle_size(float age){const float shrink_time=0.1f;float shrink_start_age=u_max_age-shrink_time;if(age>shrink_start_age){float start_size=min(shrink_start_age*u_growth_rate*u_particle_size,u_particle_size);float shrink_factor=1.0f-(age-shrink_start_age)/shrink_time;return start_size*shrink_factor;}else{float unconstrained_size=age*u_growth_rate*u_particle_size;return min(unconstrained_size,u_particle_size);}}void main(){ivec2 texture_indices=ivec2(gl_InstanceID/u_width,gl_InstanceID % u_width);const int mipmap_level=0;vec4 particle_data=texelFetch(u_particle_data_texture,texture_indices,mipmap_level);float particle_age=texelFetch(u_particle_age_texture,texture_indices,mipmap_level).r;vec2 particle_position=particle_data.xy;vec2 particle_velocity=particle_data.zw;if(particle_velocity.x==0.0f&&particle_velocity.y==0.0f){gl_Position=vec4(0.0f,0.0f,0.0f,1.0f);return;}vec2 position=a_position;if(u_do_rotate_particles==1){vec2 direction=normalize(particle_velocity);mat2 transformation=mat2(vec2(-direction.y,direction.x),direction);position=transformation*position;}position*=compute_particle_size(particle_age);position.y*=u_aspect_ratio;gl_Position=vec4(position+particle_position,0.0f,1.0f);gl_Position.xy=gl_Position.xy*u_bbox_scale+u_bbox_offset;v_tex_coord=a_tex_coord;}`, xi = `#version 300 es
precision highp float;in vec4 a_position;in vec2 a_tex_coord;out vec2 v_tex_coord;void main(){v_tex_coord=a_tex_coord;gl_Position=a_position;}`, yi = `#version 300 es
precision highp float;uniform vec2 u_bbox_scale;uniform vec2 u_bbox_offset;in vec4 a_position;in vec2 a_tex_coord;out vec2 v_tex_coord;out vec2 v_flipped_tex_coord;void main(){v_tex_coord=a_tex_coord;v_flipped_tex_coord=vec2(a_tex_coord.x,1.0-a_tex_coord.y);gl_Position=a_position;gl_Position.xy=gl_Position.xy*u_bbox_scale+u_bbox_offset;}`, _i = `#version 300 es
precision highp float;out vec4 color;void main(){color=vec4(0.0,0.0,0.0,0.0);}`, vi = `#version 300 es
precision highp float;uniform sampler2D u_particle_texture;in vec2 v_tex_coord;out vec4 color;void main(){color=texture(u_particle_texture,v_tex_coord);}`, wi = `#version 300 es
precision highp float;uniform sampler2D u_texture;uniform float u_fade_amount;in vec2 v_tex_coord;out vec4 color;void main(){color=texture(u_texture,v_tex_coord);color.a=max(color.a-u_fade_amount,0.0);}`, Ti = `#version 300 es
precision highp float;uniform int u_style;uniform float u_particle_opacity;uniform sampler2D u_particle_texture;uniform sampler2D u_colormap_texture;uniform sampler2D u_velocity_texture;uniform float u_colormap_start;uniform float u_colormap_end;uniform vec2 u_scale;uniform vec2 u_offset;in vec2 v_tex_coord;in vec2 v_flipped_tex_coord;out vec4 color;bool is_missing_velocity(vec4 raw){return raw.a<0.004;}float get_speed(vec2 pos){vec4 velocity_raw=texture(u_velocity_texture,pos);if(is_missing_velocity(velocity_raw)){return 0.0;}vec2 velocity=velocity_raw.rg*u_scale+u_offset;return length(velocity);}float get_validity(vec2 pos){vec4 velocity_raw=texture(u_velocity_texture,pos);return velocity_raw.a>0.004 ? 1.0 : 0.0;}void main(){float speed=get_speed(v_flipped_tex_coord);float validity=get_validity(v_flipped_tex_coord);if(speed>0.0){vec2 colormap_coords=vec2(0.0,0.0);colormap_coords.s=clamp((speed-u_colormap_start)/(u_colormap_end-u_colormap_start),0.0,1.0);lowp vec4 magnitude_color=texture(u_colormap_texture,colormap_coords);lowp vec4 particle_color=texture(u_particle_texture,v_tex_coord);if(u_style==0){color=mix(magnitude_color,vec4(1.0,1.0,1.0,1.0),particle_color.a*u_particle_opacity);}else if(u_style==1){float factor=1.0-particle_color.a*u_particle_opacity;color=magnitude_color;color.rgb*=factor*0.8+0.2;}else if(u_style==2){color=magnitude_color*particle_color.a;color.a=particle_color.a;}else if(u_style==3){color=magnitude_color;color.rgb=mix(magnitude_color.rgb,particle_color.rgb,particle_color.a);}else{color=vec4(0.0,0.0,0.0,0.0);}color.a*=validity;}else{color=vec4(0.0,0.0,0.0,0.0);}}`;
class mt {
  constructor(e, t, i) {
    Object.defineProperty(this, "gl", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shader", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "hasCompileAttempt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
    const s = e.createShader(t);
    if (!s)
      throw new Error("Failed to create WebGL shader.");
    e.shaderSource(s, i), this.gl = e, this.shader = s, this.hasCompileAttempt = !1;
  }
  destruct() {
    this.gl.deleteShader(this.shader);
  }
  compile() {
    this.hasCompileAttempt || (this.gl.compileShader(this.shader), this.hasCompileAttempt = !0);
  }
}
class ce extends mt {
  constructor(e, t) {
    super(e, e.VERTEX_SHADER, t);
  }
}
class he extends mt {
  constructor(e, t) {
    super(e, e.FRAGMENT_SHADER, t);
  }
}
var L;
(function(r) {
  r.Circle = "circle", r.Rectangle = "rectangle";
})(L || (L = {}));
function Qe(r) {
  const e = r.trailParticleOptions?.doRotate;
  return e !== void 0 ? e : (r.trailParticleOptions?.shape ?? L.Circle) !== L.Circle;
}
class q {
  constructor(e, t, i, s, o) {
    Object.defineProperty(this, "MAX_NUM_SUBSTEPS", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 32
    }), Object.defineProperty(this, "DEFAULT_GROWTH_RATE", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5
    }), Object.defineProperty(this, "gl", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "width", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "height", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "isRendering", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_numParticles", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "programRenderParticles", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "textureRenderer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "particlePropagator", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "particleRenderer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "finalRenderer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "spriteRenderer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "scaling", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "previousParticleTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "currentParticleTexture", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "velocityImage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "colorMap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "dtMin", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.gl = e, this.width = t, this.height = i, this.isRendering = !1, this._numParticles = s, this.programRenderParticles = null, this._options = { ...o }, this.textureRenderer = null, this.particlePropagator = null, this.particleRenderer = null, this.finalRenderer = null, this.spriteRenderer = null, this.scaling = { scaleX: 1, scaleY: 1, offsetX: 0, offsetY: 0 }, this.previousParticleTexture = null, this.currentParticleTexture = null, this.velocityImage = null, this.colorMap = null, this.dtMin = 0;
  }
  // Compute optimal particle data texture width/height; there are limits to
  // the size of each dimensions of a texture, so to support an acceptable
  // number of particles, we need to store them in a 2D texture, instead of
  // a simple 1D texture.
  get widthParticleDataTexture() {
    return Math.ceil(Math.sqrt(this._numParticles));
  }
  get heightParticleDataTexture() {
    return this.widthParticleDataTexture;
  }
  get numParticlesAllocate() {
    return this.widthParticleDataTexture * this.heightParticleDataTexture;
  }
  get particleTextureSize() {
    const e = window.devicePixelRatio ?? 1;
    return Math.ceil(2 * e * this.options.particleSize);
  }
  get isInitialised() {
    return this.particlePropagator !== null && this.particleRenderer !== null && this.finalRenderer !== null;
  }
  get options() {
    return { ...this._options };
  }
  get numParticles() {
    return this._numParticles;
  }
  async initialise(e) {
    this.colorMap = e;
    const [t, i, s, o] = await this.compileShaderPrograms();
    this.programRenderParticles = i;
    const a = this.createParticleTexture(), n = q.computeSpeedCurve(e, this._options);
    if (this.textureRenderer = new gi(s), this.particlePropagator = new Me(t, this.width, this.height, this._numParticles, this.numParticlesAllocate, this._options.maxAge, n), this.particleRenderer = new we(i, this.width, this.height, this._numParticles, this._options.particleSize, a, this.widthParticleDataTexture, this.heightParticleDataTexture, !1, this._options.maxAge, this._options.growthRate ?? this.DEFAULT_GROWTH_RATE, Qe(this._options)), this.finalRenderer = new H(o, this._options.style, e, this._options.particleOverlayOpacity), this.textureRenderer.initialise(), this.particlePropagator.initialise(), this.particleRenderer.initialise(), this.finalRenderer.initialise(), this.options.spriteUrl) {
      const l = await this.createSpriteTexture();
      this.spriteRenderer = new we(i, this.width, this.height, this._numParticles, this._options.particleSize, l, this.widthParticleDataTexture, this.heightParticleDataTexture, !0, this._options.maxAge, this._options.growthRate ?? this.DEFAULT_GROWTH_RATE, !0), this.spriteRenderer.initialise();
    }
    this.previousParticleTexture = this.createZeroTexture(), this.currentParticleTexture = this.createZeroTexture(), this.textureRenderer.resetParticleTextures(this.previousParticleTexture, this.currentParticleTexture);
  }
  start() {
    if (!this.isInitialised)
      throw new Error("Cannot start rendering for uninitialised visualiser.");
    this.isRendering = !0;
  }
  stop() {
    this.isRendering = !1;
  }
  destruct() {
    this.textureRenderer && this.textureRenderer.destruct(), this.particlePropagator && this.particlePropagator.destruct(), this.particleRenderer && this.particleRenderer.destruct(), this.finalRenderer && this.finalRenderer.destruct(), this.gl.deleteTexture(this.previousParticleTexture), this.gl.deleteTexture(this.currentParticleTexture);
  }
  setScaling(e) {
    this.scaling = e;
  }
  setDimensions(e, t) {
    if (!this.particlePropagator || !this.particleRenderer)
      throw new Error("Cannot set dimensions for uninitialised visualiser.");
    this.width === e && this.height === t || (this.width = e, this.height = t, this.previousParticleTexture = this.createZeroTexture(), this.currentParticleTexture = this.createZeroTexture(), this.particlePropagator.setDimensions(e, t), this.particleRenderer.setDimensions(e, t), this.spriteRenderer && this.spriteRenderer.setDimensions(e, t), this.velocityImage && (this.dtMin = this.computeMinimumTimeStep()));
  }
  setNumParticles(e) {
    if (!this.particlePropagator || !this.particleRenderer)
      throw new Error("Cannot set number of particles for uninitialised visualiser.");
    this._numParticles !== e && (this.resetParticles(), this._numParticles = e, this.particlePropagator.setNumParticles(this._numParticles, this.numParticlesAllocate), this.particleRenderer.setNumParticles(this._numParticles, this.widthParticleDataTexture, this.heightParticleDataTexture), this.spriteRenderer && this.spriteRenderer.setNumParticles(this._numParticles, this.widthParticleDataTexture, this.heightParticleDataTexture));
  }
  setColorMap(e) {
    if (!this.finalRenderer || !this.particlePropagator)
      throw new Error("Cannot set colormap for uninitialised visualiser.");
    this.colorMap = e, this.finalRenderer.setColorMap(this.colorMap);
    const t = q.computeSpeedCurve(e, this._options);
    this.particlePropagator.setSpeedCurve(t);
  }
  setVelocityImage(e, t) {
    t && this.resetParticles(), this.updateVelocityImage(e);
  }
  async updateOptions(e) {
    if (!this.colorMap || !this.particlePropagator || !this.particleRenderer || !this.finalRenderer)
      throw new Error("Cannot update options for an uninitialised visualiser.");
    if (this._options = { ...this._options, ...e }, this.spriteRenderer === null && this._options.spriteUrl !== void 0) {
      if (!this.programRenderParticles)
        throw new Error("Shaders were not compiled before changing options.");
      const a = await this.createSpriteTexture();
      this.spriteRenderer = new we(this.programRenderParticles, this.width, this.height, this._numParticles, this._options.particleSize, a, this.widthParticleDataTexture, this.heightParticleDataTexture, !0, this._options.maxAge, this._options.growthRate ?? this.DEFAULT_GROWTH_RATE, !0), this.spriteRenderer.initialise();
    } else this.spriteRenderer !== null && this._options.spriteUrl === void 0 && (this.spriteRenderer.destruct(!1), this.spriteRenderer = null);
    this.velocityImage && (this.dtMin = this.computeMinimumTimeStep()), this.particlePropagator.setMaxAge(this._options.maxAge), this.particleRenderer.setMaxAge(this._options.maxAge), this.spriteRenderer && this.spriteRenderer.setMaxAge(this._options.maxAge);
    const t = q.computeSpeedCurve(this.colorMap, this._options);
    this.particlePropagator.setSpeedCurve(t);
    const i = this._options.growthRate ?? this.DEFAULT_GROWTH_RATE;
    this.particleRenderer.particleSize = this._options.particleSize, this.particleRenderer.growthRate = i, this.spriteRenderer && (this.spriteRenderer.particleSize = this._options.particleSize, this.spriteRenderer.growthRate = i), this.finalRenderer.style = this._options.style, this.finalRenderer.particleOverlayOpacity = this._options.particleOverlayOpacity ?? 1;
    const s = this.createParticleTexture();
    this.particleRenderer.setParticleTexture(s);
    const o = Qe(this._options);
    this.particleRenderer.setDoRotateParticles(o);
  }
  renderFrame(e) {
    if (!this.isRendering)
      return;
    if (!this.textureRenderer || !this.particlePropagator || !this.particleRenderer || !this.finalRenderer || !this.previousParticleTexture || !this.currentParticleTexture)
      throw new Error("Visualiser was not initialised before attempting to render frame.");
    e > 0.1 * this._options.maxAge && this.particlePropagator.resetAges();
    const t = e > this.dtMin, i = t ? Math.min(Math.floor(e / this.dtMin), this.MAX_NUM_SUBSTEPS) : 1, s = t ? e / i : e;
    for (let o = 0; o < i; o++) {
      let a = this._options.fadeAmountPerSecond * s;
      const n = 1 / 255;
      if (a < n) {
        const l = a / n;
        a = Math.random() < l ? n : 0;
      }
      this.textureRenderer.render(this.previousParticleTexture, a), this.particlePropagator.update(s), this.particleRenderer.render(this.particlePropagator.buffers), o < i - 1 && this.swapParticleTextures();
    }
    this.finalRenderer.render(this.currentParticleTexture, this.scaling), this.spriteRenderer && this.spriteRenderer.render(this.particlePropagator.buffers, this.scaling), this.swapParticleTextures();
  }
  /**
   * Re-draws the final composite pass with the current scaling, without
   * advancing particles. Use this to render world copies at different offsets:
   * call setScaling() with the shifted bbox, then renderCopy().
   *
   * Must be called after renderFrame() in the same frame. Uses
   * previousParticleTexture because renderFrame() swaps textures at the end.
   */
  renderCopy() {
    this.isRendering && (!this.finalRenderer || !this.previousParticleTexture || (this.finalRenderer.render(this.previousParticleTexture, this.scaling), this.spriteRenderer && this.spriteRenderer.render(this.particlePropagator.buffers, this.scaling)));
  }
  async compileShaderPrograms() {
    const e = new ce(this.gl, mi), t = new ce(this.gl, bi), i = new ce(this.gl, xi), s = new ce(this.gl, yi), o = new he(this.gl, _i), a = new he(this.gl, vi), n = new he(this.gl, wi), l = new he(this.gl, Ti), u = new re(this.gl, e, o, ["v_new_particle_data", "v_new_particle_age"]), c = new re(this.gl, t, a), h = new re(this.gl, i, n), f = new re(this.gl, s, l);
    return await Promise.all([
      u,
      c,
      h,
      f
    ].map((d) => d.link())), [
      u,
      c,
      h,
      f
    ];
  }
  computeMinimumTimeStep() {
    if (!this.velocityImage)
      throw new Error("Cannot compute minimum time step if velocity image was not set.");
    const e = this._options.maxDisplacement / this.width * 2, t = this._options.maxDisplacement / this.height * 2;
    let [i, s] = this.velocityImage.maxVelocity();
    i *= this.height / this.width * this._options.speedFactor, s *= this._options.speedFactor;
    const o = e / i, a = t / s;
    return Math.min(o, a);
  }
  createParticleTexture() {
    const e = this.particleTextureSize, t = this.particleTextureSize, s = new OffscreenCanvas(e, t).getContext("2d");
    if (s === null)
      throw new Error("Could not initialise 2D offscreen canvas.");
    const o = this._options.trailParticleOptions?.shape ?? L.Circle, a = this._options.trailParticleOptions?.aspectRatio ?? 1, n = this._options.particleColor ?? "black";
    if (o === L.Circle) {
      a !== 1 && console.warn("Specifying an aspect ratio is not supported circle-shaped trail particles.");
      const u = 0.5 * this.particleTextureSize, c = u, h = u;
      s.beginPath(), s.arc(c, h, u, 0, 2 * Math.PI, !1), s.fillStyle = n, s.fill();
    } else {
      const u = a >= 1 ? 1 : a, c = a <= 1 ? 1 : 1 / a, h = u * this.particleTextureSize, f = c * this.particleTextureSize, d = 0.5 * (this.particleTextureSize - h), p = 0.5 * (this.particleTextureSize - f);
      s.fillStyle = n, s.fillRect(d, p, h, f);
    }
    const l = s.getImageData(0, 0, e, t).data;
    return Y(this.gl, this.gl.LINEAR, l, e, t);
  }
  async createSpriteTexture() {
    if (!this.options.spriteUrl)
      throw new Error("Cannot create sprite texture if no sprite URL has been specified.");
    const e = new Image();
    e.src = this.options.spriteUrl.toString(), await e.decode();
    const t = this.particleTextureSize, i = this.particleTextureSize, s = await createImageBitmap(e, {
      resizeWidth: t,
      resizeHeight: i,
      resizeQuality: "high"
    });
    return Y(this.gl, this.gl.LINEAR, s, t, i);
  }
  createZeroTexture() {
    const e = new Uint8Array(this.width * this.height * 4);
    return Y(this.gl, this.gl.LINEAR, e, this.width, this.height);
  }
  swapParticleTextures() {
    const e = this.previousParticleTexture;
    this.previousParticleTexture = this.currentParticleTexture, this.currentParticleTexture = e, this.textureRenderer?.swapBuffers();
  }
  resetParticles() {
    this.particlePropagator?.resetBuffers(), this.previousParticleTexture = this.createZeroTexture(), this.currentParticleTexture = this.createZeroTexture(), this.textureRenderer?.resetParticleTextures(this.previousParticleTexture, this.currentParticleTexture);
  }
  updateVelocityImage(e) {
    if (!this.particlePropagator || !this.finalRenderer)
      throw new Error("Cannot set velocity image for uninitialised visualiser.");
    this.velocityImage = e, this.particlePropagator.setVelocityImage(e), this.finalRenderer.setVelocityImage(e), this.dtMin = this.computeMinimumTimeStep();
  }
  static computeSpeedCurve(e, t) {
    return Re.fromExponentFactorAndSpeed(t.speedExponent ?? 1, t.speedFactor, e.end);
  }
}
export {
  Ai as L,
  Je as S,
  L as T,
  de as W,
  Ri as a,
  q as b,
  Ze as c,
  di as d,
  fi as f,
  pt as g
};
