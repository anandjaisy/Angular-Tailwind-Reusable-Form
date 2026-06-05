import {
  U,
  N as Nh,
  b as bl,
  F as Ft,
  _ as Ee,
  a0 as re,
  a1 as W,
  d as wy,
  J as JC,
  a2 as _y,
  i as iT,
  e as Ur,
  L as Lr,
  f as jn,
  H,
  a3 as dT,
  h as sm,
  k as ws,
  Z as Zb,
  a4 as aC,
  x as xl,
  M as Em,
  a5 as cm,
  Y as YI,
  p as pm,
  t as H_,
  B as Lm,
  a6 as uC,
  a7 as Nl,
  K as KI,
  z as zm,
  v as zr,
  A as vb,
  a8 as Pl,
} from './main-243ESPVV.js';
function q(t, o) {
  if ((t & 1 && (ws(0, 'mat-radio-button', 4), Zb(1), aC(2, 'titlecase'), xl()), t & 2)) {
    let n = o.$implicit,
      e = vb();
    (pm('ngClass', e.control.config.class)('value', n.value),
      H_(),
      Pl('', uC(2, 3, n.viewValue), ' '));
  }
}
var $ = class t extends U {
  radioGroupChangeEvent(o) {
    this.control.config.event.change?.emit(o);
  }
  static ɵfac = (() => {
    let o;
    return function (e) {
      return (o || (o = Nh(t)))(e || t);
    };
  })();
  static ɵcmp = bl({
    type: t,
    selectors: [['fal-radio']],
    features: [zm([], [zr]), sm],
    decls: 6,
    vars: 11,
    consts: [
      [3, 'ngStyle', 'ngClass'],
      [1, 'radio-label-padding'],
      [3, 'change', 'labelPosition', 'formControlName', 'ngStyle', 'ngClass'],
      [3, 'ngClass', 'value', 4, 'ngFor', 'ngForOf'],
      [3, 'ngClass', 'value'],
    ],
    template: function (n, e) {
      (n & 1 &&
        (ws(0, 'div', 0)(1, 'label', 1),
        Zb(2),
        aC(3, 'titlecase'),
        xl(),
        ws(4, 'mat-radio-group', 2),
        Em('change', function (k) {
          return e.radioGroupChangeEvent(k);
        }),
        cm(5, q, 3, 5, 'mat-radio-button', 3),
        xl(),
        YI(),
        xl()),
        n & 2 &&
          (pm('ngStyle', e.control.config.style)('ngClass', e.control.config.class),
          H_(2),
          Lm(uC(3, 9, e.control.config.label)),
          H_(2),
          pm('labelPosition', e.control.config.appearance)(
            'formControlName',
            e.control.formControlName,
          )('ngStyle', e.control.config.style)('ngClass', e.control.config.class),
          Nl('aria-label', e.control.config.label),
          KI(),
          H_(),
          pm('ngForOf', e.control.config.options)));
    },
    dependencies: [Ft, Ee, re, W, wy, JC, _y, iT, Ur, Lr, jn, H, dT],
    encapsulation: 2,
    changeDetection: 1,
  });
};
export { $ as RadioComponent };
