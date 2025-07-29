const {heroui} = require('@heroui/theme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|button|dropdown|navbar|table|ripple|spinner|menu|divider|popover|checkbox|form|spacer).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}