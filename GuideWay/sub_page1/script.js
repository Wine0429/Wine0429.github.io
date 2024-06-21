document.addEventListener('DOMContentLoaded', function () {
      // 读取 URL 参数
      var urlParams = new URLSearchParams(window.location.search);
      var slideIndex = parseInt(urlParams.get('slideIndex'), 10);
    
      // 初始化 Swiper
      var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        pagination: {
          el: '.blog-slider_pagination',
          clickable: true,
        },
        on: {
          init: function () {
            // 使用从 URL 参数获取的索引跳转到特定幻灯片
            // 如果没有提供 slideIndex 或值非法，则默认到第一张幻灯片
            this.slideTo(isNaN(slideIndex) ? 1 : slideIndex);
          }
        }
      });
    });
       