import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://localhost:1337/graphql",
  generates: {
    "./types.d.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
}
export default config
