import { defineStore } from "pinia"
import {reactive, ref} from 'vue'

export const useProductStore = defineStore("ProductStore", ()=> {
   const products = ref([])

   async function fill()  {
        const res = await fetch('/products.json')
        const data = await res.json();
        console.log(data)
        products.value = data;  
        console.log(products)    
    }
    
    

    return { products, fill }
})

  