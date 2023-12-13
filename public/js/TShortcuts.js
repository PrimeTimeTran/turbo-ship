function findParentWithClass(element, className) {
  let parent = element.parentNode

  while (parent) {
    if (parent.classList.contains(className)) {
      return parent
    }
    parent = parent.parentNode
  }

  return null
}

function setupShortcuts() {
  if (window.location.href.includes('entities')) {
    console.log('Shortcut entities')
    setupEntitiesShortcuts()
  } else {
    console.log('TShortcuts')
    setupGlobals()
  }
}

class TurboShortcuts {
  static shortcuts = 'alt+r, alt+m, alt+d, alt+l'
  static items = {
    'alt+r': function () {
      document.getElementById('tRightDrawerToggle').click()
    },
    'alt+l': function () {
      document.getElementById('tLeftDrawerToggle').click()
    },
    'alt+m': function () {
      document.getElementById('tModalToggle').click()
    },
    'alt+d': function () {
      document.getElementById('tThemeToggle').click()
    },
  }
}

function setupGlobals() {
  hotkeys(TurboShortcuts.shortcuts, function (event, handler) {
    console.log('Shortcut pressed')
    try {
      let fn = TurboShortcuts.items[handler.key]
      if (fn) fn()
    } catch (error) {
      alert('Missing shortcut handler', event)
    }
  })
}

function setupEntitiesShortcuts() {
  hotkeys(
    'alt+q, cmd+opt+k,alt+p, alt+g, alt+f, alt+b, alt+d, alt+cmd+e, alt+v, alt+e, alt+r, alt+l, alt+s,alt+c, alt+h, alt+o, alt+n, alt+a, alt+t, alt+1, alt+2, enter, cmd+alt+1, cmd+alt+d, cmd+alt+o',
    function (event, handler) {
      console.log('Shortcut pressed')
      switch (handler.key) {
        case 'cmd+opt+k':
          document.getElementById('tSidebar').click()
          break
        case 'alt+q':
          document.getElementById('tSidebar').click()
          break
        case 'alt+f':
          document.getElementById('FileMenu').click()
          break
        case 'alt+g':
          document.getElementById('GenerateSubmenu').click()
          break
        case 'alt+l':
          document.getElementById('showLeft').click()
          break
        case 'alt+r':
          document.getElementById('showRight').click()
          break
        case 'cmd+alt+o':
          document.getElementById('showOverlay').click()
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
          let child = active.querySelector('.entity-input')
          if (child) {
            child.focus()
          } else {
            child = active.querySelector('input')
            if (child) {
              child.focus()
              let parent = findParentWithClass(child, 'collapse')
              parent.click()
              break
            }
          }
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
