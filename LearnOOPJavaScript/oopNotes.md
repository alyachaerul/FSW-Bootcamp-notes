# Konsep Object Oriented Programming

1. OOP untuk mempersingkat coding
2. Dengan OOP membuat fungsi dasar di baseController kemudian bisa di reuse di file lainnya
3. Kalo pake OOP tidak dapat menggunakan object destructuring
4. Pada OOP terdapat fitur Class dan function Constructor
5. Class merupakan sebuah objek dimana propertinya dynamic
6. Gaya penulisan class : 
   `class NamaClass {
       constructor()
   }`
7. Didalam Class terdapat Constructor 
   - Dibutuhkan untuk membangun sebuah class
   - Bisa memiliki parameter
8. This dalam constructor adalah merujuk kepada objek --> sebuah objeck yang berada di dalam class
9. Cara memakai Class : 
   `const student = new NamaClass("Alya", "Chaerul")`
10. Class membantu mengenkapsulasi sebuah method --> menggunakan properti yang ada pada methodnya saja. Tetapi di JS masih bisa jika diluar methodnya
11. Dalam melakukan pendefinisian suatu function dalam class bisa dilakukan di dalam constructor menggunakan anonymous function
12. Manfaat menggunakan OOP : 
    - Konsep Inheritance (pewarisan) -> dapat mempersingakt codingan yang memiliki method yang sama