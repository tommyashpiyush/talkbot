[logo]: https://raw.githubusercontent.com/nullabork/artwork/master/talkbot/face/png/face_200.png "Talkbot"
![alt text](https://raw.githubusercontent.com/nullabork/artwork/master/talkbot/face/png/face_200.png "Talkbot")
# Talkbot
Discord bot for natural voice text-to-speech and language translation


Try it out here: [https://discord.gg/NxrPp8g](https://discord.gg/NxrPp8g)


# Quick start 

1. [Click here to add the bot to your discord](https://discordapp.com/oauth2/authorize?&client_id=428866923267358721&scope=bot&permissions=0): https://discordapp.com/oauth2/authorize?&client_id=428866923267358721&scope=bot&permissions=0
2. Join a voice channel
3. Type `!follow`
4. Type the message `Hello World` to hear it read out to you

# Documentation

Check out the documentation on gitbook: https://nullabork.gitbook.io/talkbot/

# Commands in discord
The bot requires a master to control it. Once you're its master it'll convert your text into voice in the current voice channel. The bot will also follow you between voice channels. Other users will only be able to use the bot if you permit them to use it. If you don't use the bot for 30 minutes it'll unfollow you.
```yaml
= Control =
 !follow            :: The bot will join your voice channel and speak what you write
 !unfollow          :: Release the bot
 !sidle             :: Take control of the bot from someone else
 !transfer          :: Transfer control of the bot to another person
 !permit [<user>]   :: Permit someone else to use the bot whilst it's following you
 !unpermit [<user>] :: Unpermit someone else from using the bot
 !tts               :: Speak when you're muted 

= Personalization =
 !defaults              :: Reset your default voice settings
 !mygender <gender>     :: Set the gender the bot will speak with
 !mylang <lang>         :: Set the language the bot will speak in. eg. en-AU, gb, en-US, fr, jp etc.
 !mypitch <pitch>       :: Alter the pitch of the bot's voice. Valid values are -20 to 20
 !myspeed <speed>       :: Alter the speed the bot talks. 1.0 is the default. Valid values are 0.25 to 4.0
 !myvoice <voice|alias> :: Change accent or style.
 !tolang <lang>         :: Translate your text to a different language eg. en, fr, jp, de etc.
 !mute                  :: Mute yourself so your text is not read out
 !unmute                :: Unmute yourself so all your text is read out

= More =
 !help info   :: info help commands
 !help server :: server help commands
```
# Setup your own bot
Use this to setup your own bot on your own server. 
Note you will require a Google Cloud account to use their TTS API and an Amazon Polly account to use Amazon TTS voices.
Both of these services have free tiers but may cost you money if you exceed their free caps. 
Each of these services can be turned on and off in the configuration of the bot.

## Software requirements
- node js 
- npm - https://www.npmjs.com/get-npm
- git 

Several of the in use NPM packages may require the following:
- ffmpeg - https://www.ffmpeg.org/download.html
- cmake - https://cmake.org/download/
- python - https://www.python.org/downloads/ - v2.7.* is usually required
- Visual Studio C++ build tools or Visual Studio with full C++ support

## Install, setup and run
1. Clone this respository 
    * `git clone https://github.com/nullabork/talkbot talkbot`  
2. Copy `config/auth.example` to `config/auth.json` and put in your discord app key. 
    * To learn how to setup a discord app and get this token [go here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
3. Setup your Google API credentials. 
    * To learn how to do this [go here](https://cloud.google.com/text-to-speech/docs/quickstart-client-libraries)
4. Install cmake, ffmpeg, python v2.7 and Visual Studio C++ build tools 
    * See the URLs in the software requirements for how to do this
5. Install NPM dependencies
    * `npm install` 
6. Run the bot! 
    * `node bot.js`

# Troubleshooting 

[Talk to us on discord](https://discord.gg/NxrPp8g)

## Google TTS API Issues

Confirm you've put the path to your API credentials file in the env var GOOGLE_APPLICATION_CREDENTIALS. [See Google cloud docs here](https://cloud.google.com/text-to-speech/docs/quickstart-client-libraries) 

## npm install issues

Some of the packages are difficult to install particularly on Windows.
Usually you'll need to check your PATH environment variable and confirm Visual Studio C++ build tools are available.
Check you have Python installed and that it is version 2.7.*. It may have to be before version 3 in your path variable for it to be picked up.

# Acknowledgements
* WootoSmash - coder/bugmaker/shitposter
* FaxWang - coder/bugfinder/shitposter
* GreenLionVoltronPilot - bugfinder/shitposter
* Kingk22 - bugfinder/shitposter/questionanswerer
* Kelinmiriel - bugfinder/shitposter
* All the npm package builders! 

[Want to shitpost also?](https://discord.gg/NxrPp8g)
