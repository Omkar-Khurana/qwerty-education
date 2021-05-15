
      TweenMax.to(".loading-screen", 4, {
            delay: 0.5,
            bottom: "-110%",
            ease: Expo.easeInOut
      });

      TweenMax.from(".logo", 3, {
            delay: 1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".contact", 3, {
            delay: 1.1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".custom-select-wrapper", 3, {
            delay: 1.1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".options", 3, {
            delay: 1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".bottom-text", 3, {
            delay: 1,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".copyright", 3, {
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".media ul li", 2, {
            delay: 1.2,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.1);

      TweenMax.from(".menu", 3, {
            delay: 1.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p1", 3, {
            delay: 1.5,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p2", 3, {
            delay: 1.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#one", 3, {
            delay: 1.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#two", 3, {
            delay: 1.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 3000 + 100 * i;
    }
  });

  document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
      this.querySelector('.custom-select').classList.toggle('open');
  })


for (const option of document.querySelectorAll(".custom-option")) {
      option.addEventListener('click', function() {
          if (!this.classList.contains('selected')) {
              this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
              this.classList.add('selected');
              this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
          }
      })
  }

  window.addEventListener('click', function(e) {
      const select = document.querySelector('.custom-select')
      if (!select.contains(e.target)) {
          select.classList.remove('open');
      }
  });
  