var gcfofString= function (str1,str2){
    if (str1+ str2 != str2+str1) return '' // checking if the strings have gcf first before moving foward
    
    let m= str1.length
    let n= str2.length
    let gcd = function (m,n){
        if (!n) return m // if length equal to 0 return x
        return gcd(n,m%n)
    }
    let div = gcd(m,n)
    return str1.slice (0,div) // slice from 0 index to the last of the second strong
};