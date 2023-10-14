let nem=prompt('Enter your name')
let yr=prompt('Year of birth')
let y=parseInt(yr)
// console.log(y)
// console.log(typeof(y))
// console.log(typeof(typeof(y)))
if(isNaN(y)){
    console.log('NaN[[[[[')
}
while(yr<0 || yr>2023 ||isNaN(y)){
console.error('Icorrect input')
 yr=prompt('Enter again the year of birth')
 y=parseInt(yr)   
}
let age=2023-y
if(age>18){
        // location.href="https:/abc.com"  to redirect somewhere
        let gen=prompt('Enter your gender-\n Male       Female      Other')
        let adrs=prompt('Enter your parmanent address-')
        let eml=prompt('Enter your email address')
        alert('You will get the online copy of the licence is 15 days and hard copy is delivered in 30 days')
    

}
else{
    alert('You are not eligible drive, your age must be 18+')
}
document.title='hulululul'
