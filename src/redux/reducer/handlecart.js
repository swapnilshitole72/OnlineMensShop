// const cart =[];
// const handleCart =(state =cart , action)=>{
//     const product =action.payload ;

//     switch (action.type){
//         case "ADDITEM":
//             const exit=state.find((x)=>x.id===product.id)
//            if(exit){
//             //increase the quantity
//             return state.map((x)=> x.id===product.id ?{...x,qyt:x.qty +1}:x
//            );
//         }else{
        
//             return [
//                 ...state,
//                 {
//                     ...product,
//                     qty:1
//                 }
//             ]
//         } 
//          break ;

//          case "DELITEM":
//             const exit1=state.find((x)=>x.id===product.id)
//            if(exit1.qty===1){
//             //increase the quantity
//             return state.filter((x)=> x.id !==exit1.id);

//         }else{
            
//             return state.map((x)=> x.id===product.id?{...x,qyt: x.qty-1}:x);
//         } 
//         break ;
//             default:
                
//                 break ;
//     }
// }


// export default handleCart;