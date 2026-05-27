// vite.config.js
import { defineConfig } from "file:///D:/property-wala-ankita-main/property-wala-ankita-main/node_modules/vite/dist/node/index.js";
import react from "file:///D:/property-wala-ankita-main/property-wala-ankita-main/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///D:/property-wala-ankita-main/property-wala-ankita-main/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react({
      // This ensures that 'React' doesn't need to be imported in every .jsx file
      jsxRuntime: "automatic"
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9wZXJ0eS13YWxhLWFua2l0YS1tYWluXFxcXHByb3BlcnR5LXdhbGEtYW5raXRhLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb3BlcnR5LXdhbGEtYW5raXRhLW1haW5cXFxccHJvcGVydHktd2FsYS1hbmtpdGEtbWFpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvcGVydHktd2FsYS1hbmtpdGEtbWFpbi9wcm9wZXJ0eS13YWxhLWFua2l0YS1tYWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCAnUmVhY3QnIGRvZXNuJ3QgbmVlZCB0byBiZSBpbXBvcnRlZCBpbiBldmVyeSAuanN4IGZpbGVcbiAgICAgIGpzeFJ1bnRpbWU6ICdhdXRvbWF0aWMnXG4gICAgfSksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6ICcvc3JjJyxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsU0FBUyxvQkFBb0I7QUFDdlgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQTtBQUFBLE1BRUosWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
