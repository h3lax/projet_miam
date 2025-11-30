import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      strapiBaseUrl: "http://localhost:1337"
    }
  },


  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/tailwind.css"],
  


})
