export function findParentWithClass(element, className) {
  let parent = element.parentNode

  while (parent) {
    if (parent.classList.contains(className)) {
      return parent
    }
    parent = parent.parentNode
  }

  return null
}

export class TurboShortcuts {
  static shortcuts = 'alt+r, alt+m, alt+d, alt+l,alt+s'
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
    'alt+s': function () {
      document.getElementById('tSampleThemes').click()
    },
  }
  static entityBuilderItems = {
    'alt+c': function () {
      document.getElementById('CollapseSubmenu').click()
    },
    'alt+d': function () {
      document.getElementById('tThemeToggle').click()
    },
    'cmd+opt+k': function () {
      document.getElementById('tSidebar').click()
    },
    'alt+q': function () {
      document.getElementById('tSidebar').click()
    },
    'alt+f': function () {
      document.getElementById('FileMenu').click()
    },
    'alt+g': function () {
      document.getElementById('GenerateSubmenu').click()
    },
    'alt+l': function () {
      document.getElementById('showLeft').click()
    },
    'alt+r': function () {
      document.getElementById('showRight').click()
    },
    'cmd+alt+o': function () {
      document.getElementById('showOverlay').click()
    },
    'alt+cmd+e': function () {
      document.getElementById('devTools').click()
    },
    'alt+v': function () {
      document.getElementById('ViewMenu').click()
    },
    'alt+s': function () {
      document.getElementById('SortSubmenu').click()
    },
    'alt+e': function () {
      document.getElementById('EntitiesSubmenu').click()
    },

    'alt+b': function () {
      document.getElementById('FeedbackSubmenu').click()
    },
    'alt+h': function () {
      document.getElementById('HelpSubmenu').click()
    },
    'alt+p': function () {
      document.getElementById('toggleSparse').click()
    },
    'alt+o': function () {
      document.getElementById('copyEntities').click()
    },
    'alt+n': function () {
      document.getElementById('inputRef').focus()
    },
    'alt+a': function () {
      document.getElementById('RelationshipsMenu').click()
    },
    enter: function () {
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
        }
      }
    },
    default: function () {
      alert(event)
    },
  }
  static shortcutsEntity = Object.keys(this.entityBuilderItems).join(', ')
}

export function setupGlobals() {
  let entities = window.location.href.includes('entities')
  let shortcuts
  if (entities) {
    console.log('Entities Shortcuts')
    shortcuts = TurboShortcuts.shortcutsEntity
  } else {
    console.log('TShortcuts')
    shortcuts = TurboShortcuts.shortcuts
  }

  hotkeys(shortcuts, function (event, handler) {
    try {
      let fn
      if (entities) {
        fn = TurboShortcuts.entityBuilderItems[handler.key]
      } else {
        fn = TurboShortcuts.items[handler.key]
      }
      if (fn) {
        fn()
      } else {
        console.log('Missing shortcut handler')
      }
    } catch (error) {
      alert('Missing shortcut handler', event)
    }
  })
}

// setupGlobals()

export function loadJS(url, async = true) {
  let loaded = null

  function loadFile() {
    try {
      let scriptEle = document.createElement('script')
      scriptEle.setAttribute('src', url)
      scriptEle.setAttribute('type', 'text/javascript')
      scriptEle.setAttribute('async', async)
      document.body.appendChild(scriptEle)

      scriptEle.addEventListener('load', () => {
        console.log('Loaded!')
        if (url === scriptUrls.hotkeys) setupGlobals()
        loaded = true
      })

      scriptEle.addEventListener('error', (ev) => {
        console.log('Error on loading file', ev)
        loaded = false
        retryLoad()
      })
    } catch (error) {
      console.log('Failed to load', error)
      retryLoad()
    }
  }

  function retryLoad() {
    if (!loaded) {
      console.log('Retrying load...')
      setTimeout(loadFile, 1000)
    } else {
      console.log('Load successful')
    }
  }

  loadFile()
}

export const scriptUrls = {
  chart: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js',
  hotkeys: 'https://unpkg.com/hotkeys-js@3.12.0/dist/hotkeys.min.js',
}

export function ensureLoad(url) {
  if (!process.browser) return
  console.log('Ensuring load: ', url)
  if (url === scriptUrls.hotkeys && typeof hotkeys !== 'undefined') {
    setupGlobals()
  } else {
    loadJS(url)
  }
}
