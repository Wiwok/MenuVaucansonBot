# MenuVaucansonBot
The repo of the Vaucanson's Discord bot menu

## Informations
The bot works with **Discord.Js**

It was made by a Vaucanson's student

The default prefix for using it is **§**

You can invite the bot to your server by clicking [here](https://discord.com/api/oauth2/authorize?client_id=953947865875644416&permissions=8&scope=bot%20applications.commands).

## How to get your instance of this bot?
1. Clone this repo with `git clone https://github.com/Wiwok/MenuVaucansonBot/`
2. Run `npm i` to install all node dependencies.
3. Create a .env file
4. Inside of it, add:
```
PUBLIC_TOKEN={Your Bot token}
LOGGING_CHANNEL={Your logging channel ID}
```
5. Run `node .` to run the bot.
6. **Congratulation, your bot is now running !**

Optionally, add this inside your .env:
```
DEV_TOKEN={Your WIP bot token}
```
With this, you can quickly switch between two bots by changing the value of the isPublic variable.

## Documentation
Here are all of the commands
### Menu
#### Description
This command will give you the launch menu
#### Usage
```
§menu {option}
```
The option is optional, it can be:
- A day: `§menu lundi`
- A date: `§menu 23`
The day can be 'lundi, mardi, mercredi, jeudi, vendredi'

### MenuSoir
#### Description
This command will give you the evening menu

#### Usage
```
§menusoir {option}
```
The option is also optional and it can be, you guessed it:
- A day: `§menusoir lundi`
- A date: `§menusoir 14`
The day can be 'lundi, mardi, mercredi, jeudi'

### Prefix
#### Description
This command can only be run by a server administrator, and it will change the prefix
#### Usage
```
§prefix [prefix]
```
The prefix is required.

### Help
#### Description
This command will send a help message to the user who requested it.
#### Usage
```
§help
```
Nothing to say here...
