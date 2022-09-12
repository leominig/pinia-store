import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import  cartItems  from '@/data/cart.json'

export const useCartStore = defineStore('CartStore', ()=> {
    const items = ref(cartItems)  

    const count = computed(()=> {
      return items.value.length})
      
      const isEmpty = computed(()=> {
        return this.count == 0
      }) 

      function addItem(itemId, count) {
        const item = item.value.find((item)=> item.id === item.id)
        if(item) {
          item.count += count
        }else {
          item.value.push({id: itemId, count})
        }
        return  count.value 
      }
      
  
    return {items, count, isEmpty, addItem}
})