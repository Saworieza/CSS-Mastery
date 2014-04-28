(function ($) {

Drupal.prettify = Drupal.prettify || {};
  
/**
 * Attach prettify loader behavior.
 */
Drupal.behaviors.prettify = {
  attach: function (context) {  
    if (Drupal.settings.prettify.match) {
      context = Drupal.settings.prettify.match;
    }
  
    if (Drupal.settings.prettify.markup['code']) {
      // Selector for <code>...</code>
      $("code:not(.prettyprint)", context).not($("pre > code", context)).each(function () {
        Drupal.prettify.prettifyBlock($(this));
      });
    }
    if (Drupal.settings.prettify.markup['pre']) {
      // Selector for <pre>...</pre>
      $("pre:not(.prettyprint)", context).each(function () {
        Drupal.prettify.prettifyBlock($(this));
      });
    }
    else if (Drupal.settings.prettify.markup['precode']) {
      // Selector for <pre><code>...</code></pre>
      $("pre:not(.prettyprint) > code", context).parent().each(function () {
        Drupal.prettify.prettifyBlock($(this));
      });
    }
    
    // Process custom markup selectors
    for (var i = 0; i < Drupal.settings.prettify.custom.length; i++) {
      var selector = Drupal.settings.prettify.custom[i];
      if (selector) {
        $(selector, context).each(function () {
          if (!$(this).hasClass('prettyprint')) {
            codeBlock = $(this).parent().is('pre') ? $(this).parent() : $(this);
            Drupal.prettify.prettifyBlock(codeBlock);
          }
        });
      }      
    }
  
    if ($(".prettyprint").length > 0) {
      prettyPrint();
    }
  }
};

Drupal.prettify.prettifyBlock = function(codeBlock) {
  if (!codeBlock.hasClass(Drupal.settings.prettify.nocode)) {
    codeBlock.addClass("prettyprint");
    if (Drupal.settings.prettify.linenums && codeBlock.is('pre')) {
      codeBlock.addClass("linenums");
    }
  }
}

})(jQuery);
;
(function ($) {

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain(this.hostname, ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

})(jQuery);
;
