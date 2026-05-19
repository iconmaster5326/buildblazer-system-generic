import {
  type Buildblazer,
  Entity,
  type EntityOptions,
  type SystemEntity,
} from "@buildblazer/core";

/** Options to pass to the constructor of {@link Trait}. */
export interface TraitOptions extends EntityOptions {
  /** The long-form, human-readable description of the trait. */
  description?: string;
}

/** A trait is a feature with a description, representing a discrete piece of information about the character. */
export class Trait extends Entity {
  /** The long-form, human-readable description of the trait. */
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

  /** Entity type information. Don't use this directly, use {@link BuildGeneric.SYSTEM} instead. */
  static ETYPE: SystemEntity = {
    id: "trait",
    deserializer: Trait.fromJSON,
  };

  /** Deserialize a trait from JSON. */
  static fromJSON(bb: Buildblazer, json: any): Trait {
    return new Trait({
      ...Entity.optionsFromJSON(bb, json),
      description: json.description,
    });
  }
}
