

$(function() {
  var blue, getWord, green, highlightTopics, red, singleTopicHighLight;
  red = "#fdd";
  green = "#efe";
  blue = "#eef";
  getWord = function(theData) {
    return safari.self.tab.dispatchMessage("getWords", theData);
  };
  highlightTopics = function(theMessageEvent) {
    var words;
    if (theMessageEvent.name === "theWords") {
      words = theMessageEvent.message;
      $('table.datatable th.subject span a').each(function() {
        return singleTopicHighLight($(this), words.highlight, green);
      });
      $('table.datatable th.subject span a').each(function() {
        return singleTopicHighLight($(this), words.alert, red);
      });
      return $('td.author cite a').each(function() {
        return singleTopicHighLight($(this), words.author, blue);
      });
    }
  };
  singleTopicHighLight = function(ele, arr, color) {
    var atom, h, reg, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      atom = arr[_i];
      if (atom.length !== 0) {
        reg = RegExp(atom, 'i');
        if (ele.html().match(reg)) {
          h = ele.parents('tbody');
          _results.push(h.css('background-color', color));
        } else {
          _results.push(void 0);
        }
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };
  safari.self.addEventListener("message", highlightTopics, false);
  return getWord("");
});