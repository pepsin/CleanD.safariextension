$ ->
  getWord = (theData) ->
    safari.self.tab.dispatchMessage "getWords", theData
  highlightTopics = (theMessageEvent) ->
    if theMessageEvent.name is "theWords"
      words = theMessageEvent.message
      highlight_arr = words.highlight.split(/\s+/)
      author_arr = words.author.split(/\s+/)
      alert_arr = words.alert.split(/\s+/)
      $('table.datatable th.subject span a').each ->
        singleTopicHighLight $(@), alert_arr, "#fdd"
      $('table.datatable th.subject span a').each ->
        singleTopicHighLight $(@), highlight_arr, "#efe"
      $('td.author cite a').each ->
        singleTopicHighLight $(@), author_arr, "#eef"

  singleTopicHighLight = (ele, arr, color) ->
    for atom in arr
      if atom.length isnt 0
        reg = RegExp atom,'i'
        if ele.html().match reg
          h = ele.parents('tbody')
          h.css('background-color', color)
      
  safari.self.addEventListener "message", highlightTopics, false
  getWord("")