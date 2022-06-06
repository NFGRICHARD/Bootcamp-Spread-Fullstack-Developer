function getAdmins(Map){
    let admins = []
    for([key, value] of Map){
        if(value === 'Admin'){
            admins.push(key);//vai manda os nomes para o arrey admins
        }
    }
    return admins;
}

const myMap = new Map ()

myMap.set('Luis', 'Admin');
myMap.set('Gustavo', 'Admin');
myMap.set('Pedro', 'Admin');
myMap.set('Athor', 'Usuario');
myMap.set('Thor', 'Usuario');

console.log(getAdmins(myMap))