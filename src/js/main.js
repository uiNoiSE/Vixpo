import Glide from '@glidejs/glide'

document.addEventListener("DOMContentLoaded", function () {

  var glideOptionsOne = {
    type: 'carousel',
    autoplay: 3500,
    breakpoints: {
      1366: {
        perView: 2,
      },

      1441: {
        perView: 2,
        peek: 250
      },

      2500: {
        perView: 2,
        peek: 350
      }
    }
  }

  var glideOptionsTwo = {
    type: 'carousel',
    perView: 1,
    autoplay: 3500,
    startAt: 0,
    breakpoints: {
      666: {
        peek: 0
      },

      1366: {
        peek: {
          before: 0,
          after: 300
        },
        gap: 24
      }
    }
  }

  var glideOptionsThree = {
    type: 'carousel',
    perView: 1,
    autoplay: 3500,

    breakpoints: {
      813: {
        gap: 50,
        peek: 0,
      },

      1025: {
        gap: 50,
        peek: 0,
      },

      2500: {
        peek: 200,
        gap: 100
      }
    }

  }

  var glide1 = new Glide('#first', glideOptionsOne).mount();
  var glide2 = new Glide('#second', glideOptionsTwo).mount();
  var glide3 = new Glide('#third', glideOptionsThree).mount();

  window.addEventListener('resize', resize);

  function resize() {
    setTimeout(() => {
      glide1.update();
      glide2.update();
      glide3.update();
    }, 510);
  }



  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    console.log('');
  }
  else {
    function parallax(event) {
      setTimeout(() => {
        this.querySelectorAll('.js-layer').forEach(layer => {
          let speed = layer.getAttribute('data-speed');
          layer.style.transform = `translate(${event.clientX * speed / 500}px, ${event.clientY * speed / 500}px)`
        });
      }, 100)

    }
    document.addEventListener('mousemove', parallax);

  };
});