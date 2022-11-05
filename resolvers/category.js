

exports.Category = {
    products: ({id}, {filter}, {db}) => {

       const categoryProducts = db.products.filter((product) => product.categoryId === id);
       let filterdCategoryProducts = categoryProducts ; 

     if(filter){
        if(filter.onSale === true){
            filterdCategoryProducts= filterdCategoryProducts.filter((product)=>{
                return product.onSale
            })
        }

       }
        return filterdCategoryProducts;
    },

};