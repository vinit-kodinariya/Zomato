const { orderItemService } = require("../services")
/**create order Item */
const createOrderItem = async (req, res) => {
    try {
        const reqBody = req.body;
        const orderItem = await orderItemService.createOrderItem(reqBody);
        if (!orderItem) {
            throw new Error("Order Item not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order create successfully!"),
            data: { orderItem }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list order Item */
const getOrderItem = async (req, res) => {
    try {
        const reqBody = req.body;
        const orderItem = await orderItemService.getOrderItem(reqBody);
        console.log();
        if (!orderItem) {
            throw new Error("order Item not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order list successfully!"),
            data: { orderItem }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete order Item */
const deleteOrderItem = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderItemEx = await orderItemService.getOrderItem();
        if (!orderItemEx) {
            throw new Error("order Item not found!")
        }
        const orderItem = await orderItemService.deleteOrderItem(id)
        res.status(200).json({
            success: true,
            message: ("order delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update order Item */
const updateOrderItem = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderItemEx = await orderItemService.getOrderItemById();
        if (!orderItemEx) {
            throw new Error("order Item not found!")
        }
        const orderItem = await orderItemService.updateItem(id, req.body)
        res.status(200).json({
            success: true,
            message: ("order update successfully!"),
            data: orderItem
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createOrderItem,
    getOrderItem,
    deleteOrderItem,
    updateOrderItem
}