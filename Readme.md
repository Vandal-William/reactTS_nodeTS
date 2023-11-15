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
# LANCER docker compose

```shell
sudo docker compose up -d
```
### voir tous les contenaire 

```shell
sudo docker ps -a
```
### voir tous les contenaire run

```shell
sudo docker ps
```
### voir les logs 

```shell
sudo docker logs react-project-backent-1(NAMES)
```
### rebuild

```shell
sudo docker compose up -d --build
```
### accéder au front 

http://172.19.0.2:3000

### accéder au back

http://localhost:8081/