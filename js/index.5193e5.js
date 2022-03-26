(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.un1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/blue-balloon-218.png':'images/blue-balloon-109.png');
var a='data-src';var e=document.querySelector('.un2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/asteroid-png-photos-rotated-166.png':'images/asteroid-png-photos-rotated-83.png');
var a='data-src';var e=document.querySelector('.un3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/pasted-image-198.png':'images/pasted-image-99.png');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/pasted-image-538.png':'images/pasted-image-269.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/pasted-image-202.png':'images/pasted-image-101.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/pasted-image-362.png':'images/pasted-image-181.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/william-802.png':'images/william-401.png');
var a='data-src';var e=document.querySelector('.un12');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/william-802.png':'images/william-401.png');
var a='data-src';var e=document.querySelector('.un14');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/william-802-1.png':'images/william-401-1.png');
};
if(!window.HTMLPictureElement){r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
$('.s63').Stickyfill();
wl=new woolite();
wl.init();
wl.addAnimation($('.un5'), "4.00s", "4.00s", 1, 100);
wl.addAnimation($('.un6'), "3.00s", "3.00s", 1, 100);
wl.addAnimation($('.un11'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un13'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un15'), "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.un16'), "1.00s", "3.00s", 1, 100);
wl.addAnimation($('.un18'), "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.un19'), "1.00s", "0.00s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un20 source');ldsrcset('.un21 source');ldsrcset('.un22 source');ldsrcset('.un23 source');ldsrcset('.un24 source');ldsrcset('.un25 source');ldsrcset('.un26 source');ldsrcset('.un27 source');ldsrcset('.un28 source');ldsrcset('.un29 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}