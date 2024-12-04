import {ref, computed} from 'vue'

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref([]);  // 購物車的商品列表
    const cartItemCount = computed(()=>{ return items.value.reduce((total, item) => total + item.quantity, 0);}) // 計算購物車內幾種商品
    const addItem = (product) => {
    const existingProduct = items.value.find(item => item.title === product.title);

    if (existingProduct) {
    existingProduct.quantity += 1;  // 已經存在，數量加 1
    } else {
    items.value.push({ ...product, quantity: 1 }); // 新增商品並設置數量為 1
    }
};

  const removeItem = (productTitle) => {
    items.value = items.value.filter(item => item.title !== productTitle);
  };

  const updateQuantity = (productTitle, quantity) => {
    const product = items.value.find(item => item.title === productTitle);
    if (product) {
      product.quantity = quantity;
    }
  };

  const clearCart = () => {
    items.value = [];
  };
  // getters
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.discount * item.quantity, 0);
  });


  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    cartItemCount
  };
});