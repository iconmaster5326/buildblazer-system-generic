import { Entity, type EntityOptions } from "@buildblazer/core";

export interface TraitOptions extends EntityOptions {
  description?: string;
}

export class Trait extends Entity {
  static TYPE = "trait";

  description: string;

  entityType(): string {
    return Trait.TYPE;
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

  static register() {
    Entity.FROM_JSON_REGISTRY[Trait.TYPE] = (json: any) => {
      return new Trait(json);
    };
  }
}

Trait.register();
