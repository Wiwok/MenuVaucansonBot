const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

const forward = '⏩';
const backward = '⏪';


function help(message) {
	// The help is requested by the user
	const embed = new MessageEmbed()
		.setTitle('Aide')
		.setDescription('Bienvenue dans l\'aide\nNaviguez en utilisant les boutons.');

	const button = new MessageButton()
		.setCustomId('help1')
		.setEmoji(forward)
		.setStyle('PRIMARY');

	const buttons = new MessageActionRow()
		.addComponents(button);


	message.author.send({ embeds: [embed], components: [buttons] });
}


function helpButton(interaction, defaultPrefix) {

	// We get the help of the requested command
	const number = interaction.customId.replace('help', '');

	const oldEmbed = interaction.message.embeds[0];
	let embed = new MessageEmbed();

	if (number == 0) {
		// We construct the embed and giving help to the user
		embed = embed
			.setTitle(oldEmbed.title)
			.setDescription(oldEmbed.description)
			.addField('Préfix', 'Commande pour changer le préfix, {ancien préfix}prefix {nouveau préfix}\nPar défaut le préfix est \'' + defaultPrefix + '\', mais il a pu être changé par l\'administrateur de votre serveur');

		// We set the new buttons: back and next
		const button = new MessageButton()
			.setCustomId('help1')
			.setEmoji(forward)
			.setStyle('PRIMARY');
		const buttons = new MessageActionRow()
			.addComponents(button);

		interaction.message.edit({ embeds: [embed], components: [buttons] });
	}

	if (number == 1) {
		const button = new MessageButton()
			.setCustomId('help0')
			.setStyle('PRIMARY')
			.setEmoji(backward);

		const button1 = new MessageButton()
			.setCustomId('help2')
			.setStyle('PRIMARY')
			.setEmoji(forward);

		const buttons = new MessageActionRow()
			.addComponents(button)
			.addComponents(button1);
		embed = embed
			.setTitle(oldEmbed.title)
			.setDescription(oldEmbed.description)
			.addField('menu', 'Commande pour afficher le menu, {préfix}menu {paramètre}\nLe paramètre peut être un jour (lundi, mardi, mercredi...), ou bien une date (22, 23)', true);
		interaction.message.edit({ embeds: [embed], components: [buttons] });
		return;
	}

	if (number == 2) {

		embed = embed
			.setTitle(oldEmbed.title)
			.setDescription(oldEmbed.description)
			.addField('menusoir', 'Commande pour afficher le menu du soir, {préfix}menusoir {paramètre}\nLe paramètre peut être un jour (lundi, mardi, mercredi...), ou bien une date (22, 23)');

		const button = new MessageButton()
			.setCustomId('help1')
			.setStyle('PRIMARY')
			.setEmoji(backward);

		const button1 = new MessageButton()
			.setCustomId('help3')
			.setStyle('PRIMARY')
			.setEmoji(forward);

		const buttons = new MessageActionRow()
			.addComponents(button)
			.addComponents(button1);

		interaction.message.edit({ embeds: [embed], components: [buttons] });
	}

	if (number == 3) {

		embed = embed
			.setTitle(oldEmbed.title)
			.setDescription(oldEmbed.description)
			.addField('help', 'Commande d\'aide, {préfix}help\nPermet d\'afficher l\'aide que vous êtes en train de visionner.');

		const button = new MessageButton()
			.setCustomId('help2')
			.setStyle('PRIMARY')
			.setEmoji(backward);

		const buttons = new MessageActionRow()
			.addComponents(button);

		interaction.message.edit({ embeds: [embed], components: [buttons] });

	}

}

module.exports = { help, helpButton };