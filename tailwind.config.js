module.exports = {
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#ffffff",
          50: "#f0f2f4",
          100: "#e1e4ea",
          200: "#c3c9d5",
          300: "#a5aec0",
          400: "#8893aa",
          500: "#6a7895",
          600: "#556077",
          700: "#3f485a",
          800: "#2a303c",
          900: "#15181e",
          950: "#0b0c0f",
        },
        black: {
          DEFAULT: "#000000",
          50: "#f0f2f4",
          100: "#e1e5ea",
          200: "#c4cad4",
          300: "#a6b0bf",
          400: "#8996a9",
          500: "#6b7b94",
          600: "#566376",
          700: "#404a59",
          800: "#2b313b",
          900: "#15191e",
          950: "#0b0c0f",
        },
        deepblue: {
          50: "#e7eefe",
          100: "#cfdcfc",
          200: "#9ebafa",
          300: "#6e97f7",
          400: "#3d74f5",
          500: "#0d52f2",
          600: "#0a41c2",
          700: "#083191",
          800: "#052161",
          900: "#031030",
          950: "#010818",
        },
        neonblue: {
          50: "#e8f8fc",
          100: "#d2f0f9",
          200: "#a4e1f4",
          300: "#77d2ee",
          400: "#49c3e9",
          500: "#1cb5e3",
          600: "#1690b6",
          700: "#116c88",
          800: "#0b485b",
          900: "#06242d",
          950: "#031217",
        },
        mauve: {
          50: "#fce8f8",
          100: "#fad1f2",
          200: "#f4a4e4",
          300: "#ef76d7",
          400: "#ea48c9",
          500: "#e41bbc",
          600: "#b71596",
          700: "#891071",
          800: "#5b0b4b",
          900: "#2e0526",
          950: "#170313",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./pages/**/*.{html,js,vue}", "./components/**/*.{html,js,vue}", "./layouts/**/*.{html,js,vue}"],
}
