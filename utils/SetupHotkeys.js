console.log('Setup custom hotkeys')

export function setupHotkeys() {
  hotkeys(
    'alt+p, alt+g, alt+f, alt+b, alt+d, alt+cmd+e, alt+v, alt+e, alt+r, alt+l, alt+s,alt+c, alt+h, alt+o, alt+n, alt+a, alt+t, alt+1, alt+2, enter, cmd+alt+1, cmd+alt+d, cmd+alt+o',
    function (event, handler) {
      console.log('EnsureLoad click')
      switch (handler.key) {
        case 'alt+f':
          document.getElementById('FileMenu').click()
          break
        case 'alt+g':
          document.getElementById('GenerateSubmenu').click()
          break
        case 'alt+l':
          document.getElementById('showLeft').click()
          break
        case 'cmd+alt+o':
          document.getElementById('showOverlay').click()
          break
        case 'alt+d':
          document.getElementById('dark').click()
          break
        case 'alt+cmd+e':
          document.getElementById('devTools').click()
          break
        case 'alt+v':
          document.getElementById('ViewMenu').click()
          break
        case 'alt+s':
          document.getElementById('SortSubmenu').click()
          break
        case 'alt+e':
          document.getElementById('EntitiesSubmenu').click()
          break
        case 'alt+c':
          document.getElementById('CollapseSubmenu').click()
          break
        case 'alt+r':
          document.getElementById('showRight').click()
          break
        case 'alt+b':
          document.getElementById('FeedbackSubmenu').click()
          break
        case 'alt+h':
          document.getElementById('HelpSubmenu').click()
          break
        case 'alt+p':
          document.getElementById('toggleSparse').click()
          break
        case 'alt+o':
          document.getElementById('copyEntities').click()
          break
        case 'alt+n':
          document.getElementById('inputRef').focus()
          break
        case 'alt+a':
          document.getElementById('RelationshipsMenu').click()
          break
        case 'alt+a':
          // document.getElementById('attributeInput').focus()
          // case 'alt+a':
          //   document.getElementById('attributeInput').focus()
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
    },
  )
}
