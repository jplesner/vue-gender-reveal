'use strict';

const getGuesses = (value, amount) => {
  let guesses = [];
  for (let i = 0; i < amount; i++) {
    guesses.push({
      guess: value,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return guesses;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    const guesses = getGuesses('B', 3).concat(getGuesses('G', 1));
    console.log(guesses);
    return queryInterface.bulkInsert('gender_guesses', guesses);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gender_guesses', null, {});
  }
};
