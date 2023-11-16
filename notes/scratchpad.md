
Dynamic components
https://www.youtube.com/watch?v=uC9_62BmKyE&ab_channel=LearnVue





Types defined in `./server/models/wizard.model.ts` must be imported/exported from `./utils/wizard.ts`.

```ts [./server/models/wizards.model.ts]
export type WizardType = {
  firstName: String
  lastName: String
}
```


```ts [./utils/wizard.ts]
export type { WizardType } from '~/server/Models/wizard.model'
```

Before they can be used inside of frontend code.

They must also include a const expo

```ts [./utils/wizard.ts]
export type { WizardType } from '~/server/Models/wizard.model'
export const pet = 'Hedwig'
```


I want type suggestions to work when consuming these types inside the frontend UI `./pages/wizards/index.vue`

The types need to be exported from 