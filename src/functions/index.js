exports.calculateDiscount = (discount_price,orignal_price)=>{
    return parseInt((orignal_price-discount_price)/orignal_price *100)
}