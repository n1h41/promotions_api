const { promotionsList, shoppingCart } = require("../utils/constants");

exports.getPromotions = (req, res) => {
    res.send('List all promotions');
};

exports.applyPromotions = (req, res) => {
    const promotion = promotionsList[0];
    const cart = shoppingCart
    let totalCartPrice = 0;
    cart.cartContents.map(item => {
        totalCartPrice = totalCartPrice + item.price
    })
    if (totalCartPrice < promotion.min_purchase_rate) {
        return res.send('Not eligible for the promotion')
    }
    let OfferPriceToBeDeducted = (totalCartPrice * (promotion.discount_rate / 100))
    if (OfferPriceToBeDeducted <= promotion.max_discount_amount) { cart.priceAfterPromotion = totalCartPrice - OfferPriceToBeDeducted }
    else cart.priceAfterPromotion = totalCartPrice - promotion.max_discount_amount
    return res.json(cart)
}