$(window).load(function() {

  var $navMain = $('.nav-main').localScroll();
  var $anchors = $('.anchor').localScroll();
  var $toggleNavLabel = $('.mobile-nav-toggle-label');
  var $nav = $('.nav');
  var $win = $(window);

  $toggleNavLabel.on('click', function(e){
    return true;
  });

  $navMain.find('a').on('click', function(e) {
    var $this = $(this);

    if($this.hasClass('single-page-layout')) {
      e.preventDefault();
      $('.mobile-nav-toggle-box').attr('checked', false);
    }
  });

  var $navSections = $('.js-nav-section');

  var navHighlight = function(e){
    e.waypoint(function(direction){
      $('.nav-main a').removeClass('js-current');
      $('.nav-main a[href="#' + e.attr('id') + '"]').addClass('js-current');
    }, { offset: '50%' });
  };

  $navSections.each(function(){
    navHighlight($(this));
  });


  $('.parallax').on('scroll', function(){
    var fromTop = $(this).scrollTop() + 400;
    var cur = $navSections.map(function(){
      console.log(fromTop);
      if ($(this).offset().top < fromTop)
        return this;
    });

    cur = cur[cur.length-1];
    var id = $(cur).attr('id')

    $(".nav-main a").removeClass("js-current");
    $(".nav-main a[href='#" + id + "']").addClass("js-current");
  });

});
