import { Build, Buildblazer, Entity, type System } from "@buildblazer/core";
import { Character } from "./character";
import { Section } from "./section";
import { Trait } from "./trait";

/**
 * A build for a character in a generic TTRPG system.
 * To use this system, pass {@link SYSTEM} to your {@link Buildblazer} instance.
 */
export class BuildGeneric extends Build {
  systemName(): string {
    return BuildGeneric.SYSTEM.id;
  }

  systemVersion(): number {
    return BuildGeneric.SYSTEM.version;
  }

  baseEntity(): Entity {
    return new Character();
  }

  /** System information. Pass this to {@link Buildblazer}. */
  static SYSTEM: System = {
    id: "generic",
    name: "Generic",
    version: 0,
    entities: [Section.ETYPE, Trait.ETYPE],
    deserializer: BuildGeneric.fromJSON,
  };

  /** Deserailize a build from JSON. */
  static fromJSON(bb: Buildblazer, json: any): BuildGeneric {
    return new BuildGeneric({
      ...Build.optionsFromJSON(bb, json),
    });
  }
}
