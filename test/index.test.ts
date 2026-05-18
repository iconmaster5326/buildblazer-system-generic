import { describe, test, expect } from "vitest";
import * as uuid from "uuid";

import { BuildGeneric, Section, Trait } from "../src/index";
import { Buildblazer } from "@buildblazer/core";

const bb = new Buildblazer({
  systems: [BuildGeneric.SYSTEM],
});

describe("builds", () => {
  test("ctor blank", () => {
    const b = new BuildGeneric();

    expect(b.systemName()).toBe(BuildGeneric.SYSTEM.id);
    expect(b.systemVersion()).toBe(BuildGeneric.SYSTEM.version);
    expect(b.loadedSystemVersion).toBe(BuildGeneric.SYSTEM.version);
  });

  test("ctor initialized", () => {
    const id = uuid.v4();
    const b = new BuildGeneric({
      id: id,
      name: "Test",
    });

    expect(b.id).toBe(id);
    expect(b.name).toBe("Test");
  });

  test("from JSON", () => {
    const id = uuid.v4();
    const b = bb.buildFromJSON({
      id: id,
      system: BuildGeneric.SYSTEM.id,
      systemVersion: BuildGeneric.SYSTEM.version,
      name: "Test",
    });

    expect(b).toBeInstanceOf(BuildGeneric);
    expect(b.id).toBe(id);
    expect(b.loadedSystemVersion).toBe(BuildGeneric.SYSTEM.version);
    expect(b.name).toBe("Test");
  });

  test("to JSON", () => {
    const b = new BuildGeneric();
    const j = b.toJSON() as any;

    expect(j.id).toBe(b.id);
    expect(j.system).toBe(b.systemName());
    expect(j.systemVersion).toBe(b.systemVersion());
  });
});

describe("sections", () => {
  test("to json", () => {
    const s = new Section();
    const j = s.toJSON() as any;

    expect(j.id).toBe(s.id);
    expect(j.type).toBe(Section.ETYPE.id);
  });

  test("from json", () => {
    const id = uuid.v4();
    const s = bb.entityFromJSON({
      id: id,
      type: Section.ETYPE.id,
    });

    expect(s).toBeInstanceOf(Section);
    expect(s.id).toBe(id);
  });
});

describe("traits", () => {
  test("to json", () => {
    const t = new Trait({
      description: "Test",
    });
    const j = t.toJSON() as any;

    expect(j.id).toBe(t.id);
    expect(j.type).toBe(Trait.ETYPE.id);
    expect(j.description).toBe(t.description);
  });

  test("from json", () => {
    const id = uuid.v4();
    const t = bb.entityFromJSON({
      id: id,
      type: Trait.ETYPE.id,
      description: "Test",
    });

    expect(t).toBeInstanceOf(Trait);
    expect(t.id).toBe(id);
    expect((t as Trait).description).toBe("Test");
  });
});
