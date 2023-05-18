import React from 'react'

const App = () => {

  //string number boolean undifined null 


for (let i = 1; i <= 20; i++) {
  if (i ===10) {
    continue;
  }
  console.log(i)
}


// if(age < 17) {
//   return <h1>You are junior, price is Rs.20</h1>
// } else if(age > 17 && age < 50){
//   return <h1>You are regular, price is Rs. 50</h1>
// } else{
//   return <h1>You are senior, price is Rs. 30</h1>
// }

  return (

    <div>

    {/* <h1></h1> */}



      <h1 className='text-2xl italic font-bold'>hello react</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, doloribus dicta consequuntur explicabo saepe corrupti facilis quam sint modi perferendis! Sequi magni nemo dolore, asperiores dolorum iure id tenetur ipsa cumque, molestias quidem harum, illo possimus rem minus a. Veniam soluta quis voluptates doloribus qui, sapiente eius fugiat consequatur eligendi?</p>





    </div>
  )
}

export default App