const mongoose = require('mongoose');
const { Schema } = mongoose;


(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gameShop');

    const gameSchema = new Schema({
      name: String,
    });
    const Game = mongoose.model('Game', gameSchema);
    Game.find().exec((error, games) => console.log(games));
  } catch (e) {
    console.error(e)
  }
})();
