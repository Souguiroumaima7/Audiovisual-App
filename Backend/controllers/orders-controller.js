const order_model = require("../models/order-model")
module.exports = {
    create: (req, res) => {
        const order = new order_model(req.body)
        order.save(req.body, function(err, item) {
              if (err) {
                res.status(406).json({ message: "failed to create order " })
               } else {   
                res.status(201).json({ message: "order created  successfully ", data: item })
              }
        })
    },
    getAll: function(req, res) {
        order_model.find({}, function(err, items) {
            if (err) {
                res.status(406).json({ message: "fail get orders "}+err)
            } else {
                res.status(201).json({ message: "get order successfully ", data: items })
            }
        })

    },     
    getById: function(req, res) {
        order_model.findById(req.params.id, function(err,items) {
            if (err) {
                res.status(406).json({ message: "fail to create order " })
            } else {
                res.status(201).json({ message: "order created  successfully ", data:item })
            }
        })

    },
    getByName: function(req, res) {
        order_model.find({ Name: req.query.ref }, function(err,items) {
            if (err) {
                res.status(406).json({ message: "fail to get order  " })
            } else {
                res.status(201).json({ message: "get order by name successfully ", data: items})
            }
        })
    },
    update: function(req, res) {
        order_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
            function(err, item) {
                if (err) {
                    res.status(406).json({ message: "failed to update order" })


                } else {

                    res.status(201).json({ message: " success of update", data: item })
                }
            })


    },
    delete: function(req, res) {
        order_model.findByIdAndRemove(req.params.id, function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to delete order" })


            } else {

                res.status(201).json({ message: "success of delete" })
            }
        })

    }
}  


