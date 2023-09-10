const { io } = require('socket.io'); // Import the io instance from your socket.js module

function formSubmit(user_id) {
  io.emit('form-submit', user_id);
}

function iroEvaluation(user_id) {
    io.emit('iro-assesment', user_id);
  }

module.exports = { formSubmit, iroEvaluation };