import { Entity, type EntityOptions } from "@buildblazer/core";

/**
 * This represents a character produced by {@link Build.baseEntity} or {@link Build.baseEntity}.
 * It does not deserialize, and should never be serialized.
 */
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
