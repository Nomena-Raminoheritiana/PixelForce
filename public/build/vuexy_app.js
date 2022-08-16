(self["webpackChunk"] = self["webpackChunk"] || []).push([["vuexy_app"],{

/***/ "./assets/js/vuexy/js/core/app.js":
/*!****************************************!*\
  !*** ./assets/js/vuexy/js/core/app.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

/*=========================================================================================
  File Name: app.js
  Description: Template related app JS.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
window.colors = {
  solid: {
    primary: '#7367F0',
    secondary: '#82868b',
    success: '#28C76F',
    info: '#00cfe8',
    warning: '#FF9F43',
    danger: '#EA5455',
    dark: '#4b4b4b',
    black: '#000',
    white: '#fff',
    body: '#f8f8f8'
  },
  light: {
    primary: '#7367F01a',
    secondary: '#82868b1a',
    success: '#28C76F1a',
    info: '#00cfe81a',
    warning: '#FF9F431a',
    danger: '#EA54551a',
    dark: '#4b4b4b1a'
  }
};

(function (window, document, $) {
  'use strict';

  var $html = $('html');
  var $body = $('body');
  var $textcolor = '#4e5154';
  var assetPath = '../../../app-assets/';

  if ($('body').attr('data-framework') === 'laravel') {
    assetPath = $('body').attr('data-asset-path');
  } // to remove sm control classes from datatables


  if ($.fn.dataTable) {
    $.extend($.fn.dataTable.ext.classes, {
      sFilterInput: 'form-control',
      sLengthSelect: 'form-select'
    });
  }

  $(window).on('load', function () {
    var rtl;
    var compactMenu = false;

    if ($body.hasClass('menu-collapsed') || localStorage.getItem('menuCollapsed') === 'true') {
      compactMenu = true;
    }

    if ($('html').data('textdirection') == 'rtl') {
      rtl = true;
    }

    setTimeout(function () {
      $html.removeClass('loading').addClass('loaded');
    }, 1200);

    if ($.app) {
      $.app.menu.init(compactMenu);
    } // Navigation configurations


    var config = {
      speed: 300 // set speed to expand / collapse menu

    };

    if ($.app && $.app.nav.initialized === false) {
      $.app.nav.init(config);
    }

    Unison.on('change', function (bp) {
      $.app.menu.change(compactMenu);
    }); // Tooltip Initialization
    // $('[data-bs-toggle="tooltip"]').tooltip({
    //   container: 'body'
    // });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    }); // Collapsible Card

    $('a[data-action="collapse"]').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.card').children('.card-content').collapse('toggle');
      $(this).closest('.card').find('[data-action="collapse"]').toggleClass('rotate');
    }); // Cart dropdown touchspin

    if ($('.touchspin-cart').length > 0) {
      $('.touchspin-cart').TouchSpin({
        buttondown_class: 'btn btn-primary',
        buttonup_class: 'btn btn-primary',
        buttondown_txt: feather.icons['minus'].toSvg(),
        buttonup_txt: feather.icons['plus'].toSvg()
      });
    } // Do not close cart or notification dropdown on click of the items


    $('.dropdown-notification .dropdown-menu, .dropdown-cart .dropdown-menu').on('click', function (e) {
      e.stopPropagation();
    }); //  Notifications & messages scrollable

    $('.scrollable-container').each(function () {
      var scrollable_container = new PerfectScrollbar($(this)[0], {
        wheelPropagation: false
      });
    }); // Reload Card

    $('a[data-action="reload"]').on('click', function () {
      var block_ele = $(this).closest('.card');
      var reloadActionOverlay;

      if ($html.hasClass('dark-layout')) {
        var reloadActionOverlay = '#10163a';
      } else {
        var reloadActionOverlay = '#fff';
      } // Block Element


      block_ele.block({
        message: feather.icons['refresh-cw'].toSvg({
          "class": 'font-medium-1 spinner text-primary'
        }),
        timeout: 2000,
        //unblock after 2 seconds
        overlayCSS: {
          backgroundColor: reloadActionOverlay,
          cursor: 'wait'
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: 'none'
        }
      });
    }); // Close Card

    $('a[data-action="close"]').on('click', function () {
      $(this).closest('.card').removeClass().slideUp('fast');
    });
    $('.card .heading-elements a[data-action="collapse"]').on('click', function () {
      var $this = $(this),
          card = $this.closest('.card');
      var cardHeight;

      if (parseInt(card[0].style.height, 10) > 0) {
        cardHeight = card.css('height');
        card.css('height', '').attr('data-height', cardHeight);
      } else {
        if (card.data('height')) {
          cardHeight = card.data('height');
          card.css('height', cardHeight).attr('data-height', '');
        }
      }
    }); // Add disabled class to input group when input is disabled

    $('input:disabled, textarea:disabled').closest('.input-group').addClass('disabled'); // Add sidebar group active class to active menu

    $('.main-menu-content').find('li.active').parents('li').addClass('sidebar-group-active'); // Add open class to parent list item if subitem is active except compact menu

    var menuType = $body.data('menu');

    if (menuType != 'horizontal-menu' && compactMenu === false) {
      $('.main-menu-content').find('li.active').parents('li').addClass('open');
    }

    if (menuType == 'horizontal-menu') {
      $('.main-menu-content').find('li.active').parents('li:not(.nav-item)').addClass('open');
      $('.main-menu-content').find('li.active').closest('li.nav-item').addClass('sidebar-group-active open'); // $(".main-menu-content")
      //   .find("li.active")
      //   .parents("li")
      //   .addClass("active");
    } //  Dynamic height for the chartjs div for the chart animations to work


    var chartjsDiv = $('.chartjs'),
        canvasHeight = chartjsDiv.children('canvas').attr('height'),
        mainMenu = $('.main-menu');
    chartjsDiv.css('height', canvasHeight);

    if ($body.hasClass('boxed-layout')) {
      if ($body.hasClass('vertical-overlay-menu')) {
        var menuWidth = mainMenu.width();
        var contentPosition = $('.app-content').position().left;
        var menuPositionAdjust = contentPosition - menuWidth;

        if ($body.hasClass('menu-flipped')) {
          mainMenu.css('right', menuPositionAdjust + 'px');
        } else {
          mainMenu.css('left', menuPositionAdjust + 'px');
        }
      }
    }
    /* Text Area Counter Set Start */


    $('.char-textarea').on('keyup', function (event) {
      checkTextAreaMaxLength(this, event); // to later change text color in dark layout

      $(this).addClass('active');
    });
    /*
    Checks the MaxLength of the Textarea
    -----------------------------------------------------
    @prerequisite:  textBox = textarea dom element
            e = textarea event
                    length = Max length of characters
    */

    function checkTextAreaMaxLength(textBox, e) {
      var maxLength = parseInt($(textBox).data('length')),
          counterValue = $('.textarea-counter-value'),
          charTextarea = $('.char-textarea');

      if (!checkSpecialKeys(e)) {
        if (textBox.value.length < maxLength - 1) textBox.value = textBox.value.substring(0, maxLength);
      }

      $('.char-count').html(textBox.value.length);

      if (textBox.value.length > maxLength) {
        counterValue.css('background-color', window.colors.solid.danger);
        charTextarea.css('color', window.colors.solid.danger); // to change text color after limit is maxedout out

        charTextarea.addClass('max-limit');
      } else {
        counterValue.css('background-color', window.colors.solid.primary);
        charTextarea.css('color', $textcolor);
        charTextarea.removeClass('max-limit');
      }

      return true;
    }
    /*
    Checks if the keyCode pressed is inside special chars
    -------------------------------------------------------
    @prerequisite:  e = e.keyCode object for the key pressed
    */


    function checkSpecialKeys(e) {
      if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) return false;else return true;
    }

    $('.content-overlay').on('click', function () {
      $('.search-list').removeClass('show');
      var searchInput = $('.search-input-close').closest('.search-input');

      if (searchInput.hasClass('open')) {
        searchInput.removeClass('open');
        searchInputInputfield.val('');
        searchInputInputfield.blur();
        searchList.removeClass('show');
      }

      $('.app-content').removeClass('show-overlay');
      $('.bookmark-wrapper .bookmark-input').removeClass('show');
    }); // To show shadow in main menu when menu scrolls

    var container = document.getElementsByClassName('main-menu-content');

    if (container.length > 0) {
      container[0].addEventListener('ps-scroll-y', function () {
        if ($(this).find('.ps__thumb-y').position().top > 0) {
          $('.shadow-bottom').css('display', 'block');
        } else {
          $('.shadow-bottom').css('display', 'none');
        }
      });
    }
  }); // Hide overlay menu on content overlay click on small screens

  $(document).on('click', '.sidenav-overlay', function (e) {
    // Hide menu
    $.app.menu.hide();
    return false;
  }); // Execute below code only if we find hammer js for touch swipe feature on small screen

  if (typeof Hammer !== 'undefined') {
    var rtl;

    if ($('html').data('textdirection') == 'rtl') {
      rtl = true;
    } // Swipe menu gesture


    var swipeInElement = document.querySelector('.drag-target'),
        swipeInAction = 'panright',
        swipeOutAction = 'panleft';

    if (rtl === true) {
      swipeInAction = 'panleft';
      swipeOutAction = 'panright';
    }

    if ($(swipeInElement).length > 0) {
      var swipeInMenu = new Hammer(swipeInElement);
      swipeInMenu.on(swipeInAction, function (ev) {
        if ($body.hasClass('vertical-overlay-menu')) {
          $.app.menu.open();
          return false;
        }
      });
    } // menu swipe out gesture


    setTimeout(function () {
      var swipeOutElement = document.querySelector('.main-menu');
      var swipeOutMenu;

      if ($(swipeOutElement).length > 0) {
        swipeOutMenu = new Hammer(swipeOutElement);
        swipeOutMenu.get('pan').set({
          direction: Hammer.DIRECTION_ALL,
          threshold: 250
        });
        swipeOutMenu.on(swipeOutAction, function (ev) {
          if ($body.hasClass('vertical-overlay-menu')) {
            $.app.menu.hide();
            return false;
          }
        });
      }
    }, 300); // menu close on overlay tap

    var swipeOutOverlayElement = document.querySelector('.sidenav-overlay');

    if ($(swipeOutOverlayElement).length > 0) {
      var swipeOutOverlayMenu = new Hammer(swipeOutOverlayElement);
      swipeOutOverlayMenu.on('tap', function (ev) {
        if ($body.hasClass('vertical-overlay-menu')) {
          $.app.menu.hide();
          return false;
        }
      });
    }
  }

  $(document).on('click', '.menu-toggle, .modern-nav-toggle', function (e) {
    e.preventDefault(); // Toggle menu

    $.app.menu.toggle();
    setTimeout(function () {
      $(window).trigger('resize');
    }, 200);

    if ($('#collapse-sidebar-switch').length > 0) {
      setTimeout(function () {
        if ($body.hasClass('menu-expanded') || $body.hasClass('menu-open')) {
          $('#collapse-sidebar-switch').prop('checked', false);
        } else {
          $('#collapse-sidebar-switch').prop('checked', true);
        }
      }, 50);
    } // Save menu collapsed status in localstorage


    if ($body.hasClass('menu-expanded') || $body.hasClass('menu-open')) {
      localStorage.setItem('menuCollapsed', false);
    } else {
      localStorage.setItem('menuCollapsed', true);
    } // Hides dropdown on click of menu toggle
    // $('[data-bs-toggle="dropdown"]').dropdown('hide');


    return false;
  }); // Add Children Class

  $('.navigation').find('li').has('ul').addClass('has-sub'); // Update manual scroller when window is resized

  $(window).resize(function () {
    $.app.menu.manualScroller.updateHeight();
  });
  $('#sidebar-page-navigation').on('click', 'a.nav-link', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this),
        href = $this.attr('href');
    var offset = $(href).offset();
    var scrollto = offset.top - 80; // minus fixed header height

    $('html, body').animate({
      scrollTop: scrollto
    }, 0);
    setTimeout(function () {
      $this.parent('.nav-item').siblings('.nav-item').children('.nav-link').removeClass('active');
      $this.addClass('active');
    }, 100);
  }); // main menu internationalization
  // init i18n and load language file

  if ($body.attr('data-framework') === 'laravel') {
    // change language according to data-language of dropdown item
    var language = $('html')[0].lang;

    if (language !== null) {
      // get the selected flag class
      var selectedLang = $('.dropdown-language').find('a[data-language=' + language + ']').text();
      var selectedFlag = $('.dropdown-language').find('a[data-language=' + language + '] .flag-icon').attr('class'); // set the class in button

      $('#dropdown-flag .selected-language').text(selectedLang);
      $('#dropdown-flag .flag-icon').removeClass().addClass(selectedFlag);
    }
  } else {
    i18next.use(window.i18nextXHRBackend).init({
      debug: false,
      fallbackLng: 'en',
      backend: {
        loadPath: assetPath + 'data/locales/{{lng}}.json'
      },
      returnObjects: true
    }, function (err, t) {
      // resources have been loaded
      jqueryI18next.init(i18next, $);
    }); // change language according to data-language of dropdown item

    $('.dropdown-language .dropdown-item').on('click', function () {
      var $this = $(this);
      $this.siblings('.selected').removeClass('selected');
      $this.addClass('selected');
      var selectedLang = $this.text();
      var selectedFlag = $this.find('.flag-icon').attr('class');
      $('#dropdown-flag .selected-language').text(selectedLang);
      $('#dropdown-flag .flag-icon').removeClass().addClass(selectedFlag);
      var currentLanguage = $this.data('language');
      i18next.changeLanguage(currentLanguage, function (err, t) {
        $('.main-menu, .horizontal-menu-wrapper').localize();
      });
    });
  }
  /********************* Bookmark & Search ***********************/
  // This variable is used for mouseenter and mouseleave events of search list


  var $filename = $('.search-input input').data('search'),
      bookmarkWrapper = $('.bookmark-wrapper'),
      bookmarkStar = $('.bookmark-wrapper .bookmark-star'),
      bookmarkInput = $('.bookmark-wrapper .bookmark-input'),
      navLinkSearch = $('.nav-link-search'),
      searchInput = $('.search-input'),
      searchInputInputfield = $('.search-input input'),
      searchList = $('.search-input .search-list'),
      appContent = $('.app-content'),
      bookmarkSearchList = $('.bookmark-input .search-list'); // Bookmark icon click

  bookmarkStar.on('click', function (e) {
    e.stopPropagation();
    bookmarkInput.toggleClass('show');
    bookmarkInput.find('input').val('');
    bookmarkInput.find('input').blur();
    bookmarkInput.find('input').focus();
    bookmarkWrapper.find('.search-list').addClass('show');
    var arrList = $('ul.nav.navbar-nav.bookmark-icons li'),
        $arrList = '',
        $activeItemClass = '';
    $('ul.search-list li').remove();

    for (var i = 0; i < arrList.length; i++) {
      if (i === 0) {
        $activeItemClass = 'current_item';
      } else {
        $activeItemClass = '';
      }

      var iconName = '',
          className = '';

      if ($(arrList[i].firstChild.firstChild).hasClass('feather')) {
        var classString = arrList[i].firstChild.firstChild.getAttribute('class');
        iconName = classString.split('feather-')[1].split(' ')[0];
        className = classString.split('feather-')[1].split(' ')[1];
      }

      $arrList += '<li class="auto-suggestion ' + $activeItemClass + '">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + arrList[i].firstChild.href + '>' + '<div class="d-flex justify-content-start align-items-center">' + feather.icons[iconName].toSvg({
        "class": 'me-75 ' + className
      }) + '<span>' + arrList[i].firstChild.dataset.bsOriginalTitle + '</span>' + '</div>' + feather.icons['star'].toSvg({
        "class": 'text-warning bookmark-icon float-end'
      }) + '</a>' + '</li>';
    }

    $('ul.search-list').append($arrList);
  }); // Navigation Search area Open

  navLinkSearch.on('click', function () {
    var $this = $(this);
    var searchInput = $(this).parent('.nav-search').find('.search-input');
    searchInput.addClass('open');
    searchInputInputfield.focus();
    searchList.find('li').remove();
    bookmarkInput.removeClass('show');
  }); // Navigation Search area Close

  $('.search-input-close').on('click', function () {
    var $this = $(this),
        searchInput = $(this).closest('.search-input');

    if (searchInput.hasClass('open')) {
      searchInput.removeClass('open');
      searchInputInputfield.val('');
      searchInputInputfield.blur();
      searchList.removeClass('show');
      appContent.removeClass('show-overlay');
    }
  }); // Filter

  if ($('.search-list-main').length) {
    var searchListMain = new PerfectScrollbar('.search-list-main', {
      wheelPropagation: false
    });
  }

  if ($('.search-list-bookmark').length) {
    var searchListBookmark = new PerfectScrollbar('.search-list-bookmark', {
      wheelPropagation: false
    });
  } // update Perfect Scrollbar on hover


  $('.search-list-main').mouseenter(function () {
    searchListMain.update();
  });
  searchInputInputfield.on('keyup', function (e) {
    $(this).closest('.search-list').addClass('show');

    if (e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 13) {
      if (e.keyCode == 27) {
        appContent.removeClass('show-overlay');
        bookmarkInput.find('input').val('');
        bookmarkInput.find('input').blur();
        searchInputInputfield.val('');
        searchInputInputfield.blur();
        searchInput.removeClass('open');

        if (searchInput.hasClass('show')) {
          $(this).removeClass('show');
          searchInput.removeClass('show');
        }
      } // Define variables


      var value = $(this).val().toLowerCase(),
          //get values of input on keyup
      activeClass = '',
          bookmark = false,
          liList = $('ul.search-list li'); // get all the list items of the search

      liList.remove(); // To check if current is bookmark input

      if ($(this).parent().hasClass('bookmark-input')) {
        bookmark = true;
      } // If input value is blank


      if (value != '') {
        appContent.addClass('show-overlay'); // condition for bookmark and search input click

        if (bookmarkInput.focus()) {
          bookmarkSearchList.addClass('show');
        } else {
          searchList.addClass('show');
          bookmarkSearchList.removeClass('show');
        }

        if (bookmark === false) {
          searchList.addClass('show');
          bookmarkSearchList.removeClass('show');
        }

        var $startList = '',
            $otherList = '',
            $htmlList = '',
            $bookmarkhtmlList = '',
            $pageList = '<li class="d-flex align-items-center">' + '<a href="#">' + '<h6 class="section-label mt-75 mb-0">Pages</h6>' + '</a>' + '</li>',
            $activeItemClass = '',
            $bookmarkIcon = '',
            $defaultList = '',
            a = 0; // getting json data from file for search results

        $.getJSON(assetPath + 'data/' + $filename + '.json', function (data) {
          for (var i = 0; i < data.listItems.length; i++) {
            // if current is bookmark then give class to star icon
            // for laravel
            if ($('body').attr('data-framework') === 'laravel') {
              data.listItems[i].url = assetPath + data.listItems[i].url;
            }

            if (bookmark === true) {
              activeClass = ''; // resetting active bookmark class

              var arrList = $('ul.nav.navbar-nav.bookmark-icons li'),
                  $arrList = ''; // Loop to check if current seach value match with the bookmarks already there in navbar

              for (var j = 0; j < arrList.length; j++) {
                if (data.listItems[i].name === arrList[j].firstChild.dataset.bsOriginalTitle) {
                  activeClass = ' text-warning';
                  break;
                } else {
                  activeClass = '';
                }
              }

              $bookmarkIcon = feather.icons['star'].toSvg({
                "class": 'bookmark-icon float-end' + activeClass
              });
            } // Search list item start with entered letters and create list


            if (data.listItems[i].name.toLowerCase().indexOf(value) == 0 && a < 5) {
              if (a === 0) {
                $activeItemClass = 'current_item';
              } else {
                $activeItemClass = '';
              }

              $startList += '<li class="auto-suggestion ' + $activeItemClass + '">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + data.listItems[i].url + '>' + '<div class="d-flex justify-content-start align-items-center">' + feather.icons[data.listItems[i].icon].toSvg({
                "class": 'me-75 '
              }) + '<span>' + data.listItems[i].name + '</span>' + '</div>' + $bookmarkIcon + '</a>' + '</li>';
              a++;
            }
          }

          for (var i = 0; i < data.listItems.length; i++) {
            if (bookmark === true) {
              activeClass = ''; // resetting active bookmark class

              var arrList = $('ul.nav.navbar-nav.bookmark-icons li'),
                  $arrList = ''; // Loop to check if current search value match with the bookmarks already there in navbar

              for (var j = 0; j < arrList.length; j++) {
                if (data.listItems[i].name === arrList[j].firstChild.dataset.bsOriginalTitle) {
                  activeClass = ' text-warning';
                } else {
                  activeClass = '';
                }
              }

              $bookmarkIcon = feather.icons['star'].toSvg({
                "class": 'bookmark-icon float-end' + activeClass
              });
            } // Search list item not start with letters and create list


            if (!(data.listItems[i].name.toLowerCase().indexOf(value) == 0) && data.listItems[i].name.toLowerCase().indexOf(value) > -1 && a < 5) {
              if (a === 0) {
                $activeItemClass = 'current_item';
              } else {
                $activeItemClass = '';
              }

              $otherList += '<li class="auto-suggestion ' + $activeItemClass + '">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + data.listItems[i].url + '>' + '<div class="d-flex justify-content-start align-items-center">' + feather.icons[data.listItems[i].icon].toSvg({
                "class": 'me-75 '
              }) + '<span>' + data.listItems[i].name + '</span>' + '</div>' + $bookmarkIcon + '</a>' + '</li>';
              a++;
            }
          }

          $defaultList = $('.main-search-list-defaultlist').html();

          if ($startList == '' && $otherList == '') {
            $otherList = $('.main-search-list-defaultlist-other-list').html();
          } // concatinating startlist, otherlist, defalutlist with pagelist


          $htmlList = $pageList.concat($startList, $otherList, $defaultList);
          $('ul.search-list').html($htmlList); // concatinating otherlist with startlist

          $bookmarkhtmlList = $startList.concat($otherList);
          $('ul.search-list-bookmark').html($bookmarkhtmlList); // Feather Icons
          // if (feather) {
          //   featherSVG();
          // }
        });
      } else {
        if (bookmark === true) {
          var arrList = $('ul.nav.navbar-nav.bookmark-icons li'),
              $arrList = '';

          for (var i = 0; i < arrList.length; i++) {
            if (i === 0) {
              $activeItemClass = 'current_item';
            } else {
              $activeItemClass = '';
            }

            var iconName = '',
                className = '';

            if ($(arrList[i].firstChild.firstChild).hasClass('feather')) {
              var classString = arrList[i].firstChild.firstChild.getAttribute('class');
              iconName = classString.split('feather-')[1].split(' ')[0];
              className = classString.split('feather-')[1].split(' ')[1];
            }

            $arrList += '<li class="auto-suggestion">' + '<a class="d-flex align-items-center justify-content-between w-100" href=' + arrList[i].firstChild.href + '>' + '<div class="d-flex justify-content-start align-items-center">' + feather.icons[iconName].toSvg({
              "class": 'me-75 '
            }) + '<span>' + arrList[i].firstChild.dataset.bsOriginalTitle + '</span>' + '</div>' + feather.icons['star'].toSvg({
              "class": 'text-warning bookmark-icon float-end'
            }) + '</a>' + '</li>';
          }

          $('ul.search-list').append($arrList); // Feather Icons
          // if (feather) {
          //   featherSVG();
          // }
        } else {
          // if search input blank, hide overlay
          if (appContent.hasClass('show-overlay')) {
            appContent.removeClass('show-overlay');
          } // If filter box is empty


          if (searchList.hasClass('show')) {
            searchList.removeClass('show');
          }
        }
      }
    }
  }); // Add class on hover of the list

  $(document).on('mouseenter', '.search-list li', function (e) {
    $(this).siblings().removeClass('current_item');
    $(this).addClass('current_item');
  });
  $(document).on('click', '.search-list li', function (e) {
    e.stopPropagation();
  });
  $('html').on('click', function ($this) {
    if (!$($this.target).hasClass('bookmark-icon')) {
      if (bookmarkSearchList.hasClass('show')) {
        bookmarkSearchList.removeClass('show');
      }

      if (bookmarkInput.hasClass('show')) {
        bookmarkInput.removeClass('show');
        appContent.removeClass('show-overlay');
      }
    }
  }); // Prevent closing bookmark dropdown on input textbox click

  $(document).on('click', '.bookmark-input input', function (e) {
    bookmarkInput.addClass('show');
    bookmarkSearchList.addClass('show');
  }); // Favorite star click

  $(document).on('click', '.bookmark-input .search-list .bookmark-icon', function (e) {
    e.stopPropagation();

    if ($(this).hasClass('text-warning')) {
      $(this).removeClass('text-warning');
      var arrList = $('ul.nav.navbar-nav.bookmark-icons li');

      for (var i = 0; i < arrList.length; i++) {
        if (arrList[i].firstChild.dataset.bsOriginalTitle == $(this).parent()[0].innerText) {
          arrList[i].remove();
        }
      }

      e.preventDefault();
    } else {
      var arrList = $('ul.nav.navbar-nav.bookmark-icons li');
      $(this).addClass('text-warning');
      e.preventDefault();
      var $url = $(this).parent()[0].href,
          $name = $(this).parent()[0].innerText,
          $listItem = '',
          $listItemDropdown = '',
          iconName = $(this).parent()[0].firstChild.firstChild.dataset.icon;

      if ($($(this).parent()[0].firstChild.firstChild).hasClass('feather')) {
        var classString = $(this).parent()[0].firstChild.firstChild.getAttribute('class');
        iconName = classString.split('feather-')[1].split(' ')[0];
      }

      $listItem = '<li class="nav-item d-none d-lg-block">' + '<a class="nav-link" href="' + $url + '" data-bs-toggle="tooltip" data-bs-placement="bottom" title="' + $name + '">' + feather.icons[iconName].toSvg({
        "class": 'ficon'
      }) + '</a>' + '</li>';
      $('ul.nav.bookmark-icons').append($listItem);
      $('[data-bs-toggle="tooltip"]').tooltip();
    }
  }); // If we use up key(38) Down key (40) or Enter key(13)

  $(window).on('keydown', function (e) {
    var $current = $('.search-list li.current_item'),
        $next,
        $prev;

    if (e.keyCode === 40) {
      $next = $current.next();
      $current.removeClass('current_item');
      $current = $next.addClass('current_item');
    } else if (e.keyCode === 38) {
      $prev = $current.prev();
      $current.removeClass('current_item');
      $current = $prev.addClass('current_item');
    }

    if (e.keyCode === 13 && $('.search-list li.current_item').length > 0) {
      var selected_item = $('.search-list li.current_item a');
      window.location = selected_item.attr('href');
      $(selected_item).trigger('click');
    }
  }); // Waves Effect

  Waves.init();
  Waves.attach(".btn:not([class*='btn-relief-']):not([class*='btn-gradient-']):not([class*='btn-outline-']):not([class*='btn-flat-'])", ['waves-float', 'waves-light']);
  Waves.attach("[class*='btn-outline-']");
  Waves.attach("[class*='btn-flat-']");
  $('.form-password-toggle .input-group-text').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        inputGroupText = $this.closest('.form-password-toggle'),
        formPasswordToggleIcon = $this,
        formPasswordToggleInput = inputGroupText.find('input');

    if (formPasswordToggleInput.attr('type') === 'text') {
      formPasswordToggleInput.attr('type', 'password');

      if (feather) {
        formPasswordToggleIcon.find('svg').replaceWith(feather.icons['eye'].toSvg({
          "class": 'font-small-4'
        }));
      }
    } else if (formPasswordToggleInput.attr('type') === 'password') {
      formPasswordToggleInput.attr('type', 'text');

      if (feather) {
        formPasswordToggleIcon.find('svg').replaceWith(feather.icons['eye-off'].toSvg({
          "class": 'font-small-4'
        }));
      }
    }
  }); // on window scroll button show/hide

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 400) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    } // On Scroll navbar color on horizontal menu


    if ($body.hasClass('navbar-static')) {
      var scroll = $(window).scrollTop();

      if (scroll > 65) {
        $('html:not(.dark-layout) .horizontal-menu .header-navbar.navbar-fixed').css({
          background: '#fff',
          'box-shadow': '0 4px 20px 0 rgba(0,0,0,.05)'
        });
        $('.horizontal-menu.dark-layout .header-navbar.navbar-fixed').css({
          background: '#161d31',
          'box-shadow': '0 4px 20px 0 rgba(0,0,0,.05)'
        });
        $('html:not(.dark-layout) .horizontal-menu .horizontal-menu-wrapper.header-navbar').css('background', '#fff');
        $('.dark-layout .horizontal-menu .horizontal-menu-wrapper.header-navbar').css('background', '#161d31');
      } else {
        $('html:not(.dark-layout) .horizontal-menu .header-navbar.navbar-fixed').css({
          background: '#f8f8f8',
          'box-shadow': 'none'
        });
        $('.dark-layout .horizontal-menu .header-navbar.navbar-fixed').css({
          background: '#161d31',
          'box-shadow': 'none'
        });
        $('html:not(.dark-layout) .horizontal-menu .horizontal-menu-wrapper.header-navbar').css('background', '#fff');
        $('.dark-layout .horizontal-menu .horizontal-menu-wrapper.header-navbar').css('background', '#161d31');
      }
    }
  }); // Click event to scroll to top

  $('.scroll-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 75);
  });

  function getCurrentLayout() {
    var currentLayout = '';

    if ($html.hasClass('dark-layout')) {
      currentLayout = 'dark-layout';
    } else if ($html.hasClass('bordered-layout')) {
      currentLayout = 'bordered-layout';
    } else if ($html.hasClass('semi-dark-layout')) {
      currentLayout = 'semi-dark-layout';
    } else {
      currentLayout = 'light-layout';
    }

    return currentLayout;
  } // Get the data layout, for blank set to light layout


  var dataLayout = $html.attr('data-layout') ? $html.attr('data-layout') : 'light-layout'; // Navbar Dark / Light Layout Toggle Switch

  $('.nav-link-style').on('click', function () {
    var currentLayout = getCurrentLayout(),
        switchToLayout = '',
        prevLayout = localStorage.getItem(dataLayout + '-prev-skin', currentLayout); // If currentLayout is not dark layout

    if (currentLayout !== 'dark-layout') {
      // Switch to dark
      switchToLayout = 'dark-layout';
    } else {
      // Switch to light
      // switchToLayout = prevLayout ? prevLayout : 'light-layout';
      if (currentLayout === prevLayout) {
        switchToLayout = 'light-layout';
      } else {
        switchToLayout = prevLayout ? prevLayout : 'light-layout';
      }
    } // Set Previous skin in local db


    localStorage.setItem(dataLayout + '-prev-skin', currentLayout); // Set Current skin in local db

    localStorage.setItem(dataLayout + '-current-skin', switchToLayout); // Call set layout

    setLayout(switchToLayout); // ToDo: Customizer fix

    $('.horizontal-menu .header-navbar.navbar-fixed').css({
      background: 'inherit',
      'box-shadow': 'inherit'
    });
    $('.horizontal-menu .horizontal-menu-wrapper.header-navbar').css('background', 'inherit');
  }); // Get current local storage layout

  var currentLocalStorageLayout = localStorage.getItem(dataLayout + '-current-skin'); // Set layout on screen load
  //? Comment it if you don't want to sync layout with local db
  // setLayout(currentLocalStorageLayout);

  function setLayout(currentLocalStorageLayout) {
    var navLinkStyle = $('.nav-link-style'),
        currentLayout = getCurrentLayout(),
        mainMenu = $('.main-menu'),
        navbar = $('.header-navbar'),
        // Witch to local storage layout if we have else current layout
    switchToLayout = currentLocalStorageLayout ? currentLocalStorageLayout : currentLayout;
    $html.removeClass('semi-dark-layout dark-layout bordered-layout');

    if (switchToLayout === 'dark-layout') {
      $html.addClass('dark-layout');
      mainMenu.removeClass('menu-light').addClass('menu-dark');
      navbar.removeClass('navbar-light').addClass('navbar-dark');
      navLinkStyle.find('.ficon').replaceWith(feather.icons['sun'].toSvg({
        "class": 'ficon'
      }));
    } else if (switchToLayout === 'bordered-layout') {
      $html.addClass('bordered-layout');
      mainMenu.removeClass('menu-dark').addClass('menu-light');
      navbar.removeClass('navbar-dark').addClass('navbar-light');
      navLinkStyle.find('.ficon').replaceWith(feather.icons['moon'].toSvg({
        "class": 'ficon'
      }));
    } else if (switchToLayout === 'semi-dark-layout') {
      $html.addClass('semi-dark-layout');
      mainMenu.removeClass('menu-dark').addClass('menu-light');
      navbar.removeClass('navbar-dark').addClass('navbar-light');
      navLinkStyle.find('.ficon').replaceWith(feather.icons['moon'].toSvg({
        "class": 'ficon'
      }));
    } else {
      $html.addClass('light-layout');
      mainMenu.removeClass('menu-dark').addClass('menu-light');
      navbar.removeClass('navbar-dark').addClass('navbar-light');
      navLinkStyle.find('.ficon').replaceWith(feather.icons['moon'].toSvg({
        "class": 'ficon'
      }));
    } // Set radio in customizer if we have


    if ($('input:radio[data-layout=' + switchToLayout + ']').length > 0) {
      setTimeout(function () {
        $('input:radio[data-layout=' + switchToLayout + ']').prop('checked', true);
      });
    }
  }
})(window, document, jQuery); // To use feather svg icons with different sizes


