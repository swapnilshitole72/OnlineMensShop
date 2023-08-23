//for add item into cart 

export const addcart=(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

//for delete item to cart 
export const delcart=(product)=>{
    return {
        type:"DELITEM",
        payload:product
    }
}