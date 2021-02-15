# Learn How to do MCR Concept in Express JS Using Sequelize

1. `git init`
2. `npm init`
3. `npm install express dotenv ejs pg sequelize`
4. Create `env` with contents of :
   - DB_USERNAME=""
   - DB_PASSWORD=""
   - DB_DATABASE=""
   - DB_DIALECT=""
   - DB_PORT=""
   - DB_HOST=""
   - PORT=""
5. Create .gitignore with :
   - node_modules
   - package-lock.json
   - .env
6. `sequelize init` 
7. Rename `config.json` -> `config.js`
   - Use `dotenv` to use environment variable in sequelize config
8. Change `model/index.js` config variable require to changed `config.js`
9. `sequelize db:create`
10. `sequelize model:create --name Articles --attributes content:text`
11. `sequelize db:migrate`
12. Create `index.js`
    - Initiate express.js
    - Change view engine to ejs
    - Create root route to render ejs
13. Create views folder and a file called `index.ejs` inside it
    - Fill it with basic html struture
14. Create start & dev script in `package.json`
15. Create controller folder with a file called `articleController.js` inside it
16. Modify `index.js` to use the controller
17. Create routes folder with a file called `articleRoute.js` inside it
18. Modify `index.js` to use the route 
19. Create views folder with `index.ejs` and `script.js` file to display the interface