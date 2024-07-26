let age=50;
let Status="gold";
if(age>=65){
    console.log("Eligible for the Discount");
}
else if(age>=60&&age<=64&&Status=="gold"){
    console.log("Eligible to Gold membership status");
}
else
    console.log("Not Eligible for Discount");