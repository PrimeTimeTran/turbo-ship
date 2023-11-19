export class AttributeBuilder {
  constructor(entity, attribute, entities) {
    this.e = entity
    this.a = attribute
    this.entities = entities
  }
  existingAttribute() {
    return this.e.attributes.find((a) => a.name === this.a.name)
  }
  updateRelation() {
    if (this.a.relation.type === 'oto') return
    if (this.a.relation.type === 'mtm') return
    const otherEntity = this.entities.value.find((e) => e.name === this.a.name)
    const a = otherEntity?.attributes.find((a) => a.name === this.e.name)
    // Success swapping classes otm & mto

    if (this.a.relation.type === 'mto') {
      a.relation.type = 'otm'
    }
    if (this.a.relation.type === 'otm') {
      a.relation.type = 'mto'
    }
    // Or
    // a.relation.type = this.a.relation.type === 'mto' ? 'otm' : 'mto'
  }
}
