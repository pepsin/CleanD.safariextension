$ ->
  red = "#fdd"
  green = "#efe"
  blue = "#eef"
  getWord = (theData) ->
    safari.self.tab.dispatchMessage "getWords", theData
  highlightTopics = (theMessageEvent) ->
    if theMessageEvent.name is "theWords"
      words = theMessageEvent.message
      $('table.datatable th.subject span a').each ->
        singleTopicHighLight $(@), words.highlight, green
      $('table.datatable th.subject span a').each ->
        singleTopicHighLight $(@), words.alert, red 
      $('td.author cite a').each ->
        singleTopicHighLight $(@), words.author, blue

  singleTopicHighLight = (ele, arr, color) ->
    for atom in arr
      if atom.length isnt 0
        reg = RegExp atom,'i'
        if ele.html().match reg
          h = ele.parents('tbody')
          h.css('background-color', color)
      
  safari.self.addEventListener "message", highlightTopics, false
  getWord("")