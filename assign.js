class Mkulima{
    constructor(){
    this.farms = [];
    this.Vendor= [];
    this.product = [];
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specific);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    
    let farm2 = new Mkulima();
    farm1.addFarm("123","Ishema","Umuhoza","0789415454", "KK 123 K");
    farm1.addFarm("023","Icyusa","Mugisha","0782444764", "KK 023 K");
    farm1.addFarm("003","Ikirezi","Kayitete","078223234", "KN 003 K");
    console.log(farm1.farms);
    
    farm1.removeFarm("023");
    
    