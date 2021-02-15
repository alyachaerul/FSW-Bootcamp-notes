# What to Do on MVC Concept in Express JS

1. git init
2. npm init -y
3. npm install express dotenv ejs pg sequelize
4. Buat .env
5. Buat .gitignore dengan isi:
   - node_modules
   - package-lock.json
   - .env
6. sequelize init
7. config.json -> config.js
   - Gunakan dotenv untuk pakai environment variable
8. sequelize db:create
9. sequelize model:create --name Articles --attributes content:text
10. sequelzie db:migrate
11. buat index.js
     - isi dengan hal2 untuk menginisiasi express
     - ganti view engine ke ejs
12. Buat folder "controller" dengan isi file "articleController.js
     - import model
     - buat method untuk mengambil data & respon dengan html
13. di index.js
     - import controller
     - bikin rute get root dengan menggunakan method dari controller
14. Bikin folder views isi index.ejs
     - isi basic html structure
   looping hasil dari controller lalu dibuatkan element p
15. Edit package.json, tambah start & dev script
16. Fix bug di model/index.js --> change from importing config.json to config.js
17. Bikin seed :
     - sequelize seed:generate --name articles
     - npm i faker
     - Lakukan looping dengan faker untuk membaut 3 data dummy
     - sequelize db:seed:all