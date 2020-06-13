<script>
       wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };

    $('.wow').on('scrollSpy:exit',function(){
    var element = $(this);
    element.css({
        'visibility' : 'hidden',
        'animation-name' : 'none'
    }).removeClass('animated');
    wow.addBox(this);
});

</script>