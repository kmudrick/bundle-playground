import { rollup } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

async function build() {
  const bundle = await rollup({
    input: "dist/index.js",
    plugins: [
      resolve(),
      commonjs(),
      babel({
        extensions,
        babelHelpers: "bundled",
        include: ["src/**/*"],
        presets: [["@babel/preset-env"]],
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true,
        },
      }),
    ],
  });
  return await bundle.write({
    file: "dist/bundle.js",
    format: "iife",
  });
}
build()
  .then(() => console.log("success!"))
  .catch(console.error);
