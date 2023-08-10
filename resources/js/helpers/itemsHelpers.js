export default {
  methods: {
    formatQuantity(qty) {
      qty = qty.toUpperCase();
      if (qty.includes("CONSULT ASSMBLD")) return "CONSULT ASSMBLD";
      else if (qty.includes("CONSULT")) return "CONSULT";
      const qty_number = parseInt(qty.replace(/\D/g, ""));
      let text = "";
      if (qty_number >= 500) text = "500+";
      else if (qty_number >= 250) text = "250+";
      else if (qty_number >= 100) text = "100+";
      else if (qty_number >= 50) text = "50+";
      else if (qty_number >= 20) text = "20+";
      else text = "CONSULT";
      if (qty.includes("ASSMBLD")) text += " ASSMBLD";
      return text;
    },
  },
};
