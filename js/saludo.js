const saludar = (name) => {
    name.trin();

    if(name) {
        console.log(`Hola, saludos ${name}`);
    } else {
        alert("Error: no hay nombre.")
    }
};

saludar("Sebastian");