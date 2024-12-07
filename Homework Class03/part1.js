function returnTypes(parameter){
    let type = (typeof parameter)
    console.log(type)
    return type
}

returnTypes({})
returnTypes(false)
returnTypes(9320)
returnTypes("test")
returnTypes(undefined)