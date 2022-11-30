(self["webpackChunk"] = self["webpackChunk"] || []).push([["vuexy_app_menu"],{

/***/ "./assets/js/vuexy/js/core/app-menu.js":
/*!*********************************************!*\
  !*** ./assets/js/vuexy/js/core/app-menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

/*=========================================================================================
  File Name: app-menu.js
  Description: Menu navigation, custom scrollbar, hover scroll bar, multilevel menu
  initialization and manipulations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
  $.app = $.app || {};
  var $body = $('body');
  var $window = $(window);
  var menuWrapper_el = $('div[data-menu="menu-wrapper"]').html();
  var menuWrapperClasses = $('div[data-menu="menu-wrapper"]').attr('class'); // Main menu

  $.app.menu = {
    expanded: null,
    collapsed: null,
    hidden: null,
    container: null,
    horizontalMenu: false,
    is_touch_device: function is_touch_device() {
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

      var mq = function mq(query) {
        return window.matchMedia(query).matches;
      };

      if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
      } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH


      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      return mq(query);
    },
    manualScroller: {
      obj: null,
      init: function init() {
        var scroll_theme = $('.main-menu').hasClass('menu-dark') ? 'light' : 'dark';

        if (!$.app.menu.is_touch_device()) {
          this.obj = new PerfectScrollbar('.main-menu-content', {
            suppressScrollX: true,
            wheelPropagation: false
          });
        } else {
          $('.main-menu').addClass('menu-native-scroll');
        }
      },
      update: function update() {
        // if (this.obj) {
        // Scroll to currently active menu on page load if data-scroll-to-active is true
        if ($('.main-menu').data('scroll-to-active') === true) {
          var activeEl, menu, activeElHeight;
          activeEl = document.querySelector('.main-menu-content li.active');
          menu = document.querySelector('.main-menu-content');

          if ($body.hasClass('menu-collapsed')) {
            if ($('.main-menu-content li.sidebar-group-active').length) {
              activeEl = document.querySelector('.main-menu-content li.sidebar-group-active');
            }
          }

          if (activeEl) {
            activeElHeight = activeEl.getBoundingClientRect().top + menu.scrollTop;
          } // If active element's top position is less than 2/3 (66%) of menu height than do not scroll


          if (activeElHeight > parseInt(menu.clientHeight * 2 / 3)) {
            var start = menu.scrollTop,
                change = activeElHeight - start - parseInt(menu.clientHeight / 2);
          }

          setTimeout(function () {
            $.app.menu.container.stop().animate({
              scrollTop: change
            }, 300);
            $('.main-menu').data('scroll-to-active', 'false');
          }, 300);
        } // this.obj.update();
        // }

      },
      enable: function enable() {
        if (!$('.main-menu-content').hasClass('ps')) {
          this.init();
        }
      },
      disable: function disable() {
        if (this.obj) {
          this.obj.destroy();
        }
      },
      updateHeight: function updateHeight() {
        if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern' || $body.data('menu') == 'vertical-overlay-menu') && $('.main-menu').hasClass('menu-fixed')) {
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight());
          this.update();
        }
      }
    },
    init: function init(compactMenu) {
      if ($('.main-menu-content').length > 0) {
        this.container = $('.main-menu-content');
        var menuObj = this;
        this.change(compactMenu);
      }
    },
    change: function change(compactMenu) {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      this.reset();
      var menuType = $body.data('menu');

      if (currentBreakpoint) {
        switch (currentBreakpoint.name) {
          case 'xl':
            if (menuType === 'vertical-overlay-menu') {
              this.hide();
            } else {
              if (compactMenu === true) this.collapse(compactMenu);else this.expand();
            }

            break;

          case 'lg':
            if (menuType === 'vertical-overlay-menu' || menuType === 'vertical-menu-modern' || menuType === 'horizontal-menu') {
              this.hide();
            } else {
              this.collapse();
            }

            break;

          case 'md':
          case 'sm':
            this.hide();
            break;

          case 'xs':
            this.hide();
            break;
        }
      } // On the small and extra small screen make them overlay menu


      if (menuType === 'vertical-menu' || menuType === 'vertical-menu-modern') {
        this.toOverlayMenu(currentBreakpoint.name, menuType);
      }

      if ($body.is('.horizontal-layout') && !$body.hasClass('.horizontal-menu-demo')) {
        this.changeMenu(currentBreakpoint.name);
        $('.menu-toggle').removeClass('is-active');
      } // Dropdown submenu on large screen on hover For Large screen only
      // ---------------------------------------------------------------


      if (currentBreakpoint.name == 'xl') {
        $('body[data-open="hover"] .main-menu-content .dropdown') // Use selector $('body[data-open="hover"] .header-navbar .dropdown') for menu and navbar DD open on hover
        .on('mouseenter', function () {
          if (!$(this).hasClass('show')) {
            $(this).addClass('show');
          } else {
            $(this).removeClass('show');
          }
        }).on('mouseleave', function (event) {
          $(this).removeClass('show');
        });
        /* ? Uncomment to enable all DD open on hover
        $('body[data-open="hover"] .dropdown a').on('click', function (e) {
          if (menuType == 'horizontal-menu') {
            var $this = $(this);
            if ($this.hasClass('dropdown-toggle')) {
              return false;
            }
          }
        });
        */
      } // Added data attribute brand-center for navbar-brand-center


      if (currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs') {
        $('.header-navbar[data-nav=brand-center]').removeClass('navbar-brand-center');
      } else {
        $('.header-navbar[data-nav=brand-center]').addClass('navbar-brand-center');
      } // On screen width change, current active menu in horizontal


      if (currentBreakpoint.name == 'xl' && menuType == 'horizontal-menu') {
        $('.main-menu-content').find('li.active').parents('li').addClass('sidebar-group-active active');
      }

      if (currentBreakpoint.name !== 'xl' && menuType == 'horizontal-menu') {
        $('#navbar-type').toggleClass('d-none d-xl-block');
      } // Dropdown submenu on small screen on click
      // --------------------------------------------------


      $('ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function (event) {
        if ($(this).siblings('ul.dropdown-menu').length > 0) {
          event.preventDefault();
        }

        event.stopPropagation();
        $(this).parent().siblings().removeClass('show');
        $(this).parent().toggleClass('show');
      }); // Horizontal layout submenu drawer scrollbar

      if (menuType == 'horizontal-menu') {
        $('li.dropdown-submenu').on('mouseenter', function () {
          if (!$(this).parent('.dropdown').hasClass('show')) {
            $(this).removeClass('openLeft');
          }

          var dd = $(this).find('.dropdown-menu');

          if (dd) {
            var pageHeight = $(window).height(),
                // ddTop = dd.offset().top,
            ddTop = $(this).position().top,
                ddLeft = dd.offset().left,
                ddWidth = dd.width(),
                ddHeight = dd.height();

            if (pageHeight - ddTop - ddHeight - 28 < 1) {
              var maxHeight = pageHeight - ddTop - 170;
              $(this).find('.dropdown-menu').css({
                'max-height': maxHeight + 'px',
                'overflow-y': 'auto',
                'overflow-x': 'hidden'
              });
              var menu_content = new PerfectScrollbar('li.dropdown-submenu.show .dropdown-menu', {
                wheelPropagation: false
              });
            } // Add class to horizontal sub menu if screen width is small


            if (ddLeft + ddWidth - (window.innerWidth - 16) >= 0) {
              $(this).addClass('openLeft');
            }
          }
        });
        $('.theme-layouts').find('.semi-dark').hide();
      } // Horizontal Fixed Nav Sticky hight issue on small screens
      // if (menuType == 'horizontal-menu') {
      //   if (currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs') {
      //     if ($(".menu-fixed").length) {
      //       $(".menu-fixed").unstick();
      //     }
      //   }
      //   else {
      //     if ($(".navbar-fixed").length) {
      //       $(".navbar-fixed").sticky();
      //     }
      //   }
      // }

    },
    transit: function transit(callback1, callback2) {
      var menuObj = this;
      $body.addClass('changing-menu');
      callback1.call(menuObj);

      if ($body.hasClass('vertical-layout')) {
        if ($body.hasClass('menu-open') || $body.hasClass('menu-expanded')) {
          $('.menu-toggle').addClass('is-active'); // Show menu header search when menu is normally visible

          if ($body.data('menu') === 'vertical-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').show();
            }
          }
        } else {
          $('.menu-toggle').removeClass('is-active'); // Hide menu header search when only menu icons are visible

          if ($body.data('menu') === 'vertical-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').hide();
            }
          }
        }
      }

      setTimeout(function () {
        callback2.call(menuObj);
        $body.removeClass('changing-menu');
        menuObj.update();
      }, 500);
    },
    open: function open() {
      this.transit(function () {
        $body.removeClass('menu-hide menu-collapsed').addClass('menu-open');
        this.hidden = false;
        this.expanded = true;

        if ($body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').addClass('show'); // $('.sidenav-overlay').removeClass('d-none').addClass('d-block');
          // $('body').css('overflow', 'hidden');
        }
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight()); // this.manualScroller.update();
        }

        if (!$body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('show'); // $('.sidenav-overlay').removeClass('d-block d-none');
          // $('body').css('overflow', 'auto');
        }
      });
    },
    hide: function hide() {
      this.transit(function () {
        $body.removeClass('menu-open menu-expanded').addClass('menu-hide');
        this.hidden = true;
        this.expanded = false;

        if ($body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('show'); // $('.sidenav-overlay').removeClass('d-block').addClass('d-none');
          // $('body').css('overflow', 'auto');
        }
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
        }

        if (!$body.hasClass('vertical-overlay-menu')) {
          $('.sidenav-overlay').removeClass('show'); // $('.sidenav-overlay').removeClass('d-block d-none');
          // $('body').css('overflow', 'auto');
        }
      });
    },
    expand: function expand() {
      if (this.expanded === false) {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.modern-nav-toggle').find('.collapse-toggle-icon').replaceWith(feather.icons['disc'].toSvg({
            "class": 'd-none d-xl-block collapse-toggle-icon primary font-medium-4'
          }));
        }

        this.transit(function () {
          $body.removeClass('menu-collapsed').addClass('menu-expanded');
          this.collapsed = false;
          this.expanded = true;
          $('.sidenav-overlay').removeClass('show'); // $('.sidenav-overlay').removeClass('d-block d-none');
        }, function () {
          if ($('.main-menu').hasClass('menu-native-scroll') || $body.data('menu') == 'horizontal-menu') {
            this.manualScroller.disable();
          } else {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }

          if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight()); // this.manualScroller.update();
          }
        });
      }
    },
    collapse: function collapse() {
      if (this.collapsed === false) {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.modern-nav-toggle').find('.collapse-toggle-icon').replaceWith(feather.icons['circle'].toSvg({
            "class": 'd-none d-xl-block collapse-toggle-icon primary font-medium-4'
          }));
        }

        this.transit(function () {
          $body.removeClass('menu-expanded').addClass('menu-collapsed');
          this.collapsed = true;
          this.expanded = false;
          $('.content-overlay').removeClass('d-block d-none');
        }, function () {
          if ($body.data('menu') == 'horizontal-menu' && $body.hasClass('vertical-overlay-menu')) {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }

          if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height()); // this.manualScroller.update();
          }

          if ($body.data('menu') == 'vertical-menu-modern') {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }
        });
      }
    },
    toOverlayMenu: function toOverlayMenu(screen, menuType) {
      var menu = $body.data('menu');

      if (menuType == 'vertical-menu-modern') {
        if (screen == 'lg' || screen == 'md' || screen == 'sm' || screen == 'xs') {
          if ($body.hasClass(menu)) {
            $body.removeClass(menu).addClass('vertical-overlay-menu');
          }
        } else {
          if ($body.hasClass('vertical-overlay-menu')) {
            $body.removeClass('vertical-overlay-menu').addClass(menu);
          }
        }
      } else {
        if (screen == 'sm' || screen == 'xs') {
          if ($body.hasClass(menu)) {
            $body.removeClass(menu).addClass('vertical-overlay-menu');
          }
        } else {
          if ($body.hasClass('vertical-overlay-menu')) {
            $body.removeClass('vertical-overlay-menu').addClass(menu);
          }
        }
      }
    },
    changeMenu: function changeMenu(screen) {
      // Replace menu html
      $('div[data-menu="menu-wrapper"]').html('');
      $('div[data-menu="menu-wrapper"]').html(menuWrapper_el);
      var menuWrapper = $('div[data-menu="menu-wrapper"]'),
          menuContainer = $('div[data-menu="menu-container"]'),
          menuNavigation = $('ul[data-menu="menu-navigation"]'),

      /*megaMenu           = $('li[data-menu="megamenu"]'),
      megaMenuCol        = $('li[data-mega-col]'),*/
      dropdownMenu = $('li[data-menu="dropdown"]'),
          dropdownSubMenu = $('li[data-menu="dropdown-submenu"]');

      if (screen === 'xl') {
        // Change body classes
        $body.removeClass('vertical-layout vertical-overlay-menu fixed-navbar').addClass($body.data('menu')); // Remove navbar-fix-top class on large screens

        $('nav.header-navbar').removeClass('fixed-top'); // Change menu wrapper, menu container, menu navigation classes

        menuWrapper.removeClass().addClass(menuWrapperClasses);
        $('a.dropdown-item.nav-has-children').on('click', function () {
          event.preventDefault();
          event.stopPropagation();
        });
        $('a.dropdown-item.nav-has-parent').on('click', function () {
          event.preventDefault();
          event.stopPropagation();
        });
      } else {
        // Change body classes
        $body.removeClass($body.data('menu')).addClass('vertical-layout vertical-overlay-menu fixed-navbar'); // Add navbar-fix-top class on small screens

        $('nav.header-navbar').addClass('fixed-top'); // Change menu wrapper, menu container, menu navigation classes

        menuWrapper.removeClass().addClass('main-menu menu-light menu-fixed menu-shadow'); // menuContainer.removeClass().addClass('main-menu-content');

        menuNavigation.removeClass().addClass('navigation navigation-main'); // If Dropdown Menu

        dropdownMenu.removeClass('dropdown').addClass('has-sub');
        dropdownMenu.find('a').removeClass('dropdown-toggle nav-link');
        dropdownMenu.find('a').attr('data-bs-toggle', '');
        dropdownMenu.children('ul').find('a').removeClass('dropdown-item');
        dropdownMenu.find('ul').removeClass('dropdown-menu');
        dropdownSubMenu.removeClass().addClass('has-sub');
        $.app.nav.init(); // Dropdown submenu on small screen on click
        // --------------------------------------------------

        $('ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).parent().siblings().removeClass('open');
          $(this).parent().toggleClass('open');
        });
        $('.main-menu-content').find('li.active').parents('li').addClass('sidebar-group-active');
        $('.main-menu-content').find('li.active').closest('li.nav-item').addClass('open');
      }

      if (feather) {
        feather.replace({
          width: 14,
          height: 14
        });
      }
    },
    toggle: function toggle() {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      var collapsed = this.collapsed;
      var expanded = this.expanded;
      var hidden = this.hidden;
      var menu = $body.data('menu');

      switch (currentBreakpoint.name) {
        case 'xl':
          if (expanded === true) {
            if (menu == 'vertical-overlay-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-overlay-menu') {
              this.open();
            } else {
              this.expand();
            }
          }

          break;

        case 'lg':
          if (expanded === true) {
            if (menu == 'vertical-overlay-menu' || menu == 'vertical-menu-modern' || menu == 'horizontal-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-overlay-menu' || menu == 'vertical-menu-modern' || menu == 'horizontal-menu') {
              this.open();
            } else {
              this.expand();
            }
          }

          break;

        case 'md':
        case 'sm':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }

          break;

        case 'xs':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }

          break;
      }
    },
    update: function update() {
      this.manualScroller.update();
    },
    reset: function reset() {
      this.expanded = false;
      this.collapsed = false;
      this.hidden = false;
      $body.removeClass('menu-hide menu-open menu-collapsed menu-expanded');
    }
  }; // Navigation Menu

  $.app.nav = {
    container: $('.navigation-main'),
    initialized: false,
    navItem: $('.navigation-main').find('li').not('.navigation-category'),
    TRANSITION_EVENTS: ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd'],
    TRANSITION_PROPERTIES: ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition'],
    config: {
      speed: 300
    },
    init: function init(config) {
      this.initialized = true; // Set to true when initialized

      $.extend(this.config, config);
      this.bind_events();
    },
    bind_events: function bind_events() {
      var menuObj = this;
      $('.navigation-main').on('mouseenter.app.menu', 'li', function () {
        var $this = $(this); // $('.hover', '.navigation-main').removeClass('hover');

        if ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove(); // Title

          var menuTitle = $this.find('span.menu-title').clone(),
              tempTitle,
              tempLink;

          if (!$this.hasClass('has-sub')) {
            tempTitle = $this.find('span.menu-title').text();
            tempLink = $this.children('a').attr('href');

            if (tempTitle !== '') {
              menuTitle = $('<a>');
              menuTitle.attr('href', tempLink);
              menuTitle.attr('title', tempTitle);
              menuTitle.text(tempTitle);
              menuTitle.addClass('menu-title');
            }
          } // menu_header_height = ($('.main-menu-header').length) ? $('.main-menu-header').height() : 0,
          // fromTop = menu_header_height + $this.position().top + parseInt($this.css( "border-top" ),10);


          var fromTop;

          if ($this.css('border-top')) {
            fromTop = $this.position().top + parseInt($this.css('border-top'), 10);
          } else {
            fromTop = $this.position().top;
          }

          if ($body.data('menu') !== 'vertical-compact-menu') {
            menuTitle.appendTo('.main-menu-content').css({
              position: 'fixed',
              top: fromTop
            });
          } // Content

          /* if ($this.hasClass('has-sub') && $this.hasClass('nav-item')) {
            var menuContent = $this.children('ul:first');
            menuObj.adjustSubmenu($this);
          } */

        } // $this.addClass('hover');

      }).on('mouseleave.app.menu', 'li', function () {// $(this).removeClass('hover');
      }).on('active.app.menu', 'li', function (e) {
        $(this).addClass('active');
        e.stopPropagation();
      }).on('deactive.app.menu', 'li.active', function (e) {
        $(this).removeClass('active');
        e.stopPropagation();
      }).on('open.app.menu', 'li', function (e) {
        var $listItem = $(this);
        menuObj.expand($listItem); // $listItem.addClass('open');
        // If menu collapsible then do not take any action

        if ($('.main-menu').hasClass('menu-collapsible')) {
          return false;
        } // If menu accordion then close all except clicked once
        else {
          $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
          $listItem.siblings('.open').trigger('close.app.menu');
        }

        e.stopPropagation();
      }).on('close.app.menu', 'li.open', function (e) {
        var $listItem = $(this);
        menuObj.collapse($listItem); // $listItem.removeClass('open');

        e.stopPropagation();
      }).on('click.app.menu', 'li', function (e) {
        var $listItem = $(this);

        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') {
            e.preventDefault();
          } else {
            if ($listItem.has('ul').length) {
              if ($listItem.is('.open')) {
                $listItem.trigger('close.app.menu');
              } else {
                $listItem.trigger('open.app.menu');
              }
            } else {
              if (!$listItem.is('.active')) {
                $listItem.siblings('.active').trigger('deactive.app.menu');
                $listItem.trigger('active.app.menu');
              }
            }
          }
        }

        e.stopPropagation();
      });
      $('.navbar-header, .main-menu').on('mouseenter', modernMenuExpand).on('mouseleave', modernMenuCollapse);

      function modernMenuExpand() {
        if ($body.data('menu') == 'vertical-menu-modern') {
          $('.main-menu, .navbar-header').addClass('expanded');

          if ($body.hasClass('menu-collapsed')) {
            if ($('.main-menu li.open').length === 0) {
              $('.main-menu-content').find('li.active').parents('li').addClass('open');
            }

            var $listItem = $('.main-menu li.menu-collapsed-open'),
                $subList = $listItem.children('ul');
            $subList.hide().slideDown(200, function () {
              $(this).css('display', '');
            });
            $listItem.addClass('open').removeClass('menu-collapsed-open'); // $.app.menu.changeLogo('expand');
          }
        }
      }

      function modernMenuCollapse() {
        if ($body.hasClass('menu-collapsed') && $body.data('menu') == 'vertical-menu-modern') {
          setTimeout(function () {
            if ($('.main-menu:hover').length === 0 && $('.navbar-header:hover').length === 0) {
              $('.main-menu, .navbar-header').removeClass('expanded');

              if ($body.hasClass('menu-collapsed')) {
                var $listItem = $('.main-menu li.open'),
                    $subList = $listItem.children('ul');
                $listItem.addClass('menu-collapsed-open');
                $subList.show().slideUp(200, function () {
                  $(this).css('display', '');
                });
                $listItem.removeClass('open'); // $.app.menu.changeLogo();
              }
            }
          }, 1);
        }
      }

      $('.main-menu-content').on('mouseleave', function () {
        if ($body.hasClass('menu-collapsed')) {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();
        }

        $('.hover', '.navigation-main').removeClass('hover');
      }); // If list item has sub menu items then prevent redirection.

      $('.navigation-main li.has-sub > a').on('click', function (e) {
        e.preventDefault();
      });
    },

    /**
     * Ensure an admin submenu is within the visual viewport.
     * @param {jQuery} $menuItem The parent menu item containing the submenu.
     */

    /* adjustSubmenu: function ($menuItem) {
      var menuHeaderHeight,
        menutop,
        topPos,
        winHeight,
        bottomOffset,
        subMenuHeight,
        popOutMenuHeight,
        borderWidth,
        scroll_theme,
        $submenu = $menuItem.children('ul:first'),
        ul = $submenu.clone(true);
        menuHeaderHeight = $('.main-menu-header').height();
      menutop = $menuItem.position().top;
      winHeight = $window.height() - $('.header-navbar').height();
      borderWidth = 0;
      subMenuHeight = $submenu.height();
        if (parseInt($menuItem.css('border-top'), 10) > 0) {
        borderWidth = parseInt($menuItem.css('border-top'), 10);
      }
        popOutMenuHeight = winHeight - menutop - $menuItem.height() - 30;
      scroll_theme = $('.main-menu').hasClass('menu-dark') ? 'light' : 'dark';
        topPos = menutop + $menuItem.height() + borderWidth;
        ul.addClass('menu-popout').appendTo('.main-menu-content').css({
        top: topPos,
        position: 'fixed',
        'max-height': popOutMenuHeight
      });
        var menu_content = new PerfectScrollbar('.main-menu-content > ul.menu-content', {
        wheelPropagation: false
      });
    }, */
    // Collapse Submenu With Transition (Height animation)
    collapse: function collapse($listItem, callback) {
      var subList = $listItem.children('ul'),
          toggleLink = $listItem.children().first(),
          linkHeight = $(toggleLink).outerHeight();
      $listItem.css({
        height: linkHeight + subList.outerHeight() + 'px',
        overflow: 'hidden'
      });
      $listItem.addClass('menu-item-animating');
      $listItem.addClass('menu-item-closing');

      $.app.nav._bindAnimationEndEvent($listItem, function () {
        $listItem.removeClass('open');

        $.app.nav._clearItemStyle($listItem);
      });

      setTimeout(function () {
        $listItem.css({
          height: linkHeight + 'px'
        });
      }, 50);
    },
    // Expand Submenu With Transition (Height animation)
    expand: function expand($listItem, callback) {
      var subList = $listItem.children('ul'),
          toggleLink = $listItem.children().first(),
          linkHeight = $(toggleLink).outerHeight();
      $listItem.addClass('menu-item-animating');
      $listItem.css({
        overflow: 'hidden',
        height: linkHeight + 'px'
      });
      $listItem.addClass('open');

      $.app.nav._bindAnimationEndEvent($listItem, function () {
        $.app.nav._clearItemStyle($listItem);
      });

      setTimeout(function () {
        $listItem.css({
          height: linkHeight + subList.outerHeight() + 'px'
        });
      }, 50);
    },
    _bindAnimationEndEvent: function _bindAnimationEndEvent(el, handler) {
      el = el[0];

      var cb = function cb(e) {
        if (e.target !== el) return;

        $.app.nav._unbindAnimationEndEvent(el);

        handler(e);
      };

      var duration = window.getComputedStyle(el).transitionDuration;
      duration = parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);
      el._menuAnimationEndEventCb = cb;
      $.app.nav.TRANSITION_EVENTS.forEach(function (ev) {
        el.addEventListener(ev, el._menuAnimationEndEventCb, false);
      });
      el._menuAnimationEndEventTimeout = setTimeout(function () {
        cb({
          target: el
        });
      }, duration + 50);
    },
    _unbindAnimationEndEvent: function _unbindAnimationEndEvent(el) {
      var cb = el._menuAnimationEndEventCb;

      if (el._menuAnimationEndEventTimeout) {
        clearTimeout(el._menuAnimationEndEventTimeout);
        el._menuAnimationEndEventTimeout = null;
      }

      if (!cb) return;
      $.app.nav.TRANSITION_EVENTS.forEach(function (ev) {
        el.removeEventListener(ev, cb, false);
      });
      el._menuAnimationEndEventCb = null;
    },
    _clearItemStyle: function _clearItemStyle($listItem) {
      $listItem.removeClass('menu-item-animating');
      $listItem.removeClass('menu-item-closing');
      $listItem.css({
        overflow: '',
        height: ''
      });
    },
    refresh: function refresh() {
      $.app.nav.container.find('.open').removeClass('open');
    }
  }; // On href=# click page refresh issue resolve
  //? User should remove this code for their project to enable # click

  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });
})(window, document, jQuery); // We listen to the resize event


