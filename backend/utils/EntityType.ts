export interface Relationship {
  type: string
  aEntity: string
  aField: string
  bEntity: string
  bField: string
}
export interface Entity {
  _id: string
  name: string
  label: string
  plural: string
  pluralSM: string
  showAttributes: boolean
  showAttributeForm: boolean
  attributes: Attribute[]
  relationships?: Relationship[]
}

export interface Attribute {
  name: string
  type: string
  _id: string
  validators?: []
}

// otm === 'one-to-many'
// mto === 'many-to-one'
// oto === 'one-to-one'
// mtm === 'many-to-many'
