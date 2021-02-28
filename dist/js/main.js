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
    case 'reviews': closeMenu(); break;
    default: return;
  }
}))

// settings animations

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




const modalWindow = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const btnModalOpen = document.querySelectorAll('.tarif-wrapper-item-btn');
const btnModalClose = document.querySelector('.modal-close-icon');
let priceModal = document.querySelector('.modal-content-tarif-price-content');
let tarifList = document.querySelector('.modal-content-tarif-list');
let titleModal = document.querySelector('.modal-content-tarif-title');

btnModalOpen.forEach(btn => btn.addEventListener('click', event => {
    event.preventDefault();
    initPrice();
    initDateTitleTodo();
    openModal();;
   
}))
btnModalClose.addEventListener('click', closeModal);

function initPrice() {
    let prevSibl = event.target.previousSibling.childNodes[0].textContent;
    priceModal.textContent = prevSibl;
}

function initDateTitleTodo() {
    
    let allSiblings = event.target.parentNode.childNodes;
    titleModal.textContent = allSiblings[1].textContent;
    let oldList = allSiblings[2];
    tarifList.innerHTML = oldList.innerHTML;
    let deleteClassTarifList = document.querySelectorAll('.modal .tarif-list-item').forEach(todo => todo.classList.remove('tarif-list-item'))
    let addClassTarifList = document.querySelectorAll('.modal ul li').forEach(todo => todo.classList.add('modal-content-tarif-list-item'))
}

function openModal() {
    modalWindow.style.display = 'block';
    modalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.onclick = (e) => {
        if (e.target == modalWrapper || e.target == btnModalClose) {
            closeModal();
        }
    }
}

