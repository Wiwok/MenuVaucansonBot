const { parseFile } = require('fast-csv');
const { MessageEmbed } = require('discord.js');

const Menu = new Array();
const days = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];


function catchTheMenu(embed, day) {
	// Here we construct the embed
	embed = embed
		.setTitle('Menu')
		.setDescription('Menu du ' + days[day] + ' ' + Menu[0][day - 1])
		.setFooter({ text: 'La réelle composition des menus, ne dépendant pas de moi, peut se révéler incorrecte...' });
	if (Menu[day + 1][0] != '') { embed = embed.addField(Menu[1][0], Menu[day + 1][0]); }
	if (Menu[day + 1][1] != '') { embed = embed.addField(Menu[1][1], Menu[day + 1][1]); }
	if (Menu[day + 1][2] != '') { embed = embed.addField(Menu[1][2], Menu[day + 1][2]); }
	if (Menu[day + 1][3] != '') { embed = embed.addField(Menu[1][3], Menu[day + 1][3]); }
	if (Menu[day + 1][4] != '') { embed = embed.addField(Menu[1][4], Menu[day + 1][4]); }

	return embed;
}


function menu(message, prefix) {
	const today = new Date();
	// Get the option
	let option = message.content.replace('menu', '').replace(prefix, '').toLowerCase();
	while (option.includes(' ')) {
		option = option.replace(' ', '');
	}
	// Get the menu of the week from the .csv file
	parseFile('menu.csv', { delimiter: ';' })
		.on('data', row => {
			Menu[Menu.length] = row;
		})
		.on('end', () => {
			let embed = new MessageEmbed();
			if (option == '') {
				// If the option is empty, we send the menu of the current day and if its the weekend, the menu of the monday of the next week
				let day = today.getDay();
				if (day == 6) {
					day = 1;
				} else if (day == 0) {
					day = 1;
				}
				embed = catchTheMenu(embed, day);
			} else if (days.includes(option)) {
				// If the option is a day of the week, we send the menu of the day
				const day = days.indexOf(option);
				embed = catchTheMenu(embed, day);
			} else {
				option = parseInt(option);
				if (!isNaN(option)) {
					// If the option is a number, we send the menu of the day
					// First we check if the number is in the range of the week
					// And if it is, we send the menu of the day
					let occurencies = -1;
					for (let i = 0; i < Menu.length; i++) {
						if (Menu[0][i] == option) {
							occurencies = i;
						}
					}
					if (occurencies != -1) {
						const day = occurencies + 1;
						embed = catchTheMenu(embed, day);
					} else {
						// Here the number is not in the range of the week
						message.channel.send('Je suis désolé, mais le menu n\'est pas disponible pour le ' + option);
						return;
					}

				} else {
					// Here the option is not a number and not a day of the week
					message.channel.send('La syntaxe est ' + prefix + 'menu {paramètre}, tapez ' + prefix + 'help pour obtenir de l\'aide.');
					return;
				}
			}

			message.channel.send({ embeds: [embed] });
		});
}

module.exports = { menu };