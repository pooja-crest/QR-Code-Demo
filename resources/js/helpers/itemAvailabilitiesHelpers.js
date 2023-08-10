import datetimeHelpers from "./datetimeHelpers";

export default {
	mixins: [datetimeHelpers],
	methods: {
		formatItemAvailabilities(availabilities, current_quantity, role) {
            if (["500+", "500+ ASSMBLD"].includes(current_quantity)) return [];
			if (current_quantity >= 500) return [];
			let formatted_item_availabilites = [];
			for (let index = 0; index < availabilities.length; index++) {
				const item_availability = availabilities[index];
				if (item_availability.backordered < 5) continue;
				if (!item_availability.confirmed && ["representative", "user"].includes(role)) continue;
				let threshold = 7;
				let date_threshold = new Date();
				date_threshold = date_threshold.setDate(date_threshold.getDate() - threshold);
				const date = item_availability.confirmed ? item_availability.confirmed : item_availability.unconfirmed;
                //const date_time = new Date(date).getTime();
				//if (date_threshold > date_time) continue;
				formatted_item_availabilites.push({
					quantity: item_availability.quantity_shipped != "0" ? item_availability.quantity_shipped : item_availability.backordered,
					date: this.formatDate(date),
					confirmation: item_availability.confirmed ? "Confirmed" : "Unconfirmed",
				});
				if (formatted_item_availabilites.length >= 2) break;
			}

            return formatted_item_availabilites;
		},
		generateETAText(item_availability) {
            let quantity_text = "";
			switch (true) {
				case item_availability.quantity < 5:
					quantity_text = item_availability.quantity;
					break;
				case item_availability.quantity < 20:
					quantity_text = "5+";
					break;
				case item_availability.quantity < 50:
					quantity_text = "20+";
					break;
				case item_availability.quantity < 100:
					quantity_text = "50+";
					break;
				case item_availability.quantity < 250:
					quantity_text = "100+";
					break;
				case item_availability.quantity < 500:
					quantity_text = "250+";
					break;
				default:
					quantity_text = "500+";
					break;
			}
			// return quantity_text + " " + item_availability.confirmation + " " + item_availability.date;
			const date = this.$moment(item_availability.date).format("MMM DD");
			return `<span class='${item_availability.confirmation == "Unconfirmed" ? "text-danger" : ""}'>${quantity_text} ${date}</span>`;
		},
	},
};
