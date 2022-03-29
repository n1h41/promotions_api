const { getPromotions, applyPromotions } = require('../controllers/promotions_controller');

const router = require('express').Router();

router.route('').get(getPromotions).post(applyPromotions)

module.exports = router