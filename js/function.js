/*!
 *
 * Evgeniy Ivanov - 2021
 * busforward@gmail.com
 * Skype: ivanov_ea
 *
 */


 /*!
 *
 * Evgeniy Ivanov - 2021
 * busforward@gmail.com
 * Skype: ivanov_ea
 *
 */

 var app = {
     pageScroll: '',
     lgWidth: 1200,
     mdWidth: 992,
     smWidth: 768,
     resized: false,
     iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
     touchDevice: function() { return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i); }
 };

 function isLgWidth() { return $(window).width() >= app.lgWidth; } // >= 1200
 function isMdWidth() { return $(window).width() >= app.mdWidth && $(window).width() < app.lgWidth; } //  >= 992 && < 1200
 function isSmWidth() { return $(window).width() >= app.smWidth && $(window).width() < app.mdWidth; } // >= 768 && < 992
 function isXsWidth() { return $(window).width() < app.smWidth; } // < 768
 function isIOS() { return app.iOS(); } // for iPhone iPad iPod
 function isTouch() { return app.touchDevice(); } // for touch device


 window.onload = () => {
     // Запрет "отскока" страницы при клике по пустой ссылке с href="#"
     document.querySelectorAll('[href="#"]').forEach((item, i) => {
         item.addEventListener('click', e => {
             e.preventDefault();
         });
     });

     // Inputmask.js
     // $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });
     // formSubmit();

     checkOnResize();
 };

 window.addEventListener('resize', () => {
     // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
     if (app.resized == screen.width) { return; }
     app.resized = screen.width;

     console.log('resize');

     checkOnResize();
 });

 function checkOnResize() {
 }

 // Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
 function stikyMenu() {
     const header = document.querySelector('.header');

     setNavbarPosition();

     window.addEventListener('scroll', () => {
         setNavbarPosition();
     });

     function setNavbarPosition() {

         if ( window.scrollY > header.clientTop + 150) {
             header.classList.add('stiky');
         } else if (window.scrollY < header.clientTop + 1) {
             header.classList.remove('stiky');
         }

     }
 }
 stikyMenu();

 function openMobileNav() {
     document.querySelector('.navbar__toggle').addEventListener('click', ev => {
         document.querySelector('.nav').classList.toggle('open');
         document.body.classList.toggle('navbar__open');
         ev.target.classList.toggle('active');
     });
 }
 openMobileNav();

 // Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
//  function srollToId() {
//      const el = document.querySelectorAll('[data-scroll-to]');
//      el.forEach((item, i) => {
//          item.addEventListener('click', e => {
//              console.log(e.target.href);
//              document.body.classList.remove('navbar__open');
//              document.querySelector('.nav').classList.remove('open');
//              document.querySelector('.navbar__toggle').classList.remove('active');
//          });
//      });
//  }
//  srollToId();

 // Проверка направления прокрутки вверх/вниз
//  function checkDirectionScroll() {
//      let tempScrollTop, currentScrollTop = 0;

//      window.addEventListener('scroll', () => {
//          currentScrollTop = window.scrollY;

//          if (tempScrollTop < currentScrollTop ) {
//              app.pageScroll = "down";
//          } else if (tempScrollTop > currentScrollTop ) {
//              app.pageScroll = "up";
//          }
//          tempScrollTop = currentScrollTop;
//      });
//  }
//  checkDirectionScroll();

// function toggleTabs() {
//     let toggle = $('[data-tab]');
//     toggle.on('click', (e) => {
//         let self = e.target;
//         $('[data-tab]').removeClass('active');
//         $(self).addClass('active');
//         $('[data-plate]').removeClass('active');
//         $('[data-plate='+self.dataset.tab+']').addClass('active');
//     });
// }
// toggleTabs();

// Видео youtube для страницы
// function uploadYoutubeVideo() {
//     if ($(".js-youtube")) {

//         $(".js-youtube").each(function () {
//             // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
//             $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

//             // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
//             $(this).append($('<img src="img/play.svg" alt="Play" class="video__play">'));

//         });

//         $('.video__play, .video__prev').on('click', function () {
//             // создаем iframe со включенной опцией autoplay
//             let wrapp = $(this).closest('.js-youtube'),
//                 videoId = wrapp.attr('id'),
//                 iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

//             if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

//             // Высота и ширина iframe должны быть такими же, как и у родительского блока
//             let iframe = $('<iframe/>', {
//                 'frameborder': '0',
//                 'src': iframe_url,
//                 'allow': "autoplay"
//             })

//             // Заменяем миниатюру HTML5 плеером с YouTube
//             $(this).closest('.video__wrapper').append(iframe);

//         });
//     }
// };


// Деление чисел на разряды Например из строки 10000 получаем 10 000
// Использование: thousandSeparator(1000) или используем переменную.
// function thousandSeparator(str) {
//     var parts = (str + '').split('.'),
//         main = parts[0],
//         len = main.length,
//         output = '',
//         i = len - 1;

