import { Entity, type EntityOptions } from "@buildblazer/core";

export class Section extends Entity {
  static TYPE = "section";

  entityType(): string {
    return Section.TYPE;
  }

  constructor(options: EntityOptions = {}) {
    super(options);
  }

  toJSON(): object {
    return {
      ...super.toJSON(),
    };
  }

  static register() {
    Entity.FROM_JSON_REGISTRY[Section.TYPE] = (json: any) => {
      return new Section(json);
    };
  }
}

Section.register();
