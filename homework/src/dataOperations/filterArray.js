export const filteredArray = (array, condition) => {
    return array.filter(x => {
        return eval(condition.replace("/x/g", x))
    })
}