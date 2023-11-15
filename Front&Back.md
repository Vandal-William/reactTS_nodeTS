## Creer le Back

```shell
cd backend/
npm init --yes
npm install express
npm i -D typescript @types/express @types/node 
npx tsc --init
```
## Creer le front

```shell
npx create-react-app frontend --template typescript
```

## Créer un front avec vite dans docker

### config docker-compose.yml

```yml
version: "3"
services:
  frontend:
    image: node:20-alpine
    container_name: react-frontend
    ports:
      - 5173:5173
    volumes:
      - ./:/app
    working_dir: /app/frontend
    tty: true
```
### Commandes dans le terminal

```shell
sudo docker compose up -d 
```

```bash
sudo docker exec -it react-frontend sh /app/frontend # npm create vite@lastest
```
framework > React > TypeScript

### config vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      usePolling: true
    }
  }
})
```
### Se mettre des droits d'utilisateur
```bash
sudo chown -R william:william frontend/
```
### se connecter dans le contener

```bash
sudo docker exec -it react-frontend sh
npm run dev
```