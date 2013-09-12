/*
  This is an example of a slightly better version of
  what you wrote in the html file. None of these variables
  are global and they are slightly more idiomatic.
*/

;(function($){
  var lineHeight = 24,
      lineHeightOffset = (lineHeight - 1) + 'px';

  lineHeight = lineHeight + 'px';

  var jQueryGridContainerCss = {
    backgroundImage: 'linear-gradient(transparent ' + lineHeightOffset + ', rgba(255, 0, 0, .6) ' + lineHeightOffset + ', rgba(255, 0, 0, .6) ' + lineHeight + ')',
    backgroundSize: lineHeight + ' ' + lineHeight
  };

  $(function(){
    $('.jquery-grid-container').css(jQueryGridContainerCss);

    // Declare this variable up here so the keydown event handler
    // below will reference this cached DOM element as opposed to doing
    // a DOM lookup every time the escape key is pressed.
    var $jQueryGrid = $('.jquery-grid');

    $(document).on('keydown', function(event) {
      if (event.which === 27) {
        event.preventDefault();
        $jQueryGrid.toggle();
      }
    });
  });
}).call(this, jQuery);
