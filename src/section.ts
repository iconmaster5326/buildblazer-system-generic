import {
  type Buildblazer,
  Entity,
  type EntityOptions,
  type SystemEntity,
} from "@buildblazer/core";

/** A section is a logical grouping of entities. Used for tabs, section boxes, rows, etc. */
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

  /** Entity type information. Don't use this directly, use {@link BuildGeneric.SYSTEM} instead. */
  static ETYPE: SystemEntity = {
    id: "section",
    deserializer: Section.fromJSON,
  };

  /** Deserialize a section from JSON. */
  static fromJSON(bb: Buildblazer, json: any): Section {
    return new Section({
      ...Entity.optionsFromJSON(bb, json),
    });
  }
}
