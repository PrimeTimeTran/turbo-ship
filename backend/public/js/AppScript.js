console.log('Hotkeys')
hotkeys(
  'alt+e,alt+s,alt+c, alt+r, alt+f, alt+h, alt+d, alt+o, alt+n',
  function (event, handler) {
    switch (handler.key) {
      case 'alt+e':
        document.getElementById('viewEntities').click()
        break
      case 'alt+s':
        document.getElementById('viewSort').click()
        break
      case 'alt+c':
        document.getElementById('actionCollapse').click()
        break
      case 'alt+r':
        document.getElementById('viewRelationships').click()
        break
      case 'alt+f':
        document.getElementById('viewFeedback').click()
      case 'alt+h':
        document.getElementById('viewHelp').click()
        break
      case 'alt+d':
        document.getElementById('actionDense').click()
        break
      case 'alt+o':
        document.getElementById('actionCopy').click()
        break
      case 'alt+n':
        document.getElementById('inputRef').focus()
        break
      default:
        alert(event)
    }
  }
)
