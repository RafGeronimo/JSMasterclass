console.log("C++".localeCompare("Ruby")); //-1
console.log("Python".localeCompare("Java")); //1
console.log("JavaScript".localeCompare("JavaScript")); //0

//localeCompare: sempre que a string A for comparada com a B se:
    // A < B = -1
    // A = B = 0
    // A > B = 1 (em charCode)

//Cuidado com ACENTOS na string, eles alteram o charCode porém o localeCompare
// consegue detecta-los e comparar "ignorando" os acentos