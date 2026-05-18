import { Build, Entity } from "@buildblazer/core";
import { Character } from "./character";

export class BuildGeneric extends Build {
  static NAME = "generic";
  static VERSION = 9;

  systemName(): string {
    return BuildGeneric.NAME;
  }

  systemVersion(): number {
    return BuildGeneric.VERSION;
  }

  baseEntity(): Entity {
    return new Character();
  }

  static register() {
    Build.FROM_JSON_REGISTRY[BuildGeneric.NAME] = (json: any) => {
      return new BuildGeneric(json);
    };
  }
}

BuildGeneric.register();
