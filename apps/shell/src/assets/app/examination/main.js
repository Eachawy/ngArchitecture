!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 55));
})([
  function(e, t, n) {
    'use strict';
    n.d(t, 'c', function() {
      return o;
    }),
      n.d(t, 'a', function() {
        return i;
      }),
      n.d(t, 'b', function() {
        return u;
      }),
      n.d(t, 'e', function() {
        return a;
      }),
      n.d(t, 'd', function() {
        return s;
      }),
      n.d(t, 'h', function() {
        return c;
      }),
      n.d(t, 'f', function() {
        return l;
      }),
      n.d(t, 'g', function() {
        return f;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = function(e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var i = function() {
      return (i =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function u(e, t, n, r) {
      var o,
        i = arguments.length,
        u =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        u = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (o = e[a]) &&
            (u = (i < 3 ? o(u) : i > 3 ? o(t, n, u) : o(t, n)) || u);
      return i > 3 && u && Object.defineProperty(t, n, u), u;
    }
    function a(e, t) {
      return function(n, r) {
        t(n, r, e);
      };
    }
    function s(e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    }
    function c(e) {
      var t = 'function' == typeof Symbol && e[Symbol.iterator],
        n = 0;
      return t
        ? t.call(e)
        : {
            next: function() {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            }
          };
    }
    function l(e, t) {
      var n = 'function' == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        u = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
          u.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return u;
    }
    function f() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(l(arguments[t]));
      return e;
    }
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n(4),
      i = n(27),
      u = n(3),
      a = n(73),
      s = n(2);
    function c() {
      return function(e) {
        return e.lift(new l(e));
      };
    }
    var l = (function() {
        function e(e) {
          this.connectable = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            var n = this.connectable;
            n._refCount++;
            var r = new f(e, n),
              o = t.subscribe(r);
            return r.closed || (r.connection = n.connect()), o;
          }),
          e
        );
      })(),
      f = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.connectable = n), r;
        }
        return (
          r.c(t, e),
          (t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var t = e._refCount;
              if (t <= 0) this.connection = null;
              else if (((e._refCount = t - 1), t > 1)) this.connection = null;
              else {
                var n = this.connection,
                  r = e._connection;
                (this.connection = null),
                  !r || (n && r !== n) || r.unsubscribe();
              }
            } else this.connection = null;
          }),
          t
        );
      })(s.a),
      d = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (r.source = t),
            (r.subjectFactory = n),
            (r._refCount = 0),
            (r._isComplete = !1),
            r
          );
        }
        return (
          r.c(t, e),
          (t.prototype._subscribe = function(e) {
            return this.getSubject().subscribe(e);
          }),
          (t.prototype.getSubject = function() {
            var e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }),
          (t.prototype.connect = function() {
            var e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new o.a()).add(
                  this.source.subscribe(new h(this.getSubject(), this))
                ),
                e.closed
                  ? ((this._connection = null), (e = o.a.EMPTY))
                  : (this._connection = e)),
              e
            );
          }),
          (t.prototype.refCount = function() {
            return c()(this);
          }),
          t
        );
      })(u.a).prototype,
      p = {
        operator: { value: null },
        _refCount: { value: 0, writable: !0 },
        _subject: { value: null, writable: !0 },
        _connection: { value: null, writable: !0 },
        _subscribe: { value: d._subscribe },
        _isComplete: { value: d._isComplete, writable: !0 },
        getSubject: { value: d.getSubject },
        connect: { value: d.connect },
        refCount: { value: d.refCount }
      },
      h = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.connectable = n), r;
        }
        return (
          r.c(t, e),
          (t.prototype._error = function(t) {
            this._unsubscribe(), e.prototype._error.call(this, t);
          }),
          (t.prototype._complete = function() {
            (this.connectable._isComplete = !0),
              this._unsubscribe(),
              e.prototype._complete.call(this);
          }),
          (t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var t = e._connection;
              (e._refCount = 0),
                (e._subject = null),
                (e._connection = null),
                t && t.unsubscribe();
            }
          }),
          t
        );
      })(i.b);
    s.a;
    var v = (function() {
      function e(e, t) {
        (this.subjectFactory = e), (this.selector = t);
      }
      return (
        (e.prototype.call = function(e, t) {
          var n = this.selector,
            r = this.subjectFactory(),
            o = n(r).subscribe(e);
          return o.add(t.subscribe(r)), o;
        }),
        e
      );
    })();
    function g() {
      return new i.a();
    }
    function y() {
      return function(e) {
        return c()(
          (function(e, t) {
            return function(n) {
              var r;
              if (
                ((r =
                  'function' == typeof e
                    ? e
                    : function() {
                        return e;
                      }),
                'function' == typeof t)
              )
                return n.lift(new v(r, t));
              var o = Object.create(n, p);
              return (o.source = n), (o.subjectFactory = r), o;
            };
          })(g)(e)
        );
      };
    }
    /**
     * @license Angular v7.1.1
     * (c) 2010-2018 Google, Inc. https://angular.io/
     * License: MIT
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function m(e) {
      for (var t in e) if (e[t] === m) return t;
      throw Error('Could not find renamed property on target object.');
    }
    function b(e, t) {
      for (var n in t)
        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ n.d(t, 'ɵangular_packages_core_core_p', function() {
      return Qh;
    }),
      n.d(t, 'ɵangular_packages_core_core_m', function() {
        return Zh;
      }),
      n.d(t, 'ɵangular_packages_core_core_n', function() {
        return qh;
      }),
      n.d(t, 'ɵangular_packages_core_core_o', function() {
        return Wh;
      }),
      n.d(t, 'ɵangular_packages_core_core_g', function() {
        return op;
      }),
      n.d(t, 'ɵangular_packages_core_core_k', function() {
        return Oh;
      }),
      n.d(t, 'ɵangular_packages_core_core_l', function() {
        return Th;
      }),
      n.d(t, 'ɵangular_packages_core_core_c', function() {
        return Fe;
      }),
      n.d(t, 'ɵangular_packages_core_core_d', function() {
        return Jd;
      }),
      n.d(t, 'ɵangular_packages_core_core_e', function() {
        return Bd;
      }),
      n.d(t, 'ɵangular_packages_core_core_f', function() {
        return qd;
      }),
      n.d(t, 'ɵangular_packages_core_core_q', function() {
        return Ep;
      }),
      n.d(t, 'ɵangular_packages_core_core_s', function() {
        return _p;
      }),
      n.d(t, 'ɵangular_packages_core_core_r', function() {
        return bp;
      }),
      n.d(t, 'ɵangular_packages_core_core_v', function() {
        return Dp;
      }),
      n.d(t, 'ɵangular_packages_core_core_t', function() {
        return wp;
      }),
      n.d(t, 'ɵangular_packages_core_core_u', function() {
        return Cp;
      }),
      n.d(t, 'ɵangular_packages_core_core_z', function() {
        return lr;
      }),
      n.d(t, 'ɵangular_packages_core_core_bh', function() {
        return C;
      }),
      n.d(t, 'ɵangular_packages_core_core_ba', function() {
        return ha;
      }),
      n.d(t, 'ɵangular_packages_core_core_bb', function() {
        return Sn;
      }),
      n.d(t, 'ɵangular_packages_core_core_bc', function() {
        return Pn;
      }),
      n.d(t, 'ɵangular_packages_core_core_bd', function() {
        return Yn;
      }),
      n.d(t, 'ɵangular_packages_core_core_bg', function() {
        return Go;
      }),
      n.d(t, 'ɵangular_packages_core_core_bk', function() {
        return Lt;
      }),
      n.d(t, 'ɵangular_packages_core_core_h', function() {
        return Ra;
      }),
      n.d(t, 'ɵangular_packages_core_core_i', function() {
        return Ia;
      }),
      n.d(t, 'ɵangular_packages_core_core_j', function() {
        return ka;
      }),
      n.d(t, 'ɵangular_packages_core_core_a', function() {
        return V;
      }),
      n.d(t, 'ɵangular_packages_core_core_b', function() {
        return L;
      }),
      n.d(t, 'ɵangular_packages_core_core_bi', function() {
        return m;
      }),
      n.d(t, 'ɵangular_packages_core_core_w', function() {
        return Gg;
      }),
      n.d(t, 'ɵangular_packages_core_core_x', function() {
        return Om;
      }),
      n.d(t, 'ɵangular_packages_core_core_y', function() {
        return iv;
      }),
      n.d(t, 'createPlatform', function() {
        return qp;
      }),
      n.d(t, 'assertPlatform', function() {
        return Qp;
      }),
      n.d(t, 'destroyPlatform', function() {
        return Kp;
      }),
      n.d(t, 'getPlatform', function() {
        return Yp;
      }),
      n.d(t, 'PlatformRef', function() {
        return $p;
      }),
      n.d(t, 'ApplicationRef', function() {
        return Xp;
      }),
      n.d(t, 'createPlatformFactory', function() {
        return Wp;
      }),
      n.d(t, 'NgProbeToken', function() {
        return Zp;
      }),
      n.d(t, 'enableProdMode', function() {
        return ac;
      }),
      n.d(t, 'isDevMode', function() {
        return uc;
      }),
      n.d(t, 'APP_ID', function() {
        return rp;
      }),
      n.d(t, 'PACKAGE_ROOT_URL', function() {
        return lp;
      }),
      n.d(t, 'PLATFORM_INITIALIZER', function() {
        return ap;
      }),
      n.d(t, 'PLATFORM_ID', function() {
        return sp;
      }),
      n.d(t, 'APP_BOOTSTRAP_LISTENER', function() {
        return cp;
      }),
      n.d(t, 'APP_INITIALIZER', function() {
        return tp;
      }),
      n.d(t, 'ApplicationInitStatus', function() {
        return np;
      }),
      n.d(t, 'DebugElement', function() {
        return _h;
      }),
      n.d(t, 'DebugNode', function() {
        return bh;
      }),
      n.d(t, 'asNativeElements', function() {
        return wh;
      }),
      n.d(t, 'getDebugNode', function() {
        return Dh;
      }),
      n.d(t, 'Testability', function() {
        return Np;
      }),
      n.d(t, 'TestabilityRegistry', function() {
        return Vp;
      }),
      n.d(t, 'setTestabilityGetter', function() {
        return Lp;
      }),
      n.d(t, 'TRANSLATIONS', function() {
        return Hh;
      }),
      n.d(t, 'TRANSLATIONS_FORMAT', function() {
        return zh;
      }),
      n.d(t, 'LOCALE_ID', function() {
        return Uh;
      }),
      n.d(t, 'MissingTranslationStrategy', function() {
        return Gh;
      }),
      n.d(t, 'ApplicationModule', function() {
        return Kh;
      }),
      n.d(t, 'wtfCreateScope', function() {
        return Sp;
      }),
      n.d(t, 'wtfLeave', function() {
        return xp;
      }),
      n.d(t, 'wtfStartTimeRange', function() {
        return Ap;
      }),
      n.d(t, 'wtfEndTimeRange', function() {
        return jp;
      }),
      n.d(t, 'Type', function() {
        return wf;
      }),
      n.d(t, 'EventEmitter', function() {
        return Pl;
      }),
      n.d(t, 'ErrorHandler', function() {
        return Id;
      }),
      n.d(t, 'Sanitizer', function() {
        return df;
      }),
      n.d(t, 'SecurityContext', function() {
        return ff;
      }),
      n.d(t, 'ANALYZE_FOR_ENTRY_COMPONENTS', function() {
        return B;
      }),
      n.d(t, 'Attribute', function() {
        return U;
      }),
      n.d(t, 'ContentChild', function() {
        return G;
      }),
      n.d(t, 'ContentChildren', function() {
        return z;
      }),
      n.d(t, 'Query', function() {
        return H;
      }),
      n.d(t, 'ViewChild', function() {
        return q;
      }),
      n.d(t, 'ViewChildren', function() {
        return Z;
      }),
      n.d(t, 'Component', function() {
        return Yf;
      }),
      n.d(t, 'Directive', function() {
        return Kf;
      }),
      n.d(t, 'HostBinding', function() {
        return td;
      }),
      n.d(t, 'HostListener', function() {
        return nd;
      }),
      n.d(t, 'Input', function() {
        return Xf;
      }),
      n.d(t, 'Output', function() {
        return ed;
      }),
      n.d(t, 'Pipe', function() {
        return $f;
      }),
      n.d(t, 'CUSTOM_ELEMENTS_SCHEMA', function() {
        return dd;
      }),
      n.d(t, 'NO_ERRORS_SCHEMA', function() {
        return pd;
      }),
      n.d(t, 'NgModule', function() {
        return hd;
      }),
      n.d(t, 'ViewEncapsulation', function() {
        return ee;
      }),
      n.d(t, 'Version', function() {
        return Qs;
      }),
      n.d(t, 'VERSION', function() {
        return Ks;
      }),
      n.d(t, 'defineInjectable', function() {
        return A;
      }),
      n.d(t, 'defineInjector', function() {
        return j;
      }),
      n.d(t, 'forwardRef', function() {
        return Tr;
      }),
      n.d(t, 'resolveForwardRef', function() {
        return kr;
      }),
      n.d(t, 'Injectable', function() {
        return Cd;
      }),
      n.d(t, 'INJECTOR', function() {
        return Nr;
      }),
      n.d(t, 'Injector', function() {
        return Lr;
      }),
      n.d(t, 'inject', function() {
        return Ne;
      }),
      n.d(t, 'InjectFlags', function() {
        return Te;
      }),
      n.d(t, 'ReflectiveInjector', function() {
        return $d;
      }),
      n.d(t, 'createInjector', function() {
        return ps;
      }),
      n.d(t, 'ResolvedReflectiveFactory', function() {
        return zd;
      }),
      n.d(t, 'ReflectiveKey', function() {
        return Nd;
      }),
      n.d(t, 'InjectionToken', function() {
        return T;
      }),
      n.d(t, 'Inject', function() {
        return xe;
      }),
      n.d(t, 'Optional', function() {
        return Ae;
      }),
      n.d(t, 'Self', function() {
        return je;
      }),
      n.d(t, 'SkipSelf', function() {
        return Re;
      }),
      n.d(t, 'Host', function() {
        return Ie;
      }),
      n.d(t, 'NgZone', function() {
        return Rp;
      }),
      n.d(t, 'ɵNoopNgZone', function() {
        return Fp;
      }),
      n.d(t, 'RenderComponentType', function() {
        return Ls;
      }),
      n.d(t, 'Renderer', function() {
        return Us;
      }),
      n.d(t, 'Renderer2', function() {
        return Zs;
      }),
      n.d(t, 'RendererFactory2', function() {
        return zs;
      }),
      n.d(t, 'RendererStyleFlags2', function() {
        return Gs;
      }),
      n.d(t, 'RootRenderer', function() {
        return Hs;
      }),
      n.d(t, 'COMPILER_OPTIONS', function() {
        return yp;
      }),
      n.d(t, 'Compiler', function() {
        return gp;
      }),
      n.d(t, 'CompilerFactory', function() {
        return mp;
      }),
      n.d(t, 'ModuleWithComponentFactories', function() {
        return dp;
      }),
      n.d(t, 'ComponentFactory', function() {
        return js;
      }),
      n.d(t, 'ComponentRef', function() {
        return As;
      }),
      n.d(t, 'ComponentFactoryResolver', function() {
        return ks;
      }),
      n.d(t, 'ElementRef', function() {
        return Fs;
      }),
      n.d(t, 'NgModuleFactory', function() {
        return ro;
      }),
      n.d(t, 'NgModuleRef', function() {
        return no;
      }),
      n.d(t, 'NgModuleFactoryLoader', function() {
        return th;
      }),
      n.d(t, 'getModuleFactory', function() {
        return oh;
      }),
      n.d(t, 'QueryList', function() {
        return ih;
      }),
      n.d(t, 'SystemJsNgModuleLoader', function() {
        return sh;
      }),
      n.d(t, 'SystemJsNgModuleLoaderConfig', function() {
        return uh;
      }),
      n.d(t, 'TemplateRef', function() {
        return Fl;
      }),
      n.d(t, 'ViewContainerRef', function() {
        return lh;
      }),
      n.d(t, 'EmbeddedViewRef', function() {
        return yh;
      }),
      n.d(t, 'ViewRef', function() {
        return gh;
      }),
      n.d(t, 'ChangeDetectionStrategy', function() {
        return W;
      }),
      n.d(t, 'ChangeDetectorRef', function() {
        return ph;
      }),
      n.d(t, 'DefaultIterableDiffer', function() {
        return xh;
      }),
      n.d(t, 'IterableDiffers', function() {
        return Ph;
      }),
      n.d(t, 'KeyValueDiffers', function() {
        return Fh;
      }),
      n.d(t, 'SimpleChange', function() {
        return Rt;
      }),
      n.d(t, 'WrappedValue', function() {
        return jt;
      }),
      n.d(t, 'platformCore', function() {
        return Bh;
      }),
      n.d(t, 'ɵALLOW_MULTIPLE_PLATFORMS', function() {
        return Gp;
      }),
      n.d(t, 'ɵAPP_ID_RANDOM_PROVIDER', function() {
        return ip;
      }),
      n.d(t, 'ɵdefaultIterableDiffers', function() {
        return Vh;
      }),
      n.d(t, 'ɵdefaultKeyValueDiffers', function() {
        return Lh;
      }),
      n.d(t, 'ɵdevModeEqual', function() {
        return At;
      }),
      n.d(t, 'ɵisListLikeIterable', function() {
        return It;
      }),
      n.d(t, 'ɵChangeDetectorStatus', function() {
        return Q;
      }),
      n.d(t, 'ɵisDefaultChangeDetectionStrategy', function() {
        return K;
      }),
      n.d(t, 'ɵConsole', function() {
        return fp;
      }),
      n.d(t, 'ɵgetInjectableDef', function() {
        return R;
      }),
      n.d(t, 'ɵinject', function() {
        return Ne;
      }),
      n.d(t, 'ɵsetCurrentInjector', function() {
        return Me;
      }),
      n.d(t, 'ɵAPP_ROOT', function() {
        return as;
      }),
      n.d(t, 'ɵivyEnabled', function() {
        return $h;
      }),
      n.d(t, 'ɵComponentFactory', function() {
        return js;
      }),
      n.d(t, 'ɵCodegenComponentFactoryResolver', function() {
        return Ms;
      }),
      n.d(t, 'ɵresolveComponentResources', function() {
        return Y;
      }),
      n.d(t, 'ɵReflectionCapabilities', function() {
        return Sf;
      }),
      n.d(t, 'ɵRenderDebugInfo', function() {
        return Bs;
      }),
      n.d(t, 'ɵ_sanitizeHtml', function() {
        return Ac;
      }),
      n.d(t, 'ɵ_sanitizeStyle', function() {
        return vf;
      }),
      n.d(t, 'ɵ_sanitizeUrl', function() {
        return fc;
      }),
      n.d(t, 'ɵglobal', function() {
        return re;
      }),
      n.d(t, 'ɵlooseIdentical', function() {
        return se;
      }),
      n.d(t, 'ɵstringify', function() {
        return ce;
      }),
      n.d(t, 'ɵmakeDecorator', function() {
        return F;
      }),
      n.d(t, 'ɵisObservable', function() {
        return ep;
      }),
      n.d(t, 'ɵisPromise', function() {
        return Xd;
      }),
      n.d(t, 'ɵclearOverrides', function() {
        return jm;
      }),
      n.d(t, 'ɵinitServicesIfNeeded', function() {
        return Uy;
      }),
      n.d(t, 'ɵoverrideComponentView', function() {
        return Am;
      }),
      n.d(t, 'ɵoverrideProvider', function() {
        return xm;
      }),
      n.d(t, 'ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR', function() {
        return $g;
      }),
      n.d(t, 'ɵdefineBase', function() {
        return me;
      }),
      n.d(t, 'ɵdefineComponent', function() {
        return pe;
      }),
      n.d(t, 'ɵdefineDirective', function() {
        return be;
      }),
      n.d(t, 'ɵdefinePipe', function() {
        return _e;
      }),
      n.d(t, 'ɵdefineNgModule', function() {
        return ge;
      }),
      n.d(t, 'ɵdetectChanges', function() {
        return Ku;
      }),
      n.d(t, 'ɵrenderComponent', function() {
        return Ka;
      }),
      n.d(t, 'ɵRender3ComponentFactory', function() {
        return nc;
      }),
      n.d(t, 'ɵRender3ComponentRef', function() {
        return rc;
      }),
      n.d(t, 'ɵdirectiveInject', function() {
        return ba;
      }),
      n.d(t, 'ɵinjectAttribute', function() {
        return _a;
      }),
      n.d(t, 'ɵgetFactoryOf', function() {
        return mr;
      }),
      n.d(t, 'ɵgetInheritedFactory', function() {
        return br;
      }),
      n.d(t, 'ɵtemplateRefExtractor', function() {
        return tf;
      }),
      n.d(t, 'ɵProvidersFeature', function() {
        return xs;
      }),
      n.d(t, 'ɵInheritDefinitionFeature', function() {
        return ns;
      }),
      n.d(t, 'ɵNgOnChangesFeature', function() {
        return is;
      }),
      n.d(t, 'ɵLifecycleHooksFeature', function() {
        return Xa;
      }),
      n.d(t, 'ɵRender3NgModuleRef', function() {
        return vl;
      }),
      n.d(t, 'ɵmarkDirty', function() {
        return Ju;
      }),
      n.d(t, 'ɵNgModuleFactory', function() {
        return gl;
      }),
      n.d(t, 'ɵNO_CHANGE', function() {
        return Ho;
      }),
      n.d(t, 'ɵcontainer', function() {
        return Mu;
      }),
      n.d(t, 'ɵnextContext', function() {
        return Hi;
      }),
      n.d(t, 'ɵelementStart', function() {
        return Ji;
      }),
      n.d(t, 'ɵnamespaceHTML', function() {
        return Qi;
      }),
      n.d(t, 'ɵnamespaceMathML', function() {
        return Wi;
      }),
      n.d(t, 'ɵnamespaceSVG', function() {
        return qi;
      }),
      n.d(t, 'ɵelement', function() {
        return Ki;
      }),
      n.d(t, 'ɵlistener', function() {
        return uu;
      }),
      n.d(t, 'ɵtext', function() {
        return wu;
      }),
      n.d(t, 'ɵembeddedViewStart', function() {
        return Vu;
      }),
      n.d(t, 'ɵquery', function() {
        return Xl;
      }),
      n.d(t, 'ɵregisterContentQuery', function() {
        return wa;
      }),
      n.d(t, 'ɵprojection', function() {
        return Gu;
      }),
      n.d(t, 'ɵbind', function() {
        return Xu;
      }),
      n.d(t, 'ɵinterpolation1', function() {
        return ta;
      }),
      n.d(t, 'ɵinterpolation2', function() {
        return na;
      }),
      n.d(t, 'ɵinterpolation3', function() {
        return ra;
      }),
      n.d(t, 'ɵinterpolation4', function() {
        return oa;
      }),
      n.d(t, 'ɵinterpolation5', function() {
        return ia;
      }),
      n.d(t, 'ɵinterpolation6', function() {
        return ua;
      }),
      n.d(t, 'ɵinterpolation7', function() {
        return aa;
      }),
      n.d(t, 'ɵinterpolation8', function() {
        return sa;
      }),
      n.d(t, 'ɵinterpolationV', function() {
        return ea;
      }),
      n.d(t, 'ɵpipeBind1', function() {
        return jl;
      }),
      n.d(t, 'ɵpipeBind2', function() {
        return Rl;
      }),
      n.d(t, 'ɵpipeBind3', function() {
        return Il;
      }),
      n.d(t, 'ɵpipeBind4', function() {
        return Tl;
      }),
      n.d(t, 'ɵpipeBindV', function() {
        return kl;
      }),
      n.d(t, 'ɵpureFunction0', function() {
        return ml;
      }),
      n.d(t, 'ɵpureFunction1', function() {
        return bl;
      }),
      n.d(t, 'ɵpureFunction2', function() {
        return _l;
      }),
      n.d(t, 'ɵpureFunction3', function() {
        return wl;
      }),
      n.d(t, 'ɵpureFunction4', function() {
        return Cl;
      }),
      n.d(t, 'ɵpureFunction5', function() {
        return Dl;
      }),
      n.d(t, 'ɵpureFunction6', function() {
        return El;
      }),
      n.d(t, 'ɵpureFunction7', function() {
        return Ol;
      }),
      n.d(t, 'ɵpureFunction8', function() {
        return Sl;
      }),
      n.d(t, 'ɵpureFunctionV', function() {
        return xl;
      }),
      n.d(t, 'ɵgetCurrentView', function() {
        return Dn;
      }),
      n.d(t, 'ɵrestoreView', function() {
        return On;
      }),
      n.d(t, 'ɵcontainerRefreshStart', function() {
        return Fu;
      }),
      n.d(t, 'ɵcontainerRefreshEnd', function() {
        return Nu;
      }),
      n.d(t, 'ɵqueryRefresh', function() {
        return ef;
      }),
      n.d(t, 'ɵloadQueryList', function() {
        return fa;
      }),
      n.d(t, 'ɵelementEnd', function() {
        return cu;
      }),
      n.d(t, 'ɵelementProperty', function() {
        return fu;
      }),
      n.d(t, 'ɵprojectionDef', function() {
        return Hu;
      }),
      n.d(t, 'ɵreference', function() {
        return la;
      }),
      n.d(t, 'ɵenableBindings', function() {
        return wn;
      }),
      n.d(t, 'ɵdisableBindings', function() {
        return Cn;
      }),
      n.d(t, 'ɵelementAttribute', function() {
        return lu;
      }),
      n.d(t, 'ɵelementContainerStart', function() {
        return Yi;
      }),
      n.d(t, 'ɵelementContainerEnd', function() {
        return $i;
      }),
      n.d(t, 'ɵelementStyling', function() {
        return gu;
      }),
      n.d(t, 'ɵelementStylingMap', function() {
        return bu;
      }),
      n.d(t, 'ɵelementStyleProp', function() {
        return mu;
      }),
      n.d(t, 'ɵelementStylingApply', function() {
        return yu;
      }),
      n.d(t, 'ɵelementClassProp', function() {
        return vu;
      }),
      n.d(t, 'ɵtextBinding', function() {
        return Cu;
      }),
      n.d(t, 'ɵtemplate', function() {
        return ku;
      }),
      n.d(t, 'ɵembeddedViewEnd', function() {
        return Lu;
      }),
      n.d(t, 'ɵstore', function() {
        return ca;
      }),
      n.d(t, 'ɵload', function() {
        return da;
      }),
      n.d(t, 'ɵpipe', function() {
        return Al;
      }),
      n.d(t, 'ɵwhenRendered', function() {
        return es;
      }),
      n.d(t, 'ɵi18n', function() {
        return nl;
      }),
      n.d(t, 'ɵi18nAttributes', function() {
        return rl;
      }),
      n.d(t, 'ɵi18nExp', function() {
        return ul;
      }),
      n.d(t, 'ɵi18nStart', function() {
        return Yc;
      }),
      n.d(t, 'ɵi18nEnd', function() {
        return Xc;
      }),
      n.d(t, 'ɵi18nApply', function() {
        return al;
      }),
      n.d(t, 'ɵi18nPostprocess', function() {
        return Jc;
      }),
      n.d(t, 'ɵWRAP_RENDERER_FACTORY2', function() {
        return ec;
      }),
      n.d(t, 'ɵsetClassMetadata', function() {
        return yl;
      }),
      n.d(t, 'ɵRender3DebugRendererFactory2', function() {
        return Tm;
      }),
      n.d(t, 'ɵcompileComponent', function() {
        return Uf;
      }),
      n.d(t, 'ɵcompileDirective', function() {
        return Hf;
      }),
      n.d(t, 'ɵcompileNgModule', function() {
        return Mf;
      }),
      n.d(t, 'ɵcompileNgModuleDefs', function() {
        return Pf;
      }),
      n.d(t, 'ɵpatchComponentDefWithScope', function() {
        return Ff;
      }),
      n.d(t, 'ɵcompilePipe', function() {
        return Qf;
      }),
      n.d(t, 'ɵsanitizeHtml', function() {
        return gf;
      }),
      n.d(t, 'ɵsanitizeStyle', function() {
        return yf;
      }),
      n.d(t, 'ɵsanitizeUrl', function() {
        return mf;
      }),
      n.d(t, 'ɵsanitizeResourceUrl', function() {
        return bf;
      }),
      n.d(t, 'ɵbypassSanitizationTrustHtml', function() {
        return of;
      }),
      n.d(t, 'ɵbypassSanitizationTrustStyle', function() {
        return uf;
      }),
      n.d(t, 'ɵbypassSanitizationTrustScript', function() {
        return af;
      }),
      n.d(t, 'ɵbypassSanitizationTrustUrl', function() {
        return sf;
      }),
      n.d(t, 'ɵbypassSanitizationTrustResourceUrl', function() {
        return cf;
      }),
      n.d(t, 'ɵgetContext', function() {
        return _r;
      }),
      n.d(t, 'ɵbindPlayerFactory', function() {
        return zo;
      }),
      n.d(t, 'ɵaddPlayer', function() {
        return za;
      }),
      n.d(t, 'ɵgetPlayers', function() {
        return Ga;
      }),
      n.d(t, 'ɵcompileNgModuleFactory__POST_R3__', function() {
        return zp;
      }),
      n.d(t, 'ɵSWITCH_COMPILE_COMPONENT__POST_R3__', function() {
        return rd;
      }),
      n.d(t, 'ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__', function() {
        return od;
      }),
      n.d(t, 'ɵSWITCH_COMPILE_PIPE__POST_R3__', function() {
        return id;
      }),
      n.d(t, 'ɵSWITCH_COMPILE_NGMODULE__POST_R3__', function() {
        return vd;
      }),
      n.d(t, 'ɵSWITCH_COMPILE_INJECTABLE__POST_R3__', function() {
        return Dd;
      }),
      n.d(t, 'ɵSWITCH_IVY_ENABLED__POST_R3__', function() {
        return Yh;
      }),
      n.d(t, 'ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__', function() {
        return hh;
      }),
      n.d(t, 'ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__', function() {
        return Ns;
      }),
      n.d(t, 'ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__', function() {
        return Nl;
      }),
      n.d(t, 'ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__', function() {
        return fh;
      }),
      n.d(t, 'ɵSWITCH_RENDERER2_FACTORY__POST_R3__', function() {
        return qs;
      }),
      n.d(t, 'ɵpublishGlobalUtil', function() {
        return Qa;
      }),
      n.d(t, 'ɵpublishDefaultGlobalUtils', function() {
        return Wa;
      }),
      n.d(t, 'ɵSWITCH_INJECTOR_FACTORY__POST_R3__', function() {
        return Br;
      }),
      n.d(t, 'ɵregisterModuleFactory', function() {
        return rh;
      }),
      n.d(t, 'ɵEMPTY_ARRAY', function() {
        return Wv;
      }),
      n.d(t, 'ɵEMPTY_MAP', function() {
        return Qv;
      }),
      n.d(t, 'ɵand', function() {
        return Kv;
      }),
      n.d(t, 'ɵccf', function() {
        return gg;
      }),
      n.d(t, 'ɵcmf', function() {
        return Rm;
      }),
      n.d(t, 'ɵcrt', function() {
        return gv;
      }),
      n.d(t, 'ɵdid', function() {
        return Ug;
      }),
      n.d(t, 'ɵeld', function() {
        return Yv;
      }),
      n.d(t, 'ɵelementEventFullName', function() {
        return xv;
      }),
      n.d(t, 'ɵgetComponentViewDefinitionFactory', function() {
        return yg;
      }),
      n.d(t, 'ɵinlineInterpolate', function() {
        return Zv;
      }),
      n.d(t, 'ɵinterpolate', function() {
        return Gv;
      }),
      n.d(t, 'ɵmod', function() {
        return ug;
      }),
      n.d(t, 'ɵmpd', function() {
        return ig;
      }),
      n.d(t, 'ɵncd', function() {
        return cy;
      }),
      n.d(t, 'ɵnov', function() {
        return Ag;
      }),
      n.d(t, 'ɵpid', function() {
        return Hg;
      }),
      n.d(t, 'ɵprd', function() {
        return zg;
      }),
      n.d(t, 'ɵpad', function() {
        return dy;
      }),
      n.d(t, 'ɵpod', function() {
        return py;
      }),
      n.d(t, 'ɵppd', function() {
        return fy;
      }),
      n.d(t, 'ɵqud', function() {
        return oy;
      }),
      n.d(t, 'ɵted', function() {
        return vy;
      }),
      n.d(t, 'ɵunv', function() {
        return pv;
      }),
      n.d(t, 'ɵvid', function() {
        return my;
      });
    var _ = m({ ngComponentDef: m }),
      w = m({ ngDirectiveDef: m }),
      C = m({ ngInjectableDef: m }),
      D = m({ ngInjectorDef: m }),
      E = m({ ngPipeDef: m }),
      O = m({ ngModuleDef: m }),
      S = m({ ngBaseDef: m }),
      x = m({ __NG_ELEMENT_ID__: m });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function A(e) {
      return {
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
      };
    }
    function j(e) {
      return {
        factory: e.factory,
        providers: e.providers || [],
        imports: e.imports || []
      };
    }
    function R(e) {
      return e.hasOwnProperty(C) ? e[C] : null;
    }
    function I(e) {
      return e.hasOwnProperty(D) ? e[D] : null;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var T = (function() {
        function e(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef =
              void 0 !== t
                ? A({ providedIn: t.providedIn || 'root', factory: t.factory })
                : void 0);
        }
        return (
          (e.prototype.toString = function() {
            return 'InjectionToken ' + this._desc;
          }),
          e
        );
      })(),
      k = '__annotations__',
      M = '__parameters__',
      P = '__prop__metadata__';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function F(e, t, n, o, i) {
      var u = N(t);
      function a() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        if (this instanceof a)
          return u.call.apply(u, Object(r.g)([this], t)), this;
        var s = new ((e = a).bind.apply(e, Object(r.g)([void 0], t)))();
        return function(e) {
          return (
            i && i.apply(void 0, Object(r.g)([e], t)),
            (e.hasOwnProperty(k)
              ? e[k]
              : Object.defineProperty(e, k, { value: [] })[k]
            ).push(s),
            o && o(e),
            e
          );
        };
      }
      return (
        n && (a.prototype = Object.create(n.prototype)),
        (a.prototype.ngMetadataName = e),
        (a.annotationCls = a),
        a
      );
    }
    function N(e) {
      return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        if (e) {
          var o = e.apply(void 0, Object(r.g)(t));
          for (var i in o) this[i] = o[i];
        }
      };
    }
    function V(e, t, n) {
      var o = N(t);
      function i() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        if (this instanceof i) return o.apply(this, t), this;
        var u = new ((e = i).bind.apply(e, Object(r.g)([void 0], t)))();
        return (a.annotation = u), a;
        function a(e, t, n) {
          for (
            var r = e.hasOwnProperty(M)
              ? e[M]
              : Object.defineProperty(e, M, { value: [] })[M];
            r.length <= n;

          )
            r.push(null);
          return (r[n] = r[n] || []).push(u), e;
        }
      }
      return (
        n && (i.prototype = Object.create(n.prototype)),
        (i.prototype.ngMetadataName = e),
        (i.annotationCls = i),
        i
      );
    }
    function L(e, t, n, o) {
      var i = N(t);
      function u() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        if (this instanceof u) return i.apply(this, t), this;
        var a = new ((e = u).bind.apply(e, Object(r.g)([void 0], t)))();
        return function(e, n) {
          var i = e.constructor,
            u = i.hasOwnProperty(P)
              ? i[P]
              : Object.defineProperty(i, P, { value: {} })[P];
          (u[n] = (u.hasOwnProperty(n) && u[n]) || []),
            u[n].unshift(a),
            o && o.apply(void 0, Object(r.g)([e, n], t));
        };
      }
      return (
        n && (u.prototype = Object.create(n.prototype)),
        (u.prototype.ngMetadataName = e),
        (u.annotationCls = u),
        u
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var B = new T('AnalyzeForEntryComponents'),
      U = V('Attribute', function(e) {
        return { attributeName: e };
      }),
      H = (function() {
        return function() {};
      })(),
      z = L(
        'ContentChildren',
        function(e, t) {
          return (
            void 0 === t && (t = {}),
            Object(r.a)(
              { selector: e, first: !1, isViewQuery: !1, descendants: !1 },
              t
            )
          );
        },
        H
      ),
      G = L(
        'ContentChild',
        function(e, t) {
          return (
            void 0 === t && (t = {}),
            Object(r.a)(
              { selector: e, first: !0, isViewQuery: !1, descendants: !0 },
              t
            )
          );
        },
        H
      ),
      Z = L(
        'ViewChildren',
        function(e, t) {
          return (
            void 0 === t && (t = {}),
            Object(r.a)(
              { selector: e, first: !1, isViewQuery: !0, descendants: !0 },
              t
            )
          );
        },
        H
      ),
      q = L(
        'ViewChild',
        function(e, t) {
          return Object(r.a)(
            { selector: e, first: !0, isViewQuery: !0, descendants: !0 },
            t
          );
        },
        H
      ),
      W = (function(e) {
        return (
          (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e
        );
      })({}),
      Q = (function(e) {
        return (
          (e[(e.CheckOnce = 0)] = 'CheckOnce'),
          (e[(e.Checked = 1)] = 'Checked'),
          (e[(e.CheckAlways = 2)] = 'CheckAlways'),
          (e[(e.Detached = 3)] = 'Detached'),
          (e[(e.Errored = 4)] = 'Errored'),
          (e[(e.Destroyed = 5)] = 'Destroyed'),
          e
        );
      })({});
    function K(e) {
      return null == e || e === W.Default;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Y(e) {
      var t = [],
        n = new Map();
      function r(r) {
        var o = n.get(r);
        if (!o) {
          var i = e(r);
          n.set(r, (o = i.then(X))), t.push(o);
        }
        return o;
      }
      return (
        $.forEach(function(e) {
          e.templateUrl &&
            r(e.templateUrl).then(function(t) {
              (e.template = t), (e.templateUrl = void 0);
            });
          var t = e.styleUrls,
            n = e.styles || (e.styles = []),
            o = e.styles.length;
          t &&
            t.forEach(function(i, u) {
              n.push(''),
                r(i).then(function(r) {
                  (n[o + u] = r),
                    t.splice(t.indexOf(i), 1),
                    0 == t.length && (e.styleUrls = void 0);
                });
            });
        }),
        $.clear(),
        Promise.all(t).then(function() {
          return null;
        })
      );
    }
    var $ = new Set();
    function J(e) {
      return e.templateUrl || (e.styleUrls && e.styleUrls.length);
    }
    function X(e) {
      return 'string' == typeof e ? e : e.text();
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var ee = (function(e) {
        return (
          (e[(e.Emulated = 0)] = 'Emulated'),
          (e[(e.Native = 1)] = 'Native'),
          (e[(e.None = 2)] = 'None'),
          (e[(e.ShadowDom = 3)] = 'ShadowDom'),
          e
        );
      })({}),
      te = 'undefined' != typeof window && window,
      ne =
        'undefined' != typeof self &&
        'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        self,
      re = ('undefined' != typeof global && global) || te || ne,
      oe = Promise.resolve(0),
      ie = null;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function ue() {
      if (!ie) {
        var e = re.Symbol;
        if (e && e.iterator) ie = e.iterator;
        else
          for (
            var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
            n < t.length;
            ++n
          ) {
            var r = t[n];
            'entries' !== r &&
              'size' !== r &&
              Map.prototype[r] === Map.prototype.entries &&
              (ie = r);
          }
      }
      return ie;
    }
    function ae(e) {
      'undefined' == typeof Zone
        ? oe.then(function() {
            e && e.apply(null, null);
          })
        : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
    }
    function se(e, t) {
      return (
        e === t ||
        ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
      );
    }
    function ce(e) {
      if ('string' == typeof e) return e;
      if (e instanceof Array) return '[' + e.map(ce).join(', ') + ']';
      if (null == e) return '' + e;
      if (e.overriddenName) return '' + e.overriddenName;
      if (e.name) return '' + e.name;
      var t = e.toString();
      if (null == t) return '' + t;
      var n = t.indexOf('\n');
      return -1 === n ? t : t.substring(0, n);
    }
    'undefined' == typeof ngDevMode || ngDevMode;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var le = {},
      fe = [];
    'undefined' != typeof ngDevMode && ngDevMode;
    var de = 0;
    function pe(e) {
      var t = e.type,
        n = t.prototype,
        r = {},
        o = {
          type: t,
          providersResolver: null,
          consts: e.consts,
          vars: e.vars,
          hostVars: e.hostVars || 0,
          factory: e.factory,
          template: e.template || null,
          hostBindings: e.hostBindings || null,
          contentQueries: e.contentQueries || null,
          contentQueriesRefresh: e.contentQueriesRefresh || null,
          attributes: e.attributes || null,
          declaredInputs: r,
          inputs: null,
          outputs: null,
          exportAs: e.exportAs || null,
          onInit: n.ngOnInit || null,
          doCheck: n.ngDoCheck || null,
          afterContentInit: n.ngAfterContentInit || null,
          afterContentChecked: n.ngAfterContentChecked || null,
          afterViewInit: n.ngAfterViewInit || null,
          afterViewChecked: n.ngAfterViewChecked || null,
          onDestroy: n.ngOnDestroy || null,
          onPush: e.changeDetection === W.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          selectors: e.selectors,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          data: e.data || {},
          encapsulation: e.encapsulation || ee.Emulated,
          id: 'c',
          styles: e.styles || fe,
          _: null
        };
      return (
        (o._ = (function(e) {
          return '' + { toString: e };
        })(
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */ function() {
            var t = e.directives,
              n = e.features,
              i = e.pipes;
            (o.id += de++),
              (o.inputs = ye(e.inputs, r)),
              (o.outputs = ye(e.outputs)),
              n &&
                n.forEach(function(e) {
                  return e(o);
                }),
              (o.directiveDefs = t
                ? function() {
                    return ('function' == typeof t ? t() : t).map(he);
                  }
                : null),
              (o.pipeDefs = i
                ? function() {
                    return ('function' == typeof i ? i() : i).map(ve);
                  }
                : null);
          }
        )),
        o
      );
    }
    function he(e) {
      var t = we(e) || Ce(e);
      if (ngDevMode && !t)
        throw new Error(
          "'" + e.name + "' is neither 'ComponentType' or 'DirectiveType'."
        );
      return t;
    }
    function ve(e) {
      var t = De(e);
      if (ngDevMode && !t)
        throw new Error("'" + e.name + "' is not a 'PipeType'.");
      return t;
    }
    function ge(e) {
      return {
        type: e.type,
        bootstrap: e.bootstrap || fe,
        declarations: e.declarations || fe,
        imports: e.imports || fe,
        exports: e.exports || fe,
        transitiveCompileScopes: null
      };
    }
    function ye(e, t) {
      if (null == e) return le;
      var n = {};
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var o = e[r],
            i = o;
          Array.isArray(o) && ((i = o[1]), (o = o[0])),
            (n[o] = r),
            t && (t[i] = r);
        }
      return n;
    }
    function me(e) {
      var t = {};
      return {
        inputs: ye(e.inputs, t),
        declaredInputs: t,
        outputs: ye(e.outputs)
      };
    }
    var be = pe;
    function _e(e) {
      return {
        name: e.name,
        factory: e.factory,
        pure: !1 !== e.pure,
        onDestroy: e.type.prototype.ngOnDestroy || null
      };
    }
    function we(e) {
      return e[_] || null;
    }
    function Ce(e) {
      return e[w] || null;
    }
    function De(e) {
      return e[E] || null;
    }
    function Ee(e) {
      return e[O] || null;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function Oe() {
      var e = re.ng;
      if (!e || !e.ɵcompilerFacade)
        throw new Error(
          "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
        );
      return e.ɵcompilerFacade;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Se,
      xe = V('Inject', function(e) {
        return { token: e };
      }),
      Ae = V('Optional'),
      je = V('Self'),
      Re = V('SkipSelf'),
      Ie = V('Host'),
      Te = (function(e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })({}),
      ke = void 0;
    function Me(e) {
      var t = ke;
      return (ke = e), t;
    }
    function Pe(e) {
      var t = Se;
      return (Se = e), t;
    }
    function Fe(e, t) {
      if ((void 0 === t && (t = Te.Default), void 0 === ke))
        throw new Error('inject() must be called from an injection context');
      return null === ke
        ? Ve(e, void 0, t)
        : ke.get(e, t & Te.Optional ? null : void 0, t);
    }
    function Ne(e, t) {
      return void 0 === t && (t = Te.Default), (Se || Fe)(e, t);
    }
    function Ve(e, t, n) {
      var r = R(e);
      if (r && 'root' == r.providedIn)
        return void 0 === r.value ? (r.value = r.factory()) : r.value;
      if (n & Te.Optional) return null;
      if (void 0 !== t) return t;
      throw new Error('Injector: NOT_FOUND [' + ce(e) + ']');
    }
    function Le(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        if (Array.isArray(r)) {
          if (0 === r.length)
            throw new Error('Arguments array must have arguments.');
          for (var o = void 0, i = Te.Default, u = 0; u < r.length; u++) {
            var a = r[u];
            a instanceof Ae || 'Optional' === a.ngMetadataName
              ? (i |= Te.Optional)
              : a instanceof Re || 'SkipSelf' === a.ngMetadataName
              ? (i |= Te.SkipSelf)
              : a instanceof je || 'Self' === a.ngMetadataName
              ? (i |= Te.Self)
              : (o = a instanceof xe ? a.token : a);
          }
          t.push(Ne(o, i));
        } else t.push(Ne(r));
      }
      return t;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Be(e, t, n) {
      e != t && qe(n);
    }
    function Ue(e, t, n) {
      e == t && qe(n);
    }
    function He(e, t, n) {
      e >= t && qe(n);
    }
    function ze(e, t, n) {
      e <= t && qe(n);
    }
    function Ge(e, t) {
      null == e && qe(t);
    }
    function Ze(e, t) {
      void 0 === t &&
        (t =
          "Type passed in is not ComponentType, it does not have 'ngComponentDef' property."),
        we(e) || qe(t);
    }
    function qe(e) {
      throw new Error('ASSERTION ERROR: ' + e);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var We = 8,
      Qe = 8,
      Ke = 9,
      Ye = -1,
      $e = (function() {
        return function(e, t, n) {
          (this.factory = e),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = n);
        };
      })(),
      Je = $e.prototype;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Xe = 17,
      et = 0,
      tt = 1,
      nt = 2,
      rt = 3,
      ot = 4,
      it = 5,
      ut = 6,
      at = 7,
      st = 8,
      ct = 9,
      lt = 10,
      ft = 11,
      dt = 12,
      pt = 13,
      ht = 14,
      vt = 15,
      gt = 16;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function yt(e, t) {
      Ge(e, 'should be called with a TNode'),
        Be(e.type, t, 'should be a ' + bt(t));
    }
    function mt(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      Ge(e, 'should be called with a TNode'),
        Be(
          t.some(function(t) {
            return e.type === t;
          }),
          !0,
          'Should be one of ' + t.map(bt).join(', ') + ' but got ' + bt(e.type)
        );
    }
    function bt(e) {
      return 1 == e
        ? 'Projection'
        : 0 == e
        ? 'Container'
        : 2 == e
        ? 'View'
        : 3 == e
        ? 'Element'
        : 4 == e
        ? 'ElementContainer'
        : '<unknown>';
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function _t(e, t, n, r) {
      ngDevMode &&
        Be(
          r.firstTemplatePass,
          !0,
          'Should only be called on first template pass'
        ),
        t && (r.initHooks || (r.initHooks = [])).push(e, t),
        n &&
          ((r.initHooks || (r.initHooks = [])).push(e, n),
          (r.checkHooks || (r.checkHooks = [])).push(e, n));
    }
    function wt(e, t) {
      if (t.firstTemplatePass)
        for (var n = e >> 16, r = n + (4095 & e), o = n; o < r; o++) {
          var i = t.data[o];
          Ct(i, t, o), Dt(i, t, o), Et(i, t, o);
        }
    }
    function Ct(e, t, n) {
      e.afterContentInit &&
        (t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentInit),
        e.afterContentChecked &&
          ((t.contentHooks || (t.contentHooks = [])).push(
            n,
            e.afterContentChecked
          ),
          (t.contentCheckHooks || (t.contentCheckHooks = [])).push(
            n,
            e.afterContentChecked
          ));
    }
    function Dt(e, t, n) {
      e.afterViewInit &&
        (t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewInit),
        e.afterViewChecked &&
          ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
          (t.viewCheckHooks || (t.viewCheckHooks = [])).push(
            n,
            e.afterViewChecked
          ));
    }
    function Et(e, t, n) {
      null != e.onDestroy &&
        (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
    }
    function Ot(e, t, n) {
      16 & e[tt] && (St(e, t.initHooks, t.checkHooks, n), (e[tt] &= -17));
    }
    function St(e, t, n, r) {
      var o = r ? t : n;
      o && xt(e, o);
    }
    function xt(e, t) {
      for (var n = 0; n < t.length; n += 2) t[n + 1].call(e[t[n]]);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function At(e, t) {
      var n = It(e),
        r = It(t);
      return n && r
        ? (function(e, t, n) {
            var r = e[ue()](),
              o = t[ue()]();
            for (;;) {
              var i = r.next(),
                u = o.next();
              if (i.done && u.done) return !0;
              if (i.done || u.done) return !1;
              if (!n(i.value, u.value)) return !1;
            }
          })(e, t, At)
        : !(
            n ||
            !(e && ('object' == typeof e || 'function' == typeof e)) ||
            r ||
            !(t && ('object' == typeof t || 'function' == typeof t))
          ) || se(e, t);
    }
    var jt = (function() {
        function e(e) {
          this.wrapped = e;
        }
        return (
          (e.wrap = function(t) {
            return new e(t);
          }),
          (e.unwrap = function(t) {
            return e.isWrapped(t) ? t.wrapped : t;
          }),
          (e.isWrapped = function(t) {
            return t instanceof e;
          }),
          e
        );
      })(),
      Rt = (function() {
        function e(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        return (
          (e.prototype.isFirstChange = function() {
            return this.firstChange;
          }),
          e
        );
      })();
    function It(e) {
      return (
        !!Tt(e) && (Array.isArray(e) || (!(e instanceof Map) && ue() in e))
      );
    }
    function Tt(e) {
      return null !== e && ('function' == typeof e || 'object' == typeof e);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var kt = 0,
      Mt = 1,
      Pt = 6,
      Ft = 7,
      Nt = '__ngContext__';
    function Vt(e) {
      return 'function' == typeof e
        ? e.name || e
        : 'string' == typeof e
        ? e
        : null == e
        ? ''
        : '' + e;
    }
    function Lt(e, t) {
      return ngDevMode && Bt(e + Xe, t), t[e + Xe];
    }
    function Bt(e, t) {
      He(e, t ? t.length : 0, 'index expected to be a valid data index');
    }
    function Ut(e) {
      for (; Array.isArray(e); ) e = e[it];
      return e;
    }
    function Ht(e, t) {
      return Ut(t[e + Xe]);
    }
    function zt(e, t) {
      return Ut(t[e.index]);
    }
    function Gt(e, t) {
      return t[et].data[e + Xe];
    }
    function Zt(e, t) {
      var n = t[e];
      return n.length >= Xe ? n : n[it];
    }
    function qt(e) {
      return 0 != (16384 & e.flags);
    }
    function Wt(e) {
      return 4096 == (4096 & e.flags);
    }
    function Qt(e) {
      return null !== e.template;
    }
    function Kt(e) {
      return Array.isArray(e) && 'number' == typeof e[kt];
    }
    function Yt(e) {
      return 0 != (64 & e[tt]);
    }
    function $t(e) {
      ngDevMode && Ge(e, 'component');
      for (var t = Array.isArray(e) ? e : en(e); t && !(64 & t[tt]); )
        t = t[nt];
      return t;
    }
    function Jt(e) {
      var t = $t(e);
      return (
        ngDevMode &&
          Ge(t[ct], 'RootView has no context. Perhaps it is disconnected?'),
        t[ct]
      );
    }
    function Xt(e) {
      return e[Nt];
    }
    function en(e) {
      var t = Xt(e);
      return t ? (Array.isArray(t) ? t : t.lViewData) : null;
    }
    function tn(e) {
      return e !== Ye;
    }
    function nn(e) {
      return 32767 & e;
    }
    function rn(e) {
      return e >> 16;
    }
    function on(e, t) {
      for (var n = rn(e), r = t; n > 0; ) (r = r[gt]), n--;
      return r;
    }
    var un,
      an,
      sn,
      cn,
      ln,
      fn,
      dn,
      pn,
      hn,
      vn,
      gn = (
        ('undefined' != typeof requestAnimationFrame &&
          requestAnimationFrame) ||
        setTimeout
      ).bind(re);
    function yn(e, t) {
      for (var n = 0; n < e.length; n++) t.push(e[n]);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function mn() {
      return un;
    }
    function bn() {
      return an;
    }
    function _n() {
      return vn && vn[dt];
    }
    function wn() {
      cn = !0;
    }
    function Cn() {
      cn = !1;
    }
    function Dn() {
      return vn;
    }
    function En() {
      return vn;
    }
    function On(e) {
      Fn = e;
    }
    function Sn() {
      return ln;
    }
    function xn(e) {
      ln = e;
    }
    function An(e, t) {
      (ln = e), (vn = t);
    }
    function jn() {
      return fn;
    }
    function Rn(e) {
      fn = e;
    }
    function In() {
      return dn;
    }
    function Tn() {
      return pn;
    }
    function kn(e) {
      pn = e;
    }
    function Mn() {
      return hn;
    }
    function Pn() {
      return vn;
    }
    var Fn = null;
    function Nn() {
      return Fn;
    }
    function Vn(e) {
      return e[st] || (e[st] = []);
    }
    function Ln(e) {
      return e[et].cleanup || (e[et].cleanup = []);
    }
    var Bn = !1;
    function Un() {
      return Bn;
    }
    function Hn(e) {
      Bn = e;
    }
    var zn = !0;
    function Gn() {
      return zn;
    }
    function Zn(e) {
      zn = e;
    }
    var qn = -1;
    function Wn() {
      return qn;
    }
    function Qn(e) {
      qn = e;
    }
    function Kn(e, t) {
      var n = vn;
      return (
        (dn = e && e[et]),
        (hn = e && 1 == (1 & e[tt])),
        (zn = e && dn.firstTemplatePass),
        (qn = e && dn.bindingStartIndex),
        (un = e && e[ft]),
        (ln = t),
        (fn = !0),
        (vn = Fn = e),
        n && (n[ot] = pn),
        (pn = e && e[ot]),
        n
      );
    }
    function Yn(e) {
      return (
        void 0 === e && (e = 1),
        (Fn = (function(e, t) {
          for (; e > 0; )
            ngDevMode &&
              Ge(
                t[gt],
                'Declaration view should be defined if nesting level is greater than 0.'
              ),
              (t = t[gt]),
              e--;
          return t;
        })(e, Fn))[ct]
      );
    }
    function $n(e, t) {
      t || (Bn || St(vn, dn.viewHooks, dn.viewCheckHooks, hn), (vn[tt] &= -6)),
        (vn[tt] |= 16),
        (vn[at] = dn.bindingStartIndex),
        Kn(e, null);
    }
    function Jn() {
      Be(fn, !0, 'previousOrParentTNode should be a parent');
    }
    function Xn() {
      Ge(ln.parent, 'previousOrParentTNode should have a parent');
    }
    function er(e, t) {
      null == t && (t = vn), Bt(e, t || vn);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var tr = !1;
    function nr(e) {
      var t = tr;
      return (tr = e), t;
    }
    var rr = 255,
      or = 0;
    function ir(e, t) {
      var n = ar(e, t);
      if (-1 !== n) return n;
      var r = t[et];
      r.firstTemplatePass &&
        ((e.injectorIndex = t.length),
        ur(r.data, e),
        ur(t, null),
        ur(r.blueprint, null),
        ngDevMode &&
          Be(
            0 === e.flags || 4096 === e.flags,
            !0,
            'expected tNode.flags to not be initialized'
          ));
      var o = sr(e, t),
        i = nn(o),
        u = on(o, t),
        a = e.injectorIndex;
      if (tn(o))
        for (var s = u[et].data, c = 0; c < 8; c++)
          t[a + c] = u[i + c] | s[i + c];
      return (t[a + Qe] = o), a;
    }
    function ur(e, t) {
      e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
    }
    function ar(e, t) {
      return -1 === e.injectorIndex ||
        (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
        null == t[e.injectorIndex + Qe]
        ? -1
        : e.injectorIndex;
    }
    function sr(e, t) {
      if (e.parent && -1 !== e.parent.injectorIndex)
        return e.parent.injectorIndex;
      for (var n = t[ut], r = 1; n && -1 === n.injectorIndex; )
        (n = (t = t[gt])[ut]), r++;
      var o = n && 3 === n.type ? 32768 : 0;
      return n ? n.injectorIndex | (r << 16) | o : -1;
    }
    function cr(e, t, n) {
      !(function(e, t, n) {
        ngDevMode &&
          Be(t.firstTemplatePass, !0, 'expected firstTemplatePass to be true');
        var r = n[x];
        null == r && (r = n[x] = or++);
        var o = r & rr,
          i = 1 << o,
          u = 128 & o,
          a = 64 & o,
          s = 32 & o,
          c = t.data;
        u
          ? a
            ? s
              ? (c[e + 7] |= i)
              : (c[e + 6] |= i)
            : s
            ? (c[e + 5] |= i)
            : (c[e + 4] |= i)
          : a
          ? s
            ? (c[e + 3] |= i)
            : (c[e + 2] |= i)
          : s
          ? (c[e + 1] |= i)
          : (c[e] |= i);
      })(e, t[et], n);
    }
    function lr(e, t) {
      ngDevMode && mt(e, 0, 3, 4), ngDevMode && Ge(e, 'expecting tNode');
      var n = e.attrs;
      if (n)
        for (var r = 0; r < n.length; r += 2) {
          var o = n[r];
          if (1 === o) break;
          if (o == t) return n[r + 1];
        }
    }
    function fr(e, t, n, r, o) {
      void 0 === r && (r = Te.Default);
      var i = (function(e) {
        ngDevMode && Ge(e, 'token must be defined');
        var t = e[x];
        return 'number' == typeof t ? t & rr : t;
      })(n);
      if ('function' == typeof i) {
        var u = Sn(),
          a = Pn();
        An(e, t);
        try {
          var s = i();
          if (null != s || r & Te.Optional) return s;
          throw new Error('No provider for ' + Vt(n));
        } finally {
          An(u, a);
        }
      } else if ('number' == typeof i) {
        var c = null,
          l = ar(e, t),
          f = Ye;
        for (
          (-1 === l || r & Te.SkipSelf) &&
          (gr(r, (f = -1 === l ? sr(e, t) : t[l + Qe]))
            ? ((c = t[et]), (l = nn(f)), (t = on(f, t)))
            : (l = -1));
          -1 !== l;

        ) {
          f = t[l + Qe];
          var d = t[et];
          if (vr(i, l, d.data)) {
            var p = pr(l, t, n, c);
            if (p !== dr) return p;
          }
          gr(r, f) && vr(i, l, t)
            ? ((c = d), (l = nn(f)), (t = on(f, t)))
            : (l = -1);
        }
      }
      if (
        (r & Te.Optional && void 0 === o && (o = null),
        0 == (r & (Te.Self | Te.Host)))
      ) {
        var h = t[lt];
        return h ? h.get(n, o, r & Te.Optional) : Ve(n, o, r & Te.Optional);
      }
      if (r & Te.Optional) return o;
      throw new Error('NodeInjector: NOT_FOUND [' + Vt(n) + ']');
    }
    var dr = {};
    function pr(e, t, n, r) {
      var o = t[et],
        i = o.data[e + We],
        u = i.flags,
        a = i.providerIndexes,
        s = o.data,
        c = !1;
      ((null == r && Wt(i) && tr) ||
        (null != r && r != o && (null == o.node || 3 === o.node.type))) &&
        (c = !0);
      for (
        var l = 65535 & a, f = u >> 16, d = 4095 & u, p = c ? l : l + (a >> 16);
        p < f + d;
        p++
      ) {
        var h = s[p];
        if ((p < f && n === h) || (p >= f && h.type === n))
          return hr(s, t, p, i);
      }
      return dr;
    }
    function hr(e, t, n, r) {
      var o = t[n];
      if (
        (function(e) {
          return (
            null != e && 'object' == typeof e && Object.getPrototypeOf(e) == Je
          );
        })(o)
      ) {
        var i = o;
        if (i.resolving) throw new Error('Circular dep for ' + Vt(e[n]));
        var u = nr(i.canSeeViewProviders);
        i.resolving = !0;
        var a = void 0;
        i.injectImpl && (a = Pe(i.injectImpl));
        var s = Sn(),
          c = Pn();
        An(r, t);
        try {
          o = t[n] = i.factory(null, e, t, r);
        } finally {
          i.injectImpl && Pe(a), nr(u), (i.resolving = !1), An(s, c);
        }
      }
      return o;
    }
    function vr(e, t, n) {
      var r = 1 << e,
        o = 64 & e,
        i = 32 & e;
      return !!(
        (128 & e
          ? o
            ? i
              ? n[t + 7]
              : n[t + 6]
            : i
            ? n[t + 5]
            : n[t + 4]
          : o
          ? i
            ? n[t + 3]
            : n[t + 2]
          : i
          ? n[t + 1]
          : n[t]) & r
      );
    }
    function gr(e, t) {
      return !(e & Te.Self || (e & Te.Host && 32768 & t));
    }
    var yr = (function() {
      function e(e, t) {
        (this._tNode = e),
          (this._hostView = t),
          (this._injectorIndex = ir(e, t));
      }
      return (
        (e.prototype.get = function(e) {
          return (
            An(this._tNode, this._hostView), fr(this._tNode, this._hostView, e)
          );
        }),
        e
      );
    })();
    function mr(e) {
      var t = e,
        n = we(t) || Ce(t) || De(t) || R(t) || I(t);
      return n && void 0 !== n.factory ? n.factory : null;
    }
    function br(e) {
      var t = mr(Object.getPrototypeOf(e.prototype).constructor);
      return null !== t
        ? t
        : function(e) {
            return new e();
          };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function _r(e) {
      var t = Xt(e);
      if (t) {
        if (Array.isArray(t)) {
          var n = t,
            r = void 0,
            o = void 0,
            i = void 0;
          if (
            (function(e) {
              return e && e.constructor && e.constructor.ngComponentDef;
            })(e)
          ) {
            if (-1 == (r = Sr(n, e)))
              throw new Error(
                'The provided component was not found in the application'
              );
            o = e;
          } else if (
            (function(e) {
              return e && e.constructor && e.constructor.ngDirectiveDef;
            })(e)
          ) {
            if (
              -1 ==
              (r = (function(e, t) {
                var n = e[et].firstChild;
                for (; n; ) {
                  for (var r = Ar(n), o = jr(n, r), i = r; i < o; i++)
                    if (e[i] === t) return n.index;
                  n = Or(n);
                }
                return -1;
              })(n, e))
            )
              throw new Error(
                'The provided directive was not found in the application'
              );
            i = xr(r, n, !1);
          } else if (-1 == (r = Er(n, e))) return null;
          var u = Xt((p = Ut(n[r]))),
            a = u && !Array.isArray(u) ? u : wr(n, r, p);
          if (
            (o &&
              void 0 === a.component &&
              ((a.component = o), Dr(a.component, a)),
            i && void 0 === a.directives)
          ) {
            a.directives = i;
            for (var s = 0; s < i.length; s++) Dr(i[s], a);
          }
          Dr(a.native, a), (t = a);
        }
      } else {
        var c = e;
        ngDevMode &&
          (function(e) {
            Be(
              e &&
                (e.nodeType == Node.ELEMENT_NODE ||
                  e.nodeType == Node.TEXT_NODE),
              !0,
              'The provided value must be an instance of an HTMLElement'
            );
          })(c);
        for (var l = c; (l = l.parentNode); ) {
          var f = Xt(l);
          if (f) {
            n = void 0;
            if (!(n = Array.isArray(f) ? f : f.lViewData)) return null;
            var d = Er(n, c);
            if (d >= 0) {
              var p;
              Dr((p = Ut(n[d])), (a = wr(n, d, p))), (t = a);
              break;
            }
          }
        }
      }
      return t || null;
    }
    function wr(e, t, n) {
      return {
        lViewData: e,
        nodeIndex: t,
        native: n,
        component: void 0,
        directives: void 0,
        localRefs: void 0
      };
    }
    function Cr(e) {
      var t,
        n = Xt(e);
      if (Array.isArray(n)) {
        var r = Sr(n, e);
        ((o = wr(n, r, (t = Zt(r, n))[it])).component = e),
          Dr(e, o),
          Dr(o.native, o);
      } else {
        var o;
        t = Zt((o = n).nodeIndex, o.lViewData);
      }
      return t;
    }
    function Dr(e, t) {
      e[Nt] = t;
    }
    function Er(e, t) {
      for (var n = e[et].firstChild; n; ) {
        if (zt(n, e) === t) return n.index;
        n = Or(n);
      }
      return -1;
    }
    function Or(e) {
      return e.child
        ? e.child
        : e.next
        ? e.next
        : (e.parent && e.parent.next) || null;
    }
    function Sr(e, t) {
      var n = e[et].components;
      if (n)
        for (var r = 0; r < n.length; r++) {
          var o = n[r];
          if (Zt(o, e)[ct] === t) return o;
        }
      else if (Zt(Xe, e)[ct] === t) return Xe;
      return -1;
    }
    function xr(e, t, n) {
      var r = t[et].data[e],
        o = Ar(r);
      if (0 == o) return fe;
      var i = jr(r, o);
      return !n && 4096 & r.flags && o++, t.slice(o, i);
    }
    function Ar(e) {
      return e.flags >> 16;
    }
    function jr(e, t) {
      var n = 4095 & e.flags;
      return n ? t + n : -1;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Rr() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Ir = m({ __forward_ref__: m });
    function Tr(e) {
      return (
        (e.__forward_ref__ = Tr),
        (e.toString = function() {
          return ce(this());
        }),
        e
      );
    }
    function kr(e) {
      var t = e;
      return 'function' == typeof t &&
        t.hasOwnProperty(Ir) &&
        t.__forward_ref__ === Tr
        ? t()
        : e;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Mr = '__source',
      Pr = new Object(),
      Fr = Pr,
      Nr = new T('INJECTOR'),
      Vr = (function() {
        function e() {}
        return (
          (e.prototype.get = function(e, t) {
            if ((void 0 === t && (t = Pr), t === Pr))
              throw new Error(
                'NullInjectorError: No provider for ' + ce(e) + '!'
              );
            return t;
          }),
          e
        );
      })(),
      Lr = (function() {
        function e() {}
        return (
          (e.create = function(e, t) {
            return Array.isArray(e)
              ? new $r(e, t)
              : new $r(e.providers, e.parent, e.name || null);
          }),
          (e.THROW_IF_NOT_FOUND = Pr),
          (e.NULL = new Vr()),
          (e.ngInjectableDef = A({
            providedIn: 'any',
            factory: function() {
              return Ne(Nr);
            }
          })),
          (e.__NG_ELEMENT_ID__ = function() {
            return Ur();
          }),
          e
        );
      })(),
      Br = function() {
        return (function() {
          var e = Sn();
          return new yr(e, Pn());
        })();
      },
      Ur = Rr,
      Hr = function(e) {
        return e;
      },
      zr = [],
      Gr = Hr,
      Zr = function() {
        return Array.prototype.slice.call(arguments);
      },
      qr = m({ provide: String, useValue: m }),
      Wr = 'ngTempTokenPath',
      Qr = Lr.NULL,
      Kr = /\n/gm,
      Yr = 'ɵ',
      $r = (function() {
        function e(e, t, n) {
          void 0 === t && (t = Qr),
            void 0 === n && (n = null),
            (this.parent = t),
            (this.source = n);
          var r = (this._records = new Map());
          r.set(Lr, { token: Lr, fn: Hr, deps: zr, value: this, useNew: !1 }),
            r.set(Nr, { token: Nr, fn: Hr, deps: zr, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = kr(n)) instanceof Array)
                  for (var r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ('function' == typeof n)
                    throw to('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide)
                    throw to('Unexpected provider', n);
                  var o = kr(n.provide),
                    i = (function(e) {
                      var t = (function(e) {
                          var t = zr,
                            n = e.deps;
                          if (n && n.length) {
                            t = [];
                            for (var r = 0; r < n.length; r++) {
                              var o = 6,
                                i = kr(n[r]);
                              if (i instanceof Array)
                                for (var u = 0, a = i; u < a.length; u++) {
                                  var s = a[u];
                                  s instanceof Ae || s == Ae
                                    ? (o |= 1)
                                    : s instanceof Re || s == Re
                                    ? (o &= -3)
                                    : s instanceof je || s == je
                                    ? (o &= -5)
                                    : (i = s instanceof xe ? s.token : kr(s));
                                }
                              t.push({ token: i, options: o });
                            }
                          } else if (e.useExisting) {
                            var i = kr(e.useExisting);
                            t = [{ token: i, options: 6 }];
                          } else if (!(n || qr in e))
                            throw to("'deps' required", e);
                          return t;
                        })(e),
                        n = Hr,
                        r = zr,
                        o = !1,
                        i = kr(e.provide);
                      if (qr in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (o = !0), (n = kr(e.useClass));
                      else {
                        if ('function' != typeof i)
                          throw to(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            e
                          );
                        (o = !0), (n = i);
                      }
                      return { deps: t, fn: n, useNew: o, value: r };
                    })(n);
                  if (!0 === n.multi) {
                    var u = t.get(o);
                    if (u) {
                      if (u.fn !== Zr) throw Jr(o);
                    } else
                      t.set(
                        o,
                        (u = {
                          token: n.provide,
                          deps: [],
                          useNew: !1,
                          fn: Zr,
                          value: zr
                        })
                      );
                    (o = n), u.deps.push({ token: o, options: 6 });
                  }
                  var a = t.get(o);
                  if (a && a.fn == Zr) throw Jr(o);
                  t.set(o, i);
                }
            })(r, e);
        }
        return (
          (e.prototype.get = function(e, t, n) {
            void 0 === n && (n = Te.Default);
            var r = this._records.get(e);
            try {
              return Xr(e, r, this._records, this.parent, t, n);
            } catch (t) {
              var o = t[Wr];
              throw (e[Mr] && o.unshift(e[Mr]),
              (t.message = eo('\n' + t.message, o, this.source)),
              (t.ngTokenPath = o),
              (t[Wr] = null),
              t);
            }
          }),
          (e.prototype.toString = function() {
            var e = [];
            return (
              this._records.forEach(function(t, n) {
                return e.push(ce(n));
              }),
              'StaticInjector[' + e.join(', ') + ']'
            );
          }),
          e
        );
      })();
    function Jr(e) {
      return to('Cannot mix multi providers and regular providers', e);
    }
    function Xr(e, t, n, o, i, u) {
      try {
        return (function(e, t, n, o, i, u) {
          var a, s;
          if (!t || u & Te.SkipSelf)
            u & Te.Self || (s = o.get(e, i, Te.Default));
          else {
            if ((s = t.value) == Gr) throw Error(Yr + 'Circular dependency');
            if (s === zr) {
              t.value = Gr;
              var c = void 0,
                l = t.useNew,
                f = t.fn,
                d = t.deps,
                p = zr;
              if (d.length) {
                p = [];
                for (var h = 0; h < d.length; h++) {
                  var v = d[h],
                    g = v.options,
                    y = 2 & g ? n.get(v.token) : void 0;
                  p.push(
                    Xr(
                      v.token,
                      y,
                      n,
                      y || 4 & g ? o : Qr,
                      1 & g ? null : Lr.THROW_IF_NOT_FOUND,
                      Te.Default
                    )
                  );
                }
              }
              t.value = s = l
                ? new ((a = f).bind.apply(a, Object(r.g)([void 0], p)))()
                : f.apply(c, p);
            }
          }
          return s;
        })(e, t, n, o, i, u);
      } catch (n) {
        throw (n instanceof Error || (n = new Error(n)),
        (n[Wr] = n[Wr] || []).unshift(e),
        t && t.value == Gr && (t.value = zr),
        n);
      }
    }
    function eo(e, t, n) {
      void 0 === n && (n = null),
        (e = e && '\n' === e.charAt(0) && e.charAt(1) == Yr ? e.substr(2) : e);
      var r = ce(t);
      if (t instanceof Array) r = t.map(ce).join(' -> ');
      else if ('object' == typeof t) {
        var o = [];
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            var u = t[i];
            o.push(
              i + ':' + ('string' == typeof u ? JSON.stringify(u) : ce(u))
            );
          }
        r = '{' + o.join(', ') + '}';
      }
      return (
        'StaticInjectorError' +
        (n ? '(' + n + ')' : '') +
        '[' +
        r +
        ']: ' +
        e.replace(Kr, '\n  ')
      );
    }
    function to(e, t) {
      return new Error(eo(e, t));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var no = (function() {
        return function() {};
      })(),
      ro = (function() {
        return function() {};
      })();
    function oo(e) {
      throw new Error(
        'Multiple components match node with tagname ' + e.tagName
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var io = 'ngProjectAs',
      uo = (function(e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })({});
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function ao(e) {
      return !!e.listen;
    }
    var so = {
      createRenderer: function(e, t) {
        return document;
      }
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function co(e, t) {
      return null == e.parent
        ? (function(e) {
            var t = e[ut];
            return t && 2 !== t.type ? zt(t, e[nt]) : null;
          })(t)
        : zt(lo(e), t);
    }
    function lo(e) {
      for (var t = e.parent; t && 5 === t.type; ) t = t.parent;
      return t;
    }
    function fo(e, t) {
      if (-1 === e.index) {
        var n = t[ht];
        return n > -1 ? t[nt][n] : null;
      }
      return t[nt][e.parent.index];
    }
    function po(e, t) {
      var n = fo(e, t);
      return n ? n[Ft] : null;
    }
    var ho = [];
    function vo(e, t, n, r, o) {
      for (var i = e[et].node, u = -1, a = e, s = i.child; s; ) {
        var c = null;
        if (3 === s.type) {
          yo(t, n, r, zt(s, a), o);
          var l = a[s.index];
          Kt(l) && yo(t, n, r, l[Pt], o);
        } else if (0 === s.type) {
          var f = a[s.index];
          yo(t, n, r, f[Pt], o),
            r && (f[Ft] = r),
            f[Mt].length && ((c = (a = f[Mt][0])[et].node), (o = f[Pt]));
        } else if (1 === s.type) {
          var d = go(a),
            p = d[ut].projection[s.projection];
          (ho[++u] = s),
            (ho[++u] = a),
            p && (c = (a = d[nt])[et].data[p.index]);
        } else c = s.child;
        if (null === c)
          for (
            null === s.next && 8192 & s.flags && ((a = ho[u--]), (s = ho[u--])),
              c = s.next;
            !c;

          ) {
            if (null === (s = s.parent || a[et].node) || s === i) return null;
            0 === s.type && (o = (a = a[nt])[s.index][Pt]),
              (c = 2 === s.type && a[rt] ? (a = a[rt])[et].node : s.next);
          }
        s = c;
      }
    }
    function go(e) {
      for (var t = e[ut]; t && 2 === t.type; )
        ngDevMode && Ge(e[nt], 'viewData.parent'), (t = (e = e[nt])[ut]);
      return e;
    }
    function yo(e, t, n, r, o) {
      0 === e
        ? ao(t)
          ? t.insertBefore(n, r, o)
          : n.insertBefore(r, o, !0)
        : 1 === e
        ? ao(t)
          ? t.removeChild(n, r)
          : n.removeChild(r)
        : 2 === e &&
          (ngDevMode && ngDevMode.rendererDestroyNode++, t.destroyNode(r));
    }
    function mo(e, t) {
      return ao(t) ? t.createText(Vt(e)) : t.createTextNode(Vt(e));
    }
    function bo(e, t, n) {
      var r = po(e[et].node, e);
      if ((ngDevMode && yt(e[et].node, 2), r)) {
        var o = e[ft];
        vo(e, t ? 0 : 1, o, r, n);
      }
    }
    function _o(e, t, n, r, o) {
      var i = t[Mt];
      r > 0 && (i[r - 1][rt] = e),
        r < i.length
          ? ((e[rt] = i[r]), i.splice(r, 0, e))
          : (i.push(e), (e[rt] = null)),
        o > -1 && ((e[ht] = o), (e[nt] = n)),
        e[ot] && e[ot].insertView(r),
        (e[tt] |= 8);
    }
    function wo(e, t, n) {
      var r = e[Mt],
        o = r[t];
      t > 0 && (r[t - 1][rt] = o[rt]),
        r.splice(t, 1),
        n || bo(o, !1),
        o[ot] && o[ot].removeView(),
        (o[ht] = -1),
        (o[nt] = null),
        (o[tt] &= -9);
    }
    function Co(e, t, n) {
      var r = e[Mt][n];
      wo(e, n, !!t.detached), Eo(r);
    }
    function Do(e) {
      var t = e[et].childIndex;
      return -1 === t ? null : e[t];
    }
    function Eo(e) {
      var t = e[ft];
      ao(t) && t.destroyNode && vo(e, 2, t, null),
        (function(e) {
          if (-1 === e[et].childIndex) return So(e);
          for (var t = Do(e); t; ) {
            var n = null;
            if (t.length >= Xe) {
              var r = t;
              r[et].childIndex > -1 && (n = Do(r));
            } else {
              var o = t;
              o[Mt].length && (n = o[Mt][0]);
            }
            if (null == n) {
              for (; t && !t[rt] && t !== e; ) So(t), (t = Oo(t, e));
              So(t || e), (n = t && t[rt]);
            }
            t = n;
          }
        })(e),
        (e[tt] |= 32);
    }
    function Oo(e, t) {
      var n;
      return e.length >= Xe && (n = e[ut]) && 2 === n.type
        ? fo(n, e)
        : e[nt] === t
        ? null
        : e[nt];
    }
    function So(e) {
      if (e.length >= Xe) {
        var t = e;
        !(function(e) {
          var t = e[et].cleanup;
          if (null != t) {
            for (var n = 0; n < t.length - 1; n += 2)
              if ('string' == typeof t[n]) {
                var r = Ut(e[t[n + 1]]),
                  o = e[st][t[n + 2]];
                r.removeEventListener(t[n], o, t[n + 3]), (n += 2);
              } else if ('number' == typeof t[n]) {
                var i = e[st][t[n]];
                i();
              } else {
                var u = e[st][t[n + 1]];
                t[n].call(u);
              }
            e[st] = null;
          }
        })(t),
          (function(e) {
            var t,
              n = e[et];
            null != n && null != (t = n.destroyHooks) && xt(e, t);
          })(t),
          (function(e) {
            var t = e[et] && e[et].pipeDestroyHooks;
            t && xt(e, t);
          })(t),
          -1 === t[et].id &&
            ao(t[ft]) &&
            (ngDevMode && ngDevMode.rendererDestroy++, t[ft].destroy());
      }
    }
    function xo(e, t) {
      if (Ao(e, t)) {
        if (Yt(t)) return Ro(t[ft], zt(e, t));
        var n = t[ut],
          r = e.parent;
        return (
          null != r && 4 === r.type && (e = To(r)),
          null == e.parent && 2 === n.type ? po(n, t) : co(e, t)
        );
      }
      return null;
    }
    function Ao(e, t) {
      var n = e,
        r = e.parent;
      return (
        e.parent &&
          (4 === e.parent.type
            ? (r = (n = To(e)).parent)
            : 5 === e.parent.type && (r = (n = lo(n)).parent)),
        null === r && (r = t[ut]),
        r && 2 === r.type
          ? (function(e, t) {
              var n = fo(e, t);
              return null != n && null != n[Ft];
            })(r, t)
          : (function(e) {
              return (
                null == e.parent ||
                !(3 !== e.parent.type || 4096 & e.parent.flags)
              );
            })(n)
      );
    }
    function jo(e, t, n, r) {
      ao(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
    }
    function Ro(e, t) {
      return ao(e) ? e.parentNode(t) : t.parentNode;
    }
    function Io(e, t, n) {
      if ((void 0 === e && (e = null), null !== e && Ao(t, n))) {
        var r = n[ft],
          o = co(t, n),
          i = t.parent || n[ut];
        if (2 === i.type) {
          var u = fo(i, n),
            a = u[Mt],
            s = a.indexOf(n);
          jo(r, u[Ft], e, ko(s, a, u[Pt]));
        } else if (4 === i.type) {
          jo(r, xo(t, n), e, o);
        } else if (5 === i.type) {
          jo(r, o, e, zt(t.parent, n));
        } else ao(r) ? r.appendChild(o, e) : o.appendChild(e);
        return !0;
      }
      return !1;
    }
    function To(e) {
      for (; null != e.parent && 4 === e.parent.type; ) e = e.parent;
      return e;
    }
    function ko(e, t, n) {
      if (e + 1 < t.length) {
        var r = t[e + 1],
          o = r[ut];
        return o.child ? zt(o.child, r) : n;
      }
      return n;
    }
    function Mo(e, t, n) {
      if (null !== t && Ao(e, n)) {
        var r = co(e, n),
          o = n[ft];
        return ao(o) ? o.removeChild(r, t) : r.removeChild(t), !0;
      }
      return !1;
    }
    function Po(e, t, n, r) {
      var o = zt(e, r);
      Io(o, t, n), Dr(o, r);
      var i = xo(t, n),
        u = r[e.index];
      if (0 === e.type) {
        u[Ft] = i;
        for (var a = u[Mt], s = 0; s < a.length; s++) bo(a[s], !0, u[Pt]);
      } else {
        if (4 === e.type)
          for (var c = e.child; c; ) Po(c, t, n, r), (c = c.next);
        Kt(u) && ((u[Ft] = i), Io(u[Pt], t, n));
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Fo(e, t) {
      var n = e.length,
        r = e.indexOf(t),
        o = r + t.length;
      return !(
        -1 === r ||
        (r > 0 && ' ' !== e[r - 1]) ||
        (o < n && ' ' !== e[o])
      );
    }
    function No(e, t) {
      ngDevMode && Ge(t[0], 'Selector should have a tag name');
      for (
        var n = 4, r = e.attrs, o = r ? r.indexOf(1) : -1, i = !1, u = 0;
        u < t.length;
        u++
      ) {
        var a = t[u];
        if ('number' != typeof a) {
          if (!i)
            if (4 & n) {
              if (((n = 2 | (1 & n)), '' !== a && a !== e.tagName)) {
                if (Vo(n)) return !1;
                i = !0;
              }
            } else {
              var s = Lo(8 & n ? 'class' : a, r);
              if (-1 === s) {
                if (Vo(n)) return !1;
                i = !0;
                continue;
              }
              var c = 8 & n ? a : t[++u];
              if ('' !== c) {
                var l = void 0,
                  f = r[s];
                if (
                  (o > -1 && s > o
                    ? (l = '')
                    : (ngDevMode &&
                        Ue(
                          f,
                          0,
                          'We do not match directives on namespaced attributes'
                        ),
                      (l = r[s + 1])),
                  (8 & n && !Fo(l, c)) || (2 & n && c !== l))
                ) {
                  if (Vo(n)) return !1;
                  i = !0;
                }
              }
            }
        } else {
          if (!i && !Vo(n) && !Vo(a)) return !1;
          if (i && Vo(a)) continue;
          (i = !1), (n = a | (1 & n));
        }
      }
      return Vo(n) || i;
    }
    function Vo(e) {
      return 0 == (1 & e);
    }
    function Lo(e, t) {
      if (null === t) return -1;
      for (var n = !1, r = 0; r < t.length; ) {
        var o = t[r];
        if (o === e) return r;
        0 === o ? (r += 4) : (1 === o && (n = !0), (r += n ? 1 : 2));
      }
      return -1;
    }
    function Bo(e, t) {
      for (var n = 0; n < t.length; n++) if (No(e, t[n])) return !0;
      return !1;
    }
    function Uo(e, t, n) {
      for (
        var r = (function(e) {
            var t = e.attrs;
            if (null != t) {
              var n = t.indexOf(io);
              if (0 == (1 & n)) return t[n + 1];
            }
            return null;
          })(e),
          o = 0;
        o < t.length;
        o++
      )
        if (r === n[o] || (null === r && Bo(e, t[o]))) return o + 1;
      return 0;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Ho = {};
    function zo(e, t) {
      return new Go(e, t);
    }
    var Go = (function() {
        return function(e, t) {
          (this.fn = e), (this.value = t);
        };
      })(),
      Zo = (function() {
        function e() {
          this._players = [];
        }
        return (
          (e.prototype.flushPlayers = function() {
            for (var e = 0; e < this._players.length; e++) {
              var t = this._players[e];
              t.parent || 0 !== t.state || t.play();
            }
            this._players.length = 0;
          }),
          (e.prototype.queuePlayer = function(e) {
            this._players.push(e);
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function qo(e, t, n) {
      return [null, t || null, n || [null], 0, 0, e || null, null, null];
    }
    function Wo(e, t) {
      for (var n = e + Xe, r = t[n], o = t; Array.isArray(r); )
        (o = r), (r = r[it]);
      if (
        (function(e) {
          return 'number' != typeof e[tt] && 'number' != typeof e[kt];
        })(o)
      )
        return o;
      var i = Gt(e, t).stylingTemplate;
      return (
        o !== t && (n = it),
        (o[n] = i
          ? (function(e, t) {
              var n = t.slice();
              return (n[5] = e), n;
            })(r, i)
          : qo(r))
      );
    }
    function Qo(e, t, n, r, o, i) {
      return (
        (i = i || n),
        o ? (e[o] = r) : e.push(r),
        !!r &&
          (r.addEventListener(200, function() {
            var t = e.indexOf(r),
              n = e[0];
            t && (t < n ? (e[t] = null) : e.splice(t, 1)), r.destroy();
          }),
          (t.playerHandler || (t.playerHandler = new Zo())).queuePlayer(r, i),
          !0)
      );
    }
    function Ko(e) {
      return e[0];
    }
    function Yo(e) {
      return (e[0] = [5, null, null, null, null]);
    }
    function $o() {
      throw new Error(
        'Only elements that exist in an Angular application can be used for animations'
      );
    }
    var Jo = [],
      Xo = {};
    function ei(e, t, n) {
      var r = 8 + 4 * t,
        o = Di(e, r),
        i = Ci(e, r);
      if (ki(i, o, n instanceof Go ? n.value : n)) {
        var u = 2 == (2 & i),
          a = e[5],
          s = n instanceof Go ? new Mi(n, a, u ? 1 : 2) : null,
          c = s ? n.value : n,
          l = bi(e, r),
          f = !1;
        if (gi(e, s, l)) {
          var d = yi(e, s, l);
          mi(e, r, s ? d : 0), (f = !0);
        }
        vi(e, r, c);
        var p = fi(i),
          h = Di(e, p);
        if (!h || ki(i, h, c)) {
          var v = !1,
            g = !0;
          !Ii(c, u) && Ii(h, u) && ((v = !0), (g = !1)),
            oi(e, p, v),
            oi(e, r, g),
            Si(e, !0);
        }
        f && xi(e, !0);
      }
    }
    function ti(e, t, n, r, o, i) {
      var u = 0;
      if (
        (function(e) {
          return ii(e, 3);
        })(e)
      ) {
        for (
          var a = 8 & e[3], s = e[5], c = di(e), l = pi(e), f = Oi(e), d = 8;
          d < e.length;
          d += 4
        )
          if (ii(e, d)) {
            var p = Ei(e, d),
              h = Di(e, d),
              v = Ci(e, d),
              g = _i(e, d),
              y = !!(2 & v),
              m = !y || !f,
              b = h;
            if (d < c && !Ii(b, y)) b = Di(e, fi(v));
            if ((!Ii(b, y) && m && (b = ci(e, v)), !r || b))
              if (y) ri(s, p, !!b, t, o, g);
              else ni(s, p, b, t, 4 & v ? l : null, i, g);
            oi(e, d, !1);
          }
        if (a) {
          var _ = Array.isArray(n) ? Jt(n) : n,
            w = Ko(e),
            C = w[0];
          for (d = 1; d < C; d += 2) {
            var D = w[d],
              E = d + 1,
              O = w[E];
            if (D) {
              var S = D.buildPlayer(O, r);
              if (void 0 !== S) {
                if (null != S) Qo(w, _, s, S, E) && u++;
                O && O.destroy();
              }
            } else O && O.destroy();
          }
          xi(e, !1);
        }
        Si(e, !1);
      }
      return u;
    }
    function ni(e, t, n, r, o, i, u) {
      (n = o && n ? o(t, n) : n),
        i || u
          ? (i && i.setValue(t, n), u && u.setValue(t, n))
          : n
          ? (ngDevMode && ngDevMode.rendererSetStyle++,
            ao(r)
              ? r.setStyle(e, t, n, uo.DashCase)
              : e.style.setProperty(t, n))
          : (ngDevMode && ngDevMode.rendererRemoveStyle++,
            ao(r)
              ? r.removeStyle(e, t, uo.DashCase)
              : e.style.removeProperty(t));
    }
    function ri(e, t, n, r, o, i) {
      o || i
        ? (o && o.setValue(t, n), i && i.setValue(t, n))
        : n
        ? (ngDevMode && ngDevMode.rendererAddClass++,
          ao(r) ? r.addClass(e, t) : e.classList.add(t))
        : (ngDevMode && ngDevMode.rendererRemoveClass++,
          ao(r) ? r.removeClass(e, t) : e.classList.remove(t));
    }
    function oi(e, t, n) {
      var r = t >= 8 ? t + 0 : t;
      n ? (e[r] |= 1) : (e[r] &= -2);
    }
    function ii(e, t) {
      return 1 == (1 & e[t >= 8 ? t + 0 : t]);
    }
    function ui(e, t) {
      return 2 == (2 & e[t >= 8 ? t + 0 : t]);
    }
    function ai(e, t) {
      return 4 == (4 & e[t >= 8 ? t + 0 : t]);
    }
    function si(e, t, n) {
      return (31 & e) | (t << 5) | (n << 19);
    }
    function ci(e, t) {
      var n = li(t);
      return e[2][n];
    }
    function li(e) {
      return (e >> 5) & 16383;
    }
    function fi(e) {
      var t = (e >> 19) & 16383;
      return t >= 8 ? t : -1;
    }
    function di(e) {
      return fi(e[3]);
    }
    function pi(e) {
      return e[1];
    }
    function hi(e, t, n) {
      e[t + 1] = n;
    }
    function vi(e, t, n) {
      e[t + 2] = n;
    }
    function gi(e, t, n) {
      var r = e[0];
      if (t) {
        if (!r || 0 === n) return !0;
      } else if (!r) return !1;
      return r[n] !== t;
    }
    function yi(e, t, n) {
      var r = e[0] || Yo(e);
      return (
        n > 0 ? (r[n] = t) : ((n = r[0]), r.splice(n, 0, t, null), (r[0] += 2)),
        n
      );
    }
    function mi(e, t, n) {
      e[t + 3] = n;
    }
    function bi(e, t) {
      return e[t + 3] || 0;
    }
    function _i(e, t) {
      var n = bi(e, t);
      if (n) {
        var r = e[0];
        if (r) return r[n];
      }
      return null;
    }
    function wi(e, t, n) {
      e[3 === t ? t : t + 0] = n;
    }
    function Ci(e, t) {
      return e[3 === t ? t : t + 0];
    }
    function Di(e, t) {
      return e[t + 2];
    }
    function Ei(e, t) {
      return e[t + 1];
    }
    function Oi(e) {
      return 16 & e[3];
    }
    function Si(e, t) {
      oi(e, 3, t);
    }
    function xi(e, t) {
      t ? (e[3] |= 8) : (e[3] &= -9);
    }
    function Ai(e, t, n) {
      for (var r = (n || 0) + 1; r < e.length; r += 4) {
        if (e[r] == t) return r - 1;
      }
      return -1;
    }
    function ji(e, t, n) {
      var r = Di(e, t),
        o = Ei(e, t),
        i = Ci(e, t),
        u = bi(e, t),
        a = i,
        s = Ci(e, n),
        c = fi(a);
      c >= 0 && wi(e, c, si((l = Ci(e, c)), li(l), n));
      var l,
        f = fi(s);
      f >= 0 && wi(e, f, si((l = Ci(e, f)), li(l), t));
      vi(e, t, Di(e, n)),
        hi(e, t, Ei(e, n)),
        wi(e, t, Ci(e, n)),
        mi(e, t, bi(e, n)),
        vi(e, n, r),
        hi(e, n, o),
        wi(e, n, i),
        mi(e, n, u);
    }
    function Ri(e, t, n, r, o, i, u) {
      var a = t < e.length;
      e.splice(t, 0, 1 | o | (n ? 2 : 0), r, i, u),
        a &&
          (function(e, t) {
            for (var n = t; n < e.length; n += 4) {
              var r = fi(Ci(e, n));
              if (r > 0) {
                var o = li(Ci(e, r));
                wi(
                  e,
                  r,
                  si(
                    (ii(e, r) ? 1 : 0) |
                      (ui(e, r) ? 2 : 0) |
                      (ai(e, r) ? 4 : 0),
                    o,
                    n
                  )
                );
              }
            }
          })(e, t + 4);
    }
    function Ii(e, t) {
      return t ? !!e : null !== e;
    }
    function Ti(e, t, n) {
      return t ? 2 : n && n(e) ? 4 : 0;
    }
    function ki(e, t, n) {
      return !(2 & e) && (t && n) && 4 & e
        ? t.toString() !== n.toString()
        : t !== n;
    }
    var Mi = (function() {
        function e(e, t, n) {
          (this._element = t),
            (this._type = n),
            (this._values = {}),
            (this._dirty = !1),
            (this._factory = e);
        }
        return (
          (e.prototype.setValue = function(e, t) {
            this._values[e] !== t &&
              ((this._values[e] = t), (this._dirty = !0));
          }),
          (e.prototype.buildPlayer = function(e, t) {
            if (this._dirty) {
              var n = this._factory.fn(
                this._element,
                this._type,
                this._values,
                t,
                e || null
              );
              return (this._values = {}), (this._dirty = !1), n;
            }
          }),
          e
        );
      })(),
      Pi = Promise.resolve(null);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Fi(e, t) {
      var n = In(),
        r = Gn();
      if (((n.firstTemplatePass = !1), Zn(!1), 1 !== t)) {
        var o = Mn(),
          i = Un();
        i || Ot(e, n, o),
          (function(e) {
            for (var t = Do(e); null !== t; t = t[rt])
              if (t.length < Xe && -1 === t[kt])
                for (var n = t, r = 0; r < n[Mt].length; r++) {
                  var o = n[Mt][r];
                  ngDevMode && Ge(o[et], 'TView must be allocated'),
                    Ui(o, o[et], o[ct], 2);
                }
          })(e),
          (function(e) {
            if (null != e.contentQueries)
              for (var t = 0; t < e.contentQueries.length; t += 2) {
                var n = e.contentQueries[t],
                  r = e.data[n];
                r.contentQueriesRefresh(n - Xe, e.contentQueries[t + 1]);
              }
          })(n),
          i || St(e, n.contentHooks, n.contentCheckHooks, o),
          (function(e, t) {
            if (e.expandoInstructions) {
              var n = (t[at] = e.expandoStartIndex);
              Qn(n);
              for (
                var r = -1, o = -1, i = 0;
                i < e.expandoInstructions.length;
                i++
              ) {
                var u = e.expandoInstructions[i];
                if ('number' == typeof u) {
                  if (u <= 0) {
                    o = -u;
                    var a = e.expandoInstructions[++i];
                    r = n += Ke + a;
                  } else n += u;
                  Qn(n);
                } else (t[at] = n), xn(In().data[o + Xe]), u(r - Xe, o), r++;
              }
            }
          })(n, e);
      }
      !(function(e, t, n) {
        if (null != e) for (var r = 0; r < e.length; r++) Bu(e[r], t, n);
      })(n.components, r, t);
    }
    function Ni(e, t, n, r, o, i, u) {
      var a = n.blueprint.slice();
      return (
        (a[tt] = 25 | o),
        (a[nt] = a[gt] = e),
        (a[ct] = r),
        (a[lt] = void 0 === u ? (e ? e[lt] : null) : u),
        (a[ft] = t),
        (a[dt] = i || null),
        a
      );
    }
    function Vi(e, t, n, r, o) {
      var i = Pn(),
        u = In(),
        a = e + Xe;
      ngDevMode &&
        He(a, i.length, 'Slot should have been initialized with null'),
        (i[a] = n);
      var s = u.data[a];
      if (null == s) {
        var c = Sn(),
          l = jn();
        (s = u.data[a] = du(i, t, a, r, o, null)),
          c &&
            (!l || null != c.child || (null === s.parent && 2 !== c.type)
              ? l || (c.next = s)
              : (c.child = s));
      }
      return (
        null == u.firstChild && 3 === t && (u.firstChild = s), xn(s), Rn(!0), s
      );
    }
    function Li(e, t) {
      null == t[et].node && (t[et].node = du(t, 2, e, null, null, null)),
        Rn(!0);
      var n = t[et].node;
      return xn(n), (t[ut] = n);
    }
    function Bi(e) {
      var t = e[et];
      t.firstTemplatePass &&
        (t.expandoStartIndex++,
        t.blueprint.push(null),
        t.data.push(null),
        e.push(null));
    }
    function Ui(e, t, n, r) {
      var o,
        i = jn(),
        u = Sn();
      if ((Rn(!0), xn(null), 64 & e[tt])) Qu(Jt(e));
      else
        try {
          Rn(!0),
            xn(null),
            (o = Kn(e, e[ut])),
            Qi(),
            t.template(r, n),
            2 & r ? Fi(e, null) : ((e[et].firstTemplatePass = !1), Zn(!1));
        } finally {
          $n(o, 1 == (1 & r)), Rn(i), xn(u);
        }
    }
    function Hi(e) {
      return void 0 === e && (e = 1), Yn(e);
    }
    function zi(e, t, n, r) {
      var o = bn(),
        i = Kn(e, e[ut]);
      try {
        o.begin && o.begin(), r && (Qi(), r(n || Gi(e), t)), Fi(e, n);
      } finally {
        o.end && o.end(), $n(i);
      }
    }
    function Gi(e) {
      return 1 & e[tt] ? 3 : 2;
    }
    var Zi = null;
    function qi() {
      Zi = 'http://www.w3.org/2000/svg/';
    }
    function Wi() {
      Zi = 'http://www.w3.org/1998/MathML/';
    }
    function Qi() {
      Zi = null;
    }
    function Ki(e, t, n, r) {
      Ji(e, t, n, r), cu();
    }
    function Yi(e, t, n) {
      var r = Pn(),
        o = In(),
        i = mn();
      ngDevMode &&
        Be(
          r[at],
          o.bindingStartIndex,
          'element containers should be created before any bindings'
        ),
        ngDevMode && ngDevMode.rendererCreateComment++;
      var u = i.createComment(ngDevMode ? 'ng-container' : '');
      ngDevMode && er(e - 1),
        Io(u, Vi(e, 4, u, null, t || null), r),
        eu(o, r, n);
    }
    function $i() {
      var e = Sn(),
        t = In();
      jn() ? Rn(!1) : (ngDevMode && Xn(), xn((e = e.parent))),
        ngDevMode && yt(e, 4);
      var n = Tn();
      n && kn(n.addNode(e)), wt(e.flags, t);
    }
    function Ji(e, t, n, r) {
      var o = Pn(),
        i = In();
      ngDevMode &&
        Be(
          o[at],
          i.bindingStartIndex,
          'elements should be created before any bindings '
        ),
        ngDevMode && ngDevMode.rendererCreateElement++;
      var u = Xi(t);
      ngDevMode && er(e - 1);
      var a = Vi(e, 3, u, t, n || null);
      n && ru(u, n), Io(u, a, o), eu(i, o, r), 0 === sn && Dr(u, o), sn++;
    }
    function Xi(e, t) {
      var n = t || mn();
      return ao(n)
        ? n.createElement(e, Zi)
        : null === Zi
        ? n.createElement(e)
        : n.createElementNS(Zi, e);
    }
    function eu(e, t, n, r) {
      if ((void 0 === r && (r = zt), cn)) {
        var o = Sn();
        Gn() &&
          (ngDevMode && ngDevMode.firstTemplatePass++,
          (function(e, t, n, r, o) {
            ngDevMode && Be(Gn(), !0, 'should run on first template pass only');
            var i = o ? { '': -1 } : null,
              u = 0;
            if (n) {
              ju(r, e.data.length, n.length);
              for (var a = 0; a < n.length; a++) {
                var s = n[a];
                s.providersResolver && s.providersResolver(s);
              }
              Du(e, r, n.length);
              for (var a = 0; a < n.length; a++) {
                var s = n[a],
                  c = e.data.length;
                Ru(e, t, s, s.factory),
                  (u += s.hostVars),
                  Au(e.data.length - 1, s, i),
                  _t(c, s.onInit, s.doCheck, e);
              }
            }
            i &&
              (function(e, t, n) {
                if (t)
                  for (
                    var r = (e.localNames = []), o = 0;
                    o < t.length;
                    o += 2
                  ) {
                    var i = n[t[o + 1]];
                    if (null == i)
                      throw new Error(
                        "Export of name '" + t[o + 1] + "' not found!"
                      );
                    r.push(t[o], i);
                  }
              })(r, o, i);
            Eu(e, t, u);
          })(
            e,
            t,
            (function(e, t, n) {
              ngDevMode &&
                Be(Gn(), !0, 'should run on first template pass only');
              var r = e.directiveRegistry,
                o = null;
              if (r)
                for (var i = 0; i < r.length; i++) {
                  var u = r[i];
                  Bo(n, u.selectors) &&
                    (o || (o = []),
                    cr(ir(Sn(), t), t, u.type),
                    Qt(u)
                      ? (4096 & n.flags && oo(n),
                        (n.flags = 4096),
                        o.unshift(u))
                      : o.push(u));
                }
              return o;
            })(e, t, o),
            o,
            n || null
          )),
          (function(e, t, n) {
            var r = n.flags >> 16,
              o = (r + n.flags) & 4095;
            !Gn() && r < o && ir(n, t);
            for (var i = r; i < o; i++) {
              var u = e.data[i];
              Qt(u) && Iu(t, n, u);
              var a = hr(e.data, t, i, n);
              Ou(t, a, u, i);
            }
          })(e, t, o),
          (function(e, t, n) {
            var r = t.localNames;
            if (r)
              for (var o = t.index + 1, i = 0; i < r.length; i += 2) {
                var u = r[i + 1],
                  a = -1 === u ? n(t, e) : e[u];
                e[o++] = a;
              }
          })(t, o, r);
      }
    }
    function tu(e, t, n, r, o, i) {
      return e.ngPrivateData || (e.ngPrivateData = nu(-1, e, t, n, r, o, i));
    }
    function nu(e, t, n, r, o, i, u) {
      ngDevMode && ngDevMode.tView++;
      var a = Xe + n,
        s = a + r,
        c = (function(e, t) {
          var n = new Array(t).fill(null, 0, e).fill(Ho, e);
          return (n[ht] = -1), (n[at] = e), n;
        })(a, s);
      return (c[et] = {
        id: e,
        blueprint: c,
        template: t,
        viewQuery: u,
        node: null,
        data: c.slice(),
        childIndex: -1,
        bindingStartIndex: a,
        expandoStartIndex: s,
        expandoInstructions: null,
        firstTemplatePass: !0,
        initHooks: null,
        checkHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        pipeDestroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: 'function' == typeof o ? o() : o,
        pipeRegistry: 'function' == typeof i ? i() : i,
        firstChild: null
      });
    }
    function ru(e, t) {
      for (var n = mn(), r = ao(n), o = 0; o < t.length; ) {
        var i = t[o];
        if (1 === i) break;
        if (i === io) o += 2;
        else if ((ngDevMode && ngDevMode.rendererSetAttribute++, 0 === i)) {
          var u = t[o + 1],
            a = t[o + 2],
            s = t[o + 3];
          r ? n.setAttribute(e, a, s, u) : e.setAttributeNS(u, a, s), (o += 4);
        } else {
          s = t[o + 1];
          r ? n.setAttribute(e, i, s) : e.setAttribute(i, s), (o += 2);
        }
      }
    }
    function ou(e, t) {
      return new Error('Renderer: ' + e + ' [' + Vt(t) + ']');
    }
    function iu(e, t) {
      ngDevMode && er(-1),
        (function(e) {
          an = e;
        })(e);
      var n = e.createRenderer(null, null),
        r =
          'string' == typeof t
            ? ao(n)
              ? n.selectRootElement(t)
              : n.querySelector(t)
            : t;
      if (ngDevMode && !r)
        throw ou(
          'string' == typeof t
            ? 'Host node with selector not found:'
            : 'Host node is required:',
          t
        );
      return r;
    }
    function uu(e, t, n) {
      void 0 === n && (n = !1);
      var r = Pn(),
        o = Sn();
      if ((ngDevMode && mt(o, 3, 0, 4), 3 === o.type)) {
        var i = zt(o, r);
        ngDevMode && ngDevMode.rendererAddEventListener++;
        var u = mn();
        if (ao(u)) {
          su(r, u.listen(i, e, t));
        } else {
          var a = (function(e) {
            return function(t) {
              !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
            };
          })(t);
          i.addEventListener(e, a, n);
          var s = Vn(r);
          s.push(a), Gn() && Ln(r).push(e, o.index, s.length - 1, n);
        }
      }
      void 0 === o.outputs && (o.outputs = hu(o.flags, 1));
      var c,
        l = o.outputs;
      l &&
        (c = l[e]) &&
        (function(e, t, n) {
          for (var r = 0; r < t.length; r += 2) {
            ngDevMode && er(t[r], e);
            var o = e[t[r]][t[r + 1]].subscribe(n);
            au(e, o, o.unsubscribe);
          }
        })(r, c, t);
    }
    function au(e, t, n) {
      e || (e = Pn()),
        Vn(e).push(t),
        e[et].firstTemplatePass && Ln(e).push(n, e[st].length - 1);
    }
    function su(e, t) {
      Vn(e).push(t),
        e[et].firstTemplatePass && Ln(e).push(e[st].length - 1, null);
    }
    function cu() {
      var e = Sn();
      jn() ? Rn(!1) : (ngDevMode && Xn(), xn((e = e.parent))),
        ngDevMode && yt(e, 3);
      var t = Tn();
      t && kn(t.addNode(e)), wt(e.flags, In()), sn--;
    }
    function lu(e, t, n, r) {
      if (n !== Ho) {
        var o = Pn(),
          i = mn(),
          u = Ht(e, o);
        if (null == n)
          ngDevMode && ngDevMode.rendererRemoveAttribute++,
            ao(i) ? i.removeAttribute(u, t) : u.removeAttribute(t);
        else {
          ngDevMode && ngDevMode.rendererSetAttribute++;
          var a = null == r ? Vt(n) : r(n);
          ao(i) ? i.setAttribute(u, t, a) : u.setAttribute(t, a);
        }
      }
    }
    function fu(e, t, n, r) {
      if (n !== Ho) {
        var o,
          i = Pn(),
          u = Ht(e, i),
          a = Gt(e, i),
          s = Da(a);
        if (s && (o = s[t]))
          pu(i, o, n),
            Wt(a) &&
              (function(e, t) {
                var n = Zt(t, e);
                2 & n[tt] || (n[tt] |= 4);
              })(i, e + Xe);
        else if (3 === a.type) {
          var c = mn();
          (n = null != r ? r(n) : n),
            ngDevMode && ngDevMode.rendererSetProperty++,
            ao(c)
              ? c.setProperty(u, t, n)
              : u.setProperty
              ? u.setProperty(t, n)
              : (u[t] = n);
        }
      }
    }
    function du(e, t, n, r, o, i) {
      var u = Sn();
      ngDevMode && ngDevMode.tNode++;
      var a = jn() ? u : u && u.parent,
        s = a && e && a !== e[ut] ? a : null;
      return {
        type: t,
        index: n,
        injectorIndex: s ? s.injectorIndex : -1,
        flags: 0,
        providerIndexes: 0,
        tagName: r,
        attrs: o,
        localNames: null,
        initialInputs: void 0,
        inputs: void 0,
        outputs: void 0,
        tViews: i,
        next: null,
        child: null,
        parent: s,
        detached: null,
        stylingTemplate: null,
        projection: null
      };
    }
    function pu(e, t, n) {
      for (var r = 0; r < t.length; r += 2)
        ngDevMode && er(t[r], e), (e[t[r]][t[r + 1]] = n);
    }
    function hu(e, t) {
      var n = In(),
        r = 4095 & e,
        o = null;
      if (r > 0)
        for (
          var i = e >> 16, u = i + r, a = 0 === t, s = n.data, c = i;
          c < u;
          c++
        ) {
          var l = s[c],
            f = a ? l.inputs : l.outputs;
          for (var d in f)
            if (f.hasOwnProperty(d)) {
              o = o || {};
              var p = f[d];
              o.hasOwnProperty(d) ? o[d].push(c, p) : (o[d] = [c, p]);
            }
        }
      return o;
    }
    function vu(e, t, n, r) {
      if (void 0 != r)
        return (function(e, t, n, r) {
          var o = Ht(e, Pn());
          ngDevMode && Ge(o, 'could not locate node');
          var i = o.hostStylingHack[r].classDeclarations[t],
            u = mn();
          if (ao(u)) n ? u.addClass(o, i) : u.removeClass(o, i);
          else {
            var a = o.classList;
            n ? a.add(i) : a.remove(i);
          }
        })(e, t, n, r);
      var o = n instanceof Go ? n : !!n;
      !(function(e, t, n) {
        ei(e, t + e[4], n);
      })(Wo(e, Pn()), t, o);
    }
    function gu(e, t, n, r) {
      if (void 0 === r) {
        var o = Sn(),
          i = Da(o);
        if (!o.stylingTemplate) {
          var u = !(!i || !i.hasOwnProperty('class'));
          u && (o.flags |= 32768),
            (o.stylingTemplate = (function(e, t, n, r) {
              var o = [null],
                i = qo(null, n, o),
                u = {},
                a = {},
                s = 0;
              if (t)
                for (var c = !1, l = 0; l < t.length; l++)
                  if (1 === (h = t[l])) c = !0;
                  else {
                    var f = h;
                    if (c) {
                      var d = t[++l];
                      o.push(d), (u[f] = o.length - 1);
                    } else s++, (u[f] = 0);
                  }
              i[4] = s;
              var p = r ? [] : null;
              if (e)
                for (c = !1, l = 0; l < e.length; l++) {
                  var h;
                  if (1 === (h = e[l])) c = !0;
                  else {
                    var v = h;
                    c
                      ? ((d = e[++l]),
                        o.push(d),
                        (a[v] = o.length - 1),
                        p && p.push(v))
                      : (a[v] = 0);
                  }
                }
              var g = Object.keys(u),
                y = Object.keys(a),
                m = g.length,
                b = g.length + y.length,
                _ = 4 * b * 2 + 8;
              for (l = 8; l < _; l++) i.push(null);
              var w = 4 * b + 8;
              for (l = 0; l < b; l++) {
                var C = l >= m,
                  D = ((f = C ? y[l - m] : g[l]), C ? a[f] : u[f]),
                  E = o[D],
                  O = 4 * l + w,
                  S = 4 * l + 8,
                  x = Ti(f, C, n || null);
                wi(i, S, si(x, D, O)),
                  hi(i, S, f),
                  vi(i, S, null),
                  mi(i, S, 0),
                  wi(i, O, si(x | (null !== E ? 1 : 0), D, S)),
                  hi(i, O, f),
                  vi(i, O, null),
                  mi(i, O, 0);
              }
              return (
                wi(i, 3, si(0, 0, w) | (r ? 16 : 0)),
                Si(i, o.length > 1),
                p && (i[6] = p.join(' ')),
                i
              );
            })(e, t, n, u));
        }
        if ((t && t.length) || (e && e.length)) {
          var a = o.index - Xe;
          if (Ea(o)) {
            var s = Wo(a, Pn())[6];
            pu(Pn(), o.inputs.class, s);
          }
          yu(a);
        }
      } else
        Mn() &&
          (function(e, t, n, r) {
            var o = zt(Sn(), Pn());
            ngDevMode && Ge(o, 'expecting parent DOM node'),
              ((o.hostStylingHack || (o.hostStylingHack = {}))[r] = {
                classDeclarations: _u(e),
                styleDeclarations: _u(t),
                styleSanitizer: n
              });
          })(e || null, t || null, n || null, r);
    }
    function yu(e, t) {
      if (void 0 == t) {
        var n = Pn(),
          r = 0 != (1 & n[tt]);
        if (ti(Wo(e, n), mn(), n, r) > 0) Wu(Jt(n), 2);
      }
    }
    function mu(e, t, n, r, o) {
      if (void 0 != o)
        return (function(e, t, n, r, o) {
          throw new Error(
            'unimplemented. Should not be needed by ViewEngine compatibility'
          );
        })();
      var i = null;
      n && (i = r ? Vt(n) + r : n), ei(Wo(e, Pn()), t, i);
    }
    function bu(e, t, n, r) {
      if (void 0 != r)
        return (function(e, t, n, r) {
          throw new Error(
            'unimplemented. Should not be needed by ViewEngine compatibility'
          );
        })();
      var o = Pn(),
        i = Gt(e, o),
        u = Wo(e, o);
      if (Ea(i) && t !== Ho) {
        var a = u[6],
          s = (a.length ? a + ' ' : '') + t;
        pu(Pn(), i.inputs.class, s);
      }
      !(function(e, t, n) {
        n = n || null;
        var r = e[5],
          o = t instanceof Go ? new Mi(t, r, 1) : null,
          i = n instanceof Go ? new Mi(n, r, 2) : null,
          u = o ? t.value : t,
          a = i ? n.value : n,
          s = Oi(e) || u === Ho || u === e[6],
          c = a === Ho || a === e[7];
        if (!s || !c) {
          (e[6] = u), (e[7] = a);
          var l = Jo,
            f = !1,
            d = !1,
            p = o ? 1 : 0;
          gi(e, o, 1) && (yi(e, o, 1), (d = !0));
          var h = i ? 3 : 0;
          gi(e, i, 3) && (yi(e, i, 3), (d = !0)),
            s ||
              ('string' == typeof u
                ? ((l = u.split(/\s+/)), (f = !0))
                : (l = u ? Object.keys(u) : Jo));
          for (
            var v = u || Xo,
              g = a ? Object.keys(a) : Jo,
              y = a || Xo,
              m = g.length,
              b = !1,
              _ = di(e),
              w = 0,
              C = g.length + l.length;
            _ < e.length && w < C;

          ) {
            var D = w >= m;
            if ((!D && !c) || (D && !s)) {
              var E = D ? w - m : w,
                O = D ? l[E] : g[E],
                S = D ? !!f || v[O] : y[O],
                x = D ? p : h;
              if ((V = Ei(e, _)) === O) {
                var A = Di(e, _),
                  j = Ci(e, _);
                mi(e, _, x),
                  ki(j, A, S) &&
                    (vi(e, _, S),
                    (d = d || !!x),
                    ki(j, (k = ci(e, j)), S) && (oi(e, _, !0), (b = !0)));
              } else {
                var R = Ai(e, O, _);
                if (R > 0) {
                  var I = Di(e, R),
                    T = Ci(e, R);
                  if ((ji(e, _, R), ki(T, I, S))) {
                    var k = ci(e, T);
                    vi(e, _, S),
                      ki(T, k, S) && (oi(e, _, !0), (d = d || !!x), (b = !0));
                  }
                } else {
                  var M = Ti(O, D, pi(e));
                  (d = d || !!x), Ri(e, _, D, O, M, S, x), (b = !0);
                }
              }
            }
            (_ += 4), w++;
          }
          for (; _ < e.length; ) {
            var P = 2 == (2 & (j = Ci(e, _)));
            ((!P && !c) || (P && !s)) &&
              Ii((A = Di(e, _)), P) &&
              (oi(e, _, !0),
              vi(e, _, null),
              mi(e, _, (x = P ? p : h)),
              (b = !0)),
              (_ += 4);
          }
          for (var F = pi(e); w < C; ) {
            var N = w >= m;
            if ((!N && !c) || (N && !s)) {
              E = N ? w - m : w;
              var V = N ? l[E] : g[E];
              (A = N ? !!f || v[V] : y[V]),
                (j = 1 | Ti(V, N, F)),
                (x = N ? p : h),
                e.push(j, V, A, x),
                (b = !0);
            }
            w++;
          }
          b && Si(e, !0), d && xi(e, !0);
        }
      })(u, t, n);
    }
    function _u(e) {
      return e || [];
    }
    function wu(e, t) {
      var n = Pn();
      ngDevMode &&
        Be(
          n[at],
          In().bindingStartIndex,
          'text nodes should be created before any bindings'
        ),
        ngDevMode && ngDevMode.rendererCreateTextNode++;
      var r = mo(t, mn()),
        o = Vi(e, 3, r, null, null);
      Rn(!1), Io(r, o, n);
    }
    function Cu(e, t) {
      if (t !== Ho) {
        ngDevMode && er(e + Xe);
        var n = Ht(e, Pn());
        ngDevMode && Ge(n, 'native element should exist'),
          ngDevMode && ngDevMode.rendererSetText++;
        var r = mn();
        ao(r) ? r.setValue(n, Vt(t)) : (n.textContent = Vt(t));
      }
    }
    function Du(e, t, n) {
      ngDevMode &&
        Be(
          e.firstTemplatePass,
          !0,
          'Expando block should only be generated on first template pass.'
        );
      var r = -(t.index - Xe),
        o = 65535 & t.providerIndexes,
        i = e.data.length - o;
      (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n);
    }
    function Eu(e, t, n) {
      for (var r = 0; r < n; r++)
        t.push(Ho), e.blueprint.push(Ho), e.data.push(null);
    }
    function Ou(e, t, n, r) {
      var o = Sn();
      (Su(e, o, t, n),
      ngDevMode && Ge(o, 'previousOrParentTNode'),
      o &&
        o.attrs &&
        (function(e, t, n, r) {
          var o = r.initialInputs;
          (void 0 === o || e >= o.length) &&
            (o = (function(e, t, n) {
              var r = n.initialInputs || (n.initialInputs = []);
              r[e] = null;
              var o = n.attrs,
                i = 0;
              for (; i < o.length; ) {
                var u = o[i];
                if (1 === u) break;
                if (0 !== u) {
                  var a = t[u],
                    s = o[i + 1];
                  if (void 0 !== a) {
                    var c = r[e] || (r[e] = []);
                    c.push(a, s);
                  }
                  i += 2;
                } else i += 4;
              }
              return r;
            })(e, n, r));
          var i = o[e];
          if (i) for (var u = 0; u < i.length; u += 2) t[i[u]] = i[u + 1];
        })(r, t, n.inputs, o),
      n.contentQueries && n.contentQueries(r),
      Qt(n)) && (Zt(o.index, e)[ct] = t);
    }
    function Su(e, t, n, r) {
      var o = zt(t, e);
      ngDevMode &&
        Be(
          e[at],
          In().bindingStartIndex,
          'directives should be created before any bindings'
        ),
        ngDevMode && Jn(),
        Dr(n, e),
        o && Dr(o, e),
        null != r.attributes && 3 == t.type && ru(o, r.attributes);
    }
    function xu(e) {
      ngDevMode &&
        Be(Gn(), !0, 'Should only be called in first template pass.');
      var t = In();
      (t.components || (t.components = [])).push(e.index);
    }
    function Au(e, t, n) {
      n && (t.exportAs && (n[t.exportAs] = e), t.template && (n[''] = e));
    }
    function ju(e, t, n) {
      ngDevMode && Be(Gn(), !0, 'expected firstTemplatePass to be true');
      var r = e.flags;
      ngDevMode &&
        Be(
          0 === r || 4096 === r,
          !0,
          'expected node flags to not be initialized'
        ),
        ngDevMode && Ue(n, 4095, 'Reached the max number of directives'),
        (e.flags = (t << 16) | (4096 & r) | n),
        (e.providerIndexes = t);
    }
    function Ru(e, t, n, r) {
      e.data.push(n);
      var o = new $e(r, Qt(n), null);
      e.blueprint.push(o),
        t.push(o),
        (function(e, t) {
          ngDevMode &&
            Be(Gn(), !0, 'Should only be called in first template pass.'),
            e.expandoInstructions.push(t.hostBindings || Rr),
            t.hostVars && e.expandoInstructions.push(t.hostVars);
        })(e, n);
    }
    function Iu(e, t, n) {
      var r = zt(t, e),
        o = tu(
          n.template,
          n.consts,
          n.vars,
          n.directiveDefs,
          n.pipeDefs,
          n.viewQuery
        ),
        i = Zu(
          e,
          t.index,
          Ni(Pn(), bn().createRenderer(r, n), o, null, n.onPush ? 4 : 2, _n())
        );
      (i[ut] = t), (i[it] = e[t.index]), (e[t.index] = i), Gn() && xu(t);
    }
    function Tu(e, t, n, r, o) {
      return [o ? -1 : 0, [], n, null, null, e, r, xo(t, n)];
    }
    function ku(e, t, n, r, o, i, u, a) {
      var s = Pn(),
        c = In(),
        l = Pu(e, o || null, i || null);
      Gn() &&
        (l.tViews = nu(-1, t, n, r, c.directiveRegistry, c.pipeRegistry, null)),
        eu(c, s, u, a);
      var f = Tn(),
        d = Sn();
      f && kn(f.addNode(d)), wt(l.flags, c), Rn(!1);
    }
    function Mu(e) {
      var t = Pu(e, null, null);
      Gn() && (t.tViews = []), Rn(!1);
    }
    function Pu(e, t, n) {
      var r = Pn();
      ngDevMode &&
        Be(
          r[at],
          In().bindingStartIndex,
          'container nodes should be created before any bindings'
        );
      var o = e + Xe,
        i = mn().createComment(ngDevMode ? 'container' : '');
      ngDevMode && ngDevMode.rendererCreateComment++;
      var u = Vi(e, 0, i, t, n),
        a = (r[o] = Tu(r[o], u, r, i));
      Io(i, u, r), Zu(r, e + Xe, a);
      var s = Tn();
      return s && (a[ot] = s.container()), ngDevMode && yt(Sn(), 0), u;
    }
    function Fu(e) {
      var t = Pn(),
        n = In(),
        r = Lt(e, n.data);
      xn(r),
        ngDevMode && yt(r, 0),
        Rn(!0),
        (t[e + Xe][kt] = 0),
        Un() || Ot(t, n, Mn());
    }
    function Nu() {
      var e = Sn();
      jn()
        ? Rn(!1)
        : (ngDevMode && yt(e, 2), ngDevMode && Xn(), xn((e = e.parent))),
        ngDevMode && yt(e, 0);
      for (var t = Pn()[e.index], n = t[kt]; n < t[Mt].length; ) Co(t, e, n);
    }
    function Vu(e, t, n) {
      var r = Pn(),
        o = Sn(),
        i = 2 === o.type ? o.parent : o,
        u = r[i.index];
      ngDevMode && yt(i, 0);
      var a = (function(e, t, n, r) {
        for (var o = e[Mt], i = n; i < o.length; i++) {
          var u = o[i][et].id;
          if (u === r) return o[i];
          if (!(u < r)) break;
          Co(e, t, i);
        }
        return null;
      })(u, i, u[kt], e);
      return (
        a
          ? (Rn(!0), Kn(a, a[et].node))
          : ((a = Ni(
              Pn(),
              mn(),
              (function(e, t, n, r) {
                var o = In();
                ngDevMode && yt(r, 0);
                var i = r.tViews;
                ngDevMode && Ge(i, 'TView expected'),
                  ngDevMode &&
                    Be(Array.isArray(i), !0, 'TViews should be in an array'),
                  (e >= i.length || null == i[e]) &&
                    (i[e] = nu(
                      e,
                      null,
                      t,
                      n,
                      o.directiveRegistry,
                      o.pipeRegistry,
                      null
                    ));
                return i[e];
              })(e, t, n, i),
              null,
              2,
              _n()
            )),
            u[ot] && (a[ot] = u[ot].createView()),
            Li(e, a),
            Kn(a, a[et].node)),
        u && (Mn() && _o(a, u, r, u[kt], -1), u[kt]++),
        Gi(a)
      );
    }
    function Lu() {
      var e = Pn(),
        t = e[ut];
      Fi(e, null), $n(e[nt]), xn(t), Rn(!1);
    }
    function Bu(e, t, n) {
      ngDevMode && er(e);
      var r = Zt(e, Pn());
      ngDevMode && yt(In().data[e], 3),
        Uu(r) &&
          6 & r[tt] &&
          (t &&
            (function(e) {
              for (var t = e[et], n = e.length; n < t.blueprint.length; n++)
                e[n] = t.blueprint[n];
            })(r),
          $u(r, r[ct], n));
    }
    function Uu(e) {
      return 8 == (8 & e[tt]);
    }
    function Hu(e, t) {
      var n = go(Pn())[ut];
      if (!n.projection)
        for (
          var r = e ? e.length + 1 : 1,
            o = (n.projection = new Array(r).fill(null)),
            i = o.slice(),
            u = n.child;
          null !== u;

        ) {
          var a = e ? Uo(u, e, t) : 0,
            s = u.next;
          i[a] ? (i[a].next = u) : ((o[a] = u), (u.next = null)),
            (i[a] = u),
            (u = s);
        }
    }
    var zu = [];
    function Gu(e, t, n) {
      void 0 === t && (t = 0);
      var r = Pn(),
        o = Vi(e, 1, null, null, n || null);
      null === o.projection && (o.projection = t), Rn(!1);
      for (var i = go(r), u = i[ut].projection[t], a = i[nt], s = -1; u; ) {
        if (1 === u.type) {
          var c = go(a),
            l = c[ut].projection[u.projection];
          if (l) {
            (zu[++s] = u), (zu[++s] = a), (u = l), (a = c[nt]);
            continue;
          }
        } else (u.flags |= 8192), Po(u, o, r, a);
        null === u.next && a !== i[nt] && ((a = zu[s--]), (u = zu[s--])),
          (u = u.next);
      }
    }
    function Zu(e, t, n) {
      var r = In(),
        o = Gn();
      return e[pt] ? (e[pt][rt] = n) : o && (r.childIndex = t), (e[pt] = n), n;
    }
    function qu(e) {
      for (var t = e; t && !(64 & t[tt]); ) (t[tt] |= 4), (t = t[nt]);
      (t[tt] |= 4),
        ngDevMode && Ge(t[ct], 'rootContext should be defined'),
        Wu(t[ct], 1);
    }
    function Wu(e, t) {
      var n,
        r = 0 === e.flags;
      ((e.flags |= t), r && e.clean == Pi) &&
        ((e.clean = new Promise(function(e) {
          return (n = e);
        })),
        e.scheduler(function() {
          if ((1 & e.flags && ((e.flags &= -2), Qu(e)), 2 & e.flags)) {
            e.flags &= -3;
            var t = e.playerHandler;
            t && t.flushPlayers();
          }
          (e.clean = Pi), n(null);
        }));
    }
    function Qu(e) {
      for (var t = 0; t < e.components.length; t++) {
        var n = e.components[t];
        zi(en(n), n, 2);
      }
    }
    function Ku(e) {
      $u(Cr(e), e, null);
    }
    function Yu(e) {
      Qu(e[ct]);
    }
    function $u(e, t, n) {
      var r = e[et],
        o = Kn(e, e[ut]),
        i = r.template,
        u = r.viewQuery;
      try {
        Qi(),
          (function(e, t, n, r) {
            e && (1 === t || (null === t && 1 & n)) && e(1, r);
          })(u, n, e[tt], t),
          i(n || Gi(e), t),
          Fi(e, n),
          (function(e, t, n) {
            e && 2 & t && e(2, n);
          })(u, e[tt], t);
      } finally {
        $n(o, 1 === n);
      }
    }
    function Ju(e) {
      ngDevMode && Ge(e, 'component'), qu(Cr(e));
    }
    function Xu(e) {
      return ha(Pn()[at]++, e) ? e : Ho;
    }
    function ea(e) {
      ngDevMode && He(2, e.length, 'should have at least 3 values'),
        ngDevMode && Be(e.length % 2, 1, 'should have an odd number of values');
      for (var t = !1, n = 1; n < e.length; n += 2)
        ha(Pn()[at]++, e[n]) && (t = !0);
      if (!t) return Ho;
      var r = e[0];
      for (n = 1; n < e.length; n += 2) r += Vt(e[n]) + e[n + 1];
      return r;
    }
    function ta(e, t, n) {
      return ha(Pn()[at]++, t) ? e + Vt(t) + n : Ho;
    }
    function na(e, t, n, r, o) {
      var i = Pn(),
        u = ga(i[at], t, r);
      return (i[at] += 2), u ? e + Vt(t) + n + Vt(r) + o : Ho;
    }
    function ra(e, t, n, r, o, i, u) {
      var a = Pn(),
        s = ya(a[at], t, r, i);
      return (a[at] += 3), s ? e + Vt(t) + n + Vt(r) + o + Vt(i) + u : Ho;
    }
    function oa(e, t, n, r, o, i, u, a, s) {
      var c = Pn(),
        l = ma(c[at], t, r, i, a);
      return (
        (c[at] += 4), l ? e + Vt(t) + n + Vt(r) + o + Vt(i) + u + Vt(a) + s : Ho
      );
    }
    function ia(e, t, n, r, o, i, u, a, s, c, l) {
      var f = Pn(),
        d = ma(f[at], t, r, i, a);
      return (
        (d = ha(f[at] + 4, c) || d),
        (f[at] += 5),
        d ? e + Vt(t) + n + Vt(r) + o + Vt(i) + u + Vt(a) + s + Vt(c) + l : Ho
      );
    }
    function ua(e, t, n, r, o, i, u, a, s, c, l, f, d) {
      var p = Pn(),
        h = ma(p[at], t, r, i, a);
      return (
        (h = ga(p[at] + 4, c, f) || h),
        (p[at] += 6),
        h
          ? e +
            Vt(t) +
            n +
            Vt(r) +
            o +
            Vt(i) +
            u +
            Vt(a) +
            s +
            Vt(c) +
            l +
            Vt(f) +
            d
          : Ho
      );
    }
    function aa(e, t, n, r, o, i, u, a, s, c, l, f, d, p, h) {
      var v = Pn(),
        g = ma(v[at], t, r, i, a);
      return (
        (g = ya(v[at] + 4, c, f, p) || g),
        (v[at] += 7),
        g
          ? e +
            Vt(t) +
            n +
            Vt(r) +
            o +
            Vt(i) +
            u +
            Vt(a) +
            s +
            Vt(c) +
            l +
            Vt(f) +
            d +
            Vt(p) +
            h
          : Ho
      );
    }
    function sa(e, t, n, r, o, i, u, a, s, c, l, f, d, p, h, v, g) {
      var y = Pn(),
        m = ma(y[at], t, r, i, a);
      return (
        (m = ma(y[at] + 4, c, f, p, v) || m),
        (y[at] += 8),
        m
          ? e +
            Vt(t) +
            n +
            Vt(r) +
            o +
            Vt(i) +
            u +
            Vt(a) +
            s +
            Vt(c) +
            l +
            Vt(f) +
            d +
            Vt(p) +
            h +
            Vt(v) +
            g
          : Ho
      );
    }
    function ca(e, t) {
      var n = In(),
        r = e + Xe;
      r >= n.data.length && (n.data[r] = null), (Pn()[r] = t);
    }
    function la(e) {
      return Lt(e, Nn());
    }
    function fa(e) {
      var t = Pn();
      return (
        ngDevMode &&
          Ge(
            t[vt],
            'Content QueryList array should be defined if reading a query.'
          ),
        ngDevMode && er(e, t[vt]),
        t[vt][e]
      );
    }
    function da(e) {
      return Lt(e, Pn());
    }
    function pa(e) {
      var t = Pn();
      return (
        ngDevMode && er(t[e]),
        ngDevMode && Ue(t[e], Ho, 'Stored value should never be NO_CHANGE.'),
        t[e]
      );
    }
    function ha(e, t) {
      var n = Pn(),
        r = Un();
      if (
        (ngDevMode && Ue(t, Ho, 'Incoming value should never be NO_CHANGE.'),
        ngDevMode &&
          He(e, n.length, 'Slot should have been initialized to NO_CHANGE'),
        n[e] === Ho)
      )
        n[e] = t;
      else {
        if (
          !/**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
          (function(e, t, n) {
            return ngDevMode && n ? !At(e, t) : !(e != e && t != t) && e !== t;
          })(n[e], t, r)
        )
          return !1;
        !(function(e, t, n, r) {
          if (t) {
            var o =
              "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
              n +
              "'. Current value: '" +
              r +
              "'.";
            throw (e &&
              (o +=
                ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
            new Error(o));
          }
        })(Mn(), r, n[e], t),
          (n[e] = t);
      }
      return !0;
    }
    function va(e, t) {
      return (Pn()[e] = t);
    }
    function ga(e, t, n) {
      var r = ha(e, t);
      return ha(e + 1, n) || r;
    }
    function ya(e, t, n, r) {
      var o = ga(e, t, n);
      return ha(e + 2, r) || o;
    }
    function ma(e, t, n, r, o) {
      var i = ga(e, t, n);
      return ga(e + 2, r, o) || i;
    }
    function ba(e, t) {
      return (
        void 0 === t && (t = Te.Default), (e = kr(e)), fr(Sn(), Pn(), e, t)
      );
    }
    function _a(e) {
      return lr(Sn(), e);
    }
    function wa(e, t) {
      var n = Pn(),
        r = In(),
        o = (n[vt] || (n[vt] = [])).push(e);
      if (Gn()) {
        var i = r.contentQueries || (r.contentQueries = []);
        t !==
          (r.contentQueries.length
            ? r.contentQueries[r.contentQueries.length - 2]
            : -1) && i.push(t, o - 1);
      }
    }
    var Ca = Pi;
    function Da(e) {
      return e
        ? (void 0 === e.inputs && (e.inputs = hu(e.flags, 0)), e.inputs)
        : null;
    }
    function Ea(e) {
      return 32768 & e.flags;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Oa,
      Sa,
      xa,
      Aa = (function() {
        function e(e, t, n) {
          (this._context = t),
            (this._componentIndex = n),
            (this._appRef = null),
            (this._viewContainerRef = null),
            (this._tViewNode = null),
            (this._view = e);
        }
        return (
          Object.defineProperty(e.prototype, 'rootNodes', {
            get: function() {
              if (null == this._view[it]) {
                var e = this._view[ut];
                return (function e(t, n, r) {
                  var o = n.child;
                  for (; o; )
                    r.push(zt(o, t)), 4 === o.type && e(t, o, r), (o = o.next);
                  return r;
                })(
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */ this._view,
                  e,
                  []
                );
              }
              return [];
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'context', {
            get: function() {
              return this._context ? this._context : this._lookUpContext();
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'destroyed', {
            get: function() {
              return 32 == (32 & this._view[tt]);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.destroy = function() {
            this._viewContainerRef &&
              Uu(this._view) &&
              (this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
              (this._viewContainerRef = null)),
              Eo(this._view);
          }),
          (e.prototype.onDestroy = function(e) {
            su(this._view, e);
          }),
          (e.prototype.markForCheck = function() {
            qu(this._view);
          }),
          (e.prototype.detach = function() {
            this._view[tt] &= -9;
          }),
          (e.prototype.reattach = function() {
            this._view[tt] |= 8;
          }),
          (e.prototype.detectChanges = function() {
            var e = bn();
            e.begin && e.begin(), Ku(this.context), e.end && e.end();
          }),
          (e.prototype.checkNoChanges = function() {
            !(function(e) {
              Hn(!0);
              try {
                Ku(e);
              } finally {
                Hn(!1);
              }
            })(this.context);
          }),
          (e.prototype.attachToViewContainerRef = function(e) {
            this._viewContainerRef = e;
          }),
          (e.prototype.detachFromAppRef = function() {
            this._appRef = null;
          }),
          (e.prototype.attachToAppRef = function(e) {
            this._appRef = e;
          }),
          (e.prototype._lookUpContext = function() {
            return (this._context = this._view[nt][this._componentIndex]);
          }),
          e
        );
      })(),
      ja = (function(e) {
        function t(t) {
          var n = e.call(this, t, null, -1) || this;
          return (n._view = t), n;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.detectChanges = function() {
            Yu(this._view);
          }),
          (t.prototype.checkNoChanges = function() {
            !(function(e) {
              Hn(!0);
              try {
                Yu(e);
              } finally {
                Hn(!1);
              }
            })(this._view);
          }),
          Object.defineProperty(t.prototype, 'context', {
            get: function() {
              return null;
            },
            enumerable: !0,
            configurable: !0
          }),
          t
        );
      })(Aa);
    function Ra(e, t, n) {
      return (
        Oa ||
          (Oa = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return Object(r.c)(t, e), t;
          })(e)),
        new Oa(zt(t, n))
      );
    }
    function Ia(e, t, n, o) {
      if (
        (Sa ||
          (Sa = (function(e) {
            function t(t, n, r, o, i, u) {
              var a = e.call(this) || this;
              return (
                (a._declarationParentView = t),
                (a.elementRef = n),
                (a._tView = r),
                (a._renderer = o),
                (a._queries = i),
                (a._injectorIndex = u),
                a
              );
            }
            return (
              Object(r.c)(t, e),
              (t.prototype.createEmbeddedView = function(e, t, n, r, o) {
                var i = (function(e, t, n, r, o, i) {
                  var u = jn(),
                    a = Sn();
                  Rn(!0), xn(null);
                  var s = Ni(n, r, e, t, 2, _n());
                  return (
                    (s[gt] = n),
                    o && (s[ot] = o.createView()),
                    Li(-1, s),
                    e.firstTemplatePass && (e.node.injectorIndex = i),
                    Rn(u),
                    xn(a),
                    s
                  );
                })(
                  this._tView,
                  e,
                  this._declarationParentView,
                  this._renderer,
                  this._queries,
                  this._injectorIndex
                );
                t && _o(i, t, r, o, n.index), Ui(i, this._tView, e, 1);
                var u = new Aa(i, e, -1);
                return (u._tViewNode = i[ut]), u;
              }),
              t
            );
          })(e)),
        0 === n.type)
      ) {
        var i = o[n.index];
        return (
          ngDevMode && Ge(n.tViews, 'TView must be allocated'),
          new Sa(o, Ra(t, n, o), n.tViews, mn(), i[ot], n.injectorIndex)
        );
      }
      return null;
    }
    var Ta = (function() {
      function e(e, t) {
        (this._tNode = e), (this._hostView = t);
      }
      return (
        (e.prototype.get = function(e, t) {
          return fr(this._tNode, this._hostView, e, Te.Default, t);
        }),
        e
      );
    })();
    function ka(e, t, n) {
      if (Wt(e)) {
        var r = e.flags >> 16,
          o = Zt(e.index, t);
        return new Aa(o, n, r);
      }
      if (3 === e.type) {
        var i = go(t);
        return new Aa(i, i[ct], -1);
      }
      return null;
    }
    function Ma(e) {
      if (!(e instanceof Node))
        throw new Error('Expecting instance of DOM Node');
      var t = Ba(e);
      return (
        void 0 === t.component &&
          (t.component = (function(e, t) {
            var n = t[et].data[e],
              r = Ar(n);
            return 4096 & n.flags ? t[r] : null;
          })(t.nodeIndex, t.lViewData)),
        t.component
      );
    }
    function Pa(e) {
      for (var t = Ba(e).lViewData; t[nt] && null === t[it]; ) t = t[nt];
      return 64 & t[tt] ? null : t[ct];
    }
    function Fa(e) {
      return (function(e) {
        var t;
        Array.isArray(e)
          ? (ngDevMode && Ge(e, 'lViewData'), (t = e))
          : (ngDevMode && Ge(e, 'component'), (t = en(e)));
        for (; t && !(64 & t[tt]); ) t = t[nt];
        return t;
      })(Array.isArray(e) ? e : Ba(e).lViewData)[ct];
    }
    function Na(e) {
      return Object(r.g)(Fa(e).components);
    }
    function Va(e) {
      var t = Ba(e),
        n = t.lViewData[et].data[t.nodeIndex];
      return new Ta(n, t.lViewData);
    }
    function La(e) {
      var t = Ba(e);
      return (
        void 0 === t.directives &&
          (t.directives = xr(t.nodeIndex, t.lViewData, !1)),
        t.directives || []
      );
    }
    function Ba(e) {
      var t = _r(e);
      if (!t)
        throw new Error(
          ngDevMode
            ? 'Unable to find context associated with ' + Vt(e)
            : 'Invalid ng target'
        );
      return t;
    }
    function Ua(e) {
      var t = Ba(e);
      return (
        void 0 === t.localRefs &&
          (t.localRefs = (function(e, t) {
            var n = e[et].data[t];
            if (n && n.localNames) {
              for (var r = {}, o = 0; o < n.localNames.length; o += 2) {
                var i = n.localNames[o],
                  u = n.localNames[o + 1];
                r[i] = -1 === u ? zt(n, e) : e[u];
              }
              return r;
            }
            return null;
          })(t.lViewData, t.nodeIndex)),
        t.localRefs || {}
      );
    }
    function Ha(e) {
      return _r(e).native;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function za(e, t) {
      var n = _r(e);
      if (n) {
        var r = n.native,
          o = n.lViewData,
          i = (function(e, t) {
            if (!(t = t || _r(e))) return ngDevMode && $o(), null;
            var n = t.lViewData,
              r = Wo(t.nodeIndex - Xe, n);
            return Ko(r) || Yo(r);
          })(r, n),
          u = Fa(o);
        Qo(i, u, r, t, 0, e), Wu(u, 2);
      } else ngDevMode && $o();
    }
    function Ga(e) {
      var t = _r(e);
      if (!t) return ngDevMode && $o(), [];
      var n = Wo(t.nodeIndex - Xe, t.lViewData),
        r = n ? Ko(n) : null;
      return r
        ? (function(e) {
            for (var t = [], n = e[0], r = 2; r < n; r += 2) {
              var o = e[r];
              o && t.push(o);
            }
            for (r = n; r < e.length; r++) t.push(e[r]);
            return t;
          })(r)
        : [];
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Za = 'ng',
      qa = !1;
    function Wa() {
      qa ||
        ((qa = !0),
        Qa('getComponent', Ma),
        Qa('getViewComponent', Pa),
        Qa('getHostElement', Ha),
        Qa('getInjector', Va),
        Qa('getRootComponents', Na),
        Qa('getDirectives', La),
        Qa('getPlayers', Ga),
        Qa('markDirty', Ju));
    }
    function Qa(e, t) {
      var n = re;
      if ((ngDevMode && Ge(t, 'function not defined'), n)) {
        var r = n[Za];
        r || (r = n[Za] = {}), (r[e] = t);
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Ka(e, t) {
      void 0 === t && (t = {}), ngDevMode && Wa(), ngDevMode && Ze(e);
      var n = t.rendererFactory || so,
        r = t.sanitizer || null,
        o = we(e);
      o.type != e && (o.type = e);
      var i,
        u = o.selectors[0][0],
        a = iu(n, t.host || u),
        s = o.onPush ? 68 : 66,
        c = Ja(t.scheduler, t.playerHandler),
        l = n.createRenderer(a, o),
        f = Ni(
          null,
          l,
          nu(-1, null, 1, 0, null, null, null),
          c,
          s,
          void 0,
          t.injector || null
        ),
        d = Kn(f, null);
      try {
        n.begin && n.begin(),
          (i = $a(Ya(a, o, f, l, r), o, f, c, t.hostFeatures || null)),
          Fi(f, null);
      } finally {
        $n(d), n.end && n.end();
      }
      return i;
    }
    function Ya(e, t, n, r, o) {
      (fn = !1), (ln = null), (sn = 0), (cn = !0);
      var i = n[et],
        u = Ni(
          n,
          r,
          tu(
            t.template,
            t.consts,
            t.vars,
            t.directiveDefs,
            t.pipeDefs,
            t.viewQuery
          ),
          null,
          t.onPush ? 4 : 2,
          o
        ),
        a = Vi(0, 3, e, null, null);
      return (
        i.firstTemplatePass &&
          (cr(ir(a, n), n, t.type),
          (a.flags = 4096),
          ju(a, n.length, 1),
          xu(a)),
        (u[it] = n[Xe]),
        (u[ut] = a),
        (n[Xe] = u)
      );
    }
    function $a(e, t, n, r, o) {
      var i = n[et],
        u = (function(e, t, n) {
          var r = Sn();
          e.firstTemplatePass &&
            (n.providersResolver && n.providersResolver(n),
            Du(e, r, 1),
            Ru(e, t, n, n.factory));
          var o = hr(e.data, t, t.length - 1, r);
          return Su(t, r, o, n), o;
        })(i, n, t);
      return (
        r.components.push(u),
        (e[ct] = u),
        o &&
          o.forEach(function(e) {
            return e(u, t);
          }),
        i.firstTemplatePass && Eu(i, n, t.hostVars),
        u
      );
    }
    function Ja(e, t) {
      return {
        components: [],
        scheduler: e || gn,
        clean: Ca,
        playerHandler: t || null,
        flags: 0
      };
    }
    function Xa(e, t) {
      var n = en(e)[et],
        r = n.data.length - 1;
      _t(r, t.onInit, t.doCheck, n), wt((r << 16) | 1, n);
    }
    function es(e) {
      return (function(e) {
        var t = $t(e)[ct];
        return ngDevMode && Ge(t, 'rootContext'), t;
      })(e).clean;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function ts(e) {
      return 'function' == typeof e.template;
    }
    function ns(e) {
      for (
        var t = (function(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = function() {
            var n,
              o,
              i = void 0;
            if (ts(e)) i = t.ngComponentDef || t.ngDirectiveDef;
            else {
              if (t.ngComponentDef)
                throw new Error('Directives cannot inherit Components');
              i = t.ngDirectiveDef;
            }
            var u = t.ngBaseDef;
            if (u || i) {
              var a = e;
              (a.inputs = rs(e.inputs)),
                (a.declaredInputs = rs(e.declaredInputs)),
                (a.outputs = rs(e.outputs));
            }
            if (
              (u &&
                (b(e.inputs, u.inputs),
                b(e.declaredInputs, u.declaredInputs),
                b(e.outputs, u.outputs)),
              i)
            ) {
              var s = e.hostBindings,
                c = i.hostBindings;
              if (
                (c &&
                  (s
                    ? ((e.hostBindings = function(e, t) {
                        c(e, t), s(e, t);
                      }),
                      (e.hostVars += i.hostVars))
                    : (e.hostBindings = c)),
                ts(e) && ts(i))
              ) {
                var l = e.viewQuery,
                  f = i.viewQuery;
                f &&
                  (e.viewQuery = l
                    ? function(e, t) {
                        f(e, t), l(e, t);
                      }
                    : f);
              }
              var d = e.contentQueries,
                p = i.contentQueries;
              p &&
                (e.contentQueries = d
                  ? function(e) {
                      p(e), d(e);
                    }
                  : p);
              var h = e.contentQueriesRefresh,
                v = i.contentQueriesRefresh;
              v &&
                (e.contentQueriesRefresh = h
                  ? function(e, t) {
                      v(e, t), h(e, t);
                    }
                  : v),
                b(e.inputs, i.inputs),
                b(e.declaredInputs, i.declaredInputs),
                b(e.outputs, i.outputs),
                (e.afterContentChecked =
                  e.afterContentChecked || i.afterContentChecked),
                (e.afterContentInit = e.afterContentInit || i.afterContentInit),
                (e.afterViewChecked = e.afterViewChecked || i.afterViewChecked),
                (e.afterViewInit = e.afterViewInit || i.afterViewInit),
                (e.doCheck = e.doCheck || i.doCheck),
                (e.onDestroy = e.onDestroy || i.onDestroy),
                (e.onInit = e.onInit || i.onInit);
              var g = i.features;
              if (g)
                try {
                  for (
                    var y = Object(r.h)(g), m = y.next();
                    !m.done;
                    m = y.next()
                  ) {
                    var _ = m.value;
                    _ && _.ngInherit && _(e);
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    m && !m.done && (o = y.return) && o.call(y);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              return 'break';
            }
            var w = t.prototype;
            w &&
              ((e.afterContentChecked =
                e.afterContentChecked || w.afterContentChecked),
              (e.afterContentInit = e.afterContentInit || w.afterContentInit),
              (e.afterViewChecked = e.afterViewChecked || w.afterViewChecked),
              (e.afterViewInit = e.afterViewInit || w.afterViewInit),
              (e.doCheck = e.doCheck || w.doCheck),
              (e.onDestroy = e.onDestroy || w.onDestroy),
              (e.onInit = e.onInit || w.onInit)),
              (t = Object.getPrototypeOf(t));
          };
        t;

      ) {
        if ('break' === n()) break;
      }
    }
    function rs(e) {
      return e === le ? {} : e === fe ? [] : e;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var os = '__ngOnChanges_';
    function is(e) {
      var t = e.declaredInputs,
        n = e.type.prototype,
        r = function(e) {
          if (t.hasOwnProperty(e)) {
            for (
              var r = t[e], o = os + r, i = void 0, u = n;
              !i &&
              u &&
              Object.getPrototypeOf(u) !==
                Object.getPrototypeOf(Object.prototype);

            )
              (i = Object.getOwnPropertyDescriptor(u, r)),
                (u = Object.getPrototypeOf(u));
            var a = i && i.get,
              s = i && i.set;
            Object.defineProperty(n, r, {
              get:
                a ||
                (s
                  ? void 0
                  : function() {
                      return this[o];
                    }),
              set: function(t) {
                var n = this[os];
                n ||
                  ((n = {}),
                  Object.defineProperty(this, os, { value: n, writable: !0 }));
                var r = !this.hasOwnProperty(o),
                  i = n[e];
                i ? (i.currentValue = t) : (n[e] = new Rt(this[o], t, r)),
                  r
                    ? Object.defineProperty(this, o, { value: t, writable: !0 })
                    : (this[o] = t),
                  s && s.call(this, t);
              },
              configurable: !!ngDevMode
            });
          }
        };
      for (var o in t) r(o);
      null != e.onInit && (e.onInit = us(e.onInit)),
        (e.doCheck = us(e.doCheck));
    }
    function us(e) {
      return function() {
        var t = this[os];
        null != t && (this.ngOnChanges(t), (this[os] = null)),
          e && e.apply(this);
      };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ is.ngInherit = !0;
    var as = new T(
        'The presence of this token marks an injector as being the root injector.'
      ),
      ss = {},
      cs = {},
      ls = [],
      fs = void 0;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function ds() {
      return void 0 === fs && (fs = new Vr()), fs;
    }
    function ps(e, t, n) {
      return (
        void 0 === t && (t = null),
        void 0 === n && (n = null),
        (t = t || ds()),
        new hs(e, n, t)
      );
    }
    var hs = (function() {
      function e(e, t, n) {
        var r = this;
        (this.parent = n),
          (this.records = new Map()),
          (this.injectorDefTypes = new Set()),
          (this.onDestroy = new Set()),
          (this.destroyed = !1);
        var o = [];
        ms([e], function(e) {
          return r.processInjectorType(e, [], o);
        }),
          t &&
            ms(t, function(e) {
              return r.processProvider(e);
            }),
          this.records.set(Nr, ys(void 0, this)),
          (this.isRootInjector = this.records.has(as)),
          this.injectorDefTypes.forEach(function(e) {
            return r.get(e);
          });
      }
      return (
        (e.prototype.destroy = function() {
          this.assertNotDestroyed(), (this.destroyed = !0);
          try {
            this.onDestroy.forEach(function(e) {
              return e.ngOnDestroy();
            });
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }),
        (e.prototype.get = function(e, t, n) {
          void 0 === t && (t = Fr),
            void 0 === n && (n = Te.Default),
            this.assertNotDestroyed();
          var r = Me(this);
          try {
            if (!(n & Te.SkipSelf)) {
              var o = this.records.get(e);
              if (void 0 === o) {
                var i =
                  (function(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof T)
                    );
                  })(
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ e
                  ) && R(e);
                i &&
                  this.injectableDefInScope(i) &&
                  ((o = ys(vs(e), ss)), this.records.set(e, o));
              }
              if (void 0 !== o) return this.hydrate(e, o);
            }
            return (n & Te.Self ? ds() : this.parent).get(e, t);
          } finally {
            Me(r);
          }
        }),
        (e.prototype.assertNotDestroyed = function() {
          if (this.destroyed)
            throw new Error('Injector has already been destroyed.');
        }),
        (e.prototype.processInjectorType = function(e, t, n) {
          var r = this;
          if ((e = kr(e))) {
            var o = I(e),
              i = (null == o && e.ngModule) || void 0,
              u = void 0 === i ? e : i;
            if (ngDevMode && -1 !== t.indexOf(u)) {
              var a = ce(u);
              throw new Error(
                'Circular dependency in DI detected for type ' +
                  a +
                  '. Dependency path: ' +
                  t
                    .map(function(e) {
                      return ce(e);
                    })
                    .join(' > ') +
                  ' > ' +
                  a +
                  '.'
              );
            }
            if (-1 === n.indexOf(u)) {
              var s = (void 0 !== i && e.providers) || ls;
              if ((void 0 !== i && (o = I(i)), null != o)) {
                if (
                  (this.injectorDefTypes.add(u),
                  this.records.set(u, ys(o.factory)),
                  null != o.imports)
                ) {
                  ngDevMode && t.push(u), n.push(u);
                  try {
                    ms(o.imports, function(e) {
                      return r.processInjectorType(e, t, n);
                    });
                  } finally {
                    ngDevMode && t.pop();
                  }
                }
                null != o.providers &&
                  ms(o.providers, function(e) {
                    return r.processProvider(e);
                  }),
                  ms(s, function(e) {
                    return r.processProvider(e);
                  });
              }
            }
          }
        }),
        (e.prototype.processProvider = function(e) {
          var t = _s((e = kr(e))) ? e : kr(e.provide),
            n = (function(e) {
              var t = gs(e);
              return bs(e) ? ys(void 0, e.useValue) : ys(t, ss);
            })(e);
          if (_s(e) || !0 !== e.multi) {
            var r = this.records.get(t);
            if (r && void 0 !== r.multi)
              throw new Error('Mixed multi-provider for ' + ce(t));
          } else {
            var o = this.records.get(t);
            if (o) {
              if (void 0 === o.multi)
                throw new Error('Mixed multi-provider for ' + t + '.');
            } else
              ((o = ys(void 0, ss, !0)).factory = function() {
                return Le(o.multi);
              }),
                this.records.set(t, o);
            (t = e), o.multi.push(e);
          }
          this.records.set(t, n);
        }),
        (e.prototype.hydrate = function(e, t) {
          if (t.value === cs) throw new Error('Circular dep for ' + ce(e));
          return (
            t.value === ss && ((t.value = cs), (t.value = t.factory())),
            'object' == typeof t.value &&
              t.value &&
              (function(e) {
                return (
                  'object' == typeof e &&
                  null != e &&
                  e.ngOnDestroy &&
                  'function' == typeof e.ngOnDestroy
                );
              })(t.value) &&
              this.onDestroy.add(t.value),
            t.value
          );
        }),
        (e.prototype.injectableDefInScope = function(e) {
          return (
            !!e.providedIn &&
            ('string' == typeof e.providedIn
              ? 'any' === e.providedIn ||
                ('root' === e.providedIn && this.isRootInjector)
              : this.injectorDefTypes.has(e.providedIn))
          );
        }),
        e
      );
    })();
    function vs(e) {
      var t = R(e);
      if (null === t) {
        if (e instanceof T)
          throw new Error(
            'Token ' + ce(e) + ' is missing an ngInjectableDef definition.'
          );
        return function() {
          return new e();
        };
      }
      return t.factory;
    }
    function gs(e) {
      var t = void 0;
      if (_s(e)) return vs(kr(e));
      if (bs(e))
        t = function() {
          return kr(e.useValue);
        };
      else if (
        (function(e) {
          return !!e.useExisting;
        })(e)
      )
        t = function() {
          return Ne(kr(e.useExisting));
        };
      else if (
        (function(e) {
          return !!e.useFactory;
        })(e)
      )
        t = function() {
          return e.useFactory.apply(e, Object(r.g)(Le(e.deps || [])));
        };
      else {
        var n = kr(e.useClass || e.provide);
        if (
          !(function(e) {
            return !!e.deps;
          })(e)
        )
          return vs(n);
        t = function() {
          return new (n.bind.apply(n, Object(r.g)([void 0], Le(e.deps))))();
        };
      }
      return t;
    }
    function ys(e, t, n) {
      return (
        void 0 === t && (t = ss),
        void 0 === n && (n = !1),
        { factory: e, value: t, multi: n ? [] : void 0 }
      );
    }
    function ms(e, t) {
      e.forEach(function(e) {
        return Array.isArray(e) ? ms(e, t) : t(e);
      });
    }
    function bs(e) {
      return qr in e;
    }
    function _s(e) {
      return 'function' == typeof e;
    }
    function ws(e, t, n, r, o) {
      if (((e = kr(e)), Array.isArray(e)))
        for (var i = 0; i < e.length; i++) ws(e[i], t, n, r, o);
      else {
        var u = Pn(),
          a = _s(e) ? e : kr(e.provide),
          s = gs(e),
          c = Sn(),
          l = 65535 & c.providerIndexes,
          f = c.flags >> 16,
          d = c.providerIndexes >> 16;
        if (_s(e) || !e.multi) {
          var p = new $e(s, o, ba),
            h = Ds(a, t, o ? l : l + d, f);
          -1 == h
            ? (cr(ir(c, u), u, a),
              t.push(a),
              (c.flags += 65536),
              o && (c.providerIndexes += 65536),
              n.push(p),
              u.push(p))
            : ((n[h] = p), (u[h] = p));
        } else {
          var v = Ds(a, t, l + d, f),
            g = Ds(a, t, l, l + d),
            y = v >= 0 && n[v],
            m = g >= 0 && n[g];
          if ((o && !m) || (!o && !y)) {
            cr(ir(c, u), u, a);
            p = (function(e, t, n, r, o) {
              var i = new $e(e, n, ba);
              return (
                (i.multi = []),
                (i.index = t),
                (i.componentProviders = 0),
                Cs(i, o, r && !n),
                i
              );
            })(o ? Os : Es, n.length, o, r, s);
            !o && m && (n[g].providerFactory = p),
              t.push(a),
              (c.flags += 65536),
              o && (c.providerIndexes += 65536),
              n.push(p),
              u.push(p);
          } else Cs(n[o ? g : v], s, !o && r);
          !o && r && m && n[g].componentProviders++;
        }
      }
    }
    function Cs(e, t, n) {
      e.multi.push(t), n && e.componentProviders++;
    }
    function Ds(e, t, n, r) {
      for (var o = n; o < r; o++) if (t[o] === e) return o;
      return -1;
    }
    function Es(e, t, n, r) {
      return Ss(this.multi, []);
    }
    function Os(e, t, n, r) {
      var o,
        i = this.multi;
      if (this.providerFactory) {
        var u = this.providerFactory.componentProviders,
          a = hr(t, n, this.providerFactory.index, r);
        Ss(i, (o = a.slice(0, u)));
        for (var s = u; s < a.length; s++) o.push(a[s]);
      } else Ss(i, (o = []));
      return o;
    }
    function Ss(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        t.push(r());
      }
      return t;
    }
    function xs(e, t) {
      return (
        void 0 === t && (t = []),
        function(n) {
          n.providersResolver = function(n) {
            return (function(e, t, n) {
              var r = Pn()[et];
              if (r.firstTemplatePass) {
                var o = Qt(e);
                ws(n, r.data, r.blueprint, o, !0),
                  ws(t, r.data, r.blueprint, o, !1);
              }
            })(n, e, t);
          };
        }
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var As = (function() {
        return function() {};
      })(),
      js = (function() {
        return function() {};
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function Rs(e) {
      var t = Error(
        'No component factory found for ' +
          ce(e) +
          '. Did you add it to @NgModule.entryComponents?'
      );
      return (t[Is] = e), t;
    }
    var Is = 'ngComponent',
      Ts = (function() {
        function e() {}
        return (
          (e.prototype.resolveComponentFactory = function(e) {
            throw Rs(e);
          }),
          e
        );
      })(),
      ks = (function() {
        function e() {}
        return (e.NULL = new Ts()), e;
      })(),
      Ms = (function() {
        function e(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            this._factories.set(o.componentType, o);
          }
        }
        return (
          (e.prototype.resolveComponentFactory = function(e) {
            var t = this._factories.get(e);
            if (
              (!t &&
                this._parent &&
                (t = this._parent.resolveComponentFactory(e)),
              !t)
            )
              throw Rs(e);
            return new Ps(t, this._ngModule);
          }),
          e
        );
      })(),
      Ps = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (r.factory = t),
            (r.ngModule = n),
            (r.selector = t.selector),
            (r.componentType = t.componentType),
            (r.ngContentSelectors = t.ngContentSelectors),
            (r.inputs = t.inputs),
            (r.outputs = t.outputs),
            r
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.create = function(e, t, n, r) {
            return this.factory.create(e, t, n, r || this.ngModule);
          }),
          t
        );
      })(js),
      Fs = (function() {
        function e(e) {
          this.nativeElement = e;
        }
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return Vs(e);
          }),
          e
        );
      })(),
      Ns = function(e) {
        return Ra(e, Sn(), Pn());
      },
      Vs = Rr,
      Ls = (function() {
        return function(e, t, n, r, o, i) {
          (this.id = e),
            (this.templateUrl = t),
            (this.slotCount = n),
            (this.encapsulation = r),
            (this.styles = o),
            (this.animations = i);
        };
      })(),
      Bs = (function() {
        return function() {};
      })(),
      Us = (function() {
        return function() {};
      })(),
      Hs = (function() {
        return function() {};
      })(),
      zs = (function() {
        return function() {};
      })(),
      Gs = (function(e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })({}),
      Zs = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return Ws();
          }),
          e
        );
      })(),
      qs = function() {
        return (function(e) {
          var t = e[ft];
          if (ao(t)) return t;
          throw new Error(
            'Cannot inject Renderer2 when the application uses Renderer3!'
          );
        })(Pn());
      },
      Ws = Rr,
      Qs = (function() {
        return function(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e
              .split('.')
              .slice(2)
              .join('.'));
        };
      })(),
      Ks = new Qs('7.1.1'),
      Ys = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.resolveComponentFactory = function(e) {
            ngDevMode && Ze(e);
            var t = we(e);
            return new nc(t);
          }),
          t
        );
      })(ks);
    function $s(e) {
      var t = [];
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          t.push({ propName: r, templateName: n });
        }
      return t;
    }
    var Js = new T('ROOT_CONTEXT_TOKEN', {
        providedIn: 'root',
        factory: function() {
          return Ja(Ne(Xs));
        }
      }),
      Xs = new T('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: function() {
          return gn;
        }
      }),
      ec = new T('WRAP_RENDERER_FACTORY2'),
      tc = {};
    var nc = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            (n.componentDef = t),
            (n.componentType = t.type),
            (n.selector = t.selectors[0][0]),
            (n.ngContentSelectors = []),
            n
          );
        }
        return (
          Object(r.c)(t, e),
          Object.defineProperty(t.prototype, 'inputs', {
            get: function() {
              return $s(this.componentDef.inputs);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'outputs', {
            get: function() {
              return $s(this.componentDef.outputs);
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.create = function(e, t, n, r) {
            var o,
              i = void 0 === n;
            r
              ? (o = r.injector.get(ec, function(e) {
                  return e;
                })(r.injector.get(zs)))
              : (o = so);
            var u = i
                ? Xi(this.selector, o.createRenderer(null, this.componentDef))
                : iu(o, n),
              a = this.componentDef.onPush ? 68 : 66,
              s = r && !i ? r.injector.get(Js) : Ja(),
              c = o.createRenderer(u, this.componentDef),
              l = r
                ? (function(e, t) {
                    return {
                      get: function(n, r) {
                        var o = e.get(n, tc);
                        return o !== tc ? o : t.get(n, r);
                      }
                    };
                  })(e, r.injector)
                : e;
            n &&
              u &&
              (ngDevMode && ngDevMode.rendererSetAttribute++,
              ao(c)
                ? c.setAttribute(u, 'ng-version', Ks.full)
                : u.setAttribute('ng-version', Ks.full));
            var f,
              d,
              p = Ni(
                null,
                c,
                nu(-1, null, 1, 0, null, null, null),
                s,
                a,
                void 0,
                l
              ),
              h = Kn(p, null);
            try {
              o.begin && o.begin();
              var v = Ya(u, this.componentDef, p, c);
              if (((d = Gt(0, p)), t))
                for (
                  var g = 0, y = p[et], m = (d.projection = []), b = 0;
                  b < t.length;
                  b++
                ) {
                  for (
                    var _ = t[b], w = null, C = null, D = 0;
                    D < _.length;
                    D++
                  ) {
                    y.firstTemplatePass &&
                      (y.expandoStartIndex++,
                      y.blueprint.splice(++g + Xe, 0, null),
                      y.data.splice(g + Xe, 0, null),
                      p.splice(g + Xe, 0, null));
                    var E = Vi(g, 3, _[D], null, null);
                    C ? (C.next = E) : (w = E), (C = E);
                  }
                  m.push(w);
                }
              (f = $a(v, this.componentDef, p, s, [Xa])), Fi(p, 1);
            } finally {
              $n(h, !0), o.end && o.end();
            }
            var O = new rc(this.componentType, f, Ra(Fs, d, p), p, d);
            return i && (O.hostView._tViewNode.child = d), O;
          }),
          t
        );
      })(js),
      rc = (function(e) {
        function t(t, n, r, o, i) {
          var u = e.call(this) || this;
          return (
            (u.location = r),
            (u._rootView = o),
            (u._tNode = i),
            (u.destroyCbs = []),
            (u.instance = n),
            (u.hostView = u.changeDetectorRef = new ja(o)),
            (u.hostView._tViewNode = Li(-1, o)),
            (u.componentType = t),
            u
          );
        }
        return (
          Object(r.c)(t, e),
          Object.defineProperty(t.prototype, 'injector', {
            get: function() {
              return new yr(this._tNode, this._rootView);
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.destroy = function() {
            ngDevMode && Ge(this.destroyCbs, 'NgModule already destroyed'),
              this.destroyCbs.forEach(function(e) {
                return e();
              }),
              (this.destroyCbs = null);
          }),
          (t.prototype.onDestroy = function(e) {
            ngDevMode && Ge(this.destroyCbs, 'NgModule already destroyed'),
              this.destroyCbs.push(e);
          }),
          t
        );
      })(As),
      oc = !0,
      ic = !1;
    function uc() {
      return (ic = !0), oc;
    }
    function ac() {
      if (ic) throw new Error('Cannot enable prod mode after platform setup.');
      oc = !1;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var sc = (function() {
      function e(e) {
        if (
          ((this.defaultDoc = e),
          (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
            'sanitization-inert'
          )),
          (this.inertBodyElement = this.inertDocument.body),
          null == this.inertBodyElement)
        ) {
          var t = this.inertDocument.createElement('html');
          this.inertDocument.appendChild(t),
            (this.inertBodyElement = this.inertDocument.createElement('body')),
            t.appendChild(this.inertBodyElement);
        }
        (this.inertBodyElement.innerHTML =
          '<svg><g onload="this.parentNode.remove()"></g></svg>'),
          !this.inertBodyElement.querySelector ||
          this.inertBodyElement.querySelector('svg')
            ? ((this.inertBodyElement.innerHTML =
                '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
              this.inertBodyElement.querySelector &&
              this.inertBodyElement.querySelector('svg img') &&
              (function() {
                try {
                  return !!window.DOMParser;
                } catch (e) {
                  return !1;
                }
              })()
                ? /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */
                  (this.getInertBodyElement = this.getInertBodyElement_DOMParser)
                : (this.getInertBodyElement = this.getInertBodyElement_InertDocument))
            : (this.getInertBodyElement = this.getInertBodyElement_XHR);
      }
      return (
        (e.prototype.getInertBodyElement_XHR = function(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (e) {
            return null;
          }
          var t = new XMLHttpRequest();
          (t.responseType = 'document'),
            t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
            t.send(void 0);
          var n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }),
        (e.prototype.getInertBodyElement_DOMParser = function(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            var t = new window.DOMParser().parseFromString(e, 'text/html').body;
            return t.removeChild(t.firstChild), t;
          } catch (e) {
            return null;
          }
        }),
        (e.prototype.getInertBodyElement_InertDocument = function(e) {
          var t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }),
        (e.prototype.stripCustomNsAttrs = function(e) {
          for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
            var r = t.item(n).name;
            ('xmlns:ns1' !== r && 0 !== r.indexOf('ns1:')) ||
              e.removeAttribute(r);
          }
          for (var o = e.firstChild; o; )
            o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o),
              (o = o.nextSibling);
        }),
        e
      );
    })();
    var cc = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      lc = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function fc(e) {
      return (e = String(e)).match(cc) || e.match(lc)
        ? e
        : (uc() &&
            console.warn(
              'WARNING: sanitizing unsafe URL value ' +
                e +
                ' (see http://g.co/ng/security#xss)'
            ),
          'unsafe:' + e);
    }
    function dc(e) {
      return (e = String(e))
        .split(',')
        .map(function(e) {
          return fc(e.trim());
        })
        .join(', ');
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function pc(e) {
      var t,
        n,
        o = {};
      try {
        for (
          var i = Object(r.h)(e.split(',')), u = i.next();
          !u.done;
          u = i.next()
        ) {
          o[u.value] = !0;
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          u && !u.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      return o;
    }
    function hc() {
      for (var e, t, n = [], o = 0; o < arguments.length; o++)
        n[o] = arguments[o];
      var i = {};
      try {
        for (var u = Object(r.h)(n), a = u.next(); !a.done; a = u.next()) {
          var s = a.value;
          for (var c in s) s.hasOwnProperty(c) && (i[c] = !0);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (t = u.return) && t.call(u);
        } finally {
          if (e) throw e.error;
        }
      }
      return i;
    }
    var vc,
      gc = pc('area,br,col,hr,img,wbr'),
      yc = pc('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
      mc = pc('rp,rt'),
      bc = hc(mc, yc),
      _c = hc(
        gc,
        hc(
          yc,
          pc(
            'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
          )
        ),
        hc(
          mc,
          pc(
            'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
          )
        ),
        bc
      ),
      wc = pc('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
      Cc = pc('srcset'),
      Dc = hc(
        wc,
        Cc,
        pc(
          'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
        )
      ),
      Ec = (function() {
        function e() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        return (
          (e.prototype.sanitizeChildren = function(e) {
            for (var t = e.firstChild, n = !0; t; )
              if (
                (t.nodeType === Node.ELEMENT_NODE
                  ? (n = this.startElement(t))
                  : t.nodeType === Node.TEXT_NODE
                  ? this.chars(t.nodeValue)
                  : (this.sanitizedSomething = !0),
                n && t.firstChild)
              )
                t = t.firstChild;
              else
                for (; t; ) {
                  t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                  var r = this.checkClobberedElement(t, t.nextSibling);
                  if (r) {
                    t = r;
                    break;
                  }
                  t = this.checkClobberedElement(t, t.parentNode);
                }
            return this.buf.join('');
          }),
          (e.prototype.startElement = function(e) {
            var t = e.nodeName.toLowerCase();
            if (!_c.hasOwnProperty(t))
              return (this.sanitizedSomething = !0), !1;
            this.buf.push('<'), this.buf.push(t);
            for (var n = e.attributes, r = 0; r < n.length; r++) {
              var o = n.item(r),
                i = o.name,
                u = i.toLowerCase();
              if (Dc.hasOwnProperty(u)) {
                var a = o.value;
                wc[u] && (a = fc(a)),
                  Cc[u] && (a = dc(a)),
                  this.buf.push(' ', i, '="', xc(a), '"');
              } else this.sanitizedSomething = !0;
            }
            return this.buf.push('>'), !0;
          }),
          (e.prototype.endElement = function(e) {
            var t = e.nodeName.toLowerCase();
            _c.hasOwnProperty(t) &&
              !gc.hasOwnProperty(t) &&
              (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
          }),
          (e.prototype.chars = function(e) {
            this.buf.push(xc(e));
          }),
          (e.prototype.checkClobberedElement = function(e, t) {
            if (
              t &&
              (e.compareDocumentPosition(t) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                Node.DOCUMENT_POSITION_CONTAINED_BY
            )
              throw new Error(
                'Failed to sanitize html because the element is clobbered: ' +
                  e.outerHTML
              );
            return t;
          }),
          e
        );
      })(),
      Oc = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      Sc = /([^\#-~ |!])/g;
    function xc(e) {
      return e
        .replace(/&/g, '&amp;')
        .replace(Oc, function(e) {
          return (
            '&#' +
            (1024 * (e.charCodeAt(0) - 55296) +
              (e.charCodeAt(1) - 56320) +
              65536) +
            ';'
          );
        })
        .replace(Sc, function(e) {
          return '&#' + e.charCodeAt(0) + ';';
        })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
    function Ac(e, t) {
      var n = null;
      try {
        vc = vc || new sc(e);
        var r = t ? String(t) : '';
        n = vc.getInertBodyElement(r);
        var o = 5,
          i = r;
        do {
          if (0 === o)
            throw new Error(
              'Failed to sanitize html because the input is unstable'
            );
          o--, (r = i), (i = n.innerHTML), (n = vc.getInertBodyElement(r));
        } while (r !== i);
        var u = new Ec(),
          a = u.sanitizeChildren(jc(n) || n);
        return (
          uc() &&
            u.sanitizedSomething &&
            console.warn(
              'WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).'
            ),
          a
        );
      } finally {
        if (n)
          for (var s = jc(n) || n; s.firstChild; ) s.removeChild(s.firstChild);
      }
    }
    function jc(e) {
      return 'content' in e &&
        (function(e) {
          return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
        })(
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */ e
        )
        ? e.content
        : null;
    }
    var Rc = { marker: 'element' },
      Ic = { marker: 'comment' },
      Tc = '�',
      kc = /^\s*(�\d+�)\s*,\s*(select|plural)\s*,/,
      Mc = /�\/?\*(\d+:\d+)�/gi,
      Pc = /�(\/?[#*]\d+):?\d*�/gi,
      Fc = /�(\d+):?\d*�/gi,
      Nc = /({\s*�\d+�\s*,\s*\S{6}\s*,[\s\S]*})/gi,
      Vc = /\[(�.+?�?)\]/g,
      Lc = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,
      Bc = /�I18N_EXP_(ICU(_\d+)?)�/g;
    function Uc(e) {
      if (!e) return [];
      var t,
        n = 0,
        r = [],
        o = [],
        i = /[{}]/g;
      for (i.lastIndex = 0; (t = i.exec(e)); ) {
        var u = t.index;
        if ('}' == t[0]) {
          if ((r.pop(), 0 == r.length)) {
            var a = e.substring(n, u);
            kc.test(a) ? o.push(Hc(a)) : a && o.push(a), (n = u + 1);
          }
        } else {
          if (0 == r.length) {
            var s = e.substring(n, u);
            o.push(s), (n = u + 1);
          }
          r.push('{');
        }
      }
      var c = e.substring(n);
      return '' != c && o.push(c), o;
    }
    function Hc(e) {
      for (
        var t = [],
          n = [],
          r = 1,
          o = 0,
          i = Uc(
            (e = e.replace(kc, function(e, t, n) {
              return (
                (r = 'select' === n ? 0 : 1),
                (o = parseInt(t.substr(1), 10)),
                ''
              );
            }))
          ),
          u = 0;
        u < i.length;

      ) {
        var a = i[u++].trim();
        1 === r && (a = a.replace(/\s*(?:=)?(\w+)\s*/, '$1')),
          a.length && t.push(a);
        var s = Uc(i[u++]);
        s.length && n.push(s);
      }
      return (
        ze(t.indexOf('other'), -1, 'Missing key "other" in ICU statement.'),
        { type: r, mainBinding: o, cases: t, values: n }
      );
    }
    function zc(e) {
      for (var t, n, r = '', o = 0, i = !1; null !== (t = Mc.exec(e)); )
        i
          ? t[0] === Tc + '/*' + n + Tc && ((o = t.index), (i = !1))
          : ((r += e.substring(o, t.index + t[0].length)),
            (n = t[1]),
            (i = !0));
      return (
        ngDevMode &&
          Be(
            i,
            !1,
            'Tag mismatch: unable to find the end of the sub-template in the translation "' +
              e +
              '"'
          ),
        (r += e.substr(o))
      );
    }
    function Gc(e, t, n, r) {
      void 0 === r && (r = null);
      for (
        var o = [null, null], i = e.split(Fc), u = 0, a = 0;
        a < i.length;
        a++
      ) {
        var s = i[a];
        if (1 & a) {
          var c = parseInt(s, 10);
          o.push(-1 - c), (u |= Qc(c));
        } else '' !== s && o.push(s);
      }
      return (
        o.push((t << 2) | (n ? 1 : 0)),
        n && o.push(n, r),
        (o[0] = u),
        (o[1] = o.length - 2),
        o
      );
    }
    function Zc(e, t) {
      var n;
      void 0 === t && (t = 0), (t |= Qc(e.mainBinding));
      for (var r = 0; r < e.values.length; r++)
        for (var o = e.values[r], i = 0; i < o.length; i++) {
          var u = o[i];
          if ('string' == typeof u)
            for (; (n = Fc.exec(u)); ) t |= Qc(parseInt(n[1], 10));
          else t = Zc(u, t);
        }
      return t;
    }
    var qc = [],
      Wc = -1;
    function Qc(e) {
      return 1 << Math.min(e, 31);
    }
    var Kc = [];
    function Yc(e, t, n) {
      var r = In();
      ngDevMode && Ge(r, 'tView should be defined'),
        ngDevMode &&
          Be(
            r.firstTemplatePass,
            !0,
            'You should only call i18nEnd on first template pass'
          ),
        r.firstTemplatePass &&
          null === r.data[e + Xe] &&
          (function(e, t, n, r) {
            qc[++Wc] = t;
            var o = En(),
              i = e.blueprint.length - Xe,
              u = Sn(),
              a = jn() ? Sn() : u && u.parent,
              s = a && a !== o[ut] ? a.index - Xe : t,
              c = 0;
            Kc[c] = s;
            var l = [];
            t > 0 && u !== a && l.push((u.index << 3) | 0);
            for (
              var f = [],
                d = [],
                p = (function(e, t) {
                  if ('number' != typeof t) return zc(e);
                  var n = e.indexOf(':' + t + Tc) + 2 + t.toString().length,
                    r = e.search(new RegExp(Tc + '\\/\\*\\d+:' + t + Tc));
                  return zc(e.substring(n, r));
                })(n, r).split(Pc),
                h = 0;
              h < p.length;
              h++
            ) {
              var v = p[h];
              if (1 & h)
                if ('/' === v.charAt(0)) {
                  if ('#' === v.charAt(1)) {
                    var g = parseInt(v.substr(2), 10);
                    (s = Kc[--c]), l.push((g << 3) | 5);
                  }
                } else {
                  var g = parseInt(v.substr(1), 10);
                  l.push((g << 3) | 0, (s << 17) | 1),
                    '#' === v.charAt(0) && (Kc[++c] = s = g);
                }
              else
                for (var y = v.split(Nc), m = 0; m < y.length; m++)
                  if (((v = y[m]), 1 & m)) {
                    Bi(o);
                    var b = e.blueprint.length - 1 - Xe;
                    l.push(Ic, ngDevMode ? 'ICU ' + b : '', (s << 17) | 1);
                    var _ = Hc(v.substr(1, v.length - 2)),
                      w = Zc(_);
                    fl(d, _, b, b);
                    var C = d.length - 1;
                    f.push(
                      Qc(_.mainBinding),
                      3,
                      -1 - _.mainBinding,
                      (b << 2) | 2,
                      C,
                      w,
                      2,
                      (b << 2) | 3,
                      C
                    );
                  } else if ('' !== v) {
                    var D = v.match(Fc);
                    Bi(o),
                      l.push(D ? '' : v, (s << 17) | 1),
                      D && yn(Gc(v, e.blueprint.length - 1 - Xe), f);
                  }
            }
            var E = {
              vars: e.blueprint.length - Xe - i,
              expandoStartIndex: i,
              create: l,
              update: f,
              icus: d.length ? d : null
            };
            e.data[t + Xe] = E;
          })(r, e, t, n);
    }
    function $c(e, t, n) {
      ngDevMode && ngDevMode.rendererMoveNode++;
      var r = En();
      n || (n = t),
        n === t && e !== t.child
          ? ((e.next = t.child), (t.child = e))
          : n !== t && e !== n.next
          ? ((e.next = n.next), (n.next = e))
          : (e.next = null),
        t !== r[ut] && (e.parent = t),
        Io(zt(e, r), e, r);
      var o = r[e.index];
      return 0 !== e.type && Kt(o) && Io(o[Pt], e, r), e;
    }
    function Jc(e, t) {
      var n = {},
        r = e.replace(Vc, function(e, t) {
          if ((n[t] || (n[t] = t.split('|')), !n[t].length))
            throw new Error('i18n postprocess: unmatched placeholder - ' + t);
          return n[t].shift();
        });
      if (
        Object.keys(n).some(function(e) {
          return !!n[e].length;
        })
      )
        throw new Error(
          'i18n postprocess: unmatched values - ' + JSON.stringify(n)
        );
      return Object.keys(t).length
        ? (r = (r = r.replace(Lc, function(e, n, r, o, i, u) {
            return t.hasOwnProperty(r) ? '' + n + t[r] + u : e;
          })).replace(Bc, function(e, n) {
            if (t.hasOwnProperty(n)) {
              var r = t[n];
              if (!r.length)
                throw new Error(
                  'i18n postprocess: unmatched ICU - ' + e + ' with key: ' + n
                );
              return r.shift();
            }
            return e;
          }))
        : r;
    }
    function Xc() {
      var e = In();
      ngDevMode && Ge(e, 'tView should be defined'),
        ngDevMode &&
          Be(
            e.firstTemplatePass,
            !0,
            'You should only call i18nEnd on first template pass'
          ),
        e.firstTemplatePass &&
          (function(e) {
            var t = En();
            ngDevMode &&
              Be(
                t[at],
                t[et].bindingStartIndex,
                'i18nEnd should be called before any binding'
              );
            var n = qc[Wc--],
              r = e.data[n + Xe];
            ngDevMode && Ge(r, 'You should call i18nStart before i18nEnd');
            for (
              var o = Sn(),
                i = el(n, r.create, r.expandoStartIndex, t),
                u = n + 1;
              u <= o.index - Xe;
              u++
            )
              -1 === i.indexOf(u) && tl(u, t);
          })(e);
    }
    function el(e, t, n, r) {
      for (var o = mn(), i = null, u = null, a = [], s = 0; s < t.length; s++) {
        var c = t[s];
        if ('string' == typeof c) {
          var l = mo(c, o);
          ngDevMode && ngDevMode.rendererCreateTextNode++,
            (u = i),
            (i = Vi(n++, 3, l, null, null)),
            Rn(!1);
        } else if ('number' == typeof c)
          switch (7 & c) {
            case 1:
              var f = c >>> 17,
                d = void 0;
              (d = f === e ? r[ut] : Gt(f, r)),
                ngDevMode &&
                  Ge(
                    i,
                    'You need to create or select a node before you can insert it into the DOM'
                  ),
                (u = $c(i, d, u)),
                (d.next = null);
              break;
            case 0:
              var p = c >>> 3;
              a.push(p),
                (u = i),
                (i = Gt(p, r)) && (xn(i), 3 === i.type && Rn(!0));
              break;
            case 5:
              (u = i = Gt(c >>> 3, r)), xn(i), Rn(!1);
              break;
            case 4:
              lu(c >>> 3, t[++s], t[++s]);
              break;
            default:
              throw new Error(
                'Unable to determine the type of mutate operation for "' +
                  c +
                  '"'
              );
          }
        else
          switch (c) {
            case Ic:
              var h = t[++s];
              ngDevMode &&
                Be(
                  typeof h,
                  'string',
                  'Expected "' + h + '" to be a comment node value'
                );
              var v = o.createComment(h);
              ngDevMode && ngDevMode.rendererCreateComment++,
                (u = i),
                ((i = Vi(n++, 5, v, null, null)).activeCaseIndex = null),
                Rn(!1);
              break;
            case Rc:
              var g = t[++s];
              ngDevMode &&
                Be(
                  typeof g,
                  'string',
                  'Expected "' + g + '" to be an element node tag name'
                );
              var y = o.createElement(g);
              ngDevMode && ngDevMode.rendererCreateElement++,
                (u = i),
                (i = Vi(n++, 3, y, g, null));
              break;
            default:
              throw new Error(
                'Unable to determine the type of mutate operation for "' +
                  c +
                  '"'
              );
          }
      }
      return Rn(!1), a;
    }
    function tl(e, t) {
      var n = Gt(e, t);
      Mo(n, Ht(e, t) || null, t),
        (n.detached = !0),
        ngDevMode && ngDevMode.rendererRemoveNode++;
      var r = da(e);
      if (Kt(r)) {
        var o = r;
        0 !== n.type && Mo(n, o[Pt] || null, t), (o[Ft] = null);
      }
    }
    function nl(e, t, n) {
      Yc(e, t, n), Xc();
    }
    function rl(e, t) {
      var n = In();
      ngDevMode && Ge(n, 'tView should be defined'),
        ngDevMode &&
          Be(
            n.firstTemplatePass,
            !0,
            'You should only call i18nEnd on first template pass'
          ),
        n.firstTemplatePass &&
          null === n.data[e + Xe] &&
          (function(e, t, n) {
            for (var r = Sn().index - Xe, o = [], i = 0; i < n.length; i += 2)
              for (
                var u = n[i], a = n[i + 1], s = a.split(Nc), c = 0;
                c < s.length;
                c++
              ) {
                var l = s[c];
                if (1 & c);
                else if ('' !== l) {
                  var f = !!l.match(Fc);
                  f ? yn(Gc(l, r, u), o) : lu(r, u, l);
                }
              }
            e.data[t + Xe] = o;
          })(n, e, t);
    }
    var ol = 0,
      il = 0;
    function ul(e) {
      e !== Ho && (ol |= 1 << il), il++;
    }
    function al(e) {
      if (il) {
        var t = In();
        ngDevMode && Ge(t, 'tView should be defined');
        var n = En(),
          r = t.data[e + Xe],
          o = void 0,
          i = null;
        Array.isArray(r) ? (o = r) : ((o = r.update), (i = r.icus)),
          !(function e(t, n, r, o, i, u) {
            void 0 === u && (u = !1);
            for (var a = !1, s = 0; s < t.length; s++) {
              var c = t[s],
                l = t[++s];
              if (u || c & o)
                for (var f = '', d = s + 1; d <= s + l; d++) {
                  var p = t[d];
                  if ('string' == typeof p) f += p;
                  else if ('number' == typeof p)
                    if (p < 0) f += Vt(i[r - p]);
                    else {
                      var h = p >>> 2;
                      switch (3 & p) {
                        case 1:
                          lu(h, t[++d], f, t[++d]);
                          break;
                        case 0:
                          Cu(h, f);
                          break;
                        case 2:
                          var v = t[++d],
                            g = n[v],
                            y = Gt(h, i);
                          if (null !== y.activeCaseIndex)
                            for (
                              var m = g.remove[y.activeCaseIndex], b = 0;
                              b < m.length;
                              b++
                            ) {
                              var _ = m[b];
                              switch (7 & _) {
                                case 3:
                                  tl(_ >>> 3, i);
                                  break;
                                case 6:
                                  var w = Gt(m[b + 1] >>> 3, i).activeCaseIndex;
                                  null !== w && yn(n[_ >>> 3].remove[w], m);
                              }
                            }
                          var C = ll(g, f);
                          (y.activeCaseIndex = -1 !== C ? C : null),
                            el(-1, g.create[C], g.expandoStartIndex, i),
                            (a = !0);
                          break;
                        case 3:
                          (g = n[(v = t[++d])]),
                            (y = Gt(h, i)),
                            e(g.update[y.activeCaseIndex], n, r, o, i, a);
                      }
                    }
                }
              s += l;
            }
          })(o, i, n[at] - il - 1, ol, n),
          (ol = 0),
          (il = 0);
      }
    }
    var sl = (function(e) {
      return (
        (e[(e.Zero = 0)] = 'Zero'),
        (e[(e.One = 1)] = 'One'),
        (e[(e.Two = 2)] = 'Two'),
        (e[(e.Few = 3)] = 'Few'),
        (e[(e.Many = 4)] = 'Many'),
        (e[(e.Other = 5)] = 'Other'),
        e
      );
    })({});
    function cl(e, t) {
      switch (
        (function(e, t) {
          'string' == typeof t && (t = parseInt(t, 10));
          var n = t,
            r = n.toString().replace(/^[^.]*\.?/, ''),
            o = Math.floor(Math.abs(n)),
            i = r.length,
            u = parseInt(r, 10),
            a = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
          switch (e.split('-')[0].toLowerCase()) {
            case 'af':
            case 'asa':
            case 'az':
            case 'bem':
            case 'bez':
            case 'bg':
            case 'brx':
            case 'ce':
            case 'cgg':
            case 'chr':
            case 'ckb':
            case 'ee':
            case 'el':
            case 'eo':
            case 'es':
            case 'eu':
            case 'fo':
            case 'fur':
            case 'gsw':
            case 'ha':
            case 'haw':
            case 'hu':
            case 'jgo':
            case 'jmc':
            case 'ka':
            case 'kk':
            case 'kkj':
            case 'kl':
            case 'ks':
            case 'ksb':
            case 'ky':
            case 'lb':
            case 'lg':
            case 'mas':
            case 'mgo':
            case 'ml':
            case 'mn':
            case 'nb':
            case 'nd':
            case 'ne':
            case 'nn':
            case 'nnh':
            case 'nyn':
            case 'om':
            case 'or':
            case 'os':
            case 'ps':
            case 'rm':
            case 'rof':
            case 'rwk':
            case 'saq':
            case 'seh':
            case 'sn':
            case 'so':
            case 'sq':
            case 'ta':
            case 'te':
            case 'teo':
            case 'tk':
            case 'tr':
            case 'ug':
            case 'uz':
            case 'vo':
            case 'vun':
            case 'wae':
            case 'xog':
              return 1 === n ? sl.One : sl.Other;
            case 'ak':
            case 'ln':
            case 'mg':
            case 'pa':
            case 'ti':
              return n === Math.floor(n) && n >= 0 && n <= 1
                ? sl.One
                : sl.Other;
            case 'am':
            case 'as':
            case 'bn':
            case 'fa':
            case 'gu':
            case 'hi':
            case 'kn':
            case 'mr':
            case 'zu':
              return 0 === o || 1 === n ? sl.One : sl.Other;
            case 'ar':
              return 0 === n
                ? sl.Zero
                : 1 === n
                ? sl.One
                : 2 === n
                ? sl.Two
                : n % 100 === Math.floor(n % 100) &&
                  n % 100 >= 3 &&
                  n % 100 <= 10
                ? sl.Few
                : n % 100 === Math.floor(n % 100) &&
                  n % 100 >= 11 &&
                  n % 100 <= 99
                ? sl.Many
                : sl.Other;
            case 'ast':
            case 'ca':
            case 'de':
            case 'en':
            case 'et':
            case 'fi':
            case 'fy':
            case 'gl':
            case 'it':
            case 'nl':
            case 'sv':
            case 'sw':
            case 'ur':
            case 'yi':
              return 1 === o && 0 === i ? sl.One : sl.Other;
            case 'be':
              return n % 10 == 1 && n % 100 != 11
                ? sl.One
                : n % 10 === Math.floor(n % 10) &&
                  n % 10 >= 2 &&
                  n % 10 <= 4 &&
                  !(n % 100 >= 12 && n % 100 <= 14)
                ? sl.Few
                : n % 10 == 0 ||
                  (n % 10 === Math.floor(n % 10) &&
                    n % 10 >= 5 &&
                    n % 10 <= 9) ||
                  (n % 100 === Math.floor(n % 100) &&
                    n % 100 >= 11 &&
                    n % 100 <= 14)
                ? sl.Many
                : sl.Other;
            case 'br':
              return n % 10 == 1 &&
                n % 100 != 11 &&
                n % 100 != 71 &&
                n % 100 != 91
                ? sl.One
                : n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92
                ? sl.Two
                : n % 10 === Math.floor(n % 10) &&
                  ((n % 10 >= 3 && n % 10 <= 4) || n % 10 == 9) &&
                  !(
                    (n % 100 >= 10 && n % 100 <= 19) ||
                    (n % 100 >= 70 && n % 100 <= 79) ||
                    (n % 100 >= 90 && n % 100 <= 99)
                  )
                ? sl.Few
                : 0 !== n && n % 1e6 == 0
                ? sl.Many
                : sl.Other;
            case 'bs':
            case 'hr':
            case 'sr':
              return (0 === i && o % 10 == 1 && o % 100 != 11) ||
                (u % 10 == 1 && u % 100 != 11)
                ? sl.One
                : (0 === i &&
                    o % 10 === Math.floor(o % 10) &&
                    o % 10 >= 2 &&
                    o % 10 <= 4 &&
                    !(o % 100 >= 12 && o % 100 <= 14)) ||
                  (u % 10 === Math.floor(u % 10) &&
                    u % 10 >= 2 &&
                    u % 10 <= 4 &&
                    !(u % 100 >= 12 && u % 100 <= 14))
                ? sl.Few
                : sl.Other;
            case 'cs':
            case 'sk':
              return 1 === o && 0 === i
                ? sl.One
                : o === Math.floor(o) && o >= 2 && o <= 4 && 0 === i
                ? sl.Few
                : 0 !== i
                ? sl.Many
                : sl.Other;
            case 'cy':
              return 0 === n
                ? sl.Zero
                : 1 === n
                ? sl.One
                : 2 === n
                ? sl.Two
                : 3 === n
                ? sl.Few
                : 6 === n
                ? sl.Many
                : sl.Other;
            case 'da':
              return 1 === n || (0 !== a && (0 === o || 1 === o))
                ? sl.One
                : sl.Other;
            case 'dsb':
            case 'hsb':
              return (0 === i && o % 100 == 1) || u % 100 == 1
                ? sl.One
                : (0 === i && o % 100 == 2) || u % 100 == 2
                ? sl.Two
                : (0 === i &&
                    o % 100 === Math.floor(o % 100) &&
                    o % 100 >= 3 &&
                    o % 100 <= 4) ||
                  (u % 100 === Math.floor(u % 100) &&
                    u % 100 >= 3 &&
                    u % 100 <= 4)
                ? sl.Few
                : sl.Other;
            case 'ff':
            case 'fr':
            case 'hy':
            case 'kab':
              return 0 === o || 1 === o ? sl.One : sl.Other;
            case 'fil':
              return (0 === i && (1 === o || 2 === o || 3 === o)) ||
                (0 === i && o % 10 != 4 && o % 10 != 6 && o % 10 != 9) ||
                (0 !== i && u % 10 != 4 && u % 10 != 6 && u % 10 != 9)
                ? sl.One
                : sl.Other;
            case 'ga':
              return 1 === n
                ? sl.One
                : 2 === n
                ? sl.Two
                : n === Math.floor(n) && n >= 3 && n <= 6
                ? sl.Few
                : n === Math.floor(n) && n >= 7 && n <= 10
                ? sl.Many
                : sl.Other;
            case 'gd':
              return 1 === n || 11 === n
                ? sl.One
                : 2 === n || 12 === n
                ? sl.Two
                : n === Math.floor(n) &&
                  ((n >= 3 && n <= 10) || (n >= 13 && n <= 19))
                ? sl.Few
                : sl.Other;
            case 'gv':
              return 0 === i && o % 10 == 1
                ? sl.One
                : 0 === i && o % 10 == 2
                ? sl.Two
                : 0 !== i ||
                  (o % 100 != 0 &&
                    o % 100 != 20 &&
                    o % 100 != 40 &&
                    o % 100 != 60 &&
                    o % 100 != 80)
                ? 0 !== i
                  ? sl.Many
                  : sl.Other
                : sl.Few;
            case 'he':
              return 1 === o && 0 === i
                ? sl.One
                : 2 === o && 0 === i
                ? sl.Two
                : 0 !== i || (n >= 0 && n <= 10) || n % 10 != 0
                ? sl.Other
                : sl.Many;
            case 'is':
              return (0 === a && o % 10 == 1 && o % 100 != 11) || 0 !== a
                ? sl.One
                : sl.Other;
            case 'ksh':
              return 0 === n ? sl.Zero : 1 === n ? sl.One : sl.Other;
            case 'kw':
            case 'naq':
            case 'se':
            case 'smn':
              return 1 === n ? sl.One : 2 === n ? sl.Two : sl.Other;
            case 'lag':
              return 0 === n
                ? sl.Zero
                : (0 !== o && 1 !== o) || 0 === n
                ? sl.Other
                : sl.One;
            case 'lt':
              return n % 10 != 1 || (n % 100 >= 11 && n % 100 <= 19)
                ? n % 10 === Math.floor(n % 10) &&
                  n % 10 >= 2 &&
                  n % 10 <= 9 &&
                  !(n % 100 >= 11 && n % 100 <= 19)
                  ? sl.Few
                  : 0 !== u
                  ? sl.Many
                  : sl.Other
                : sl.One;
            case 'lv':
            case 'prg':
              return n % 10 == 0 ||
                (n % 100 === Math.floor(n % 100) &&
                  n % 100 >= 11 &&
                  n % 100 <= 19) ||
                (2 === i &&
                  u % 100 === Math.floor(u % 100) &&
                  u % 100 >= 11 &&
                  u % 100 <= 19)
                ? sl.Zero
                : (n % 10 == 1 && n % 100 != 11) ||
                  (2 === i && u % 10 == 1 && u % 100 != 11) ||
                  (2 !== i && u % 10 == 1)
                ? sl.One
                : sl.Other;
            case 'mk':
              return (0 === i && o % 10 == 1) || u % 10 == 1
                ? sl.One
                : sl.Other;
            case 'mt':
              return 1 === n
                ? sl.One
                : 0 === n ||
                  (n % 100 === Math.floor(n % 100) &&
                    n % 100 >= 2 &&
                    n % 100 <= 10)
                ? sl.Few
                : n % 100 === Math.floor(n % 100) &&
                  n % 100 >= 11 &&
                  n % 100 <= 19
                ? sl.Many
                : sl.Other;
            case 'pl':
              return 1 === o && 0 === i
                ? sl.One
                : 0 === i &&
                  o % 10 === Math.floor(o % 10) &&
                  o % 10 >= 2 &&
                  o % 10 <= 4 &&
                  !(o % 100 >= 12 && o % 100 <= 14)
                ? sl.Few
                : (0 === i &&
                    1 !== o &&
                    o % 10 === Math.floor(o % 10) &&
                    o % 10 >= 0 &&
                    o % 10 <= 1) ||
                  (0 === i &&
                    o % 10 === Math.floor(o % 10) &&
                    o % 10 >= 5 &&
                    o % 10 <= 9) ||
                  (0 === i &&
                    o % 100 === Math.floor(o % 100) &&
                    o % 100 >= 12 &&
                    o % 100 <= 14)
                ? sl.Many
                : sl.Other;
            case 'pt':
              return n === Math.floor(n) && n >= 0 && n <= 2 && 2 !== n
                ? sl.One
                : sl.Other;
            case 'ro':
              return 1 === o && 0 === i
                ? sl.One
                : 0 !== i ||
                  0 === n ||
                  (1 !== n &&
                    n % 100 === Math.floor(n % 100) &&
                    n % 100 >= 1 &&
                    n % 100 <= 19)
                ? sl.Few
                : sl.Other;
            case 'ru':
            case 'uk':
              return 0 === i && o % 10 == 1 && o % 100 != 11
                ? sl.One
                : 0 === i &&
                  o % 10 === Math.floor(o % 10) &&
                  o % 10 >= 2 &&
                  o % 10 <= 4 &&
                  !(o % 100 >= 12 && o % 100 <= 14)
                ? sl.Few
                : (0 === i && o % 10 == 0) ||
                  (0 === i &&
                    o % 10 === Math.floor(o % 10) &&
                    o % 10 >= 5 &&
                    o % 10 <= 9) ||
                  (0 === i &&
                    o % 100 === Math.floor(o % 100) &&
                    o % 100 >= 11 &&
                    o % 100 <= 14)
                ? sl.Many
                : sl.Other;
            case 'shi':
              return 0 === o || 1 === n
                ? sl.One
                : n === Math.floor(n) && n >= 2 && n <= 10
                ? sl.Few
                : sl.Other;
            case 'si':
              return 0 === n || 1 === n || (0 === o && 1 === u)
                ? sl.One
                : sl.Other;
            case 'sl':
              return 0 === i && o % 100 == 1
                ? sl.One
                : 0 === i && o % 100 == 2
                ? sl.Two
                : (0 === i &&
                    o % 100 === Math.floor(o % 100) &&
                    o % 100 >= 3 &&
                    o % 100 <= 4) ||
                  0 !== i
                ? sl.Few
                : sl.Other;
            case 'tzm':
              return (n === Math.floor(n) && n >= 0 && n <= 1) ||
                (n === Math.floor(n) && n >= 11 && n <= 99)
                ? sl.One
                : sl.Other;
            default:
              return sl.Other;
          }
        })(t, e)
      ) {
        case sl.Zero:
          return 'zero';
        case sl.One:
          return 'one';
        case sl.Two:
          return 'two';
        case sl.Few:
          return 'few';
        case sl.Many:
          return 'many';
        default:
          return 'other';
      }
    }
    function ll(e, t) {
      var n = e.cases.indexOf(t);
      if (-1 === n)
        switch (e.type) {
          case 1:
            var r = cl(t, 'en-US');
            -1 === (n = e.cases.indexOf(r)) &&
              'other' !== r &&
              (n = e.cases.indexOf('other'));
            break;
          case 0:
            n = e.cases.indexOf('other');
        }
      return n;
    }
    function fl(e, t, n, o) {
      for (
        var i = [], u = [], a = [], s = [], c = [], l = 0;
        l < t.values.length;
        l++
      ) {
        for (var f = t.values[l], d = [], p = 0; p < f.length; p++) {
          var h = f[p];
          if ('string' != typeof h) {
            var v = d.push(h) - 1;
            f[p] = '\x3c!--�' + v + '�--\x3e';
          }
        }
        var g = dl(f.join(''), n, d, e, o);
        i.push(g.create),
          u.push(g.remove),
          a.push(g.update),
          s.push(g.vars),
          c.push(g.childIcus);
      }
      var y = {
        type: t.type,
        vars: s,
        expandoStartIndex: o + 1,
        childIcus: c,
        cases: t.cases,
        create: i,
        remove: u,
        update: a
      };
      e.push(y);
      var m = En(),
        b = Math.max.apply(Math, Object(r.g)(s));
      for (l = 0; l < b; l++) Bi(m);
    }
    function dl(e, t, n, o, i) {
      var u = new sc(document).getInertBodyElement(e);
      if (!u) throw new Error('Unable to generate inert body element');
      var a = { vars: 0, childIcus: [], create: [], remove: [], update: [] };
      return (
        (function e(t, n, o, i, u, a) {
          if (t) {
            for (var s = []; t; ) {
              var c = t.nextSibling,
                l = a + ++n.vars;
              switch (t.nodeType) {
                case Node.ELEMENT_NODE:
                  var f = t,
                    d = f.tagName.toLowerCase();
                  if (_c.hasOwnProperty(d)) {
                    n.create.push(Rc, d, (o << 17) | 1);
                    for (var p = f.attributes, h = 0; h < p.length; h++) {
                      var v = p.item(h),
                        g = v.name.toLowerCase(),
                        y = !!v.value.match(Fc);
                      y
                        ? Dc.hasOwnProperty(g)
                          ? wc[g]
                            ? yn(Gc(v.value, l, v.name, fc), n.update)
                            : Cc[g]
                            ? yn(Gc(v.value, l, v.name, dc), n.update)
                            : yn(Gc(v.value, l, v.name), n.update)
                          : ngDevMode &&
                            console.warn(
                              'WARNING: ignoring unsafe attribute value ' +
                                g +
                                ' on element ' +
                                d +
                                ' (see http://g.co/ng/security#xss)'
                            )
                        : n.create.push((l << 3) | 4, v.name, v.value);
                    }
                    e(t.firstChild, n, l, i, u, a), n.remove.push((l << 3) | 3);
                  } else n.vars--;
                  break;
                case Node.TEXT_NODE:
                  var m = t.textContent || '',
                    b = m.match(Fc);
                  n.create.push(b ? '' : m, (o << 17) | 1),
                    n.remove.push((l << 3) | 3),
                    b && yn(Gc(m, l), n.update);
                  break;
                case Node.COMMENT_NODE:
                  var _ = pl.exec(t.textContent || '');
                  if (_) {
                    var w = parseInt(_[1], 10),
                      C = ngDevMode ? 'nested ICU ' + w : '';
                    n.create.push(Ic, C, (o << 17) | 1);
                    var D = i[w];
                    s.push([D, l]);
                  } else n.vars--;
                  break;
                default:
                  n.vars--;
              }
              t = c;
            }
            for (var h = 0; h < s.length; h++) {
              var D = s[h][0],
                E = s[h][1];
              fl(u, D, E, a + n.vars);
              var O = u.length - 1;
              (n.vars += Math.max.apply(Math, Object(r.g)(u[O].vars))),
                n.childIcus.push(O);
              var S = Zc(D);
              n.update.push(
                Qc(D.mainBinding),
                3,
                -1 - D.mainBinding,
                (E << 2) | 2,
                O,
                S,
                2,
                (E << 2) | 3,
                O
              ),
                n.remove.push((O << 3) | 6, (E << 3) | 3);
            }
          }
        })(
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */ (jc(u) || u).firstChild,
          a,
          t,
          n,
          o,
          i
        ),
        a
      );
    }
    var pl = /�(\d+)�/;
    var hl = {
        provide: ks,
        useFactory: function() {
          return new Ys();
        },
        deps: []
      },
      vl = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          (r._bootstrapComponents = []), (r.destroyCbs = []);
          var o = Ee(t);
          ngDevMode &&
            Ge(
              o,
              "NgModule '" + ce(t) + "' is not a subtype of 'NgModuleType'."
            ),
            (r._bootstrapComponents = o.bootstrap);
          var i = [hl, { provide: no, useValue: r }];
          return (
            (r.injector = ps(t, n, i)),
            (r.instance = r.injector.get(t)),
            (r.componentFactoryResolver = new Ys()),
            r
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.destroy = function() {
            ngDevMode && Ge(this.destroyCbs, 'NgModule already destroyed'),
              this.destroyCbs.forEach(function(e) {
                return e();
              }),
              (this.destroyCbs = null);
          }),
          (t.prototype.onDestroy = function(e) {
            ngDevMode && Ge(this.destroyCbs, 'NgModule already destroyed'),
              this.destroyCbs.push(e);
          }),
          t
        );
      })(no),
      gl = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.moduleType = t), n;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.create = function(e) {
            return new vl(this.moduleType, e);
          }),
          t
        );
      })(ro);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function yl(e, t, n, o) {
      var i,
        u = e;
      null !== t &&
        (void 0 !== u.decorators
          ? (i = u.decorators).push.apply(i, Object(r.g)(t))
          : (u.decorators = t)),
        null !== n && (u.ctorParameters = n),
        null !== o &&
          (void 0 !== u.propDecorators
            ? (u.propDecorators = Object(r.a)({}, u.propDecorators, o))
            : (u.propDecorators = o));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function ml(e, t, n) {
      var r = Wn() + e;
      return Mn() ? va(r, n ? t.call(n) : t()) : pa(r);
    }
    function bl(e, t, n, r) {
      var o = Wn() + e;
      return ha(o, n) ? va(o + 1, r ? t.call(r, n) : t(n)) : pa(o + 1);
    }
    function _l(e, t, n, r, o) {
      var i = Wn() + e;
      return ga(i, n, r) ? va(i + 2, o ? t.call(o, n, r) : t(n, r)) : pa(i + 2);
    }
    function wl(e, t, n, r, o, i) {
      var u = Wn() + e;
      return ya(u, n, r, o)
        ? va(u + 3, i ? t.call(i, n, r, o) : t(n, r, o))
        : pa(u + 3);
    }
    function Cl(e, t, n, r, o, i, u) {
      var a = Wn() + e;
      return ma(a, n, r, o, i)
        ? va(a + 4, u ? t.call(u, n, r, o, i) : t(n, r, o, i))
        : pa(a + 4);
    }
    function Dl(e, t, n, r, o, i, u, a) {
      var s = Wn() + e,
        c = ma(s, n, r, o, i);
      return ha(s + 4, u) || c
        ? va(s + 5, a ? t.call(a, n, r, o, i, u) : t(n, r, o, i, u))
        : pa(s + 5);
    }
    function El(e, t, n, r, o, i, u, a, s) {
      var c = Wn() + e,
        l = ma(c, n, r, o, i);
      return ga(c + 4, u, a) || l
        ? va(c + 6, s ? t.call(s, n, r, o, i, u, a) : t(n, r, o, i, u, a))
        : pa(c + 6);
    }
    function Ol(e, t, n, r, o, i, u, a, s, c) {
      var l = Wn() + e,
        f = ma(l, n, r, o, i);
      return ya(l + 4, u, a, s) || f
        ? va(l + 7, c ? t.call(c, n, r, o, i, u, a, s) : t(n, r, o, i, u, a, s))
        : pa(l + 7);
    }
    function Sl(e, t, n, r, o, i, u, a, s, c, l) {
      var f = Wn() + e,
        d = ma(f, n, r, o, i);
      return ma(f + 4, u, a, s, c) || d
        ? va(
            f + 8,
            l ? t.call(l, n, r, o, i, u, a, s, c) : t(n, r, o, i, u, a, s, c)
          )
        : pa(f + 8);
    }
    function xl(e, t, n, r) {
      for (var o = Wn() + e, i = !1, u = 0; u < n.length; u++)
        ha(o++, n[u]) && (i = !0);
      return i ? va(o, t.apply(r, n)) : pa(o);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Al(e, t) {
      var n,
        r = In(),
        o = e + Xe;
      r.firstTemplatePass
        ? ((n = (function(e, t) {
            if (t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (e === r.name) return r;
              }
            throw new Error("Pipe with name '" + e + "' not found!");
          })(t, r.pipeRegistry)),
          (r.data[o] = n),
          n.onDestroy &&
            (r.pipeDestroyHooks || (r.pipeDestroyHooks = [])).push(
              o,
              n.onDestroy
            ))
        : (n = r.data[o]);
      var i = n.factory(null);
      return ca(e, i), i;
    }
    function jl(e, t, n) {
      var r = da(e);
      return Ml(e) ? bl(t, r.transform, n, r) : r.transform(n);
    }
    function Rl(e, t, n, r) {
      var o = da(e);
      return Ml(e) ? _l(t, o.transform, n, r, o) : o.transform(n, r);
    }
    function Il(e, t, n, r, o) {
      var i = da(e);
      return Ml(e) ? wl(t, i.transform, n, r, o, i) : i.transform(n, r, o);
    }
    function Tl(e, t, n, r, o, i) {
      var u = da(e);
      return Ml(e)
        ? Cl(t, u.transform, n, r, o, i, u)
        : u.transform(n, r, o, i);
    }
    function kl(e, t, n) {
      var r = da(e);
      return Ml(e) ? xl(t, r.transform, n, r) : r.transform.apply(r, n);
    }
    function Ml(e) {
      return In().data[e + Xe].pure;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Pl = (function(e) {
        function t(t) {
          void 0 === t && (t = !1);
          var n = e.call(this) || this;
          return (n.__isAsync = t), n;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.emit = function(t) {
            e.prototype.next.call(this, t);
          }),
          (t.prototype.subscribe = function(t, n, r) {
            var i,
              u = function(e) {
                return null;
              },
              a = function() {
                return null;
              };
            t && 'object' == typeof t
              ? ((i = this.__isAsync
                  ? function(e) {
                      setTimeout(function() {
                        return t.next(e);
                      });
                    }
                  : function(e) {
                      t.next(e);
                    }),
                t.error &&
                  (u = this.__isAsync
                    ? function(e) {
                        setTimeout(function() {
                          return t.error(e);
                        });
                      }
                    : function(e) {
                        t.error(e);
                      }),
                t.complete &&
                  (a = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return t.complete();
                        });
                      }
                    : function() {
                        t.complete();
                      }))
              : ((i = this.__isAsync
                  ? function(e) {
                      setTimeout(function() {
                        return t(e);
                      });
                    }
                  : function(e) {
                      t(e);
                    }),
                n &&
                  (u = this.__isAsync
                    ? function(e) {
                        setTimeout(function() {
                          return n(e);
                        });
                      }
                    : function(e) {
                        n(e);
                      }),
                r &&
                  (a = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return r();
                        });
                      }
                    : function() {
                        r();
                      }));
            var s = e.prototype.subscribe.call(this, i, u, a);
            return t instanceof o.a && t.add(s), s;
          }),
          t
        );
      })(i.a),
      Fl = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return Vl(e, Fs);
          }),
          e
        );
      })(),
      Nl = function(e, t) {
        return Ia(e, t, Sn(), Pn());
      },
      Vl = Rr,
      Ll = (function() {
        function e(e, t, n) {
          (this.parent = e), (this.shallow = t), (this.deep = n);
        }
        return (
          (e.prototype.track = function(e, t, n, r) {
            n
              ? (this.deep = $l(this.deep, e, t, null != r ? r : null))
              : (this.shallow = $l(this.shallow, e, t, null != r ? r : null));
          }),
          (e.prototype.clone = function() {
            return new e(this, null, this.deep);
          }),
          (e.prototype.container = function() {
            var t = Bl(this.shallow),
              n = Bl(this.deep);
            return t || n ? new e(this, t, n) : null;
          }),
          (e.prototype.createView = function() {
            var t = Ul(this.shallow),
              n = Ul(this.deep);
            return t || n ? new e(this, t, n) : null;
          }),
          (e.prototype.insertView = function(e) {
            Hl(e, this.shallow), Hl(e, this.deep);
          }),
          (e.prototype.addNode = function(e) {
            return (
              Kl(this.deep, e),
              qt(e)
                ? (Kl(this.shallow, e),
                  e.parent && qt(e.parent) && Kl(this.parent.shallow, e),
                  this.parent)
                : ((function(e) {
                    return null === e.parent || qt(e.parent);
                  })(e) && Kl(this.shallow, e),
                  this)
            );
          }),
          (e.prototype.removeView = function() {
            zl(this.shallow), zl(this.deep);
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Bl(e) {
      for (var t = null; e; ) {
        var n = [];
        e.values.push(n),
          (t = {
            next: t,
            list: e.list,
            predicate: e.predicate,
            values: n,
            containerValues: null
          }),
          (e = e.next);
      }
      return t;
    }
    function Ul(e) {
      for (var t = null; e; ) {
        (t = {
          next: t,
          list: e.list,
          predicate: e.predicate,
          values: [],
          containerValues: e.values
        }),
          (e = e.next);
      }
      return t;
    }
    function Hl(e, t) {
      for (; t; )
        ngDevMode &&
          Ge(
            t.containerValues,
            'View queries need to have a pointer to container values.'
          ),
          t.containerValues.splice(e, 0, t.values),
          (t = t.next);
    }
    function zl(e) {
      for (; e; ) {
        ngDevMode &&
          Ge(
            e.containerValues,
            'View queries need to have a pointer to container values.'
          );
        var t = e.containerValues,
          n = t.indexOf(e.values),
          r = t.splice(n, 1);
        ngDevMode && Be(r.length, 1, 'removed.length'),
          r[0].length && e.list.setDirty(),
          (e = e.next);
      }
    }
    function Gl(e, t) {
      var n = e.localNames;
      if (n)
        for (var r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
      return null;
    }
    function Zl(e, t, n) {
      var r = t[et].data;
      if (r)
        for (
          var o = e.flags, i = o >> 16, u = i + (4095 & o), a = i;
          a < u;
          a++
        ) {
          if (r[a].type === n) return a;
        }
      return null;
    }
    function ql(e, t, n) {
      var r = e[x];
      if ('function' == typeof r) return r();
      var o = Zl(t, n, e);
      return null !== o ? n[o] : null;
    }
    function Wl(e, t, n, r) {
      var o = e[x]();
      return r ? (o ? ql(r, t, n) : null) : o;
    }
    function Ql(e, t, n, r) {
      return n
        ? ql(n, e, t)
        : r > -1
        ? t[r]
        : (function(e, t) {
            return 3 === e.type || 4 === e.type
              ? Ra(Fs, e, t)
              : 0 === e.type
              ? Ia(Fl, Fs, e, t)
              : null;
          })(e, t);
    }
    function Kl(e, t) {
      for (var n = Pn(); e; ) {
        var r = e.predicate,
          o = r.type;
        if (o) {
          var i = null;
          if (o === Fl) i = Wl(o, t, n, r.read);
          else null !== (s = Zl(t, n, o)) && (i = Ql(t, n, r.read, s));
          null !== i && Yl(e, i);
        } else
          for (var u = r.selector, a = 0; a < u.length; a++) {
            var s;
            if (null !== (s = Gl(t, u[a])))
              null !== (i = Ql(t, n, r.read, s)) && Yl(e, i);
          }
        e = e.next;
      }
    }
    function Yl(e, t) {
      e.values.push(t), e.list.setDirty();
    }
    function $l(e, t, n, r) {
      return {
        next: e,
        list: t,
        predicate: (function(e, t) {
          var n = Array.isArray(e);
          return { type: n ? null : e, selector: n ? e : null, read: t };
        })(n, r),
        values: t._valuesTree,
        containerValues: null
      };
    }
    var Jl = (function() {
      function e() {
        (this.dirty = !0),
          (this.changes = new Pl()),
          (this._values = []),
          (this._valuesTree = []);
      }
      return (
        Object.defineProperty(e.prototype, 'length', {
          get: function() {
            return this._values.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'first', {
          get: function() {
            var e = this._values;
            return e.length ? e[0] : null;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'last', {
          get: function() {
            var e = this._values;
            return e.length ? e[e.length - 1] : null;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.map = function(e) {
          return this._values.map(e);
        }),
        (e.prototype.filter = function(e) {
          return this._values.filter(e);
        }),
        (e.prototype.find = function(e) {
          return this._values.find(e);
        }),
        (e.prototype.reduce = function(e, t) {
          return this._values.reduce(e, t);
        }),
        (e.prototype.forEach = function(e) {
          this._values.forEach(e);
        }),
        (e.prototype.some = function(e) {
          return this._values.some(e);
        }),
        (e.prototype.toArray = function() {
          return this._values.slice(0);
        }),
        (e.prototype[ue()] = function() {
          return this._values[ue()]();
        }),
        (e.prototype.toString = function() {
          return this._values.toString();
        }),
        (e.prototype.reset = function(e) {
          (this._values = (function(e) {
            for (var t = [], n = 0; n < e.length; ) {
              var r = e[n];
              Array.isArray(r)
                ? r.length > 0
                  ? ((e = r.concat(e.slice(n + 1))), (n = 0))
                  : n++
                : (t.push(r), n++);
            }
            return t;
          })(e)),
            (this.dirty = !1);
        }),
        (e.prototype.notifyOnChanges = function() {
          this.changes.emit(this);
        }),
        (e.prototype.setDirty = function() {
          this.dirty = !0;
        }),
        (e.prototype.destroy = function() {
          this.changes.complete(), this.changes.unsubscribe();
        }),
        e
      );
    })();
    function Xl(e, t, n, r) {
      ngDevMode && Jn();
      var o = new Jl();
      return (
        (function(e) {
          return (
            ln &&
              ln !== vn[ut] &&
              !qt(ln) &&
              (pn && (pn = pn.clone()), (ln.flags |= 16384)),
            pn || (pn = new e(null, null, null))
          );
        })(Ll).track(o, t, n, r),
        au(null, o, o.destroy),
        null != e && ca(e, o),
        o
      );
    }
    function ef(e) {
      var t = e;
      return !!e.dirty && (e.reset(t._valuesTree), e.notifyOnChanges(), !0);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function tf(e, t) {
      return Ia(Fl, Fs, e, t);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var nf = '__SANITIZER_TRUSTED_BRAND__';
    function rf(e, t) {
      return e instanceof String && e[nf] === t;
    }
    function of(e) {
      return lf(e, 'Html');
    }
    function uf(e) {
      return lf(e, 'Style');
    }
    function af(e) {
      return lf(e, 'Script');
    }
    function sf(e) {
      return lf(e, 'Url');
    }
    function cf(e) {
      return lf(e, 'ResourceUrl');
    }
    function lf(e, t) {
      var n = new String(e);
      return (n[nf] = t), n;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var ff = (function(e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })({}),
      df = (function() {
        return function() {};
      })(),
      pf = new RegExp(
        '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
        'g'
      ),
      hf = /^url\(([^)]+)\)$/;
    function vf(e) {
      if (!(e = String(e).trim())) return '';
      var t = e.match(hf);
      return (t && fc(t[1]) === t[1]) ||
        (e.match(pf) &&
          (function(e) {
            for (var t = !0, n = !0, r = 0; r < e.length; r++) {
              var o = e.charAt(r);
              "'" === o && n ? (t = !t) : '"' === o && t && (n = !n);
            }
            return t && n;
          })(e))
        ? e
        : (uc() &&
            console.warn(
              'WARNING: sanitizing unsafe style value ' +
                e +
                ' (see http://g.co/ng/security#xss).'
            ),
          'unsafe');
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function gf(e) {
      var t = _n();
      return t
        ? t.sanitize(ff.HTML, e) || ''
        : rf(e, 'Html')
        ? e.toString()
        : Ac(document, Vt(e));
    }
    function yf(e) {
      var t = _n();
      return t
        ? t.sanitize(ff.STYLE, e) || ''
        : rf(e, 'Style')
        ? e.toString()
        : vf(Vt(e));
    }
    function mf(e) {
      var t = _n();
      return t
        ? t.sanitize(ff.URL, e) || ''
        : rf(e, 'Url')
        ? e.toString()
        : fc(Vt(e));
    }
    function bf(e) {
      var t = _n();
      if (t) return t.sanitize(ff.RESOURCE_URL, e) || '';
      if (rf(e, 'ResourceUrl')) return e.toString();
      throw new Error(
        'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
      );
    }
    var _f = {
        ɵdefineBase: me,
        ɵdefineComponent: pe,
        ɵdefineDirective: be,
        defineInjectable: A,
        defineInjector: j,
        ɵdefineNgModule: ge,
        ɵdefinePipe: _e,
        ɵdirectiveInject: ba,
        ɵgetFactoryOf: mr,
        ɵgetInheritedFactory: br,
        inject: Ne,
        ɵinjectAttribute: _a,
        ɵtemplateRefExtractor: tf,
        ɵNgOnChangesFeature: is,
        ɵProvidersFeature: xs,
        ɵInheritDefinitionFeature: ns,
        ɵelementAttribute: lu,
        ɵbind: Xu,
        ɵcontainer: Mu,
        ɵnextContext: Hi,
        ɵcontainerRefreshStart: Fu,
        ɵcontainerRefreshEnd: Nu,
        ɵloadQueryList: fa,
        ɵnamespaceHTML: Qi,
        ɵnamespaceMathML: Wi,
        ɵnamespaceSVG: qi,
        ɵenableBindings: wn,
        ɵdisableBindings: Cn,
        ɵelementStart: Ji,
        ɵelementEnd: cu,
        ɵelement: Ki,
        ɵelementContainerStart: Yi,
        ɵelementContainerEnd: $i,
        ɵpureFunction0: ml,
        ɵpureFunction1: bl,
        ɵpureFunction2: _l,
        ɵpureFunction3: wl,
        ɵpureFunction4: Cl,
        ɵpureFunction5: Dl,
        ɵpureFunction6: El,
        ɵpureFunction7: Ol,
        ɵpureFunction8: Sl,
        ɵpureFunctionV: xl,
        ɵgetCurrentView: Dn,
        ɵrestoreView: On,
        ɵinterpolation1: ta,
        ɵinterpolation2: na,
        ɵinterpolation3: ra,
        ɵinterpolation4: oa,
        ɵinterpolation5: ia,
        ɵinterpolation6: ua,
        ɵinterpolation7: aa,
        ɵinterpolation8: sa,
        ɵinterpolationV: ea,
        ɵelementClassProp: vu,
        ɵlistener: uu,
        ɵload: da,
        ɵprojection: Gu,
        ɵelementProperty: fu,
        ɵpipeBind1: jl,
        ɵpipeBind2: Rl,
        ɵpipeBind3: Il,
        ɵpipeBind4: Tl,
        ɵpipeBindV: kl,
        ɵprojectionDef: Hu,
        ɵpipe: Al,
        ɵquery: Xl,
        ɵqueryRefresh: ef,
        ɵregisterContentQuery: wa,
        ɵreference: la,
        ɵelementStyling: gu,
        ɵelementStylingMap: bu,
        ɵelementStyleProp: mu,
        ɵelementStylingApply: yu,
        ɵtemplate: ku,
        ɵtext: wu,
        ɵtextBinding: Cu,
        ɵembeddedViewStart: Vu,
        ɵembeddedViewEnd: Lu,
        ɵi18n: nl,
        ɵi18nAttributes: rl,
        ɵi18nExp: ul,
        ɵi18nStart: Yc,
        ɵi18nEnd: Xc,
        ɵi18nApply: al,
        ɵi18nPostprocess: Jc,
        ɵsanitizeHtml: gf,
        ɵsanitizeStyle: yf,
        ɵdefaultStyleSanitizer: function(e, t) {
          return void 0 === t
            ? 'background-image' === e ||
                'background' === e ||
                'border-image' === e ||
                'filter' === e ||
                'filter' === e ||
                'list-style' === e ||
                'list-style-image' === e
            : yf(t);
        },
        ɵsanitizeResourceUrl: bf,
        ɵsanitizeScript: function(e) {
          var t = _n();
          if (t) return t.sanitize(ff.SCRIPT, e) || '';
          if (rf(e, 'Script')) return e.toString();
          throw new Error('unsafe value used in a script context');
        },
        ɵsanitizeUrl: mf
      },
      wf = Function;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Cf(e) {
      return 'function' == typeof e;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Df = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,
      Ef = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
      Of = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,
      Sf = (function() {
        function e(e) {
          this._reflect = e || re.Reflect;
        }
        return (
          (e.prototype.isReflectionEnabled = function() {
            return !0;
          }),
          (e.prototype.factory = function(e) {
            return function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new (e.bind.apply(e, Object(r.g)([void 0], t)))();
            };
          }),
          (e.prototype._zipTypesAndAnnotations = function(e, t) {
            var n;
            n = void 0 === e ? new Array(t.length) : new Array(e.length);
            for (var r = 0; r < n.length; r++)
              void 0 === e
                ? (n[r] = [])
                : e[r] != Object
                ? (n[r] = [e[r]])
                : (n[r] = []),
                t && null != t[r] && (n[r] = n[r].concat(t[r]));
            return n;
          }),
          (e.prototype._ownParameters = function(e, t) {
            var n = e.toString();
            if (Df.exec(n) || (Ef.exec(n) && !Of.exec(n))) return null;
            if (e.parameters && e.parameters !== t.parameters)
              return e.parameters;
            var r = e.ctorParameters;
            if (r && r !== t.ctorParameters) {
              var o = 'function' == typeof r ? r() : r,
                i = o.map(function(e) {
                  return e && e.type;
                }),
                u = o.map(function(e) {
                  return e && xf(e.decorators);
                });
              return this._zipTypesAndAnnotations(i, u);
            }
            var a = e.hasOwnProperty(M) && e[M],
              s =
                this._reflect &&
                this._reflect.getOwnMetadata &&
                this._reflect.getOwnMetadata('design:paramtypes', e);
            return s || a
              ? this._zipTypesAndAnnotations(s, a)
              : new Array(e.length).fill(void 0);
          }),
          (e.prototype.parameters = function(e) {
            if (!Cf(e)) return [];
            var t = Af(e),
              n = this._ownParameters(e, t);
            return n || t === Object || (n = this.parameters(t)), n || [];
          }),
          (e.prototype._ownAnnotations = function(e, t) {
            if (e.annotations && e.annotations !== t.annotations) {
              var n = e.annotations;
              return (
                'function' == typeof n && n.annotations && (n = n.annotations),
                n
              );
            }
            return e.decorators && e.decorators !== t.decorators
              ? xf(e.decorators)
              : e.hasOwnProperty(k)
              ? e[k]
              : null;
          }),
          (e.prototype.annotations = function(e) {
            if (!Cf(e)) return [];
            var t = Af(e),
              n = this._ownAnnotations(e, t) || [];
            return (t !== Object ? this.annotations(t) : []).concat(n);
          }),
          (e.prototype._ownPropMetadata = function(e, t) {
            if (e.propMetadata && e.propMetadata !== t.propMetadata) {
              var n = e.propMetadata;
              return (
                'function' == typeof n &&
                  n.propMetadata &&
                  (n = n.propMetadata),
                n
              );
            }
            if (e.propDecorators && e.propDecorators !== t.propDecorators) {
              var r = e.propDecorators,
                o = {};
              return (
                Object.keys(r).forEach(function(e) {
                  o[e] = xf(r[e]);
                }),
                o
              );
            }
            return e.hasOwnProperty(P) ? e[P] : null;
          }),
          (e.prototype.propMetadata = function(e) {
            if (!Cf(e)) return {};
            var t = Af(e),
              n = {};
            if (t !== Object) {
              var o = this.propMetadata(t);
              Object.keys(o).forEach(function(e) {
                n[e] = o[e];
              });
            }
            var i = this._ownPropMetadata(e, t);
            return (
              i &&
                Object.keys(i).forEach(function(e) {
                  var t = [];
                  n.hasOwnProperty(e) && t.push.apply(t, Object(r.g)(n[e])),
                    t.push.apply(t, Object(r.g)(i[e])),
                    (n[e] = t);
                }),
              n
            );
          }),
          (e.prototype.hasLifecycleHook = function(e, t) {
            return e instanceof wf && t in e.prototype;
          }),
          (e.prototype.guards = function(e) {
            return {};
          }),
          (e.prototype.getter = function(e) {
            return new Function('o', 'return o.' + e + ';');
          }),
          (e.prototype.setter = function(e) {
            return new Function('o', 'v', 'return o.' + e + ' = v;');
          }),
          (e.prototype.method = function(e) {
            return new Function(
              'o',
              'args',
              'if (!o.' +
                e +
                ') throw new Error(\'"' +
                e +
                '" is undefined\');\n        return o.' +
                e +
                '.apply(o, args);'
            );
          }),
          (e.prototype.importUri = function(e) {
            return 'object' == typeof e && e.filePath
              ? e.filePath
              : './' + ce(e);
          }),
          (e.prototype.resourceUri = function(e) {
            return './' + ce(e);
          }),
          (e.prototype.resolveIdentifier = function(e, t, n, r) {
            return r;
          }),
          (e.prototype.resolveEnum = function(e, t) {
            return e[t];
          }),
          e
        );
      })();
    function xf(e) {
      return e
        ? e.map(function(e) {
            var t = e.type.annotationCls,
              n = e.args ? e.args : [];
            return new (t.bind.apply(t, Object(r.g)([void 0], n)))();
          })
        : [];
    }
    function Af(e) {
      var t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
      return (t ? t.constructor : null) || Object;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var jf = null;
    function Rf() {
      return (jf = jf || new Sf());
    }
    function If(e) {
      return Tf(Rf().parameters(e));
    }
    function Tf(e) {
      var t = Oe();
      return e.map(function(e) {
        return (function(e, t) {
          var n = {
            token: null,
            host: !1,
            optional: !1,
            resolved: e.R3ResolvedDependencyType.Token,
            self: !1,
            skipSelf: !1
          };
          function r(t) {
            (n.resolved = e.R3ResolvedDependencyType.Token), (n.token = t);
          }
          if (Array.isArray(t)) {
            if (0 === t.length)
              throw new Error('Dependency array must have arguments.');
            for (var o = 0; o < t.length; o++) {
              var i = t[o];
              if (void 0 !== i)
                if (
                  i instanceof Ae ||
                  'Optional' === i.__proto__.ngMetadataName
                )
                  n.optional = !0;
                else if (
                  i instanceof Re ||
                  'SkipSelf' === i.__proto__.ngMetadataName
                )
                  n.skipSelf = !0;
                else if (
                  i instanceof je ||
                  'Self' === i.__proto__.ngMetadataName
                )
                  n.self = !0;
                else if (
                  i instanceof Ie ||
                  'Host' === i.__proto__.ngMetadataName
                )
                  n.host = !0;
                else if (i instanceof xe) n.token = i.token;
                else if (i instanceof U) {
                  if (void 0 === i.attributeName)
                    throw new Error('Attribute name must be defined.');
                  (n.token = i.attributeName),
                    (n.resolved = e.R3ResolvedDependencyType.Attribute);
                } else r(i);
            }
          } else r(t);
          return n;
        })(
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */ t,
          e
        );
      });
    }
    var kf = [];
    function Mf(e, t) {
      Pf(e, t),
        (function(e, t) {
          var n = Vf(t.declarations || kf),
            r = Nf(e);
          n.forEach(function(t) {
            if (t.hasOwnProperty(_)) {
              var n = t,
                o = we(n);
              Ff(o, r);
            } else t.hasOwnProperty(w) || t.hasOwnProperty(E) || (t.ngSelectorScope = e);
          });
        })(e, t);
    }
    function Pf(e, t) {
      var n = Vf(t.declarations || kf),
        r = null;
      Object.defineProperty(e, O, {
        configurable: !0,
        get: function() {
          return (
            null === r &&
              (r = Oe().compileNgModule(
                _f,
                'ng://' + e.name + '/ngModuleDef.js',
                {
                  type: e,
                  bootstrap: Vf(t.bootstrap || kf),
                  declarations: n,
                  imports: Vf(t.imports || kf).map(Lf),
                  exports: Vf(t.exports || kf).map(Lf),
                  emitInline: !0
                }
              )),
            r
          );
        }
      });
      var o = null;
      Object.defineProperty(e, D, {
        get: function() {
          if (null === o) {
            var n = {
              name: e.name,
              type: e,
              deps: If(e),
              providers: t.providers || kf,
              imports: [t.imports || kf, t.exports || kf]
            };
            o = Oe().compileInjector(
              _f,
              'ng://' + e.name + '/ngInjectorDef.js',
              n
            );
          }
          return o;
        },
        configurable: !!ngDevMode
      });
    }
    function Ff(e, t) {
      (e.directiveDefs = function() {
        return Array.from(t.compilation.directives)
          .map(function(e) {
            return Ce(e) || we(e);
          })
          .filter(function(e) {
            return !!e;
          });
      }),
        (e.pipeDefs = function() {
          return Array.from(t.compilation.pipes).map(function(e) {
            return De(e);
          });
        });
    }
    function Nf(e) {
      if (!Bf(e)) throw new Error(e.name + ' does not have an ngModuleDef');
      var t = Ee(e);
      if (null !== t.transitiveCompileScopes) return t.transitiveCompileScopes;
      var n = {
        compilation: { directives: new Set(), pipes: new Set() },
        exported: { directives: new Set(), pipes: new Set() }
      };
      return (
        t.declarations.forEach(function(e) {
          De(e) ? n.compilation.pipes.add(e) : n.compilation.directives.add(e);
        }),
        t.imports.forEach(function(e) {
          var t = e;
          if (!Bf(t))
            throw new Error(
              'Importing ' + t.name + ' which does not have an ngModuleDef'
            );
          var r = Nf(t);
          r.exported.directives.forEach(function(e) {
            return n.compilation.directives.add(e);
          }),
            r.exported.pipes.forEach(function(e) {
              return n.compilation.pipes.add(e);
            });
        }),
        t.exports.forEach(function(e) {
          var t = e;
          if (Bf(t)) {
            var r = Nf(t);
            r.exported.directives.forEach(function(e) {
              n.compilation.directives.add(e), n.exported.directives.add(e);
            }),
              r.exported.pipes.forEach(function(e) {
                n.compilation.pipes.add(e), n.exported.pipes.add(e);
              });
          } else Ee(t) ? n.exported.pipes.add(t) : n.exported.directives.add(t);
        }),
        (t.transitiveCompileScopes = n),
        n
      );
    }
    function Vf(e) {
      var t = [];
      return (
        e.forEach(function(e) {
          Array.isArray(e) ? t.push.apply(t, Object(r.g)(Vf(e))) : t.push(e);
        }),
        t
      );
    }
    function Lf(e) {
      return (function(e) {
        return void 0 !== e.ngModule;
      })(e)
        ? e.ngModule
        : e;
    }
    function Bf(e) {
      return !!Ee(e);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Uf(e, t) {
      var n = null;
      !(function(e) {
        J(e) && $.add(e);
      })(t),
        Object.defineProperty(e, _, {
          get: function() {
            var o = Oe();
            if (null === n) {
              if (J(t)) {
                var i = ["Component '" + ce(e) + "' is not resolved:"];
                throw (t.templateUrl &&
                  i.push(' - templateUrl: ' + ce(t.templateUrl)),
                t.styleUrls &&
                  t.styleUrls.length &&
                  i.push(' - styleUrls: ' + JSON.stringify(t.styleUrls)),
                i.push(
                  "Did you run and wait for 'resolveComponentResources()'?"
                ),
                new Error(i.join('\n')));
              }
              var u = Object(r.a)({}, zf(e, t), {
                template: t.template || '',
                preserveWhitespaces: t.preserveWhitespaces || !1,
                styles: t.styles || fe,
                animations: t.animations,
                viewQueries: Zf(Rf().propMetadata(e), Wf),
                directives: new Map(),
                pipes: new Map(),
                encapsulation: t.encapsulation || ee.Emulated,
                viewProviders: t.viewProviders || null
              });
              if (
                ((n = o.compileComponent(
                  _f,
                  'ng://' + ce(e) + '/template.html',
                  u
                )),
                (function(e) {
                  return void 0 !== e.ngSelectorScope;
                })(e))
              ) {
                var a = Nf(e.ngSelectorScope);
                Ff(n, a);
              }
            }
            return n;
          },
          configurable: !!ngDevMode
        });
    }
    function Hf(e, t) {
      var n = null;
      Object.defineProperty(e, w, {
        get: function() {
          if (null === n) {
            var r = zf(e, t);
            n = Oe().compileDirective(
              _f,
              'ng://' + (e && e.name) + '/ngDirectiveDef.js',
              r
            );
          }
          return n;
        },
        configurable: !!ngDevMode
      });
    }
    function zf(e, t) {
      var n = Rf().propMetadata(e);
      return {
        name: e.name,
        type: e,
        typeArgumentCount: 0,
        selector: t.selector,
        deps: If(e),
        host: t.host || Gf,
        propMetadata: n,
        inputs: t.inputs || fe,
        outputs: t.outputs || fe,
        queries: Zf(n, qf),
        lifecycle: { usesOnChanges: void 0 !== e.prototype.ngOnChanges },
        typeSourceSpan: null,
        usesInheritance: !(function(e) {
          return Object.getPrototypeOf(e.prototype) === Object.prototype;
        })(e),
        exportAs: t.exportAs || null,
        providers: t.providers || null
      };
    }
    var Gf = {};
    function Zf(e, t) {
      var n = [],
        r = function(r) {
          e.hasOwnProperty(r) &&
            e[r].forEach(function(e) {
              t(e) &&
                n.push(
                  (function(e, t) {
                    return {
                      propertyName: e,
                      predicate: (function(e) {
                        return 'string' == typeof e
                          ? (function(e) {
                              return e.split(',').map(function(e) {
                                return e.trim();
                              });
                            })(
                              /**
                               * @license
                               * Copyright Google Inc. All Rights Reserved.
                               *
                               * Use of this source code is governed by an MIT-style license that can be
                               * found in the LICENSE file at https://angular.io/license
                               */ e
                            )
                          : e;
                      })(t.selector),
                      descendants: t.descendants,
                      first: t.first,
                      read: t.read ? t.read : null
                    };
                  })(r, e)
                );
            });
        };
      for (var o in e) r(o);
      return n;
    }
    function qf(e) {
      var t = e.ngMetadataName;
      return 'ContentChild' === t || 'ContentChildren' === t;
    }
    function Wf(e) {
      var t = e.ngMetadataName;
      return 'ViewChild' === t || 'ViewChildren' === t;
    }
    function Qf(e, t) {
      var n = null;
      Object.defineProperty(e, E, {
        get: function() {
          return (
            null === n &&
              (n = Oe().compilePipe(_f, 'ng://' + Vt(e) + '/ngPipeDef.js', {
                type: e,
                name: e.name,
                deps: If(e),
                pipeName: t.name,
                pure: void 0 === t.pure || t.pure
              })),
            n
          );
        },
        configurable: !!ngDevMode
      });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Kf = F(
        'Directive',
        function(e) {
          return void 0 === e && (e = {}), e;
        },
        void 0,
        void 0,
        function(e, t) {
          return ad(e, t);
        }
      ),
      Yf = F(
        'Component',
        function(e) {
          return (
            void 0 === e && (e = {}),
            Object(r.a)({ changeDetection: W.Default }, e)
          );
        },
        Kf,
        void 0,
        function(e, t) {
          return ud(e, t);
        }
      ),
      $f = F(
        'Pipe',
        function(e) {
          return Object(r.a)({ pure: !0 }, e);
        },
        void 0,
        void 0,
        function(e, t) {
          return sd(e, t);
        }
      ),
      Jf = function(e) {
        return function(t, n) {
          for (var r = [], o = 2; o < arguments.length; o++)
            r[o - 2] = arguments[o];
          var i = t.constructor;
          i.hasOwnProperty(S) ||
            (function(e) {
              var t = e.constructor,
                n = t.ngBaseDef,
                r = (t.ngBaseDef = {
                  inputs: {},
                  outputs: {},
                  declaredInputs: {}
                });
              n &&
                (b(r.inputs, n.inputs),
                b(r.outputs, n.outputs),
                b(r.declaredInputs, n.declaredInputs));
            })(t);
          var u = i.ngBaseDef;
          e(u)[n] = r[0];
        };
      },
      Xf = L(
        'Input',
        function(e) {
          return { bindingPropertyName: e };
        },
        void 0,
        Jf(function(e) {
          return e.inputs || {};
        })
      ),
      ed = L(
        'Output',
        function(e) {
          return { bindingPropertyName: e };
        },
        void 0,
        Jf(function(e) {
          return e.outputs || {};
        })
      ),
      td = L('HostBinding', function(e) {
        return { hostPropertyName: e };
      }),
      nd = L('HostListener', function(e, t) {
        return { eventName: e, args: t };
      }),
      rd = Uf,
      od = Hf,
      id = Qf,
      ud = Rr,
      ad = Rr,
      sd = Rr,
      cd = m({ provide: String, useValue: m }),
      ld = [];
    function fd(e, t) {
      if (!t) {
        var n = (c = new Sf()).parameters(e);
        return function() {
          return new (e.bind.apply(e, Object(r.g)([void 0], Le(n))))();
        };
      }
      if (cd in t) {
        var o = t;
        return function() {
          return o.useValue;
        };
      }
      if (t.useExisting) {
        var i = t;
        return function() {
          return Ne(i.useExisting);
        };
      }
      if (t.useFactory) {
        var u = t;
        return function() {
          return u.useFactory.apply(u, Object(r.g)(Le(u.deps || ld)));
        };
      }
      if (t.useClass) {
        var a = t,
          s = t.deps;
        if (!s) {
          var c = new Sf();
          s = c.parameters(e);
        }
        return function() {
          var e;
          return new ((e = a.useClass).bind.apply(
            e,
            Object(r.g)([void 0], Le(s))
          ))();
        };
      }
      var l = t.deps;
      if (!l) {
        c = new Sf();
        l = c.parameters(e);
      }
      return function() {
        return new (e.bind.apply(e, Object(r.g)([void 0], Le(l))))();
      };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var dd = { name: 'custom-elements' },
      pd = { name: 'no-errors-schema' },
      hd = F(
        'NgModule',
        function(e) {
          return e;
        },
        void 0,
        void 0,
        function(e, t) {
          return gd(e, t);
        }
      );
    var vd = Mf,
      gd = function(e, t) {
        var n = (t && t.imports) || [];
        t && t.exports && (n = Object(r.g)(n, [t.exports])),
          (e.ngInjectorDef = j({
            factory: fd(e, { useClass: e }),
            providers: t && t.providers,
            imports: n
          }));
      };
    var yd = m({ provide: String, useValue: m });
    function md(e) {
      return void 0 !== e.useClass;
    }
    function bd(e) {
      return yd in e;
    }
    function _d(e) {
      return void 0 !== e.useFactory;
    }
    function wd(e) {
      return void 0 !== e.useExisting;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Cd = F('Injectable', void 0, void 0, void 0, function(e, t) {
      return Ed(e, t);
    });
    var Dd =
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        function(e, t) {
          var n = null;
          Object.defineProperty(e, C, {
            get: function() {
              if (null === n) {
                var r = t || { providedIn: null },
                  o = md(r) || _d(r) || bd(r) || wd(r),
                  i = {
                    name: e.name,
                    type: e,
                    providedIn: r.providedIn,
                    ctorDeps: If(e),
                    userDeps: void 0
                  };
                if (
                  ((md(r) || _d(r)) &&
                    void 0 !== r.deps &&
                    (i.userDeps = Tf(r.deps)),
                  o)
                )
                  if (md(r)) i.useClass = r.useClass;
                  else if (bd(r)) i.useValue = r.useValue;
                  else if (_d(r)) i.useFactory = r.useFactory;
                  else {
                    if (!wd(r)) throw new Error('Unreachable state.');
                    i.useExisting = r.useExisting;
                  }
                else i.useClass = e;
                n = Oe().compileInjectable(
                  _f,
                  'ng://' + e.name + '/ngInjectableDef.js',
                  i
                );
              }
              return n;
            }
          });
        },
      Ed = function(e, t) {
        t &&
          void 0 !== t.providedIn &&
          !R(e) &&
          (e.ngInjectableDef = A({
            providedIn: t.providedIn,
            factory: fd(e, t)
          }));
      },
      Od = 'ngDebugContext',
      Sd = 'ngOriginalError',
      xd = 'ngErrorLogger';
    function Ad(e) {
      return e[Od];
    }
    function jd(e) {
      return e[Sd];
    }
    function Rd(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      e.error.apply(e, Object(r.g)(t));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Id = (function() {
      function e() {
        this._console = console;
      }
      return (
        (e.prototype.handleError = function(e) {
          var t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function(e) {
              return e[xd] || Rd;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }),
        (e.prototype._findContext = function(e) {
          return e ? (Ad(e) ? Ad(e) : this._findContext(jd(e))) : null;
        }),
        (e.prototype._findOriginalError = function(e) {
          for (var t = jd(e); t && jd(t); ) t = jd(t);
          return t;
        }),
        e
      );
    })();
    function Td(e) {
      return e.length > 1
        ? ' (' +
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            (function(e) {
              for (var t = [], n = 0; n < e.length; ++n) {
                if (t.indexOf(e[n]) > -1) return t.push(e[n]), t;
                t.push(e[n]);
              }
              return t;
            })(e.slice().reverse())
              .map(function(e) {
                return ce(e.token);
              })
              .join(' -> ') +
            ')'
        : '';
    }
    function kd(e, t, n, r) {
      var o = [t],
        i = n(o),
        u = r
          ? (function(e, t) {
              var n = e + ' caused by: ' + (t instanceof Error ? t.message : t),
                r = Error(n);
              return (r[Sd] = t), r;
            })(i, r)
          : Error(i);
      return (
        (u.addKey = Md),
        (u.keys = o),
        (u.injectors = [e]),
        (u.constructResolvingMessage = n),
        (u[Sd] = r),
        u
      );
    }
    function Md(e, t) {
      this.injectors.push(e),
        this.keys.push(t),
        (this.message = this.constructResolvingMessage(this.keys));
    }
    function Pd(e, t) {
      for (var n = [], r = 0, o = t.length; r < o; r++) {
        var i = t[r];
        i && 0 != i.length ? n.push(i.map(ce).join(' ')) : n.push('?');
      }
      return Error(
        "Cannot resolve all parameters for '" +
          ce(e) +
          "'(" +
          n.join(', ') +
          "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
          ce(e) +
          "' is decorated with Injectable."
      );
    }
    function Fd(e, t) {
      return Error(
        'Cannot mix multi providers and regular providers, got: ' + e + ' ' + t
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Nd = (function() {
        function e(e, t) {
          if (((this.token = e), (this.id = t), !e))
            throw new Error('Token must be defined!');
          this.displayName = ce(this.token);
        }
        return (
          (e.get = function(e) {
            return Vd.get(kr(e));
          }),
          Object.defineProperty(e, 'numberOfKeys', {
            get: function() {
              return Vd.numberOfKeys;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      Vd = new ((function() {
        function e() {
          this._allKeys = new Map();
        }
        return (
          (e.prototype.get = function(e) {
            if (e instanceof Nd) return e;
            if (this._allKeys.has(e)) return this._allKeys.get(e);
            var t = new Nd(e, Nd.numberOfKeys);
            return this._allKeys.set(e, t), t;
          }),
          Object.defineProperty(e.prototype, 'numberOfKeys', {
            get: function() {
              return this._allKeys.size;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })())(),
      Ld = new ((function() {
        function e(e) {
          this.reflectionCapabilities = e;
        }
        return (
          (e.prototype.updateCapabilities = function(e) {
            this.reflectionCapabilities = e;
          }),
          (e.prototype.factory = function(e) {
            return this.reflectionCapabilities.factory(e);
          }),
          (e.prototype.parameters = function(e) {
            return this.reflectionCapabilities.parameters(e);
          }),
          (e.prototype.annotations = function(e) {
            return this.reflectionCapabilities.annotations(e);
          }),
          (e.prototype.propMetadata = function(e) {
            return this.reflectionCapabilities.propMetadata(e);
          }),
          (e.prototype.hasLifecycleHook = function(e, t) {
            return this.reflectionCapabilities.hasLifecycleHook(e, t);
          }),
          (e.prototype.getter = function(e) {
            return this.reflectionCapabilities.getter(e);
          }),
          (e.prototype.setter = function(e) {
            return this.reflectionCapabilities.setter(e);
          }),
          (e.prototype.method = function(e) {
            return this.reflectionCapabilities.method(e);
          }),
          (e.prototype.importUri = function(e) {
            return this.reflectionCapabilities.importUri(e);
          }),
          (e.prototype.resourceUri = function(e) {
            return this.reflectionCapabilities.resourceUri(e);
          }),
          (e.prototype.resolveIdentifier = function(e, t, n, r) {
            return this.reflectionCapabilities.resolveIdentifier(e, t, n, r);
          }),
          (e.prototype.resolveEnum = function(e, t) {
            return this.reflectionCapabilities.resolveEnum(e, t);
          }),
          e
        );
      })())(new Sf()),
      Bd = (function() {
        function e(e, t, n) {
          (this.key = e), (this.optional = t), (this.visibility = n);
        }
        return (
          (e.fromKey = function(t) {
            return new e(t, !1, null);
          }),
          e
        );
      })(),
      Ud = [],
      Hd = (function() {
        return function(e, t, n) {
          (this.key = e),
            (this.resolvedFactories = t),
            (this.multiProvider = n),
            (this.resolvedFactory = this.resolvedFactories[0]);
        };
      })(),
      zd = (function() {
        return function(e, t) {
          (this.factory = e), (this.dependencies = t);
        };
      })();
    function Gd(e) {
      var t, n;
      if (e.useClass) {
        var r = kr(e.useClass);
        (t = Ld.factory(r)), (n = Wd(r));
      } else
        e.useExisting
          ? ((t = function(e) {
              return e;
            }),
            (n = [Bd.fromKey(Nd.get(e.useExisting))]))
          : e.useFactory
          ? ((t = e.useFactory),
            (n = (function(e, t) {
              if (t) {
                var n = t.map(function(e) {
                  return [e];
                });
                return t.map(function(t) {
                  return Qd(e, t, n);
                });
              }
              return Wd(e);
            })(e.useFactory, e.deps)))
          : ((t = function() {
              return e.useValue;
            }),
            (n = Ud));
      return new zd(t, n);
    }
    function Zd(e) {
      return new Hd(Nd.get(e.provide), [Gd(e)], e.multi || !1);
    }
    function qd(e) {
      var t = (function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = t.get(r.key.id);
          if (o) {
            if (r.multiProvider !== o.multiProvider) throw Fd(o, r);
            if (r.multiProvider)
              for (var i = 0; i < r.resolvedFactories.length; i++)
                o.resolvedFactories.push(r.resolvedFactories[i]);
            else t.set(r.key.id, r);
          } else {
            var u = void 0;
            (u = r.multiProvider
              ? new Hd(r.key, r.resolvedFactories.slice(), r.multiProvider)
              : r),
              t.set(r.key.id, u);
          }
        }
        return t;
      })(
        (function e(t, n) {
          t.forEach(function(t) {
            if (t instanceof wf) n.push({ provide: t, useClass: t });
            else if (t && 'object' == typeof t && void 0 !== t.provide)
              n.push(t);
            else {
              if (!(t instanceof Array))
                throw (function(e) {
                  return Error(
                    'Invalid provider - only instances of Provider and Type are allowed, got: ' +
                      e
                  );
                })(t);
              e(t, n);
            }
          });
          return n;
        })(e, []).map(Zd),
        new Map()
      );
      return Array.from(t.values());
    }
    function Wd(e) {
      var t = Ld.parameters(e);
      if (!t) return [];
      if (
        t.some(function(e) {
          return null == e;
        })
      )
        throw Pd(e, t);
      return t.map(function(n) {
        return Qd(e, n, t);
      });
    }
    function Qd(e, t, n) {
      var r = null,
        o = !1;
      if (!Array.isArray(t)) return Kd(t instanceof xe ? t.token : t, o, null);
      for (var i = null, u = 0; u < t.length; ++u) {
        var a = t[u];
        a instanceof wf
          ? (r = a)
          : a instanceof xe
          ? (r = a.token)
          : a instanceof Ae
          ? (o = !0)
          : a instanceof je || a instanceof Re
          ? (i = a)
          : a instanceof T && (r = a);
      }
      if (null != (r = kr(r))) return Kd(r, o, i);
      throw Pd(e, n);
    }
    function Kd(e, t, n) {
      return new Bd(Nd.get(e), t, n);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Yd = new Object(),
      $d = (function() {
        function e() {}
        return (
          (e.resolve = function(e) {
            return qd(e);
          }),
          (e.resolveAndCreate = function(t, n) {
            var r = e.resolve(t);
            return e.fromResolvedProviders(r, n);
          }),
          (e.fromResolvedProviders = function(e, t) {
            return new Jd(e, t);
          }),
          e
        );
      })(),
      Jd = (function() {
        function e(e, t) {
          (this._constructionCounter = 0),
            (this._providers = e),
            (this.parent = t || null);
          var n = e.length;
          (this.keyIds = new Array(n)), (this.objs = new Array(n));
          for (var r = 0; r < n; r++)
            (this.keyIds[r] = e[r].key.id), (this.objs[r] = Yd);
        }
        return (
          (e.prototype.get = function(e, t) {
            return void 0 === t && (t = Fr), this._getByKey(Nd.get(e), null, t);
          }),
          (e.prototype.resolveAndCreateChild = function(e) {
            var t = $d.resolve(e);
            return this.createChildFromResolved(t);
          }),
          (e.prototype.createChildFromResolved = function(t) {
            var n = new e(t);
            return (n.parent = this), n;
          }),
          (e.prototype.resolveAndInstantiate = function(e) {
            return this.instantiateResolved($d.resolve([e])[0]);
          }),
          (e.prototype.instantiateResolved = function(e) {
            return this._instantiateProvider(e);
          }),
          (e.prototype.getProviderAtIndex = function(e) {
            if (e < 0 || e >= this._providers.length)
              throw (function(e) {
                return Error('Index ' + e + ' is out-of-bounds.');
              })(e);
            return this._providers[e];
          }),
          (e.prototype._new = function(e) {
            if (this._constructionCounter++ > this._getMaxNumberOfObjects())
              throw (function(e, t) {
                return kd(e, t, function(e) {
                  return 'Cannot instantiate cyclic dependency!' + Td(e);
                });
              })(this, e.key);
            return this._instantiateProvider(e);
          }),
          (e.prototype._getMaxNumberOfObjects = function() {
            return this.objs.length;
          }),
          (e.prototype._instantiateProvider = function(e) {
            if (e.multiProvider) {
              for (
                var t = new Array(e.resolvedFactories.length), n = 0;
                n < e.resolvedFactories.length;
                ++n
              )
                t[n] = this._instantiate(e, e.resolvedFactories[n]);
              return t;
            }
            return this._instantiate(e, e.resolvedFactories[0]);
          }),
          (e.prototype._instantiate = function(e, t) {
            var n,
              o,
              i = this,
              u = t.factory;
            try {
              n = t.dependencies.map(function(e) {
                return i._getByReflectiveDependency(e);
              });
            } catch (t) {
              throw (t.addKey && t.addKey(this, e.key), t);
            }
            try {
              o = u.apply(void 0, Object(r.g)(n));
            } catch (t) {
              throw (function(e, t, n, r) {
                return kd(
                  e,
                  r,
                  function(e) {
                    var n = ce(e[0].token);
                    return (
                      t.message +
                      ': Error during instantiation of ' +
                      n +
                      '!' +
                      Td(e) +
                      '.'
                    );
                  },
                  t
                );
              })(this, t, t.stack, e.key);
            }
            return o;
          }),
          (e.prototype._getByReflectiveDependency = function(e) {
            return this._getByKey(e.key, e.visibility, e.optional ? null : Fr);
          }),
          (e.prototype._getByKey = function(t, n, r) {
            return t === e.INJECTOR_KEY
              ? this
              : n instanceof je
              ? this._getByKeySelf(t, r)
              : this._getByKeyDefault(t, r, n);
          }),
          (e.prototype._getObjByKeyId = function(e) {
            for (var t = 0; t < this.keyIds.length; t++)
              if (this.keyIds[t] === e)
                return (
                  this.objs[t] === Yd &&
                    (this.objs[t] = this._new(this._providers[t])),
                  this.objs[t]
                );
            return Yd;
          }),
          (e.prototype._throwOrNull = function(e, t) {
            if (t !== Fr) return t;
            throw (function(e, t) {
              return kd(e, t, function(e) {
                return 'No provider for ' + ce(e[0].token) + '!' + Td(e);
              });
            })(this, e);
          }),
          (e.prototype._getByKeySelf = function(e, t) {
            var n = this._getObjByKeyId(e.id);
            return n !== Yd ? n : this._throwOrNull(e, t);
          }),
          (e.prototype._getByKeyDefault = function(t, n, r) {
            var o;
            for (o = r instanceof Re ? this.parent : this; o instanceof e; ) {
              var i = o,
                u = i._getObjByKeyId(t.id);
              if (u !== Yd) return u;
              o = i.parent;
            }
            return null !== o ? o.get(t.token, n) : this._throwOrNull(t, n);
          }),
          Object.defineProperty(e.prototype, 'displayName', {
            get: function() {
              return (
                'ReflectiveInjector(providers: [' +
                (function(e, t) {
                  for (
                    var n = new Array(e._providers.length), r = 0;
                    r < e._providers.length;
                    ++r
                  )
                    n[r] = t(e.getProviderAtIndex(r));
                  return n;
                })(
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */ this,
                  function(e) {
                    return ' "' + e.key.displayName + '" ';
                  }
                ).join(', ') +
                '])'
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.toString = function() {
            return this.displayName;
          }),
          (e.INJECTOR_KEY = Nd.get(Lr)),
          e
        );
      })();
    function Xd(e) {
      return !!e && 'function' == typeof e.then;
    }
    function ep(e) {
      return !!e && 'function' == typeof e.subscribe;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var tp = new T('Application Initializer'),
      np = (function() {
        function e(e) {
          var t = this;
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise(function(e, n) {
              (t.resolve = e), (t.reject = n);
            }));
        }
        return (
          (e.prototype.runInitializers = function() {
            var e = this;
            if (!this.initialized) {
              var t = [],
                n = function() {
                  (e.done = !0), e.resolve();
                };
              if (this.appInits)
                for (var r = 0; r < this.appInits.length; r++) {
                  var o = this.appInits[r]();
                  Xd(o) && t.push(o);
                }
              Promise.all(t)
                .then(function() {
                  n();
                })
                .catch(function(t) {
                  e.reject(t);
                }),
                0 === t.length && n(),
                (this.initialized = !0);
            }
          }),
          e
        );
      })(),
      rp = new T('AppId');
    function op() {
      return '' + up() + up() + up();
    }
    var ip = { provide: rp, useFactory: op, deps: [] };
    function up() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }
    var ap = new T('Platform Initializer'),
      sp = new T('Platform ID'),
      cp = new T('appBootstrapListener'),
      lp = new T('Application Packages Root URL'),
      fp = (function() {
        function e() {}
        return (
          (e.prototype.log = function(e) {
            console.log(e);
          }),
          (e.prototype.warn = function(e) {
            console.warn(e);
          }),
          e
        );
      })(),
      dp = (function() {
        return function(e, t) {
          (this.ngModuleFactory = e), (this.componentFactories = t);
        };
      })();
    function pp() {
      throw new Error('Runtime compiler is not loaded');
    }
    var hp,
      vp,
      gp = (function() {
        function e() {}
        return (
          (e.prototype.compileModuleSync = function(e) {
            throw pp();
          }),
          (e.prototype.compileModuleAsync = function(e) {
            throw pp();
          }),
          (e.prototype.compileModuleAndAllComponentsSync = function(e) {
            throw pp();
          }),
          (e.prototype.compileModuleAndAllComponentsAsync = function(e) {
            throw pp();
          }),
          (e.prototype.clearCache = function() {}),
          (e.prototype.clearCacheFor = function(e) {}),
          (e.prototype.getModuleId = function(e) {}),
          e
        );
      })(),
      yp = new T('compilerOptions'),
      mp = (function() {
        return function() {};
      })();
    function bp() {
      var e = re.wtf;
      return !(!e || !(hp = e.trace)) && ((vp = hp.events), !0);
    }
    function _p(e, t) {
      return void 0 === t && (t = null), vp.createScope(e, t);
    }
    function wp(e, t) {
      return hp.leaveScope(e, t), t;
    }
    function Cp(e, t) {
      return hp.beginTimeRange(e, t);
    }
    function Dp(e) {
      hp.endTimeRange(e);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Ep = bp();
    function Op(e, t) {
      return null;
    }
    var Sp = Ep
        ? _p
        : function(e, t) {
            return Op;
          },
      xp = Ep
        ? wp
        : function(e, t) {
            return t;
          },
      Ap = Ep
        ? Cp
        : function(e, t) {
            return null;
          },
      jp = Ep
        ? Dp
        : function(e) {
            return null;
          },
      Rp = (function() {
        function e(e) {
          var t = e.enableLongStackTrace,
            n = void 0 !== t && t;
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Pl(!1)),
            (this.onMicrotaskEmpty = new Pl(!1)),
            (this.onStable = new Pl(!1)),
            (this.onError = new Pl(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (function(e) {
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: function(t, n, r, o, i, u) {
                  try {
                    return Mp(e), t.invokeTask(r, o, i, u);
                  } finally {
                    Pp(e);
                  }
                },
                onInvoke: function(t, n, r, o, i, u, a) {
                  try {
                    return Mp(e), t.invoke(r, o, i, u, a);
                  } finally {
                    Pp(e);
                  }
                },
                onHasTask: function(t, n, r, o) {
                  t.hasTask(r, o),
                    n === r &&
                      ('microTask' == o.change
                        ? ((e.hasPendingMicrotasks = o.microTask), kp(e))
                        : 'macroTask' == o.change &&
                          (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: function(t, n, r, o) {
                  return (
                    t.handleError(r, o),
                    e.runOutsideAngular(function() {
                      return e.onError.emit(o);
                    }),
                    !1
                  );
                }
              });
            })(this);
        }
        return (
          (e.isInAngularZone = function() {
            return !0 === Zone.current.get('isAngularZone');
          }),
          (e.assertInAngularZone = function() {
            if (!e.isInAngularZone())
              throw new Error('Expected to be in Angular Zone, but it is not!');
          }),
          (e.assertNotInAngularZone = function() {
            if (e.isInAngularZone())
              throw new Error('Expected to not be in Angular Zone, but it is!');
          }),
          (e.prototype.run = function(e, t, n) {
            return this._inner.run(e, t, n);
          }),
          (e.prototype.runTask = function(e, t, n, r) {
            var o = this._inner,
              i = o.scheduleEventTask('NgZoneEvent: ' + r, e, Tp, Ip, Ip);
            try {
              return o.runTask(i, t, n);
            } finally {
              o.cancelTask(i);
            }
          }),
          (e.prototype.runGuarded = function(e, t, n) {
            return this._inner.runGuarded(e, t, n);
          }),
          (e.prototype.runOutsideAngular = function(e) {
            return this._outer.run(e);
          }),
          e
        );
      })();
    function Ip() {}
    var Tp = {};
    function kp(e) {
      if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
        try {
          e._nesting++, e.onMicrotaskEmpty.emit(null);
        } finally {
          if ((e._nesting--, !e.hasPendingMicrotasks))
            try {
              e.runOutsideAngular(function() {
                return e.onStable.emit(null);
              });
            } finally {
              e.isStable = !0;
            }
        }
    }
    function Mp(e) {
      e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
    }
    function Pp(e) {
      e._nesting--, kp(e);
    }
    var Fp = (function() {
        function e() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Pl()),
            (this.onMicrotaskEmpty = new Pl()),
            (this.onStable = new Pl()),
            (this.onError = new Pl());
        }
        return (
          (e.prototype.run = function(e) {
            return e();
          }),
          (e.prototype.runGuarded = function(e) {
            return e();
          }),
          (e.prototype.runOutsideAngular = function(e) {
            return e();
          }),
          (e.prototype.runTask = function(e) {
            return e();
          }),
          e
        );
      })(),
      Np = (function() {
        function e(e) {
          var t = this;
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            e.run(function() {
              t.taskTrackingZone =
                'undefined' == typeof Zone
                  ? null
                  : Zone.current.get('TaskTrackingZone');
            });
        }
        return (
          (e.prototype._watchAngularEvents = function() {
            var e = this;
            this._ngZone.onUnstable.subscribe({
              next: function() {
                (e._didWork = !0), (e._isZoneStable = !1);
              }
            }),
              this._ngZone.runOutsideAngular(function() {
                e._ngZone.onStable.subscribe({
                  next: function() {
                    Rp.assertNotInAngularZone(),
                      ae(function() {
                        (e._isZoneStable = !0), e._runCallbacksIfReady();
                      });
                  }
                });
              });
          }),
          (e.prototype.increasePendingRequestCount = function() {
            return (
              (this._pendingCount += 1),
              (this._didWork = !0),
              this._pendingCount
            );
          }),
          (e.prototype.decreasePendingRequestCount = function() {
            if (((this._pendingCount -= 1), this._pendingCount < 0))
              throw new Error('pending async requests below zero');
            return this._runCallbacksIfReady(), this._pendingCount;
          }),
          (e.prototype.isStable = function() {
            return (
              this._isZoneStable &&
              0 === this._pendingCount &&
              !this._ngZone.hasPendingMacrotasks
            );
          }),
          (e.prototype._runCallbacksIfReady = function() {
            var e = this;
            if (this.isStable())
              ae(function() {
                for (; 0 !== e._callbacks.length; ) {
                  var t = e._callbacks.pop();
                  clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                }
                e._didWork = !1;
              });
            else {
              var t = this.getPendingTasks();
              (this._callbacks = this._callbacks.filter(function(e) {
                return (
                  !e.updateCb ||
                  !e.updateCb(t) ||
                  (clearTimeout(e.timeoutId), !1)
                );
              })),
                (this._didWork = !0);
            }
          }),
          (e.prototype.getPendingTasks = function() {
            return this.taskTrackingZone
              ? this.taskTrackingZone.macroTasks.map(function(e) {
                  return {
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data
                  };
                })
              : [];
          }),
          (e.prototype.addCallback = function(e, t, n) {
            var r = this,
              o = -1;
            t &&
              t > 0 &&
              (o = setTimeout(function() {
                (r._callbacks = r._callbacks.filter(function(e) {
                  return e.timeoutId !== o;
                })),
                  e(r._didWork, r.getPendingTasks());
              }, t)),
              this._callbacks.push({ doneCb: e, timeoutId: o, updateCb: n });
          }),
          (e.prototype.whenStable = function(e, t, n) {
            if (n && !this.taskTrackingZone)
              throw new Error(
                'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
              );
            this.addCallback(e, t, n), this._runCallbacksIfReady();
          }),
          (e.prototype.getPendingRequestCount = function() {
            return this._pendingCount;
          }),
          (e.prototype.findProviders = function(e, t, n) {
            return [];
          }),
          e
        );
      })(),
      Vp = (function() {
        function e() {
          (this._applications = new Map()), Up.addToWindow(this);
        }
        return (
          (e.prototype.registerApplication = function(e, t) {
            this._applications.set(e, t);
          }),
          (e.prototype.unregisterApplication = function(e) {
            this._applications.delete(e);
          }),
          (e.prototype.unregisterAllApplications = function() {
            this._applications.clear();
          }),
          (e.prototype.getTestability = function(e) {
            return this._applications.get(e) || null;
          }),
          (e.prototype.getAllTestabilities = function() {
            return Array.from(this._applications.values());
          }),
          (e.prototype.getAllRootElements = function() {
            return Array.from(this._applications.keys());
          }),
          (e.prototype.findTestabilityInTree = function(e, t) {
            return (
              void 0 === t && (t = !0), Up.findTestabilityInTree(this, e, t)
            );
          }),
          (e = Object(r.b)([Object(r.d)('design:paramtypes', [])], e))
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Lp(e) {
      Up = e;
    }
    var Bp,
      Up = new ((function() {
        function e() {}
        return (
          (e.prototype.addToWindow = function(e) {}),
          (e.prototype.findTestabilityInTree = function(e, t, n) {
            return null;
          }),
          e
        );
      })())(),
      Hp = function(e, t, n) {
        return e
          .get(mp)
          .createCompiler([t])
          .compileModuleAsync(n);
      };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function zp(e, t, n) {
      return (
        ngDevMode &&
          (function(e, t) {
            void 0 === t &&
              (t =
                "Type passed in is not NgModuleType, it does not have 'ngModuleDef' property."),
              Ee(e) || qe(t);
          })(n),
        Promise.resolve(new gl(n))
      );
    }
    var Gp = new T('AllowMultipleToken'),
      Zp = (function() {
        return function(e, t) {
          (this.name = e), (this.token = t);
        };
      })();
    function qp(e) {
      if (Bp && !Bp.destroyed && !Bp.injector.get(Gp, !1))
        throw new Error(
          'There can be only one platform. Destroy the previous one to create a new one.'
        );
      Bp = e.get($p);
      var t = e.get(ap, null);
      return (
        t &&
          t.forEach(function(e) {
            return e();
          }),
        Bp
      );
    }
    function Wp(e, t, n) {
      void 0 === n && (n = []);
      var r = 'Platform: ' + t,
        o = new T(r);
      return function(t) {
        void 0 === t && (t = []);
        var i = Yp();
        if (!i || i.injector.get(Gp, !1))
          if (e) e(n.concat(t).concat({ provide: o, useValue: !0 }));
          else {
            var u = n.concat(t).concat({ provide: o, useValue: !0 });
            qp(Lr.create({ providers: u, name: r }));
          }
        return Qp(o);
      };
    }
    function Qp(e) {
      var t = Yp();
      if (!t) throw new Error('No platform exists!');
      if (!t.injector.get(e, null))
        throw new Error(
          'A platform with a different configuration has been created. Please destroy it first.'
        );
      return t;
    }
    function Kp() {
      Bp && !Bp.destroyed && Bp.destroy();
    }
    function Yp() {
      return Bp && !Bp.destroyed ? Bp : null;
    }
    var $p = (function() {
      function e(e) {
        (this._injector = e),
          (this._modules = []),
          (this._destroyListeners = []),
          (this._destroyed = !1);
      }
      return (
        (e.prototype.bootstrapModuleFactory = function(e, t) {
          var n = this,
            r = (function(e) {
              var t;
              t =
                'noop' === e
                  ? new Fp()
                  : ('zone.js' === e ? void 0 : e) ||
                    new Rp({ enableLongStackTrace: uc() });
              return t;
            })(t ? t.ngZone : void 0),
            o = [{ provide: Rp, useValue: r }];
          return r.run(function() {
            var t = Lr.create({
                providers: o,
                parent: n.injector,
                name: e.moduleType.name
              }),
              i = e.create(t),
              u = i.injector.get(Id, null);
            if (!u)
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            return (
              i.onDestroy(function() {
                return eh(n._modules, i);
              }),
              r.runOutsideAngular(function() {
                return r.onError.subscribe({
                  next: function(e) {
                    u.handleError(e);
                  }
                });
              }),
              (function(e, t, n) {
                try {
                  var r = n();
                  return Xd(r)
                    ? r.catch(function(n) {
                        throw (t.runOutsideAngular(function() {
                          return e.handleError(n);
                        }),
                        n);
                      })
                    : r;
                } catch (n) {
                  throw (t.runOutsideAngular(function() {
                    return e.handleError(n);
                  }),
                  n);
                }
              })(u, r, function() {
                var e = i.injector.get(np);
                return (
                  e.runInitializers(),
                  e.donePromise.then(function() {
                    return n._moduleDoBootstrap(i), i;
                  })
                );
              })
            );
          });
        }),
        (e.prototype.bootstrapModule = function(e, t) {
          var n = this;
          void 0 === t && (t = []);
          var r = Jp({}, t);
          return Hp(this.injector, r, e).then(function(e) {
            return n.bootstrapModuleFactory(e, r);
          });
        }),
        (e.prototype._moduleDoBootstrap = function(e) {
          var t = e.injector.get(Xp);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach(function(e) {
              return t.bootstrap(e);
            });
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                'The module ' +
                  ce(e.instance.constructor) +
                  ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }),
        (e.prototype.onDestroy = function(e) {
          this._destroyListeners.push(e);
        }),
        Object.defineProperty(e.prototype, 'injector', {
          get: function() {
            return this._injector;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.destroy = function() {
          if (this._destroyed)
            throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach(function(e) {
            return e.destroy();
          }),
            this._destroyListeners.forEach(function(e) {
              return e();
            }),
            (this._destroyed = !0);
        }),
        Object.defineProperty(e.prototype, 'destroyed', {
          get: function() {
            return this._destroyed;
          },
          enumerable: !0,
          configurable: !0
        }),
        e
      );
    })();
    function Jp(e, t) {
      return (e = Array.isArray(t) ? t.reduce(Jp, e) : Object(r.a)({}, e, t));
    }
    var Xp = (function() {
      function e(e, t, n, r, o, i) {
        var s = this;
        (this._zone = e),
          (this._console = t),
          (this._injector = n),
          (this._exceptionHandler = r),
          (this._componentFactoryResolver = o),
          (this._initStatus = i),
          (this._bootstrapListeners = []),
          (this._views = []),
          (this._runningTick = !1),
          (this._enforceNoNewChanges = !1),
          (this._stable = !0),
          (this.componentTypes = []),
          (this.components = []),
          (this._enforceNoNewChanges = uc()),
          this._zone.onMicrotaskEmpty.subscribe({
            next: function() {
              s._zone.run(function() {
                s.tick();
              });
            }
          });
        var c = new u.a(function(e) {
            (s._stable =
              s._zone.isStable &&
              !s._zone.hasPendingMacrotasks &&
              !s._zone.hasPendingMicrotasks),
              s._zone.runOutsideAngular(function() {
                e.next(s._stable), e.complete();
              });
          }),
          l = new u.a(function(e) {
            var t;
            s._zone.runOutsideAngular(function() {
              t = s._zone.onStable.subscribe(function() {
                Rp.assertNotInAngularZone(),
                  ae(function() {
                    s._stable ||
                      s._zone.hasPendingMacrotasks ||
                      s._zone.hasPendingMicrotasks ||
                      ((s._stable = !0), e.next(!0));
                  });
              });
            });
            var n = s._zone.onUnstable.subscribe(function() {
              Rp.assertInAngularZone(),
                s._stable &&
                  ((s._stable = !1),
                  s._zone.runOutsideAngular(function() {
                    e.next(!1);
                  }));
            });
            return function() {
              t.unsubscribe(), n.unsubscribe();
            };
          });
        this.isStable = Object(a.a)(c, l.pipe(y()));
      }
      var t;
      return (
        (t = e),
        (e.prototype.bootstrap = function(e, t) {
          var n,
            r = this;
          if (!this._initStatus.done)
            throw new Error(
              'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
            );
          (n =
            e instanceof js
              ? e
              : this._componentFactoryResolver.resolveComponentFactory(e)),
            this.componentTypes.push(n.componentType);
          var o = n instanceof Ps ? null : this._injector.get(no),
            i = t || n.selector,
            u = n.create(Lr.NULL, [], i, o);
          u.onDestroy(function() {
            r._unloadComponent(u);
          });
          var a = u.injector.get(Np, null);
          return (
            a &&
              u.injector
                .get(Vp)
                .registerApplication(u.location.nativeElement, a),
            this._loadComponent(u),
            uc() &&
              this._console.log(
                'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
              ),
            u
          );
        }),
        (e.prototype.tick = function() {
          var e = this;
          if (this._runningTick)
            throw new Error('ApplicationRef.tick is called recursively');
          var n = t._tickScope();
          try {
            (this._runningTick = !0),
              this._views.forEach(function(e) {
                return e.detectChanges();
              }),
              this._enforceNoNewChanges &&
                this._views.forEach(function(e) {
                  return e.checkNoChanges();
                });
          } catch (t) {
            this._zone.runOutsideAngular(function() {
              return e._exceptionHandler.handleError(t);
            });
          } finally {
            (this._runningTick = !1), xp(n);
          }
        }),
        (e.prototype.attachView = function(e) {
          var t = e;
          this._views.push(t), t.attachToAppRef(this);
        }),
        (e.prototype.detachView = function(e) {
          var t = e;
          eh(this._views, t), t.detachFromAppRef();
        }),
        (e.prototype._loadComponent = function(e) {
          this.attachView(e.hostView),
            this.tick(),
            this.components.push(e),
            this._injector
              .get(cp, [])
              .concat(this._bootstrapListeners)
              .forEach(function(t) {
                return t(e);
              });
        }),
        (e.prototype._unloadComponent = function(e) {
          this.detachView(e.hostView), eh(this.components, e);
        }),
        (e.prototype.ngOnDestroy = function() {
          this._views.slice().forEach(function(e) {
            return e.destroy();
          });
        }),
        Object.defineProperty(e.prototype, 'viewCount', {
          get: function() {
            return this._views.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e._tickScope = Sp('ApplicationRef#tick()')),
        e
      );
    })();
    function eh(e, t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var th = (function() {
        return function() {};
      })(),
      nh = new Map();
    function rh(e, t) {
      var n = nh.get(e);
      if (n)
        throw new Error(
          'Duplicate module registered for ' +
            e +
            ' - ' +
            n.moduleType.name +
            ' vs ' +
            t.moduleType.name
        );
      nh.set(e, t);
    }
    function oh(e) {
      var t = nh.get(e);
      if (!t) throw new Error('No module with ID ' + e + ' loaded');
      return t;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var ih = (function() {
      function e() {
        (this.dirty = !0),
          (this._results = []),
          (this.changes = new Pl()),
          (this.length = 0);
      }
      return (
        (e.prototype.map = function(e) {
          return this._results.map(e);
        }),
        (e.prototype.filter = function(e) {
          return this._results.filter(e);
        }),
        (e.prototype.find = function(e) {
          return this._results.find(e);
        }),
        (e.prototype.reduce = function(e, t) {
          return this._results.reduce(e, t);
        }),
        (e.prototype.forEach = function(e) {
          this._results.forEach(e);
        }),
        (e.prototype.some = function(e) {
          return this._results.some(e);
        }),
        (e.prototype.toArray = function() {
          return this._results.slice();
        }),
        (e.prototype[ue()] = function() {
          return this._results[ue()]();
        }),
        (e.prototype.toString = function() {
          return this._results.toString();
        }),
        (e.prototype.reset = function(e) {
          (this._results = (function e(t) {
            return t.reduce(function(t, n) {
              var r = Array.isArray(n) ? e(n) : n;
              return t.concat(r);
            }, []);
          })(
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */ e
          )),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }),
        (e.prototype.notifyOnChanges = function() {
          this.changes.emit(this);
        }),
        (e.prototype.setDirty = function() {
          this.dirty = !0;
        }),
        (e.prototype.destroy = function() {
          this.changes.complete(), this.changes.unsubscribe();
        }),
        e
      );
    })();
    var uh = (function() {
        return function() {};
      })(),
      ah = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
      sh = (function() {
        function e(e, t) {
          (this._compiler = e), (this._config = t || ah);
        }
        return (
          (e.prototype.load = function(e) {
            return this._compiler instanceof gp
              ? this.loadFactory(e)
              : this.loadAndCompile(e);
          }),
          (e.prototype.loadAndCompile = function(e) {
            var t = this,
              o = Object(r.f)(e.split('#'), 2),
              i = o[0],
              u = o[1];
            return (
              void 0 === u && (u = 'default'),
              n(47)(i)
                .then(function(e) {
                  return e[u];
                })
                .then(function(e) {
                  return ch(e, i, u);
                })
                .then(function(e) {
                  return t._compiler.compileModuleAsync(e);
                })
            );
          }),
          (e.prototype.loadFactory = function(e) {
            var t = Object(r.f)(e.split('#'), 2),
              o = t[0],
              i = t[1],
              u = 'NgFactory';
            return (
              void 0 === i && ((i = 'default'), (u = '')),
              n(47)(
                this._config.factoryPathPrefix +
                  o +
                  this._config.factoryPathSuffix
              )
                .then(function(e) {
                  return e[i + u];
                })
                .then(function(e) {
                  return ch(e, o, i);
                })
            );
          }),
          e
        );
      })();
    function ch(e, t, n) {
      if (!e) throw new Error("Cannot find '" + n + "' in '" + t + "'");
      return e;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var lh = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return dh(e, Fs);
          }),
          e
        );
      })(),
      fh = function(e, t) {
        return (function(e, t, n, o) {
          var i;
          xa ||
            (xa = (function(e) {
              function n(t, n, r) {
                var o = e.call(this) || this;
                return (
                  (o._lContainer = t),
                  (o._hostTNode = n),
                  (o._hostView = r),
                  (o._viewRefs = []),
                  o
                );
              }
              return (
                Object(r.c)(n, e),
                Object.defineProperty(n.prototype, 'element', {
                  get: function() {
                    return Ra(t, this._hostTNode, this._hostView);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(n.prototype, 'injector', {
                  get: function() {
                    return new Ta(this._hostTNode, this._hostView);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(n.prototype, 'parentInjector', {
                  get: function() {
                    var e = sr(this._hostTNode, this._hostView),
                      t = on(e, this._hostView),
                      n = (function(e, t, n) {
                        if (n.parent && -1 !== n.parent.injectorIndex) {
                          for (
                            var r = n.parent.injectorIndex, o = n.parent;
                            null != o.parent && r == o.injectorIndex;

                          )
                            o = o.parent;
                          return o;
                        }
                        for (var i = rn(e), u = t, a = t[ut]; i > 1; )
                          (a = (u = u[gt])[ut]), i--;
                        return a;
                      })(e, this._hostView, this._hostTNode);
                    return tn(e) && null != n ? new Ta(n, t) : new Vr();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (n.prototype.clear = function() {
                  for (; this._lContainer[Mt].length; ) this.remove(0);
                }),
                (n.prototype.get = function(e) {
                  return this._viewRefs[e] || null;
                }),
                Object.defineProperty(n.prototype, 'length', {
                  get: function() {
                    return this._lContainer[Mt].length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (n.prototype.createEmbeddedView = function(e, t, n) {
                  var r = this._adjustIndex(n),
                    o = e.createEmbeddedView(
                      t || {},
                      this._lContainer,
                      this._hostTNode,
                      this._hostView,
                      r
                    );
                  return (
                    o.attachToViewContainerRef(this),
                    this._viewRefs.splice(r, 0, o),
                    o
                  );
                }),
                (n.prototype.createComponent = function(e, t, n, r, o) {
                  var i = n || this.parentInjector;
                  !o && i && (o = i.get(no, null));
                  var u = e.create(i, r, void 0, o);
                  return this.insert(u.hostView, t), u;
                }),
                (n.prototype.insert = function(e, t) {
                  if (e.destroyed)
                    throw new Error(
                      'Cannot insert a destroyed View in a ViewContainer!'
                    );
                  var n = e._view,
                    r = this._adjustIndex(t);
                  _o(
                    n,
                    this._lContainer,
                    this._hostView,
                    r,
                    this._hostTNode.index
                  );
                  var o = ko(r, this._lContainer[Mt], this._lContainer[Pt]);
                  return (
                    bo(n, !0, o),
                    e.attachToViewContainerRef(this),
                    this._viewRefs.splice(r, 0, e),
                    e
                  );
                }),
                (n.prototype.move = function(e, t) {
                  var n = this.indexOf(e);
                  return (
                    this.detach(n), this.insert(e, this._adjustIndex(t)), e
                  );
                }),
                (n.prototype.indexOf = function(e) {
                  return this._viewRefs.indexOf(e);
                }),
                (n.prototype.remove = function(e) {
                  var t = this._adjustIndex(e, -1);
                  Co(this._lContainer, this._hostTNode, t),
                    this._viewRefs.splice(t, 1);
                }),
                (n.prototype.detach = function(e) {
                  var t = this._adjustIndex(e, -1);
                  return (
                    wo(this._lContainer, t, !!this._hostTNode.detached),
                    this._viewRefs.splice(t, 1)[0] || null
                  );
                }),
                (n.prototype._adjustIndex = function(e, t) {
                  return (
                    void 0 === t && (t = 0),
                    null == e
                      ? this._lContainer[Mt].length + t
                      : (ngDevMode &&
                          (ze(e, -1, 'index must be positive'),
                          He(e, this._lContainer[Mt].length + 1 + t, 'index')),
                        e)
                  );
                }),
                n
              );
            })(e)),
            ngDevMode && mt(n, 0, 3, 4);
          var u = o[n.index];
          if (Kt(u)) (i = u)[kt] = -1;
          else {
            var a = o[ft].createComment(ngDevMode ? 'container' : '');
            if ((ngDevMode && ngDevMode.rendererCreateComment++, Yt(o))) {
              var s = o[ft],
                c = zt(n, o),
                l = Ro(s, c);
              jo(
                s,
                l,
                a,
                (function(e, t) {
                  return ao(e) ? e.nextSibling(t) : t.nextSibling;
                })(s, c)
              );
            } else Io(a, n, o);
            (o[n.index] = i = Tu(u, n, o, a, !0)), Zu(o, n.index, i);
          }
          return new xa(i, n, o);
        })(e, t, Sn(), Pn());
      },
      dh = Rr,
      ph = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return vh();
          }),
          e
        );
      })(),
      hh = function() {
        return ka(Sn(), Pn(), null);
      },
      vh = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      },
      gh = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return Object(r.c)(t, e), t;
      })(ph),
      yh = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return Object(r.c)(t, e), t;
      })(gh),
      mh = (function() {
        return function(e, t) {
          (this.name = e), (this.callback = t);
        };
      })(),
      bh = (function() {
        function e(e, t, n) {
          (this.nativeNode = e),
            (this._debugContext = n),
            (this.listeners = []),
            (this.parent = null),
            t && t instanceof _h && t.addChild(this);
        }
        return (
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return this._debugContext.injector;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'componentInstance', {
            get: function() {
              return this._debugContext.component;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'context', {
            get: function() {
              return this._debugContext.context;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'references', {
            get: function() {
              return this._debugContext.references;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'providerTokens', {
            get: function() {
              return this._debugContext.providerTokens;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      _h = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t, n, r) || this;
          return (
            (o.properties = {}),
            (o.attributes = {}),
            (o.classes = {}),
            (o.styles = {}),
            (o.childNodes = []),
            (o.nativeElement = t),
            o
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.addChild = function(e) {
            e && (this.childNodes.push(e), (e.parent = this));
          }),
          (t.prototype.removeChild = function(e) {
            var t = this.childNodes.indexOf(e);
            -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
          }),
          (t.prototype.insertChildrenAfter = function(e, t) {
            var n,
              o = this,
              i = this.childNodes.indexOf(e);
            -1 !== i &&
              ((n = this.childNodes).splice.apply(
                n,
                Object(r.g)([i + 1, 0], t)
              ),
              t.forEach(function(e) {
                e.parent && e.parent.removeChild(e), (e.parent = o);
              }));
          }),
          (t.prototype.insertBefore = function(e, t) {
            var n = this.childNodes.indexOf(e);
            -1 === n
              ? this.addChild(t)
              : (t.parent && t.parent.removeChild(t),
                (t.parent = this),
                this.childNodes.splice(n, 0, t));
          }),
          (t.prototype.query = function(e) {
            return this.queryAll(e)[0] || null;
          }),
          (t.prototype.queryAll = function(e) {
            var t = [];
            return (
              (function e(t, n, r) {
                t.childNodes.forEach(function(t) {
                  t instanceof _h && (n(t) && r.push(t), e(t, n, r));
                });
              })(this, e, t),
              t
            );
          }),
          (t.prototype.queryAllNodes = function(e) {
            var t = [];
            return (
              (function e(t, n, r) {
                t instanceof _h &&
                  t.childNodes.forEach(function(t) {
                    n(t) && r.push(t), t instanceof _h && e(t, n, r);
                  });
              })(this, e, t),
              t
            );
          }),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.childNodes.filter(function(e) {
                return e instanceof t;
              });
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.triggerEventHandler = function(e, t) {
            this.listeners.forEach(function(n) {
              n.name == e && n.callback(t);
            });
          }),
          t
        );
      })(bh);
    function wh(e) {
      return e.map(function(e) {
        return e.nativeElement;
      });
    }
    var Ch = new Map();
    function Dh(e) {
      return Ch.get(e) || null;
    }
    function Eh(e) {
      Ch.set(e.nativeNode, e);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Oh = (function() {
        function e() {}
        return (
          (e.prototype.supports = function(e) {
            return It(e);
          }),
          (e.prototype.create = function(e) {
            return new xh(e);
          }),
          e
        );
      })(),
      Sh = function(e, t) {
        return t;
      },
      xh = (function() {
        function e(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || Sh);
        }
        return (
          (e.prototype.forEachItem = function(e) {
            var t;
            for (t = this._itHead; null !== t; t = t._next) e(t);
          }),
          (e.prototype.forEachOperation = function(e) {
            for (
              var t = this._itHead, n = this._removalsHead, r = 0, o = null;
              t || n;

            ) {
              var i = !n || (t && t.currentIndex < Ih(n, r, o)) ? t : n,
                u = Ih(i, r, o),
                a = i.currentIndex;
              if (i === n) r--, (n = n._nextRemoved);
              else if (((t = t._next), null == i.previousIndex)) r++;
              else {
                o || (o = []);
                var s = u - r,
                  c = a - r;
                if (s != c) {
                  for (var l = 0; l < s; l++) {
                    var f = l < o.length ? o[l] : (o[l] = 0),
                      d = f + l;
                    c <= d && d < s && (o[l] = f + 1);
                  }
                  o[i.previousIndex] = c - s;
                }
              }
              u !== a && e(i, u, a);
            }
          }),
          (e.prototype.forEachPreviousItem = function(e) {
            var t;
            for (t = this._previousItHead; null !== t; t = t._nextPrevious)
              e(t);
          }),
          (e.prototype.forEachAddedItem = function(e) {
            var t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
          }),
          (e.prototype.forEachMovedItem = function(e) {
            var t;
            for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
          }),
          (e.prototype.forEachRemovedItem = function(e) {
            var t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
          }),
          (e.prototype.forEachIdentityChange = function(e) {
            var t;
            for (
              t = this._identityChangesHead;
              null !== t;
              t = t._nextIdentityChange
            )
              e(t);
          }),
          (e.prototype.diff = function(e) {
            if ((null == e && (e = []), !It(e)))
              throw new Error(
                "Error trying to diff '" +
                  ce(e) +
                  "'. Only arrays and iterables are allowed"
              );
            return this.check(e) ? this : null;
          }),
          (e.prototype.onDestroy = function() {}),
          (e.prototype.check = function(e) {
            var t = this;
            this._reset();
            var n,
              r,
              o,
              i = this._itHead,
              u = !1;
            if (Array.isArray(e)) {
              this.length = e.length;
              for (var a = 0; a < this.length; a++)
                (r = e[a]),
                  (o = this._trackByFn(a, r)),
                  null !== i && se(i.trackById, o)
                    ? (u && (i = this._verifyReinsertion(i, r, o, a)),
                      se(i.item, r) || this._addIdentityChange(i, r))
                    : ((i = this._mismatch(i, r, o, a)), (u = !0)),
                  (i = i._next);
            } else
              (n = 0),
                (function(e, t) {
                  if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++) t(e[n]);
                  else
                    for (var r = e[ue()](), o = void 0; !(o = r.next()).done; )
                      t(o.value);
                })(e, function(e) {
                  (o = t._trackByFn(n, e)),
                    null !== i && se(i.trackById, o)
                      ? (u && (i = t._verifyReinsertion(i, e, o, n)),
                        se(i.item, e) || t._addIdentityChange(i, e))
                      : ((i = t._mismatch(i, e, o, n)), (u = !0)),
                    (i = i._next),
                    n++;
                }),
                (this.length = n);
            return this._truncate(i), (this.collection = e), this.isDirty;
          }),
          Object.defineProperty(e.prototype, 'isDirty', {
            get: function() {
              return (
                null !== this._additionsHead ||
                null !== this._movesHead ||
                null !== this._removalsHead ||
                null !== this._identityChangesHead
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype._reset = function() {
            if (this.isDirty) {
              var e = void 0,
                t = void 0;
              for (
                e = this._previousItHead = this._itHead;
                null !== e;
                e = e._next
              )
                e._nextPrevious = e._next;
              for (e = this._additionsHead; null !== e; e = e._nextAdded)
                e.previousIndex = e.currentIndex;
              for (
                this._additionsHead = this._additionsTail = null,
                  e = this._movesHead;
                null !== e;
                e = t
              )
                (e.previousIndex = e.currentIndex), (t = e._nextMoved);
              (this._movesHead = this._movesTail = null),
                (this._removalsHead = this._removalsTail = null),
                (this._identityChangesHead = this._identityChangesTail = null);
            }
          }),
          (e.prototype._mismatch = function(e, t, n, r) {
            var o;
            return (
              null === e
                ? (o = this._itTail)
                : ((o = e._prev), this._remove(e)),
              null !==
              (e =
                null === this._linkedRecords
                  ? null
                  : this._linkedRecords.get(n, r))
                ? (se(e.item, t) || this._addIdentityChange(e, t),
                  this._moveAfter(e, o, r))
                : null !==
                  (e =
                    null === this._unlinkedRecords
                      ? null
                      : this._unlinkedRecords.get(n, null))
                ? (se(e.item, t) || this._addIdentityChange(e, t),
                  this._reinsertAfter(e, o, r))
                : (e = this._addAfter(new Ah(t, n), o, r)),
              e
            );
          }),
          (e.prototype._verifyReinsertion = function(e, t, n, r) {
            var o =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null);
            return (
              null !== o
                ? (e = this._reinsertAfter(o, e._prev, r))
                : e.currentIndex != r &&
                  ((e.currentIndex = r), this._addToMoves(e, r)),
              e
            );
          }),
          (e.prototype._truncate = function(e) {
            for (; null !== e; ) {
              var t = e._next;
              this._addToRemovals(this._unlink(e)), (e = t);
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
              null !== this._additionsTail &&
                (this._additionsTail._nextAdded = null),
              null !== this._movesTail && (this._movesTail._nextMoved = null),
              null !== this._itTail && (this._itTail._next = null),
              null !== this._removalsTail &&
                (this._removalsTail._nextRemoved = null),
              null !== this._identityChangesTail &&
                (this._identityChangesTail._nextIdentityChange = null);
          }),
          (e.prototype._reinsertAfter = function(e, t, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
            var r = e._prevRemoved,
              o = e._nextRemoved;
            return (
              null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
              null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
              this._insertAfter(e, t, n),
              this._addToMoves(e, n),
              e
            );
          }),
          (e.prototype._moveAfter = function(e, t, n) {
            return (
              this._unlink(e),
              this._insertAfter(e, t, n),
              this._addToMoves(e, n),
              e
            );
          }),
          (e.prototype._addAfter = function(e, t, n) {
            return (
              this._insertAfter(e, t, n),
              null === this._additionsTail
                ? (this._additionsTail = this._additionsHead = e)
                : (this._additionsTail = this._additionsTail._nextAdded = e),
              e
            );
          }),
          (e.prototype._insertAfter = function(e, t, n) {
            var r = null === t ? this._itHead : t._next;
            return (
              (e._next = r),
              (e._prev = t),
              null === r ? (this._itTail = e) : (r._prev = e),
              null === t ? (this._itHead = e) : (t._next = e),
              null === this._linkedRecords && (this._linkedRecords = new Rh()),
              this._linkedRecords.put(e),
              (e.currentIndex = n),
              e
            );
          }),
          (e.prototype._remove = function(e) {
            return this._addToRemovals(this._unlink(e));
          }),
          (e.prototype._unlink = function(e) {
            null !== this._linkedRecords && this._linkedRecords.remove(e);
            var t = e._prev,
              n = e._next;
            return (
              null === t ? (this._itHead = n) : (t._next = n),
              null === n ? (this._itTail = t) : (n._prev = t),
              e
            );
          }),
          (e.prototype._addToMoves = function(e, t) {
            return e.previousIndex === t
              ? e
              : (null === this._movesTail
                  ? (this._movesTail = this._movesHead = e)
                  : (this._movesTail = this._movesTail._nextMoved = e),
                e);
          }),
          (e.prototype._addToRemovals = function(e) {
            return (
              null === this._unlinkedRecords &&
                (this._unlinkedRecords = new Rh()),
              this._unlinkedRecords.put(e),
              (e.currentIndex = null),
              (e._nextRemoved = null),
              null === this._removalsTail
                ? ((this._removalsTail = this._removalsHead = e),
                  (e._prevRemoved = null))
                : ((e._prevRemoved = this._removalsTail),
                  (this._removalsTail = this._removalsTail._nextRemoved = e)),
              e
            );
          }),
          (e.prototype._addIdentityChange = function(e, t) {
            return (
              (e.item = t),
              null === this._identityChangesTail
                ? (this._identityChangesTail = this._identityChangesHead = e)
                : (this._identityChangesTail = this._identityChangesTail._nextIdentityChange = e),
              e
            );
          }),
          e
        );
      })(),
      Ah = (function() {
        return function(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        };
      })(),
      jh = (function() {
        function e() {
          (this._head = null), (this._tail = null);
        }
        return (
          (e.prototype.add = function(e) {
            null === this._head
              ? ((this._head = this._tail = e),
                (e._nextDup = null),
                (e._prevDup = null))
              : ((this._tail._nextDup = e),
                (e._prevDup = this._tail),
                (e._nextDup = null),
                (this._tail = e));
          }),
          (e.prototype.get = function(e, t) {
            var n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === t || t <= n.currentIndex) && se(n.trackById, e))
                return n;
            return null;
          }),
          (e.prototype.remove = function(e) {
            var t = e._prevDup,
              n = e._nextDup;
            return (
              null === t ? (this._head = n) : (t._nextDup = n),
              null === n ? (this._tail = t) : (n._prevDup = t),
              null === this._head
            );
          }),
          e
        );
      })(),
      Rh = (function() {
        function e() {
          this.map = new Map();
        }
        return (
          (e.prototype.put = function(e) {
            var t = e.trackById,
              n = this.map.get(t);
            n || ((n = new jh()), this.map.set(t, n)), n.add(e);
          }),
          (e.prototype.get = function(e, t) {
            var n = e,
              r = this.map.get(n);
            return r ? r.get(e, t) : null;
          }),
          (e.prototype.remove = function(e) {
            var t = e.trackById;
            return this.map.get(t).remove(e) && this.map.delete(t), e;
          }),
          Object.defineProperty(e.prototype, 'isEmpty', {
            get: function() {
              return 0 === this.map.size;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.clear = function() {
            this.map.clear();
          }),
          e
        );
      })();
    function Ih(e, t, n) {
      var r = e.previousIndex;
      if (null === r) return r;
      var o = 0;
      return n && r < n.length && (o = n[r]), r + t + o;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Th = (function() {
        function e() {}
        return (
          (e.prototype.supports = function(e) {
            return e instanceof Map || Tt(e);
          }),
          (e.prototype.create = function() {
            return new kh();
          }),
          e
        );
      })(),
      kh = (function() {
        function e() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        return (
          Object.defineProperty(e.prototype, 'isDirty', {
            get: function() {
              return (
                null !== this._additionsHead ||
                null !== this._changesHead ||
                null !== this._removalsHead
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.forEachItem = function(e) {
            var t;
            for (t = this._mapHead; null !== t; t = t._next) e(t);
          }),
          (e.prototype.forEachPreviousItem = function(e) {
            var t;
            for (t = this._previousMapHead; null !== t; t = t._nextPrevious)
              e(t);
          }),
          (e.prototype.forEachChangedItem = function(e) {
            var t;
            for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
          }),
          (e.prototype.forEachAddedItem = function(e) {
            var t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
          }),
          (e.prototype.forEachRemovedItem = function(e) {
            var t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
          }),
          (e.prototype.diff = function(e) {
            if (e) {
              if (!(e instanceof Map || Tt(e)))
                throw new Error(
                  "Error trying to diff '" +
                    ce(e) +
                    "'. Only maps and objects are allowed"
                );
            } else e = new Map();
            return this.check(e) ? this : null;
          }),
          (e.prototype.onDestroy = function() {}),
          (e.prototype.check = function(e) {
            var t = this;
            this._reset();
            var n = this._mapHead;
            if (
              ((this._appendAfter = null),
              this._forEach(e, function(e, r) {
                if (n && n.key === r)
                  t._maybeAddToChanges(n, e),
                    (t._appendAfter = n),
                    (n = n._next);
                else {
                  var o = t._getOrCreateRecordForKey(r, e);
                  n = t._insertBeforeOrAppend(n, o);
                }
              }),
              n)
            ) {
              n._prev && (n._prev._next = null), (this._removalsHead = n);
              for (var r = n; null !== r; r = r._nextRemoved)
                r === this._mapHead && (this._mapHead = null),
                  this._records.delete(r.key),
                  (r._nextRemoved = r._next),
                  (r.previousValue = r.currentValue),
                  (r.currentValue = null),
                  (r._prev = null),
                  (r._next = null);
            }
            return (
              this._changesTail && (this._changesTail._nextChanged = null),
              this._additionsTail && (this._additionsTail._nextAdded = null),
              this.isDirty
            );
          }),
          (e.prototype._insertBeforeOrAppend = function(e, t) {
            if (e) {
              var n = e._prev;
              return (
                (t._next = e),
                (t._prev = n),
                (e._prev = t),
                n && (n._next = t),
                e === this._mapHead && (this._mapHead = t),
                (this._appendAfter = e),
                e
              );
            }
            return (
              this._appendAfter
                ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
                : (this._mapHead = t),
              (this._appendAfter = t),
              null
            );
          }),
          (e.prototype._getOrCreateRecordForKey = function(e, t) {
            if (this._records.has(e)) {
              var n = this._records.get(e);
              this._maybeAddToChanges(n, t);
              var r = n._prev,
                o = n._next;
              return (
                r && (r._next = o),
                o && (o._prev = r),
                (n._next = null),
                (n._prev = null),
                n
              );
            }
            var i = new Mh(e);
            return (
              this._records.set(e, i),
              (i.currentValue = t),
              this._addToAdditions(i),
              i
            );
          }),
          (e.prototype._reset = function() {
            if (this.isDirty) {
              var e = void 0;
              for (
                this._previousMapHead = this._mapHead,
                  e = this._previousMapHead;
                null !== e;
                e = e._next
              )
                e._nextPrevious = e._next;
              for (e = this._changesHead; null !== e; e = e._nextChanged)
                e.previousValue = e.currentValue;
              for (e = this._additionsHead; null != e; e = e._nextAdded)
                e.previousValue = e.currentValue;
              (this._changesHead = this._changesTail = null),
                (this._additionsHead = this._additionsTail = null),
                (this._removalsHead = null);
            }
          }),
          (e.prototype._maybeAddToChanges = function(e, t) {
            se(t, e.currentValue) ||
              ((e.previousValue = e.currentValue),
              (e.currentValue = t),
              this._addToChanges(e));
          }),
          (e.prototype._addToAdditions = function(e) {
            null === this._additionsHead
              ? (this._additionsHead = this._additionsTail = e)
              : ((this._additionsTail._nextAdded = e),
                (this._additionsTail = e));
          }),
          (e.prototype._addToChanges = function(e) {
            null === this._changesHead
              ? (this._changesHead = this._changesTail = e)
              : ((this._changesTail._nextChanged = e), (this._changesTail = e));
          }),
          (e.prototype._forEach = function(e, t) {
            e instanceof Map
              ? e.forEach(t)
              : Object.keys(e).forEach(function(n) {
                  return t(e[n], n);
                });
          }),
          e
        );
      })(),
      Mh = (function() {
        return function(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        };
      })(),
      Ph = (function() {
        function e(e) {
          this.factories = e;
        }
        return (
          (e.create = function(t, n) {
            if (null != n) {
              var r = n.factories.slice();
              t = t.concat(r);
            }
            return new e(t);
          }),
          (e.extend = function(t) {
            return {
              provide: e,
              useFactory: function(n) {
                if (!n)
                  throw new Error(
                    'Cannot extend IterableDiffers without a parent injector'
                  );
                return e.create(t, n);
              },
              deps: [[e, new Re(), new Ae()]]
            };
          }),
          (e.prototype.find = function(e) {
            var t = this.factories.find(function(t) {
              return t.supports(e);
            });
            if (null != t) return t;
            throw new Error(
              "Cannot find a differ supporting object '" +
                e +
                "' of type '" +
                (function(e) {
                  return e.name || typeof e;
                })(
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */ e
                ) +
                "'"
            );
          }),
          (e.ngInjectableDef = A({
            providedIn: 'root',
            factory: function() {
              return new e([new Oh()]);
            }
          })),
          e
        );
      })();
    var Fh = (function() {
        function e(e) {
          this.factories = e;
        }
        return (
          (e.create = function(t, n) {
            if (n) {
              var r = n.factories.slice();
              t = t.concat(r);
            }
            return new e(t);
          }),
          (e.extend = function(t) {
            return {
              provide: e,
              useFactory: function(n) {
                if (!n)
                  throw new Error(
                    'Cannot extend KeyValueDiffers without a parent injector'
                  );
                return e.create(t, n);
              },
              deps: [[e, new Re(), new Ae()]]
            };
          }),
          (e.prototype.find = function(e) {
            var t = this.factories.find(function(t) {
              return t.supports(e);
            });
            if (t) return t;
            throw new Error(
              "Cannot find a differ supporting object '" + e + "'"
            );
          }),
          (e.ngInjectableDef = A({
            providedIn: 'root',
            factory: function() {
              return new e([new Th()]);
            }
          })),
          e
        );
      })(),
      Nh = [new Th()],
      Vh = new Ph([new Oh()]),
      Lh = new Fh(Nh),
      Bh = Wp(null, 'core', [
        { provide: sp, useValue: 'unknown' },
        { provide: $p, deps: [Lr] },
        { provide: Vp, deps: [] },
        { provide: fp, deps: [] }
      ]),
      Uh = new T('LocaleId'),
      Hh = new T('Translations'),
      zh = new T('TranslationsFormat'),
      Gh = (function(e) {
        return (
          (e[(e.Error = 0)] = 'Error'),
          (e[(e.Warning = 1)] = 'Warning'),
          (e[(e.Ignore = 2)] = 'Ignore'),
          e
        );
      })({});
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function Zh() {
      return Vh;
    }
    function qh() {
      return Lh;
    }
    function Wh(e) {
      return e || 'en-US';
    }
    var Qh = [
        { provide: Xp, useClass: Xp, deps: [Rp, fp, Lr, Id, ks, np] },
        { provide: np, useClass: np, deps: [[new Ae(), tp]] },
        { provide: gp, useClass: gp, deps: [] },
        ip,
        { provide: Ph, useFactory: Zh, deps: [] },
        { provide: Fh, useFactory: qh, deps: [] },
        {
          provide: Uh,
          useFactory: Wh,
          deps: [[new xe(Uh), new Ae(), new Re()]]
        }
      ],
      Kh = (function() {
        return function(e) {};
      })(),
      Yh = !0,
      $h = !1;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function Jh(e, t, n) {
      var r = e.state,
        o = 1792 & r;
      return o === t
        ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
        : o === n;
    }
    function Xh(e, t, n) {
      return (
        (1792 & e.state) === t &&
        e.initIndex <= n &&
        ((e.initIndex = n + 1), !0)
      );
    }
    function ev(e, t) {
      return e.nodes[t];
    }
    function tv(e, t) {
      return e.nodes[t];
    }
    function nv(e, t) {
      return e.nodes[t];
    }
    function rv(e, t) {
      return e.nodes[t];
    }
    function ov(e, t) {
      return e.nodes[t];
    }
    var iv = (function() {
        return function() {};
      })(),
      uv = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0
      };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function av(e, t, n, r) {
      var o =
        "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
        t +
        "'. Current value: '" +
        n +
        "'.";
      return (
        r &&
          (o +=
            ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
        (function(e, t) {
          var n = new Error(e);
          return sv(n, t), n;
        })(o, e)
      );
    }
    function sv(e, t) {
      (e[Od] = t), (e[xd] = t.logError.bind(t));
    }
    function cv(e) {
      return new Error(
        'ViewDestroyedError: Attempt to use a destroyed view: ' + e
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var lv = function() {},
      fv = new Map();
    function dv(e) {
      var t = fv.get(e);
      return t || ((t = ce(e) + '_' + fv.size), fv.set(e, t)), t;
    }
    function pv(e, t, n, r) {
      if (jt.isWrapped(r)) {
        r = jt.unwrap(r);
        var o = e.def.nodes[t].bindingIndex + n,
          i = jt.unwrap(e.oldValues[o]);
        e.oldValues[o] = new jt(i);
      }
      return r;
    }
    var hv = '$$undefined',
      vv = '$$empty';
    function gv(e) {
      return {
        id: hv,
        styles: e.styles,
        encapsulation: e.encapsulation,
        data: e.data
      };
    }
    var yv = 0;
    function mv(e, t, n, r) {
      var o = e.oldValues;
      return !(!(2 & e.state) && se(o[t.bindingIndex + n], r));
    }
    function bv(e, t, n, r) {
      return !!mv(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
    }
    function _v(e, t, n, r) {
      var o = e.oldValues[t.bindingIndex + n];
      if (1 & e.state || !At(o, r)) {
        var i = t.bindings[n].name;
        throw av(
          uv.createDebugContext(e, t.nodeIndex),
          i + ': ' + o,
          i + ': ' + r,
          0 != (1 & e.state)
        );
      }
    }
    function wv(e) {
      for (var t = e; t; )
        2 & t.def.flags && (t.state |= 8),
          (t = t.viewContainerParent || t.parent);
    }
    function Cv(e, t) {
      for (var n = e; n && n !== t; )
        (n.state |= 64), (n = n.viewContainerParent || n.parent);
    }
    function Dv(e, t, n, r) {
      try {
        return (
          wv(33554432 & e.def.nodes[t].flags ? tv(e, t).componentView : e),
          uv.handleEvent(e, t, n, r)
        );
      } catch (t) {
        e.root.errorHandler.handleError(t);
      }
    }
    function Ev(e) {
      return e.parent ? tv(e.parent, e.parentNodeDef.nodeIndex) : null;
    }
    function Ov(e) {
      return e.parent ? e.parentNodeDef.parent : null;
    }
    function Sv(e, t) {
      switch (201347067 & t.flags) {
        case 1:
          return tv(e, t.nodeIndex).renderElement;
        case 2:
          return ev(e, t.nodeIndex).renderText;
      }
    }
    function xv(e, t) {
      return e ? e + ':' + t : t;
    }
    function Av(e) {
      return !!e.parent && !!(32768 & e.parentNodeDef.flags);
    }
    function jv(e) {
      return !(!e.parent || 32768 & e.parentNodeDef.flags);
    }
    function Rv(e) {
      return 1 << e % 32;
    }
    function Iv(e) {
      var t = {},
        n = 0,
        o = {};
      return (
        e &&
          e.forEach(function(e) {
            var i = Object(r.f)(e, 2),
              u = i[0],
              a = i[1];
            'number' == typeof u ? ((t[u] = a), (n |= Rv(u))) : (o[u] = a);
          }),
        { matchedQueries: t, references: o, matchedQueryIds: n }
      );
    }
    function Tv(e, t) {
      return e.map(function(e) {
        var n, o, i;
        return (
          Array.isArray(e)
            ? ((i = (n = Object(r.f)(e, 2))[0]), (o = n[1]))
            : ((i = 0), (o = e)),
          o &&
            ('function' == typeof o || 'object' == typeof o) &&
            t &&
            Object.defineProperty(o, Mr, { value: t, configurable: !0 }),
          { flags: i, token: o, tokenKey: dv(o) }
        );
      });
    }
    function kv(e, t, n) {
      var r = n.renderParent;
      return r
        ? 0 == (1 & r.flags) ||
          0 == (33554432 & r.flags) ||
          (r.element.componentRendererType &&
            r.element.componentRendererType.encapsulation === ee.Native)
          ? tv(e, n.renderParent.nodeIndex).renderElement
          : void 0
        : t;
    }
    var Mv = new WeakMap();
    function Pv(e) {
      var t = Mv.get(e);
      return (
        t ||
          (((t = e(function() {
            return lv;
          })).factory = e),
          Mv.set(e, t)),
        t
      );
    }
    function Fv(e, t, n, r, o) {
      3 === t && (n = e.renderer.parentNode(Sv(e, e.def.lastRenderRootNode))),
        Nv(e, t, 0, e.def.nodes.length - 1, n, r, o);
    }
    function Nv(e, t, n, r, o, i, u) {
      for (var a = n; a <= r; a++) {
        var s = e.def.nodes[a];
        11 & s.flags && Lv(e, s, t, o, i, u), (a += s.childCount);
      }
    }
    function Vv(e, t, n, r, o, i) {
      for (var u = e; u && !Av(u); ) u = u.parent;
      for (
        var a = u.parent,
          s = Ov(u),
          c = s.nodeIndex + 1,
          l = s.nodeIndex + s.childCount,
          f = c;
        f <= l;
        f++
      ) {
        var d = a.def.nodes[f];
        d.ngContentIndex === t && Lv(a, d, n, r, o, i), (f += d.childCount);
      }
      if (!a.parent) {
        var p = e.root.projectableNodes[t];
        if (p) for (f = 0; f < p.length; f++) Bv(e, p[f], n, r, o, i);
      }
    }
    function Lv(e, t, n, r, o, i) {
      if (8 & t.flags) Vv(e, t.ngContent.index, n, r, o, i);
      else {
        var u = Sv(e, t);
        if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags) {
          if (
            (16 & t.bindingFlags && Bv(e, u, n, r, o, i), 32 & t.bindingFlags)
          )
            Bv(tv(e, t.nodeIndex).componentView, u, n, r, o, i);
        } else Bv(e, u, n, r, o, i);
        if (16777216 & t.flags)
          for (
            var a = tv(e, t.nodeIndex).viewContainer._embeddedViews, s = 0;
            s < a.length;
            s++
          )
            Fv(a[s], n, r, o, i);
        1 & t.flags &&
          !t.element.name &&
          Nv(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
      }
    }
    function Bv(e, t, n, r, o, i) {
      var u = e.renderer;
      switch (n) {
        case 1:
          u.appendChild(r, t);
          break;
        case 2:
          u.insertBefore(r, t, o);
          break;
        case 3:
          u.removeChild(r, t);
          break;
        case 0:
          i.push(t);
      }
    }
    var Uv = /^:([^:]+):(.+)$/;
    function Hv(e) {
      if (':' === e[0]) {
        var t = e.match(Uv);
        return [t[1], t[2]];
      }
      return ['', e];
    }
    function zv(e) {
      for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
      return t;
    }
    function Gv(e, t) {
      for (var n = '', r = 0; r < 2 * e; r += 2) n = n + t[r] + qv(t[r + 1]);
      return n + t[2 * e];
    }
    function Zv(e, t, n, r, o, i, u, a, s, c, l, f, d, p, h, v, g, y, m, b) {
      switch (e) {
        case 1:
          return t + qv(n) + r;
        case 2:
          return t + qv(n) + r + qv(o) + i;
        case 3:
          return t + qv(n) + r + qv(o) + i + qv(u) + a;
        case 4:
          return t + qv(n) + r + qv(o) + i + qv(u) + a + qv(s) + c;
        case 5:
          return t + qv(n) + r + qv(o) + i + qv(u) + a + qv(s) + c + qv(l) + f;
        case 6:
          return (
            t +
            qv(n) +
            r +
            qv(o) +
            i +
            qv(u) +
            a +
            qv(s) +
            c +
            qv(l) +
            f +
            qv(d) +
            p
          );
        case 7:
          return (
            t +
            qv(n) +
            r +
            qv(o) +
            i +
            qv(u) +
            a +
            qv(s) +
            c +
            qv(l) +
            f +
            qv(d) +
            p +
            qv(h) +
            v
          );
        case 8:
          return (
            t +
            qv(n) +
            r +
            qv(o) +
            i +
            qv(u) +
            a +
            qv(s) +
            c +
            qv(l) +
            f +
            qv(d) +
            p +
            qv(h) +
            v +
            qv(g) +
            y
          );
        case 9:
          return (
            t +
            qv(n) +
            r +
            qv(o) +
            i +
            qv(u) +
            a +
            qv(s) +
            c +
            qv(l) +
            f +
            qv(d) +
            p +
            qv(h) +
            v +
            qv(g) +
            y +
            qv(m) +
            b
          );
        default:
          throw new Error('Does not support more than 9 expressions');
      }
    }
    function qv(e) {
      return null != e ? e.toString() : '';
    }
    var Wv = [],
      Qv = {};
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function Kv(e, t, n, r, o, i) {
      e |= 1;
      var u = Iv(t),
        a = u.matchedQueries,
        s = u.references;
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        flags: e,
        checkIndex: -1,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: a,
        matchedQueryIds: u.matchedQueryIds,
        references: s,
        ngContentIndex: n,
        childCount: r,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: {
          ns: null,
          name: null,
          attrs: null,
          template: i ? Pv(i) : null,
          componentProvider: null,
          componentView: null,
          componentRendererType: null,
          publicProviders: null,
          allProviders: null,
          handleEvent: o || lv
        },
        provider: null,
        text: null,
        query: null,
        ngContent: null
      };
    }
    function Yv(e, t, n, o, i, u, a, s, c, l, f, d) {
      var p;
      void 0 === a && (a = []), l || (l = lv);
      var h = Iv(n),
        v = h.matchedQueries,
        g = h.references,
        y = h.matchedQueryIds,
        m = null,
        b = null;
      u && ((m = (p = Object(r.f)(Hv(u), 2))[0]), (b = p[1])), (s = s || []);
      for (var _ = new Array(s.length), w = 0; w < s.length; w++) {
        var C = Object(r.f)(s[w], 3),
          D = C[0],
          E = C[1],
          O = C[2],
          S = Object(r.f)(Hv(E), 2),
          x = S[0],
          A = S[1],
          j = void 0,
          R = void 0;
        switch (15 & D) {
          case 4:
            R = O;
            break;
          case 1:
          case 8:
            j = O;
        }
        _[w] = {
          flags: D,
          ns: x,
          name: A,
          nonMinifiedName: A,
          securityContext: j,
          suffix: R
        };
      }
      c = c || [];
      var I = new Array(c.length);
      for (w = 0; w < c.length; w++) {
        var T = Object(r.f)(c[w], 2),
          k = T[0],
          M = T[1];
        I[w] = { type: 0, target: k, eventName: M, propName: null };
      }
      var P = (a = a || []).map(function(e) {
        var t = Object(r.f)(e, 2),
          n = t[0],
          o = t[1],
          i = Object(r.f)(Hv(n), 2);
        return [i[0], i[1], o];
      });
      return (
        (d = (function(e) {
          if (e && e.id === hv) {
            var t =
              (null != e.encapsulation && e.encapsulation !== ee.None) ||
              e.styles.length ||
              Object.keys(e.data).length;
            e.id = t ? 'c' + yv++ : vv;
          }
          return e && e.id === vv && (e = null), e || null;
        })(d)),
        f && (t |= 33554432),
        {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: (t |= 1),
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: v,
          matchedQueryIds: y,
          references: g,
          ngContentIndex: o,
          childCount: i,
          bindings: _,
          bindingFlags: zv(_),
          outputs: I,
          element: {
            ns: m,
            name: b,
            attrs: P,
            template: null,
            componentProvider: null,
            componentView: f || null,
            componentRendererType: d,
            publicProviders: null,
            allProviders: null,
            handleEvent: l || lv
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        }
      );
    }
    function $v(e, t, n) {
      var o,
        i = n.element,
        u = e.root.selectorOrNode,
        a = e.renderer;
      if (e.parent || !u) {
        o = i.name ? a.createElement(i.name, i.ns) : a.createComment('');
        var s = kv(e, t, n);
        s && a.appendChild(s, o);
      } else {
        var c =
          !!i.componentRendererType &&
          i.componentRendererType.encapsulation === ee.ShadowDom;
        o = a.selectRootElement(u, c);
      }
      if (i.attrs)
        for (var l = 0; l < i.attrs.length; l++) {
          var f = Object(r.f)(i.attrs[l], 3),
            d = f[0],
            p = f[1],
            h = f[2];
          a.setAttribute(o, p, h, d);
        }
      return o;
    }
    function Jv(e, t, n, r) {
      for (var o = 0; o < n.outputs.length; o++) {
        var i = n.outputs[o],
          u = Xv(e, n.nodeIndex, xv(i.target, i.eventName)),
          a = i.target,
          s = e;
        'component' === i.target && ((a = null), (s = t));
        var c = s.renderer.listen(a || r, i.eventName, u);
        e.disposables[n.outputIndex + o] = c;
      }
    }
    function Xv(e, t, n) {
      return function(r) {
        return Dv(e, t, n, r);
      };
    }
    function eg(e, t, n, r) {
      if (!bv(e, t, n, r)) return !1;
      var o = t.bindings[n],
        i = tv(e, t.nodeIndex),
        u = i.renderElement,
        a = o.name;
      switch (15 & o.flags) {
        case 1:
          !(function(e, t, n, r, o, i) {
            var u = t.securityContext,
              a = u ? e.root.sanitizer.sanitize(u, i) : i;
            a = null != a ? a.toString() : null;
            var s = e.renderer;
            null != i ? s.setAttribute(n, o, a, r) : s.removeAttribute(n, o, r);
          })(e, o, u, o.ns, a, r);
          break;
        case 2:
          !(function(e, t, n, r) {
            var o = e.renderer;
            r ? o.addClass(t, n) : o.removeClass(t, n);
          })(e, u, a, r);
          break;
        case 4:
          !(function(e, t, n, r, o) {
            var i = e.root.sanitizer.sanitize(ff.STYLE, o);
            if (null != i) {
              i = i.toString();
              var u = t.suffix;
              null != u && (i += u);
            } else i = null;
            var a = e.renderer;
            null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r);
          })(e, o, u, a, r);
          break;
        case 8:
          !(function(e, t, n, r, o) {
            var i = t.securityContext,
              u = i ? e.root.sanitizer.sanitize(i, o) : o;
            e.renderer.setProperty(n, r, u);
          })(
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */ 33554432 & t.flags && 32 & o.flags ? i.componentView : e,
            o,
            u,
            a,
            r
          );
      }
      return !0;
    }
    var tg = new Object(),
      ng = dv(Lr),
      rg = dv(Nr),
      og = dv(no);
    function ig(e, t, n, r) {
      return (
        (n = kr(n)),
        { index: -1, deps: Tv(r, ce(t)), flags: e, token: t, value: n }
      );
    }
    function ug(e) {
      for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
        var i = e[o];
        i.token === as && !0 === i.value && (r = !0),
          1073741824 & i.flags && n.push(i.token),
          (i.index = o),
          (t[dv(i.token)] = i);
      }
      return {
        factory: null,
        providersByKey: t,
        providers: e,
        modules: n,
        isRoot: r
      };
    }
    function ag(e, t, n) {
      void 0 === n && (n = Lr.THROW_IF_NOT_FOUND);
      var r = Me(e);
      try {
        if (8 & t.flags) return t.token;
        if ((2 & t.flags && (n = null), 1 & t.flags))
          return e._parent.get(t.token, n);
        var o = t.tokenKey;
        switch (o) {
          case ng:
          case rg:
          case og:
            return e;
        }
        var i = e._def.providersByKey[o],
          u = void 0;
        if (i) {
          var a = e._providers[i.index];
          return (
            void 0 === a && (a = e._providers[i.index] = sg(e, i)),
            a === tg ? void 0 : a
          );
        }
        if (
          (u = R(t.token)) &&
          (function(e, t) {
            return (
              null != t.providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(e, t.providedIn) ||
                ('root' === t.providedIn && e._def.isRoot))
            );
          })(e, u)
        ) {
          var s = e._providers.length;
          return (
            (e._def.providersByKey[t.tokenKey] = {
              flags: 5120,
              value: u.factory,
              deps: [],
              index: s,
              token: t.token
            }),
            (e._providers[s] = tg),
            (e._providers[s] = sg(e, e._def.providersByKey[t.tokenKey]))
          );
        }
        return 4 & t.flags ? n : e._parent.get(t.token, n);
      } finally {
        Me(r);
      }
    }
    function sg(e, t) {
      var n;
      switch (201347067 & t.flags) {
        case 512:
          n = (function(e, t, n) {
            var o = n.length;
            switch (o) {
              case 0:
                return new t();
              case 1:
                return new t(ag(e, n[0]));
              case 2:
                return new t(ag(e, n[0]), ag(e, n[1]));
              case 3:
                return new t(ag(e, n[0]), ag(e, n[1]), ag(e, n[2]));
              default:
                for (var i = new Array(o), u = 0; u < o; u++)
                  i[u] = ag(e, n[u]);
                return new (t.bind.apply(t, Object(r.g)([void 0], i)))();
            }
          })(e, t.value, t.deps);
          break;
        case 1024:
          n = (function(e, t, n) {
            var o = n.length;
            switch (o) {
              case 0:
                return t();
              case 1:
                return t(ag(e, n[0]));
              case 2:
                return t(ag(e, n[0]), ag(e, n[1]));
              case 3:
                return t(ag(e, n[0]), ag(e, n[1]), ag(e, n[2]));
              default:
                for (var i = Array(o), u = 0; u < o; u++) i[u] = ag(e, n[u]);
                return t.apply(void 0, Object(r.g)(i));
            }
          })(e, t.value, t.deps);
          break;
        case 2048:
          n = ag(e, t.deps[0]);
          break;
        case 256:
          n = t.value;
      }
      return (
        n === tg ||
          null == n ||
          'object' != typeof n ||
          131072 & t.flags ||
          'function' != typeof n.ngOnDestroy ||
          (t.flags |= 131072),
        void 0 === n ? tg : n
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function cg(e, t, n, r) {
      var o = t.viewContainer._embeddedViews;
      (null !== n && void 0 !== n) || (n = o.length),
        (r.viewContainerParent = e),
        pg(o, n, r),
        (function(e, t) {
          var n = Ev(t);
          if (!n || n === e || 16 & t.state) return;
          t.state |= 16;
          var r = n.template._projectedViews;
          r || (r = n.template._projectedViews = []);
          r.push(t),
            (function(e, t) {
              if (4 & t.flags) return;
              (e.nodeFlags |= 4), (t.flags |= 4);
              var n = t.parent;
              for (; n; ) (n.childFlags |= 4), (n = n.parent);
            })(t.parent.def, t.parentNodeDef);
        })(t, r),
        uv.dirtyParentQueries(r),
        fg(t, n > 0 ? o[n - 1] : null, r);
    }
    function lg(e, t) {
      var n = e.viewContainer._embeddedViews;
      if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
        return null;
      var r = n[t];
      return (
        (r.viewContainerParent = null),
        hg(n, t),
        uv.dirtyParentQueries(r),
        dg(r),
        r
      );
    }
    function fg(e, t, n) {
      var r = t ? Sv(t, t.def.lastRenderRootNode) : e.renderElement;
      Fv(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0);
    }
    function dg(e) {
      Fv(e, 3, null, null, void 0);
    }
    function pg(e, t, n) {
      t >= e.length ? e.push(n) : e.splice(t, 0, n);
    }
    function hg(e, t) {
      t >= e.length - 1 ? e.pop() : e.splice(t, 1);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var vg = new Object();
    function gg(e, t, n, r, o, i) {
      return new mg(e, t, n, r, o, i);
    }
    function yg(e) {
      return e.viewDefFactory;
    }
    var mg = (function(e) {
        function t(t, n, r, o, i, u) {
          var a = e.call(this) || this;
          return (
            (a.selector = t),
            (a.componentType = n),
            (a._inputs = o),
            (a._outputs = i),
            (a.ngContentSelectors = u),
            (a.viewDefFactory = r),
            a
          );
        }
        return (
          Object(r.c)(t, e),
          Object.defineProperty(t.prototype, 'inputs', {
            get: function() {
              var e = [],
                t = this._inputs;
              for (var n in t) {
                var r = t[n];
                e.push({ propName: n, templateName: r });
              }
              return e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'outputs', {
            get: function() {
              var e = [];
              for (var t in this._outputs) {
                var n = this._outputs[t];
                e.push({ propName: t, templateName: n });
              }
              return e;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.create = function(e, t, n, r) {
            if (!r) throw new Error('ngModule should be provided');
            var o = Pv(this.viewDefFactory),
              i = o.nodes[0].element.componentProvider.nodeIndex,
              u = uv.createRootView(e, t || [], n, o, r, vg),
              a = nv(u, i).instance;
            return (
              n &&
                u.renderer.setAttribute(
                  tv(u, 0).renderElement,
                  'ng-version',
                  Ks.full
                ),
              new bg(u, new Dg(u), a)
            );
          }),
          t
        );
      })(js),
      bg = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o._view = t),
            (o._viewRef = n),
            (o._component = r),
            (o._elDef = o._view.def.nodes[0]),
            (o.hostView = n),
            (o.changeDetectorRef = n),
            (o.instance = r),
            o
          );
        }
        return (
          Object(r.c)(t, e),
          Object.defineProperty(t.prototype, 'location', {
            get: function() {
              return new Fs(
                tv(this._view, this._elDef.nodeIndex).renderElement
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'injector', {
            get: function() {
              return new xg(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'componentType', {
            get: function() {
              return this._component.constructor;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.destroy = function() {
            this._viewRef.destroy();
          }),
          (t.prototype.onDestroy = function(e) {
            this._viewRef.onDestroy(e);
          }),
          t
        );
      })(As);
    function _g(e, t, n) {
      return new wg(e, t, n);
    }
    var wg = (function() {
      function e(e, t, n) {
        (this._view = e),
          (this._elDef = t),
          (this._data = n),
          (this._embeddedViews = []);
      }
      return (
        Object.defineProperty(e.prototype, 'element', {
          get: function() {
            return new Fs(this._data.renderElement);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'injector', {
          get: function() {
            return new xg(this._view, this._elDef);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'parentInjector', {
          get: function() {
            for (var e = this._view, t = this._elDef.parent; !t && e; )
              (t = Ov(e)), (e = e.parent);
            return e ? new xg(e, t) : new xg(this._view, null);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.clear = function() {
          for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
            var t = lg(this._data, e);
            uv.destroyView(t);
          }
        }),
        (e.prototype.get = function(e) {
          var t = this._embeddedViews[e];
          if (t) {
            var n = new Dg(t);
            return n.attachToViewContainerRef(this), n;
          }
          return null;
        }),
        Object.defineProperty(e.prototype, 'length', {
          get: function() {
            return this._embeddedViews.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.createEmbeddedView = function(e, t, n) {
          var r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }),
        (e.prototype.createComponent = function(e, t, n, r, o) {
          var i = n || this.parentInjector;
          o || e instanceof Ps || (o = i.get(no));
          var u = e.create(i, r, void 0, o);
          return this.insert(u.hostView, t), u;
        }),
        (e.prototype.insert = function(e, t) {
          if (e.destroyed)
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          var n = e,
            r = n._view;
          return (
            cg(this._view, this._data, t, r),
            n.attachToViewContainerRef(this),
            e
          );
        }),
        (e.prototype.move = function(e, t) {
          if (e.destroyed)
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          var n = this._embeddedViews.indexOf(e._view);
          return (
            (function(e, t, n) {
              var r = e.viewContainer._embeddedViews,
                o = r[t];
              hg(r, t),
                null == n && (n = r.length),
                pg(r, n, o),
                uv.dirtyParentQueries(o),
                dg(o),
                fg(e, n > 0 ? r[n - 1] : null, o);
            })(this._data, n, t),
            e
          );
        }),
        (e.prototype.indexOf = function(e) {
          return this._embeddedViews.indexOf(e._view);
        }),
        (e.prototype.remove = function(e) {
          var t = lg(this._data, e);
          t && uv.destroyView(t);
        }),
        (e.prototype.detach = function(e) {
          var t = lg(this._data, e);
          return t ? new Dg(t) : null;
        }),
        e
      );
    })();
    function Cg(e) {
      return new Dg(e);
    }
    var Dg = (function() {
      function e(e) {
        (this._view = e),
          (this._viewContainerRef = null),
          (this._appRef = null);
      }
      return (
        Object.defineProperty(e.prototype, 'rootNodes', {
          get: function() {
            return (function(e) {
              var t = [];
              return Fv(e, 0, void 0, void 0, t), t;
            })(this._view);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'context', {
          get: function() {
            return this._view.context;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'destroyed', {
          get: function() {
            return 0 != (128 & this._view.state);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.markForCheck = function() {
          wv(this._view);
        }),
        (e.prototype.detach = function() {
          this._view.state &= -5;
        }),
        (e.prototype.detectChanges = function() {
          var e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            uv.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }),
        (e.prototype.checkNoChanges = function() {
          uv.checkNoChangesView(this._view);
        }),
        (e.prototype.reattach = function() {
          this._view.state |= 4;
        }),
        (e.prototype.onDestroy = function(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }),
        (e.prototype.destroy = function() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            uv.destroyView(this._view);
        }),
        (e.prototype.detachFromAppRef = function() {
          (this._appRef = null),
            dg(this._view),
            uv.dirtyParentQueries(this._view);
        }),
        (e.prototype.attachToAppRef = function(e) {
          if (this._viewContainerRef)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = e;
        }),
        (e.prototype.attachToViewContainerRef = function(e) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._viewContainerRef = e;
        }),
        e
      );
    })();
    function Eg(e, t) {
      return new Og(e, t);
    }
    var Og = (function(e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return (r._parentView = t), (r._def = n), r;
      }
      return (
        Object(r.c)(t, e),
        (t.prototype.createEmbeddedView = function(e) {
          return new Dg(
            uv.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }),
        Object.defineProperty(t.prototype, 'elementRef', {
          get: function() {
            return new Fs(
              tv(this._parentView, this._def.nodeIndex).renderElement
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      );
    })(Fl);
    function Sg(e, t) {
      return new xg(e, t);
    }
    var xg = (function() {
      function e(e, t) {
        (this.view = e), (this.elDef = t);
      }
      return (
        (e.prototype.get = function(e, t) {
          void 0 === t && (t = Lr.THROW_IF_NOT_FOUND);
          var n = !!this.elDef && 0 != (33554432 & this.elDef.flags);
          return uv.resolveDep(
            this.view,
            this.elDef,
            n,
            { flags: 0, token: e, tokenKey: dv(e) },
            t
          );
        }),
        e
      );
    })();
    function Ag(e, t) {
      var n = e.def.nodes[t];
      if (1 & n.flags) {
        var r = tv(e, n.nodeIndex);
        return n.element.template ? r.template : r.renderElement;
      }
      if (2 & n.flags) return ev(e, n.nodeIndex).renderText;
      if (20240 & n.flags) return nv(e, n.nodeIndex).instance;
      throw new Error('Illegal state: read nodeValue for node index ' + t);
    }
    function jg(e) {
      return new Rg(e.renderer);
    }
    var Rg = (function() {
      function e(e) {
        this.delegate = e;
      }
      return (
        (e.prototype.selectRootElement = function(e) {
          return this.delegate.selectRootElement(e);
        }),
        (e.prototype.createElement = function(e, t) {
          var n = Object(r.f)(Hv(t), 2),
            o = n[0],
            i = n[1],
            u = this.delegate.createElement(i, o);
          return e && this.delegate.appendChild(e, u), u;
        }),
        (e.prototype.createViewRoot = function(e) {
          return e;
        }),
        (e.prototype.createTemplateAnchor = function(e) {
          var t = this.delegate.createComment('');
          return e && this.delegate.appendChild(e, t), t;
        }),
        (e.prototype.createText = function(e, t) {
          var n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }),
        (e.prototype.projectNodes = function(e, t) {
          for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }),
        (e.prototype.attachViewAfter = function(e, t) {
          for (
            var n = this.delegate.parentNode(e),
              r = this.delegate.nextSibling(e),
              o = 0;
            o < t.length;
            o++
          )
            this.delegate.insertBefore(n, t[o], r);
        }),
        (e.prototype.detachView = function(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }),
        (e.prototype.destroyView = function(e, t) {
          for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }),
        (e.prototype.listen = function(e, t, n) {
          return this.delegate.listen(e, t, n);
        }),
        (e.prototype.listenGlobal = function(e, t, n) {
          return this.delegate.listen(e, t, n);
        }),
        (e.prototype.setElementProperty = function(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }),
        (e.prototype.setElementAttribute = function(e, t, n) {
          var o = Object(r.f)(Hv(t), 2),
            i = o[0],
            u = o[1];
          null != n
            ? this.delegate.setAttribute(e, u, n, i)
            : this.delegate.removeAttribute(e, u, i);
        }),
        (e.prototype.setBindingDebugInfo = function(e, t, n) {}),
        (e.prototype.setElementClass = function(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }),
        (e.prototype.setElementStyle = function(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }),
        (e.prototype.invokeElementMethod = function(e, t, n) {
          e[t].apply(e, n);
        }),
        (e.prototype.setText = function(e, t) {
          this.delegate.setValue(e, t);
        }),
        (e.prototype.animate = function() {
          throw new Error('Renderer.animate is no longer supported!');
        }),
        e
      );
    })();
    function Ig(e, t, n, r) {
      return new Tg(e, t, n, r);
    }
    var Tg = (function() {
        function e(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(e) {
              for (
                var t = e._def,
                  n = (e._providers = new Array(t.providers.length)),
                  r = 0;
                r < t.providers.length;
                r++
              ) {
                var o = t.providers[r];
                4096 & o.flags || (void 0 === n[r] && (n[r] = sg(e, o)));
              }
            })(this);
        }
        return (
          (e.prototype.get = function(e, t, n) {
            void 0 === t && (t = Lr.THROW_IF_NOT_FOUND),
              void 0 === n && (n = Te.Default);
            var r = 0;
            return (
              n & Te.SkipSelf ? (r |= 1) : n & Te.Self && (r |= 4),
              ag(this, { token: e, tokenKey: dv(e), flags: r }, t)
            );
          }),
          Object.defineProperty(e.prototype, 'instance', {
            get: function() {
              return this.get(this._moduleType);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'componentFactoryResolver', {
            get: function() {
              return this.get(ks);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.destroy = function() {
            if (this._destroyed)
              throw new Error(
                'The ng module ' +
                  ce(this.instance.constructor) +
                  ' has already been destroyed.'
              );
            (this._destroyed = !0),
              (function(e, t) {
                for (
                  var n = e._def, r = new Set(), o = 0;
                  o < n.providers.length;
                  o++
                )
                  if (131072 & n.providers[o].flags) {
                    var i = e._providers[o];
                    if (i && i !== tg) {
                      var u = i.ngOnDestroy;
                      'function' != typeof u ||
                        r.has(i) ||
                        (u.apply(i), r.add(i));
                    }
                  }
              })(this),
              this._destroyListeners.forEach(function(e) {
                return e();
              });
          }),
          (e.prototype.onDestroy = function(e) {
            this._destroyListeners.push(e);
          }),
          e
        );
      })(),
      kg = dv(Us),
      Mg = dv(Zs),
      Pg = dv(Fs),
      Fg = dv(lh),
      Ng = dv(Fl),
      Vg = dv(ph),
      Lg = dv(Lr),
      Bg = dv(Nr);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Ug(e, t, n, o, i, u, a, s) {
      var c = [];
      if (a)
        for (var l in a) {
          var f = Object(r.f)(a[l], 2),
            d = f[0],
            p = f[1];
          c[d] = {
            flags: 8,
            name: l,
            nonMinifiedName: p,
            ns: null,
            securityContext: null,
            suffix: null
          };
        }
      var h = [];
      if (s)
        for (var v in s)
          h.push({ type: 1, propName: v, target: null, eventName: s[v] });
      return Gg(e, (t |= 16384), n, o, i, i, u, c, h);
    }
    function Hg(e, t, n) {
      return Gg(-1, (e |= 16), null, 0, t, t, n);
    }
    function zg(e, t, n, r, o) {
      return Gg(-1, e, t, 0, n, r, o);
    }
    function Gg(e, t, n, r, o, i, u, a, s) {
      var c = Iv(n),
        l = c.matchedQueries,
        f = c.references,
        d = c.matchedQueryIds;
      s || (s = []), a || (a = []), (i = kr(i));
      var p = Tv(u, ce(o));
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: t,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: l,
        matchedQueryIds: d,
        references: f,
        ngContentIndex: -1,
        childCount: r,
        bindings: a,
        bindingFlags: zv(a),
        outputs: s,
        element: null,
        provider: { token: o, value: i, deps: p },
        text: null,
        query: null,
        ngContent: null
      };
    }
    function Zg(e, t) {
      return Kg(e, t);
    }
    function qg(e, t) {
      for (var n = e; n.parent && !Av(n); ) n = n.parent;
      return Yg(n.parent, Ov(n), !0, t.provider.value, t.provider.deps);
    }
    function Wg(e, t) {
      var n = (32768 & t.flags) > 0,
        r = Yg(e, t.parent, n, t.provider.value, t.provider.deps);
      if (t.outputs.length)
        for (var o = 0; o < t.outputs.length; o++) {
          var i = t.outputs[o],
            u = r[i.propName];
          if (!ep(u))
            throw new Error(
              '@Output ' +
                i.propName +
                " not initialized in '" +
                r.constructor.name +
                "'."
            );
          var a = u.subscribe(Qg(e, t.parent.nodeIndex, i.eventName));
          e.disposables[t.outputIndex + o] = a.unsubscribe.bind(a);
        }
      return r;
    }
    function Qg(e, t, n) {
      return function(r) {
        return Dv(e, t, n, r);
      };
    }
    function Kg(e, t) {
      var n = (8192 & t.flags) > 0,
        o = t.provider;
      switch (201347067 & t.flags) {
        case 512:
          return Yg(e, t.parent, n, o.value, o.deps);
        case 1024:
          return (function(e, t, n, o, i) {
            var u = i.length;
            switch (u) {
              case 0:
                return o();
              case 1:
                return o(Jg(e, t, n, i[0]));
              case 2:
                return o(Jg(e, t, n, i[0]), Jg(e, t, n, i[1]));
              case 3:
                return o(
                  Jg(e, t, n, i[0]),
                  Jg(e, t, n, i[1]),
                  Jg(e, t, n, i[2])
                );
              default:
                for (var a = Array(u), s = 0; s < u; s++)
                  a[s] = Jg(e, t, n, i[s]);
                return o.apply(void 0, Object(r.g)(a));
            }
          })(e, t.parent, n, o.value, o.deps);
        case 2048:
          return Jg(e, t.parent, n, o.deps[0]);
        case 256:
          return o.value;
      }
    }
    function Yg(e, t, n, o, i) {
      var u = i.length;
      switch (u) {
        case 0:
          return new o();
        case 1:
          return new o(Jg(e, t, n, i[0]));
        case 2:
          return new o(Jg(e, t, n, i[0]), Jg(e, t, n, i[1]));
        case 3:
          return new o(Jg(e, t, n, i[0]), Jg(e, t, n, i[1]), Jg(e, t, n, i[2]));
        default:
          for (var a = new Array(u), s = 0; s < u; s++)
            a[s] = Jg(e, t, n, i[s]);
          return new (o.bind.apply(o, Object(r.g)([void 0], a)))();
      }
    }
    var $g = {};
    function Jg(e, t, n, r, o) {
      if ((void 0 === o && (o = Lr.THROW_IF_NOT_FOUND), 8 & r.flags))
        return r.token;
      var i = e;
      2 & r.flags && (o = null);
      var u = r.tokenKey;
      u === Vg && (n = !(!t || !t.element.componentView)),
        t && 1 & r.flags && ((n = !1), (t = t.parent));
      for (var a = e; a; ) {
        if (t)
          switch (u) {
            case kg:
              return jg(Xg(a, t, n));
            case Mg:
              return Xg(a, t, n).renderer;
            case Pg:
              return new Fs(tv(a, t.nodeIndex).renderElement);
            case Fg:
              return tv(a, t.nodeIndex).viewContainer;
            case Ng:
              if (t.element.template) return tv(a, t.nodeIndex).template;
              break;
            case Vg:
              return Cg(Xg(a, t, n));
            case Lg:
            case Bg:
              return Sg(a, t);
            default:
              var s = (n ? t.element.allProviders : t.element.publicProviders)[
                u
              ];
              if (s) {
                var c = nv(a, s.nodeIndex);
                return (
                  c ||
                    ((c = { instance: Kg(a, s) }), (a.nodes[s.nodeIndex] = c)),
                  c.instance
                );
              }
          }
        (n = Av(a)), (t = Ov(a)), (a = a.parent), 4 & r.flags && (a = null);
      }
      var l = i.root.injector.get(r.token, $g);
      return l !== $g || o === $g
        ? l
        : i.root.ngModule.injector.get(r.token, o);
    }
    function Xg(e, t, n) {
      var r;
      if (n) r = tv(e, t.nodeIndex).componentView;
      else for (r = e; r.parent && !Av(r); ) r = r.parent;
      return r;
    }
    function ey(e, t, n, r, o, i) {
      if (32768 & n.flags) {
        var u = tv(e, n.parent.nodeIndex).componentView;
        2 & u.def.flags && (u.state |= 8);
      }
      var a = n.bindings[r].name;
      if (((t.instance[a] = o), 524288 & n.flags)) {
        i = i || {};
        var s = jt.unwrap(e.oldValues[n.bindingIndex + r]);
        i[n.bindings[r].nonMinifiedName] = new Rt(s, o, 0 != (2 & e.state));
      }
      return (e.oldValues[n.bindingIndex + r] = o), i;
    }
    function ty(e, t) {
      if (e.def.nodeFlags & t)
        for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
          var i = n[o],
            u = i.parent;
          for (
            !u && i.flags & t && ry(e, o, i.flags & t, r++),
              0 == (i.childFlags & t) && (o += i.childCount);
            u && 1 & u.flags && o === u.nodeIndex + u.childCount;

          )
            u.directChildFlags & t && (r = ny(e, u, t, r)), (u = u.parent);
        }
    }
    function ny(e, t, n, r) {
      for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
        var i = e.def.nodes[o];
        i.flags & n && ry(e, o, i.flags & n, r++), (o += i.childCount);
      }
      return r;
    }
    function ry(e, t, n, r) {
      var o = nv(e, t);
      if (o) {
        var i = o.instance;
        i &&
          (uv.setCurrentNode(e, t),
          1048576 & n && Xh(e, 512, r) && i.ngAfterContentInit(),
          2097152 & n && i.ngAfterContentChecked(),
          4194304 & n && Xh(e, 768, r) && i.ngAfterViewInit(),
          8388608 & n && i.ngAfterViewChecked(),
          131072 & n && i.ngOnDestroy());
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function oy(e, t, n) {
      var r = [];
      for (var o in n) {
        var i = n[o];
        r.push({ propName: o, bindingType: i });
      }
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: -1,
        flags: e,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        ngContentIndex: -1,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: { id: t, filterId: Rv(t), bindings: r },
        ngContent: null
      };
    }
    function iy(e) {
      for (var t = e.def.nodeMatchedQueries; e.parent && jv(e); ) {
        var n = e.parentNodeDef;
        e = e.parent;
        for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) {
          67108864 & (i = e.def.nodes[o]).flags &&
            536870912 & i.flags &&
            (i.query.filterId & t) === i.query.filterId &&
            ov(e, o).setDirty(),
            (!(1 & i.flags && o + i.childCount < n.nodeIndex) &&
              67108864 & i.childFlags &&
              536870912 & i.childFlags) ||
              (o += i.childCount);
        }
      }
      if (134217728 & e.def.nodeFlags)
        for (o = 0; o < e.def.nodes.length; o++) {
          var i;
          134217728 & (i = e.def.nodes[o]).flags &&
            536870912 & i.flags &&
            ov(e, o).setDirty(),
            (o += i.childCount);
        }
    }
    function uy(e, t) {
      var n = ov(e, t.nodeIndex);
      if (n.dirty) {
        var r,
          o = void 0;
        if (67108864 & t.flags) {
          var i = t.parent.parent;
          (o = ay(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, [])),
            (r = nv(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((o = ay(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(o);
        for (var u = t.query.bindings, a = !1, s = 0; s < u.length; s++) {
          var c = u[s],
            l = void 0;
          switch (c.bindingType) {
            case 0:
              l = n.first;
              break;
            case 1:
              (l = n), (a = !0);
          }
          r[c.propName] = l;
        }
        a && n.notifyOnChanges();
      }
    }
    function ay(e, t, n, r, o) {
      for (var i = t; i <= n; i++) {
        var u = e.def.nodes[i],
          a = u.matchedQueries[r.id];
        if (
          (null != a && o.push(sy(e, u, a)),
          1 & u.flags &&
            u.element.template &&
            (u.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
        ) {
          var s = tv(e, i);
          if (
            ((u.childMatchedQueries & r.filterId) === r.filterId &&
              (ay(e, i + 1, i + u.childCount, r, o), (i += u.childCount)),
            16777216 & u.flags)
          )
            for (
              var c = s.viewContainer._embeddedViews, l = 0;
              l < c.length;
              l++
            ) {
              var f = c[l],
                d = Ev(f);
              d && d === s && ay(f, 0, f.def.nodes.length - 1, r, o);
            }
          var p = s.template._projectedViews;
          if (p)
            for (l = 0; l < p.length; l++) {
              var h = p[l];
              ay(h, 0, h.def.nodes.length - 1, r, o);
            }
        }
        (u.childMatchedQueries & r.filterId) !== r.filterId &&
          (i += u.childCount);
      }
      return o;
    }
    function sy(e, t, n) {
      if (null != n)
        switch (n) {
          case 1:
            return tv(e, t.nodeIndex).renderElement;
          case 0:
            return new Fs(tv(e, t.nodeIndex).renderElement);
          case 2:
            return tv(e, t.nodeIndex).template;
          case 3:
            return tv(e, t.nodeIndex).viewContainer;
          case 4:
            return nv(e, t.nodeIndex).instance;
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function cy(e, t) {
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: -1,
        flags: 8,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: e,
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: { index: t }
      };
    }
    function ly(e, t, n) {
      var r = kv(e, t, n);
      r && Vv(e, n.ngContent.index, 1, r, null, void 0);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function fy(e, t) {
      return hy(128, e, new Array(t + 1));
    }
    function dy(e, t) {
      return hy(32, e, new Array(t));
    }
    function py(e, t) {
      for (
        var n = Object.keys(t), r = n.length, o = new Array(r), i = 0;
        i < r;
        i++
      ) {
        var u = n[i];
        o[t[u]] = u;
      }
      return hy(64, e, o);
    }
    function hy(e, t, n) {
      for (var r = new Array(n.length), o = 0; o < n.length; o++) {
        var i = n[o];
        r[o] = {
          flags: 8,
          name: i,
          ns: null,
          nonMinifiedName: i,
          securityContext: null,
          suffix: null
        };
      }
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: t,
        flags: e,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: -1,
        childCount: 0,
        bindings: r,
        bindingFlags: zv(r),
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: null
      };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function vy(e, t, n) {
      for (var r = new Array(n.length - 1), o = 1; o < n.length; o++)
        r[o - 1] = {
          flags: 8,
          name: null,
          ns: null,
          nonMinifiedName: null,
          securityContext: null,
          suffix: n[o]
        };
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: 2,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: t,
        childCount: 0,
        bindings: r,
        bindingFlags: 8,
        outputs: [],
        element: null,
        provider: null,
        text: { prefix: n[0] },
        query: null,
        ngContent: null
      };
    }
    function gy(e, t, n) {
      var r,
        o = e.renderer;
      r = o.createText(n.text.prefix);
      var i = kv(e, t, n);
      return i && o.appendChild(i, r), { renderText: r };
    }
    function yy(e, t) {
      return (null != e ? e.toString() : '') + t.suffix;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function my(e, t, n, r) {
      for (
        var o = 0,
          i = 0,
          u = 0,
          a = 0,
          s = 0,
          c = null,
          l = null,
          f = !1,
          d = !1,
          p = null,
          h = 0;
        h < t.length;
        h++
      ) {
        var v = t[h];
        if (
          ((v.nodeIndex = h),
          (v.parent = c),
          (v.bindingIndex = o),
          (v.outputIndex = i),
          (v.renderParent = l),
          (u |= v.flags),
          (s |= v.matchedQueryIds),
          v.element)
        ) {
          var g = v.element;
          (g.publicProviders = c
            ? c.element.publicProviders
            : Object.create(null)),
            (g.allProviders = g.publicProviders),
            (f = !1),
            (d = !1),
            v.element.template && (s |= v.element.template.nodeMatchedQueries);
        }
        if (
          (_y(c, v, t.length),
          (o += v.bindings.length),
          (i += v.outputs.length),
          !l && 3 & v.flags && (p = v),
          20224 & v.flags)
        ) {
          f ||
            ((f = !0),
            (c.element.publicProviders = Object.create(
              c.element.publicProviders
            )),
            (c.element.allProviders = c.element.publicProviders));
          var y = 0 != (8192 & v.flags),
            m = 0 != (32768 & v.flags);
          !y || m
            ? (c.element.publicProviders[dv(v.provider.token)] = v)
            : (d ||
                ((d = !0),
                (c.element.allProviders = Object.create(
                  c.element.publicProviders
                ))),
              (c.element.allProviders[dv(v.provider.token)] = v)),
            m && (c.element.componentProvider = v);
        }
        if (
          (c
            ? ((c.childFlags |= v.flags),
              (c.directChildFlags |= v.flags),
              (c.childMatchedQueries |= v.matchedQueryIds),
              v.element &&
                v.element.template &&
                (c.childMatchedQueries |=
                  v.element.template.nodeMatchedQueries))
            : (a |= v.flags),
          v.childCount > 0)
        )
          (c = v), by(v) || (l = v);
        else
          for (; c && h === c.nodeIndex + c.childCount; ) {
            var b = c.parent;
            b &&
              ((b.childFlags |= c.childFlags),
              (b.childMatchedQueries |= c.childMatchedQueries)),
              (l = (c = b) && by(c) ? c.renderParent : c);
          }
      }
      return {
        factory: null,
        nodeFlags: u,
        rootNodeFlags: a,
        nodeMatchedQueries: s,
        flags: e,
        nodes: t,
        updateDirectives: n || lv,
        updateRenderer: r || lv,
        handleEvent: function(e, n, r, o) {
          return t[n].element.handleEvent(e, r, o);
        },
        bindingCount: o,
        outputCount: i,
        lastRenderRootNode: p
      };
    }
    function by(e) {
      return 0 != (1 & e.flags) && null === e.element.name;
    }
    function _y(e, t, n) {
      var r = t.element && t.element.template;
      if (r) {
        if (!r.lastRenderRootNode)
          throw new Error(
            'Illegal State: Embedded templates without nodes are not allowed!'
          );
        if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
          throw new Error(
            "Illegal State: Last root node of a template can't have embedded views, at index " +
              t.nodeIndex +
              '!'
          );
      }
      if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
        throw new Error(
          'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ' +
            t.nodeIndex +
            '!'
        );
      if (t.query) {
        if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
          throw new Error(
            'Illegal State: Content Query nodes need to be children of directives, at index ' +
              t.nodeIndex +
              '!'
          );
        if (134217728 & t.flags && e)
          throw new Error(
            'Illegal State: View Query nodes have to be top level nodes, at index ' +
              t.nodeIndex +
              '!'
          );
      }
      if (t.childCount) {
        var o = e ? e.nodeIndex + e.childCount : n - 1;
        if (t.nodeIndex <= o && t.nodeIndex + t.childCount > o)
          throw new Error(
            'Illegal State: childCount of node leads outside of parent, at index ' +
              t.nodeIndex +
              '!'
          );
      }
    }
    function wy(e, t, n, r) {
      var o = Ey(e.root, e.renderer, e, t, n);
      return Oy(o, e.component, r), Sy(o), o;
    }
    function Cy(e, t, n) {
      var r = Ey(e, e.renderer, null, null, t);
      return Oy(r, n, n), Sy(r), r;
    }
    function Dy(e, t, n, r) {
      var o,
        i = t.element.componentRendererType;
      return (
        (o = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer),
        Ey(e.root, o, e, t.element.componentProvider, n)
      );
    }
    function Ey(e, t, n, r, o) {
      var i = new Array(o.nodes.length),
        u = o.outputCount ? new Array(o.outputCount) : null;
      return {
        def: o,
        parent: n,
        viewContainerParent: null,
        parentNodeDef: r,
        context: null,
        component: null,
        nodes: i,
        state: 13,
        root: e,
        renderer: t,
        oldValues: new Array(o.bindingCount),
        disposables: u,
        initIndex: -1
      };
    }
    function Oy(e, t, n) {
      (e.component = t), (e.context = n);
    }
    function Sy(e) {
      var t;
      if (Av(e)) {
        var n = e.parentNodeDef;
        t = tv(e.parent, n.parent.nodeIndex).renderElement;
      }
      for (var r = e.def, o = e.nodes, i = 0; i < r.nodes.length; i++) {
        var u = r.nodes[i];
        uv.setCurrentNode(e, i);
        var a = void 0;
        switch (201347067 & u.flags) {
          case 1:
            var s = $v(e, t, u),
              c = void 0;
            if (33554432 & u.flags) {
              var l = Pv(u.element.componentView);
              c = uv.createComponentView(e, u, l, s);
            }
            Jv(e, c, u, s),
              (a = {
                renderElement: s,
                componentView: c,
                viewContainer: null,
                template: u.element.template ? Eg(e, u) : void 0
              }),
              16777216 & u.flags && (a.viewContainer = _g(e, u, a));
            break;
          case 2:
            a = gy(e, t, u);
            break;
          case 512:
          case 1024:
          case 2048:
          case 256:
            if (!((a = o[i]) || 4096 & u.flags)) a = { instance: Zg(e, u) };
            break;
          case 16:
            a = { instance: qg(e, u) };
            break;
          case 16384:
            if (!(a = o[i])) a = { instance: Wg(e, u) };
            if (32768 & u.flags)
              Oy(
                tv(e, u.parent.nodeIndex).componentView,
                a.instance,
                a.instance
              );
            break;
          case 32:
          case 64:
          case 128:
            a = { value: void 0 };
            break;
          case 67108864:
          case 134217728:
            a = new ih();
            break;
          case 8:
            ly(e, t, u), (a = void 0);
        }
        o[i] = a;
      }
      Py(e, My.CreateViewNodes), Ly(e, 201326592, 268435456, 0);
    }
    function xy(e) {
      Ry(e),
        uv.updateDirectives(e, 1),
        Fy(e, My.CheckNoChanges),
        uv.updateRenderer(e, 1),
        Py(e, My.CheckNoChanges),
        (e.state &= -97);
    }
    function Ay(e) {
      1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
        Jh(e, 0, 256),
        Ry(e),
        uv.updateDirectives(e, 0),
        Fy(e, My.CheckAndUpdate),
        Ly(e, 67108864, 536870912, 0);
      var t = Jh(e, 256, 512);
      ty(e, 2097152 | (t ? 1048576 : 0)),
        uv.updateRenderer(e, 0),
        Py(e, My.CheckAndUpdate),
        Ly(e, 134217728, 536870912, 0),
        ty(e, 8388608 | ((t = Jh(e, 512, 768)) ? 4194304 : 0)),
        2 & e.def.flags && (e.state &= -9),
        (e.state &= -97),
        Jh(e, 768, 1024);
    }
    function jy(e, t, n, o, i, u, a, s, c, l, f, d, p) {
      return 0 === n
        ? (function(e, t, n, r, o, i, u, a, s, c, l, f) {
            switch (201347067 & t.flags) {
              case 1:
                return (function(e, t, n, r, o, i, u, a, s, c, l, f) {
                  var d = t.bindings.length,
                    p = !1;
                  return (
                    d > 0 && eg(e, t, 0, n) && (p = !0),
                    d > 1 && eg(e, t, 1, r) && (p = !0),
                    d > 2 && eg(e, t, 2, o) && (p = !0),
                    d > 3 && eg(e, t, 3, i) && (p = !0),
                    d > 4 && eg(e, t, 4, u) && (p = !0),
                    d > 5 && eg(e, t, 5, a) && (p = !0),
                    d > 6 && eg(e, t, 6, s) && (p = !0),
                    d > 7 && eg(e, t, 7, c) && (p = !0),
                    d > 8 && eg(e, t, 8, l) && (p = !0),
                    d > 9 && eg(e, t, 9, f) && (p = !0),
                    p
                  );
                })(e, t, n, r, o, i, u, a, s, c, l, f);
              case 2:
                return (function(e, t, n, r, o, i, u, a, s, c, l, f) {
                  var d = !1,
                    p = t.bindings,
                    h = p.length;
                  if (
                    (h > 0 && bv(e, t, 0, n) && (d = !0),
                    h > 1 && bv(e, t, 1, r) && (d = !0),
                    h > 2 && bv(e, t, 2, o) && (d = !0),
                    h > 3 && bv(e, t, 3, i) && (d = !0),
                    h > 4 && bv(e, t, 4, u) && (d = !0),
                    h > 5 && bv(e, t, 5, a) && (d = !0),
                    h > 6 && bv(e, t, 6, s) && (d = !0),
                    h > 7 && bv(e, t, 7, c) && (d = !0),
                    h > 8 && bv(e, t, 8, l) && (d = !0),
                    h > 9 && bv(e, t, 9, f) && (d = !0),
                    d)
                  ) {
                    var v = t.text.prefix;
                    h > 0 && (v += yy(n, p[0])),
                      h > 1 && (v += yy(r, p[1])),
                      h > 2 && (v += yy(o, p[2])),
                      h > 3 && (v += yy(i, p[3])),
                      h > 4 && (v += yy(u, p[4])),
                      h > 5 && (v += yy(a, p[5])),
                      h > 6 && (v += yy(s, p[6])),
                      h > 7 && (v += yy(c, p[7])),
                      h > 8 && (v += yy(l, p[8])),
                      h > 9 && (v += yy(f, p[9]));
                    var g = ev(e, t.nodeIndex).renderText;
                    e.renderer.setValue(g, v);
                  }
                  return d;
                })(e, t, n, r, o, i, u, a, s, c, l, f);
              case 16384:
                return (function(e, t, n, r, o, i, u, a, s, c, l, f) {
                  var d = nv(e, t.nodeIndex),
                    p = d.instance,
                    h = !1,
                    v = void 0,
                    g = t.bindings.length;
                  return (
                    g > 0 &&
                      mv(e, t, 0, n) &&
                      ((h = !0), (v = ey(e, d, t, 0, n, v))),
                    g > 1 &&
                      mv(e, t, 1, r) &&
                      ((h = !0), (v = ey(e, d, t, 1, r, v))),
                    g > 2 &&
                      mv(e, t, 2, o) &&
                      ((h = !0), (v = ey(e, d, t, 2, o, v))),
                    g > 3 &&
                      mv(e, t, 3, i) &&
                      ((h = !0), (v = ey(e, d, t, 3, i, v))),
                    g > 4 &&
                      mv(e, t, 4, u) &&
                      ((h = !0), (v = ey(e, d, t, 4, u, v))),
                    g > 5 &&
                      mv(e, t, 5, a) &&
                      ((h = !0), (v = ey(e, d, t, 5, a, v))),
                    g > 6 &&
                      mv(e, t, 6, s) &&
                      ((h = !0), (v = ey(e, d, t, 6, s, v))),
                    g > 7 &&
                      mv(e, t, 7, c) &&
                      ((h = !0), (v = ey(e, d, t, 7, c, v))),
                    g > 8 &&
                      mv(e, t, 8, l) &&
                      ((h = !0), (v = ey(e, d, t, 8, l, v))),
                    g > 9 &&
                      mv(e, t, 9, f) &&
                      ((h = !0), (v = ey(e, d, t, 9, f, v))),
                    v && p.ngOnChanges(v),
                    65536 & t.flags && Xh(e, 256, t.nodeIndex) && p.ngOnInit(),
                    262144 & t.flags && p.ngDoCheck(),
                    h
                  );
                })(e, t, n, r, o, i, u, a, s, c, l, f);
              case 32:
              case 64:
              case 128:
                return (function(e, t, n, r, o, i, u, a, s, c, l, f) {
                  var d = t.bindings,
                    p = !1,
                    h = d.length;
                  if (
                    (h > 0 && bv(e, t, 0, n) && (p = !0),
                    h > 1 && bv(e, t, 1, r) && (p = !0),
                    h > 2 && bv(e, t, 2, o) && (p = !0),
                    h > 3 && bv(e, t, 3, i) && (p = !0),
                    h > 4 && bv(e, t, 4, u) && (p = !0),
                    h > 5 && bv(e, t, 5, a) && (p = !0),
                    h > 6 && bv(e, t, 6, s) && (p = !0),
                    h > 7 && bv(e, t, 7, c) && (p = !0),
                    h > 8 && bv(e, t, 8, l) && (p = !0),
                    h > 9 && bv(e, t, 9, f) && (p = !0),
                    p)
                  ) {
                    var v = rv(e, t.nodeIndex),
                      g = void 0;
                    switch (201347067 & t.flags) {
                      case 32:
                        (g = new Array(d.length)),
                          h > 0 && (g[0] = n),
                          h > 1 && (g[1] = r),
                          h > 2 && (g[2] = o),
                          h > 3 && (g[3] = i),
                          h > 4 && (g[4] = u),
                          h > 5 && (g[5] = a),
                          h > 6 && (g[6] = s),
                          h > 7 && (g[7] = c),
                          h > 8 && (g[8] = l),
                          h > 9 && (g[9] = f);
                        break;
                      case 64:
                        (g = {}),
                          h > 0 && (g[d[0].name] = n),
                          h > 1 && (g[d[1].name] = r),
                          h > 2 && (g[d[2].name] = o),
                          h > 3 && (g[d[3].name] = i),
                          h > 4 && (g[d[4].name] = u),
                          h > 5 && (g[d[5].name] = a),
                          h > 6 && (g[d[6].name] = s),
                          h > 7 && (g[d[7].name] = c),
                          h > 8 && (g[d[8].name] = l),
                          h > 9 && (g[d[9].name] = f);
                        break;
                      case 128:
                        var y = n;
                        switch (h) {
                          case 1:
                            g = y.transform(n);
                            break;
                          case 2:
                            g = y.transform(r);
                            break;
                          case 3:
                            g = y.transform(r, o);
                            break;
                          case 4:
                            g = y.transform(r, o, i);
                            break;
                          case 5:
                            g = y.transform(r, o, i, u);
                            break;
                          case 6:
                            g = y.transform(r, o, i, u, a);
                            break;
                          case 7:
                            g = y.transform(r, o, i, u, a, s);
                            break;
                          case 8:
                            g = y.transform(r, o, i, u, a, s, c);
                            break;
                          case 9:
                            g = y.transform(r, o, i, u, a, s, c, l);
                            break;
                          case 10:
                            g = y.transform(r, o, i, u, a, s, c, l, f);
                        }
                    }
                    v.value = g;
                  }
                  return p;
                })(e, t, n, r, o, i, u, a, s, c, l, f);
              default:
                throw 'unreachable';
            }
          })(e, t, o, i, u, a, s, c, l, f, d, p)
        : (function(e, t, n) {
            switch (201347067 & t.flags) {
              case 1:
                return (function(e, t, n) {
                  for (var r = !1, o = 0; o < n.length; o++)
                    eg(e, t, o, n[o]) && (r = !0);
                  return r;
                })(e, t, n);
              case 2:
                return (function(e, t, n) {
                  for (var r = t.bindings, o = !1, i = 0; i < n.length; i++)
                    bv(e, t, i, n[i]) && (o = !0);
                  if (o) {
                    var u = '';
                    for (i = 0; i < n.length; i++) u += yy(n[i], r[i]);
                    u = t.text.prefix + u;
                    var a = ev(e, t.nodeIndex).renderText;
                    e.renderer.setValue(a, u);
                  }
                  return o;
                })(e, t, n);
              case 16384:
                return (function(e, t, n) {
                  for (
                    var r = nv(e, t.nodeIndex),
                      o = r.instance,
                      i = !1,
                      u = void 0,
                      a = 0;
                    a < n.length;
                    a++
                  )
                    mv(e, t, a, n[a]) &&
                      ((i = !0), (u = ey(e, r, t, a, n[a], u)));
                  return (
                    u && o.ngOnChanges(u),
                    65536 & t.flags && Xh(e, 256, t.nodeIndex) && o.ngOnInit(),
                    262144 & t.flags && o.ngDoCheck(),
                    i
                  );
                })(e, t, n);
              case 32:
              case 64:
              case 128:
                return (function(e, t, n) {
                  for (var o = t.bindings, i = !1, u = 0; u < n.length; u++)
                    bv(e, t, u, n[u]) && (i = !0);
                  if (i) {
                    var a = rv(e, t.nodeIndex),
                      s = void 0;
                    switch (201347067 & t.flags) {
                      case 32:
                        s = n;
                        break;
                      case 64:
                        for (s = {}, u = 0; u < n.length; u++)
                          s[o[u].name] = n[u];
                        break;
                      case 128:
                        var c = n[0],
                          l = n.slice(1);
                        s = c.transform.apply(c, Object(r.g)(l));
                    }
                    a.value = s;
                  }
                  return i;
                })(e, t, n);
              default:
                throw 'unreachable';
            }
          })(e, t, o);
    }
    function Ry(e) {
      var t = e.def;
      if (4 & t.nodeFlags)
        for (var n = 0; n < t.nodes.length; n++) {
          var r = t.nodes[n];
          if (4 & r.flags) {
            var o = tv(e, n).template._projectedViews;
            if (o)
              for (var i = 0; i < o.length; i++) {
                var u = o[i];
                (u.state |= 32), Cv(u, e);
              }
          } else 0 == (4 & r.childFlags) && (n += r.childCount);
        }
    }
    function Iy(e, t, n, r, o, i, u, a, s, c, l, f, d) {
      return (
        0 === n
          ? (function(e, t, n, r, o, i, u, a, s, c, l, f) {
              var d = t.bindings.length;
              d > 0 && _v(e, t, 0, n);
              d > 1 && _v(e, t, 1, r);
              d > 2 && _v(e, t, 2, o);
              d > 3 && _v(e, t, 3, i);
              d > 4 && _v(e, t, 4, u);
              d > 5 && _v(e, t, 5, a);
              d > 6 && _v(e, t, 6, s);
              d > 7 && _v(e, t, 7, c);
              d > 8 && _v(e, t, 8, l);
              d > 9 && _v(e, t, 9, f);
            })(e, t, r, o, i, u, a, s, c, l, f, d)
          : (function(e, t, n) {
              for (var r = 0; r < n.length; r++) _v(e, t, r, n[r]);
            })(e, t, r),
        !1
      );
    }
    function Ty(e, t) {
      if (ov(e, t.nodeIndex).dirty)
        throw av(
          uv.createDebugContext(e, t.nodeIndex),
          'Query ' + t.query.id + ' not dirty',
          'Query ' + t.query.id + ' dirty',
          0 != (1 & e.state)
        );
    }
    function ky(e) {
      if (!(128 & e.state)) {
        if (
          (Fy(e, My.Destroy), Py(e, My.Destroy), ty(e, 131072), e.disposables)
        )
          for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
        !(function(e) {
          if (16 & e.state) {
            var t = Ev(e);
            if (t) {
              var n = t.template._projectedViews;
              n && (hg(n, n.indexOf(e)), uv.dirtyParentQueries(e));
            }
          }
        })(e),
          e.renderer.destroyNode &&
            (function(e) {
              for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                var r = e.def.nodes[n];
                1 & r.flags
                  ? e.renderer.destroyNode(tv(e, n).renderElement)
                  : 2 & r.flags
                  ? e.renderer.destroyNode(ev(e, n).renderText)
                  : (67108864 & r.flags || 134217728 & r.flags) &&
                    ov(e, n).destroy();
              }
            })(e),
          Av(e) && e.renderer.destroy(),
          (e.state |= 128);
      }
    }
    var My = (function(e) {
      return (
        (e[(e.CreateViewNodes = 0)] = 'CreateViewNodes'),
        (e[(e.CheckNoChanges = 1)] = 'CheckNoChanges'),
        (e[(e.CheckNoChangesProjectedViews = 2)] =
          'CheckNoChangesProjectedViews'),
        (e[(e.CheckAndUpdate = 3)] = 'CheckAndUpdate'),
        (e[(e.CheckAndUpdateProjectedViews = 4)] =
          'CheckAndUpdateProjectedViews'),
        (e[(e.Destroy = 5)] = 'Destroy'),
        e
      );
    })({});
    function Py(e, t) {
      var n = e.def;
      if (33554432 & n.nodeFlags)
        for (var r = 0; r < n.nodes.length; r++) {
          var o = n.nodes[r];
          33554432 & o.flags
            ? Ny(tv(e, r).componentView, t)
            : 0 == (33554432 & o.childFlags) && (r += o.childCount);
        }
    }
    function Fy(e, t) {
      var n = e.def;
      if (16777216 & n.nodeFlags)
        for (var r = 0; r < n.nodes.length; r++) {
          var o = n.nodes[r];
          if (16777216 & o.flags)
            for (
              var i = tv(e, r).viewContainer._embeddedViews, u = 0;
              u < i.length;
              u++
            )
              Ny(i[u], t);
          else 0 == (16777216 & o.childFlags) && (r += o.childCount);
        }
    }
    function Ny(e, t) {
      var n = e.state;
      switch (t) {
        case My.CheckNoChanges:
          0 == (128 & n) &&
            (12 == (12 & n)
              ? xy(e)
              : 64 & n && Vy(e, My.CheckNoChangesProjectedViews));
          break;
        case My.CheckNoChangesProjectedViews:
          0 == (128 & n) && (32 & n ? xy(e) : 64 & n && Vy(e, t));
          break;
        case My.CheckAndUpdate:
          0 == (128 & n) &&
            (12 == (12 & n)
              ? Ay(e)
              : 64 & n && Vy(e, My.CheckAndUpdateProjectedViews));
          break;
        case My.CheckAndUpdateProjectedViews:
          0 == (128 & n) && (32 & n ? Ay(e) : 64 & n && Vy(e, t));
          break;
        case My.Destroy:
          ky(e);
          break;
        case My.CreateViewNodes:
          Sy(e);
      }
    }
    function Vy(e, t) {
      Fy(e, t), Py(e, t);
    }
    function Ly(e, t, n, r) {
      if (e.def.nodeFlags & t && e.def.nodeFlags & n)
        for (var o = e.def.nodes.length, i = 0; i < o; i++) {
          var u = e.def.nodes[i];
          if (u.flags & t && u.flags & n)
            switch ((uv.setCurrentNode(e, u.nodeIndex), r)) {
              case 0:
                uy(e, u);
                break;
              case 1:
                Ty(e, u);
            }
          (u.childFlags & t && u.childFlags & n) || (i += u.childCount);
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var By = !1;
    function Uy() {
      if (!By) {
        By = !0;
        var e = uc()
          ? {
              setCurrentNode: lm,
              createRootView: zy,
              createEmbeddedView: Zy,
              createComponentView: qy,
              createNgModuleRef: Wy,
              overrideProvider: $y,
              overrideComponentView: Jy,
              clearOverrides: Xy,
              checkAndUpdateView: rm,
              checkNoChangesView: om,
              destroyView: im,
              createDebugContext: function(e, t) {
                return new wm(e, t);
              },
              handleEvent: fm,
              updateDirectives: dm,
              updateRenderer: pm
            }
          : {
              setCurrentNode: function() {},
              createRootView: Hy,
              createEmbeddedView: wy,
              createComponentView: Dy,
              createNgModuleRef: Ig,
              overrideProvider: lv,
              overrideComponentView: lv,
              clearOverrides: lv,
              checkAndUpdateView: Ay,
              checkNoChangesView: xy,
              destroyView: ky,
              createDebugContext: function(e, t) {
                return new wm(e, t);
              },
              handleEvent: function(e, t, n, r) {
                return e.def.handleEvent(e, t, n, r);
              },
              updateDirectives: function(e, t) {
                return e.def.updateDirectives(0 === t ? tm : nm, e);
              },
              updateRenderer: function(e, t) {
                return e.def.updateRenderer(0 === t ? tm : nm, e);
              }
            };
        (uv.setCurrentNode = e.setCurrentNode),
          (uv.createRootView = e.createRootView),
          (uv.createEmbeddedView = e.createEmbeddedView),
          (uv.createComponentView = e.createComponentView),
          (uv.createNgModuleRef = e.createNgModuleRef),
          (uv.overrideProvider = e.overrideProvider),
          (uv.overrideComponentView = e.overrideComponentView),
          (uv.clearOverrides = e.clearOverrides),
          (uv.checkAndUpdateView = e.checkAndUpdateView),
          (uv.checkNoChangesView = e.checkNoChangesView),
          (uv.destroyView = e.destroyView),
          (uv.resolveDep = Jg),
          (uv.createDebugContext = e.createDebugContext),
          (uv.handleEvent = e.handleEvent),
          (uv.updateDirectives = e.updateDirectives),
          (uv.updateRenderer = e.updateRenderer),
          (uv.dirtyParentQueries = iy);
      }
    }
    function Hy(e, t, n, r, o, i) {
      return Cy(Gy(e, o, o.injector.get(zs), t, n), r, i);
    }
    function zy(e, t, n, r, o, i) {
      var u = o.injector.get(zs),
        a = Gy(e, o, new Om(u), t, n),
        s = em(r);
      return Dm(cm.create, Cy, null, [a, s, i]);
    }
    function Gy(e, t, n, r, o) {
      var i = t.injector.get(df),
        u = t.injector.get(Id);
      return {
        ngModule: t,
        injector: e,
        projectableNodes: r,
        selectorOrNode: o,
        sanitizer: i,
        rendererFactory: n,
        renderer: n.createRenderer(null, null),
        errorHandler: u
      };
    }
    function Zy(e, t, n, r) {
      var o = em(n);
      return Dm(cm.create, wy, null, [e, t, o, r]);
    }
    function qy(e, t, n, r) {
      var o = Yy.get(t.element.componentProvider.provider.token);
      return (n = o || em(n)), Dm(cm.create, Dy, null, [e, t, n, r]);
    }
    function Wy(e, t, n, r) {
      return Ig(
        e,
        t,
        n,
        (function(e) {
          var t = (function(e) {
              var t = !1,
                n = !1;
              if (0 === Qy.size)
                return { hasOverrides: t, hasDeprecatedOverrides: n };
              return (
                e.providers.forEach(function(e) {
                  var r = Qy.get(e.token);
                  3840 & e.flags &&
                    r &&
                    ((t = !0), (n = n || r.deprecatedBehavior));
                }),
                e.modules.forEach(function(e) {
                  Ky.forEach(function(r, o) {
                    R(o).providedIn === e &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  });
                }),
                { hasOverrides: t, hasDeprecatedOverrides: n }
              );
            })(e),
            n = t.hasOverrides,
            r = t.hasDeprecatedOverrides;
          if (!n) return e;
          return (
            (function(e) {
              for (var t = 0; t < e.providers.length; t++) {
                var n = e.providers[t];
                r && (n.flags |= 4096);
                var o = Qy.get(n.token);
                o &&
                  ((n.flags = (-3841 & n.flags) | o.flags),
                  (n.deps = Tv(o.deps)),
                  (n.value = o.value));
              }
              if (Ky.size > 0) {
                var i = new Set(e.modules);
                Ky.forEach(function(t, n) {
                  if (i.has(R(n).providedIn)) {
                    var o = {
                      token: n,
                      flags: t.flags | (r ? 4096 : 0),
                      deps: Tv(t.deps),
                      value: t.value,
                      index: e.providers.length
                    };
                    e.providers.push(o), (e.providersByKey[dv(n)] = o);
                  }
                });
              }
            })(
              (e = e.factory(function() {
                return lv;
              }))
            ),
            e
          );
        })(r)
      );
    }
    var Qy = new Map(),
      Ky = new Map(),
      Yy = new Map();
    function $y(e) {
      var t;
      Qy.set(e.token, e),
        'function' == typeof e.token &&
          (t = R(e.token)) &&
          'function' == typeof t.providedIn &&
          Ky.set(e.token, e);
    }
    function Jy(e, t) {
      var n = Pv(Pv(yg(t)).nodes[0].element.componentView);
      Yy.set(e, n);
    }
    function Xy() {
      Qy.clear(), Ky.clear(), Yy.clear();
    }
    function em(e) {
      if (0 === Qy.size) return e;
      var t = (function(e) {
        for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
          var o = e.nodes[r];
          1 & o.flags && (n = o),
            n &&
              3840 & o.flags &&
              Qy.has(o.provider.token) &&
              (t.push(n.nodeIndex), (n = null));
        }
        return t;
      })(e);
      if (0 === t.length) return e;
      e = e.factory(function() {
        return lv;
      });
      for (var n = 0; n < t.length; n++) r(e, t[n]);
      return e;
      function r(e, t) {
        for (var n = t + 1; n < e.nodes.length; n++) {
          var r = e.nodes[n];
          if (1 & r.flags) return;
          if (3840 & r.flags) {
            var o = r.provider,
              i = Qy.get(o.token);
            i &&
              ((r.flags = (-3841 & r.flags) | i.flags),
              (o.deps = Tv(i.deps)),
              (o.value = i.value));
          }
        }
      }
    }
    function tm(e, t, n, r, o, i, u, a, s, c, l, f, d) {
      var p = e.def.nodes[t];
      return (
        jy(e, p, n, r, o, i, u, a, s, c, l, f, d),
        224 & p.flags ? rv(e, t).value : void 0
      );
    }
    function nm(e, t, n, r, o, i, u, a, s, c, l, f, d) {
      var p = e.def.nodes[t];
      return (
        Iy(e, p, n, r, o, i, u, a, s, c, l, f, d),
        224 & p.flags ? rv(e, t).value : void 0
      );
    }
    function rm(e) {
      return Dm(cm.detectChanges, Ay, null, [e]);
    }
    function om(e) {
      return Dm(cm.checkNoChanges, xy, null, [e]);
    }
    function im(e) {
      return Dm(cm.destroy, ky, null, [e]);
    }
    var um,
      am,
      sm,
      cm = (function(e) {
        return (
          (e[(e.create = 0)] = 'create'),
          (e[(e.detectChanges = 1)] = 'detectChanges'),
          (e[(e.checkNoChanges = 2)] = 'checkNoChanges'),
          (e[(e.destroy = 3)] = 'destroy'),
          (e[(e.handleEvent = 4)] = 'handleEvent'),
          e
        );
      })({});
    function lm(e, t) {
      (am = e), (sm = t);
    }
    function fm(e, t, n, r) {
      return (
        lm(e, t), Dm(cm.handleEvent, e.def.handleEvent, null, [e, t, n, r])
      );
    }
    function dm(e, t) {
      if (128 & e.state) throw cv(cm[um]);
      return (
        lm(e, bm(e, 0)),
        e.def.updateDirectives(function(e, n, r) {
          for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i];
          var u = e.def.nodes[n];
          0 === t ? hm(e, u, r, o) : vm(e, u, r, o);
          16384 & u.flags && lm(e, bm(e, n));
          return 224 & u.flags ? rv(e, u.nodeIndex).value : void 0;
        }, e)
      );
    }
    function pm(e, t) {
      if (128 & e.state) throw cv(cm[um]);
      return (
        lm(e, _m(e, 0)),
        e.def.updateRenderer(function(e, n, r) {
          for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i];
          var u = e.def.nodes[n];
          0 === t ? hm(e, u, r, o) : vm(e, u, r, o);
          3 & u.flags && lm(e, _m(e, n));
          return 224 & u.flags ? rv(e, u.nodeIndex).value : void 0;
        }, e)
      );
    }
    function hm(e, t, n, o) {
      if (jy.apply(void 0, Object(r.g)([e, t, n], o))) {
        var i = 1 === n ? o[0] : o;
        if (16384 & t.flags) {
          for (var u = {}, a = 0; a < t.bindings.length; a++) {
            var s = t.bindings[a],
              c = i[a];
            8 & s.flags && (u[gm(s.nonMinifiedName)] = mm(c));
          }
          var l = t.parent,
            f = tv(e, l.nodeIndex).renderElement;
          if (l.element.name)
            for (var d in u) {
              null != (c = u[d])
                ? e.renderer.setAttribute(f, d, c)
                : e.renderer.removeAttribute(f, d);
            }
          else e.renderer.setValue(f, 'bindings=' + JSON.stringify(u, null, 2));
        }
      }
    }
    function vm(e, t, n, o) {
      Iy.apply(void 0, Object(r.g)([e, t, n], o));
    }
    function gm(e) {
      return (
        'ng-reflect-' +
        (e = (function(e) {
          return e.replace(ym, function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return '-' + e[1].toLowerCase();
          });
        })(e.replace(/[$@]/g, '_')))
      );
    }
    var ym = /([A-Z])/g;
    function mm(e) {
      try {
        return null != e ? e.toString().slice(0, 30) : e;
      } catch (e) {
        return '[ERROR] Exception while trying to serialize the value';
      }
    }
    function bm(e, t) {
      for (var n = t; n < e.def.nodes.length; n++) {
        var r = e.def.nodes[n];
        if (16384 & r.flags && r.bindings && r.bindings.length) return n;
      }
      return null;
    }
    function _m(e, t) {
      for (var n = t; n < e.def.nodes.length; n++) {
        var r = e.def.nodes[n];
        if (3 & r.flags && r.bindings && r.bindings.length) return n;
      }
      return null;
    }
    var wm = (function() {
      function e(e, t) {
        (this.view = e),
          (this.nodeIndex = t),
          null == t && (this.nodeIndex = t = 0),
          (this.nodeDef = e.def.nodes[t]);
        for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags); )
          n = n.parent;
        if (!n) for (; !n && r; ) (n = Ov(r)), (r = r.parent);
        (this.elDef = n), (this.elView = r);
      }
      return (
        Object.defineProperty(e.prototype, 'elOrCompView', {
          get: function() {
            return (
              tv(this.elView, this.elDef.nodeIndex).componentView || this.view
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'injector', {
          get: function() {
            return Sg(this.elView, this.elDef);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'component', {
          get: function() {
            return this.elOrCompView.component;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'context', {
          get: function() {
            return this.elOrCompView.context;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'providerTokens', {
          get: function() {
            var e = [];
            if (this.elDef)
              for (
                var t = this.elDef.nodeIndex + 1;
                t <= this.elDef.nodeIndex + this.elDef.childCount;
                t++
              ) {
                var n = this.elView.def.nodes[t];
                20224 & n.flags && e.push(n.provider.token),
                  (t += n.childCount);
              }
            return e;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'references', {
          get: function() {
            var e = {};
            if (this.elDef) {
              Cm(this.elView, this.elDef, e);
              for (
                var t = this.elDef.nodeIndex + 1;
                t <= this.elDef.nodeIndex + this.elDef.childCount;
                t++
              ) {
                var n = this.elView.def.nodes[t];
                20224 & n.flags && Cm(this.elView, n, e), (t += n.childCount);
              }
            }
            return e;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'componentRenderElement', {
          get: function() {
            var e = (function(e) {
              for (; e && !Av(e); ) e = e.parent;
              if (e.parent) return tv(e.parent, Ov(e).nodeIndex);
              return null;
            })(this.elOrCompView);
            return e ? e.renderElement : void 0;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'renderNode', {
          get: function() {
            return 2 & this.nodeDef.flags
              ? Sv(this.view, this.nodeDef)
              : Sv(this.elView, this.elDef);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.logError = function(e) {
          for (var t, n, o = [], i = 1; i < arguments.length; i++)
            o[i - 1] = arguments[i];
          2 & this.nodeDef.flags
            ? ((t = this.view.def), (n = this.nodeDef.nodeIndex))
            : ((t = this.elView.def), (n = this.elDef.nodeIndex));
          var u = (function(e, t) {
              for (var n = -1, r = 0; r <= t; r++) {
                var o = e.nodes[r];
                3 & o.flags && n++;
              }
              return n;
            })(t, n),
            a = -1;
          t.factory(function() {
            var t;
            return ++a === u
              ? (t = e.error).bind.apply(t, Object(r.g)([e], o))
              : lv;
          }),
            a < u &&
              (e.error(
                'Illegal state: the ViewDefinitionFactory did not call the logger!'
              ),
              e.error.apply(e, Object(r.g)(o)));
        }),
        e
      );
    })();
    function Cm(e, t, n) {
      for (var r in t.references) n[r] = sy(e, t, t.references[r]);
    }
    function Dm(e, t, n, r) {
      var o = um,
        i = am,
        u = sm;
      try {
        um = e;
        var a = t.apply(n, r);
        return (am = i), (sm = u), (um = o), a;
      } catch (e) {
        if (
          (function(e) {
            return !!Ad(e);
          })(e) ||
          !am
        )
          throw e;
        throw (function(e, t) {
          return (
            e instanceof Error || (e = new Error(e.toString())), sv(e, t), e
          );
        })(e, Em());
      }
    }
    function Em() {
      return am ? new wm(am, sm) : null;
    }
    var Om = (function() {
        function e(e) {
          this.delegate = e;
        }
        return (
          (e.prototype.createRenderer = function(e, t) {
            return new Sm(this.delegate.createRenderer(e, t));
          }),
          (e.prototype.begin = function() {
            this.delegate.begin && this.delegate.begin();
          }),
          (e.prototype.end = function() {
            this.delegate.end && this.delegate.end();
          }),
          (e.prototype.whenRenderingDone = function() {
            return this.delegate.whenRenderingDone
              ? this.delegate.whenRenderingDone()
              : Promise.resolve(null);
          }),
          e
        );
      })(),
      Sm = (function() {
        function e(e) {
          (this.delegate = e),
            (this.debugContextFactory = Em),
            (this.data = this.delegate.data);
        }
        return (
          (e.prototype.createDebugContext = function(e) {
            return this.debugContextFactory(e);
          }),
          (e.prototype.destroyNode = function(e) {
            !(function(e) {
              Ch.delete(e.nativeNode);
            })(Dh(e)),
              this.delegate.destroyNode && this.delegate.destroyNode(e);
          }),
          (e.prototype.destroy = function() {
            this.delegate.destroy();
          }),
          (e.prototype.createElement = function(e, t) {
            var n = this.delegate.createElement(e, t),
              r = this.createDebugContext(n);
            if (r) {
              var o = new _h(n, null, r);
              (o.name = e), Eh(o);
            }
            return n;
          }),
          (e.prototype.createComment = function(e) {
            var t = this.delegate.createComment(e),
              n = this.createDebugContext(t);
            return n && Eh(new bh(t, null, n)), t;
          }),
          (e.prototype.createText = function(e) {
            var t = this.delegate.createText(e),
              n = this.createDebugContext(t);
            return n && Eh(new bh(t, null, n)), t;
          }),
          (e.prototype.appendChild = function(e, t) {
            var n = Dh(e),
              r = Dh(t);
            n && r && n instanceof _h && n.addChild(r),
              this.delegate.appendChild(e, t);
          }),
          (e.prototype.insertBefore = function(e, t, n) {
            var r = Dh(e),
              o = Dh(t),
              i = Dh(n);
            r && o && r instanceof _h && r.insertBefore(i, o),
              this.delegate.insertBefore(e, t, n);
          }),
          (e.prototype.removeChild = function(e, t) {
            var n = Dh(e),
              r = Dh(t);
            n && r && n instanceof _h && n.removeChild(r),
              this.delegate.removeChild(e, t);
          }),
          (e.prototype.selectRootElement = function(e, t) {
            var n = this.delegate.selectRootElement(e, t),
              r = Em() || ($h ? this.createDebugContext(n) : null);
            return r && Eh(new _h(n, null, r)), n;
          }),
          (e.prototype.setAttribute = function(e, t, n, r) {
            var o = Dh(e);
            if (o && o instanceof _h) {
              var i = r ? r + ':' + t : t;
              o.attributes[i] = n;
            }
            this.delegate.setAttribute(e, t, n, r);
          }),
          (e.prototype.removeAttribute = function(e, t, n) {
            var r = Dh(e);
            if (r && r instanceof _h) {
              var o = n ? n + ':' + t : t;
              r.attributes[o] = null;
            }
            this.delegate.removeAttribute(e, t, n);
          }),
          (e.prototype.addClass = function(e, t) {
            var n = Dh(e);
            n && n instanceof _h && (n.classes[t] = !0),
              this.delegate.addClass(e, t);
          }),
          (e.prototype.removeClass = function(e, t) {
            var n = Dh(e);
            n && n instanceof _h && (n.classes[t] = !1),
              this.delegate.removeClass(e, t);
          }),
          (e.prototype.setStyle = function(e, t, n, r) {
            var o = Dh(e);
            o && o instanceof _h && (o.styles[t] = n),
              this.delegate.setStyle(e, t, n, r);
          }),
          (e.prototype.removeStyle = function(e, t, n) {
            var r = Dh(e);
            r && r instanceof _h && (r.styles[t] = null),
              this.delegate.removeStyle(e, t, n);
          }),
          (e.prototype.setProperty = function(e, t, n) {
            var r = Dh(e);
            r && r instanceof _h && (r.properties[t] = n),
              this.delegate.setProperty(e, t, n);
          }),
          (e.prototype.listen = function(e, t, n) {
            if ('string' != typeof e) {
              var r = Dh(e);
              r && r.listeners.push(new mh(t, n));
            }
            return this.delegate.listen(e, t, n);
          }),
          (e.prototype.parentNode = function(e) {
            return this.delegate.parentNode(e);
          }),
          (e.prototype.nextSibling = function(e) {
            return this.delegate.nextSibling(e);
          }),
          (e.prototype.setValue = function(e, t) {
            return this.delegate.setValue(e, t);
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function xm(e) {
      return Uy(), uv.overrideProvider(e);
    }
    function Am(e, t) {
      return Uy(), uv.overrideComponentView(e, t);
    }
    function jm() {
      return Uy(), uv.clearOverrides();
    }
    function Rm(e, t, n) {
      return new Im(e, t, n);
    }
    var Im = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o.moduleType = t),
            (o._bootstrapComponents = n),
            (o._ngModuleDefFactory = r),
            o
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.create = function(e) {
            Uy();
            var t = (function(e) {
              var t = Array.from(e.providers),
                n = Array.from(e.modules),
                r = {};
              for (var o in e.providersByKey) r[o] = e.providersByKey[o];
              return {
                factory: e.factory,
                isRoot: e.isRoot,
                providers: t,
                modules: n,
                providersByKey: r
              };
            })(Pv(this._ngModuleDefFactory));
            return uv.createNgModuleRef(
              this.moduleType,
              e || Lr.NULL,
              this._bootstrapComponents,
              t
            );
          }),
          t
        );
      })(ro),
      Tm = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.createRenderer = function(t, n) {
            var r = e.prototype.createRenderer.call(this, t, n);
            return (
              (r.debugContextFactory = function(e) {
                return new km(e);
              }),
              r
            );
          }),
          t
        );
      })(Om),
      km = (function() {
        function e(e) {
          this._nativeNode = e;
        }
        return (
          Object.defineProperty(e.prototype, 'nodeIndex', {
            get: function() {
              return Ba(this._nativeNode).nodeIndex;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'view', {
            get: function() {
              return Ba(this._nativeNode).lViewData;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return Va(this._nativeNode);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'component', {
            get: function() {
              return Ma(this._nativeNode);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'providerTokens', {
            get: function() {
              var e = Ba(this._nativeNode),
                t = e.lViewData[et].data[e.nodeIndex],
                n = 4095 & t.flags;
              if (n > 0) {
                var r = t.flags >> 16,
                  o = r + n;
                return this.view[et].data.slice(r, o).map(function(e) {
                  return e.type;
                });
              }
              return [];
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'references', {
            get: function() {
              return Ua(this._nativeNode);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'context', {
            get: function() {
              throw new Error('Not implemented in ivy');
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'componentRenderElement', {
            get: function() {
              throw new Error('Not implemented in ivy');
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'renderNode', {
            get: function() {
              throw new Error('Not implemented in ivy');
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.logError = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            e.error.apply(e, Object(r.g)(t));
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return l;
    });
    var r = n(0),
      o = n(20),
      i = n(30),
      u = n(4),
      a = n(21),
      s = n(7),
      c = n(16),
      l = (function(e) {
        function t(n, r, o) {
          var u = e.call(this) || this;
          switch (
            ((u.syncErrorValue = null),
            (u.syncErrorThrown = !1),
            (u.syncErrorThrowable = !1),
            (u.isStopped = !1),
            (u._parentSubscription = null),
            arguments.length)
          ) {
            case 0:
              u.destination = i.a;
              break;
            case 1:
              if (!n) {
                u.destination = i.a;
                break;
              }
              if ('object' == typeof n) {
                n instanceof t
                  ? ((u.syncErrorThrowable = n.syncErrorThrowable),
                    (u.destination = n),
                    n.add(u))
                  : ((u.syncErrorThrowable = !0),
                    (u.destination = new f(u, n)));
                break;
              }
            default:
              (u.syncErrorThrowable = !0), (u.destination = new f(u, n, r, o));
          }
          return u;
        }
        return (
          r.c(t, e),
          (t.prototype[a.a] = function() {
            return this;
          }),
          (t.create = function(e, n, r) {
            var o = new t(e, n, r);
            return (o.syncErrorThrowable = !1), o;
          }),
          (t.prototype.next = function(e) {
            this.isStopped || this._next(e);
          }),
          (t.prototype.error = function(e) {
            this.isStopped || ((this.isStopped = !0), this._error(e));
          }),
          (t.prototype.complete = function() {
            this.isStopped || ((this.isStopped = !0), this._complete());
          }),
          (t.prototype.unsubscribe = function() {
            this.closed ||
              ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
          }),
          (t.prototype._next = function(e) {
            this.destination.next(e);
          }),
          (t.prototype._error = function(e) {
            this.destination.error(e), this.unsubscribe();
          }),
          (t.prototype._complete = function() {
            this.destination.complete(), this.unsubscribe();
          }),
          (t.prototype._unsubscribeAndRecycle = function() {
            var e = this._parent,
              t = this._parents;
            return (
              (this._parent = null),
              (this._parents = null),
              this.unsubscribe(),
              (this.closed = !1),
              (this.isStopped = !1),
              (this._parent = e),
              (this._parents = t),
              (this._parentSubscription = null),
              this
            );
          }),
          t
        );
      })(u.a),
      f = (function(e) {
        function t(t, n, r, u) {
          var a,
            s = e.call(this) || this;
          s._parentSubscriber = t;
          var c = s;
          return (
            Object(o.a)(n)
              ? (a = n)
              : n &&
                ((a = n.next),
                (r = n.error),
                (u = n.complete),
                n !== i.a &&
                  ((c = Object.create(n)),
                  Object(o.a)(c.unsubscribe) && s.add(c.unsubscribe.bind(c)),
                  (c.unsubscribe = s.unsubscribe.bind(s)))),
            (s._context = c),
            (s._next = a),
            (s._error = r),
            (s._complete = u),
            s
          );
        }
        return (
          r.c(t, e),
          (t.prototype.next = function(e) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              s.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, e);
            }
          }),
          (t.prototype.error = function(e) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                n = s.a.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
              else if (t.syncErrorThrowable)
                n
                  ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                  : Object(c.a)(e),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw e;
                Object(c.a)(e);
              }
            }
          }),
          (t.prototype.complete = function() {
            var e = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var n = function() {
                  return e._complete.call(e._context);
                };
                s.a.useDeprecatedSynchronousErrorHandling &&
                t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function(e, t) {
            try {
              e.call(this._context, t);
            } catch (e) {
              if (
                (this.unsubscribe(), s.a.useDeprecatedSynchronousErrorHandling)
              )
                throw e;
              Object(c.a)(e);
            }
          }),
          (t.prototype.__tryOrSetError = function(e, t, n) {
            if (!s.a.useDeprecatedSynchronousErrorHandling)
              throw new Error('bad call');
            try {
              t.call(this._context, n);
            } catch (t) {
              return s.a.useDeprecatedSynchronousErrorHandling
                ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0), !0)
                : (Object(c.a)(t), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function() {
            var e = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              e.unsubscribe();
          }),
          t
        );
      })(l);
  },
  function(e, t, n) {
    'use strict';
    var r = n(2);
    var o = n(21),
      i = n(30);
    var u = n(13),
      a = n(32),
      s = n(7);
    n.d(t, 'a', function() {
      return c;
    });
    var c = (function() {
      function e(e) {
        (this._isScalar = !1), e && (this._subscribe = e);
      }
      return (
        (e.prototype.lift = function(t) {
          var n = new e();
          return (n.source = this), (n.operator = t), n;
        }),
        (e.prototype.subscribe = function(e, t, n) {
          var u = this.operator,
            a = (function(e, t, n) {
              if (e) {
                if (e instanceof r.a) return e;
                if (e[o.a]) return e[o.a]();
              }
              return e || t || n ? new r.a(e, t, n) : new r.a(i.a);
            })(e, t, n);
          if (
            (u
              ? u.call(a, this.source)
              : a.add(
                  this.source ||
                    (s.a.useDeprecatedSynchronousErrorHandling &&
                      !a.syncErrorThrowable)
                    ? this._subscribe(a)
                    : this._trySubscribe(a)
                ),
            s.a.useDeprecatedSynchronousErrorHandling &&
              a.syncErrorThrowable &&
              ((a.syncErrorThrowable = !1), a.syncErrorThrown))
          )
            throw a.syncErrorValue;
          return a;
        }),
        (e.prototype._trySubscribe = function(e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            s.a.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              !(function(e) {
                for (; e; ) {
                  var t = e,
                    n = t.closed,
                    o = t.destination,
                    i = t.isStopped;
                  if (n || i) return !1;
                  e = o && o instanceof r.a ? o : null;
                }
                return !0;
              })(e)
                ? console.warn(t)
                : e.error(t);
          }
        }),
        (e.prototype.forEach = function(e, t) {
          var n = this;
          return new (t = l(t))(function(t, r) {
            var o;
            o = n.subscribe(
              function(t) {
                try {
                  e(t);
                } catch (e) {
                  r(e), o && o.unsubscribe();
                }
              },
              r,
              t
            );
          });
        }),
        (e.prototype._subscribe = function(e) {
          var t = this.source;
          return t && t.subscribe(e);
        }),
        (e.prototype[u.a] = function() {
          return this;
        }),
        (e.prototype.pipe = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return 0 === e.length ? this : Object(a.b)(e)(this);
        }),
        (e.prototype.toPromise = function(e) {
          var t = this;
          return new (e = l(e))(function(e, n) {
            var r;
            t.subscribe(
              function(e) {
                return (r = e);
              },
              function(e) {
                return n(e);
              },
              function() {
                return e(r);
              }
            );
          });
        }),
        (e.create = function(t) {
          return new e(t);
        }),
        e
      );
    })();
    function l(e) {
      if ((e || (e = s.a.Promise || Promise), !e))
        throw new Error('no Promise impl found');
      return e;
    }
  },
  function(e, t, n) {
    'use strict';
    var r = n(34),
      o = n(35),
      i = n(20),
      u = n(29),
      a = n(6);
    function s(e) {
      return (
        Error.call(this),
        (this.message = e
          ? e.length +
            ' errors occurred during unsubscription:\n' +
            e
              .map(function(e, t) {
                return t + 1 + ') ' + e.toString();
              })
              .join('\n  ')
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = e),
        this
      );
    }
    s.prototype = Object.create(Error.prototype);
    var c = s;
    n.d(t, 'a', function() {
      return l;
    });
    var l = (function() {
      function e(e) {
        (this.closed = !1),
          (this._parent = null),
          (this._parents = null),
          (this._subscriptions = null),
          e && (this._unsubscribe = e);
      }
      return (
        (e.prototype.unsubscribe = function() {
          var e,
            t = !1;
          if (!this.closed) {
            var n = this._parent,
              s = this._parents,
              l = this._unsubscribe,
              d = this._subscriptions;
            (this.closed = !0),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null);
            for (var p = -1, h = s ? s.length : 0; n; )
              n.remove(this), (n = (++p < h && s[p]) || null);
            if (Object(i.a)(l))
              Object(u.a)(l).call(this) === a.a &&
                ((t = !0),
                (e = e || (a.a.e instanceof c ? f(a.a.e.errors) : [a.a.e])));
            if (Object(r.a)(d))
              for (p = -1, h = d.length; ++p < h; ) {
                var v = d[p];
                if (Object(o.a)(v))
                  if (Object(u.a)(v.unsubscribe).call(v) === a.a) {
                    (t = !0), (e = e || []);
                    var g = a.a.e;
                    g instanceof c ? (e = e.concat(f(g.errors))) : e.push(g);
                  }
              }
            if (t) throw new c(e);
          }
        }),
        (e.prototype.add = function(t) {
          if (!t || t === e.EMPTY) return e.EMPTY;
          if (t === this) return this;
          var n = t;
          switch (typeof t) {
            case 'function':
              n = new e(t);
            case 'object':
              if (n.closed || 'function' != typeof n.unsubscribe) return n;
              if (this.closed) return n.unsubscribe(), n;
              if ('function' != typeof n._addParent) {
                var r = n;
                (n = new e())._subscriptions = [r];
              }
              break;
            default:
              throw new Error(
                'unrecognized teardown ' + t + ' added to Subscription.'
              );
          }
          return (
            (this._subscriptions || (this._subscriptions = [])).push(n),
            n._addParent(this),
            n
          );
        }),
        (e.prototype.remove = function(e) {
          var t = this._subscriptions;
          if (t) {
            var n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
          }
        }),
        (e.prototype._addParent = function(e) {
          var t = this._parent,
            n = this._parents;
          t && t !== e
            ? n
              ? -1 === n.indexOf(e) && n.push(e)
              : (this._parents = [e])
            : (this._parent = e);
        }),
        (e.EMPTY = (function(e) {
          return (e.closed = !0), e;
        })(new e())),
        e
      );
    })();
    function f(e) {
      return e.reduce(function(e, t) {
        return e.concat(t instanceof c ? t.errors : t);
      }, []);
    }
  },
  function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'ɵangular_packages_common_common_e', function() {
        return $e;
      }),
      n.d(t, 'ɵangular_packages_common_common_d', function() {
        return Z;
      }),
      n.d(t, 'ɵangular_packages_common_common_a', function() {
        return je;
      }),
      n.d(t, 'ɵangular_packages_common_common_b', function() {
        return ke;
      }),
      n.d(t, 'ɵangular_packages_common_common_g', function() {
        return _t;
      }),
      n.d(t, 'ɵangular_packages_common_common_f', function() {
        return Ht;
      }),
      n.d(t, 'ɵregisterLocaleData', function() {
        return g;
      }),
      n.d(t, 'formatDate', function() {
        return te;
      }),
      n.d(t, 'formatCurrency', function() {
        return Ee;
      }),
      n.d(t, 'formatNumber', function() {
        return Se;
      }),
      n.d(t, 'formatPercent', function() {
        return Oe;
      }),
      n.d(t, 'NgLocaleLocalization', function() {
        return Te;
      }),
      n.d(t, 'NgLocalization', function() {
        return Re;
      }),
      n.d(t, 'registerLocaleData', function() {
        return g;
      }),
      n.d(t, 'Plural', function() {
        return b;
      }),
      n.d(t, 'NumberFormatStyle', function() {
        return m;
      }),
      n.d(t, 'FormStyle', function() {
        return _;
      }),
      n.d(t, 'TranslationWidth', function() {
        return w;
      }),
      n.d(t, 'FormatWidth', function() {
        return C;
      }),
      n.d(t, 'NumberSymbol', function() {
        return D;
      }),
      n.d(t, 'WeekDay', function() {
        return E;
      }),
      n.d(t, 'getNumberOfCurrencyDigits', function() {
        return Q;
      }),
      n.d(t, 'getCurrencySymbol', function() {
        return q;
      }),
      n.d(t, 'getLocaleDayPeriods', function() {
        return S;
      }),
      n.d(t, 'getLocaleDayNames', function() {
        return x;
      }),
      n.d(t, 'getLocaleMonthNames', function() {
        return A;
      }),
      n.d(t, 'getLocaleId', function() {
        return O;
      }),
      n.d(t, 'getLocaleEraNames', function() {
        return j;
      }),
      n.d(t, 'getLocaleWeekEndRange', function() {
        return I;
      }),
      n.d(t, 'getLocaleFirstDayOfWeek', function() {
        return R;
      }),
      n.d(t, 'getLocaleDateFormat', function() {
        return T;
      }),
      n.d(t, 'getLocaleDateTimeFormat', function() {
        return M;
      }),
      n.d(t, 'getLocaleExtraDayPeriodRules', function() {
        return U;
      }),
      n.d(t, 'getLocaleExtraDayPeriods', function() {
        return H;
      }),
      n.d(t, 'getLocalePluralCase', function() {
        return L;
      }),
      n.d(t, 'getLocaleTimeFormat', function() {
        return k;
      }),
      n.d(t, 'getLocaleNumberSymbol', function() {
        return P;
      }),
      n.d(t, 'getLocaleNumberFormat', function() {
        return F;
      }),
      n.d(t, 'getLocaleCurrencyName', function() {
        return V;
      }),
      n.d(t, 'getLocaleCurrencySymbol', function() {
        return N;
      }),
      n.d(t, 'ɵparseCookieValue', function() {
        return Me;
      }),
      n.d(t, 'CommonModule', function() {
        return zt;
      }),
      n.d(t, 'DeprecatedI18NPipesModule', function() {
        return Gt;
      }),
      n.d(t, 'NgClass', function() {
        return Pe;
      }),
      n.d(t, 'NgForOf', function() {
        return Ve;
      }),
      n.d(t, 'NgForOfContext', function() {
        return Ne;
      }),
      n.d(t, 'NgIf', function() {
        return Be;
      }),
      n.d(t, 'NgIfContext', function() {
        return Ue;
      }),
      n.d(t, 'NgPlural', function() {
        return We;
      }),
      n.d(t, 'NgPluralCase', function() {
        return Qe;
      }),
      n.d(t, 'NgStyle', function() {
        return Ke;
      }),
      n.d(t, 'NgSwitch', function() {
        return Ge;
      }),
      n.d(t, 'NgSwitchCase', function() {
        return Ze;
      }),
      n.d(t, 'NgSwitchDefault', function() {
        return qe;
      }),
      n.d(t, 'NgTemplateOutlet', function() {
        return Ye;
      }),
      n.d(t, 'NgComponentOutlet', function() {
        return Fe;
      }),
      n.d(t, 'DOCUMENT', function() {
        return Zt;
      }),
      n.d(t, 'AsyncPipe', function() {
        return Et;
      }),
      n.d(t, 'DatePipe', function() {
        return jt;
      }),
      n.d(t, 'I18nPluralPipe', function() {
        return It;
      }),
      n.d(t, 'I18nSelectPipe', function() {
        return Tt;
      }),
      n.d(t, 'JsonPipe', function() {
        return kt;
      }),
      n.d(t, 'LowerCasePipe', function() {
        return Ot;
      }),
      n.d(t, 'CurrencyPipe', function() {
        return Vt;
      }),
      n.d(t, 'DecimalPipe', function() {
        return Ft;
      }),
      n.d(t, 'PercentPipe', function() {
        return Nt;
      }),
      n.d(t, 'SlicePipe', function() {
        return Ut;
      }),
      n.d(t, 'UpperCasePipe', function() {
        return At;
      }),
      n.d(t, 'TitleCasePipe', function() {
        return xt;
      }),
      n.d(t, 'KeyValuePipe', function() {
        return Mt;
      }),
      n.d(t, 'DeprecatedDatePipe', function() {
        return ht;
      }),
      n.d(t, 'DeprecatedCurrencyPipe', function() {
        return bt;
      }),
      n.d(t, 'DeprecatedDecimalPipe', function() {
        return yt;
      }),
      n.d(t, 'DeprecatedPercentPipe', function() {
        return mt;
      }),
      n.d(t, 'ɵPLATFORM_BROWSER_ID', function() {
        return qt;
      }),
      n.d(t, 'ɵPLATFORM_SERVER_ID', function() {
        return Wt;
      }),
      n.d(t, 'ɵPLATFORM_WORKER_APP_ID', function() {
        return Qt;
      }),
      n.d(t, 'ɵPLATFORM_WORKER_UI_ID', function() {
        return Kt;
      }),
      n.d(t, 'isPlatformBrowser', function() {
        return Yt;
      }),
      n.d(t, 'isPlatformServer', function() {
        return $t;
      }),
      n.d(t, 'isPlatformWorkerApp', function() {
        return Jt;
      }),
      n.d(t, 'isPlatformWorkerUi', function() {
        return Xt;
      }),
      n.d(t, 'VERSION', function() {
        return en;
      }),
      n.d(t, 'ViewportScroller', function() {
        return tn;
      }),
      n.d(t, 'ɵNullViewportScroller', function() {
        return rn;
      }),
      n.d(t, 'PlatformLocation', function() {
        return i;
      }),
      n.d(t, 'LOCATION_INITIALIZED', function() {
        return u;
      }),
      n.d(t, 'LocationStrategy', function() {
        return a;
      }),
      n.d(t, 'APP_BASE_HREF', function() {
        return s;
      }),
      n.d(t, 'HashLocationStrategy', function() {
        return f;
      }),
      n.d(t, 'PathLocationStrategy', function() {
        return d;
      }),
      n.d(t, 'Location', function() {
        return c;
      });
    var r = n(1),
      o = n(0),
      i = (function() {
        return function() {};
      })(),
      u = new r.InjectionToken('Location Initialized'),
      a = (function() {
        return function() {};
      })(),
      s = new r.InjectionToken('appBaseHref'),
      c = (function() {
        function e(e) {
          var n = this;
          (this._subject = new r.EventEmitter()), (this._platformStrategy = e);
          var o = this._platformStrategy.getBaseHref();
          (this._baseHref = t.stripTrailingSlash(l(o))),
            this._platformStrategy.onPopState(function(e) {
              n._subject.emit({
                url: n.path(!0),
                pop: !0,
                state: e.state,
                type: e.type
              });
            });
        }
        var t;
        return (
          (t = e),
          (e.prototype.path = function(e) {
            return (
              void 0 === e && (e = !1),
              this.normalize(this._platformStrategy.path(e))
            );
          }),
          (e.prototype.isCurrentPathEqualTo = function(e, n) {
            return (
              void 0 === n && (n = ''),
              this.path() == this.normalize(e + t.normalizeQueryParams(n))
            );
          }),
          (e.prototype.normalize = function(e) {
            return t.stripTrailingSlash(
              (function(e, t) {
                return e && t.startsWith(e) ? t.substring(e.length) : t;
              })(this._baseHref, l(e))
            );
          }),
          (e.prototype.prepareExternalUrl = function(e) {
            return (
              e && '/' !== e[0] && (e = '/' + e),
              this._platformStrategy.prepareExternalUrl(e)
            );
          }),
          (e.prototype.go = function(e, t, n) {
            void 0 === t && (t = ''),
              void 0 === n && (n = null),
              this._platformStrategy.pushState(n, '', e, t);
          }),
          (e.prototype.replaceState = function(e, t, n) {
            void 0 === t && (t = ''),
              void 0 === n && (n = null),
              this._platformStrategy.replaceState(n, '', e, t);
          }),
          (e.prototype.forward = function() {
            this._platformStrategy.forward();
          }),
          (e.prototype.back = function() {
            this._platformStrategy.back();
          }),
          (e.prototype.subscribe = function(e, t, n) {
            return this._subject.subscribe({ next: e, error: t, complete: n });
          }),
          (e.normalizeQueryParams = function(e) {
            return e && '?' !== e[0] ? '?' + e : e;
          }),
          (e.joinWithSlash = function(e, t) {
            if (0 == e.length) return t;
            if (0 == t.length) return e;
            var n = 0;
            return (
              e.endsWith('/') && n++,
              t.startsWith('/') && n++,
              2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
            );
          }),
          (e.stripTrailingSlash = function(e) {
            var t = e.match(/#|\?|$/),
              n = (t && t.index) || e.length,
              r = n - ('/' === e[n - 1] ? 1 : 0);
            return e.slice(0, r) + e.slice(n);
          }),
          e
        );
      })();
    function l(e) {
      return e.replace(/\/index.html$/, '');
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var f = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (r._platformLocation = t),
            (r._baseHref = ''),
            null != n && (r._baseHref = n),
            r
          );
        }
        return (
          Object(o.c)(t, e),
          (t.prototype.onPopState = function(e) {
            this._platformLocation.onPopState(e),
              this._platformLocation.onHashChange(e);
          }),
          (t.prototype.getBaseHref = function() {
            return this._baseHref;
          }),
          (t.prototype.path = function(e) {
            void 0 === e && (e = !1);
            var t = this._platformLocation.hash;
            return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
          }),
          (t.prototype.prepareExternalUrl = function(e) {
            var t = c.joinWithSlash(this._baseHref, e);
            return t.length > 0 ? '#' + t : t;
          }),
          (t.prototype.pushState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + c.normalizeQueryParams(r));
            0 == o.length && (o = this._platformLocation.pathname),
              this._platformLocation.pushState(e, t, o);
          }),
          (t.prototype.replaceState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + c.normalizeQueryParams(r));
            0 == o.length && (o = this._platformLocation.pathname),
              this._platformLocation.replaceState(e, t, o);
          }),
          (t.prototype.forward = function() {
            this._platformLocation.forward();
          }),
          (t.prototype.back = function() {
            this._platformLocation.back();
          }),
          t
        );
      })(a),
      d = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          if (
            ((r._platformLocation = t),
            null == n && (n = r._platformLocation.getBaseHrefFromDOM()),
            null == n)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          return (r._baseHref = n), r;
        }
        return (
          Object(o.c)(t, e),
          (t.prototype.onPopState = function(e) {
            this._platformLocation.onPopState(e),
              this._platformLocation.onHashChange(e);
          }),
          (t.prototype.getBaseHref = function() {
            return this._baseHref;
          }),
          (t.prototype.prepareExternalUrl = function(e) {
            return c.joinWithSlash(this._baseHref, e);
          }),
          (t.prototype.path = function(e) {
            void 0 === e && (e = !1);
            var t =
                this._platformLocation.pathname +
                c.normalizeQueryParams(this._platformLocation.search),
              n = this._platformLocation.hash;
            return n && e ? '' + t + n : t;
          }),
          (t.prototype.pushState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + c.normalizeQueryParams(r));
            this._platformLocation.pushState(e, t, o);
          }),
          (t.prototype.replaceState = function(e, t, n, r) {
            var o = this.prepareExternalUrl(n + c.normalizeQueryParams(r));
            this._platformLocation.replaceState(e, t, o);
          }),
          (t.prototype.forward = function() {
            this._platformLocation.forward();
          }),
          (t.prototype.back = function() {
            this._platformLocation.back();
          }),
          t
        );
      })(a),
      p = void 0;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var h = [
        'en',
        [['a', 'p'], ['AM', 'PM'], p],
        [['AM', 'PM'], p, p],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        p,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        p,
        [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', p, "{1} 'at' {0}", p],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(e) {
          var t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        }
      ],
      v = {};
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function g(e, t, n) {
      'string' != typeof t && ((n = t), (t = e[0])),
        (t = t.toLowerCase().replace(/_/g, '-')),
        (v[t] = e),
        n && (v[t][19] = n);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var y = {
        ADP: [void 0, void 0, 0],
        AFN: [void 0, void 0, 0],
        ALL: [void 0, void 0, 0],
        AMD: [void 0, void 0, 0],
        AOA: [void 0, 'Kz'],
        ARS: [void 0, '$'],
        AUD: ['A$', '$'],
        BAM: [void 0, 'KM'],
        BBD: [void 0, '$'],
        BDT: [void 0, '৳'],
        BHD: [void 0, void 0, 3],
        BIF: [void 0, void 0, 0],
        BMD: [void 0, '$'],
        BND: [void 0, '$'],
        BOB: [void 0, 'Bs'],
        BRL: ['R$'],
        BSD: [void 0, '$'],
        BWP: [void 0, 'P'],
        BYN: [void 0, 'р.', 2],
        BYR: [void 0, void 0, 0],
        BZD: [void 0, '$'],
        CAD: ['CA$', '$', 2],
        CHF: [void 0, void 0, 2],
        CLF: [void 0, void 0, 4],
        CLP: [void 0, '$', 0],
        CNY: ['CN¥', '¥'],
        COP: [void 0, '$', 0],
        CRC: [void 0, '₡', 2],
        CUC: [void 0, '$'],
        CUP: [void 0, '$'],
        CZK: [void 0, 'Kč', 2],
        DJF: [void 0, void 0, 0],
        DKK: [void 0, 'kr', 2],
        DOP: [void 0, '$'],
        EGP: [void 0, 'E£'],
        ESP: [void 0, '₧', 0],
        EUR: ['€'],
        FJD: [void 0, '$'],
        FKP: [void 0, '£'],
        GBP: ['£'],
        GEL: [void 0, '₾'],
        GIP: [void 0, '£'],
        GNF: [void 0, 'FG', 0],
        GTQ: [void 0, 'Q'],
        GYD: [void 0, '$', 0],
        HKD: ['HK$', '$'],
        HNL: [void 0, 'L'],
        HRK: [void 0, 'kn'],
        HUF: [void 0, 'Ft', 2],
        IDR: [void 0, 'Rp', 0],
        ILS: ['₪'],
        INR: ['₹'],
        IQD: [void 0, void 0, 0],
        IRR: [void 0, void 0, 0],
        ISK: [void 0, 'kr', 0],
        ITL: [void 0, void 0, 0],
        JMD: [void 0, '$'],
        JOD: [void 0, void 0, 3],
        JPY: ['¥', void 0, 0],
        KHR: [void 0, '៛'],
        KMF: [void 0, 'CF', 0],
        KPW: [void 0, '₩', 0],
        KRW: ['₩', void 0, 0],
        KWD: [void 0, void 0, 3],
        KYD: [void 0, '$'],
        KZT: [void 0, '₸'],
        LAK: [void 0, '₭', 0],
        LBP: [void 0, 'L£', 0],
        LKR: [void 0, 'Rs'],
        LRD: [void 0, '$'],
        LTL: [void 0, 'Lt'],
        LUF: [void 0, void 0, 0],
        LVL: [void 0, 'Ls'],
        LYD: [void 0, void 0, 3],
        MGA: [void 0, 'Ar', 0],
        MGF: [void 0, void 0, 0],
        MMK: [void 0, 'K', 0],
        MNT: [void 0, '₮', 0],
        MRO: [void 0, void 0, 0],
        MUR: [void 0, 'Rs', 0],
        MXN: ['MX$', '$'],
        MYR: [void 0, 'RM'],
        NAD: [void 0, '$'],
        NGN: [void 0, '₦'],
        NIO: [void 0, 'C$'],
        NOK: [void 0, 'kr', 2],
        NPR: [void 0, 'Rs'],
        NZD: ['NZ$', '$'],
        OMR: [void 0, void 0, 3],
        PHP: [void 0, '₱'],
        PKR: [void 0, 'Rs', 0],
        PLN: [void 0, 'zł'],
        PYG: [void 0, '₲', 0],
        RON: [void 0, 'lei'],
        RSD: [void 0, void 0, 0],
        RUB: [void 0, '₽'],
        RUR: [void 0, 'р.'],
        RWF: [void 0, 'RF', 0],
        SBD: [void 0, '$'],
        SEK: [void 0, 'kr', 2],
        SGD: [void 0, '$'],
        SHP: [void 0, '£'],
        SLL: [void 0, void 0, 0],
        SOS: [void 0, void 0, 0],
        SRD: [void 0, '$'],
        SSP: [void 0, '£'],
        STD: [void 0, void 0, 0],
        STN: [void 0, 'Db'],
        SYP: [void 0, '£', 0],
        THB: [void 0, '฿'],
        TMM: [void 0, void 0, 0],
        TND: [void 0, void 0, 3],
        TOP: [void 0, 'T$'],
        TRL: [void 0, void 0, 0],
        TRY: [void 0, '₺'],
        TTD: [void 0, '$'],
        TWD: ['NT$', '$', 2],
        TZS: [void 0, void 0, 0],
        UAH: [void 0, '₴'],
        UGX: [void 0, void 0, 0],
        USD: ['$'],
        UYI: [void 0, void 0, 0],
        UYU: [void 0, '$'],
        UZS: [void 0, void 0, 0],
        VEF: [void 0, 'Bs'],
        VND: ['₫', void 0, 0],
        VUV: [void 0, void 0, 0],
        XAF: ['FCFA', void 0, 0],
        XCD: ['EC$', '$'],
        XOF: ['CFA', void 0, 0],
        XPF: ['CFPF', void 0, 0],
        YER: [void 0, void 0, 0],
        ZAR: [void 0, 'R'],
        ZMK: [void 0, void 0, 0],
        ZMW: [void 0, 'ZK'],
        ZWD: [void 0, void 0, 0]
      },
      m = (function(e) {
        return (
          (e[(e.Decimal = 0)] = 'Decimal'),
          (e[(e.Percent = 1)] = 'Percent'),
          (e[(e.Currency = 2)] = 'Currency'),
          (e[(e.Scientific = 3)] = 'Scientific'),
          e
        );
      })({}),
      b = (function(e) {
        return (
          (e[(e.Zero = 0)] = 'Zero'),
          (e[(e.One = 1)] = 'One'),
          (e[(e.Two = 2)] = 'Two'),
          (e[(e.Few = 3)] = 'Few'),
          (e[(e.Many = 4)] = 'Many'),
          (e[(e.Other = 5)] = 'Other'),
          e
        );
      })({}),
      _ = (function(e) {
        return (
          (e[(e.Format = 0)] = 'Format'),
          (e[(e.Standalone = 1)] = 'Standalone'),
          e
        );
      })({}),
      w = (function(e) {
        return (
          (e[(e.Narrow = 0)] = 'Narrow'),
          (e[(e.Abbreviated = 1)] = 'Abbreviated'),
          (e[(e.Wide = 2)] = 'Wide'),
          (e[(e.Short = 3)] = 'Short'),
          e
        );
      })({}),
      C = (function(e) {
        return (
          (e[(e.Short = 0)] = 'Short'),
          (e[(e.Medium = 1)] = 'Medium'),
          (e[(e.Long = 2)] = 'Long'),
          (e[(e.Full = 3)] = 'Full'),
          e
        );
      })({}),
      D = (function(e) {
        return (
          (e[(e.Decimal = 0)] = 'Decimal'),
          (e[(e.Group = 1)] = 'Group'),
          (e[(e.List = 2)] = 'List'),
          (e[(e.PercentSign = 3)] = 'PercentSign'),
          (e[(e.PlusSign = 4)] = 'PlusSign'),
          (e[(e.MinusSign = 5)] = 'MinusSign'),
          (e[(e.Exponential = 6)] = 'Exponential'),
          (e[(e.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
          (e[(e.PerMille = 8)] = 'PerMille'),
          (e[(e[1 / 0] = 9)] = 'Infinity'),
          (e[(e.NaN = 10)] = 'NaN'),
          (e[(e.TimeSeparator = 11)] = 'TimeSeparator'),
          (e[(e.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
          (e[(e.CurrencyGroup = 13)] = 'CurrencyGroup'),
          e
        );
      })({}),
      E = (function(e) {
        return (
          (e[(e.Sunday = 0)] = 'Sunday'),
          (e[(e.Monday = 1)] = 'Monday'),
          (e[(e.Tuesday = 2)] = 'Tuesday'),
          (e[(e.Wednesday = 3)] = 'Wednesday'),
          (e[(e.Thursday = 4)] = 'Thursday'),
          (e[(e.Friday = 5)] = 'Friday'),
          (e[(e.Saturday = 6)] = 'Saturday'),
          e
        );
      })({});
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function O(e) {
      return Z(e)[0];
    }
    function S(e, t, n) {
      var r = Z(e);
      return z(z([r[1], r[2]], t), n);
    }
    function x(e, t, n) {
      var r = Z(e);
      return z(z([r[3], r[4]], t), n);
    }
    function A(e, t, n) {
      var r = Z(e);
      return z(z([r[5], r[6]], t), n);
    }
    function j(e, t) {
      return z(Z(e)[7], t);
    }
    function R(e) {
      return Z(e)[8];
    }
    function I(e) {
      return Z(e)[9];
    }
    function T(e, t) {
      return z(Z(e)[10], t);
    }
    function k(e, t) {
      return z(Z(e)[11], t);
    }
    function M(e, t) {
      return z(Z(e)[12], t);
    }
    function P(e, t) {
      var n = Z(e),
        r = n[13][t];
      if (void 0 === r) {
        if (t === D.CurrencyDecimal) return n[13][D.Decimal];
        if (t === D.CurrencyGroup) return n[13][D.Group];
      }
      return r;
    }
    function F(e, t) {
      return Z(e)[14][t];
    }
    function N(e) {
      return Z(e)[15] || null;
    }
    function V(e) {
      return Z(e)[16] || null;
    }
    function L(e) {
      return Z(e)[18];
    }
    function B(e) {
      if (!e[19])
        throw new Error(
          'Missing extra locale data for the locale "' +
            e[0] +
            '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.'
        );
    }
    function U(e) {
      var t = Z(e);
      return (
        B(t),
        (t[19][2] || []).map(function(e) {
          return 'string' == typeof e ? G(e) : [G(e[0]), G(e[1])];
        })
      );
    }
    function H(e, t, n) {
      var r = Z(e);
      return B(r), z(z([r[19][0], r[19][1]], t) || [], n) || [];
    }
    function z(e, t) {
      for (var n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
      throw new Error('Locale data API: locale data undefined');
    }
    function G(e) {
      var t = Object(o.f)(e.split(':'), 2);
      return { hours: +t[0], minutes: +t[1] };
    }
    function Z(e) {
      var t = e.toLowerCase().replace(/_/g, '-'),
        n = v[t];
      if (n) return n;
      var r = t.split('-')[0];
      if ((n = v[r])) return n;
      if ('en' === r) return h;
      throw new Error('Missing locale data for the locale "' + e + '".');
    }
    function q(e, t, n) {
      void 0 === n && (n = 'en');
      var r =
          (function(e) {
            return Z(e)[17];
          })(n)[e] ||
          y[e] ||
          [],
        o = r[1];
      return 'narrow' === t && 'string' == typeof o ? o : r[0] || e;
    }
    var W = 2;
    function Q(e) {
      var t,
        n = y[e];
      return n && (t = n[2]), 'number' == typeof t ? t : W;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var K = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
      Y = {},
      $ = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
      J = (function(e) {
        return (
          (e[(e.Short = 0)] = 'Short'),
          (e[(e.ShortGMT = 1)] = 'ShortGMT'),
          (e[(e.Long = 2)] = 'Long'),
          (e[(e.Extended = 3)] = 'Extended'),
          e
        );
      })({}),
      X = (function(e) {
        return (
          (e[(e.FullYear = 0)] = 'FullYear'),
          (e[(e.Month = 1)] = 'Month'),
          (e[(e.Date = 2)] = 'Date'),
          (e[(e.Hours = 3)] = 'Hours'),
          (e[(e.Minutes = 4)] = 'Minutes'),
          (e[(e.Seconds = 5)] = 'Seconds'),
          (e[(e.FractionalSeconds = 6)] = 'FractionalSeconds'),
          (e[(e.Day = 7)] = 'Day'),
          e
        );
      })({}),
      ee = (function(e) {
        return (
          (e[(e.DayPeriods = 0)] = 'DayPeriods'),
          (e[(e.Days = 1)] = 'Days'),
          (e[(e.Months = 2)] = 'Months'),
          (e[(e.Eras = 3)] = 'Eras'),
          e
        );
      })({});
    function te(e, t, n, r) {
      var i = (function(e) {
        if (pe(e)) return e;
        if ('number' == typeof e && !isNaN(e)) return new Date(e);
        if ('string' == typeof e) {
          e = e.trim();
          var t = parseFloat(e);
          if (!isNaN(e - t)) return new Date(t);
          if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
            var n = Object(o.f)(
                e.split('-').map(function(e) {
                  return +e;
                }),
                3
              ),
              r = n[0],
              i = n[1],
              u = n[2];
            return new Date(r, i - 1, u);
          }
          var a = void 0;
          if ((a = e.match(K))) return de(a);
        }
        var s = new Date(e);
        if (!pe(s))
          throw new Error('Unable to convert "' + e + '" into a date');
        return s;
      })(e);
      t =
        (function e(t, n) {
          var r = O(t);
          Y[r] = Y[r] || {};
          if (Y[r][n]) return Y[r][n];
          var o = '';
          switch (n) {
            case 'shortDate':
              o = T(t, C.Short);
              break;
            case 'mediumDate':
              o = T(t, C.Medium);
              break;
            case 'longDate':
              o = T(t, C.Long);
              break;
            case 'fullDate':
              o = T(t, C.Full);
              break;
            case 'shortTime':
              o = k(t, C.Short);
              break;
            case 'mediumTime':
              o = k(t, C.Medium);
              break;
            case 'longTime':
              o = k(t, C.Long);
              break;
            case 'fullTime':
              o = k(t, C.Full);
              break;
            case 'short':
              var i = e(t, 'shortTime'),
                u = e(t, 'shortDate');
              o = ne(M(t, C.Short), [i, u]);
              break;
            case 'medium':
              var a = e(t, 'mediumTime'),
                s = e(t, 'mediumDate');
              o = ne(M(t, C.Medium), [a, s]);
              break;
            case 'long':
              var c = e(t, 'longTime'),
                l = e(t, 'longDate');
              o = ne(M(t, C.Long), [c, l]);
              break;
            case 'full':
              var f = e(t, 'fullTime'),
                d = e(t, 'fullDate');
              o = ne(M(t, C.Full), [f, d]);
          }
          o && (Y[r][n] = o);
          return o;
        })(n, t) || t;
      for (var u, a = []; t; ) {
        if (!(u = $.exec(t))) {
          a.push(t);
          break;
        }
        var s = (a = a.concat(u.slice(1))).pop();
        if (!s) break;
        t = s;
      }
      var c = i.getTimezoneOffset();
      r &&
        ((c = fe(r, c)),
        (i = (function(e, t, n) {
          var r = n ? -1 : 1,
            o = e.getTimezoneOffset(),
            i = fe(t, o);
          return (function(e, t) {
            return (
              (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
            );
          })(e, r * (i - o));
        })(i, r, !0)));
      var l = '';
      return (
        a.forEach(function(e) {
          var t = (function(e) {
            if (le[e]) return le[e];
            var t;
            switch (e) {
              case 'G':
              case 'GG':
              case 'GGG':
                t = ie(ee.Eras, w.Abbreviated);
                break;
              case 'GGGG':
                t = ie(ee.Eras, w.Wide);
                break;
              case 'GGGGG':
                t = ie(ee.Eras, w.Narrow);
                break;
              case 'y':
                t = oe(X.FullYear, 1, 0, !1, !0);
                break;
              case 'yy':
                t = oe(X.FullYear, 2, 0, !0, !0);
                break;
              case 'yyy':
                t = oe(X.FullYear, 3, 0, !1, !0);
                break;
              case 'yyyy':
                t = oe(X.FullYear, 4, 0, !1, !0);
                break;
              case 'M':
              case 'L':
                t = oe(X.Month, 1, 1);
                break;
              case 'MM':
              case 'LL':
                t = oe(X.Month, 2, 1);
                break;
              case 'MMM':
                t = ie(ee.Months, w.Abbreviated);
                break;
              case 'MMMM':
                t = ie(ee.Months, w.Wide);
                break;
              case 'MMMMM':
                t = ie(ee.Months, w.Narrow);
                break;
              case 'LLL':
                t = ie(ee.Months, w.Abbreviated, _.Standalone);
                break;
              case 'LLLL':
                t = ie(ee.Months, w.Wide, _.Standalone);
                break;
              case 'LLLLL':
                t = ie(ee.Months, w.Narrow, _.Standalone);
                break;
              case 'w':
                t = ce(1);
                break;
              case 'ww':
                t = ce(2);
                break;
              case 'W':
                t = ce(1, !0);
                break;
              case 'd':
                t = oe(X.Date, 1);
                break;
              case 'dd':
                t = oe(X.Date, 2);
                break;
              case 'E':
              case 'EE':
              case 'EEE':
                t = ie(ee.Days, w.Abbreviated);
                break;
              case 'EEEE':
                t = ie(ee.Days, w.Wide);
                break;
              case 'EEEEE':
                t = ie(ee.Days, w.Narrow);
                break;
              case 'EEEEEE':
                t = ie(ee.Days, w.Short);
                break;
              case 'a':
              case 'aa':
              case 'aaa':
                t = ie(ee.DayPeriods, w.Abbreviated);
                break;
              case 'aaaa':
                t = ie(ee.DayPeriods, w.Wide);
                break;
              case 'aaaaa':
                t = ie(ee.DayPeriods, w.Narrow);
                break;
              case 'b':
              case 'bb':
              case 'bbb':
                t = ie(ee.DayPeriods, w.Abbreviated, _.Standalone, !0);
                break;
              case 'bbbb':
                t = ie(ee.DayPeriods, w.Wide, _.Standalone, !0);
                break;
              case 'bbbbb':
                t = ie(ee.DayPeriods, w.Narrow, _.Standalone, !0);
                break;
              case 'B':
              case 'BB':
              case 'BBB':
                t = ie(ee.DayPeriods, w.Abbreviated, _.Format, !0);
                break;
              case 'BBBB':
                t = ie(ee.DayPeriods, w.Wide, _.Format, !0);
                break;
              case 'BBBBB':
                t = ie(ee.DayPeriods, w.Narrow, _.Format, !0);
                break;
              case 'h':
                t = oe(X.Hours, 1, -12);
                break;
              case 'hh':
                t = oe(X.Hours, 2, -12);
                break;
              case 'H':
                t = oe(X.Hours, 1);
                break;
              case 'HH':
                t = oe(X.Hours, 2);
                break;
              case 'm':
                t = oe(X.Minutes, 1);
                break;
              case 'mm':
                t = oe(X.Minutes, 2);
                break;
              case 's':
                t = oe(X.Seconds, 1);
                break;
              case 'ss':
                t = oe(X.Seconds, 2);
                break;
              case 'S':
                t = oe(X.FractionalSeconds, 1);
                break;
              case 'SS':
                t = oe(X.FractionalSeconds, 2);
                break;
              case 'SSS':
                t = oe(X.FractionalSeconds, 3);
                break;
              case 'Z':
              case 'ZZ':
              case 'ZZZ':
                t = ue(J.Short);
                break;
              case 'ZZZZZ':
                t = ue(J.Extended);
                break;
              case 'O':
              case 'OO':
              case 'OOO':
              case 'z':
              case 'zz':
              case 'zzz':
                t = ue(J.ShortGMT);
                break;
              case 'OOOO':
              case 'ZZZZ':
              case 'zzzz':
                t = ue(J.Long);
                break;
              default:
                return null;
            }
            return (le[e] = t), t;
          })(e);
          l += t
            ? t(i, n, c)
            : "''" === e
            ? "'"
            : e.replace(/(^'|'$)/g, '').replace(/''/g, "'");
        }),
        l
      );
    }
    function ne(e, t) {
      return (
        t &&
          (e = e.replace(/\{([^}]+)}/g, function(e, n) {
            return null != t && n in t ? t[n] : e;
          })),
        e
      );
    }
    function re(e, t, n, r, o) {
      void 0 === n && (n = '-');
      var i = '';
      (e < 0 || (o && e <= 0)) && (o ? (e = 1 - e) : ((e = -e), (i = n)));
      for (var u = String(e); u.length < t; ) u = '0' + u;
      return r && (u = u.substr(u.length - t)), i + u;
    }
    function oe(e, t, n, r, o) {
      return (
        void 0 === n && (n = 0),
        void 0 === r && (r = !1),
        void 0 === o && (o = !1),
        function(i, u) {
          var a = (function(e, t) {
            switch (e) {
              case X.FullYear:
                return t.getFullYear();
              case X.Month:
                return t.getMonth();
              case X.Date:
                return t.getDate();
              case X.Hours:
                return t.getHours();
              case X.Minutes:
                return t.getMinutes();
              case X.Seconds:
                return t.getSeconds();
              case X.FractionalSeconds:
                return t.getMilliseconds();
              case X.Day:
                return t.getDay();
              default:
                throw new Error('Unknown DateType value "' + e + '".');
            }
          })(e, i);
          if (((n > 0 || a > -n) && (a += n), e === X.Hours))
            0 === a && -12 === n && (a = 12);
          else if (e === X.FractionalSeconds)
            return (function(e, t) {
              return re(e, 3).substr(0, t);
            })(a, t);
          var s = P(u, D.MinusSign);
          return re(a, t, s, r, o);
        }
      );
    }
    function ie(e, t, n, r) {
      return (
        void 0 === n && (n = _.Format),
        void 0 === r && (r = !1),
        function(o, i) {
          return (function(e, t, n, r, o, i) {
            switch (n) {
              case ee.Months:
                return A(t, o, r)[e.getMonth()];
              case ee.Days:
                return x(t, o, r)[e.getDay()];
              case ee.DayPeriods:
                var u = e.getHours(),
                  a = e.getMinutes();
                if (i) {
                  var s,
                    c = U(t),
                    l = H(t, o, r);
                  if (
                    (c.forEach(function(e, t) {
                      if (Array.isArray(e)) {
                        var n = e[0],
                          r = n.hours,
                          o = n.minutes,
                          i = e[1],
                          c = i.hours,
                          f = i.minutes;
                        u >= r &&
                          a >= o &&
                          (u < c || (u === c && a < f)) &&
                          (s = l[t]);
                      } else {
                        var d = e.hours,
                          p = e.minutes;
                        d === u && p === a && (s = l[t]);
                      }
                    }),
                    s)
                  )
                    return s;
                }
                return S(t, o, r)[u < 12 ? 0 : 1];
              case ee.Eras:
                return j(t, r)[e.getFullYear() <= 0 ? 0 : 1];
              default:
                var f = n;
                throw new Error('unexpected translation type ' + f);
            }
          })(o, i, e, t, n, r);
        }
      );
    }
    function ue(e) {
      return function(t, n, r) {
        var o = -1 * r,
          i = P(n, D.MinusSign),
          u = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
        switch (e) {
          case J.Short:
            return (
              (o >= 0 ? '+' : '') + re(u, 2, i) + re(Math.abs(o % 60), 2, i)
            );
          case J.ShortGMT:
            return 'GMT' + (o >= 0 ? '+' : '') + re(u, 1, i);
          case J.Long:
            return (
              'GMT' +
              (o >= 0 ? '+' : '') +
              re(u, 2, i) +
              ':' +
              re(Math.abs(o % 60), 2, i)
            );
          case J.Extended:
            return 0 === r
              ? 'Z'
              : (o >= 0 ? '+' : '') +
                  re(u, 2, i) +
                  ':' +
                  re(Math.abs(o % 60), 2, i);
          default:
            throw new Error('Unknown zone width "' + e + '"');
        }
      };
    }
    var ae = 0,
      se = 4;
    function ce(e, t) {
      return (
        void 0 === t && (t = !1),
        function(n, r) {
          var o;
          if (t) {
            var i = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              u = n.getDate();
            o = 1 + Math.floor((u + i) / 7);
          } else {
            var a = (function(e) {
                var t = new Date(e, ae, 1).getDay();
                return new Date(e, 0, 1 + (t <= se ? se : se + 7) - t);
              })(n.getFullYear()),
              s =
                (function(e) {
                  return new Date(
                    e.getFullYear(),
                    e.getMonth(),
                    e.getDate() + (se - e.getDay())
                  );
                })(n).getTime() - a.getTime();
            o = 1 + Math.round(s / 6048e5);
          }
          return re(o, e, P(r, D.MinusSign));
        }
      );
    }
    var le = {};
    function fe(e, t) {
      e = e.replace(/:/g, '');
      var n = Date.parse('Jan 01, 1970 00:00:00 ' + e) / 6e4;
      return isNaN(n) ? t : n;
    }
    function de(e) {
      var t = new Date(0),
        n = 0,
        r = 0,
        o = e[8] ? t.setUTCFullYear : t.setFullYear,
        i = e[8] ? t.setUTCHours : t.setHours;
      e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
        o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
      var u = Number(e[4] || 0) - n,
        a = Number(e[5] || 0) - r,
        s = Number(e[6] || 0),
        c = Math.round(1e3 * parseFloat('0.' + (e[7] || 0)));
      return i.call(t, u, a, s, c), t;
    }
    function pe(e) {
      return e instanceof Date && !isNaN(e.valueOf());
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var he = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
      ve = 22,
      ge = '.',
      ye = '0',
      me = ';',
      be = ',',
      _e = '#',
      we = '¤',
      Ce = '%';
    function De(e, t, n, r, o, i, u) {
      void 0 === u && (u = !1);
      var a = '',
        s = !1;
      if (isFinite(e)) {
        var c = (function(e) {
          var t,
            n,
            r,
            o,
            i,
            u = Math.abs(e) + '',
            a = 0;
          (n = u.indexOf(ge)) > -1 && (u = u.replace(ge, ''));
          (r = u.search(/e/i)) > 0
            ? (n < 0 && (n = r),
              (n += +u.slice(r + 1)),
              (u = u.substring(0, r)))
            : n < 0 && (n = u.length);
          for (r = 0; u.charAt(r) === ye; r++);
          if (r === (i = u.length)) (t = [0]), (n = 1);
          else {
            for (i--; u.charAt(i) === ye; ) i--;
            for (n -= r, t = [], o = 0; r <= i; r++, o++)
              t[o] = Number(u.charAt(r));
          }
          n > ve && ((t = t.splice(0, ve - 1)), (a = n - 1), (n = 1));
          return { digits: t, exponent: a, integerLen: n };
        })(e);
        u &&
          (c = (function(e) {
            if (0 === e.digits[0]) return e;
            var t = e.digits.length - e.integerLen;
            e.exponent
              ? (e.exponent += 2)
              : (0 === t ? e.digits.push(0, 0) : 1 === t && e.digits.push(0),
                (e.integerLen += 2));
            return e;
          })(c));
        var l = t.minInt,
          f = t.minFrac,
          d = t.maxFrac;
        if (i) {
          var p = i.match(he);
          if (null === p) throw new Error(i + ' is not a valid digit info');
          var h = p[1],
            v = p[3],
            g = p[5];
          null != h && (l = Ae(h)),
            null != v && (f = Ae(v)),
            null != g ? (d = Ae(g)) : null != v && f > d && (d = f);
        }
        !(function(e, t, n) {
          if (t > n)
            throw new Error(
              'The minimum number of digits after fraction (' +
                t +
                ') is higher than the maximum (' +
                n +
                ').'
            );
          var r = e.digits,
            o = r.length - e.integerLen,
            i = Math.min(Math.max(t, o), n),
            u = i + e.integerLen,
            a = r[u];
          if (u > 0) {
            r.splice(Math.max(e.integerLen, u));
            for (var s = u; s < r.length; s++) r[s] = 0;
          } else {
            (o = Math.max(0, o)),
              (e.integerLen = 1),
              (r.length = Math.max(1, (u = i + 1))),
              (r[0] = 0);
            for (var c = 1; c < u; c++) r[c] = 0;
          }
          if (a >= 5)
            if (u - 1 < 0) {
              for (var l = 0; l > u; l--) r.unshift(0), e.integerLen++;
              r.unshift(1), e.integerLen++;
            } else r[u - 1]++;
          for (; o < Math.max(0, i); o++) r.push(0);
          var f = 0 !== i,
            d = t + e.integerLen,
            p = r.reduceRight(function(e, t, n, r) {
              return (
                (t += e),
                (r[n] = t < 10 ? t : t - 10),
                f && (0 === r[n] && n >= d ? r.pop() : (f = !1)),
                t >= 10 ? 1 : 0
              );
            }, 0);
          p && (r.unshift(p), e.integerLen++);
        })(c, f, d);
        var y = c.digits,
          m = c.integerLen,
          b = c.exponent,
          _ = [];
        for (
          s = y.every(function(e) {
            return !e;
          });
          m < l;
          m++
        )
          y.unshift(0);
        for (; m < 0; m++) y.unshift(0);
        m > 0 ? (_ = y.splice(m, y.length)) : ((_ = y), (y = [0]));
        var w = [];
        for (
          y.length >= t.lgSize &&
          w.unshift(y.splice(-t.lgSize, y.length).join(''));
          y.length > t.gSize;

        )
          w.unshift(y.splice(-t.gSize, y.length).join(''));
        y.length && w.unshift(y.join('')),
          (a = w.join(P(n, r))),
          _.length && (a += P(n, o) + _.join('')),
          b && (a += P(n, D.Exponential) + '+' + b);
      } else a = P(n, D.Infinity);
      return (a =
        e < 0 && !s ? t.negPre + a + t.negSuf : t.posPre + a + t.posSuf);
    }
    function Ee(e, t, n, r, o) {
      var i = xe(F(t, m.Currency), P(t, D.MinusSign));
      return (
        (i.minFrac = Q(r)),
        (i.maxFrac = i.minFrac),
        De(e, i, t, D.CurrencyGroup, D.CurrencyDecimal, o)
          .replace(we, n)
          .replace(we, '')
      );
    }
    function Oe(e, t, n) {
      return De(
        e,
        xe(F(t, m.Percent), P(t, D.MinusSign)),
        t,
        D.Group,
        D.Decimal,
        n,
        !0
      ).replace(new RegExp(Ce, 'g'), P(t, D.PercentSign));
    }
    function Se(e, t, n) {
      return De(
        e,
        xe(F(t, m.Decimal), P(t, D.MinusSign)),
        t,
        D.Group,
        D.Decimal,
        n
      );
    }
    function xe(e, t) {
      void 0 === t && (t = '-');
      var n = {
          minInt: 1,
          minFrac: 0,
          maxFrac: 0,
          posPre: '',
          posSuf: '',
          negPre: '',
          negSuf: '',
          gSize: 0,
          lgSize: 0
        },
        r = e.split(me),
        o = r[0],
        i = r[1],
        u =
          -1 !== o.indexOf(ge)
            ? o.split(ge)
            : [
                o.substring(0, o.lastIndexOf(ye) + 1),
                o.substring(o.lastIndexOf(ye) + 1)
              ],
        a = u[0],
        s = u[1] || '';
      n.posPre = a.substr(0, a.indexOf(_e));
      for (var c = 0; c < s.length; c++) {
        var l = s.charAt(c);
        l === ye
          ? (n.minFrac = n.maxFrac = c + 1)
          : l === _e
          ? (n.maxFrac = c + 1)
          : (n.posSuf += l);
      }
      var f = a.split(be);
      if (
        ((n.gSize = f[1] ? f[1].length : 0),
        (n.lgSize = f[2] || f[1] ? (f[2] || f[1]).length : 0),
        i)
      ) {
        var d = o.length - n.posPre.length - n.posSuf.length,
          p = i.indexOf(_e);
        (n.negPre = i.substr(0, p).replace(/'/g, '')),
          (n.negSuf = i.substr(p + d).replace(/'/g, ''));
      } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
      return n;
    }
    function Ae(e) {
      var t = parseInt(e);
      if (isNaN(t))
        throw new Error('Invalid integer literal when parsing ' + e);
      return t;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var je = new r.InjectionToken('UseV4Plurals'),
      Re = (function() {
        return function() {};
      })();
    function Ie(e, t, n, r) {
      var o = '=' + e;
      if (t.indexOf(o) > -1) return o;
      if (((o = n.getPluralCategory(e, r)), t.indexOf(o) > -1)) return o;
      if (t.indexOf('other') > -1) return 'other';
      throw new Error('No plural message found for value "' + e + '"');
    }
    var Te = (function(e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return (r.locale = t), (r.deprecatedPluralFn = n), r;
      }
      return (
        Object(o.c)(t, e),
        (t.prototype.getPluralCategory = function(e, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, e)
              : L(t || this.locale)(e)
          ) {
            case b.Zero:
              return 'zero';
            case b.One:
              return 'one';
            case b.Two:
              return 'two';
            case b.Few:
              return 'few';
            case b.Many:
              return 'many';
            default:
              return 'other';
          }
        }),
        t
      );
    })(Re);
    function ke(e, t) {
      'string' == typeof t && (t = parseInt(t, 10));
      var n = t,
        r = n.toString().replace(/^[^.]*\.?/, ''),
        o = Math.floor(Math.abs(n)),
        i = r.length,
        u = parseInt(r, 10),
        a = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
      switch (e.split('-')[0].toLowerCase()) {
        case 'af':
        case 'asa':
        case 'az':
        case 'bem':
        case 'bez':
        case 'bg':
        case 'brx':
        case 'ce':
        case 'cgg':
        case 'chr':
        case 'ckb':
        case 'ee':
        case 'el':
        case 'eo':
        case 'es':
        case 'eu':
        case 'fo':
        case 'fur':
        case 'gsw':
        case 'ha':
        case 'haw':
        case 'hu':
        case 'jgo':
        case 'jmc':
        case 'ka':
        case 'kk':
        case 'kkj':
        case 'kl':
        case 'ks':
        case 'ksb':
        case 'ky':
        case 'lb':
        case 'lg':
        case 'mas':
        case 'mgo':
        case 'ml':
        case 'mn':
        case 'nb':
        case 'nd':
        case 'ne':
        case 'nn':
        case 'nnh':
        case 'nyn':
        case 'om':
        case 'or':
        case 'os':
        case 'ps':
        case 'rm':
        case 'rof':
        case 'rwk':
        case 'saq':
        case 'seh':
        case 'sn':
        case 'so':
        case 'sq':
        case 'ta':
        case 'te':
        case 'teo':
        case 'tk':
        case 'tr':
        case 'ug':
        case 'uz':
        case 'vo':
        case 'vun':
        case 'wae':
        case 'xog':
          return 1 === n ? b.One : b.Other;
        case 'ak':
        case 'ln':
        case 'mg':
        case 'pa':
        case 'ti':
          return n === Math.floor(n) && n >= 0 && n <= 1 ? b.One : b.Other;
        case 'am':
        case 'as':
        case 'bn':
        case 'fa':
        case 'gu':
        case 'hi':
        case 'kn':
        case 'mr':
        case 'zu':
          return 0 === o || 1 === n ? b.One : b.Other;
        case 'ar':
          return 0 === n
            ? b.Zero
            : 1 === n
            ? b.One
            : 2 === n
            ? b.Two
            : n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10
            ? b.Few
            : n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99
            ? b.Many
            : b.Other;
        case 'ast':
        case 'ca':
        case 'de':
        case 'en':
        case 'et':
        case 'fi':
        case 'fy':
        case 'gl':
        case 'it':
        case 'nl':
        case 'sv':
        case 'sw':
        case 'ur':
        case 'yi':
          return 1 === o && 0 === i ? b.One : b.Other;
        case 'be':
          return n % 10 == 1 && n % 100 != 11
            ? b.One
            : n % 10 === Math.floor(n % 10) &&
              n % 10 >= 2 &&
              n % 10 <= 4 &&
              !(n % 100 >= 12 && n % 100 <= 14)
            ? b.Few
            : n % 10 == 0 ||
              (n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9) ||
              (n % 100 === Math.floor(n % 100) &&
                n % 100 >= 11 &&
                n % 100 <= 14)
            ? b.Many
            : b.Other;
        case 'br':
          return n % 10 == 1 && n % 100 != 11 && n % 100 != 71 && n % 100 != 91
            ? b.One
            : n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92
            ? b.Two
            : n % 10 === Math.floor(n % 10) &&
              ((n % 10 >= 3 && n % 10 <= 4) || n % 10 == 9) &&
              !(
                (n % 100 >= 10 && n % 100 <= 19) ||
                (n % 100 >= 70 && n % 100 <= 79) ||
                (n % 100 >= 90 && n % 100 <= 99)
              )
            ? b.Few
            : 0 !== n && n % 1e6 == 0
            ? b.Many
            : b.Other;
        case 'bs':
        case 'hr':
        case 'sr':
          return (0 === i && o % 10 == 1 && o % 100 != 11) ||
            (u % 10 == 1 && u % 100 != 11)
            ? b.One
            : (0 === i &&
                o % 10 === Math.floor(o % 10) &&
                o % 10 >= 2 &&
                o % 10 <= 4 &&
                !(o % 100 >= 12 && o % 100 <= 14)) ||
              (u % 10 === Math.floor(u % 10) &&
                u % 10 >= 2 &&
                u % 10 <= 4 &&
                !(u % 100 >= 12 && u % 100 <= 14))
            ? b.Few
            : b.Other;
        case 'cs':
        case 'sk':
          return 1 === o && 0 === i
            ? b.One
            : o === Math.floor(o) && o >= 2 && o <= 4 && 0 === i
            ? b.Few
            : 0 !== i
            ? b.Many
            : b.Other;
        case 'cy':
          return 0 === n
            ? b.Zero
            : 1 === n
            ? b.One
            : 2 === n
            ? b.Two
            : 3 === n
            ? b.Few
            : 6 === n
            ? b.Many
            : b.Other;
        case 'da':
          return 1 === n || (0 !== a && (0 === o || 1 === o)) ? b.One : b.Other;
        case 'dsb':
        case 'hsb':
          return (0 === i && o % 100 == 1) || u % 100 == 1
            ? b.One
            : (0 === i && o % 100 == 2) || u % 100 == 2
            ? b.Two
            : (0 === i &&
                o % 100 === Math.floor(o % 100) &&
                o % 100 >= 3 &&
                o % 100 <= 4) ||
              (u % 100 === Math.floor(u % 100) && u % 100 >= 3 && u % 100 <= 4)
            ? b.Few
            : b.Other;
        case 'ff':
        case 'fr':
        case 'hy':
        case 'kab':
          return 0 === o || 1 === o ? b.One : b.Other;
        case 'fil':
          return (0 === i && (1 === o || 2 === o || 3 === o)) ||
            (0 === i && o % 10 != 4 && o % 10 != 6 && o % 10 != 9) ||
            (0 !== i && u % 10 != 4 && u % 10 != 6 && u % 10 != 9)
            ? b.One
            : b.Other;
        case 'ga':
          return 1 === n
            ? b.One
            : 2 === n
            ? b.Two
            : n === Math.floor(n) && n >= 3 && n <= 6
            ? b.Few
            : n === Math.floor(n) && n >= 7 && n <= 10
            ? b.Many
            : b.Other;
        case 'gd':
          return 1 === n || 11 === n
            ? b.One
            : 2 === n || 12 === n
            ? b.Two
            : n === Math.floor(n) &&
              ((n >= 3 && n <= 10) || (n >= 13 && n <= 19))
            ? b.Few
            : b.Other;
        case 'gv':
          return 0 === i && o % 10 == 1
            ? b.One
            : 0 === i && o % 10 == 2
            ? b.Two
            : 0 !== i ||
              (o % 100 != 0 &&
                o % 100 != 20 &&
                o % 100 != 40 &&
                o % 100 != 60 &&
                o % 100 != 80)
            ? 0 !== i
              ? b.Many
              : b.Other
            : b.Few;
        case 'he':
          return 1 === o && 0 === i
            ? b.One
            : 2 === o && 0 === i
            ? b.Two
            : 0 !== i || (n >= 0 && n <= 10) || n % 10 != 0
            ? b.Other
            : b.Many;
        case 'is':
          return (0 === a && o % 10 == 1 && o % 100 != 11) || 0 !== a
            ? b.One
            : b.Other;
        case 'ksh':
          return 0 === n ? b.Zero : 1 === n ? b.One : b.Other;
        case 'kw':
        case 'naq':
        case 'se':
        case 'smn':
          return 1 === n ? b.One : 2 === n ? b.Two : b.Other;
        case 'lag':
          return 0 === n
            ? b.Zero
            : (0 !== o && 1 !== o) || 0 === n
            ? b.Other
            : b.One;
        case 'lt':
          return n % 10 != 1 || (n % 100 >= 11 && n % 100 <= 19)
            ? n % 10 === Math.floor(n % 10) &&
              n % 10 >= 2 &&
              n % 10 <= 9 &&
              !(n % 100 >= 11 && n % 100 <= 19)
              ? b.Few
              : 0 !== u
              ? b.Many
              : b.Other
            : b.One;
        case 'lv':
        case 'prg':
          return n % 10 == 0 ||
            (n % 100 === Math.floor(n % 100) &&
              n % 100 >= 11 &&
              n % 100 <= 19) ||
            (2 === i &&
              u % 100 === Math.floor(u % 100) &&
              u % 100 >= 11 &&
              u % 100 <= 19)
            ? b.Zero
            : (n % 10 == 1 && n % 100 != 11) ||
              (2 === i && u % 10 == 1 && u % 100 != 11) ||
              (2 !== i && u % 10 == 1)
            ? b.One
            : b.Other;
        case 'mk':
          return (0 === i && o % 10 == 1) || u % 10 == 1 ? b.One : b.Other;
        case 'mt':
          return 1 === n
            ? b.One
            : 0 === n ||
              (n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
            ? b.Few
            : n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19
            ? b.Many
            : b.Other;
        case 'pl':
          return 1 === o && 0 === i
            ? b.One
            : 0 === i &&
              o % 10 === Math.floor(o % 10) &&
              o % 10 >= 2 &&
              o % 10 <= 4 &&
              !(o % 100 >= 12 && o % 100 <= 14)
            ? b.Few
            : (0 === i &&
                1 !== o &&
                o % 10 === Math.floor(o % 10) &&
                o % 10 >= 0 &&
                o % 10 <= 1) ||
              (0 === i &&
                o % 10 === Math.floor(o % 10) &&
                o % 10 >= 5 &&
                o % 10 <= 9) ||
              (0 === i &&
                o % 100 === Math.floor(o % 100) &&
                o % 100 >= 12 &&
                o % 100 <= 14)
            ? b.Many
            : b.Other;
        case 'pt':
          return n === Math.floor(n) && n >= 0 && n <= 2 && 2 !== n
            ? b.One
            : b.Other;
        case 'ro':
          return 1 === o && 0 === i
            ? b.One
            : 0 !== i ||
              0 === n ||
              (1 !== n &&
                n % 100 === Math.floor(n % 100) &&
                n % 100 >= 1 &&
                n % 100 <= 19)
            ? b.Few
            : b.Other;
        case 'ru':
        case 'uk':
          return 0 === i && o % 10 == 1 && o % 100 != 11
            ? b.One
            : 0 === i &&
              o % 10 === Math.floor(o % 10) &&
              o % 10 >= 2 &&
              o % 10 <= 4 &&
              !(o % 100 >= 12 && o % 100 <= 14)
            ? b.Few
            : (0 === i && o % 10 == 0) ||
              (0 === i &&
                o % 10 === Math.floor(o % 10) &&
                o % 10 >= 5 &&
                o % 10 <= 9) ||
              (0 === i &&
                o % 100 === Math.floor(o % 100) &&
                o % 100 >= 11 &&
                o % 100 <= 14)
            ? b.Many
            : b.Other;
        case 'shi':
          return 0 === o || 1 === n
            ? b.One
            : n === Math.floor(n) && n >= 2 && n <= 10
            ? b.Few
            : b.Other;
        case 'si':
          return 0 === n || 1 === n || (0 === o && 1 === u) ? b.One : b.Other;
        case 'sl':
          return 0 === i && o % 100 == 1
            ? b.One
            : 0 === i && o % 100 == 2
            ? b.Two
            : (0 === i &&
                o % 100 === Math.floor(o % 100) &&
                o % 100 >= 3 &&
                o % 100 <= 4) ||
              0 !== i
            ? b.Few
            : b.Other;
        case 'tzm':
          return (n === Math.floor(n) && n >= 0 && n <= 1) ||
            (n === Math.floor(n) && n >= 11 && n <= 99)
            ? b.One
            : b.Other;
        default:
          return b.Other;
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Me(e, t) {
      var n, r;
      t = encodeURIComponent(t);
      try {
        for (
          var i = Object(o.h)(e.split(';')), u = i.next();
          !u.done;
          u = i.next()
        ) {
          var a = u.value,
            s = a.indexOf('='),
            c = Object(o.f)(
              -1 == s ? [a, ''] : [a.slice(0, s), a.slice(s + 1)],
              2
            ),
            l = c[0],
            f = c[1];
          if (l.trim() === t) return decodeURIComponent(f);
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          u && !u.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return null;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Pe = (function() {
        function e(e, t, n, r) {
          (this._iterableDiffers = e),
            (this._keyValueDiffers = t),
            (this._ngEl = n),
            (this._renderer = r),
            (this._initialClasses = []);
        }
        return (
          Object.defineProperty(e.prototype, 'klass', {
            set: function(e) {
              this._removeClasses(this._initialClasses),
                (this._initialClasses =
                  'string' == typeof e ? e.split(/\s+/) : []),
                this._applyClasses(this._initialClasses),
                this._applyClasses(this._rawClass);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'ngClass', {
            set: function(e) {
              this._removeClasses(this._rawClass),
                this._applyClasses(this._initialClasses),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._rawClass = 'string' == typeof e ? e.split(/\s+/) : e),
                this._rawClass &&
                  (Object(r['ɵisListLikeIterable'])(this._rawClass)
                    ? (this._iterableDiffer = this._iterableDiffers
                        .find(this._rawClass)
                        .create())
                    : (this._keyValueDiffer = this._keyValueDiffers
                        .find(this._rawClass)
                        .create()));
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ngDoCheck = function() {
            if (this._iterableDiffer) {
              var e = this._iterableDiffer.diff(this._rawClass);
              e && this._applyIterableChanges(e);
            } else if (this._keyValueDiffer) {
              var t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }),
          (e.prototype._applyKeyValueChanges = function(e) {
            var t = this;
            e.forEachAddedItem(function(e) {
              return t._toggleClass(e.key, e.currentValue);
            }),
              e.forEachChangedItem(function(e) {
                return t._toggleClass(e.key, e.currentValue);
              }),
              e.forEachRemovedItem(function(e) {
                e.previousValue && t._toggleClass(e.key, !1);
              });
          }),
          (e.prototype._applyIterableChanges = function(e) {
            var t = this;
            e.forEachAddedItem(function(e) {
              if ('string' != typeof e.item)
                throw new Error(
                  'NgClass can only toggle CSS classes expressed as strings, got ' +
                    Object(r['ɵstringify'])(e.item)
                );
              t._toggleClass(e.item, !0);
            }),
              e.forEachRemovedItem(function(e) {
                return t._toggleClass(e.item, !1);
              });
          }),
          (e.prototype._applyClasses = function(e) {
            var t = this;
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach(function(e) {
                    return t._toggleClass(e, !0);
                  })
                : Object.keys(e).forEach(function(n) {
                    return t._toggleClass(n, !!e[n]);
                  }));
          }),
          (e.prototype._removeClasses = function(e) {
            var t = this;
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach(function(e) {
                    return t._toggleClass(e, !1);
                  })
                : Object.keys(e).forEach(function(e) {
                    return t._toggleClass(e, !1);
                  }));
          }),
          (e.prototype._toggleClass = function(e, t) {
            var n = this;
            (e = e.trim()) &&
              e.split(/\s+/g).forEach(function(e) {
                t
                  ? n._renderer.addClass(n._ngEl.nativeElement, e)
                  : n._renderer.removeClass(n._ngEl.nativeElement, e);
              });
          }),
          e
        );
      })(),
      Fe = (function() {
        function e(e) {
          (this._viewContainerRef = e),
            (this._componentRef = null),
            (this._moduleRef = null);
        }
        return (
          (e.prototype.ngOnChanges = function(e) {
            if (
              (this._viewContainerRef.clear(),
              (this._componentRef = null),
              this.ngComponentOutlet)
            ) {
              var t =
                this.ngComponentOutletInjector ||
                this._viewContainerRef.parentInjector;
              if (e.ngComponentOutletNgModuleFactory)
                if (
                  (this._moduleRef && this._moduleRef.destroy(),
                  this.ngComponentOutletNgModuleFactory)
                ) {
                  var n = t.get(r.NgModuleRef);
                  this._moduleRef = this.ngComponentOutletNgModuleFactory.create(
                    n.injector
                  );
                } else this._moduleRef = null;
              var o = (this._moduleRef
                ? this._moduleRef.componentFactoryResolver
                : t.get(r.ComponentFactoryResolver)
              ).resolveComponentFactory(this.ngComponentOutlet);
              this._componentRef = this._viewContainerRef.createComponent(
                o,
                this._viewContainerRef.length,
                t,
                this.ngComponentOutletContent
              );
            }
          }),
          (e.prototype.ngOnDestroy = function() {
            this._moduleRef && this._moduleRef.destroy();
          }),
          e
        );
      })(),
      Ne = (function() {
        function e(e, t, n, r) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = r);
        }
        return (
          Object.defineProperty(e.prototype, 'first', {
            get: function() {
              return 0 === this.index;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'last', {
            get: function() {
              return this.index === this.count - 1;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'even', {
            get: function() {
              return this.index % 2 == 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'odd', {
            get: function() {
              return !this.even;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      Ve = (function() {
        function e(e, t, n) {
          (this._viewContainer = e),
            (this._template = t),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        return (
          Object.defineProperty(e.prototype, 'ngForOf', {
            set: function(e) {
              (this._ngForOf = e), (this._ngForOfDirty = !0);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'ngForTrackBy', {
            get: function() {
              return this._trackByFn;
            },
            set: function(e) {
              Object(r.isDevMode)() &&
                null != e &&
                'function' != typeof e &&
                console &&
                console.warn &&
                console.warn(
                  'trackBy must be a function, but received ' +
                    JSON.stringify(e) +
                    '. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
                ),
                (this._trackByFn = e);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'ngForTemplate', {
            set: function(e) {
              e && (this._template = e);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ngDoCheck = function() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              var e = this._ngForOf;
              if (!this._differ && e)
                try {
                  this._differ = this._differs
                    .find(e)
                    .create(this.ngForTrackBy);
                } catch (t) {
                  throw new Error(
                    "Cannot find a differ supporting object '" +
                      e +
                      "' of type '" +
                      (function(e) {
                        return e.name || typeof e;
                      })(
                        /**
                         * @license
                         * Copyright Google Inc. All Rights Reserved.
                         *
                         * Use of this source code is governed by an MIT-style license that can be
                         * found in the LICENSE file at https://angular.io/license
                         */ e
                      ) +
                      "'. NgFor only supports binding to Iterables such as Arrays."
                  );
                }
            }
            if (this._differ) {
              var t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }),
          (e.prototype._applyChanges = function(e) {
            var t = this,
              n = [];
            e.forEachOperation(function(e, r, o) {
              if (null == e.previousIndex) {
                var i = t._viewContainer.createEmbeddedView(
                    t._template,
                    new Ne(null, t._ngForOf, -1, -1),
                    o
                  ),
                  u = new Le(e, i);
                n.push(u);
              } else if (null == o) t._viewContainer.remove(r);
              else {
                i = t._viewContainer.get(r);
                t._viewContainer.move(i, o);
                u = new Le(e, i);
                n.push(u);
              }
            });
            for (var r = 0; r < n.length; r++)
              this._perViewChange(n[r].view, n[r].record);
            r = 0;
            for (var o = this._viewContainer.length; r < o; r++) {
              var i = this._viewContainer.get(r);
              (i.context.index = r),
                (i.context.count = o),
                (i.context.ngForOf = this._ngForOf);
            }
            e.forEachIdentityChange(function(e) {
              t._viewContainer.get(e.currentIndex).context.$implicit = e.item;
            });
          }),
          (e.prototype._perViewChange = function(e, t) {
            e.context.$implicit = t.item;
          }),
          (e.ngTemplateContextGuard = function(e, t) {
            return !0;
          }),
          e
        );
      })(),
      Le = (function() {
        return function(e, t) {
          (this.record = e), (this.view = t);
        };
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Be = (function() {
        function e(e, t) {
          (this._viewContainer = e),
            (this._context = new Ue()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = t);
        }
        return (
          Object.defineProperty(e.prototype, 'ngIf', {
            set: function(e) {
              (this._context.$implicit = this._context.ngIf = e),
                this._updateView();
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'ngIfThen', {
            set: function(e) {
              He('ngIfThen', e),
                (this._thenTemplateRef = e),
                (this._thenViewRef = null),
                this._updateView();
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'ngIfElse', {
            set: function(e) {
              He('ngIfElse', e),
                (this._elseTemplateRef = e),
                (this._elseViewRef = null),
                this._updateView();
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype._updateView = function() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }),
          (e.ngTemplateGuard_ngIf = function(e, t) {
            return !0;
          }),
          e
        );
      })(),
      Ue = (function() {
        return function() {
          (this.$implicit = null), (this.ngIf = null);
        };
      })();
    function He(e, t) {
      if (!!(t && !t.createEmbeddedView))
        throw new Error(
          e +
            " must be a TemplateRef, but received '" +
            Object(r['ɵstringify'])(t) +
            "'."
        );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var ze = (function() {
        function e(e, t) {
          (this._viewContainerRef = e),
            (this._templateRef = t),
            (this._created = !1);
        }
        return (
          (e.prototype.create = function() {
            (this._created = !0),
              this._viewContainerRef.createEmbeddedView(this._templateRef);
          }),
          (e.prototype.destroy = function() {
            (this._created = !1), this._viewContainerRef.clear();
          }),
          (e.prototype.enforceState = function(e) {
            e && !this._created
              ? this.create()
              : !e && this._created && this.destroy();
          }),
          e
        );
      })(),
      Ge = (function() {
        function e() {
          (this._defaultUsed = !1),
            (this._caseCount = 0),
            (this._lastCaseCheckIndex = 0),
            (this._lastCasesMatched = !1);
        }
        return (
          Object.defineProperty(e.prototype, 'ngSwitch', {
            set: function(e) {
              (this._ngSwitch = e),
                0 === this._caseCount && this._updateDefaultCases(!0);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype._addCase = function() {
            return this._caseCount++;
          }),
          (e.prototype._addDefault = function(e) {
            this._defaultViews || (this._defaultViews = []),
              this._defaultViews.push(e);
          }),
          (e.prototype._matchCase = function(e) {
            var t = e == this._ngSwitch;
            return (
              (this._lastCasesMatched = this._lastCasesMatched || t),
              this._lastCaseCheckIndex++,
              this._lastCaseCheckIndex === this._caseCount &&
                (this._updateDefaultCases(!this._lastCasesMatched),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1)),
              t
            );
          }),
          (e.prototype._updateDefaultCases = function(e) {
            if (this._defaultViews && e !== this._defaultUsed) {
              this._defaultUsed = e;
              for (var t = 0; t < this._defaultViews.length; t++) {
                this._defaultViews[t].enforceState(e);
              }
            }
          }),
          e
        );
      })(),
      Ze = (function() {
        function e(e, t, n) {
          (this.ngSwitch = n), n._addCase(), (this._view = new ze(e, t));
        }
        return (
          (e.prototype.ngDoCheck = function() {
            this._view.enforceState(
              this.ngSwitch._matchCase(this.ngSwitchCase)
            );
          }),
          e
        );
      })(),
      qe = (function() {
        return function(e, t, n) {
          n._addDefault(new ze(e, t));
        };
      })(),
      We = (function() {
        function e(e) {
          (this._localization = e), (this._caseViews = {});
        }
        return (
          Object.defineProperty(e.prototype, 'ngPlural', {
            set: function(e) {
              (this._switchValue = e), this._updateView();
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.addCase = function(e, t) {
            this._caseViews[e] = t;
          }),
          (e.prototype._updateView = function() {
            this._clearViews();
            var e = Object.keys(this._caseViews),
              t = Ie(this._switchValue, e, this._localization);
            this._activateView(this._caseViews[t]);
          }),
          (e.prototype._clearViews = function() {
            this._activeView && this._activeView.destroy();
          }),
          (e.prototype._activateView = function(e) {
            e && ((this._activeView = e), this._activeView.create());
          }),
          e
        );
      })(),
      Qe = (function() {
        return function(e, t, n, r) {
          this.value = e;
          var o = !isNaN(Number(e));
          r.addCase(o ? '=' + e : e, new ze(n, t));
        };
      })(),
      Ke = (function() {
        function e(e, t, n) {
          (this._differs = e), (this._ngEl = t), (this._renderer = n);
        }
        return (
          Object.defineProperty(e.prototype, 'ngStyle', {
            set: function(e) {
              (this._ngStyle = e),
                !this._differ &&
                  e &&
                  (this._differ = this._differs.find(e).create());
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ngDoCheck = function() {
            if (this._differ) {
              var e = this._differ.diff(this._ngStyle);
              e && this._applyChanges(e);
            }
          }),
          (e.prototype._applyChanges = function(e) {
            var t = this;
            e.forEachRemovedItem(function(e) {
              return t._setStyle(e.key, null);
            }),
              e.forEachAddedItem(function(e) {
                return t._setStyle(e.key, e.currentValue);
              }),
              e.forEachChangedItem(function(e) {
                return t._setStyle(e.key, e.currentValue);
              });
          }),
          (e.prototype._setStyle = function(e, t) {
            var n = Object(o.f)(e.split('.'), 2),
              r = n[0],
              i = n[1];
            null != (t = null != t && i ? '' + t + i : t)
              ? this._renderer.setStyle(this._ngEl.nativeElement, r, t)
              : this._renderer.removeStyle(this._ngEl.nativeElement, r);
          }),
          e
        );
      })(),
      Ye = (function() {
        function e(e) {
          this._viewContainerRef = e;
        }
        return (
          (e.prototype.ngOnChanges = function(e) {
            this._shouldRecreateView(e)
              ? (this._viewRef &&
                  this._viewContainerRef.remove(
                    this._viewContainerRef.indexOf(this._viewRef)
                  ),
                this.ngTemplateOutlet &&
                  (this._viewRef = this._viewContainerRef.createEmbeddedView(
                    this.ngTemplateOutlet,
                    this.ngTemplateOutletContext
                  )))
              : this._viewRef &&
                this.ngTemplateOutletContext &&
                this._updateExistingContext(this.ngTemplateOutletContext);
          }),
          (e.prototype._shouldRecreateView = function(e) {
            var t = e.ngTemplateOutletContext;
            return (
              !!e.ngTemplateOutlet || (t && this._hasContextShapeChanged(t))
            );
          }),
          (e.prototype._hasContextShapeChanged = function(e) {
            var t,
              n,
              r = Object.keys(e.previousValue || {}),
              i = Object.keys(e.currentValue || {});
            if (r.length === i.length) {
              try {
                for (
                  var u = Object(o.h)(i), a = u.next();
                  !a.done;
                  a = u.next()
                ) {
                  var s = a.value;
                  if (-1 === r.indexOf(s)) return !0;
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  a && !a.done && (n = u.return) && n.call(u);
                } finally {
                  if (t) throw t.error;
                }
              }
              return !1;
            }
            return !0;
          }),
          (e.prototype._updateExistingContext = function(e) {
            var t, n;
            try {
              for (
                var r = Object(o.h)(Object.keys(e)), i = r.next();
                !i.done;
                i = r.next()
              ) {
                var u = i.value;
                this._viewRef.context[u] = this.ngTemplateOutletContext[u];
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
          }),
          e
        );
      })(),
      $e = [Pe, Fe, Ve, Be, Ye, Ke, Ge, Ze, qe, We, Qe];
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function Je(e, t) {
      return Error(
        "InvalidPipeArgument: '" +
          t +
          "' for pipe '" +
          Object(r['ɵstringify'])(e) +
          "'"
      );
    }
    var Xe = (function() {
        function e() {}
        return (
          (e.format = function(e, t, n, r) {
            void 0 === r && (r = {});
            var o = r.minimumIntegerDigits,
              i = r.minimumFractionDigits,
              u = r.maximumFractionDigits,
              a = r.currency,
              s = r.currencyAsSymbol,
              c = void 0 !== s && s,
              l = {
                minimumIntegerDigits: o,
                minimumFractionDigits: i,
                maximumFractionDigits: u,
                style: m[n].toLowerCase()
              };
            return (
              n == m.Currency &&
                ((l.currency = 'string' == typeof a ? a : void 0),
                (l.currencyDisplay = c ? 'symbol' : 'code')),
              new Intl.NumberFormat(t, l).format(e)
            );
          }),
          e
        );
      })(),
      et = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/,
      tt = {
        yMMMdjms: ft(
          lt([
            st('year', 1),
            ct('month', 3),
            st('day', 1),
            st('hour', 1),
            st('minute', 1),
            st('second', 1)
          ])
        ),
        yMdjm: ft(
          lt([
            st('year', 1),
            st('month', 1),
            st('day', 1),
            st('hour', 1),
            st('minute', 1)
          ])
        ),
        yMMMMEEEEd: ft(
          lt([st('year', 1), ct('month', 4), ct('weekday', 4), st('day', 1)])
        ),
        yMMMMd: ft(lt([st('year', 1), ct('month', 4), st('day', 1)])),
        yMMMd: ft(lt([st('year', 1), ct('month', 3), st('day', 1)])),
        yMd: ft(lt([st('year', 1), st('month', 1), st('day', 1)])),
        jms: ft(lt([st('hour', 1), st('second', 1), st('minute', 1)])),
        jm: ft(lt([st('hour', 1), st('minute', 1)]))
      },
      nt = {
        yyyy: ft(st('year', 4)),
        yy: ft(st('year', 2)),
        y: ft(st('year', 1)),
        MMMM: ft(ct('month', 4)),
        MMM: ft(ct('month', 3)),
        MM: ft(st('month', 2)),
        M: ft(st('month', 1)),
        LLLL: ft(ct('month', 4)),
        L: ft(ct('month', 1)),
        dd: ft(st('day', 2)),
        d: ft(st('day', 1)),
        HH: rt(ot(ft(at(st('hour', 2), !1)))),
        H: ot(ft(at(st('hour', 1), !1))),
        hh: rt(ot(ft(at(st('hour', 2), !0)))),
        h: ot(ft(at(st('hour', 1), !0))),
        jj: ft(st('hour', 2)),
        j: ft(st('hour', 1)),
        mm: rt(ft(st('minute', 2))),
        m: ft(st('minute', 1)),
        ss: rt(ft(st('second', 2))),
        s: ft(st('second', 1)),
        sss: ft(st('second', 3)),
        EEEE: ft(ct('weekday', 4)),
        EEE: ft(ct('weekday', 3)),
        EE: ft(ct('weekday', 2)),
        E: ft(ct('weekday', 1)),
        a: (function(e) {
          return function(t, n) {
            return e(t, n).split(' ')[1];
          };
        })(ft(at(st('hour', 1), !0))),
        Z: ut('short'),
        z: ut('long'),
        ww: ft({}),
        w: ft({}),
        G: ft(ct('era', 1)),
        GG: ft(ct('era', 2)),
        GGG: ft(ct('era', 3)),
        GGGG: ft(ct('era', 4))
      };
    function rt(e) {
      return function(t, n) {
        var r = e(t, n);
        return 1 == r.length ? '0' + r : r;
      };
    }
    function ot(e) {
      return function(t, n) {
        return e(t, n).split(' ')[0];
      };
    }
    function it(e, t, n) {
      return new Intl.DateTimeFormat(t, n)
        .format(e)
        .replace(/[\u200e\u200f]/g, '');
    }
    function ut(e) {
      var t = { hour: '2-digit', hour12: !1, timeZoneName: e };
      return function(e, n) {
        var r = it(e, n, t);
        return r ? r.substring(3) : '';
      };
    }
    function at(e, t) {
      return (e.hour12 = t), e;
    }
    function st(e, t) {
      var n = {};
      return (n[e] = 2 === t ? '2-digit' : 'numeric'), n;
    }
    function ct(e, t) {
      var n = {};
      return (n[e] = t < 4 ? (t > 1 ? 'short' : 'narrow') : 'long'), n;
    }
    function lt(e) {
      return e.reduce(function(e, t) {
        return Object(o.a)({}, e, t);
      }, {});
    }
    function ft(e) {
      return function(t, n) {
        return it(t, n, e);
      };
    }
    var dt = new Map();
    var pt = (function() {
        function e() {}
        return (
          (e.format = function(e, t, n) {
            return (function(e, t, n) {
              var r = tt[e];
              if (r) return r(t, n);
              var o = e,
                i = dt.get(o);
              if (!i) {
                i = [];
                var u = void 0;
                et.exec(e);
                for (var a = e; a; )
                  (u = et.exec(a))
                    ? (a = (i = i.concat(u.slice(1))).pop())
                    : (i.push(a), (a = null));
                dt.set(o, i);
              }
              return i.reduce(function(e, r) {
                var o = nt[r];
                return (
                  e +
                  (o
                    ? o(t, n)
                    : (function(e) {
                        return "''" === e
                          ? "'"
                          : e.replace(/(^'|'$)/g, '').replace(/''/g, "'");
                      })(r))
                );
              }, '');
            })(n, e, t);
          }),
          e
        );
      })(),
      ht = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n) {
            if (
              (void 0 === n && (n = 'mediumDate'),
              null == e || '' === e || e != e)
            )
              return null;
            var r;
            if (('string' == typeof e && (e = e.trim()), vt(e))) r = e;
            else if (isNaN(e - parseFloat(e)))
              if ('string' == typeof e && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                var i = Object(o.f)(
                    e.split('-').map(function(e) {
                      return parseInt(e, 10);
                    }),
                    3
                  ),
                  u = i[0],
                  a = i[1],
                  s = i[2];
                r = new Date(u, a - 1, s);
              } else r = new Date(e);
            else r = new Date(parseFloat(e));
            if (!vt(r)) {
              var c = void 0;
              if ('string' != typeof e || !(c = e.match(K))) throw Je(t, e);
              r = de(c);
            }
            return pt.format(r, this._locale, t._ALIASES[n] || n);
          }),
          (e._ALIASES = {
            medium: 'yMMMdjms',
            short: 'yMdjm',
            fullDate: 'yMMMMEEEEd',
            longDate: 'yMMMMd',
            mediumDate: 'yMMMd',
            shortDate: 'yMd',
            mediumTime: 'jms',
            shortTime: 'jm'
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function vt(e) {
      return e instanceof Date && !isNaN(e.valueOf());
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function gt(e, t, n, r, o, i, u) {
      if ((void 0 === i && (i = null), void 0 === u && (u = !1), null == n))
        return null;
      if (
        'number' !=
        typeof (n = 'string' != typeof n || isNaN(+n - parseFloat(n)) ? n : +n)
      )
        throw Je(e, n);
      var a, s, c;
      if ((r !== m.Currency && ((a = 1), (s = 0), (c = 3)), o)) {
        var l = o.match(he);
        if (null === l)
          throw new Error(o + ' is not a valid digit info for number pipes');
        null != l[1] && (a = Ae(l[1])),
          null != l[3] && (s = Ae(l[3])),
          null != l[5] && (c = Ae(l[5]));
      }
      return Xe.format(n, t, r, {
        minimumIntegerDigits: a,
        minimumFractionDigits: s,
        maximumFractionDigits: c,
        currency: i,
        currencyAsSymbol: u
      });
    }
    var yt = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n) {
            return gt(t, this._locale, e, m.Decimal, n);
          }),
          e
        );
      })(),
      mt = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n) {
            return gt(t, this._locale, e, m.Percent, n);
          }),
          e
        );
      })(),
      bt = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r, o) {
            return (
              void 0 === n && (n = 'USD'),
              void 0 === r && (r = !1),
              gt(t, this._locale, e, m.Currency, o, n, r)
            );
          }),
          e
        );
      })(),
      _t = [yt, mt, bt, ht],
      wt = (function() {
        function e() {}
        return (
          (e.prototype.createSubscription = function(e, t) {
            return e.subscribe({
              next: t,
              error: function(e) {
                throw e;
              }
            });
          }),
          (e.prototype.dispose = function(e) {
            e.unsubscribe();
          }),
          (e.prototype.onDestroy = function(e) {
            e.unsubscribe();
          }),
          e
        );
      })(),
      Ct = new ((function() {
        function e() {}
        return (
          (e.prototype.createSubscription = function(e, t) {
            return e.then(t, function(e) {
              throw e;
            });
          }),
          (e.prototype.dispose = function(e) {}),
          (e.prototype.onDestroy = function(e) {}),
          e
        );
      })())(),
      Dt = new wt(),
      Et = (function() {
        function e(e) {
          (this._ref = e),
            (this._latestValue = null),
            (this._latestReturnedValue = null),
            (this._subscription = null),
            (this._obj = null),
            (this._strategy = null);
        }
        var t;
        return (
          (t = e),
          (e.prototype.ngOnDestroy = function() {
            this._subscription && this._dispose();
          }),
          (e.prototype.transform = function(e) {
            return this._obj
              ? e !== this._obj
                ? (this._dispose(), this.transform(e))
                : this._latestValue === this._latestReturnedValue
                ? this._latestReturnedValue
                : ((this._latestReturnedValue = this._latestValue),
                  r.WrappedValue.wrap(this._latestValue))
              : (e && this._subscribe(e),
                (this._latestReturnedValue = this._latestValue),
                this._latestValue);
          }),
          (e.prototype._subscribe = function(e) {
            var t = this;
            (this._obj = e),
              (this._strategy = this._selectStrategy(e)),
              (this._subscription = this._strategy.createSubscription(
                e,
                function(n) {
                  return t._updateLatestValue(e, n);
                }
              ));
          }),
          (e.prototype._selectStrategy = function(e) {
            if (Object(r['ɵisPromise'])(e)) return Ct;
            if (Object(r['ɵisObservable'])(e)) return Dt;
            throw Je(t, e);
          }),
          (e.prototype._dispose = function() {
            this._strategy.dispose(this._subscription),
              (this._latestValue = null),
              (this._latestReturnedValue = null),
              (this._subscription = null),
              (this._obj = null);
          }),
          (e.prototype._updateLatestValue = function(e, t) {
            e === this._obj &&
              ((this._latestValue = t), this._ref.markForCheck());
          }),
          e
        );
      })(),
      Ot = (function() {
        function e() {}
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e) {
            if (!e) return e;
            if ('string' != typeof e) throw Je(t, e);
            return e.toLowerCase();
          }),
          e
        );
      })(),
      St = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g,
      xt = (function() {
        function e() {}
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e) {
            if (!e) return e;
            if ('string' != typeof e) throw Je(t, e);
            return e.replace(St, function(e) {
              return e[0].toUpperCase() + e.substr(1).toLowerCase();
            });
          }),
          e
        );
      })(),
      At = (function() {
        function e() {}
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e) {
            if (!e) return e;
            if ('string' != typeof e) throw Je(t, e);
            return e.toUpperCase();
          }),
          e
        );
      })(),
      jt = (function() {
        function e(e) {
          this.locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r, o) {
            if (
              (void 0 === n && (n = 'mediumDate'),
              null == e || '' === e || e != e)
            )
              return null;
            try {
              return te(e, n, o || this.locale, r);
            } catch (e) {
              throw Je(t, e.message);
            }
          }),
          e
        );
      })(),
      Rt = /#/g,
      It = (function() {
        function e(e) {
          this._localization = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r) {
            if (null == e) return '';
            if ('object' != typeof n || null === n) throw Je(t, n);
            return n[Ie(e, Object.keys(n), this._localization, r)].replace(
              Rt,
              e.toString()
            );
          }),
          e
        );
      })(),
      Tt = (function() {
        function e() {}
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n) {
            if (null == e) return '';
            if ('object' != typeof n || 'string' != typeof e) throw Je(t, n);
            return n.hasOwnProperty(e)
              ? n[e]
              : n.hasOwnProperty('other')
              ? n.other
              : '';
          }),
          e
        );
      })(),
      kt = (function() {
        function e() {}
        return (
          (e.prototype.transform = function(e) {
            return JSON.stringify(e, null, 2);
          }),
          e
        );
      })();
    var Mt = (function() {
      function e(e) {
        this.differs = e;
      }
      return (
        (e.prototype.transform = function(e, t) {
          var n = this;
          if (
            (void 0 === t && (t = Pt),
            !e || (!(e instanceof Map) && 'object' != typeof e))
          )
            return null;
          this.differ || (this.differ = this.differs.find(e).create());
          var r = this.differ.diff(e);
          return (
            r &&
              ((this.keyValues = []),
              r.forEachItem(function(e) {
                n.keyValues.push(
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */
                  (function(e, t) {
                    return { key: e, value: t };
                  })(e.key, e.currentValue)
                );
              }),
              this.keyValues.sort(t)),
            this.keyValues
          );
        }),
        e
      );
    })();
    function Pt(e, t) {
      var n = e.key,
        r = t.key;
      if (n === r) return 0;
      if (void 0 === n) return 1;
      if (void 0 === r) return -1;
      if (null === n) return 1;
      if (null === r) return -1;
      if ('string' == typeof n && 'string' == typeof r) return n < r ? -1 : 1;
      if ('number' == typeof n && 'number' == typeof r) return n - r;
      if ('boolean' == typeof n && 'boolean' == typeof r) return n < r ? -1 : 1;
      var o = String(n),
        i = String(r);
      return o == i ? 0 : o < i ? -1 : 1;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Ft = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r) {
            if (Lt(e)) return null;
            r = r || this._locale;
            try {
              return Se(Bt(e), r, n);
            } catch (e) {
              throw Je(t, e.message);
            }
          }),
          e
        );
      })(),
      Nt = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r) {
            if (Lt(e)) return null;
            r = r || this._locale;
            try {
              return Oe(Bt(e), r, n);
            } catch (e) {
              throw Je(t, e.message);
            }
          }),
          e
        );
      })(),
      Vt = (function() {
        function e(e) {
          this._locale = e;
        }
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r, o, i) {
            if ((void 0 === r && (r = 'symbol'), Lt(e))) return null;
            (i = i || this._locale),
              'boolean' == typeof r &&
                (console &&
                  console.warn &&
                  console.warn(
                    'Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'
                  ),
                (r = r ? 'symbol' : 'code'));
            var u = n || 'USD';
            'code' !== r &&
              (u =
                'symbol' === r || 'symbol-narrow' === r
                  ? q(u, 'symbol' === r ? 'wide' : 'narrow', i)
                  : r);
            try {
              return Ee(Bt(e), i, u, n, o);
            } catch (e) {
              throw Je(t, e.message);
            }
          }),
          e
        );
      })();
    function Lt(e) {
      return null == e || '' === e || e != e;
    }
    function Bt(e) {
      if ('string' == typeof e && !isNaN(Number(e) - parseFloat(e)))
        return Number(e);
      if ('number' != typeof e) throw new Error(e + ' is not a number');
      return e;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Ut = (function() {
        function e() {}
        var t;
        return (
          (t = e),
          (e.prototype.transform = function(e, n, r) {
            if (null == e) return e;
            if (!this.supports(e)) throw Je(t, e);
            return e.slice(n, r);
          }),
          (e.prototype.supports = function(e) {
            return 'string' == typeof e || Array.isArray(e);
          }),
          e
        );
      })(),
      Ht = [Et, At, Ot, kt, Ut, Ft, Nt, xt, Vt, jt, It, Tt, Mt],
      zt = (function() {
        return function() {};
      })(),
      Gt = (function() {
        return function() {};
      })(),
      Zt = new r.InjectionToken('DocumentToken'),
      qt = 'browser',
      Wt = 'server',
      Qt = 'browserWorkerApp',
      Kt = 'browserWorkerUi';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Yt(e) {
      return e === qt;
    }
    function $t(e) {
      return e === Wt;
    }
    function Jt(e) {
      return e === Qt;
    }
    function Xt(e) {
      return e === Kt;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var en = new r.Version('7.1.1'),
      tn = (function() {
        function e() {}
        return (
          (e.ngInjectableDef = Object(r.defineInjectable)({
            providedIn: 'root',
            factory: function() {
              return new nn(Object(r.inject)(Zt), window);
            }
          })),
          e
        );
      })(),
      nn = (function() {
        function e(e, t) {
          (this.document = e),
            (this.window = t),
            (this.offset = function() {
              return [0, 0];
            });
        }
        return (
          (e.prototype.setOffset = function(e) {
            Array.isArray(e)
              ? (this.offset = function() {
                  return e;
                })
              : (this.offset = e);
          }),
          (e.prototype.getScrollPosition = function() {
            return this.supportScrollRestoration()
              ? [this.window.scrollX, this.window.scrollY]
              : [0, 0];
          }),
          (e.prototype.scrollToPosition = function(e) {
            this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
          }),
          (e.prototype.scrollToAnchor = function(e) {
            if (this.supportScrollRestoration()) {
              var t = this.document.querySelector('#' + e);
              if (t) return void this.scrollToElement(t);
              var n = this.document.querySelector("[name='" + e + "']");
              if (n) return void this.scrollToElement(n);
            }
          }),
          (e.prototype.setHistoryScrollRestoration = function(e) {
            if (this.supportScrollRestoration()) {
              var t = this.window.history;
              t && t.scrollRestoration && (t.scrollRestoration = e);
            }
          }),
          (e.prototype.scrollToElement = function(e) {
            var t = e.getBoundingClientRect(),
              n = t.left + this.window.pageXOffset,
              r = t.top + this.window.pageYOffset,
              o = this.offset();
            this.window.scrollTo(n - o[0], r - o[1]);
          }),
          (e.prototype.supportScrollRestoration = function() {
            try {
              return !!this.window && !!this.window.scrollTo;
            } catch (e) {
              return !1;
            }
          }),
          e
        );
      })(),
      rn = (function() {
        function e() {}
        return (
          (e.prototype.setOffset = function(e) {}),
          (e.prototype.getScrollPosition = function() {
            return [0, 0];
          }),
          (e.prototype.scrollToPosition = function(e) {}),
          (e.prototype.scrollToAnchor = function(e) {}),
          (e.prototype.setHistoryScrollRestoration = function(e) {}),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r = { e: {} };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = !1,
      o = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          e && new Error().stack;
          r = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return i;
    });
    var r = n(15),
      o = n(39);
    function i(e, t, n, i, u) {
      if ((void 0 === u && (u = new r.a(e, n, i)), !u.closed))
        return Object(o.a)(t)(u);
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(0),
      o = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.c(t, e),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function(e, t) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function(e) {
            this.destination.complete();
          }),
          t
        );
      })(n(2).a);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n(1),
      i = n(49),
      u = n(24),
      a = n(74),
      s = n(3);
    function c() {
      return (
        Error.call(this),
        (this.message = 'no elements in sequence'),
        (this.name = 'EmptyError'),
        this
      );
    }
    c.prototype = Object.create(Error.prototype);
    var l = c,
      f = n(14),
      d = n(34),
      p = n(9),
      h = n(8),
      v = n(11),
      g = {};
    var y = (function() {
        function e(e) {
          this.resultSelector = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new m(e, this.resultSelector));
          }),
          e
        );
      })(),
      m = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (
            (r.resultSelector = n),
            (r.active = 0),
            (r.values = []),
            (r.observables = []),
            r
          );
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            this.values.push(g), this.observables.push(e);
          }),
          (t.prototype._complete = function() {
            var e = this.observables,
              t = e.length;
            if (0 === t) this.destination.complete();
            else {
              (this.active = t), (this.toRespond = t);
              for (var n = 0; n < t; n++) {
                var r = e[n];
                this.add(Object(h.a)(this, r, r, n));
              }
            }
          }),
          (t.prototype.notifyComplete = function(e) {
            0 == (this.active -= 1) && this.destination.complete();
          }),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            var i = this.values,
              u = i[n],
              a = this.toRespond
                ? u === g
                  ? --this.toRespond
                  : this.toRespond
                : 0;
            (i[n] = t),
              0 === a &&
                (this.resultSelector
                  ? this._tryResultSelector(i)
                  : this.destination.next(i.slice()));
          }),
          (t.prototype._tryResultSelector = function(e) {
            var t;
            try {
              t = this.resultSelector.apply(this, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(p.a),
      b = n(23);
    function _(e) {
      return new s.a(function(t) {
        var n;
        try {
          n = e();
        } catch (e) {
          return void t.error(e);
        }
        return (n ? Object(u.a)(n) : Object(b.b)()).subscribe(t);
      });
    }
    var w = n(27),
      C = n(25),
      D = n(36);
    function E() {
      return Object(D.a)(1);
    }
    var O = n(50),
      S = n(2);
    function x() {
      return (
        Error.call(this),
        (this.message = 'argument out of range'),
        (this.name = 'ArgumentOutOfRangeError'),
        this
      );
    }
    x.prototype = Object.create(Error.prototype);
    var A = x;
    function j(e) {
      return function(t) {
        return 0 === e ? Object(b.b)() : t.lift(new R(e));
      };
    }
    var R = (function() {
        function e(e) {
          if (((this.total = e), this.total < 0)) throw new A();
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new I(e, this.total));
          }),
          e
        );
      })(),
      I = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            var t = this.ring,
              n = this.total,
              r = this.count++;
            t.length < n ? t.push(e) : (t[r % n] = e);
          }),
          (t.prototype._complete = function() {
            var e = this.destination,
              t = this.count;
            if (t > 0)
              for (
                var n = this.count >= this.total ? this.total : this.count,
                  r = this.ring,
                  o = 0;
                o < n;
                o++
              ) {
                var i = t++ % n;
                e.next(r[i]);
              }
            e.complete();
          }),
          t
        );
      })(S.a),
      T = n(12),
      k = n(20);
    function M(e, t, n) {
      return function(r) {
        return r.lift(new P(e, t, n));
      };
    }
    var P = (function() {
        function e(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(
              new F(e, this.nextOrObserver, this.error, this.complete)
            );
          }),
          e
        );
      })(),
      F = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          return (
            (i._tapNext = T.a),
            (i._tapError = T.a),
            (i._tapComplete = T.a),
            (i._tapError = r || T.a),
            (i._tapComplete = o || T.a),
            Object(k.a)(n)
              ? ((i._context = i), (i._tapNext = n))
              : n &&
                ((i._context = n),
                (i._tapNext = n.next || T.a),
                (i._tapError = n.error || T.a),
                (i._tapComplete = n.complete || T.a)),
            i
          );
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            try {
              this._tapNext.call(this._context, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(e);
          }),
          (t.prototype._error = function(e) {
            try {
              this._tapError.call(this._context, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.error(e);
          }),
          (t.prototype._complete = function() {
            try {
              this._tapComplete.call(this._context);
            } catch (e) {
              return void this.destination.error(e);
            }
            return this.destination.complete();
          }),
          t
        );
      })(S.a),
      N = function(e) {
        return (
          void 0 === e && (e = V),
          M({
            hasValue: !1,
            next: function() {
              this.hasValue = !0;
            },
            complete: function() {
              if (!this.hasValue) throw e();
            }
          })
        );
      };
    function V() {
      return new l();
    }
    function L(e) {
      return (
        void 0 === e && (e = null),
        function(t) {
          return t.lift(new B(e));
        }
      );
    }
    var B = (function() {
        function e(e) {
          this.defaultValue = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new U(e, this.defaultValue));
          }),
          e
        );
      })(),
      U = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.defaultValue = n), (r.isEmpty = !0), r;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            (this.isEmpty = !1), this.destination.next(e);
          }),
          (t.prototype._complete = function() {
            this.isEmpty && this.destination.next(this.defaultValue),
              this.destination.complete();
          }),
          t
        );
      })(S.a),
      H = n(28);
    function z(e, t) {
      var n = arguments.length >= 2;
      return function(r) {
        return r.pipe(
          e
            ? Object(O.a)(function(t, n) {
                return e(t, n, r);
              })
            : H.a,
          j(1),
          n
            ? L(t)
            : N(function() {
                return new l();
              })
        );
      };
    }
    var G = n(75);
    function Z(e) {
      return function(t) {
        return 0 === e ? Object(b.b)() : t.lift(new q(e));
      };
    }
    var q = (function() {
        function e(e) {
          if (((this.total = e), this.total < 0)) throw new A();
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new W(e, this.total));
          }),
          e
        );
      })(),
      W = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.total = n), (r.count = 0), r;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            var t = this.total,
              n = ++this.count;
            n <= t &&
              (this.destination.next(e),
              n === t && (this.destination.complete(), this.unsubscribe()));
          }),
          t
        );
      })(S.a);
    function Q(e, t) {
      var n = arguments.length >= 2;
      return function(r) {
        return r.pipe(
          e
            ? Object(O.a)(function(t, n) {
                return e(t, n, r);
              })
            : H.a,
          Z(1),
          n
            ? L(t)
            : N(function() {
                return new l();
              })
        );
      };
    }
    var K = n(37);
    var Y = (function() {
        function e(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(
              new $(e, this.predicate, this.thisArg, this.source)
            );
          }),
          e
        );
      })(),
      $ = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          return (
            (i.predicate = n),
            (i.thisArg = r),
            (i.source = o),
            (i.index = 0),
            (i.thisArg = r || i),
            i
          );
        }
        return (
          r.c(t, e),
          (t.prototype.notifyComplete = function(e) {
            this.destination.next(e), this.destination.complete();
          }),
          (t.prototype._next = function(e) {
            var t = !1;
            try {
              t = this.predicate.call(
                this.thisArg,
                e,
                this.index++,
                this.source
              );
            } catch (e) {
              return void this.destination.error(e);
            }
            t || this.notifyComplete(!1);
          }),
          (t.prototype._complete = function() {
            this.notifyComplete(!0);
          }),
          t
        );
      })(S.a),
      J = n(76),
      X = n(46);
    function ee() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return 1 === e.length || (2 === e.length && Object(f.a)(e[1]))
        ? Object(u.a)(e[0])
        : E()(i.a.apply(void 0, e));
    }
    var te = n(60),
      ne = n(77),
      re = n(32);
    var oe = n(4);
    var ie = (function() {
        function e(e) {
          this.callback = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new ue(e, this.callback));
          }),
          e
        );
      })(),
      ue = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return r.add(new oe.a(n)), r;
        }
        return r.c(t, e), t;
      })(S.a),
      ae = n(5),
      se = n(33);
    n.d(t, 'ɵangular_packages_router_router_a', function() {
      return qn;
    }),
      n.d(t, 'ɵangular_packages_router_router_h', function() {
        return nr;
      }),
      n.d(t, 'ɵangular_packages_router_router_c', function() {
        return Yn;
      }),
      n.d(t, 'ɵangular_packages_router_router_i', function() {
        return rr;
      }),
      n.d(t, 'ɵangular_packages_router_router_j', function() {
        return or;
      }),
      n.d(t, 'ɵangular_packages_router_router_e', function() {
        return Jn;
      }),
      n.d(t, 'ɵangular_packages_router_router_d', function() {
        return $n;
      }),
      n.d(t, 'ɵangular_packages_router_router_k', function() {
        return ur;
      }),
      n.d(t, 'ɵangular_packages_router_router_g', function() {
        return tr;
      }),
      n.d(t, 'ɵangular_packages_router_router_b', function() {
        return Qn;
      }),
      n.d(t, 'ɵangular_packages_router_router_f', function() {
        return er;
      }),
      n.d(t, 'ɵangular_packages_router_router_n', function() {
        return Gn;
      }),
      n.d(t, 'ɵangular_packages_router_router_l', function() {
        return ft;
      }),
      n.d(t, 'ɵangular_packages_router_router_m', function() {
        return ht;
      }),
      n.d(t, 'RouterLink', function() {
        return Tn;
      }),
      n.d(t, 'RouterLinkWithHref', function() {
        return kn;
      }),
      n.d(t, 'RouterLinkActive', function() {
        return Pn;
      }),
      n.d(t, 'RouterOutlet', function() {
        return Vn;
      }),
      n.d(t, 'ActivationEnd', function() {
        return Ee;
      }),
      n.d(t, 'ActivationStart', function() {
        return De;
      }),
      n.d(t, 'ChildActivationEnd', function() {
        return Ce;
      }),
      n.d(t, 'ChildActivationStart', function() {
        return we;
      }),
      n.d(t, 'GuardsCheckEnd', function() {
        return ge;
      }),
      n.d(t, 'GuardsCheckStart', function() {
        return ve;
      }),
      n.d(t, 'NavigationCancel', function() {
        return de;
      }),
      n.d(t, 'NavigationEnd', function() {
        return fe;
      }),
      n.d(t, 'NavigationError', function() {
        return pe;
      }),
      n.d(t, 'NavigationStart', function() {
        return le;
      }),
      n.d(t, 'ResolveEnd', function() {
        return me;
      }),
      n.d(t, 'ResolveStart', function() {
        return ye;
      }),
      n.d(t, 'RouteConfigLoadEnd', function() {
        return _e;
      }),
      n.d(t, 'RouteConfigLoadStart', function() {
        return be;
      }),
      n.d(t, 'RouterEvent', function() {
        return ce;
      }),
      n.d(t, 'RoutesRecognized', function() {
        return he;
      }),
      n.d(t, 'Scroll', function() {
        return Oe;
      }),
      n.d(t, 'RouteReuseStrategy', function() {
        return Cn;
      }),
      n.d(t, 'Router', function() {
        return In;
      }),
      n.d(t, 'ROUTES', function() {
        return En;
      }),
      n.d(t, 'ROUTER_CONFIGURATION', function() {
        return Zn;
      }),
      n.d(t, 'ROUTER_INITIALIZER', function() {
        return ir;
      }),
      n.d(t, 'RouterModule', function() {
        return Kn;
      }),
      n.d(t, 'provideRoutes', function() {
        return Xn;
      }),
      n.d(t, 'ChildrenOutletContexts', function() {
        return Nn;
      }),
      n.d(t, 'OutletContext', function() {
        return Fn;
      }),
      n.d(t, 'NoPreloading', function() {
        return Hn;
      }),
      n.d(t, 'PreloadAllModules', function() {
        return Un;
      }),
      n.d(t, 'PreloadingStrategy', function() {
        return Bn;
      }),
      n.d(t, 'RouterPreloader', function() {
        return zn;
      }),
      n.d(t, 'ActivatedRoute', function() {
        return mt;
      }),
      n.d(t, 'ActivatedRouteSnapshot', function() {
        return _t;
      }),
      n.d(t, 'RouterState', function() {
        return gt;
      }),
      n.d(t, 'RouterStateSnapshot', function() {
        return wt;
      }),
      n.d(t, 'PRIMARY_OUTLET', function() {
        return xe;
      }),
      n.d(t, 'convertToParamMap', function() {
        return je;
      }),
      n.d(t, 'UrlHandlingStrategy', function() {
        return Sn;
      }),
      n.d(t, 'DefaultUrlSerializer', function() {
        return $e;
      }),
      n.d(t, 'UrlSegment', function() {
        return We;
      }),
      n.d(t, 'UrlSegmentGroup', function() {
        return qe;
      }),
      n.d(t, 'UrlSerializer', function() {
        return Ye;
      }),
      n.d(t, 'UrlTree', function() {
        return Ze;
      }),
      n.d(t, 'VERSION', function() {
        return ar;
      }),
      n.d(t, 'ɵEmptyOutletComponent', function() {
        return Se;
      }),
      n.d(t, 'ɵROUTER_PROVIDERS', function() {
        return Wn;
      }),
      n.d(t, 'ɵflatten', function() {
        return Le;
      });
    /**
     * @license Angular v7.1.1
     * (c) 2010-2018 Google, Inc. https://angular.io/
     * License: MIT
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ce = (function() {
        return function(e, t) {
          (this.id = e), (this.url = t);
        };
      })(),
      le = (function(e) {
        function t(t, n, r, o) {
          void 0 === r && (r = 'imperative'), void 0 === o && (o = null);
          var i = e.call(this, t, n) || this;
          return (i.navigationTrigger = r), (i.restoredState = o), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'NavigationStart(id: ' + this.id + ", url: '" + this.url + "')"
            );
          }),
          t
        );
      })(ce),
      fe = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t, n) || this;
          return (o.urlAfterRedirects = r), o;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'NavigationEnd(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', urlAfterRedirects: '" +
              this.urlAfterRedirects +
              "')"
            );
          }),
          t
        );
      })(ce),
      de = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t, n) || this;
          return (o.reason = r), o;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'NavigationCancel(id: ' + this.id + ", url: '" + this.url + "')"
            );
          }),
          t
        );
      })(ce),
      pe = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t, n) || this;
          return (o.error = r), o;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'NavigationError(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', error: " +
              this.error +
              ')'
            );
          }),
          t
        );
      })(ce),
      he = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t, n) || this;
          return (i.urlAfterRedirects = r), (i.state = o), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'RoutesRecognized(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', urlAfterRedirects: '" +
              this.urlAfterRedirects +
              "', state: " +
              this.state +
              ')'
            );
          }),
          t
        );
      })(ce),
      ve = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t, n) || this;
          return (i.urlAfterRedirects = r), (i.state = o), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'GuardsCheckStart(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', urlAfterRedirects: '" +
              this.urlAfterRedirects +
              "', state: " +
              this.state +
              ')'
            );
          }),
          t
        );
      })(ce),
      ge = (function(e) {
        function t(t, n, r, o, i) {
          var u = e.call(this, t, n) || this;
          return (
            (u.urlAfterRedirects = r), (u.state = o), (u.shouldActivate = i), u
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'GuardsCheckEnd(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', urlAfterRedirects: '" +
              this.urlAfterRedirects +
              "', state: " +
              this.state +
              ', shouldActivate: ' +
              this.shouldActivate +
              ')'
            );
          }),
          t
        );
      })(ce),
      ye = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t, n) || this;
          return (i.urlAfterRedirects = r), (i.state = o), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'ResolveStart(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', urlAfterRedirects: '" +
              this.urlAfterRedirects +
              "', state: " +
              this.state +
              ')'
            );
          }),
          t
        );
      })(ce),
      me = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t, n) || this;
          return (i.urlAfterRedirects = r), (i.state = o), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return (
              'ResolveEnd(id: ' +
              this.id +
              ", url: '" +
              this.url +
              "', urlAfterRedirects: '" +
              this.urlAfterRedirects +
              "', state: " +
              this.state +
              ')'
            );
          }),
          t
        );
      })(ce),
      be = (function() {
        function e(e) {
          this.route = e;
        }
        return (
          (e.prototype.toString = function() {
            return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
          }),
          e
        );
      })(),
      _e = (function() {
        function e(e) {
          this.route = e;
        }
        return (
          (e.prototype.toString = function() {
            return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
          }),
          e
        );
      })(),
      we = (function() {
        function e(e) {
          this.snapshot = e;
        }
        return (
          (e.prototype.toString = function() {
            return (
              "ChildActivationStart(path: '" +
              ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                '') +
              "')"
            );
          }),
          e
        );
      })(),
      Ce = (function() {
        function e(e) {
          this.snapshot = e;
        }
        return (
          (e.prototype.toString = function() {
            return (
              "ChildActivationEnd(path: '" +
              ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                '') +
              "')"
            );
          }),
          e
        );
      })(),
      De = (function() {
        function e(e) {
          this.snapshot = e;
        }
        return (
          (e.prototype.toString = function() {
            return (
              "ActivationStart(path: '" +
              ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                '') +
              "')"
            );
          }),
          e
        );
      })(),
      Ee = (function() {
        function e(e) {
          this.snapshot = e;
        }
        return (
          (e.prototype.toString = function() {
            return (
              "ActivationEnd(path: '" +
              ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                '') +
              "')"
            );
          }),
          e
        );
      })(),
      Oe = (function() {
        function e(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        return (
          (e.prototype.toString = function() {
            var e = this.position
              ? this.position[0] + ', ' + this.position[1]
              : null;
            return (
              "Scroll(anchor: '" + this.anchor + "', position: '" + e + "')"
            );
          }),
          e
        );
      })(),
      Se = (function() {
        return function() {};
      })(),
      xe = 'primary',
      Ae = (function() {
        function e(e) {
          this.params = e || {};
        }
        return (
          (e.prototype.has = function(e) {
            return this.params.hasOwnProperty(e);
          }),
          (e.prototype.get = function(e) {
            if (this.has(e)) {
              var t = this.params[e];
              return Array.isArray(t) ? t[0] : t;
            }
            return null;
          }),
          (e.prototype.getAll = function(e) {
            if (this.has(e)) {
              var t = this.params[e];
              return Array.isArray(t) ? t : [t];
            }
            return [];
          }),
          Object.defineProperty(e.prototype, 'keys', {
            get: function() {
              return Object.keys(this.params);
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })();
    function je(e) {
      return new Ae(e);
    }
    var Re = 'ngNavigationCancelingError';
    function Ie(e) {
      var t = Error('NavigationCancelingError: ' + e);
      return (t[Re] = !0), t;
    }
    function Te(e, t, n) {
      var r = n.path.split('/');
      if (r.length > e.length) return null;
      if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length))
        return null;
      for (var o = {}, i = 0; i < r.length; i++) {
        var u = r[i],
          a = e[i];
        if (u.startsWith(':')) o[u.substring(1)] = a;
        else if (u !== a.path) return null;
      }
      return { consumed: e.slice(0, r.length), posParams: o };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var ke = (function() {
      return function(e, t) {
        (this.routes = e), (this.module = t);
      };
    })();
    function Me(e, t) {
      void 0 === t && (t = '');
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        Pe(r, Fe(t, r));
      }
    }
    function Pe(e, t) {
      if (!e)
        throw new Error(
          "\n      Invalid configuration of route '" +
            t +
            "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
        );
      if (Array.isArray(e))
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': Array cannot be specified"
        );
      if (
        !e.component &&
        !e.children &&
        !e.loadChildren &&
        e.outlet &&
        e.outlet !== xe
      )
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': a componentless route without children or loadChildren cannot have a named outlet set"
        );
      if (e.redirectTo && e.children)
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': redirectTo and children cannot be used together"
        );
      if (e.redirectTo && e.loadChildren)
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': redirectTo and loadChildren cannot be used together"
        );
      if (e.children && e.loadChildren)
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': children and loadChildren cannot be used together"
        );
      if (e.redirectTo && e.component)
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': redirectTo and component cannot be used together"
        );
      if (e.path && e.matcher)
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': path and matcher cannot be used together"
        );
      if (
        void 0 === e.redirectTo &&
        !e.component &&
        !e.children &&
        !e.loadChildren
      )
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "'. One of the following must be provided: component, redirectTo, children or loadChildren"
        );
      if (void 0 === e.path && void 0 === e.matcher)
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': routes must have either a path or a matcher specified"
        );
      if ('string' == typeof e.path && '/' === e.path.charAt(0))
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': path cannot start with a slash"
        );
      if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) {
        throw new Error(
          'Invalid configuration of route \'{path: "' +
            t +
            '", redirectTo: "' +
            e.redirectTo +
            "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
        );
      }
      if (
        void 0 !== e.pathMatch &&
        'full' !== e.pathMatch &&
        'prefix' !== e.pathMatch
      )
        throw new Error(
          "Invalid configuration of route '" +
            t +
            "': pathMatch can only be set to 'prefix' or 'full'"
        );
      e.children && Me(e.children, t);
    }
    function Fe(e, t) {
      return t
        ? e || t.path
          ? e && !t.path
            ? e + '/'
            : !e && t.path
            ? t.path
            : e + '/' + t.path
          : ''
        : e;
    }
    function Ne(e) {
      var t = e.children && e.children.map(Ne),
        n = t ? Object(r.a)({}, e, { children: t }) : Object(r.a)({}, e);
      return (
        !n.component &&
          (t || n.loadChildren) &&
          n.outlet &&
          n.outlet !== xe &&
          (n.component = Se),
        n
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Ve(e, t) {
      var n,
        r = Object.keys(e),
        o = Object.keys(t);
      if (r.length != o.length) return !1;
      for (var i = 0; i < r.length; i++) if (e[(n = r[i])] !== t[n]) return !1;
      return !0;
    }
    function Le(e) {
      return Array.prototype.concat.apply([], e);
    }
    function Be(e) {
      return e.length > 0 ? e[e.length - 1] : null;
    }
    function Ue(e, t) {
      for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
    }
    function He(e) {
      return Object(o['ɵisObservable'])(e)
        ? e
        : Object(o['ɵisPromise'])(e)
        ? Object(u.a)(Promise.resolve(e))
        : Object(i.a)(e);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function ze(e, t, n) {
      return n
        ? (function(e, t) {
            return Ve(e, t);
          })(e.queryParams, t.queryParams) &&
            (function e(t, n) {
              if (!Qe(t.segments, n.segments)) return !1;
              if (t.numberOfChildren !== n.numberOfChildren) return !1;
              for (var r in n.children) {
                if (!t.children[r]) return !1;
                if (!e(t.children[r], n.children[r])) return !1;
              }
              return !0;
            })(e.root, t.root)
        : (function(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every(function(n) {
                return t[n] === e[n];
              })
            );
          })(e.queryParams, t.queryParams) && Ge(e.root, t.root);
    }
    function Ge(e, t) {
      return (function e(t, n, r) {
        if (t.segments.length > r.length) {
          var o = t.segments.slice(0, r.length);
          return !!Qe(o, r) && !n.hasChildren();
        }
        if (t.segments.length === r.length) {
          if (!Qe(t.segments, r)) return !1;
          for (var i in n.children) {
            if (!t.children[i]) return !1;
            if (!Ge(t.children[i], n.children[i])) return !1;
          }
          return !0;
        }
        var o = r.slice(0, t.segments.length),
          u = r.slice(t.segments.length);
        return (
          !!Qe(t.segments, o) && (!!t.children[xe] && e(t.children[xe], n, u))
        );
      })(e, t, t.segments);
    }
    var Ze = (function() {
        function e(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        return (
          Object.defineProperty(e.prototype, 'queryParamMap', {
            get: function() {
              return (
                this._queryParamMap ||
                  (this._queryParamMap = je(this.queryParams)),
                this._queryParamMap
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.toString = function() {
            return Je.serialize(this);
          }),
          e
        );
      })(),
      qe = (function() {
        function e(e, t) {
          var n = this;
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            Ue(t, function(e, t) {
              return (e.parent = n);
            });
        }
        return (
          (e.prototype.hasChildren = function() {
            return this.numberOfChildren > 0;
          }),
          Object.defineProperty(e.prototype, 'numberOfChildren', {
            get: function() {
              return Object.keys(this.children).length;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.toString = function() {
            return Xe(this);
          }),
          e
        );
      })(),
      We = (function() {
        function e(e, t) {
          (this.path = e), (this.parameters = t);
        }
        return (
          Object.defineProperty(e.prototype, 'parameterMap', {
            get: function() {
              return (
                this._parameterMap ||
                  (this._parameterMap = je(this.parameters)),
                this._parameterMap
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.toString = function() {
            return it(this);
          }),
          e
        );
      })();
    function Qe(e, t) {
      return (
        e.length === t.length &&
        e.every(function(e, n) {
          return e.path === t[n].path;
        })
      );
    }
    function Ke(e, t) {
      var n = [];
      return (
        Ue(e.children, function(e, r) {
          r === xe && (n = n.concat(t(e, r)));
        }),
        Ue(e.children, function(e, r) {
          r !== xe && (n = n.concat(t(e, r)));
        }),
        n
      );
    }
    var Ye = (function() {
        return function() {};
      })(),
      $e = (function() {
        function e() {}
        return (
          (e.prototype.parse = function(e) {
            var t = new lt(e);
            return new Ze(
              t.parseRootSegment(),
              t.parseQueryParams(),
              t.parseFragment()
            );
          }),
          (e.prototype.serialize = function(e) {
            return (
              '' +
              ('/' +
                (function e(t, n) {
                  if (!t.hasChildren()) return Xe(t);
                  if (n) {
                    var r = t.children[xe] ? e(t.children[xe], !1) : '',
                      o = [];
                    return (
                      Ue(t.children, function(t, n) {
                        n !== xe && o.push(n + ':' + e(t, !1));
                      }),
                      o.length > 0 ? r + '(' + o.join('//') + ')' : r
                    );
                  }
                  var i = Ke(t, function(n, r) {
                    return r === xe
                      ? [e(t.children[xe], !1)]
                      : [r + ':' + e(n, !1)];
                  });
                  return Xe(t) + '/(' + i.join('//') + ')';
                })(e.root, !0)) +
              (function(e) {
                var t = Object.keys(e).map(function(t) {
                  var n = e[t];
                  return Array.isArray(n)
                    ? n
                        .map(function(e) {
                          return tt(t) + '=' + tt(e);
                        })
                        .join('&')
                    : tt(t) + '=' + tt(n);
                });
                return t.length ? '?' + t.join('&') : '';
              })(e.queryParams) +
              ('string' == typeof e.fragment
                ? '#' +
                  (function(e) {
                    return encodeURI(e);
                  })(e.fragment)
                : '')
            );
          }),
          e
        );
      })(),
      Je = new $e();
    function Xe(e) {
      return e.segments
        .map(function(e) {
          return it(e);
        })
        .join('/');
    }
    function et(e) {
      return encodeURIComponent(e)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
    }
    function tt(e) {
      return et(e).replace(/%3B/gi, ';');
    }
    function nt(e) {
      return et(e)
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/%26/gi, '&');
    }
    function rt(e) {
      return decodeURIComponent(e);
    }
    function ot(e) {
      return rt(e.replace(/\+/g, '%20'));
    }
    function it(e) {
      return (
        '' +
        nt(e.path) +
        (function(e) {
          return Object.keys(e)
            .map(function(t) {
              return ';' + nt(t) + '=' + nt(e[t]);
            })
            .join('');
        })(e.parameters)
      );
    }
    var ut = /^[^\/()?;=#]+/;
    function at(e) {
      var t = e.match(ut);
      return t ? t[0] : '';
    }
    var st = /^[^=?&#]+/;
    var ct = /^[^?&#]+/;
    var lt = (function() {
        function e(e) {
          (this.url = e), (this.remaining = e);
        }
        return (
          (e.prototype.parseRootSegment = function() {
            return (
              this.consumeOptional('/'),
              '' === this.remaining ||
              this.peekStartsWith('?') ||
              this.peekStartsWith('#')
                ? new qe([], {})
                : new qe([], this.parseChildren())
            );
          }),
          (e.prototype.parseQueryParams = function() {
            var e = {};
            if (this.consumeOptional('?'))
              do {
                this.parseQueryParam(e);
              } while (this.consumeOptional('&'));
            return e;
          }),
          (e.prototype.parseFragment = function() {
            return this.consumeOptional('#')
              ? decodeURIComponent(this.remaining)
              : null;
          }),
          (e.prototype.parseChildren = function() {
            if ('' === this.remaining) return {};
            this.consumeOptional('/');
            var e = [];
            for (
              this.peekStartsWith('(') || e.push(this.parseSegment());
              this.peekStartsWith('/') &&
              !this.peekStartsWith('//') &&
              !this.peekStartsWith('/(');

            )
              this.capture('/'), e.push(this.parseSegment());
            var t = {};
            this.peekStartsWith('/(') &&
              (this.capture('/'), (t = this.parseParens(!0)));
            var n = {};
            return (
              this.peekStartsWith('(') && (n = this.parseParens(!1)),
              (e.length > 0 || Object.keys(t).length > 0) &&
                (n[xe] = new qe(e, t)),
              n
            );
          }),
          (e.prototype.parseSegment = function() {
            var e = at(this.remaining);
            if ('' === e && this.peekStartsWith(';'))
              throw new Error(
                "Empty path url segment cannot have parameters: '" +
                  this.remaining +
                  "'."
              );
            return this.capture(e), new We(rt(e), this.parseMatrixParams());
          }),
          (e.prototype.parseMatrixParams = function() {
            for (var e = {}; this.consumeOptional(';'); ) this.parseParam(e);
            return e;
          }),
          (e.prototype.parseParam = function(e) {
            var t = at(this.remaining);
            if (t) {
              this.capture(t);
              var n = '';
              if (this.consumeOptional('=')) {
                var r = at(this.remaining);
                r && ((n = r), this.capture(n));
              }
              e[rt(t)] = rt(n);
            }
          }),
          (e.prototype.parseQueryParam = function(e) {
            var t = (function(e) {
              var t = e.match(st);
              return t ? t[0] : '';
            })(this.remaining);
            if (t) {
              this.capture(t);
              var n = '';
              if (this.consumeOptional('=')) {
                var r = (function(e) {
                  var t = e.match(ct);
                  return t ? t[0] : '';
                })(this.remaining);
                r && ((n = r), this.capture(n));
              }
              var o = ot(t),
                i = ot(n);
              if (e.hasOwnProperty(o)) {
                var u = e[o];
                Array.isArray(u) || ((u = [u]), (e[o] = u)), u.push(i);
              } else e[o] = i;
            }
          }),
          (e.prototype.parseParens = function(e) {
            var t = {};
            for (
              this.capture('(');
              !this.consumeOptional(')') && this.remaining.length > 0;

            ) {
              var n = at(this.remaining),
                r = this.remaining[n.length];
              if ('/' !== r && ')' !== r && ';' !== r)
                throw new Error("Cannot parse url '" + this.url + "'");
              var o = void 0;
              n.indexOf(':') > -1
                ? ((o = n.substr(0, n.indexOf(':'))),
                  this.capture(o),
                  this.capture(':'))
                : e && (o = xe);
              var i = this.parseChildren();
              (t[o] = 1 === Object.keys(i).length ? i[xe] : new qe([], i)),
                this.consumeOptional('//');
            }
            return t;
          }),
          (e.prototype.peekStartsWith = function(e) {
            return this.remaining.startsWith(e);
          }),
          (e.prototype.consumeOptional = function(e) {
            return (
              !!this.peekStartsWith(e) &&
              ((this.remaining = this.remaining.substring(e.length)), !0)
            );
          }),
          (e.prototype.capture = function(e) {
            if (!this.consumeOptional(e))
              throw new Error('Expected "' + e + '".');
          }),
          e
        );
      })(),
      ft = (function() {
        function e(e) {
          this._root = e;
        }
        return (
          Object.defineProperty(e.prototype, 'root', {
            get: function() {
              return this._root.value;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.parent = function(e) {
            var t = this.pathFromRoot(e);
            return t.length > 1 ? t[t.length - 2] : null;
          }),
          (e.prototype.children = function(e) {
            var t = dt(e, this._root);
            return t
              ? t.children.map(function(e) {
                  return e.value;
                })
              : [];
          }),
          (e.prototype.firstChild = function(e) {
            var t = dt(e, this._root);
            return t && t.children.length > 0 ? t.children[0].value : null;
          }),
          (e.prototype.siblings = function(e) {
            var t = pt(e, this._root);
            return t.length < 2
              ? []
              : t[t.length - 2].children
                  .map(function(e) {
                    return e.value;
                  })
                  .filter(function(t) {
                    return t !== e;
                  });
          }),
          (e.prototype.pathFromRoot = function(e) {
            return pt(e, this._root).map(function(e) {
              return e.value;
            });
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function dt(e, t) {
      var n, o;
      if (e === t.value) return t;
      try {
        for (
          var i = Object(r.h)(t.children), u = i.next();
          !u.done;
          u = i.next()
        ) {
          var a = dt(e, u.value);
          if (a) return a;
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          u && !u.done && (o = i.return) && o.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return null;
    }
    function pt(e, t) {
      var n, o;
      if (e === t.value) return [t];
      try {
        for (
          var i = Object(r.h)(t.children), u = i.next();
          !u.done;
          u = i.next()
        ) {
          var a = pt(e, u.value);
          if (a.length) return a.unshift(t), a;
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          u && !u.done && (o = i.return) && o.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return [];
    }
    var ht = (function() {
      function e(e, t) {
        (this.value = e), (this.children = t);
      }
      return (
        (e.prototype.toString = function() {
          return 'TreeNode(' + this.value + ')';
        }),
        e
      );
    })();
    function vt(e) {
      var t = {};
      return (
        e &&
          e.children.forEach(function(e) {
            return (t[e.value.outlet] = e);
          }),
        t
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var gt = (function(e) {
      function t(t, n) {
        var r = e.call(this, t) || this;
        return (r.snapshot = n), Ct(r, t), r;
      }
      return (
        Object(r.c)(t, e),
        (t.prototype.toString = function() {
          return this.snapshot.toString();
        }),
        t
      );
    })(ft);
    function yt(e, t) {
      var n = (function(e, t) {
          var n = new _t([], {}, {}, '', {}, xe, t, null, e.root, -1, {});
          return new wt('', new ht(n, []));
        })(e, t),
        r = new a.a([new We('', {})]),
        o = new a.a({}),
        i = new a.a({}),
        u = new a.a({}),
        s = new a.a(''),
        c = new mt(r, o, u, s, i, xe, t, n.root);
      return (c.snapshot = n.root), new gt(new ht(c, []), n);
    }
    var mt = (function() {
      function e(e, t, n, r, o, i, u, a) {
        (this.url = e),
          (this.params = t),
          (this.queryParams = n),
          (this.fragment = r),
          (this.data = o),
          (this.outlet = i),
          (this.component = u),
          (this._futureSnapshot = a);
      }
      return (
        Object.defineProperty(e.prototype, 'routeConfig', {
          get: function() {
            return this._futureSnapshot.routeConfig;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'root', {
          get: function() {
            return this._routerState.root;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'parent', {
          get: function() {
            return this._routerState.parent(this);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'firstChild', {
          get: function() {
            return this._routerState.firstChild(this);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'children', {
          get: function() {
            return this._routerState.children(this);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'pathFromRoot', {
          get: function() {
            return this._routerState.pathFromRoot(this);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'paramMap', {
          get: function() {
            return (
              this._paramMap ||
                (this._paramMap = this.params.pipe(
                  Object(C.a)(function(e) {
                    return je(e);
                  })
                )),
              this._paramMap
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'queryParamMap', {
          get: function() {
            return (
              this._queryParamMap ||
                (this._queryParamMap = this.queryParams.pipe(
                  Object(C.a)(function(e) {
                    return je(e);
                  })
                )),
              this._queryParamMap
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.toString = function() {
          return this.snapshot
            ? this.snapshot.toString()
            : 'Future(' + this._futureSnapshot + ')';
        }),
        e
      );
    })();
    function bt(e, t) {
      void 0 === t && (t = 'emptyOnly');
      var n = e.pathFromRoot,
        o = 0;
      if ('always' !== t)
        for (o = n.length - 1; o >= 1; ) {
          var i = n[o],
            u = n[o - 1];
          if (i.routeConfig && '' === i.routeConfig.path) o--;
          else {
            if (u.component) break;
            o--;
          }
        }
      return (function(e) {
        return e.reduce(
          function(e, t) {
            var n = Object(r.a)({}, e.params, t.params),
              o = Object(r.a)({}, e.data, t.data),
              i = Object(r.a)({}, e.resolve, t._resolvedData);
            return { params: n, data: o, resolve: i };
          },
          { params: {}, data: {}, resolve: {} }
        );
      })(n.slice(o));
    }
    var _t = (function() {
        function e(e, t, n, r, o, i, u, a, s, c, l) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = o),
            (this.outlet = i),
            (this.component = u),
            (this.routeConfig = a),
            (this._urlSegment = s),
            (this._lastPathIndex = c),
            (this._resolve = l);
        }
        return (
          Object.defineProperty(e.prototype, 'root', {
            get: function() {
              return this._routerState.root;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'parent', {
            get: function() {
              return this._routerState.parent(this);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'firstChild', {
            get: function() {
              return this._routerState.firstChild(this);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'children', {
            get: function() {
              return this._routerState.children(this);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'pathFromRoot', {
            get: function() {
              return this._routerState.pathFromRoot(this);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'paramMap', {
            get: function() {
              return (
                this._paramMap || (this._paramMap = je(this.params)),
                this._paramMap
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'queryParamMap', {
            get: function() {
              return (
                this._queryParamMap ||
                  (this._queryParamMap = je(this.queryParams)),
                this._queryParamMap
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.toString = function() {
            return (
              "Route(url:'" +
              this.url
                .map(function(e) {
                  return e.toString();
                })
                .join('/') +
              "', path:'" +
              (this.routeConfig ? this.routeConfig.path : '') +
              "')"
            );
          }),
          e
        );
      })(),
      wt = (function(e) {
        function t(t, n) {
          var r = e.call(this, n) || this;
          return (r.url = t), Ct(r, n), r;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.toString = function() {
            return Dt(this._root);
          }),
          t
        );
      })(ft);
    function Ct(e, t) {
      (t.value._routerState = e),
        t.children.forEach(function(t) {
          return Ct(e, t);
        });
    }
    function Dt(e) {
      var t =
        e.children.length > 0
          ? ' { ' + e.children.map(Dt).join(', ') + ' } '
          : '';
      return '' + e.value + t;
    }
    function Et(e) {
      if (e.snapshot) {
        var t = e.snapshot,
          n = e._futureSnapshot;
        (e.snapshot = n),
          Ve(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
          t.fragment !== n.fragment && e.fragment.next(n.fragment),
          Ve(t.params, n.params) || e.params.next(n.params),
          (function(e, t) {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; ++n) if (!Ve(e[n], t[n])) return !1;
            return !0;
          })(t.url, n.url) || e.url.next(n.url),
          Ve(t.data, n.data) || e.data.next(n.data);
      } else
        (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
    }
    function Ot(e, t) {
      var n =
          Ve(e.params, t.params) &&
          (function(e, t) {
            return (
              Qe(e, t) &&
              e.every(function(e, n) {
                return Ve(e.parameters, t[n].parameters);
              })
            );
          })(e.url, t.url),
        r = !e.parent != !t.parent;
      return n && !r && (!e.parent || Ot(e.parent, t.parent));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function St(e, t, n) {
      if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
        (s = n.value)._futureSnapshot = t.value;
        var o = (function(e, t, n) {
          return t.children.map(function(t) {
            var o, i;
            try {
              for (
                var u = Object(r.h)(n.children), a = u.next();
                !a.done;
                a = u.next()
              ) {
                var s = a.value;
                if (e.shouldReuseRoute(s.value.snapshot, t.value))
                  return St(e, t, s);
              }
            } catch (e) {
              o = { error: e };
            } finally {
              try {
                a && !a.done && (i = u.return) && i.call(u);
              } finally {
                if (o) throw o.error;
              }
            }
            return St(e, t);
          });
        })(e, t, n);
        return new ht(s, o);
      }
      var i = e.retrieve(t.value);
      if (i) {
        var u = i.route;
        return (
          (function e(t, n) {
            if (t.value.routeConfig !== n.value.routeConfig)
              throw new Error(
                'Cannot reattach ActivatedRouteSnapshot created from a different route'
              );
            if (t.children.length !== n.children.length)
              throw new Error(
                'Cannot reattach ActivatedRouteSnapshot with a different number of children'
              );
            n.value._futureSnapshot = t.value;
            for (var r = 0; r < t.children.length; ++r)
              e(t.children[r], n.children[r]);
          })(t, u),
          u
        );
      }
      var s = (function(e) {
        return new mt(
          new a.a(e.url),
          new a.a(e.params),
          new a.a(e.queryParams),
          new a.a(e.fragment),
          new a.a(e.data),
          e.outlet,
          e.component,
          e
        );
      })(
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */ t.value
      );
      o = t.children.map(function(t) {
        return St(e, t);
      });
      return new ht(s, o);
    }
    function xt(e, t, n, o, i) {
      if (0 === n.length) return jt(t.root, t.root, t, o, i);
      var u = (function(e) {
        if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
          return new Rt(!0, 0, e);
        var t = 0,
          n = !1,
          o = e.reduce(function(e, o, i) {
            if ('object' == typeof o && null != o) {
              if (o.outlets) {
                var u = {};
                return (
                  Ue(o.outlets, function(e, t) {
                    u[t] = 'string' == typeof e ? e.split('/') : e;
                  }),
                  Object(r.g)(e, [{ outlets: u }])
                );
              }
              if (o.segmentPath) return Object(r.g)(e, [o.segmentPath]);
            }
            return 'string' != typeof o
              ? Object(r.g)(e, [o])
              : 0 === i
              ? (o.split('/').forEach(function(r, o) {
                  (0 == o && '.' === r) ||
                    (0 == o && '' === r
                      ? (n = !0)
                      : '..' === r
                      ? t++
                      : '' != r && e.push(r));
                }),
                e)
              : Object(r.g)(e, [o]);
          }, []);
        return new Rt(n, t, o);
      })(n);
      if (u.toRoot()) return jt(t.root, new qe([], {}), t, o, i);
      var a = (function(e, t, n) {
          if (e.isAbsolute) return new It(t.root, !0, 0);
          if (-1 === n.snapshot._lastPathIndex)
            return new It(n.snapshot._urlSegment, !0, 0);
          var r = At(e.commands[0]) ? 0 : 1,
            o = n.snapshot._lastPathIndex + r;
          return (function(e, t, n) {
            var r = e,
              o = t,
              i = n;
            for (; i > o; ) {
              if (((i -= o), !(r = r.parent)))
                throw new Error("Invalid number of '../'");
              o = r.segments.length;
            }
            return new It(r, !1, o - i);
          })(n.snapshot._urlSegment, o, e.numberOfDoubleDots);
        })(u, t, e),
        s = a.processChildren
          ? Mt(a.segmentGroup, a.index, u.commands)
          : kt(a.segmentGroup, a.index, u.commands);
      return jt(a.segmentGroup, s, t, o, i);
    }
    function At(e) {
      return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
    }
    function jt(e, t, n, r, o) {
      var i = {};
      return (
        r &&
          Ue(r, function(e, t) {
            i[t] = Array.isArray(e)
              ? e.map(function(e) {
                  return '' + e;
                })
              : '' + e;
          }),
        n.root === e
          ? new Ze(t, i, o)
          : new Ze(
              (function e(t, n, r) {
                var o = {};
                Ue(t.children, function(t, i) {
                  o[i] = t === n ? r : e(t, n, r);
                });
                return new qe(t.segments, o);
              })(n.root, e, t),
              i,
              o
            )
      );
    }
    var Rt = (function() {
      function e(e, t, n) {
        if (
          ((this.isAbsolute = e),
          (this.numberOfDoubleDots = t),
          (this.commands = n),
          e && n.length > 0 && At(n[0]))
        )
          throw new Error('Root segment cannot have matrix parameters');
        var r = n.find(function(e) {
          return 'object' == typeof e && null != e && e.outlets;
        });
        if (r && r !== Be(n))
          throw new Error('{outlets:{}} has to be the last command');
      }
      return (
        (e.prototype.toRoot = function() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }),
        e
      );
    })();
    var It = (function() {
      return function(e, t, n) {
        (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
      };
    })();
    function Tt(e) {
      return 'object' == typeof e && null != e && e.outlets
        ? e.outlets[xe]
        : '' + e;
    }
    function kt(e, t, n) {
      if (
        (e || (e = new qe([], {})), 0 === e.segments.length && e.hasChildren())
      )
        return Mt(e, t, n);
      var r = (function(e, t, n) {
          var r = 0,
            o = t,
            i = { match: !1, pathIndex: 0, commandIndex: 0 };
          for (; o < e.segments.length; ) {
            if (r >= n.length) return i;
            var u = e.segments[o],
              a = Tt(n[r]),
              s = r < n.length - 1 ? n[r + 1] : null;
            if (o > 0 && void 0 === a) break;
            if (a && s && 'object' == typeof s && void 0 === s.outlets) {
              if (!Vt(a, s, u)) return i;
              r += 2;
            } else {
              if (!Vt(a, {}, u)) return i;
              r++;
            }
            o++;
          }
          return { match: !0, pathIndex: o, commandIndex: r };
        })(e, t, n),
        o = n.slice(r.commandIndex);
      if (r.match && r.pathIndex < e.segments.length) {
        var i = new qe(e.segments.slice(0, r.pathIndex), {});
        return (
          (i.children[xe] = new qe(e.segments.slice(r.pathIndex), e.children)),
          Mt(i, 0, o)
        );
      }
      return r.match && 0 === o.length
        ? new qe(e.segments, {})
        : r.match && !e.hasChildren()
        ? Pt(e, t, n)
        : r.match
        ? Mt(e, 0, o)
        : Pt(e, t, n);
    }
    function Mt(e, t, n) {
      if (0 === n.length) return new qe(e.segments, {});
      var r = (function(e) {
          var t, n;
          return 'object' != typeof e[0]
            ? (((t = {})[xe] = e), t)
            : void 0 === e[0].outlets
            ? (((n = {})[xe] = e), n)
            : e[0].outlets;
        })(n),
        o = {};
      return (
        Ue(r, function(n, r) {
          null !== n && (o[r] = kt(e.children[r], t, n));
        }),
        Ue(e.children, function(e, t) {
          void 0 === r[t] && (o[t] = e);
        }),
        new qe(e.segments, o)
      );
    }
    function Pt(e, t, n) {
      for (var r = e.segments.slice(0, t), o = 0; o < n.length; ) {
        if ('object' == typeof n[o] && void 0 !== n[o].outlets) {
          var i = Ft(n[o].outlets);
          return new qe(r, i);
        }
        if (0 === o && At(n[0])) {
          var u = e.segments[t];
          r.push(new We(u.path, n[0])), o++;
        } else {
          var a = Tt(n[o]),
            s = o < n.length - 1 ? n[o + 1] : null;
          a && s && At(s)
            ? (r.push(new We(a, Nt(s))), (o += 2))
            : (r.push(new We(a, {})), o++);
        }
      }
      return new qe(r, {});
    }
    function Ft(e) {
      var t = {};
      return (
        Ue(e, function(e, n) {
          null !== e && (t[n] = Pt(new qe([], {}), 0, e));
        }),
        t
      );
    }
    function Nt(e) {
      var t = {};
      return (
        Ue(e, function(e, n) {
          return (t[n] = '' + e);
        }),
        t
      );
    }
    function Vt(e, t, n) {
      return e == n.path && Ve(t, n.parameters);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Lt = (function() {
      function e(e, t, n, r) {
        (this.routeReuseStrategy = e),
          (this.futureState = t),
          (this.currState = n),
          (this.forwardEvent = r);
      }
      return (
        (e.prototype.activate = function(e) {
          var t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            Et(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }),
        (e.prototype.deactivateChildRoutes = function(e, t, n) {
          var r = this,
            o = vt(t);
          e.children.forEach(function(e) {
            var t = e.value.outlet;
            r.deactivateRoutes(e, o[t], n), delete o[t];
          }),
            Ue(o, function(e, t) {
              r.deactivateRouteAndItsChildren(e, n);
            });
        }),
        (e.prototype.deactivateRoutes = function(e, t, n) {
          var r = e.value,
            o = t ? t.value : null;
          if (r === o)
            if (r.component) {
              var i = n.getContext(r.outlet);
              i && this.deactivateChildRoutes(e, t, i.children);
            } else this.deactivateChildRoutes(e, t, n);
          else o && this.deactivateRouteAndItsChildren(t, n);
        }),
        (e.prototype.deactivateRouteAndItsChildren = function(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }),
        (e.prototype.detachAndStoreRouteSubtree = function(e, t) {
          var n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            var r = n.outlet.detach(),
              o = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: r,
              route: e,
              contexts: o
            });
          }
        }),
        (e.prototype.deactivateRouteAndOutlet = function(e, t) {
          var n = this,
            r = t.getContext(e.value.outlet);
          if (r) {
            var o = vt(e),
              i = e.value.component ? r.children : t;
            Ue(o, function(e, t) {
              return n.deactivateRouteAndItsChildren(e, i);
            }),
              r.outlet &&
                (r.outlet.deactivate(), r.children.onOutletDeactivated());
          }
        }),
        (e.prototype.activateChildRoutes = function(e, t, n) {
          var r = this,
            o = vt(t);
          e.children.forEach(function(e) {
            r.activateRoutes(e, o[e.value.outlet], n),
              r.forwardEvent(new Ee(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new Ce(e.value.snapshot));
        }),
        (e.prototype.activateRoutes = function(e, t, n) {
          var r = e.value,
            o = t ? t.value : null;
          if ((Et(r), r === o))
            if (r.component) {
              var i = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, i.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            i = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              var u = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                i.children.onOutletReAttached(u.contexts),
                (i.attachRef = u.componentRef),
                (i.route = u.route.value),
                i.outlet && i.outlet.attach(u.componentRef, u.route.value),
                Bt(u.route);
            } else {
              var a = (function(e) {
                  for (var t = e.parent; t; t = t.parent) {
                    var n = t.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig;
                    if (n && n.component) return null;
                  }
                  return null;
                })(
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */ r.snapshot
                ),
                s = a ? a.module.componentFactoryResolver : null;
              (i.attachRef = null),
                (i.route = r),
                (i.resolver = s),
                i.outlet && i.outlet.activateWith(r, s),
                this.activateChildRoutes(e, null, i.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }),
        e
      );
    })();
    function Bt(e) {
      Et(e.value), e.children.forEach(Bt);
    }
    function Ut(e) {
      return 'function' == typeof e;
    }
    function Ht(e) {
      return e instanceof Ze;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var zt = (function() {
        return function(e) {
          this.segmentGroup = e || null;
        };
      })(),
      Gt = (function() {
        return function(e) {
          this.urlTree = e;
        };
      })();
    function Zt(e) {
      return new s.a(function(t) {
        return t.error(new zt(e));
      });
    }
    function qt(e) {
      return new s.a(function(t) {
        return t.error(new Gt(e));
      });
    }
    function Wt(e) {
      return new s.a(function(t) {
        return t.error(
          new Error(
            "Only absolute redirects can have named outlets. redirectTo: '" +
              e +
              "'"
          )
        );
      });
    }
    var Qt = (function() {
      function e(e, t, n, r, i) {
        (this.configLoader = t),
          (this.urlSerializer = n),
          (this.urlTree = r),
          (this.config = i),
          (this.allowRedirects = !0),
          (this.ngModule = e.get(o.NgModuleRef));
      }
      return (
        (e.prototype.apply = function() {
          var e = this;
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            xe
          )
            .pipe(
              Object(C.a)(function(t) {
                return e.createUrlTree(
                  t,
                  e.urlTree.queryParams,
                  e.urlTree.fragment
                );
              })
            )
            .pipe(
              Object(G.a)(function(t) {
                if (t instanceof Gt)
                  return (e.allowRedirects = !1), e.match(t.urlTree);
                if (t instanceof zt) throw e.noMatchError(t);
                throw t;
              })
            );
        }),
        (e.prototype.match = function(e) {
          var t = this;
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, xe)
            .pipe(
              Object(C.a)(function(n) {
                return t.createUrlTree(n, e.queryParams, e.fragment);
              })
            )
            .pipe(
              Object(G.a)(function(e) {
                if (e instanceof zt) throw t.noMatchError(e);
                throw e;
              })
            );
        }),
        (e.prototype.noMatchError = function(e) {
          return new Error(
            "Cannot match any routes. URL Segment: '" + e.segmentGroup + "'"
          );
        }),
        (e.prototype.createUrlTree = function(e, t, n) {
          var r,
            o = e.segments.length > 0 ? new qe([], (((r = {})[xe] = e), r)) : e;
          return new Ze(o, t, n);
        }),
        (e.prototype.expandSegmentGroup = function(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(
                Object(C.a)(function(e) {
                  return new qe([], e);
                })
              )
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }),
        (e.prototype.expandChildren = function(e, t, n) {
          var r = this;
          return (function(e, t) {
            if (0 === Object.keys(e).length) return Object(i.a)({});
            var n = [],
              r = [],
              o = {};
            return (
              Ue(e, function(e, i) {
                var u = t(i, e).pipe(
                  Object(C.a)(function(e) {
                    return (o[i] = e);
                  })
                );
                i === xe ? n.push(u) : r.push(u);
              }),
              i.a.apply(null, n.concat(r)).pipe(
                E(),
                z(),
                Object(C.a)(function() {
                  return o;
                })
              )
            );
          })(n.children, function(n, o) {
            return r.expandSegmentGroup(e, t, o, n);
          });
        }),
        (e.prototype.expandSegment = function(e, t, n, o, u, a) {
          var s = this;
          return i.a.apply(void 0, Object(r.g)(n)).pipe(
            Object(C.a)(function(r) {
              return s.expandSegmentAgainstRoute(e, t, n, r, o, u, a).pipe(
                Object(G.a)(function(e) {
                  if (e instanceof zt) return Object(i.a)(null);
                  throw e;
                })
              );
            }),
            E(),
            Q(function(e) {
              return !!e;
            }),
            Object(G.a)(function(e, n) {
              if (e instanceof l || 'EmptyError' === e.name) {
                if (s.noLeftoversInUrl(t, o, u))
                  return Object(i.a)(new qe([], {}));
                throw new zt(t);
              }
              throw e;
            })
          );
        }),
        (e.prototype.noLeftoversInUrl = function(e, t, n) {
          return 0 === t.length && !e.children[n];
        }),
        (e.prototype.expandSegmentAgainstRoute = function(e, t, n, r, o, i, u) {
          return Jt(r) !== i
            ? Zt(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, o)
            : u && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, o, i)
            : Zt(t);
        }),
        (e.prototype.expandSegmentAgainstRouteUsingRedirect = function(
          e,
          t,
          n,
          r,
          o,
          i
        ) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                o,
                i
              );
        }),
        (e.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(
          e,
          t,
          n,
          r
        ) {
          var o = this,
            i = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? qt(i)
            : this.lineralizeSegments(n, i).pipe(
                Object(K.a)(function(n) {
                  var i = new qe(n, {});
                  return o.expandSegment(e, i, t, n, r, !1);
                })
              );
        }),
        (e.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(
          e,
          t,
          n,
          r,
          o,
          i
        ) {
          var u = this,
            a = Kt(t, r, o),
            s = a.matched,
            c = a.consumedSegments,
            l = a.lastChild,
            f = a.positionalParamSegments;
          if (!s) return Zt(t);
          var d = this.applyRedirectCommands(c, r.redirectTo, f);
          return r.redirectTo.startsWith('/')
            ? qt(d)
            : this.lineralizeSegments(r, d).pipe(
                Object(K.a)(function(r) {
                  return u.expandSegment(e, t, n, r.concat(o.slice(l)), i, !1);
                })
              );
        }),
        (e.prototype.matchSegmentAgainstRoute = function(e, t, n, o) {
          var u = this;
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader.load(e.injector, n).pipe(
                  Object(C.a)(function(e) {
                    return (n._loadedConfig = e), new qe(o, {});
                  })
                )
              : Object(i.a)(new qe(o, {}));
          var a = Kt(t, n, o),
            s = a.matched,
            c = a.consumedSegments,
            l = a.lastChild;
          if (!s) return Zt(t);
          var f = o.slice(l);
          return this.getChildConfig(e, n, o).pipe(
            Object(K.a)(function(e) {
              var n = e.module,
                o = e.routes,
                a = (function(e, t, n, o) {
                  if (
                    n.length > 0 &&
                    (function(e, t, n) {
                      return n.some(function(n) {
                        return $t(e, t, n) && Jt(n) !== xe;
                      });
                    })(e, n, o)
                  ) {
                    var i = new qe(
                      t,
                      (function(e, t) {
                        var n,
                          o,
                          i = {};
                        i[xe] = t;
                        try {
                          for (
                            var u = Object(r.h)(e), a = u.next();
                            !a.done;
                            a = u.next()
                          ) {
                            var s = a.value;
                            '' === s.path &&
                              Jt(s) !== xe &&
                              (i[Jt(s)] = new qe([], {}));
                          }
                        } catch (e) {
                          n = { error: e };
                        } finally {
                          try {
                            a && !a.done && (o = u.return) && o.call(u);
                          } finally {
                            if (n) throw n.error;
                          }
                        }
                        return i;
                      })(o, new qe(n, e.children))
                    );
                    return { segmentGroup: Yt(i), slicedSegments: [] };
                  }
                  if (
                    0 === n.length &&
                    (function(e, t, n) {
                      return n.some(function(n) {
                        return $t(e, t, n);
                      });
                    })(e, n, o)
                  ) {
                    var i = new qe(
                      e.segments,
                      (function(e, t, n, o) {
                        var i,
                          u,
                          a = {};
                        try {
                          for (
                            var s = Object(r.h)(n), c = s.next();
                            !c.done;
                            c = s.next()
                          ) {
                            var l = c.value;
                            $t(e, t, l) &&
                              !o[Jt(l)] &&
                              (a[Jt(l)] = new qe([], {}));
                          }
                        } catch (e) {
                          i = { error: e };
                        } finally {
                          try {
                            c && !c.done && (u = s.return) && u.call(s);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                        return Object(r.a)({}, o, a);
                      })(e, n, o, e.children)
                    );
                    return { segmentGroup: Yt(i), slicedSegments: n };
                  }
                  return { segmentGroup: e, slicedSegments: n };
                })(t, c, f, o),
                s = a.segmentGroup,
                l = a.slicedSegments;
              return 0 === l.length && s.hasChildren()
                ? u.expandChildren(n, o, s).pipe(
                    Object(C.a)(function(e) {
                      return new qe(c, e);
                    })
                  )
                : 0 === o.length && 0 === l.length
                ? Object(i.a)(new qe(c, {}))
                : u.expandSegment(n, s, o, l, xe, !0).pipe(
                    Object(C.a)(function(e) {
                      return new qe(c.concat(e.segments), e.children);
                    })
                  );
            })
          );
        }),
        (e.prototype.getChildConfig = function(e, t, n) {
          var r = this;
          return t.children
            ? Object(i.a)(new ke(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Object(i.a)(t._loadedConfig)
              : (function(e, t, n) {
                  var r = t.canLoad;
                  return r && 0 !== r.length
                    ? Object(u.a)(r)
                        .pipe(
                          Object(C.a)(function(r) {
                            var o,
                              i = e.get(r);
                            if (
                              (function(e) {
                                return e && Ut(e.canLoad);
                              })(i)
                            )
                              o = i.canLoad(t, n);
                            else {
                              if (!Ut(i))
                                throw new Error('Invalid CanLoad guard');
                              o = i(t, n);
                            }
                            return He(o);
                          })
                        )
                        .pipe(
                          E(),
                          (function(e, t) {
                            return function(n) {
                              return n.lift(new Y(e, t, n));
                            };
                          })(function(e) {
                            return !0 === e;
                          })
                        )
                    : Object(i.a)(!0);
                })(e.injector, t, n).pipe(
                  Object(K.a)(function(n) {
                    return n
                      ? r.configLoader.load(e.injector, t).pipe(
                          Object(C.a)(function(e) {
                            return (t._loadedConfig = e), e;
                          })
                        )
                      : (function(e) {
                          return new s.a(function(t) {
                            return t.error(
                              Ie(
                                'Cannot load children because the guard of the route "path: \'' +
                                  e.path +
                                  '\'" returned false'
                              )
                            );
                          });
                        })(t);
                  })
                )
            : Object(i.a)(new ke([], e));
        }),
        (e.prototype.lineralizeSegments = function(e, t) {
          for (var n = [], r = t.root; ; ) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Object(i.a)(n);
            if (r.numberOfChildren > 1 || !r.children[xe])
              return Wt(e.redirectTo);
            r = r.children[xe];
          }
        }),
        (e.prototype.applyRedirectCommands = function(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }),
        (e.prototype.applyRedirectCreatreUrlTree = function(e, t, n, r) {
          var o = this.createSegmentGroup(e, t.root, n, r);
          return new Ze(
            o,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }),
        (e.prototype.createQueryParams = function(e, t) {
          var n = {};
          return (
            Ue(e, function(e, r) {
              if ('string' == typeof e && e.startsWith(':')) {
                var o = e.substring(1);
                n[r] = t[o];
              } else n[r] = e;
            }),
            n
          );
        }),
        (e.prototype.createSegmentGroup = function(e, t, n, r) {
          var o = this,
            i = this.createSegments(e, t.segments, n, r),
            u = {};
          return (
            Ue(t.children, function(t, i) {
              u[i] = o.createSegmentGroup(e, t, n, r);
            }),
            new qe(i, u)
          );
        }),
        (e.prototype.createSegments = function(e, t, n, r) {
          var o = this;
          return t.map(function(t) {
            return t.path.startsWith(':')
              ? o.findPosParam(e, t, r)
              : o.findOrReturn(t, n);
          });
        }),
        (e.prototype.findPosParam = function(e, t, n) {
          var r = n[t.path.substring(1)];
          if (!r)
            throw new Error(
              "Cannot redirect to '" + e + "'. Cannot find '" + t.path + "'."
            );
          return r;
        }),
        (e.prototype.findOrReturn = function(e, t) {
          var n,
            o,
            i = 0;
          try {
            for (var u = Object(r.h)(t), a = u.next(); !a.done; a = u.next()) {
              var s = a.value;
              if (s.path === e.path) return t.splice(i), s;
              i++;
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              a && !a.done && (o = u.return) && o.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
          return e;
        }),
        e
      );
    })();
    function Kt(e, t, n) {
      if ('' === t.path)
        return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
          ? {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {}
            }
          : {
              matched: !0,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {}
            };
      var r = (t.matcher || Te)(n, e, t);
      return r
        ? {
            matched: !0,
            consumedSegments: r.consumed,
            lastChild: r.consumed.length,
            positionalParamSegments: r.posParams
          }
        : {
            matched: !1,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {}
          };
    }
    function Yt(e) {
      if (1 === e.numberOfChildren && e.children[xe]) {
        var t = e.children[xe];
        return new qe(e.segments.concat(t.segments), t.children);
      }
      return e;
    }
    function $t(e, t, n) {
      return (
        (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
        ('' === n.path && void 0 !== n.redirectTo)
      );
    }
    function Jt(e) {
      return e.outlet || xe;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Xt(e, t, n, o) {
      return function(i) {
        return i.pipe(
          Object(J.a)(function(i) {
            return (function(e, t, n, r, o) {
              return new Qt(e, t, n, r, o).apply();
            })(e, t, n, i.extractedUrl, o).pipe(
              Object(C.a)(function(e) {
                return Object(r.a)({}, i, { urlAfterRedirects: e });
              })
            );
          })
        );
      };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var en = (function() {
        return function(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        };
      })(),
      tn = (function() {
        return function(e, t) {
          (this.component = e), (this.route = t);
        };
      })();
    function nn(e, t, n) {
      var r = (function(e) {
        if (!e) return null;
        for (var t = e.parent; t; t = t.parent) {
          var n = t.routeConfig;
          if (n && n._loadedConfig) return n._loadedConfig;
        }
        return null;
      })(t);
      return (r ? r.module.injector : n).get(e);
    }
    function rn(e, t, n, r, o) {
      void 0 === o && (o = { canDeactivateChecks: [], canActivateChecks: [] });
      var i = vt(t);
      return (
        e.children.forEach(function(e) {
          !(function(e, t, n, r, o) {
            void 0 === o &&
              (o = { canDeactivateChecks: [], canActivateChecks: [] });
            var i = e.value,
              u = t ? t.value : null,
              a = n ? n.getContext(e.value.outlet) : null;
            if (u && i.routeConfig === u.routeConfig) {
              var s = (function(e, t, n) {
                switch (n) {
                  case 'pathParamsChange':
                    return !Qe(e.url, t.url);
                  case 'always':
                    return !0;
                  case 'paramsOrQueryParamsChange':
                    return !Ot(e, t) || !Ve(e.queryParams, t.queryParams);
                  case 'paramsChange':
                  default:
                    return !Ot(e, t);
                }
              })(u, i, i.routeConfig.runGuardsAndResolvers);
              if (
                (s
                  ? o.canActivateChecks.push(new en(r))
                  : ((i.data = u.data), (i._resolvedData = u._resolvedData)),
                i.component
                  ? rn(e, t, a ? a.children : null, r, o)
                  : rn(e, t, n, r, o),
                s)
              ) {
                var c = (a && a.outlet && a.outlet.component) || null;
                o.canDeactivateChecks.push(new tn(c, u));
              }
            } else
              u && on(t, a, o),
                o.canActivateChecks.push(new en(r)),
                i.component
                  ? rn(e, null, a ? a.children : null, r, o)
                  : rn(e, null, n, r, o);
          })(e, i[e.value.outlet], n, r.concat([e.value]), o),
            delete i[e.value.outlet];
        }),
        Ue(i, function(e, t) {
          return on(e, n.getContext(t), o);
        }),
        o
      );
    }
    function on(e, t, n) {
      var r = vt(e),
        o = e.value;
      Ue(r, function(e, r) {
        o.component
          ? on(e, t ? t.children.getContext(r) : null, n)
          : on(e, t, n);
      }),
        o.component && t && t.outlet && t.outlet.isActivated
          ? n.canDeactivateChecks.push(new tn(t.outlet.component, o))
          : n.canDeactivateChecks.push(new tn(null, o));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var un = Symbol('INITIAL_VALUE');
    function an() {
      return Object(J.a)(function(e) {
        return function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = null,
            r = null;
          return (
            Object(f.a)(e[e.length - 1]) && (r = e.pop()),
            'function' == typeof e[e.length - 1] && (n = e.pop()),
            1 === e.length && Object(d.a)(e[0]) && (e = e[0]),
            Object(v.a)(e, r).lift(new y(n))
          );
        }
          .apply(
            void 0,
            Object(r.g)(
              e.map(function(e) {
                return e.pipe(
                  Z(1),
                  (function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    return function(t) {
                      var n = e[e.length - 1];
                      Object(f.a)(n) ? e.pop() : (n = null);
                      var r = e.length;
                      return ee(
                        1 !== r || n
                          ? r > 0
                            ? Object(v.a)(e, n)
                            : Object(b.b)(n)
                          : Object(X.a)(e[0]),
                        t
                      );
                    };
                  })(un)
                );
              })
            )
          )
          .pipe(
            Object(te.a)(function(e, t) {
              var n = !1;
              return t.reduce(function(e, r, o) {
                if (e !== un) return e;
                if ((r === un && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (o === t.length - 1 || Ht(r)) return r;
                }
                return e;
              }, e);
            }, un),
            Object(O.a)(function(e) {
              return e !== un;
            }),
            Object(C.a)(function(e) {
              return Ht(e) ? e : !0 === e;
            }),
            Z(1)
          );
      });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function sn(e, t) {
      return function(n) {
        return n.pipe(
          Object(K.a)(function(n) {
            var o = n.targetSnapshot,
              a = n.currentSnapshot,
              s = n.guards,
              c = s.canActivateChecks,
              l = s.canDeactivateChecks;
            return 0 === l.length && 0 === c.length
              ? Object(i.a)(Object(r.a)({}, n, { guardsResult: !0 }))
              : (function(e, t, n, r) {
                  return Object(u.a)(e).pipe(
                    Object(K.a)(function(e) {
                      return (function(e, t, n, r, o) {
                        var u =
                          t && t.routeConfig
                            ? t.routeConfig.canDeactivate
                            : null;
                        if (!u || 0 === u.length) return Object(i.a)(!0);
                        var a = u.map(function(i) {
                          var u,
                            a = nn(i, t, o);
                          if (
                            (function(e) {
                              return e && Ut(e.canDeactivate);
                            })(a)
                          )
                            u = He(a.canDeactivate(e, t, n, r));
                          else {
                            if (!Ut(a))
                              throw new Error('Invalid CanDeactivate guard');
                            u = He(a(e, t, n, r));
                          }
                          return u.pipe(Q());
                        });
                        return Object(i.a)(a).pipe(an());
                      })(
                        /**
                         * @license
                         * Copyright Google Inc. All Rights Reserved.
                         *
                         * Use of this source code is governed by an MIT-style license that can be
                         * found in the LICENSE file at https://angular.io/license
                         */ e.component,
                        e.route,
                        n,
                        t,
                        r
                      );
                    }),
                    Q(function(e) {
                      return !0 !== e;
                    }, !0)
                  );
                })(l, o, a, e).pipe(
                  Object(K.a)(function(n) {
                    return n &&
                      (function(e) {
                        return 'boolean' == typeof e;
                      })(n)
                      ? (function(e, t, n, r) {
                          return Object(u.a)(t).pipe(
                            Object(ne.a)(function(t) {
                              return Object(u.a)([
                                (function(e, t) {
                                  null !== e && t && t(new we(e));
                                  return Object(i.a)(!0);
                                })(t.route.parent, r),
                                (function(e, t) {
                                  null !== e && t && t(new De(e));
                                  return Object(i.a)(!0);
                                })(t.route, r),
                                (function(e, t, n) {
                                  var r = t[t.length - 1],
                                    o = t
                                      .slice(0, t.length - 1)
                                      .reverse()
                                      .map(function(e) {
                                        return (function(e) {
                                          var t = e.routeConfig
                                            ? e.routeConfig.canActivateChild
                                            : null;
                                          return t && 0 !== t.length
                                            ? { node: e, guards: t }
                                            : null;
                                        })(e);
                                      })
                                      .filter(function(e) {
                                        return null !== e;
                                      })
                                      .map(function(t) {
                                        return _(function() {
                                          var o = t.guards.map(function(o) {
                                            var i,
                                              u = nn(o, t.node, n);
                                            if (
                                              (function(e) {
                                                return (
                                                  e && Ut(e.canActivateChild)
                                                );
                                              })(u)
                                            )
                                              i = He(u.canActivateChild(r, e));
                                            else {
                                              if (!Ut(u))
                                                throw new Error(
                                                  'Invalid CanActivateChild guard'
                                                );
                                              i = He(u(r, e));
                                            }
                                            return i.pipe(Q());
                                          });
                                          return Object(i.a)(o).pipe(an());
                                        });
                                      });
                                  return Object(i.a)(o).pipe(an());
                                })(e, t.path, n),
                                (function(e, t, n) {
                                  var r = t.routeConfig
                                    ? t.routeConfig.canActivate
                                    : null;
                                  if (!r || 0 === r.length)
                                    return Object(i.a)(!0);
                                  var o = r.map(function(r) {
                                    return _(function() {
                                      var o,
                                        i = nn(r, t, n);
                                      if (
                                        (function(e) {
                                          return e && Ut(e.canActivate);
                                        })(i)
                                      )
                                        o = He(i.canActivate(t, e));
                                      else {
                                        if (!Ut(i))
                                          throw new Error(
                                            'Invalid CanActivate guard'
                                          );
                                        o = He(i(t, e));
                                      }
                                      return o.pipe(Q());
                                    });
                                  });
                                  return Object(i.a)(o).pipe(an());
                                })(e, t.route, n)
                              ]).pipe(
                                E(),
                                Q(function(e) {
                                  return !0 !== e;
                                }, !0)
                              );
                            }),
                            Q(function(e) {
                              return !0 !== e;
                            }, !0)
                          );
                        })(o, c, e, t)
                      : Object(i.a)(n);
                  }),
                  Object(C.a)(function(e) {
                    return Object(r.a)({}, n, { guardsResult: e });
                  })
                );
          })
        );
      };
    }
    var cn = (function() {
      return function() {};
    })();
    var ln = (function() {
      function e(e, t, n, r, o, i) {
        (this.rootComponentType = e),
          (this.config = t),
          (this.urlTree = n),
          (this.url = r),
          (this.paramsInheritanceStrategy = o),
          (this.relativeLinkResolution = i);
      }
      return (
        (e.prototype.recognize = function() {
          try {
            var e = pn(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              t = this.processSegmentGroup(this.config, e, xe),
              n = new _t(
                [],
                Object.freeze({}),
                Object.freeze(Object(r.a)({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                xe,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              o = new ht(n, t),
              u = new wt(this.url, o);
            return this.inheritParamsAndData(u._root), Object(i.a)(u);
          } catch (e) {
            return new s.a(function(t) {
              return t.error(e);
            });
          }
        }),
        (e.prototype.inheritParamsAndData = function(e) {
          var t = this,
            n = e.value,
            r = bt(n, this.paramsInheritanceStrategy);
          (n.params = Object.freeze(r.params)),
            (n.data = Object.freeze(r.data)),
            e.children.forEach(function(e) {
              return t.inheritParamsAndData(e);
            });
        }),
        (e.prototype.processSegmentGroup = function(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }),
        (e.prototype.processChildren = function(e, t) {
          var n = this,
            r = Ke(t, function(t, r) {
              return n.processSegmentGroup(e, t, r);
            });
          return (
            (function(e) {
              var t = {};
              e.forEach(function(e) {
                var n = t[e.value.outlet];
                if (n) {
                  var r = n.url
                      .map(function(e) {
                        return e.toString();
                      })
                      .join('/'),
                    o = e.value.url
                      .map(function(e) {
                        return e.toString();
                      })
                      .join('/');
                  throw new Error(
                    "Two segments cannot have the same outlet name: '" +
                      r +
                      "' and '" +
                      o +
                      "'."
                  );
                }
                t[e.value.outlet] = e.value;
              });
            })(r),
            (function(e) {
              e.sort(function(e, t) {
                return e.value.outlet === xe
                  ? -1
                  : t.value.outlet === xe
                  ? 1
                  : e.value.outlet.localeCompare(t.value.outlet);
              });
            })(r),
            r
          );
        }),
        (e.prototype.processSegment = function(e, t, n, o) {
          var i, u;
          try {
            for (var a = Object(r.h)(e), s = a.next(); !s.done; s = a.next()) {
              var c = s.value;
              try {
                return this.processSegmentAgainstRoute(c, t, n, o);
              } catch (e) {
                if (!(e instanceof cn)) throw e;
              }
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              s && !s.done && (u = a.return) && u.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          if (this.noLeftoversInUrl(t, n, o)) return [];
          throw new cn();
        }),
        (e.prototype.noLeftoversInUrl = function(e, t, n) {
          return 0 === t.length && !e.children[n];
        }),
        (e.prototype.processSegmentAgainstRoute = function(e, t, n, o) {
          if (e.redirectTo) throw new cn();
          if ((e.outlet || xe) !== o) throw new cn();
          var i,
            u = [],
            a = [];
          if ('**' === e.path) {
            var s = n.length > 0 ? Be(n).parameters : {};
            i = new _t(
              n,
              s,
              Object.freeze(Object(r.a)({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              gn(e),
              o,
              e.component,
              e,
              fn(t),
              dn(t) + n.length,
              yn(e)
            );
          } else {
            var c = (function(e, t, n) {
              if ('' === t.path) {
                if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0))
                  throw new cn();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              var o = (t.matcher || Te)(n, e, t);
              if (!o) throw new cn();
              var i = {};
              Ue(o.posParams, function(e, t) {
                i[t] = e.path;
              });
              var u =
                o.consumed.length > 0
                  ? Object(r.a)(
                      {},
                      i,
                      o.consumed[o.consumed.length - 1].parameters
                    )
                  : i;
              return {
                consumedSegments: o.consumed,
                lastChild: o.consumed.length,
                parameters: u
              };
            })(t, e, n);
            (u = c.consumedSegments),
              (a = n.slice(c.lastChild)),
              (i = new _t(
                u,
                c.parameters,
                Object.freeze(Object(r.a)({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                gn(e),
                o,
                e.component,
                e,
                fn(t),
                dn(t) + u.length,
                yn(e)
              ));
          }
          var l = (function(e) {
              if (e.children) return e.children;
              if (e.loadChildren) return e._loadedConfig.routes;
              return [];
            })(e),
            f = pn(t, u, a, l, this.relativeLinkResolution),
            d = f.segmentGroup,
            p = f.slicedSegments;
          if (0 === p.length && d.hasChildren()) {
            var h = this.processChildren(l, d);
            return [new ht(i, h)];
          }
          if (0 === l.length && 0 === p.length) return [new ht(i, [])];
          var v = this.processSegment(l, d, p, xe);
          return [new ht(i, v)];
        }),
        e
      );
    })();
    function fn(e) {
      for (var t = e; t._sourceSegment; ) t = t._sourceSegment;
      return t;
    }
    function dn(e) {
      for (
        var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        t._sourceSegment;

      )
        n += (t = t._sourceSegment)._segmentIndexShift
          ? t._segmentIndexShift
          : 0;
      return n - 1;
    }
    function pn(e, t, n, o, i) {
      if (
        n.length > 0 &&
        (function(e, t, n) {
          return n.some(function(n) {
            return hn(e, t, n) && vn(n) !== xe;
          });
        })(e, n, o)
      ) {
        var u = new qe(
          t,
          (function(e, t, n, o) {
            var i,
              u,
              a = {};
            (a[xe] = o),
              (o._sourceSegment = e),
              (o._segmentIndexShift = t.length);
            try {
              for (
                var s = Object(r.h)(n), c = s.next();
                !c.done;
                c = s.next()
              ) {
                var l = c.value;
                if ('' === l.path && vn(l) !== xe) {
                  var f = new qe([], {});
                  (f._sourceSegment = e),
                    (f._segmentIndexShift = t.length),
                    (a[vn(l)] = f);
                }
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                c && !c.done && (u = s.return) && u.call(s);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          })(e, t, o, new qe(n, e.children))
        );
        return (
          (u._sourceSegment = e),
          (u._segmentIndexShift = t.length),
          { segmentGroup: u, slicedSegments: [] }
        );
      }
      if (
        0 === n.length &&
        (function(e, t, n) {
          return n.some(function(n) {
            return hn(e, t, n);
          });
        })(e, n, o)
      ) {
        var a = new qe(
          e.segments,
          (function(e, t, n, o, i, u) {
            var a,
              s,
              c = {};
            try {
              for (
                var l = Object(r.h)(o), f = l.next();
                !f.done;
                f = l.next()
              ) {
                var d = f.value;
                if (hn(e, n, d) && !i[vn(d)]) {
                  var p = new qe([], {});
                  (p._sourceSegment = e),
                    (p._segmentIndexShift =
                      'legacy' === u ? e.segments.length : t.length),
                    (c[vn(d)] = p);
                }
              }
            } catch (e) {
              a = { error: e };
            } finally {
              try {
                f && !f.done && (s = l.return) && s.call(l);
              } finally {
                if (a) throw a.error;
              }
            }
            return Object(r.a)({}, i, c);
          })(e, t, n, o, e.children, i)
        );
        return (
          (a._sourceSegment = e),
          (a._segmentIndexShift = t.length),
          { segmentGroup: a, slicedSegments: n }
        );
      }
      var s = new qe(e.segments, e.children);
      return (
        (s._sourceSegment = e),
        (s._segmentIndexShift = t.length),
        { segmentGroup: s, slicedSegments: n }
      );
    }
    function hn(e, t, n) {
      return (
        (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
        ('' === n.path && void 0 === n.redirectTo)
      );
    }
    function vn(e) {
      return e.outlet || xe;
    }
    function gn(e) {
      return e.data || {};
    }
    function yn(e) {
      return e.resolve || {};
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function mn(e, t, n, o, i) {
      return function(u) {
        return u.pipe(
          Object(K.a)(function(u) {
            return (function(e, t, n, r, o, i) {
              return (
                void 0 === o && (o = 'emptyOnly'),
                void 0 === i && (i = 'legacy'),
                new ln(e, t, n, r, o, i).recognize()
              );
            })(e, t, u.urlAfterRedirects, n(u.urlAfterRedirects), o, i).pipe(
              Object(C.a)(function(e) {
                return Object(r.a)({}, u, { targetSnapshot: e });
              })
            );
          })
        );
      };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function bn(e, t) {
      return function(n) {
        return n.pipe(
          Object(K.a)(function(n) {
            var o = n.targetSnapshot,
              a = n.guards.canActivateChecks;
            return a.length
              ? Object(u.a)(a).pipe(
                  Object(ne.a)(function(n) {
                    return (function(e, t, n, o) {
                      return (function(e, t, n, r) {
                        var o = Object.keys(e);
                        if (0 === o.length) return Object(i.a)({});
                        if (1 === o.length) {
                          var a = o[0];
                          return _n(e[a], t, n, r).pipe(
                            Object(C.a)(function(e) {
                              var t;
                              return ((t = {})[a] = e), t;
                            })
                          );
                        }
                        var s = {};
                        return Object(u.a)(o)
                          .pipe(
                            Object(K.a)(function(o) {
                              return _n(e[o], t, n, r).pipe(
                                Object(C.a)(function(e) {
                                  return (s[o] = e), e;
                                })
                              );
                            })
                          )
                          .pipe(
                            z(),
                            Object(C.a)(function() {
                              return s;
                            })
                          );
                      })(e._resolve, e, t, o).pipe(
                        Object(C.a)(function(t) {
                          return (
                            (e._resolvedData = t),
                            (e.data = Object(r.a)(
                              {},
                              e.data,
                              bt(e, n).resolve
                            )),
                            null
                          );
                        })
                      );
                    })(n.route, o, e, t);
                  }),
                  (function(e, t) {
                    return arguments.length >= 2
                      ? function(n) {
                          return Object(re.a)(Object(te.a)(e, t), j(1), L(t))(
                            n
                          );
                        }
                      : function(t) {
                          return Object(re.a)(
                            Object(te.a)(function(t, n, r) {
                              return e(t, n, r + 1);
                            }),
                            j(1)
                          )(t);
                        };
                  })(function(e, t) {
                    return e;
                  }),
                  Object(C.a)(function(e) {
                    return n;
                  })
                )
              : Object(i.a)(n);
          })
        );
      };
    }
    function _n(e, t, n, r) {
      var o = nn(e, t, r);
      return o.resolve ? He(o.resolve(t, n)) : He(o(t, n));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function wn(e) {
      return function(t) {
        return t.pipe(
          Object(J.a)(function(t) {
            var n = e(t);
            return n
              ? Object(u.a)(n).pipe(
                  Object(C.a)(function() {
                    return t;
                  })
                )
              : Object(u.a)([t]);
          })
        );
      };
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Cn = (function() {
        return function() {};
      })(),
      Dn = (function() {
        function e() {}
        return (
          (e.prototype.shouldDetach = function(e) {
            return !1;
          }),
          (e.prototype.store = function(e, t) {}),
          (e.prototype.shouldAttach = function(e) {
            return !1;
          }),
          (e.prototype.retrieve = function(e) {
            return null;
          }),
          (e.prototype.shouldReuseRoute = function(e, t) {
            return e.routeConfig === t.routeConfig;
          }),
          e
        );
      })(),
      En = new o.InjectionToken('ROUTES'),
      On = (function() {
        function e(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        return (
          (e.prototype.load = function(e, t) {
            var n = this;
            return (
              this.onLoadStartListener && this.onLoadStartListener(t),
              this.loadModuleFactory(t.loadChildren).pipe(
                Object(C.a)(function(r) {
                  n.onLoadEndListener && n.onLoadEndListener(t);
                  var o = r.create(e);
                  return new ke(Le(o.injector.get(En)).map(Ne), o);
                })
              )
            );
          }),
          (e.prototype.loadModuleFactory = function(e) {
            var t = this;
            return 'string' == typeof e
              ? Object(u.a)(this.loader.load(e))
              : He(e()).pipe(
                  Object(K.a)(function(e) {
                    return e instanceof o.NgModuleFactory
                      ? Object(i.a)(e)
                      : Object(u.a)(t.compiler.compileModuleAsync(e));
                  })
                );
          }),
          e
        );
      })(),
      Sn = (function() {
        return function() {};
      })(),
      xn = (function() {
        function e() {}
        return (
          (e.prototype.shouldProcessUrl = function(e) {
            return !0;
          }),
          (e.prototype.extract = function(e) {
            return e;
          }),
          (e.prototype.merge = function(e, t) {
            return e;
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function An(e) {
      throw e;
    }
    function jn(e, t, n) {
      return t.parse('/');
    }
    function Rn(e, t) {
      return Object(i.a)(null);
    }
    var In = (function() {
      function e(e, t, n, r, i, u, s, c) {
        var l = this;
        (this.rootComponentType = e),
          (this.urlSerializer = t),
          (this.rootContexts = n),
          (this.location = r),
          (this.config = c),
          (this.navigationId = 0),
          (this.isNgZoneEnabled = !1),
          (this.events = new w.a()),
          (this.errorHandler = An),
          (this.malformedUriErrorHandler = jn),
          (this.navigated = !1),
          (this.lastSuccessfulId = -1),
          (this.hooks = { beforePreactivation: Rn, afterPreactivation: Rn }),
          (this.urlHandlingStrategy = new xn()),
          (this.routeReuseStrategy = new Dn()),
          (this.onSameUrlNavigation = 'ignore'),
          (this.paramsInheritanceStrategy = 'emptyOnly'),
          (this.urlUpdateStrategy = 'deferred'),
          (this.relativeLinkResolution = 'legacy');
        (this.ngModule = i.get(o.NgModuleRef)),
          (this.console = i.get(o['ɵConsole']));
        var f = i.get(o.NgZone);
        (this.isNgZoneEnabled = f instanceof o.NgZone),
          this.resetConfig(c),
          (this.currentUrlTree = new Ze(new qe([], {}), {}, null)),
          (this.rawUrlTree = this.currentUrlTree),
          (this.configLoader = new On(
            u,
            s,
            function(e) {
              return l.triggerEvent(new be(e));
            },
            function(e) {
              return l.triggerEvent(new _e(e));
            }
          )),
          (this.routerState = yt(this.currentUrlTree, this.rootComponentType)),
          (this.transitions = new a.a({
            id: 0,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
            urlAfterRedirects: this.urlHandlingStrategy.extract(
              this.currentUrlTree
            ),
            rawUrl: this.currentUrlTree,
            extras: {},
            resolve: null,
            reject: null,
            promise: Promise.resolve(!0),
            source: 'imperative',
            state: null,
            currentSnapshot: this.routerState.snapshot,
            targetSnapshot: null,
            currentRouterState: this.routerState,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null
          })),
          (this.navigations = this.setupNavigations(this.transitions)),
          this.processNavigations();
      }
      return (
        (e.prototype.setupNavigations = function(e) {
          var t = this,
            n = this.events;
          return e.pipe(
            Object(O.a)(function(e) {
              return 0 !== e.id;
            }),
            Object(C.a)(function(e) {
              return Object(
                r.a
              )({}, e, { extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl) });
            }),
            Object(J.a)(function(e) {
              var o = !1,
                u = !1;
              return Object(i.a)(e).pipe(
                Object(J.a)(function(e) {
                  var o =
                    !t.navigated ||
                    e.extractedUrl.toString() !== t.currentUrlTree.toString();
                  if (
                    ('reload' === t.onSameUrlNavigation || o) &&
                    t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Object(i.a)(e).pipe(
                      M(function(e) {
                        return (
                          'eager' === t.urlUpdateStrategy &&
                          !e.extras.skipLocationChange &&
                          t.setBrowserUrl(e.rawUrl, !!e.extras.replaceUrl, e.id)
                        );
                      }),
                      Object(J.a)(function(e) {
                        var r = t.transitions.getValue();
                        return (
                          n.next(
                            new le(
                              e.id,
                              t.serializeUrl(e.extractedUrl),
                              e.source,
                              e.state
                            )
                          ),
                          r !== t.transitions.getValue() ? b.a : [e]
                        );
                      }),
                      Object(J.a)(function(e) {
                        return Promise.resolve(e);
                      }),
                      Xt(
                        t.ngModule.injector,
                        t.configLoader,
                        t.urlSerializer,
                        t.config
                      ),
                      mn(
                        t.rootComponentType,
                        t.config,
                        function(e) {
                          return t.serializeUrl(e);
                        },
                        t.paramsInheritanceStrategy,
                        t.relativeLinkResolution
                      ),
                      M(function(e) {
                        var r = new he(
                          e.id,
                          t.serializeUrl(e.extractedUrl),
                          t.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        n.next(r);
                      })
                    );
                  if (
                    o &&
                    t.rawUrlTree &&
                    t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)
                  ) {
                    var u = e.id,
                      a = e.extractedUrl,
                      s = e.source,
                      c = e.state,
                      l = e.extras,
                      f = new le(u, t.serializeUrl(a), s, c);
                    n.next(f);
                    var d = yt(a, t.rootComponentType).snapshot;
                    return Object(i.a)(
                      Object(r.a)({}, e, {
                        targetSnapshot: d,
                        urlAfterRedirects: a,
                        extras: Object(r.a)({}, l, {
                          skipLocationChange: !1,
                          replaceUrl: !1
                        })
                      })
                    );
                  }
                  return (t.rawUrlTree = e.rawUrl), e.resolve(null), b.a;
                }),
                wn(function(e) {
                  var n = e.targetSnapshot,
                    r = e.id,
                    o = e.extractedUrl,
                    i = e.rawUrl,
                    u = e.extras,
                    a = u.skipLocationChange,
                    s = u.replaceUrl;
                  return t.hooks.beforePreactivation(n, {
                    navigationId: r,
                    appliedUrlTree: o,
                    rawUrlTree: i,
                    skipLocationChange: !!a,
                    replaceUrl: !!s
                  });
                }),
                M(function(e) {
                  var n = new ve(
                    e.id,
                    t.serializeUrl(e.extractedUrl),
                    t.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  t.triggerEvent(n);
                }),
                Object(C.a)(function(e) {
                  return Object(r.a)({}, e, {
                    guards: (function(e, t, n) {
                      var r = e._root;
                      return rn(r, t ? t._root : null, n, [r.value]);
                    })(e.targetSnapshot, e.currentSnapshot, t.rootContexts)
                  });
                }),
                sn(t.ngModule.injector, function(e) {
                  return t.triggerEvent(e);
                }),
                M(function(e) {
                  if (Ht(e.guardsResult)) {
                    var n = Ie(
                      'Redirecting to "' + t.serializeUrl(e.guardsResult) + '"'
                    );
                    throw ((n.url = e.guardsResult), n);
                  }
                }),
                M(function(e) {
                  var n = new ge(
                    e.id,
                    t.serializeUrl(e.extractedUrl),
                    t.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  t.triggerEvent(n);
                }),
                Object(O.a)(function(e) {
                  if (!e.guardsResult) {
                    t.resetUrlToCurrentUrlTree();
                    var r = new de(e.id, t.serializeUrl(e.extractedUrl), '');
                    return n.next(r), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                wn(function(e) {
                  if (e.guards.canActivateChecks.length)
                    return Object(i.a)(e).pipe(
                      M(function(e) {
                        var n = new ye(
                          e.id,
                          t.serializeUrl(e.extractedUrl),
                          t.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.triggerEvent(n);
                      }),
                      bn(t.paramsInheritanceStrategy, t.ngModule.injector),
                      M(function(e) {
                        var n = new me(
                          e.id,
                          t.serializeUrl(e.extractedUrl),
                          t.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.triggerEvent(n);
                      })
                    );
                }),
                wn(function(e) {
                  var n = e.targetSnapshot,
                    r = e.id,
                    o = e.extractedUrl,
                    i = e.rawUrl,
                    u = e.extras,
                    a = u.skipLocationChange,
                    s = u.replaceUrl;
                  return t.hooks.afterPreactivation(n, {
                    navigationId: r,
                    appliedUrlTree: o,
                    rawUrlTree: i,
                    skipLocationChange: !!a,
                    replaceUrl: !!s
                  });
                }),
                Object(C.a)(function(e) {
                  var n = (function(e, t, n) {
                    var r = St(e, t._root, n ? n._root : void 0);
                    return new gt(r, t);
                  })(
                    t.routeReuseStrategy,
                    e.targetSnapshot,
                    e.currentRouterState
                  );
                  return Object(r.a)({}, e, { targetRouterState: n });
                }),
                M(function(e) {
                  (t.currentUrlTree = e.urlAfterRedirects),
                    (t.rawUrlTree = t.urlHandlingStrategy.merge(
                      t.currentUrlTree,
                      e.rawUrl
                    )),
                    (t.routerState = e.targetRouterState),
                    'deferred' !== t.urlUpdateStrategy ||
                      e.extras.skipLocationChange ||
                      t.setBrowserUrl(
                        t.rawUrlTree,
                        !!e.extras.replaceUrl,
                        e.id
                      );
                }),
                (function(e, t, n) {
                  return Object(C.a)(function(r) {
                    return (
                      new Lt(
                        t,
                        r.targetRouterState,
                        r.currentRouterState,
                        n
                      ).activate(e),
                      r
                    );
                  });
                })(t.rootContexts, t.routeReuseStrategy, function(e) {
                  return t.triggerEvent(e);
                }),
                M({
                  next: function() {
                    o = !0;
                  },
                  complete: function() {
                    o = !0;
                  }
                }),
                (function(e) {
                  return function(t) {
                    return t.lift(new ie(e));
                  };
                })(function() {
                  if (!o && !u) {
                    t.resetUrlToCurrentUrlTree();
                    var r = new de(
                      e.id,
                      t.serializeUrl(e.extractedUrl),
                      'Navigation ID ' +
                        e.id +
                        ' is not equal to the current navigation id ' +
                        t.navigationId
                    );
                    n.next(r), e.resolve(!1);
                  }
                }),
                Object(G.a)(function(r) {
                  if (
                    ((u = !0),
                    (function(e) {
                      return e && e[Re];
                    })(r))
                  ) {
                    t.navigated = !0;
                    var o = Ht(r.url);
                    o ||
                      t.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      );
                    var i = new de(
                      e.id,
                      t.serializeUrl(e.extractedUrl),
                      r.message
                    );
                    n.next(i), e.resolve(!1), o && t.navigateByUrl(r.url);
                  } else {
                    t.resetStateAndUrl(
                      e.currentRouterState,
                      e.currentUrlTree,
                      e.rawUrl
                    );
                    var a = new pe(e.id, t.serializeUrl(e.extractedUrl), r);
                    n.next(a);
                    try {
                      e.resolve(t.errorHandler(r));
                    } catch (t) {
                      e.reject(t);
                    }
                  }
                  return b.a;
                })
              );
            })
          );
        }),
        (e.prototype.resetRootComponentType = function(e) {
          (this.rootComponentType = e),
            (this.routerState.root.component = this.rootComponentType);
        }),
        (e.prototype.getTransition = function() {
          return this.transitions.value;
        }),
        (e.prototype.setTransition = function(e) {
          this.transitions.next(Object(r.a)({}, this.getTransition(), e));
        }),
        (e.prototype.initialNavigation = function() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }),
        (e.prototype.setUpLocationChangeListener = function() {
          var e = this;
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(function(t) {
              var n = e.parseUrl(t.url),
                r = 'popstate' === t.type ? 'popstate' : 'hashchange',
                o =
                  t.state && t.state.navigationId
                    ? { navigationId: t.state.navigationId }
                    : null;
              setTimeout(function() {
                e.scheduleNavigation(n, r, o, { replaceUrl: !0 });
              }, 0);
            }));
        }),
        Object.defineProperty(e.prototype, 'url', {
          get: function() {
            return this.serializeUrl(this.currentUrlTree);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.triggerEvent = function(e) {
          this.events.next(e);
        }),
        (e.prototype.resetConfig = function(e) {
          Me(e),
            (this.config = e.map(Ne)),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1);
        }),
        (e.prototype.ngOnDestroy = function() {
          this.dispose();
        }),
        (e.prototype.dispose = function() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(),
            (this.locationSubscription = null));
        }),
        (e.prototype.createUrlTree = function(e, t) {
          void 0 === t && (t = {});
          var n = t.relativeTo,
            i = t.queryParams,
            u = t.fragment,
            a = t.preserveQueryParams,
            s = t.queryParamsHandling,
            c = t.preserveFragment;
          Object(o.isDevMode)() &&
            a &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          var l = n || this.routerState.root,
            f = c ? this.currentUrlTree.fragment : u,
            d = null;
          if (s)
            switch (s) {
              case 'merge':
                d = Object(r.a)({}, this.currentUrlTree.queryParams, i);
                break;
              case 'preserve':
                d = this.currentUrlTree.queryParams;
                break;
              default:
                d = i || null;
            }
          else d = a ? this.currentUrlTree.queryParams : i || null;
          return (
            null !== d && (d = this.removeEmptyProps(d)),
            xt(l, this.currentUrlTree, e, d, f)
          );
        }),
        (e.prototype.navigateByUrl = function(e, t) {
          void 0 === t && (t = { skipLocationChange: !1 }),
            Object(o.isDevMode)() &&
              this.isNgZoneEnabled &&
              !o.NgZone.isInAngularZone() &&
              this.console.warn(
                "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
              );
          var n = Ht(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, t);
        }),
        (e.prototype.navigate = function(e, t) {
          return (
            void 0 === t && (t = { skipLocationChange: !1 }),
            (function(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (null == n)
                  throw new Error(
                    'The requested path contains ' +
                      n +
                      ' segment at index ' +
                      t
                  );
              }
            })(
              /**
               * @license
               * Copyright Google Inc. All Rights Reserved.
               *
               * Use of this source code is governed by an MIT-style license that can be
               * found in the LICENSE file at https://angular.io/license
               */ e
            ),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }),
        (e.prototype.serializeUrl = function(e) {
          return this.urlSerializer.serialize(e);
        }),
        (e.prototype.parseUrl = function(e) {
          var t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }),
        (e.prototype.isActive = function(e, t) {
          if (Ht(e)) return ze(this.currentUrlTree, e, t);
          var n = this.parseUrl(e);
          return ze(this.currentUrlTree, n, t);
        }),
        (e.prototype.removeEmptyProps = function(e) {
          return Object.keys(e).reduce(function(t, n) {
            var r = e[n];
            return null !== r && void 0 !== r && (t[n] = r), t;
          }, {});
        }),
        (e.prototype.processNavigations = function() {
          var e = this;
          this.navigations.subscribe(
            function(t) {
              (e.navigated = !0),
                (e.lastSuccessfulId = t.id),
                e.events.next(
                  new fe(
                    t.id,
                    e.serializeUrl(t.extractedUrl),
                    e.serializeUrl(e.currentUrlTree)
                  )
                ),
                t.resolve(!0);
            },
            function(t) {
              e.console.warn('Unhandled Navigation Error: ');
            }
          );
        }),
        (e.prototype.scheduleNavigation = function(e, t, n, r) {
          var o = this.getTransition();
          if (
            o &&
            'imperative' !== t &&
            'imperative' === o.source &&
            o.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            o &&
            'hashchange' == t &&
            'popstate' === o.source &&
            o.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            o &&
            'popstate' == t &&
            'hashchange' === o.source &&
            o.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          var i = null,
            u = null,
            a = new Promise(function(e, t) {
              (i = e), (u = t);
            }),
            s = ++this.navigationId;
          return (
            this.setTransition({
              id: s,
              source: t,
              state: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: i,
              reject: u,
              promise: a,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            a.catch(function(e) {
              return Promise.reject(e);
            })
          );
        }),
        (e.prototype.setBrowserUrl = function(e, t, n) {
          var r = this.urlSerializer.serialize(e);
          this.location.isCurrentPathEqualTo(r) || t
            ? this.location.replaceState(r, '', { navigationId: n })
            : this.location.go(r, '', { navigationId: n });
        }),
        (e.prototype.resetStateAndUrl = function(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              n
            )),
            this.resetUrlToCurrentUrlTree();
        }),
        (e.prototype.resetUrlToCurrentUrlTree = function() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            '',
            { navigationId: this.lastSuccessfulId }
          );
        }),
        e
      );
    })();
    var Tn = (function() {
        function e(e, t, n, r, o) {
          (this.router = e),
            (this.route = t),
            (this.commands = []),
            null == n && r.setAttribute(o.nativeElement, 'tabindex', '0');
        }
        return (
          Object.defineProperty(e.prototype, 'routerLink', {
            set: function(e) {
              this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'preserveQueryParams', {
            set: function(e) {
              Object(o.isDevMode)() &&
                console &&
                console.warn &&
                console.warn(
                  'preserveQueryParams is deprecated!, use queryParamsHandling instead.'
                ),
                (this.preserve = e);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.onClick = function() {
            var e = {
              skipLocationChange: Mn(this.skipLocationChange),
              replaceUrl: Mn(this.replaceUrl)
            };
            return this.router.navigateByUrl(this.urlTree, e), !0;
          }),
          Object.defineProperty(e.prototype, 'urlTree', {
            get: function() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Mn(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Mn(this.preserveFragment)
              });
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      kn = (function() {
        function e(e, t, n) {
          var r = this;
          (this.router = e),
            (this.route = t),
            (this.locationStrategy = n),
            (this.commands = []),
            (this.subscription = e.events.subscribe(function(e) {
              e instanceof fe && r.updateTargetUrlAndHref();
            }));
        }
        return (
          Object.defineProperty(e.prototype, 'routerLink', {
            set: function(e) {
              this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'preserveQueryParams', {
            set: function(e) {
              Object(o.isDevMode)() &&
                console &&
                console.warn &&
                console.warn(
                  'preserveQueryParams is deprecated, use queryParamsHandling instead.'
                ),
                (this.preserve = e);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ngOnChanges = function(e) {
            this.updateTargetUrlAndHref();
          }),
          (e.prototype.ngOnDestroy = function() {
            this.subscription.unsubscribe();
          }),
          (e.prototype.onClick = function(e, t, n, r) {
            if (0 !== e || t || n || r) return !0;
            if ('string' == typeof this.target && '_self' != this.target)
              return !0;
            var o = {
              skipLocationChange: Mn(this.skipLocationChange),
              replaceUrl: Mn(this.replaceUrl)
            };
            return this.router.navigateByUrl(this.urlTree, o), !1;
          }),
          (e.prototype.updateTargetUrlAndHref = function() {
            this.href = this.locationStrategy.prepareExternalUrl(
              this.router.serializeUrl(this.urlTree)
            );
          }),
          Object.defineProperty(e.prototype, 'urlTree', {
            get: function() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Mn(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Mn(this.preserveFragment)
              });
            },
            enumerable: !0,
            configurable: !0
          }),
          Object(r.b)(
            [
              Object(o.HostBinding)('attr.target'),
              Object(o.Input)(),
              Object(r.d)('design:type', String)
            ],
            e.prototype,
            'target',
            void 0
          ),
          e
        );
      })();
    function Mn(e) {
      return '' === e || !!e;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var Pn = (function() {
        function e(e, t, n, r) {
          var o = this;
          (this.router = e),
            (this.element = t),
            (this.renderer = n),
            (this.cdr = r),
            (this.classes = []),
            (this.isActive = !1),
            (this.routerLinkActiveOptions = { exact: !1 }),
            (this.subscription = e.events.subscribe(function(e) {
              e instanceof fe && o.update();
            }));
        }
        return (
          (e.prototype.ngAfterContentInit = function() {
            var e = this;
            this.links.changes.subscribe(function(t) {
              return e.update();
            }),
              this.linksWithHrefs.changes.subscribe(function(t) {
                return e.update();
              }),
              this.update();
          }),
          Object.defineProperty(e.prototype, 'routerLinkActive', {
            set: function(e) {
              var t = Array.isArray(e) ? e : e.split(' ');
              this.classes = t.filter(function(e) {
                return !!e;
              });
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ngOnChanges = function(e) {
            this.update();
          }),
          (e.prototype.ngOnDestroy = function() {
            this.subscription.unsubscribe();
          }),
          (e.prototype.update = function() {
            var e = this;
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(function() {
                var t = e.hasActiveLinks();
                e.isActive !== t &&
                  ((e.isActive = t),
                  e.classes.forEach(function(n) {
                    t
                      ? e.renderer.addClass(e.element.nativeElement, n)
                      : e.renderer.removeClass(e.element.nativeElement, n);
                  }));
              });
          }),
          (e.prototype.isLinkActive = function(e) {
            var t = this;
            return function(n) {
              return e.isActive(n.urlTree, t.routerLinkActiveOptions.exact);
            };
          }),
          (e.prototype.hasActiveLinks = function() {
            return (
              this.links.some(this.isLinkActive(this.router)) ||
              this.linksWithHrefs.some(this.isLinkActive(this.router))
            );
          }),
          e
        );
      })(),
      Fn = (function() {
        return function() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Nn()),
            (this.attachRef = null);
        };
      })(),
      Nn = (function() {
        function e() {
          this.contexts = new Map();
        }
        return (
          (e.prototype.onChildOutletCreated = function(e, t) {
            var n = this.getOrCreateContext(e);
            (n.outlet = t), this.contexts.set(e, n);
          }),
          (e.prototype.onChildOutletDestroyed = function(e) {
            var t = this.getContext(e);
            t && (t.outlet = null);
          }),
          (e.prototype.onOutletDeactivated = function() {
            var e = this.contexts;
            return (this.contexts = new Map()), e;
          }),
          (e.prototype.onOutletReAttached = function(e) {
            this.contexts = e;
          }),
          (e.prototype.getOrCreateContext = function(e) {
            var t = this.getContext(e);
            return t || ((t = new Fn()), this.contexts.set(e, t)), t;
          }),
          (e.prototype.getContext = function(e) {
            return this.contexts.get(e) || null;
          }),
          e
        );
      })(),
      Vn = (function() {
        function e(e, t, n, r, i) {
          (this.parentContexts = e),
            (this.location = t),
            (this.resolver = n),
            (this.changeDetector = i),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new o.EventEmitter()),
            (this.deactivateEvents = new o.EventEmitter()),
            (this.name = r || xe),
            e.onChildOutletCreated(this.name, this);
        }
        return (
          (e.prototype.ngOnDestroy = function() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }),
          (e.prototype.ngOnInit = function() {
            if (!this.activated) {
              var e = this.parentContexts.getContext(this.name);
              e &&
                e.route &&
                (e.attachRef
                  ? this.attach(e.attachRef, e.route)
                  : this.activateWith(e.route, e.resolver || null));
            }
          }),
          Object.defineProperty(e.prototype, 'isActivated', {
            get: function() {
              return !!this.activated;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'component', {
            get: function() {
              if (!this.activated) throw new Error('Outlet is not activated');
              return this.activated.instance;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'activatedRoute', {
            get: function() {
              if (!this.activated) throw new Error('Outlet is not activated');
              return this._activatedRoute;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'activatedRouteData', {
            get: function() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.detach = function() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            var e = this.activated;
            return (this.activated = null), (this._activatedRoute = null), e;
          }),
          (e.prototype.attach = function(e, t) {
            (this.activated = e),
              (this._activatedRoute = t),
              this.location.insert(e.hostView);
          }),
          (e.prototype.deactivate = function() {
            if (this.activated) {
              var e = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(e);
            }
          }),
          (e.prototype.activateWith = function(e, t) {
            if (this.isActivated)
              throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = e;
            var n = e._futureSnapshot.routeConfig.component,
              r = (t = t || this.resolver).resolveComponentFactory(n),
              o = this.parentContexts.getOrCreateContext(this.name).children,
              i = new Ln(e, o, this.location.injector);
            (this.activated = this.location.createComponent(
              r,
              this.location.length,
              i
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }),
          e
        );
      })(),
      Ln = (function() {
        function e(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        return (
          (e.prototype.get = function(e, t) {
            return e === mt
              ? this.route
              : e === Nn
              ? this.childContexts
              : this.parent.get(e, t);
          }),
          e
        );
      })(),
      Bn = (function() {
        return function() {};
      })(),
      Un = (function() {
        function e() {}
        return (
          (e.prototype.preload = function(e, t) {
            return t().pipe(
              Object(G.a)(function() {
                return Object(i.a)(null);
              })
            );
          }),
          e
        );
      })(),
      Hn = (function() {
        function e() {}
        return (
          (e.prototype.preload = function(e, t) {
            return Object(i.a)(null);
          }),
          e
        );
      })(),
      zn = (function() {
        function e(e, t, n, r, o) {
          (this.router = e), (this.injector = r), (this.preloadingStrategy = o);
          this.loader = new On(
            t,
            n,
            function(t) {
              return e.triggerEvent(new be(t));
            },
            function(t) {
              return e.triggerEvent(new _e(t));
            }
          );
        }
        return (
          (e.prototype.setUpPreloading = function() {
            var e = this;
            this.subscription = this.router.events
              .pipe(
                Object(O.a)(function(e) {
                  return e instanceof fe;
                }),
                Object(ne.a)(function() {
                  return e.preload();
                })
              )
              .subscribe(function() {});
          }),
          (e.prototype.preload = function() {
            var e = this.injector.get(o.NgModuleRef);
            return this.processRoutes(e, this.router.config);
          }),
          (e.prototype.ngOnDestroy = function() {
            this.subscription.unsubscribe();
          }),
          (e.prototype.processRoutes = function(e, t) {
            var n,
              o,
              i = [];
            try {
              for (
                var a = Object(r.h)(t), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var c = s.value;
                if (c.loadChildren && !c.canLoad && c._loadedConfig) {
                  var l = c._loadedConfig;
                  i.push(this.processRoutes(l.module, l.routes));
                } else
                  c.loadChildren && !c.canLoad
                    ? i.push(this.preloadConfig(e, c))
                    : c.children && i.push(this.processRoutes(e, c.children));
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                s && !s.done && (o = a.return) && o.call(a);
              } finally {
                if (n) throw n.error;
              }
            }
            return Object(u.a)(i).pipe(
              Object(D.a)(),
              Object(C.a)(function(e) {})
            );
          }),
          (e.prototype.preloadConfig = function(e, t) {
            var n = this;
            return this.preloadingStrategy.preload(t, function() {
              return n.loader.load(e.injector, t).pipe(
                Object(K.a)(function(e) {
                  return (
                    (t._loadedConfig = e), n.processRoutes(e.module, e.routes)
                  );
                })
              );
            });
          }),
          e
        );
      })(),
      Gn = (function() {
        function e(e, t, n) {
          void 0 === n && (n = {}),
            (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration =
              n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        return (
          (e.prototype.init = function() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }),
          (e.prototype.createScrollEvents = function() {
            var e = this;
            return this.router.events.subscribe(function(t) {
              t instanceof le
                ? ((e.store[e.lastId] = e.viewportScroller.getScrollPosition()),
                  (e.lastSource = t.navigationTrigger),
                  (e.restoredId = t.restoredState
                    ? t.restoredState.navigationId
                    : 0))
                : t instanceof fe &&
                  ((e.lastId = t.id),
                  e.scheduleScrollEvent(
                    t,
                    e.router.parseUrl(t.urlAfterRedirects).fragment
                  ));
            });
          }),
          (e.prototype.consumeScrollEvents = function() {
            var e = this;
            return this.router.events.subscribe(function(t) {
              t instanceof Oe &&
                (t.position
                  ? 'top' === e.options.scrollPositionRestoration
                    ? e.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === e.options.scrollPositionRestoration &&
                      e.viewportScroller.scrollToPosition(t.position)
                  : t.anchor && 'enabled' === e.options.anchorScrolling
                  ? e.viewportScroller.scrollToAnchor(t.anchor)
                  : 'disabled' !== e.options.scrollPositionRestoration &&
                    e.viewportScroller.scrollToPosition([0, 0]));
            });
          }),
          (e.prototype.scheduleScrollEvent = function(e, t) {
            this.router.triggerEvent(
              new Oe(
                e,
                'popstate' === this.lastSource
                  ? this.store[this.restoredId]
                  : null,
                t
              )
            );
          }),
          (e.prototype.ngOnDestroy = function() {
            this.routerEventsSubscription &&
              this.routerEventsSubscription.unsubscribe(),
              this.scrollEventsSubscription &&
                this.scrollEventsSubscription.unsubscribe();
          }),
          e
        );
      })(),
      Zn = new o.InjectionToken('ROUTER_CONFIGURATION'),
      qn = new o.InjectionToken('ROUTER_FORROOT_GUARD'),
      Wn = [
        ae.Location,
        { provide: Ye, useClass: $e },
        {
          provide: In,
          useFactory: er,
          deps: [
            o.ApplicationRef,
            Ye,
            Nn,
            ae.Location,
            o.Injector,
            o.NgModuleFactoryLoader,
            o.Compiler,
            En,
            Zn,
            [Sn, new o.Optional()],
            [Cn, new o.Optional()]
          ]
        },
        Nn,
        { provide: mt, useFactory: tr, deps: [In] },
        {
          provide: o.NgModuleFactoryLoader,
          useClass: o.SystemJsNgModuleLoader
        },
        zn,
        Hn,
        Un,
        { provide: Zn, useValue: { enableTracing: !1 } }
      ];
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Qn() {
      return new o.NgProbeToken('Router', In);
    }
    var Kn = (function() {
      function e(e, t) {}
      var t;
      return (
        (t = e),
        (e.forRoot = function(e, n) {
          return {
            ngModule: t,
            providers: [
              Wn,
              Xn(e),
              {
                provide: qn,
                useFactory: Jn,
                deps: [[In, new o.Optional(), new o.SkipSelf()]]
              },
              { provide: Zn, useValue: n || {} },
              {
                provide: ae.LocationStrategy,
                useFactory: $n,
                deps: [
                  ae.PlatformLocation,
                  [new o.Inject(ae.APP_BASE_HREF), new o.Optional()],
                  Zn
                ]
              },
              {
                provide: Gn,
                useFactory: Yn,
                deps: [In, ae.ViewportScroller, Zn]
              },
              {
                provide: Bn,
                useExisting:
                  n && n.preloadingStrategy ? n.preloadingStrategy : Hn
              },
              { provide: o.NgProbeToken, multi: !0, useFactory: Qn },
              ur()
            ]
          };
        }),
        (e.forChild = function(e) {
          return { ngModule: t, providers: [Xn(e)] };
        }),
        e
      );
    })();
    function Yn(e, t, n) {
      return n.scrollOffset && t.setOffset(n.scrollOffset), new Gn(e, t, n);
    }
    function $n(e, t, n) {
      return (
        void 0 === n && (n = {}),
        n.useHash
          ? new ae.HashLocationStrategy(e, t)
          : new ae.PathLocationStrategy(e, t)
      );
    }
    function Jn(e) {
      if (e)
        throw new Error(
          'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
        );
      return 'guarded';
    }
    function Xn(e) {
      return [
        { provide: o.ANALYZE_FOR_ENTRY_COMPONENTS, multi: !0, useValue: e },
        { provide: En, multi: !0, useValue: e }
      ];
    }
    function er(e, t, n, r, o, i, u, a, s, c, l) {
      void 0 === s && (s = {});
      var f = new In(null, t, n, r, o, i, u, Le(a));
      if (
        (c && (f.urlHandlingStrategy = c),
        l && (f.routeReuseStrategy = l),
        s.errorHandler && (f.errorHandler = s.errorHandler),
        s.malformedUriErrorHandler &&
          (f.malformedUriErrorHandler = s.malformedUriErrorHandler),
        s.enableTracing)
      ) {
        var d = Object(se['ɵgetDOM'])();
        f.events.subscribe(function(e) {
          d.logGroup('Router Event: ' + e.constructor.name),
            d.log(e.toString()),
            d.log(e),
            d.logGroupEnd();
        });
      }
      return (
        s.onSameUrlNavigation &&
          (f.onSameUrlNavigation = s.onSameUrlNavigation),
        s.paramsInheritanceStrategy &&
          (f.paramsInheritanceStrategy = s.paramsInheritanceStrategy),
        s.urlUpdateStrategy && (f.urlUpdateStrategy = s.urlUpdateStrategy),
        s.relativeLinkResolution &&
          (f.relativeLinkResolution = s.relativeLinkResolution),
        f
      );
    }
    function tr(e) {
      return e.routerState.root;
    }
    var nr = (function() {
      function e(e) {
        (this.injector = e),
          (this.initNavigation = !1),
          (this.resultOfPreactivationDone = new w.a());
      }
      return (
        (e.prototype.appInitializer = function() {
          var e = this;
          return this.injector
            .get(ae.LOCATION_INITIALIZED, Promise.resolve(null))
            .then(function() {
              var t = null,
                n = new Promise(function(e) {
                  return (t = e);
                }),
                r = e.injector.get(In),
                o = e.injector.get(Zn);
              if (e.isLegacyDisabled(o) || e.isLegacyEnabled(o)) t(!0);
              else if ('disabled' === o.initialNavigation)
                r.setUpLocationChangeListener(), t(!0);
              else {
                if ('enabled' !== o.initialNavigation)
                  throw new Error(
                    "Invalid initialNavigation options: '" +
                      o.initialNavigation +
                      "'"
                  );
                (r.hooks.afterPreactivation = function() {
                  return e.initNavigation
                    ? Object(i.a)(null)
                    : ((e.initNavigation = !0),
                      t(!0),
                      e.resultOfPreactivationDone);
                }),
                  r.initialNavigation();
              }
              return n;
            });
        }),
        (e.prototype.bootstrapListener = function(e) {
          var t = this.injector.get(Zn),
            n = this.injector.get(zn),
            r = this.injector.get(Gn),
            i = this.injector.get(In),
            u = this.injector.get(o.ApplicationRef);
          e === u.components[0] &&
            (this.isLegacyEnabled(t)
              ? i.initialNavigation()
              : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            i.resetRootComponentType(u.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }),
        (e.prototype.isLegacyEnabled = function(e) {
          return (
            'legacy_enabled' === e.initialNavigation ||
            !0 === e.initialNavigation ||
            void 0 === e.initialNavigation
          );
        }),
        (e.prototype.isLegacyDisabled = function(e) {
          return (
            'legacy_disabled' === e.initialNavigation ||
            !1 === e.initialNavigation
          );
        }),
        e
      );
    })();
    function rr(e) {
      return e.appInitializer.bind(e);
    }
    function or(e) {
      return e.bootstrapListener.bind(e);
    }
    var ir = new o.InjectionToken('Router Initializer');
    function ur() {
      return [
        nr,
        { provide: o.APP_INITIALIZER, multi: !0, useFactory: rr, deps: [nr] },
        { provide: ir, useFactory: or, deps: [nr] },
        { provide: o.APP_BOOTSTRAP_LISTENER, multi: !0, useExisting: ir }
      ];
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var ar = new o.Version('7.1.1');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return u;
    });
    var r = n(3),
      o = n(4),
      i = n(42);
    function u(e, t) {
      return t
        ? new r.a(function(n) {
            var r = new o.a(),
              i = 0;
            return (
              r.add(
                t.schedule(function() {
                  i !== e.length
                    ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                    : n.complete();
                })
              ),
              r
            );
          })
        : new r.a(Object(i.a)(e));
    }
  },
  function(e, t, n) {
    'use strict';
    function r() {}
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r =
      ('function' == typeof Symbol && Symbol.observable) || '@@observable';
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return e && 'function' == typeof e.schedule;
    }
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(0),
      o = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o.parent = t),
            (o.outerValue = n),
            (o.outerIndex = r),
            (o.index = 0),
            o
          );
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            this.parent.notifyNext(
              this.outerValue,
              e,
              this.outerIndex,
              this.index++,
              this
            );
          }),
          (t.prototype._error = function(e) {
            this.parent.notifyError(e, this), this.unsubscribe();
          }),
          (t.prototype._complete = function() {
            this.parent.notifyComplete(this), this.unsubscribe();
          }),
          t
        );
      })(n(2).a);
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      setTimeout(function() {
        throw e;
      });
    }
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r = (function() {
      return 'function' == typeof Symbol && Symbol.iterator
        ? Symbol.iterator
        : '@@iterator';
    })();
  },
  function(e, t, n) {
    'use strict';
    function r() {
      return (
        Error.call(this),
        (this.message = 'object unsubscribed'),
        (this.name = 'ObjectUnsubscribedError'),
        this
      );
    }
    n.d(t, 'a', function() {
      return o;
    }),
      (r.prototype = Object.create(Error.prototype));
    var o = r;
  },
  function(e, t, n) {
    'use strict';
    var r = n(23),
      o = n(49),
      i = n(3);
    function u(e) {
      var t = e.error;
      e.subscriber.error(t);
    }
    n.d(t, 'a', function() {
      return a;
    });
    var a = (function() {
      function e(e, t, n) {
        (this.kind = e),
          (this.value = t),
          (this.error = n),
          (this.hasValue = 'N' === e);
      }
      return (
        (e.prototype.observe = function(e) {
          switch (this.kind) {
            case 'N':
              return e.next && e.next(this.value);
            case 'E':
              return e.error && e.error(this.error);
            case 'C':
              return e.complete && e.complete();
          }
        }),
        (e.prototype.do = function(e, t, n) {
          switch (this.kind) {
            case 'N':
              return e && e(this.value);
            case 'E':
              return t && t(this.error);
            case 'C':
              return n && n();
          }
        }),
        (e.prototype.accept = function(e, t, n) {
          return e && 'function' == typeof e.next
            ? this.observe(e)
            : this.do(e, t, n);
        }),
        (e.prototype.toObservable = function() {
          switch (this.kind) {
            case 'N':
              return Object(o.a)(this.value);
            case 'E':
              return (function(e, t) {
                return t
                  ? new i.a(function(n) {
                      return t.schedule(u, 0, { error: e, subscriber: n });
                    })
                  : new i.a(function(t) {
                      return t.error(e);
                    });
              })(this.error);
            case 'C':
              return Object(r.b)();
          }
          throw new Error('unexpected notification kind value');
        }),
        (e.createNext = function(t) {
          return void 0 !== t ? new e('N', t) : e.undefinedValueNotification;
        }),
        (e.createError = function(t) {
          return new e('E', void 0, t);
        }),
        (e.createComplete = function() {
          return e.completeNotification;
        }),
        (e.completeNotification = new e('C')),
        (e.undefinedValueNotification = new e('N', void 0)),
        e
      );
    })();
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return 'function' == typeof e;
    }
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r =
      'function' == typeof Symbol
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
  },
  ,
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    }),
      n.d(t, 'b', function() {
        return i;
      });
    var r = n(3),
      o = new r.a(function(e) {
        return e.complete();
      });
    function i(e) {
      return e
        ? (function(e) {
            return new r.a(function(t) {
              return e.schedule(function() {
                return t.complete();
              });
            });
          })(e)
        : o;
    }
  },
  function(e, t, n) {
    'use strict';
    var r = n(3),
      o = n(43),
      i = n(41),
      u = n(13);
    var a = n(17);
    var s = n(11),
      c = n(4),
      l = n(44);
    var f = n(45);
    var d = n(40);
    var p = n(39);
    function h(e, t) {
      if (!t) return e instanceof r.a ? e : new r.a(Object(p.a)(e));
      if (null != e) {
        if (
          (function(e) {
            return e && 'function' == typeof e[u.a];
          })(e)
        )
          return (function(e, t) {
            return t
              ? new r.a(function(n) {
                  var r = new c.a();
                  return (
                    r.add(
                      t.schedule(function() {
                        var o = e[u.a]();
                        r.add(
                          o.subscribe({
                            next: function(e) {
                              r.add(
                                t.schedule(function() {
                                  return n.next(e);
                                })
                              );
                            },
                            error: function(e) {
                              r.add(
                                t.schedule(function() {
                                  return n.error(e);
                                })
                              );
                            },
                            complete: function() {
                              r.add(
                                t.schedule(function() {
                                  return n.complete();
                                })
                              );
                            }
                          })
                        );
                      })
                    ),
                    r
                  );
                })
              : new r.a(Object(d.a)(e));
          })(e, t);
        if (Object(o.a)(e))
          return (function(e, t) {
            return t
              ? new r.a(function(n) {
                  var r = new c.a();
                  return (
                    r.add(
                      t.schedule(function() {
                        return e.then(
                          function(e) {
                            r.add(
                              t.schedule(function() {
                                n.next(e),
                                  r.add(
                                    t.schedule(function() {
                                      return n.complete();
                                    })
                                  );
                              })
                            );
                          },
                          function(e) {
                            r.add(
                              t.schedule(function() {
                                return n.error(e);
                              })
                            );
                          }
                        );
                      })
                    ),
                    r
                  );
                })
              : new r.a(Object(l.a)(e));
          })(e, t);
        if (Object(i.a)(e)) return Object(s.a)(e, t);
        if (
          (function(e) {
            return e && 'function' == typeof e[a.a];
          })(e) ||
          'string' == typeof e
        )
          return (function(e, t) {
            if (!e) throw new Error('Iterable cannot be null');
            return t
              ? new r.a(function(n) {
                  var r,
                    o = new c.a();
                  return (
                    o.add(function() {
                      r && 'function' == typeof r.return && r.return();
                    }),
                    o.add(
                      t.schedule(function() {
                        (r = e[a.a]()),
                          o.add(
                            t.schedule(function() {
                              if (!n.closed) {
                                var e, t;
                                try {
                                  var o = r.next();
                                  (e = o.value), (t = o.done);
                                } catch (e) {
                                  return void n.error(e);
                                }
                                t ? n.complete() : (n.next(e), this.schedule());
                              }
                            })
                          );
                      })
                    ),
                    o
                  );
                })
              : new r.a(Object(f.a)(e));
          })(e, t);
      }
      throw new TypeError(
        ((null !== e && typeof e) || e) + ' is not observable'
      );
    }
    n.d(t, 'a', function() {
      return h;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return i;
    });
    var r = n(0),
      o = n(2);
    function i(e, t) {
      return function(n) {
        if ('function' != typeof e)
          throw new TypeError(
            'argument is not a function. Are you looking for `mapTo()`?'
          );
        return n.lift(new u(e, t));
      };
    }
    var u = (function() {
        function e(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new a(e, this.project, this.thisArg));
          }),
          e
        );
      })(),
      a = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            var t;
            try {
              t = this.project.call(this.thisArg, e, this.count++);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(o.a);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n(1),
      i = n(74),
      u = n(3),
      a = n(27),
      s = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.scheduler = t), (r.work = n), r;
        }
        return (
          r.c(t, e),
          (t.prototype.schedule = function(t, n) {
            return (
              void 0 === n && (n = 0),
              n > 0
                ? e.prototype.schedule.call(this, t, n)
                : ((this.delay = n),
                  (this.state = t),
                  this.scheduler.flush(this),
                  this)
            );
          }),
          (t.prototype.execute = function(t, n) {
            return n > 0 || this.closed
              ? e.prototype.execute.call(this, t, n)
              : this._execute(t, n);
          }),
          (t.prototype.requestAsyncId = function(t, n, r) {
            return (
              void 0 === r && (r = 0),
              (null !== r && r > 0) || (null === r && this.delay > 0)
                ? e.prototype.requestAsyncId.call(this, t, n, r)
                : t.flush(this)
            );
          }),
          t
        );
      })(
        (function(e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
          }
          return (
            r.c(t, e),
            (t.prototype.schedule = function(e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function(e, t, n) {
              return (
                void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n)
              );
            }),
            (t.prototype.recycleAsyncId = function(e, t, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return t;
              clearInterval(t);
            }),
            (t.prototype.execute = function(e, t) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              var n = this._execute(e, t);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function(e, t) {
              var n = !1,
                r = void 0;
              try {
                this.work(e);
              } catch (e) {
                (n = !0), (r = (!!e && e) || new Error(e));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (t.prototype._unsubscribe = function() {
              var e = this.id,
                t = this.scheduler,
                n = t.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != e && (this.id = this.recycleAsyncId(t, e, null)),
                (this.delay = null);
            }),
            t
          );
        })(
          (function(e) {
            function t(t, n) {
              return e.call(this) || this;
            }
            return (
              r.c(t, e),
              (t.prototype.schedule = function(e, t) {
                return void 0 === t && (t = 0), this;
              }),
              t
            );
          })(n(4).a)
        )
      ),
      c = (function() {
        function e(t, n) {
          void 0 === n && (n = e.now),
            (this.SchedulerAction = t),
            (this.now = n);
        }
        return (
          (e.prototype.schedule = function(e, t, n) {
            return (
              void 0 === t && (t = 0),
              new this.SchedulerAction(this, e).schedule(n, t)
            );
          }),
          (e.now = function() {
            return Date.now();
          }),
          e
        );
      })(),
      l = new ((function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return r.c(t, e), t;
      })(
        (function(e) {
          function t(n, r) {
            void 0 === r && (r = c.now);
            var o =
              e.call(this, n, function() {
                return t.delegate && t.delegate !== o ? t.delegate.now() : r();
              }) || this;
            return (o.actions = []), (o.active = !1), (o.scheduled = void 0), o;
          }
          return (
            r.c(t, e),
            (t.prototype.schedule = function(n, r, o) {
              return (
                void 0 === r && (r = 0),
                t.delegate && t.delegate !== this
                  ? t.delegate.schedule(n, r, o)
                  : e.prototype.schedule.call(this, n, r, o)
              );
            }),
            (t.prototype.flush = function(e) {
              var t = this.actions;
              if (this.active) t.push(e);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this.active = !1), n)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw n;
                }
              }
            }),
            t
          );
        })(c)
      ))(s),
      f = n(2),
      d = n(19);
    var p = (function() {
        function e(e, t) {
          void 0 === t && (t = 0), (this.scheduler = e), (this.delay = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new h(e, this.scheduler, this.delay));
          }),
          e
        );
      })(),
      h = (function(e) {
        function t(t, n, r) {
          void 0 === r && (r = 0);
          var o = e.call(this, t) || this;
          return (o.scheduler = n), (o.delay = r), o;
        }
        return (
          r.c(t, e),
          (t.dispatch = function(e) {
            var t = e.notification,
              n = e.destination;
            t.observe(n), this.unsubscribe();
          }),
          (t.prototype.scheduleMessage = function(e) {
            this.destination.add(
              this.scheduler.schedule(
                t.dispatch,
                this.delay,
                new v(e, this.destination)
              )
            );
          }),
          (t.prototype._next = function(e) {
            this.scheduleMessage(d.a.createNext(e));
          }),
          (t.prototype._error = function(e) {
            this.scheduleMessage(d.a.createError(e)), this.unsubscribe();
          }),
          (t.prototype._complete = function() {
            this.scheduleMessage(d.a.createComplete()), this.unsubscribe();
          }),
          t
        );
      })(f.a),
      v = (function() {
        return function(e, t) {
          (this.notification = e), (this.destination = t);
        };
      })(),
      g = n(79),
      y = n(60),
      m = n(25);
    function b() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e.length;
      if (0 === n) throw new Error('list of properties cannot be empty.');
      return function(t) {
        return Object(m.a)(
          (function(e, t) {
            return function(n) {
              for (var r = n, o = 0; o < t; o++) {
                var i = r[e[o]];
                if (void 0 === i) return;
                r = i;
              }
              return r;
            };
          })(e, n)
        )(t);
      };
    }
    var _ = n(29),
      w = n(6);
    var C = (function() {
        function e(e, t) {
          (this.compare = e), (this.keySelector = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new D(e, this.compare, this.keySelector));
          }),
          e
        );
      })(),
      D = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (
            (o.keySelector = r),
            (o.hasKey = !1),
            'function' == typeof n && (o.compare = n),
            o
          );
        }
        return (
          r.c(t, e),
          (t.prototype.compare = function(e, t) {
            return e === t;
          }),
          (t.prototype._next = function(e) {
            var t = e;
            if (
              this.keySelector &&
              (t = Object(_.a)(this.keySelector)(e)) === w.a
            )
              return this.destination.error(w.a.e);
            var n = !1;
            if (this.hasKey) {
              if ((n = Object(_.a)(this.compare)(this.key, t)) === w.a)
                return this.destination.error(w.a.e);
            } else this.hasKey = !0;
            !1 === Boolean(n) && ((this.key = t), this.destination.next(e));
          }),
          t
        );
      })(f.a);
    n.d(t, 'ɵngrx_modules_store_store_c', function() {
      return S;
    }),
      n.d(t, 'ɵngrx_modules_store_store_d', function() {
        return Y;
      }),
      n.d(t, 'ɵngrx_modules_store_store_e', function() {
        return X;
      }),
      n.d(t, 'ɵngrx_modules_store_store_f', function() {
        return he;
      }),
      n.d(t, 'ɵngrx_modules_store_store_g', function() {
        return ie;
      }),
      n.d(t, 'ɵngrx_modules_store_store_b', function() {
        return le;
      }),
      n.d(t, 'Store', function() {
        return ce;
      }),
      n.d(t, 'select', function() {
        return fe;
      }),
      n.d(t, 'combineReducers', function() {
        return U;
      }),
      n.d(t, 'compose', function() {
        return H;
      }),
      n.d(t, 'createReducerFactory', function() {
        return z;
      }),
      n.d(t, 'ActionsSubject', function() {
        return O;
      }),
      n.d(t, 'INIT', function() {
        return E;
      }),
      n.d(t, 'ReducerManager', function() {
        return K;
      }),
      n.d(t, 'ReducerObservable', function() {
        return q;
      }),
      n.d(t, 'ReducerManagerDispatcher', function() {
        return W;
      }),
      n.d(t, 'UPDATE', function() {
        return Q;
      }),
      n.d(t, 'ScannedActionsSubject', function() {
        return J;
      }),
      n.d(t, 'createSelector', function() {
        return ye;
      }),
      n.d(t, 'createSelectorFactory', function() {
        return be;
      }),
      n.d(t, 'createFeatureSelector', function() {
        return _e;
      }),
      n.d(t, 'defaultMemoize', function() {
        return ge;
      }),
      n.d(t, 'defaultStateFn', function() {
        return me;
      }),
      n.d(t, 'resultMemoize', function() {
        return ve;
      }),
      n.d(t, 'State', function() {
        return re;
      }),
      n.d(t, 'StateObservable', function() {
        return ne;
      }),
      n.d(t, 'reduceState', function() {
        return oe;
      }),
      n.d(t, 'INITIAL_STATE', function() {
        return A;
      }),
      n.d(t, '_REDUCER_FACTORY', function() {
        return R;
      }),
      n.d(t, 'REDUCER_FACTORY', function() {
        return j;
      }),
      n.d(t, '_INITIAL_REDUCERS', function() {
        return T;
      }),
      n.d(t, 'INITIAL_REDUCERS', function() {
        return I;
      }),
      n.d(t, 'STORE_FEATURES', function() {
        return M;
      }),
      n.d(t, '_INITIAL_STATE', function() {
        return x;
      }),
      n.d(t, 'META_REDUCERS', function() {
        return k;
      }),
      n.d(t, '_STORE_REDUCERS', function() {
        return P;
      }),
      n.d(t, '_FEATURE_REDUCERS', function() {
        return F;
      }),
      n.d(t, 'FEATURE_REDUCERS', function() {
        return V;
      }),
      n.d(t, '_FEATURE_REDUCERS_TOKEN', function() {
        return N;
      }),
      n.d(t, 'StoreModule', function() {
        return Ee;
      }),
      n.d(t, 'StoreRootModule', function() {
        return Ce;
      }),
      n.d(t, 'StoreFeatureModule', function() {
        return De;
      }),
      n.d(t, '_initialStateFactory', function() {
        return xe;
      }),
      n.d(t, '_createStoreReducers', function() {
        return Oe;
      }),
      n.d(t, '_createFeatureReducers', function() {
        return Se;
      });
    /**
     * @license NgRx 6.1.0
     * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
     * License: MIT
     */
    var E = '@ngrx/store/init',
      O = (function(e) {
        function t() {
          return e.call(this, { type: E }) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.next = function(t) {
            if (void 0 === t) throw new TypeError('Actions must be objects');
            if (void 0 === t.type)
              throw new TypeError('Actions must have a type property');
            e.prototype.next.call(this, t);
          }),
          (t.prototype.complete = function() {}),
          (t.prototype.ngOnDestroy = function() {
            e.prototype.complete.call(this);
          }),
          t
        );
      })(i.a),
      S = [O],
      x = new o.InjectionToken('@ngrx/store Internal Initial State'),
      A = new o.InjectionToken('@ngrx/store Initial State'),
      j = new o.InjectionToken('@ngrx/store Reducer Factory'),
      R = new o.InjectionToken('@ngrx/store Reducer Factory Provider'),
      I = new o.InjectionToken('@ngrx/store Initial Reducers'),
      T = new o.InjectionToken('@ngrx/store Internal Initial Reducers'),
      k = new o.InjectionToken('@ngrx/store Meta Reducers'),
      M = new o.InjectionToken('@ngrx/store Store Features'),
      P = new o.InjectionToken('@ngrx/store Internal Store Reducers'),
      F = new o.InjectionToken('@ngrx/store Internal Feature Reducers'),
      N = new o.InjectionToken('@ngrx/store Internal Feature Reducers Token'),
      V = new o.InjectionToken('@ngrx/store Feature Reducers'),
      L = function(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      B = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(L(arguments[t]));
        return e;
      };
    function U(e, t) {
      void 0 === t && (t = {});
      for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
        var i = n[o];
        'function' == typeof e[i] && (r[i] = e[i]);
      }
      var u = Object.keys(r);
      return function(e, n) {
        e = void 0 === e ? t : e;
        for (var o = !1, i = {}, a = 0; a < u.length; a++) {
          var s = u[a],
            c = r[s],
            l = e[s],
            f = c(l, n);
          (i[s] = f), (o = o || f !== l);
        }
        return o ? i : e;
      };
    }
    function H() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return function(t) {
        if (0 === e.length) return t;
        var n = e[e.length - 1];
        return e.slice(0, -1).reduceRight(function(e, t) {
          return t(e);
        }, n(t));
      };
    }
    function z(e, t) {
      return Array.isArray(t) && t.length > 0 ? H.apply(null, B(t, [e])) : e;
    }
    var G = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          };
        return function(t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      Z =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        },
      q = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return G(t, e), t;
      })(u.a),
      W = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return G(t, e), t;
      })(O),
      Q = '@ngrx/store/update-reducers',
      K = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, o(r, n)) || this;
          return (
            (i.dispatcher = t),
            (i.initialState = n),
            (i.reducers = r),
            (i.reducerFactory = o),
            i
          );
        }
        return (
          G(t, e),
          (t.prototype.addFeature = function(e) {
            this.addFeatures([e]);
          }),
          (t.prototype.addFeatures = function(e) {
            var t = e.reduce(function(e, t) {
              var n = t.reducers,
                r = t.reducerFactory,
                o = t.metaReducers,
                i = t.initialState,
                u = t.key,
                a =
                  'function' == typeof n
                    ? (function(e) {
                        var t =
                          Array.isArray(e) && e.length > 0
                            ? H.apply(void 0, B(e))
                            : function(e) {
                                return e;
                              };
                        return function(e, n) {
                          return (
                            (e = t(e)),
                            function(t, r) {
                              return e((t = void 0 === t ? n : t), r);
                            }
                          );
                        };
                      })(o)(n, i)
                    : z(r, o)(n, i);
              return (e[u] = a), e;
            }, {});
            this.addReducers(t);
          }),
          (t.prototype.removeFeature = function(e) {
            this.removeFeatures([e]);
          }),
          (t.prototype.removeFeatures = function(e) {
            this.removeReducers(
              e.map(function(e) {
                return e.key;
              })
            );
          }),
          (t.prototype.addReducer = function(e, t) {
            var n;
            this.addReducers((((n = {})[e] = t), n));
          }),
          (t.prototype.addReducers = function(e) {
            (this.reducers = Z({}, this.reducers, e)),
              this.updateReducers(Object.keys(e));
          }),
          (t.prototype.removeReducer = function(e) {
            this.removeReducers([e]);
          }),
          (t.prototype.removeReducers = function(e) {
            var t = this;
            e.forEach(function(e) {
              t.reducers = (function(e, t) {
                return Object.keys(e)
                  .filter(function(e) {
                    return e !== t;
                  })
                  .reduce(function(t, n) {
                    return Object.assign(t, (((r = {})[n] = e[n]), r));
                    var r;
                  }, {});
              })(t.reducers, e);
            }),
              this.updateReducers(e);
          }),
          (t.prototype.updateReducers = function(e) {
            var t = this;
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              e.forEach(function(e) {
                t.dispatcher.next({ type: Q, feature: e });
              });
          }),
          (t.prototype.ngOnDestroy = function() {
            this.complete();
          }),
          t
        );
      })(i.a),
      Y = [K, { provide: q, useExisting: K }, { provide: W, useExisting: O }],
      $ = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          };
        return function(t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      J = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          $(t, e),
          (t.prototype.ngOnDestroy = function() {
            this.complete();
          }),
          t
        );
      })(a.a),
      X = [J],
      ee = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          };
        return function(t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      te = function(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      ne = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return ee(t, e), t;
      })(u.a),
      re = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, o) || this,
            u = { state: o },
            a = t
              .pipe(
                (function(e, t) {
                  return (
                    void 0 === t && (t = 0),
                    function(n) {
                      return n.lift(new p(e, t));
                    }
                  );
                })(l)
              )
              .pipe(Object(g.a)(n))
              .pipe(Object(y.a)(oe, u));
          return (
            (i.stateSubscription = a.subscribe(function(e) {
              var t = e.state,
                n = e.action;
              i.next(t), r.next(n);
            })),
            i
          );
        }
        return (
          ee(t, e),
          (t.prototype.ngOnDestroy = function() {
            this.stateSubscription.unsubscribe(), this.complete();
          }),
          (t.INIT = E),
          t
        );
      })(i.a);
    function oe(e, t) {
      void 0 === e && (e = { state: void 0 });
      var n = te(t, 2),
        r = n[0];
      return { state: (0, n[1])(e.state, r), action: r };
    }
    var ie = [re, { provide: ne, useExisting: re }],
      ue = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          };
        return function(t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      ae = function(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      se = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(ae(arguments[t]));
        return e;
      },
      ce = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o.actionsObserver = n), (o.reducerManager = r), (o.source = t), o
          );
        }
        return (
          ue(t, e),
          (t.prototype.select = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return fe.call.apply(fe, se([null, e], t))(this);
          }),
          (t.prototype.lift = function(e) {
            var n = new t(this, this.actionsObserver, this.reducerManager);
            return (n.operator = e), n;
          }),
          (t.prototype.dispatch = function(e) {
            this.actionsObserver.next(e);
          }),
          (t.prototype.next = function(e) {
            this.actionsObserver.next(e);
          }),
          (t.prototype.error = function(e) {
            this.actionsObserver.error(e);
          }),
          (t.prototype.complete = function() {
            this.actionsObserver.complete();
          }),
          (t.prototype.addReducer = function(e, t) {
            this.reducerManager.addReducer(e, t);
          }),
          (t.prototype.removeReducer = function(e) {
            this.reducerManager.removeReducer(e);
          }),
          t
        );
      })(u.a),
      le = [ce];
    function fe(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return function(r) {
        var o;
        if ('string' == typeof e) {
          var i = se([t], n).filter(Boolean);
          o = r.pipe(b.apply(void 0, se([e], i)));
        } else {
          if ('function' != typeof e)
            throw new TypeError(
              "Unexpected type '" +
                typeof e +
                "' in select operator, expected 'string' or 'function'"
            );
          o = r.pipe(
            Object(m.a)(function(n) {
              return e(n, t);
            })
          );
        }
        return o.pipe(
          (function(e, t) {
            return function(n) {
              return n.lift(new C(e, t));
            };
          })()
        );
      };
    }
    var de = function(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      pe = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(de(arguments[t]));
        return e;
      };
    function he(e, t) {
      return e === t;
    }
    function ve(e, t) {
      return ge(e, he, t);
    }
    function ge(e, t, n) {
      void 0 === t && (t = he), void 0 === n && (n = he);
      var r = null,
        o = null;
      return {
        memoized: function() {
          if (!r) return (o = e.apply(null, arguments)), (r = arguments), o;
          if (
            !(function(e, t, n) {
              for (var r = 0; r < e.length; r++) if (!n(e[r], t[r])) return !0;
              return !1;
            })(arguments, r, t)
          )
            return o;
          var i = e.apply(null, arguments);
          return n(o, i) ? o : ((o = i), (r = arguments), i);
        },
        reset: function() {
          (r = null), (o = null);
        }
      };
    }
    function ye() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return be(ge).apply(void 0, pe(e));
    }
    function me(e, t, n, r) {
      if (void 0 === n) {
        var o = t.map(function(t) {
          return t(e);
        });
        return r.memoized.apply(null, o);
      }
      var i = t.map(function(t) {
        return t(e, n);
      });
      return r.memoized.apply(null, pe(i, [n]));
    }
    function be(e, t) {
      return (
        void 0 === t && (t = { stateFn: me }),
        function() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var o = n;
          if (Array.isArray(o[0])) {
            var i = de(o),
              u = i[0],
              a = i.slice(1);
            o = pe(u, a);
          }
          var s = o.slice(0, o.length - 1),
            c = o[o.length - 1],
            l = s.filter(function(e) {
              return e.release && 'function' == typeof e.release;
            }),
            f = e(function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return c.apply(null, e);
            }),
            d = ge(function(e, n) {
              return 0 === s.length
                ? c.apply(null, [e, n])
                : t.stateFn.apply(null, [e, s, n, f]);
            });
          return Object.assign(d.memoized, {
            release: function() {
              d.reset(),
                f.reset(),
                l.forEach(function(e) {
                  return e.release();
                });
            },
            projector: f.memoized
          });
        }
      );
    }
    function _e(e) {
      return ye(
        function(t) {
          return t[e];
        },
        function(e) {
          return e;
        }
      );
    }
    var we =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        },
      Ce = (function() {
        return function(e, t, n, r) {};
      })(),
      De = (function() {
        function e(e, t, n, r) {
          (this.features = e),
            (this.featureReducers = t),
            (this.reducerManager = n);
          var o = e.map(function(e, n) {
            var r = t.shift()[n];
            return we({}, e, { reducers: r, initialState: xe(e.initialState) });
          });
          n.addFeatures(o);
        }
        return (
          (e.prototype.ngOnDestroy = function() {
            this.reducerManager.removeFeatures(this.features);
          }),
          e
        );
      })(),
      Ee = (function() {
        function e() {}
        return (
          (e.forRoot = function(e, t) {
            return (
              void 0 === t && (t = {}),
              {
                ngModule: Ce,
                providers: [
                  { provide: x, useValue: t.initialState },
                  { provide: A, useFactory: xe, deps: [x] },
                  { provide: T, useValue: e },
                  {
                    provide: P,
                    useExisting: e instanceof o.InjectionToken ? e : T
                  },
                  {
                    provide: I,
                    deps: [o.Injector, T, [new o.Inject(P)]],
                    useFactory: Oe
                  },
                  {
                    provide: k,
                    useValue: t.metaReducers ? t.metaReducers : []
                  },
                  {
                    provide: R,
                    useValue: t.reducerFactory ? t.reducerFactory : U
                  },
                  { provide: j, deps: [R, k], useFactory: z },
                  S,
                  Y,
                  X,
                  ie,
                  le
                ]
              }
            );
          }),
          (e.forFeature = function(e, t, n) {
            return (
              void 0 === n && (n = {}),
              {
                ngModule: De,
                providers: [
                  {
                    provide: M,
                    multi: !0,
                    useValue: {
                      key: e,
                      reducerFactory: n.reducerFactory ? n.reducerFactory : U,
                      metaReducers: n.metaReducers ? n.metaReducers : [],
                      initialState: n.initialState
                    }
                  },
                  { provide: F, multi: !0, useValue: t },
                  {
                    provide: N,
                    multi: !0,
                    useExisting: t instanceof o.InjectionToken ? t : F
                  },
                  {
                    provide: V,
                    multi: !0,
                    deps: [o.Injector, F, [new o.Inject(N)]],
                    useFactory: Se
                  }
                ]
              }
            );
          }),
          e
        );
      })();
    function Oe(e, t, n) {
      return t instanceof o.InjectionToken ? e.get(t) : t;
    }
    function Se(e, t, n) {
      return t.map(function(t, n) {
        return t instanceof o.InjectionToken ? e.get(t) : t;
      });
    }
    function xe(e) {
      return 'function' == typeof e ? e() : e;
    }
  },
  function(e, t, n) {
    'use strict';
    var r = n(0),
      o = n(3),
      i = n(2),
      u = n(4),
      a = n(18),
      s = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.subject = t), (r.subscriber = n), (r.closed = !1), r;
        }
        return (
          r.c(t, e),
          (t.prototype.unsubscribe = function() {
            if (!this.closed) {
              this.closed = !0;
              var e = this.subject,
                t = e.observers;
              if (
                ((this.subject = null),
                t && 0 !== t.length && !e.isStopped && !e.closed)
              ) {
                var n = t.indexOf(this.subscriber);
                -1 !== n && t.splice(n, 1);
              }
            }
          }),
          t
        );
      })(u.a),
      c = n(21);
    n.d(t, 'b', function() {
      return l;
    }),
      n.d(t, 'a', function() {
        return f;
      });
    var l = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.destination = t), n;
        }
        return r.c(t, e), t;
      })(i.a),
      f = (function(e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.observers = []),
            (t.closed = !1),
            (t.isStopped = !1),
            (t.hasError = !1),
            (t.thrownError = null),
            t
          );
        }
        return (
          r.c(t, e),
          (t.prototype[c.a] = function() {
            return new l(this);
          }),
          (t.prototype.lift = function(e) {
            var t = new d(this, this);
            return (t.operator = e), t;
          }),
          (t.prototype.next = function(e) {
            if (this.closed) throw new a.a();
            if (!this.isStopped)
              for (
                var t = this.observers, n = t.length, r = t.slice(), o = 0;
                o < n;
                o++
              )
                r[o].next(e);
          }),
          (t.prototype.error = function(e) {
            if (this.closed) throw new a.a();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            for (
              var t = this.observers, n = t.length, r = t.slice(), o = 0;
              o < n;
              o++
            )
              r[o].error(e);
            this.observers.length = 0;
          }),
          (t.prototype.complete = function() {
            if (this.closed) throw new a.a();
            this.isStopped = !0;
            for (
              var e = this.observers, t = e.length, n = e.slice(), r = 0;
              r < t;
              r++
            )
              n[r].complete();
            this.observers.length = 0;
          }),
          (t.prototype.unsubscribe = function() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }),
          (t.prototype._trySubscribe = function(t) {
            if (this.closed) throw new a.a();
            return e.prototype._trySubscribe.call(this, t);
          }),
          (t.prototype._subscribe = function(e) {
            if (this.closed) throw new a.a();
            return this.hasError
              ? (e.error(this.thrownError), u.a.EMPTY)
              : this.isStopped
              ? (e.complete(), u.a.EMPTY)
              : (this.observers.push(e), new s(this, e));
          }),
          (t.prototype.asObservable = function() {
            var e = new o.a();
            return (e.source = this), e;
          }),
          (t.create = function(e, t) {
            return new d(e, t);
          }),
          t
        );
      })(o.a),
      d = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.destination = t), (r.source = n), r;
        }
        return (
          r.c(t, e),
          (t.prototype.next = function(e) {
            var t = this.destination;
            t && t.next && t.next(e);
          }),
          (t.prototype.error = function(e) {
            var t = this.destination;
            t && t.error && this.destination.error(e);
          }),
          (t.prototype.complete = function() {
            var e = this.destination;
            e && e.complete && this.destination.complete();
          }),
          (t.prototype._subscribe = function(e) {
            return this.source ? this.source.subscribe(e) : u.a.EMPTY;
          }),
          t
        );
      })(f);
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return e;
    }
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return u;
    });
    var r,
      o = n(6);
    function i() {
      try {
        return r.apply(this, arguments);
      } catch (e) {
        return (o.a.e = e), o.a;
      }
    }
    function u(e) {
      return (r = e), i;
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return i;
    });
    var r = n(7),
      o = n(16),
      i = {
        closed: !0,
        next: function(e) {},
        error: function(e) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw e;
          Object(o.a)(e);
        },
        complete: function() {}
      };
  },
  ,
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    }),
      n.d(t, 'b', function() {
        return i;
      });
    var r = n(12);
    function o() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return i(e);
    }
    function i(e) {
      return e
        ? 1 === e.length
          ? e[0]
          : function(t) {
              return e.reduce(function(e, t) {
                return t(e);
              }, t);
            }
        : r.a;
    }
  },
  function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_c',
        function() {
          return je;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_b',
        function() {
          return Ae;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_a',
        function() {
          return xe;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_k',
        function() {
          return f;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_d',
        function() {
          return Ie;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_i',
        function() {
          return D;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_h',
        function() {
          return C;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_e',
        function() {
          return ke;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_f',
        function() {
          return Ge;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_j',
        function() {
          return R;
        }
      ),
      n.d(
        t,
        'ɵangular_packages_platform_browser_platform_browser_g',
        function() {
          return M;
        }
      ),
      n.d(t, 'BrowserModule', function() {
        return Re;
      }),
      n.d(t, 'platformBrowser', function() {
        return Oe;
      }),
      n.d(t, 'Meta', function() {
        return Te;
      }),
      n.d(t, 'Title', function() {
        return Me;
      }),
      n.d(t, 'disableDebugTools', function() {
        return Be;
      }),
      n.d(t, 'enableDebugTools', function() {
        return Le;
      }),
      n.d(t, 'BrowserTransferStateModule', function() {
        return Ze;
      }),
      n.d(t, 'TransferState', function() {
        return ze;
      }),
      n.d(t, 'makeStateKey', function() {
        return He;
      }),
      n.d(t, 'By', function() {
        return qe;
      }),
      n.d(t, 'DOCUMENT', function() {
        return m;
      }),
      n.d(t, 'EVENT_MANAGER_PLUGINS', function() {
        return T;
      }),
      n.d(t, 'EventManager', function() {
        return k;
      }),
      n.d(t, 'HAMMER_GESTURE_CONFIG', function() {
        return se;
      }),
      n.d(t, 'HAMMER_LOADER', function() {
        return ce;
      }),
      n.d(t, 'HammerGestureConfig', function() {
        return le;
      }),
      n.d(t, 'DomSanitizer', function() {
        return ve;
      }),
      n.d(t, 'VERSION', function() {
        return We;
      }),
      n.d(t, 'ɵBROWSER_SANITIZATION_PROVIDERS', function() {
        return Ee;
      }),
      n.d(t, 'ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS', function() {
        return De;
      }),
      n.d(t, 'ɵinitDomAdapter', function() {
        return Se;
      }),
      n.d(t, 'ɵBrowserDomAdapter', function() {
        return g;
      }),
      n.d(t, 'ɵBrowserPlatformLocation', function() {
        return _;
      }),
      n.d(t, 'ɵTRANSITION_ID', function() {
        return w;
      }),
      n.d(t, 'ɵBrowserGetTestability', function() {
        return E;
      }),
      n.d(t, 'ɵescapeHtml', function() {
        return Ue;
      }),
      n.d(t, 'ɵELEMENT_PROBE_PROVIDERS', function() {
        return I;
      }),
      n.d(t, 'ɵDomAdapter', function() {
        return l;
      }),
      n.d(t, 'ɵgetDOM', function() {
        return a;
      }),
      n.d(t, 'ɵsetRootDomAdapter', function() {
        return s;
      }),
      n.d(t, 'ɵDomRendererFactory2', function() {
        return Z;
      }),
      n.d(t, 'ɵNAMESPACE_URIS', function() {
        return N;
      }),
      n.d(t, 'ɵflattenStyles', function() {
        return z;
      }),
      n.d(t, 'ɵshimContentAttribute', function() {
        return U;
      }),
      n.d(t, 'ɵshimHostAttribute', function() {
        return H;
      }),
      n.d(t, 'ɵDomEventsPlugin', function() {
        return ue;
      }),
      n.d(t, 'ɵHammerGesturesPlugin', function() {
        return fe;
      }),
      n.d(t, 'ɵKeyEventsPlugin', function() {
        return he;
      }),
      n.d(t, 'ɵDomSharedStylesHost', function() {
        return F;
      }),
      n.d(t, 'ɵSharedStylesHost', function() {
        return P;
      }),
      n.d(t, 'ɵDomSanitizerImpl', function() {
        return ge;
      });
    var r = n(0),
      o = n(5),
      i = n(1),
      u = null;
    function a() {
      return u;
    }
    function s(e) {
      u || (u = e);
    }
    var c,
      l = (function() {
        function e() {
          this.resourceLoaderType = null;
        }
        return (
          Object.defineProperty(e.prototype, 'attrToPropMap', {
            get: function() {
              return this._attrToPropMap;
            },
            set: function(e) {
              this._attrToPropMap = e;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      f = (function(e) {
        function t() {
          var t = e.call(this) || this;
          (t._animationPrefix = null), (t._transitionEnd = null);
          try {
            var n = t.createElement('div', document);
            if (null != t.getStyle(n, 'animationName')) t._animationPrefix = '';
            else
              for (
                var r = ['Webkit', 'Moz', 'O', 'ms'], o = 0;
                o < r.length;
                o++
              )
                if (null != t.getStyle(n, r[o] + 'AnimationName')) {
                  t._animationPrefix = '-' + r[o].toLowerCase() + '-';
                  break;
                }
            var i = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(i).forEach(function(e) {
              null != t.getStyle(n, e) && (t._transitionEnd = i[e]);
            });
          } catch (e) {
            (t._animationPrefix = null), (t._transitionEnd = null);
          }
          return t;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getDistributedNodes = function(e) {
            return e.getDistributedNodes();
          }),
          (t.prototype.resolveAndSetHref = function(e, t, n) {
            e.href = null == n ? t : t + '/../' + n;
          }),
          (t.prototype.supportsDOMEvents = function() {
            return !0;
          }),
          (t.prototype.supportsNativeShadowDOM = function() {
            return 'function' == typeof document.body.createShadowRoot;
          }),
          (t.prototype.getAnimationPrefix = function() {
            return this._animationPrefix ? this._animationPrefix : '';
          }),
          (t.prototype.getTransitionEnd = function() {
            return this._transitionEnd ? this._transitionEnd : '';
          }),
          (t.prototype.supportsAnimation = function() {
            return null != this._animationPrefix && null != this._transitionEnd;
          }),
          t
        );
      })(l),
      d = {
        class: 'className',
        innerHtml: 'innerHTML',
        readonly: 'readOnly',
        tabindex: 'tabIndex'
      },
      p = {
        '\b': 'Backspace',
        '\t': 'Tab',
        '': 'Delete',
        '': 'Escape',
        Del: 'Delete',
        Esc: 'Escape',
        Left: 'ArrowLeft',
        Right: 'ArrowRight',
        Up: 'ArrowUp',
        Down: 'ArrowDown',
        Menu: 'ContextMenu',
        Scroll: 'ScrollLock',
        Win: 'OS'
      },
      h = {
        A: '1',
        B: '2',
        C: '3',
        D: '4',
        E: '5',
        F: '6',
        G: '7',
        H: '8',
        I: '9',
        J: '*',
        K: '+',
        M: '-',
        N: '.',
        O: '/',
        '`': '0',
        '': 'NumLock'
      };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ i['ɵglobal'].Node &&
      (c =
        i['ɵglobal'].Node.prototype.contains ||
        function(e) {
          return !!(16 & this.compareDocumentPosition(e));
        });
    var v,
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.parse = function(e) {
            throw new Error('parse not implemented');
          }),
          (t.makeCurrent = function() {
            s(new t());
          }),
          (t.prototype.hasProperty = function(e, t) {
            return t in e;
          }),
          (t.prototype.setProperty = function(e, t, n) {
            e[t] = n;
          }),
          (t.prototype.getProperty = function(e, t) {
            return e[t];
          }),
          (t.prototype.invoke = function(e, t, n) {
            var o;
            (o = e)[t].apply(o, Object(r.g)(n));
          }),
          (t.prototype.logError = function(e) {
            window.console &&
              (console.error ? console.error(e) : console.log(e));
          }),
          (t.prototype.log = function(e) {
            window.console && window.console.log && window.console.log(e);
          }),
          (t.prototype.logGroup = function(e) {
            window.console && window.console.group && window.console.group(e);
          }),
          (t.prototype.logGroupEnd = function() {
            window.console &&
              window.console.groupEnd &&
              window.console.groupEnd();
          }),
          Object.defineProperty(t.prototype, 'attrToPropMap', {
            get: function() {
              return d;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.contains = function(e, t) {
            return c.call(e, t);
          }),
          (t.prototype.querySelector = function(e, t) {
            return e.querySelector(t);
          }),
          (t.prototype.querySelectorAll = function(e, t) {
            return e.querySelectorAll(t);
          }),
          (t.prototype.on = function(e, t, n) {
            e.addEventListener(t, n, !1);
          }),
          (t.prototype.onAndCancel = function(e, t, n) {
            return (
              e.addEventListener(t, n, !1),
              function() {
                e.removeEventListener(t, n, !1);
              }
            );
          }),
          (t.prototype.dispatchEvent = function(e, t) {
            e.dispatchEvent(t);
          }),
          (t.prototype.createMouseEvent = function(e) {
            var t = this.getDefaultDocument().createEvent('MouseEvent');
            return t.initEvent(e, !0, !0), t;
          }),
          (t.prototype.createEvent = function(e) {
            var t = this.getDefaultDocument().createEvent('Event');
            return t.initEvent(e, !0, !0), t;
          }),
          (t.prototype.preventDefault = function(e) {
            e.preventDefault(), (e.returnValue = !1);
          }),
          (t.prototype.isPrevented = function(e) {
            return (
              e.defaultPrevented || (null != e.returnValue && !e.returnValue)
            );
          }),
          (t.prototype.getInnerHTML = function(e) {
            return e.innerHTML;
          }),
          (t.prototype.getTemplateContent = function(e) {
            return 'content' in e && this.isTemplateElement(e)
              ? e.content
              : null;
          }),
          (t.prototype.getOuterHTML = function(e) {
            return e.outerHTML;
          }),
          (t.prototype.nodeName = function(e) {
            return e.nodeName;
          }),
          (t.prototype.nodeValue = function(e) {
            return e.nodeValue;
          }),
          (t.prototype.type = function(e) {
            return e.type;
          }),
          (t.prototype.content = function(e) {
            return this.hasProperty(e, 'content') ? e.content : e;
          }),
          (t.prototype.firstChild = function(e) {
            return e.firstChild;
          }),
          (t.prototype.nextSibling = function(e) {
            return e.nextSibling;
          }),
          (t.prototype.parentElement = function(e) {
            return e.parentNode;
          }),
          (t.prototype.childNodes = function(e) {
            return e.childNodes;
          }),
          (t.prototype.childNodesAsList = function(e) {
            for (
              var t = e.childNodes, n = new Array(t.length), r = 0;
              r < t.length;
              r++
            )
              n[r] = t[r];
            return n;
          }),
          (t.prototype.clearNodes = function(e) {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          }),
          (t.prototype.appendChild = function(e, t) {
            e.appendChild(t);
          }),
          (t.prototype.removeChild = function(e, t) {
            e.removeChild(t);
          }),
          (t.prototype.replaceChild = function(e, t, n) {
            e.replaceChild(t, n);
          }),
          (t.prototype.remove = function(e) {
            return e.parentNode && e.parentNode.removeChild(e), e;
          }),
          (t.prototype.insertBefore = function(e, t, n) {
            e.insertBefore(n, t);
          }),
          (t.prototype.insertAllBefore = function(e, t, n) {
            n.forEach(function(n) {
              return e.insertBefore(n, t);
            });
          }),
          (t.prototype.insertAfter = function(e, t, n) {
            e.insertBefore(n, t.nextSibling);
          }),
          (t.prototype.setInnerHTML = function(e, t) {
            e.innerHTML = t;
          }),
          (t.prototype.getText = function(e) {
            return e.textContent;
          }),
          (t.prototype.setText = function(e, t) {
            e.textContent = t;
          }),
          (t.prototype.getValue = function(e) {
            return e.value;
          }),
          (t.prototype.setValue = function(e, t) {
            e.value = t;
          }),
          (t.prototype.getChecked = function(e) {
            return e.checked;
          }),
          (t.prototype.setChecked = function(e, t) {
            e.checked = t;
          }),
          (t.prototype.createComment = function(e) {
            return this.getDefaultDocument().createComment(e);
          }),
          (t.prototype.createTemplate = function(e) {
            var t = this.getDefaultDocument().createElement('template');
            return (t.innerHTML = e), t;
          }),
          (t.prototype.createElement = function(e, t) {
            return (t = t || this.getDefaultDocument()).createElement(e);
          }),
          (t.prototype.createElementNS = function(e, t, n) {
            return (n = n || this.getDefaultDocument()).createElementNS(e, t);
          }),
          (t.prototype.createTextNode = function(e, t) {
            return (t = t || this.getDefaultDocument()).createTextNode(e);
          }),
          (t.prototype.createScriptTag = function(e, t, n) {
            var r = (n = n || this.getDefaultDocument()).createElement(
              'SCRIPT'
            );
            return r.setAttribute(e, t), r;
          }),
          (t.prototype.createStyleElement = function(e, t) {
            var n = (t = t || this.getDefaultDocument()).createElement('style');
            return this.appendChild(n, this.createTextNode(e, t)), n;
          }),
          (t.prototype.createShadowRoot = function(e) {
            return e.createShadowRoot();
          }),
          (t.prototype.getShadowRoot = function(e) {
            return e.shadowRoot;
          }),
          (t.prototype.getHost = function(e) {
            return e.host;
          }),
          (t.prototype.clone = function(e) {
            return e.cloneNode(!0);
          }),
          (t.prototype.getElementsByClassName = function(e, t) {
            return e.getElementsByClassName(t);
          }),
          (t.prototype.getElementsByTagName = function(e, t) {
            return e.getElementsByTagName(t);
          }),
          (t.prototype.classList = function(e) {
            return Array.prototype.slice.call(e.classList, 0);
          }),
          (t.prototype.addClass = function(e, t) {
            e.classList.add(t);
          }),
          (t.prototype.removeClass = function(e, t) {
            e.classList.remove(t);
          }),
          (t.prototype.hasClass = function(e, t) {
            return e.classList.contains(t);
          }),
          (t.prototype.setStyle = function(e, t, n) {
            e.style[t] = n;
          }),
          (t.prototype.removeStyle = function(e, t) {
            e.style[t] = '';
          }),
          (t.prototype.getStyle = function(e, t) {
            return e.style[t];
          }),
          (t.prototype.hasStyle = function(e, t, n) {
            var r = this.getStyle(e, t) || '';
            return n ? r == n : r.length > 0;
          }),
          (t.prototype.tagName = function(e) {
            return e.tagName;
          }),
          (t.prototype.attributeMap = function(e) {
            for (
              var t = new Map(), n = e.attributes, r = 0;
              r < n.length;
              r++
            ) {
              var o = n.item(r);
              t.set(o.name, o.value);
            }
            return t;
          }),
          (t.prototype.hasAttribute = function(e, t) {
            return e.hasAttribute(t);
          }),
          (t.prototype.hasAttributeNS = function(e, t, n) {
            return e.hasAttributeNS(t, n);
          }),
          (t.prototype.getAttribute = function(e, t) {
            return e.getAttribute(t);
          }),
          (t.prototype.getAttributeNS = function(e, t, n) {
            return e.getAttributeNS(t, n);
          }),
          (t.prototype.setAttribute = function(e, t, n) {
            e.setAttribute(t, n);
          }),
          (t.prototype.setAttributeNS = function(e, t, n, r) {
            e.setAttributeNS(t, n, r);
          }),
          (t.prototype.removeAttribute = function(e, t) {
            e.removeAttribute(t);
          }),
          (t.prototype.removeAttributeNS = function(e, t, n) {
            e.removeAttributeNS(t, n);
          }),
          (t.prototype.templateAwareRoot = function(e) {
            return this.isTemplateElement(e) ? this.content(e) : e;
          }),
          (t.prototype.createHtmlDocument = function() {
            return document.implementation.createHTMLDocument('fakeTitle');
          }),
          (t.prototype.getDefaultDocument = function() {
            return document;
          }),
          (t.prototype.getBoundingClientRect = function(e) {
            try {
              return e.getBoundingClientRect();
            } catch (e) {
              return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
              };
            }
          }),
          (t.prototype.getTitle = function(e) {
            return e.title;
          }),
          (t.prototype.setTitle = function(e, t) {
            e.title = t || '';
          }),
          (t.prototype.elementMatches = function(e, t) {
            return (
              !!this.isElementNode(e) &&
              ((e.matches && e.matches(t)) ||
                (e.msMatchesSelector && e.msMatchesSelector(t)) ||
                (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
            );
          }),
          (t.prototype.isTemplateElement = function(e) {
            return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
          }),
          (t.prototype.isTextNode = function(e) {
            return e.nodeType === Node.TEXT_NODE;
          }),
          (t.prototype.isCommentNode = function(e) {
            return e.nodeType === Node.COMMENT_NODE;
          }),
          (t.prototype.isElementNode = function(e) {
            return e.nodeType === Node.ELEMENT_NODE;
          }),
          (t.prototype.hasShadowRoot = function(e) {
            return null != e.shadowRoot && e instanceof HTMLElement;
          }),
          (t.prototype.isShadowRoot = function(e) {
            return e instanceof DocumentFragment;
          }),
          (t.prototype.importIntoDoc = function(e) {
            return document.importNode(this.templateAwareRoot(e), !0);
          }),
          (t.prototype.adoptNode = function(e) {
            return document.adoptNode(e);
          }),
          (t.prototype.getHref = function(e) {
            return e.getAttribute('href');
          }),
          (t.prototype.getEventKey = function(e) {
            var t = e.key;
            if (null == t) {
              if (null == (t = e.keyIdentifier)) return 'Unidentified';
              t.startsWith('U+') &&
                ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                3 === e.location && h.hasOwnProperty(t) && (t = h[t]));
            }
            return p[t] || t;
          }),
          (t.prototype.getGlobalEventTarget = function(e, t) {
            return 'window' === t
              ? window
              : 'document' === t
              ? e
              : 'body' === t
              ? e.body
              : null;
          }),
          (t.prototype.getHistory = function() {
            return window.history;
          }),
          (t.prototype.getLocation = function() {
            return window.location;
          }),
          (t.prototype.getBaseHref = function(e) {
            var t = (function() {
              if (!y && !(y = document.querySelector('base'))) return null;
              return y.getAttribute('href');
            })();
            return null == t
              ? null
              : (function(e) {
                  v || (v = document.createElement('a'));
                  return (
                    v.setAttribute('href', e),
                    '/' === v.pathname.charAt(0) ? v.pathname : '/' + v.pathname
                  );
                })(
                  /**
                   * @license
                   * Copyright Google Inc. All Rights Reserved.
                   *
                   * Use of this source code is governed by an MIT-style license that can be
                   * found in the LICENSE file at https://angular.io/license
                   */ t
                );
          }),
          (t.prototype.resetBaseElement = function() {
            y = null;
          }),
          (t.prototype.getUserAgent = function() {
            return window.navigator.userAgent;
          }),
          (t.prototype.setData = function(e, t, n) {
            this.setAttribute(e, 'data-' + t, n);
          }),
          (t.prototype.getData = function(e, t) {
            return this.getAttribute(e, 'data-' + t);
          }),
          (t.prototype.getComputedStyle = function(e) {
            return getComputedStyle(e);
          }),
          (t.prototype.supportsWebAnimation = function() {
            return 'function' == typeof Element.prototype.animate;
          }),
          (t.prototype.performanceNow = function() {
            return window.performance && window.performance.now
              ? window.performance.now()
              : new Date().getTime();
          }),
          (t.prototype.supportsCookies = function() {
            return !0;
          }),
          (t.prototype.getCookie = function(e) {
            return Object(o['ɵparseCookieValue'])(document.cookie, e);
          }),
          (t.prototype.setCookie = function(e, t) {
            document.cookie =
              encodeURIComponent(e) + '=' + encodeURIComponent(t);
          }),
          t
        );
      })(f),
      y = null;
    var m = o.DOCUMENT;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function b() {
      return !!window.history.pushState;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var _ = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._doc = t), n._init(), n;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype._init = function() {
            (this.location = a().getLocation()),
              (this._history = a().getHistory());
          }),
          (t.prototype.getBaseHrefFromDOM = function() {
            return a().getBaseHref(this._doc);
          }),
          (t.prototype.onPopState = function(e) {
            a()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', e, !1);
          }),
          (t.prototype.onHashChange = function(e) {
            a()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', e, !1);
          }),
          Object.defineProperty(t.prototype, 'pathname', {
            get: function() {
              return this.location.pathname;
            },
            set: function(e) {
              this.location.pathname = e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'search', {
            get: function() {
              return this.location.search;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'hash', {
            get: function() {
              return this.location.hash;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.pushState = function(e, t, n) {
            b() ? this._history.pushState(e, t, n) : (this.location.hash = n);
          }),
          (t.prototype.replaceState = function(e, t, n) {
            b()
              ? this._history.replaceState(e, t, n)
              : (this.location.hash = n);
          }),
          (t.prototype.forward = function() {
            this._history.forward();
          }),
          (t.prototype.back = function() {
            this._history.back();
          }),
          (t = Object(r.b)(
            [
              Object(r.e)(0, Object(i.Inject)(m)),
              Object(r.d)('design:paramtypes', [Object])
            ],
            t
          ))
        );
      })(o.PlatformLocation),
      w = new i.InjectionToken('TRANSITION_ID');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function C(e, t, n) {
      return function() {
        n.get(i.ApplicationInitStatus).donePromise.then(function() {
          var n = a();
          Array.prototype.slice
            .apply(n.querySelectorAll(t, 'style[ng-transition]'))
            .filter(function(t) {
              return n.getAttribute(t, 'ng-transition') === e;
            })
            .forEach(function(e) {
              return n.remove(e);
            });
        });
      };
    }
    var D = [
        {
          provide: i.APP_INITIALIZER,
          useFactory: C,
          deps: [w, m, i.Injector],
          multi: !0
        }
      ],
      E = (function() {
        function e() {}
        return (
          (e.init = function() {
            Object(i.setTestabilityGetter)(new e());
          }),
          (e.prototype.addToWindow = function(e) {
            (i['ɵglobal'].getAngularTestability = function(t, n) {
              void 0 === n && (n = !0);
              var r = e.findTestabilityInTree(t, n);
              if (null == r)
                throw new Error('Could not find testability for element.');
              return r;
            }),
              (i['ɵglobal'].getAllAngularTestabilities = function() {
                return e.getAllTestabilities();
              }),
              (i['ɵglobal'].getAllAngularRootElements = function() {
                return e.getAllRootElements();
              });
            i['ɵglobal'].frameworkStabilizers ||
              (i['ɵglobal'].frameworkStabilizers = []),
              i['ɵglobal'].frameworkStabilizers.push(function(e) {
                var t = i['ɵglobal'].getAllAngularTestabilities(),
                  n = t.length,
                  r = !1,
                  o = function(t) {
                    (r = r || t), 0 == --n && e(r);
                  };
                t.forEach(function(e) {
                  e.whenStable(o);
                });
              });
          }),
          (e.prototype.findTestabilityInTree = function(e, t, n) {
            if (null == t) return null;
            var r = e.getTestability(t);
            return null != r
              ? r
              : n
              ? a().isShadowRoot(t)
                ? this.findTestabilityInTree(e, a().getHost(t), !0)
                : this.findTestabilityInTree(e, a().parentElement(t), !0)
              : null;
          }),
          e
        );
      })();
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function O(e, t) {
      ('undefined' != typeof COMPILED && COMPILED) ||
        ((i['ɵglobal'].ng = i['ɵglobal'].ng || {})[e] = t);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var S = { ApplicationRef: i.ApplicationRef, NgZone: i.NgZone },
      x = 'probe',
      A = 'coreTokens';
    function j(e) {
      return Object(i.getDebugNode)(e);
    }
    function R(e) {
      return (
        O(x, j),
        O(
          A,
          Object(r.a)(
            {},
            S,
            (function(e) {
              return e.reduce(function(e, t) {
                return (e[t.name] = t.token), e;
              }, {});
            })(e || [])
          )
        ),
        function() {
          return j;
        }
      );
    }
    var I = [
        {
          provide: i.APP_INITIALIZER,
          useFactory: R,
          deps: [[i.NgProbeToken, new i.Optional()]],
          multi: !0
        }
      ],
      T = new i.InjectionToken('EventManagerPlugins'),
      k = (function() {
        function e(e, t) {
          var n = this;
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach(function(e) {
              return (e.manager = n);
            }),
            (this._plugins = e.slice().reverse());
        }
        return (
          (e.prototype.addEventListener = function(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
          }),
          (e.prototype.addGlobalEventListener = function(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
          }),
          (e.prototype.getZone = function() {
            return this._zone;
          }),
          (e.prototype._findPluginFor = function(e) {
            var t = this._eventNameToPlugin.get(e);
            if (t) return t;
            for (var n = this._plugins, r = 0; r < n.length; r++) {
              var o = n[r];
              if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o;
            }
            throw new Error('No event manager plugin found for event ' + e);
          }),
          e
        );
      })(),
      M = (function() {
        function e(e) {
          this._doc = e;
        }
        return (
          (e.prototype.addGlobalEventListener = function(e, t, n) {
            var r = a().getGlobalEventTarget(this._doc, e);
            if (!r)
              throw new Error(
                'Unsupported event target ' + r + ' for event ' + t
              );
            return this.addEventListener(r, t, n);
          }),
          e
        );
      })(),
      P = (function() {
        function e() {
          this._stylesSet = new Set();
        }
        return (
          (e.prototype.addStyles = function(e) {
            var t = this,
              n = new Set();
            e.forEach(function(e) {
              t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
            }),
              this.onStylesAdded(n);
          }),
          (e.prototype.onStylesAdded = function(e) {}),
          (e.prototype.getAllStyles = function() {
            return Array.from(this._stylesSet);
          }),
          e
        );
      })(),
      F = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            (n._doc = t),
            (n._hostNodes = new Set()),
            (n._styleNodes = new Set()),
            n._hostNodes.add(t.head),
            n
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype._addStylesToHost = function(e, t) {
            var n = this;
            e.forEach(function(e) {
              var r = n._doc.createElement('style');
              (r.textContent = e), n._styleNodes.add(t.appendChild(r));
            });
          }),
          (t.prototype.addHost = function(e) {
            this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
          }),
          (t.prototype.removeHost = function(e) {
            this._hostNodes.delete(e);
          }),
          (t.prototype.onStylesAdded = function(e) {
            var t = this;
            this._hostNodes.forEach(function(n) {
              return t._addStylesToHost(e, n);
            });
          }),
          (t.prototype.ngOnDestroy = function() {
            this._styleNodes.forEach(function(e) {
              return a().remove(e);
            });
          }),
          t
        );
      })(P),
      N = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: 'http://www.w3.org/1999/xhtml',
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/'
      },
      V = /%COMP%/g,
      L = '_nghost-%COMP%',
      B = '_ngcontent-%COMP%';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function U(e) {
      return B.replace(V, e);
    }
    function H(e) {
      return L.replace(V, e);
    }
    function z(e, t, n) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        Array.isArray(o) ? z(e, o, n) : ((o = o.replace(V, e)), n.push(o));
      }
      return n;
    }
    function G(e) {
      return function(t) {
        !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
      };
    }
    var Z = (function() {
        function e(e, t) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new q(e));
        }
        return (
          (e.prototype.createRenderer = function(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case i.ViewEncapsulation.Emulated:
                var n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new Y(this.eventManager, this.sharedStylesHost, t)),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              case i.ViewEncapsulation.Native:
              case i.ViewEncapsulation.ShadowDom:
                return new $(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  var r = z(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(r),
                    this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }),
          (e.prototype.begin = function() {}),
          (e.prototype.end = function() {}),
          e
        );
      })(),
      q = (function() {
        function e(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        return (
          (e.prototype.destroy = function() {}),
          (e.prototype.createElement = function(e, t) {
            return t
              ? document.createElementNS(N[t], e)
              : document.createElement(e);
          }),
          (e.prototype.createComment = function(e) {
            return document.createComment(e);
          }),
          (e.prototype.createText = function(e) {
            return document.createTextNode(e);
          }),
          (e.prototype.appendChild = function(e, t) {
            e.appendChild(t);
          }),
          (e.prototype.insertBefore = function(e, t, n) {
            e && e.insertBefore(t, n);
          }),
          (e.prototype.removeChild = function(e, t) {
            e && e.removeChild(t);
          }),
          (e.prototype.selectRootElement = function(e, t) {
            var n = 'string' == typeof e ? document.querySelector(e) : e;
            if (!n)
              throw new Error(
                'The selector "' + e + '" did not match any elements'
              );
            return t || (n.textContent = ''), n;
          }),
          (e.prototype.parentNode = function(e) {
            return e.parentNode;
          }),
          (e.prototype.nextSibling = function(e) {
            return e.nextSibling;
          }),
          (e.prototype.setAttribute = function(e, t, n, r) {
            if (r) {
              t = r + ':' + t;
              var o = N[r];
              o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
            } else e.setAttribute(t, n);
          }),
          (e.prototype.removeAttribute = function(e, t, n) {
            if (n) {
              var r = N[n];
              r ? e.removeAttributeNS(r, t) : e.removeAttribute(n + ':' + t);
            } else e.removeAttribute(t);
          }),
          (e.prototype.addClass = function(e, t) {
            e.classList.add(t);
          }),
          (e.prototype.removeClass = function(e, t) {
            e.classList.remove(t);
          }),
          (e.prototype.setStyle = function(e, t, n, r) {
            r & i.RendererStyleFlags2.DashCase
              ? e.style.setProperty(
                  t,
                  n,
                  r & i.RendererStyleFlags2.Important ? 'important' : ''
                )
              : (e.style[t] = n);
          }),
          (e.prototype.removeStyle = function(e, t, n) {
            n & i.RendererStyleFlags2.DashCase
              ? e.style.removeProperty(t)
              : (e.style[t] = '');
          }),
          (e.prototype.setProperty = function(e, t, n) {
            Q(t, 'property'), (e[t] = n);
          }),
          (e.prototype.setValue = function(e, t) {
            e.nodeValue = t;
          }),
          (e.prototype.listen = function(e, t, n) {
            return (
              Q(t, 'listener'),
              'string' == typeof e
                ? this.eventManager.addGlobalEventListener(e, t, G(n))
                : this.eventManager.addEventListener(e, t, G(n))
            );
          }),
          e
        );
      })(),
      W = '@'.charCodeAt(0);
    function Q(e, t) {
      if (e.charCodeAt(0) === W)
        throw new Error(
          'Found the synthetic ' +
            t +
            ' ' +
            e +
            '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
        );
    }
    var K,
      Y = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          o.component = r;
          var i = z(r.id, r.styles, []);
          return (
            n.addStyles(i), (o.contentAttr = U(r.id)), (o.hostAttr = H(r.id)), o
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.applyToHost = function(t) {
            e.prototype.setAttribute.call(this, t, this.hostAttr, '');
          }),
          (t.prototype.createElement = function(t, n) {
            var r = e.prototype.createElement.call(this, t, n);
            return (
              e.prototype.setAttribute.call(this, r, this.contentAttr, ''), r
            );
          }),
          t
        );
      })(q),
      $ = (function(e) {
        function t(t, n, r, o) {
          var u = e.call(this, t) || this;
          (u.sharedStylesHost = n),
            (u.hostEl = r),
            (u.component = o),
            o.encapsulation === i.ViewEncapsulation.ShadowDom
              ? (u.shadowRoot = r.attachShadow({ mode: 'open' }))
              : (u.shadowRoot = r.createShadowRoot()),
            u.sharedStylesHost.addHost(u.shadowRoot);
          for (var a = z(o.id, o.styles, []), s = 0; s < a.length; s++) {
            var c = document.createElement('style');
            (c.textContent = a[s]), u.shadowRoot.appendChild(c);
          }
          return u;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.nodeOrShadowRoot = function(e) {
            return e === this.hostEl ? this.shadowRoot : e;
          }),
          (t.prototype.destroy = function() {
            this.sharedStylesHost.removeHost(this.shadowRoot);
          }),
          (t.prototype.appendChild = function(t, n) {
            return e.prototype.appendChild.call(
              this,
              this.nodeOrShadowRoot(t),
              n
            );
          }),
          (t.prototype.insertBefore = function(t, n, r) {
            return e.prototype.insertBefore.call(
              this,
              this.nodeOrShadowRoot(t),
              n,
              r
            );
          }),
          (t.prototype.removeChild = function(t, n) {
            return e.prototype.removeChild.call(
              this,
              this.nodeOrShadowRoot(t),
              n
            );
          }),
          (t.prototype.parentNode = function(t) {
            return this.nodeOrShadowRoot(
              e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t))
            );
          }),
          t
        );
      })(q),
      J =
        ('undefined' != typeof Zone && Zone.__symbol__) ||
        function(e) {
          return '__zone_symbol__' + e;
        },
      X = J('addEventListener'),
      ee = J('removeEventListener'),
      te = {},
      ne = '__zone_symbol__propagationStopped',
      re = 'undefined' != typeof Zone && Zone[J('BLACK_LISTED_EVENTS')];
    re && (K = {});
    var oe = function(e) {
        return !!K && K.hasOwnProperty(e);
      },
      ie = function(e) {
        var t = te[e.type];
        if (t) {
          var n = this[t];
          if (n) {
            var r = [e];
            if (1 === n.length)
              return (u = n[0]).zone !== Zone.current
                ? u.zone.run(u.handler, this, r)
                : u.handler.apply(this, r);
            for (var o = n.slice(), i = 0; i < o.length && !0 !== e[ne]; i++) {
              var u;
              (u = o[i]).zone !== Zone.current
                ? u.zone.run(u.handler, this, r)
                : u.handler.apply(this, r);
            }
          }
        }
      },
      ue = (function(e) {
        function t(t, n, r) {
          var i = e.call(this, t) || this;
          return (
            (i.ngZone = n),
            (r && Object(o.isPlatformServer)(r)) || i.patchEvent(),
            i
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.patchEvent = function() {
            if (
              'undefined' != typeof Event &&
              Event &&
              Event.prototype &&
              !Event.prototype.__zone_symbol__stopImmediatePropagation
            ) {
              var e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                Event.prototype.stopImmediatePropagation);
              Event.prototype.stopImmediatePropagation = function() {
                this && (this[ne] = !0), e && e.apply(this, arguments);
              };
            }
          }),
          (t.prototype.supports = function(e) {
            return !0;
          }),
          (t.prototype.addEventListener = function(e, t, n) {
            var r = this,
              o = n;
            if (!e[X] || (i.NgZone.isInAngularZone() && !oe(t)))
              e.addEventListener(t, o, !1);
            else {
              var u = te[t];
              u || (u = te[t] = J('ANGULAR' + t + 'FALSE'));
              var a = e[u],
                s = a && a.length > 0;
              a || (a = e[u] = []);
              var c = oe(t) ? Zone.root : Zone.current;
              if (0 === a.length) a.push({ zone: c, handler: o });
              else {
                for (var l = !1, f = 0; f < a.length; f++)
                  if (a[f].handler === o) {
                    l = !0;
                    break;
                  }
                l || a.push({ zone: c, handler: o });
              }
              s || e[X](t, ie, !1);
            }
            return function() {
              return r.removeEventListener(e, t, o);
            };
          }),
          (t.prototype.removeEventListener = function(e, t, n) {
            var r = e[ee];
            if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
            var o = te[t],
              i = o && e[o];
            if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
            for (var u = !1, a = 0; a < i.length; a++)
              if (i[a].handler === n) {
                (u = !0), i.splice(a, 1);
                break;
              }
            u
              ? 0 === i.length && r.apply(e, [t, ie, !1])
              : e.removeEventListener.apply(e, [t, n, !1]);
          }),
          t
        );
      })(M),
      ae = {
        pan: !0,
        panstart: !0,
        panmove: !0,
        panend: !0,
        pancancel: !0,
        panleft: !0,
        panright: !0,
        panup: !0,
        pandown: !0,
        pinch: !0,
        pinchstart: !0,
        pinchmove: !0,
        pinchend: !0,
        pinchcancel: !0,
        pinchin: !0,
        pinchout: !0,
        press: !0,
        pressup: !0,
        rotate: !0,
        rotatestart: !0,
        rotatemove: !0,
        rotateend: !0,
        rotatecancel: !0,
        swipe: !0,
        swipeleft: !0,
        swiperight: !0,
        swipeup: !0,
        swipedown: !0,
        tap: !0
      },
      se = new i.InjectionToken('HammerGestureConfig'),
      ce = new i.InjectionToken('HammerLoader'),
      le = (function() {
        function e() {
          (this.events = []), (this.overrides = {});
        }
        return (
          (e.prototype.buildHammer = function(e) {
            var t = new Hammer(e, this.options);
            for (var n in (t.get('pinch').set({ enable: !0 }),
            t.get('rotate').set({ enable: !0 }),
            this.overrides))
              t.get(n).set(this.overrides[n]);
            return t;
          }),
          e
        );
      })(),
      fe = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          return (i._config = n), (i.console = r), (i.loader = o), i;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.supports = function(e) {
            return (
              !(
                !ae.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)
              ) &&
              (!(!window.Hammer && !this.loader) ||
                (this.console.warn(
                  'The "' +
                    e +
                    '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
                ),
                !1))
            );
          }),
          (t.prototype.addEventListener = function(e, t, n) {
            var r = this,
              o = this.manager.getZone();
            if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
              var i = !1,
                u = function() {
                  i = !0;
                };
              return (
                this.loader()
                  .then(function() {
                    if (!window.Hammer)
                      return (
                        r.console.warn(
                          'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                        ),
                        void (u = function() {})
                      );
                    i || (u = r.addEventListener(e, t, n));
                  })
                  .catch(function() {
                    r.console.warn(
                      'The "' +
                        t +
                        '" event cannot be bound because the custom Hammer.JS loader failed.'
                    ),
                      (u = function() {});
                  }),
                function() {
                  u();
                }
              );
            }
            return o.runOutsideAngular(function() {
              var i = r._config.buildHammer(e),
                u = function(e) {
                  o.runGuarded(function() {
                    n(e);
                  });
                };
              return (
                i.on(t, u),
                function() {
                  i.off(t, u), 'function' == typeof i.destroy && i.destroy();
                }
              );
            });
          }),
          (t.prototype.isCustomEvent = function(e) {
            return this._config.events.indexOf(e) > -1;
          }),
          t
        );
      })(M),
      de = ['alt', 'control', 'meta', 'shift'],
      pe = {
        alt: function(e) {
          return e.altKey;
        },
        control: function(e) {
          return e.ctrlKey;
        },
        meta: function(e) {
          return e.metaKey;
        },
        shift: function(e) {
          return e.shiftKey;
        }
      },
      he = (function(e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        var n;
        return (
          Object(r.c)(t, e),
          (n = t),
          (t.prototype.supports = function(e) {
            return null != n.parseEventName(e);
          }),
          (t.prototype.addEventListener = function(e, t, r) {
            var o = n.parseEventName(t),
              i = n.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function() {
              return a().onAndCancel(e, o.domEventName, i);
            });
          }),
          (t.parseEventName = function(e) {
            var t = e.toLowerCase().split('.'),
              r = t.shift();
            if (0 === t.length || ('keydown' !== r && 'keyup' !== r))
              return null;
            var o = n._normalizeKey(t.pop()),
              i = '';
            if (
              (de.forEach(function(e) {
                var n = t.indexOf(e);
                n > -1 && (t.splice(n, 1), (i += e + '.'));
              }),
              (i += o),
              0 != t.length || 0 === o.length)
            )
              return null;
            var u = {};
            return (u.domEventName = r), (u.fullKey = i), u;
          }),
          (t.getEventFullKey = function(e) {
            var t = '',
              n = a().getEventKey(e);
            return (
              ' ' === (n = n.toLowerCase())
                ? (n = 'space')
                : '.' === n && (n = 'dot'),
              de.forEach(function(r) {
                r != n && ((0, pe[r])(e) && (t += r + '.'));
              }),
              (t += n)
            );
          }),
          (t.eventCallback = function(e, t, r) {
            return function(o) {
              n.getEventFullKey(o) === e &&
                r.runGuarded(function() {
                  return t(o);
                });
            };
          }),
          (t._normalizeKey = function(e) {
            switch (e) {
              case 'esc':
                return 'escape';
              default:
                return e;
            }
          }),
          t
        );
      })(M),
      ve = (function() {
        return function() {};
      })(),
      ge = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._doc = t), n;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.sanitize = function(e, t) {
            if (null == t) return null;
            switch (e) {
              case i.SecurityContext.NONE:
                return t;
              case i.SecurityContext.HTML:
                return t instanceof me
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, 'HTML'),
                    Object(i['ɵ_sanitizeHtml'])(this._doc, String(t)));
              case i.SecurityContext.STYLE:
                return t instanceof be
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, 'Style'),
                    Object(i['ɵ_sanitizeStyle'])(t));
              case i.SecurityContext.SCRIPT:
                if (t instanceof _e)
                  return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, 'Script'),
                new Error('unsafe value used in a script context'));
              case i.SecurityContext.URL:
                return t instanceof Ce || t instanceof we
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, 'URL'),
                    Object(i['ɵ_sanitizeUrl'])(String(t)));
              case i.SecurityContext.RESOURCE_URL:
                if (t instanceof Ce)
                  return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, 'ResourceURL'),
                new Error(
                  'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                ));
              default:
                throw new Error(
                  'Unexpected SecurityContext ' +
                    e +
                    ' (see http://g.co/ng/security#xss)'
                );
            }
          }),
          (t.prototype.checkNotSafeValue = function(e, t) {
            if (e instanceof ye)
              throw new Error(
                'Required a safe ' +
                  t +
                  ', got a ' +
                  e.getTypeName() +
                  ' (see http://g.co/ng/security#xss)'
              );
          }),
          (t.prototype.bypassSecurityTrustHtml = function(e) {
            return new me(e);
          }),
          (t.prototype.bypassSecurityTrustStyle = function(e) {
            return new be(e);
          }),
          (t.prototype.bypassSecurityTrustScript = function(e) {
            return new _e(e);
          }),
          (t.prototype.bypassSecurityTrustUrl = function(e) {
            return new we(e);
          }),
          (t.prototype.bypassSecurityTrustResourceUrl = function(e) {
            return new Ce(e);
          }),
          t
        );
      })(ve),
      ye = (function() {
        function e(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        return (
          (e.prototype.toString = function() {
            return (
              'SafeValue must use [property]=binding: ' +
              this.changingThisBreaksApplicationSecurity +
              ' (see http://g.co/ng/security#xss)'
            );
          }),
          e
        );
      })(),
      me = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getTypeName = function() {
            return 'HTML';
          }),
          t
        );
      })(ye),
      be = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getTypeName = function() {
            return 'Style';
          }),
          t
        );
      })(ye),
      _e = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getTypeName = function() {
            return 'Script';
          }),
          t
        );
      })(ye),
      we = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getTypeName = function() {
            return 'URL';
          }),
          t
        );
      })(ye),
      Ce = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getTypeName = function() {
            return 'ResourceURL';
          }),
          t
        );
      })(ye),
      De = [
        { provide: i.PLATFORM_ID, useValue: o['ɵPLATFORM_BROWSER_ID'] },
        { provide: i.PLATFORM_INITIALIZER, useValue: Se, multi: !0 },
        { provide: o.PlatformLocation, useClass: _, deps: [m] },
        { provide: m, useFactory: Ae, deps: [] }
      ],
      Ee = [
        { provide: i.Sanitizer, useExisting: ve },
        { provide: ve, useClass: ge, deps: [m] }
      ],
      Oe = Object(i.createPlatformFactory)(i.platformCore, 'browser', De);
    function Se() {
      g.makeCurrent(), E.init();
    }
    function xe() {
      return new i.ErrorHandler();
    }
    function Ae() {
      return document;
    }
    var je = [
        Ee,
        { provide: i['ɵAPP_ROOT'], useValue: !0 },
        { provide: i.ErrorHandler, useFactory: xe, deps: [] },
        {
          provide: T,
          useClass: ue,
          multi: !0,
          deps: [m, i.NgZone, i.PLATFORM_ID]
        },
        { provide: T, useClass: he, multi: !0, deps: [m] },
        {
          provide: T,
          useClass: fe,
          multi: !0,
          deps: [m, se, i['ɵConsole'], [new i.Optional(), ce]]
        },
        { provide: se, useClass: le, deps: [] },
        { provide: Z, useClass: Z, deps: [k, F] },
        { provide: i.RendererFactory2, useExisting: Z },
        { provide: P, useExisting: F },
        { provide: F, useClass: F, deps: [m] },
        { provide: i.Testability, useClass: i.Testability, deps: [i.NgZone] },
        { provide: k, useClass: k, deps: [T, i.NgZone] },
        I
      ],
      Re = (function() {
        function e(e) {
          if (e)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        var t;
        return (
          (t = e),
          (e.withServerTransition = function(e) {
            return {
              ngModule: t,
              providers: [
                { provide: i.APP_ID, useValue: e.appId },
                { provide: w, useExisting: i.APP_ID },
                D
              ]
            };
          }),
          e
        );
      })();
    function Ie() {
      return new Te(Object(i.inject)(m));
    }
    var Te = (function() {
      function e(e) {
        (this._doc = e), (this._dom = a());
      }
      return (
        (e.prototype.addTag = function(e, t) {
          return (
            void 0 === t && (t = !1), e ? this._getOrCreateElement(e, t) : null
          );
        }),
        (e.prototype.addTags = function(e, t) {
          var n = this;
          return (
            void 0 === t && (t = !1),
            e
              ? e.reduce(function(e, r) {
                  return r && e.push(n._getOrCreateElement(r, t)), e;
                }, [])
              : []
          );
        }),
        (e.prototype.getTag = function(e) {
          return (
            (e && this._dom.querySelector(this._doc, 'meta[' + e + ']')) || null
          );
        }),
        (e.prototype.getTags = function(e) {
          if (!e) return [];
          var t = this._dom.querySelectorAll(this._doc, 'meta[' + e + ']');
          return t ? [].slice.call(t) : [];
        }),
        (e.prototype.updateTag = function(e, t) {
          if (!e) return null;
          t = t || this._parseSelector(e);
          var n = this.getTag(t);
          return n
            ? this._setMetaElementAttributes(e, n)
            : this._getOrCreateElement(e, !0);
        }),
        (e.prototype.removeTag = function(e) {
          this.removeTagElement(this.getTag(e));
        }),
        (e.prototype.removeTagElement = function(e) {
          e && this._dom.remove(e);
        }),
        (e.prototype._getOrCreateElement = function(e, t) {
          if ((void 0 === t && (t = !1), !t)) {
            var n = this._parseSelector(e),
              r = this.getTag(n);
            if (r && this._containsAttributes(e, r)) return r;
          }
          var o = this._dom.createElement('meta');
          this._setMetaElementAttributes(e, o);
          var i = this._dom.getElementsByTagName(this._doc, 'head')[0];
          return this._dom.appendChild(i, o), o;
        }),
        (e.prototype._setMetaElementAttributes = function(e, t) {
          var n = this;
          return (
            Object.keys(e).forEach(function(r) {
              return n._dom.setAttribute(t, r, e[r]);
            }),
            t
          );
        }),
        (e.prototype._parseSelector = function(e) {
          var t = e.name ? 'name' : 'property';
          return t + '="' + e[t] + '"';
        }),
        (e.prototype._containsAttributes = function(e, t) {
          var n = this;
          return Object.keys(e).every(function(r) {
            return n._dom.getAttribute(t, r) === e[r];
          });
        }),
        (e.ngInjectableDef = Object(i.defineInjectable)({
          factory: Ie,
          token: e,
          providedIn: 'root'
        })),
        e
      );
    })();
    function ke() {
      return new Me(Object(i.inject)(m));
    }
    var Me = (function() {
        function e(e) {
          this._doc = e;
        }
        return (
          (e.prototype.getTitle = function() {
            return a().getTitle(this._doc);
          }),
          (e.prototype.setTitle = function(e) {
            a().setTitle(this._doc, e);
          }),
          (e.ngInjectableDef = Object(i.defineInjectable)({
            factory: ke,
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })(),
      Pe = ('undefined' != typeof window && window) || {},
      Fe = (function() {
        return function(e, t) {
          (this.msPerTick = e), (this.numTicks = t);
        };
      })(),
      Ne = (function() {
        function e(e) {
          this.appRef = e.injector.get(i.ApplicationRef);
        }
        return (
          (e.prototype.timeChangeDetection = function(e) {
            var t = e && e.record,
              n = null != Pe.console.profile;
            t && n && Pe.console.profile('Change Detection');
            for (
              var r = a().performanceNow(), o = 0;
              o < 5 || a().performanceNow() - r < 500;

            )
              this.appRef.tick(), o++;
            var i = a().performanceNow();
            t && n && Pe.console.profileEnd('Change Detection');
            var u = (i - r) / o;
            return (
              Pe.console.log('ran ' + o + ' change detection cycles'),
              Pe.console.log(u.toFixed(2) + ' ms per check'),
              new Fe(u, o)
            );
          }),
          e
        );
      })(),
      Ve = 'profiler';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Le(e) {
      return O(Ve, new Ne(e)), e;
    }
    function Be() {
      O(Ve, null);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ function Ue(e) {
      var t = { '&': '&a;', '"': '&q;', "'": '&s;', '<': '&l;', '>': '&g;' };
      return e.replace(/[&"'<>]/g, function(e) {
        return t[e];
      });
    }
    function He(e) {
      return e;
    }
    var ze = (function() {
      function e() {
        (this.store = {}), (this.onSerializeCallbacks = {});
      }
      var t;
      return (
        (t = e),
        (e.init = function(e) {
          var n = new t();
          return (n.store = e), n;
        }),
        (e.prototype.get = function(e, t) {
          return void 0 !== this.store[e] ? this.store[e] : t;
        }),
        (e.prototype.set = function(e, t) {
          this.store[e] = t;
        }),
        (e.prototype.remove = function(e) {
          delete this.store[e];
        }),
        (e.prototype.hasKey = function(e) {
          return this.store.hasOwnProperty(e);
        }),
        (e.prototype.onSerialize = function(e, t) {
          this.onSerializeCallbacks[e] = t;
        }),
        (e.prototype.toJson = function() {
          for (var e in this.onSerializeCallbacks)
            if (this.onSerializeCallbacks.hasOwnProperty(e))
              try {
                this.store[e] = this.onSerializeCallbacks[e]();
              } catch (e) {
                console.warn('Exception in onSerialize callback: ', e);
              }
          return JSON.stringify(this.store);
        }),
        e
      );
    })();
    function Ge(e, t) {
      var n = e.getElementById(t + '-state'),
        r = {};
      if (n && n.textContent)
        try {
          r = JSON.parse(
            (function(e) {
              var t = {
                '&a;': '&',
                '&q;': '"',
                '&s;': "'",
                '&l;': '<',
                '&g;': '>'
              };
              return e.replace(/&[^;]+;/g, function(e) {
                return t[e];
              });
            })(n.textContent)
          );
        } catch (e) {
          console.warn(
            'Exception while restoring TransferState for app ' + t,
            e
          );
        }
      return ze.init(r);
    }
    var Ze = (function() {
        return function() {};
      })(),
      qe = (function() {
        function e() {}
        return (
          (e.all = function() {
            return function(e) {
              return !0;
            };
          }),
          (e.css = function(e) {
            return function(t) {
              return (
                null != t.nativeElement &&
                a().elementMatches(t.nativeElement, e)
              );
            };
          }),
          (e.directive = function(e) {
            return function(t) {
              return -1 !== t.providerTokens.indexOf(e);
            };
          }),
          e
        );
      })(),
      We = new i.Version('7.1.1');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r =
      Array.isArray ||
      function(e) {
        return e && 'number' == typeof e.length;
      };
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return null != e && 'object' == typeof e;
    }
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return i;
    });
    var r = n(37),
      o = n(28);
    function i(e) {
      return (
        void 0 === e && (e = Number.POSITIVE_INFINITY), Object(r.a)(o.a, e)
      );
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return c;
    });
    var r = n(0),
      o = n(8),
      i = n(9),
      u = n(15),
      a = n(25),
      s = n(24);
    function c(e, t, n) {
      return (
        void 0 === n && (n = Number.POSITIVE_INFINITY),
        'function' == typeof t
          ? function(r) {
              return r.pipe(
                c(function(n, r) {
                  return Object(s.a)(e(n, r)).pipe(
                    Object(a.a)(function(e, o) {
                      return t(n, e, r, o);
                    })
                  );
                }, n)
              );
            }
          : ('number' == typeof t && (n = t),
            function(t) {
              return t.lift(new l(e, n));
            })
      );
    }
    var l = (function() {
        function e(e, t) {
          void 0 === t && (t = Number.POSITIVE_INFINITY),
            (this.project = e),
            (this.concurrent = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new f(e, this.project, this.concurrent));
          }),
          e
        );
      })(),
      f = (function(e) {
        function t(t, n, r) {
          void 0 === r && (r = Number.POSITIVE_INFINITY);
          var o = e.call(this, t) || this;
          return (
            (o.project = n),
            (o.concurrent = r),
            (o.hasCompleted = !1),
            (o.buffer = []),
            (o.active = 0),
            (o.index = 0),
            o
          );
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            this.active < this.concurrent
              ? this._tryNext(e)
              : this.buffer.push(e);
          }),
          (t.prototype._tryNext = function(e) {
            var t,
              n = this.index++;
            try {
              t = this.project(e, n);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.active++, this._innerSub(t, e, n);
          }),
          (t.prototype._innerSub = function(e, t, n) {
            var r = new u.a(this, void 0, void 0);
            this.destination.add(r), Object(o.a)(this, e, t, n, r);
          }),
          (t.prototype._complete = function() {
            (this.hasCompleted = !0),
              0 === this.active &&
                0 === this.buffer.length &&
                this.destination.complete(),
              this.unsubscribe();
          }),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyComplete = function(e) {
            var t = this.buffer;
            this.remove(e),
              this.active--,
              t.length > 0
                ? this._next(t.shift())
                : 0 === this.active &&
                  this.hasCompleted &&
                  this.destination.complete();
          }),
          t
        );
      })(i.a);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n(26),
      i = n(73),
      u = n(3),
      a = n(27),
      s = n(2);
    var c = (function() {
        function e() {}
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new l(e));
          }),
          e
        );
      })(),
      l = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return r.c(t, e), (t.prototype._next = function(e) {}), t;
      })(s.a),
      f = n(19);
    var d = (function() {
        function e() {}
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new p(e));
          }),
          e
        );
      })(),
      p = (function(e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            this.destination.next(f.a.createNext(e));
          }),
          (t.prototype._error = function(e) {
            var t = this.destination;
            t.next(f.a.createError(e)), t.complete();
          }),
          (t.prototype._complete = function() {
            var e = this.destination;
            e.next(f.a.createComplete()), e.complete();
          }),
          t
        );
      })(s.a),
      h = n(25),
      v = n(50),
      g = n(78),
      y = n(37),
      m = n(9),
      b = n(15),
      _ = n(8),
      w = n(24);
    var C = (function() {
        function e(e) {
          this.project = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new D(e, this.project));
          }),
          e
        );
      })(),
      D = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (
            (r.project = n),
            (r.hasSubscription = !1),
            (r.hasCompleted = !1),
            (r.index = 0),
            r
          );
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            this.hasSubscription || this.tryNext(e);
          }),
          (t.prototype.tryNext = function(e) {
            var t,
              n = this.index++;
            try {
              t = this.project(e, n);
            } catch (e) {
              return void this.destination.error(e);
            }
            (this.hasSubscription = !0), this._innerSub(t, e, n);
          }),
          (t.prototype._innerSub = function(e, t, n) {
            var r = new b.a(this, void 0, void 0);
            this.destination.add(r), Object(_.a)(this, e, t, n, r);
          }),
          (t.prototype._complete = function() {
            (this.hasCompleted = !0),
              this.hasSubscription || this.destination.complete(),
              this.unsubscribe();
          }),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function(e) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function(e) {
            this.destination.remove(e),
              (this.hasSubscription = !1),
              this.hasCompleted && this.destination.complete();
          }),
          t
        );
      })(m.a);
    var E = (function() {
        function e() {}
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new O(e));
          }),
          e
        );
      })(),
      O = (function(e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            e.observe(this.destination);
          }),
          t
        );
      })(s.a),
      S = n(1);
    n.d(t, 'ɵngrx_modules_effects_effects_c', function() {
      return $;
    }),
      n.d(t, 'ɵngrx_modules_effects_effects_a', function() {
        return X;
      }),
      n.d(t, 'ɵngrx_modules_effects_effects_b', function() {
        return Y;
      }),
      n.d(t, 'ɵngrx_modules_effects_effects_f', function() {
        return Q;
      }),
      n.d(t, 'ɵngrx_modules_effects_effects_e', function() {
        return W;
      }),
      n.d(t, 'ɵngrx_modules_effects_effects_d', function() {
        return q;
      }),
      n.d(t, 'Effect', function() {
        return R;
      }),
      n.d(t, 'getEffectsMetadata', function() {
        return k;
      }),
      n.d(t, 'mergeEffects', function() {
        return N;
      }),
      n.d(t, 'Actions', function() {
        return U;
      }),
      n.d(t, 'ofType', function() {
        return H;
      }),
      n.d(t, 'EffectsModule', function() {
        return J;
      }),
      n.d(t, 'EffectSources', function() {
        return Z;
      }),
      n.d(t, 'ROOT_EFFECTS_INIT', function() {
        return K;
      });
    /**
     * @license NgRx 6.1.0
     * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
     * License: MIT
     */
    var x = function(e) {
        var t = 'function' == typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t
          ? t.call(e)
          : {
              next: function() {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              }
            };
      },
      A = '__@ngrx/effects__';
    function j(e) {
      return e.constructor.hasOwnProperty(A) ? e.constructor[A] : [];
    }
    function R(e) {
      var t = (void 0 === e ? {} : e).dispatch,
        n = void 0 === t || t;
      return function(e, t) {
        !(function(e, t) {
          var n = e.constructor,
            r = n.hasOwnProperty(A)
              ? n[A]
              : Object.defineProperty(n, A, { value: [] })[A];
          Array.prototype.push.apply(r, t);
        })(e, [{ propertyName: t, dispatch: n }]);
      };
    }
    function I(e) {
      return Object.getPrototypeOf(e);
    }
    function T(e) {
      return Object(o.compose)(j, I)(e);
    }
    function k(e) {
      var t,
        n,
        r = {};
      try {
        for (var o = x(T(e)), i = o.next(); !i.done; i = o.next()) {
          var u = i.value,
            a = u.propertyName,
            s = u.dispatch;
          r[a] = { dispatch: s };
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return r;
    }
    var M = 'ngrxOnRunEffects';
    var P = function(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      F = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(P(arguments[t]));
        return e;
      };
    function N(e) {
      var t = I(e).constructor.name,
        n = T(e).map(function(n) {
          var r = n.propertyName,
            o = n.dispatch,
            i = 'function' == typeof e[r] ? e[r]() : e[r];
          return !1 === o
            ? i.pipe(function(e) {
                return e.lift(new c());
              })
            : i
                .pipe(function(e) {
                  return e.lift(new d());
                })
                .pipe(
                  Object(h.a)(function(n) {
                    return {
                      effect: e[r],
                      notification: n,
                      propertyName: r,
                      sourceName: t,
                      sourceInstance: e
                    };
                  })
                );
        });
      return i.a.apply(void 0, F(n));
    }
    function V(e) {
      var t = N(e);
      return (function(e) {
        var t = I(e);
        return M in t && 'function' == typeof t[M];
      })(e)
        ? e.ngrxOnRunEffects(t)
        : t;
    }
    var L = function(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      },
      B = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(L(arguments[t]));
        return e;
      },
      U = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return t && (n.source = t), n;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.lift = function(e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.ofType = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return H.apply(void 0, B(e))(this);
          }),
          t
        );
      })(u.a);
    function H() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Object(v.a)(function(t) {
        return e.some(function(e) {
          return e === t.type;
        });
      });
    }
    function z(e, t) {
      !(function(e, t) {
        'E' === e.notification.kind && t.handleError(e.notification.error);
      })(e, t),
        (function(e, t) {
          if ('N' === e.notification.kind) {
            var n = e.notification.value,
              r = !(function(e) {
                return e && e.type && 'string' == typeof e.type;
              })(n);
            r &&
              t.handleError(
                new Error(
                  'Effect ' +
                    (function(e) {
                      var t = e.propertyName,
                        n = e.sourceInstance,
                        r = e.sourceName,
                        o = 'function' == typeof n[t];
                      return '"' + r + '.' + t + (o ? '()' : '') + '"';
                    })(e) +
                    ' dispatched an invalid action: ' +
                    (function(e) {
                      try {
                        return JSON.stringify(e);
                      } catch (t) {
                        return e;
                      }
                    })(n)
                )
              );
          }
        })(e, t);
    }
    var G = (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          };
        return function(t, n) {
          function r() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })(),
      Z = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.errorHandler = t), n;
        }
        return (
          G(t, e),
          (t.prototype.addEffects = function(e) {
            this.next(e);
          }),
          (t.prototype.toActions = function() {
            var e = this;
            return this.pipe(
              Object(g.a)(I),
              Object(y.a)(function(t) {
                return t.pipe(
                  (function e(t, n) {
                    return n
                      ? function(r) {
                          return r.pipe(
                            e(function(e, r) {
                              return Object(w.a)(t(e, r)).pipe(
                                Object(h.a)(function(t, o) {
                                  return n(e, t, r, o);
                                })
                              );
                            })
                          );
                        }
                      : function(e) {
                          return e.lift(new C(t));
                        };
                  })(V),
                  Object(h.a)(function(t) {
                    return z(t, e.errorHandler), t.notification;
                  }),
                  Object(v.a)(function(e) {
                    return 'N' === e.kind;
                  }),
                  function(e) {
                    return e.lift(new E());
                  }
                );
              })
            );
          }),
          t
        );
      })(a.a),
      q = new S.InjectionToken('ngrx/effects: Root Effects'),
      W = new S.InjectionToken('ngrx/effects: Feature Effects'),
      Q = (function() {
        function e(e, t) {
          (this.effectSources = e),
            (this.store = t),
            (this.effectsSubscription = null);
        }
        return (
          (e.prototype.start = function() {
            this.effectsSubscription ||
              (this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store));
          }),
          (e.prototype.ngOnDestroy = function() {
            this.effectsSubscription &&
              (this.effectsSubscription.unsubscribe(),
              (this.effectsSubscription = null));
          }),
          e
        );
      })(),
      K = '@ngrx/effects/init',
      Y = (function() {
        function e(e, t, n, r, o, i) {
          (this.sources = e),
            t.start(),
            r.forEach(function(t) {
              return e.addEffects(t);
            }),
            n.dispatch({ type: K });
        }
        return (
          (e.prototype.addEffects = function(e) {
            this.sources.addEffects(e);
          }),
          e
        );
      })(),
      $ = (function() {
        return function(e, t, n, r) {
          (this.root = e),
            t.forEach(function(t) {
              return t.forEach(function(t) {
                return e.addEffects(t);
              });
            });
        };
      })(),
      J = (function() {
        function e() {}
        return (
          (e.forFeature = function(e) {
            return {
              ngModule: $,
              providers: [e, { provide: W, multi: !0, deps: e, useFactory: X }]
            };
          }),
          (e.forRoot = function(e) {
            return {
              ngModule: Y,
              providers: [Q, Z, U, e, { provide: q, deps: e, useFactory: X }]
            };
          }),
          e
        );
      })();
    function X() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e;
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return p;
    });
    var r = n(3),
      o = n(42),
      i = n(44),
      u = n(45),
      a = n(40),
      s = n(41),
      c = n(43),
      l = n(35),
      f = n(17),
      d = n(13),
      p = function(e) {
        if (e instanceof r.a)
          return function(t) {
            return e._isScalar
              ? (t.next(e.value), void t.complete())
              : e.subscribe(t);
          };
        if (e && 'function' == typeof e[d.a]) return Object(a.a)(e);
        if (Object(s.a)(e)) return Object(o.a)(e);
        if (Object(c.a)(e)) return Object(i.a)(e);
        if (e && 'function' == typeof e[f.a]) return Object(u.a)(e);
        var t = Object(l.a)(e) ? 'an invalid object' : "'" + e + "'";
        throw new TypeError(
          'You provided ' +
            t +
            ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(13),
      o = function(e) {
        return function(t) {
          var n = e[r.a]();
          if ('function' != typeof n.subscribe)
            throw new TypeError(
              'Provided object does not correctly implement Symbol.observable'
            );
          return n.subscribe(t);
        };
      };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r = function(e) {
      return e && 'number' == typeof e.length && 'function' != typeof e;
    };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return r;
    });
    var r = function(e) {
      return function(t) {
        for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
        t.closed || t.complete();
      };
    };
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return (
        e && 'function' != typeof e.subscribe && 'function' == typeof e.then
      );
    }
    n.d(t, 'a', function() {
      return r;
    });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(16),
      o = function(e) {
        return function(t) {
          return (
            e
              .then(
                function(e) {
                  t.closed || (t.next(e), t.complete());
                },
                function(e) {
                  return t.error(e);
                }
              )
              .then(null, r.a),
            t
          );
        };
      };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(17),
      o = function(e) {
        return function(t) {
          for (var n = e[r.a](); ; ) {
            var o = n.next();
            if (o.done) {
              t.complete();
              break;
            }
            if ((t.next(o.value), t.closed)) break;
          }
          return (
            'function' == typeof n.return &&
              t.add(function() {
                n.return && n.return();
              }),
            t
          );
        };
      };
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(3);
    function o(e) {
      var t = new r.a(function(t) {
        t.next(e), t.complete();
      });
      return (t._isScalar = !0), (t.value = e), t;
    }
  },
  function(e, t) {
    function n(e) {
      return Promise.resolve().then(function() {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      });
    }
    (n.keys = function() {
      return [];
    }),
      (n.resolve = n),
      (e.exports = n),
      (n.id = 47);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    n(1), n(10);
    var r = (function() {
      function e(e) {
        this.router = e;
      }
      return (
        (e.prototype.ngOnInit = function() {
          this.router.initialNavigation();
        }),
        e
      );
    })();
    t.AppComponent = r;
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return a;
    });
    var r = n(14),
      o = n(11),
      i = n(23),
      u = n(46);
    function a() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e[e.length - 1];
      switch ((Object(r.a)(n) ? e.pop() : (n = void 0), e.length)) {
        case 0:
          return Object(i.b)(n);
        case 1:
          return n ? Object(o.a)(e, n) : Object(u.a)(e[0]);
        default:
          return Object(o.a)(e, n);
      }
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return i;
    });
    var r = n(0),
      o = n(2);
    function i(e, t) {
      return function(n) {
        return n.lift(new u(e, t));
      };
    }
    var u = (function() {
        function e(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new a(e, this.predicate, this.thisArg));
          }),
          e
        );
      })(),
      a = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (o.predicate = n), (o.thisArg = r), (o.count = 0), o;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            var t;
            try {
              t = this.predicate.call(this.thisArg, e, this.count++);
            } catch (e) {
              return void this.destination.error(e);
            }
            t && this.destination.next(e);
          }),
          t
        );
      })(o.a);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    n(1);
    var r = (function() {
      function e() {}
      return (e.prototype.ngOnInit = function() {}), e;
    })();
    t.CoreComponent = r;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    n(1);
    var r = (function() {
      function e() {}
      return (e.prototype.ngOnInit = function() {}), e;
    })();
    t.Page1Component = r;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    n(1);
    var r = (function() {
      function e() {}
      return (e.prototype.ngOnInit = function() {}), e;
    })();
    t.Page2Component = r;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    n(1);
    var r = (function() {
      function e() {}
      return (e.prototype.ngOnInit = function() {}), e;
    })();
    t.EmptyComponent = r;
  },
  function(e, t, n) {
    e.exports = n(56);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(1),
      o = n(57),
      i = n(58),
      u = n(33);
    o.environment.production && r.enableProdMode(),
      u
        .platformBrowser()
        .bootstrapModuleFactory(i.AppModuleNgFactory)
        .catch(function(e) {
          return console.error(e);
        });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.environment = { production: !0 });
  },
  function(e, t, n) {
    'use strict';
    var r = n(1),
      o = n(59),
      i = n(62),
      u = n(63),
      a = n(65),
      s = n(67),
      c = n(69),
      l = n(70),
      f = n(5),
      d = n(33),
      p = n(72),
      h = n(26),
      v = n(38),
      g = n(10),
      y = n(51),
      m = n(52),
      b = n(53),
      _ = n(54),
      w = r.ɵcmf(o.AppModule, [], function(e) {
        return r.ɵmod([
          r.ɵmpd(
            512,
            r.ComponentFactoryResolver,
            r.ɵCodegenComponentFactoryResolver,
            [
              [
                8,
                [
                  i.ɵEmptyOutletComponentNgFactory,
                  u.CoreComponentNgFactory,
                  a.Page1ComponentNgFactory,
                  s.Page2ComponentNgFactory,
                  c.EmptyComponentNgFactory,
                  l.AppComponentNgFactory
                ]
              ],
              [3, r.ComponentFactoryResolver],
              r.NgModuleRef
            ]
          ),
          r.ɵmpd(5120, r.LOCALE_ID, r.ɵangular_packages_core_core_o, [
            [3, r.LOCALE_ID]
          ]),
          r.ɵmpd(4608, f.NgLocalization, f.NgLocaleLocalization, [
            r.LOCALE_ID,
            [2, f.ɵangular_packages_common_common_a]
          ]),
          r.ɵmpd(5120, r.APP_ID, r.ɵangular_packages_core_core_g, []),
          r.ɵmpd(5120, r.IterableDiffers, r.ɵangular_packages_core_core_m, []),
          r.ɵmpd(5120, r.KeyValueDiffers, r.ɵangular_packages_core_core_n, []),
          r.ɵmpd(4608, d.DomSanitizer, d.ɵDomSanitizerImpl, [f.DOCUMENT]),
          r.ɵmpd(6144, r.Sanitizer, null, [d.DomSanitizer]),
          r.ɵmpd(4608, d.HAMMER_GESTURE_CONFIG, d.HammerGestureConfig, []),
          r.ɵmpd(
            5120,
            d.EVENT_MANAGER_PLUGINS,
            function(e, t, n, r, o, i, u, a) {
              return [
                new d.ɵDomEventsPlugin(e, t, n),
                new d.ɵKeyEventsPlugin(r),
                new d.ɵHammerGesturesPlugin(o, i, u, a)
              ];
            },
            [
              f.DOCUMENT,
              r.NgZone,
              r.PLATFORM_ID,
              f.DOCUMENT,
              f.DOCUMENT,
              d.HAMMER_GESTURE_CONFIG,
              r.ɵConsole,
              [2, d.HAMMER_LOADER]
            ]
          ),
          r.ɵmpd(4608, d.EventManager, d.EventManager, [
            d.EVENT_MANAGER_PLUGINS,
            r.NgZone
          ]),
          r.ɵmpd(135680, d.ɵDomSharedStylesHost, d.ɵDomSharedStylesHost, [
            f.DOCUMENT
          ]),
          r.ɵmpd(4608, d.ɵDomRendererFactory2, d.ɵDomRendererFactory2, [
            d.EventManager,
            d.ɵDomSharedStylesHost
          ]),
          r.ɵmpd(6144, r.RendererFactory2, null, [d.ɵDomRendererFactory2]),
          r.ɵmpd(6144, d.ɵSharedStylesHost, null, [d.ɵDomSharedStylesHost]),
          r.ɵmpd(4608, r.Testability, r.Testability, [r.NgZone]),
          r.ɵmpd(4608, p.DataPersistence, p.DataPersistence, [
            h.Store,
            v.Actions
          ]),
          r.ɵmpd(5120, g.ActivatedRoute, g.ɵangular_packages_router_router_g, [
            g.Router
          ]),
          r.ɵmpd(4608, g.NoPreloading, g.NoPreloading, []),
          r.ɵmpd(6144, g.PreloadingStrategy, null, [g.NoPreloading]),
          r.ɵmpd(135680, g.RouterPreloader, g.RouterPreloader, [
            g.Router,
            r.NgModuleFactoryLoader,
            r.Compiler,
            r.Injector,
            g.PreloadingStrategy
          ]),
          r.ɵmpd(4608, g.PreloadAllModules, g.PreloadAllModules, []),
          r.ɵmpd(
            5120,
            g.ɵangular_packages_router_router_n,
            g.ɵangular_packages_router_router_c,
            [g.Router, f.ViewportScroller, g.ROUTER_CONFIGURATION]
          ),
          r.ɵmpd(
            5120,
            g.ROUTER_INITIALIZER,
            g.ɵangular_packages_router_router_j,
            [g.ɵangular_packages_router_router_h]
          ),
          r.ɵmpd(
            5120,
            r.APP_BOOTSTRAP_LISTENER,
            function(e) {
              return [e];
            },
            [g.ROUTER_INITIALIZER]
          ),
          r.ɵmpd(1073742336, f.CommonModule, f.CommonModule, []),
          r.ɵmpd(
            1024,
            r.ErrorHandler,
            d.ɵangular_packages_platform_browser_platform_browser_a,
            []
          ),
          r.ɵmpd(
            1024,
            r.NgProbeToken,
            function() {
              return [g.ɵangular_packages_router_router_b()];
            },
            []
          ),
          r.ɵmpd(
            512,
            g.ɵangular_packages_router_router_h,
            g.ɵangular_packages_router_router_h,
            [r.Injector]
          ),
          r.ɵmpd(
            1024,
            r.APP_INITIALIZER,
            function(e, t) {
              return [
                d.ɵangular_packages_platform_browser_platform_browser_j(e),
                g.ɵangular_packages_router_router_i(t)
              ];
            },
            [[2, r.NgProbeToken], g.ɵangular_packages_router_router_h]
          ),
          r.ɵmpd(512, r.ApplicationInitStatus, r.ApplicationInitStatus, [
            [2, r.APP_INITIALIZER]
          ]),
          r.ɵmpd(131584, r.ApplicationRef, r.ApplicationRef, [
            r.NgZone,
            r.ɵConsole,
            r.Injector,
            r.ErrorHandler,
            r.ComponentFactoryResolver,
            r.ApplicationInitStatus
          ]),
          r.ɵmpd(1073742336, r.ApplicationModule, r.ApplicationModule, [
            r.ApplicationRef
          ]),
          r.ɵmpd(1073742336, d.BrowserModule, d.BrowserModule, [
            [3, d.BrowserModule]
          ]),
          r.ɵmpd(1073742336, p.NxModule, p.NxModule, []),
          r.ɵmpd(
            1024,
            g.ɵangular_packages_router_router_a,
            g.ɵangular_packages_router_router_e,
            [[3, g.Router]]
          ),
          r.ɵmpd(512, g.UrlSerializer, g.DefaultUrlSerializer, []),
          r.ɵmpd(512, g.ChildrenOutletContexts, g.ChildrenOutletContexts, []),
          r.ɵmpd(
            256,
            g.ROUTER_CONFIGURATION,
            { initialNavigation: 'enabled', useHash: !0 },
            []
          ),
          r.ɵmpd(
            1024,
            f.LocationStrategy,
            g.ɵangular_packages_router_router_d,
            [f.PlatformLocation, [2, f.APP_BASE_HREF], g.ROUTER_CONFIGURATION]
          ),
          r.ɵmpd(512, f.Location, f.Location, [f.LocationStrategy]),
          r.ɵmpd(512, r.Compiler, r.Compiler, []),
          r.ɵmpd(512, r.NgModuleFactoryLoader, r.SystemJsNgModuleLoader, [
            r.Compiler,
            [2, r.SystemJsNgModuleLoaderConfig]
          ]),
          r.ɵmpd(
            1024,
            g.ROUTES,
            function() {
              return [
                [
                  {
                    path: 'examination',
                    component: y.CoreComponent,
                    children: [
                      { path: 'page1', component: m.Page1Component },
                      { path: 'page2', component: b.Page2Component }
                    ]
                  },
                  { path: '**', component: _.EmptyComponent }
                ]
              ];
            },
            []
          ),
          r.ɵmpd(1024, g.Router, g.ɵangular_packages_router_router_f, [
            r.ApplicationRef,
            g.UrlSerializer,
            g.ChildrenOutletContexts,
            f.Location,
            r.Injector,
            r.NgModuleFactoryLoader,
            r.Compiler,
            g.ROUTES,
            g.ROUTER_CONFIGURATION,
            [2, g.UrlHandlingStrategy],
            [2, g.RouteReuseStrategy]
          ]),
          r.ɵmpd(1073742336, g.RouterModule, g.RouterModule, [
            [2, g.ɵangular_packages_router_router_a],
            [2, g.Router]
          ]),
          r.ɵmpd(1073742336, o.AppModule, o.AppModule, [r.Injector]),
          r.ɵmpd(256, r.ɵAPP_ROOT, !0, [])
        ]);
      });
    t.AppModuleNgFactory = w;
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    n(1);
    var r = n(48),
      o = n(61),
      i = (function() {
        function e(e) {
          this.injector = e;
        }
        return (
          (e.prototype.ngDoBootstrap = function() {
            var e = o.createCustomElement(r.AppComponent, {
              injector: this.injector
            });
            customElements.define('app-examination', e);
          }),
          e
        );
      })();
    t.AppModule = i;
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return i;
    });
    var r = n(0),
      o = n(2);
    function i(e, t) {
      var n = !1;
      return (
        arguments.length >= 2 && (n = !0),
        function(r) {
          return r.lift(new u(e, t, n));
        }
      );
    }
    var u = (function() {
        function e(e, t, n) {
          void 0 === n && (n = !1),
            (this.accumulator = e),
            (this.seed = t),
            (this.hasSeed = n);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(
              new a(e, this.accumulator, this.seed, this.hasSeed)
            );
          }),
          e
        );
      })(),
      a = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          return (
            (i.accumulator = n),
            (i._seed = r),
            (i.hasSeed = o),
            (i.index = 0),
            i
          );
        }
        return (
          r.c(t, e),
          Object.defineProperty(t.prototype, 'seed', {
            get: function() {
              return this._seed;
            },
            set: function(e) {
              (this.hasSeed = !0), (this._seed = e);
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype._next = function(e) {
            if (this.hasSeed) return this._tryNext(e);
            (this.seed = e), this.destination.next(e);
          }),
          (t.prototype._tryNext = function(e) {
            var t,
              n = this.index++;
            try {
              t = this.accumulator(this.seed, e, n);
            } catch (e) {
              this.destination.error(e);
            }
            (this.seed = t), this.destination.next(t);
          }),
          t
        );
      })(o.a);
  },
  function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'NgElement', function() {
        return p;
      }),
      n.d(t, 'createCustomElement', function() {
        return h;
      }),
      n.d(t, 'VERSION', function() {
        return v;
      });
    var r = n(1),
      o = n(0),
      i = n(73),
      u = n(25),
      a = Element.prototype,
      s =
        a.matches ||
        a.matchesSelector ||
        a.mozMatchesSelector ||
        a.msMatchesSelector ||
        a.oMatchesSelector ||
        a.webkitMatchesSelector,
      c = {
        schedule: function(e, t) {
          var n = setTimeout(e, t);
          return function() {
            return clearTimeout(n);
          };
        },
        scheduleBeforeRender: function(e) {
          if ('undefined' == typeof window) return c.schedule(e, 0);
          if (void 0 === window.requestAnimationFrame) {
            return c.schedule(e, 16);
          }
          var t = window.requestAnimationFrame(e);
          return function() {
            return window.cancelAnimationFrame(t);
          };
        }
      };
    function l(e, t, n) {
      var r = n;
      return (
        (function(e) {
          return !!e && e.nodeType === Node.ELEMENT_NODE;
        })(e) &&
          t.some(function(t, n) {
            return (
              !(
                '*' === t ||
                !(function(e, t) {
                  return s.call(e, t);
                })(e, t)
              ) && ((r = n), !0)
            );
          }),
        r
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var f = (function() {
        function e(e, t) {
          (this.component = e),
            (this.injector = t),
            (this.componentFactory = t
              .get(r.ComponentFactoryResolver)
              .resolveComponentFactory(e));
        }
        return (
          (e.prototype.create = function(e) {
            return new d(this.componentFactory, e);
          }),
          e
        );
      })(),
      d = (function() {
        function e(e, t) {
          (this.componentFactory = e),
            (this.injector = t),
            (this.inputChanges = null),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.uninitializedInputs = new Set());
        }
        return (
          (e.prototype.connect = function(e) {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            this.componentRef || this.initializeComponent(e);
          }),
          (e.prototype.disconnect = function() {
            var e = this;
            this.componentRef &&
              null === this.scheduledDestroyFn &&
              (this.scheduledDestroyFn = c.schedule(function() {
                e.componentRef &&
                  (e.componentRef.destroy(), (e.componentRef = null));
              }, 10));
          }),
          (e.prototype.getInputValue = function(e) {
            return this.componentRef
              ? this.componentRef.instance[e]
              : this.initialInputValues.get(e);
          }),
          (e.prototype.setInputValue = function(e, t) {
            (function(e, t) {
              return e === t || (e != e && t != t);
            })(t, this.getInputValue(e)) ||
              (this.componentRef
                ? (this.recordInputChange(e, t),
                  (this.componentRef.instance[e] = t),
                  this.scheduleDetectChanges())
                : this.initialInputValues.set(e, t));
          }),
          (e.prototype.initializeComponent = function(e) {
            var t = r.Injector.create({ providers: [], parent: this.injector }),
              n =
                /**
                 * @license
                 * Copyright Google Inc. All Rights Reserved.
                 *
                 * Use of this source code is governed by an MIT-style license that can be
                 * found in the LICENSE file at https://angular.io/license
                 */
                (function(e, t) {
                  var n = e.childNodes,
                    r = t.map(function() {
                      return [];
                    }),
                    o = -1;
                  t.some(function(e, t) {
                    return '*' === e && ((o = t), !0);
                  });
                  for (var i = 0, u = n.length; i < u; ++i) {
                    var a = n[i],
                      s = l(a, t, o);
                    -1 !== s && r[s].push(a);
                  }
                  return r;
                })(e, this.componentFactory.ngContentSelectors);
            (this.componentRef = this.componentFactory.create(t, n, e)),
              (this.implementsOnChanges = (function(e) {
                return 'function' == typeof e;
              })(this.componentRef.instance.ngOnChanges)),
              this.initializeInputs(),
              this.initializeOutputs(),
              this.detectChanges(),
              this.injector
                .get(r.ApplicationRef)
                .attachView(this.componentRef.hostView);
          }),
          (e.prototype.initializeInputs = function() {
            var e = this;
            this.componentFactory.inputs.forEach(function(t) {
              var n = t.propName,
                r = e.initialInputValues.get(n);
              r ? e.setInputValue(n, r) : e.uninitializedInputs.add(n);
            }),
              this.initialInputValues.clear();
          }),
          (e.prototype.initializeOutputs = function() {
            var e = this,
              t = this.componentFactory.outputs.map(function(t) {
                var n = t.propName,
                  r = t.templateName;
                return e.componentRef.instance[n].pipe(
                  Object(u.a)(function(e) {
                    return { name: r, value: e };
                  })
                );
              });
            this.events = i.a.apply(void 0, Object(o.g)(t));
          }),
          (e.prototype.callNgOnChanges = function() {
            if (this.implementsOnChanges && null !== this.inputChanges) {
              var e = this.inputChanges;
              (this.inputChanges = null),
                this.componentRef.instance.ngOnChanges(e);
            }
          }),
          (e.prototype.scheduleDetectChanges = function() {
            var e = this;
            this.scheduledChangeDetectionFn ||
              (this.scheduledChangeDetectionFn = c.scheduleBeforeRender(
                function() {
                  (e.scheduledChangeDetectionFn = null), e.detectChanges();
                }
              ));
          }),
          (e.prototype.recordInputChange = function(e, t) {
            if (!this.componentRef || this.implementsOnChanges) {
              null === this.inputChanges && (this.inputChanges = {});
              var n = this.inputChanges[e];
              if (n) n.currentValue = t;
              else {
                var o = this.uninitializedInputs.has(e);
                this.uninitializedInputs.delete(e);
                var i = o ? void 0 : this.getInputValue(e);
                this.inputChanges[e] = new r.SimpleChange(i, t, o);
              }
            }
          }),
          (e.prototype.detectChanges = function() {
            this.componentRef &&
              (this.callNgOnChanges(),
              this.componentRef.changeDetectorRef.detectChanges());
          }),
          e
        );
      })(),
      p = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.ngElementEventsSubscription = null), t;
        }
        return Object(o.c)(t, e), t;
      })(HTMLElement);
    function h(e, t) {
      var n = (function(e, t) {
          return t.get(r.ComponentFactoryResolver).resolveComponentFactory(e)
            .inputs;
        })(e, t.injector),
        i = t.strategyFactory || new f(e, t.injector),
        u = (function(e) {
          var t = {};
          return (
            e.forEach(function(e) {
              var n = e.propName,
                r = e.templateName;
              t[
                (function(e) {
                  return e.replace(/[A-Z]/g, function(e) {
                    return '-' + e.toLowerCase();
                  });
                })(r)
              ] = n;
            }),
            t
          );
        })(n),
        a = (function(e) {
          function n(n) {
            var r = e.call(this) || this;
            return (r.ngElementStrategy = i.create(n || t.injector)), r;
          }
          return (
            Object(o.c)(n, e),
            (n.prototype.attributeChangedCallback = function(e, n, r, o) {
              this.ngElementStrategy ||
                (this.ngElementStrategy = i.create(t.injector));
              var a = u[e];
              this.ngElementStrategy.setInputValue(a, r);
            }),
            (n.prototype.connectedCallback = function() {
              var e = this;
              this.ngElementStrategy ||
                (this.ngElementStrategy = i.create(t.injector)),
                this.ngElementStrategy.connect(this),
                (this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(
                  function(t) {
                    var n = (function(e, t, n) {
                      if ('function' != typeof CustomEvent) {
                        var r = e.createEvent('CustomEvent');
                        return r.initCustomEvent(t, !1, !1, n), r;
                      }
                      return new CustomEvent(t, {
                        bubbles: !1,
                        cancelable: !1,
                        detail: n
                      });
                    })(e.ownerDocument, t.name, t.value);
                    e.dispatchEvent(n);
                  }
                ));
            }),
            (n.prototype.disconnectedCallback = function() {
              this.ngElementStrategy && this.ngElementStrategy.disconnect(),
                this.ngElementEventsSubscription &&
                  (this.ngElementEventsSubscription.unsubscribe(),
                  (this.ngElementEventsSubscription = null));
            }),
            (n.observedAttributes = Object.keys(u)),
            n
          );
        })(p);
      return (
        n
          .map(function(e) {
            return e.propName;
          })
          .forEach(function(e) {
            Object.defineProperty(a.prototype, e, {
              get: function() {
                return this.ngElementStrategy.getInputValue(e);
              },
              set: function(t) {
                this.ngElementStrategy.setInputValue(e, t);
              },
              configurable: !0,
              enumerable: !0
            });
          }),
        a
      );
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */ var v = new r.Version('7.1.1');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
  },
  function(e, t, n) {
    'use strict';
    var r = n(1),
      o = n(10),
      i = r.ɵcmf(o.RouterModule, [], function(e) {
        return r.ɵmod([
          r.ɵmpd(
            512,
            r.ComponentFactoryResolver,
            r.ɵCodegenComponentFactoryResolver,
            [[8, [c]], [3, r.ComponentFactoryResolver], r.NgModuleRef]
          ),
          r.ɵmpd(1073742336, o.RouterModule, o.RouterModule, [
            [2, o.ɵangular_packages_router_router_a],
            [2, o.Router]
          ])
        ]);
      });
    t.RouterModuleNgFactory = i;
    var u = r.ɵcrt({ encapsulation: 2, styles: [], data: {} });
    function a(e) {
      return r.ɵvid(
        0,
        [
          (e()(),
          r.ɵeld(
            0,
            16777216,
            null,
            null,
            1,
            'router-outlet',
            [],
            null,
            null,
            null,
            null,
            null
          )),
          r.ɵdid(
            1,
            212992,
            null,
            0,
            o.RouterOutlet,
            [
              o.ChildrenOutletContexts,
              r.ViewContainerRef,
              r.ComponentFactoryResolver,
              [8, null],
              r.ChangeDetectorRef
            ],
            null,
            null
          )
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    function s(e) {
      return r.ɵvid(
        0,
        [
          (e()(),
          r.ɵeld(
            0,
            0,
            null,
            null,
            1,
            'ng-component',
            [],
            null,
            null,
            null,
            a,
            u
          )),
          r.ɵdid(1, 49152, null, 0, o.ɵEmptyOutletComponent, [], null, null)
        ],
        null,
        null
      );
    }
    (t.RenderType_ɵEmptyOutletComponent = u),
      (t.View_ɵEmptyOutletComponent_0 = a),
      (t.View_ɵEmptyOutletComponent_Host_0 = s);
    var c = r.ɵccf('ng-component', o.ɵEmptyOutletComponent, s, {}, {}, []);
    t.ɵEmptyOutletComponentNgFactory = c;
  },
  function(e, t, n) {
    'use strict';
    var r = n(64),
      o = n(1),
      i = n(10),
      u = n(5),
      a = n(51),
      s = [r.styles],
      c = o.ɵcrt({ encapsulation: 0, styles: s, data: {} });
    function l(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(
            0,
            0,
            null,
            null,
            12,
            'div',
            [['id', 'examination']],
            null,
            null,
            null,
            null,
            null
          )),
          (e()(),
          o.ɵeld(
            1,
            0,
            null,
            null,
            9,
            'div',
            [['class', 'card']],
            null,
            null,
            null,
            null,
            null
          )),
          (e()(), o.ɵted(-1, null, [' Examination '])),
          (e()(),
          o.ɵeld(
            3,
            0,
            null,
            null,
            7,
            'div',
            [['class', 'content']],
            null,
            null,
            null,
            null,
            null
          )),
          (e()(),
          o.ɵeld(
            4,
            0,
            null,
            null,
            2,
            'a',
            [['routerLink', 'page1']],
            [[1, 'target', 0], [8, 'href', 4]],
            [[null, 'click']],
            function(e, t, n) {
              var r = !0;
              'click' === t &&
                (r =
                  !1 !==
                    o
                      .ɵnov(e, 5)
                      .onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) &&
                  r);
              return r;
            },
            null,
            null
          )),
          o.ɵdid(
            5,
            671744,
            null,
            0,
            i.RouterLinkWithHref,
            [i.Router, i.ActivatedRoute, u.LocationStrategy],
            { routerLink: [0, 'routerLink'] },
            null
          ),
          (e()(), o.ɵted(-1, null, ['Page 1'])),
          (e()(), o.ɵted(-1, null, [' | '])),
          (e()(),
          o.ɵeld(
            8,
            0,
            null,
            null,
            2,
            'a',
            [['routerLink', 'page2']],
            [[1, 'target', 0], [8, 'href', 4]],
            [[null, 'click']],
            function(e, t, n) {
              var r = !0;
              'click' === t &&
                (r =
                  !1 !==
                    o
                      .ɵnov(e, 9)
                      .onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) &&
                  r);
              return r;
            },
            null,
            null
          )),
          o.ɵdid(
            9,
            671744,
            null,
            0,
            i.RouterLinkWithHref,
            [i.Router, i.ActivatedRoute, u.LocationStrategy],
            { routerLink: [0, 'routerLink'] },
            null
          ),
          (e()(), o.ɵted(-1, null, ['Page 2'])),
          (e()(),
          o.ɵeld(
            11,
            16777216,
            null,
            null,
            1,
            'router-outlet',
            [],
            null,
            null,
            null,
            null,
            null
          )),
          o.ɵdid(
            12,
            212992,
            null,
            0,
            i.RouterOutlet,
            [
              i.ChildrenOutletContexts,
              o.ViewContainerRef,
              o.ComponentFactoryResolver,
              [8, null],
              o.ChangeDetectorRef
            ],
            null,
            null
          )
        ],
        function(e, t) {
          e(t, 5, 0, 'page1');
          e(t, 9, 0, 'page2'), e(t, 12, 0);
        },
        function(e, t) {
          e(t, 4, 0, o.ɵnov(t, 5).target, o.ɵnov(t, 5).href),
            e(t, 8, 0, o.ɵnov(t, 9).target, o.ɵnov(t, 9).href);
        }
      );
    }
    function f(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(0, 0, null, null, 1, 'SVIS-core', [], null, null, null, l, c)),
          o.ɵdid(1, 114688, null, 0, a.CoreComponent, [], null, null)
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    (t.RenderType_CoreComponent = c),
      (t.View_CoreComponent_0 = l),
      (t.View_CoreComponent_Host_0 = f);
    var d = o.ɵccf('SVIS-core', a.CoreComponent, f, {}, {}, []);
    t.CoreComponentNgFactory = d;
  },
  function(e, t, n) {
    'use strict';
    t.styles = [''];
  },
  function(e, t, n) {
    'use strict';
    var r = n(66),
      o = n(1),
      i = n(52),
      u = [r.styles],
      a = o.ɵcrt({ encapsulation: 0, styles: u, data: {} });
    function s(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(0, 0, null, null, 1, 'p', [], null, null, null, null, null)),
          (e()(), o.ɵted(-1, null, [' page1 works!\n'])),
          (e()(),
          o.ɵeld(
            2,
            0,
            null,
            null,
            0,
            'img',
            [
              ['src', 'assets/Angular_full_color_logo.svg.png'],
              ['style', 'width:250px;height:250px;']
            ],
            null,
            null,
            null,
            null,
            null
          ))
        ],
        null,
        null
      );
    }
    function c(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(
            0,
            0,
            null,
            null,
            1,
            'SVIS-page1',
            [],
            null,
            null,
            null,
            s,
            a
          )),
          o.ɵdid(1, 114688, null, 0, i.Page1Component, [], null, null)
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    (t.RenderType_Page1Component = a),
      (t.View_Page1Component_0 = s),
      (t.View_Page1Component_Host_0 = c);
    var l = o.ɵccf('SVIS-page1', i.Page1Component, c, {}, {}, []);
    t.Page1ComponentNgFactory = l;
  },
  function(e, t, n) {
    'use strict';
    t.styles = [''];
  },
  function(e, t, n) {
    'use strict';
    var r = n(68),
      o = n(1),
      i = n(53),
      u = [r.styles],
      a = o.ɵcrt({ encapsulation: 0, styles: u, data: {} });
    function s(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(0, 0, null, null, 1, 'p', [], null, null, null, null, null)),
          (e()(), o.ɵted(-1, null, [' page2 works!\n']))
        ],
        null,
        null
      );
    }
    function c(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(
            0,
            0,
            null,
            null,
            1,
            'SVIS-page2',
            [],
            null,
            null,
            null,
            s,
            a
          )),
          o.ɵdid(1, 114688, null, 0, i.Page2Component, [], null, null)
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    (t.RenderType_Page2Component = a),
      (t.View_Page2Component_0 = s),
      (t.View_Page2Component_Host_0 = c);
    var l = o.ɵccf('SVIS-page2', i.Page2Component, c, {}, {}, []);
    t.Page2ComponentNgFactory = l;
  },
  function(e, t, n) {
    'use strict';
    t.styles = [''];
  },
  function(e, t, n) {
    'use strict';
    var r = n(1),
      o = n(54),
      i = r.ɵcrt({ encapsulation: 2, styles: [], data: {} });
    function u(e) {
      return r.ɵvid(0, [], null, null);
    }
    function a(e) {
      return r.ɵvid(
        0,
        [
          (e()(),
          r.ɵeld(
            0,
            0,
            null,
            null,
            1,
            'ng-component',
            [],
            null,
            null,
            null,
            u,
            i
          )),
          r.ɵdid(1, 114688, null, 0, o.EmptyComponent, [], null, null)
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    (t.RenderType_EmptyComponent = i),
      (t.View_EmptyComponent_0 = u),
      (t.View_EmptyComponent_Host_0 = a);
    var s = r.ɵccf('ng-component', o.EmptyComponent, a, {}, {}, []);
    t.EmptyComponentNgFactory = s;
  },
  function(e, t, n) {
    'use strict';
    var r = n(71),
      o = n(1),
      i = n(10),
      u = n(48),
      a = [r.styles],
      s = o.ɵcrt({ encapsulation: 0, styles: a, data: {} });
    function c(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(
            0,
            16777216,
            null,
            null,
            1,
            'router-outlet',
            [],
            null,
            null,
            null,
            null,
            null
          )),
          o.ɵdid(
            1,
            212992,
            null,
            0,
            i.RouterOutlet,
            [
              i.ChildrenOutletContexts,
              o.ViewContainerRef,
              o.ComponentFactoryResolver,
              [8, null],
              o.ChangeDetectorRef
            ],
            null,
            null
          )
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    function l(e) {
      return o.ɵvid(
        0,
        [
          (e()(),
          o.ɵeld(0, 0, null, null, 1, 'SVIS-root', [], null, null, null, c, s)),
          o.ɵdid(1, 114688, null, 0, u.AppComponent, [i.Router], null, null)
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    (t.RenderType_AppComponent = s),
      (t.View_AppComponent_0 = c),
      (t.View_AppComponent_Host_0 = l);
    var f = o.ɵccf('SVIS-root', u.AppComponent, l, {}, {}, []);
    t.AppComponentNgFactory = f;
  },
  function(e, t, n) {
    'use strict';
    t.styles = [''];
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n(38),
      i = (n(1), n(10), n(26), n(49)),
      u = (Object.assign, 'ROUTER_NAVIGATION');
    var a = n(3),
      s = n(77),
      c = n(78),
      l = n(37),
      f = n(76),
      d = n(50),
      p = n(25),
      h = n(75),
      v = n(79);
    function g(e) {
      return function(t) {
        return t.pipe(
          C(),
          Object(s.a)(w(e.run, e.onError))
        );
      };
    }
    function y(e) {
      return function(t) {
        return t.pipe(
          C(),
          Object(s.a)(w(e.run, e.undoAction))
        );
      };
    }
    function m(e) {
      return function(t) {
        return e.id
          ? t
              .pipe(
                C(),
                Object(c.a)(function(t) {
                  var n = r.f(t, 2),
                    o = n[0],
                    i = n[1];
                  return e.id(o, i);
                })
              )
              .pipe(
                Object(l.a)(function(t) {
                  return t.pipe(Object(f.a)(w(e.run, e.onError)));
                })
              )
          : t.pipe(
              C(),
              Object(s.a)(w(e.run, e.onError))
            );
      };
    }
    function b(e, t) {
      return function(n) {
        return n
          .pipe(
            C(),
            Object(d.a)(function(e) {
              var t = r.f(e, 2),
                n = t[0];
              t[1];
              return _(n);
            }),
            Object(p.a)(function(t) {
              var n = r.f(t, 2),
                o = n[0],
                i = n[1];
              if (_(o))
                return [
                  (function e(t, n) {
                    var o, i;
                    if (n.routeConfig && n.routeConfig.component === t)
                      return n;
                    try {
                      for (
                        var u = r.h(n.children), a = u.next();
                        !a.done;
                        a = u.next()
                      ) {
                        var s = a.value,
                          c = e(t, s);
                        if (c) return c;
                      }
                    } catch (e) {
                      o = { error: e };
                    } finally {
                      try {
                        a && !a.done && (i = u.return) && i.call(u);
                      } finally {
                        if (o) throw o.error;
                      }
                    }
                    return null;
                  })(e, o.payload.routerState.root),
                  i
                ];
            }),
            Object(d.a)(function(e) {
              var t = r.f(e, 2),
                n = t[0];
              t[1];
              return !!n;
            })
          )
          .pipe(Object(f.a)(w(t.run, t.onError)));
      };
    }
    function _(e) {
      return e.type === u;
    }
    function w(e, t) {
      return function(n) {
        var o = r.f(n, 2),
          i = o[0],
          u = o[1];
        try {
          return E(e(i, u)).pipe(
            Object(h.a)(function(e) {
              return E(t(i, e));
            })
          );
        } catch (e) {
          return E(t(i, e));
        }
      };
    }
    function C() {
      return function(e) {
        return e.pipe(
          Object(p.a)(function(e) {
            var t = r.f(
              (function(e) {
                var t, n, o;
                e instanceof Array
                  ? ((t = r.f(e, 2)), (n = t[0]), (o = t[1]))
                  : (n = e);
                return [n, o];
              })(e),
              2
            );
            return [t[0], t[1]];
          })
        );
      };
    }
    var D = (function() {
      function e(e, t) {
        (this.store = e), (this.actions = t);
      }
      return (
        (e.prototype.pessimisticUpdate = function(e, t) {
          return this.actions.pipe(
            Object(o.ofType)(e),
            Object(v.a)(this.store),
            g(t)
          );
        }),
        (e.prototype.optimisticUpdate = function(e, t) {
          return this.actions.pipe(
            Object(o.ofType)(e),
            Object(v.a)(this.store),
            y(t)
          );
        }),
        (e.prototype.fetch = function(e, t) {
          return this.actions.pipe(
            Object(o.ofType)(e),
            Object(v.a)(this.store),
            m(t)
          );
        }),
        (e.prototype.navigation = function(e, t) {
          return this.actions.pipe(
            Object(v.a)(this.store),
            b(e, t)
          );
        }),
        e
      );
    })();
    function E(e) {
      return e && e instanceof a.a ? e : e ? Object(i.a)(e) : Object(i.a)();
    }
    var O = (function() {
      function e() {}
      return (
        (e.forRoot = function() {
          return { ngModule: e, providers: [D] };
        }),
        e
      );
    })();
    n.d(t, 'DataPersistence', function() {
      return D;
    }),
      n.d(t, 'fetch', function() {
        return m;
      }),
      n.d(t, 'navigation', function() {
        return b;
      }),
      n.d(t, 'optimisticUpdate', function() {
        return y;
      }),
      n.d(t, 'pessimisticUpdate', function() {
        return g;
      }),
      n.d(t, 'NxModule', function() {
        return O;
      });
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return a;
    });
    var r = n(3),
      o = n(14),
      i = n(36),
      u = n(11);
    function a() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = Number.POSITIVE_INFINITY,
        a = null,
        s = e[e.length - 1];
      return (
        Object(o.a)(s)
          ? ((a = e.pop()),
            e.length > 1 && 'number' == typeof e[e.length - 1] && (n = e.pop()))
          : 'number' == typeof s && (n = e.pop()),
        null === a && 1 === e.length && e[0] instanceof r.a
          ? e[0]
          : Object(i.a)(n)(Object(u.a)(e, a))
      );
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return u;
    });
    var r = n(0),
      o = n(27),
      i = n(18),
      u = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._value = t), n;
        }
        return (
          r.c(t, e),
          Object.defineProperty(t.prototype, 'value', {
            get: function() {
              return this.getValue();
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype._subscribe = function(t) {
            var n = e.prototype._subscribe.call(this, t);
            return n && !n.closed && t.next(this._value), n;
          }),
          (t.prototype.getValue = function() {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new i.a();
            return this._value;
          }),
          (t.prototype.next = function(t) {
            e.prototype.next.call(this, (this._value = t));
          }),
          t
        );
      })(o.a);
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return a;
    });
    var r = n(0),
      o = n(9),
      i = n(15),
      u = n(8);
    function a(e) {
      return function(t) {
        var n = new s(e),
          r = t.lift(n);
        return (n.caught = r);
      };
    }
    var s = (function() {
        function e(e) {
          this.selector = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new c(e, this.selector, this.caught));
          }),
          e
        );
      })(),
      c = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (o.selector = n), (o.caught = r), o;
        }
        return (
          r.c(t, e),
          (t.prototype.error = function(t) {
            if (!this.isStopped) {
              var n = void 0;
              try {
                n = this.selector(t, this.caught);
              } catch (t) {
                return void e.prototype.error.call(this, t);
              }
              this._unsubscribeAndRecycle();
              var r = new i.a(this, void 0, void 0);
              this.add(r), Object(u.a)(this, n, void 0, void 0, r);
            }
          }),
          t
        );
      })(o.a);
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return c;
    });
    var r = n(0),
      o = n(9),
      i = n(15),
      u = n(8),
      a = n(25),
      s = n(24);
    function c(e, t) {
      return 'function' == typeof t
        ? function(n) {
            return n.pipe(
              c(function(n, r) {
                return Object(s.a)(e(n, r)).pipe(
                  Object(a.a)(function(e, o) {
                    return t(n, e, r, o);
                  })
                );
              })
            );
          }
        : function(t) {
            return t.lift(new l(e));
          };
    }
    var l = (function() {
        function e(e) {
          this.project = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new f(e, this.project));
          }),
          e
        );
      })(),
      f = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.project = n), (r.index = 0), r;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            var t,
              n = this.index++;
            try {
              t = this.project(e, n);
            } catch (e) {
              return void this.destination.error(e);
            }
            this._innerSub(t, e, n);
          }),
          (t.prototype._innerSub = function(e, t, n) {
            var r = this.innerSubscription;
            r && r.unsubscribe();
            var o = new i.a(this, void 0, void 0);
            this.destination.add(o),
              (this.innerSubscription = Object(u.a)(this, e, t, n, o));
          }),
          (t.prototype._complete = function() {
            var t = this.innerSubscription;
            (t && !t.closed) || e.prototype._complete.call(this),
              this.unsubscribe();
          }),
          (t.prototype._unsubscribe = function() {
            this.innerSubscription = null;
          }),
          (t.prototype.notifyComplete = function(t) {
            this.destination.remove(t),
              (this.innerSubscription = null),
              this.isStopped && e.prototype._complete.call(this);
          }),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          t
        );
      })(o.a);
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return o;
    });
    var r = n(37);
    function o(e, t) {
      return Object(r.a)(e, t, 1);
    }
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return s;
    });
    var r = n(0),
      o = n(2),
      i = n(4),
      u = n(3),
      a = n(27);
    function s(e, t, n, r) {
      return function(o) {
        return o.lift(new c(e, t, n, r));
      };
    }
    var c = (function() {
        function e(e, t, n, r) {
          (this.keySelector = e),
            (this.elementSelector = t),
            (this.durationSelector = n),
            (this.subjectSelector = r);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(
              new l(
                e,
                this.keySelector,
                this.elementSelector,
                this.durationSelector,
                this.subjectSelector
              )
            );
          }),
          e
        );
      })(),
      l = (function(e) {
        function t(t, n, r, o, i) {
          var u = e.call(this, t) || this;
          return (
            (u.keySelector = n),
            (u.elementSelector = r),
            (u.durationSelector = o),
            (u.subjectSelector = i),
            (u.groups = null),
            (u.attemptedToUnsubscribe = !1),
            (u.count = 0),
            u
          );
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            var t;
            try {
              t = this.keySelector(e);
            } catch (e) {
              return void this.error(e);
            }
            this._group(e, t);
          }),
          (t.prototype._group = function(e, t) {
            var n = this.groups;
            n || (n = this.groups = new Map());
            var r,
              o = n.get(t);
            if (this.elementSelector)
              try {
                r = this.elementSelector(e);
              } catch (e) {
                this.error(e);
              }
            else r = e;
            if (!o) {
              (o = this.subjectSelector ? this.subjectSelector() : new a.a()),
                n.set(t, o);
              var i = new d(t, o, this);
              if ((this.destination.next(i), this.durationSelector)) {
                var u = void 0;
                try {
                  u = this.durationSelector(new d(t, o));
                } catch (e) {
                  return void this.error(e);
                }
                this.add(u.subscribe(new f(t, o, this)));
              }
            }
            o.closed || o.next(r);
          }),
          (t.prototype._error = function(e) {
            var t = this.groups;
            t &&
              (t.forEach(function(t, n) {
                t.error(e);
              }),
              t.clear()),
              this.destination.error(e);
          }),
          (t.prototype._complete = function() {
            var e = this.groups;
            e &&
              (e.forEach(function(e, t) {
                e.complete();
              }),
              e.clear()),
              this.destination.complete();
          }),
          (t.prototype.removeGroup = function(e) {
            this.groups.delete(e);
          }),
          (t.prototype.unsubscribe = function() {
            this.closed ||
              ((this.attemptedToUnsubscribe = !0),
              0 === this.count && e.prototype.unsubscribe.call(this));
          }),
          t
        );
      })(o.a),
      f = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, n) || this;
          return (o.key = t), (o.group = n), (o.parent = r), o;
        }
        return (
          r.c(t, e),
          (t.prototype._next = function(e) {
            this.complete();
          }),
          (t.prototype._unsubscribe = function() {
            var e = this.parent,
              t = this.key;
            (this.key = this.parent = null), e && e.removeGroup(t);
          }),
          t
        );
      })(o.a),
      d = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o.key = t), (o.groupSubject = n), (o.refCountSubscription = r), o
          );
        }
        return (
          r.c(t, e),
          (t.prototype._subscribe = function(e) {
            var t = new i.a(),
              n = this.refCountSubscription,
              r = this.groupSubject;
            return n && !n.closed && t.add(new p(n)), t.add(r.subscribe(e)), t;
          }),
          t
        );
      })(u.a),
      p = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.parent = t), t.count++, n;
        }
        return (
          r.c(t, e),
          (t.prototype.unsubscribe = function() {
            var t = this.parent;
            t.closed ||
              this.closed ||
              (e.prototype.unsubscribe.call(this),
              (t.count -= 1),
              0 === t.count && t.attemptedToUnsubscribe && t.unsubscribe());
          }),
          t
        );
      })(i.a);
  },
  function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return u;
    });
    var r = n(0),
      o = n(9),
      i = n(8);
    function u() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return function(t) {
        var n;
        'function' == typeof e[e.length - 1] && (n = e.pop());
        var r = e;
        return t.lift(new a(r, n));
      };
    }
    var a = (function() {
        function e(e, t) {
          (this.observables = e), (this.project = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new s(e, this.observables, this.project));
          }),
          e
        );
      })(),
      s = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          (o.observables = n), (o.project = r), (o.toRespond = []);
          var u = n.length;
          o.values = new Array(u);
          for (var a = 0; a < u; a++) o.toRespond.push(a);
          for (a = 0; a < u; a++) {
            var s = n[a];
            o.add(Object(i.a)(o, s, s, a));
          }
          return o;
        }
        return (
          r.c(t, e),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.values[n] = t;
            var i = this.toRespond;
            if (i.length > 0) {
              var u = i.indexOf(n);
              -1 !== u && i.splice(u, 1);
            }
          }),
          (t.prototype.notifyComplete = function() {}),
          (t.prototype._next = function(e) {
            if (0 === this.toRespond.length) {
              var t = [e].concat(this.values);
              this.project ? this._tryProject(t) : this.destination.next(t);
            }
          }),
          (t.prototype._tryProject = function(e) {
            var t;
            try {
              t = this.project.apply(this, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(o.a);
  }
]);
