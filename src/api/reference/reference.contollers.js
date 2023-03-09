const referenceModel = require("./reference.model");

async function getReference(req, res) {
  try {
    const reference = await referenceModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ message: "Successfully", result: reference });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

async function addReference(req, res) {
  try {
    const image = req.file;
    const gameName = req.body.gameName;
    const descrption = req.body.descrption;

    const data = {
      image: process.env.URL + "image/" + image.filename,
      gameName,
      descrption,
    };

    const reference = await referenceModel(data).save();
    return res.status(200).json({ message: "Successfully", result: reference });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi Kesalahan" });
  }
}

module.exports = { getReference, addReference };
