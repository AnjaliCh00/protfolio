import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
module.exports = {
  extends: ["next", "next/core-web-vitals", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "react/no-unescaped-entities": "off", // disables the unescaped entities warning
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }] // ignore unused vars starting with _
  },
};

export default eslintConfig;
