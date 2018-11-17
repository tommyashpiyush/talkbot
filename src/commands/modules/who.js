// models 
var BotCommand = require('@models/BotCommand');  


function who(msg, server, world) {
  var master_nick = server.getBoundToNick();
  if (!master_nick) {
    msg.response(server.lang('who.none'));
  } else {
    msg.response(server.lang('who.okay', { name: master_nick }));
  }
};

var command = new BotCommand({
  command_name: 'who',
  execute: who,
  short_help: 'who.shorthelp',
  long_help: 'who.longhelp', 
});


exports.register = function (commands) {
  commands.add(command);
};

exports.unRegister = function (commands) {
  commands.remove(command);
};


