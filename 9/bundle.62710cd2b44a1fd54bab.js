(()=>{var t={318:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([t.id,".event__photos-container {\n  overflow-x: auto;\n}\n\n.event__type-label {\n  text-transform: capitalize;\n}\n","",{version:3,sources:["webpack://./src/views/edit-view.css"],names:[],mappings:"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".event__photos-container {\n  overflow-x: auto;\n}\n\n.event__type-label {\n  text-transform: capitalize;\n}\n"],sourceRoot:""}]);const o=a},766:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([t.id,".trip-list{\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list{\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);s&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",c="month",l="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,c),r=n-i<0,a=e.clone().add(s+(r?-1:1),c);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=v;var g=function(t){return t instanceof M},$=function t(e,n,s){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();b[r]&&(i=r),n&&(b[r]=n,i=r);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,i=o}return!s&&i&&(y=i),i||!s&&y},w=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},S=_;S.l=$,S.i=g,S.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function v(t){this.$L=$(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,l=!!S.u(e)||e,p=S.p(t),f=function(t,e){var s=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?s:s.endOf(a)},h=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return l?f(1,0):f(31,11);case c:return l?f(1,m):f(0,m+1);case o:var b=this.$locale().weekStart||0,g=(v<b?v+7:v)-b;return f(l?_-g:_+(6-g),m);case a:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,l=S.p(t),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[c]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[i]=p+"Minutes",o[s]=p+"Seconds",o[n]=p+"Milliseconds",o)[l],h=l===a?this.$D+(e-this.$W):e;if(l===c||l===u){var v=this.clone().set(d,1);v.$d[f](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[S.p(t)]()},m.add=function(n,l){var d,p=this;n=Number(n);var f=S.p(l),h=function(t){var e=w(p);return S.w(e.date(e.date()+Math.round(t*n)),p)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return h(1);if(f===o)return h(7);var v=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[f]||1,m=this.$d.getTime()+n*v;return S.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},f=function(t){return S.s(r%12||12,t,"0")},v=u||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(h,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(r);case"HH":return S.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return v(r,a,!0);case"A":return v(r,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,h=this,v=S.p(d),m=w(n),_=(m.utcOffset()-this.utcOffset())*t,y=this-m,b=function(){return S.m(h,m)};switch(v){case u:f=b()/12;break;case c:f=b();break;case l:f=b()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case r:f=y/e;break;case i:f=y/t;break;case s:f=y/1e3;break;default:f=y}return p?f:S.a(f)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return b[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=$(t,e,!0);return s&&(n.$L=s),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),A=M.prototype;return w.prototype=A,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",c],["$y",u],["$D",d]].forEach((function(t){A[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,M,w),t.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(t){return w(1e3*t)},w.en=b[y],w.Ls=b,w.p={},w}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},a=[],o=0;o<t.length;o++){var c=t[o],l=s.base?c[0]+s.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,s);s.byIndex=o,e.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var c=s(t,i),l=0;l<r.length;l++){var u=n(r[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";class t extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(t){Object.assign(this.state,t),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(t,e=null){const n=new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0});return this.dispatchEvent(n)}}var e=n(484);function s(t){return""!==t?e(t).format("DD/MM/YY HH:mm"):""}function i(t){return e(t).format("HH:mm")}function r(t,...e){return t.reduce(((t,n,s)=>{const i=e[s-1];return void 0===i?t+n:Array.isArray(i)?t+i.join("")+n:t+i+n}))}customElements.define("trip-info-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return r`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}}),customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return r`
      ${this.state.items.map((t=>r`
        <div class="trip-filters__filter">
          <input
            id="filter-${t.value}"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="${t.value}"
            ${t.isSelected?"checked":""}
            ${t.isDisabled?"disabled":""}>
          <label
            class="trip-filters__filter-label"
            for="filter-${t.value}">
            ${t.value}
          </label>
        </div>
      `))}
    `}}),customElements.define("add-button-view",class extends t{createHtml(){return r`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `}}),customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return r`
      ${this.state.items.map((t=>r`
        <div class="trip-sort__item  trip-sort__item--${t.value}">
          <input
            id="sort-${t.value}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="${t.value}"
            ${t.isSelected?"checked":""}
            ${t.isDisabled?"disabled":""}>
          <label
            class="trip-sort__btn"
            for="sort-${t.value}">
            ${t.value}
          </label>
        </div>
      `))}
    `}});var a=n(379),o=n.n(a),c=n(795),l=n.n(c),u=n(569),d=n.n(u),p=n(565),f=n.n(p),h=n(216),v=n.n(h),m=n(589),_=n.n(m),y=n(766),b={};b.styleTagTransform=_(),b.setAttributes=f(),b.insert=d().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=v(),o()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;class g extends t{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return r`
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
    `}createDateFromHtml(){const{dateFrom:t}=this.state;return r`
      <time class="event__date" datetime="${t}">${function(t){return e(t).format("MMM D")}(t)}</time>
    `}createTypeIconHtml(){const{types:t}=this.state;return r`
      <div class="event__type">
        <img class="event__type-icon"
          width="42"
          height="42"
          src="img/icons/${t.find((t=>t.isSelected)).value}.png"
          alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:t,destinations:e}=this.state,n=t.find((t=>t.isSelected)),s=e.find((t=>t.isSelected));return r`
      <h3 class="event__title">${n.value} ${s.name}</h3>
    `}createTimeHtml(){const{dateFrom:t,dateTo:n}=this.state;return r`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${t}">${i(t)}</time>
          —
          <time class="event__end-time" datetime="${n}">${i(n)}</time>
        </p>
        <p class="event__duration">${function(t,n){const s=e(n).diff(e(t),"days"),i=e(n).diff(e(t),"hours")%24,r=e(n).diff(e(t),"minutes")%60;let a="";return s>0&&(a+=`${s.toString().padStart(2,"0")}D `),i>0&&(a+=`${i.toString().padStart(2,"0")}H `),a+=`${r.toString().padStart(2,"0")}M`,a}(t,n)}</p>
      </div>
    `}createPriceHtml(){const{basePrice:t}=this.state;return r`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${t}</span>
      </p>
    `}createOfferListHtml(){const{offers:t}=this.state,e=t.filter((t=>t.isSelected));return e.length?r`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${e.map((t=>r`
          <li class="event__offer">
            <span class="event__offer-title">${t.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${t.price}</span>
          </li>
        `))}
      </ul>
    `:""}createFavoriteButtonHtml(){const{isFavorite:t}=this.state;return r`
      <button class="event__favorite-btn${t?" event__favorite-btn--active":""}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return r`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}onClick(t){t.target.closest(".event__rollup-btn")?this.dispatch("open"):t.target.closest(".event__favorite-btn")&&this.dispatch("favorite")}}customElements.define("point-view",g);var $=n(318),w={};w.styleTagTransform=_(),w.setAttributes=f(),w.insert=d().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=v(),o()($.Z,w),$.Z&&$.Z.locals&&$.Z.locals;class S extends t{constructor(){super(),this.addEventListener("click",this.onClick)}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return r`
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
    `}createTypeFieldHtml(){const{types:t}=this.state;return r`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17" height="17"
            src="img/icons/${t.find((t=>t.isSelected)).value}.png"
            alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${t.map((t=>r`
              <div class="event__type-item">
                <input
                  id="event-type-${t.value}-1"
                  class="event__type-input visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${t.value}"
                  ${t.isSelected?"checked":""}>
                <label
                  class="event__type-label  event__type-label--${t.value}"
                  for="event-type-${t.value}-1">
                  ${t.value}
                </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:t,destinations:e}=this.state,n=t.find((t=>t.isSelected)),s=e.find((t=>t.isSelected));return r`
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
          ${e.map((t=>r`
            <option value="${t.name}"></option>
          `))}
        </datalist>
      </div>
    `}createTimeFieldHtml(){const{dateFrom:t,dateTo:e}=this.state;return r`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input  event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          value="${s(t)}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          value="${s(e)}">
      </div>
    `}createPriceFieldHtml(){const{basePrice:t}=this.state;return r`
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
          value="${t}">
      </div>
    `}createSubmitButtonHtml(){return r`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return r`
      <button class="event__reset-btn" type="reset">Delete</button>
    `}createCloseButtonHtml(){return r`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:t}=this.state;return t.length?r`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${t.map((t=>r`
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden"
                id="${t.id}"
                type="checkbox"
                name="event-offer"
                value="${t.id}"
                ${t.isSelected?"checked":""}>

              <label class="event__offer-label" for="${t.id}">
                <span class="event__offer-title">${t.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${t.price}</span>
              </label>
            </div>
          `))}
        </div>
      </section>
    `:""}createDestinationHtml(){const{destinations:t}=this.state,e=t.find((t=>t.isSelected));return e?r`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${e.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${e.pictures.map((t=>r`
              <img class="event__photo" src=${t.src} alt="${t.description}">
            `))}
          </div>
        </div>
      </section>
    `:""}onClick(t){t.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(t){t.key?.startsWith("Esc")&&this.dispatch("close")}}customElements.define("edit-view",S),customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const t=this.state.items.map((t=>{const e=t.isEditable?new S:new g;return e.classList.add("trip-list__item"),e.setAttribute("role","listitem"),e.setState(t),e}));this.replaceChildren(...t)}});class M{}class A extends M{constructor(t){super(),this.id=t.id,this.basePrice=t.base_price,this.dateFrom=t.date_from,this.dateTo=t.date_to,this.destinationId=t.destination,this.isFavorite=t.is_favorite,this.offersIds=structuredClone(t.offers),this.type=t.type}toJSON(){return{id:this.id,base_price:this.basePrice,date_from:this.dateFrom,date_to:this.dateTo,is_favorite:this.isFavorite,offers:structuredClone(this.offersIds),destination:this.destinationId,type:this.type}}}const D={MIN:1,MAX:1e3},H={DAY:1,HOUR:5,MINUTE:59};function x(t){return t[Math.floor(Math.random()*t.length)]}function C(t=D.MIN,e=D.MAX){return Math.floor(Math.random()*(e-t+1))+t}function E(){return Math.random()>=.5}let O=e().subtract(C(0,H.DAY),"day").subtract(C(0,H.HOUR),"hour").subtract(C(0,H.MINUTE),"minute").toDate();function k({next:t}){return t&&(O=e(O).add(C(0,H.DAY),"day").add(C(0,H.HOUR),"hour").add(C(0,H.MINUTE),"minute").toDate()),O}const T=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],F=["Chamonix","Amsterdam","Geneva","Berlin","Paris","Rome","Barcelona","London","Prague","Lisbon","Vienna","Budapest","Dublin","Stockholm","Copenhagen","Zurich","Brussels"],I=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],P=1,L=5,B=0,U=6;function N(t){return{id:crypto.randomUUID(),name:t,description:(e=I,n=P,s=L,Array.from({length:C(n,s)},(()=>x(e))).join(" ")),pictures:Array.from({length:C(B,U)},(()=>{return{src:`https://loremflickr.com/248/152/${e=t}?random=${C()}`,description:`${e} description`};var e}))};var e,n,s}const V=["Upgrade to a business class","Choose the radio station","Choose temperature","Drive quickly, I'm in a hurry","Drive slowly","Infotainment system","Order meal","Choose seats","Book a taxi at the arrival point","Order a breakfast","Wake up at a certain time","Choose meal","Upgrade to comfort class","Add luggage","Business lounge","Choose the time of check-in","Choose the time of check-out","Add breakfast","Laundry","Order a meal from the restaurant","With automatic transmission","With air conditioning","Choose live music","Choose VIP area"],j={MIN:10,MAX:500},Y=0,Z=5;function q(){return{id:crypto.randomUUID(),title:x(V),price:C(j.MIN,j.MAX)}}function R(t){return{type:t,offers:Array.from({length:C(Y,Z)},q)}}const W=50,J=1e3;class z extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(t){const e=this.getUrl();e.search="",Object.keys(t).forEach((n=>{e.searchParams.set(n,t[n])})),window.history.pushState(null,"",e.href),this.dispatchEvent(new Event("change"))}getParams(){const t=this.getUrl();return Object.fromEntries(t.searchParams)}getUrl(){return new URL(window.location.href)}}const X=new z;class G{constructor(t,e){this.view=t,this.model=e,this.navigation=X,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){this.updateView()}}class Q extends G{constructor(...t){super(...t)}updateView(){this.view.render()}}class K extends G{constructor(...t){super(...t)}updateView(){const t=["everything","future","present","past"].map((t=>({value:t,isSelected:"everything"===t,isDisabled:"present"===t})));this.view.setState({items:t})}}class tt extends G{constructor(...t){super(...t)}updateView(){this.view.render()}}class et extends G{constructor(...t){super(...t)}updateView(){const t=["day","event","time","price","offers"].map((t=>({value:t,isSelected:"day"===t,isDisabled:"event"===t||"offers"===t})));this.view.setState({items:t})}}class nt extends G{constructor(...t){super(...t),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this)),this.view.addEventListener("favorite",this.onViewFavorite.bind(this))}updateView(){const t=this.navigation.getParams(),e=this.model.getPoints(),n=this.model.getDestinations(),s=this.model.getOfferSets(),i=e.map((e=>{const{offers:i}=s.find((t=>t.type===e.type));return{id:e.id,types:s.map((t=>({value:t.type,isSelected:e.type===t.type}))),destinations:n.map((t=>({...t,isSelected:t.id===e.destinationId}))),dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offers:i.map((t=>({...t,isSelected:e.offersIds?.includes(t.id)}))),isFavorite:e.isFavorite,isEditable:t.edit===e.id}}));this.view.setState({items:i})}createPoint(t){const e=this.model.cteatePoint();return Object.assign(e,{id:t.id,type:t.types.find((t=>t.isSelected)).value,destinationId:t.destinations.find((t=>t.isSelected))?.id,dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offersIds:t.offers.filter((t=>t.isSelected)).map((t=>t.id)),isFavorite:t.isFavorite}),e}onViewOpen(t){const e=this.navigation.getParams();e.edit=t.target.state.id,this.navigation.setParams(e)}onViewClose(){const t=this.navigation.getParams();delete t.edit,this.navigation.setParams(t)}async onViewFavorite(t){const e=t.target;e.state.isFavorite=!e.state.isFavorite,await this.model.updatePoint(this.createPoint(e.state)),e.render()}}const st=new class extends M{constructor(){super(),this.points=[],this.destinations=[],this.offerSets=[]}async ready(){var t,e;this.offerSets=T.map(R),this.destinations=F.map(N),this.points=(t=this.offerSets,e=this.destinations,Array.from({length:10},(()=>function(t,e){const n=x(t),s=x(e),i=function(t){const e=[];return t.forEach((t=>{E()&&e.push(t)})),e}(n.offers).map((t=>t.id));return function(t,e,n){return{id:crypto.randomUUID(),base_price:C(W,J),date_from:k({next:!1}).toISOString(),date_to:k({next:!0}).toISOString(),destination:e,is_favorite:E(),offers:n,type:t}}(n.type,s.id,i)}(t,e))))}getPoints(){return this.points.map(this.cteatePoint)}cteatePoint(t=Object.create(null)){return new A(t)}async updatePoint(t){const e=t.toJSON(),n=this.points.findIndex((t=>t.id===e.id));this.points.splice(n,1,e)}getDestinations(){return structuredClone(this.destinations)}getOfferSets(){return structuredClone(this.offerSets)}};st.ready().then((()=>{new Q(document.querySelector("trip-info-view"),st),new K(document.querySelector("filter-view"),st),new tt(document.querySelector("add-button-view"),st),new et(document.querySelector("sort-view"),st),new nt(document.querySelector("list-view"),st)}))})()})();
//# sourceMappingURL=bundle.62710cd2b44a1fd54bab.js.map