function featherSVG(iconSize) {
  // Feather Icons
  if (iconSize == undefined) {
    iconSize = '14';
  }

  return feather.replace({
    width: iconSize,
    height: iconSize
  });
} // jQuery Validation Global Defaults


if (typeof jQuery.validator === 'function') {
  jQuery.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function errorPlacement(error, element) {
      if (element.parent().hasClass('input-group') || element.hasClass('select2') || element.attr('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else if (element.hasClass('form-check-input')) {
        error.insertAfter(element.parent().siblings(':last'));
      } else {
        error.insertAfter(element);
      }

      if (element.parent().hasClass('input-group')) {
        element.parent().addClass('is-invalid');
      }
    },
    highlight: function highlight(element, errorClass, validClass) {
      $(element).addClass('error');

      if ($(element).parent().hasClass('input-group')) {
        $(element).parent().addClass('is-invalid');
      }
    },
    unhighlight: function unhighlight(element, errorClass, validClass) {
      $(element).removeClass('error');

      if ($(element).parent().hasClass('input-group')) {
        $(element).parent().removeClass('is-invalid');
      }
    }
  });
} // Add validation class to input-group (input group validation fix, currently disabled but will be useful in future)

/* function inputGroupValidation(el) {
  var validEl,
    invalidEl,
    elem = $(el);

  if (elem.hasClass('form-control')) {
    if ($(elem).is('.form-control:valid, .form-control.is-valid')) {
      validEl = elem;
    }
    if ($(elem).is('.form-control:invalid, .form-control.is-invalid')) {
      invalidEl = elem;
    }
  } else {
    validEl = elem.find('.form-control:valid, .form-control.is-valid');
    invalidEl = elem.find('.form-control:invalid, .form-control.is-invalid');
  }
  if (validEl !== undefined) {
    validEl.closest('.input-group').removeClass('.is-valid is-invalid').addClass('is-valid');
  }
  if (invalidEl !== undefined) {
    invalidEl.closest('.input-group').removeClass('.is-valid is-invalid').addClass('is-invalid');
  }
} */

