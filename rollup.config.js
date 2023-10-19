import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");
const external = ["react", "react-dom"];

process.env.BABEL_ENV = "production";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm", //ES Modules
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external,
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts()],
  },
];
