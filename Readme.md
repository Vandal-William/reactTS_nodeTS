# CREER le Back
cd backend/
npm init --yes
npm install express
npm i -D typescript @types/express @types/node 
npx tsc --init
# CREER le front
npx create-react-app frontend --template typescript

# LANCER docker compose

```shell
sudo docker compose up -d
```

# voir les contenaire run

sudo docker ps -a

# voir les logs 

sudo docker logs react-project-backent-1(NAMES)

# rebuild

sudo docker compose up -d --build