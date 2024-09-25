
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {state: () => ({
  list: [{
    name: 'test 01',
    imageUrl: 'https://picsum.photos/id/2/367/267',
    quantity: 10,
    about: 'Donec et lacinia nibh. Aliquam sodales ex in dolor lacinia condimentum. Integer hendrerit purus eget purus elementum vulputate.',
    status: 'open',
    price: 100,
    shipping: 0,
  },
  {
    name: 'test 02',
    imageUrl: 'https://picsum.photos/id/26/367/267',
    quantity: 10,
    about: 'Donec consequat arcu consectetur nulla ultricies venenatis. Duis vulputate sollicitudin dui, ac pulvinar mauris ultrices ut.',
    status: 'open',
    price: 100,
    shipping: 10,
  },{
    name: 'test 03',
    imageUrl: 'https://picsum.photos/id/20/367/267',
    quantity: 10,
    about: 'Ut id dictum dolor. Donec sodales vitae massa quis elementum. Sed sollicitudin lectus eu dui fermentum dictum. Praesent nec finibus mi.',
    status: 'open',
    price: 100,
    shipping: 0,
  },{
    name: 'test 04',
    imageUrl: 'https://picsum.photos/id/36/367/267',
    quantity: 10,
    about: 'Nulla non turpis consectetur nisl viverra interdum. Nam vitae luctus ante. Duis ex sapien, facilisis sit amet libero id, iaculis auctor felis.',
    status: 'open',
    price: 100,
    shipping: 0,
  }]
}),
actions: {
  filterProducts (searchText) {
    return this.list.filter(product => product.name.includes(searchText))
  }
}
})

