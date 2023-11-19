import { faker } from '@faker-js/faker'

export function useEntity(e, entities) {
  const entity = reactive(e)
  const focused = ref('')
  const newAttribute = reactive({
    name: ref(''),
    type: ref(''),
    options: ref(''),
    relation: reactive({
      type: ref(null),
      name: ref(null),
    }),
  })
  function addAttribute(a) {
    entity.attributes.push(a)
  }
  function save(attribute) {
    if (existingAttribute(attribute)) {
      updateAttribute(attribute)
      return
    }
    const item = createItem(attribute)
    addAttribute(item)
    reset()
    focused.value = ''
  }
  function createItem(attribute) {
    const a = attribute
    const item = {
      validators: [],
      validations: [],
      name: a.name,
      _id: faker.database.mongodbObjectId(),
      relation: {
        type: null,
        name: null,
      },
    }
    handleRelationType(item, attribute)
    handleEnums(item, attribute)

    return item
  }
  function handleRelationType(item, attribute) {
    if (Validator.relationTypes.includes(attribute.relation.type)) {
      item.relation = {
        type: attribute.relation.type,
        name: attribute.relation.name,
      }
      item.type = 'relation'
    } else {
      item.type = attribute.type
    }
    handleRelatedEntity(attribute)
  }
  function handleEnums(item, attribute) {
    if (Validator.enumTypes.includes(attribute.type)) {
      item.options = attribute.options
    }
  }
  function handleRelatedEntity(attribute) {
    // handleRelatedEntity(attribute)
  }
  function existingAttribute(attribute) {
    return e.attributes.find((a) => a.name === attribute.value?.name)
  }
  function updateAttribute(attribute) {
    const other = entities.value.find(
      (entity) => entity.name === attribute.value.relation.name
    )
    // This guy already gets updated in the UI immediately
    // if (attribute.value.relation.type === 'otm') {
    //   attribute.value.relation.type = 'mto'
    // } else if (attribute.value.relation.type === 'mto') {
    //   attribute.value.relation.type = 'otm'
    // }
    // Update other entity attribute
    const idx = other.attributes.findIndex((a) => a.name === e.name)
    const item = other.attributes[idx]

    if (item.relation.type === 'otm') item.relation.type = 'mto'
    else if (item.relation.type === 'mto') {
      item.relation.type = 'otm'
    }
  }
  function reset() {
    newAttribute.name = ''
    newAttribute.type = ''
    newAttribute.options = ''
    newAttribute.relation.name = null
    newAttribute.relation.type = null
  }
  const onFocus = (id) => {
    reset()
    id === focused.value ? (focused.value = '') : (focused.value = id)
  }
  const editing = computed(() => focused.value !== '')
  const relatedEntityOptions = computed(() =>
    entities.value.filter((e) => e.name != entity.name)
  )
  const attribute = computed(() => {
    return focused.value != ''
      ? entity.attributes.find((e) => e._id === focused.value)
      : newAttribute
  })
  watch(focused.value, (newww, oldd) => {
    console.log('FocusedValue', newww)
    console.log('FocusedValue', oldd)
  })
  const validAttr = (attr) => {
    if (attr.name == '' || attr.type == '') return false
    if (Validator.enumTypes.includes(attr.type) && attr.options == '')
      return false
    if (
      attr.relation.name === null &&
      Validator.relationTypes.includes(attr.relation.type)
    )
      return false
    return true
  }
  const valid = computed(() => {
    if (editing.value) {
      if (!validAttr(attribute.value)) return false
    } else {
      if (!validAttr(newAttribute)) return false
    }
    return true
  })
  return {
    save,
    valid,
    entity,
    editing,
    focused,
    onFocus,
    attribute,
    newAttribute,
    addAttribute,
    updateAttribute,
    existingAttribute,
    relatedEntityOptions,
  }
}
