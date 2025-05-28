import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        molde: ["molde", "sans-serif"],
        "molde-bold": ["molde-bold", "sans-serif"],
        "molde-bold-italic": ["molde-bold-italic", "sans-serif"],
        sans: ['"Open Sans"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient":
          "linear-gradient(91.79deg, #A759FF 2.5%, #F05615 50.59%, #FFA515 98.68%)",
        "button-gradient-hover":
          "linear-gradient(91.79deg, #FFA515 1.5%, #F05615 50.59%, #A759FF 90.5%)",
        "custom-gradient":
          "linear-gradient(15.58deg, #A759FF -16.58%, #F05615 32.19%, #FFA515 97.98%)",
        "custom-gradient-reverse":
          "linear-gradient(15.58deg, #FFA515 -16.58%, #F05615 32.19%, #A759FF 97.98%)",
        "text-gradient":
          "linear-gradient(92.66deg, #A759FF 3.66%, #F05615 21.75%, #FFA515 39.84%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "chart-1": "#FFA515", // Replace with your actual color
        "chart-2": "#9ED441",
        "chart-3": "#D44161",
        "chart-4": "#D45741",
        "chart-5": "#41D499",
        "chart-6": "#2255D6",
        "chart-7": "#6D41D4",
        // chart: {
        // 	'1': 'hsl(var(--chart-1))',
        // 	'2': 'hsl(var(--chart-2))',
        // 	'3': 'hsl(var(--chart-3))',
        // 	'4': 'hsl(var(--chart-4))',
        // 	'5': 'hsl(var(--chart-5))',
        // 	'6': 'hsl(var(--chart-6))',
        // 	'7': 'hsl(var(--chart-7))'
        // }
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
