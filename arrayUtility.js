const doubleNumbers=(numbers)=>{

   if(!Array.isArray(numbers))
   {
      throw new Error('input is not an array');
   }

   else{
      const map1=numbers.map(x=>x*3)
      const map2=map1.filter(x=>x%2==0)
      return map2;
   }
   
};

console.log(doubleNumbers([1,2,3,4]));
module.exports={doubleNumbers};