//     while(i >= 0) {
//         output = main.charAt(i) + output;
//         if ((len - i) % 3 === 0 && i > 0) {
//             output = ' ' + output;
//         }
//         --i;
//     }

//     if (parts.length > 1) {
//         output += '.' + parts[1];
//     }
//     return output;
// };


// Хак для яндекс карт втавленных через iframe
// Страуктура:
//<div class="map__wrap" id="map-wrap">
//  <iframe style="pointer-events: none;" src="https://yandex.ru/map-widget/v1/-/CBqXzGXSOB" width="1083" height="707" frameborder="0" allowfullscreen="true"></iframe>
//</div>
// Обязательное свойство в style которое и переключет скрипт
// document.addEventListener('click', function(e) {
//     var map = document.querySelector('#map-wrap iframe')
//     if(e.target.id === 'map-wrap') {
//         map.style.pointerEvents = 'all'
//     } else {
//         map.style.pointerEvents = 'none'
//     }
// })

// Простая проверка форм на заполненность и отправка аяксом
// function formSubmit() {
//     document.querySelector('[type=submit]').addEventListener('click', e => {
//         e.preventDefault();
//
//         const form = e.target.closest('.form'),
//               url = form.action,
//               formData = new FormData(form),
//               fields = form.querySelectorAll('[required]');
//
//         let empty = 0;
//
//         console.log(formData);
//
//
//         fields.forEach((field) => {
//             if (field.value === "") {
//                 field.classList.add('invalid');
//                 empty++;
//             } else {
//                 field.classList.remove('invalid');
//                 field.classList.add('valid');
//             }
//         });
//
//         console.log(empty);
//
//         if (empty > 0) {
//             return false;
//         } else {
//             $.ajax({
//                 url: url,
//                 type: "POST",
//                 dataType: "html",
//                 data: formData,
//                 success: function (response) {
//                     // $('#success').modal('show');
//                     // console.log('success');
//                     console.log(response);
//                     // console.log(data);
//                     // document.location.href = "success.html";
//                 },
//                 error: function (response) {
//                     // $('#success').modal('show');
//                     // console.log('error');
//                     console.log(response);
//                 }
//             });
//         }
//
//     });
//
//     document.querySelectorAll('[required]').forEach(field => {
//         field.addEventListener('blur', (e) => {
//             if (e.target.value !== "") {
//                 e.target.classList.remove('invalid');
//             }
//         });
//     });
//
//     // document.querySelector('.form__privacy input').addEventListener('change', e => {
//     //     e.preventDefault();
//     //     const checkbox = e.target,
//     //           form = checkbox.closest('form'),
//     //           btn = form.querySelector('[type=submit]');
//     //
//     //     console.log(checkbox.checked);
//     //     if (checkbox.checked) {
//     //         btn.disabled = false;
//     //     } else {
//     //         btn.disabled = true;
//     //     }
//     //
//     // });
//
// }
// formSubmit();

// Проверка на возможность ввода только русских букв, цифр, тире и пробелов
// $('#u_l_name').on('keypress keyup', function () {
//     var that = this;
//
//     setTimeout(function () {
//         if (that.value.match(/[ -]/) && that.value.length == 1) {
//             that.value = '';
//         }
//
//         if (that.value.match(/-+/g)) {
//             that.value = that.value.replace(/-+/g, '-');
//         }
//
//         if (that.value.match(/ +/g)) {
//             that.value = that.value.replace(/ +/g, ' ');
//         }
//
//         var res = /[^а-яА-Я -]/g.exec(that.value);
//
//         if (res) {
//             removeErrorMsg('#u_l_name');
//             $('#u_l_name').after('<div class="j-required-error b-check__errors">Измените язык ввода на русский</div>');
//         }
//         else {
//             removeErrorMsg('#u_l_name');
//         }
//
//         that.value = that.value.replace(res, '');
//     }, 0);
// });

// Добавление класса при прокрутке
// function onVisible(selector, callback, repeat = false) {
//
//     let options = {threshold: [0.5] };
//     let observer = new IntersectionObserver(onEntry, options);
//     let elements = document.querySelectorAll(selector);
//
//     for (let elm of elements) {
//         observer.observe(elm);
//     }
//
//     function onEntry(entry) {
//         entry.forEach(change => {
//             let elem = change.target;
//             // console.log(change);
//             // console.log(elem.innerHTML);
//             if (change.isIntersecting) {
//                 if (!elem.classList.contains('show') || repeat) {
//                     elem.classList.add('show');
//                     callback(elem);
//                 }
//             }
//         });
//     }
//
// }
//
// onVisible('.programsInfo__number',  function(e) {
//     animateNumber(e, e.innerHTML);
// }, true);
//
// // Анимация чисел
// function animateNumber(elem, final, duration = 1000) {
//     let start = 0;
//     // console.log('init');
//     setInterval(function () {
//         if (final > start) {
//             elem.innerHTML = start++;
//         }
//     }, duration / final);
// }

