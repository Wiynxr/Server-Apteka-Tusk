const User = require("../Models/User.model")
const Basket = require("../Models/basket.model")

module.exports.userController = {
  postUser: async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            money: req.body.money,
            recipe: req.body.recipe,
          });
          res.json(newUser)
    } catch (error) {
        console.log(error);
    }
  },
  deleteUser: async (req, res) => {
   try {
    const delUser = await User.findByIdAndDelete(req.params.id);
    res.json(delUser);
   } catch (error) {
       console.log(error)
   }
  },
  getUser: async (req, res) => {
      try {
        const getUser = await User.find();
        res.json(getUser)
      } catch (error) {
          console.log(error)
      }
  },
  updateUser: async (req, res) => {
      try {
        const UpdUser = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            recipe: req.body.recipe
        })
        res.json(UpdUser)
      } catch (error) {
          console.log(error)
      }
   },
   getUserById: async(req, res) => {
       try {
        const userId = await User.findById(req.params.id);
        res.json(userId)
       } catch (error) {
           console.log(error)
       }
   },
   buyDrugs: async (req,res) => {
       const basket = await Basket.findById(req.params.id)
       const user = await User.findById(req.body.user) 

       if(user.money > basket.num) {
           await User.findByIdAndUpdate(basket.user, {
               money: user.money - basket.num
           })
           await Basket.findByIdAndUpdate(req.params.id, {
               drugs: [],
               num: 0
           });
           res.json("Товар куплен")
       } else {
           res.json("Не хватает денег")
       }
   },
   topUpCash: async (req, res) => {
       const sum = user.money + req.body.money
       money: sum
       res.json(`Пополнение кошелька на ${sum} рублей`)
   }
};
