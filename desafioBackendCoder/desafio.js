class ProductManager{

    constructor(){

        this.products=[]
    }

    getProduct(){
        return this.products        
    }
    addProduct(nombre, description, price=0, thumbnail, code, stock=0){
        if(!nombre || !description || !price || !thumbnail || !code || !stock){
            console.log("Complete todos los datos")
        }
    }

    let id=1
    if(this.products.length>0){
        id=this.products[this.products.length-1].id +1
    }

}