const Basket = require("../Models/basket.model");
const User = require("../Models/User.model");
const Drugs = require("../Models/Drugs.model");

module.exports.basketController = {
  postBasket: async (req, res) => {
    await Basket.create({ user: req.body.user });
    res.json("Корзина создана");
  },
  deleteDrug: async (req, res) => {
    await Basket.findByIdAndUpdate(req.params.id, {
      $pull: {
        drugs: req.body.drugs,
      },
    });
    res.json("Лекарство удалено");
  },
  clearBasket: async (req, res) => {
    await Basket.findByIdAndUpdate(req.params.id, {
      drugs: [],
      total: 0,
    });
    res.json("Корзина очищена");
  },
  addDrug: async (req, res) => {
   
    try {

 const drugs = await Drugs.findById(req.body.drugs);
    const user = await User.findByIdAndUpdate(req.params.id);
    const basket = await Basket.findByIdAndUpdate(req.params.id);


      if (drugs.recipe && !user.recipe) {
        return res.json("Нету рецепта");
      }
      await Basket.findByIdAndUpdate(req.params.id, {
        $push: { drugs: req.body.drugs },
        num: basket.num + drugs.price,
      });
      res.json("Лекарство добавлено");
    } catch (e) {
      res.json(e);
    }
  },
};
