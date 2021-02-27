!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
let phoneMask = IMask(
    document.getElementById('phone-form'), {
      mask: '+0000000000000',
      min: 0,
      max: 15
    });

    let phoneMaskFooter = IMask(
      document.getElementById('phone-footer'), {
        mask: '+0000000000000',
        min: 0,
        max: 15
      });
    
  
const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', openMenu)

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-sm')
}

function closeMenu() {
  menuBurger.classList.remove('menu-open');
  menu.classList.remove('menu-sm');
}

let links = document.querySelectorAll('.menu-item-link').forEach(a => a.addEventListener('click', ev => {
  let id = ev.target.getAttribute('href').slice(1)
  switch (id) {
    case 'footer': closeMenu(); break;
    case 'author': closeMenu(); break;
    case 'tarif': closeMenu(); break;
    default: return;
  }

}))



wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       300,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();





let swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1
        },
        560: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1
        },
        1180: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2
        }
    }
  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2ZzRldmVyeWJvZHkubWluLmpzIiwiYW5pbWF0aW9ucy5qcyIsIm1lbnUuanMiLCJtb2RhbHMuanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxmdW5jdGlvbigpe3JldHVybiBhLnN2ZzRldmVyeWJvZHk9YigpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YigpOmEuc3ZnNGV2ZXJ5Ym9keT1iKCl9KHRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYixjKXtpZihjKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksZT0hYi5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpJiZjLmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7ZSYmYi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsZSk7Zm9yKHZhciBmPWMuY2xvbmVOb2RlKCEwKTtmLmNoaWxkTm9kZXMubGVuZ3RoOylkLmFwcGVuZENoaWxkKGYuZmlyc3RDaGlsZCk7YS5hcHBlbmRDaGlsZChkKX19ZnVuY3Rpb24gYihiKXtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKDQ9PT1iLnJlYWR5U3RhdGUpe3ZhciBjPWIuX2NhY2hlZERvY3VtZW50O2N8fChjPWIuX2NhY2hlZERvY3VtZW50PWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSxjLmJvZHkuaW5uZXJIVE1MPWIucmVzcG9uc2VUZXh0LGIuX2NhY2hlZFRhcmdldD17fSksYi5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oZCl7dmFyIGU9Yi5fY2FjaGVkVGFyZ2V0W2QuaWRdO2V8fChlPWIuX2NhY2hlZFRhcmdldFtkLmlkXT1jLmdldEVsZW1lbnRCeUlkKGQuaWQpKSxhKGQucGFyZW50LGQuc3ZnLGUpfSl9fSxiLm9ucmVhZHlzdGF0ZWNoYW5nZSgpfWZ1bmN0aW9uIGMoYyl7ZnVuY3Rpb24gZSgpe2Zvcih2YXIgYz0wO2M8by5sZW5ndGg7KXt2YXIgaD1vW2NdLGk9aC5wYXJlbnROb2RlLGo9ZChpKSxrPWguZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKXx8aC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO2lmKCFrJiZnLmF0dHJpYnV0ZU5hbWUmJihrPWguZ2V0QXR0cmlidXRlKGcuYXR0cmlidXRlTmFtZSkpLGomJmspe2lmKGYpaWYoIWcudmFsaWRhdGV8fGcudmFsaWRhdGUoayxqLGgpKXtpLnJlbW92ZUNoaWxkKGgpO3ZhciBsPWsuc3BsaXQoXCIjXCIpLHE9bC5zaGlmdCgpLHI9bC5qb2luKFwiI1wiKTtpZihxLmxlbmd0aCl7dmFyIHM9bVtxXTtzfHwocz1tW3FdPW5ldyBYTUxIdHRwUmVxdWVzdCxzLm9wZW4oXCJHRVRcIixxKSxzLnNlbmQoKSxzLl9lbWJlZHM9W10pLHMuX2VtYmVkcy5wdXNoKHtwYXJlbnQ6aSxzdmc6aixpZDpyfSksYihzKX1lbHNlIGEoaSxqLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHIpKX1lbHNlKytjLCsrcH1lbHNlKytjfSghby5sZW5ndGh8fG8ubGVuZ3RoLXA+MCkmJm4oZSw2Nyl9dmFyIGYsZz1PYmplY3QoYyksaD0vXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLyxpPS9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8saj0vXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLyxrPS9cXGJFZGdlXFwvLihcXGQrKVxcYi8sbD13aW5kb3cudG9wIT09d2luZG93LnNlbGY7Zj1cInBvbHlmaWxsXCJpbiBnP2cucG9seWZpbGw6aC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfHwobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChqKXx8W10pWzFdPDEwNTQ3fHwobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChpKXx8W10pWzFdPDUzN3x8ay50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiZsO3ZhciBtPXt9LG49d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCxvPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLHA9MDtmJiZlKCl9ZnVuY3Rpb24gZChhKXtmb3IodmFyIGI9YTtcInN2Z1wiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYoYj1iLnBhcmVudE5vZGUpOyk7cmV0dXJuIGJ9cmV0dXJuIGN9KTsiLCJsZXQgcGhvbmVNYXNrID0gSU1hc2soXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUtZm9ybScpLCB7XHJcbiAgICAgIG1hc2s6ICcrMDAwMDAwMDAwMDAwMCcsXHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxNVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBob25lTWFza0Zvb3RlciA9IElNYXNrKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUtZm9vdGVyJyksIHtcclxuICAgICAgICBtYXNrOiAnKzAwMDAwMDAwMDAwMDAnLFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDE1XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgIiwiY29uc3QgbWVudUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtYmFyLWJ1cmdlcicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbm1lbnVCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG5tZW51QnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtc20nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcbiAgbWVudUJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc20nKTtcclxufVxyXG5cclxubGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1saW5rJykuZm9yRWFjaChhID0+IGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XHJcbiAgbGV0IGlkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLnNsaWNlKDEpXHJcbiAgc3dpdGNoIChpZCkge1xyXG4gICAgY2FzZSAnZm9vdGVyJzogY2xvc2VNZW51KCk7IGJyZWFrO1xyXG4gICAgY2FzZSAnYXV0aG9yJzogY2xvc2VNZW51KCk7IGJyZWFrO1xyXG4gICAgY2FzZSAndGFyaWYnOiBjbG9zZU1lbnUoKTsgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgfVxyXG5cclxufSkpXHJcblxyXG5cclxuXHJcbndvdyA9IG5ldyBXT1coXHJcbiAgICB7XHJcbiAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGRlZmF1bHRcclxuICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJywgLy8gZGVmYXVsdFxyXG4gICAgb2Zmc2V0OiAgICAgICAzMDAsICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgIG1vYmlsZTogICAgICAgdHJ1ZSwgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgbGl2ZTogICAgICAgICB0cnVlICAgICAgICAvLyBkZWZhdWx0XHJcbiAgfVxyXG4gIClcclxuICB3b3cuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4iLCIiLCJsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDExODA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfSk7Il19
