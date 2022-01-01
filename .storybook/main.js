module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/packs/javascript/components/**/*.stories.mdx",
    "../app/packs/javascript/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/packs/javascript/components/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}
