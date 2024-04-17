import PaymentModel from "../Models/PaymentModel.js";
const QueryTransaction = async (req, res) => {
    const { id } = req.params;
    console.log({ id });
    const foundTransaction = await PaymentModel.findOne({ id });
    console.log({ foundTransaction });
    try {
        if (foundTransaction) {
            return res.status(200).json({
                status: true,
                message: foundTransaction,
            });
        }
        else {
            return res.status(400).json({
                status: false,
                message: "Transaction not found",
            });
        }
    }
    catch (err) {
        return res.status(5000).json({
            status: false,
            message: err.message,
        });
    }
};
export default QueryTransaction;
