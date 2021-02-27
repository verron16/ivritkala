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
const btnModalOpen = document.querySelector('.tarif-wrapper-item-btn');
const btnModalClose = document.querySelector('.modal-close-icon');

btnModalOpen.addEventListener('click', openModal);
btnModalClose.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    modalWindow.style.display = 'block';
    modalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.onclick = (e) => {
        if (e.target == modalWrapper || e.target == btnModalClose) {
            closeModal()
        }
    }
}

function closeModal() {
    modalWindow.style.display = 'none';
    modalWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2ZzRldmVyeWJvZHkubWluLmpzIiwiYW5pbWF0aW9ucy5qcyIsIm1lbnUuanMiLCJtb2RhbHMuanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihhLGIpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gYS5zdmc0ZXZlcnlib2R5PWIoKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTphLnN2ZzRldmVyeWJvZHk9YigpfSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIsYyl7aWYoYyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGU9IWIuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSYmYy5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO2UmJmIuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLGUpO2Zvcih2YXIgZj1jLmNsb25lTm9kZSghMCk7Zi5jaGlsZE5vZGVzLmxlbmd0aDspZC5hcHBlbmRDaGlsZChmLmZpcnN0Q2hpbGQpO2EuYXBwZW5kQ2hpbGQoZCl9fWZ1bmN0aW9uIGIoYil7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZig0PT09Yi5yZWFkeVN0YXRlKXt2YXIgYz1iLl9jYWNoZWREb2N1bWVudDtjfHwoYz1iLl9jYWNoZWREb2N1bWVudD1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksYy5ib2R5LmlubmVySFRNTD1iLnJlc3BvbnNlVGV4dCxiLl9jYWNoZWRUYXJnZXQ9e30pLGIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGQpe3ZhciBlPWIuX2NhY2hlZFRhcmdldFtkLmlkXTtlfHwoZT1iLl9jYWNoZWRUYXJnZXRbZC5pZF09Yy5nZXRFbGVtZW50QnlJZChkLmlkKSksYShkLnBhcmVudCxkLnN2ZyxlKX0pfX0sYi5vbnJlYWR5c3RhdGVjaGFuZ2UoKX1mdW5jdGlvbiBjKGMpe2Z1bmN0aW9uIGUoKXtmb3IodmFyIGM9MDtjPG8ubGVuZ3RoOyl7dmFyIGg9b1tjXSxpPWgucGFyZW50Tm9kZSxqPWQoaSksaz1oLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIil8fGguZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtpZighayYmZy5hdHRyaWJ1dGVOYW1lJiYoaz1oLmdldEF0dHJpYnV0ZShnLmF0dHJpYnV0ZU5hbWUpKSxqJiZrKXtpZihmKWlmKCFnLnZhbGlkYXRlfHxnLnZhbGlkYXRlKGssaixoKSl7aS5yZW1vdmVDaGlsZChoKTt2YXIgbD1rLnNwbGl0KFwiI1wiKSxxPWwuc2hpZnQoKSxyPWwuam9pbihcIiNcIik7aWYocS5sZW5ndGgpe3ZhciBzPW1bcV07c3x8KHM9bVtxXT1uZXcgWE1MSHR0cFJlcXVlc3Qscy5vcGVuKFwiR0VUXCIscSkscy5zZW5kKCkscy5fZW1iZWRzPVtdKSxzLl9lbWJlZHMucHVzaCh7cGFyZW50Omksc3ZnOmosaWQ6cn0pLGIocyl9ZWxzZSBhKGksaixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKSl9ZWxzZSsrYywrK3B9ZWxzZSsrY30oIW8ubGVuZ3RofHxvLmxlbmd0aC1wPjApJiZuKGUsNjcpfXZhciBmLGc9T2JqZWN0KGMpLGg9L1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8saT0vXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLGo9L1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8saz0vXFxiRWRnZVxcLy4oXFxkKylcXGIvLGw9d2luZG93LnRvcCE9PXdpbmRvdy5zZWxmO2Y9XCJwb2x5ZmlsbFwiaW4gZz9nLnBvbHlmaWxsOmgudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KXx8KG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goail8fFtdKVsxXTwxMDU0N3x8KG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goaSl8fFtdKVsxXTw1Mzd8fGsudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmbDt2YXIgbT17fSxuPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQsbz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSxwPTA7ZiYmZSgpfWZ1bmN0aW9uIGQoYSl7Zm9yKHZhciBiPWE7XCJzdmdcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmKGI9Yi5wYXJlbnROb2RlKTspO3JldHVybiBifXJldHVybiBjfSk7IiwibGV0IHBob25lTWFzayA9IElNYXNrKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lLWZvcm0nKSwge1xyXG4gICAgICBtYXNrOiAnKzAwMDAwMDAwMDAwMDAnLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIG1heDogMTVcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwaG9uZU1hc2tGb290ZXIgPSBJTWFzayhcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lLWZvb3RlcicpLCB7XHJcbiAgICAgICAgbWFzazogJyswMDAwMDAwMDAwMDAwJyxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAxNVxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICIsImNvbnN0IG1lbnVCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWJhci1idXJnZXInKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcblxyXG5tZW51QnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpXHJcblxyXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcclxubWVudUJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcclxubWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LXNtJylcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gIG1lbnVCdXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XHJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNtJyk7XHJcbn1cclxuXHJcbmxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0tbGluaycpLmZvckVhY2goYSA9PiBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xyXG4gIGxldCBpZCA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zbGljZSgxKVxyXG4gIHN3aXRjaCAoaWQpIHtcclxuICAgIGNhc2UgJ2Zvb3Rlcic6IGNsb3NlTWVudSgpOyBicmVhaztcclxuICAgIGNhc2UgJ2F1dGhvcic6IGNsb3NlTWVudSgpOyBicmVhaztcclxuICAgIGNhc2UgJ3RhcmlmJzogY2xvc2VNZW51KCk7IGJyZWFrO1xyXG4gICAgY2FzZSAncmV2aWV3cyc6IGNsb3NlTWVudSgpOyBicmVhaztcclxuICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICB9XHJcbn0pKVxyXG5cclxuLy8gc2V0dGluZ3MgYW5pbWF0aW9uc1xyXG5cclxud293ID0gbmV3IFdPVyhcclxuICAgIHtcclxuICAgIGJveENsYXNzOiAgICAgJ3dvdycsICAgICAgLy8gZGVmYXVsdFxyXG4gICAgYW5pbWF0ZUNsYXNzOiAnYW5pbWF0ZWQnLCAvLyBkZWZhdWx0XHJcbiAgICBvZmZzZXQ6ICAgICAgIDMwMCwgICAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgbW9iaWxlOiAgICAgICB0cnVlLCAgICAgICAvLyBkZWZhdWx0XHJcbiAgICBsaXZlOiAgICAgICAgIHRydWUgICAgICAgIC8vIGRlZmF1bHRcclxuICB9XHJcbiAgKVxyXG4gIHdvdy5pbml0KCk7XHJcblxyXG5cclxuXHJcbiIsImNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XHJcbmNvbnN0IGJ0bk1vZGFsT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJpZi13cmFwcGVyLWl0ZW0tYnRuJyk7XHJcbmNvbnN0IGJ0bk1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UtaWNvbicpO1xyXG5cclxuYnRuTW9kYWxPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcclxuYnRuTW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgZG9jdW1lbnQub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsV3JhcHBlciB8fCBlLnRhcmdldCA9PSBidG5Nb2RhbENsb3NlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtb2RhbFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG59IiwibGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTYwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMTgwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0pOyJdfQ==
