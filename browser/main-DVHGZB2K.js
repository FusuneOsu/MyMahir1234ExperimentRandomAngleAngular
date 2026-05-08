var _S=Object.defineProperty,vS=Object.defineProperties;var yS=Object.getOwnPropertyDescriptors;var ry=Object.getOwnPropertySymbols;var bS=Object.prototype.hasOwnProperty,DS=Object.prototype.propertyIsEnumerable;var oy=(t,n,e)=>n in t?_S(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})bS.call(n,e)&&oy(t,e,n[e]);if(ry)for(var e of ry(n))DS.call(n,e)&&oy(t,e,n[e]);return t},q=(t,n)=>vS(t,yS(n));var pt=null,Cc=!1,Cm=1,wS=null,Ke=Symbol("SIGNAL");function Y(t){let n=pt;return pt=t,n}function xc(){return pt}var qi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Yi(t){if(Cc)throw new Error("");if(pt===null)return;pt.consumerOnSignalRead(t);let n=pt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=pt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:pt.producers,e!==void 0&&e.producer===t)){pt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===pt&&(!i||xS(r,pt)))return;let o=Po(pt),a={producer:t,consumer:pt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};pt.producersTail=a,n!==void 0?n.nextProducer=a:pt.producers=a,o&&cy(t,a)}function ay(){Cm++}function Fr(t){if(!(Po(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Cm)){if(!t.producerMustRecompute(t)&&!Fo(t)){No(t);return}t.producerRecomputeValue(t),No(t)}}function xm(t){if(t.consumers===void 0)return;let n=Cc;Cc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||CS(i)}}finally{Cc=n}}function Em(){return pt?.consumerAllowSignalWrites!==!1}function CS(t){t.dirty=!0,xm(t),t.consumerMarkedDirty?.(t)}function No(t){t.dirty=!1,t.lastCleanEpoch=Cm}function hi(t){return t&&sy(t),Y(t)}function sy(t){t.producersTail=void 0,t.recomputing=!0}function Zi(t,n){Y(n),t&&ly(t)}function ly(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Po(t))do e=Mm(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Fo(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Fr(e),i!==e.version))return!0}return!1}function Qi(t){if(Po(t)){let n=t.producers;for(;n!==void 0;)n=Mm(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function cy(t,n){let e=t.consumersTail,i=Po(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)cy(r.producer,r)}function Mm(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Po(n)){let o=n.producers;for(;o!==void 0;)o=Mm(o)}return e}function Po(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function gs(t){wS?.(t)}function xS(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function _s(t,n){return Object.is(t,n)}function vs(t,n){let e=Object.create(ES);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Fr(e),Yi(e),e.value===Wn)throw e.error;return e.value};return i[Ke]=e,gs(e),i}var Or=Symbol("UNSET"),Nr=Symbol("COMPUTING"),Wn=Symbol("ERRORED"),ES=q(_({},qi),{value:Or,dirty:!0,error:null,equal:_s,kind:"computed",producerMustRecompute(t){return t.value===Or||t.value===Nr},producerRecomputeValue(t){if(t.value===Nr)throw new Error("");let n=t.value;t.value=Nr;let e=hi(t),i,r=!1;try{i=t.computation(),Y(null),r=n!==Or&&n!==Wn&&i!==Wn&&t.equal(n,i)}catch(o){i=Wn,t.error=o}finally{Zi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function MS(){throw new Error}var dy=MS;function uy(t){dy(t)}function Sm(t){dy=t}var SS=null;function Im(t,n){let e=Object.create(ys);e.value=t,n!==void 0&&(e.equal=n);let i=()=>fy(e);return i[Ke]=e,gs(e),[i,a=>Pr(e,a),a=>Ec(e,a)]}function fy(t){return Yi(t),t.value}function Pr(t,n){Em()||uy(t),t.equal(t.value,n)||(t.value=n,IS(t))}function Ec(t,n){Em()||uy(t),Pr(t,n(t.value))}var ys=q(_({},qi),{equal:_s,value:void 0,kind:"signal"});function IS(t){t.version++,ay(),xm(t),SS?.(t)}var km=q(_({},qi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Tm(t){if(t.dirty=!1,t.version>0&&!Fo(t))return;t.version++;let n=hi(t);try{t.cleanup(),t.fn()}finally{Zi(t,n)}}function se(t){return typeof t=="function"}function Lo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Mc=Lo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Lr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var me=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(se(i))try{i()}catch(o){n=o instanceof Mc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{my(o)}catch(a){n=n??[],a instanceof Mc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Mc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)my(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Lr(e,n)}remove(n){let{_finalizers:e}=this;e&&Lr(e,n),n instanceof t&&n._removeParent(this)}};me.EMPTY=(()=>{let t=new me;return t.closed=!0,t})();var Am=me.EMPTY;function Sc(t){return t instanceof me||t&&"closed"in t&&se(t.remove)&&se(t.add)&&se(t.unsubscribe)}function my(t){se(t)?t():t.unsubscribe()}var En={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Vo={setTimeout(t,n,...e){let{delegate:i}=Vo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Vo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ic(t){Vo.setTimeout(()=>{let{onUnhandledError:n}=En;if(n)n(t);else throw t})}function bs(){}var hy=Rm("C",void 0,void 0);function py(t){return Rm("E",void 0,t)}function gy(t){return Rm("N",t,void 0)}function Rm(t,n,e){return{kind:t,value:n,error:e}}var Vr=null;function jo(t){if(En.useDeprecatedSynchronousErrorHandling){let n=!Vr;if(n&&(Vr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Vr;if(Vr=null,e)throw i}}else t()}function _y(t){En.useDeprecatedSynchronousErrorHandling&&Vr&&(Vr.errorThrown=!0,Vr.error=t)}var jr=class extends me{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Sc(n)&&n.add(this)):this.destination=AS}static create(n,e,i){return new pi(n,e,i)}next(n){this.isStopped?Nm(gy(n),this):this._next(n)}error(n){this.isStopped?Nm(py(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Nm(hy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},kS=Function.prototype.bind;function Om(t,n){return kS.call(t,n)}var Fm=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){kc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){kc(i)}else kc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){kc(e)}}},pi=class extends jr{constructor(n,e,i){super();let r;if(se(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&En.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Om(n.next,o),error:n.error&&Om(n.error,o),complete:n.complete&&Om(n.complete,o)}):r=n}this.destination=new Fm(r)}};function kc(t){En.useDeprecatedSynchronousErrorHandling?_y(t):Ic(t)}function TS(t){throw t}function Nm(t,n){let{onStoppedNotification:e}=En;e&&Vo.setTimeout(()=>e(t,n))}var AS={closed:!0,next:bs,error:TS,complete:bs};var Bo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Gt(t){return t}function Pm(...t){return Lm(t)}function Lm(t){return t.length===0?Gt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ee=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=OS(e)?e:new pi(e,i,r);return jo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=vy(i),new i((r,o)=>{let a=new pi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Bo](){return this}pipe(...e){return Lm(e)(this)}toPromise(e){return e=vy(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function vy(t){var n;return(n=t??En.Promise)!==null&&n!==void 0?n:Promise}function RS(t){return t&&se(t.next)&&se(t.error)&&se(t.complete)}function OS(t){return t&&t instanceof jr||RS(t)&&Sc(t)}function Vm(t){return se(t?.lift)}function de(t){return n=>{if(Vm(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function le(t,n,e,i,r){return new jm(t,n,e,i,r)}var jm=class extends jr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function yy(){return de((t,n)=>{let e=null;t._refCount++;let i=le(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let r=t._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),n.unsubscribe()});t.subscribe(i),i.closed||(e=t.connect())})}var Ds=class extends ee{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,Vm(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new me;let e=this.getSubject();n.add(this.source.subscribe(le(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),n.closed&&(this._connection=null,n=me.EMPTY)}return n}refCount(){return yy()(this)}};var Ho={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=Ho;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new me(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=Ho;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=Ho;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var by=Lo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var C=(()=>{class t extends ee{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Tc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new by}next(e){jo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){jo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){jo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Am:(this.currentObservers=null,o.push(e),new me(()=>{this.currentObservers=null,Lr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ee;return e.source=this,e}}return t.create=(n,e)=>new Tc(n,e),t})(),Tc=class extends C{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Am}};var Le=class extends C{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var ws={now(){return(ws.delegate||Date).now()},delegate:void 0};var Ki=class extends C{constructor(n=1/0,e=1/0,i=ws){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Ac=class extends me{constructor(n,e){super()}schedule(n,e=0){return this}};var Cs={setInterval(t,n,...e){let{delegate:i}=Cs;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Cs;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Xi=class extends Ac{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Cs.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Cs.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Lr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var NS=1,Bm,Hm={};function Dy(t){return t in Hm?(delete Hm[t],!0):!1}var wy={setImmediate(t){let n=NS++;return Hm[n]=!0,Bm||(Bm=Promise.resolve()),Bm.then(()=>Dy(n)&&t()),n},clearImmediate(t){Dy(t)}};var{setImmediate:FS,clearImmediate:PS}=wy,xs={setImmediate(...t){let{delegate:n}=xs;return(n?.setImmediate||FS)(...t)},clearImmediate(t){let{delegate:n}=xs;return(n?.clearImmediate||PS)(t)},delegate:void 0};var Rc=class extends Xi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=xs.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(xs.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var Uo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Uo.now=ws.now;var Ji=class extends Uo{constructor(n,e=Uo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Oc=class extends Ji{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var Nc=new Oc(Rc);var Es=new Ji(Xi),Cy=Es;var Fc=class extends Xi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=Ho.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(Ho.cancelAnimationFrame(e),n._scheduled=void 0)}};var Pc=class extends Ji{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var Lc=new Pc(Fc);var Xe=new ee(t=>t.complete());function Vc(t){return t&&se(t.schedule)}function Um(t){return t[t.length-1]}function jc(t){return se(Um(t))?t.pop():void 0}function Gn(t){return Vc(Um(t))?t.pop():void 0}function xy(t,n){return typeof Um(t)=="number"?t.pop():n}function My(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{c(i.next(u))}catch(f){a(f)}}function l(u){try{c(i.throw(u))}catch(f){a(f)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function Ey(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Br(t){return this instanceof Br?(this.v=t,this):new Br(t)}function Sy(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(y){return Promise.resolve(y).then(h,f)}}function s(h,y){i[h]&&(r[h]=function(S){return new Promise(function(E,I){o.push([h,S,E,I])>1||l(h,S)})},y&&(r[h]=y(r[h])))}function l(h,y){try{c(i[h](y))}catch(S){m(o[0][3],S)}}function c(h){h.value instanceof Br?Promise.resolve(h.value.v).then(u,f):m(o[0][2],h)}function u(h){l("next",h)}function f(h){l("throw",h)}function m(h,y){h(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Iy(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Ey=="function"?Ey(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Bc=t=>t&&typeof t.length=="number"&&typeof t!="function";function Hc(t){return se(t?.then)}function Uc(t){return se(t[Bo])}function zc(t){return Symbol.asyncIterator&&se(t?.[Symbol.asyncIterator])}function $c(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function LS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Wc=LS();function Gc(t){return se(t?.[Wc])}function qc(t){return Sy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Br(e.read());if(r)return yield Br(void 0);yield yield Br(i)}}finally{e.releaseLock()}})}function Yc(t){return se(t?.getReader)}function Oe(t){if(t instanceof ee)return t;if(t!=null){if(Uc(t))return VS(t);if(Bc(t))return jS(t);if(Hc(t))return BS(t);if(zc(t))return ky(t);if(Gc(t))return HS(t);if(Yc(t))return US(t)}throw $c(t)}function VS(t){return new ee(n=>{let e=t[Bo]();if(se(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function jS(t){return new ee(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function BS(t){return new ee(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Ic)})}function HS(t){return new ee(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function ky(t){return new ee(n=>{zS(t,n).catch(e=>n.error(e))})}function US(t){return ky(qc(t))}function zS(t,n){var e,i,r,o;return My(this,void 0,void 0,function*(){try{for(e=Iy(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Nt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Zc(t,n=0){return de((e,i)=>{e.subscribe(le(i,r=>Nt(i,t,()=>i.next(r),n),()=>Nt(i,t,()=>i.complete(),n),r=>Nt(i,t,()=>i.error(r),n)))})}function Qc(t,n=0){return de((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Ty(t,n){return Oe(t).pipe(Qc(n),Zc(n))}function Ay(t,n){return Oe(t).pipe(Qc(n),Zc(n))}function Ry(t,n){return new ee(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Oy(t,n){return new ee(e=>{let i;return Nt(e,n,()=>{i=t[Wc](),Nt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>se(i?.return)&&i.return()})}function Kc(t,n){if(!t)throw new Error("Iterable cannot be null");return new ee(e=>{Nt(e,n,()=>{let i=t[Symbol.asyncIterator]();Nt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Ny(t,n){return Kc(qc(t),n)}function Fy(t,n){if(t!=null){if(Uc(t))return Ty(t,n);if(Bc(t))return Ry(t,n);if(Hc(t))return Ay(t,n);if(zc(t))return Kc(t,n);if(Gc(t))return Oy(t,n);if(Yc(t))return Ny(t,n)}throw $c(t)}function Ue(t,n){return n?Fy(t,n):Oe(t)}function B(...t){let n=Gn(t);return Ue(t,n)}function Ms(t,n){let e=se(t)?t:()=>t,i=r=>r.error(e());return new ee(n?r=>n.schedule(i,0,r):i)}function Hr(t){return!!t&&(t instanceof ee||se(t.lift)&&se(t.subscribe))}var Ur=Lo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Py(t){return t instanceof Date&&!isNaN(t)}function ne(t,n){return de((e,i)=>{let r=0;e.subscribe(le(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:$S}=Array;function WS(t,n){return $S(n)?t(...n):t(n)}function Xc(t){return ne(n=>WS(t,n))}var{isArray:GS}=Array,{getPrototypeOf:qS,prototype:YS,keys:ZS}=Object;function Jc(t){if(t.length===1){let n=t[0];if(GS(n))return{args:n,keys:null};if(QS(n)){let e=ZS(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function QS(t){return t&&typeof t=="object"&&qS(t)===YS}function ed(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function qt(...t){let n=Gn(t),e=jc(t),{args:i,keys:r}=Jc(t);if(i.length===0)return Ue([],n);let o=new ee(KS(i,n,r?a=>ed(r,a):Gt));return e?o.pipe(Xc(e)):o}function KS(t,n,e=Gt){return i=>{Ly(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)Ly(n,()=>{let c=Ue(t[l],n),u=!1;c.subscribe(le(i,f=>{o[l]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Ly(t,n,e){t?Nt(e,t,n):n()}function Vy(t,n,e,i,r,o,a,s){let l=[],c=0,u=0,f=!1,m=()=>{f&&!l.length&&!c&&n.complete()},h=S=>c<i?y(S):l.push(S),y=S=>{o&&n.next(S),c++;let E=!1;Oe(e(S,u++)).subscribe(le(n,I=>{r?.(I),o?h(I):n.next(I)},()=>{E=!0},void 0,()=>{if(E)try{for(c--;l.length&&c<i;){let I=l.shift();a?Nt(n,a,()=>y(I)):y(I)}m()}catch(I){n.error(I)}}))};return t.subscribe(le(n,h,()=>{f=!0,m()})),()=>{s?.()}}function Et(t,n,e=1/0){return se(n)?Et((i,r)=>ne((o,a)=>n(i,o,r,a))(Oe(t(i,r))),e):(typeof n=="number"&&(e=n),de((i,r)=>Vy(i,r,t,e)))}function td(t=1/0){return Et(Gt,t)}function jy(){return td(1)}function er(...t){return jy()(Ue(t,Gn(t)))}function gi(t){return new ee(n=>{Oe(t()).subscribe(n)})}function Ss(...t){let n=jc(t),{args:e,keys:i}=Jc(t),r=new ee(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let u=0;u<a;u++){let f=!1;Oe(e[u]).subscribe(le(o,m=>{f||(f=!0,c--),s[u]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?ed(i,s):s),o.complete())}))}});return n?r.pipe(Xc(n)):r}function By(t=0,n,e=Cy){let i=-1;return n!=null&&(Vc(n)?e=n:i=n),new ee(r=>{let o=Py(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Yt(...t){let n=Gn(t),e=xy(t,1/0),i=t;return i.length?i.length===1?Oe(i[0]):td(e)(Ue(i,n)):Xe}function Ie(t,n){return de((e,i)=>{let r=0;e.subscribe(le(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Hy(t){return de((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(le(e,c=>{i=!0,r=c,o||Oe(t(c)).subscribe(o=le(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function zo(t,n=Es){return Hy(()=>By(t,n))}function zr(t){return de((n,e)=>{let i=null,r=!1,o;i=n.subscribe(le(e,void 0,void 0,a=>{o=Oe(t(a,zr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function $o(t,n){return se(n)?Et(t,n,1):Et(t,1)}function Is(t,n=Es){return de((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}s()}e.subscribe(le(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Uy(t){return de((n,e)=>{let i=!1;n.subscribe(le(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function nt(t){return t<=0?()=>Xe:de((n,e)=>{let i=0;n.subscribe(le(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function nd(t,n=Gt){return t=t??XS,de((e,i)=>{let r,o=!0;e.subscribe(le(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function XS(t,n){return t===n}function zy(t=JS){return de((n,e)=>{let i=!1;n.subscribe(le(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function JS(){return new Ur}function $r(t){return de((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function _i(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ie((r,o)=>t(r,o,i)):Gt,nt(1),e?Uy(n):zy(()=>new Ur))}function id(t){return t<=0?()=>Xe:de((n,e)=>{let i=[];n.subscribe(le(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function rd(){return de((t,n)=>{let e,i=!1;t.subscribe(le(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function ks(t={}){let{connector:n=()=>new C,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,u=!1,f=!1,m=()=>{s?.unsubscribe(),s=void 0},h=()=>{m(),a=l=void 0,u=f=!1},y=()=>{let S=a;h(),S?.unsubscribe()};return de((S,E)=>{c++,!f&&!u&&m();let I=l=l??n();E.add(()=>{c--,c===0&&!f&&!u&&(s=zm(y,r))}),I.subscribe(E),!a&&c>0&&(a=new pi({next:ge=>I.next(ge),error:ge=>{f=!0,m(),s=zm(h,e,ge),I.error(ge)},complete:()=>{u=!0,m(),s=zm(h,i),I.complete()}}),Oe(S).subscribe(a))})(o)}}function zm(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new pi({next:()=>{i.unsubscribe(),t()}});return Oe(n(...e)).subscribe(i)}function od(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,ks({connector:()=>new Ki(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Ts(t){return Ie((n,e)=>t<=e)}function gt(...t){let n=Gn(t);return de((e,i)=>{(n?er(t,e,n):er(t,e)).subscribe(i)})}function Ft(t,n){return de((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(le(i,l=>{r?.unsubscribe();let c=0,u=o++;Oe(t(l,u)).subscribe(r=le(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function De(t){return de((n,e)=>{Oe(t).subscribe(le(e,()=>e.complete(),bs)),!e.closed&&n.subscribe(e)})}function _t(t,n,e){let i=se(t)||n||e?{next:t,error:n,complete:e}:t;return i?de((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(le(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Gt}var $m;function ad(){return $m}function qn(t){let n=$m;return $m=t,n}var $y=Symbol("NotFound");function Wo(t){return t===$y||t?.name==="\u0275NotFound"}function Wm(t,n,e){let i=Object.create(eI);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Fr(i),Yi(i),i.value===Wn)throw i.error;return i.value};return o[Ke]=i,gs(i),o}function Wy(t,n){Fr(t),Pr(t,n),No(t)}function Gy(t,n){if(Fr(t),t.value===Wn)throw t.error;Ec(t,n),No(t)}var eI=q(_({},qi),{value:Or,dirty:!0,error:null,equal:_s,kind:"linkedSignal",producerMustRecompute(t){return t.value===Or||t.value===Nr},producerRecomputeValue(t){if(t.value===Nr)throw new Error("");let n=t.value;t.value=Nr;let e=hi(t),i,r=!1;try{let o=t.source(),a=n!==Or&&n!==Wn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,Y(null),r=a&&i!==Wn&&t.equal(n,i)}catch(o){i=Wn,t.error=o}finally{Zi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function qy(t){let n=Y(null);try{return t()}finally{Y(n)}}var md="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",k=class extends Error{code;constructor(n,e){super(yi(n,e)),this.code=n}};function tI(t){return`NG0${Math.abs(t)}`}function yi(t,n){return`${tI(t)}${n?": "+n:""}`}var rr=globalThis;function xe(t){for(let n in t)if(t[n]===xe)return n;throw Error("")}function Xy(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Ls(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Ls).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function hd(t,n){return t?n?`${t} ${n}`:t:n||""}var nI=xe({__forward_ref__:xe});function Pt(t){return t.__forward_ref__=Pt,t}function rt(t){return rh(t)?t():t}function rh(t){return typeof t=="function"&&t.hasOwnProperty(nI)&&t.__forward_ref__===Pt}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function F(t){return{providers:t.providers||[],imports:t.imports||[]}}function Vs(t){return iI(t,pd)}function oh(t){return Vs(t)!==null}function iI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function rI(t){let n=t?.[pd]??null;return n||null}function qm(t){return t&&t.hasOwnProperty(ld)?t[ld]:null}var pd=xe({\u0275prov:xe}),ld=xe({\u0275inj:xe}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ah(t){return t&&!!t.\u0275providers}var sh=xe({\u0275cmp:xe}),lh=xe({\u0275dir:xe}),ch=xe({\u0275pipe:xe}),dh=xe({\u0275mod:xe}),Rs=xe({\u0275fac:xe}),Zr=xe({__NG_ELEMENT_ID__:xe}),Yy=xe({__NG_ENV_ID__:xe});function uh(t){return _d(t,"@NgModule"),t[dh]||null}function bi(t){return _d(t,"@Component"),t[sh]||null}function gd(t){return _d(t,"@Directive"),t[lh]||null}function Jy(t){return _d(t,"@Pipe"),t[ch]||null}function _d(t,n){if(t==null)throw new k(-919,!1)}function qo(t){return typeof t=="string"?t:t==null?"":String(t)}var eb=xe({ngErrorCode:xe}),oI=xe({ngErrorMessage:xe}),aI=xe({ngTokenPath:xe});function fh(t,n){return tb("",-200,n)}function vd(t,n){throw new k(-201,!1)}function tb(t,n,e){let i=new k(n,t);return i[eb]=n,i[oI]=t,e&&(i[aI]=e),i}function sI(t){return t[eb]}var Ym;function nb(){return Ym}function Mt(t){let n=Ym;return Ym=t,n}function mh(t,n,e){let i=Vs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;vd(t,"")}var lI={},Wr=lI,cI="__NG_DI_FLAG__",Zm=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Gr(e)||0;try{return this.injector.get(n,i&8?null:Wr,i)}catch(r){if(Wo(r))return r;throw r}}};function dI(t,n=0){let e=ad();if(e===void 0)throw new k(-203,!1);if(e===null)return mh(t,void 0,n);{let i=uI(n),r=e.retrieve(t,i);if(Wo(r)){if(i.optional)return null;throw r}return r}}function P(t,n=0){return(nb()||dI)(rt(t),n)}function d(t,n){return P(t,Gr(n))}function Gr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function uI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Qm(t){let n=[];for(let e=0;e<t.length;e++){let i=rt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new k(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=fI(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(P(r,o))}else n.push(P(i))}return n}function fI(t){return t[cI]}function tr(t,n){let e=t.hasOwnProperty(Rs);return e?t[Rs]:null}function ib(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function rb(t){return t.flat(Number.POSITIVE_INFINITY)}function yd(t,n){t.forEach(e=>Array.isArray(e)?yd(e,n):n(e))}function hh(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function js(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function ob(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function ab(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function bd(t,n,e){let i=Yo(t,n);return i>=0?t[i|1]=e:(i=~i,ab(t,i,n,e)),i}function Dd(t,n){let e=Yo(t,n);if(e>=0)return t[e|1]}function Yo(t,n){return mI(t,n,1)}function mI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Mn={},vt=[],or=new v(""),ph=new v("",-1),gh=new v(""),Os=class{get(n,e=Wr){if(e===Wr){let r=tb("",-201);throw r.name="\u0275NotFound",r}return e}};function Di(t){return{\u0275providers:t}}function sb(t){return Di([{provide:or,multi:!0,useValue:t}])}function lb(...t){return{\u0275providers:_h(!0,t),\u0275fromNgModule:!0}}function _h(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return yd(n,a=>{let s=a;cd(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&cb(r,o),e}function cb(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];vh(r,o=>{n(o,i)})}}function cd(t,n,e,i){if(t=rt(t),!t)return!1;let r=null,o=qm(t),a=!o&&bi(t);if(!o&&!a){let l=t.ngModule;if(o=qm(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)cd(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;yd(o.imports,u=>{cd(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&cb(c,n)}if(!s){let c=tr(r)||(()=>new r);n({provide:r,useFactory:c,deps:vt},r),n({provide:gh,useValue:r,multi:!0},r),n({provide:or,useValue:()=>P(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;vh(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function vh(t,n){for(let e of t)ah(e)&&(e=e.\u0275providers),Array.isArray(e)?vh(e,n):n(e)}var hI=xe({provide:String,useValue:xe});function db(t){return t!==null&&typeof t=="object"&&hI in t}function pI(t){return!!(t&&t.useExisting)}function gI(t){return!!(t&&t.useFactory)}function qr(t){return typeof t=="function"}function ub(t){return!!t.useClass}var Bs=new v(""),sd={},Zy={},Gm;function Zo(){return Gm===void 0&&(Gm=new Os),Gm}var ke=class{},Yr=class extends ke{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Xm(n,a=>this.processProvider(a)),this.records.set(ph,Go(void 0,this)),r.has("environment")&&this.records.set(ke,Go(void 0,this));let o=this.records.get(Bs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(gh,vt,{self:!0}))}retrieve(n,e){let i=Gr(e)||0;try{return this.get(n,Wr,i)}catch(r){if(Wo(r))return r;throw r}}destroy(){As(this),this._destroyed=!0;let n=Y(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Y(n)}}onDestroy(n){return As(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){As(this);let e=qn(this),i=Mt(void 0),r;try{return n()}finally{qn(e),Mt(i)}}get(n,e=Wr,i){if(As(this),n.hasOwnProperty(Yy))return n[Yy](this);let r=Gr(i),o,a=qn(this),s=Mt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=DI(n)&&Vs(n);u&&this.injectableDefInScope(u)?c=Go(Km(n),sd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Zo():this.parent;return e=r&8&&e===Wr?null:e,l.get(n,e)}catch(l){let c=sI(l);throw c===-200||c===-201?new k(c,null):l}finally{Mt(s),qn(a)}}resolveInjectorInitializers(){let n=Y(null),e=qn(this),i=Mt(void 0),r;try{let o=this.get(or,vt,{self:!0});for(let a of o)a()}finally{qn(e),Mt(i),Y(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=rt(n);let e=qr(n)?n:rt(n&&n.provide),i=vI(n);if(!qr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Go(void 0,sd,!0),r.factory=()=>Qm(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=Y(null);try{if(e.value===Zy)throw fh("");return e.value===sd&&(e.value=Zy,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&bI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{Y(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=rt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Km(t){let n=Vs(t),e=n!==null?n.factory:tr(t);if(e!==null)return e;if(t instanceof v)throw new k(-204,!1);if(t instanceof Function)return _I(t);throw new k(-204,!1)}function _I(t){if(t.length>0)throw new k(-204,!1);let e=rI(t);return e!==null?()=>e.factory(t):()=>new t}function vI(t){if(db(t))return Go(void 0,t.useValue);{let n=yh(t);return Go(n,sd)}}function yh(t,n,e){let i;if(qr(t)){let r=rt(t);return tr(r)||Km(r)}else if(db(t))i=()=>rt(t.useValue);else if(gI(t))i=()=>t.useFactory(...Qm(t.deps||[]));else if(pI(t))i=(r,o)=>P(rt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=rt(t&&(t.useClass||t.provide));if(yI(t))i=()=>new r(...Qm(t.deps));else return tr(r)||Km(r)}return i}function As(t){if(t.destroyed)throw new k(-205,!1)}function Go(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function yI(t){return!!t.deps}function bI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function DI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Xm(t,n){for(let e of t)Array.isArray(e)?Xm(e,n):e&&ah(e)?Xm(e.\u0275providers,n):n(e)}function ut(t,n){let e;t instanceof Yr?(As(t),e=t):e=new Zm(t);let i,r=qn(e),o=Mt(void 0);try{return n()}finally{qn(r),Mt(o)}}function fb(){return nb()!==void 0||ad()!=null}var Sn=0,Z=1,te=2,ot=3,an=4,It=5,Qr=6,Qo=7,Je=8,wi=9,In=10,Re=11,Ko=12,bh=13,Kr=14,kt=15,ar=16,Xr=17,Zn=18,Ci=19,Dh=20,vi=21,wd=22,nr=23,Zt=24,Jr=25,sr=26,ze=27,mb=1,wh=6,lr=7,Hs=8,eo=9,Qe=10;function xi(t){return Array.isArray(t)&&typeof t[mb]=="object"}function kn(t){return Array.isArray(t)&&t[mb]===!0}function Ch(t){return(t.flags&4)!==0}function Ei(t){return t.componentOffset>-1}function Xo(t){return(t.flags&1)===1}function Tn(t){return!!t.template}function Jo(t){return(t[te]&512)!==0}function to(t){return(t[te]&256)===256}var xh="svg",hb="math";function sn(t){for(;Array.isArray(t);)t=t[Sn];return t}function Eh(t,n){return sn(n[t])}function An(t,n){return sn(n[t.index])}function Cd(t,n){return t.data[n]}function Mh(t,n){return t[n]}function Sh(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function ln(t,n){let e=n[t];return xi(e)?e:e[Sn]}function pb(t){return(t[te]&4)===4}function xd(t){return(t[te]&128)===128}function gb(t){return kn(t[ot])}function cn(t,n){return n==null?null:t[n]}function Ih(t){t[Xr]=0}function kh(t){t[te]&1024||(t[te]|=1024,xd(t)&&no(t))}function _b(t,n){for(;t>0;)n=n[Kr],t--;return n}function Us(t){return!!(t[te]&9216||t[Zt]?.dirty)}function Ed(t){t[In].changeDetectionScheduler?.notify(8),t[te]&64&&(t[te]|=1024),Us(t)&&no(t)}function no(t){t[In].changeDetectionScheduler?.notify(0);let n=ir(t);for(;n!==null&&!(n[te]&8192||(n[te]|=8192,!xd(n)));)n=ir(n)}function Th(t,n){if(to(t))throw new k(911,!1);t[vi]===null&&(t[vi]=[]),t[vi].push(n)}function vb(t,n){if(t[vi]===null)return;let e=t[vi].indexOf(n);e!==-1&&t[vi].splice(e,1)}function ir(t){let n=t[ot];return kn(n)?n[ot]:n}function Ah(t){return t[Qo]??=[]}function Rh(t){return t.cleanup??=[]}function yb(t,n,e,i){let r=Ah(n);r.push(e),t.firstCreatePass&&Rh(t).push(i,r.length-1)}var ue={lFrame:Rb(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Jm=!1;function bb(){return ue.lFrame.elementDepthCount}function Db(){ue.lFrame.elementDepthCount++}function Oh(){ue.lFrame.elementDepthCount--}function Md(){return ue.bindingsEnabled}function Nh(){return ue.skipHydrationRootTNode!==null}function Fh(t){return ue.skipHydrationRootTNode===t}function Ph(){ue.skipHydrationRootTNode=null}function J(){return ue.lFrame.lView}function Ve(){return ue.lFrame.tView}function Ee(t){return ue.lFrame.contextLView=t,t[Je]}function Me(t){return ue.lFrame.contextLView=null,t}function at(){let t=Lh();for(;t!==null&&t.type===64;)t=t.parent;return t}function Lh(){return ue.lFrame.currentTNode}function wb(){let t=ue.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ea(t,n){let e=ue.lFrame;e.currentTNode=t,e.isParent=n}function Vh(){return ue.lFrame.isParent}function jh(){ue.lFrame.isParent=!1}function Cb(){return ue.lFrame.contextLView}function Bh(){return Jm}function Ns(t){let n=Jm;return Jm=t,n}function xb(){let t=ue.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Eb(){return ue.lFrame.bindingIndex}function Mb(t){return ue.lFrame.bindingIndex=t}function cr(){return ue.lFrame.bindingIndex++}function Sd(t){let n=ue.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Sb(){return ue.lFrame.inI18n}function Ib(t,n){let e=ue.lFrame;e.bindingIndex=e.bindingRootIndex=t,Id(n)}function kb(){return ue.lFrame.currentDirectiveIndex}function Id(t){ue.lFrame.currentDirectiveIndex=t}function Tb(t){let n=ue.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function kd(){return ue.lFrame.currentQueryIndex}function zs(t){ue.lFrame.currentQueryIndex=t}function wI(t){let n=t[Z];return n.type===2?n.declTNode:n.type===1?t[It]:null}function Hh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=wI(o),r===null||(o=o[Kr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ue.lFrame=Ab();return i.currentTNode=n,i.lView=t,!0}function Td(t){let n=Ab(),e=t[Z];ue.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Ab(){let t=ue.lFrame,n=t===null?null:t.child;return n===null?Rb(t):n}function Rb(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Ob(){let t=ue.lFrame;return ue.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Uh=Ob;function Ad(){let t=Ob();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Nb(t){return(ue.lFrame.contextLView=_b(t,ue.lFrame.contextLView))[Je]}function Qn(){return ue.lFrame.selectedIndex}function dr(t){ue.lFrame.selectedIndex=t}function $s(){let t=ue.lFrame;return Cd(t.tView,t.selectedIndex)}function Mi(){ue.lFrame.currentNamespace=xh}function ta(){CI()}function CI(){ue.lFrame.currentNamespace=null}function Fb(){return ue.lFrame.currentNamespace}var Pb=!0;function Rd(){return Pb}function Ws(t){Pb=t}function eh(t,n=null,e=null,i){let r=zh(t,n,e,i);return r.resolveInjectorInitializers(),r}function zh(t,n=null,e=null,i,r=new Set){let o=[e||vt,lb(t)],a;return new Yr(o,n||Zo(),a||null,r)}var z=class t{static THROW_IF_NOT_FOUND=Wr;static NULL=new Os;static create(n,e){if(Array.isArray(n))return eh({name:""},e,n,"");{let i=n.name??"";return eh({name:i},n.parent,n.providers,i)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>P(ph)});static __NG_ELEMENT_ID__=-1},H=new v(""),Tt=(()=>{class t{static __NG_ELEMENT_ID__=xI;static __NG_ENV_ID__=e=>e}return t})(),dd=class extends Tt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return to(this._lView)}onDestroy(n){let e=this._lView;return Th(e,n),()=>vb(e,n)}};function xI(){return new dd(J())}var Lb=!1,Vb=new v(""),Si=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Le(!1);debugTaskTracker=d(Vb,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ee(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),th=class extends C{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,fb()&&(this.destroyRef=d(Tt,{optional:!0})??void 0,this.pendingTasks=d(Si,{optional:!0})??void 0)}emit(n){let e=Y(null);try{super.next(n)}finally{Y(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof me&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},O=th;function ud(...t){}function $h(t){let n,e;function i(){t=ud;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function jb(t){return queueMicrotask(()=>t()),()=>{t=ud}}var Wh="isAngularZone",Fs=Wh+"_ID",EI=0,N=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new O(!1);onMicrotaskEmpty=new O(!1);onStable=new O(!1);onError=new O(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Lb}=n;if(typeof Zone>"u")throw new k(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,II(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Wh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new k(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new k(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,MI,ud,ud);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},MI={};function Gh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function SI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){$h(()=>{t.callbackScheduled=!1,nh(t),t.isCheckStableRunning=!0,Gh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),nh(t)}function II(t){let n=()=>{SI(t)},e=EI++;t._inner=t._inner.fork({name:"angular",properties:{[Wh]:!0,[Fs]:e,[Fs+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(kI(l))return i.invokeTask(o,a,s,l);try{return Qy(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Ky(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Qy(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!TI(l)&&n(),Ky(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,nh(t),Gh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function nh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Qy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ky(t){t._nesting--,Gh(t)}var Ps=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new O;onMicrotaskEmpty=new O;onStable=new O;onError=new O;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function kI(t){return Bb(t,"__ignore_ng_zone__")}function TI(t){return Bb(t,"__scheduler_tick__")}function Bb(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var St=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Qt=new v("",{factory:()=>{let t=d(N),n=d(ke),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(St),e.handleError(i))})}}}),Hb={provide:or,useValue:()=>{let t=d(St,{optional:!0})},multi:!0},AI=new v("",{factory:()=>{let t=d(H).defaultView;if(!t)return;let n=d(Qt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(Tt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function qh(){return Di([sb(()=>{d(AI)})])}function j(t,n){let[e,i,r]=Im(t,n?.equal),o=e,a=o[Ke];return o.set=i,o.update=r,o.asReadonly=Od.bind(o),o}function Od(){let t=this[Ke];if(t.readonlyFn===void 0){let n=()=>this();n[Ke]=t,t.readonlyFn=n}return t.readonlyFn}var na=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=RI}return t})();function RI(){return new na(J(),at())}var Yn=class{},Gs=new v("",{factory:()=>!0});var Yh=new v(""),qs=(()=>{class t{internalPendingTasks=d(Si);scheduler=d(Yn);errorHandler=d(Qt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Nd=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new ih})}return t})(),ih=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},fd=class{[Ke];constructor(n){this[Ke]=n}destroy(){this[Ke].destroy()}};function io(t,n){let e=n?.injector??d(z),i=n?.manualCleanup!==!0?e.get(Tt):null,r,o=e.get(na,null,{optional:!0}),a=e.get(Yn);return o!==null?(r=FI(o.view,a,t),i instanceof dd&&i._lView===o.view&&(i=null)):r=PI(t,e.get(Nd),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new fd(r)}var Ub=q(_({},km),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ns(!1);try{Tm(this)}finally{Ns(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=Y(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],Y(t)}}}),OI=q(_({},Ub),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Qi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),NI=q(_({},Ub),{consumerMarkedDirty(){this.view[te]|=8192,no(this.view),this.notifier.notify(13)},destroy(){if(Qi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[nr]?.delete(this)}});function FI(t,n,e){let i=Object.create(NI);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=zb(i,e),t[nr]??=new Set,t[nr].add(i),i.consumerMarkedDirty(i),i}function PI(t,n,e){let i=Object.create(OI);return i.fn=zb(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function zb(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function rl(t){return{toString:t}.toString()}function zI(t){return typeof t=="function"}function ED(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var $d=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Te=(()=>{let t=()=>MD;return t.ngInherit=!0,t})();function MD(t){return t.type.prototype.ngOnChanges&&(t.setInput=WI),$I}function $I(){let t=ID(this),n=t?.current;if(n){let e=t.previous;if(e===Mn)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function WI(t,n,e,i,r){let o=this.declaredInputs[i],a=ID(t)||GI(t,{previous:Mn,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new $d(c&&c.currentValue,e,l===Mn),ED(t,n,r,e)}var SD="__ngSimpleChanges__";function ID(t){return t[SD]||null}function GI(t,n){return t[SD]=n}var $b=[];var Se=function(t,n=null,e){for(let i=0;i<$b.length;i++){let r=$b[i];r(t,n,e)}},ve=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ve||{});function qI(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=MD(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function kD(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function jd(t,n,e){TD(t,n,3,e)}function Bd(t,n,e,i){(t[te]&3)===e&&TD(t,n,e,i)}function Zh(t,n){let e=t[te];(e&3)===n&&(e&=16383,e+=1,t[te]=e)}function TD(t,n,e,i){let r=i!==void 0?t[Xr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Xr]+=65536),(s<o||o==-1)&&(YI(t,e,n,l),t[Xr]=(t[Xr]&4294901760)+l+2),l++}function Wb(t,n){Se(ve.LifecycleHookStart,t,n);let e=Y(null);try{n.call(t)}finally{Y(e),Se(ve.LifecycleHookEnd,t,n)}}function YI(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[te]>>14<t[Xr]>>16&&(t[te]&3)===n&&(t[te]+=16384,Wb(s,o)):Wb(s,o)}var ra=-1,oo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function ZI(t){return(t.flags&8)!==0}function QI(t){return(t.flags&16)!==0}function KI(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];XI(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function AD(t){return t===3||t===4||t===6}function XI(t){return t.charCodeAt(0)===64}function oa(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Gb(t,e,r,null,n[++i]):Gb(t,e,r,null,null))}}return t}function Gb(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function RD(t){return t!==ra}function Wd(t){return t&32767}function JI(t){return t>>16}function Gd(t,n){let e=JI(t),i=n;for(;e>0;)i=i[Kr],e--;return i}var op=!0;function qd(t){let n=op;return op=t,n}var ek=256,OD=ek-1,ND=5,tk=0,Kn={};function nk(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Zr)&&(i=e[Zr]),i==null&&(i=e[Zr]=tk++);let r=i&OD,o=1<<r;n.data[t+(r>>ND)]|=o}function Yd(t,n){let e=FD(t,n);if(e!==-1)return e;let i=n[Z];i.firstCreatePass&&(t.injectorIndex=n.length,Qh(i.data,t),Qh(n,null),Qh(i.blueprint,null));let r=Up(t,n),o=t.injectorIndex;if(RD(r)){let a=Wd(r),s=Gd(r,n),l=s[Z].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Qh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function FD(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Up(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=BD(r),i===null)return ra;if(e++,r=r[Kr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return ra}function ap(t,n,e){nk(t,n,e)}function ik(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(AD(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function PD(t,n,e){if(e&8||t!==void 0)return t;vd(n,"NodeInjector")}function LD(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[wi],o=Mt(void 0);try{return r?r.get(n,i,e&8):mh(n,i,e&8)}finally{Mt(o)}}return PD(i,n,e)}function VD(t,n,e,i=0,r){if(t!==null){if(n[te]&2048&&!(i&2)){let a=sk(t,n,e,i,Kn);if(a!==Kn)return a}let o=jD(t,n,e,i,Kn);if(o!==Kn)return o}return LD(n,e,i,r)}function jD(t,n,e,i,r){let o=ok(e);if(typeof o=="function"){if(!Hh(n,t,i))return i&1?PD(r,e,i):LD(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))vd(e);else return a}finally{Uh()}}else if(typeof o=="number"){let a=null,s=FD(t,n),l=ra,c=i&1?n[kt][It]:null;for((s===-1||i&4)&&(l=s===-1?Up(t,n):n[s+8],l===ra||!Yb(i,!1)?s=-1:(a=n[Z],s=Wd(l),n=Gd(l,n)));s!==-1;){let u=n[Z];if(qb(o,s,u.data)){let f=rk(s,n,e,a,i,c);if(f!==Kn)return f}l=n[s+8],l!==ra&&Yb(i,n[Z].data[s+8]===c)&&qb(o,s,n)?(a=u,s=Wd(l),n=Gd(l,n)):s=-1}}return r}function rk(t,n,e,i,r,o){let a=n[Z],s=a.data[t+8],l=i==null?Ei(s)&&op:i!=a&&(s.type&3)!==0,c=r&1&&o===s,u=Hd(s,a,e,l,c);return u!==null?Ks(n,a,u,s,r):Kn}function Hd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?s:s+u,m=r?s+u:c;for(let h=f;h<m;h++){let y=a[h];if(h<l&&e===y||h>=l&&y.type===e)return h}if(r){let h=a[l];if(h&&Tn(h)&&h.type===e)return l}return null}function Ks(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof oo){let s=o;if(s.resolving)throw fh("");let l=qd(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],u,f=s.injectImpl?Mt(s.injectImpl):null,m=Hh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&qI(e,a[e],n)}finally{f!==null&&Mt(f),qd(l),s.resolving=!1,Uh()}}return o}function ok(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Zr)?t[Zr]:void 0;return typeof n=="number"?n>=0?n&OD:ak:n}function qb(t,n,e){let i=1<<t;return!!(e[n+(t>>ND)]&i)}function Yb(t,n){return!(t&2)&&!(t&1&&n)}var ro=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return VD(this._tNode,this._lView,n,Gr(i),e)}};function ak(){return new ro(at(),J())}function ye(t){return rl(()=>{let n=t.prototype.constructor,e=n[Rs]||sp(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Rs]||sp(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function sp(t){return rh(t)?()=>{let n=sp(rt(t));return n&&n()}:tr(t)}function sk(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[te]&2048&&!Jo(a);){let s=jD(o,a,e,i|2,Kn);if(s!==Kn)return s;let l=o.parent;if(!l){let c=a[Dh];if(c){let u=c.get(e,Kn,i&-5);if(u!==Kn)return u}l=BD(a),a=a[Kr]}o=l}return r}function BD(t){let n=t[Z],e=n.type;return e===2?n.declTNode:e===1?t[It]:null}function ol(t){return ik(at(),t)}function lk(){return ca(at(),J())}function ca(t,n){return new T(An(t,n))}var T=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=lk}return t})();function HD(t){return t instanceof T?t.nativeElement:t}function ck(){return this._results[Symbol.iterator]()}var Zd=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new C}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=rb(n);(this._changesDetected=!ib(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=ck};function UD(t){return(t.flags&128)===128}var zp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(zp||{}),zD=new Map,dk=0;function uk(){return dk++}function fk(t){zD.set(t[Ci],t)}function lp(t){zD.delete(t[Ci])}var Zb="__ngContext__";function aa(t,n){xi(n)?(t[Zb]=n[Ci],fk(n)):t[Zb]=n}function $D(t){return GD(t[Ko])}function WD(t){return GD(t[an])}function GD(t){for(;t!==null&&!kn(t);)t=t[an];return t}var mk;function $p(t){mk=t}var fr=new v("",{factory:()=>hk}),hk="ng";var lu=new v(""),co=new v("",{providedIn:"platform",factory:()=>"unknown"}),al=new v(""),uo=new v("",{factory:()=>d(H).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var qD="r";var YD="di";var ZD=!1,QD=new v("",{factory:()=>ZD});var Qb=new WeakMap;function pk(t,n){if(t==null||typeof t!="object")return;let e=Qb.get(t);e||(e=new WeakSet,Qb.set(t,e)),e.add(n)}var gk=(t,n,e,i)=>{};function _k(t,n,e,i){gk(t,n,e,i)}function cu(t){return(t.flags&32)===32}var vk=()=>null;function KD(t,n,e=!1){return vk(t,n,e)}function XD(t,n){let e=t.contentQueries;if(e!==null){let i=Y(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];zs(o),s.contentQueries(2,n[a],a)}}}finally{Y(i)}}}function cp(t,n,e){zs(0);let i=Y(null);try{n(t,e)}finally{Y(i)}}function Wp(t,n,e){if(Ch(n)){let i=Y(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{Y(i)}}}var Nn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Nn||{});var Fd;function yk(){if(Fd===void 0&&(Fd=null,rr.trustedTypes))try{Fd=rr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Fd}function du(t){return yk()?.createHTML(t)||t}var Pd;function bk(){if(Pd===void 0&&(Pd=null,rr.trustedTypes))try{Pd=rr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Pd}function Kb(t){return bk()?.createScriptURL(t)||t}var Ii=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${md})`}},dp=class extends Ii{getTypeName(){return"HTML"}},up=class extends Ii{getTypeName(){return"Style"}},fp=class extends Ii{getTypeName(){return"Script"}},mp=class extends Ii{getTypeName(){return"URL"}},hp=class extends Ii{getTypeName(){return"ResourceURL"}};function Pn(t){return t instanceof Ii?t.changingThisBreaksApplicationSecurity:t}function ki(t,n){let e=JD(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${md})`)}return e===n}function JD(t){return t instanceof Ii&&t.getTypeName()||null}function Gp(t){return new dp(t)}function qp(t){return new up(t)}function Yp(t){return new fp(t)}function Zp(t){return new mp(t)}function Qp(t){return new hp(t)}function Dk(t){let n=new gp(t);return wk()?new pp(n):n}var pp=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(du(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},gp=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=du(n),e}};function wk(){try{return!!new window.DOMParser().parseFromString(du(""),"text/html")}catch{return!1}}var Ck=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function sl(t){return t=String(t),t.match(Ck)?t:"unsafe:"+t}function Ti(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function ll(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var ew=Ti("area,br,col,hr,img,wbr"),tw=Ti("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),nw=Ti("rp,rt"),xk=ll(nw,tw),Ek=ll(tw,Ti("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Mk=ll(nw,Ti("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Xb=ll(ew,Ek,Mk,xk),iw=Ti("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Sk=Ti("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Ik=Ti("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),kk=ll(iw,Sk,Ik),Tk=Ti("script,style,template");var _p=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=Ok(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=Rk(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Jb(n).toLowerCase();if(!Xb.hasOwnProperty(e))return this.sanitizedSomething=!0,!Tk.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!kk.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;iw[s]&&(l=sl(l)),this.buf.push(" ",a,'="',eD(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Jb(n).toLowerCase();Xb.hasOwnProperty(e)&&!ew.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(eD(n))}};function Ak(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Rk(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw rw(n);return n}function Ok(t){let n=t.firstChild;if(n&&Ak(t,n))throw rw(n);return n}function Jb(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function rw(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var Nk=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Fk=/([^\#-~ |!])/g;function eD(t){return t.replace(/&/g,"&amp;").replace(Nk,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(Fk,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ld;function Kp(t,n){let e=null;try{Ld=Ld||Dk(t);let i=n?String(n):"";e=Ld.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Ld.getInertBodyElement(i)}while(i!==o);let s=new _p().sanitizeChildren(tD(e)||e);return du(s)}finally{if(e){let i=tD(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function tD(t){return"content"in t&&Pk(t)?t.content:null}function Pk(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var Lk=/^>|^->|<!--|-->|--!>|<!-$/g,Vk=/(<|>)/g,jk="\u200B$1\u200B";function Bk(t){return t.replace(Lk,n=>n.replace(Vk,jk))}function Hk(t,n){return t.createText(n)}function Uk(t,n,e){t.setValue(n,e)}function zk(t,n){return t.createComment(Bk(n))}function ow(t,n,e){return t.createElement(n,e)}function Qd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function aw(t,n,e){t.appendChild(n,e)}function nD(t,n,e,i,r){i!==null?Qd(t,n,e,i,r):aw(t,n,e)}function sw(t,n,e,i){t.removeChild(null,n,e,i)}function $k(t,n,e){t.setAttribute(n,"style",e)}function Wk(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function lw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&KI(t,n,i),r!==null&&Wk(t,n,r),o!==null&&$k(t,n,o)}var st=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(st||{});function cw(t){let n=uw();return n?n.sanitize(st.URL,t)||"":ki(t,"URL")?Pn(t):sl(qo(t))}function dw(t){let n=uw();if(n)return Kb(n.sanitize(st.RESOURCE_URL,t)||"");if(ki(t,"ResourceURL"))return Kb(Pn(t));throw new k(904,!1)}var Gk={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function qk(t,n){return Gk[t]?.[n]===!0?dw:cw}function Xp(t,n,e){return qk(n,e)(t)}function uw(){let t=J();return t&&t[In].sanitizer}function fw(t){return t instanceof Function?t():t}function Yk(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var mw="ng-template";function Zk(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Yk(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Jp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Jp(t){return t.type===4&&t.value!==mw}function Qk(t,n,e){let i=t.type===4&&!e?mw:t.value;return n===i}function Kk(t,n,e){let i=4,r=t.attrs,o=r!==null?eT(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Rn(i)&&!Rn(l))return!1;if(a&&Rn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!Qk(t,l,e)||l===""&&n.length===1){if(Rn(i))return!1;a=!0}}else if(i&8){if(r===null||!Zk(t,r,l,e)){if(Rn(i))return!1;a=!0}}else{let c=n[++s],u=Xk(l,r,Jp(t),e);if(u===-1){if(Rn(i))return!1;a=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(Rn(i))return!1;a=!0}}}}return Rn(i)||a}function Rn(t){return(t&1)===0}function Xk(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return tT(n,t)}function hw(t,n,e=!1){for(let i=0;i<n.length;i++)if(Kk(t,n[i],e))return!0;return!1}function Jk(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function eT(t){for(let n=0;n<t.length;n++){let e=t[n];if(AD(e))return n}return t.length}function tT(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function nT(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function iD(t,n){return t?":not("+n.trim()+")":n}function iT(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Rn(a)&&(n+=iD(o,r),r=""),i=a,o=o||!Rn(i);e++}return r!==""&&(n+=iD(o,r)),n}function rT(t){return t.map(iT).join(",")}function oT(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Rn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Lt={};function eg(t,n,e,i,r,o,a,s,l,c,u){let f=ze+i,m=f+r,h=aT(f,m),y=typeof c=="function"?c():c;return h[Z]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:u}}function aT(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Lt);return e}function sT(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=eg(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function tg(t,n,e,i,r,o,a,s,l,c,u){let f=n.blueprint.slice();return f[Sn]=r,f[te]=i|4|128|8|64|1024,(c!==null||t&&t[te]&2048)&&(f[te]|=2048),Ih(f),f[ot]=f[Kr]=t,f[Je]=e,f[In]=a||t&&t[In],f[Re]=s||t&&t[Re],f[wi]=l||t&&t[wi]||null,f[It]=o,f[Ci]=uk(),f[Qr]=u,f[Dh]=c,f[kt]=n.type==2?t[kt]:f,f}function lT(t,n,e){let i=An(n,t),r=sT(e),o=t[In].rendererFactory,a=ng(t,tg(t,r,null,pw(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function pw(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function gw(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function ng(t,n){return t[Ko]?t[bh][an]=n:t[Ko]=n,t[bh]=n,n}function D(t=1){_w(Ve(),J(),Qn()+t,!1)}function _w(t,n,e,i){if(!i)if((n[te]&3)===3){let o=t.preOrderCheckHooks;o!==null&&jd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Bd(n,o,0,e)}dr(e)}var uu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(uu||{});function vp(t,n,e,i){let r=Y(null);try{let[o,a,s]=t.inputs[e],l=null;(a&uu.SignalBased)!==0&&(l=n[o][Ke]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):ED(n,l,o,i)}finally{Y(r)}}var Xn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Xn||{}),cT;function ig(t,n){return cT(t,n)}var o4=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var yp=new WeakMap,Ys=new WeakSet;function dT(t,n){let e=yp.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Ys.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function uT(t,n){let e=yp.get(t);e?e.includes(n)||e.push(n):yp.set(t,[n])}var ao=new Set,fu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(fu||{}),Ln=new v(""),rD=new Set;function mr(t){rD.has(t)||(rD.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var mu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),rg=[0,1,2,3],og=(()=>{class t{ngZone=d(N);scheduler=d(Yn);errorHandler=d(St,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(Ln,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Se(ve.AfterRenderHooksStart),this.executing=!0;for(let i of rg)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Se(ve.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Jr]??=[]).push(e),no(i),i[te]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(fu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Xs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Jr];n&&(this.view[Jr]=n.filter(e=>e!==this))}};function je(t,n){let e=n?.injector??d(z);return mr("NgAfterNextRender"),mT(t,e,n,!0)}function fT(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function mT(t,n,e,i){let r=n.get(mu);r.impl??=n.get(og);let o=n.get(Ln,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Tt):null,s=n.get(na,null,{optional:!0}),l=new Xs(r.impl,fT(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var vw=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(ke)})});function yw(t,n,e){let i=t.get(vw);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function hT(t,n){let e=t.get(vw);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function pT(t,n){for(let[e,i]of n)yw(t,i.animateFns)}function oD(t,n,e,i){let r=t?.[sr]?.enter;n!==null&&r&&r.has(e.index)&&pT(i,r)}function ia(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;kn(r)?l=r:xi(r)&&(c=!0,r=r[Sn]);let u=sn(r);t===0&&i!==null?(oD(s,i,o,e),a==null?aw(n,i,u):Qd(n,i,u,a||null,!0)):t===1&&i!==null?(oD(s,i,o,e),Qd(n,i,u,a||null,!0),dT(o,u)):t===2?(s?.[sr]?.leave?.has(o.index)&&uT(o,u),Ys.delete(u),aD(s,o,e,f=>{if(Ys.has(u)){Ys.delete(u);return}sw(n,u,c,f)})):t===3&&(Ys.delete(u),aD(s,o,e,()=>{n.destroyNode(u)})),l!=null&&MT(n,t,e,l,o,i,a)}}function gT(t,n){bw(t,n),n[Sn]=null,n[It]=null}function _T(t,n,e,i,r,o){i[Sn]=r,i[It]=n,pu(t,i,e,1,r,o)}function bw(t,n){n[In].changeDetectionScheduler?.notify(9),pu(t,n,n[Re],2,null,null)}function vT(t){let n=t[Ko];if(!n)return Kh(t[Z],t);for(;n;){let e=null;if(xi(n))e=n[Ko];else{let i=n[Qe];i&&(e=i)}if(!e){for(;n&&!n[an]&&n!==t;)xi(n)&&Kh(n[Z],n),n=n[ot];n===null&&(n=t),xi(n)&&Kh(n[Z],n),e=n&&n[an]}n=e}}function ag(t,n){let e=t[eo],i=e.indexOf(n);e.splice(i,1)}function hu(t,n){if(to(n))return;let e=n[Re];e.destroyNode&&pu(t,n,e,3,null,null),vT(n)}function Kh(t,n){if(to(n))return;let e=Y(null);try{n[te]&=-129,n[te]|=256,n[Zt]&&Qi(n[Zt]),DT(t,n),bT(t,n),n[Z].type===1&&n[Re].destroy();let i=n[ar];if(i!==null&&kn(n[ot])){i!==n[ot]&&ag(i,n);let r=n[Zn];r!==null&&r.detachView(t)}lp(n)}finally{Y(e)}}function aD(t,n,e,i){let r=t?.[sr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&ao.add(t[Ci]),yw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:u}=c();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),yT(t,i)}else t&&ao.delete(t[Ci]),i(!1)},r)}function yT(t,n){let e=t[sr]?.running;if(e){e.then(()=>{t[sr].running=void 0,ao.delete(t[Ci]),n(!0)});return}n(!1)}function bT(t,n){let e=t.cleanup,i=n[Qo];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Qo]=null);let r=n[vi];if(r!==null){n[vi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[nr];if(o!==null){n[nr]=null;for(let a of o)a.destroy()}}function DT(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof oo)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Se(ve.LifecycleHookStart,s,l);try{l.call(s)}finally{Se(ve.LifecycleHookEnd,s,l)}}else{Se(ve.LifecycleHookStart,r,o);try{o.call(r)}finally{Se(ve.LifecycleHookEnd,r,o)}}}}}function Dw(t,n,e){return wT(t,n.parent,e)}function wT(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Sn];if(Ei(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Nn.None||r===Nn.Emulated)return null}return An(i,e)}function ww(t,n,e){return xT(t,n,e)}function CT(t,n,e){return t.type&40?An(t,e):null}var xT=CT,sD;function sg(t,n,e,i){let r=Dw(t,i,n),o=n[Re],a=i.parent||n[It],s=ww(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)nD(o,r,e[l],s,!1);else nD(o,r,e,s,!1);sD!==void 0&&sD(o,i,n,e,r)}function Zs(t,n){if(n!==null){let e=n.type;if(e&3)return An(n,t);if(e&4)return bp(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Zs(t,i);{let r=t[n.index];return kn(r)?bp(-1,r):sn(r)}}else{if(e&128)return Zs(t,n.next);if(e&32)return ig(n,t)()||sn(t[n.index]);{let i=Cw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ir(t[kt]);return Zs(r,i)}else return Zs(t,n.next)}}}return null}function Cw(t,n){if(n!==null){let i=t[kt][It],r=n.projection;return i.projection[r]}return null}function bp(t,n){let e=Qe+t+1;if(e<n.length){let i=n[e],r=i[Z].firstChild;if(r!==null)return Zs(i,r)}return n[lr]}function lg(t,n,e,i,r,o,a){for(;e!=null;){let s=i[wi];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&aa(sn(l),i),e.flags|=2),!cu(e))if(c&8)lg(t,n,e.child,i,r,o,!1),ia(n,t,s,r,l,e,o,i);else if(c&32){let u=ig(e,i),f;for(;f=u();)ia(n,t,s,r,f,e,o,i);ia(n,t,s,r,l,e,o,i)}else c&16?xw(t,n,i,e,r,o):ia(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function pu(t,n,e,i,r,o){lg(e,i,t.firstChild,n,r,o,!1)}function ET(t,n,e){let i=n[Re],r=Dw(t,e,n),o=e.parent||n[It],a=ww(o,e,n);xw(i,0,n,e,r,a)}function xw(t,n,e,i,r,o){let a=e[kt],l=a[It].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];ia(n,t,e[wi],r,u,i,o,e)}else{let c=l,u=a[ot];UD(i)&&(c.flags|=128),lg(t,n,c,u,r,o,!0)}}function MT(t,n,e,i,r,o,a){let s=i[lr],l=sn(i);s!==l&&ia(n,t,e,o,s,r,a);for(let c=Qe;c<i.length;c++){let u=i[c];pu(u[Z],u,t,n,o,s)}}function ST(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Xn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Xn.Important),t.setStyle(e,i,r,o))}}function Ew(t,n,e,i,r){let o=Qn(),a=i&2;try{dr(-1),a&&n.length>ze&&_w(t,n,ze,!1);let s=a?ve.TemplateUpdateStart:ve.TemplateCreateStart;Se(s,r,e),e(i,r)}finally{dr(o);let s=a?ve.TemplateUpdateEnd:ve.TemplateCreateEnd;Se(s,r,e)}}function gu(t,n,e){OT(t,n,e),(e.flags&64)===64&&NT(t,n,e)}function cl(t,n,e=An){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function IT(t,n,e,i){let o=i.get(QD,ZD)||e===Nn.ShadowDom||e===Nn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return kT(a),a}function kT(t){TT(t)}var TT=()=>null;function AT(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Mw(t,n,e,i,r,o){let a=n[Z];if(fg(t,a,n,e,i)){Ei(t)&&RT(n,t.index);return}t.type&3&&(e=AT(e)),Sw(t,n,e,i,r,o)}function Sw(t,n,e,i,r,o){if(t.type&3){let a=An(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function RT(t,n){let e=ln(n,t);e[te]&16||(e[te]|=64)}function OT(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Ei(e)&&lT(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Yd(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Ks(n,t,a,e);if(aa(l,n),o!==null&&VT(n,a-i,l,s,e,o),Tn(s)){let c=ln(e.index,n);c[Je]=Ks(n,t,a,e)}}}function NT(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=kb();try{dr(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Id(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&FT(l,c)}}finally{dr(-1),Id(a)}}function FT(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function cg(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];hw(n,o.selectors,!1)&&(i??=[],Tn(o)?i.unshift(o):i.push(o))}return i}function PT(t,n,e,i,r,o){let a=An(t,n);LT(n[Re],a,o,t.value,e,i,r)}function LT(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?qo(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function VT(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];vp(i,e,l,c)}}function dg(t,n,e,i,r){let o=ze+e,a=n[Z],s=r(a,n,t,i,e);n[o]=s,ea(t,!0);let l=t.type===2;return l?(lw(n[Re],s,t),(bb()===0||Xo(t))&&aa(s,n),Db()):aa(s,n),Rd()&&(!l||!cu(t))&&sg(a,n,s,t),t}function ug(t){let n=t;return Vh()?jh():(n=n.parent,ea(n,!1)),n}function jT(t,n){let e=t[wi];if(!e)return;let i;try{i=e.get(Qt,null)}catch{i=null}i?.(n)}function fg(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],u=a[l+1],f=n.data[c];vp(f,e[c],u,r),s=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];vp(u,c,i,r),s=!0}return s}function BT(t,n){let e=ln(n,t),i=e[Z];HT(i,e);let r=e[Sn];r!==null&&e[Qr]===null&&(e[Qr]=KD(r,e[wi])),Se(ve.ComponentStart);try{mg(i,e,e[Je])}finally{Se(ve.ComponentEnd,e[Je])}}function HT(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function mg(t,n,e){Td(n);try{let i=t.viewQuery;i!==null&&cp(1,i,e);let r=t.template;r!==null&&Ew(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Zn]?.finishViewCreation(t),t.staticContentQueries&&XD(t,n),t.staticViewQueries&&cp(2,t.viewQuery,e);let o=t.components;o!==null&&UT(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[te]&=-5,Ad()}}function UT(t,n){for(let e=0;e<n.length;e++)BT(t,n[e])}function dl(t,n,e,i){let r=Y(null);try{let o=n.tView,s=t[te]&4096?4096:16,l=tg(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[ar]=c;let u=t[Zn];return u!==null&&(l[Zn]=u.createEmbeddedView(o)),mg(o,l,e),l}finally{Y(r)}}function sa(t,n){return!n||n.firstChild===null||UD(t)}function Js(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(sn(o)),kn(o)&&Iw(o,i);let a=e.type;if(a&8)Js(t,n,e.child,i);else if(a&32){let s=ig(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=Cw(n,e);if(Array.isArray(s))i.push(...s);else{let l=ir(n[kt]);Js(l[Z],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function Iw(t,n){for(let e=Qe;e<t.length;e++){let i=t[e],r=i[Z].firstChild;r!==null&&Js(i[Z],i,r,n)}t[lr]!==t[Sn]&&n.push(t[lr])}function kw(t){if(t[Jr]!==null){for(let n of t[Jr])n.impl.addSequence(n);t[Jr].length=0}}var Tw=[];function zT(t){return t[Zt]??$T(t)}function $T(t){let n=Tw.pop()??Object.create(GT);return n.lView=t,n}function WT(t){t.lView[Zt]!==t&&(t.lView=null,Tw.push(t))}var GT=q(_({},qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{no(t.lView)},consumerOnSignalRead(){this.lView[Zt]=this}});function qT(t){let n=t[Zt]??Object.create(YT);return n.lView=t,n}var YT=q(_({},qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ir(t.lView);for(;n&&!Aw(n[Z]);)n=ir(n);n&&kh(n)},consumerOnSignalRead(){this.lView[Zt]=this}});function Aw(t){return t.type!==2}function Rw(t){if(t[nr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[nr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[te]&8192)}}var ZT=100;function Ow(t,n=0){let i=t[In].rendererFactory,r=!1;r||i.begin?.();try{QT(t,n)}finally{r||i.end?.()}}function QT(t,n){let e=Bh();try{Ns(!0),Dp(t,n);let i=0;for(;Us(t);){if(i===ZT)throw new k(103,!1);i++,Dp(t,1)}}finally{Ns(e)}}function KT(t,n,e,i){if(to(n))return;let r=n[te],o=!1,a=!1;Td(n);let s=!0,l=null,c=null;o||(Aw(t)?(c=zT(n),l=hi(c)):xc()===null?(s=!1,c=qT(n),l=hi(c)):n[Zt]&&(Qi(n[Zt]),n[Zt]=null));try{Ih(n),Mb(t.bindingStartIndex),e!==null&&Ew(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&jd(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Bd(n,h,0,null),Zh(n,0)}if(a||XT(n),Rw(n),Nw(n,0),t.contentQueries!==null&&XD(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&jd(n,h)}else{let h=t.contentHooks;h!==null&&Bd(n,h,1),Zh(n,1)}eA(t,n);let f=t.components;f!==null&&Pw(n,f,0);let m=t.viewQuery;if(m!==null&&cp(2,m,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&jd(n,h)}else{let h=t.viewHooks;h!==null&&Bd(n,h,2),Zh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[wd]){for(let h of n[wd])h();n[wd]=null}o||(kw(n),n[te]&=-73)}catch(u){throw o||no(n),u}finally{c!==null&&(Zi(c,l),s&&WT(c)),Ad()}}function Nw(t,n){for(let e=$D(t);e!==null;e=WD(e))for(let i=Qe;i<e.length;i++){let r=e[i];Fw(r,n)}}function XT(t){for(let n=$D(t);n!==null;n=WD(n)){if(!(n[te]&2))continue;let e=n[eo];for(let i=0;i<e.length;i++){let r=e[i];kh(r)}}}function JT(t,n,e){Se(ve.ComponentStart);let i=ln(n,t);try{Fw(i,e)}finally{Se(ve.ComponentEnd,i[Je])}}function Fw(t,n){xd(t)&&Dp(t,n)}function Dp(t,n){let i=t[Z],r=t[te],o=t[Zt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Fo(o)),a||=!1,o&&(o.dirty=!1),t[te]&=-9217,a)KT(i,t,i.template,t[Je]);else if(r&8192){let s=Y(null);try{Rw(t),Nw(t,1);let l=i.components;l!==null&&Pw(t,l,1),kw(t)}finally{Y(s)}}}function Pw(t,n,e){for(let i=0;i<n.length;i++)JT(t,n[i],e)}function eA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)dr(~r);else{let o=r,a=e[++i],s=e[++i];Ib(a,o);let l=n[o];Se(ve.HostBindingsUpdateStart,l);try{s(2,l)}finally{Se(ve.HostBindingsUpdateEnd,l)}}}}finally{dr(-1)}}function hg(t,n){let e=Bh()?64:1088;for(t[In].changeDetectionScheduler?.notify(n);t;){t[te]|=e;let i=ir(t);if(Jo(t)&&!i)return t;t=i}return null}function Lw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Vw(t,n){let e=Qe+n;if(e<t.length)return t[e]}function ul(t,n,e,i=!0){let r=n[Z];if(tA(r,n,t,e),i){let a=bp(e,t),s=n[Re],l=s.parentNode(t[lr]);l!==null&&_T(r,t[It],s,n,l,a)}let o=n[Qr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function jw(t,n){let e=el(t,n);return e!==void 0&&hu(e[Z],e),e}function el(t,n){if(t.length<=Qe)return;let e=Qe+n,i=t[e];if(i){let r=i[ar];r!==null&&r!==t&&ag(r,i),n>0&&(t[e-1][an]=i[an]);let o=js(t,Qe+n);gT(i[Z],i);let a=o[Zn];a!==null&&a.detachView(o[Z]),i[ot]=null,i[an]=null,i[te]&=-129}return i}function tA(t,n,e,i){let r=Qe+i,o=e.length;i>0&&(e[r-1][an]=n),i<o-Qe?(n[an]=e[r],hh(e,Qe+i,n)):(e.push(n),n[an]=null),n[ot]=e;let a=n[ar];a!==null&&e!==a&&Bw(a,n);let s=n[Zn];s!==null&&s.insertView(t),Ed(n),n[te]|=128}function Bw(t,n){let e=t[eo],i=n[ot];if(xi(i))t[te]|=2;else{let r=i[ot][kt];n[kt]!==r&&(t[te]|=2)}e===null?t[eo]=[n]:e.push(n)}var ur=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[Z];return Js(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Je]}set context(n){this._lView[Je]=n}get destroyed(){return to(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[ot];if(kn(n)){let e=n[Hs],i=e?e.indexOf(this):-1;i>-1&&(el(n,i),js(e,i))}this._attachedToViewContainer=!1}hu(this._lView[Z],this._lView)}onDestroy(n){Th(this._lView,n)}markForCheck(){hg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[te]&=-129}reattach(){Ed(this._lView),this._lView[te]|=128}detectChanges(){this._lView[te]|=1024,Ow(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new k(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Jo(this._lView),e=this._lView[ar];e!==null&&!n&&ag(e,this._lView),bw(this._lView[Z],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new k(902,!1);this._appRef=n;let e=Jo(this._lView),i=this._lView[ar];i!==null&&!e&&Bw(i,this._lView),Ed(this._lView)}};var We=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=nA;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=dl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new ur(o)}}return t})();function nA(){return _u(at(),J())}function _u(t,n){return t.type&4?new We(n,t,ca(t,n)):null}function da(t,n,e,i,r){let o=t.data[n];if(o===null)o=iA(t,n,e,i,r),Sb()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=wb();o.injectorIndex=a===null?-1:a.injectorIndex}return ea(o,!0),o}function iA(t,n,e,i,r){let o=Lh(),a=Vh(),s=a?o:o&&o.parent,l=t.data[n]=oA(t,s,e,n,i,r);return rA(t,l,o,a),l}function rA(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function oA(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Nh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function aA(t){let n=t[wh]??[],i=t[ot][Re],r=[];for(let o of n)o.data[YD]!==void 0?r.push(o):sA(o,i);t[wh]=r}function sA(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[qD];for(;e<r;){let o=i.nextSibling;sw(n,i,!1),i=o,e++}}}var lA=()=>null,cA=()=>null;function Kd(t,n){return lA(t,n)}function Hw(t,n,e){return cA(t,n,e)}var Uw=class{},vu=class{},wp=class{resolveComponentFactory(n){throw new k(917,!1)}},fl=class{static NULL=new wp},it=class{},Ne=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>dA()}return t})();function dA(){let t=J(),n=at(),e=ln(n.index,t);return(xi(e)?e:t)[Re]}var zw=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var Ud={},Cp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Ud,i);return r!==Ud||e===Ud?r:this.parentInjector.get(n,e,i)}};function Xd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=hd(r,s);else if(o==2){let l=s,c=n[++a];i=hd(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function R(t,n=0){let e=J();if(e===null)return P(t,n);let i=at();return VD(i,e,rt(t),n)}function yu(){let t="invalid";throw new Error(t)}function $w(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,c]=u.resolveHostDirectives(a);break}mA(t,n,e,s,o,l,c)}o!==null&&i!==null&&uA(e,i,o)}function uA(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new k(-301,!1);i.push(n[r],o)}}function fA(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function mA(t,n,e,i,r,o,a){let s=i.length,l=null;for(let m=0;m<s;m++){let h=i[m];l===null&&Tn(h)&&(l=h,fA(t,e,m)),ap(Yd(e,n),t,h.type)}yA(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<s;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let c=!1,u=!1,f=gw(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let m=0;m<s;m++){let h=i[m];if(e.mergedAttrs=oa(e.mergedAttrs,h.hostAttrs),pA(t,e,n,f,h),vA(f,h,r),a!==null&&a.has(h)){let[S,E]=a.get(h);e.directiveToIndex.set(h.type,[f,S+e.directiveStart,E+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let y=h.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}hA(t,e,o)}function hA(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))lD(0,n,r,i),lD(1,n,r,i),dD(n,i,!1);else{let o=e.get(r);cD(0,n,o,i),cD(1,n,o,i),dD(n,i,!0)}}}function lD(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),Ww(n,o)}}function cD(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),Ww(n,a)}}function Ww(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function dD(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Jp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){a??=[],a.push(c[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function pA(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=tr(r.type,!0)),a=new oo(o,Tn(r),R,null);t.blueprint[i]=a,e[i]=a,gA(t,n,i,gw(t,e,r.hostVars,Lt),r)}function gA(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;_A(a)!=s&&a.push(s),a.push(e,i,o)}}function _A(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function vA(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Tn(n)&&(e[""]=t)}}function yA(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function pg(t,n,e,i,r,o,a,s){let l=n[Z],c=l.consts,u=cn(c,a),f=da(l,t,e,i,u);return o&&$w(l,n,f,cn(c,s),r),f.mergedAttrs=oa(f.mergedAttrs,f.attrs),f.attrs!==null&&Xd(f,f.attrs,!1),f.mergedAttrs!==null&&Xd(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function gg(t,n){kD(t,n),Ch(n)&&t.queries.elementEnd(n)}function bA(t,n,e,i,r,o){let a=n.consts,s=cn(a,r),l=da(n,t,e,i,s);if(l.mergedAttrs=oa(l.mergedAttrs,l.attrs),o!=null){let c=cn(a,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&Xd(l,l.attrs,!1),l.mergedAttrs!==null&&Xd(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function _g(t){return qw(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function Gw(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),i;for(;!(i=e.next()).done;)n(i.value)}}function qw(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function DA(t,n,e){return t[n]=e}function Fn(t,n,e){if(e===Lt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Yw(t,n,e,i){let r=Fn(t,n,e);return Fn(t,n+1,i)||r}function zd(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&pk(r,o);let a=Ei(t)?ln(t.index,n):n;hg(a,5);let s=n[Je],l=uD(n,s,e,r),c=i.__ngNextListenerFn__;for(;c;)l=uD(n,s,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function uD(t,n,e,i){let r=Y(null);try{return Se(ve.OutputStart,n,e),e(i)!==!1}catch(o){return jT(t,o),!1}finally{Se(ve.OutputEnd,n,e),Y(r)}}function Zw(t,n,e,i,r,o,a,s){let l=Xo(t),c=!1,u=null;if(!i&&l&&(u=CA(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,c=!0}else{let f=An(t,e),m=i?i(f):f;_k(e,m,o,s),i||(s.__ngNativeEl__=f);let h=r.listen(m,o,s);if(!wA(o)){let y=i?S=>i(sn(S[t.index])):t.index;Qw(y,n,e,o,s,h,!1)}}return c}function wA(t){return t.startsWith("animation")||t.startsWith("transition")}function CA(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Qo],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function Qw(t,n,e,i,r,o,a){let s=n.firstCreatePass?Rh(n):null,l=Ah(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function fD(t,n,e,i,r,o){let a=n[e],s=n[Z],c=s.data[e].outputs[i],f=a[c].subscribe(o);Qw(t.index,s,n,r,o,f,!0)}var xp=Symbol("BINDING");function Kw(t){return t.debugInfo?.className||t.type.name||null}var Jd=class extends fl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=bi(n);return new so(e,this.ngModule)}};function xA(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&uu.SignalBased)!==0};return r&&(o.transform=r),o})}function EA(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function MA(t,n,e){let i=n instanceof ke?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Cp(e,i):e}function SA(t){let n=t.get(it,null);if(n===null)throw new k(407,!1);let e=t.get(zw,null),i=t.get(Yn,null),r=t.get(Ln,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function IA(t,n){let e=Xw(t);return ow(n,e,e==="svg"?xh:e==="math"?hb:null)}function Xw(t){return(t.selectors[0][0]||"div").toLowerCase()}var so=class extends vu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=xA(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=EA(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=rT(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Se(ve.DynamicComponentStart);let s=Y(null);try{let l=this.componentDef,c=MA(l,r||this.ngModule,n),u=SA(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(Kw(l),()=>this.createComponentRef(u,c,e,i,o,a)):this.createComponentRef(u,c,e,i,o,a)}finally{Y(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=kA(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),u=r?IT(c,r,s.encapsulation,e):IA(s,c),f=a?.some(mD)||o?.some(y=>typeof y!="function"&&y.bindings.some(mD)),m=tg(null,l,null,512|pw(s),null,null,n,c,e,null,KD(u,e,!0));m[ze]=u,Td(m);let h=null;try{let y=pg(ze,m,2,"#host",()=>l.directiveRegistry,!0,0);lw(c,u,y),aa(u,m),gu(l,m,y),Wp(l,y,m),gg(l,y),i!==void 0&&AA(y,this.ngContentSelectors,i),h=ln(y.index,m),m[Je]=h[Je],mg(l,m,null)}catch(y){throw h!==null&&lp(h),lp(m),y}finally{Se(ve.DynamicComponentEnd),Ad()}return new eu(this.componentType,m,!!f)}};function kA(t,n,e,i){let r=t?["ng-version","21.2.11"]:oT(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[xp].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let m of f.bindings){s+=m[xp].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(a??=[]).push(m))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,m=gd(f);l.push(m)}return eg(0,null,TA(o,a),1,s,l,null,null,null,[r],null)}function TA(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function mD(t){let n=t[xp].kind;return n==="input"||n==="twoWay"}var eu=class extends Uw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Cd(e[Z],ze),this.location=ca(this._tNode,e),this.instance=ln(this._tNode.index,e)[Je],this.hostView=this.changeDetectorRef=new ur(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=fg(i,r[Z],r,n,e);this.previousInputValues.set(n,e);let a=ln(i.index,r);hg(a,1)}get injector(){return new ro(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function AA(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var et=(()=>{class t{static __NG_ELEMENT_ID__=RA}return t})();function RA(){let t=at();return Jw(t,J())}var Ep=class t extends et{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return ca(this._hostTNode,this._hostLView)}get injector(){return new ro(this._hostTNode,this._hostLView)}get parentInjector(){let n=Up(this._hostTNode,this._hostLView);if(RD(n)){let e=Gd(n,this._hostLView),i=Wd(n),r=e[Z].data[i+8];return new ro(r,e)}else return new ro(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=hD(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Qe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Kd(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,sa(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!zI(n),c;if(l)c=e;else{let E=e||{};c=E.index,i=E.injector,r=E.projectableNodes,o=E.environmentInjector||E.ngModuleRef,a=E.directives,s=E.bindings}let u=l?n:new so(bi(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let I=(l?f:this.parentInjector).get(ke,null);I&&(o=I)}let m=bi(u.componentType??{}),h=Kd(this._lContainer,m?.id??null),y=h?.firstChild??null,S=u.create(f,r,y,o,a,s);return this.insertImpl(S.hostView,c,sa(this._hostTNode,h)),S}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(gb(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[ot],c=new t(l,l[It],l[ot]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return ul(a,r,o,i),n.attachToViewContainerRef(),hh(Xh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=hD(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=el(this._lContainer,e);i&&(js(Xh(this._lContainer),e),hu(i[Z],i))}detach(n){let e=this._adjustIndex(n,-1),i=el(this._lContainer,e);return i&&js(Xh(this._lContainer),e)!=null?new ur(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function hD(t){return t[Hs]}function Xh(t){return t[Hs]||(t[Hs]=[])}function Jw(t,n){let e,i=n[t.index];return kn(i)?e=i:(e=Lw(i,n,null,t),n[t.index]=e,ng(n,e)),NA(e,n,t,i),new Ep(e,t,n)}function OA(t,n){let e=t[Re],i=e.createComment(""),r=An(n,t),o=e.parentNode(r);return Qd(e,o,i,e.nextSibling(r),!1),i}var NA=LA,FA=()=>!1;function PA(t,n,e){return FA(t,n,e)}function LA(t,n,e,i){if(t[lr])return;let r;e.type&8?r=sn(i):r=OA(n,e),t[lr]=r}var Mp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Sp=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)yg(n,e).matches!==null&&this.queries[e].setDirty()}},tu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=UA(n):this.predicate=n}},Ip=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},kp=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,VA(e,o)),this.matchTNodeWithReadOption(n,e,Hd(e,n,o,!1,!1))}else i===We?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Hd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===T||r===et||r===We&&e.type&4)this.addMatch(e.index,-2);else{let o=Hd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function VA(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function jA(t,n){return t.type&11?ca(t,n):t.type&4?_u(t,n):null}function BA(t,n,e,i){return e===-1?jA(n,t):e===-2?HA(t,n,i):Ks(t,t[Z],e,n)}function HA(t,n,e){if(e===T)return ca(n,t);if(e===We)return _u(n,t);if(e===et)return Jw(n,t)}function eC(t,n,e,i){let r=n[Zn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let u=o[c];s.push(BA(n,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Tp(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=eC(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],u=n[-l];for(let f=Qe;f<u.length;f++){let m=u[f];m[ar]===m[ot]&&Tp(m[Z],m,c,i)}if(u[eo]!==null){let f=u[eo];for(let m=0;m<f.length;m++){let h=f[m];Tp(h[Z],h,c,i)}}}}}return i}function vg(t,n){return t[Zn].queries[n].queryList}function tC(t,n,e){let i=new Zd((e&4)===4);return yb(t,n,i,i.destroy),(n[Zn]??=new Sp).queries.push(new Mp(i))-1}function nC(t,n,e){let i=Ve();return i.firstCreatePass&&(rC(i,new tu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),tC(i,J(),n)}function iC(t,n,e,i){let r=Ve();if(r.firstCreatePass){let o=at();rC(r,new tu(n,e,i),o.index),zA(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return tC(r,J(),e)}function UA(t){return t.split(",").map(n=>n.trim())}function rC(t,n,e){t.queries===null&&(t.queries=new Ip),t.queries.track(new kp(n,e))}function zA(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function yg(t,n){return t.queries.getByIndex(n)}function oC(t,n){let e=t[Z],i=yg(e,n);return i.crossesNgTemplate?Tp(e,t,n,[]):eC(e,t,i,n)}function aC(t,n,e){let i,r=vs(()=>{i._dirtyCounter();let o=$A(i,t);if(n&&o===void 0)throw new k(-951,!1);return o});return i=r[Ke],i._dirtyCounter=j(0),i._flatValue=void 0,r}function bg(t){return aC(!0,!1,t)}function Dg(t){return aC(!0,!0,t)}function sC(t,n){let e=t[Ke];e._lView=J(),e._queryIndex=n,e._queryList=vg(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function $A(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[te]&4)return n?void 0:vt;let r=vg(e,i),o=oC(e,i);return r.reset(o,HD),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Jn=class{},bu=class{};var nu=class extends Jn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Jd(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=uh(n);this._bootstrapComponents=fw(o.bootstrap),this._r3Injector=zh(n,e,[{provide:Jn,useValue:this},{provide:fl,useValue:this.componentFactoryResolver},...i],Ls(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},iu=class extends bu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new nu(this.moduleType,n,[])}};var tl=class extends Jn{injector;componentFactoryResolver=new Jd(this);instance=null;constructor(n){super();let e=new Yr([...n.providers,{provide:Jn,useValue:this},{provide:fl,useValue:this.componentFactoryResolver}],n.parent||Zo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ml(t,n,e=null){return new tl({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var WA=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=_h(!1,e.type),r=i.length>0?ml([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(P(ke))})}return t})();function M(t){return rl(()=>{let n=lC(t),e=q(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===zp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(WA).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Nn.Emulated,styles:t.styles||vt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&mr("NgStandalone"),cC(e);let i=t.dependencies;return e.directiveDefs=pD(i,GA),e.pipeDefs=pD(i,Jy),e.id=ZA(e),e})}function GA(t){return bi(t)||gd(t)}function L(t){return rl(()=>({type:t.type,bootstrap:t.bootstrap||vt,declarations:t.declarations||vt,imports:t.imports||vt,exports:t.exports||vt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function qA(t,n){if(t==null)return Mn;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=uu.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function YA(t){if(t==null)return Mn;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function w(t){return rl(()=>{let n=lC(t);return cC(n),n})}function Du(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function lC(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Mn,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||vt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:qA(t.inputs,n),outputs:YA(t.outputs),debugInfo:null}}function cC(t){t.features?.forEach(n=>n(t))}function pD(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function ZA(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function wg(t){let n=e=>{let i=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=QA,e.hostDirectives=i?t.map(Ap):[t]):i?e.hostDirectives.unshift(...t.map(Ap)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function QA(t){let n=[],e=!1,i=null,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.hostDirectives!==null){let s=n.length;i??=new Map,r??=new Map,dC(a,n,i),r.set(a,[s,n.length-1])}o===0&&Tn(a)&&(e=!0,n.push(a))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return[n,i,r]}function dC(t,n,e){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let r=i();for(let o of r)gD(Ap(o),n,e)}else gD(i,n,e)}function gD(t,n,e){let i=gd(t.directive);KA(i.declaredInputs,t.inputs),dC(i,n,e),e.set(i,t),n.push(i)}function Ap(t){return typeof t=="function"?{directive:rt(t),inputs:Mn,outputs:Mn}:{directive:rt(t.directive),inputs:_D(t.inputs),outputs:_D(t.outputs)}}function _D(t){if(t===void 0||t.length===0)return Mn;let n={};for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function KA(t,n){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e],r=t[e];t[i]=r}}function XA(t){return Object.getPrototypeOf(t.prototype).constructor}function K(t){let n=XA(t.type),e=!0,i=[t];for(;n;){let r;if(Tn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new k(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Jh(t.inputs),a.declaredInputs=Jh(t.declaredInputs),a.outputs=Jh(t.outputs);let s=r.hostBindings;s&&iR(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&tR(t,l),c&&nR(t,c),JA(t,r),Xy(t.outputs,r.outputs),Tn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===K&&(e=!1)}}n=Object.getPrototypeOf(n)}eR(i)}function JA(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function eR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=oa(r.hostAttrs,e=oa(e,r.hostAttrs))}}function Jh(t){return t===Mn?{}:t===vt?[]:t}function tR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function nR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function iR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function uC(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=oa(t.mergedAttrs,t.attrs);let u=t.tView=eg(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),ea(t,!1);let l=oR(e,n,t,i);Rd()&&sg(e,n,l,t),aa(l,n);let c=Lw(l,n,l,t);n[i+ze]=c,ng(n,c),PA(c,t,n)}function rR(t,n,e,i,r,o,a,s,l,c,u){let f=e+ze,m;return n.firstCreatePass?(m=da(n,f,4,a||null,s||null),Md()&&$w(n,t,m,cn(n.consts,c),cg),kD(n,m)):m=n.data[f],uC(m,t,n,e,i,r,o,l),Xo(m)&&gu(n,t,m),c!=null&&cl(t,m,u),m}function nl(t,n,e,i,r,o,a,s,l,c,u){let f=e+ze,m;if(n.firstCreatePass){if(m=da(n,f,4,a||null,s||null),c!=null){let h=cn(n.consts,c);m.localNames=[];for(let y=0;y<h.length;y+=2)m.localNames.push(h[y],-1)}}else m=n.data[f];return uC(m,t,n,e,i,r,o,l),c!=null&&cl(t,m,u),m}function Be(t,n,e,i,r,o,a,s){let l=J(),c=Ve(),u=cn(c.consts,o);return rR(l,c,t,n,e,i,r,u,void 0,a,s),Be}var oR=aR;function aR(t,n,e,i){return Ws(!0),n[Re].createComment("")}var wu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function fo(t){return typeof t=="function"&&t[Ke]!==void 0}function Cg(t){return fo(t)&&typeof t.set=="function"}var xg=new v("");function hr(t){return!!t&&typeof t.then=="function"}function Eg(t){return!!t&&typeof t.subscribe=="function"}var fC=new v("");var Mg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(fC,{optional:!0})??[];injector=d(z);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=ut(this.injector,r);if(hr(o))e.push(o);else if(Eg(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cu=new v("");function mC(){Sm(()=>{let t="";throw new k(600,t)})}function hC(t){return t.isBoundToModule}var sR=10;var Kt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(Qt);afterRenderManager=d(mu);zonelessEnabled=d(Gs);rootEffectScheduler=d(Nd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new C;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(Si);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ne(e=>!e))}constructor(){d(Ln,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(ke);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=z.NULL){return this._injector.get(N).run(()=>{Se(ve.BootstrapComponentStart);let a=e instanceof vu;if(!this._injector.get(Mg).done){let y="";throw new k(405,y)}let l;a?l=e:l=this._injector.get(fl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=hC(l)?void 0:this._injector.get(Jn),u=i||l.selector,f=l.create(r,[],u,c),m=f.location.nativeElement,h=f.injector.get(xg,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),Qs(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),Se(ve.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Se(ve.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(fu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Se(ve.ChangeDetectionEnd),new k(101,!1);let e=Y(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Y(e),this.afterTick.next(),Se(ve.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(it,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<sR;){Se(ve.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Se(ve.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Us(r))continue;let o=i&&!this.zonelessEnabled?0:1;Ow(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Us(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Qs(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Cu,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Qs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new k(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qs(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function fe(t,n,e,i){let r=J(),o=cr();if(Fn(r,o,n)){let a=Ve(),s=$s();PT(s,r,t,n,e,i)}return fe}var Rp=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function ep(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function lR(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){Y(i);let c=n.length-1;for(Y(null);a<=s&&a<=c;){let u=t.at(a),f=n[a],m=ep(a,u,a,f,e);if(m!==0){m<0&&t.updateValue(a,f),a++;continue}let h=t.at(s),y=n[c],S=ep(s,h,c,y,e);if(S!==0){S<0&&t.updateValue(s,y),s--,c--;continue}let E=e(a,u),I=e(s,h),ge=e(a,f);if(Object.is(ge,I)){let ct=e(c,y);Object.is(ct,E)?(t.swap(a,s),t.updateValue(s,y),c--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new ru,o??=yD(t,a,s,e),Op(t,r,a,ge))t.updateValue(a,f),a++,s++;else if(o.has(ge))r.set(E,t.detach(a)),s--;else{let ct=t.create(a,n[a]);t.attach(a,ct),a++,s++}}for(;a<=c;)vD(t,r,e,a,n[a]),a++}else if(n!=null){Y(i);let c=n[Symbol.iterator]();Y(null);let u=c.next();for(;!u.done&&a<=s;){let f=t.at(a),m=u.value,h=ep(a,f,a,m,e);if(h!==0)h<0&&t.updateValue(a,m),a++,u=c.next();else{r??=new ru,o??=yD(t,a,s,e);let y=e(a,m);if(Op(t,r,a,y))t.updateValue(a,m),a++,s++,u=c.next();else if(!o.has(y))t.attach(a,t.create(a,m)),a++,s++,u=c.next();else{let S=e(a,f);r.set(S,t.detach(a)),s--}}}for(;!u.done;)vD(t,r,e,t.length,u.value),u=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Op(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function vD(t,n,e,i,r){if(Op(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function yD(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ru=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function re(t,n,e,i,r,o,a,s){mr("NgControlFlow");let l=J(),c=Ve(),u=cn(c.consts,o);return nl(l,c,t,n,e,i,r,u,256,a,s),Sg}function Sg(t,n,e,i,r,o,a,s){mr("NgControlFlow");let l=J(),c=Ve(),u=cn(c.consts,o);return nl(l,c,t,n,e,i,r,u,512,a,s),Sg}function oe(t,n){mr("NgControlFlow");let e=J(),i=cr(),r=e[i]!==Lt?e[i]:-1,o=r!==-1?ou(e,ze+r):void 0,a=0;if(Fn(e,i,t)){let s=Y(null);try{if(o!==void 0&&jw(o,a),t!==-1){let l=ze+t,c=ou(e,l),u=Lp(e[Z],l),f=Hw(c,u,e),m=dl(e,u,n,{dehydratedView:f});ul(c,m,a,sa(u,f))}}finally{Y(s)}}else if(o!==void 0){let s=Vw(o,a);s!==void 0&&(s[Je]=n)}}var Np=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Qe}};function hl(t){return t}var Fp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Ai(t,n,e,i,r,o,a,s,l,c,u,f,m){mr("NgControlFlow");let h=J(),y=Ve(),S=l!==void 0,E=J(),I=s?a.bind(E[kt][Je]):a,ge=new Fp(S,I);E[ze+t]=ge,nl(h,y,t+1,n,e,i,r,cn(y.consts,o),256),S&&nl(h,y,t+2,l,c,u,f,cn(y.consts,m),512)}var Pp=class extends Rp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Qe}at(n){return this.getLView(n)[Je].$implicit}attach(n,e){let i=e[Qr];this.needsIndexUpdate||=n!==this.length,ul(this.lContainer,e,n,sa(this.templateTNode,i)),cR(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,dR(this.lContainer,n),uR(this.lContainer,n)}create(n,e){let i=Kd(this.lContainer,this.templateTNode.tView.ssrId);return dl(this.hostLView,this.templateTNode,new Np(this.lContainer,e,n),{dehydratedView:i})}destroy(n){hu(n[Z],n)}updateValue(n,e){this.getLView(n)[Je].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Je].$index=n}getLView(n){return fR(this.lContainer,n)}};function Ri(t){let n=Y(null),e=Qn();try{let i=J(),r=i[Z],o=i[e],a=e+1,s=ou(i,a);if(o.liveCollection===void 0){let c=Lp(r,a);o.liveCollection=new Pp(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(lR(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=cr(),u=l.length===0;if(Fn(i,c,u)){let f=e+2,m=ou(i,f);if(u){let h=Lp(r,f),y=Hw(m,h,i),S=dl(i,h,void 0,{dehydratedView:y});ul(m,S,0,sa(h,y))}else r.firstUpdatePass&&aA(m),jw(m,0)}}}finally{Y(n)}}function ou(t,n){return t[n]}function cR(t,n){if(t.length<=Qe)return;let e=Qe+n,i=t[e],r=i?i[sr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[wi];hT(o,r),ao.delete(i[Ci]),r.detachedLeaveAnimationFns=void 0}}function dR(t,n){if(t.length<=Qe)return;let e=Qe+n,i=t[e],r=i?i[sr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function uR(t,n){return el(t,n)}function fR(t,n){return Vw(t,n)}function Lp(t,n){return Cd(t,n)}function ie(t,n,e){let i=J(),r=cr();if(Fn(i,r,n)){let o=Ve(),a=$s();Mw(a,i,t,n,i[Re],e)}return ie}function Vp(t,n,e,i,r){fg(n,t,e,r?"class":"style",i)}function p(t,n,e,i){let r=J(),o=r[Z],a=t+ze,s=o.firstCreatePass?pg(a,r,2,n,cg,Md(),e,i):o.data[a];if(Ei(s)){let l=r[In].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Kw(c),()=>(bD(t,n,r,s,i),p))}}return bD(t,n,r,s,i),p}function bD(t,n,e,i,r){if(dg(i,e,t,n,pC),Xo(i)){let o=e[Z];gu(o,e,i),Wp(o,i,e)}r!=null&&cl(e,i)}function g(){let t=Ve(),n=at(),e=ug(n);return t.firstCreatePass&&gg(t,e),Fh(e)&&Ph(),Oh(),e.classesWithoutHost!=null&&ZI(e)&&Vp(t,e,J(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&QI(e)&&Vp(t,e,J(),e.stylesWithoutHost,!1),g}function X(t,n,e,i){return p(t,n,e,i),g(),X}function $e(t,n,e,i){let r=J(),o=r[Z],a=t+ze,s=o.firstCreatePass?bA(a,o,2,n,e,i):o.data[a];return dg(s,r,t,n,pC),i!=null&&cl(r,s),$e}function Ge(){let t=at(),n=ug(t);return Fh(n)&&Ph(),Oh(),Ge}function Vt(t,n,e,i){return $e(t,n,e,i),Ge(),Vt}var pC=(t,n,e,i,r)=>(Ws(!0),ow(n[Re],i,Fb()));function ei(t,n,e){let i=J(),r=i[Z],o=t+ze,a=r.firstCreatePass?pg(o,i,8,"ng-container",cg,Md(),n,e):r.data[o];if(dg(a,i,t,"ng-container",mR),Xo(a)){let s=i[Z];gu(s,i,a),Wp(s,a,i)}return e!=null&&cl(i,a),ei}function ti(){let t=Ve(),n=at(),e=ug(n);return t.firstCreatePass&&gg(t,e),ti}function yt(t,n,e){return ei(t,n,e),ti(),yt}var mR=(t,n,e,i,r)=>(Ws(!0),zk(n[Re],""));function bt(){return J()}function ft(t,n,e){let i=J(),r=cr();if(Fn(i,r,n)){let o=Ve(),a=$s();Sw(a,i,t,n,i[Re],e)}return ft}var pl="en-US";var hR=pl;function gC(t){typeof t=="string"&&(hR=t.toLowerCase().replace(/_/g,"-"))}function V(t,n,e){let i=J(),r=Ve(),o=at();return _C(r,i,i[Re],o,t,n,e),V}function ua(t,n,e){let i=J(),r=Ve(),o=at();return(o.type&3||e)&&Zw(o,r,i,e,i[Re],t,n,zd(o,i,n)),ua}function _C(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=zd(i,n,o),Zw(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let m=u[f],h=u[f+1];l??=zd(i,n,o),fD(i,n,m,h,r,l)}if(c&&c.length)for(let f of c)l??=zd(i,n,o),fD(i,n,f,r,r,l)}}function $(t=1){return Nb(t)}function pR(t,n){let e=null,i=Jk(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?hw(t,o,!0):nT(i,o))return r}return e}function Ae(t){let n=J()[kt][It];if(!n.projection){let e=t?t.length:1,i=n.projection=ob(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?pR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function Q(t,n=0,e,i,r,o){let a=J(),s=Ve(),l=i?t+1:null;l!==null&&nl(a,s,l,i,r,o,null,e);let c=da(s,ze+t,16,null,e||null);c.projection===null&&(c.projection=n),jh();let f=!a[Qr]||Nh();a[kt][It].projection[c.projection]===null&&l!==null?gR(a,s,l):f&&!cu(c)&&ET(s,a,c)}function gR(t,n,e){let i=ze+e,r=n.data[i],o=t[i],a=Kd(o,r.tView.ssrId),s=dl(t,r,void 0,{dehydratedView:a});ul(o,s,0,sa(r,a))}function Dt(t,n,e,i){return iC(t,n,e,i),Dt}function He(t,n,e){return nC(t,n,e),He}function W(t){let n=J(),e=Ve(),i=kd();zs(i+1);let r=yg(e,i);if(t.dirty&&pb(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=oC(n,i);t.reset(o,HD),t.notifyOnChanges()}return!0}return!1}function G(){return vg(J(),kd())}function xu(t,n,e,i,r){return sC(n,iC(t,e,i,r)),xu}function Eu(t,n,e,i){return sC(t,nC(n,e,i)),Eu}function Mu(t=1){zs(kd()+t)}function fa(t){let n=Cb();return Mh(n,ze+t)}function Vd(t,n){return t<<17|n<<2}function lo(t){return t>>17&32767}function _R(t){return(t&2)==2}function vR(t,n){return t&131071|n<<17}function jp(t){return t|2}function la(t){return(t&131068)>>2}function tp(t,n){return t&-131069|n<<2}function yR(t){return(t&1)===1}function Bp(t){return t|1}function bR(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=lo(a),l=la(a);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||Yo(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let m=lo(t[s+1]);t[i+1]=Vd(m,s),m!==0&&(t[m+1]=tp(t[m+1],i)),t[s+1]=vR(t[s+1],i)}else t[i+1]=Vd(s,0),s!==0&&(t[s+1]=tp(t[s+1],i)),s=i;else t[i+1]=Vd(l,0),s===0?s=i:t[l+1]=tp(t[l+1],i),l=i;c&&(t[i+1]=jp(t[i+1])),DD(t,u,i,!0),DD(t,u,i,!1),DR(n,u,t,i,o),a=Vd(s,l),o?n.classBindings=a:n.styleBindings=a}function DR(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Yo(o,n)>=0&&(e[i+1]=Bp(e[i+1]))}function DD(t,n,e,i){let r=t[e+1],o=n===null,a=i?lo(r):la(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];wR(l,n)&&(s=!0,t[a+1]=i?Bp(c):jp(c)),a=i?lo(c):la(c)}s&&(t[e+1]=i?jp(r):Bp(r))}function wR(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Yo(t,n)>=0:!1}var On={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function CR(t){return t.substring(On.key,On.keyEnd)}function xR(t){return ER(t),vC(t,yC(t,0,On.textEnd))}function vC(t,n){let e=On.textEnd;return e===n?-1:(n=On.keyEnd=MR(t,On.key=n,e),yC(t,n,e))}function ER(t){On.key=0,On.keyEnd=0,On.value=0,On.valueEnd=0,On.textEnd=t.length}function yC(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function MR(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Oi(t,n,e){return bC(t,n,e,!1),Oi}function U(t,n){return bC(t,n,null,!0),U}function jt(t){IR(NR,SR,t,!0)}function SR(t,n){for(let e=xR(n);e>=0;e=vC(n,e))bd(t,CR(n),!0)}function bC(t,n,e,i){let r=J(),o=Ve(),a=Sd(2);if(o.firstUpdatePass&&wC(o,t,a,i),n!==Lt&&Fn(r,a,n)){let s=o.data[Qn()];CC(o,s,r,r[Re],t,r[a+1]=PR(n,e),i,a)}}function IR(t,n,e,i){let r=Ve(),o=Sd(2);r.firstUpdatePass&&wC(r,null,o,i);let a=J();if(e!==Lt&&Fn(a,o,e)){let s=r.data[Qn()];if(xC(s,i)&&!DC(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=hd(l,e||"")),Vp(r,s,a,e,i)}else FR(r,s,a,a[Re],a[o+1],a[o+1]=OR(t,n,e),i,o)}}function DC(t,n){return n>=t.expandoStartIndex}function wC(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Qn()],a=DC(t,e);xC(o,i)&&n===null&&!a&&(n=!1),n=kR(r,o,n,i),bR(r,o,n,e,a,i)}}function kR(t,n,e,i){let r=Tb(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=np(null,t,n,e,i),e=il(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=np(r,t,n,e,i),o===null){let l=TR(t,n,i);l!==void 0&&Array.isArray(l)&&(l=np(null,t,n,l[1],i),l=il(l,n.attrs,i),AR(t,n,i,l))}else o=RR(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function TR(t,n,e){let i=e?n.classBindings:n.styleBindings;if(la(i)!==0)return t[lo(i)]}function AR(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[lo(r)]=i}function RR(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=il(i,a,e)}return il(i,n.attrs,e)}function np(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=il(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function il(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),bd(t,a,e?!0:n[++o]))}return t===void 0?null:t}function OR(t,n,e){if(e==null||e==="")return vt;let i=[],r=Pn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function NR(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&bd(t,i,e)}function FR(t,n,e,i,r,o,a,s){r===Lt&&(r=vt);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let m=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,y=null,S;u===f?(l+=2,c+=2,m!==h&&(y=f,S=h)):f===null||u!==null&&u<f?(l+=2,y=u):(c+=2,y=f,S=h),y!==null&&CC(t,n,e,i,y,S,a,s),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function CC(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],u=yR(c)?wD(l,n,e,r,la(c),a):void 0;if(!au(u)){au(o)||_R(c)&&(o=wD(l,null,e,r,s,a));let f=Eh(Qn(),e);ST(i,a,f,r,o)}}function wD(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,m=e[r+1];m===Lt&&(m=f?vt:void 0);let h=f?Dd(m,i):u===i?m:void 0;if(c&&!au(h)&&(h=Dd(l,i)),au(h)&&(s=h,a))return s;let y=t[r+1];r=a?lo(y):la(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Dd(l,i))}return s}function au(t){return t!==void 0}function PR(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Ls(Pn(t)))),t}function xC(t,n){return(t.flags&(n?8:16))!==0}function x(t,n=""){let e=J(),i=Ve(),r=t+ze,o=i.firstCreatePass?da(i,r,1,n,null):i.data[r],a=LR(i,e,o,n);e[r]=a,Rd()&&sg(i,e,a,o),ea(o,!1)}var LR=(t,n,e,i)=>(Ws(!0),Hk(n[Re],i));function EC(t,n,e,i=""){return Fn(t,cr(),e)?n+qo(e)+i:Lt}function VR(t,n,e,i,r,o=""){let a=Eb(),s=Yw(t,a,e,r);return Sd(2),s?n+qo(e)+i+qo(r)+o:Lt}function Fe(t){return Pe("",t),Fe}function Pe(t,n,e){let i=J(),r=EC(i,t,n,e);return r!==Lt&&MC(i,Qn(),r),Pe}function gl(t,n,e,i,r){let o=J(),a=VR(o,t,n,e,i,r);return a!==Lt&&MC(o,Qn(),a),gl}function MC(t,n,e){let i=Eh(n,t);Uk(t[Re],i,e)}function Vn(t,n,e){Cg(n)&&(n=n());let i=J(),r=cr();if(Fn(i,r,n)){let o=Ve(),a=$s();Mw(a,i,t,n,i[Re],e)}return Vn}function ni(t,n){let e=Cg(t);return e&&t.set(n),e}function jn(t,n){let e=J(),i=Ve(),r=at();return _C(i,e,e[Re],r,t,n),jn}function Ig(t,n,e=""){return EC(J(),t,n,e)}function CD(t,n,e){let i=Ve();i.firstCreatePass&&SC(n,i.data,i.blueprint,Tn(t),e)}function SC(t,n,e,i,r){if(t=rt(t),Array.isArray(t))for(let o=0;o<t.length;o++)SC(t[o],n,e,i,r);else{let o=Ve(),a=J(),s=at(),l=qr(t)?t:rt(t.provide),c=yh(t),u=s.providerIndexes&1048575,f=s.directiveStart,m=s.providerIndexes>>20;if(qr(t)||!t.multi){let h=new oo(c,r,R,null),y=rp(l,n,r?u:u+m,f);y===-1?(ap(Yd(s,a),o,l),ip(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[y]=h,a[y]=h)}else{let h=rp(l,n,u+m,f),y=rp(l,n,u,u+m),S=h>=0&&e[h],E=y>=0&&e[y];if(r&&!E||!r&&!S){ap(Yd(s,a),o,l);let I=HR(r?BR:jR,e.length,r,i,c,t);!r&&E&&(e[y].providerFactory=I),ip(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(I),a.push(I)}else{let I=IC(e[r?y:h],c,!r&&i);ip(o,t,h>-1?h:y,I)}!r&&i&&E&&e[y].componentProviders++}}}function ip(t,n,e,i){let r=qr(n),o=ub(n);if(r||o){let l=(o?rt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function IC(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function rp(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function jR(t,n,e,i,r){return Hp(this.multi,[])}function BR(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Ks(i,i[Z],this.providerFactory.index,r);a=l.slice(0,s),Hp(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Hp(o,a);return a}function Hp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function HR(t,n,e,i,r,o){let a=new oo(t,e,R,null);return a.multi=[],a.index=n,a.componentProviders=0,IC(a,r,i&&!e),a}function be(t,n){return e=>{e.providersResolver=(i,r)=>CD(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>CD(i,r?r(n):n,!0))}}function UR(t,n){let e=t[n];return e===Lt?void 0:e}function zR(t,n,e,i,r,o,a){let s=n+e;return Yw(t,s,r,o)?DA(t,s+2,a?i.call(a,r,o):i(r,o)):UR(t,s+2)}function kg(t,n){let e=Ve(),i,r=t+ze;e.firstCreatePass?(i=$R(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=tr(i.type,!0)),a,s=Mt(R);try{let l=qd(!1),c=o();return qd(l),Sh(e,J(),r,c),c}finally{Mt(s)}}function $R(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Tg(t,n,e,i){let r=t+ze,o=J(),a=Mh(o,r);return WR(o,r)?zR(o,xb(),n,a.transform,e,i,a):a.transform(e,i)}function WR(t,n){return t[Z].data[n].pure}function Su(t,n){return _u(t,n)}var su=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Ag=(()=>{class t{compileModuleSync(e){return new iu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=uh(e),o=fw(r.declarations).reduce((a,s)=>{let l=bi(s);return l&&a.push(new so(l)),a},[]);return new su(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kC=(()=>{class t{applicationErrorHandler=d(Qt);appRef=d(Kt);taskService=d(Si);ngZone=d(N);zonelessEnabled=d(Gs);tracing=d(Ln,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new me;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Fs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(Yh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?jb:$h;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Fs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function TC(){return[{provide:Yn,useExisting:kC},{provide:N,useClass:Ps},{provide:Gs,useValue:!0}]}function GR(){return typeof $localize<"u"&&$localize.locale||pl}var ma=new v("",{factory:()=>d(ma,{optional:!0,skipSelf:!0})||GR()});function we(t){return qy(t)}function Bt(t,n){return vs(t,n?.equal)}var qR=t=>t;function Rg(t,n){if(typeof t=="function"){let e=Wm(t,qR,n?.equal);return AC(e,n?.debugName)}else{let e=Wm(t.source,t.computation,t.equal);return AC(e,t.debugName)}}function AC(t,n){let e=t[Ke],i=t;return i.set=r=>Wy(e,r),i.update=r=>Gy(e,r),i.asReadonly=Od.bind(t),i}var VC=Symbol("InputSignalNode#UNSET"),cO=q(_({},ys),{transformFn:void 0,applyValueToInputSignal(t,n){Pr(t,n)}});function jC(t,n){let e=Object.create(cO);e.value=t,e.transformFn=n?.transform;function i(){if(Yi(e),e.value===VC){let r=null;throw new k(-950,r)}return e.value}return i[Ke]=e,i}var ii=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>ol(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function RC(t,n){return jC(t,n)}function dO(t){return jC(VC,t)}var BC=(RC.required=dO,RC);function OC(t,n){return bg(n)}function uO(t,n){return Dg(n)}var vl=(OC.required=uO,OC);function NC(t,n){return bg(n)}function fO(t,n){return Dg(n)}var HC=(NC.required=fO,NC);var Ng=new v(""),mO=new v("");function _l(t){return!t.moduleRef}function hO(t){let n=_l(t)?t.r3Injector:t.moduleRef.injector,e=n.get(N);return e.run(()=>{_l(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Qt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),_l(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Ng);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Ng);a.add(o),t.moduleRef.onDestroy(()=>{Qs(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return gO(i,e,()=>{let o=n.get(Si),a=o.add(),s=n.get(Mg);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(ma,pl);if(gC(l||pl),!n.get(mO,!0))return _l(t)?n.get(Kt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(_l(t)){let u=n.get(Kt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return pO?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var pO;function gO(t,n,e){try{let i=e();return hr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Iu=null;function _O(t=[],n){return z.create({name:n,providers:[{provide:Bs,useValue:"platform"},{provide:Ng,useValue:new Set([()=>Iu=null])},...t]})}function vO(t=[]){if(Iu)return Iu;let n=_O(t);return Iu=n,mC(),yO(n),n}function yO(t){let n=t.get(lu,null);ut(t,()=>{n?.forEach(e=>e())})}var bO=1e4;var X6=bO-1e3;var _e=(()=>{class t{static __NG_ELEMENT_ID__=DO}return t})();function DO(t){return wO(at(),J(),(t&16)===16)}function wO(t,n,e){if(Ei(t)&&!e){let i=ln(t.index,n);return new ur(i,i)}else if(t.type&175){let i=n[kt];return new ur(i,n)}return null}var Fg=class{supports(n){return _g(n)}create(n){return new Pg(n)}},CO=(t,n)=>n,Pg=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||CO}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let a=!i||e&&e.currentIndex<FC(i,r,o)?e:i,s=FC(a,r,o),l=a.currentIndex;if(a===i)r--,i=i._nextRemoved;else if(e=e._next,a.previousIndex==null)r++;else{o||(o=[]);let c=s-r,u=l-r;if(c!=u){for(let m=0;m<c;m++){let h=m<o.length?o[m]:o[m]=0,y=h+m;u<=y&&y<c&&(o[m]=h+1)}let f=a.previousIndex;o[f]=u-c}}s!==l&&n(a,s,l)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n==null&&(n=[]),!_g(n))throw new k(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,i=!1,r,o,a;if(Array.isArray(n)){this.length=n.length;for(let s=0;s<this.length;s++)o=n[s],a=this._trackByFn(s,o),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,o,a,s),i=!0):(i&&(e=this._verifyReinsertion(e,o,a,s)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,Gw(n,s=>{a=this._trackByFn(r,s),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,s,a,r),i=!0):(i&&(e=this._verifyReinsertion(e,s,a,r)),Object.is(e.item,s)||this._addIdentityChange(e,s)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,i,r){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,r)):(n=this._linkedRecords===null?null:this._linkedRecords.get(i,r),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,r)):n=this._addAfter(new Lg(e,i),o,r)),n}_verifyReinsertion(n,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?n=this._reinsertAfter(o,n._prev,r):n.currentIndex!=r&&(n.currentIndex=r,this._addToMoves(n,r)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let r=n._prevRemoved,o=n._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(n,e,i),this._addToMoves(n,i),n}_moveAfter(n,e,i){return this._unlink(n),this._insertAfter(n,e,i),this._addToMoves(n,i),n}_addAfter(n,e,i){return this._insertAfter(n,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,i){let r=e===null?this._itHead:e._next;return n._next=r,n._prev=e,r===null?this._itTail=n:r._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new ku),this._linkedRecords.put(n),n.currentIndex=i,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,i=n._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ku),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}},Lg=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}},Vg=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,n))return i;return null}remove(n){let e=n._prevDup,i=n._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},ku=class{map=new Map;put(n){let e=n.trackById,i=this.map.get(e);i||(i=new Vg,this.map.set(e,i)),i.add(n)}get(n,e){let i=n,r=this.map.get(i);return r?r.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function FC(t,n,e){let i=t.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+n+r}function PC(){return new Ni([new Fg])}var Ni=(()=>{class t{factories;static \u0275prov=b({token:t,providedIn:"root",factory:PC});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=d(t,{optional:!0,skipSelf:!0});return t.create(e,i||PC())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new k(901,!1)}}return t})();function UC(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Se(ve.BootstrapApplicationStart);try{let o=r?.injector??vO(i),a=[TC(),Hb,...e||[]],s=new tl({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return hO({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Se(ve.BootstrapApplicationEnd)}}function he(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function zC(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Og=Symbol("NOT_SET"),$C=new Set,xO=q(_({},ys),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Og,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Og&&!Fo(this))return this.signal;try{for(let r of this.cleanup??$C)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=hi(this),i;try{i=this.userFn.apply(null,n)}finally{Zi(this,e)}return(this.value===Og||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),jg=class extends Xs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Tt),a),this.scheduler=r;for(let s of rg){let l=e[s];if(l===void 0)continue;let c=Object.create(xO);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(Yi(c),c.value),c.signal[Ke]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[s]=c,this.hooks[s]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??$C)e()}finally{Qi(n)}}};function WC(t,n){let e=n?.injector??d(z),i=e.get(Yn),r=e.get(mu),o=e.get(Ln,null,{optional:!0});r.impl??=e.get(og);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(na,null,{optional:!0}),l=new jg(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Tu(t,n){let e=bi(t),i=n.elementInjector||Zo();return new so(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var GC=null;function dn(){return GC}function Hg(t){GC??=t}var yl=class{},ha=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(qC),providedIn:"platform"})}return t})();var qC=(()=>{class t extends ha{_location;_history;_doc=d(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return dn().getBaseHref(this._doc)}onPopState(e){let i=dn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=dn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function QC(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function YC(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function gr(t){return t&&t[0]!=="?"?`?${t}`:t}var pa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(MO),providedIn:"root"})}return t})(),EO=new v(""),MO=(()=>{class t extends pa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return QC(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+gr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+gr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+gr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(P(ha),P(EO,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _r=(()=>{class t{_subject=new C;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=kO(YC(ZC(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+gr(i))}normalize(e){return t.stripTrailingSlash(IO(this._basePath,ZC(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=gr;static joinWithSlash=QC;static stripTrailingSlash=YC;static \u0275fac=function(i){return new(i||t)(P(pa))};static \u0275prov=b({token:t,factory:()=>SO(),providedIn:"root"})}return t})();function SO(){return new _r(P(pa))}function IO(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function ZC(t){return t.replace(/\/index.html$/,"")}function kO(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ug=/\s+/,KC=[],zg=(()=>{class t{_ngEl;_renderer;initialClasses=KC;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Ug):KC}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Ug):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Ug).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(R(T),R(Ne))};static \u0275dir=w({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var $g=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(z);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(R(et))};static \u0275dir=w({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Te]})}return t})();var Ht=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();function bl(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var mo=class{};var Wg="browser";function XC(t){return t===Wg}var Dl=class{_doc;constructor(n){this._doc=n}manager},Au=(()=>{class t extends Dl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(P(H))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Nu=new v(""),Zg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Au));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Au);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new k(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(P(Nu),P(N))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Gg="ng-app-id";function JC(t){for(let n of t)n.remove()}function e0(t,n){let e=n.createElement("style");return e.textContent=t,e}function AO(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Gg}="${n}"],link[${Gg}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Gg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Yg(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Qg=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,AO(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,e0);i?.forEach(r=>this.addUsage(r,this.external,Yg))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(JC(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])JC(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,e0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Yg(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(P(H),P(fr),P(uo,8),P(co))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),qg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Kg=/%COMP%/g;var n0="%COMP%",RO=`_nghost-${n0}`,OO=`_ngcontent-${n0}`,NO=!0,FO=new v("",{factory:()=>NO});function PO(t){return OO.replace(Kg,t)}function LO(t){return RO.replace(Kg,t)}function i0(t,n){return n.map(e=>e.replace(Kg,t))}var Xg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new wl(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Ou?r.applyToHost(e):r instanceof Cl&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Nn.Emulated:o=new Ou(l,c,i,this.appId,u,a,s,f);break;case Nn.ShadowDom:return new Ru(l,e,i,a,s,this.nonce,f,c);case Nn.ExperimentalIsolatedShadowDom:return new Ru(l,e,i,a,s,this.nonce,f);default:o=new Cl(l,c,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(P(Zg),P(Qg),P(fr),P(FO),P(H),P(N),P(uo),P(Ln,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),wl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(qg[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(t0(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(t0(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new k(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=qg[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=qg[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Xn.DashCase|Xn.Important)?n.style.setProperty(e,i,r&Xn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Xn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=dn().getGlobalEventTarget(this.doc,n),!n))throw new k(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function t0(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ru=class extends wl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=i0(i.id,c);for(let f of c){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=f,this.shadowRoot.appendChild(m)}let u=i.getExternalStyles?.();if(u)for(let f of u){let m=Yg(f,r);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Cl=class extends wl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?i0(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ao.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ou=class extends Cl{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=PO(c),this.hostAttr=LO(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Fu=class t extends yl{supportsDOMEvents=!0;static makeCurrent(){Hg(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=VO();return e==null?null:jO(e)}resetBaseElement(){xl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return bl(document.cookie,n)}},xl=null;function VO(){return xl=xl||document.head.querySelector("base"),xl?xl.getAttribute("href"):null}function jO(t){return new URL(t,document.baseURI).pathname}var BO=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),r0=["alt","control","meta","shift"],HO={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},UO={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},o0=(()=>{class t extends Dl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>dn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),r0.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=HO[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),r0.forEach(a=>{if(a!==r){let s=UO[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(P(H))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function Jg(t,n,e){let i=_({rootComponent:t},zO(n,e));return UC(i)}function zO(t,n){return{platformRef:n?.platformRef,appProviders:[...YO,...t?.providers??[]],platformProviders:qO}}function $O(){Fu.makeCurrent()}function WO(){return new St}function GO(){return $p(document),document}var qO=[{provide:co,useValue:Wg},{provide:lu,useValue:$O,multi:!0},{provide:H,useFactory:GO}];var YO=[{provide:Bs,useValue:"root"},{provide:St,useFactory:WO},{provide:Nu,useClass:Au,multi:!0},{provide:Nu,useClass:o0,multi:!0},Xg,Qg,Zg,{provide:it,useExisting:Xg},{provide:mo,useClass:BO},[]];var un=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Lu=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Vu=class{encodeKey(n){return a0(n)}encodeValue(n){return a0(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ZO(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var QO=/%(\d[a-f0-9])/gi,KO={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function a0(t){return encodeURIComponent(t).replace(QO,(n,e)=>KO[e]??n)}function Pu(t){return`${t}`}var Fi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Vu,n.fromString){if(n.fromObject)throw new k(2805,!1);this.map=ZO(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Pu):[Pu(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Pu(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Pu(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function XO(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function s0(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function l0(t){return typeof Blob<"u"&&t instanceof Blob}function c0(t){return typeof FormData<"u"&&t instanceof FormData}function JO(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var d0="Content-Type",u0="Accept",f0="text/plain",m0="application/json",eN=`${m0}, ${f0}, */*`,ga=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(XO(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new k(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new un,this.context??=new Lu,!this.params)this.params=new Fi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||s0(this.body)||l0(this.body)||c0(this.body)||JO(this.body)?this.body:this.body instanceof Fi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||c0(this.body)?null:l0(this.body)?this.body.type||null:s0(this.body)?null:typeof this.body=="string"?f0:this.body instanceof Fi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?m0:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,S=n.timeout??this.timeout,E=n.body!==void 0?n.body:this.body,I=n.withCredentials??this.withCredentials,ge=n.reportProgress??this.reportProgress,ct=n.headers||this.headers,dt=n.params||this.params,hs=n.context??this.context;return n.setHeaders!==void 0&&(ct=Object.keys(n.setHeaders).reduce((ps,Rr)=>ps.set(Rr,n.setHeaders[Rr]),ct)),n.setParams&&(dt=Object.keys(n.setParams).reduce((ps,Rr)=>ps.set(Rr,n.setParams[Rr]),dt)),new t(e,i,E,{params:dt,headers:ct,context:hs,reportProgress:ge,responseType:r,withCredentials:I,transferCache:y,keepalive:o,cache:s,priority:a,timeout:S,mode:l,redirect:c,credentials:u,referrer:f,integrity:m,referrerPolicy:h})}},po=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(po||{}),va=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new un,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},ju=class t extends va{constructor(n={}){super(n)}type=po.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},El=class t extends va{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=po.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},_a=class extends va{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},tN=200,nN=204;var iN=new v("");var rN=/^\)\]\}',?\n/;var t_=(()=>{class t{xhrFactory;tracingService=d(Ln,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new k(-2800,!1);let i=this.xhrFactory;return B(null).pipe(Ft(()=>new ee(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((E,I)=>a.setRequestHeader(E,I.join(","))),e.headers.has(u0)||a.setRequestHeader(u0,eN),!e.headers.has(d0)){let E=e.detectContentTypeHeader();E!==null&&a.setRequestHeader(d0,E)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let E=e.responseType.toLowerCase();a.responseType=E!=="json"?E:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let E=a.statusText||"OK",I=new un(a.getAllResponseHeaders()),ge=a.responseURL||e.url;return l=new ju({headers:I,status:a.status,statusText:E,url:ge}),l},u=this.maybePropagateTrace(()=>{let{headers:E,status:I,statusText:ge,url:ct}=c(),dt=null;I!==nN&&(dt=typeof a.response>"u"?a.responseText:a.response),I===0&&(I=dt?tN:0);let hs=I>=200&&I<300;if(e.responseType==="json"&&typeof dt=="string"){let ps=dt;dt=dt.replace(rN,"");try{dt=dt!==""?JSON.parse(dt):null}catch(Rr){dt=ps,hs&&(hs=!1,dt={error:Rr,text:dt})}}hs?(o.next(new El({body:dt,headers:E,status:I,statusText:ge,url:ct||void 0})),o.complete()):o.error(new _a({error:dt,headers:E,status:I,statusText:ge,url:ct||void 0}))}),f=this.maybePropagateTrace(E=>{let{url:I}=c(),ge=new _a({error:E,status:a.status||0,statusText:a.statusText||"Unknown Error",url:I||void 0});o.error(ge)}),m=f;e.timeout&&(m=this.maybePropagateTrace(E=>{let{url:I}=c(),ge=new _a({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:I||void 0});o.error(ge)}));let h=!1,y=this.maybePropagateTrace(E=>{h||(o.next(c()),h=!0);let I={type:po.DownloadProgress,loaded:E.loaded};E.lengthComputable&&(I.total=E.total),e.responseType==="text"&&a.responseText&&(I.partialText=a.responseText),o.next(I)}),S=this.maybePropagateTrace(E=>{let I={type:po.UploadProgress,loaded:E.loaded};E.lengthComputable&&(I.total=E.total),o.next(I)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",m),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",y),s!==null&&a.upload&&a.upload.addEventListener("progress",S)),a.send(s),o.next({type:po.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",m),e.reportProgress&&(a.removeEventListener("progress",y),s!==null&&a.upload&&a.upload.removeEventListener("progress",S)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(P(mo))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function oN(t,n){return n(t)}function aN(t,n,e){return(i,r)=>ut(e,()=>n(i,o=>t(o,r)))}var h0=new v("",{factory:()=>[]}),p0=new v(""),g0=new v("",{factory:()=>!0});var n_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(t_),r},providedIn:"root"})}return t})();var Bu=(()=>{class t{backend;injector;chain=null;pendingTasks=d(qs);contributeToStability=d(g0);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(h0),...this.injector.get(p0,[])]));this.chain=i.reduceRight((r,o)=>aN(r,o,this.injector),oN)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe($r(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(P(n_),P(ke))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),i_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(Bu),r},providedIn:"root"})}return t})();function e_(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var ya=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ga)o=e;else{let l;r.headers instanceof un?l=r.headers:l=new un(r.headers);let c;r.params&&(r.params instanceof Fi?c=r.params:c=new Fi({fromObject:r.params})),o=new ga(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=B(o).pipe($o(l=>this.handler.handle(l)));if(e instanceof ga||r.observe==="events")return a;let s=a.pipe(Ie(l=>l instanceof El));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ne(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new k(2806,!1);return l.body}));case"blob":return s.pipe(ne(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new k(2807,!1);return l.body}));case"text":return s.pipe(ne(l=>{if(l.body!==null&&typeof l.body!="string")throw new k(2808,!1);return l.body}));default:return s.pipe(ne(l=>l.body))}case"response":return s;default:throw new k(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Fi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,e_(r,i))}post(e,i,r={}){return this.request("POST",e,e_(r,i))}put(e,i,r={}){return this.request("PUT",e,e_(r,i))}static \u0275fac=function(i){return new(i||t)(P(i_))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sN=new v("",{factory:()=>!0}),lN="XSRF-TOKEN",cN=new v("",{factory:()=>lN}),dN="X-XSRF-TOKEN",uN=new v("",{factory:()=>dN}),fN=(()=>{class t{cookieName=d(cN);doc=d(H);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=bl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(fN),r},providedIn:"root"})}return t})();function mN(t,n){if(!d(sN)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(ha).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=d(_0).getToken(),i=d(uN);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function r_(...t){let n=[ya,Bu,{provide:i_,useExisting:Bu},{provide:n_,useFactory:()=>d(iN,{optional:!0})??d(t_)},{provide:h0,useValue:mN,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Di(n)}var y0=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(P(H))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ml=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=P(hN),r},providedIn:"root"})}return t})(),hN=(()=>{class t extends Ml{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case st.NONE:return i;case st.HTML:return ki(i,"HTML")?Pn(i):Kp(this._doc,String(i)).toString();case st.STYLE:return ki(i,"Style")?Pn(i):i;case st.SCRIPT:if(ki(i,"Script"))return Pn(i);throw new k(5200,!1);case st.URL:return ki(i,"URL")?Pn(i):sl(String(i));case st.RESOURCE_URL:if(ki(i,"ResourceURL"))return Pn(i);throw new k(5201,!1);default:throw new k(5202,!1)}}bypassSecurityTrustHtml(e){return Gp(e)}bypassSecurityTrustStyle(e){return qp(e)}bypassSecurityTrustScript(e){return Yp(e)}bypassSecurityTrustUrl(e){return Zp(e)}bypassSecurityTrustResourceUrl(e){return Qp(e)}static \u0275fac=function(i){return new(i||t)(P(H))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ae="primary",Bl=Symbol("RouteTitle"),c_=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function _o(t){return new c_(t)}function o_(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function I0(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return o_(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!o_(o,t.slice(0,o.length),s)||!o_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Gu(t){return new Promise((n,e)=>{t.pipe(_i()).subscribe({next:i=>n(i),error:i=>e(i)})})}function pN(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ri(t[e],n[e]))return!1;return!0}function ri(t,n){let e=t?d_(t):void 0,i=n?d_(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!k0(t[r],n[r]))return!1;return!0}function d_(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function k0(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function gN(t){return t.length>0?t[t.length-1]:null}function bo(t){return Hr(t)?t:hr(t)?Ue(Promise.resolve(t)):B(t)}function T0(t){return Hr(t)?Gu(t):Promise.resolve(t)}var _N={exact:O0,subset:N0},A0={exact:vN,subset:yN,ignored:()=>!0},R0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},u_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function D0(t,n,e){return _N[e.paths](t.root,n.root,e.matrixParams)&&A0[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function vN(t,n){return ri(t,n)}function O0(t,n,e){if(!go(t.segments,n.segments)||!zu(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!O0(t.children[i],n.children[i],e))return!1;return!0}function yN(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>k0(t[e],n[e]))}function N0(t,n,e){return F0(t,n,n.segments,e)}function F0(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!go(r,e)||n.hasChildren()||!zu(r,e,i))}else if(t.segments.length===e.length){if(!go(t.segments,e)||!zu(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!N0(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!go(t.segments,r)||!zu(t.segments,r,i)||!t.children[ae]?!1:F0(t.children[ae],n,o,i)}}function zu(t,n,e){return n.every((i,r)=>A0[e](t[r].parameters,i.parameters))}var Jt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ce([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=_o(this.queryParams),this._queryParamMap}toString(){return wN.serialize(this)}},Ce=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $u(this)}},vr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=_o(this.parameters),this._parameterMap}toString(){return L0(this)}};function bN(t,n){return go(t,n)&&t.every((e,i)=>ri(e.parameters,n[i].parameters))}function go(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function DN(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ae&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ae&&(e=e.concat(n(r,i)))}),e}var Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new yr,providedIn:"root"})}return t})(),yr=class{parse(n){let e=new m_(n);return new Jt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Sl(n.root,!0)}`,i=EN(n.queryParams),r=typeof n.fragment=="string"?`#${CN(n.fragment)}`:"";return`${e}${i}${r}`}},wN=new yr;function $u(t){return t.segments.map(n=>L0(n)).join("/")}function Sl(t,n){if(!t.hasChildren())return $u(t);if(n){let e=t.children[ae]?Sl(t.children[ae],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ae&&i.push(`${r}:${Sl(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=DN(t,(i,r)=>r===ae?[Sl(t.children[ae],!1)]:[`${r}:${Sl(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ae]!=null?`${$u(t)}/${e[0]}`:`${$u(t)}/(${e.join("//")})`}}function P0(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Hu(t){return P0(t).replace(/%3B/gi,";")}function CN(t){return encodeURI(t)}function f_(t){return P0(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Wu(t){return decodeURIComponent(t)}function w0(t){return Wu(t.replace(/\+/g,"%20"))}function L0(t){return`${f_(t.path)}${xN(t.parameters)}`}function xN(t){return Object.entries(t).map(([n,e])=>`;${f_(n)}=${f_(e)}`).join("")}function EN(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Hu(e)}=${Hu(r)}`).join("&"):`${Hu(e)}=${Hu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var MN=/^[^\/()?;#]+/;function a_(t){let n=t.match(MN);return n?n[0]:""}var SN=/^[^\/()?;=#]+/;function IN(t){let n=t.match(SN);return n?n[0]:""}var kN=/^[^=?&#]+/;function TN(t){let n=t.match(kN);return n?n[0]:""}var AN=/^[^&#]+/;function RN(t){let n=t.match(AN);return n?n[0]:""}var m_=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ce([],{}):new Ce([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ae]=new Ce(e,i)),r}parseSegment(){let n=a_(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(n),new vr(Wu(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=IN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=a_(this.remaining);r&&(i=r,this.capture(i))}n[Wu(e)]=Wu(i)}parseQueryParam(n){let e=TN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=RN(this.remaining);a&&(i=a,this.capture(i))}let r=w0(e),o=w0(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=a_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new k(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ae);let s=this.parseChildren(e+1);i[a??ae]=Object.keys(s).length===1&&s[ae]?s[ae]:new Ce([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new k(4011,!1)}};function V0(t){return t.segments.length>0?new Ce([],{[ae]:t}):t}function j0(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=j0(r);if(i===ae&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ce(t.segments,n);return ON(e)}function ON(t){if(t.numberOfChildren===1&&t.children[ae]){let n=t.children[ae];return new Ce(t.segments.concat(n.segments),n.children)}return t}function br(t){return t instanceof Jt}function B0(t,n,e=null,i=null,r=new yr){let o=H0(t);return U0(o,n,e,i,r)}function H0(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ce(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=V0(i);return n??r}function U0(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return s_(o,o,o,e,i,r);let a=NN(n);if(a.toRoot())return s_(o,o,new Ce([],{}),e,i,r);let s=FN(a,o,t),l=s.processChildren?kl(s.segmentGroup,s.index,a.commands):$0(s.segmentGroup,s.index,a.commands);return s_(o,s.segmentGroup,l,e,i,r)}function qu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Rl(t){return typeof t=="object"&&t!=null&&t.outlets}function C0(t,n,e){t||="\u0275";let i=new Jt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function s_(t,n,e,i,r,o){let a={};for(let[c,u]of Object.entries(i??{}))a[c]=Array.isArray(u)?u.map(f=>C0(c,f,o)):C0(c,u,o);let s;t===n?s=e:s=z0(t,n,e);let l=V0(j0(s));return new Jt(l,a,r)}function z0(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=z0(o,n,e)}),new Ce(t.segments,i)}var Yu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&qu(i[0]))throw new k(4003,!1);let r=i.find(Rl);if(r&&r!==gN(i))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function NN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Yu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Yu(e,n,i)}var Da=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function FN(t,n,e){if(t.isAbsolute)return new Da(n,!0,0);if(!e)return new Da(n,!1,NaN);if(e.parent===null)return new Da(e,!0,0);let i=qu(t.commands[0])?0:1,r=e.segments.length-1+i;return PN(e,r,t.numberOfDoubleDots)}function PN(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new k(4005,!1);r=i.segments.length}return new Da(i,!1,r-o)}function LN(t){return Rl(t[0])?t[0].outlets:{[ae]:t}}function $0(t,n,e){if(t??=new Ce([],{}),t.segments.length===0&&t.hasChildren())return kl(t,n,e);let i=VN(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ce(t.segments.slice(0,i.pathIndex),{});return o.children[ae]=new Ce(t.segments.slice(i.pathIndex),t.children),kl(o,0,r)}else return i.match&&r.length===0?new Ce(t.segments,{}):i.match&&!t.hasChildren()?h_(t,n,e):i.match?kl(t,0,r):h_(t,n,e)}function kl(t,n,e){if(e.length===0)return new Ce(t.segments,{});{let i=LN(e),r={};if(Object.keys(i).some(o=>o!==ae)&&t.children[ae]&&t.numberOfChildren===1&&t.children[ae].segments.length===0){let o=kl(t.children[ae],n,e);return new Ce(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=$0(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ce(t.segments,r)}}function VN(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Rl(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!E0(l,c,a))return o;i+=2}else{if(!E0(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function h_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Rl(o)){let l=jN(o.outlets);return new Ce(i,l)}if(r===0&&qu(e[0])){let l=t.segments[n];i.push(new vr(l.path,x0(e[0]))),r++;continue}let a=Rl(o)?o.outlets[ae]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&qu(s)?(i.push(new vr(a,x0(s))),r+=2):(i.push(new vr(a,{})),r++)}return new Ce(i,{})}function jN(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=h_(new Ce([],{}),0,i))}),n}function x0(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function E0(t,n,e){return t==e.path&&ri(n,e.parameters)}var Tl="imperative",mt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(mt||{}),en=class{id;url;constructor(n,e){this.id=n,this.url=e}},vo=class extends en{type=mt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},oi=class extends en{urlAfterRedirects;type=mt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},wt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(wt||{}),Ol=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Ol||{}),fn=class extends en{reason;code;type=mt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function W0(t){return t instanceof fn&&(t.code===wt.Redirect||t.code===wt.SupersededByNewNavigation)}var Li=class extends en{reason;code;type=mt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},yo=class extends en{error;target;type=mt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Nl=class extends en{urlAfterRedirects;state;type=mt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zu=class extends en{urlAfterRedirects;state;type=mt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qu=class extends en{urlAfterRedirects;state;shouldActivate;type=mt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ku=class extends en{urlAfterRedirects;state;type=mt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xu=class extends en{urlAfterRedirects;state;type=mt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ju=class{route;type=mt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ef=class{route;type=mt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},tf=class{snapshot;type=mt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nf=class{snapshot;type=mt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rf=class{snapshot;type=mt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},of=class{snapshot;type=mt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ca=class{},Fl=class{},xa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function BN(t){return!(t instanceof Ca)&&!(t instanceof xa)&&!(t instanceof Fl)}var af=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ka(this.rootInjector)}},ka=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new af(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(P(ke))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sf=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=p_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=p_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=g_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return g_(n,this._root).map(e=>e.value)}};function p_(t,n){if(t===n.value)return n;for(let e of n.children){let i=p_(t,e);if(i)return i}return null}function g_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=g_(t,e);if(i.length)return i.unshift(n),i}return[]}var Xt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ba(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Pl=class extends sf{snapshot;constructor(n,e){super(n),this.snapshot=e,E_(this,n)}toString(){return this.snapshot.toString()}};function G0(t,n){let e=HN(t,n),i=new Le([new vr("",{})]),r=new Le({}),o=new Le({}),a=new Le({}),s=new Le(""),l=new Vi(i,r,a,s,o,ae,t,e.root);return l.snapshot=e.root,new Pl(new Xt(l,[]),e)}function HN(t,n){let e={},i={},r={},a=new Ea([],e,r,"",i,ae,t,null,{},n);return new Ll("",new Xt(a,[]))}var Vi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ne(c=>c[Bl]))??B(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ne(n=>_o(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ne(n=>_o(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function x_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&Y0(r)&&(i.resolve[Bl]=r.title),i}var Ea=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Bl]}constructor(n,e,i,r,o,a,s,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=_o(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=_o(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ll=class extends sf{url;constructor(n,e){super(e),this.url=n,E_(this,e)}toString(){return q0(this._root)}};function E_(t,n){n.value._routerState=t,n.children.forEach(e=>E_(t,e))}function q0(t){let n=t.children.length>0?` { ${t.children.map(q0).join(", ")} } `:"";return`${t.value}${n}`}function l_(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ri(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ri(n.params,e.params)||t.paramsSubject.next(e.params),pN(n.url,e.url)||t.urlSubject.next(e.url),ri(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function __(t,n){let e=ri(t.params,n.params)&&bN(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||__(t.parent,n.parent))}function Y0(t){return typeof t.title=="string"||t.title===null}var Z0=new v(""),Hl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ae;activateEvents=new O;deactivateEvents=new O;attachEvents=new O;detachEvents=new O;routerOutletData=BC();parentContexts=d(ka);location=d(et);changeDetector=d(_e);inputBinder=d(uf,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new v_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Te]})}return t})(),v_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Vi?this.route:n===ka?this.childContexts:n===Z0?this.outletData:this.parent.get(n,e)}},uf=new v("");var M_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&X(0,"router-outlet")},dependencies:[Hl],encapsulation:2})}return t})();function S_(t){let n=t.children&&t.children.map(S_),e=n?q(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ae&&(e.component=M_),e}function UN(t,n,e){let i=Vl(t,n._root,e?e._root:void 0);return new Pl(i,n)}function Vl(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=zN(t,n,e);return new Xt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Vl(t,s)),a}}let i=$N(n.value),r=n.children.map(o=>Vl(t,o));return new Xt(i,r)}}function zN(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Vl(t,i,r);return Vl(t,i)})}function $N(t){return new Vi(new Le(t.url),new Le(t.params),new Le(t.queryParams),new Le(t.fragment),new Le(t.data),t.outlet,t.component,t)}var Ma=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Q0="ngNavigationCancelingError";function lf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=br(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=K0(!1,wt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function K0(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Q0]=!0,e.cancellationCode=n,e}function WN(t){return X0(t)&&br(t.url)}function X0(t){return!!t&&t[Q0]}var y_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),l_(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ba(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ba(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ba(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ba(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new of(o.value.snapshot))}),n.children.length&&this.forwardEvent(new nf(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(l_(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),l_(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},cf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},wa=class{component;route;constructor(n,e){this.component=n,this.route=e}};function GN(t,n,e){let i=t._root,r=n?n._root:null;return Il(i,r,e,[i.value])}function qN(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ta(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!oh(t)?t:n.get(t):i}function Il(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ba(n);return t.children.forEach(a=>{YN(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Al(s,e.getContext(a),r)),r}function YN(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=ZN(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new cf(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Il(t,n,s?s.children:null,i,r):Il(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new wa(s.outlet.component,a))}else a&&Al(n,s,r),r.canActivateChecks.push(new cf(i)),o.component?Il(t,null,s?s.children:null,i,r):Il(t,null,e,i,r);return r}function ZN(t,n,e){if(typeof e=="function")return ut(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!go(t.url,n.url);case"pathParamsOrQueryParamsChange":return!go(t.url,n.url)||!ri(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!__(t,n)||!ri(t.queryParams,n.queryParams);default:return!__(t,n)}}function Al(t,n,e){let i=ba(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Al(a,n.children.getContext(o),e):Al(a,null,e):Al(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new wa(n.outlet.component,r)):e.canDeactivateChecks.push(new wa(null,r)):e.canDeactivateChecks.push(new wa(null,r))}function Ul(t){return typeof t=="function"}function QN(t){return typeof t=="boolean"}function KN(t){return t&&Ul(t.canLoad)}function XN(t){return t&&Ul(t.canActivate)}function JN(t){return t&&Ul(t.canActivateChild)}function eF(t){return t&&Ul(t.canDeactivate)}function tF(t){return t&&Ul(t.canMatch)}function J0(t){return t instanceof Ur||t?.name==="EmptyError"}var Uu=Symbol("INITIAL_VALUE");function Sa(){return Ft(t=>qt(t.map(n=>n.pipe(nt(1),gt(Uu)))).pipe(ne(n=>{for(let e of n)if(e!==!0){if(e===Uu)return Uu;if(e===!1||nF(e))return e}return!0}),Ie(n=>n!==Uu),nt(1)))}function nF(t){return br(t)||t instanceof Ma}function ex(t){return t.aborted?B(void 0).pipe(nt(1)):new ee(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function tx(t){return De(ex(t))}function iF(t){return Et(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?B(q(_({},n),{guardsResult:!0})):rF(o,e,i).pipe(Et(a=>a&&QN(a)?oF(e,r,t):B(a)),ne(a=>q(_({},n),{guardsResult:a})))})}function rF(t,n,e){return Ue(t).pipe(Et(i=>dF(i.component,i.route,e,n)),_i(i=>i!==!0,!0))}function oF(t,n,e){return Ue(n).pipe($o(i=>er(sF(i.route.parent,e),aF(i.route,e),cF(t,i.path),lF(t,i.route))),_i(i=>i!==!0,!0))}function aF(t,n){return t!==null&&n&&n(new rf(t)),B(!0)}function sF(t,n){return t!==null&&n&&n(new tf(t)),B(!0)}function lF(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return B(!0);let i=e.map(r=>gi(()=>{let o=n._environmentInjector,a=Ta(r,o),s=XN(a)?a.canActivate(n,t):ut(o,()=>a(n,t));return bo(s).pipe(_i())}));return B(i).pipe(Sa())}function cF(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>qN(o)).filter(o=>o!==null).map(o=>gi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Ta(s,l),u=JN(c)?c.canActivateChild(e,t):ut(l,()=>c(e,t));return bo(u).pipe(_i())});return B(a).pipe(Sa())}));return B(r).pipe(Sa())}function dF(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return B(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Ta(a,s),c=eF(l)?l.canDeactivate(t,n,e,i):ut(s,()=>l(t,n,e,i));return bo(c).pipe(_i())});return B(o).pipe(Sa())}function uF(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return B(!0);let a=o.map(s=>{let l=Ta(s,t),c=KN(l)?l.canLoad(n,e):ut(t,()=>l(n,e)),u=bo(c);return r?u.pipe(tx(r)):u});return B(a).pipe(Sa(),nx(i))}function nx(t){return Pm(_t(n=>{if(typeof n!="boolean")throw lf(t,n)}),ne(n=>n===!0))}function fF(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return B(!0);let s=a.map(l=>{let c=Ta(l,t),u=tF(c)?c.canMatch(n,e,r):ut(t,()=>c(n,e,r));return bo(u).pipe(tx(o))});return B(s).pipe(Sa(),nx(i))}var Pi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},jl=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function mF(t){throw new k(4e3,!1)}function hF(t){throw K0(!1,wt.GuardRejected)}var b_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ae])throw mF(`${n.redirectTo}`);r=r.children[ae]}}async applyRedirectCommands(n,e,i,r,o){let a=await pF(e,r,o);if(a instanceof Jt)throw new jl(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new jl(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Jt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Ce(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new k(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function pF(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Gu(bo(ut(e,()=>i(n))))}function gF(t,n){return t.providers&&!t._injector&&(t._injector=ml(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Bn(t){return t.outlet||ae}function _F(t,n){let e=t.filter(i=>Bn(i)===n);return e.push(...t.filter(i=>Bn(i)!==n)),e}var D_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ix(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function vF(t,n,e,i,r,o,a){let s=rx(t,n,e);if(!s.matched)return B(s);let l=ix(o(s));return i=gF(n,i),fF(i,n,e,r,l,a).pipe(ne(c=>c===!0?s:_({},D_)))}function rx(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},D_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||I0)(e,t,n);if(!r)return _({},D_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function M0(t,n,e,i,r){return e.length>0&&DF(t,e,i,r)?{segmentGroup:new Ce(n,bF(i,new Ce(e,t.children))),slicedSegments:[]}:e.length===0&&wF(t,e,i)?{segmentGroup:new Ce(t.segments,yF(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ce(t.segments,t.children),slicedSegments:e}}function yF(t,n,e,i){let r={};for(let o of e)if(ff(t,n,o)&&!i[Bn(o)]){let a=new Ce([],{});r[Bn(o)]=a}return _(_({},i),r)}function bF(t,n){let e={};e[ae]=n;for(let i of t)if(i.path===""&&Bn(i)!==ae){let r=new Ce([],{});e[Bn(i)]=r}return e}function DF(t,n,e,i){return e.some(r=>!ff(t,n,r)||!(Bn(r)!==ae)?!1:!(i!==void 0&&Bn(r)===i))}function wF(t,n,e){return e.some(i=>ff(t,n,i))}function ff(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function CF(t,n,e){return n.length===0&&!t.children[e]}var w_=class{};async function xF(t,n,e,i,r,o,a="emptyOnly",s){return new C_(t,n,e,i,r,a,o,s).recognize()}var EF=31,C_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new b_(this.urlSerializer,this.urlTree)}noMatchError(n){return new k(4002,`'${n.segmentGroup}'`)}async recognize(){let n=M0(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Xt(i,e),o=new Ll("",r),a=B0(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ea([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ae,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ae,e),rootSnapshot:e}}catch(i){if(i instanceof jl)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Pi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Xt?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],u=_F(e,l),f=await this.processSegmentGroup(n,u,c,l,r);a.push(...f)}let s=ox(a);return MF(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof Pi||J0(c))continue;throw c}if(CF(i,r,o))return new w_;throw new Pi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Bn(i)!==a&&(a===ae||!ff(r,o,i)))throw new Pi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new Pi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:m}=rx(e,r,o);if(!l)throw new Pi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>EF&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,ix(h),n),S=await this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(n,i,e,S.concat(m),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Ea(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,IF(e),Bn(e),e.component??e._loadedComponent??null,e,kF(e),n),s=x_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=ct=>this.createSnapshot(n,i,ct.consumedSegments,ct.parameters,a),l=await Gu(vF(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new Pi(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=l,y=this.createSnapshot(n,i,m,f,a),{segmentGroup:S,slicedSegments:E}=M0(e,m,h,c,o);if(E.length===0&&S.hasChildren()){let ct=await this.processChildren(u,c,S,y);return new Xt(y,ct)}if(c.length===0&&E.length===0)return new Xt(y,[]);let I=Bn(i)===o,ge=await this.processSegment(u,c,S,E,I?ae:o,!0,y);return new Xt(y,ge instanceof Xt?[ge]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Gu(uF(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw hF(e)}return{routes:[],injector:n}}};function MF(t){t.sort((n,e)=>n.value.outlet===ae?-1:e.value.outlet===ae?1:n.value.outlet.localeCompare(e.value.outlet))}function SF(t){let n=t.value.routeConfig;return n&&n.path===""}function ox(t){let n=[],e=new Set;for(let i of t){if(!SF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=ox(i.children);n.push(new Xt(i.value,r))}return n.filter(i=>!e.has(i))}function IF(t){return t.data||{}}function kF(t){return t.resolve||{}}function TF(t,n,e,i,r,o,a){return Et(async s=>{let{state:l,tree:c}=await xF(t,n,e,i,s.extractedUrl,r,o,a);return q(_({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function AF(t){return Et(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return B(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of ax(s))o.add(l);let a=0;return Ue(o).pipe($o(s=>r.has(s)?RF(s,e,t):(s.data=x_(s,s.parent,t).resolve,B(void 0))),_t(()=>a++),id(1),Et(s=>a===o.size?B(n):Xe))})}function ax(t){let n=t.children.map(e=>ax(e)).flat();return[t,...n]}function RF(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Y0(i)&&(r[Bl]=i.title),gi(()=>(t.data=x_(t,t.parent,e).resolve,OF(r,t,n).pipe(ne(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function OF(t,n,e){let i=d_(t);if(i.length===0)return B({});let r={};return Ue(i).pipe(Et(o=>NF(t[o],n,e).pipe(_i(),_t(a=>{if(a instanceof Ma)throw lf(new yr,a);r[o]=a}))),id(1),ne(()=>r),zr(o=>J0(o)?Xe:Ms(o)))}function NF(t,n,e){let i=n._environmentInjector,r=Ta(t,i),o=r.resolve?r.resolve(n,e):ut(i,()=>r(n,e));return bo(o)}function S0(t){return Ft(n=>{let e=t(n);return e?Ue(e).pipe(ne(()=>n)):B(n)})}var I_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ae);return i}getResolvedTitleForRoute(e){return e.data[Bl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(sx),providedIn:"root"})}return t})(),sx=(()=>{class t extends I_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(P(y0))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Aa=new v("",{factory:()=>({})}),zl=new v(""),lx=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Ag);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await T0(ut(e,()=>i.loadComponent())),a=await ux(dx(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await cx(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function cx(t,n,e,i){let r=await T0(ut(e,()=>t.loadChildren())),o=await ux(dx(r)),a;o instanceof bu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(zl,[],{optional:!0,self:!0}).flat()),{routes:l.map(S_),injector:s,factory:u}}function FF(t){return t&&typeof t=="object"&&"default"in t}function dx(t){return FF(t)?t.default:t}async function ux(t){return t}var mf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(PF),providedIn:"root"})}return t})(),PF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fx=new v("");var LF=()=>{},mx=new v(""),hx=(()=>{class t{currentNavigation=j(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=j(null);events=new C;transitionAbortWithErrorSubject=new C;configLoader=d(lx);environmentInjector=d(ke);destroyRef=d(Tt);urlSerializer=d(Ia);rootContexts=d(ka);location=d(_r);inputBindingEnabled=d(uf,{optional:!0})!==null;titleStrategy=d(I_);options=d(Aa,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(mf);createViewTransition=d(fx,{optional:!0});navigationErrorHandler=d(mx,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>B(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Ju(r)),i=r=>this.events.next(new ef(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;we(()=>{this.transitions?.next(q(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Le(null),this.transitions.pipe(Ie(i=>i!==null),Ft(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return B(i).pipe(Ft(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",wt.SupersededByNewNavigation),Xe;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?q(_({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new Li(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ol.IgnoredSameUrlNavigation)),s.resolve(!1),Xe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return B(s).pipe(Ft(f=>(this.events.next(new vo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Xe:Promise.resolve(f))),TF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),_t(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new Fl)}),Ft(f=>Ue(i.routesRecognizeHandler.deferredHandle??B(void 0)).pipe(ne(()=>f))),_t(()=>{let f=new Nl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:y,extras:S}=s,E=new vo(f,this.urlSerializer.serialize(m),h,y);this.events.next(E);let I=G0(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=q(_({},s),{targetSnapshot:I,urlAfterRedirects:m,extras:q(_({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ge=>(ge.finalUrl=m,ge)),B(i)}else return this.events.next(new Li(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ol.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Xe}),ne(s=>{let l=new Zu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=q(_({},s),{guards:GN(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),iF(s=>this.events.next(s)),Ft(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw lf(this.urlSerializer,s.guardsResult);let l=new Qu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Xe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",wt.GuardRejected),Xe;if(s.guards.canActivateChecks.length===0)return B(s);let c=new Ku(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return Xe;let u=!1;return B(s).pipe(AF(this.paramsInheritanceStrategy),_t({next:()=>{u=!0;let f=new Xu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",wt.NoDataFromResolver)}}))}),S0(s=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;f.push(this.configLoader.loadComponent(m,u.routeConfig).then(h=>{u.component=h}))}for(let m of u.children)f.push(...l(m));return f},c=l(s.targetSnapshot.root);return c.length===0?B(s):Ue(Promise.all(c).then(()=>s))}),S0(()=>this.afterPreactivation()),Ft(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?Ue(c).pipe(ne(()=>i)):B(i)}),nt(1),Ft(s=>{let l=UN(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=q(_({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Ca);let c=i.beforeActivateHandler.deferredHandle;return c?Ue(c.then(()=>s)):B(s)}),_t(s=>{new y_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=LF,l)),this.lastSuccessfulNavigation.set(we(this.currentNavigation)),this.events.next(new oi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),De(ex(o.signal).pipe(Ie(()=>!r&&!i.targetRouterState),_t(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",wt.Aborted)}))),_t({complete:()=>{r=!0}}),De(this.transitionAbortWithErrorSubject.pipe(_t(s=>{throw s}))),$r(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",wt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),zr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Xe;if(X0(s))this.events.next(new fn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),WN(s)?this.events.next(new xa(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new yo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=ut(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Ma){let{message:u,cancellationCode:f}=lf(this.urlSerializer,c);this.events.next(new fn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new xa(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Xe}))}))}cancelNavigationTransition(e,i,r){let o=new fn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=we(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function VF(t){return t!==Tl}var px=new v("");var gx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(jF),providedIn:"root"})}return t})(),df=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},jF=(()=>{class t extends df{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hf=(()=>{class t{urlSerializer=d(Ia);options=d(Aa,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(_r);urlHandlingStrategy=d(mf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Jt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Jt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=G0(null,d(ke));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>d(BF),providedIn:"root"})}return t})(),BF=(()=>{class t extends hf{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof vo?this.updateStateMemento():e instanceof Li?this.commitTransition(i):e instanceof Nl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ca?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof fn&&!W0(e)?this.restoreHistory(i):e instanceof yo?this.restoreHistory(i,!0):e instanceof oi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=_(_({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=_(_({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function k_(t,n){t.events.pipe(Ie(e=>e instanceof oi||e instanceof fn||e instanceof yo||e instanceof Li),ne(e=>e instanceof oi||e instanceof Li?0:(e instanceof fn?e.code===wt.Redirect||e.code===wt.SupersededByNewNavigation:!1)?2:1),Ie(e=>e!==2),nt(1)).subscribe(()=>{n()})}var Ut=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(wu);stateManager=d(hf);options=d(Aa,{optional:!0})||{};pendingTasks=d(Si);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(hx);urlSerializer=d(Ia);location=d(_r);urlHandlingStrategy=d(mf);injector=d(ke);_events=new C;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(gx);injectorCleanup=d(px,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(zl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(uf,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new me;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=we(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof fn&&i.code!==wt.Redirect&&i.code!==wt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof oi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof xa){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||VF(r.source)},a);this.scheduleNavigation(s,Tl,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}BN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Tl,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=q(_({},o),{browserUrl:e})),r){let c=_({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(Qt)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return we(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(S_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=H0(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return U0(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=br(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Tl,null,i)}navigate(e,i={skipLocationChange:!1}){return HF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(yi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},R0):i===!1?r=_({},u_):r=_(_({},u_),i),br(e))return D0(this.currentUrlTree,e,r);let o=this.parseUrl(e);return D0(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((f,m)=>{s=f,l=m});let u=this.pendingTasks.add();return k_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function HF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new k(4008,!1)}var $F=(()=>{class t{router=d(Ut);stateManager=d(hf);fragment=j("");queryParams=j({});path=j("");serializer=d(Ia);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof oi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Jt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pf=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new ii("href"),{optional:!0});reactiveHref=Rg(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return we(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return we(this._target)}_target=j(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return we(this._queryParams)}_queryParams=j(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return we(this._fragment)}_fragment=j(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return we(this._queryParamsHandling)}_queryParamsHandling=j(void 0);set state(e){this._state.set(e)}get state(){return we(this._state)}_state=j(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return we(this._info)}_info=j(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return we(this._relativeTo)}_relativeTo=j(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return we(this._preserveFragment)}_preserveFragment=j(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return we(this._skipLocationChange)}_skipLocationChange=j(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return we(this._replaceUrl)}_replaceUrl=j(!1);isAnchorElement;onChanges=new C;applicationErrorHandler=d(Qt);options=d(Aa,{optional:!0});reactiveRouterState=d($F);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=j(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(br(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Bt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:br(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return we(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(R(Ut),R(Vi),ol("tabindex"),R(Ne),R(T),R(pa))};static \u0275dir=w({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&V("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&fe("href",r.reactiveHref(),Xp)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",he],skipLocationChange:[2,"skipLocationChange","skipLocationChange",he],replaceUrl:[2,"replaceUrl","replaceUrl",he],routerLink:"routerLink"},features:[Te]})}return t})();var WF=new v("");function T_(t,...n){return Di([{provide:zl,multi:!0,useValue:t},[],{provide:Vi,useFactory:GF},{provide:Cu,multi:!0,useFactory:qF},n.map(e=>e.\u0275providers)])}function GF(){return d(Ut).routerState.root}function qF(){let t=d(z);return n=>{let e=t.get(Kt);if(n!==e.components[0])return;let i=t.get(Ut),r=t.get(YF);t.get(ZF)===1&&i.initialNavigation(),t.get(QF,null,{optional:!0})?.setUpPreloading(),t.get(WF,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var YF=new v("",{factory:()=>new C}),ZF=new v("",{factory:()=>1});var QF=new v("");var Ex=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(R(Ne),R(T))};static \u0275dir=w({type:t})}return t})(),Mx=(()=>{class t extends Ex{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,features:[K]})}return t})(),Ef=new v("");var KF={provide:Ef,useExisting:Pt(()=>ai),multi:!0};function XF(){let t=dn()?dn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var JF=new v(""),ai=(()=>{class t extends Ex{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!XF())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(R(Ne),R(T),R(JF,8))};static \u0275dir=w({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&V("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[be([KF]),K]})}return t})();function F_(t){return t==null||P_(t)===0}function P_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Mf=new v(""),Sf=new v(""),e1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,tn=class{static min(n){return t1(n)}static max(n){return n1(n)}static required(n){return i1(n)}static requiredTrue(n){return r1(n)}static email(n){return o1(n)}static minLength(n){return a1(n)}static maxLength(n){return s1(n)}static pattern(n){return l1(n)}static nullValidator(n){return Sx()}static compose(n){return Ox(n)}static composeAsync(n){return Nx(n)}};function t1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function n1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function i1(t){return F_(t.value)?{required:!0}:null}function r1(t){return t.value===!0?null:{required:!0}}function o1(t){return F_(t.value)||e1.test(t.value)?null:{email:!0}}function a1(t){return n=>{let e=n.value?.length??P_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function s1(t){return n=>{let e=n.value?.length??P_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function l1(t){if(!t)return Sx;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(F_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Sx(t){return null}function Ix(t){return t!=null}function kx(t){return hr(t)?Ue(t):t}function Tx(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function Ax(t,n){return n.map(e=>e(t))}function c1(t){return!t.validate}function Rx(t){return t.map(n=>c1(n)?n:e=>n.validate(e))}function Ox(t){if(!t)return null;let n=t.filter(Ix);return n.length==0?null:function(e){return Tx(Ax(e,n))}}function L_(t){return t!=null?Ox(Rx(t)):null}function Nx(t){if(!t)return null;let n=t.filter(Ix);return n.length==0?null:function(e){let i=Ax(e,n).map(kx);return Ss(i).pipe(ne(Tx))}}function V_(t){return t!=null?Nx(Rx(t)):null}function _x(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Fx(t){return t._rawValidators}function Px(t){return t._rawAsyncValidators}function R_(t){return t?Array.isArray(t)?t:[t]:[]}function _f(t,n){return Array.isArray(t)?t.includes(n):t===n}function vx(t,n){let e=R_(n);return R_(t).forEach(r=>{_f(e,r)||e.push(r)}),e}function yx(t,n){return R_(n).filter(e=>!_f(t,e))}var vf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=L_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=V_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},ji=class extends vf{name;get formDirective(){return null}get path(){return null}},Bi=class extends vf{_parent=null;name=null;valueAccessor=null},yf=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Cr=(()=>{class t extends yf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(R(Bi,2))};static \u0275dir=w({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[K]})}return t})(),If=(()=>{class t extends yf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(R(ji,10))};static \u0275dir=w({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[K]})}return t})();var $l="VALID",gf="INVALID",Ra="PENDING",Wl="DISABLED",Dr=class{},bf=class extends Dr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ql=class extends Dr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Yl=class extends Dr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Oa=class extends Dr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Df=class extends Dr{source;constructor(n){super(),this.source=n}},Ql=class extends Dr{source;constructor(n){super(),this.source=n}};function j_(t){return(kf(t)?t.validators:t)||null}function d1(t){return Array.isArray(t)?L_(t):t||null}function B_(t,n){return(kf(n)?n.asyncValidators:t)||null}function u1(t){return Array.isArray(t)?V_(t):t||null}function kf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Lx(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new k(1e3,"");if(!i[e])throw new k(1001,"")}function Vx(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new k(-1002,"")})}var Na=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return we(this.statusReactive)}set status(n){we(()=>this.statusReactive.set(n))}_status=Bt(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===$l}get invalid(){return this.status===gf}get pending(){return this.status===Ra}get disabled(){return this.status===Wl}get enabled(){return this.status!==Wl}errors;get pristine(){return we(this.pristineReactive)}set pristine(n){we(()=>this.pristineReactive.set(n))}_pristine=Bt(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return we(this.touchedReactive)}set touched(n){we(()=>this.touchedReactive.set(n))}_touched=Bt(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(vx(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(vx(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(yx(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(yx(n,this._rawAsyncValidators))}hasValidator(n){return _f(this._rawValidators,n)}hasAsyncValidator(n){return _f(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(q(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Yl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Yl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(q(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ql(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ql(!0,i))}markAsPending(n={}){this.status=Ra;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Oa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(q(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Wl,this.errors=null,this._forEachChild(r=>{r.disable(q(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new bf(this.value,i)),this._events.next(new Oa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(q(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=$l,this._forEachChild(i=>{i.enable(q(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(q(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$l||this.status===Ra)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new bf(this.value,e)),this._events.next(new Oa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(q(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Wl:$l}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ra,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=kx(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Oa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?Wl:this.errors?gf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ra)?Ra:this._anyControlsHaveStatus(gf)?gf:$l}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ql(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Yl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){kf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=d1(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=u1(this._rawAsyncValidators)}},wr=class extends Na{constructor(n,e,i){super(j_(e),B_(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Vx(this,!0,n),Object.keys(n).forEach(i=>{Lx(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,q(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ql(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var O_=class extends wr{};var Kl=new v("",{factory:()=>Tf}),Tf="always";function jx(t,n){return[...n.path,t]}function wf(t,n,e=Tf){H_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),m1(t,n),p1(t,n),h1(t,n),f1(t,n)}function bx(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),xf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Cf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function f1(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function H_(t,n){let e=Fx(t);n.validator!==null?t.setValidators(_x(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Px(t);n.asyncValidator!==null?t.setAsyncValidators(_x(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Cf(n._rawValidators,r),Cf(n._rawAsyncValidators,r)}function xf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=Fx(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=Px(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Cf(n._rawValidators,i),Cf(n._rawAsyncValidators,i),e}function m1(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Bx(t,n)})}function h1(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Bx(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Bx(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function p1(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Hx(t,n){t==null,H_(t,n)}function g1(t,n){return xf(t,n)}function Ux(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function _1(t){return Object.getPrototypeOf(t.constructor)===Mx}function zx(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $x(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===ai?e=o:_1(o)?i=o:r=o}),r||i||e||null}function v1(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var y1={provide:ji,useExisting:Pt(()=>U_)},Gl=Promise.resolve(),U_=(()=>{class t extends ji{callSetDisabledState;get submitted(){return we(this.submittedReactive)}_submitted=Bt(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new O;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new wr({},L_(e),V_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Gl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),wf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Gl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Gl.then(()=>{let i=this._findContainer(e.path),r=new wr({});Hx(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Gl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Gl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),zx(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Df(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(R(Mf,10),R(Sf,10),R(Kl,8))};static \u0275dir=w({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&V("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[be([y1]),K]})}return t})();function Dx(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function wx(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Zl=class extends Na{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(j_(e),B_(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),kf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(wx(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ql(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Dx(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Dx(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){wx(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var b1=t=>t instanceof Zl;var D1={provide:Bi,useExisting:Pt(()=>Xl)},Cx=Promise.resolve(),Xl=(()=>{class t extends Bi{_changeDetectorRef;callSetDisabledState;control=new Zl;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new O;constructor(e,i,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=$x(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ux(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){wf(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Cx.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&he(i);Cx.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?jx(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(R(ji,9),R(Mf,10),R(Sf,10),R(Ef,10),R(_e,8),R(Kl,8))};static \u0275dir=w({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[be([D1]),K,Te]})}return t})();var Af=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),w1={provide:Ef,useExisting:Pt(()=>z_),multi:!0},z_=(()=>{class t extends Mx{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&V("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[be([w1]),K]})}return t})();var N_=class extends Na{constructor(n,e,i){super(j_(e),B_(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Vx(this,!1,n),n.forEach((i,r)=>{Lx(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],q(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ql(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var C1=(()=>{class t extends ji{callSetDisabledState;get submitted(){return we(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Bt(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(xf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return wf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){bx(e.control||null,e,!1),v1(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,zx(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Df(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(bx(i||null,e),b1(r)&&(wf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Hx(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&g1(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){H_(this.form,this),this._oldForm&&xf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(R(Mf,10),R(Sf,10),R(Kl,8))};static \u0275dir=w({type:t,features:[K,Te]})}return t})();var Wx=new v("");var x1={provide:Bi,useExisting:Pt(()=>Jl)},Jl=(()=>{class t extends Bi{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=$x(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Ux(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return jx(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(R(ji,13),R(Mf,10),R(Sf,10),R(Ef,10),R(Wx,8))};static \u0275dir=w({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[be([x1]),K,Te]})}return t})();var E1={provide:ji,useExisting:Pt(()=>Do)},Do=(()=>{class t extends C1{form=null;ngSubmit=new O;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&V("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[be([E1]),K]})}return t})();var Gx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();function xx(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Rf=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return xx(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new wr(r,o)}record(e,i=null){let r=this._reduceControls(e);return new O_(r,i)}control(e,i,r){let o={};return this.useNonNullable?(xx(i)?o=i:(o.validators=i,o.asyncValidators=r),new Zl(e,q(_({},o),{nonNullable:!0}))):new Zl(e,i,r)}array(e,i,r){let o=e.map(a=>this._createControl(a));return new N_(o,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof Zl)return e;if(e instanceof Na)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ct=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Kl,useValue:e.callSetDisabledState??Tf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Gx]})}return t})(),mn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Wx,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Kl,useValue:e.callSetDisabledState??Tf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Gx]})}return t})();var Of=class t{inputText="";name="Ali Abu";btnClick(){this.name=this.inputText;let n="Ousmane",e=i(5,10);alert("THe result is "+e);function i(r,o){return r*o}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-home-page"]],decls:7,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"click"]],template:function(e,i){e&1&&(p(0,"h1"),x(1),g(),p(2,"input",0),jn("ngModelChange",function(o){return ni(i.inputText,o)||(i.inputText=o),o}),g(),X(3,"br")(4,"br"),p(5,"button",1),V("click",function(){return i.btnClick()}),x(6,"Don't click"),g()),e&2&&(D(),Pe("Welcnsshhh ",i.name),D(),Vn("ngModel",i.inputText))},dependencies:[Ct,ai,Cr,Xl],encapsulation:2})};function ec(t){return t.buttons===0||t.detail===0}function tc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var $_;function qx(){if($_==null){let t=typeof document<"u"?document.head:null;$_=!!(t&&(t.createShadowRoot||t.attachShadow))}return $_}function W_(t){if(qx()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function si(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function zt(t){return t.composedPath?t.composedPath()[0]:t.target}var G_;try{G_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{G_=!1}var ce=(()=>{class t{_platformId=d(co);isBrowser=this._platformId?XC(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||G_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nc;function Yx(){if(nc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>nc=!0}))}finally{nc=nc||!1}return nc}function Fa(t){return Yx()?t:!!t.capture}function nn(t,n=0){return Nf(t)?Number(t):arguments.length===2?n:0}function Nf(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function At(t){return t instanceof T?t.nativeElement:t}var Zx=new v("cdk-input-modality-detector-options"),Qx={ignoreKeys:[18,17,224,91,16]},Kx=650,q_={passive:!0,capture:!0},Xx=(()=>{class t{_platform=d(ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Le(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=zt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Kx||(this._modality.next(ec(e)?"keyboard":"mouse"),this._mostRecentTarget=zt(e))};_onTouchstart=e=>{if(tc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=zt(e)};constructor(){let e=d(N),i=d(H),r=d(Zx,{optional:!0});if(this._options=_(_({},Qx),r),this.modalityDetected=this._modality.pipe(Ts(1)),this.modalityChanged=this.modalityDetected.pipe(nd()),this._platform.isBrowser){let o=d(it).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,q_),o.listen(i,"mousedown",this._onMousedown,q_),o.listen(i,"touchstart",this._onTouchstart,q_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ic=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ic||{}),Jx=new v("cdk-focus-monitor-default-options"),Ff=Fa({passive:!0,capture:!0}),xr=(()=>{class t{_ngZone=d(N);_platform=d(ce);_inputModalityDetector=d(Xx);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(H);_stopInputModalityDetector=new C;constructor(){let e=d(Jx,{optional:!0});this._detectionMode=e?.detectionMode||ic.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=zt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=At(e);if(!this._platform.isBrowser||r.nodeType!==1)return B();let o=W_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new C,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=At(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=At(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ic.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===ic.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Kx:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=zt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ff),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ff)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(De(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ff),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ff),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Y_=(()=>{class t{_elementRef=d(T);_focusMonitor=d(xr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new O;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Pf=new WeakMap,qe=(()=>{class t{_appRef;_injector=d(z);_environmentInjector=d(ke);load(e){let i=this._appRef=this._appRef||this._injector.get(Kt),r=Pf.get(i);r||(r={loaders:new Set,refs:[]},Pf.set(i,r),i.onDestroy(()=>{Pf.get(i)?.refs.forEach(o=>o.destroy()),Pf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Tu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var li=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Lf;function M1(){if(Lf===void 0&&(Lf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Lf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Lf}function Co(t){return M1()?.createHTML(t)||t}function eE(t,n,e){let i=e.sanitize(st.HTML,n);t.innerHTML=Co(i||"")}function Pa(t){return Array.isArray(t)?t:[t]}var tE=new Set,xo,La=(()=>{class t{_platform=d(ce);_nonce=d(uo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):I1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&S1(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function S1(t,n){if(!tE.has(t))try{xo||(xo=document.createElement("style"),n&&xo.setAttribute("nonce",n),xo.setAttribute("type","text/css"),document.head.appendChild(xo)),xo.sheet&&(xo.sheet.insertRule(`@media ${t} {body{ }}`,0),tE.add(t))}catch(e){console.error(e)}}function I1(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var rc=(()=>{class t{_mediaMatcher=d(La);_zone=d(N);_queries=new Map;_destroySubject=new C;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return nE(Pa(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=nE(Pa(e)).map(a=>this._registerQuery(a).observable),o=qt(r);return o=er(o.pipe(nt(1)),o.pipe(Ts(1),Is(0))),o.pipe(ne(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ee(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(gt(i),ne(({matches:a})=>({query:e,matches:a})),De(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function k1(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var iE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rE=(()=>{class t{_mutationObserverFactory=d(iE);_observedElements=new Map;_ngZone=d(N);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=At(e);return new ee(r=>{let a=this._observeElement(i).pipe(ne(s=>s.filter(l=>!k1(l))),Ie(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new C,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oE=(()=>{class t{_contentObserver=d(rE);_elementRef=d(T);event=new O;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=nn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Is(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",he],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Va=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[iE]})}return t})();var K_=(()=>{class t{_platform=d(ce);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return A1(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=T1(j1(e));if(i&&(aE(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=aE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!L1(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return V1(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function T1(t){try{return t.frameElement}catch{return null}}function A1(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function R1(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function O1(t){return F1(t)&&t.type=="hidden"}function N1(t){return P1(t)&&t.hasAttribute("href")}function F1(t){return t.nodeName.toLowerCase()=="input"}function P1(t){return t.nodeName.toLowerCase()=="a"}function cE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function aE(t){if(!cE(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function L1(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function V1(t){return O1(t)?!1:R1(t)||N1(t)||t.hasAttribute("contenteditable")||cE(t)}function j1(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Q_=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?je(n,{injector:this._injector}):setTimeout(n)}},Vf=(()=>{class t{_checker=d(K_);_ngZone=d(N);_document=d(H);_injector=d(z);constructor(){d(qe).load(li)}create(e,i=!1){return new Q_(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),X_=(()=>{class t{_elementRef=d(T);_focusTrapFactory=d(Vf);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){d(ce).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=si(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",he],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",he]},exportAs:["cdkTrapFocus"],features:[Te]})}return t})(),dE=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),uE=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),B1=0,J_=(()=>{class t{_ngZone=d(N);_defaultOptions=d(uE,{optional:!0});_liveElement;_document=d(H);_sanitizer=d(Ml);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(dE,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:eE(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${B1++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Er=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Er||{}),sE="cdk-high-contrast-black-on-white",lE="cdk-high-contrast-white-on-black",Z_="cdk-high-contrast-active",fE=(()=>{class t{_platform=d(ce);_hasCheckedHighContrastMode=!1;_document=d(H);_breakpointSubscription;constructor(){this._breakpointSubscription=d(rc).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Er.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Er.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Er.BLACK_ON_WHITE}return Er.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Z_,sE,lE),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Er.BLACK_ON_WHITE?e.add(Z_,sE):i===Er.WHITE_ON_BLACK&&e.add(Z_,lE)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oc=(()=>{class t{constructor(){d(fE)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Va]})}return t})();function ci(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ev={},Ye=class t{_appId=d(fr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),ev.hasOwnProperty(n)||(ev[n]=0),`${n}${e?t._infix+"-":""}${ev[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var hE=" ";function H1(t,n,e){let i=Bf(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(hE)))}function U1(t,n,e){let i=Bf(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(hE)):t.removeAttribute(n)}function Bf(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var pE="cdk-describedby-message",jf="cdk-describedby-host",nv=0,gE=(()=>{class t{_platform=d(ce);_document=d(H);_messageRegistry=new Map;_messagesContainer=null;_id=`${nv++}`;constructor(){d(qe).load(li),this._id=d(fr)+"-"+nv++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=tv(i,r);typeof i!="string"?(mE(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=tv(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${jf}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(jf);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");mE(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(tv(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Bf(e,"aria-describedby").filter(r=>r.indexOf(pE)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);H1(e,"aria-describedby",r.messageElement.id),e.setAttribute(jf,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,U1(e,"aria-describedby",r.messageElement.id),e.removeAttribute(jf)}_isElementDescribedByMessage(e,i){let r=Bf(e,"aria-describedby"),o=this._messageRegistry.get(i),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tv(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function mE(t,n){t.id||(t.id=`${pE}-${n}-${nv++}`)}var Hn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Hn||{}),Hf,Eo;function Uf(){if(Eo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Eo=!1,Eo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Eo=!0;else{let t=Element.prototype.scrollTo;t?Eo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Eo=!1}}return Eo}function ja(){if(typeof document!="object"||!document)return Hn.NORMAL;if(Hf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Hf=Hn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Hf=t.scrollLeft===0?Hn.NEGATED:Hn.INVERTED),t.remove()}return Hf}function iv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ba,_E=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function rv(){if(Ba)return Ba;if(typeof document!="object"||!document)return Ba=new Set(_E),Ba;let t=document.createElement("input");return Ba=new Set(_E.filter(n=>(t.setAttribute("type",n),t.type===n))),Ba}var vE={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var z1=new v("MATERIAL_ANIMATIONS"),yE=null;function $1(){return d(z1,{optional:!0})?.animationsDisabled||d(al,{optional:!0})==="NoopAnimations"?"di-disabled":(yE??=d(La).matchMedia("(prefers-reduced-motion)").matches,yE?"reduced-motion":"enabled")}function Ze(){return $1()!=="enabled"}function tt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Rt(t){return t!=null&&`${t}`!="false"}var hn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(hn||{}),ov=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=hn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},bE=Fa({passive:!0,capture:!0}),av=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,bE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,bE)))}_delegateEventHandler=n=>{let e=zt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},ac={enterDuration:225,exitDuration:150},W1=800,DE=Fa({passive:!0,capture:!0}),wE=["mousedown","touchstart"],CE=["mouseup","mouseleave","touchend","touchcancel"],G1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Mo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new av;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=At(i)),o&&o.get(qe).load(G1)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},ac),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||q1(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),m=f.transitionProperty,h=f.transitionDuration,y=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,S=new ov(this,u,i,y);u.style.transform="scale3d(1, 1, 1)",S.state=hn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=S);let E=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let I=()=>{E&&(E.fallbackTimer=null),clearTimeout(ct),this._finishRippleTransition(S)},ge=()=>this._destroyRipple(S),ct=setTimeout(ge,c+100);u.addEventListener("transitionend",I),u.addEventListener("transitioncancel",ge),E={onTransitionEnd:I,onTransitionCancel:ge,fallbackTimer:ct}}),this._activeRipples.set(S,E),(y||!c)&&this._finishRippleTransition(S),S}fadeOutRipple(n){if(n.state===hn.FADING_OUT||n.state===hn.HIDDEN)return;let e=n.element,i=_(_({},ac),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=hn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=At(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,wE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{CE.forEach(e=>{this._triggerElement.addEventListener(e,this,DE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===hn.FADING_IN?this._startFadeOutTransition(n):n.state===hn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=hn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=hn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ec(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+W1;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!tc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===hn.VISIBLE||n.config.terminateOnPointerUp&&n.state===hn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(wE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(CE.forEach(e=>n.removeEventListener(e,this,DE)),this._pointerUpEventsRegistered=!1))}};function q1(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var sc=new v("mat-ripple-global-options"),xE=(()=>{class t{_elementRef=d(T);_animationsDisabled=Ze();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(N),i=d(ce),r=d(sc,{optional:!0}),o=d(z);this._globalOptions=r||{},this._rippleRenderer=new Mo(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Y1={capture:!0},Z1=["focus","mousedown","mouseenter","touchstart"],sv="mat-ripple-loader-uninitialized",lv="mat-ripple-loader-class-name",EE="mat-ripple-loader-centered",zf="mat-ripple-loader-disabled",ME=(()=>{class t{_document=d(H);_animationsDisabled=Ze();_globalRippleOptions=d(sc,{optional:!0});_platform=d(ce);_ngZone=d(N);_injector=d(z);_eventCleanups;_hosts=new Map;constructor(){let e=d(it).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Z1.map(i=>e.listen(this._document,i,this._onInteraction,Y1)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(sv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(lv))&&e.setAttribute(lv,i.className||""),i.centered&&e.setAttribute(EE,""),i.disabled&&e.setAttribute(zf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(zf,""):e.removeAttribute(zf)}_onInteraction=e=>{let i=zt(e);if(i instanceof HTMLElement){let r=i.closest(`[${sv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(lv)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ac.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??ac.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(zf),rippleConfig:{centered:e.hasAttribute(EE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Mo(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(sv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var Q1=["mat-icon-button",""],K1=["*"],X1=new v("MAT_BUTTON_CONFIG");function SE(t){return t==null?void 0:zC(t)}var cv=(()=>{class t{_elementRef=d(T);_ngZone=d(N);_animationsDisabled=Ze();_config=d(X1,{optional:!0});_focusMonitor=d(xr);_cleanupClick;_renderer=d(Ne);_rippleLoader=d(ME);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(qe).load(Mr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),jt(r.color?"mat-"+r.color:""),U("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",he],disabled:[2,"disabled","disabled",he],ariaDisabled:[2,"aria-disabled","ariaDisabled",he],disabledInteractive:[2,"disabledInteractive","disabledInteractive",he],tabIndex:[2,"tabIndex","tabIndex",SE],_tabindex:[2,"tabindex","_tabindex",SE]}})}return t})(),di=(()=>{class t extends cv{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[K],attrs:Q1,ngContentSelectors:K1,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(),Vt(0,"span",0),Q(1),Vt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var J1=new v("cdk-dir-doc",{providedIn:"root",factory:()=>d(H)}),eP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function IE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?eP.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var lt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new O;constructor(){let e=d(J1,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(IE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();var Ha=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var tP=["matButton",""],nP=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],iP=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var kE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ot=(()=>{class t extends cv{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=rP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?kE.get(this._appearance):null,o=kE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[K],attrs:tP,ngContentSelectors:iP,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(nP),Vt(0,"span",0),Q(1),$e(2,"span",1),Q(3,1),Ge(),Q(4,2),Vt(5,"span",2)(6,"span",3)),i&2&&U("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function rP(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ht=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Ha,pe]})}return t})();function TE(t){return Error(`Unable to find icon with the name "${t}"`)}function oP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function AE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function RE(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Hi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},NE=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Hi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(st.HTML,r);if(!a)throw RE(r);let s=Co(a);return this._addSvgIconConfig(e,i,new Hi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Hi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(st.HTML,i);if(!o)throw RE(i);let a=Co(o);return this._addSvgIconSetConfig(e,new Hi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(st.RESOURCE_URL,e);if(!i)throw AE(e);let r=this._cachedIconsByUrl.get(i);return r?B($f(r)):this._loadSvgIconFromConfig(new Hi(e,null)).pipe(_t(o=>this._cachedIconsByUrl.set(i,o)),ne(o=>$f(o)))}getNamedSvgIcon(e,i=""){let r=OE(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Ms(TE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?B($f(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ne(i=>$f(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return B(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(zr(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(st.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),B(null)})));return Ss(o).pipe(ne(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw TE(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(i=>e.svgText=i),ne(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?B(null):this._fetchIcon(e).pipe(_t(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Co("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Co("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw oP();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(st.RESOURCE_URL,i);if(!a)throw AE(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ne(c=>Co(c)),$r(()=>this._inProgressUrlFetches.delete(a)),ks());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(OE(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return aP(o)?new Hi(o.url,null,o.options):new Hi(o,null)}}static \u0275fac=function(i){return new(i||t)(P(ya,8),P(Ml),P(H,8),P(St))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $f(t){return t.cloneNode(!0)}function OE(t,n){return t+":"+n}function aP(t){return!!(t.url&&t.options)}var sP=["*"],lP=new v("MAT_ICON_DEFAULT_OPTIONS"),cP=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(H),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),FE=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],dP=FE.map(t=>`[${t}]`).join(", "),uP=/^url\(['"]?#(.*?)['"]?\)$/,za=(()=>{class t{_elementRef=d(T);_iconRegistry=d(NE);_location=d(cP);_errorHandler=d(St);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=me.EMPTY;constructor(){let e=d(new ii("aria-hidden"),{optional:!0}),i=d(lP,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(dP),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)FE.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(uP):null;if(c){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(nt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(fe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),jt(r.color?"mat-"+r.color:""),U("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",he],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:sP,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),pn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var fP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),mP={passive:!0},PE=(()=>{class t{_platform=d(ce);_ngZone=d(N);_renderer=d(it).createRenderer(null,null);_styleLoader=d(qe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Xe;this._styleLoader.load(fP);let i=At(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new C,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,mP)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=At(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var LE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();var VE=new v("MAT_INPUT_VALUE_ACCESSOR");var dv=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ee(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ie(e=>e.some(i=>i.target===n)),od({bufferSize:1,refCount:!0}),De(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},jE=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new dv(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hP=["notch"],pP=["matFormFieldNotchedOutline",""],gP=["*"],BE=["iconPrefixContainer"],HE=["textPrefixContainer"],UE=["iconSuffixContainer"],zE=["textSuffixContainer"],_P=["textField"],vP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],yP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function bP(t,n){t&1&&X(0,"span",21)}function DP(t,n){if(t&1&&(p(0,"label",20),Q(1,1),re(2,bP,1,0,"span",21),g()),t&2){let e=$(2);ie("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),D(2),oe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function wP(t,n){if(t&1&&re(0,DP,3,5,"label",20),t&2){let e=$();oe(e._hasFloatingLabel()?0:-1)}}function CP(t,n){t&1&&X(0,"div",7)}function xP(t,n){}function EP(t,n){if(t&1&&Be(0,xP,0,0,"ng-template",13),t&2){$(2);let e=fa(1);ie("ngTemplateOutlet",e)}}function MP(t,n){if(t&1&&(p(0,"div",9),re(1,EP,1,1,null,13),g()),t&2){let e=$();ie("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),D(),oe(e._forceDisplayInfixLabel()?-1:1)}}function SP(t,n){t&1&&(p(0,"div",10,2),Q(2,2),g())}function IP(t,n){t&1&&(p(0,"div",11,3),Q(2,3),g())}function kP(t,n){}function TP(t,n){if(t&1&&Be(0,kP,0,0,"ng-template",13),t&2){$();let e=fa(1);ie("ngTemplateOutlet",e)}}function AP(t,n){t&1&&(p(0,"div",14,4),Q(2,4),g())}function RP(t,n){t&1&&(p(0,"div",15,5),Q(2,5),g())}function OP(t,n){t&1&&X(0,"div",16)}function NP(t,n){t&1&&(p(0,"div",18),Q(1,6),g())}function FP(t,n){if(t&1&&(p(0,"mat-hint",22),x(1),g()),t&2){let e=$(2);ie("id",e._hintLabelId),D(),Fe(e.hintLabel)}}function PP(t,n){if(t&1&&(p(0,"div",19),re(1,FP,2,2,"mat-hint",22),Q(2,7),X(3,"div",23),Q(4,8),g()),t&2){let e=$();D(),oe(e.hintLabel?1:-1)}}var ui=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-label"]]})}return t})(),QE=new v("MatError"),qf=(()=>{class t{id=d(Ye).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&ft("id",r.id)},inputs:{id:"id"},features:[be([{provide:QE,useExisting:t}])]})}return t})(),Gf=(()=>{class t{align="start";id=d(Ye).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(ft("id",r.id),fe("align",null),U("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),LP=new v("MatPrefix");var KE=new v("MatSuffix"),Yf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[be([{provide:KE,useExisting:t}])]})}return t})(),XE=new v("FloatingLabelParent"),$E=(()=>{class t{_elementRef=d(T);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(jE);_ngZone=d(N);_parent=d(XE);_resizeSubscription=new me;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return VP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function VP(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var WE="mdc-line-ripple--active",Wf="mdc-line-ripple--deactivating",GE=(()=>{class t{_elementRef=d(T);_cleanupTransitionEnd;constructor(){let e=d(N),i=d(Ne);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Wf),e.add(WE)}deactivate(){this._elementRef.nativeElement.classList.add(Wf)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Wf);e.propertyName==="opacity"&&r&&i.remove(WE,Wf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),qE=(()=>{class t{_elementRef=d(T);_ngZone=d(N);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&He(hP,5),i&2){let o;W(o=G())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:pP,ngContentSelectors:gP,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ae(),Vt(0,"div",1),$e(1,"div",2,0),Q(3),Ge(),Vt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),uv=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t})}return t})();var fv=new v("MatFormField"),jP=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),YE="fill",BP="auto",ZE="fixed",HP="translateY(-50%)",So=(()=>{class t{_elementRef=d(T);_changeDetectorRef=d(_e);_platform=d(ce);_idGenerator=d(Ye);_ngZone=d(N);_defaults=d(jP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=vl("iconPrefixContainer");_textPrefixContainerSignal=vl("textPrefixContainer");_iconSuffixContainerSignal=vl("iconSuffixContainer");_textSuffixContainerSignal=vl("textSuffixContainer");_prefixSuffixContainers=Bt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=HC(ui);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Rt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||BP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||YE;this._appearanceSignal.set(i)}_appearanceSignal=j(YE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ZE}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ZE}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ze();constructor(){let e=this._defaults,i=d(lt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),io(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Bt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(gt([void 0,void 0]),ne(()=>[i.errorState,i.userAriaDescribedBy]),rd(),Ie(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(De(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Yt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){WC({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Bt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${HP} translateX(${h}))`,S=a+s+l+c;return[y,S]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(xu(o,r._labelChild,ui,5),Dt(o,uv,5)(o,LP,5)(o,KE,5)(o,QE,5)(o,Gf,5)),i&2){Mu();let a;W(a=G())&&(r._formFieldControl=a.first),W(a=G())&&(r._prefixChildren=a),W(a=G())&&(r._suffixChildren=a),W(a=G())&&(r._errorChildren=a),W(a=G())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Eu(r._iconPrefixContainerSignal,BE,5)(r._textPrefixContainerSignal,HE,5)(r._iconSuffixContainerSignal,UE,5)(r._textSuffixContainerSignal,zE,5),He(_P,5)(BE,5)(HE,5)(UE,5)(zE,5)($E,5)(qE,5)(GE,5)),i&2){Mu(4);let o;W(o=G())&&(r._textField=o.first),W(o=G())&&(r._iconPrefixContainer=o.first),W(o=G())&&(r._textPrefixContainer=o.first),W(o=G())&&(r._iconSuffixContainer=o.first),W(o=G())&&(r._textSuffixContainer=o.first),W(o=G())&&(r._floatingLabel=o.first),W(o=G())&&(r._notchedOutline=o.first),W(o=G())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&U("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[be([{provide:fv,useExisting:t},{provide:XE,useExisting:t}])],ngContentSelectors:yP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ae(vP),Be(0,wP,1,1,"ng-template",null,0,Su),p(2,"div",6,1),V("click",function(a){return r._control.onContainerClick(a)}),re(4,CP,1,0,"div",7),p(5,"div",8),re(6,MP,2,2,"div",9),re(7,SP,3,0,"div",10),re(8,IP,3,0,"div",11),p(9,"div",12),re(10,TP,1,1,null,13),Q(11),g(),re(12,AP,3,0,"div",14),re(13,RP,3,0,"div",15),g(),re(14,OP,1,0,"div",16),g(),p(15,"div",17),re(16,NP,2,0,"div",18)(17,PP,5,1,"div",19),g()),i&2){let o;D(2),U("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),D(2),oe(!r._hasOutline()&&!r._control.disabled?4:-1),D(2),oe(r._hasOutline()?6:-1),D(),oe(r._hasIconPrefix?7:-1),D(),oe(r._hasTextPrefix?8:-1),D(2),oe(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),D(2),oe(r._hasTextSuffix?12:-1),D(),oe(r._hasIconSuffix?13:-1),D(),oe(r._hasOutline()?-1:14),D(),U("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();D(),oe((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[$E,qE,$g,GE,Gf],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var JE=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var lc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Va,So,pe]})}return t})();var zP=["button","checkbox","file","hidden","image","radio","range","reset","submit"],$P=new v("MAT_INPUT_CONFIG"),Qf=(()=>{class t{_elementRef=d(T);_platform=d(ce);ngControl=d(Bi,{optional:!0,self:!0});_autofillMonitor=d(PE);_ngZone=d(N);_formField=d(fv,{optional:!0});_renderer=d(Ne);_uid=d(Ye).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d($P,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Rt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(tn.required)??!1}set required(e){this._required=Rt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&rv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Rt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>rv().has(e));constructor(){let e=d(U_,{optional:!0}),i=d(Do,{optional:!0}),r=d(JE),o=d(VE,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?fo(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Zf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&io(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){zP.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&V("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(ft("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),fe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),U("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",he]},exportAs:["matInput"],features:[be([{provide:uv,useExisting:t}]),Te]})}return t})(),gn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[lc,lc,LE,pe]})}return t})();var cc=class{};function dc(t){return t&&typeof t.connect=="function"&&!(t instanceof Ds)}var Un=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Un||{}),Kf=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,i,r,o){n.forEachOperation((a,s,l)=>{let c,u;if(a.previousIndex==null){let f=()=>i(a,s,l);c=this._insertView(f,l,e,r(a)),u=c?Un.INSERTED:Un.REPLACED}else l==null?(this._detachAndCacheView(s,e),u=Un.REMOVED):(c=this._moveView(s,l,e,r(a)),u=Un.MOVED);o&&o({context:c?.context,operation:u,record:a})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let a=n();return i.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(n,e){let i=e.detach(n);this._maybeCacheView(i,e)}_moveView(n,e,i,r){let o=i.get(n);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let i=e.indexOf(n);i===-1?n.destroy():e.remove(i)}}_insertViewFromCache(n,e){let i=this._viewCache.pop();return i&&e.insert(i,n),i||null}};var Xf=class{applyChanges(n,e,i,r,o){n.forEachOperation((a,s,l)=>{let c,u;if(a.previousIndex==null){let f=i(a,s,l);c=e.createEmbeddedView(f.templateRef,f.context,f.index),u=Un.INSERTED}else l==null?(e.remove(s),u=Un.REMOVED):(c=e.get(s),e.move(c,l),u=Un.MOVED);o&&o({context:c?.context,operation:u,record:a})})}detach(){}};var $t=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var eM=(()=>{class t{_animationsDisabled=Ze();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&U("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Jf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var WP=["*"],GP=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,qP=["unscopedContent"],YP=["text"],ZP=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],QP=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var KP=new v("ListOption"),XP=(()=>{class t{_elementRef=d(T);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),JP=(()=>{class t{_elementRef=d(T);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),eL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),tM=(()=>{class t{_listOption=d(KP,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,hostVars:4,hostBindings:function(i,r){i&2&&U("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),tL=(()=>{class t extends tM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[K]})}return t})(),nL=(()=>{class t extends tM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[K]})}return t})(),iL=new v("MAT_LIST_CONFIG"),mv=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Rt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Rt(e))}_disabled=j(!1);_defaultOptions=d(iL,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,hostVars:1,hostBindings:function(i,r){i&2&&fe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),rL=(()=>{class t{_elementRef=d(T);_ngZone=d(N);_listBase=d(mv,{optional:!0});_platform=d(ce);_hostElement;_isButtonElement;_noopAnimations=Ze();_avatars;_icons;set lines(e){this._explicitLines=nn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Rt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Rt(e))}_disabled=j(!1);_subscriptions=new me;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(qe).load(Mr);let e=d(sc,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Mo(this,this._ngZone,this._hostElement,this._platform,d(z)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Yt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,contentQueries:function(i,r,o){if(i&1&&Dt(o,tL,4)(o,nL,4),i&2){let a;W(a=G())&&(r._avatars=a),W(a=G())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(fe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),U("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var nM=(()=>{class t extends mv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[be([{provide:mv,useExisting:t}]),K],ngContentSelectors:WP,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),Q(0))},styles:[GP],encapsulation:2,changeDetection:0})}return t})(),iM=(()=>{class t extends rL{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Rt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Dt(o,JP,5)(o,XP,5)(o,eL,5),i&2){let a;W(a=G())&&(r._lines=a),W(a=G())&&(r._titles=a),W(a=G())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&He(qP,5)(YP,5),i&2){let o;W(o=G())&&(r._unscopedContent=o.first),W(o=G())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(fe("aria-current",r._getAriaCurrent()),U("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[K],ngContentSelectors:QP,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ae(ZP),Q(0),p(1,"span",1),Q(2,1),Q(3,2),p(4,"span",2,0),V("cdkObserveContent",function(){return r._updateItemLines(!0)}),Q(6,3),g()(),Q(7,4),Q(8,5),X(9,"div",3))},dependencies:[oE],encapsulation:2,changeDetection:0})}return t})();var _n=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Va,Ha,Jf,pe,$t]})}return t})();var oL=20,ko=(()=>{class t{_ngZone=d(N);_platform=d(ce);_renderer=d(it).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=oL){return this._platform.isBrowser?new ee(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(zo(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):B()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ie(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=At(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hv=(()=>{class t{elementRef=d(T);scrollDispatcher=d(ko);ngZone=d(N);dir=d(lt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new C;_renderer=d(Ne);_cleanupScroll;_elementScrolled=new C;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&ja()!=Hn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),ja()==Hn.INVERTED?e.left=e.right:ja()==Hn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Uf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&ja()==Hn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&ja()==Hn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),aL=20,Ui=(()=>{class t{_platform=d(ce);_listeners;_viewportSize=null;_change=new C;_document=d(H);constructor(){let e=d(N),i=d(it).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=aL){return e>0?this._change.pipe(zo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rM=new v("CDK_VIRTUAL_SCROLL_VIEWPORT");var Io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})(),uc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe,Io,pe,Io]})}return t})();var fc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},rn=class extends fc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},zi=class extends fc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},pv=class extends fc{element;constructor(n){super(),this.element=n instanceof T?n.nativeElement:n}},Sr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof rn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof zi)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof pv)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},em=class extends Sr{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Jn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||z.NULL,o=r.get(ke,i.injector);e=Tu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var zn=(()=>{class t extends Sr{_moduleRef=d(Jn,{optional:!0});_document=d(H);_viewContainerRef=d(et);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new O;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[K]})}return t})(),fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();var oM=Uf();function Ao(t){return new tm(t.get(Ui),t.get(H))}var tm=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=tt(-this._previousScrollPosition.left),n.style.top=tt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),oM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),oM&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function fM(t,n){return new nm(t.get(ko),t.get(N),t.get(Ui),n)}var nm=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ie(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var mc=class{enable(){}disable(){}attach(){}};function gv(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function aM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Za(t,n){return new im(t.get(ko),t.get(Ui),t.get(N),n)}var im=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();gv(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},mM=(()=>{class t{_injector=d(z);constructor(){}noop=()=>new mc;close=e=>fM(this._injector,e);block=()=>Ao(this._injector);reposition=e=>Za(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$i=class{positionStrategy;scrollStrategy=new mc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var rm=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var hM=(()=>{class t{_attachedOverlays=[];_document=d(H);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pM=(()=>{class t extends hM{_ngZone=d(N);_renderer=d(it).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gM=(()=>{class t extends hM{_platform=d(ce);_ngZone=d(N);_renderer=d(it).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=zt(e)};_clickListener=e=>{let i=zt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(sM(s.overlayElement,i)||sM(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var _M=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),am=(()=>{class t{_platform=d(ce);_containerElement;_document=d(H);_styleLoader=d(qe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||iv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),iv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(_M)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_v=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function vv(t){return t&&t.nodeType===1}var Ya=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=me.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,u=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=q(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=tt(this._config.width),n.height=tt(this._config.height),n.minWidth=tt(this._config.minWidth),n.minHeight=tt(this._config.minHeight),n.maxWidth=tt(this._config.maxWidth),n.maxHeight=tt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;vv(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new _v(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Pa(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=je(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},lM="cdk-overlay-connected-position-bounding-box",lL=/([A-Za-z%]+)$/;function pc(t,n){return new hc(n,t.get(Ui),t.get(H),t.get(ce),t.get(am))}var hc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=me.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(lM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(c,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&To(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(lM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof T?this._origin.nativeElement:vv(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=dM(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let u=0-a,f=a+o.width-i.width,m=0-s,h=s+o.height-i.height,y=this._subtractOverflows(o.width,u,f),S=this._subtractOverflows(o.height,m,h),E=y*S;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:S===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=cM(this._overlayRef.getConfig().minHeight),s=cM(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=dM(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!cL(this._lastScrollVisibility,i)){let r=new rm(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),y=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-y/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,m;if(c)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),y=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>y&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-y/2)}return{top:a,left:f,bottom:s,right:m,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=tt(i.width),r.height=tt(i.height),r.top=tt(i.top)||"auto",r.bottom=tt(i.bottom)||"auto",r.left=tt(i.left)||"auto",r.right=tt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=tt(o)),a&&(r.maxWidth=tt(a))}this._lastBoundingBoxSize=i,To(this._boundingBox.style,r)}_resetBoundingBoxStyles(){To(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){To(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();To(i,this._getExactOverlayY(e,n,u)),To(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=tt(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=tt(a.maxWidth):o&&(i.maxWidth="")),To(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=tt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=tt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:aM(n,i),isOriginOutsideView:gv(n,i),isOverlayClipped:aM(e,i),isOverlayOutsideView:gv(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Pa(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof T)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function To(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function cM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(lL);return!e||e==="px"?parseFloat(n):null}return t||null}function dM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function cL(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var uM="cdk-global-overlay-wrapper";function Wi(t){return new om}var om=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(uM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",y="",S="";l?S="flex-start":u==="center"?(S="center",m?y=f:h=f):m?u==="left"||u==="end"?(S="flex-end",h=f):(u==="right"||u==="start")&&(S="flex-start",y=f):u==="left"||u==="start"?(S="flex-start",h=f):(u==="right"||u==="end")&&(S="flex-end",y=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=S,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(uM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},vM=(()=>{class t{_injector=d(z);constructor(){}global(){return Wi()}flexibleConnectedTo(e){return pc(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yv=new v("OVERLAY_DEFAULT_CONFIG");function Gi(t,n){t.get(qe).load(_M);let e=t.get(am),i=t.get(H),r=t.get(Ye),o=t.get(Kt),a=t.get(lt),s=t.get(Ne,null,{optional:!0})||t.get(it).createRenderer(null,null),l=new $i(n),c=t.get(yv,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return vv(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new Ya(new em(u,o,t),f,u,l,t.get(N),t.get(pM),i,t.get(_r),t.get(gM),n?.disableAnimations??t.get(al,null,{optional:!0})==="NoopAnimations",t.get(ke),s)}var yM=(()=>{class t{scrollStrategies=d(mM);_positionBuilder=d(vM);_injector=d(z);constructor(){}create(e){return Gi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[yM],imports:[pe,fi,uc,uc]})}return t})();function fL(t,n){}var Ir=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Dv=(()=>{class t extends Sr{_elementRef=d(T);_focusTrapFactory=d(Vf);_config;_interactivityChecker=d(K_);_ngZone=d(N);_focusMonitor=d(xr);_renderer=d(Ne);_changeDetectorRef=d(_e);_injector=d(z);_platform=d(ce);_document=d(H);_portalOutlet;_focusTrapped=new C;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(Ir,{optional:!0})||new Ir,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||je(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=si(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=si();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=si()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&He(zn,7),i&2){let o;W(o=G())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&fe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[K],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&Be(0,fL,0,0,"ng-template",0)},dependencies:[zn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),gc=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new C;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!ci(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},mL=new v("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=d(z);return()=>Ao(t)}}),hL=new v("DialogData"),pL=new v("DefaultDialogConfig");function gL(t){let n=j(t),e=new O;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var wv=(()=>{class t{_injector=d(z);_defaultOptions=d(pL,{optional:!0});_parentDialog=d(t,{optional:!0,skipSelf:!0});_overlayContainer=d(am);_idGenerator=d(Ye);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new C;_afterOpenedAtThisLevel=new C;_ariaHiddenElements=new Map;_scrollStrategy=d(mL);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=gi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gt(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Ir;i=_(_({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),a=Gi(this._injector,o),s=new gc(a,i),l=this._attachContainer(a,s,i);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(nt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,i),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){bv(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){bv(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),bv(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new $i({positionStrategy:e.positionStrategy||Wi().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:Ir,useValue:r},{provide:gc,useValue:i},{provide:Ya,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=Dv;let l=new rn(s,r.viewContainerRef,z.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof We){let a=this._createInjector(o,i,r,void 0),s={$implicit:o.data,dialogRef:i};o.templateContext&&(s=_(_({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new zi(e,null,s,a))}else{let a=this._createInjector(o,i,r,this._injector),s=r.attachComponentPortal(new rn(e,o.viewContainerRef,a));i.componentRef=s,i.componentInstance=s.instance}}_createInjector(e,i,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:hL,useValue:e.data},{provide:gc,useValue:i}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(i,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(lt,null,{optional:!0}))&&s.push({provide:lt,useValue:gL(e.direction)}),z.create({parent:a||o,providers:s})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bv(t,n){let e=t.length;for(;e--;)n(t[e])}var bM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[wv],imports:[mi,fi,oc,fi]})}return t})();function _L(t,n){}var lm=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Cv="mdc-dialog--open",DM="mdc-dialog--opening",wM="mdc-dialog--closing",vL=150,yL=75,bL=(()=>{class t extends Dv{_animationStateChanged=new O;_animationsEnabled=!Ze();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?xM(this._config.enterAnimationDuration)??vL:0;_exitAnimationDuration=this._animationsEnabled?xM(this._config.exitAnimationDuration)??yL:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(CM,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(DM,Cv)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Cv),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Cv),this._animationsEnabled?(this._hostElement.style.setProperty(CM,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(wM)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(DM,wM)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(ft("id",r._config.id),fe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),U("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[K],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",0)(1,"div",1),Be(2,_L,0,0,"ng-template",2),g()())},dependencies:[zn],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),CM="--mat-dialog-transition-duration";function xM(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?nn(t.substring(0,t.length-2)):t.endsWith("s")?nn(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var sm=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(sm||{}),Ka=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ki(1);_beforeClosed=new Ki(1);_result;_closeFallbackTimeout;_state=sm.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(Ie(r=>r.state==="opened"),nt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(Ie(r=>r.state==="closed"),nt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Yt(this.backdropClick(),this.keydownEvents().pipe(Ie(r=>r.keyCode===27&&!this.disableClose&&!ci(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),DL(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ie(i=>i.state==="closing"),nt(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=sm.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=sm.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function DL(t,n,e){return t._closeInteractionType=n,t.close(e)}var xv=new v("MatMdcDialogData"),wL=new v("mat-mdc-dialog-default-options"),CL=new v("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(z);return()=>Ao(t)}}),Xa=(()=>{class t{_defaultOptions=d(wL,{optional:!0});_scrollStrategy=d(CL);_parentDialog=d(t,{optional:!0,skipSelf:!0});_idGenerator=d(Ye);_injector=d(z);_dialog=d(wv);_animationsDisabled=Ze();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new C;_afterOpenedAtThisLevel=new C;dialogConfigClass=lm;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=gi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gt(void 0)));constructor(){this._dialogRefConstructor=Ka,this._dialogContainerType=bL,this._dialogDataToken=xv}open(e,i){let r;i=_(_({},this._defaultOptions||new lm),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,q(_({},i),{positionStrategy:Wi(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Ir,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var EM=(()=>{class t{_dialogRef=d(Ka,{optional:!0});_elementRef=d(T);_dialog=d(Xa);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=xL(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t})}return t})(),MM=(()=>{class t extends EM{id=d(Ye).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,r){i&2&&ft("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[K]})}return t})(),SM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[wg([hv])]})}return t})(),IM=(()=>{class t extends EM{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,r){i&2&&U("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[K]})}return t})();function xL(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(i=>i.id===e.id):null}var vn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[Xa],imports:[bM,mi,fi,pe]})}return t})();var EL=[[["caption"]],[["colgroup"],["col"]],"*"],ML=["caption","colgroup, col","*"];function SL(t,n){t&1&&Q(0,2)}function IL(t,n){t&1&&(p(0,"thead",0),yt(1,1),g(),p(2,"tbody",0),yt(3,2)(4,3),g(),p(5,"tfoot",0),yt(6,4),g())}function kL(t,n){t&1&&yt(0,1)(1,2)(2,3)(3,4)}var $n=new v("CDK_TABLE");var um=(()=>{class t{template=d(We);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkCellDef",""]]})}return t})(),fm=(()=>{class t{template=d(We);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkHeaderCellDef",""]]})}return t})(),AM=(()=>{class t{template=d(We);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkFooterCellDef",""]]})}return t})(),es=(()=>{class t{_table=d($n,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Dt(o,um,5)(o,fm,5)(o,AM,5),i&2){let a;W(a=G())&&(r.cell=a.first),W(a=G())&&(r.headerCell=a.first),W(a=G())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",he],stickyEnd:[2,"stickyEnd","stickyEnd",he]}})}return t})(),dm=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},RM=(()=>{class t extends dm{constructor(){super(d(es),d(T))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[K]})}return t})();var OM=(()=>{class t extends dm{constructor(){let e=d(es),i=d(T);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[K]})}return t})();var Mv=(()=>{class t{template=d(We);_differs=d(Ni);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof vc?e.headerCell.template:this instanceof Sv?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,features:[Te]})}return t})(),vc=(()=>{class t extends Mv{_table=d($n,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(We),d(Ni))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",he]},features:[K,Te]})}return t})(),Sv=(()=>{class t extends Mv{_table=d($n,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(We),d(Ni))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",he]},features:[K,Te]})}return t})(),mm=(()=>{class t extends Mv{_table=d($n,{optional:!0});when;constructor(){super(d(We),d(Ni))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[K]})}return t})(),Ro=(()=>{class t{_viewContainer=d(et);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","cdkCellOutlet",""]]})}return t})(),Iv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&yt(0,0)},dependencies:[Ro],encapsulation:2})}return t})();var kv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&yt(0,0)},dependencies:[Ro],encapsulation:2})}return t})(),NM=(()=>{class t{templateRef=d(We);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["ng-template","cdkNoDataRow",""]]})}return t})(),kM=["top","bottom","left","right"],Ev=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,r=!0,o,a,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let r of n)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));je({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,r=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(E=>E)||i.some(E=>E))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],s=a.children.length,l=this.direction==="rtl",c=l?"right":"left",u=l?"left":"right",f=e.lastIndexOf(!0),m=i.indexOf(!0),h,y,S;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),je({earlyRead:()=>{h=this._getCellWidths(a,r),y=this._getStickyStartColumnPositions(h,e),S=this._getStickyEndColumnPositions(h,i)},write:()=>{for(let E of n)for(let I=0;I<s;I++){let ge=E.children[I];e[I]&&this._addStickyStyle(ge,c,y[I],I===f),i[I]&&this._addStickyStyle(ge,u,S[I],I===m)}this._positionListener&&h.some(E=>!!E)&&(this._positionListener.stickyColumnsUpdated({sizes:f===-1?[]:h.slice(0,f+1).map((E,I)=>e[I]?E:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:m===-1?[]:h.slice(m).map((E,I)=>i[I+m]?E:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let r=i==="bottom"?n.slice().reverse():n,o=i==="bottom"?e.slice().reverse():e,a=[],s=[],l=[];je({earlyRead:()=>{for(let c=0,u=0;c<r.length;c++){if(!o[c])continue;a[c]=u;let f=r[c];l[c]=this._isNativeHtmlTable?Array.from(f.children):[f];let m=this._retrieveElementSize(f).height;u+=m,s[c]=m}},write:()=>{let c=o.lastIndexOf(!0);for(let u=0;u<r.length;u++){if(!o[u])continue;let f=a[u],m=u===c;for(let h of l[u])this._addStickyStyle(h,i,f,m)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&je({write:()=>{let i=n.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let r of e)n.style[r]="",n.classList.remove(this._borderCellCss[r]);kM.some(r=>e.indexOf(r)===-1&&n.style[r])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,r){n.classList.add(this._stickCellCss),r&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of kM)n.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=n.children;for(let o=0;o<r.length;o++){let a=r[o];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],r=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=r,r+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],r=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=r,r+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,r),this._resizeObserver.observe(n,{box:"border-box"})),r}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&TL(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function TL(t){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>t.classList.contains(n))}var _c=new v("STICKY_POSITIONING_LISTENER");var Tv=(()=>{class t{viewContainer=d(et);elementRef=d(T);constructor(){let e=d($n);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","rowOutlet",""]]})}return t})(),Av=(()=>{class t{viewContainer=d(et);elementRef=d(T);constructor(){let e=d($n);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","headerRowOutlet",""]]})}return t})(),Rv=(()=>{class t{viewContainer=d(et);elementRef=d(T);constructor(){let e=d($n);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","footerRowOutlet",""]]})}return t})(),Ov=(()=>{class t{viewContainer=d(et);elementRef=d(T);constructor(){let e=d($n);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","noDataRowOutlet",""]]})}return t})(),Nv=(()=>{class t{_differs=d(Ni);_changeDetectorRef=d(_e);_elementRef=d(T);_dir=d(lt,{optional:!0});_platform=d(ce);_viewRepeater;_viewportRuler=d(Ui);_injector=d(z);_virtualScrollViewport=d(rM,{optional:!0,host:!0});_positionListener=d(_c,{optional:!0})||d(_c,{optional:!0,skipSelf:!0});_document=d(H);_data;_renderedRange;_onDestroy=new C;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new C;_footerRowStickyUpdates=new C;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new C;_dataStream=new C;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new O;viewChange=new Le({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){d(new ii("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(De(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Kf:new Xf,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),dc(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===Un.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=TM(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=TM(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===o&&a.push(i[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<s.length;l++){let c=s[l],u=this._cachedRenderRowsMap.get(c.data);u.has(c.rowDef)?u.get(c.rowDef).push(c):u.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let l=s.shift();return l.dataIndex=i,l}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),cm(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=cm(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=cm(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=cm(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let l=!!s.getColumnsDiff();return a||l},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],dc(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;dc(this.dataSource)?e=this.dataSource.connect(this):Hr(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=B(this.dataSource)),this._renderChangeSubscription=qt([e,this.viewChange]).pipe(De(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);return l}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let a=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),a}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Ro.mostRecentCellOutlet&&Ro.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let a=e.get(i).context;a.count=r,a.first=i===0,a.last=i===r-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new Ev(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:B()).pipe(De(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?Lc:Nc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(zo(0,i),De(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),qt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(De(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let l=o.offsets[a],c=r!==0?Math.max(r-l,l):-l;for(let u of s)u.style.top=`${-c}px`}}}),qt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(De(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let l of s)l.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,l,c;for(let m=0;m<s;m++){let h=o.get(m+a);if(h&&h.rootNodes.length){l=c=h.rootNodes[0];break}}for(let m=s-1;m>-1;m--){let h=o.get(m+a);if(h&&h.rootNodes.length){c=h.rootNodes[h.rootNodes.length-1];break}}let u=l?.getBoundingClientRect?.(),f=c?.getBoundingClientRect?.();return u&&f?f.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Dt(o,NM,5)(o,es,5)(o,mm,5)(o,vc,5)(o,Sv,5),i&2){let a;W(a=G())&&(r._noDataRow=a.first),W(a=G())&&(r._contentColumnDefs=a),W(a=G())&&(r._contentRowDefs=a),W(a=G())&&(r._contentHeaderRowDefs=a),W(a=G())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&U("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",he],fixedLayout:[2,"fixedLayout","fixedLayout",he],recycleRows:[2,"recycleRows","recycleRows",he]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[be([{provide:$n,useExisting:t},{provide:_c,useValue:null}])],ngContentSelectors:ML,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ae(EL),Q(0),Q(1,1),re(2,SL,1,0),re(3,IL,7,0)(4,kL,4,0)),i&2&&(D(2),oe(r._isServer?2:-1),D(),oe(r._isNativeHtmlTable?3:4))},dependencies:[Av,Tv,Ov,Rv],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return t})();function cm(t,n){return t.concat(Array.from(n))}function TM(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var FM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[uc]})}return t})();var AL=[[["caption"]],[["colgroup"],["col"]],"*"],RL=["caption","colgroup, col","*"];function OL(t,n){t&1&&Q(0,2)}function NL(t,n){t&1&&(p(0,"thead",0),yt(1,1),g(),p(2,"tbody",2),yt(3,3)(4,4),g(),p(5,"tfoot",0),yt(6,5),g())}function FL(t,n){t&1&&yt(0,1)(1,3)(2,4)(3,5)}var PM=(()=>{class t extends Nv{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[be([{provide:Nv,useExisting:t},{provide:$n,useExisting:t},{provide:_c,useValue:null}]),K],ngContentSelectors:RL,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(Ae(AL),Q(0),Q(1,1),re(2,OL,1,0),re(3,NL,7,0)(4,FL,4,0)),i&2&&(D(2),oe(r._isServer?2:-1),D(),oe(r._isNativeHtmlTable?3:4))},dependencies:[Av,Tv,Ov,Rv],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return t})(),LM=(()=>{class t extends um{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matCellDef",""]],features:[be([{provide:um,useExisting:t}]),K]})}return t})(),VM=(()=>{class t extends fm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matHeaderCellDef",""]],features:[be([{provide:fm,useExisting:t}]),K]})}return t})();var jM=(()=>{class t extends es{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[be([{provide:es,useExisting:t}]),K]})}return t})(),BM=(()=>{class t extends RM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[K]})}return t})();var HM=(()=>{class t extends OM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[K]})}return t})();var UM=(()=>{class t extends vc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",he]},features:[be([{provide:vc,useExisting:t}]),K]})}return t})();var zM=(()=>{class t extends mm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275dir=w({type:t,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[be([{provide:mm,useExisting:t}]),K]})}return t})(),$M=(()=>{class t extends Iv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[be([{provide:Iv,useExisting:t}]),K],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&yt(0,0)},dependencies:[Ro],encapsulation:2})}return t})();var WM=(()=>{class t extends kv{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ye(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[be([{provide:kv,useExisting:t}]),K],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&yt(0,0)},dependencies:[Ro],encapsulation:2})}return t})();var yn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[FM,pe]})}return t})(),PL=9007199254740991,yc=class extends cc{_data;_renderData=new Le([]);_filter=new Le("");_internalPageChanges=new C;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let i=n[e];if(Nf(i)){let r=Number(i);return r<PL?r:i}return i};sortData=(n,e)=>{let i=e.active,r=e.direction;return!i||r==""?n:n.sort((o,a)=>{let s=this.sortingDataAccessor(o,i),l=this.sortingDataAccessor(a,i),c=typeof s,u=typeof l;c!==u&&(c==="number"&&(s+=""),u==="number"&&(l+=""));let f=0;return s!=null&&l!=null?s>l?f=1:s<l&&(f=-1):s!=null?f=1:l!=null&&(f=-1),f*(r=="asc"?1:-1)})};filterPredicate=(n,e)=>{let i=e.trim().toLowerCase();return Object.values(n).some(r=>`${r}`.toLowerCase().includes(i))};constructor(n=[]){super(),this._data=new Le(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Yt(this._sort.sortChange,this._sort.initialized):B(null),e=this._paginator?Yt(this._paginator.page,this._internalPageChanges,this._paginator.initialized):B(null),i=this._data,r=qt([i,this._filter]).pipe(ne(([s])=>this._filterData(s))),o=qt([r,n]).pipe(ne(([s])=>this._orderData(s))),a=qt([o,e]).pipe(ne(([s])=>this._pageData(s)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(s=>this._renderData.next(s))}_filterData(n){return this.filteredData=this.filter==null||this.filter===""?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let i=Math.ceil(e.length/e.pageSize)-1||0,r=Math.min(e.pageIndex,i);r!==e.pageIndex&&(e.pageIndex=r,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var LL=["*"];var VL=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],jL=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],BL=new v("MAT_CARD_CONFIG"),GM=(()=>{class t{appearance;constructor(){let e=d(BL,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&U("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:LL,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),Q(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),qM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var YM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var ZM=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),QM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:jL,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ae(VL),Q(0),$e(1,"div",0),Q(2,1),Ge(),Q(3,2))},encapsulation:2,changeDetection:0})}return t})();var bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var Fv=new v("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>d(ma)}),is="Method not implemented",Wt=class{locale;_localeChanges=new C;localeChanges=this._localeChanges;setTime(n,e,i,r){throw new Error(is)}getHours(n){throw new Error(is)}getMinutes(n){throw new Error(is)}getSeconds(n){throw new Error(is)}parseTime(n,e){throw new Error(is)}addSeconds(n,e){throw new Error(is)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareDate(n,e):i==r}return n==e}sameTime(n,e){if(n&&e){let i=this.isValid(n),r=this.isValid(e);return i&&r?!this.compareTime(n,e):i==r}return n==e}clampDate(n,e,i){return e&&this.compareDate(n,e)<0?e:i&&this.compareDate(n,i)>0?i:n}},Oo=new v("mat-date-formats");var HL=["tooltip"],UL=20;var zL=new v("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(z);return()=>Za(t,{scrollThrottle:UL})}}),$L=new v("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var KM="tooltip-panel",WL={passive:!0},GL=8,qL=8,YL=24,ZL=200,XM=(()=>{class t{_elementRef=d(T);_ngZone=d(N);_platform=d(ce);_ariaDescriber=d(gE);_focusMonitor=d(xr);_dir=d(lt);_injector=d(z);_viewContainerRef=d(et);_mediaMatcher=d(La);_document=d(H);_renderer=d(Ne);_animationsDisabled=Ze();_defaultOptions=d($L,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=QL;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Rt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=Rt(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=nn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=nn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new C;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=GL}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(De(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new rn(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(De(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof T)return this._overlayRef;this._detach()}let i=this._injector.get(ko).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${KM}`,o=pc(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(De(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Gi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(zL)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(De(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(De(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(De(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(De(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let i=qL,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),je(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,a;if(i==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=i==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${KM}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,WL))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||je({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ci(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),QL=(()=>{class t{_changeDetectorRef=d(_e);_elementRef=d(T);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ze();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new C;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>YL&&e.width>=ZL}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(i);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&He(HL,7),i&2){let o;W(o=G())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&V("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&($e(0,"div",1,0),ua("animationend",function(a){return r._handleAnimationEnd(a)}),$e(2,"div",2),x(3),Ge()()),i&2&&(jt(r.tooltipClass),U("mdc-tooltip--multiline",r._isMultiline),D(3),Fe(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var KL=["mat-calendar-body",""];function XL(t,n){return this._trackRow(n)}var rS=(t,n)=>n.id;function JL(t,n){if(t&1&&($e(0,"tr",0)(1,"td",3),x(2),Ge()()),t&2){let e=$();D(),Oi("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),fe("colspan",e.numCols),D(),Pe(" ",e.label," ")}}function eV(t,n){if(t&1&&($e(0,"td",3),x(1),Ge()),t&2){let e=$(2);Oi("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),fe("colspan",e._firstRowOffset),D(),Pe(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function tV(t,n){if(t&1){let e=bt();$e(0,"td",6)(1,"button",7),ua("click",function(r){let o=Ee(e).$implicit,a=$(2);return Me(a._cellClicked(o,r))})("focus",function(r){let o=Ee(e).$implicit,a=$(2);return Me(a._emitActiveDateChange(o,r))}),$e(2,"span",8),x(3),Ge(),Vt(4,"span",9),Ge()()}if(t&2){let e=n.$implicit,i=n.$index,r=$().$index,o=$();Oi("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),fe("data-mat-row",r)("data-mat-col",i),D(),jt(e.cssClasses),U("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(r,i))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,r,i))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,r,i))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),ft("tabIndex",o._isActiveCell(r,i)?0:-1),fe("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),D(),U("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),D(),Pe(" ",e.displayValue," ")}}function nV(t,n){if(t&1&&($e(0,"tr",1),re(1,eV,2,6,"td",4),Ai(2,tV,5,49,"td",5,rS),Ge()),t&2){let e=n.$implicit,i=n.$index,r=$();D(),oe(i===0&&r._firstRowOffset?1:-1),D(),Ri(e)}}function iV(t,n){if(t&1&&(p(0,"th",2)(1,"span",6),x(2),g(),p(3,"span",3),x(4),g()()),t&2){let e=n.$implicit;D(2),Fe(e.long),D(2),Fe(e.narrow)}}var rV=["*"];function oV(t,n){}function aV(t,n){if(t&1){let e=bt();p(0,"mat-month-view",4),jn("activeDateChange",function(r){Ee(e);let o=$();return ni(o.activeDate,r)||(o.activeDate=r),Me(r)}),V("_userSelection",function(r){Ee(e);let o=$();return Me(o._dateSelected(r))})("dragStarted",function(r){Ee(e);let o=$();return Me(o._dragStarted(r))})("dragEnded",function(r){Ee(e);let o=$();return Me(o._dragEnded(r))}),g()}if(t&2){let e=$();Vn("activeDate",e.activeDate),ie("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function sV(t,n){if(t&1){let e=bt();p(0,"mat-year-view",5),jn("activeDateChange",function(r){Ee(e);let o=$();return ni(o.activeDate,r)||(o.activeDate=r),Me(r)}),V("monthSelected",function(r){Ee(e);let o=$();return Me(o._monthSelectedInYearView(r))})("selectedChange",function(r){Ee(e);let o=$();return Me(o._goToDateInView(r,"month"))}),g()}if(t&2){let e=$();Vn("activeDate",e.activeDate),ie("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function lV(t,n){if(t&1){let e=bt();p(0,"mat-multi-year-view",6),jn("activeDateChange",function(r){Ee(e);let o=$();return ni(o.activeDate,r)||(o.activeDate=r),Me(r)}),V("yearSelected",function(r){Ee(e);let o=$();return Me(o._yearSelectedInMultiYearView(r))})("selectedChange",function(r){Ee(e);let o=$();return Me(o._goToDateInView(r,"year"))}),g()}if(t&2){let e=$();Vn("activeDate",e.activeDate),ie("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function cV(t,n){}var dV=["button"],uV=[[["","matDatepickerToggleIcon",""]]],fV=["[matDatepickerToggleIcon]"];function mV(t,n){t&1&&(Mi(),p(0,"svg",2),X(1,"path",3),g())}var os=(()=>{class t{changes=new C;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,i){return`${e} \u2013 ${i}`}formatYearRangeLabel(e,i){return`${e} to ${i}`}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hV=0,Dc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=hV++;cssClasses;constructor(n,e,i,r,o,a=n,s){this.value=n,this.displayValue=e,this.ariaLabel=i,this.enabled=r,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}},pV={passive:!1,capture:!0},hm={passive:!0,capture:!0},JM={passive:!0},rs=(()=>{class t{_elementRef=d(T);_ngZone=d(N);_platform=d(ce);_intl=d(os);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new O;previewChange=new O;activeDateChange=new O;dragStarted=new O;dragEnded=new O;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=d(z);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=d(Ne),i=d(Ye);this._startDateLabelId=i.getId("mat-calendar-body-start-"),this._endDateLabelId=i.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=i.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=i.getId("mat-calendar-body-comparison-end-"),d(qe).load(Mr),this._ngZone.runOutsideAngular(()=>{let r=this._elementRef.nativeElement,o=[e.listen(r,"touchmove",this._touchmoveHandler,pV),e.listen(r,"mouseenter",this._enterHandler,hm),e.listen(r,"focus",this._enterHandler,hm),e.listen(r,"mouseleave",this._leaveHandler,hm),e.listen(r,"blur",this._leaveHandler,hm),e.listen(r,"mousedown",this._mousedownHandler,JM),e.listen(r,"touchstart",this._mousedownHandler,JM)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,i){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:i})}_emitActiveDateChange(e,i){e.enabled&&this.activeDateChange.emit({value:e.value,event:i})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let i=e.numCols,{rows:r,numCols:o}=this;(e.rows||i)&&(this._firstRowOffset=r&&r.length&&r[0].length?o-r[0].length:0),(e.cellAspectRatio||i||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(i||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,i){let r=e*this.numCols+i;return e&&(r-=this._firstRowOffset),r==this.activeCell}_focusActiveCell(e=!0){je(()=>{setTimeout(()=>{let i=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");i&&(e||(this._skipNextFocus=!0),i.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Vv(e,this.startValue,this.endValue)}_isRangeEnd(e){return jv(e,this.startValue,this.endValue)}_isInRange(e){return Bv(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Vv(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,i,r){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[i][r-1];if(!o){let a=this.rows[i-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,i,r){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[i][r+1];if(!o){let a=this.rows[i+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return jv(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Bv(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Vv(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return jv(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Bv(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let i=this._getCellFromElement(e.target);i&&this._ngZone.run(()=>this.previewChange.emit({value:i.enabled?i:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let i=eS(e),r=i?this._getCellFromElement(i):null;i!==e.target&&(this._didDragSinceMouseDown=!0),Lv(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:r?.enabled?r:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let i=e.target&&this._getCellFromElement(e.target);!i||!this._isInRange(i.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:i.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let i=Lv(e.target);if(!i){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}i.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let r=this._getCellFromElement(i);this.dragEnded.emit({value:r?.rawValue??null,event:e})})};_touchendHandler=e=>{let i=eS(e);i&&this._mouseupHandler({target:i})};_getCellFromElement(e){let i=Lv(e);if(i){let r=i.getAttribute("data-mat-row"),o=i.getAttribute("data-mat-col");if(r&&o)return this.rows[parseInt(r)]?.[parseInt(o)]||null}return null}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Te],attrs:KL,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(i,r){i&1&&(re(0,JL,3,6,"tr",0),Ai(1,nV,4,1,"tr",1,XL,!0),$e(3,"span",2),x(4),Ge(),$e(5,"span",2),x(6),Ge(),$e(7,"span",2),x(8),Ge(),$e(9,"span",2),x(10),Ge()),i&2&&(oe(r._firstRowOffset<r.labelMinRequiredCells?0:-1),D(),Ri(r.rows),D(2),ft("id",r._startDateLabelId),D(),Pe(" ",r.startDateAccessibleName,`
`),D(),ft("id",r._endDateLabelId),D(),Pe(" ",r.endDateAccessibleName,`
`),D(),ft("id",r._comparisonStartDateLabelId),D(),gl(" ",r.comparisonDateAccessibleName," ",r.startDateAccessibleName,`
`),D(),ft("id",r._comparisonEndDateLabelId),D(),gl(" ",r.comparisonDateAccessibleName," ",r.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Pv(t){return t?.nodeName==="TD"}function Lv(t){let n;return Pv(t)?n=t:Pv(t.parentNode)?n=t.parentNode:Pv(t.parentNode?.parentNode)&&(n=t.parentNode.parentNode),n?.getAttribute("data-mat-row")!=null?n:null}function Vv(t,n,e){return e!==null&&n!==e&&t<e&&t===n}function jv(t,n,e){return n!==null&&n!==e&&t>=n&&t===e}function Bv(t,n,e,i){return i&&n!==null&&e!==null&&n!==e&&t>=n&&t<=e}function eS(t){let n=t.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var Dn=class{start;end;_disableStructuralEquivalency;constructor(n,e){this.start=n,this.end=e}},pm=(()=>{class t{selection;_adapter;_selectionChanged=new C;selectionChanged=this._selectionChanged;constructor(e,i){this.selection=e,this._adapter=i,this.selection=e}updateSelection(e,i){let r=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:i,oldValue:r})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(i){yu()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),gV=(()=>{class t extends pm{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(i){return new(i||t)(P(Wt))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var _V={provide:pm,useFactory:()=>d(pm,{optional:!0,skipSelf:!0})||new gV(d(Wt))};var oS=new v("MAT_DATE_RANGE_SELECTION_STRATEGY");var Hv=7,vV=0,tS=(()=>{class t{_changeDetectorRef=d(_e);_dateFormats=d(Oo,{optional:!0});_dateAdapter=d(Wt,{optional:!0});_dir=d(lt,{optional:!0});_rangeStrategy=d(oS,{optional:!0});_rerenderSubscription=me.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._hasSameMonthAndYear(i,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Dn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new O;_userSelection=new O;dragStarted=new O;dragEnded=new O;activeDateChange=new O;_matCalendarBody;_monthLabel=j("");_weeks=j([]);_firstWeekOffset=j(0);_rangeStart=j(null);_rangeEnd=j(null);_comparisonRangeStart=j(null);_comparisonRangeEnd=j(null);_previewStart=j(null);_previewEnd=j(null);_isRange=j(!1);_todayDate=j(null);_weekdays=j([]);constructor(){d(qe).load(li),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(gt(null)).subscribe(()=>this._init())}ngOnChanges(e){let i=e.comparisonStart||e.comparisonEnd;i&&!i.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let i=e.value,r=this._getDateFromDayOfMonth(i),o,a;this._selected instanceof Dn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==i||a!==i)&&this.selectedChange.emit(r),this._userSelection.emit({value:r,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ci(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Hv+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Hv),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:i}){if(this._rangeStrategy){let r=i?i.rawValue:null,o=this._rangeStrategy.createPreview(r,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&r){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,r,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let i=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:i??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),i=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((a,s)=>({long:a,narrow:i[s],id:vV++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),i=this._dateAdapter.getDateNames(),r=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==Hv&&(r.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),c=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(s,"month"):void 0;r[r.length-1].push(new Dc(o+1,i[o],c,l,u,this._getCellCompareValue(s),s))}this._weeks.set(r)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,i){return!!(e&&i&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i))}_getCellCompareValue(e){if(e){let i=this._dateAdapter.getYear(e),r=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(i,r,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Dn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-month-view"]],viewQuery:function(i,r){if(i&1&&He(rs,5),i&2){let o;W(o=G())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Te],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(i,r){i&1&&(p(0,"table",0)(1,"thead",1)(2,"tr"),Ai(3,iV,5,2,"th",2,rS),g(),p(5,"tr",3),X(6,"th",4),g()(),p(7,"tbody",5),V("selectedValueChange",function(a){return r._dateSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("previewChange",function(a){return r._previewChanged(a)})("dragStarted",function(a){return r.dragStarted.emit(a)})("dragEnded",function(a){return r._dragEnded(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),g()()),i&2&&(D(3),Ri(r._weekdays()),D(4),ie("label",r._monthLabel())("rows",r._weeks())("todayValue",r._todayDate())("startValue",r._rangeStart())("endValue",r._rangeEnd())("comparisonStart",r._comparisonRangeStart())("comparisonEnd",r._comparisonRangeEnd())("previewStart",r._previewStart())("previewEnd",r._previewEnd())("isRange",r._isRange())("labelMinRequiredCells",3)("activeCell",r._dateAdapter.getDate(r.activeDate)-1)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName))},dependencies:[rs],encapsulation:2,changeDetection:0})}return t})(),on=24,Uv=4,nS=(()=>{class t{_changeDetectorRef=d(_e);_dateAdapter=d(Wt,{optional:!0});_dir=d(lt,{optional:!0});_rerenderSubscription=me.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),aS(this._dateAdapter,i,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Dn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new O;yearSelected=new O;activeDateChange=new O;_matCalendarBody;_years=j([]);_todayYear=j(0);_selectedYear=j(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(gt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let i=this._dateAdapter.getYear(this._activeDate)-bc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),r=[];for(let o=0,a=[];o<on;o++)a.push(i+o),a.length==Uv&&(r.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(r),this._changeDetectorRef.markForCheck()}_yearSelected(e){let i=e.value,r=this._dateAdapter.createDate(i,0,1),o=this._getDateFromYear(i);this.yearSelected.emit(r),this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromYear(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Uv);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Uv);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-bc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,on-bc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-on*10:-on);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?on*10:on);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return bc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let i=this._dateAdapter.getMonth(this.activeDate),r=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,i,1));return this._dateAdapter.createDate(e,i,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForYear(e){let i=this._dateAdapter.createDate(e,0,1),r=this._dateAdapter.getYearName(i),o=this.dateClass?this.dateClass(i,"multi-year"):void 0;return new Dc(e,r,r,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(e,0,1);for(let r=i;this._dateAdapter.getYear(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Dn){let i=e.start||e.end;i&&this._selectedYear.set(this._dateAdapter.getYear(i))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-multi-year-view"]],viewQuery:function(i,r){if(i&1&&He(rs,5),i&2){let o;W(o=G())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(p(0,"table",0)(1,"thead",1)(2,"tr"),X(3,"th",2),g()(),p(4,"tbody",3),V("selectedValueChange",function(a){return r._yearSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),g()()),i&2&&(D(4),ie("rows",r._years())("todayValue",r._todayYear())("startValue",r._selectedYear())("endValue",r._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",r._getActiveCell()))},dependencies:[rs],encapsulation:2,changeDetection:0})}return t})();function aS(t,n,e,i,r){let o=t.getYear(n),a=t.getYear(e),s=sS(t,i,r);return Math.floor((o-s)/on)===Math.floor((a-s)/on)}function bc(t,n,e,i){let r=t.getYear(n);return yV(r-sS(t,e,i),on)}function sS(t,n,e){let i=0;return e?i=t.getYear(e)-on+1:n&&(i=t.getYear(n)),i}function yV(t,n){return(t%n+n)%n}var iS=(()=>{class t{_changeDetectorRef=d(_e);_dateFormats=d(Oo,{optional:!0});_dateAdapter=d(Wt,{optional:!0});_dir=d(lt,{optional:!0});_rerenderSubscription=me.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let i=this._activeDate,r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(r,this.minDate,this.maxDate),this._dateAdapter.getYear(i)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Dn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new O;monthSelected=new O;activeDateChange=new O;_matCalendarBody;_months=j([]);_yearLabel=j("");_todayMonth=j(null);_selectedMonth=j(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(gt(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let i=e.value,r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),i,1);this.monthSelected.emit(r);let o=this._getDateFromMonth(i);this.selectedChange.emit(o)}_updateActiveDate(e){let i=e.value,r=this._activeDate;this.activeDate=this._getDateFromMonth(i),this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let i=this._activeDate,r=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,r?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(i,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(i=>i.map(r=>this._createCellForMonth(r,e[r])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.getNumDaysInMonth(i);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),r))}_createCellForMonth(e,i){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(r,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(r,"year"):void 0;return new Dc(e,i.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let i=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(i,e)||this._isYearAndMonthBeforeMinDate(i,e))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(i,e,1);for(let o=r;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,i){if(this.maxDate){let r=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>r||e===r&&i>o}return!1}_isYearAndMonthBeforeMinDate(e,i){if(this.minDate){let r=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<r||e===r&&i<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Dn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-year-view"]],viewQuery:function(i,r){if(i&1&&He(rs,5),i&2){let o;W(o=G())&&(r._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(i,r){i&1&&(p(0,"table",0)(1,"thead",1)(2,"tr"),X(3,"th",2),g()(),p(4,"tbody",3),V("selectedValueChange",function(a){return r._monthSelected(a)})("activeDateChange",function(a){return r._updateActiveDate(a)})("keyup",function(a){return r._handleCalendarBodyKeyup(a)})("keydown",function(a){return r._handleCalendarBodyKeydown(a)}),g()()),i&2&&(D(4),ie("label",r._yearLabel())("rows",r._months())("todayValue",r._todayMonth())("startValue",r._selectedMonth())("endValue",r._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",r._dateAdapter.getMonth(r.activeDate)))},dependencies:[rs],encapsulation:2,changeDetection:0})}return t})(),lS=(()=>{class t{_intl=d(os);calendar=d(zv);_dateAdapter=d(Wt,{optional:!0});_dateFormats=d(Oo,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){d(qe).load(li);let e=d(_e);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-on))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:on))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,i=this._intl,r=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=r.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=i.switchToMultiYearViewLabel,this._prevButtonLabel=i.prevMonthLabel,this._nextButtonLabel=i.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=r.getYearName(e.activeDate),this._periodButtonDescription=r.getYearName(e.activeDate),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevYearLabel,this._nextButtonLabel=i.nextYearLabel):(this._periodButtonText=i.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=i.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=i.switchToMonthViewLabel,this._prevButtonLabel=i.prevMultiYearLabel,this._nextButtonLabel=i.nextMultiYearLabel)}_isSameView(e,i){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(i):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(i):aS(this._dateAdapter,e,i,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let i=this._dateAdapter.getYear(this.calendar.activeDate)-bc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),r=i+on-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1)),a=this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1));return[o,a]}_periodButtonLabelId=d(Ye).getId("mat-calendar-period-label-");static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:rV,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(i,r){i&1&&(Ae(),p(0,"div",0)(1,"div",1)(2,"span",2),x(3),g(),p(4,"button",3),V("click",function(){return r.currentPeriodClicked()}),p(5,"span",4),x(6),g(),Mi(),p(7,"svg",5),X(8,"polygon",6),g()(),ta(),X(9,"div",7),Q(10),p(11,"button",8),V("click",function(){return r.previousClicked()}),Mi(),p(12,"svg",9),X(13,"path",10),g()(),ta(),p(14,"button",11),V("click",function(){return r.nextClicked()}),Mi(),p(15,"svg",9),X(16,"path",12),g()()()()),i&2&&(D(2),ie("id",r._periodButtonLabelId),D(),Fe(r.periodButtonDescription),D(),fe("aria-label",r.periodButtonLabel)("aria-describedby",r._periodButtonLabelId),D(2),Fe(r.periodButtonText),D(),U("mat-calendar-invert",r.calendar.currentView!=="month"),D(4),ie("disabled",!r.previousEnabled())("matTooltip",r.prevButtonLabel),fe("aria-label",r.prevButtonLabel),D(3),ie("disabled",!r.nextEnabled())("matTooltip",r.nextButtonLabel),fe("aria-label",r.nextButtonLabel))},dependencies:[Ot,di,XM],encapsulation:2,changeDetection:0})}return t})(),zv=(()=>{class t{_dateAdapter=d(Wt,{optional:!0});_dateFormats=d(Oo,{optional:!0});_changeDetectorRef=d(_e);_elementRef=d(T);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Dn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new O;yearSelected=new O;monthSelected=new O;viewChanged=new O(!0);_userSelection=new O;_userDragDrop=new O;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let i=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),i&&(this.stateChanges.next(),this.viewChanged.emit(i))}_currentView;_activeDrag=null;stateChanges=new C;constructor(){this._intlChanges=d(os).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new rn(this.headerComponent||lS),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let i=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,r=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=i||r||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(si())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let i=e.value;(this.selected instanceof Dn||i&&!this._dateAdapter.sameDate(i,this.selected))&&this.selectedChange.emit(i),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,i){this.activeDate=e,this.currentView=i}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-calendar"]],viewQuery:function(i,r){if(i&1&&He(tS,5)(iS,5)(nS,5),i&2){let o;W(o=G())&&(r.monthView=o.first),W(o=G())&&(r.yearView=o.first),W(o=G())&&(r.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[be([_V]),Te],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(i,r){if(i&1&&(Be(0,oV,0,0,"ng-template",0),p(1,"div",1),re(2,aV,1,11,"mat-month-view",2)(3,sV,1,6,"mat-year-view",3)(4,lV,1,6,"mat-multi-year-view",3),g()),i&2){let o;ie("cdkPortalOutlet",r._calendarHeaderPortal),D(2),oe((o=r.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[zn,Y_,tS,iS,nS],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var bV=(()=>{class t{_elementRef=d(T);_animationsDisabled=Ze();_changeDetectorRef=d(_e);_globalModel=d(pm);_dateAdapter=d(Wt);_ngZone=d(N);_rangeSelectionStrategy=d(oS,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new C;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(d(qe).load(li),this._closeButtonText=d(os).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,i=d(Ne);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"animationstart",this._handleAnimationEvent),i.listen(e,"animationend",this._handleAnimationEvent),i.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let i=this._model.selection,r=e.value,o=i instanceof Dn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(r,i,e.event);this._model.updateSelection(a,this)}else r&&(o||!this._dateAdapter.sameDate(r,i))&&this._model.add(r);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let i=this._elementRef.nativeElement;e.target!==i||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",i.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,i){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,i&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-datepicker-content"]],viewQuery:function(i,r){if(i&1&&He(zv,5),i&2){let o;W(o=G())&&(r._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(i,r){i&2&&(jt(r.color?"mat-"+r.color:""),U("mat-datepicker-content-touch",r.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!r._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(i,r){i&1&&(p(0,"div",0)(1,"mat-calendar",1),V("yearSelected",function(a){return r.datepicker._selectYear(a)})("monthSelected",function(a){return r.datepicker._selectMonth(a)})("viewChanged",function(a){return r.datepicker._viewChanged(a)})("_userSelection",function(a){return r._handleUserSelection(a)})("_userDragDrop",function(a){return r._handleUserDragDrop(a)}),g(),Be(2,cV,0,0,"ng-template",2),p(3,"button",3),V("focus",function(){return r._closeButtonFocused=!0})("blur",function(){return r._closeButtonFocused=!1})("click",function(){return r.datepicker.close()}),x(4),g()()),i&2&&(U("mat-datepicker-content-container-with-custom-header",r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",r._actionsPortal),fe("aria-modal",!0)("aria-labelledby",r._dialogLabelId??void 0),D(),jt(r.datepicker.panelClass),ie("id",r.datepicker.id)("startAt",r.datepicker.startAt)("startView",r.datepicker.startView)("minDate",r.datepicker._getMinDate())("maxDate",r.datepicker._getMaxDate())("dateFilter",r.datepicker._getDateFilter())("headerComponent",r.datepicker.calendarHeaderComponent)("selected",r._getSelected())("dateClass",r.datepicker.dateClass)("comparisonStart",r.comparisonStart)("comparisonEnd",r.comparisonEnd)("startDateAccessibleName",r.startDateAccessibleName)("endDateAccessibleName",r.endDateAccessibleName),D(),ie("cdkPortalOutlet",r._actionsPortal),D(),U("cdk-visually-hidden",!r._closeButtonFocused),ie("color",r.color||"primary"),D(),Fe(r._closeButtonText))},dependencies:[X_,zv,zn,Ot],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var DV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matDatepickerToggleIcon",""]]})}return t})(),wV=(()=>{class t{_intl=d(os);_changeDetectorRef=d(_e);_stateChanges=me.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=d(new ii("tabindex"),{optional:!0}),i=Number(e);this.tabIndex=i||i===0?i:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:B(),i=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:B(),r=this.datepicker?Yt(this.datepicker.openedStream,this.datepicker.closedStream):B();this._stateChanges.unsubscribe(),this._stateChanges=Yt(this._intl.changes,e,i,r).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-datepicker-toggle"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,DV,5),i&2){let a;W(a=G())&&(r._customIcon=a.first)}},viewQuery:function(i,r){if(i&1&&He(dV,5),i&2){let o;W(o=G())&&(r._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(i,r){i&1&&V("click",function(a){return r._open(a)}),i&2&&(fe("tabindex",null)("data-mat-calendar",r.datepicker?r.datepicker.id:null),U("mat-datepicker-toggle-active",r.datepicker&&r.datepicker.opened)("mat-accent",r.datepicker&&r.datepicker.color==="accent")("mat-warn",r.datepicker&&r.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",he],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Te],ngContentSelectors:fV,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(i,r){i&1&&(Ae(uV),p(0,"button",1,0),re(2,mV,2,0,":svg:svg",2),Q(3),g()),i&2&&(ie("tabIndex",r.disabled?-1:r.tabIndex)("disabled",r.disabled)("disableRipple",r.disableRipple),fe("aria-haspopup",r.datepicker?"dialog":null)("aria-label",r.ariaLabel||r._intl.openCalendarLabel)("aria-expanded",r.datepicker?r.datepicker.opened:null),D(2),oe(r._customIcon?-1:2))},dependencies:[di],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var wn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[os],imports:[ht,mi,oc,fi,bV,wV,lS,pe,Io]})}return t})();var CV=["text"],xV=[[["mat-icon"]],"*"],EV=["mat-icon","*"];function MV(t,n){if(t&1&&X(0,"mat-pseudo-checkbox",1),t&2){let e=$();ie("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function SV(t,n){if(t&1&&X(0,"mat-pseudo-checkbox",3),t&2){let e=$();ie("disabled",e.disabled)}}function IV(t,n){if(t&1&&(p(0,"span",4),x(1),g()),t&2){let e=$();D(),Pe("(",e.group.label,")")}}var kV=new v("MAT_OPTION_PARENT_COMPONENT"),TV=new v("MatOptgroup");var Xv=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},cS=(()=>{class t{_element=d(T);_changeDetectorRef=d(_e);_parent=d(kV,{optional:!0});group=d(TV,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Ye).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new O;_text;_stateChanges=new C;constructor(){let e=d(qe);e.load(Mr),e.load(li),this._signalDisableRipple=!!this._parent&&fo(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ci(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Xv(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&He(CV,7),i&2){let o;W(o=G())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&V("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(ft("id",r.id),fe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),U("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",he]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:EV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Ae(xV),re(0,MV,1,2,"mat-pseudo-checkbox",1),Q(1),p(2,"span",2,0),Q(4,1),g(),re(5,SV,1,1,"mat-pseudo-checkbox",3),re(6,IV,2,1,"span",4),X(7,"div",5)),i&2&&(oe(r.multiple?0:-1),D(5),oe(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),D(),oe(r.group&&r.group._inert?6:-1),D(),ie("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[eM,xE],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();var Jv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Ha,Jf,cS,pe]})}return t})();var AV=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,RV=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ey(t,n){let e=Array(t);for(let i=0;i<t;i++)e[i]=n(i);return e}var OV=(()=>{class t extends Wt{_matDateLocale=d(Fv,{optional:!0});constructor(){super();let e=d(Fv,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let i=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return ey(12,r=>this._format(i,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return ey(31,i=>this._format(e,new Date(2017,0,i+1)))}getDayOfWeekNames(e){let i=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return ey(7,r=>this._format(i,new Date(2017,0,r+1)))}getYearName(e){let i=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(i,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),i=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return i===7?0:i}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,i,r){let o=this._createDateWithOverflow(e,i,r);return o.getMonth()!=i,o}today(){return new Date}parse(e,i){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,i){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,q(_({},i),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,i){return this.addCalendarMonths(e,i*12)}addCalendarMonths(e,i){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+i,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+i)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,i){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+i)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(AV.test(e)){let i=new Date(e);if(this.isValid(i))return i}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,i,r,o){let a=this.clone(e);return a.setHours(i,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,i){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,i){return new Date(e.getTime()+i*1e3)}_createDateWithOverflow(e,i,r){let o=new Date;return o.setFullYear(e,i,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,i){let r=new Date;return r.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),r.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()),e.format(r)}_parseTimeString(e){let i=e.toUpperCase().match(RV);if(i){let r=parseInt(i[1]),o=parseInt(i[2]),a=i[3]==null?void 0:parseInt(i[3]),s=i[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),ty(r,0,23)&&ty(o,0,59)&&(a==null||ty(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function ty(t,n,e){return!isNaN(t)&&t>=n&&t<=e}var NV={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var Cn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[FV()]})}return t})();function FV(t=NV){return[{provide:Wt,useClass:OV},{provide:Oo,useValue:t}]}var xn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[mi,Jv,pe,Io,lc,Jv]})}return t})();function PV(t,n){if(t&1&&(p(0,"div",11),x(1),g()),t&2){let e=$();ie("ngClass",e.result<=10?"error":"morethanten"),D(),Pe("The number is ",e.result<=10?"less":"more"," than 10")}}var gm=class t{num1=0;num2=0;result=0;btnCalculate(n){n=="+"?this.result=this.num1+this.num2:this.result=this.num1-this.num2}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-calculator"]],decls:19,vars:4,consts:[[1,"form-container"],[1,"calculator-form"],["for","num1"],["type","number","placeholder","Enter first number","value","",3,"ngModelChange","ngModel"],["for","num2"],["type","number","placeholder","Enter second number","value","",3,"ngModelChange","ngModel"],[1,"button-group"],[1,"save-btn",3,"click"],[1,"fa-solid","fa-add"],[1,"fa-solid","fa-minus"],[1,"result-text"],[3,"ngClass"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"label",2),x(3,"First Number:"),g(),p(4,"input",3),jn("ngModelChange",function(o){return ni(i.num1,o)||(i.num1=o),o}),g(),p(5,"label",4),x(6,"Second Number:"),g(),p(7,"input",5),jn("ngModelChange",function(o){return ni(i.num2,o)||(i.num2=o),o}),g(),p(8,"div",6)(9,"button",7),V("click",function(){return i.btnCalculate("+")}),X(10,"i",8),x(11," Add "),g(),p(12,"button",7),V("click",function(){return i.btnCalculate("-")}),X(13,"i",9),x(14," Subtract "),g()(),p(15,"div",10),x(16),X(17,"br"),re(18,PV,2,2,"div",11),g()()()),e&2&&(D(4),Vn("ngModel",i.num1),D(3),Vn("ngModel",i.num2),D(9),Pe(" Result: ",i.result," "),D(2),oe(i.result!=0?18:-1))},dependencies:[Ht,zg,Ct,ai,z_,Cr,Xl,ht,pn,gn,_n,vn,yn,$t,bn,mn,wn,Cn,xn],styles:[".contact-table[_ngcontent-%COMP%]{margin:40px auto;width:80%;background-color:#fff;overflow:hidden}table[_ngcontent-%COMP%]{width:100%;font-family:arial,sans-serif;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:8px;text-align:left;border:2px solid #dddddd}th[_ngcontent-%COMP%]{background-color:#ddd}th[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child{width:50px;text-align:center}th[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]:last-child{width:120px;text-align:center}.actions[_ngcontent-%COMP%]{gap:10px;display:flex;justify-content:center}.btn[_ngcontent-%COMP%]{font-size:18px;border:none;background:none;transition:transform .2s ease,opacity .2s ease;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{transform:scale(1.2);opacity:.8}.btn-view[_ngcontent-%COMP%]{color:#2ecc71}.btn-edit[_ngcontent-%COMP%]{color:#3498db}.btn-delete[_ngcontent-%COMP%]{color:#e74c3c}.add-button-container[_ngcontent-%COMP%]{width:80%;margin:40px auto 0;text-align:right}.add-button[_ngcontent-%COMP%]{padding:10px 25px;gap:8px;font-size:18px;color:#fff;text-decoration:none;border-radius:8px;background-color:#1abc9c;display:inline-flex;align-items:center;transition:background .3s}.add-button[_ngcontent-%COMP%]:hover{background-color:#159d82}.add-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.details-container[_ngcontent-%COMP%]{margin:60px auto;padding:30px;width:80%;max-width:500px;border-radius:10px;background:#fff;box-shadow:0 2px 6px #0000001a}.detail-item[_ngcontent-%COMP%]{margin-bottom:20px}.detail-label[_ngcontent-%COMP%]{font-weight:700;color:#555}.detail-value[_ngcontent-%COMP%]{margin-top:5px;font-size:18px}.back-button[_ngcontent-%COMP%]{margin:0 auto;padding:10px 25px;gap:8px;font-size:18px;color:#fff;text-decoration:none;border-radius:8px;background-color:#1abc9c;display:inline-flex;align-items:center;transition:background .3s}.back-button[_ngcontent-%COMP%]:hover{background-color:#159d82}.back-button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px}.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.form-container[_ngcontent-%COMP%]{margin:60px auto;padding:30px;width:80%;max-width:500px;border-radius:10px;background:#fff;box-shadow:0 2px 6px #0000001a}label[_ngcontent-%COMP%]{margin-bottom:8px;font-weight:700;display:block}input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]{margin-bottom:20px;padding:10px;width:95%;font-size:16px;border:1px solid #ccc;border-radius:6px}.button-group[_ngcontent-%COMP%]{margin-top:10px;gap:10px;display:flex;align-items:center;justify-content:space-between}.save-btn[_ngcontent-%COMP%]{flex:1;padding:12px 20px;gap:8px;font-size:18px;color:#fff;border:none;border-radius:6px;background-color:#1abc9c;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .3s}.save-btn[_ngcontent-%COMP%]:hover{background-color:#159d82}.back-button[_ngcontent-%COMP%]{flex:1;padding:12px 20px;gap:8px;font-size:18px;color:#1abc9c;border:2px solid #1abc9c;border-radius:6px;background-color:transparent;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:all .3s ease}.back-button[_ngcontent-%COMP%]:hover{background-color:#1abc9c;color:#fff}.error[_ngcontent-%COMP%]{margin-bottom:15px;padding:10px;color:#721c24;border-radius:10px;background:#f8d7da}.morethanten[_ngcontent-%COMP%]{margin-bottom:15px;padding:10px;color:#15ff00;border-radius:10px;background:#a5ffb0}.result-text[_ngcontent-%COMP%]{padding-top:1em;font-size:30px;text-align:center}"]})};var LV=["*",[["mat-toolbar-row"]]],VV=["*","mat-toolbar-row"],jV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),dS=(()=>{class t{_elementRef=d(T);_platform=d(ce);_document=d(H);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Dt(o,jV,5),i&2){let a;W(a=G())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(jt(r.color?"mat-"+r.color:""),U("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:VV,decls:2,vars:0,template:function(i,r){i&1&&(Ae(LV),Q(0),Q(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var uS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var xt=class t{eventSubject=new C;constructor(){}saveStorage(n,e){localStorage.setItem(n,JSON.stringify(e))}loadStorage(n){let e=localStorage.getItem(n);return e?JSON.parse(e):null}removeStorage(n){localStorage.removeItem(n)}publishEvent(n){this.eventSubject.next(n)}observeEvent(){return this.eventSubject}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function HV(t,n){if(t&1){let e=bt();p(0,"a",3),V("click",function(){let r=Ee(e).$implicit,o=$();return Me(o.navigatePage(r))}),x(1),g()}if(t&2){let e=n.$implicit;D(),Fe(e.title)}}var ds=class t{constructor(n,e,i,r){this.dialog=n;this.cdr=e;this.router=i;this.data=r}menu=[{title:"Home",route:"/home"},{title:"Calculatore",route:"calculator"},{title:"To-do",route:"/todo"},{title:"Reports",route:"/reports"}];navigatePage(n){this.router.navigateByUrl(n.route),this.data.publishEvent(n.title)}static \u0275fac=function(e){return new(e||t)(R(Xa),R(_e),R(Ut),R(xt))};static \u0275cmp=M({type:t,selectors:[["app-toolbar"]],decls:6,vars:0,consts:[[1,"title"],[1,"spacer"],["mat-button","",1,"icon"],["mat-button","",1,"icon",3,"click"]],template:function(e,i){e&1&&(p(0,"mat-toolbar")(1,"div",0),x(2,"Menu"),g(),X(3,"span",1),Ai(4,HV,2,1,"a",2,hl),g()),e&2&&(D(4),Ri(i.menu))},dependencies:[uS,dS,ht,Ot,Ht,Ct,pn,gn,_n,vn,yn,$t,bn,mn,wn,Cn,xn],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var Ar=class t{constructor(n,e,i){this.formBuilder=n;this.dialogRef=e;this.data=i;this.todoForm=this.formBuilder.group({title:i?.title||""})}todoForm=wr;onSubmit(){let e=this.todoForm.value.title;e!=""&&this.dialogRef.close(e)}onCancel(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||t)(R(Rf),R(Ka),R(xv))};static \u0275cmp=M({type:t,selectors:[["app-add"]],decls:13,vars:1,consts:[["mat-dialog-title",""],[1,"todo-form",3,"formGroup"],["matInput","","formControlName","title","type","text","placeholder","Enter title"],["mat-button","",3,"click"]],template:function(e,i){e&1&&(p(0,"h2",0),x(1,"Add New To-do"),g(),p(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field")(5,"mat-label"),x(6,"Title"),g(),X(7,"input",2),g()()(),p(8,"mat-dialog-actions")(9,"button",3),V("click",function(){return i.onCancel()}),x(10,"Cancel"),g(),p(11,"button",3),V("click",function(){return i.onSubmit()}),x(12,"Submite"),g()()),e&2&&(D(3),ie("formGroup",i.todoForm))},dependencies:[Ht,Ct,Af,ai,Cr,If,ht,Ot,pn,gn,Qf,So,ui,_n,vn,MM,IM,SM,yn,$t,bn,mn,Do,Jl,wn,Cn,xn],encapsulation:2})};var _m=class t{transform(n,e){if(e=="upperCase")return String(n).toUpperCase();if(e=="kgToGram")return n*1e3}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=Du({name:"convert",type:t,pure:!0})};function UV(t,n){if(t&1){let e=bt();p(0,"mat-list-item")(1,"div",7)(2,"button",8),V("click",function(){let r=Ee(e).$index,o=$();return Me(o.onSelected(r))}),p(3,"mat-icon",9),x(4),g()(),p(5,"span",10),x(6),kg(7,"convert"),g(),p(8,"div",11)(9,"button",12),V("click",function(){let r=Ee(e).$index,o=$();return Me(o.onDelete(r))}),p(10,"mat-icon"),x(11,"delete_forever"),g()(),p(12,"button",12),V("click",function(){let r=Ee(e).$index,o=$();return Me(o.onEdit(r))}),p(13,"mat-icon"),x(14,"edit"),g()()()()()}if(t&2){let e=n.$implicit;D(4),Pe(" ",e.selected?"check_box":"check_box_outline_blank"," "),D(2),Pe(" ",Tg(7,2,e.title,"upperCase")," ")}}var vm=class t{constructor(n,e,i){this.dialog=n;this.cdr=e;this.dataService=i}todoList=[{title:"Wash clothes",selected:!1},{title:"Do homework",selected:!0},{title:"Buy groceries",selected:!1}];ngOnInit(){let n=this.loadStorage("TODO")||[];this.todoList=n}onSelected(n){this.todoList[n].selected=!this.todoList[n].selected}onAdd(){this.dialog.open(Ar).afterClosed().subscribe(e=>{e&&(this.todoList.push({title:e,selected:!1}),this.cdr.detectChanges(),this.dataService.saveStorage("TODO",this.todoList))})}onDelete(n){confirm("Are you sure you want to delete this item?")&&this.todoList.splice(n,1),this.dataService.saveStorage("TODO",this.todoList)}onClear(){confirm("delete?")&&(this.todoList=[]),this.dataService.saveStorage("TODO",this.todoList)}onEdit(n){let e=this.todoList[n];this.dialog.open(Ar,{data:{title:e.title}}).afterClosed().subscribe(r=>{r&&(this.todoList[n].title=r,this.cdr.detectChanges())}),this.dataService.saveStorage("TODO",this.todoList)}saveStorage(n,e){localStorage.setItem(n,JSON.stringify(e))}loadStorage(n){let e=localStorage.getItem(n);return e?JSON.parse(e):null}removeStorage(n){localStorage.removeItem(n)}static \u0275fac=function(e){return new(e||t)(R(Xa),R(_e),R(xt))};static \u0275cmp=M({type:t,selectors:[["app-todo"]],decls:14,vars:0,consts:[[1,"todo-body"],[1,"todo-container"],[1,"header-container"],[1,"header-text"],[1,"btn-container"],["mat-button","",2,"margin-right","1em",3,"click"],[1,"list-container"],[1,"todo-item"],["mat-icon-button","",3,"click"],["color","primary"],[1,"todo-name"],[1,"btn"],["mat-button","",1,"delete",3,"click"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-label",3),x(4,"To-do List"),g(),p(5,"div",4)(6,"button",5),V("click",function(){return i.onAdd()}),x(7,"Add New"),g(),p(8,"button",5),V("click",function(){return i.onClear()}),x(9,"Clear To-do"),g()()(),p(10,"div",6)(11,"mat-list"),Ai(12,UV,15,5,"mat-list-item",null,hl),g()()()()),e&2&&(D(12),Ri(i.todoList))},dependencies:[Ht,Ct,ht,Ot,di,pn,za,gn,ui,_n,nM,iM,vn,yn,$t,bn,mn,wn,Cn,xn,_m],styles:[".todo-body[_ngcontent-%COMP%]{margin:30px;display:flex;justify-content:center}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;height:40px;font-size:15px;color:#fff;background-color:#006dff;border-radius:10px}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;font-size:20px}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{margin-left:auto;width:60px;height:60px;border-radius:10px;display:flex}.todo-body[_ngcontent-%COMP%]   .todo-container[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:auto;width:30px;height:30px;font-size:30px;color:red}"]})};var us=class t{constructor(n,e){this.http=n;this.dataService=e}baseURL="http://localhost:3000/api";HttpGet(n){let e={headers:new un},i=this.baseURL+n;return new Promise((r,o)=>{this.http.get(i,e).subscribe({next:a=>{r(a)},error:a=>{o(a)}})})}httpPost(n,e,i){let r=this.baseURL+n,o={headers:new un},a=this.dataService.loadStorage("TOKEN"),s=this.dataService.loadStorage("USER"),l=e instanceof FormData;return s&&(l?e.append("user_id",s.id):e=q(_({},e),{user_id:s.id})),a&&(o={headers:new un({Authorization:`Bearer ${a}`})}),new Promise((c,u)=>{i=="put"?this.http.put(r,o).subscribe({next:f=>{c(f)},error:f=>{u(f)}}):this.http.get(r,o).subscribe({next:f=>{c(f)},error:f=>{u(f)}})})}static \u0275fac=function(e){return new(e||t)(P(ya),P(xt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function zV(t,n){t&1&&(p(0,"th",13),x(1,"No"),g())}function $V(t,n){if(t&1&&(p(0,"td",14),x(1),g()),t&2){let e=n.index;D(),Fe(e+1)}}function WV(t,n){t&1&&(p(0,"th",13),x(1,"Title"),g())}function GV(t,n){if(t&1&&(p(0,"td",14),x(1),g()),t&2){let e=n.$implicit;D(),Fe(e.title)}}function qV(t,n){t&1&&(p(0,"th",13),x(1,"Date"),g())}function YV(t,n){if(t&1&&(p(0,"td",14),x(1),g()),t&2){let e=n.$implicit;D(),Fe(e.date)}}function ZV(t,n){t&1&&(p(0,"th",13),x(1,"Actions"),g())}function QV(t,n){if(t&1&&(p(0,"td",15)(1,"button",16)(2,"mat-icon"),x(3,"edit"),g()()()),t&2){let e=n.$implicit;D(),ie("routerLink",Ig("/update/",e.id))}}function KV(t,n){t&1&&X(0,"tr",17)}function XV(t,n){t&1&&X(0,"tr",18)}var ym=class t{constructor(n,e,i,r){this.router=n;this.apiServices=e;this.cdr=i;this.dataService=r}reportList=[{title:"Sample report title 1!",category:"Sample category",date:"01/01/1970"}];dataSource=new yc(this.reportList);displayedColumns=["no","title","date","actions"];onLogout(){this.dataService.removeStorage("TOKEN"),this.dataService.removeStorage("USER"),this.router.navigateByUrl("/login")}async ngOnInit(){try{let n=await this.apiServices.HttpGet("/reports");console.log(n),this.reportList=n.data,this.dataSource=new yc(this.reportList),this.dataSource.data=this.dataSource.data.map(e=>_({},e)),this.cdr.detectChanges()}catch{}}static \u0275fac=function(e){return new(e||t)(R(Ut),R(us),R(_e),R(xt))};static \u0275cmp=M({type:t,selectors:[["app-reports"]],decls:20,vars:3,consts:[[1,"button-container"],["mat-raised-button","","routerLink","/add"],["mat-raised-button","",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","no"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","date"],["matColumnDef","actions"],["mat-cell","","class","action-buttons",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"action-buttons"],["mat-icon-button","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(e,i){e&1&&(p(0,"div",0)(1,"button",1),x(2,"Add Report"),g(),p(3,"button",2),V("click",function(){return i.onLogout()}),x(4,"Logout"),g()(),p(5,"table",3),ei(6,4),Be(7,zV,2,0,"th",5)(8,$V,2,1,"td",6),ti(),ei(9,7),Be(10,WV,2,0,"th",5)(11,GV,2,1,"td",6),ti(),ei(12,8),Be(13,qV,2,0,"th",5)(14,YV,2,1,"td",6),ti(),ei(15,9),Be(16,ZV,2,0,"th",5)(17,QV,4,2,"td",10),ti(),Be(18,KV,1,0,"tr",11)(19,XV,1,0,"tr",12),g()),e&2&&(D(5),ie("dataSource",i.dataSource),D(13),ie("matHeaderRowDef",i.displayedColumns),D(),ie("matRowDefColumns",i.displayedColumns))},dependencies:[Ht,Ct,ht,Ot,di,pn,za,gn,_n,vn,yn,PM,VM,UM,jM,LM,zM,BM,HM,$M,WM,$t,bn,mn,pf,wn,Cn,xn],styles:[".button-container[_ngcontent-%COMP%]{margin:1em 2em 0 0;display:flex;flex-direction:row;justify-content:flex-end;width:100%}"]})};function JV(t,n){if(t&1){let e=bt();p(0,"div",1)(1,"button",2),V("click",function(){Ee(e);let r=$();return Me(r.action())}),x(2),g()()}if(t&2){let e=$();D(2),Pe(" ",e.data.action," ")}}var ej=["label"];function tj(t,n){}var nj=Math.pow(2,31)-1,wc=class{_overlayRef;instance;containerInstance;_afterDismissed=new C;_afterOpened=new C;_onAction=new C;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,nj))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},mS=new v("MatSnackBarData"),fs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ij=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),rj=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),oj=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),aj=(()=>{class t{snackBarRef=d(wc);data=d(mS);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(p(0,"div",0),x(1),g(),re(2,JV,3,1,"div",1)),i&2&&(D(),Pe(" ",r.data.message,`
`),D(),oe(r.hasAction?2:-1))},dependencies:[Ot,ij,rj,oj],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),ny="_mat-snack-bar-enter",iy="_mat-snack-bar-exit",sj=(()=>{class t extends Sr{_ngZone=d(N);_elementRef=d(T);_changeDetectorRef=d(_e);_platform=d(ce);_animationsDisabled=Ze();snackBarConfig=d(fs);_document=d(H);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new C;_onExit=new C;_onEnter=new C;_animationState="void";_live;_label;_role;_liveElementId=d(Ye).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===iy?this._completeExit():e===ny&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?je(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ny)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ny)},200)))}exit(){return this._destroyed?B(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?je(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(iy)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(iy),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&He(zn,7)(ej,7),i&2){let o;W(o=G())&&(r._portalOutlet=o.first),W(o=G())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&V("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&U("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[K],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),Be(4,tj,0,0,"ng-template",4),g(),X(5,"div"),g()()),i&2&&(D(5),fe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[zn],styles:[`@keyframes _mat-snack-bar-enter {
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
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
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
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
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
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return t})(),lj=new v("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new fs}),hS=(()=>{class t{_live=d(J_);_injector=d(z);_breakpointObserver=d(rc);_parentSnackBar=d(t,{optional:!0,skipSelf:!0});_defaultConfig=d(lj);_animationsDisabled=Ze();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=aj;snackBarContainerComponent=sj;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=z.create({parent:r||this._injector,providers:[{provide:fs,useValue:i}]}),a=new rn(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=_(_(_({},new fs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new wc(a,o);if(e instanceof We){let l=new zi(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new rn(e,void 0,l),u=a.attachComponentPortal(c);s.instance=u.instance}return this._breakpointObserver.observe(vE.HandsetPortrait).pipe(De(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new $i;i.direction=e.direction;let r=Wi(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Gi(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return z.create({parent:r||this._injector,providers:[{provide:wc,useValue:i},{provide:mS,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ms=class t{constructor(n){this.snackBar=n}openSnackBar(n,e){this.snackBar.open(n,e,{duration:3e3})}static \u0275fac=function(e){return new(e||t)(P(hS))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};function uj(t,n){t&1&&(p(0,"mat-error"),x(1,"Please enter valid email"),g())}function fj(t,n){t&1&&(p(0,"mat-error"),x(1,"Please enter your password"),g())}function mj(t,n){if(t&1){let e=bt();p(0,"mat-card-content")(1,"form",3),V("ngSubmit",function(){Ee(e);let r=$();return Me(r.onSubmit())}),p(2,"mat-form-field",4)(3,"mat-label"),x(4,"Email"),g(),X(5,"input",5),re(6,uj,2,0,"mat-error"),g(),p(7,"mat-form-field",4)(8,"mat-label"),x(9,"Password"),g(),X(10,"input",6),p(11,"button",7),V("click",function(){Ee(e);let r=$();return Me(r.onShowPassword())}),p(12,"mat-icon"),x(13),g()(),re(14,fj,2,0,"mat-error"),g(),p(15,"mat-card-actions",8)(16,"button",9),x(17,"Submit"),g()()()()}if(t&2){let e=$();D(),ie("formGroup",e.loginForm),D(5),oe((e.loginForm.controls.email.hasError("required")||e.loginForm.controls.email.hasError("email"))&&e.loginForm.controls.email.touched?6:-1),D(4),ie("type",e.showPassword?"text":"password"),D(3),Fe(e.showPassword?"visibility_off":"visibility"),D(),oe(e.loginForm.controls.password.hasError("required")&&e.loginForm.controls.password.touched?14:-1),D(2),ie("disabled",!e.loginForm.valid)}}function hj(t,n){t&1&&(p(0,"mat-error"),x(1,"Please enter your name"),g())}function pj(t,n){t&1&&(p(0,"mat-error"),x(1,"Please enter valid email"),g())}function gj(t,n){t&1&&(p(0,"mat-error"),x(1,"Please enter your password"),g())}function _j(t,n){t&1&&(p(0,"mat-error"),x(1,"Please enter your password"),g())}function vj(t,n){if(t&1){let e=bt();p(0,"mat-card-content")(1,"form",3),V("ngSubmit",function(){Ee(e);let r=$();return Me(r.onSubmit())}),p(2,"mat-form-field",4)(3,"mat-label"),x(4,"Full Name"),g(),X(5,"input",10),re(6,hj,2,0,"mat-error"),g(),p(7,"mat-form-field",4)(8,"mat-label"),x(9,"Phone number"),g(),X(10,"input",11),g(),p(11,"mat-form-field",4)(12,"mat-label"),x(13,"Email"),g(),X(14,"input",5),re(15,pj,2,0,"mat-error"),g(),p(16,"mat-form-field",4)(17,"mat-label"),x(18,"Password"),g(),X(19,"input",6),p(20,"button",7),V("click",function(){Ee(e);let r=$();return Me(r.onShowPassword())}),p(21,"mat-icon"),x(22),g()(),re(23,gj,2,0,"mat-error"),g(),p(24,"mat-form-field",4)(25,"mat-label"),x(26,"Confirm Password"),g(),X(27,"input",12),p(28,"button",7),V("click",function(){Ee(e);let r=$();return Me(r.onshowPassword2())}),p(29,"mat-icon"),x(30),g()(),re(31,_j,2,0,"mat-error"),g(),p(32,"mat-card-actions",8)(33,"button",9),x(34,"Submit"),g()()()()}if(t&2){let e=$();D(),ie("formGroup",e.signupForm),D(5),oe(e.signupForm.controls.name.hasError("required")&&e.signupForm.controls.name.touched?6:-1),D(9),oe((e.signupForm.controls.email.hasError("required")||e.signupForm.controls.email.hasError("email"))&&e.signupForm.controls.email.touched?15:-1),D(4),ie("type",e.showPassword?"text":"password"),D(3),Fe(e.showPassword?"visibility_off":"visibility"),D(),oe(e.signupForm.controls.password.hasError("required")&&e.signupForm.controls.password.touched?23:-1),D(4),ie("type",e.showPassword2?"text":"password"),D(3),Fe(e.showPassword2?"visibility_off":"visibility"),D(),oe(e.signupForm.controls.confirm_password.hasError("required")&&e.signupForm.controls.confirm_password.touched?31:-1),D(2),ie("disabled",!e.signupForm.valid)}}var bm=class t{constructor(n,e,i,r,o){this.formBuilder=n;this.apiService=e;this.router=i;this.uiService=r;this.dataService=o;this.loginForm=this.formBuilder.group({email:["",[tn.required,tn.email]],password:["",[tn.required]]}),this.signupForm=this.formBuilder.group({name:["",tn.required],phone:[""],email:["",[tn.required,tn.email]],password:["",[tn.required]],confirm_password:["",[tn.required]]})}loginForm;signupForm;showPassword=!1;showPassword2=!1;showRegisterForm=!1;onShowPassword(){this.showPassword=!this.showPassword}onshowPassword2(){this.showPassword2=!this.showPassword2}onShowRegisterForm(){this.showRegisterForm=!this.showRegisterForm,this.loginForm.setValue({email:"",password:""}),this.signupForm.setValue({name:"",phone:"",email:"",password:"",confirm_password:""})}async onSubmit(){let n=this.loginForm.value;try{if(this.showRegisterForm){n=this.signupForm.value;let e=await this.apiService.httpPost("/auth/register",n);if(n.password!=n.confirm_password){this.uiService.openSnackBar("Password and confirmed password do not match","OK");return}e.success&&(this.uiService.openSnackBar("Registration Successful","OK"),this.onShowRegisterForm())}else{let e=await this.apiService.httpPost("/auth/login",n);if(e.success){let i=e.token;this.dataService.saveStorage("TOKEN",i),this.dataService.saveStorage("USER",e.user),this.router.navigateByUrl("/reports")}else this.uiService.openSnackBar("Invalid email or password","OK")}}catch(e){this.uiService.openSnackBar("An error occured"+e.message,"OK")}}static \u0275fac=function(e){return new(e||t)(R(Rf),R(us),R(Ut),R(ms),R(xt))};static \u0275cmp=M({type:t,selectors:[["app-login"]],decls:9,vars:3,consts:[[1,"card-container"],["appearance","outlined",1,"card"],["mat-button","",1,"register-button",3,"click"],[3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","email","placeholder","Enter your email"],["matInput","","formControlName","password","placeholder","Enter your password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["align","end"],["mat-raised-button","","type","submit",3,"disabled"],["matInput","","formControlName","name","placeholder","Enter your full name"],["matInput","","formControlName","phone","placeholder","Enter your phone number"],["matInput","","formControlName","confirm_password","placeholder","Enter your password",3,"type"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),x(4),g()(),re(5,mj,18,6,"mat-card-content")(6,vj,35,10,"mat-card-content"),p(7,"button",2),V("click",function(){return i.onShowRegisterForm()}),x(8),g()()()),e&2&&(D(4),Fe(i.showRegisterForm?"Register":"Sign In"),D(),oe(i.showRegisterForm?6:5),D(3),Pe(" ",i.showRegisterForm?"Back to Sign In":"Create account"))},dependencies:[Ht,Ct,Af,ai,Cr,If,ht,Ot,di,pn,za,gn,Qf,So,ui,qf,Yf,_n,vn,yn,$t,bn,GM,ZM,YM,QM,qM,mn,Do,Jl,wn,Cn,xn],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:1.5em}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:.3em}button[_ngcontent-%COMP%]{margin:.5em}mat-card-header[_ngcontent-%COMP%]{margin-bottom:1em}.register-button[_ngcontent-%COMP%]{font-size:1.5em}"]})};var Dm=(t,n)=>{let e=d(xt),i=d(Ut),r=d(ms);return e.loadStorage("TOKEN")?!0:(i.navigateByUrl("/login"),r.openSnackBar("Please login to access this page"),!1)};var pS=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Of},{path:"toolbar",component:ds},{path:"calculator",component:gm},{path:"todo",component:vm},{path:"reports",component:ym,canActivate:[Dm]},{path:"add",component:Ar,canActivate:[Dm]},{path:"update/:id",component:Ar,canActivate:[Dm]},{path:"login",component:bm}];var gS={providers:[qh(),T_(pS),r_()]};var wm=class t{constructor(n){this.data=n;this.data.observeEvent().subscribe(e=>{this.pageTitle=e})}title=j("MyAngular2026");pageTitle="Home";ngOnInit(){}saveData(){let n=25}static \u0275fac=function(e){return new(e||t)(R(xt))};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:12,vars:1,consts:[[1,"main"],[1,"header"]],template:function(e,i){e&1&&(p(0,"main",0)(1,"div",1)(2,"h1"),x(3,"MyMahir Angular Proyekt"),g(),p(4,"p"),x(5),g(),p(6,"h2"),x(7,"Tiki Taka"),g(),p(8,"h5"),x(9,"smol"),g()(),X(10,"app-toolbar")(11,"router-outlet"),g()),e&2&&(D(5),Fe(i.pageTitle))},dependencies:[Hl,Ct,ht,ds],styles:["body[_ngcontent-%COMP%]{background-color:#f1f1f1}.header[_ngcontent-%COMP%]{padding:80px;text-align:center;background:#1abc9c;color:#fff}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}.contact-table[_ngcontent-%COMP%]{margin:40px auto;width:80%;background-color:#fff;overflow:hidden}table[_ngcontent-%COMP%]{width:100%;font-family:arial,sans-serif;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:8px;text-align:left;border:2px solid #dddddd}th[_ngcontent-%COMP%]{background-color:#ddd}th[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child{width:50px;text-align:center}th[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]:last-child{width:120px;text-align:center}.actions[_ngcontent-%COMP%]{gap:10px;display:flex;justify-content:center}.btn[_ngcontent-%COMP%]{font-size:18px;border:none;background:none;transition:transform .2s ease,opacity .2s ease;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{transform:scale(1.2);opacity:.8}.btn-view[_ngcontent-%COMP%]{color:#2ecc71}.btn-edit[_ngcontent-%COMP%]{color:#3498db}.btn-delete[_ngcontent-%COMP%]{color:#e74c3c}.add-button-container[_ngcontent-%COMP%]{width:80%;margin:40px auto 0;text-align:right}.add-button[_ngcontent-%COMP%]{padding:10px 25px;gap:8px;font-size:18px;color:#fff;text-decoration:none;border-radius:8px;background-color:#1abc9c;display:inline-flex;align-items:center;transition:background .3s}.add-button[_ngcontent-%COMP%]:hover{background-color:#159d82}.add-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.details-container[_ngcontent-%COMP%]{margin:60px auto;padding:30px;width:80%;max-width:500px;border-radius:10px;background:#fff;box-shadow:0 2px 6px #0000001a}.detail-item[_ngcontent-%COMP%]{margin-bottom:20px}.detail-label[_ngcontent-%COMP%]{font-weight:700;color:#555}.detail-value[_ngcontent-%COMP%]{margin-top:5px;font-size:18px}.back-button[_ngcontent-%COMP%]{margin:0 auto;padding:10px 25px;gap:8px;font-size:18px;color:#fff;text-decoration:none;border-radius:8px;background-color:#1abc9c;display:inline-flex;align-items:center;transition:background .3s}.back-button[_ngcontent-%COMP%]:hover{background-color:#159d82}.back-button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px}.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.form-container[_ngcontent-%COMP%]{margin:60px auto;padding:30px;width:80%;max-width:500px;border-radius:10px;background:#fff;box-shadow:0 2px 6px #0000001a}label[_ngcontent-%COMP%]{margin-bottom:8px;font-weight:700;display:block}input[type=text][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]{margin-bottom:20px;padding:10px;width:95%;font-size:16px;border:1px solid #ccc;border-radius:6px}.button-group[_ngcontent-%COMP%]{margin-top:10px;gap:10px;display:flex;align-items:center;justify-content:space-between}.save-btn[_ngcontent-%COMP%]{flex:1;padding:12px 20px;gap:8px;font-size:18px;color:#fff;border:none;border-radius:6px;background-color:#1abc9c;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .3s}.save-btn[_ngcontent-%COMP%]:hover{background-color:#159d82}.back-button[_ngcontent-%COMP%]{flex:1;padding:12px 20px;gap:8px;font-size:18px;color:#1abc9c;border:2px solid #1abc9c;border-radius:6px;background-color:transparent;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:all .3s ease}.back-button[_ngcontent-%COMP%]:hover{background-color:#1abc9c;color:#fff}.error[_ngcontent-%COMP%]{margin-bottom:15px;padding:10px;color:#721c24;border-radius:10px;background:#f8d7da}.morethanten[_ngcontent-%COMP%]{margin-bottom:15px;padding:10px;color:#15ff00;border-radius:10px;background:#a5ffb0}.result-text[_ngcontent-%COMP%]{padding-top:1em;font-size:30px;text-align:center}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};Jg(wm,gS).catch(t=>console.error(t));
