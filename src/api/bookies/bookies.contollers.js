const bookiesModel = require("./bookies.model");

async function getBookies(req, res) {
  try {
    const bookies = await bookiesModel.find({});
    return res.status(200).json({ message: "Successfully", result: bookies });
  } catch (error) {
    console.log(error);
  }
}

async function addBookies(req, res) {
  try {
    const name = req.body.name;
    const handphone = req.body.handphone;

    const body = {
      name,
      handphone,
    };

    const bookies = await bookiesModel(body).save();
    return res
      .status(200)
      .json({ message: "Successfully add data", result: bookies });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

module.exports = { getBookies, addBookies };
