function magic()
{
    const one = parseInt(document.getElementById('one').value)
    const two = parseInt(document.getElementById('two').value)
    const three = parseInt(document.getElementById('three').value)
    const four = parseInt(document.getElementById('four').value)
    const five = parseInt(document.getElementById('five').value)
    const six = parseInt(document.getElementById('six').value)
    const seven = parseInt(document.getElementById('seven').value)
    const eight = parseInt(document.getElementById('eight').value)
    const nine = parseInt(document.getElementById('nine').value)
    let  arr=[one,two,three,four,five,six,seven,eight,nine]
  console.log(arr)
    //checking null values
    for(i=0;i<arr.length;i++){
        if(!arr[i]){
            const alert=document.getElementById('alert')
            alert.innerHTML=` <div class="alert alert-danger" role="alert">
                        please enter the value.
                      </div>`
                      return

        }
    }


    //checking the  duplicate  
    
    for(i=0;i<arr.length;i++){
    j=i+1

        while(j<arr.length)
        {
            if(arr[i]==arr[j])
            {
                const alert=document.getElementById('alert')
                alert.innerHTML=` <div class="alert alert-danger" role="alert">
                             ${arr[i]} is repeated more than  once  and  You have  lost
                          </div>`
                          return
            }
        j++;
            
        }
    }

let vals = [[one,two,three],[four,five,six],[seven,eight,nine]];
const  n=3
 let sum=15; 
 let temp=0;
 let flag=1;

 for(let i=0;i<3;i++){
     temp =0;
     //checking row sum
     for(let j=0;j<n;j++){
         temp+=vals[i][j];
     }
     if(temp!=sum){
         flag=0;
         break;
     }

     temp =0;
     //checking columnn sum
     if(flag)
     for(let j=0;j<n;j++){
         temp+=vals[j][i];
     }
     if(temp!=sum){
         flag=0;
         break;
     }
 }

 //checking diagonals
 if(flag){
     temp=0;
     let dsum = vals[0][0] + vals[1][1] + vals[2][2]; 
     if(dsum!=sum)
         flag=0;

     if(flag)
     {
         dsum = vals[0][2] + vals[1][1] +vals[2][0];
         if(dsum!=sum)
         flag=0;
     }
 }
if(flag)
{
const alert=document.getElementById('alert')
alert.innerHTML=` <div class="alert alert-success" role="alert">
            You have Won the match!
          </div>`
}
else{
    const alert=document.getElementById('alert')
alert.innerHTML=` <div class="alert alert-danger" role="alert">
            You have Lost the match!
          </div>`
}

}