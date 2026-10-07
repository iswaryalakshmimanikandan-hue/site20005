import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['cage-barbecue-hurry.ngrok-free.dev']
  }
})