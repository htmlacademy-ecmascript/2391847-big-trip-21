(()=>{var e={318:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([e.id,".event__photos-container {\n  overflow-x: auto;\n}\n\n.event__type-label {\n  text-transform: capitalize;\n}\n","",{version:3,sources:["webpack://./src/views/edit-view.css"],names:[],mappings:"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".event__photos-container {\n  overflow-x: auto;\n}\n\n.event__type-label {\n  text-transform: capitalize;\n}\n"],sourceRoot:""}]);const o=a},766:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([e.id,".trip-list{\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list{\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);s&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",c="month",u="quarter",l="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,c),r=n-i<0,a=t.clone().add(s+(r?-1:1),c);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:l,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=v;var $=function(e){return e instanceof M},g=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(i=r),n&&(b[r]=n,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,i=o}return!s&&i&&(y=i),i||!s&&y},w=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},S=_;S.l=g,S.i=$,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function v(e){this.$L=g(e.locale,null,!0),this.parse(e)}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,u=!!S.u(t)||t,p=S.p(e),f=function(e,t){var s=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?s:s.endOf(a)},h=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case l:return u?f(1,0):f(31,11);case c:return u?f(1,m):f(0,m+1);case o:var b=this.$locale().weekStart||0,$=(v<b?v+7:v)-b;return f(u?_-$:_+(6-$),m);case a:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,u=S.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[c]=p+"Month",o[l]=p+"FullYear",o[r]=p+"Hours",o[i]=p+"Minutes",o[s]=p+"Seconds",o[n]=p+"Milliseconds",o)[u],h=u===a?this.$D+(t-this.$W):t;if(u===c||u===l){var v=this.clone().set(d,1);v.$d[f](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(n,u){var d,p=this;n=Number(n);var f=S.p(u),h=function(e){var t=w(p);return S.w(t.date(t.date()+Math.round(e*n)),p)};if(f===c)return this.set(c,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===a)return h(1);if(f===o)return h(7);var v=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[f]||1,m=this.$d.getTime()+n*v;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=n.meridiem,d=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},f=function(e){return S.s(r%12||12,e,"0")},v=l||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(h,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return S.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return v(r,a,!0);case"A":return v(r,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,h=this,v=S.p(d),m=w(n),_=(m.utcOffset()-this.utcOffset())*e,y=this-m,b=function(){return S.m(h,m)};switch(v){case l:f=b()/12;break;case c:f=b();break;case u:f=b()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case r:f=y/t;break;case i:f=y/e;break;case s:f=y/1e3;break;default:f=y}return p?f:S.a(f)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=g(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),A=M.prototype;return w.prototype=A,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",c],["$y",l],["$D",d]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=g,w.isDayjs=$,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},a=[],o=0;o<e.length;o++){var c=e[o],u=s.base?c[0]+s.base:c[0],l=r[u]||0,d="".concat(u," ").concat(l);r[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=i(f,s);s.byIndex=o,t.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var c=s(e,i),u=0;u<r.length;u++){var l=n(r[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(e,t=null){const n=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return this.dispatchEvent(n)}}var t=n(484);function s(e){return""!==e?t(e).format("DD/MM/YY HH:mm"):""}function i(e){return t(e).format("HH:mm")}function r(e,...t){return e.reduce(((e,n,s)=>{const i=t[s-1];return void 0===i?e+n:Array.isArray(i)?e+i.join("")+n:e+i+n}))}customElements.define("trip-info-view",class extends e{constructor(){super(),this.classList.add("trip-info")}createHtml(){return r`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}}),customElements.define("filter-view",class extends e{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return r`
      ${this.state.items.map((e=>r`
        <div class="trip-filters__filter">
          <input
            id="filter-${e.value}"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="${e.value}"
            ${e.isSelected?"checked":""}
            ${e.isDisabled?"disabled":""}>
          <label
            class="trip-filters__filter-label"
            for="filter-${e.value}">
            ${e.value}
          </label>
        </div>
      `))}
    `}}),customElements.define("add-button-view",class extends e{createHtml(){return r`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}}),customElements.define("sort-view",class extends e{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return r`
      ${this.state.items.map((e=>r`
        <div class="trip-sort__item  trip-sort__item--${e.value}">
          <input
            id="sort-${e.value}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="${e.value}"
            ${e.isSelected?"checked":""}
            ${e.isDisabled?"disabled":""}>
          <label
            class="trip-sort__btn"
            for="sort-${e.value}">
            ${e.value}
          </label>
        </div>
      `))}
    `}});var a=n(379),o=n.n(a),c=n(795),u=n.n(c),l=n(569),d=n.n(l),p=n(565),f=n.n(p),h=n(216),v=n.n(h),m=n(589),_=n.n(m),y=n(766),b={};b.styleTagTransform=_(),b.setAttributes=f(),b.insert=d().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=v(),o()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;class $ extends e{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return r`
      <div class="event">
        ${this.createDateFromHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createTimeHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}

      </div>
    `}createDateFromHtml(){const{dateFrom:e}=this.state;return r`
      <time class="event__date" datetime="${e}">${function(e){return t(e).format("MMM D")}(e)}</time>
    `}createTypeIconHtml(){const{types:e}=this.state;return r`
      <div class="event__type">
        <img class="event__type-icon"
          width="42"
          height="42"
          src="img/icons/${e.find((e=>e.isSelected)).value}.png"
          alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state,n=e.find((e=>e.isSelected)),s=t.find((e=>e.isSelected));return r`
      <h3 class="event__title">${n.value} ${s.name}</h3>
    `}createTimeHtml(){const{dateFrom:e,dateTo:n}=this.state;return r`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${e}">${i(e)}</time>
          —
          <time class="event__end-time" datetime="${n}">${i(n)}</time>
        </p>
        <p class="event__duration">${function(e,n){const s=t(n).diff(t(e),"days"),i=t(n).diff(t(e),"hours")%24,r=t(n).diff(t(e),"minutes")%60;let a="";return s>0&&(a+=`${s.toString().padStart(2,"0")}D `),i>0&&(a+=`${i.toString().padStart(2,"0")}H `),a+=`${r.toString().padStart(2,"0")}M`,a}(e,n)}</p>
      </div>
    `}createPriceHtml(){const{basePrice:e}=this.state;return r`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${e}</span>
      </p>
    `}createOfferListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t.length?r`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${t.map((e=>r`
          <li class="event__offer">
            <span class="event__offer-title">${e.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${e.price}</span>
          </li>
        `))}
      </ul>
    `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return r`
      <button class="event__favorite-btn${e?" event__favorite-btn--active":""}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return r`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("open")}}customElements.define("point-view",$);var g=n(318),w={};w.styleTagTransform=_(),w.setAttributes=f(),w.insert=d().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=v(),o()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;class S extends e{constructor(){super(),this.addEventListener("click",this.onClick)}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return r`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createTimeFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>
        <section class="event__details">
          ${this.createOfferListFieldHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){const{types:e}=this.state;return r`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17" height="17"
            src="img/icons/${e.find((e=>e.isSelected)).value}.png"
            alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${e.map((e=>r`
              <div class="event__type-item">
                <input
                  id="event-type-${e.value}-1"
                  class="event__type-input visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}>
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1">
                  ${e.value}
                </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state,n=e.find((e=>e.isSelected)),s=t.find((e=>e.isSelected));return r`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${n.value}
        </label>
        <input
          class="event__input  event__input--destination"
          id="event-destination-1"
          type="text"
          name="event-destination"
          value="${s?.name}"
          list="destination-list-1">

        <datalist id="destination-list-1">
          ${t.map((e=>r`
            <option value="${e.name}"></option>
          `))}
        </datalist>
      </div>
    `}createTimeFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return r`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input  event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          value="${s(e)}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          value="${s(t)}">
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return r`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input
          class="event__input  event__input--price"
          id="event-price-1"
          type="text"
          name="event-price"
          value="${e}">
      </div>
    `}createSubmitButtonHtml(){return r`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return r`
      <button class="event__reset-btn" type="reset">Delete</button>
    `}createCloseButtonHtml(){return r`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?r`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${e.map((e=>r`
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden"
                id="${e.id}"
                type="checkbox"
                name="event-offer"
                value="${e.id}"
                ${e.isSelected?"checked":""}>

              <label class="event__offer-label" for="${e.id}">
                <span class="event__offer-title">${e.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${e.price}</span>
              </label>
            </div>
          `))}
        </div>
      </section>
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?r`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${t.pictures.map((e=>r`
              <img class="event__photo" src=${e.src} alt="${e.description}">
            `))}
          </div>
        </div>
      </section>
    `:""}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(e){e.key?.startsWith("Esc")&&this.dispatch("close")}}customElements.define("edit-view",S),customElements.define("list-view",class extends e{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new S:new $;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});class M{}class A extends M{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offersIds=structuredClone(e.offers),this.type=e.type}}const D={MIN:1,MAX:1e3},H={DAY:1,HOUR:5,MINUTE:59};function x(e){return e[Math.floor(Math.random()*e.length)]}function C(e=D.MIN,t=D.MAX){return Math.floor(Math.random()*(t-e+1))+e}function E(){return Math.random()>=.5}let O=t().subtract(C(0,H.DAY),"day").subtract(C(0,H.HOUR),"hour").subtract(C(0,H.MINUTE),"minute").toDate();function k({next:e}){return e&&(O=t(O).add(C(0,H.DAY),"day").add(C(0,H.HOUR),"hour").add(C(0,H.MINUTE),"minute").toDate()),O}const T=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],L=["Chamonix","Amsterdam","Geneva","Berlin","Paris","Rome","Barcelona","London","Prague","Lisbon","Vienna","Budapest","Dublin","Stockholm","Copenhagen","Zurich","Brussels"],I=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],F=1,B=5,P=0,U=6;function N(e){return{id:crypto.randomUUID(),name:e,description:(t=I,n=F,s=B,Array.from({length:C(n,s)},(()=>x(t))).join(" ")),pictures:Array.from({length:C(P,U)},(()=>{return{src:`https://loremflickr.com/248/152/${t=e}?random=${C()}`,description:`${t} description`};var t}))};var t,n,s}const Y=["Upgrade to a business class","Choose the radio station","Choose temperature","Drive quickly, I'm in a hurry","Drive slowly","Infotainment system","Order meal","Choose seats","Book a taxi at the arrival point","Order a breakfast","Wake up at a certain time","Choose meal","Upgrade to comfort class","Add luggage","Business lounge","Choose the time of check-in","Choose the time of check-out","Add breakfast","Laundry","Order a meal from the restaurant","With automatic transmission","With air conditioning","Choose live music","Choose VIP area"],V={MIN:10,MAX:500},j=0,Z=5;function q(){return{id:crypto.randomUUID(),title:x(Y),price:C(V.MIN,V.MAX)}}function R(e){return{type:e,offers:Array.from({length:C(j,Z)},q)}}const W=50,z=1e3;class J extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(e){const t=this.getUrl();t.search="",Object.keys(e).forEach((n=>{t.searchParams.set(n,e[n])})),window.history.pushState(null,"",t.href),this.dispatchEvent(new Event("change"))}getParams(){const e=this.getUrl();return Object.fromEntries(e.searchParams)}getUrl(){return new URL(window.location.href)}}const X=new J;class G{constructor(e,t){this.view=e,this.model=t,this.navigation=X,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){this.updateView()}}class Q extends G{constructor(...e){super(...e)}updateView(){this.view.render()}}class K extends G{constructor(...e){super(...e)}updateView(){const e=["everything","future","present","past"].map((e=>({value:e,isSelected:"everything"===e,isDisabled:"present"===e})));this.view.setState({items:e})}}class ee extends G{constructor(...e){super(...e)}updateView(){this.view.render()}}class te extends G{constructor(...e){super(...e)}updateView(){const e=["day","event","time","price","offers"].map((e=>({value:e,isSelected:"day"===e,isDisabled:"event"===e||"offers"===e})));this.view.setState({items:e})}}class ne extends G{constructor(...e){super(...e),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this))}updateView(){const e=this.navigation.getParams(),t=this.model.getPoints(),n=this.model.getDestinations(),s=this.model.getOfferSets(),i=t.map((t=>{const{offers:i}=s.find((e=>e.type===t.type));return{id:t.id,types:s.map((e=>({value:e.type,isSelected:t.type===e.type}))),destinations:n.map((e=>({...e,isSelected:e.id===t.destinationId}))),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offers:i.map((e=>({...e,isSelected:t.offersIds?.includes(e.id)}))),isFavorite:t.isFavorite,isEditable:e.edit===t.id}}));this.view.setState({items:i})}onViewOpen(e){const t=this.navigation.getParams();t.edit=e.target.state.id,this.navigation.setParams(t)}onViewClose(){const e=this.navigation.getParams();delete e.edit,this.navigation.setParams(e)}}const se=new class extends M{constructor(){super(),this.points=[],this.destinations=[],this.offerSets=[]}async ready(){var e,t;this.offerSets=T.map(R),this.destinations=L.map(N),this.points=(e=this.offerSets,t=this.destinations,Array.from({length:10},(()=>function(e,t){const n=x(e),s=x(t),i=function(e){const t=[];return e.forEach((e=>{E()&&t.push(e)})),t}(n.offers).map((e=>e.id));return function(e,t,n){return{id:crypto.randomUUID(),base_price:C(W,z),date_from:k({next:!1}).toISOString(),date_to:k({next:!0}).toISOString(),destination:t,is_favorite:E(),offers:n,type:e}}(n.type,s.id,i)}(e,t))))}getPoints(){return this.points.map((e=>new A(e)))}getDestinations(){return structuredClone(this.destinations)}getOfferSets(){return structuredClone(this.offerSets)}};se.ready().then((()=>{new Q(document.querySelector("trip-info-view"),se),new K(document.querySelector("filter-view"),se),new ee(document.querySelector("add-button-view"),se),new te(document.querySelector("sort-view"),se),new ne(document.querySelector("list-view"),se)}))})()})();
//# sourceMappingURL=bundle.a916c9f274809a7aa2f0.js.map