const { orderDetailsService } = require("../services")
/**create order details */
const createOrderDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const orderDetails = await orderDetailsService.createOrderDetails(reqBody);
        if (!orderDetails) {
            throw new Error("Order Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order create successfully!"),
            data: { orderDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list order details */
const getOrderDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const orderDetails = await orderDetailsService.getOrderDetails(reqBody);
        console.log();
        if (!orderDetails) {
            throw new Error("order Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order list successfully!"),
            data: { orderDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete order details */
const deleteOrderDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderDetailsEx = await orderDetailsService.getOrderDetails();
        if (!orderDetailsEx) {
            throw new Error("order Details not found!")
        }
        const orderDetails = await orderDetailsService.deleteOrderDetails(id)
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

/**update order details */
const updateOrderDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderDetailsEx = await orderDetailsService.getOrderDetailsById();
        if (!orderDetailsEx) {
            throw new Error("order Details not found!")
        }
        const orderDetails = await orderDetailsService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("order update successfully!"),
            data: orderDetails
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createOrderDetails,
    getOrderDetails,
    deleteOrderDetails,
    updateOrderDetails
}