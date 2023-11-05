How to push to a reactive variable in Vue3?

This code gives this error:
Code:
wizards.value = [...wizards.value, wizard]

Error:
TypeError: wizards.value is not iterable
wizards.value.push(wizard)

This code gives this error:
Code:
wizards.value.push(wizard)

Error:
TypeError: wizards.value.push is not a function