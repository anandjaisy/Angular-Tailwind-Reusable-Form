import{$ as w,$c as N,Nb as M,Rd as U,Sa as m,Ua as F,ba as p,cd as _,ja as O,kd as L,md as P,oa as A,td as v,vd as S,wa as C,wd as x}from"./chunk-ULQKINHO.js";import{a}from"./chunk-C6Q5SG76.js";var K=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275cmp=m({type:s,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return s})();var l=(function(s){return s[s.FADING_IN=0]="FADING_IN",s[s.VISIBLE=1]="VISIBLE",s[s.FADING_OUT=2]="FADING_OUT",s[s.HIDDEN=3]="HIDDEN",s})(l||{}),E=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=l.HIDDEN;constructor(t,e,n,i=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},k=v({passive:!0,capture:!0}),b=class{_events=new Map;addHandler(t,e,n,i){let r=this._events.get(e);if(r){let c=r.get(n);c?c.add(i):r.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,k)})}removeHandler(t,e,n){let i=this._events.get(t);if(!i)return;let r=i.get(e);r&&(r.delete(n),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,k)))}_delegateEventHandler=t=>{let e=L(t);e&&this._events.get(t.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(r=>r.handleEvent(t))})}},H={enterDuration:225,exitDuration:150},j=800,G=v({passive:!0,capture:!0}),B=["mousedown","touchstart"],z=["mouseup","mouseleave","touchend","touchcancel"],X=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275cmp=m({type:s,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return s})(),D=class s{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new b;constructor(t,e,n,i,r){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=_(n)),r&&r.get(P).load(X)}fadeInRipple(t,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=a(a({},H),n.animation);n.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let c=n.radius||q(t,e,i),V=t-i.left,Z=e-i.top,u=r.enterDuration,o=document.createElement("div");o.classList.add("mat-ripple-element"),o.style.left=`${V-c}px`,o.style.top=`${Z-c}px`,o.style.height=`${c*2}px`,o.style.width=`${c*2}px`,n.color!=null&&(o.style.backgroundColor=n.color),o.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(o);let T=window.getComputedStyle(o),$=T.transitionProperty,y=T.transitionDuration,f=$==="none"||y==="0s"||y==="0s, 0s"||i.width===0&&i.height===0,d=new E(this,o,n,f);o.style.transform="scale3d(1, 1, 1)",d.state=l.FADING_IN,n.persistent||(this._mostRecentTransientRipple=d);let h=null;return!f&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{h&&(h.fallbackTimer=null),clearTimeout(I),this._finishRippleTransition(d)},g=()=>this._destroyRipple(d),I=setTimeout(g,u+100);o.addEventListener("transitionend",R),o.addEventListener("transitioncancel",g),h={onTransitionEnd:R,onTransitionCancel:g,fallbackTimer:I}}),this._activeRipples.set(d,h),(f||!u)&&this._finishRippleTransition(d),d}fadeOutRipple(t){if(t.state===l.FADING_OUT||t.state===l.HIDDEN)return;let e=t.element,n=a(a({},H),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=l.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=_(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,B.forEach(n=>{s._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{z.forEach(e=>{this._triggerElement.addEventListener(e,this,G)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===l.FADING_IN?this._startFadeOutTransition(t):t.state===l.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=l.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=l.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=S(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+j;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!x(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===l.VISIBLE||t.config.terminateOnPointerUp&&t.state===l.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(B.forEach(e=>s._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(z.forEach(e=>t.removeEventListener(e,this,G)),this._pointerUpEventsRegistered=!1))}};function q(s,t,e){let n=Math.max(Math.abs(s-e.left),Math.abs(s-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+i*i)}var J=new w("mat-ripple-global-options"),dt=(()=>{class s{_elementRef=p(C);_animationsDisabled=U();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=p(A),n=p(N),i=p(J,{optional:!0}),r=p(O);this._globalOptions=i||{},this._rippleRenderer=new D(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:a(a(a({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,a(a({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,a(a({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||s)};static \u0275dir=F({type:s,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,i){n&2&&M("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return s})();export{K as a,l as b,H as c,D as d,J as e,dt as f};