window.addEventListener('resize', function () {
  // We execute the same script as before
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-7d93ee","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_par-06157e","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_validate-2e331c"], () => (__webpack_exec__("./assets/js/vuexy/js/core/app-menu.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIEZpbGUgTmFtZTogYXBwLW1lbnUuanNcclxuICBEZXNjcmlwdGlvbjogTWVudSBuYXZpZ2F0aW9uLCBjdXN0b20gc2Nyb2xsYmFyLCBob3ZlciBzY3JvbGwgYmFyLCBtdWx0aWxldmVsIG1lbnVcclxuICBpbml0aWFsaXphdGlvbiBhbmQgbWFuaXB1bGF0aW9uc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBJdGVtIE5hbWU6IFZ1ZXh5ICAtIFZ1ZWpzLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuICBBdXRob3I6IFBpeGludmVudFxyXG4gIEF1dGhvciBVUkw6IGhodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsICQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgdmggKyAncHgnKTtcclxuXHJcbiAgJC5hcHAgPSAkLmFwcCB8fCB7fTtcclxuXHJcbiAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG4gIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gIHZhciBtZW51V3JhcHBlcl9lbCA9ICQoJ2RpdltkYXRhLW1lbnU9XCJtZW51LXdyYXBwZXJcIl0nKS5odG1sKCk7XHJcbiAgdmFyIG1lbnVXcmFwcGVyQ2xhc3NlcyA9ICQoJ2RpdltkYXRhLW1lbnU9XCJtZW51LXdyYXBwZXJcIl0nKS5hdHRyKCdjbGFzcycpO1xyXG5cclxuICAvLyBNYWluIG1lbnVcclxuICAkLmFwcC5tZW51ID0ge1xyXG4gICAgZXhwYW5kZWQ6IG51bGwsXHJcbiAgICBjb2xsYXBzZWQ6IG51bGwsXHJcbiAgICBoaWRkZW46IG51bGwsXHJcbiAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICBob3Jpem9udGFsTWVudTogZmFsc2UsXHJcblxyXG4gICAgaXNfdG91Y2hfZGV2aWNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpO1xyXG4gICAgICB2YXIgbXEgPSBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XHJcbiAgICAgIH07XHJcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpbmNsdWRlIHRoZSAnaGVhcnR6JyBhcyBhIHdheSB0byBoYXZlIGEgbm9uIG1hdGNoaW5nIE1RIHRvIGhlbHAgdGVybWluYXRlIHRoZSBqb2luXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0LmlvL3Z6bkZIXHJcbiAgICAgIHZhciBxdWVyeSA9IFsnKCcsIHByZWZpeGVzLmpvaW4oJ3RvdWNoLWVuYWJsZWQpLCgnKSwgJ2hlYXJ0eicsICcpJ10uam9pbignJyk7XHJcbiAgICAgIHJldHVybiBtcShxdWVyeSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG1hbnVhbFNjcm9sbGVyOiB7XHJcbiAgICAgIG9iajogbnVsbCxcclxuXHJcbiAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2Nyb2xsX3RoZW1lID0gJCgnLm1haW4tbWVudScpLmhhc0NsYXNzKCdtZW51LWRhcmsnKSA/ICdsaWdodCcgOiAnZGFyayc7XHJcbiAgICAgICAgaWYgKCEkLmFwcC5tZW51LmlzX3RvdWNoX2RldmljZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLm9iaiA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcubWFpbi1tZW51LWNvbnRlbnQnLCB7XHJcbiAgICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKCcubWFpbi1tZW51JykuYWRkQ2xhc3MoJ21lbnUtbmF0aXZlLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm9iaikge1xyXG4gICAgICAgIC8vIFNjcm9sbCB0byBjdXJyZW50bHkgYWN0aXZlIG1lbnUgb24gcGFnZSBsb2FkIGlmIGRhdGEtc2Nyb2xsLXRvLWFjdGl2ZSBpcyB0cnVlXHJcbiAgICAgICAgaWYgKCQoJy5tYWluLW1lbnUnKS5kYXRhKCdzY3JvbGwtdG8tYWN0aXZlJykgPT09IHRydWUpIHtcclxuICAgICAgICAgIHZhciBhY3RpdmVFbCwgbWVudSwgYWN0aXZlRWxIZWlnaHQ7XHJcbiAgICAgICAgICBhY3RpdmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUtY29udGVudCBsaS5hY3RpdmUnKTtcclxuICAgICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWNvbnRlbnQnKTtcclxuICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnbWVudS1jb2xsYXBzZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLm1haW4tbWVudS1jb250ZW50IGxpLnNpZGViYXItZ3JvdXAtYWN0aXZlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgYWN0aXZlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWNvbnRlbnQgbGkuc2lkZWJhci1ncm91cC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFjdGl2ZUVsKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUVsSGVpZ2h0ID0gYWN0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgbWVudS5zY3JvbGxUb3A7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gSWYgYWN0aXZlIGVsZW1lbnQncyB0b3AgcG9zaXRpb24gaXMgbGVzcyB0aGFuIDIvMyAoNjYlKSBvZiBtZW51IGhlaWdodCB0aGFuIGRvIG5vdCBzY3JvbGxcclxuICAgICAgICAgIGlmIChhY3RpdmVFbEhlaWdodCA+IHBhcnNlSW50KChtZW51LmNsaWVudEhlaWdodCAqIDIpIC8gMykpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbWVudS5zY3JvbGxUb3AsXHJcbiAgICAgICAgICAgICAgY2hhbmdlID0gYWN0aXZlRWxIZWlnaHQgLSBzdGFydCAtIHBhcnNlSW50KG1lbnUuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJC5hcHAubWVudS5jb250YWluZXIuc3RvcCgpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBjaGFuZ2VcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDMwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKCcubWFpbi1tZW51JykuZGF0YSgnc2Nyb2xsLXRvLWFjdGl2ZScsICdmYWxzZScpO1xyXG4gICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5vYmoudXBkYXRlKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEkKCcubWFpbi1tZW51LWNvbnRlbnQnKS5oYXNDbGFzcygncHMnKSkge1xyXG4gICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9iaikge1xyXG4gICAgICAgICAgdGhpcy5vYmouZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHVwZGF0ZUhlaWdodDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICgkYm9keS5kYXRhKCdtZW51JykgPT0gJ3ZlcnRpY2FsLW1lbnUnIHx8XHJcbiAgICAgICAgICAgICRib2R5LmRhdGEoJ21lbnUnKSA9PSAndmVydGljYWwtbWVudS1tb2Rlcm4nIHx8XHJcbiAgICAgICAgICAgICRib2R5LmRhdGEoJ21lbnUnKSA9PSAndmVydGljYWwtb3ZlcmxheS1tZW51JykgJiZcclxuICAgICAgICAgICQoJy5tYWluLW1lbnUnKS5oYXNDbGFzcygnbWVudS1maXhlZCcpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAkKCcubWFpbi1tZW51LWNvbnRlbnQnKS5jc3MoXHJcbiAgICAgICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICAgICAkKHdpbmRvdykuaGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICQoJy5oZWFkZXItbmF2YmFyJykuaGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtaGVhZGVyJykub3V0ZXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgJCgnLm1haW4tbWVudS1mb290ZXInKS5vdXRlckhlaWdodCgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKGNvbXBhY3RNZW51KSB7XHJcbiAgICAgIGlmICgkKCcubWFpbi1tZW51LWNvbnRlbnQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKCcubWFpbi1tZW51LWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVPYmogPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZShjb21wYWN0TWVudSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlOiBmdW5jdGlvbiAoY29tcGFjdE1lbnUpIHtcclxuICAgICAgdmFyIGN1cnJlbnRCcmVha3BvaW50ID0gVW5pc29uLmZldGNoLm5vdygpOyAvLyBDdXJyZW50IEJyZWFrcG9pbnRcclxuXHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgIHZhciBtZW51VHlwZSA9ICRib2R5LmRhdGEoJ21lbnUnKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50QnJlYWtwb2ludCkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VycmVudEJyZWFrcG9pbnQubmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAneGwnOlxyXG4gICAgICAgICAgICBpZiAobWVudVR5cGUgPT09ICd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNvbXBhY3RNZW51ID09PSB0cnVlKSB0aGlzLmNvbGxhcHNlKGNvbXBhY3RNZW51KTtcclxuICAgICAgICAgICAgICBlbHNlIHRoaXMuZXhwYW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdsZyc6XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBtZW51VHlwZSA9PT0gJ3ZlcnRpY2FsLW92ZXJsYXktbWVudScgfHxcclxuICAgICAgICAgICAgICBtZW51VHlwZSA9PT0gJ3ZlcnRpY2FsLW1lbnUtbW9kZXJuJyB8fFxyXG4gICAgICAgICAgICAgIG1lbnVUeXBlID09PSAnaG9yaXpvbnRhbC1tZW51J1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgICBjYXNlICdzbSc6XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3hzJzpcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT24gdGhlIHNtYWxsIGFuZCBleHRyYSBzbWFsbCBzY3JlZW4gbWFrZSB0aGVtIG92ZXJsYXkgbWVudVxyXG4gICAgICBpZiAobWVudVR5cGUgPT09ICd2ZXJ0aWNhbC1tZW51JyB8fCBtZW51VHlwZSA9PT0gJ3ZlcnRpY2FsLW1lbnUtbW9kZXJuJykge1xyXG4gICAgICAgIHRoaXMudG9PdmVybGF5TWVudShjdXJyZW50QnJlYWtwb2ludC5uYW1lLCBtZW51VHlwZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgkYm9keS5pcygnLmhvcml6b250YWwtbGF5b3V0JykgJiYgISRib2R5Lmhhc0NsYXNzKCcuaG9yaXpvbnRhbC1tZW51LWRlbW8nKSkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTWVudShjdXJyZW50QnJlYWtwb2ludC5uYW1lKTtcclxuXHJcbiAgICAgICAgJCgnLm1lbnUtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEcm9wZG93biBzdWJtZW51IG9uIGxhcmdlIHNjcmVlbiBvbiBob3ZlciBGb3IgTGFyZ2Ugc2NyZWVuIG9ubHlcclxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIGlmIChjdXJyZW50QnJlYWtwb2ludC5uYW1lID09ICd4bCcpIHtcclxuICAgICAgICAkKCdib2R5W2RhdGEtb3Blbj1cImhvdmVyXCJdIC5tYWluLW1lbnUtY29udGVudCAuZHJvcGRvd24nKSAvLyBVc2Ugc2VsZWN0b3IgJCgnYm9keVtkYXRhLW9wZW49XCJob3ZlclwiXSAuaGVhZGVyLW5hdmJhciAuZHJvcGRvd24nKSBmb3IgbWVudSBhbmQgbmF2YmFyIEREIG9wZW4gb24gaG92ZXJcclxuICAgICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdzaG93JykpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8qID8gVW5jb21tZW50IHRvIGVuYWJsZSBhbGwgREQgb3BlbiBvbiBob3ZlclxyXG4gICAgICAgICQoJ2JvZHlbZGF0YS1vcGVuPVwiaG92ZXJcIl0gLmRyb3Bkb3duIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKG1lbnVUeXBlID09ICdob3Jpem9udGFsLW1lbnUnKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBZGRlZCBkYXRhIGF0dHJpYnV0ZSBicmFuZC1jZW50ZXIgZm9yIG5hdmJhci1icmFuZC1jZW50ZXJcclxuXHJcbiAgICAgIGlmIChjdXJyZW50QnJlYWtwb2ludC5uYW1lID09ICdzbScgfHwgY3VycmVudEJyZWFrcG9pbnQubmFtZSA9PSAneHMnKSB7XHJcbiAgICAgICAgJCgnLmhlYWRlci1uYXZiYXJbZGF0YS1uYXY9YnJhbmQtY2VudGVyXScpLnJlbW92ZUNsYXNzKCduYXZiYXItYnJhbmQtY2VudGVyJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmhlYWRlci1uYXZiYXJbZGF0YS1uYXY9YnJhbmQtY2VudGVyXScpLmFkZENsYXNzKCduYXZiYXItYnJhbmQtY2VudGVyJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gT24gc2NyZWVuIHdpZHRoIGNoYW5nZSwgY3VycmVudCBhY3RpdmUgbWVudSBpbiBob3Jpem9udGFsXHJcbiAgICAgIGlmIChjdXJyZW50QnJlYWtwb2ludC5uYW1lID09ICd4bCcgJiYgbWVudVR5cGUgPT0gJ2hvcml6b250YWwtbWVudScpIHtcclxuICAgICAgICAkKCcubWFpbi1tZW51LWNvbnRlbnQnKS5maW5kKCdsaS5hY3RpdmUnKS5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdzaWRlYmFyLWdyb3VwLWFjdGl2ZSBhY3RpdmUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRCcmVha3BvaW50Lm5hbWUgIT09ICd4bCcgJiYgbWVudVR5cGUgPT0gJ2hvcml6b250YWwtbWVudScpIHtcclxuICAgICAgICAkKCcjbmF2YmFyLXR5cGUnKS50b2dnbGVDbGFzcygnZC1ub25lIGQteGwtYmxvY2snKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRHJvcGRvd24gc3VibWVudSBvbiBzbWFsbCBzY3JlZW4gb24gY2xpY2tcclxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgJCgndWwuZHJvcGRvd24tbWVudSBbZGF0YS1icy10b2dnbGU9ZHJvcGRvd25dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuc2libGluZ3MoJ3VsLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSG9yaXpvbnRhbCBsYXlvdXQgc3VibWVudSBkcmF3ZXIgc2Nyb2xsYmFyXHJcbiAgICAgIGlmIChtZW51VHlwZSA9PSAnaG9yaXpvbnRhbC1tZW51Jykge1xyXG4gICAgICAgICQoJ2xpLmRyb3Bkb3duLXN1Ym1lbnUnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICghJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpLmhhc0NsYXNzKCdzaG93JykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbkxlZnQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBkZCA9ICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKTtcclxuICAgICAgICAgIGlmIChkZCkge1xyXG4gICAgICAgICAgICB2YXIgcGFnZUhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcclxuICAgICAgICAgICAgICAvLyBkZFRvcCA9IGRkLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgICBkZFRvcCA9ICQodGhpcykucG9zaXRpb24oKS50b3AsXHJcbiAgICAgICAgICAgICAgZGRMZWZ0ID0gZGQub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICAgICAgICBkZFdpZHRoID0gZGQud2lkdGgoKSxcclxuICAgICAgICAgICAgICBkZEhlaWdodCA9IGRkLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBpZiAocGFnZUhlaWdodCAtIGRkVG9wIC0gZGRIZWlnaHQgLSAyOCA8IDEpIHtcclxuICAgICAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gcGFnZUhlaWdodCAtIGRkVG9wIC0gMTcwO1xyXG4gICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudScpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cteSc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgJ292ZXJmbG93LXgnOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgdmFyIG1lbnVfY29udGVudCA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCdsaS5kcm9wZG93bi1zdWJtZW51LnNob3cgLmRyb3Bkb3duLW1lbnUnLCB7XHJcbiAgICAgICAgICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFkZCBjbGFzcyB0byBob3Jpem9udGFsIHN1YiBtZW51IGlmIHNjcmVlbiB3aWR0aCBpcyBzbWFsbFxyXG4gICAgICAgICAgICBpZiAoZGRMZWZ0ICsgZGRXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAtIDE2KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbkxlZnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy50aGVtZS1sYXlvdXRzJykuZmluZCgnLnNlbWktZGFyaycpLmhpZGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSG9yaXpvbnRhbCBGaXhlZCBOYXYgU3RpY2t5IGhpZ2h0IGlzc3VlIG9uIHNtYWxsIHNjcmVlbnNcclxuICAgICAgLy8gaWYgKG1lbnVUeXBlID09ICdob3Jpem9udGFsLW1lbnUnKSB7XHJcbiAgICAgIC8vICAgaWYgKGN1cnJlbnRCcmVha3BvaW50Lm5hbWUgPT0gJ3NtJyB8fCBjdXJyZW50QnJlYWtwb2ludC5uYW1lID09ICd4cycpIHtcclxuICAgICAgLy8gICAgIGlmICgkKFwiLm1lbnUtZml4ZWRcIikubGVuZ3RoKSB7XHJcbiAgICAgIC8vICAgICAgICQoXCIubWVudS1maXhlZFwiKS51bnN0aWNrKCk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIGVsc2Uge1xyXG4gICAgICAvLyAgICAgaWYgKCQoXCIubmF2YmFyLWZpeGVkXCIpLmxlbmd0aCkge1xyXG4gICAgICAvLyAgICAgICAkKFwiLm5hdmJhci1maXhlZFwiKS5zdGlja3koKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJhbnNpdDogZnVuY3Rpb24gKGNhbGxiYWNrMSwgY2FsbGJhY2syKSB7XHJcbiAgICAgIHZhciBtZW51T2JqID0gdGhpcztcclxuICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2NoYW5naW5nLW1lbnUnKTtcclxuXHJcbiAgICAgIGNhbGxiYWNrMS5jYWxsKG1lbnVPYmopO1xyXG5cclxuICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1sYXlvdXQnKSkge1xyXG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnbWVudS1vcGVuJykgfHwgJGJvZHkuaGFzQ2xhc3MoJ21lbnUtZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgJCgnLm1lbnUtdG9nZ2xlJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgIC8vIFNob3cgbWVudSBoZWFkZXIgc2VhcmNoIHdoZW4gbWVudSBpcyBub3JtYWxseSB2aXNpYmxlXHJcbiAgICAgICAgICBpZiAoJGJvZHkuZGF0YSgnbWVudScpID09PSAndmVydGljYWwtbWVudScpIHtcclxuICAgICAgICAgICAgaWYgKCQoJy5tYWluLW1lbnUtaGVhZGVyJykpIHtcclxuICAgICAgICAgICAgICAkKCcubWFpbi1tZW51LWhlYWRlcicpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKCcubWVudS10b2dnbGUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgLy8gSGlkZSBtZW51IGhlYWRlciBzZWFyY2ggd2hlbiBvbmx5IG1lbnUgaWNvbnMgYXJlIHZpc2libGVcclxuICAgICAgICAgIGlmICgkYm9keS5kYXRhKCdtZW51JykgPT09ICd2ZXJ0aWNhbC1tZW51Jykge1xyXG4gICAgICAgICAgICBpZiAoJCgnLm1haW4tbWVudS1oZWFkZXInKSkge1xyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtaGVhZGVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxsYmFjazIuY2FsbChtZW51T2JqKTtcclxuICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnY2hhbmdpbmctbWVudScpO1xyXG5cclxuICAgICAgICBtZW51T2JqLnVwZGF0ZSgpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnbWVudS1oaWRlIG1lbnUtY29sbGFwc2VkJykuYWRkQ2xhc3MoJ21lbnUtb3BlbicpO1xyXG4gICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygndmVydGljYWwtb3ZlcmxheS1tZW51JykpIHtcclxuICAgICAgICAgICAgJCgnLnNpZGVuYXYtb3ZlcmxheScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIC8vICQoJy5zaWRlbmF2LW92ZXJsYXknKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKTtcclxuICAgICAgICAgICAgLy8gJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoISQoJy5tYWluLW1lbnUnKS5oYXNDbGFzcygnbWVudS1uYXRpdmUtc2Nyb2xsJykgJiYgJCgnLm1haW4tbWVudScpLmhhc0NsYXNzKCdtZW51LWZpeGVkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxTY3JvbGxlci5lbmFibGUoKTtcclxuICAgICAgICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuY3NzKFxyXG4gICAgICAgICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICAgICAgICQod2luZG93KS5oZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyLW5hdmJhcicpLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtaGVhZGVyJykub3V0ZXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1tZW51LWZvb3RlcicpLm91dGVySGVpZ2h0KClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tYW51YWxTY3JvbGxlci51cGRhdGUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoISRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkKCcuc2lkZW5hdi1vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgLy8gJCgnLnNpZGVuYXYtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrIGQtbm9uZScpO1xyXG4gICAgICAgICAgICAvLyAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnbWVudS1vcGVuIG1lbnUtZXhwYW5kZWQnKS5hZGRDbGFzcygnbWVudS1oaWRlJyk7XHJcbiAgICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkKCcuc2lkZW5hdi1vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgLy8gJCgnLnNpZGVuYXYtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAvLyAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoISQoJy5tYWluLW1lbnUnKS5oYXNDbGFzcygnbWVudS1uYXRpdmUtc2Nyb2xsJykgJiYgJCgnLm1haW4tbWVudScpLmhhc0NsYXNzKCdtZW51LWZpeGVkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxTY3JvbGxlci5lbmFibGUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoISRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkKCcuc2lkZW5hdi1vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgLy8gJCgnLnNpZGVuYXYtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrIGQtbm9uZScpO1xyXG4gICAgICAgICAgICAvLyAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBleHBhbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuZXhwYW5kZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCRib2R5LmRhdGEoJ21lbnUnKSA9PSAndmVydGljYWwtbWVudS1tb2Rlcm4nKSB7XHJcbiAgICAgICAgICAkKCcubW9kZXJuLW5hdi10b2dnbGUnKVxyXG4gICAgICAgICAgICAuZmluZCgnLmNvbGxhcHNlLXRvZ2dsZS1pY29uJylcclxuICAgICAgICAgICAgLnJlcGxhY2VXaXRoKFxyXG4gICAgICAgICAgICAgIGZlYXRoZXIuaWNvbnNbJ2Rpc2MnXS50b1N2Zyh7IGNsYXNzOiAnZC1ub25lIGQteGwtYmxvY2sgY29sbGFwc2UtdG9nZ2xlLWljb24gcHJpbWFyeSBmb250LW1lZGl1bS00JyB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zaXQoXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdtZW51LWNvbGxhcHNlZCcpLmFkZENsYXNzKCdtZW51LWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKCcuc2lkZW5hdi1vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHJcbiAgICAgICAgICAgIC8vICQoJy5zaWRlbmF2LW92ZXJsYXknKS5yZW1vdmVDbGFzcygnZC1ibG9jayBkLW5vbmUnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcubWFpbi1tZW51JykuaGFzQ2xhc3MoJ21lbnUtbmF0aXZlLXNjcm9sbCcpIHx8ICRib2R5LmRhdGEoJ21lbnUnKSA9PSAnaG9yaXpvbnRhbC1tZW51Jykge1xyXG4gICAgICAgICAgICAgIHRoaXMubWFudWFsU2Nyb2xsZXIuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICgkKCcubWFpbi1tZW51JykuaGFzQ2xhc3MoJ21lbnUtZml4ZWQnKSkgdGhpcy5tYW51YWxTY3JvbGxlci5lbmFibGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICgkYm9keS5kYXRhKCdtZW51JykgPT0gJ3ZlcnRpY2FsLW1lbnUnIHx8ICRib2R5LmRhdGEoJ21lbnUnKSA9PSAndmVydGljYWwtbWVudS1tb2Rlcm4nKSAmJlxyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUnKS5oYXNDbGFzcygnbWVudS1maXhlZCcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmNzcyhcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLmhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgJCgnLmhlYWRlci1uYXZiYXInKS5oZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtaGVhZGVyJykub3V0ZXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtZm9vdGVyJykub3V0ZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5tYW51YWxTY3JvbGxlci51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29sbGFwc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuY29sbGFwc2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGlmICgkYm9keS5kYXRhKCdtZW51JykgPT0gJ3ZlcnRpY2FsLW1lbnUtbW9kZXJuJykge1xyXG4gICAgICAgICAgJCgnLm1vZGVybi1uYXYtdG9nZ2xlJylcclxuICAgICAgICAgICAgLmZpbmQoJy5jb2xsYXBzZS10b2dnbGUtaWNvbicpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlV2l0aChcclxuICAgICAgICAgICAgICBmZWF0aGVyLmljb25zWydjaXJjbGUnXS50b1N2Zyh7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2Qtbm9uZSBkLXhsLWJsb2NrIGNvbGxhcHNlLXRvZ2dsZS1pY29uIHByaW1hcnkgZm9udC1tZWRpdW0tNCdcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zaXQoXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdtZW51LWV4cGFuZGVkJykuYWRkQ2xhc3MoJ21lbnUtY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJCgnLmNvbnRlbnQtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdkLWJsb2NrIGQtbm9uZScpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRib2R5LmRhdGEoJ21lbnUnKSA9PSAnaG9yaXpvbnRhbC1tZW51JyAmJiAkYm9keS5oYXNDbGFzcygndmVydGljYWwtb3ZlcmxheS1tZW51JykpIHtcclxuICAgICAgICAgICAgICBpZiAoJCgnLm1haW4tbWVudScpLmhhc0NsYXNzKCdtZW51LWZpeGVkJykpIHRoaXMubWFudWFsU2Nyb2xsZXIuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICgkYm9keS5kYXRhKCdtZW51JykgPT0gJ3ZlcnRpY2FsLW1lbnUnIHx8ICRib2R5LmRhdGEoJ21lbnUnKSA9PSAndmVydGljYWwtbWVudS1tb2Rlcm4nKSAmJlxyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUnKS5oYXNDbGFzcygnbWVudS1maXhlZCcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmNzcygnaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpIC0gJCgnLmhlYWRlci1uYXZiYXInKS5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5tYW51YWxTY3JvbGxlci51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJGJvZHkuZGF0YSgnbWVudScpID09ICd2ZXJ0aWNhbC1tZW51LW1vZGVybicpIHtcclxuICAgICAgICAgICAgICBpZiAoJCgnLm1haW4tbWVudScpLmhhc0NsYXNzKCdtZW51LWZpeGVkJykpIHRoaXMubWFudWFsU2Nyb2xsZXIuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvT3ZlcmxheU1lbnU6IGZ1bmN0aW9uIChzY3JlZW4sIG1lbnVUeXBlKSB7XHJcbiAgICAgIHZhciBtZW51ID0gJGJvZHkuZGF0YSgnbWVudScpO1xyXG4gICAgICBpZiAobWVudVR5cGUgPT0gJ3ZlcnRpY2FsLW1lbnUtbW9kZXJuJykge1xyXG4gICAgICAgIGlmIChzY3JlZW4gPT0gJ2xnJyB8fCBzY3JlZW4gPT0gJ21kJyB8fCBzY3JlZW4gPT0gJ3NtJyB8fCBzY3JlZW4gPT0gJ3hzJykge1xyXG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKG1lbnUpKSB7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKG1lbnUpLmFkZENsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygndmVydGljYWwtb3ZlcmxheS1tZW51JykuYWRkQ2xhc3MobWVudSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzY3JlZW4gPT0gJ3NtJyB8fCBzY3JlZW4gPT0gJ3hzJykge1xyXG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKG1lbnUpKSB7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKG1lbnUpLmFkZENsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygndmVydGljYWwtb3ZlcmxheS1tZW51JykuYWRkQ2xhc3MobWVudSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZU1lbnU6IGZ1bmN0aW9uIChzY3JlZW4pIHtcclxuICAgICAgLy8gUmVwbGFjZSBtZW51IGh0bWxcclxuICAgICAgJCgnZGl2W2RhdGEtbWVudT1cIm1lbnUtd3JhcHBlclwiXScpLmh0bWwoJycpO1xyXG4gICAgICAkKCdkaXZbZGF0YS1tZW51PVwibWVudS13cmFwcGVyXCJdJykuaHRtbChtZW51V3JhcHBlcl9lbCk7XHJcblxyXG4gICAgICB2YXIgbWVudVdyYXBwZXIgPSAkKCdkaXZbZGF0YS1tZW51PVwibWVudS13cmFwcGVyXCJdJyksXHJcbiAgICAgICAgbWVudUNvbnRhaW5lciA9ICQoJ2RpdltkYXRhLW1lbnU9XCJtZW51LWNvbnRhaW5lclwiXScpLFxyXG4gICAgICAgIG1lbnVOYXZpZ2F0aW9uID0gJCgndWxbZGF0YS1tZW51PVwibWVudS1uYXZpZ2F0aW9uXCJdJyksXHJcbiAgICAgICAgLyptZWdhTWVudSAgICAgICAgICAgPSAkKCdsaVtkYXRhLW1lbnU9XCJtZWdhbWVudVwiXScpLFxyXG4gICAgICAgIG1lZ2FNZW51Q29sICAgICAgICA9ICQoJ2xpW2RhdGEtbWVnYS1jb2xdJyksKi9cclxuICAgICAgICBkcm9wZG93bk1lbnUgPSAkKCdsaVtkYXRhLW1lbnU9XCJkcm9wZG93blwiXScpLFxyXG4gICAgICAgIGRyb3Bkb3duU3ViTWVudSA9ICQoJ2xpW2RhdGEtbWVudT1cImRyb3Bkb3duLXN1Ym1lbnVcIl0nKTtcclxuXHJcbiAgICAgIGlmIChzY3JlZW4gPT09ICd4bCcpIHtcclxuICAgICAgICAvLyBDaGFuZ2UgYm9keSBjbGFzc2VzXHJcbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ3ZlcnRpY2FsLWxheW91dCB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUgZml4ZWQtbmF2YmFyJykuYWRkQ2xhc3MoJGJvZHkuZGF0YSgnbWVudScpKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG5hdmJhci1maXgtdG9wIGNsYXNzIG9uIGxhcmdlIHNjcmVlbnNcclxuICAgICAgICAkKCduYXYuaGVhZGVyLW5hdmJhcicpLnJlbW92ZUNsYXNzKCdmaXhlZC10b3AnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIG1lbnUgd3JhcHBlciwgbWVudSBjb250YWluZXIsIG1lbnUgbmF2aWdhdGlvbiBjbGFzc2VzXHJcbiAgICAgICAgbWVudVdyYXBwZXIucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhtZW51V3JhcHBlckNsYXNzZXMpO1xyXG5cclxuICAgICAgICAkKCdhLmRyb3Bkb3duLWl0ZW0ubmF2LWhhcy1jaGlsZHJlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCdhLmRyb3Bkb3duLWl0ZW0ubmF2LWhhcy1wYXJlbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hhbmdlIGJvZHkgY2xhc3Nlc1xyXG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCRib2R5LmRhdGEoJ21lbnUnKSkuYWRkQ2xhc3MoJ3ZlcnRpY2FsLWxheW91dCB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUgZml4ZWQtbmF2YmFyJyk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBuYXZiYXItZml4LXRvcCBjbGFzcyBvbiBzbWFsbCBzY3JlZW5zXHJcbiAgICAgICAgJCgnbmF2LmhlYWRlci1uYXZiYXInKS5hZGRDbGFzcygnZml4ZWQtdG9wJyk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBtZW51IHdyYXBwZXIsIG1lbnUgY29udGFpbmVyLCBtZW51IG5hdmlnYXRpb24gY2xhc3Nlc1xyXG4gICAgICAgIG1lbnVXcmFwcGVyLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ21haW4tbWVudSBtZW51LWxpZ2h0IG1lbnUtZml4ZWQgbWVudS1zaGFkb3cnKTtcclxuICAgICAgICAvLyBtZW51Q29udGFpbmVyLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ21haW4tbWVudS1jb250ZW50Jyk7XHJcbiAgICAgICAgbWVudU5hdmlnYXRpb24ucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnbmF2aWdhdGlvbiBuYXZpZ2F0aW9uLW1haW4nKTtcclxuXHJcbiAgICAgICAgLy8gSWYgRHJvcGRvd24gTWVudVxyXG4gICAgICAgIGRyb3Bkb3duTWVudS5yZW1vdmVDbGFzcygnZHJvcGRvd24nKS5hZGRDbGFzcygnaGFzLXN1YicpO1xyXG4gICAgICAgIGRyb3Bkb3duTWVudS5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2Ryb3Bkb3duLXRvZ2dsZSBuYXYtbGluaycpO1xyXG4gICAgICAgIGRyb3Bkb3duTWVudS5maW5kKCdhJykuYXR0cignZGF0YS1icy10b2dnbGUnLCAnJyk7XHJcbiAgICAgICAgZHJvcGRvd25NZW51LmNoaWxkcmVuKCd1bCcpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnZHJvcGRvd24taXRlbScpO1xyXG4gICAgICAgIGRyb3Bkb3duTWVudS5maW5kKCd1bCcpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi1tZW51Jyk7XHJcbiAgICAgICAgZHJvcGRvd25TdWJNZW51LnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2hhcy1zdWInKTtcclxuXHJcbiAgICAgICAgJC5hcHAubmF2LmluaXQoKTtcclxuXHJcbiAgICAgICAgLy8gRHJvcGRvd24gc3VibWVudSBvbiBzbWFsbCBzY3JlZW4gb24gY2xpY2tcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICQoJ3VsLmRyb3Bkb3duLW1lbnUgW2RhdGEtYnMtdG9nZ2xlPWRyb3Bkb3duXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmZpbmQoJ2xpLmFjdGl2ZScpLnBhcmVudHMoJ2xpJykuYWRkQ2xhc3MoJ3NpZGViYXItZ3JvdXAtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmZpbmQoJ2xpLmFjdGl2ZScpLmNsb3Nlc3QoJ2xpLm5hdi1pdGVtJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZlYXRoZXIpIHtcclxuICAgICAgICBmZWF0aGVyLnJlcGxhY2UoeyB3aWR0aDogMTQsIGhlaWdodDogMTQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBjdXJyZW50QnJlYWtwb2ludCA9IFVuaXNvbi5mZXRjaC5ub3coKTsgLy8gQ3VycmVudCBCcmVha3BvaW50XHJcbiAgICAgIHZhciBjb2xsYXBzZWQgPSB0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgdmFyIGV4cGFuZGVkID0gdGhpcy5leHBhbmRlZDtcclxuICAgICAgdmFyIGhpZGRlbiA9IHRoaXMuaGlkZGVuO1xyXG4gICAgICB2YXIgbWVudSA9ICRib2R5LmRhdGEoJ21lbnUnKTtcclxuXHJcbiAgICAgIHN3aXRjaCAoY3VycmVudEJyZWFrcG9pbnQubmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgICAgIGlmIChleHBhbmRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAobWVudSA9PSAndmVydGljYWwtb3ZlcmxheS1tZW51Jykge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG1lbnUgPT0gJ3ZlcnRpY2FsLW92ZXJsYXktbWVudScpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdsZyc6XHJcbiAgICAgICAgICBpZiAoZXhwYW5kZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKG1lbnUgPT0gJ3ZlcnRpY2FsLW92ZXJsYXktbWVudScgfHwgbWVudSA9PSAndmVydGljYWwtbWVudS1tb2Rlcm4nIHx8IG1lbnUgPT0gJ2hvcml6b250YWwtbWVudScpIHtcclxuICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChtZW51ID09ICd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnIHx8IG1lbnUgPT0gJ3ZlcnRpY2FsLW1lbnUtbW9kZXJuJyB8fCBtZW51ID09ICdob3Jpem9udGFsLW1lbnUnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5leHBhbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWQnOlxyXG4gICAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgICAgIGlmIChoaWRkZW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3hzJzpcclxuICAgICAgICAgIGlmIChoaWRkZW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLm1hbnVhbFNjcm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdtZW51LWhpZGUgbWVudS1vcGVuIG1lbnUtY29sbGFwc2VkIG1lbnUtZXhwYW5kZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBOYXZpZ2F0aW9uIE1lbnVcclxuICAkLmFwcC5uYXYgPSB7XHJcbiAgICBjb250YWluZXI6ICQoJy5uYXZpZ2F0aW9uLW1haW4nKSxcclxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgIG5hdkl0ZW06ICQoJy5uYXZpZ2F0aW9uLW1haW4nKS5maW5kKCdsaScpLm5vdCgnLm5hdmlnYXRpb24tY2F0ZWdvcnknKSxcclxuICAgIFRSQU5TSVRJT05fRVZFTlRTOiBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsICdvVHJhbnNpdGlvbkVuZCddLFxyXG4gICAgVFJBTlNJVElPTl9QUk9QRVJUSUVTOiBbJ3RyYW5zaXRpb24nLCAnTW96VHJhbnNpdGlvbicsICd3ZWJraXRUcmFuc2l0aW9uJywgJ1dlYmtpdFRyYW5zaXRpb24nLCAnT1RyYW5zaXRpb24nXSxcclxuXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgc3BlZWQ6IDMwMFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlOyAvLyBTZXQgdG8gdHJ1ZSB3aGVuIGluaXRpYWxpemVkXHJcbiAgICAgICQuZXh0ZW5kKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG5cclxuICAgICAgdGhpcy5iaW5kX2V2ZW50cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBiaW5kX2V2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbWVudU9iaiA9IHRoaXM7XHJcblxyXG4gICAgICAkKCcubmF2aWdhdGlvbi1tYWluJylcclxuICAgICAgICAub24oJ21vdXNlZW50ZXIuYXBwLm1lbnUnLCAnbGknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgLy8gJCgnLmhvdmVyJywgJy5uYXZpZ2F0aW9uLW1haW4nKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcclxuICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnbWVudS1jb2xsYXBzZWQnKSAmJiAkYm9keS5kYXRhKCdtZW51JykgIT0gJ3ZlcnRpY2FsLW1lbnUtbW9kZXJuJykge1xyXG4gICAgICAgICAgICAkKCcubWFpbi1tZW51LWNvbnRlbnQnKS5jaGlsZHJlbignc3Bhbi5tZW51LXRpdGxlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmNoaWxkcmVuKCdhLm1lbnUtdGl0bGUnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuY2hpbGRyZW4oJ3VsLm1lbnUtY29udGVudCcpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGl0bGVcclxuICAgICAgICAgICAgdmFyIG1lbnVUaXRsZSA9ICR0aGlzLmZpbmQoJ3NwYW4ubWVudS10aXRsZScpLmNsb25lKCksXHJcbiAgICAgICAgICAgICAgdGVtcFRpdGxlLFxyXG4gICAgICAgICAgICAgIHRlbXBMaW5rO1xyXG4gICAgICAgICAgICBpZiAoISR0aGlzLmhhc0NsYXNzKCdoYXMtc3ViJykpIHtcclxuICAgICAgICAgICAgICB0ZW1wVGl0bGUgPSAkdGhpcy5maW5kKCdzcGFuLm1lbnUtdGl0bGUnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgdGVtcExpbmsgPSAkdGhpcy5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICBpZiAodGVtcFRpdGxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgbWVudVRpdGxlID0gJCgnPGE+Jyk7XHJcbiAgICAgICAgICAgICAgICBtZW51VGl0bGUuYXR0cignaHJlZicsIHRlbXBMaW5rKTtcclxuICAgICAgICAgICAgICAgIG1lbnVUaXRsZS5hdHRyKCd0aXRsZScsIHRlbXBUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICBtZW51VGl0bGUudGV4dCh0ZW1wVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgbWVudVRpdGxlLmFkZENsYXNzKCdtZW51LXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG1lbnVfaGVhZGVyX2hlaWdodCA9ICgkKCcubWFpbi1tZW51LWhlYWRlcicpLmxlbmd0aCkgPyAkKCcubWFpbi1tZW51LWhlYWRlcicpLmhlaWdodCgpIDogMCxcclxuICAgICAgICAgICAgLy8gZnJvbVRvcCA9IG1lbnVfaGVhZGVyX2hlaWdodCArICR0aGlzLnBvc2l0aW9uKCkudG9wICsgcGFyc2VJbnQoJHRoaXMuY3NzKCBcImJvcmRlci10b3BcIiApLDEwKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Ub3A7XHJcbiAgICAgICAgICAgIGlmICgkdGhpcy5jc3MoJ2JvcmRlci10b3AnKSkge1xyXG4gICAgICAgICAgICAgIGZyb21Ub3AgPSAkdGhpcy5wb3NpdGlvbigpLnRvcCArIHBhcnNlSW50KCR0aGlzLmNzcygnYm9yZGVyLXRvcCcpLCAxMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZnJvbVRvcCA9ICR0aGlzLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkYm9keS5kYXRhKCdtZW51JykgIT09ICd2ZXJ0aWNhbC1jb21wYWN0LW1lbnUnKSB7XHJcbiAgICAgICAgICAgICAgbWVudVRpdGxlLmFwcGVuZFRvKCcubWFpbi1tZW51LWNvbnRlbnQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGZyb21Ub3BcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udGVudFxyXG4gICAgICAgICAgICAvKiBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2hhcy1zdWInKSAmJiAkdGhpcy5oYXNDbGFzcygnbmF2LWl0ZW0nKSkge1xyXG4gICAgICAgICAgICAgIHZhciBtZW51Q29udGVudCA9ICR0aGlzLmNoaWxkcmVuKCd1bDpmaXJzdCcpO1xyXG4gICAgICAgICAgICAgIG1lbnVPYmouYWRqdXN0U3VibWVudSgkdGhpcyk7XHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vICR0aGlzLmFkZENsYXNzKCdob3ZlcicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlLmFwcC5tZW51JywgJ2xpJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gJCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignYWN0aXZlLmFwcC5tZW51JywgJ2xpJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignZGVhY3RpdmUuYXBwLm1lbnUnLCAnbGkuYWN0aXZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignb3Blbi5hcHAubWVudScsICdsaScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgJGxpc3RJdGVtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICBtZW51T2JqLmV4cGFuZCgkbGlzdEl0ZW0pO1xyXG4gICAgICAgICAgLy8gJGxpc3RJdGVtLmFkZENsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgbWVudSBjb2xsYXBzaWJsZSB0aGVuIGRvIG5vdCB0YWtlIGFueSBhY3Rpb25cclxuICAgICAgICAgIGlmICgkKCcubWFpbi1tZW51JykuaGFzQ2xhc3MoJ21lbnUtY29sbGFwc2libGUnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBJZiBtZW51IGFjY29yZGlvbiB0aGVuIGNsb3NlIGFsbCBleGNlcHQgY2xpY2tlZCBvbmNlXHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJGxpc3RJdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJ2xpLm9wZW4nKS50cmlnZ2VyKCdjbG9zZS5hcHAubWVudScpO1xyXG4gICAgICAgICAgICAkbGlzdEl0ZW0uc2libGluZ3MoJy5vcGVuJykudHJpZ2dlcignY2xvc2UuYXBwLm1lbnUnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdjbG9zZS5hcHAubWVudScsICdsaS5vcGVuJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciAkbGlzdEl0ZW0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgIG1lbnVPYmouY29sbGFwc2UoJGxpc3RJdGVtKTtcclxuICAgICAgICAgIC8vICRsaXN0SXRlbS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ2NsaWNrLmFwcC5tZW51JywgJ2xpJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciAkbGlzdEl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgaWYgKCRsaXN0SXRlbS5pcygnLmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdtZW51LWNvbGxhcHNlZCcpICYmICRib2R5LmRhdGEoJ21lbnUnKSAhPSAndmVydGljYWwtbWVudS1tb2Rlcm4nKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICgkbGlzdEl0ZW0uaGFzKCd1bCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRsaXN0SXRlbS5pcygnLm9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAkbGlzdEl0ZW0udHJpZ2dlcignY2xvc2UuYXBwLm1lbnUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICRsaXN0SXRlbS50cmlnZ2VyKCdvcGVuLmFwcC5tZW51Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghJGxpc3RJdGVtLmlzKCcuYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgJGxpc3RJdGVtLnNpYmxpbmdzKCcuYWN0aXZlJykudHJpZ2dlcignZGVhY3RpdmUuYXBwLm1lbnUnKTtcclxuICAgICAgICAgICAgICAgICAgJGxpc3RJdGVtLnRyaWdnZXIoJ2FjdGl2ZS5hcHAubWVudScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAkKCcubmF2YmFyLWhlYWRlciwgLm1haW4tbWVudScpLm9uKCdtb3VzZWVudGVyJywgbW9kZXJuTWVudUV4cGFuZCkub24oJ21vdXNlbGVhdmUnLCBtb2Rlcm5NZW51Q29sbGFwc2UpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gbW9kZXJuTWVudUV4cGFuZCgpIHtcclxuICAgICAgICBpZiAoJGJvZHkuZGF0YSgnbWVudScpID09ICd2ZXJ0aWNhbC1tZW51LW1vZGVybicpIHtcclxuICAgICAgICAgICQoJy5tYWluLW1lbnUsIC5uYXZiYXItaGVhZGVyJykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ21lbnUtY29sbGFwc2VkJykpIHtcclxuICAgICAgICAgICAgaWYgKCQoJy5tYWluLW1lbnUgbGkub3BlbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmZpbmQoJ2xpLmFjdGl2ZScpLnBhcmVudHMoJ2xpJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgJGxpc3RJdGVtID0gJCgnLm1haW4tbWVudSBsaS5tZW51LWNvbGxhcHNlZC1vcGVuJyksXHJcbiAgICAgICAgICAgICAgJHN1Ykxpc3QgPSAkbGlzdEl0ZW0uY2hpbGRyZW4oJ3VsJyk7XHJcblxyXG4gICAgICAgICAgICAkc3ViTGlzdC5oaWRlKCkuc2xpZGVEb3duKDIwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRsaXN0SXRlbS5hZGRDbGFzcygnb3BlbicpLnJlbW92ZUNsYXNzKCdtZW51LWNvbGxhcHNlZC1vcGVuJyk7XHJcbiAgICAgICAgICAgIC8vICQuYXBwLm1lbnUuY2hhbmdlTG9nbygnZXhwYW5kJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBtb2Rlcm5NZW51Q29sbGFwc2UoKSB7XHJcbiAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdtZW51LWNvbGxhcHNlZCcpICYmICRib2R5LmRhdGEoJ21lbnUnKSA9PSAndmVydGljYWwtbWVudS1tb2Rlcm4nKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoJy5tYWluLW1lbnU6aG92ZXInKS5sZW5ndGggPT09IDAgJiYgJCgnLm5hdmJhci1oZWFkZXI6aG92ZXInKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAkKCcubWFpbi1tZW51LCAubmF2YmFyLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnbWVudS1jb2xsYXBzZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRsaXN0SXRlbSA9ICQoJy5tYWluLW1lbnUgbGkub3BlbicpLFxyXG4gICAgICAgICAgICAgICAgICAkc3ViTGlzdCA9ICRsaXN0SXRlbS5jaGlsZHJlbigndWwnKTtcclxuICAgICAgICAgICAgICAgICRsaXN0SXRlbS5hZGRDbGFzcygnbWVudS1jb2xsYXBzZWQtb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzdWJMaXN0LnNob3coKS5zbGlkZVVwKDIwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRsaXN0SXRlbS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgLy8gJC5hcHAubWVudS5jaGFuZ2VMb2dvKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnbWVudS1jb2xsYXBzZWQnKSkge1xyXG4gICAgICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuY2hpbGRyZW4oJ3NwYW4ubWVudS10aXRsZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuY2hpbGRyZW4oJ2EubWVudS10aXRsZScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuY2hpbGRyZW4oJ3VsLm1lbnUtY29udGVudCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcuaG92ZXInLCAnLm5hdmlnYXRpb24tbWFpbicpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIElmIGxpc3QgaXRlbSBoYXMgc3ViIG1lbnUgaXRlbXMgdGhlbiBwcmV2ZW50IHJlZGlyZWN0aW9uLlxyXG4gICAgICAkKCcubmF2aWdhdGlvbi1tYWluIGxpLmhhcy1zdWIgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSBhbiBhZG1pbiBzdWJtZW51IGlzIHdpdGhpbiB0aGUgdmlzdWFsIHZpZXdwb3J0LlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtZW51SXRlbSBUaGUgcGFyZW50IG1lbnUgaXRlbSBjb250YWluaW5nIHRoZSBzdWJtZW51LlxyXG4gICAgICovXHJcblxyXG4gICAgLyogYWRqdXN0U3VibWVudTogZnVuY3Rpb24gKCRtZW51SXRlbSkge1xyXG4gICAgICB2YXIgbWVudUhlYWRlckhlaWdodCxcclxuICAgICAgICBtZW51dG9wLFxyXG4gICAgICAgIHRvcFBvcyxcclxuICAgICAgICB3aW5IZWlnaHQsXHJcbiAgICAgICAgYm90dG9tT2Zmc2V0LFxyXG4gICAgICAgIHN1Yk1lbnVIZWlnaHQsXHJcbiAgICAgICAgcG9wT3V0TWVudUhlaWdodCxcclxuICAgICAgICBib3JkZXJXaWR0aCxcclxuICAgICAgICBzY3JvbGxfdGhlbWUsXHJcbiAgICAgICAgJHN1Ym1lbnUgPSAkbWVudUl0ZW0uY2hpbGRyZW4oJ3VsOmZpcnN0JyksXHJcbiAgICAgICAgdWwgPSAkc3VibWVudS5jbG9uZSh0cnVlKTtcclxuXHJcbiAgICAgIG1lbnVIZWFkZXJIZWlnaHQgPSAkKCcubWFpbi1tZW51LWhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICBtZW51dG9wID0gJG1lbnVJdGVtLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICB3aW5IZWlnaHQgPSAkd2luZG93LmhlaWdodCgpIC0gJCgnLmhlYWRlci1uYXZiYXInKS5oZWlnaHQoKTtcclxuICAgICAgYm9yZGVyV2lkdGggPSAwO1xyXG4gICAgICBzdWJNZW51SGVpZ2h0ID0gJHN1Ym1lbnUuaGVpZ2h0KCk7XHJcblxyXG4gICAgICBpZiAocGFyc2VJbnQoJG1lbnVJdGVtLmNzcygnYm9yZGVyLXRvcCcpLCAxMCkgPiAwKSB7XHJcbiAgICAgICAgYm9yZGVyV2lkdGggPSBwYXJzZUludCgkbWVudUl0ZW0uY3NzKCdib3JkZXItdG9wJyksIDEwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcG9wT3V0TWVudUhlaWdodCA9IHdpbkhlaWdodCAtIG1lbnV0b3AgLSAkbWVudUl0ZW0uaGVpZ2h0KCkgLSAzMDtcclxuICAgICAgc2Nyb2xsX3RoZW1lID0gJCgnLm1haW4tbWVudScpLmhhc0NsYXNzKCdtZW51LWRhcmsnKSA/ICdsaWdodCcgOiAnZGFyayc7XHJcblxyXG4gICAgICB0b3BQb3MgPSBtZW51dG9wICsgJG1lbnVJdGVtLmhlaWdodCgpICsgYm9yZGVyV2lkdGg7XHJcblxyXG4gICAgICB1bC5hZGRDbGFzcygnbWVudS1wb3BvdXQnKS5hcHBlbmRUbygnLm1haW4tbWVudS1jb250ZW50JykuY3NzKHtcclxuICAgICAgICB0b3A6IHRvcFBvcyxcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAnbWF4LWhlaWdodCc6IHBvcE91dE1lbnVIZWlnaHRcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgbWVudV9jb250ZW50ID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5tYWluLW1lbnUtY29udGVudCA+IHVsLm1lbnUtY29udGVudCcsIHtcclxuICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sICovXHJcblxyXG4gICAgLy8gQ29sbGFwc2UgU3VibWVudSBXaXRoIFRyYW5zaXRpb24gKEhlaWdodCBhbmltYXRpb24pXHJcbiAgICBjb2xsYXBzZTogZnVuY3Rpb24gKCRsaXN0SXRlbSwgY2FsbGJhY2spIHtcclxuICAgICAgdmFyIHN1Ykxpc3QgPSAkbGlzdEl0ZW0uY2hpbGRyZW4oJ3VsJyksXHJcbiAgICAgICAgdG9nZ2xlTGluayA9ICRsaXN0SXRlbS5jaGlsZHJlbigpLmZpcnN0KCksXHJcbiAgICAgICAgbGlua0hlaWdodCA9ICQodG9nZ2xlTGluaykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICRsaXN0SXRlbS5jc3Moe1xyXG4gICAgICAgIGhlaWdodDogbGlua0hlaWdodCArIHN1Ykxpc3Qub3V0ZXJIZWlnaHQoKSArICdweCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJGxpc3RJdGVtLmFkZENsYXNzKCdtZW51LWl0ZW0tYW5pbWF0aW5nJyk7XHJcbiAgICAgICRsaXN0SXRlbS5hZGRDbGFzcygnbWVudS1pdGVtLWNsb3NpbmcnKTtcclxuXHJcbiAgICAgICQuYXBwLm5hdi5fYmluZEFuaW1hdGlvbkVuZEV2ZW50KCRsaXN0SXRlbSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRsaXN0SXRlbS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQuYXBwLm5hdi5fY2xlYXJJdGVtU3R5bGUoJGxpc3RJdGVtKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkbGlzdEl0ZW0uY3NzKHtcclxuICAgICAgICAgIGhlaWdodDogbGlua0hlaWdodCArICdweCdcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgNTApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFeHBhbmQgU3VibWVudSBXaXRoIFRyYW5zaXRpb24gKEhlaWdodCBhbmltYXRpb24pXHJcbiAgICBleHBhbmQ6IGZ1bmN0aW9uICgkbGlzdEl0ZW0sIGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBzdWJMaXN0ID0gJGxpc3RJdGVtLmNoaWxkcmVuKCd1bCcpLFxyXG4gICAgICAgIHRvZ2dsZUxpbmsgPSAkbGlzdEl0ZW0uY2hpbGRyZW4oKS5maXJzdCgpLFxyXG4gICAgICAgIGxpbmtIZWlnaHQgPSAkKHRvZ2dsZUxpbmspLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAkbGlzdEl0ZW0uYWRkQ2xhc3MoJ21lbnUtaXRlbS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICRsaXN0SXRlbS5jc3Moe1xyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBoZWlnaHQ6IGxpbmtIZWlnaHQgKyAncHgnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJGxpc3RJdGVtLmFkZENsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAkLmFwcC5uYXYuX2JpbmRBbmltYXRpb25FbmRFdmVudCgkbGlzdEl0ZW0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmFwcC5uYXYuX2NsZWFySXRlbVN0eWxlKCRsaXN0SXRlbSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGxpc3RJdGVtLmNzcyh7XHJcbiAgICAgICAgICBoZWlnaHQ6IGxpbmtIZWlnaHQgKyBzdWJMaXN0Lm91dGVySGVpZ2h0KCkgKyAncHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDUwKTtcclxuICAgIH0sXHJcblxyXG4gICAgX2JpbmRBbmltYXRpb25FbmRFdmVudChlbCwgaGFuZGxlcikge1xyXG4gICAgICBlbCA9IGVsWzBdO1xyXG5cclxuICAgICAgdmFyIGNiID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGVsKSByZXR1cm47XHJcbiAgICAgICAgJC5hcHAubmF2Ll91bmJpbmRBbmltYXRpb25FbmRFdmVudChlbCk7XHJcbiAgICAgICAgaGFuZGxlcihlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb247XHJcbiAgICAgIGR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbikgKiAoZHVyYXRpb24uaW5kZXhPZignbXMnKSAhPT0gLTEgPyAxIDogMTAwMCk7XHJcblxyXG4gICAgICBlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50Q2IgPSBjYjtcclxuICAgICAgJC5hcHAubmF2LlRSQU5TSVRJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldiwgZWwuX21lbnVBbmltYXRpb25FbmRFdmVudENiLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWwuX21lbnVBbmltYXRpb25FbmRFdmVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYih7IHRhcmdldDogZWwgfSk7XHJcbiAgICAgIH0sIGR1cmF0aW9uICsgNTApO1xyXG4gICAgfSxcclxuXHJcbiAgICBfdW5iaW5kQW5pbWF0aW9uRW5kRXZlbnQoZWwpIHtcclxuICAgICAgdmFyIGNiID0gZWwuX21lbnVBbmltYXRpb25FbmRFdmVudENiO1xyXG5cclxuICAgICAgaWYgKGVsLl9tZW51QW5pbWF0aW9uRW5kRXZlbnRUaW1lb3V0KSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGVsLl9tZW51QW5pbWF0aW9uRW5kRXZlbnRUaW1lb3V0KTtcclxuICAgICAgICBlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50VGltZW91dCA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY2IpIHJldHVybjtcclxuXHJcbiAgICAgICQuYXBwLm5hdi5UUkFOU0lUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXYsIGNiLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50Q2IgPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBfY2xlYXJJdGVtU3R5bGU6IGZ1bmN0aW9uICgkbGlzdEl0ZW0pIHtcclxuICAgICAgJGxpc3RJdGVtLnJlbW92ZUNsYXNzKCdtZW51LWl0ZW0tYW5pbWF0aW5nJyk7XHJcbiAgICAgICRsaXN0SXRlbS5yZW1vdmVDbGFzcygnbWVudS1pdGVtLWNsb3NpbmcnKTtcclxuICAgICAgJGxpc3RJdGVtLmNzcyh7XHJcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxyXG4gICAgICAgIGhlaWdodDogJydcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJC5hcHAubmF2LmNvbnRhaW5lci5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gT24gaHJlZj0jIGNsaWNrIHBhZ2UgcmVmcmVzaCBpc3N1ZSByZXNvbHZlXHJcbiAgLy8/IFVzZXIgc2hvdWxkIHJlbW92ZSB0aGlzIGNvZGUgZm9yIHRoZWlyIHByb2plY3QgdG8gZW5hYmxlICMgY2xpY2tcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYVtocmVmPVwiI1wiXScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSk7XHJcblxyXG4vLyBXZSBsaXN0ZW4gdG8gdGhlIHJlc2l6ZSBldmVudFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vIFdlIGV4ZWN1dGUgdGhlIHNhbWUgc2NyaXB0IGFzIGJlZm9yZVxyXG4gIHZhciB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgdmggKyAncHgnKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJkb2N1bWVudCIsIiQiLCJ2aCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImFwcCIsIiRib2R5IiwiJHdpbmRvdyIsIm1lbnVXcmFwcGVyX2VsIiwiaHRtbCIsIm1lbnVXcmFwcGVyQ2xhc3NlcyIsImF0dHIiLCJtZW51IiwiZXhwYW5kZWQiLCJjb2xsYXBzZWQiLCJoaWRkZW4iLCJjb250YWluZXIiLCJob3Jpem9udGFsTWVudSIsImlzX3RvdWNoX2RldmljZSIsInByZWZpeGVzIiwic3BsaXQiLCJtcSIsInF1ZXJ5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJEb2N1bWVudFRvdWNoIiwiam9pbiIsIm1hbnVhbFNjcm9sbGVyIiwib2JqIiwiaW5pdCIsInNjcm9sbF90aGVtZSIsImhhc0NsYXNzIiwiUGVyZmVjdFNjcm9sbGJhciIsInN1cHByZXNzU2Nyb2xsWCIsIndoZWVsUHJvcGFnYXRpb24iLCJhZGRDbGFzcyIsInVwZGF0ZSIsImRhdGEiLCJhY3RpdmVFbCIsImFjdGl2ZUVsSGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFRvcCIsInBhcnNlSW50IiwiY2xpZW50SGVpZ2h0Iiwic3RhcnQiLCJjaGFuZ2UiLCJzZXRUaW1lb3V0Iiwic3RvcCIsImFuaW1hdGUiLCJlbmFibGUiLCJkaXNhYmxlIiwiZGVzdHJveSIsInVwZGF0ZUhlaWdodCIsImNzcyIsImhlaWdodCIsIm91dGVySGVpZ2h0IiwiY29tcGFjdE1lbnUiLCJtZW51T2JqIiwiY3VycmVudEJyZWFrcG9pbnQiLCJVbmlzb24iLCJmZXRjaCIsIm5vdyIsInJlc2V0IiwibWVudVR5cGUiLCJuYW1lIiwiaGlkZSIsImNvbGxhcHNlIiwiZXhwYW5kIiwidG9PdmVybGF5TWVudSIsImlzIiwiY2hhbmdlTWVudSIsInJlbW92ZUNsYXNzIiwib24iLCJldmVudCIsImZpbmQiLCJwYXJlbnRzIiwidG9nZ2xlQ2xhc3MiLCJzaWJsaW5ncyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50IiwiZGQiLCJwYWdlSGVpZ2h0IiwiZGRUb3AiLCJwb3NpdGlvbiIsImRkTGVmdCIsIm9mZnNldCIsImxlZnQiLCJkZFdpZHRoIiwid2lkdGgiLCJkZEhlaWdodCIsIm1heEhlaWdodCIsIm1lbnVfY29udGVudCIsImlubmVyV2lkdGgiLCJ0cmFuc2l0IiwiY2FsbGJhY2sxIiwiY2FsbGJhY2syIiwiY2FsbCIsInNob3ciLCJvcGVuIiwicmVwbGFjZVdpdGgiLCJmZWF0aGVyIiwiaWNvbnMiLCJ0b1N2ZyIsInNjcmVlbiIsIm1lbnVXcmFwcGVyIiwibWVudUNvbnRhaW5lciIsIm1lbnVOYXZpZ2F0aW9uIiwiZHJvcGRvd25NZW51IiwiZHJvcGRvd25TdWJNZW51IiwiY2hpbGRyZW4iLCJuYXYiLCJjbG9zZXN0IiwicmVwbGFjZSIsInRvZ2dsZSIsImluaXRpYWxpemVkIiwibmF2SXRlbSIsIm5vdCIsIlRSQU5TSVRJT05fRVZFTlRTIiwiVFJBTlNJVElPTl9QUk9QRVJUSUVTIiwiY29uZmlnIiwic3BlZWQiLCJleHRlbmQiLCJiaW5kX2V2ZW50cyIsIiR0aGlzIiwicmVtb3ZlIiwibWVudVRpdGxlIiwiY2xvbmUiLCJ0ZW1wVGl0bGUiLCJ0ZW1wTGluayIsInRleHQiLCJmcm9tVG9wIiwiYXBwZW5kVG8iLCJlIiwiJGxpc3RJdGVtIiwidHJpZ2dlciIsImhhcyIsIm1vZGVybk1lbnVFeHBhbmQiLCJtb2Rlcm5NZW51Q29sbGFwc2UiLCIkc3ViTGlzdCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJjYWxsYmFjayIsInN1Ykxpc3QiLCJ0b2dnbGVMaW5rIiwiZmlyc3QiLCJsaW5rSGVpZ2h0Iiwib3ZlcmZsb3ciLCJfYmluZEFuaW1hdGlvbkVuZEV2ZW50IiwiX2NsZWFySXRlbVN0eWxlIiwiZWwiLCJoYW5kbGVyIiwiY2IiLCJ0YXJnZXQiLCJfdW5iaW5kQW5pbWF0aW9uRW5kRXZlbnQiLCJkdXJhdGlvbiIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIl9tZW51QW5pbWF0aW9uRW5kRXZlbnRDYiIsImZvckVhY2giLCJldiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfbWVudUFuaW1hdGlvbkVuZEV2ZW50VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWZyZXNoIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==