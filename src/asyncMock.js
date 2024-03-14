const products = [
    {
        id: '1',
        name: 'Remera',
        price: 900,
        img:'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-640-0.jpg',
        category: 'remera',
        stock: 20,
        description:'Descripcion de remera celeste'
    },
    {id: '2', name: 'Buzo' , price: 1000, category: 'buzo', img:'https://http2.mlstatic.com/D_NQ_NP_751206-MLA53887749578_022023-O.webp', stock: 20 , description:'Descripcion de buzo rojo'},
    {id: '3', name: 'Pantalon' , price: 850, category: 'pantalon', img:'https://i.pinimg.com/236x/03/24/69/03246994e5ec677d04df61e6132b3089.jpg', stock: 20 , description:'Descripcion de pantalon de jean' },   
    {id: '4', name: 'Camisa' , price: 840, category: 'camisa', img:'https://www.dhresource.com/webp/m/0x0/f2/albu/g20/M00/D9/C9/rBVaqWEQ-9yAQZA2AABzVKHgF_k142.jpg' ,  stock: 20 , description:'Descripcion de camisa roja y negra'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
      })
    } 
    
    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.filter(prod => prod.category == categoryId))
            },1000)
        })
    }
    
    export const getProductById =(itemId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id == itemId))
            }, 1000)
        })
    }           