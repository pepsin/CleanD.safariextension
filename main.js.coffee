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
  
  getCWord = (theData) ->
    safari.self.tab.dispatchMessage "getCWord", theData
  getCAnswer = (theMessageEvent) ->
    if theMessageEvent.name is "theCAnswer"
      cword_str = theMessageEvent.message
      cwords = cword_str.split(',')
      $('th.subject span a').each ->
        ele = $(@)
        for cword in cwords
          if cword.length isnt 0
            reg = RegExp cword,'i'
            if ele.html().match reg
              h = ele.parents('tbody')
              h.css('background-color', '#fdd')
      
  safari.self.addEventListener "message", getCAnswer, false
  getCWord ""
  
  getHWord = (theData) ->
    safari.self.tab.dispatchMessage "getHWord", theData
  getHAnswer = (theMessageEvent) ->
    if theMessageEvent.name is "theHAnswer"
      hword_str = theMessageEvent.message
      hwords = hword_str.split(',')
      $('th.subject span a').each ->
        ele = $(@)
        for hword in hwords
          if hword.length isnt 0
            reg = RegExp hword,'i'
            if ele.html().match reg
              h = ele.parents('tbody')
              h.css('background-color', '#dfd')
      
  safari.self.addEventListener "message", getHAnswer, false
  getHWord ""