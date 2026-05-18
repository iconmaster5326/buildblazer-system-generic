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

  static register() {
    Entity.FROM_JSON_REGISTRY[Character.TYPE] = (json: any) => {
      return new Character(json);
    };
  }
}

Character.register();
