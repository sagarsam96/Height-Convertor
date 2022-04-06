const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
const eighth = document.getElementById("eighth");
const inputs = document.querySelectorAll("input");


//1: feet               5:Mtr
//2: inches             6:Cm
//3: feet(pure)         7:Mtr(pure)
//4: inches(pure)       8:Cm(pure)

let feet, inches, pureFeet, pureInches,
    mtr, cm, pureMtr, pureCm;

const ConvertFtIn=()=>{
 feet= +first.value;
 inches= +second.value;

    if(!isNaN(inches))
    {
        pureFeet= Math.round((feet+(inches/12))*100000)/100000;
        pureInches= (feet*12)+inches;
        pureCm= Math.round((pureInches*2.54)*10000)/10000;
        pureMtr= pureCm/100;
        mtr= ~~(pureCm/100);
        cm= pureCm;
    }
    print();
}

const ConvertMtCm=()=>{
    mtr= +fifth.value;
    cm= +sixth.value;
   
       if(!isNaN(cm))
       {
           pureMtr= Math.round((mtr+(cm/100))*10000)/10000;
           pureCm= cm+(100*mtr);
  
           pureInches=Math.round((pureCm/2.54)*(10**4))/(10**4); 
           pureFeet=Math.round((pureInches/12)*(10**4))/(10**4);
           
           feet= ~~pureFeet;
           inches= Math.round((pureInches%12)*(10**4))/(10**4);         
       }
       print();
    }
   

   const ConvertFt=()=>{

        pureFeet= third.value;
         if(pureFeet){
            feet= pureFeet;
            inches=0;
            pureInches= 12*pureFeet;
            pureCm= pureInches*2.54;
            pureMtr= pureCm/100;
            mtr= ~~(pureCm/100);
            cm= Math.round((pureCm%100)*100)/100;

        }
        print();
   }

const ConvertIn=()=>{
    pureInches= fourth.value;

    if(pureInches){
        
        feet=~~(pureInches/12);
        inches=pureInches%12;
        pureFeet=Math.round((pureInches/12)*10000)/10000;

        pureCm= pureInches*2.54;
        pureMtr= ~~(pureCm/100);
        mtr= ~~(pureCm/100);
        cm= Math.round((pureCm%100)*100)/100;
    }
    print();
}

const ConvertMt=()=>{
    pureMtr= seventh.value;
    if(pureMtr){
        pureCm= pureMtr*100;
        mtr= ~~pureCm/100;
        cm= ~~pureCm%100;

        pureInches=Math.round((pureCm/2.54)*10000)/10000;
        pureFeet=Math.round((pureInches/12)*10000)/10000;
        
        feet=~~(pureInches/12);
        inches=Math.round((pureInches%12)*10000)/10000;
    }
    print();
}

const ConvertCm=()=>{
    pureCm= eighth.value;
    if(pureCm){
        pureMtr= pureCm/100;
        mtr= ~~(pureCm/100);
        cm= Math.round((pureCm%100)*10000)/10000;
        
        pureInches=Math.round((pureCm/2.54)*10000)/10000;
        pureFeet=Math.round((pureInches/12)*10000)/10000;
        feet=~~(pureInches/12);
        inches=Math.round((pureInches%12)*10000)/10000;
    
    }
    print();
}


const print=()=>{
    const Array = [feet, inches, pureFeet, pureInches, mtr, cm, pureMtr, pureCm];
    inputs.forEach( (x,i=0)=>(x.value= Array[i++]))
}

const reset=()=>{
    inputs.forEach( (x)=> x.value="");
}

