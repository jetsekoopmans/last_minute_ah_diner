// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/**
 * nlform.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
  
  'use strict';

  var document = window.document;

  if (!String.prototype.trim) {
    String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
  }

  function NLForm( el ) { 
    this.el = el;
    this.overlay = this.el.querySelector( '.nl-overlay' );
    this.fields = [];
    this.fldOpen = -1;
    this._init();
  }

  NLForm.prototype = {
    _init : function() {
      var self = this;
      Array.prototype.slice.call( this.el.querySelectorAll( 'select' ) ).forEach( function( el, i ) {
        self.fldOpen++;
        self.fields.push( new NLField( self, el, 'dropdown', self.fldOpen ) );
      } );
      Array.prototype.slice.call( this.el.querySelectorAll( 'input' ) ).forEach( function( el, i ) {
        self.fldOpen++;
        self.fields.push( new NLField( self, el, 'input', self.fldOpen ) );
      } );
      this.overlay.addEventListener( 'click', function(ev) { self._closeFlds(); } );
      this.overlay.addEventListener( 'touchstart', function(ev) { self._closeFlds(); } );
    },
    _closeFlds : function() {
      if( this.fldOpen !== -1 ) {
        this.fields[ this.fldOpen ].close();
      }
    }
  }

  function NLField( form, el, type, idx ) {
    this.form = form;
    this.elOriginal = el;
    this.pos = idx;
    this.type = type;
    this._create();
    this._initEvents();
  }

  NLField.prototype = {
    _create : function() {
      if( this.type === 'dropdown' ) {
        this._createDropDown(); 
      }
      else if( this.type === 'input' ) {
        this._createInput();  
      }
    },
    _createDropDown : function() {
      var self = this;
      this.fld = document.createElement( 'div' );
      this.fld.className = 'nl-field nl-dd';
      this.toggle = document.createElement( 'a' );
      this.toggle.innerHTML = this.elOriginal.options[ this.elOriginal.selectedIndex ].innerHTML;
      this.toggle.className = 'nl-field-toggle';
      this.optionsList = document.createElement( 'ul' );
      var ihtml = '';
      Array.prototype.slice.call( this.elOriginal.querySelectorAll( 'option' ) ).forEach( function( el, i ) {
        ihtml += self.elOriginal.selectedIndex === i ? '<li class="nl-dd-checked">' + el.innerHTML + '</li>' : '<li>' + el.innerHTML + '</li>';
        // selected index value
        if( self.elOriginal.selectedIndex === i ) {
          self.selectedIdx = i;
        }
      } );
      this.optionsList.innerHTML = ihtml;
      this.fld.appendChild( this.toggle );
      this.fld.appendChild( this.optionsList );
      this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
      this.elOriginal.style.display = 'none';
    },
    _createInput : function() {
      var self = this;
      this.fld = document.createElement( 'div' );
      this.fld.className = 'nl-field nl-ti-text';
      this.toggle = document.createElement( 'a' );
      this.toggle.innerHTML = this.elOriginal.getAttribute( 'placeholder' );
      this.toggle.className = 'nl-field-toggle';
      this.optionsList = document.createElement( 'ul' );
      this.getinput = document.createElement( 'input' );
      this.getinput.setAttribute( 'type', 'text' );
      this.getinput.setAttribute( 'placeholder', this.elOriginal.getAttribute( 'placeholder' ) );
      this.getinputWrapper = document.createElement( 'li' );
      this.getinputWrapper.className = 'nl-ti-input';
      this.inputsubmit = document.createElement( 'button' );
      this.inputsubmit.className = 'nl-field-go';
      this.inputsubmit.innerHTML = 'Go';
      this.getinputWrapper.appendChild( this.getinput );
      this.getinputWrapper.appendChild( this.inputsubmit );
      this.example = document.createElement( 'li' );
      this.example.className = 'nl-ti-example';
      this.example.innerHTML = this.elOriginal.getAttribute( 'data-subline' );
      this.optionsList.appendChild( this.getinputWrapper );
      this.optionsList.appendChild( this.example );
      this.fld.appendChild( this.toggle );
      this.fld.appendChild( this.optionsList );
      this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
      this.elOriginal.style.display = 'none';
    },
    _initEvents : function() {
      var self = this;
      this.toggle.addEventListener( 'click', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );
      this.toggle.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );

      if( this.type === 'dropdown' ) {
        var opts = Array.prototype.slice.call( this.optionsList.querySelectorAll( 'li' ) );
        opts.forEach( function( el, i ) {
          el.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
          el.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
        } );
      }
      else if( this.type === 'input' ) {
        this.getinput.addEventListener( 'keydown', function( ev ) {
          if ( ev.keyCode == 13 ) {
            self.close();
          }
        } );
        this.inputsubmit.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close(); } );
        this.inputsubmit.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close(); } );
      }

    },
    _open : function() {
      if( this.open ) {
        return false;
      }
      this.open = true;
      this.form.fldOpen = this.pos;
      var self = this;
      this.fld.className += ' nl-field-open';
    },
    close : function( opt, idx ) {
      if( !this.open ) {
        return false;
      }
      this.open = false;
      this.form.fldOpen = -1;
      this.fld.className = this.fld.className.replace(/\b nl-field-open\b/,'');

      if( this.type === 'dropdown' ) {
        if( opt ) {
          // remove class nl-dd-checked from previous option
          var selectedopt = this.optionsList.children[ this.selectedIdx ];
          selectedopt.className = '';
          opt.className = 'nl-dd-checked';
          this.toggle.innerHTML = opt.innerHTML;
          // update selected index value
          this.selectedIdx = idx;
          // update original select element´s value
          this.elOriginal.value = this.elOriginal.children[ this.selectedIdx ].value;
        }
      }
      else if( this.type === 'input' ) {
        this.getinput.blur();
        this.toggle.innerHTML = this.getinput.value.trim() !== '' ? this.getinput.value : this.getinput.getAttribute( 'placeholder' );
        this.elOriginal.value = this.getinput.value;
      }
    }
  }

  // add to global namespace
  window.NLForm = NLForm;

} )( window );