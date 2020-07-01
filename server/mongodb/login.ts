const userDatas = new mongoose.Schema({
  userName: { unique: true, type: String },
  email: { unique: true, type: String },
  name: String,
  phoneNumber: { unique: true, type: String },
});

module.exports = userDatas;
