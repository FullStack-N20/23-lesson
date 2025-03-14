class CaesarCipher {
    constructor(shift) {
        this.shift = shift
    }
//  if char over then 122 make plus 26 - shift for going to end of alphabet
    encode(password) {
        let result = ""
        for (const char of password) {
            let temp = char.charCodeAt(0)

            if (122 < temp || temp  < 65 ) {
                return new Error("Invalid char in password")
            }

            if (temp+this.shift > 122 || temp + this.shift > 90 && temp + this.shift < 97) {
                temp = temp - 26 + this.shift
                result += String.fromCharCode(temp).toUpperCase()
            } else {
                result += String.fromCharCode(temp + this.shift).toUpperCase()
            }
        }
        
        return result
    }
//  if char over then 122 or lower then 65 make plus 26 - shift for going to end of alphabet
    decode(password = "") {
        let result = ""
        for (const char of password) {
            let temp = char.charCodeAt(0)

            if (122 < temp || temp  < 65 ) {
                return new Error("Invalid char in password")
            }
            // console.log(temp-this.shift);
            
            if (temp-this.shift > 97 || temp-this.shift < 65) {
                temp = temp + 26 - this.shift
                result += String.fromCharCode(temp).toUpperCase()
            } else {
                result += String.fromCharCode(temp - this.shift).toUpperCase()
            }

        }
        
        return result
    }

}

const person = new CaesarCipher(5)
// console.log(person.encode("Codewars")) // HTIJBFWX
console.log(person.decode("BFKKQJX")) // WAFFLES
