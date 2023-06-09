const express = require("express")

const router = express.Router();

const { newOrder, singleOrder, myOrder, allOrders, allOrdersWithoutAmount, updateOrder, deleteOrder } = require("../controllers/orderController");

const { isAunthenticatedUser, authorizedRoles } = require("../middleWares/auth")

router.route("/order/new").post( newOrder)
router.route("/order/:id").get( singleOrder)
router.route("/orders/me").get( myOrder)

router.route("/admin/orders").get( authorizedRoles("admin", "agents", "team", "MannerPalace", "Mimies", "DoublePortion","NationalKitchen", "DivineHands","Numbers"), allOrders)
router.route("/admin/ordersfree").get(isAunthenticatedUser, authorizedRoles("admin", "agents", "team"), allOrdersWithoutAmount)
router.route("/admin/orders/:id")
    .put(isAunthenticatedUser, authorizedRoles("admin", "agents", "team"), updateOrder)
    .delete(isAunthenticatedUser, authorizedRoles("admin", "team"), deleteOrder)



module.exports = router