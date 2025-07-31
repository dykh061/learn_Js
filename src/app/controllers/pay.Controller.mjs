class PayController {
  // [GET] / Pay
  index(req, res) {
    res.render("pay");
  }
}
const payController = new PayController();
export default payController;
