import{a as pt,i as er,n as Me,o as tr,r as Pt,s as ye,t as At}from"./chunk-IobK7oMO.js";import{a as Ut,c as fn,d as we,f as yn,l as mn,o as W,r as Pt$1,s as ee,t as Bt,u as pn}from"./chunk-rA67wZQX.js";import{t as ne}from"./chunk-vstzqhfy.js";import{$ as Ns,B as KC,C as Cm,D as F,Dn as rb,Et as Wm,K as Ll,L as Ht,Ln as ub,Nt as Yt$1,On as rm,Pn as tm,Pt as Z$1,Rn as ue,T as Dr,U as Kg,Un as w$1,Ut as dm,Vt as cb,Xn as ym,Yn as y$1,Z as Mw,Zt as ie$1,cn as me$1,f as $f,gn as oe$1,gt as UC,h as $v,it as PI,jt as Yg,k as Fn,mt as Sw,nt as Ob,on as mC,ot as Qt,pn as nm,qt as g,sn as mI,t as Ue,un as mi,ut as S,v as B,vt as Uf,y as BC,yt as Ul,zn as um}from"./main-EGYQTZBL.js";import{A as Xo,D as Ve,H as kt,J as tn,M as Z$2,P as bt,Q as yl,R as ft,S as Qt$1,U as qs,Y as w$2,Z as xl,a as B$1,b as Po,c as En,h as Js,i as At$1,l as Et,p as Ia,q as te$1,s as Dt,v as Nt}from"./chunk-C2cwlIbY.js";var ae=Math.pow(2,31)-1;var A=class{_overlayRef;instance;containerInstance;_afterDismissed=new oe$1;_afterOpened=new oe$1;_onAction=new oe$1;_durationTimeoutId;_dismissedByAction=!1;constructor(f,t){this._overlayRef=t,this.containerInstance=f,f._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(f){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(f,ae))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var P=new y$1(`MatSnackBarData`);var y=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var ie=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=Dr({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var re=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=Dr({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var oe=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=Dr({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var Kt=(()=>{class n{snackBarRef=g(A);data=g(P);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,a){if(e&1){let i=KC();Ns(0,`div`,1)(1,`button`,2),um(`click`,function(){Uf(i);let c=rb();return $f(c.action())}),Ob(2),Ll()()}if(e&2){let i=rb();PI(2),Ul(` `,i.data.action,` `)}}return mC({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(a,i){a&1&&(Ns(0,`div`,0),Ob(1),Ll(),BC(2,t,3,1,`div`,1)),a&2&&(PI(),Ul(` `,i.data.message,`
`),PI(),UC(i.hasAction?2:-1))},dependencies:[qs,ie,re,oe],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return n})();var Q=`_mat-snack-bar-enter`;var Z=`_mat-snack-bar-exit`;var se=(()=>{class n extends Nt{_ngZone=g(B);_elementRef=g(Qt);_changeDetectorRef=g(Wm);_platform=g(w$2);_animationsDisabled=bt();snackBarConfig=g(y);_document=g(Z$1);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=g(ie$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new oe$1;_onExit=new oe$1;_onEnter=new oe$1;_animationState=`void`;_live;_label;_role;_liveElementId=g(Z$2).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===Z?this._completeExit():t===Q&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?mI(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Q)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Q)},200)))}exit(){return this._destroyed?mi(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?mI(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Z)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Z),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let a=this._label.nativeElement,i=`mdc-snackbar__label`;a.classList.toggle(i,!a.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<e.length;a++){let i=e[a],r=i.getAttribute(`aria-owns`);this._trackedModals.add(i),r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute(`aria-owns`);if(e){let a=e.replace(this._liveElementId,``).trim();a.length>0?t.setAttribute(`aria-owns`,a):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector(`[aria-hidden]`),a=t.querySelector(`[aria-live]`);if(e&&a){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute(`aria-hidden`),a.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`label`];function e(a,i){}return mC({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,r){if(i&1&&dm(Qt$1,7)(t,7),i&2){let c;cb(c=ub())&&(r._portalOutlet=c.first),cb(c=ub())&&(r._label=c.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,r){i&1&&um(`animationend`,function(h){return r.onAnimationEnd(h.animationName)})(`animationcancel`,function(h){return r.onAnimationEnd(h.animationName)}),i&2&&ym(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Yg],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&(Ns(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Kg(4,e,0,0,`ng-template`,4),Ll(),rm(5,`div`),Ll()()),i&2&&(PI(5),tm(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[Qt$1],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var ce=new y$1(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new y});var w=(()=>{class n{_live=g(Po);_injector=g(ie$1);_breakpointObserver=g(tn);_parentSnackBar=g(n,{optional:!0,skipSelf:!0});_defaultConfig=g(ce);_animationsDisabled=bt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Kt;snackBarContainerComponent=se;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e=``,a){let i=F(F({},this._defaultConfig),a);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=ie$1.create({parent:a||this._injector,providers:[{provide:y,useValue:e}]}),r=new kt(this.snackBarContainerComponent,e.viewContainerRef,i),c=t.attach(r);return c.instance.snackBarConfig=e,c.instance}_attach(t,e){let a=F(F(F({},new y),this._defaultConfig),e),i=this._createOverlay(a),r=this._attachSnackBarContainer(i,a),c=new A(r,i);if(t instanceof Yt$1){let h=new Et(t,null,{$implicit:a.data,snackBarRef:c});c.instance=r.attachTemplatePortal(h)}else{let h=this._createInjector(a,c),ee=new kt(t,void 0,h);c.instance=r.attachComponentPortal(ee).instance}return this._breakpointObserver.observe(Ia.HandsetPortrait).pipe($v(i.detachments())).subscribe(h=>{i.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),a.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(c,a),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new Dt;e.direction=t.direction;let a=At$1(this._injector),i=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!i||t.horizontalPosition===`end`&&i,c=!r&&t.horizontalPosition!==`center`;return r?a.left(`0`):c?a.right(`0`):a.centerHorizontally(),t.verticalPosition===`top`?a.top(`0`):a.bottom(`0`),e.positionStrategy=a,e.disableAnimations=this._animationsDisabled,Ve(this._injector,e)}_createInjector(t,e){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ie$1.create({parent:a||this._injector,providers:[{provide:A,useValue:e},{provide:P,useValue:t.data}]})}static ɵfac=function(e){return new(e||n)};static ɵprov=me$1({token:n,factory:n.ɵfac})}return n})();var Xt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Fn({type:n});static ɵinj=Ht({providers:[w],imports:[te$1,ft,Js,Kt,B$1]})}return n})();function me(n,f){n&1&&(Ns(0,`mat-icon`,3),Ob(1,` task_alt `),Ll())}function de(n,f){n&1&&(Ns(0,`mat-icon`,4),Ob(1,` cancel `),Ll())}function pe(n,f){n&1&&(Ns(0,`mat-icon`,5),Ob(1,` error `),Ll())}var Yt=(()=>{class n{constructor(t,e){this.data=t,this._snackBar=e}get actionType(){return l}onClose(){this._snackBar.dismiss()}static{this.ɵfac=function(e){return new(e||n)(ue(P),ue(w))}}static{this.ɵcmp=mC({type:n,selectors:[[`app-alert-snackbar`]],decls:12,vars:2,consts:[[1,`flex`,`justify-between`],[1,`flex`],[1,`mr-2`,`flex`,`items-center`],[1,`text-emerald-600`],[1,`text-red-700`],[1,`text-amber-400`],[`font`,`dream-regular`,1,`flex`,`items-center`,`text-base`,`font-bold`],[`mat-icon-button`,``,3,`click`]],template:function(e,a){if(e&1&&(Ns(0,`div`,0)(1,`div`,1)(2,`div`,2),BC(3,me,2,0,`mat-icon`,3)(4,de,2,0,`mat-icon`,4)(5,pe,2,0,`mat-icon`,5),Ll(),Ns(6,`div`,6),Ob(7),Ll()(),Ns(8,`div`)(9,`button`,7),um(`click`,function(){return a.onClose()}),Ns(10,`mat-icon`),Ob(11,`close`),Ll()()()()),e&2){let i;PI(3),UC((i=a.data.action)===a.actionType.SUCCESS?3:i===a.actionType.ERROR?4:i===a.actionType.WARNING?5:-1),PI(4),Ul(` `,a.data.message,` `)}},dependencies:[Xt,xl,yl],encapsulation:2,changeDetection:1})}}return n})();var l=(function(n){return n.SUCCESS=`success`,n.ERROR=`error`,n.WARNING=`warning`,n.INFO=`info`,n})(l||{});var d=class{constructor(f,t){this.message=f,this.action=t}};var te=(()=>{class n{constructor(t){this._snackBar=t,this.durationInSeconds=2}openSnackBar(t,e){this._snackBar.openFromComponent(Yt,{data:t,duration:this.durationInSeconds*1e3,horizontalPosition:`right`,verticalPosition:`top`,panelClass:[`alert-snack-bar`,...e]})}onRequestFailedCustomMessage(t){let e=new d(t,l.ERROR);this.openSnackBar(e,[`error`])}onQueryRequestNotFound(){let t=new d(`查無資料`,l.ERROR);this.openSnackBar(t,[`error`])}onQueryRequestSucceeded(){let t=new d(`查詢成功`,l.SUCCESS);this.openSnackBar(t,[`success`])}onQueryRequestFailed(){let t=new d(`查詢失敗`,l.ERROR);this.openSnackBar(t,[`error`])}onAttachRequestSucceeded(){let t=new d(`新增成功`,l.SUCCESS);this.openSnackBar(t,[`success`])}onAttachRequestFailed(){let t=new d(`新增失敗`,l.ERROR);this.openSnackBar(t,[`error`])}onUpdateRequestSucceeded(){let t=new d(`修改成功`,l.SUCCESS);this.openSnackBar(t,[`success`])}onUpdateRequestFailed(){let t=new d(`修改失敗`,l.ERROR);this.openSnackBar(t,[`error`])}onDeleteRequestSucceeded(){let t=new d(`刪除成功`,l.SUCCESS);this.openSnackBar(t,[`success`])}onDeleteRequestFailed(){let t=new d(`刪除失敗`,l.ERROR);this.openSnackBar(t,[`error`])}onWaringMessage(){let t=new d(`警告訊息`,l.WARNING);this.openSnackBar(t,[`warning`])}onLoginMessageSucceeded(){let t=new d(`登入成功`,l.SUCCESS);this.openSnackBar(t,[`success`])}onLoginMessageFailed(){let t=new d(`登入帳號或密碼驗證失敗`,l.ERROR);this.openSnackBar(t,[`error`])}onCustomFailedMessage(t){let e=new d(t,l.ERROR);this.openSnackBar(e,[`error`])}onCustomSucceededMessage(t){let e=new d(t,l.SUCCESS);this.openSnackBar(e,[`success`])}onSaveRequestSucceeded(){let t=new d(`儲存成功`,l.SUCCESS);this.openSnackBar(t,[`success`])}onSaveRequestFailed(){let t=new d(`儲存失敗`,l.ERROR);this.openSnackBar(t,[`error`])}static{this.ɵfac=function(e){return new(e||n)(w$1(w))}}static{this.ɵprov=S({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function fe(n,f){n&1&&Ob(0,` 該欄位必填 `)}function he(n,f){n&1&&Ob(0,` 該欄位必填 `)}function be(n,f){n&1&&Ob(0,` 該欄位必填 `)}var en=(()=>{class n{constructor(t,e,a,i){this.dialogRef=t,this.authService=e,this.alertSnackbarService=a,this.errorHandlerService=i,this.isLoginPasswordHide=!0,this.signUpFormGroup=new W({email:new Pt$1(``,{nonNullable:!0,validators:[ee.required]}),name:new Pt$1(``,{nonNullable:!0,validators:[ee.required]}),password:new Pt$1(``,{nonNullable:!0,validators:[ee.required]})})}signUp(){this.signUpFormGroup.markAllAsTouched(),!this.signUpFormGroup.invalid&&this.authService.authControllerSignUp({body:this.signUpFormGroup.getRawValue()}).subscribe({next:t=>{this.alertSnackbarService.onAttachRequestSucceeded(),this.signUpFormGroup.reset()},error:this.errorHandlerService.handleRequestError.bind(this.errorHandlerService)})}static{this.ɵfac=function(e){return new(e||n)(ue(En),ue(Ue),ue(te),ue(ne))}}static{this.ɵcmp=mC({type:n,selectors:[[`app-sign-up`]],decls:32,vars:6,consts:[[1,`pt-10`],[`autocomplete`,`off`,3,`formGroup`],[`font`,`noto-medium`,1,`mb-4`,`text-3xl`,`font-bold`,`text-center`],[1,`list-none`,`text-center`],[1,``],[1,`w-80`],[`font`,`noto-medium`],[`formControlName`,`email`,`matInput`,``],[`formControlName`,`name`,`matInput`,``],[`formControlName`,`password`,`matInput`,``,`autocomplete`,`on`,3,`type`],[`type`,`button`,`mat-icon-button`,``,`matSuffix`,``,3,`click`],[1,`text-center`],[`mat-raised-button`,``,`color`,`primary`,`type`,`submit`,1,`hover:opacity-80`,3,`click`]],template:function(e,a){e&1&&(Ns(0,`div`,0)(1,`form`,1)(2,`h1`,2),Ob(3,` 註冊帳號 `),Ll(),Ns(4,`ul`,3)(5,`li`,4)(6,`mat-form-field`,5)(7,`mat-label`,6),Ob(8,`Email`),Ll(),Ns(9,`input`,7),Sw(),Ll(),Ns(10,`mat-error`),BC(11,fe,1,0),Ll()()(),Ns(12,`li`,4)(13,`mat-form-field`,5)(14,`mat-label`,6),Ob(15,`Name`),Ll(),Ns(16,`input`,8),Sw(),Ll(),Ns(17,`mat-error`),BC(18,he,1,0),Ll()()(),Ns(19,`li`)(20,`mat-form-field`,5)(21,`mat-label`,6),Ob(22,`密碼`),Ll(),Ns(23,`input`,9),Sw(),Ll(),Ns(24,`button`,10),um(`click`,function(){return a.isLoginPasswordHide=!a.isLoginPasswordHide}),Ns(25,`mat-icon`),Ob(26),Ll()(),Ns(27,`mat-error`),BC(28,be,1,0),Ll()()()(),Ns(29,`div`,11)(30,`button`,12),um(`click`,function(){return a.signUp(),!1}),Ob(31,` 註冊 `),Ll()()()()),e&2&&(PI(),nm(`formGroup`,a.signUpFormGroup),PI(8),Mw(),PI(2),UC(a.signUpFormGroup.controls.email.hasError(`required`)?11:-1),PI(5),Mw(),PI(2),UC(a.signUpFormGroup.controls.name.hasError(`required`)?18:-1),PI(5),nm(`type`,a.isLoginPasswordHide?`password`:`text`),Mw(),PI(3),Cm(a.isLoginPasswordHide?`visibility_off`:`visibility`),PI(2),UC(a.signUpFormGroup.controls.password.hasError(`required`)?28:-1))},dependencies:[Me,pt,ye,At,Pt,tr,er,xl,yl,yn,mn,we,pn,fn,Bt,Ut,Js,qs,Xo],encapsulation:2,changeDetection:1})}}return n})();export{en as SignUpComponent};