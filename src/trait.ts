import {
  Entity,
  type EntityOptions,
  type SystemEntity,
} from "@buildblazer/core";

export interface TraitOptions extends EntityOptions {
  description?: string;
}

export class Trait extends Entity {
  description: string;

  entityType(): string {
    return Trait.ETYPE.id;
  }

  constructor(options: TraitOptions = {}) {
    super(options);
    this.description = options.description ?? "";
  }

  toJSON(): object {
    return {
      ...super.toJSON(),
      ...(this.description ? { description: this.description } : {}),
    };
  }

  static ETYPE: SystemEntity = {
    id: "trait",
    deserializer: (json) => new Trait(json),
  };
}
