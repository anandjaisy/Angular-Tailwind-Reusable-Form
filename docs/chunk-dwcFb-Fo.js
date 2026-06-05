import {
  U as U$1,
  N as Nh,
  b as bl,
  r as ra,
  D as Dt,
  q as qe,
  G as Gi,
  a as qi,
  F as Ft,
  E as Ft$1,
  R as Rt,
  I as te,
  c,
  j as jn,
  d as wy,
  J as JC,
  i as iT,
  e as Ur,
  L as Lr,
  f as jn$1,
  H,
  g as J,
  h as sm,
  k as ws,
  l as ib,
  M as Em,
  O as ub,
  P as cb,
  x as xl,
  Y as YI,
  o as ym,
  T as Tb,
  p as pm,
  t as H_,
  u as sb,
  K as KI,
  Q as lb,
  z as zm,
  v as zr,
  Z as Zb,
  B as Lm,
  A as vb,
} from './main-243ESPVV.js';
function U(t, n) {
  if ((t & 1 && (ws(0, 'mat-label'), Zb(1), xl()), t & 2)) {
    let o = vb();
    (H_(), Lm(o.control.config.label));
  }
}
function W(t, n) {
  if ((t & 1 && (ws(0, 'mat-option', 3), Zb(1), xl()), t & 2)) {
    let o = n.$implicit;
    (pm('value', o.key), H_(), Lm(o.value));
  }
}
function X(t, n) {
  if ((t & 1 && (ws(0, 'mat-icon', 4), Zb(1), xl()), t & 2)) {
    let o = vb();
    (pm('matTooltip', o.control.config.prefix.toolTipText), H_(), Lm(o.control.config.prefix.text));
  }
}
function Y(t, n) {
  if ((t & 1 && (ws(0, 'mat-icon', 5), Zb(1), xl()), t & 2)) {
    let o = vb();
    (pm('matTooltip', o.control.config.suffix.toolTipText), H_(), Lm(o.control.config.suffix.text));
  }
}
var K = class t extends U$1 {
  selectionChange(n) {
    this.control.config.event.change?.emit(n);
  }
  static ɵfac = (() => {
    let n;
    return function (e) {
      return (n || (n = Nh(t)))(e || t);
    };
  })();
  static ɵcmp = bl({
    type: t,
    selectors: [['fal-select']],
    features: [zm([], [zr]), sm],
    decls: 9,
    vars: 11,
    consts: [
      ['containerDir', 'falconValidationMessageContainer'],
      [1, 'w-full', 3, 'appearance'],
      [
        3,
        'selectionChange',
        'value',
        'formControlName',
        'placeholder',
        'ngStyle',
        'ngClass',
        'container',
        'multiple',
      ],
      [3, 'value'],
      ['matPrefix', '', 3, 'matTooltip'],
      ['matSuffix', '', 3, 'matTooltip'],
      ['falconValidationMessageContainer', ''],
    ],
    template: function (o, e) {
      if (
        (o & 1 &&
          (ws(0, 'mat-form-field', 1),
          ib(1, U, 2, 1, 'mat-label'),
          ws(2, 'mat-select', 2),
          Em('selectionChange', function (Q) {
            return e.selectionChange(Q);
          }),
          ub(3, W, 2, 2, 'mat-option', 3, cb),
          xl(),
          YI(),
          ib(5, X, 2, 2, 'mat-icon', 4),
          ib(6, Y, 2, 2, 'mat-icon', 5),
          xl(),
          ym(7, 6, 0)),
        o & 2)
      ) {
        let d = Tb(8);
        (pm('appearance', e.control.config.appearance),
          H_(),
          sb(e.control.config.label ? 1 : -1),
          H_(),
          pm('value', e.control.config.value)('formControlName', e.control.formControlName)(
            'placeholder',
            e.control.config.placeHolder,
          )('ngStyle', e.control.config.style)('ngClass', e.control.config.class)(
            'container',
            d.container,
          )('multiple', e.control.config.selectProperty.multiple),
          KI(),
          H_(),
          lb(e.control.config.options),
          H_(2),
          sb(e.control.config.prefix && e.control.config.prefix.isIcon ? 5 : -1),
          H_(),
          sb(e.control.config.suffix && e.control.config.suffix.isIcon ? 6 : -1));
      }
    },
    dependencies: [ra, Dt, qe, Gi, qi, Ft, Ft$1, Rt, te, c, jn, wy, JC, iT, Ur, Lr, jn$1, H, J],
    styles: ['.w-full[_ngcontent-%COMP%]{width:100%}'],
    changeDetection: 1,
  });
};
export { K as SelectComponent };
