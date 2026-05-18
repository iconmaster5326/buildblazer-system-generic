import { Build, Entity, type System } from "@buildblazer/core";
import { Character } from "./character";
import { Section } from "./section";
import { Trait } from "./trait";

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

  static SYSTEM: System = {
    id: "generic",
    name: "Generic",
    version: 0,
    entities: [Section.ETYPE, Trait.ETYPE],
    deserializer: (json) => new BuildGeneric(json),
  };
}
