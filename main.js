

$(function() {
  var getAnswer, getCAnswer, getCWord, getHAnswer, getHWord, getWord;
  getWord = function(theData) {
    return safari.self.tab.dispatchMessage("getWord", theData);
  };
  getAnswer = function(theMessageEvent) {
    var cword_str, cwords;
    if (theMessageEvent.name === "theCAnswer") {
      cword_str = theMessageEvent.message;
      cwords = cword_str.split(',');
      console.log(cwords);
      return $('td.author cite a').each(function() {
        var cword, ele, h, reg, _i, _len, _results;
        ele = $(this);
        _results = [];
        for (_i = 0, _len = cwords.length; _i < _len; _i++) {
          cword = cwords[_i];
          if (cword.length !== 0) {
            reg = RegExp(cword, 'i');
            if (ele.html().match(reg)) {
              h = ele.parents('tbody');
              _results.push(h.css('background-color', '#fca'));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    }
  };
  safari.self.addEventListener("message", getAnswer, false);
  getWord("");
  getCWord = function(theData) {
    return safari.self.tab.dispatchMessage("getCWord", theData);
  };
  getCAnswer = function(theMessageEvent) {
    var cword_str, cwords;
    if (theMessageEvent.name === "theCAnswer") {
      cword_str = theMessageEvent.message;
      cwords = cword_str.split(',');
      return $('th.subject span a').each(function() {
        var cword, ele, h, reg, _i, _len, _results;
        ele = $(this);
        _results = [];
        for (_i = 0, _len = cwords.length; _i < _len; _i++) {
          cword = cwords[_i];
          if (cword.length !== 0) {
            reg = RegExp(cword, 'i');
            if (ele.html().match(reg)) {
              h = ele.parents('tbody');
              _results.push(h.css('background-color', '#fdd'));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    }
  };
  safari.self.addEventListener("message", getCAnswer, false);
  getCWord("");
  getHWord = function(theData) {
    return safari.self.tab.dispatchMessage("getHWord", theData);
  };
  getHAnswer = function(theMessageEvent) {
    var hword_str, hwords;
    if (theMessageEvent.name === "theHAnswer") {
      hword_str = theMessageEvent.message;
      hwords = hword_str.split(',');
      return $('th.subject span a').each(function() {
        var ele, h, hword, reg, _i, _len, _results;
        ele = $(this);
        _results = [];
        for (_i = 0, _len = hwords.length; _i < _len; _i++) {
          hword = hwords[_i];
          if (hword.length !== 0) {
            reg = RegExp(hword, 'i');
            if (ele.html().match(reg)) {
              h = ele.parents('tbody');
              _results.push(h.css('background-color', '#dfd'));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    }
  };
  safari.self.addEventListener("message", getHAnswer, false);
  return getHWord("");
});