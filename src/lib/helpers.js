const bcrypt = require("bcryptjs")

const helpers = {}

helpers.encryptPassword = async(contraseña) =>{
    const salt = await bcrypt.genSalt(10)
    const finalContraseña = await bcrypt.hash(contraseña, salt)
    return finalContraseña
}

helpers.matchPassword = async (contraseña, saveContraseña) => {
     try {
        await bcrypt.compare(contraseña, saveContraseña)
     } catch (error) {
        console.error(error);
     }
}