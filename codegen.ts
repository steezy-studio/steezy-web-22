import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./generated/preprTypes.ts": {
      plugins: ["typescript"],
      schema: `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    "./generated/shopifyTypes.ts": {
      plugins: ["typescript"],
      schema: [
        {
          [process.env.NEXT_PUBLIC_SHOPIFY_API_URL]: {
            headers: {
              "X-Shopify-Storefront-Access-Token":
                process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
            },
          },
        },
      ],
    },
  },
};

export default config;
