const timetomake = document.getElementById('tomake');
const timetodeliver = document.getElementById('todeliver');
const timetosell = document.getElementById('tosell');
const btn = document.querySelector('#btn');



// const dawera = btn.addEventListener('click', () => {
    
//   let tomake = timetomake.value;
//   let todeliver = timetodeliver.value;
//   let tosell = timetosell.value;
//   tomake = Number(tomake) * 1000
//   todeliver = Number(todeliver) * 1000
//   tosell = Number(tosell) * 1000
 
//   const make = (dro) =>{
    
//     const prms = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(Math.random() > 0.1) {
//            resolve('succes')
//            console.log('toy was made')
//       }
//           else reject('failed to make toy')
//         }, dro)
//       })
   
//       return prms
   
       
//   }

//   const deliver = (info, dro) =>{
//     const deliverToys = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(info == 'succes' && Math.random() > 0.1) {
//            resolve('delivered')
//            console.log('toy was delivered')
//       }
//       else reject('toy was made but failed while diliver')
//     }, dro)
//     })
       
//        return deliverToys
      
        
//   }

//   const sell = (info, dro) =>{
//     const selltoys = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(info === 'delivered' && Math.random() > 0.3)  resolve('toy was made and sold, well done')
//         else reject('failed to sell')
//       }, dro)
        
//     })
//     return selltoys
//   }

//   make(tomake).then(res => deliver(res, todeliver)).then(res => sell(res, tosell)).then(res => console.log(res)).catch(err => console.log(err))
  

// });




const dawera = btn.addEventListener('click', async () => {
  let tomake = timetomake.value;
  let todeliver = timetodeliver.value;
  let tosell = timetosell.value;
  tomake = Number(tomake) * 1000;
  todeliver = Number(todeliver) * 1000;
  tosell = Number(tosell) * 1000;

  async function make(dro) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          console.log('Toy was made')
          resolve('success');
        } else {
          reject('Failed to make toy')
        }
      }, dro);
    })
  }

  async function deliver(info, dro) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (info === 'success' && Math.random() > 0.2) {
          console.log('Toy was delivered')
          resolve('delivered')
        } else {
          reject('Toy was made but failed while delivering')
        }
      }, dro)
    })
  }

  async function sell(info, dro) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (info === 'delivered' && Math.random() > 0.3) {
          resolve('toy was made and sold, well done')
        } else {
          reject('Failed to sell')
        }
      }, dro)
    })
  }

  try {
    const ismade = await make(tomake);
    const isdelivered = await deliver(ismade, todeliver);
    const issold = await sell(isdelivered, tosell);
    console.log(issold);
  } catch (err) {
    console.log(err);
  }
})