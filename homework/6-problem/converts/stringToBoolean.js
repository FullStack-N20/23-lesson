export const bool = (str) => {
    if (typeof str !== 'string') return false;
  
    const trueValues = ['true', 'yes', '1'];
    const falseValues = ['false', 'no', '0'];
  
    const value = str.trim().toLowerCase();
  
    if (trueValues.includes(value)) return true;
    if (falseValues.includes(value)) return false;
  
    return false; 
  };
  