document.addEventListener('DOMContentLoaded', () => {

    // Выпадайка при клике
    function drop() {
        let triggers = document.querySelectorAll('.js-dropTrigger'),
            closes = document.querySelectorAll('.js-dropClose');
        for (let i = 0; i < triggers.length; i++) {
            let trigger = triggers[i];
            trigger.addEventListener('click', () => {
                let drop = document.getElementById(trigger.getAttribute('data-drop'));
                if (!trigger.classList.contains('active')) {
                    trigger.classList.add('active');
                    drop.classList.add('open');
                } else {
                    trigger.classList.remove('active');
                    drop.classList.remove('open');
                }
                document.addEventListener('click', (e) => {
                    if (!trigger.contains(e.target)
                        && !drop.contains(e.target)) {
                        trigger.classList.remove('active');
                        drop.classList.remove('open');
                    }
                });
            })
        }
        for (let i = 0; i < closes.length; i++) {
            let close = closes[i];
            close.addEventListener('click', () => {
                let drop = document.getElementById(close.getAttribute('data-drop')),
                    trigger = document.querySelector('[data-drop=' + close.getAttribute('data-drop') + ']');
                drop.classList.remove('open');
                trigger.classList.remove('active');
            })
        }
    }
    drop();

    // Swiper slider
    const sliderAdvantages = new Swiper('#sliderAdvantages', {
        autoHeight: true,
        navigation: {
            prevEl: '.advantages__arrow--prev',
            nextEl: '.advantages__arrow--next',
        },
    });   

    // Modal
    function modal() {
        let btn = document.querySelectorAll('.js-modal-btn'),
            close = document.querySelectorAll('.js-modal-close'),
            body = document.querySelector('body'),
            modals = document.querySelectorAll('.modal');
        btn.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                let modalId = this.getAttribute('data-modal'),
                    modal = document.querySelector('.modal[data-modal="' + modalId + '"]');
                modalOpen(modal);
            })
        })
        close.forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                let modal = this.closest('.modal');
                modalClose(modal);
            })
        })
        modals.forEach(function (item) {
            item.addEventListener('click', function (e) {
                let block = this.querySelector('.modal__block');
                if (!block.contains(e.target)) {
                    modalClose(this);
                }
            })
        })
        function modalOpen(modalEl) {
            modalEl.classList.add('open');
            body.classList.add('navbar__open');
        }
        function modalClose(modalEl) {
            modalEl.classList.remove('open');
            body.classList.remove('navbar__open');
        }
    }
    modal();

    // Accordion
    function accordion() {
        document.querySelectorAll('.accordion').forEach(function (accordion) {
            let triggerAll = accordion.querySelectorAll('.accordion__trigger'),
                bodyAll = accordion.querySelectorAll('.accordion__body');
                triggerAll.forEach(function (triggerItem) {
                    triggerItem.addEventListener('click', function (e) {
                        e.preventDefault();
                        let bodyData = this.getAttribute('data-trigger'),
                            body = accordion.querySelector('.accordion__body[data-body="' + bodyData + '"]');
                        if (!this.classList.contains('active')) {
                            triggerAll.forEach(function (triggerItem) {
                                triggerItem.classList.remove('active');
                            })
                            bodyAll.forEach(function (bodyItem) {
                                bodyItem.style.maxHeight = 0;
                            })
                            this.classList.add('active');
                            body.style.maxHeight = body.scrollHeight + 'px';
                        } else {
                            this.classList.remove('active');
                            body.style.maxHeight = 0;
                        }
                    })
                })
        })
    }
    accordion();

    // Ограничение кол-ва символов текста
    function textClip(block, count, heightFixed, btnTextAfter = 'Свернуть') {
        let elementClip = document.querySelectorAll(block);
        elementClip.forEach(element => {
            let inner = element.querySelector('.advantages__inner'),
                textBlock = element.querySelector('.js-text-clip__block'),
                btn = element.querySelector('.js-text-clip__more'),
                thisText = textBlock.innerText,
                btnTextBefore = btn.innerText;
            textBlock.innerText = textBlock.innerText.slice(0, count) + '...';
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                if (!this.classList.contains('active')) {
                    if (heightFixed) {
                        element.setAttribute('style', 'height:' + (element.clientHeight/16) + 'em;');
                        element.style.zIndex = 5;
                        inner.style.position = 'absolute';
                    }
                    textBlock.innerText = thisText;
                    btn.innerText = btnTextAfter;
                    this.classList.add('active');
                }else {
                    if (heightFixed) {
                        element.setAttribute('style', 'height: auto;');
                        element.style.zIndex = 1;
                        inner.style.position = 'static';
                    }
                    textBlock.innerText = textBlock.innerText.slice(0, count) + '...';
                    btn.innerText = btnTextBefore;
                    this.classList.remove('active');
                }
                if (document.querySelector('#sliderAdvantages')) {
                    sliderAdvantages.updateAutoHeight(300);
                }
            })
        });
    }
    textClip('.js-text-clip', 620, false, 'Свернуть');
    textClip('.js-text-clip-fixed', 620, true, 'Свернуть');

})