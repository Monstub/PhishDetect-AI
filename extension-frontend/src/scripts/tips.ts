export class Tip {
	constructor(public title: string, public body: string) {}
}

const list_of_tips = [
	new Tip(
		"Regularly Backup Your Data",
		"Regular backups protect your data against accidental loss, hardware failure, and malware attacks."
	),
	new Tip(
		"Enable Automatic Updates",
		"Setting your devices to update automatically ensures you always have the latest security patches and features."
	),
	new Tip(
		"Be Wary of Phishing Scams",
		"Always verify the sender's identity before clicking on links or downloading attachments from unknown emails."
	),
	new Tip(
		"Secure Your Wi-Fi Network",
		"Change the default login credentials and use WPA3 encryption to protect your home network."
	),
	new Tip(
		"Educate Yourself on Cybersecurity",
		"Stay informed about the latest cybersecurity threats and best practices to protect your digital life."
	),
	new Tip(
		"Monitor Your Accounts Regularly",
		"Regularly check your bank and credit card statements for any unauthorized transactions."
	),
	new Tip(
		"Use End-to-End Encryption",
		"Use apps and services that offer end-to-end encryption to keep your communications private."
	),
	new Tip(
		"Disable Unnecessary Services",
		"Turn off Bluetooth, Wi-Fi, and location services when they are not in use to reduce potential vulnerabilities."
	),
	new Tip(
		"Review App Permissions",
		"Regularly review the permissions granted to apps on your devices and revoke any that are unnecessary."
	),
	new Tip(
		"Beware of Public Wi-Fi",
		"Avoid accessing sensitive information over public Wi-Fi networks, or use a VPN if necessary."
	),
	new Tip(
		"Enable Device Encryption",
		"Encrypt your devices to protect your data in case your device is lost or stolen."
	),
];

export function get_random_tip() {
	return list_of_tips[Math.floor(Math.random() * list_of_tips.length)];
}
