// ----------------------------------------------------------------------------------------------------------- //

x = Math.PI/2
//Math.cos(x)
a = Math.cos(x/2)**2  //<--- 0.5000000000000001
let b1 = Math.tan(x)
let b2 = Math.sin(x)
let b3 = Math.tan(x)*2
b = (b1+b2)/b3 
//c = (a == b)
//document.write(c)
if(a == b){
    document.write("Si es una identidad")
}
else{
    document.write("No es una identidad")
}

