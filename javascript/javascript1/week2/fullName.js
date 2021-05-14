function getFullname(fullName1, fullName2, useFormalName, gender){
    if(useFormalName){
        if(gender=="male"){
            return `Lord ${fullName1} ${fullName2}`
        }
        else 
        return `Lordess ${fullName1} ${fullName2}`
   
    }
    else 
    return `${fullName1} ${fullName2}`
}