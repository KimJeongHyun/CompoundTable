// rollup.config.js

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { dts } from "rollup-plugin-dts";

const packageJson = require("./package.json");
const extensions = ["js", "jsx", "ts", "tsx"];
const external = ["react", "react-dom", "styled-components"];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      dts(),
      resolve({ extensions }),
      commonjs({
        include: /node_modules/,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
    ],
    external,
  },
];
