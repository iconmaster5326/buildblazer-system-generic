import {
  Entity,
  type EntityOptions,
  type SystemEntity,
} from "@buildblazer/core";

export class Section extends Entity {
  entityType(): string {
    return Section.ETYPE.id;
  }

  constructor(options: EntityOptions = {}) {
    super(options);
  }

  toJSON(): object {
    return {
      ...super.toJSON(),
    };
  }

  static ETYPE: SystemEntity = {
    id: "section",
    deserializer: (json) => new Section(json),
  };
}
