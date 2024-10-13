/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "468px", // Özel bir küçük breakpoint ekleyin
        sm: "640px", // Varsayılan sm breakpoint'i
        md: "857px", // Varsayılan md breakpoint'i
        lg: "1024px", // Varsayılan lg breakpoint'i
        xl: "1280px", // Varsayılan xl breakpoint'i
        "2xl": "1536px", // Varsayılan 2xl breakpoint'i
        "custom-lg": "1440px", // Özel bir geniş breakpoint ekleyin
      },

      scale: {
        180: "1.8", // %80 büyütme (1.8 katı)
        160: "1.6",
        170: "1.7",
      },
    },
  },
  plugins: [],
};
