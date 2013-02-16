$ ->
  getWord = (theData) ->
    safari.self.tab.dispatchMessage "getWord", theData
  getAnswer = (theMessageEvent) ->
    if theMessageEvent.name is "theCAnswer"
      cword_str = theMessageEvent.message
      cwords = cword_str.split(',')
      console.log cwords
      $('td.author cite a').each ->
        ele = $(@)
        for cword in cwords
          if cword.length isnt 0
            reg = RegExp cword,'i'
            if ele.html().match reg
              h = ele.parents('tbody')
              h.css('background-color', '#fca')
      
  safari.self.addEventListener "message", getAnswer, false
  getWord ""