/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-7d93ee","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-fb67f6","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_par-06157e"], () => (__webpack_exec__("./assets/js/vuexy/js/core/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQThDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOURZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLHFIQUE0QztBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsc0JBQXNCOztBQUVuRTtBQUNBO0FBQ0EsSUFBSSxtREFBbUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsb0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWV4eS9qcy9jb3JlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2xpY2Utc2ltcGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgRmlsZSBOYW1lOiBhcHAuanNcclxuICBEZXNjcmlwdGlvbjogVGVtcGxhdGUgcmVsYXRlZCBhcHAgSlMuXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEl0ZW0gTmFtZTogVnVleHkgIC0gVnVlanMsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4gIEF1dGhvcjogUGl4aW52ZW50XHJcbiAgQXV0aG9yIFVSTDogaGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbndpbmRvdy5jb2xvcnMgPSB7XHJcbiAgc29saWQ6IHtcclxuICAgIHByaW1hcnk6ICcjNzM2N0YwJyxcclxuICAgIHNlY29uZGFyeTogJyM4Mjg2OGInLFxyXG4gICAgc3VjY2VzczogJyMyOEM3NkYnLFxyXG4gICAgaW5mbzogJyMwMGNmZTgnLFxyXG4gICAgd2FybmluZzogJyNGRjlGNDMnLFxyXG4gICAgZGFuZ2VyOiAnI0VBNTQ1NScsXHJcbiAgICBkYXJrOiAnIzRiNGI0YicsXHJcbiAgICBibGFjazogJyMwMDAnLFxyXG4gICAgd2hpdGU6ICcjZmZmJyxcclxuICAgIGJvZHk6ICcjZjhmOGY4J1xyXG4gIH0sXHJcbiAgbGlnaHQ6IHtcclxuICAgIHByaW1hcnk6ICcjNzM2N0YwMWEnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzgyODY4YjFhJyxcclxuICAgIHN1Y2Nlc3M6ICcjMjhDNzZGMWEnLFxyXG4gICAgaW5mbzogJyMwMGNmZTgxYScsXHJcbiAgICB3YXJuaW5nOiAnI0ZGOUY0MzFhJyxcclxuICAgIGRhbmdlcjogJyNFQTU0NTUxYScsXHJcbiAgICBkYXJrOiAnIzRiNGI0YjFhJ1xyXG4gIH1cclxufTtcclxuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCAkKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciAkaHRtbCA9ICQoJ2h0bWwnKTtcclxuICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgdmFyICR0ZXh0Y29sb3IgPSAnIzRlNTE1NCc7XHJcbiAgdmFyIGFzc2V0UGF0aCA9ICcuLi8uLi8uLi9hcHAtYXNzZXRzLyc7XHJcblxyXG4gIGlmICgkKCdib2R5JykuYXR0cignZGF0YS1mcmFtZXdvcmsnKSA9PT0gJ2xhcmF2ZWwnKSB7XHJcbiAgICBhc3NldFBhdGggPSAkKCdib2R5JykuYXR0cignZGF0YS1hc3NldC1wYXRoJyk7XHJcbiAgfVxyXG5cclxuICAvLyB0byByZW1vdmUgc20gY29udHJvbCBjbGFzc2VzIGZyb20gZGF0YXRhYmxlc1xyXG4gIGlmICgkLmZuLmRhdGFUYWJsZSkge1xyXG4gICAgJC5leHRlbmQoJC5mbi5kYXRhVGFibGUuZXh0LmNsYXNzZXMsIHtcclxuICAgICAgc0ZpbHRlcklucHV0OiAnZm9ybS1jb250cm9sJyxcclxuICAgICAgc0xlbmd0aFNlbGVjdDogJ2Zvcm0tc2VsZWN0J1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcnRsO1xyXG4gICAgdmFyIGNvbXBhY3RNZW51ID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdtZW51LWNvbGxhcHNlZCcpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZW51Q29sbGFwc2VkJykgPT09ICd0cnVlJykge1xyXG4gICAgICBjb21wYWN0TWVudSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCQoJ2h0bWwnKS5kYXRhKCd0ZXh0ZGlyZWN0aW9uJykgPT0gJ3J0bCcpIHtcclxuICAgICAgcnRsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcbiAgICB9LCAxMjAwKTtcclxuXHJcbiAgIGlmKCQuYXBwKSB7XHJcbiAgICAgJC5hcHAubWVudS5pbml0KGNvbXBhY3RNZW51KTtcclxuICAgfVxyXG5cclxuXHJcbiAgICAvLyBOYXZpZ2F0aW9uIGNvbmZpZ3VyYXRpb25zXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzcGVlZDogMzAwIC8vIHNldCBzcGVlZCB0byBleHBhbmQgLyBjb2xsYXBzZSBtZW51XHJcbiAgICB9O1xyXG4gICAgaWYgKCQuYXBwICYmICQuYXBwLm5hdi5pbml0aWFsaXplZCA9PT0gZmFsc2UpIHtcclxuICAgICAgJC5hcHAubmF2LmluaXQoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBVbmlzb24ub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChicCkge1xyXG4gICAgICAkLmFwcC5tZW51LmNoYW5nZShjb21wYWN0TWVudSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUb29sdGlwIEluaXRpYWxpemF0aW9uXHJcbiAgICAvLyAkKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XHJcbiAgICAvLyAgIGNvbnRhaW5lcjogJ2JvZHknXHJcbiAgICAvLyB9KTtcclxuICAgIHZhciB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSk7XHJcbiAgICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XHJcbiAgICAgIHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb2xsYXBzaWJsZSBDYXJkXHJcbiAgICAkKCdhW2RhdGEtYWN0aW9uPVwiY29sbGFwc2VcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5jaGlsZHJlbignLmNhcmQtY29udGVudCcpLmNvbGxhcHNlKCd0b2dnbGUnKTtcclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImNvbGxhcHNlXCJdJykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FydCBkcm9wZG93biB0b3VjaHNwaW5cclxuICAgIGlmICgkKCcudG91Y2hzcGluLWNhcnQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICQoJy50b3VjaHNwaW4tY2FydCcpLlRvdWNoU3Bpbih7XHJcbiAgICAgICAgYnV0dG9uZG93bl9jbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgYnV0dG9udXBfY2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgIGJ1dHRvbmRvd25fdHh0OiBmZWF0aGVyLmljb25zWydtaW51cyddLnRvU3ZnKCksXHJcbiAgICAgICAgYnV0dG9udXBfdHh0OiBmZWF0aGVyLmljb25zWydwbHVzJ10udG9TdmcoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyBub3QgY2xvc2UgY2FydCBvciBub3RpZmljYXRpb24gZHJvcGRvd24gb24gY2xpY2sgb2YgdGhlIGl0ZW1zXHJcbiAgICAkKCcuZHJvcGRvd24tbm90aWZpY2F0aW9uIC5kcm9wZG93bi1tZW51LCAuZHJvcGRvd24tY2FydCAuZHJvcGRvd24tbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAgTm90aWZpY2F0aW9ucyAmIG1lc3NhZ2VzIHNjcm9sbGFibGVcclxuICAgICQoJy5zY3JvbGxhYmxlLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2Nyb2xsYWJsZV9jb250YWluZXIgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcigkKHRoaXMpWzBdLCB7XHJcbiAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZWxvYWQgQ2FyZFxyXG4gICAgJCgnYVtkYXRhLWFjdGlvbj1cInJlbG9hZFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGJsb2NrX2VsZSA9ICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKTtcclxuICAgICAgdmFyIHJlbG9hZEFjdGlvbk92ZXJsYXk7XHJcbiAgICAgIGlmICgkaHRtbC5oYXNDbGFzcygnZGFyay1sYXlvdXQnKSkge1xyXG4gICAgICAgIHZhciByZWxvYWRBY3Rpb25PdmVybGF5ID0gJyMxMDE2M2EnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciByZWxvYWRBY3Rpb25PdmVybGF5ID0gJyNmZmYnO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEJsb2NrIEVsZW1lbnRcclxuICAgICAgYmxvY2tfZWxlLmJsb2NrKHtcclxuICAgICAgICBtZXNzYWdlOiBmZWF0aGVyLmljb25zWydyZWZyZXNoLWN3J10udG9TdmcoeyBjbGFzczogJ2ZvbnQtbWVkaXVtLTEgc3Bpbm5lciB0ZXh0LXByaW1hcnknIH0pLFxyXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAsIC8vdW5ibG9jayBhZnRlciAyIHNlY29uZHNcclxuICAgICAgICBvdmVybGF5Q1NTOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJlbG9hZEFjdGlvbk92ZXJsYXksXHJcbiAgICAgICAgICBjdXJzb3I6ICd3YWl0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgQ2FyZFxyXG4gICAgJCgnYVtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykucmVtb3ZlQ2xhc3MoKS5zbGlkZVVwKCdmYXN0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY2FyZCAuaGVhZGluZy1lbGVtZW50cyBhW2RhdGEtYWN0aW9uPVwiY29sbGFwc2VcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgY2FyZCA9ICR0aGlzLmNsb3Nlc3QoJy5jYXJkJyk7XHJcbiAgICAgIHZhciBjYXJkSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHBhcnNlSW50KGNhcmRbMF0uc3R5bGUuaGVpZ2h0LCAxMCkgPiAwKSB7XHJcbiAgICAgICAgY2FyZEhlaWdodCA9IGNhcmQuY3NzKCdoZWlnaHQnKTtcclxuICAgICAgICBjYXJkLmNzcygnaGVpZ2h0JywgJycpLmF0dHIoJ2RhdGEtaGVpZ2h0JywgY2FyZEhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNhcmQuZGF0YSgnaGVpZ2h0JykpIHtcclxuICAgICAgICAgIGNhcmRIZWlnaHQgPSBjYXJkLmRhdGEoJ2hlaWdodCcpO1xyXG4gICAgICAgICAgY2FyZC5jc3MoJ2hlaWdodCcsIGNhcmRIZWlnaHQpLmF0dHIoJ2RhdGEtaGVpZ2h0JywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGRpc2FibGVkIGNsYXNzIHRvIGlucHV0IGdyb3VwIHdoZW4gaW5wdXQgaXMgZGlzYWJsZWRcclxuICAgICQoJ2lucHV0OmRpc2FibGVkLCB0ZXh0YXJlYTpkaXNhYmxlZCcpLmNsb3Nlc3QoJy5pbnB1dC1ncm91cCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgIC8vIEFkZCBzaWRlYmFyIGdyb3VwIGFjdGl2ZSBjbGFzcyB0byBhY3RpdmUgbWVudVxyXG4gICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuZmluZCgnbGkuYWN0aXZlJykucGFyZW50cygnbGknKS5hZGRDbGFzcygnc2lkZWJhci1ncm91cC1hY3RpdmUnKTtcclxuXHJcbiAgICAvLyBBZGQgb3BlbiBjbGFzcyB0byBwYXJlbnQgbGlzdCBpdGVtIGlmIHN1Yml0ZW0gaXMgYWN0aXZlIGV4Y2VwdCBjb21wYWN0IG1lbnVcclxuICAgIHZhciBtZW51VHlwZSA9ICRib2R5LmRhdGEoJ21lbnUnKTtcclxuICAgIGlmIChtZW51VHlwZSAhPSAnaG9yaXpvbnRhbC1tZW51JyAmJiBjb21wYWN0TWVudSA9PT0gZmFsc2UpIHtcclxuICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuZmluZCgnbGkuYWN0aXZlJykucGFyZW50cygnbGknKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbnVUeXBlID09ICdob3Jpem9udGFsLW1lbnUnKSB7XHJcbiAgICAgICQoJy5tYWluLW1lbnUtY29udGVudCcpLmZpbmQoJ2xpLmFjdGl2ZScpLnBhcmVudHMoJ2xpOm5vdCgubmF2LWl0ZW0pJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgJCgnLm1haW4tbWVudS1jb250ZW50JykuZmluZCgnbGkuYWN0aXZlJykuY2xvc2VzdCgnbGkubmF2LWl0ZW0nKS5hZGRDbGFzcygnc2lkZWJhci1ncm91cC1hY3RpdmUgb3BlbicpO1xyXG4gICAgICAvLyAkKFwiLm1haW4tbWVudS1jb250ZW50XCIpXHJcbiAgICAgIC8vICAgLmZpbmQoXCJsaS5hY3RpdmVcIilcclxuICAgICAgLy8gICAucGFyZW50cyhcImxpXCIpXHJcbiAgICAgIC8vICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBEeW5hbWljIGhlaWdodCBmb3IgdGhlIGNoYXJ0anMgZGl2IGZvciB0aGUgY2hhcnQgYW5pbWF0aW9ucyB0byB3b3JrXHJcbiAgICB2YXIgY2hhcnRqc0RpdiA9ICQoJy5jaGFydGpzJyksXHJcbiAgICAgIGNhbnZhc0hlaWdodCA9IGNoYXJ0anNEaXYuY2hpbGRyZW4oJ2NhbnZhcycpLmF0dHIoJ2hlaWdodCcpLFxyXG4gICAgICBtYWluTWVudSA9ICQoJy5tYWluLW1lbnUnKTtcclxuICAgIGNoYXJ0anNEaXYuY3NzKCdoZWlnaHQnLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgIGlmICgkYm9keS5oYXNDbGFzcygnYm94ZWQtbGF5b3V0JykpIHtcclxuICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgIHZhciBtZW51V2lkdGggPSBtYWluTWVudS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBjb250ZW50UG9zaXRpb24gPSAkKCcuYXBwLWNvbnRlbnQnKS5wb3NpdGlvbigpLmxlZnQ7XHJcbiAgICAgICAgdmFyIG1lbnVQb3NpdGlvbkFkanVzdCA9IGNvbnRlbnRQb3NpdGlvbiAtIG1lbnVXaWR0aDtcclxuICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ21lbnUtZmxpcHBlZCcpKSB7XHJcbiAgICAgICAgICBtYWluTWVudS5jc3MoJ3JpZ2h0JywgbWVudVBvc2l0aW9uQWRqdXN0ICsgJ3B4Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1haW5NZW51LmNzcygnbGVmdCcsIG1lbnVQb3NpdGlvbkFkanVzdCArICdweCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFRleHQgQXJlYSBDb3VudGVyIFNldCBTdGFydCAqL1xyXG5cclxuICAgICQoJy5jaGFyLXRleHRhcmVhJykub24oJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGNoZWNrVGV4dEFyZWFNYXhMZW5ndGgodGhpcywgZXZlbnQpO1xyXG4gICAgICAvLyB0byBsYXRlciBjaGFuZ2UgdGV4dCBjb2xvciBpbiBkYXJrIGxheW91dFxyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICBDaGVja3MgdGhlIE1heExlbmd0aCBvZiB0aGUgVGV4dGFyZWFcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBAcHJlcmVxdWlzaXRlOiAgdGV4dEJveCA9IHRleHRhcmVhIGRvbSBlbGVtZW50XHJcbiAgICAgICAgICAgIGUgPSB0ZXh0YXJlYSBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IE1heCBsZW5ndGggb2YgY2hhcmFjdGVyc1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNoZWNrVGV4dEFyZWFNYXhMZW5ndGgodGV4dEJveCwgZSkge1xyXG4gICAgICB2YXIgbWF4TGVuZ3RoID0gcGFyc2VJbnQoJCh0ZXh0Qm94KS5kYXRhKCdsZW5ndGgnKSksXHJcbiAgICAgICAgY291bnRlclZhbHVlID0gJCgnLnRleHRhcmVhLWNvdW50ZXItdmFsdWUnKSxcclxuICAgICAgICBjaGFyVGV4dGFyZWEgPSAkKCcuY2hhci10ZXh0YXJlYScpO1xyXG5cclxuICAgICAgaWYgKCFjaGVja1NwZWNpYWxLZXlzKGUpKSB7XHJcbiAgICAgICAgaWYgKHRleHRCb3gudmFsdWUubGVuZ3RoIDwgbWF4TGVuZ3RoIC0gMSkgdGV4dEJveC52YWx1ZSA9IHRleHRCb3gudmFsdWUuc3Vic3RyaW5nKDAsIG1heExlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgJCgnLmNoYXItY291bnQnKS5odG1sKHRleHRCb3gudmFsdWUubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXh0Qm94LnZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgICAgIGNvdW50ZXJWYWx1ZS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCB3aW5kb3cuY29sb3JzLnNvbGlkLmRhbmdlcik7XHJcbiAgICAgICAgY2hhclRleHRhcmVhLmNzcygnY29sb3InLCB3aW5kb3cuY29sb3JzLnNvbGlkLmRhbmdlcik7XHJcbiAgICAgICAgLy8gdG8gY2hhbmdlIHRleHQgY29sb3IgYWZ0ZXIgbGltaXQgaXMgbWF4ZWRvdXQgb3V0XHJcbiAgICAgICAgY2hhclRleHRhcmVhLmFkZENsYXNzKCdtYXgtbGltaXQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudGVyVmFsdWUuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgd2luZG93LmNvbG9ycy5zb2xpZC5wcmltYXJ5KTtcclxuICAgICAgICBjaGFyVGV4dGFyZWEuY3NzKCdjb2xvcicsICR0ZXh0Y29sb3IpO1xyXG4gICAgICAgIGNoYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnbWF4LWxpbWl0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIENoZWNrcyBpZiB0aGUga2V5Q29kZSBwcmVzc2VkIGlzIGluc2lkZSBzcGVjaWFsIGNoYXJzXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBAcHJlcmVxdWlzaXRlOiAgZSA9IGUua2V5Q29kZSBvYmplY3QgZm9yIHRoZSBrZXkgcHJlc3NlZFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNoZWNrU3BlY2lhbEtleXMoZSkge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlICE9IDggJiYgZS5rZXlDb2RlICE9IDQ2ICYmIGUua2V5Q29kZSAhPSAzNyAmJiBlLmtleUNvZGUgIT0gMzggJiYgZS5rZXlDb2RlICE9IDM5ICYmIGUua2V5Q29kZSAhPSA0MClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmNvbnRlbnQtb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnLnNlYXJjaC1saXN0JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgdmFyIHNlYXJjaElucHV0ID0gJCgnLnNlYXJjaC1pbnB1dC1jbG9zZScpLmNsb3Nlc3QoJy5zZWFyY2gtaW5wdXQnKTtcclxuICAgICAgaWYgKHNlYXJjaElucHV0Lmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICBzZWFyY2hJbnB1dC5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIHNlYXJjaElucHV0SW5wdXRmaWVsZC52YWwoJycpO1xyXG4gICAgICAgIHNlYXJjaElucHV0SW5wdXRmaWVsZC5ibHVyKCk7XHJcbiAgICAgICAgc2VhcmNoTGlzdC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKCcuYXBwLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnc2hvdy1vdmVybGF5Jyk7XHJcbiAgICAgICQoJy5ib29rbWFyay13cmFwcGVyIC5ib29rbWFyay1pbnB1dCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUbyBzaG93IHNoYWRvdyBpbiBtYWluIG1lbnUgd2hlbiBtZW51IHNjcm9sbHNcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW1lbnUtY29udGVudCcpO1xyXG4gICAgaWYgKGNvbnRhaW5lci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnRhaW5lclswXS5hZGRFdmVudExpc3RlbmVyKCdwcy1zY3JvbGwteScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcucHNfX3RodW1iLXknKS5wb3NpdGlvbigpLnRvcCA+IDApIHtcclxuICAgICAgICAgICQoJy5zaGFkb3ctYm90dG9tJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoJy5zaGFkb3ctYm90dG9tJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBIaWRlIG92ZXJsYXkgbWVudSBvbiBjb250ZW50IG92ZXJsYXkgY2xpY2sgb24gc21hbGwgc2NyZWVuc1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZW5hdi1vdmVybGF5JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIEhpZGUgbWVudVxyXG4gICAgJC5hcHAubWVudS5oaWRlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEV4ZWN1dGUgYmVsb3cgY29kZSBvbmx5IGlmIHdlIGZpbmQgaGFtbWVyIGpzIGZvciB0b3VjaCBzd2lwZSBmZWF0dXJlIG9uIHNtYWxsIHNjcmVlblxyXG4gIGlmICh0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdmFyIHJ0bDtcclxuICAgIGlmICgkKCdodG1sJykuZGF0YSgndGV4dGRpcmVjdGlvbicpID09ICdydGwnKSB7XHJcbiAgICAgIHJ0bCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3dpcGUgbWVudSBnZXN0dXJlXHJcbiAgICB2YXIgc3dpcGVJbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZy10YXJnZXQnKSxcclxuICAgICAgc3dpcGVJbkFjdGlvbiA9ICdwYW5yaWdodCcsXHJcbiAgICAgIHN3aXBlT3V0QWN0aW9uID0gJ3BhbmxlZnQnO1xyXG5cclxuICAgIGlmIChydGwgPT09IHRydWUpIHtcclxuICAgICAgc3dpcGVJbkFjdGlvbiA9ICdwYW5sZWZ0JztcclxuICAgICAgc3dpcGVPdXRBY3Rpb24gPSAncGFucmlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkKHN3aXBlSW5FbGVtZW50KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciBzd2lwZUluTWVudSA9IG5ldyBIYW1tZXIoc3dpcGVJbkVsZW1lbnQpO1xyXG5cclxuICAgICAgc3dpcGVJbk1lbnUub24oc3dpcGVJbkFjdGlvbiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgJC5hcHAubWVudS5vcGVuKCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZW51IHN3aXBlIG91dCBnZXN0dXJlXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHN3aXBlT3V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKTtcclxuICAgICAgdmFyIHN3aXBlT3V0TWVudTtcclxuXHJcbiAgICAgIGlmICgkKHN3aXBlT3V0RWxlbWVudCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN3aXBlT3V0TWVudSA9IG5ldyBIYW1tZXIoc3dpcGVPdXRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgc3dpcGVPdXRNZW51LmdldCgncGFuJykuc2V0KHtcclxuICAgICAgICAgIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwsXHJcbiAgICAgICAgICB0aHJlc2hvbGQ6IDI1MFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzd2lwZU91dE1lbnUub24oc3dpcGVPdXRBY3Rpb24sIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgICAkLmFwcC5tZW51LmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIG1lbnUgY2xvc2Ugb24gb3ZlcmxheSB0YXBcclxuICAgIHZhciBzd2lwZU91dE92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVuYXYtb3ZlcmxheScpO1xyXG5cclxuICAgIGlmICgkKHN3aXBlT3V0T3ZlcmxheUVsZW1lbnQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHN3aXBlT3V0T3ZlcmxheU1lbnUgPSBuZXcgSGFtbWVyKHN3aXBlT3V0T3ZlcmxheUVsZW1lbnQpO1xyXG5cclxuICAgICAgc3dpcGVPdXRPdmVybGF5TWVudS5vbigndGFwJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCd2ZXJ0aWNhbC1vdmVybGF5LW1lbnUnKSkge1xyXG4gICAgICAgICAgJC5hcHAubWVudS5oaWRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVudS10b2dnbGUsIC5tb2Rlcm4tbmF2LXRvZ2dsZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gVG9nZ2xlIG1lbnVcclxuICAgICQuYXBwLm1lbnUudG9nZ2xlKCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcclxuICAgIH0sIDIwMCk7XHJcblxyXG4gICAgaWYgKCQoJyNjb2xsYXBzZS1zaWRlYmFyLXN3aXRjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdtZW51LWV4cGFuZGVkJykgfHwgJGJvZHkuaGFzQ2xhc3MoJ21lbnUtb3BlbicpKSB7XHJcbiAgICAgICAgICAkKCcjY29sbGFwc2Utc2lkZWJhci1zd2l0Y2gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKCcjY29sbGFwc2Utc2lkZWJhci1zd2l0Y2gnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2F2ZSBtZW51IGNvbGxhcHNlZCBzdGF0dXMgaW4gbG9jYWxzdG9yYWdlXHJcbiAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ21lbnUtZXhwYW5kZWQnKSB8fCAkYm9keS5oYXNDbGFzcygnbWVudS1vcGVuJykpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lbnVDb2xsYXBzZWQnLCBmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVudUNvbGxhcHNlZCcsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhpZGVzIGRyb3Bkb3duIG9uIGNsaWNrIG9mIG1lbnUgdG9nZ2xlXHJcbiAgICAvLyAkKCdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXScpLmRyb3Bkb3duKCdoaWRlJyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgQ2hpbGRyZW4gQ2xhc3NcclxuICAkKCcubmF2aWdhdGlvbicpLmZpbmQoJ2xpJykuaGFzKCd1bCcpLmFkZENsYXNzKCdoYXMtc3ViJyk7XHJcbiAgLy8gVXBkYXRlIG1hbnVhbCBzY3JvbGxlciB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFwcC5tZW51Lm1hbnVhbFNjcm9sbGVyLnVwZGF0ZUhlaWdodCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc2lkZWJhci1wYWdlLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnYS5uYXYtbGluaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgaHJlZiA9ICR0aGlzLmF0dHIoJ2hyZWYnKTtcclxuICAgIHZhciBvZmZzZXQgPSAkKGhyZWYpLm9mZnNldCgpO1xyXG4gICAgdmFyIHNjcm9sbHRvID0gb2Zmc2V0LnRvcCAtIDgwOyAvLyBtaW51cyBmaXhlZCBoZWFkZXIgaGVpZ2h0XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsdG9cclxuICAgICAgfSxcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkdGhpcy5wYXJlbnQoJy5uYXYtaXRlbScpLnNpYmxpbmdzKCcubmF2LWl0ZW0nKS5jaGlsZHJlbignLm5hdi1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYWluIG1lbnUgaW50ZXJuYXRpb25hbGl6YXRpb25cclxuXHJcbiAgLy8gaW5pdCBpMThuIGFuZCBsb2FkIGxhbmd1YWdlIGZpbGVcclxuICBpZiAoJGJvZHkuYXR0cignZGF0YS1mcmFtZXdvcmsnKSA9PT0gJ2xhcmF2ZWwnKSB7XHJcbiAgICAvLyBjaGFuZ2UgbGFuZ3VhZ2UgYWNjb3JkaW5nIHRvIGRhdGEtbGFuZ3VhZ2Ugb2YgZHJvcGRvd24gaXRlbVxyXG4gICAgdmFyIGxhbmd1YWdlID0gJCgnaHRtbCcpWzBdLmxhbmc7XHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgLy8gZ2V0IHRoZSBzZWxlY3RlZCBmbGFnIGNsYXNzXHJcbiAgICAgIHZhciBzZWxlY3RlZExhbmcgPSAkKCcuZHJvcGRvd24tbGFuZ3VhZ2UnKVxyXG4gICAgICAgIC5maW5kKCdhW2RhdGEtbGFuZ3VhZ2U9JyArIGxhbmd1YWdlICsgJ10nKVxyXG4gICAgICAgIC50ZXh0KCk7XHJcbiAgICAgIHZhciBzZWxlY3RlZEZsYWcgPSAkKCcuZHJvcGRvd24tbGFuZ3VhZ2UnKVxyXG4gICAgICAgIC5maW5kKCdhW2RhdGEtbGFuZ3VhZ2U9JyArIGxhbmd1YWdlICsgJ10gLmZsYWctaWNvbicpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgIC8vIHNldCB0aGUgY2xhc3MgaW4gYnV0dG9uXHJcbiAgICAgICQoJyNkcm9wZG93bi1mbGFnIC5zZWxlY3RlZC1sYW5ndWFnZScpLnRleHQoc2VsZWN0ZWRMYW5nKTtcclxuICAgICAgJCgnI2Ryb3Bkb3duLWZsYWcgLmZsYWctaWNvbicpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3Moc2VsZWN0ZWRGbGFnKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaTE4bmV4dC51c2Uod2luZG93LmkxOG5leHRYSFJCYWNrZW5kKS5pbml0KFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiAnZW4nLFxyXG4gICAgICAgIGJhY2tlbmQ6IHtcclxuICAgICAgICAgIGxvYWRQYXRoOiBhc3NldFBhdGggKyAnZGF0YS9sb2NhbGVzL3t7bG5nfX0uanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldHVybk9iamVjdHM6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVyciwgdCkge1xyXG4gICAgICAgIC8vIHJlc291cmNlcyBoYXZlIGJlZW4gbG9hZGVkXHJcbiAgICAgICAganF1ZXJ5STE4bmV4dC5pbml0KGkxOG5leHQsICQpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNoYW5nZSBsYW5ndWFnZSBhY2NvcmRpbmcgdG8gZGF0YS1sYW5ndWFnZSBvZiBkcm9wZG93biBpdGVtXHJcbiAgICAkKCcuZHJvcGRvd24tbGFuZ3VhZ2UgLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICR0aGlzLnNpYmxpbmdzKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIHZhciBzZWxlY3RlZExhbmcgPSAkdGhpcy50ZXh0KCk7XHJcbiAgICAgIHZhciBzZWxlY3RlZEZsYWcgPSAkdGhpcy5maW5kKCcuZmxhZy1pY29uJykuYXR0cignY2xhc3MnKTtcclxuICAgICAgJCgnI2Ryb3Bkb3duLWZsYWcgLnNlbGVjdGVkLWxhbmd1YWdlJykudGV4dChzZWxlY3RlZExhbmcpO1xyXG4gICAgICAkKCcjZHJvcGRvd24tZmxhZyAuZmxhZy1pY29uJykucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhzZWxlY3RlZEZsYWcpO1xyXG4gICAgICB2YXIgY3VycmVudExhbmd1YWdlID0gJHRoaXMuZGF0YSgnbGFuZ3VhZ2UnKTtcclxuICAgICAgaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZShjdXJyZW50TGFuZ3VhZ2UsIGZ1bmN0aW9uIChlcnIsIHQpIHtcclxuICAgICAgICAkKCcubWFpbi1tZW51LCAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXInKS5sb2NhbGl6ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKiBCb29rbWFyayAmIFNlYXJjaCAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvLyBUaGlzIHZhcmlhYmxlIGlzIHVzZWQgZm9yIG1vdXNlZW50ZXIgYW5kIG1vdXNlbGVhdmUgZXZlbnRzIG9mIHNlYXJjaCBsaXN0XHJcbiAgdmFyICRmaWxlbmFtZSA9ICQoJy5zZWFyY2gtaW5wdXQgaW5wdXQnKS5kYXRhKCdzZWFyY2gnKSxcclxuICAgIGJvb2ttYXJrV3JhcHBlciA9ICQoJy5ib29rbWFyay13cmFwcGVyJyksXHJcbiAgICBib29rbWFya1N0YXIgPSAkKCcuYm9va21hcmstd3JhcHBlciAuYm9va21hcmstc3RhcicpLFxyXG4gICAgYm9va21hcmtJbnB1dCA9ICQoJy5ib29rbWFyay13cmFwcGVyIC5ib29rbWFyay1pbnB1dCcpLFxyXG4gICAgbmF2TGlua1NlYXJjaCA9ICQoJy5uYXYtbGluay1zZWFyY2gnKSxcclxuICAgIHNlYXJjaElucHV0ID0gJCgnLnNlYXJjaC1pbnB1dCcpLFxyXG4gICAgc2VhcmNoSW5wdXRJbnB1dGZpZWxkID0gJCgnLnNlYXJjaC1pbnB1dCBpbnB1dCcpLFxyXG4gICAgc2VhcmNoTGlzdCA9ICQoJy5zZWFyY2gtaW5wdXQgLnNlYXJjaC1saXN0JyksXHJcbiAgICBhcHBDb250ZW50ID0gJCgnLmFwcC1jb250ZW50JyksXHJcbiAgICBib29rbWFya1NlYXJjaExpc3QgPSAkKCcuYm9va21hcmstaW5wdXQgLnNlYXJjaC1saXN0Jyk7XHJcblxyXG4gIC8vIEJvb2ttYXJrIGljb24gY2xpY2tcclxuICBib29rbWFya1N0YXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBib29rbWFya0lucHV0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICBib29rbWFya0lucHV0LmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgIGJvb2ttYXJrSW5wdXQuZmluZCgnaW5wdXQnKS5ibHVyKCk7XHJcbiAgICBib29rbWFya0lucHV0LmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcclxuICAgIGJvb2ttYXJrV3JhcHBlci5maW5kKCcuc2VhcmNoLWxpc3QnKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cclxuICAgIHZhciBhcnJMaXN0ID0gJCgndWwubmF2Lm5hdmJhci1uYXYuYm9va21hcmstaWNvbnMgbGknKSxcclxuICAgICAgJGFyckxpc3QgPSAnJyxcclxuICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyA9ICcnO1xyXG5cclxuICAgICQoJ3VsLnNlYXJjaC1saXN0IGxpJykucmVtb3ZlKCk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyA9ICdjdXJyZW50X2l0ZW0nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRhY3RpdmVJdGVtQ2xhc3MgPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGljb25OYW1lID0gJycsXHJcbiAgICAgICAgY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgIGlmICgkKGFyckxpc3RbaV0uZmlyc3RDaGlsZC5maXJzdENoaWxkKS5oYXNDbGFzcygnZmVhdGhlcicpKSB7XHJcbiAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gYXJyTGlzdFtpXS5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIGljb25OYW1lID0gY2xhc3NTdHJpbmcuc3BsaXQoJ2ZlYXRoZXItJylbMV0uc3BsaXQoJyAnKVswXTtcclxuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc1N0cmluZy5zcGxpdCgnZmVhdGhlci0nKVsxXS5zcGxpdCgnICcpWzFdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkYXJyTGlzdCArPVxyXG4gICAgICAgICc8bGkgY2xhc3M9XCJhdXRvLXN1Z2dlc3Rpb24gJyArXHJcbiAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyArXHJcbiAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICc8YSBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIiBocmVmPScgK1xyXG4gICAgICAgIGFyckxpc3RbaV0uZmlyc3RDaGlsZC5ocmVmICtcclxuICAgICAgICAnPicgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXJcIj4nICtcclxuICAgICAgICBmZWF0aGVyLmljb25zW2ljb25OYW1lXS50b1N2Zyh7IGNsYXNzOiAnbWUtNzUgJyArIGNsYXNzTmFtZSB9KSArXHJcbiAgICAgICAgJzxzcGFuPicgK1xyXG4gICAgICAgIGFyckxpc3RbaV0uZmlyc3RDaGlsZC5kYXRhc2V0LmJzT3JpZ2luYWxUaXRsZSArXHJcbiAgICAgICAgJzwvc3Bhbj4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgZmVhdGhlci5pY29uc1snc3RhciddLnRvU3ZnKHsgY2xhc3M6ICd0ZXh0LXdhcm5pbmcgYm9va21hcmstaWNvbiBmbG9hdC1lbmQnIH0pICtcclxuICAgICAgICAnPC9hPicgK1xyXG4gICAgICAgICc8L2xpPic7XHJcbiAgICB9XHJcbiAgICAkKCd1bC5zZWFyY2gtbGlzdCcpLmFwcGVuZCgkYXJyTGlzdCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE5hdmlnYXRpb24gU2VhcmNoIGFyZWEgT3BlblxyXG4gIG5hdkxpbmtTZWFyY2gub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgIHZhciBzZWFyY2hJbnB1dCA9ICQodGhpcykucGFyZW50KCcubmF2LXNlYXJjaCcpLmZpbmQoJy5zZWFyY2gtaW5wdXQnKTtcclxuICAgIHNlYXJjaElucHV0LmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICBzZWFyY2hJbnB1dElucHV0ZmllbGQuZm9jdXMoKTtcclxuICAgIHNlYXJjaExpc3QuZmluZCgnbGknKS5yZW1vdmUoKTtcclxuICAgIGJvb2ttYXJrSW5wdXQucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gTmF2aWdhdGlvbiBTZWFyY2ggYXJlYSBDbG9zZVxyXG4gICQoJy5zZWFyY2gtaW5wdXQtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICBzZWFyY2hJbnB1dCA9ICQodGhpcykuY2xvc2VzdCgnLnNlYXJjaC1pbnB1dCcpO1xyXG4gICAgaWYgKHNlYXJjaElucHV0Lmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgc2VhcmNoSW5wdXQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgc2VhcmNoSW5wdXRJbnB1dGZpZWxkLnZhbCgnJyk7XHJcbiAgICAgIHNlYXJjaElucHV0SW5wdXRmaWVsZC5ibHVyKCk7XHJcbiAgICAgIHNlYXJjaExpc3QucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgYXBwQ29udGVudC5yZW1vdmVDbGFzcygnc2hvdy1vdmVybGF5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEZpbHRlclxyXG4gIGlmICgkKCcuc2VhcmNoLWxpc3QtbWFpbicpLmxlbmd0aCkge1xyXG4gICAgdmFyIHNlYXJjaExpc3RNYWluID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zZWFyY2gtbGlzdC1tYWluJywge1xyXG4gICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmICgkKCcuc2VhcmNoLWxpc3QtYm9va21hcmsnKS5sZW5ndGgpIHtcclxuICAgIHZhciBzZWFyY2hMaXN0Qm9va21hcmsgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNlYXJjaC1saXN0LWJvb2ttYXJrJywge1xyXG4gICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIHVwZGF0ZSBQZXJmZWN0IFNjcm9sbGJhciBvbiBob3ZlclxyXG4gICQoJy5zZWFyY2gtbGlzdC1tYWluJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICBzZWFyY2hMaXN0TWFpbi51cGRhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgc2VhcmNoSW5wdXRJbnB1dGZpZWxkLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy5zZWFyY2gtbGlzdCcpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICBpZiAoZS5rZXlDb2RlICE9PSAzOCAmJiBlLmtleUNvZGUgIT09IDQwICYmIGUua2V5Q29kZSAhPT0gMTMpIHtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xyXG4gICAgICAgIGFwcENvbnRlbnQucmVtb3ZlQ2xhc3MoJ3Nob3ctb3ZlcmxheScpO1xyXG4gICAgICAgIGJvb2ttYXJrSW5wdXQuZmluZCgnaW5wdXQnKS52YWwoJycpO1xyXG4gICAgICAgIGJvb2ttYXJrSW5wdXQuZmluZCgnaW5wdXQnKS5ibHVyKCk7XHJcbiAgICAgICAgc2VhcmNoSW5wdXRJbnB1dGZpZWxkLnZhbCgnJyk7XHJcbiAgICAgICAgc2VhcmNoSW5wdXRJbnB1dGZpZWxkLmJsdXIoKTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGlmIChzZWFyY2hJbnB1dC5oYXNDbGFzcygnc2hvdycpKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICBzZWFyY2hJbnB1dC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRGVmaW5lIHZhcmlhYmxlc1xyXG4gICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksIC8vZ2V0IHZhbHVlcyBvZiBpbnB1dCBvbiBrZXl1cFxyXG4gICAgICAgIGFjdGl2ZUNsYXNzID0gJycsXHJcbiAgICAgICAgYm9va21hcmsgPSBmYWxzZSxcclxuICAgICAgICBsaUxpc3QgPSAkKCd1bC5zZWFyY2gtbGlzdCBsaScpOyAvLyBnZXQgYWxsIHRoZSBsaXN0IGl0ZW1zIG9mIHRoZSBzZWFyY2hcclxuICAgICAgbGlMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAvLyBUbyBjaGVjayBpZiBjdXJyZW50IGlzIGJvb2ttYXJrIGlucHV0XHJcbiAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdib29rbWFyay1pbnB1dCcpKSB7XHJcbiAgICAgICAgYm9va21hcmsgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiBpbnB1dCB2YWx1ZSBpcyBibGFua1xyXG4gICAgICBpZiAodmFsdWUgIT0gJycpIHtcclxuICAgICAgICBhcHBDb250ZW50LmFkZENsYXNzKCdzaG93LW92ZXJsYXknKTtcclxuXHJcbiAgICAgICAgLy8gY29uZGl0aW9uIGZvciBib29rbWFyayBhbmQgc2VhcmNoIGlucHV0IGNsaWNrXHJcbiAgICAgICAgaWYgKGJvb2ttYXJrSW5wdXQuZm9jdXMoKSkge1xyXG4gICAgICAgICAgYm9va21hcmtTZWFyY2hMaXN0LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlYXJjaExpc3QuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgIGJvb2ttYXJrU2VhcmNoTGlzdC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9va21hcmsgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBzZWFyY2hMaXN0LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICBib29rbWFya1NlYXJjaExpc3QucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciAkc3RhcnRMaXN0ID0gJycsXHJcbiAgICAgICAgICAkb3RoZXJMaXN0ID0gJycsXHJcbiAgICAgICAgICAkaHRtbExpc3QgPSAnJyxcclxuICAgICAgICAgICRib29rbWFya2h0bWxMaXN0ID0gJycsXHJcbiAgICAgICAgICAkcGFnZUxpc3QgPVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPicgK1xyXG4gICAgICAgICAgICAnPGEgaHJlZj1cIiNcIj4nICtcclxuICAgICAgICAgICAgJzxoNiBjbGFzcz1cInNlY3Rpb24tbGFiZWwgbXQtNzUgbWItMFwiPlBhZ2VzPC9oNj4nICtcclxuICAgICAgICAgICAgJzwvYT4nICtcclxuICAgICAgICAgICAgJzwvbGk+JyxcclxuICAgICAgICAgICRhY3RpdmVJdGVtQ2xhc3MgPSAnJyxcclxuICAgICAgICAgICRib29rbWFya0ljb24gPSAnJyxcclxuICAgICAgICAgICRkZWZhdWx0TGlzdCA9ICcnLFxyXG4gICAgICAgICAgYSA9IDA7XHJcblxyXG4gICAgICAgIC8vIGdldHRpbmcganNvbiBkYXRhIGZyb20gZmlsZSBmb3Igc2VhcmNoIHJlc3VsdHNcclxuICAgICAgICAkLmdldEpTT04oYXNzZXRQYXRoICsgJ2RhdGEvJyArICRmaWxlbmFtZSArICcuanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgaXMgYm9va21hcmsgdGhlbiBnaXZlIGNsYXNzIHRvIHN0YXIgaWNvblxyXG4gICAgICAgICAgICAvLyBmb3IgbGFyYXZlbFxyXG4gICAgICAgICAgICBpZiAoJCgnYm9keScpLmF0dHIoJ2RhdGEtZnJhbWV3b3JrJykgPT09ICdsYXJhdmVsJykge1xyXG4gICAgICAgICAgICAgIGRhdGEubGlzdEl0ZW1zW2ldLnVybCA9IGFzc2V0UGF0aCArIGRhdGEubGlzdEl0ZW1zW2ldLnVybDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJvb2ttYXJrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MgPSAnJzsgLy8gcmVzZXR0aW5nIGFjdGl2ZSBib29rbWFyayBjbGFzc1xyXG4gICAgICAgICAgICAgIHZhciBhcnJMaXN0ID0gJCgndWwubmF2Lm5hdmJhci1uYXYuYm9va21hcmstaWNvbnMgbGknKSxcclxuICAgICAgICAgICAgICAgICRhcnJMaXN0ID0gJyc7XHJcbiAgICAgICAgICAgICAgLy8gTG9vcCB0byBjaGVjayBpZiBjdXJyZW50IHNlYWNoIHZhbHVlIG1hdGNoIHdpdGggdGhlIGJvb2ttYXJrcyBhbHJlYWR5IHRoZXJlIGluIG5hdmJhclxyXG4gICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGlzdEl0ZW1zW2ldLm5hbWUgPT09IGFyckxpc3Rbal0uZmlyc3RDaGlsZC5kYXRhc2V0LmJzT3JpZ2luYWxUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICcgdGV4dC13YXJuaW5nJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJGJvb2ttYXJrSWNvbiA9IGZlYXRoZXIuaWNvbnNbJ3N0YXInXS50b1N2Zyh7IGNsYXNzOiAnYm9va21hcmstaWNvbiBmbG9hdC1lbmQnICsgYWN0aXZlQ2xhc3MgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2VhcmNoIGxpc3QgaXRlbSBzdGFydCB3aXRoIGVudGVyZWQgbGV0dGVycyBhbmQgY3JlYXRlIGxpc3RcclxuICAgICAgICAgICAgaWYgKGRhdGEubGlzdEl0ZW1zW2ldLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA9PSAwICYmIGEgPCA1KSB7XHJcbiAgICAgICAgICAgICAgaWYgKGEgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICRhY3RpdmVJdGVtQ2xhc3MgPSAnY3VycmVudF9pdGVtJztcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkc3RhcnRMaXN0ICs9XHJcbiAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwiYXV0by1zdWdnZXN0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyArXHJcbiAgICAgICAgICAgICAgICAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCIgaHJlZj0nICtcclxuICAgICAgICAgICAgICAgIGRhdGEubGlzdEl0ZW1zW2ldLnVybCArXHJcbiAgICAgICAgICAgICAgICAnPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgZmVhdGhlci5pY29uc1tkYXRhLmxpc3RJdGVtc1tpXS5pY29uXS50b1N2Zyh7IGNsYXNzOiAnbWUtNzUgJyB9KSArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4+JyArXHJcbiAgICAgICAgICAgICAgICBkYXRhLmxpc3RJdGVtc1tpXS5uYW1lICtcclxuICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAkYm9va21hcmtJY29uICtcclxuICAgICAgICAgICAgICAgICc8L2E+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9saT4nO1xyXG4gICAgICAgICAgICAgIGErKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYm9va21hcmsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICcnOyAvLyByZXNldHRpbmcgYWN0aXZlIGJvb2ttYXJrIGNsYXNzXHJcbiAgICAgICAgICAgICAgdmFyIGFyckxpc3QgPSAkKCd1bC5uYXYubmF2YmFyLW5hdi5ib29rbWFyay1pY29ucyBsaScpLFxyXG4gICAgICAgICAgICAgICAgJGFyckxpc3QgPSAnJztcclxuICAgICAgICAgICAgICAvLyBMb29wIHRvIGNoZWNrIGlmIGN1cnJlbnQgc2VhcmNoIHZhbHVlIG1hdGNoIHdpdGggdGhlIGJvb2ttYXJrcyBhbHJlYWR5IHRoZXJlIGluIG5hdmJhclxyXG4gICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGlzdEl0ZW1zW2ldLm5hbWUgPT09IGFyckxpc3Rbal0uZmlyc3RDaGlsZC5kYXRhc2V0LmJzT3JpZ2luYWxUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICcgdGV4dC13YXJuaW5nJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAkYm9va21hcmtJY29uID0gZmVhdGhlci5pY29uc1snc3RhciddLnRvU3ZnKHsgY2xhc3M6ICdib29rbWFyay1pY29uIGZsb2F0LWVuZCcgKyBhY3RpdmVDbGFzcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTZWFyY2ggbGlzdCBpdGVtIG5vdCBzdGFydCB3aXRoIGxldHRlcnMgYW5kIGNyZWF0ZSBsaXN0XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAhKGRhdGEubGlzdEl0ZW1zW2ldLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA9PSAwKSAmJlxyXG4gICAgICAgICAgICAgIGRhdGEubGlzdEl0ZW1zW2ldLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+IC0xICYmXHJcbiAgICAgICAgICAgICAgYSA8IDVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGEgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICRhY3RpdmVJdGVtQ2xhc3MgPSAnY3VycmVudF9pdGVtJztcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkb3RoZXJMaXN0ICs9XHJcbiAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwiYXV0by1zdWdnZXN0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyArXHJcbiAgICAgICAgICAgICAgICAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCIgaHJlZj0nICtcclxuICAgICAgICAgICAgICAgIGRhdGEubGlzdEl0ZW1zW2ldLnVybCArXHJcbiAgICAgICAgICAgICAgICAnPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiPicgK1xyXG4gICAgICAgICAgICAgICAgZmVhdGhlci5pY29uc1tkYXRhLmxpc3RJdGVtc1tpXS5pY29uXS50b1N2Zyh7IGNsYXNzOiAnbWUtNzUgJyB9KSArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4+JyArXHJcbiAgICAgICAgICAgICAgICBkYXRhLmxpc3RJdGVtc1tpXS5uYW1lICtcclxuICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAkYm9va21hcmtJY29uICtcclxuICAgICAgICAgICAgICAgICc8L2E+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9saT4nO1xyXG4gICAgICAgICAgICAgIGErKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJGRlZmF1bHRMaXN0ID0gJCgnLm1haW4tc2VhcmNoLWxpc3QtZGVmYXVsdGxpc3QnKS5odG1sKCk7XHJcbiAgICAgICAgICBpZiAoJHN0YXJ0TGlzdCA9PSAnJyAmJiAkb3RoZXJMaXN0ID09ICcnKSB7XHJcbiAgICAgICAgICAgICRvdGhlckxpc3QgPSAkKCcubWFpbi1zZWFyY2gtbGlzdC1kZWZhdWx0bGlzdC1vdGhlci1saXN0JykuaHRtbCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gY29uY2F0aW5hdGluZyBzdGFydGxpc3QsIG90aGVybGlzdCwgZGVmYWx1dGxpc3Qgd2l0aCBwYWdlbGlzdFxyXG4gICAgICAgICAgJGh0bWxMaXN0ID0gJHBhZ2VMaXN0LmNvbmNhdCgkc3RhcnRMaXN0LCAkb3RoZXJMaXN0LCAkZGVmYXVsdExpc3QpO1xyXG4gICAgICAgICAgJCgndWwuc2VhcmNoLWxpc3QnKS5odG1sKCRodG1sTGlzdCk7XHJcbiAgICAgICAgICAvLyBjb25jYXRpbmF0aW5nIG90aGVybGlzdCB3aXRoIHN0YXJ0bGlzdFxyXG4gICAgICAgICAgJGJvb2ttYXJraHRtbExpc3QgPSAkc3RhcnRMaXN0LmNvbmNhdCgkb3RoZXJMaXN0KTtcclxuICAgICAgICAgICQoJ3VsLnNlYXJjaC1saXN0LWJvb2ttYXJrJykuaHRtbCgkYm9va21hcmtodG1sTGlzdCk7XHJcbiAgICAgICAgICAvLyBGZWF0aGVyIEljb25zXHJcbiAgICAgICAgICAvLyBpZiAoZmVhdGhlcikge1xyXG4gICAgICAgICAgLy8gICBmZWF0aGVyU1ZHKCk7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGJvb2ttYXJrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB2YXIgYXJyTGlzdCA9ICQoJ3VsLm5hdi5uYXZiYXItbmF2LmJvb2ttYXJrLWljb25zIGxpJyksXHJcbiAgICAgICAgICAgICRhcnJMaXN0ID0gJyc7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAkYWN0aXZlSXRlbUNsYXNzID0gJ2N1cnJlbnRfaXRlbSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJGFjdGl2ZUl0ZW1DbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSAnJyxcclxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnJztcclxuICAgICAgICAgICAgaWYgKCQoYXJyTGlzdFtpXS5maXJzdENoaWxkLmZpcnN0Q2hpbGQpLmhhc0NsYXNzKCdmZWF0aGVyJykpIHtcclxuICAgICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBhcnJMaXN0W2ldLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBjbGFzc1N0cmluZy5zcGxpdCgnZmVhdGhlci0nKVsxXS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzU3RyaW5nLnNwbGl0KCdmZWF0aGVyLScpWzFdLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGFyckxpc3QgKz1cclxuICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwiYXV0by1zdWdnZXN0aW9uXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiIGhyZWY9JyArXHJcbiAgICAgICAgICAgICAgYXJyTGlzdFtpXS5maXJzdENoaWxkLmhyZWYgK1xyXG4gICAgICAgICAgICAgICc+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiPicgK1xyXG4gICAgICAgICAgICAgIGZlYXRoZXIuaWNvbnNbaWNvbk5hbWVdLnRvU3ZnKHsgY2xhc3M6ICdtZS03NSAnIH0pICtcclxuICAgICAgICAgICAgICAnPHNwYW4+JyArXHJcbiAgICAgICAgICAgICAgYXJyTGlzdFtpXS5maXJzdENoaWxkLmRhdGFzZXQuYnNPcmlnaW5hbFRpdGxlICtcclxuICAgICAgICAgICAgICAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICBmZWF0aGVyLmljb25zWydzdGFyJ10udG9TdmcoeyBjbGFzczogJ3RleHQtd2FybmluZyBib29rbWFyay1pY29uIGZsb2F0LWVuZCcgfSkgK1xyXG4gICAgICAgICAgICAgICc8L2E+JyArXHJcbiAgICAgICAgICAgICAgJzwvbGk+JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoJ3VsLnNlYXJjaC1saXN0JykuYXBwZW5kKCRhcnJMaXN0KTtcclxuICAgICAgICAgIC8vIEZlYXRoZXIgSWNvbnNcclxuICAgICAgICAgIC8vIGlmIChmZWF0aGVyKSB7XHJcbiAgICAgICAgICAvLyAgIGZlYXRoZXJTVkcoKTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gaWYgc2VhcmNoIGlucHV0IGJsYW5rLCBoaWRlIG92ZXJsYXlcclxuICAgICAgICAgIGlmIChhcHBDb250ZW50Lmhhc0NsYXNzKCdzaG93LW92ZXJsYXknKSkge1xyXG4gICAgICAgICAgICBhcHBDb250ZW50LnJlbW92ZUNsYXNzKCdzaG93LW92ZXJsYXknKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIElmIGZpbHRlciBib3ggaXMgZW1wdHlcclxuICAgICAgICAgIGlmIChzZWFyY2hMaXN0Lmhhc0NsYXNzKCdzaG93JykpIHtcclxuICAgICAgICAgICAgc2VhcmNoTGlzdC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgY2xhc3Mgb24gaG92ZXIgb2YgdGhlIGxpc3RcclxuICAkKGRvY3VtZW50KS5vbignbW91c2VlbnRlcicsICcuc2VhcmNoLWxpc3QgbGknLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdjdXJyZW50X2l0ZW0nKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnRfaXRlbScpO1xyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VhcmNoLWxpc3QgbGknLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJCgnaHRtbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgkdGhpcykge1xyXG4gICAgaWYgKCEkKCR0aGlzLnRhcmdldCkuaGFzQ2xhc3MoJ2Jvb2ttYXJrLWljb24nKSkge1xyXG4gICAgICBpZiAoYm9va21hcmtTZWFyY2hMaXN0Lmhhc0NsYXNzKCdzaG93JykpIHtcclxuICAgICAgICBib29rbWFya1NlYXJjaExpc3QucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm9va21hcmtJbnB1dC5oYXNDbGFzcygnc2hvdycpKSB7XHJcbiAgICAgICAgYm9va21hcmtJbnB1dC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIGFwcENvbnRlbnQucmVtb3ZlQ2xhc3MoJ3Nob3ctb3ZlcmxheScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFByZXZlbnQgY2xvc2luZyBib29rbWFyayBkcm9wZG93biBvbiBpbnB1dCB0ZXh0Ym94IGNsaWNrXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5ib29rbWFyay1pbnB1dCBpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBib29rbWFya0lucHV0LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICBib29rbWFya1NlYXJjaExpc3QuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gRmF2b3JpdGUgc3RhciBjbGlja1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYm9va21hcmstaW5wdXQgLnNlYXJjaC1saXN0IC5ib29rbWFyay1pY29uJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGV4dC13YXJuaW5nJykpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC13YXJuaW5nJyk7XHJcbiAgICAgIHZhciBhcnJMaXN0ID0gJCgndWwubmF2Lm5hdmJhci1uYXYuYm9va21hcmstaWNvbnMgbGknKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyckxpc3RbaV0uZmlyc3RDaGlsZC5kYXRhc2V0LmJzT3JpZ2luYWxUaXRsZSA9PSAkKHRoaXMpLnBhcmVudCgpWzBdLmlubmVyVGV4dCkge1xyXG4gICAgICAgICAgYXJyTGlzdFtpXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGFyckxpc3QgPSAkKCd1bC5uYXYubmF2YmFyLW5hdi5ib29rbWFyay1pY29ucyBsaScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LXdhcm5pbmcnKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgJHVybCA9ICQodGhpcykucGFyZW50KClbMF0uaHJlZixcclxuICAgICAgICAkbmFtZSA9ICQodGhpcykucGFyZW50KClbMF0uaW5uZXJUZXh0LFxyXG4gICAgICAgICRsaXN0SXRlbSA9ICcnLFxyXG4gICAgICAgICRsaXN0SXRlbURyb3Bkb3duID0gJycsXHJcbiAgICAgICAgaWNvbk5hbWUgPSAkKHRoaXMpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5kYXRhc2V0Lmljb247XHJcbiAgICAgIGlmICgkKCQodGhpcykucGFyZW50KClbMF0uZmlyc3RDaGlsZC5maXJzdENoaWxkKS5oYXNDbGFzcygnZmVhdGhlcicpKSB7XHJcbiAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gJCh0aGlzKS5wYXJlbnQoKVswXS5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIGljb25OYW1lID0gY2xhc3NTdHJpbmcuc3BsaXQoJ2ZlYXRoZXItJylbMV0uc3BsaXQoJyAnKVswXTtcclxuICAgICAgfVxyXG4gICAgICAkbGlzdEl0ZW0gPVxyXG4gICAgICAgICc8bGkgY2xhc3M9XCJuYXYtaXRlbSBkLW5vbmUgZC1sZy1ibG9ja1wiPicgK1xyXG4gICAgICAgICc8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIicgK1xyXG4gICAgICAgICR1cmwgK1xyXG4gICAgICAgICdcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiJyArXHJcbiAgICAgICAgJG5hbWUgK1xyXG4gICAgICAgICdcIj4nICtcclxuICAgICAgICBmZWF0aGVyLmljb25zW2ljb25OYW1lXS50b1N2Zyh7IGNsYXNzOiAnZmljb24nIH0pICtcclxuICAgICAgICAnPC9hPicgK1xyXG4gICAgICAgICc8L2xpPic7XHJcbiAgICAgICQoJ3VsLm5hdi5ib29rbWFyay1pY29ucycpLmFwcGVuZCgkbGlzdEl0ZW0pO1xyXG4gICAgICAkKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBJZiB3ZSB1c2UgdXAga2V5KDM4KSBEb3duIGtleSAoNDApIG9yIEVudGVyIGtleSgxMylcclxuICAkKHdpbmRvdykub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyICRjdXJyZW50ID0gJCgnLnNlYXJjaC1saXN0IGxpLmN1cnJlbnRfaXRlbScpLFxyXG4gICAgICAkbmV4dCxcclxuICAgICAgJHByZXY7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAkbmV4dCA9ICRjdXJyZW50Lm5leHQoKTtcclxuICAgICAgJGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRfaXRlbScpO1xyXG4gICAgICAkY3VycmVudCA9ICRuZXh0LmFkZENsYXNzKCdjdXJyZW50X2l0ZW0nKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAkcHJldiA9ICRjdXJyZW50LnByZXYoKTtcclxuICAgICAgJGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRfaXRlbScpO1xyXG4gICAgICAkY3VycmVudCA9ICRwcmV2LmFkZENsYXNzKCdjdXJyZW50X2l0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkKCcuc2VhcmNoLWxpc3QgbGkuY3VycmVudF9pdGVtJykubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgc2VsZWN0ZWRfaXRlbSA9ICQoJy5zZWFyY2gtbGlzdCBsaS5jdXJyZW50X2l0ZW0gYScpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBzZWxlY3RlZF9pdGVtLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgJChzZWxlY3RlZF9pdGVtKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBXYXZlcyBFZmZlY3RcclxuICBXYXZlcy5pbml0KCk7XHJcbiAgV2F2ZXMuYXR0YWNoKFxyXG4gICAgXCIuYnRuOm5vdChbY2xhc3MqPSdidG4tcmVsaWVmLSddKTpub3QoW2NsYXNzKj0nYnRuLWdyYWRpZW50LSddKTpub3QoW2NsYXNzKj0nYnRuLW91dGxpbmUtJ10pOm5vdChbY2xhc3MqPSdidG4tZmxhdC0nXSlcIixcclxuICAgIFsnd2F2ZXMtZmxvYXQnLCAnd2F2ZXMtbGlnaHQnXVxyXG4gICk7XHJcbiAgV2F2ZXMuYXR0YWNoKFwiW2NsYXNzKj0nYnRuLW91dGxpbmUtJ11cIik7XHJcbiAgV2F2ZXMuYXR0YWNoKFwiW2NsYXNzKj0nYnRuLWZsYXQtJ11cIik7XHJcblxyXG4gICQoJy5mb3JtLXBhc3N3b3JkLXRvZ2dsZSAuaW5wdXQtZ3JvdXAtdGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICBpbnB1dEdyb3VwVGV4dCA9ICR0aGlzLmNsb3Nlc3QoJy5mb3JtLXBhc3N3b3JkLXRvZ2dsZScpLFxyXG4gICAgICBmb3JtUGFzc3dvcmRUb2dnbGVJY29uID0gJHRoaXMsXHJcbiAgICAgIGZvcm1QYXNzd29yZFRvZ2dsZUlucHV0ID0gaW5wdXRHcm91cFRleHQuZmluZCgnaW5wdXQnKTtcclxuXHJcbiAgICBpZiAoZm9ybVBhc3N3b3JkVG9nZ2xlSW5wdXQuYXR0cigndHlwZScpID09PSAndGV4dCcpIHtcclxuICAgICAgZm9ybVBhc3N3b3JkVG9nZ2xlSW5wdXQuYXR0cigndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICBpZiAoZmVhdGhlcikge1xyXG4gICAgICAgIGZvcm1QYXNzd29yZFRvZ2dsZUljb24uZmluZCgnc3ZnJykucmVwbGFjZVdpdGgoZmVhdGhlci5pY29uc1snZXllJ10udG9TdmcoeyBjbGFzczogJ2ZvbnQtc21hbGwtNCcgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1QYXNzd29yZFRvZ2dsZUlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICBmb3JtUGFzc3dvcmRUb2dnbGVJbnB1dC5hdHRyKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgaWYgKGZlYXRoZXIpIHtcclxuICAgICAgICBmb3JtUGFzc3dvcmRUb2dnbGVJY29uLmZpbmQoJ3N2ZycpLnJlcGxhY2VXaXRoKGZlYXRoZXIuaWNvbnNbJ2V5ZS1vZmYnXS50b1N2Zyh7IGNsYXNzOiAnZm9udC1zbWFsbC00JyB9KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gb24gd2luZG93IHNjcm9sbCBidXR0b24gc2hvdy9oaWRlXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDQwMCkge1xyXG4gICAgICAkKCcuc2Nyb2xsLXRvcCcpLmZhZGVJbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLnNjcm9sbC10b3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gU2Nyb2xsIG5hdmJhciBjb2xvciBvbiBob3Jpem9udGFsIG1lbnVcclxuICAgIGlmICgkYm9keS5oYXNDbGFzcygnbmF2YmFyLXN0YXRpYycpKSB7XHJcbiAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsID4gNjUpIHtcclxuICAgICAgICAkKCdodG1sOm5vdCguZGFyay1sYXlvdXQpIC5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWZpeGVkJykuY3NzKHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICAgICdib3gtc2hhZG93JzogJzAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4wNSknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmhvcml6b250YWwtbWVudS5kYXJrLWxheW91dCAuaGVhZGVyLW5hdmJhci5uYXZiYXItZml4ZWQnKS5jc3Moe1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJyMxNjFkMzEnLFxyXG4gICAgICAgICAgJ2JveC1zaGFkb3cnOiAnMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjA1KSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCdodG1sOm5vdCguZGFyay1sYXlvdXQpIC5ob3Jpem9udGFsLW1lbnUgLmhvcml6b250YWwtbWVudS13cmFwcGVyLmhlYWRlci1uYXZiYXInKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmZicpO1xyXG4gICAgICAgICQoJy5kYXJrLWxheW91dCAuaG9yaXpvbnRhbC1tZW51IC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlci5oZWFkZXItbmF2YmFyJykuY3NzKCdiYWNrZ3JvdW5kJywgJyMxNjFkMzEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCdodG1sOm5vdCguZGFyay1sYXlvdXQpIC5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWZpeGVkJykuY3NzKHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZjhmOGY4JyxcclxuICAgICAgICAgICdib3gtc2hhZG93JzogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmRhcmstbGF5b3V0IC5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWZpeGVkJykuY3NzKHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTYxZDMxJyxcclxuICAgICAgICAgICdib3gtc2hhZG93JzogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnaHRtbDpub3QoLmRhcmstbGF5b3V0KSAuaG9yaXpvbnRhbC1tZW51IC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlci5oZWFkZXItbmF2YmFyJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKTtcclxuICAgICAgICAkKCcuZGFyay1sYXlvdXQgLmhvcml6b250YWwtbWVudSAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIuaGVhZGVyLW5hdmJhcicpLmNzcygnYmFja2dyb3VuZCcsICcjMTYxZDMxJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQ2xpY2sgZXZlbnQgdG8gc2Nyb2xsIHRvIHRvcFxyXG4gICQoJy5zY3JvbGwtdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNzUpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50TGF5b3V0KCkge1xyXG4gICAgdmFyIGN1cnJlbnRMYXlvdXQgPSAnJztcclxuICAgIGlmICgkaHRtbC5oYXNDbGFzcygnZGFyay1sYXlvdXQnKSkge1xyXG4gICAgICBjdXJyZW50TGF5b3V0ID0gJ2RhcmstbGF5b3V0JztcclxuICAgIH0gZWxzZSBpZiAoJGh0bWwuaGFzQ2xhc3MoJ2JvcmRlcmVkLWxheW91dCcpKSB7XHJcbiAgICAgIGN1cnJlbnRMYXlvdXQgPSAnYm9yZGVyZWQtbGF5b3V0JztcclxuICAgIH0gZWxzZSBpZiAoJGh0bWwuaGFzQ2xhc3MoJ3NlbWktZGFyay1sYXlvdXQnKSkge1xyXG4gICAgICBjdXJyZW50TGF5b3V0ID0gJ3NlbWktZGFyay1sYXlvdXQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudExheW91dCA9ICdsaWdodC1sYXlvdXQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnRMYXlvdXQ7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdGhlIGRhdGEgbGF5b3V0LCBmb3IgYmxhbmsgc2V0IHRvIGxpZ2h0IGxheW91dFxyXG4gIHZhciBkYXRhTGF5b3V0ID0gJGh0bWwuYXR0cignZGF0YS1sYXlvdXQnKSA/ICRodG1sLmF0dHIoJ2RhdGEtbGF5b3V0JykgOiAnbGlnaHQtbGF5b3V0JztcclxuXHJcbiAgLy8gTmF2YmFyIERhcmsgLyBMaWdodCBMYXlvdXQgVG9nZ2xlIFN3aXRjaFxyXG4gICQoJy5uYXYtbGluay1zdHlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjdXJyZW50TGF5b3V0ID0gZ2V0Q3VycmVudExheW91dCgpLFxyXG4gICAgICBzd2l0Y2hUb0xheW91dCA9ICcnLFxyXG4gICAgICBwcmV2TGF5b3V0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUxheW91dCArICctcHJldi1za2luJywgY3VycmVudExheW91dCk7XHJcblxyXG4gICAgLy8gSWYgY3VycmVudExheW91dCBpcyBub3QgZGFyayBsYXlvdXRcclxuICAgIGlmIChjdXJyZW50TGF5b3V0ICE9PSAnZGFyay1sYXlvdXQnKSB7XHJcbiAgICAgIC8vIFN3aXRjaCB0byBkYXJrXHJcbiAgICAgIHN3aXRjaFRvTGF5b3V0ID0gJ2RhcmstbGF5b3V0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFN3aXRjaCB0byBsaWdodFxyXG4gICAgICAvLyBzd2l0Y2hUb0xheW91dCA9IHByZXZMYXlvdXQgPyBwcmV2TGF5b3V0IDogJ2xpZ2h0LWxheW91dCc7XHJcbiAgICAgIGlmIChjdXJyZW50TGF5b3V0ID09PSBwcmV2TGF5b3V0KSB7XHJcbiAgICAgICAgc3dpdGNoVG9MYXlvdXQgPSAnbGlnaHQtbGF5b3V0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2hUb0xheW91dCA9IHByZXZMYXlvdXQgPyBwcmV2TGF5b3V0IDogJ2xpZ2h0LWxheW91dCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNldCBQcmV2aW91cyBza2luIGluIGxvY2FsIGRiXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhTGF5b3V0ICsgJy1wcmV2LXNraW4nLCBjdXJyZW50TGF5b3V0KTtcclxuICAgIC8vIFNldCBDdXJyZW50IHNraW4gaW4gbG9jYWwgZGJcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFMYXlvdXQgKyAnLWN1cnJlbnQtc2tpbicsIHN3aXRjaFRvTGF5b3V0KTtcclxuXHJcbiAgICAvLyBDYWxsIHNldCBsYXlvdXRcclxuICAgIHNldExheW91dChzd2l0Y2hUb0xheW91dCk7XHJcblxyXG4gICAgLy8gVG9EbzogQ3VzdG9taXplciBmaXhcclxuICAgICQoJy5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWZpeGVkJykuY3NzKHtcclxuICAgICAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxyXG4gICAgICAnYm94LXNoYWRvdyc6ICdpbmhlcml0J1xyXG4gICAgfSk7XHJcbiAgICAkKCcuaG9yaXpvbnRhbC1tZW51IC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlci5oZWFkZXItbmF2YmFyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ2luaGVyaXQnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gR2V0IGN1cnJlbnQgbG9jYWwgc3RvcmFnZSBsYXlvdXRcclxuICB2YXIgY3VycmVudExvY2FsU3RvcmFnZUxheW91dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFMYXlvdXQgKyAnLWN1cnJlbnQtc2tpbicpO1xyXG5cclxuICAvLyBTZXQgbGF5b3V0IG9uIHNjcmVlbiBsb2FkXHJcbiAgLy8/IENvbW1lbnQgaXQgaWYgeW91IGRvbid0IHdhbnQgdG8gc3luYyBsYXlvdXQgd2l0aCBsb2NhbCBkYlxyXG4gIC8vIHNldExheW91dChjdXJyZW50TG9jYWxTdG9yYWdlTGF5b3V0KTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0TGF5b3V0KGN1cnJlbnRMb2NhbFN0b3JhZ2VMYXlvdXQpIHtcclxuICAgIHZhciBuYXZMaW5rU3R5bGUgPSAkKCcubmF2LWxpbmstc3R5bGUnKSxcclxuICAgICAgY3VycmVudExheW91dCA9IGdldEN1cnJlbnRMYXlvdXQoKSxcclxuICAgICAgbWFpbk1lbnUgPSAkKCcubWFpbi1tZW51JyksXHJcbiAgICAgIG5hdmJhciA9ICQoJy5oZWFkZXItbmF2YmFyJyksXHJcbiAgICAgIC8vIFdpdGNoIHRvIGxvY2FsIHN0b3JhZ2UgbGF5b3V0IGlmIHdlIGhhdmUgZWxzZSBjdXJyZW50IGxheW91dFxyXG4gICAgICBzd2l0Y2hUb0xheW91dCA9IGN1cnJlbnRMb2NhbFN0b3JhZ2VMYXlvdXQgPyBjdXJyZW50TG9jYWxTdG9yYWdlTGF5b3V0IDogY3VycmVudExheW91dDtcclxuXHJcbiAgICAkaHRtbC5yZW1vdmVDbGFzcygnc2VtaS1kYXJrLWxheW91dCBkYXJrLWxheW91dCBib3JkZXJlZC1sYXlvdXQnKTtcclxuXHJcbiAgICBpZiAoc3dpdGNoVG9MYXlvdXQgPT09ICdkYXJrLWxheW91dCcpIHtcclxuICAgICAgJGh0bWwuYWRkQ2xhc3MoJ2RhcmstbGF5b3V0Jyk7XHJcbiAgICAgIG1haW5NZW51LnJlbW92ZUNsYXNzKCdtZW51LWxpZ2h0JykuYWRkQ2xhc3MoJ21lbnUtZGFyaycpO1xyXG4gICAgICBuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1saWdodCcpLmFkZENsYXNzKCduYXZiYXItZGFyaycpO1xyXG4gICAgICBuYXZMaW5rU3R5bGUuZmluZCgnLmZpY29uJykucmVwbGFjZVdpdGgoZmVhdGhlci5pY29uc1snc3VuJ10udG9TdmcoeyBjbGFzczogJ2ZpY29uJyB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKHN3aXRjaFRvTGF5b3V0ID09PSAnYm9yZGVyZWQtbGF5b3V0Jykge1xyXG4gICAgICAkaHRtbC5hZGRDbGFzcygnYm9yZGVyZWQtbGF5b3V0Jyk7XHJcbiAgICAgIG1haW5NZW51LnJlbW92ZUNsYXNzKCdtZW51LWRhcmsnKS5hZGRDbGFzcygnbWVudS1saWdodCcpO1xyXG4gICAgICBuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1kYXJrJykuYWRkQ2xhc3MoJ25hdmJhci1saWdodCcpO1xyXG4gICAgICBuYXZMaW5rU3R5bGUuZmluZCgnLmZpY29uJykucmVwbGFjZVdpdGgoZmVhdGhlci5pY29uc1snbW9vbiddLnRvU3ZnKHsgY2xhc3M6ICdmaWNvbicgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChzd2l0Y2hUb0xheW91dCA9PT0gJ3NlbWktZGFyay1sYXlvdXQnKSB7XHJcbiAgICAgICRodG1sLmFkZENsYXNzKCdzZW1pLWRhcmstbGF5b3V0Jyk7XHJcbiAgICAgIG1haW5NZW51LnJlbW92ZUNsYXNzKCdtZW51LWRhcmsnKS5hZGRDbGFzcygnbWVudS1saWdodCcpO1xyXG4gICAgICBuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1kYXJrJykuYWRkQ2xhc3MoJ25hdmJhci1saWdodCcpO1xyXG4gICAgICBuYXZMaW5rU3R5bGUuZmluZCgnLmZpY29uJykucmVwbGFjZVdpdGgoZmVhdGhlci5pY29uc1snbW9vbiddLnRvU3ZnKHsgY2xhc3M6ICdmaWNvbicgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGh0bWwuYWRkQ2xhc3MoJ2xpZ2h0LWxheW91dCcpO1xyXG4gICAgICBtYWluTWVudS5yZW1vdmVDbGFzcygnbWVudS1kYXJrJykuYWRkQ2xhc3MoJ21lbnUtbGlnaHQnKTtcclxuICAgICAgbmF2YmFyLnJlbW92ZUNsYXNzKCduYXZiYXItZGFyaycpLmFkZENsYXNzKCduYXZiYXItbGlnaHQnKTtcclxuICAgICAgbmF2TGlua1N0eWxlLmZpbmQoJy5maWNvbicpLnJlcGxhY2VXaXRoKGZlYXRoZXIuaWNvbnNbJ21vb24nXS50b1N2Zyh7IGNsYXNzOiAnZmljb24nIH0pKTtcclxuICAgIH1cclxuICAgIC8vIFNldCByYWRpbyBpbiBjdXN0b21pemVyIGlmIHdlIGhhdmVcclxuICAgIGlmICgkKCdpbnB1dDpyYWRpb1tkYXRhLWxheW91dD0nICsgc3dpdGNoVG9MYXlvdXQgKyAnXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnaW5wdXQ6cmFkaW9bZGF0YS1sYXlvdXQ9JyArIHN3aXRjaFRvTGF5b3V0ICsgJ10nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcclxuXHJcbi8vIFRvIHVzZSBmZWF0aGVyIHN2ZyBpY29ucyB3aXRoIGRpZmZlcmVudCBzaXplc1xyXG5mdW5jdGlvbiBmZWF0aGVyU1ZHKGljb25TaXplKSB7XHJcbiAgLy8gRmVhdGhlciBJY29uc1xyXG4gIGlmIChpY29uU2l6ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgIGljb25TaXplID0gJzE0JztcclxuICB9XHJcbiAgcmV0dXJuIGZlYXRoZXIucmVwbGFjZSh7IHdpZHRoOiBpY29uU2l6ZSwgaGVpZ2h0OiBpY29uU2l6ZSB9KTtcclxufVxyXG5cclxuLy8galF1ZXJ5IFZhbGlkYXRpb24gR2xvYmFsIERlZmF1bHRzXHJcbmlmICh0eXBlb2YgalF1ZXJ5LnZhbGlkYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gIGpRdWVyeS52YWxpZGF0b3Iuc2V0RGVmYXVsdHMoe1xyXG4gICAgZXJyb3JFbGVtZW50OiAnc3BhbicsXHJcbiAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24gKGVycm9yLCBlbGVtZW50KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbGVtZW50LnBhcmVudCgpLmhhc0NsYXNzKCdpbnB1dC1ncm91cCcpIHx8XHJcbiAgICAgICAgZWxlbWVudC5oYXNDbGFzcygnc2VsZWN0MicpIHx8XHJcbiAgICAgICAgZWxlbWVudC5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCdcclxuICAgICAgKSB7XHJcbiAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcygnZm9ybS1jaGVjay1pbnB1dCcpKSB7XHJcbiAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKS5zaWJsaW5ncygnOmxhc3QnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50LnBhcmVudCgpLmhhc0NsYXNzKCdpbnB1dC1ncm91cCcpKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xyXG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKCdlcnJvcicpO1xyXG4gICAgICBpZiAoJChlbGVtZW50KS5wYXJlbnQoKS5oYXNDbGFzcygnaW5wdXQtZ3JvdXAnKSkge1xyXG4gICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xyXG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG4gICAgICBpZiAoJChlbGVtZW50KS5wYXJlbnQoKS5oYXNDbGFzcygnaW5wdXQtZ3JvdXAnKSkge1xyXG4gICAgICAgICQoZWxlbWVudCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBBZGQgdmFsaWRhdGlvbiBjbGFzcyB0byBpbnB1dC1ncm91cCAoaW5wdXQgZ3JvdXAgdmFsaWRhdGlvbiBmaXgsIGN1cnJlbnRseSBkaXNhYmxlZCBidXQgd2lsbCBiZSB1c2VmdWwgaW4gZnV0dXJlKVxyXG4vKiBmdW5jdGlvbiBpbnB1dEdyb3VwVmFsaWRhdGlvbihlbCkge1xyXG4gIHZhciB2YWxpZEVsLFxyXG4gICAgaW52YWxpZEVsLFxyXG4gICAgZWxlbSA9ICQoZWwpO1xyXG5cclxuICBpZiAoZWxlbS5oYXNDbGFzcygnZm9ybS1jb250cm9sJykpIHtcclxuICAgIGlmICgkKGVsZW0pLmlzKCcuZm9ybS1jb250cm9sOnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkJykpIHtcclxuICAgICAgdmFsaWRFbCA9IGVsZW07XHJcbiAgICB9XHJcbiAgICBpZiAoJChlbGVtKS5pcygnLmZvcm0tY29udHJvbDppbnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQnKSkge1xyXG4gICAgICBpbnZhbGlkRWwgPSBlbGVtO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWxpZEVsID0gZWxlbS5maW5kKCcuZm9ybS1jb250cm9sOnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkJyk7XHJcbiAgICBpbnZhbGlkRWwgPSBlbGVtLmZpbmQoJy5mb3JtLWNvbnRyb2w6aW52YWxpZCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkJyk7XHJcbiAgfVxyXG4gIGlmICh2YWxpZEVsICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhbGlkRWwuY2xvc2VzdCgnLmlucHV0LWdyb3VwJykucmVtb3ZlQ2xhc3MoJy5pcy12YWxpZCBpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJyk7XHJcbiAgfVxyXG4gIGlmIChpbnZhbGlkRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW52YWxpZEVsLmNsb3Nlc3QoJy5pbnB1dC1ncm91cCcpLnJlbW92ZUNsYXNzKCcuaXMtdmFsaWQgaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XHJcbiAgfVxyXG59ICovXHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ29uc3RydWN0b3IoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbnZhciBBcnJheSA9IGdsb2JhbC5BcnJheTtcbnZhciBtYXggPSBNYXRoLm1heDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICB2YXIgcmVzdWx0ID0gQXJyYXkobWF4KGZpbiAtIGssIDApKTtcbiAgZm9yICh2YXIgbiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICByZXN1bHQubGVuZ3RoID0gbjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoW10uc2xpY2UpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY29uc3RydWN0b3InKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFDb25zdHJ1Y3RvcihTKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93IFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsid2luZG93IiwiY29sb3JzIiwic29saWQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwiZGFuZ2VyIiwiZGFyayIsImJsYWNrIiwid2hpdGUiLCJib2R5IiwibGlnaHQiLCJkb2N1bWVudCIsIiQiLCIkaHRtbCIsIiRib2R5IiwiJHRleHRjb2xvciIsImFzc2V0UGF0aCIsImF0dHIiLCJmbiIsImRhdGFUYWJsZSIsImV4dGVuZCIsImV4dCIsImNsYXNzZXMiLCJzRmlsdGVySW5wdXQiLCJzTGVuZ3RoU2VsZWN0Iiwib24iLCJydGwiLCJjb21wYWN0TWVudSIsImhhc0NsYXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFwcCIsIm1lbnUiLCJpbml0IiwiY29uZmlnIiwic3BlZWQiLCJuYXYiLCJpbml0aWFsaXplZCIsIlVuaXNvbiIsImJwIiwiY2hhbmdlIiwidG9vbHRpcFRyaWdnZXJMaXN0Iiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsInRvb2x0aXBMaXN0IiwibWFwIiwidG9vbHRpcFRyaWdnZXJFbCIsImJvb3RzdHJhcCIsIlRvb2x0aXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwiY2hpbGRyZW4iLCJjb2xsYXBzZSIsImZpbmQiLCJ0b2dnbGVDbGFzcyIsImxlbmd0aCIsIlRvdWNoU3BpbiIsImJ1dHRvbmRvd25fY2xhc3MiLCJidXR0b251cF9jbGFzcyIsImJ1dHRvbmRvd25fdHh0IiwiZmVhdGhlciIsImljb25zIiwidG9TdmciLCJidXR0b251cF90eHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlYWNoIiwic2Nyb2xsYWJsZV9jb250YWluZXIiLCJQZXJmZWN0U2Nyb2xsYmFyIiwid2hlZWxQcm9wYWdhdGlvbiIsImJsb2NrX2VsZSIsInJlbG9hZEFjdGlvbk92ZXJsYXkiLCJibG9jayIsIm1lc3NhZ2UiLCJ0aW1lb3V0Iiwib3ZlcmxheUNTUyIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImNzcyIsImJvcmRlciIsInBhZGRpbmciLCJzbGlkZVVwIiwiJHRoaXMiLCJjYXJkIiwiY2FyZEhlaWdodCIsInBhcnNlSW50Iiwic3R5bGUiLCJoZWlnaHQiLCJwYXJlbnRzIiwibWVudVR5cGUiLCJjaGFydGpzRGl2IiwiY2FudmFzSGVpZ2h0IiwibWFpbk1lbnUiLCJtZW51V2lkdGgiLCJ3aWR0aCIsImNvbnRlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwibGVmdCIsIm1lbnVQb3NpdGlvbkFkanVzdCIsImV2ZW50IiwiY2hlY2tUZXh0QXJlYU1heExlbmd0aCIsInRleHRCb3giLCJtYXhMZW5ndGgiLCJjb3VudGVyVmFsdWUiLCJjaGFyVGV4dGFyZWEiLCJjaGVja1NwZWNpYWxLZXlzIiwidmFsdWUiLCJzdWJzdHJpbmciLCJodG1sIiwia2V5Q29kZSIsInNlYXJjaElucHV0Iiwic2VhcmNoSW5wdXRJbnB1dGZpZWxkIiwidmFsIiwiYmx1ciIsInNlYXJjaExpc3QiLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvcCIsImhpZGUiLCJIYW1tZXIiLCJzd2lwZUluRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzd2lwZUluQWN0aW9uIiwic3dpcGVPdXRBY3Rpb24iLCJzd2lwZUluTWVudSIsImV2Iiwib3BlbiIsInN3aXBlT3V0RWxlbWVudCIsInN3aXBlT3V0TWVudSIsImdldCIsInNldCIsImRpcmVjdGlvbiIsIkRJUkVDVElPTl9BTEwiLCJ0aHJlc2hvbGQiLCJzd2lwZU91dE92ZXJsYXlFbGVtZW50Iiwic3dpcGVPdXRPdmVybGF5TWVudSIsInRvZ2dsZSIsInRyaWdnZXIiLCJwcm9wIiwic2V0SXRlbSIsImhhcyIsInJlc2l6ZSIsIm1hbnVhbFNjcm9sbGVyIiwidXBkYXRlSGVpZ2h0IiwiaHJlZiIsIm9mZnNldCIsInNjcm9sbHRvIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInBhcmVudCIsInNpYmxpbmdzIiwibGFuZ3VhZ2UiLCJsYW5nIiwic2VsZWN0ZWRMYW5nIiwidGV4dCIsInNlbGVjdGVkRmxhZyIsImkxOG5leHQiLCJ1c2UiLCJpMThuZXh0WEhSQmFja2VuZCIsImRlYnVnIiwiZmFsbGJhY2tMbmciLCJiYWNrZW5kIiwibG9hZFBhdGgiLCJyZXR1cm5PYmplY3RzIiwiZXJyIiwidCIsImpxdWVyeUkxOG5leHQiLCJjdXJyZW50TGFuZ3VhZ2UiLCJjaGFuZ2VMYW5ndWFnZSIsImxvY2FsaXplIiwiJGZpbGVuYW1lIiwiYm9va21hcmtXcmFwcGVyIiwiYm9va21hcmtTdGFyIiwiYm9va21hcmtJbnB1dCIsIm5hdkxpbmtTZWFyY2giLCJhcHBDb250ZW50IiwiYm9va21hcmtTZWFyY2hMaXN0IiwiZm9jdXMiLCJhcnJMaXN0IiwiJGFyckxpc3QiLCIkYWN0aXZlSXRlbUNsYXNzIiwicmVtb3ZlIiwiaSIsImljb25OYW1lIiwiY2xhc3NOYW1lIiwiZmlyc3RDaGlsZCIsImNsYXNzU3RyaW5nIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJkYXRhc2V0IiwiYnNPcmlnaW5hbFRpdGxlIiwiYXBwZW5kIiwic2VhcmNoTGlzdE1haW4iLCJzZWFyY2hMaXN0Qm9va21hcmsiLCJtb3VzZWVudGVyIiwidXBkYXRlIiwidG9Mb3dlckNhc2UiLCJhY3RpdmVDbGFzcyIsImJvb2ttYXJrIiwibGlMaXN0IiwiJHN0YXJ0TGlzdCIsIiRvdGhlckxpc3QiLCIkaHRtbExpc3QiLCIkYm9va21hcmtodG1sTGlzdCIsIiRwYWdlTGlzdCIsIiRib29rbWFya0ljb24iLCIkZGVmYXVsdExpc3QiLCJhIiwiZ2V0SlNPTiIsImxpc3RJdGVtcyIsInVybCIsImoiLCJuYW1lIiwiaW5kZXhPZiIsImljb24iLCJjb25jYXQiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCIkdXJsIiwiJG5hbWUiLCIkbGlzdEl0ZW0iLCIkbGlzdEl0ZW1Ecm9wZG93biIsInRvb2x0aXAiLCIkY3VycmVudCIsIiRuZXh0IiwiJHByZXYiLCJuZXh0IiwicHJldiIsInNlbGVjdGVkX2l0ZW0iLCJsb2NhdGlvbiIsIldhdmVzIiwiYXR0YWNoIiwiaW5wdXRHcm91cFRleHQiLCJmb3JtUGFzc3dvcmRUb2dnbGVJY29uIiwiZm9ybVBhc3N3b3JkVG9nZ2xlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZhZGVJbiIsImZhZGVPdXQiLCJzY3JvbGwiLCJiYWNrZ3JvdW5kIiwiZ2V0Q3VycmVudExheW91dCIsImN1cnJlbnRMYXlvdXQiLCJkYXRhTGF5b3V0Iiwic3dpdGNoVG9MYXlvdXQiLCJwcmV2TGF5b3V0Iiwic2V0TGF5b3V0IiwiY3VycmVudExvY2FsU3RvcmFnZUxheW91dCIsIm5hdkxpbmtTdHlsZSIsIm5hdmJhciIsImpRdWVyeSIsImZlYXRoZXJTVkciLCJpY29uU2l6ZSIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsImVycm9yRWxlbWVudCIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJoaWdobGlnaHQiLCJlcnJvckNsYXNzIiwidmFsaWRDbGFzcyIsInVuaGlnaGxpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==