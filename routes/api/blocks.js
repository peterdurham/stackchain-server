const express = require("express");
const router = express.Router();

const Block = require("../../models/Block");

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

// @route GET /api/blocks
// @desc Get blocks (public)
router.get("/", (req, res) => {
  Block.find()
    .then((info) => res.json(info))
    .catch((err) => res.status(404).json({ msg: "no blocks found" }));
});

// @route POST /api/blocks
// @desc Create new block (public)
router.post("/", (req, res) => {
  const newBlock = new Block({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });

  newBlock.save().then((info) => res.json(info));
});

// @route DELETE /api/blocks
// @desc Delete block (public)
router.delete("/", (req, res) => {
  Block.findOneAndRemove({ _id: req.body.id }).then(() => {
    res.json({ success: true });
  });
});

// @route UPDATE /api/blocks/update/:id
// @desc Update block (public)
router.post("/update/:id", (req, res) => {
  Block.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
      },
    },
    { new: true }
  )
    .then((info) => {
      res.json(info);
    })
    .catch((err) => res.status(400).json({ msg: "update failed" }));
});

module.exports = router;
