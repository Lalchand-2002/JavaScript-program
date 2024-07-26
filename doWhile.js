let inClass = true;
let period = 1;
do{
   if(period==3 && period<4){
    console.log(`Bunked period =${period}`);
   }else{
    console.log(`Attended period =${period}`);
   }
   period+=1;

}
while(inClass && period<=4);