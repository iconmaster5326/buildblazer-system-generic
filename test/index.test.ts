import { describe, test, expect } from "vitest";
import * as uuid from "uuid";

import { BuildGeneric, Section, Trait } from "../src/index";
import { Build, Entity } from "@buildblazer/core";

describe("builds", () => {
  test("ctor blank", () => {
    const b = new BuildGeneric();

    expect(b.systemName()).toBe(BuildGeneric.NAME);
    expect(b.systemVersion()).toBe(BuildGeneric.VERSION);
    expect(b.loadedSystemVersion).toBe(BuildGeneric.VERSION);
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
    const b = Build.fromJSON({
      id: id,
      system: BuildGeneric.NAME,
      systemVersion: BuildGeneric.VERSION,
      name: "Test",
    });

    expect(b).toBeInstanceOf(BuildGeneric);
    expect(b.id).toBe(id);
    expect(b.loadedSystemVersion).toBe(BuildGeneric.VERSION);
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
    expect(j.type).toBe(Section.TYPE);
  });

  test("from json", () => {
    const id = uuid.v4();
    const s = Entity.fromJSON({
      id: id,
      type: Section.TYPE,
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
    expect(j.type).toBe(Trait.TYPE);
    expect(j.description).toBe(t.description);
  });

  test("from json", () => {
    const id = uuid.v4();
    const t = Entity.fromJSON({
      id: id,
      type: Trait.TYPE,
      description: "Test",
    });

    expect(t).toBeInstanceOf(Trait);
    expect(t.id).toBe(id);
    expect((t as Trait).description).toBe("Test");
  });
});
