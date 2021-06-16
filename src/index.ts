import "core-js/es/array/some";
import "core-js/es/object/entries";

type Foo = {
  bar: string;
};

const foos: Foo[] = [{ bar: "baz" }, { bar: "bat" }];

const hasBat = foos.some((_) => _.bar === "bat");

Object.entries(foos[0]);

hasBat;

// (print as any)(hasBat);
