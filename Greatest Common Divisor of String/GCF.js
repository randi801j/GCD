var gcfofString= function (str1,str2){
    if (str1+ str2 != str2+str1) return '' // checking if the strings have gcf first before moving foward
    
    let m= str1.length
    let n= str2.length
    let gcd = function (m,n){
        if (!n) return m // if length equal to 0 return m. Recursive, it checks if n is equal to 0
        return gcd(n,m%n)// Recursive step, calling itself with argument n and m%n. % operator computes te remainder when m is divided by n. 
    }
    let div = gcd(m,n) // this calls the gcd lengths m and n of str1 and str2 and stores the result in the cariable div. 
    return str1.slice (0,div) // slice from 0 index to the last of the second strong
};