function closeModal() {
    modalWindow.style.display = 'none';
    modalWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
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
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 3
        }
    }
  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2ZzRldmVyeWJvZHkubWluLmpzIiwiYW5pbWF0aW9ucy5qcyIsIm1lbnUuanMiLCJtb2RhbHMuanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGEuc3ZnNGV2ZXJ5Ym9keT1iKCl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6YS5zdmc0ZXZlcnlib2R5PWIoKX0odGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiLGMpe2lmKGMpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxlPSFiLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikmJmMuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtlJiZiLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIixlKTtmb3IodmFyIGY9Yy5jbG9uZU5vZGUoITApO2YuY2hpbGROb2Rlcy5sZW5ndGg7KWQuYXBwZW5kQ2hpbGQoZi5maXJzdENoaWxkKTthLmFwcGVuZENoaWxkKGQpfX1mdW5jdGlvbiBiKGIpe2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09PWIucmVhZHlTdGF0ZSl7dmFyIGM9Yi5fY2FjaGVkRG9jdW1lbnQ7Y3x8KGM9Yi5fY2FjaGVkRG9jdW1lbnQ9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLGMuYm9keS5pbm5lckhUTUw9Yi5yZXNwb25zZVRleHQsYi5fY2FjaGVkVGFyZ2V0PXt9KSxiLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihkKXt2YXIgZT1iLl9jYWNoZWRUYXJnZXRbZC5pZF07ZXx8KGU9Yi5fY2FjaGVkVGFyZ2V0W2QuaWRdPWMuZ2V0RWxlbWVudEJ5SWQoZC5pZCkpLGEoZC5wYXJlbnQsZC5zdmcsZSl9KX19LGIub25yZWFkeXN0YXRlY2hhbmdlKCl9ZnVuY3Rpb24gYyhjKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBjPTA7YzxvLmxlbmd0aDspe3ZhciBoPW9bY10saT1oLnBhcmVudE5vZGUsaj1kKGkpLGs9aC5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpfHxoLmdldEF0dHJpYnV0ZShcImhyZWZcIik7aWYoIWsmJmcuYXR0cmlidXRlTmFtZSYmKGs9aC5nZXRBdHRyaWJ1dGUoZy5hdHRyaWJ1dGVOYW1lKSksaiYmayl7aWYoZilpZighZy52YWxpZGF0ZXx8Zy52YWxpZGF0ZShrLGosaCkpe2kucmVtb3ZlQ2hpbGQoaCk7dmFyIGw9ay5zcGxpdChcIiNcIikscT1sLnNoaWZ0KCkscj1sLmpvaW4oXCIjXCIpO2lmKHEubGVuZ3RoKXt2YXIgcz1tW3FdO3N8fChzPW1bcV09bmV3IFhNTEh0dHBSZXF1ZXN0LHMub3BlbihcIkdFVFwiLHEpLHMuc2VuZCgpLHMuX2VtYmVkcz1bXSkscy5fZW1iZWRzLnB1c2goe3BhcmVudDppLHN2ZzpqLGlkOnJ9KSxiKHMpfWVsc2UgYShpLGosZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocikpfWVsc2UrK2MsKytwfWVsc2UrK2N9KCFvLmxlbmd0aHx8by5sZW5ndGgtcD4wKSYmbihlLDY3KX12YXIgZixnPU9iamVjdChjKSxoPS9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLGk9L1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLyxqPS9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLGs9L1xcYkVkZ2VcXC8uKFxcZCspXFxiLyxsPXdpbmRvdy50b3AhPT13aW5kb3cuc2VsZjtmPVwicG9seWZpbGxcImluIGc/Zy5wb2x5ZmlsbDpoLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl8fChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGopfHxbXSlbMV08MTA1NDd8fChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGkpfHxbXSlbMV08NTM3fHxrLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJmw7dmFyIG09e30sbj13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LG89ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIikscD0wO2YmJmUoKX1mdW5jdGlvbiBkKGEpe2Zvcih2YXIgYj1hO1wic3ZnXCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJihiPWIucGFyZW50Tm9kZSk7KTtyZXR1cm4gYn1yZXR1cm4gY30pOyIsImxldCBwaG9uZU1hc2sgPSBJTWFzayhcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZS1mb3JtJyksIHtcclxuICAgICAgbWFzazogJyswMDAwMDAwMDAwMDAwJyxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDE1XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGhvbmVNYXNrRm9vdGVyID0gSU1hc2soXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZS1mb290ZXInKSwge1xyXG4gICAgICAgIG1hc2s6ICcrMDAwMDAwMDAwMDAwMCcsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMTVcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAiLCJjb25zdCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1iYXItYnVyZ2VyJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5cclxubWVudUJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KVxyXG5cclxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbm1lbnVCdXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1zbScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICBtZW51QnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zbScpO1xyXG59XHJcblxyXG5sZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWxpbmsnKS5mb3JFYWNoKGEgPT4gYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcclxuICBsZXQgaWQgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykuc2xpY2UoMSlcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlICdmb290ZXInOiBjbG9zZU1lbnUoKTsgYnJlYWs7XHJcbiAgICBjYXNlICdhdXRob3InOiBjbG9zZU1lbnUoKTsgYnJlYWs7XHJcbiAgICBjYXNlICd0YXJpZic6IGNsb3NlTWVudSgpOyBicmVhaztcclxuICAgIGNhc2UgJ3Jldmlld3MnOiBjbG9zZU1lbnUoKTsgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgfVxyXG59KSlcclxuXHJcbi8vIHNldHRpbmdzIGFuaW1hdGlvbnNcclxuXHJcbndvdyA9IG5ldyBXT1coXHJcbiAgICB7XHJcbiAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGRlZmF1bHRcclxuICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJywgLy8gZGVmYXVsdFxyXG4gICAgb2Zmc2V0OiAgICAgICAzMDAsICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgIG1vYmlsZTogICAgICAgdHJ1ZSwgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgbGl2ZTogICAgICAgICB0cnVlICAgICAgICAvLyBkZWZhdWx0XHJcbiAgfVxyXG4gIClcclxuICB3b3cuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4iLCJjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBtb2RhbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xyXG5jb25zdCBidG5Nb2RhbE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyaWYtd3JhcHBlci1pdGVtLWJ0bicpO1xyXG5jb25zdCBidG5Nb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlLWljb24nKTtcclxubGV0IHByaWNlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC10YXJpZi1wcmljZS1jb250ZW50Jyk7XHJcbmxldCB0YXJpZkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC10YXJpZi1saXN0Jyk7XHJcbmxldCB0aXRsZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQtdGFyaWYtdGl0bGUnKTtcclxuXHJcbmJ0bk1vZGFsT3Blbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaW5pdFByaWNlKCk7XHJcbiAgICBpbml0RGF0ZVRpdGxlVG9kbygpO1xyXG4gICAgb3Blbk1vZGFsKCk7O1xyXG4gICBcclxufSkpXHJcbmJ0bk1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRQcmljZSgpIHtcclxuICAgIGxldCBwcmV2U2libCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c1NpYmxpbmcuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcclxuICAgIHByaWNlTW9kYWwudGV4dENvbnRlbnQgPSBwcmV2U2libDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERhdGVUaXRsZVRvZG8oKSB7XHJcbiAgICBcclxuICAgIGxldCBhbGxTaWJsaW5ncyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XHJcbiAgICB0aXRsZU1vZGFsLnRleHRDb250ZW50ID0gYWxsU2libGluZ3NbMV0udGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgb2xkTGlzdCA9IGFsbFNpYmxpbmdzWzJdO1xyXG4gICAgdGFyaWZMaXN0LmlubmVySFRNTCA9IG9sZExpc3QuaW5uZXJIVE1MO1xyXG4gICAgbGV0IGRlbGV0ZUNsYXNzVGFyaWZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsIC50YXJpZi1saXN0LWl0ZW0nKS5mb3JFYWNoKHRvZG8gPT4gdG9kby5jbGFzc0xpc3QucmVtb3ZlKCd0YXJpZi1saXN0LWl0ZW0nKSlcclxuICAgIGxldCBhZGRDbGFzc1RhcmlmTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCB1bCBsaScpLmZvckVhY2godG9kbyA9PiB0b2RvLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQtdGFyaWYtbGlzdC1pdGVtJykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgZG9jdW1lbnQub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsV3JhcHBlciB8fCBlLnRhcmdldCA9PSBidG5Nb2RhbENsb3NlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxufSIsImxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU2MDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTE4MDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9KTsiXX0=
