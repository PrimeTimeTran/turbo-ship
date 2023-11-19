hotkeys(
  'alt+e,alt+s,alt+c, alt+r, alt+f, alt+h, alt+d, alt+o, alt+n, alt+a, alt+t, alt+1, alt+2, enter, cmd+alt+1',
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
        break
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
      case 'alt+a':
        document.getElementById('attributeInput').focus()
        break
      case 'alt+t':
        document.getElementById('actionStore').click()
        break
      case 'alt+1':
        document.querySelectorAll('section')[1].click()
        break
      case 'alt+2':
        document.querySelectorAll('section')[1].click()
        break
      case 'enter':
        const active = document.activeElement
        const child = active.querySelector('.entity-input')
        child.focus()
        break
      case 'cmd+alt+1':
        // Unable to unfocus an input
        // document.activeElement.blur()
        // console.log('Removing')
        // setTimeout(() => {
        //   document.activeElement.blur()
        // }, 1000)

        break
      default:
        alert(event)
    }
  }
)
