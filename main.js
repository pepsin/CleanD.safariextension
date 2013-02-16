

$(function() {
  var getWord, highlightTopics, singleTopicHighLight;
  getWord = function(theData) {
    return safari.self.tab.dispatchMessage("getWords", theData);
  };
  highlightTopics = function(theMessageEvent) {
    var alert_arr, author_arr, highlight_arr, words;
    if (theMessageEvent.name === "theWords") {
      words = theMessageEvent.message;
      highlight_arr = words.highlight.split(/\s+/);
      author_arr = words.author.split(/\s+/);
      alert_arr = words.alert.split(/\s+/);
      $('table.datatable th.subject span a').each(function() {
        return singleTopicHighLight($(this), alert_arr, "#fdd");
      });
      $('table.datatable th.subject span a').each(function() {
        return singleTopicHighLight($(this), highlight_arr, "#efe");
      });
      return $('td.author cite a').each(function() {
        return singleTopicHighLight($(this), author_arr, "#eef");
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