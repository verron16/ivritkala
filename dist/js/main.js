!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
let phoneMask = IMask(
    document.getElementById('phone-form'), {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2ZzRldmVyeWJvZHkubWluLmpzIiwiYW5pbWF0aW9ucy5qcyIsIm1lbnUuanMiLCJtb2RhbHMuanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGEuc3ZnNGV2ZXJ5Ym9keT1iKCl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6YS5zdmc0ZXZlcnlib2R5PWIoKX0odGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiLGMpe2lmKGMpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxlPSFiLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikmJmMuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtlJiZiLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIixlKTtmb3IodmFyIGY9Yy5jbG9uZU5vZGUoITApO2YuY2hpbGROb2Rlcy5sZW5ndGg7KWQuYXBwZW5kQ2hpbGQoZi5maXJzdENoaWxkKTthLmFwcGVuZENoaWxkKGQpfX1mdW5jdGlvbiBiKGIpe2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09PWIucmVhZHlTdGF0ZSl7dmFyIGM9Yi5fY2FjaGVkRG9jdW1lbnQ7Y3x8KGM9Yi5fY2FjaGVkRG9jdW1lbnQ9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLGMuYm9keS5pbm5lckhUTUw9Yi5yZXNwb25zZVRleHQsYi5fY2FjaGVkVGFyZ2V0PXt9KSxiLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihkKXt2YXIgZT1iLl9jYWNoZWRUYXJnZXRbZC5pZF07ZXx8KGU9Yi5fY2FjaGVkVGFyZ2V0W2QuaWRdPWMuZ2V0RWxlbWVudEJ5SWQoZC5pZCkpLGEoZC5wYXJlbnQsZC5zdmcsZSl9KX19LGIub25yZWFkeXN0YXRlY2hhbmdlKCl9ZnVuY3Rpb24gYyhjKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBjPTA7YzxvLmxlbmd0aDspe3ZhciBoPW9bY10saT1oLnBhcmVudE5vZGUsaj1kKGkpLGs9aC5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpfHxoLmdldEF0dHJpYnV0ZShcImhyZWZcIik7aWYoIWsmJmcuYXR0cmlidXRlTmFtZSYmKGs9aC5nZXRBdHRyaWJ1dGUoZy5hdHRyaWJ1dGVOYW1lKSksaiYmayl7aWYoZilpZighZy52YWxpZGF0ZXx8Zy52YWxpZGF0ZShrLGosaCkpe2kucmVtb3ZlQ2hpbGQoaCk7dmFyIGw9ay5zcGxpdChcIiNcIikscT1sLnNoaWZ0KCkscj1sLmpvaW4oXCIjXCIpO2lmKHEubGVuZ3RoKXt2YXIgcz1tW3FdO3N8fChzPW1bcV09bmV3IFhNTEh0dHBSZXF1ZXN0LHMub3BlbihcIkdFVFwiLHEpLHMuc2VuZCgpLHMuX2VtYmVkcz1bXSkscy5fZW1iZWRzLnB1c2goe3BhcmVudDppLHN2ZzpqLGlkOnJ9KSxiKHMpfWVsc2UgYShpLGosZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocikpfWVsc2UrK2MsKytwfWVsc2UrK2N9KCFvLmxlbmd0aHx8by5sZW5ndGgtcD4wKSYmbihlLDY3KX12YXIgZixnPU9iamVjdChjKSxoPS9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLGk9L1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLyxqPS9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLGs9L1xcYkVkZ2VcXC8uKFxcZCspXFxiLyxsPXdpbmRvdy50b3AhPT13aW5kb3cuc2VsZjtmPVwicG9seWZpbGxcImluIGc/Zy5wb2x5ZmlsbDpoLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl8fChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGopfHxbXSlbMV08MTA1NDd8fChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGkpfHxbXSlbMV08NTM3fHxrLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJmw7dmFyIG09e30sbj13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LG89ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIikscD0wO2YmJmUoKX1mdW5jdGlvbiBkKGEpe2Zvcih2YXIgYj1hO1wic3ZnXCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJihiPWIucGFyZW50Tm9kZSk7KTtyZXR1cm4gYn1yZXR1cm4gY30pOyIsImxldCBwaG9uZU1hc2sgPSBJTWFzayhcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZS1mb3JtJyksIHtcclxuICAgICAgbWFzazogJyswMDAwMDAwMDAwMDAwJyxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDE1XHJcbiAgICB9KTtcclxuIiwiY29uc3QgbWVudUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtYmFyLWJ1cmdlcicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbm1lbnVCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG5tZW51QnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtc20nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcbiAgbWVudUJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc20nKTtcclxufVxyXG5cclxubGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1saW5rJykuZm9yRWFjaChhID0+IGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XHJcbiAgbGV0IGlkID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLnNsaWNlKDEpXHJcbiAgc3dpdGNoIChpZCkge1xyXG4gICAgY2FzZSAnZm9vdGVyJzogY2xvc2VNZW51KCk7IGJyZWFrO1xyXG4gICAgY2FzZSAnYXV0aG9yJzogY2xvc2VNZW51KCk7IGJyZWFrO1xyXG4gICAgY2FzZSAndGFyaWYnOiBjbG9zZU1lbnUoKTsgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgfVxyXG5cclxufSkpXHJcblxyXG5cclxuXHJcbndvdyA9IG5ldyBXT1coXHJcbiAgICB7XHJcbiAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGRlZmF1bHRcclxuICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJywgLy8gZGVmYXVsdFxyXG4gICAgb2Zmc2V0OiAgICAgICAzMDAsICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgIG1vYmlsZTogICAgICAgdHJ1ZSwgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgbGl2ZTogICAgICAgICB0cnVlICAgICAgICAvLyBkZWZhdWx0XHJcbiAgfVxyXG4gIClcclxuICB3b3cuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4iLCIiLCJsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDExODA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfSk7Il19
