# jQuery Grid Overlay

For most projects I use a horizontal and vertical grid, and I&#8217;ve built a plugin to overlay the grid to make sure my work is always in alignment. After showing other people my work flow I&#8217;ve been asked to share my plugin, thus the jQuery Grid Overlay was born.

The plugin takes the grid system of your choice and overlays it on the top of a website upon pressing the escape, or `esc`, key. Simple enough.

## Requirements

* [jQuery](http://jquery.com/)
* A grid system

## Installation

The overlay requires placement of HTML, CSS, and JavaScript, preferably before the closing `body` tag. The HTML should use your existing grid system, including both a container and individual columns. The CSS sets up the appropriate styles necessary to display the grid. And lastly, the JavaScript sets up the grid toggling functionality, as well as handling the horizontal grid styles.

### Step 1: Adding the HTML

The following markup structure and classes `jquery-grid`, `jquery-grid-container`, and `jquery-grid-col` are required.

With a four column grid the HTML should look like:

```
<div class="jquery-grid">
  <div class="jquery-grid-container">
    <div class="jquery-grid-col"></div>
    <div class="jquery-grid-col"></div>
    <div class="jquery-grid-col"></div>
    <div class="jquery-grid-col"></div>
  </div>
</div>
```

* `jquery-grid` serves as a wrapper, absolutely positioning the grid to follow.
* `jquery-grid-container` sets up the horizontal grid. If your grid comes with a row or container class please included it on this element as well.
* `jquery-grid-col` sets up the vertical grid. If your grid comes with a column or cell class please include it on this element as well.

If your grid has more than four columns feel free to add more elements including the `jquery-grid-col` class.

### Step 2: Adding the JavaScript

When adding the JavaScript you need to update the `line_height` variable, currently defaulted to `24` pixels, to be the line height for your website. From there, all of the following JavaScript is required:

```
(function($){

  var line_height = 24;

  var line_height_offset = (line_height - 1) + 'px';
  line_height = line_height + 'px';

  var jQueryGridContainerCss = {
    backgroundImage: 'linear-gradient(transparent ' + line_height_offset + ', rgba(255, 0, 0, .6) ' + line_height_offset + ', rgba(255, 0, 0, .6) ' + line_height + ')',
    backgroundSize: line_height + ' ' + line_height
  };

  $(function(){
    $('.jquery-grid-container').css(jQueryGridContainerCss);
    var $jQueryGrid = $('.jquery-grid');
    $(document).on('keydown', function(event) {
      if (event.which === 27) {
        event.preventDefault();
        $jQueryGrid.toggle();
      }
    });
  });

}).call(this, jQuery);
```
### Step 3: Adding the CSS

Lastly, all of the following CSS is required:

```
.jquery-grid {
  display: none;
  height: 2000%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;
}
.jquery-grid-container,
.jquery-grid-col {
  height: 100%;
}
.jquery-grid-col {
  background-color: rgba(255, 0, 0, .4);
}
```

## All in All

Once all of the code is in place open the browser and press the escape key, your grid should appear. For further reference, please see the [example page and grid](https://github.com/shayhowe/jquery-grid-overlay/blob/master/index.html).

If you enjoy the jQuery Grid Overlay please follow me, [@shayhowe](https://twitter.com/shayhowe), on Twitter.

Special thanks to [Ben Reinhart](https://github.com/benjreinhart) and [AJ Self](https://github.com/ajself) for the code reviews.
