import { Entity, type EntityOptions } from "@buildblazer/core";

export class Character extends Entity {
  static TYPE = "character";

  entityType(): string {
    return Character.TYPE;
  }

  constructor(options: EntityOptions = {}) {
    super(options);
  }

  toJSON(): object {
    return {
      ...super.toJSON(),
    };
  }
}
