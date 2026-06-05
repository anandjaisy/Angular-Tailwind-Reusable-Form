import {
  U,
  N as Nh,
  b as bl,
  r as ra,
  n as na,
  D as Dt,
  q as qe,
  G as Gi,
  a as qi,
  C as To,
  c,
  j as jn,
  d as wy,
  J as JC,
  i as iT,
  e as Ur,
  s as si,
  L as Lr,
  f as jn$1,
  H,
  g as J$1,
  h as sm,
  k as ws,
  l as ib,
  Z as Zb,
  x as xl,
  Y as YI,
  o as ym,
  T as Tb,
  p as pm,
  t as H_,
  u as sb,
  K as KI,
  z as zm,
  v as zr,
  A as vb,
  B as Lm,
} from './main-243ESPVV.js';
function q(t, i) {
  if ((t & 1 && (ws(0, 'mat-label'), Zb(1), xl()), t & 2)) {
    let o = vb();
    (H_(), Lm(o.control.config.label));
  }
}
function G(t, i) {
  if ((t & 1 && (ws(0, 'mat-icon', 3), Zb(1), xl()), t & 2)) {
    let o = vb();
    (pm('matTooltip', o.control.config.prefix.toolTipText), H_(), Lm(o.control.config.prefix.text));
  }
}
function J(t, i) {
  if ((t & 1 && (ws(0, 'mat-icon', 4), Zb(1), xl()), t & 2)) {
    let o = vb();
    (pm('matTooltip', o.control.config.suffix.toolTipText), H_(), Lm(o.control.config.suffix.text));
  }
}
var L = class t extends U {
  static ɵfac = (() => {
    let i;
    return function (e) {
      return (i || (i = Nh(t)))(e || t);
    };
  })();
  static ɵcmp = bl({
    type: t,
    selectors: [['fal-textarea']],
    features: [zm([], [zr]), sm],
    decls: 8,
    vars: 15,
    consts: [
      ['containerDir', 'falconValidationMessageContainer'],
      [1, 'w-full', 3, 'appearance'],
      [
        'matInput',
        '',
        3,
        'formControlName',
        'placeholder',
        'ngStyle',
        'ngClass',
        'cdkTextareaAutosize',
        'cdkAutosizeMinRows',
        'cdkAutosizeMaxRows',
        'rows',
        'cols',
        'disabled',
        'container',
      ],
      ['matPrefix', '', 3, 'matTooltip'],
      ['matSuffix', '', 3, 'matTooltip'],
      ['falconValidationMessageContainer', ''],
    ],
    template: function (o, e) {
      if (
        (o & 1 &&
          (ws(0, 'mat-form-field', 1),
          ib(1, q, 2, 1, 'mat-label'),
          ws(2, 'textarea', 2),
          Zb(3, '      '),
          xl(),
          YI(),
          ib(4, G, 2, 2, 'mat-icon', 3),
          ib(5, J, 2, 2, 'mat-icon', 4),
          xl(),
          ym(6, 5, 0)),
        o & 2)
      ) {
        let O = Tb(7);
        (pm('appearance', e.control.config.appearance),
          H_(),
          sb(e.control.config.label ? 1 : -1),
          H_(),
          pm('formControlName', e.control.formControlName)(
            'placeholder',
            e.control.config.placeHolder,
          )('ngStyle', e.control.config.style)('ngClass', e.control.config.class)(
            'cdkTextareaAutosize',
            e.control.config.textAreaProperty.cdkTextareaAutosize,
          )('cdkAutosizeMinRows', e.control.config.textAreaProperty.cdkAutosizeMinRows)(
            'cdkAutosizeMaxRows',
            e.control.config.textAreaProperty.cdkAutosizeMaxRows,
          )('rows', e.control.config.textAreaProperty.rows)(
            'cols',
            e.control.config.textAreaProperty.cols,
          )('disabled', e.control.config.disabled)('container', O.container),
          KI(),
          H_(2),
          sb(e.control.config.prefix && e.control.config.prefix.isIcon ? 4 : -1),
          H_(),
          sb(e.control.config.suffix && e.control.config.suffix.isIcon ? 5 : -1));
      }
    },
    dependencies: [ra, na, Dt, qe, Gi, qi, To, c, jn, wy, JC, iT, Ur, si, Lr, jn$1, H, J$1],
    styles: ['.w-full[_ngcontent-%COMP%]{width:100%}'],
    changeDetection: 1,
  });
};
export { L as TextareaComponent };
