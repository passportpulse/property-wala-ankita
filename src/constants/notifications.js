export const WHATSAPP_TEMPLATES = {
  NEW_LEAD: {
    title: "New Lead Alert",
    content: (sellerName, propertyTitle, buyerName, buyerPhone, link) => 
      `Namaste ${sellerName}! 🙏\n\nSomeone is interested in your property: ${propertyTitle}.\n\n👤 Buyer: ${buyerName} 📞 Contact: ${buyerPhone}\n\nClick here to call them now: ${link}\n\nProperty Wala Bhaiya - Making deals faster!`
  },
  PRICE_DROP: {
    title: "Price Drop Alert",
    content: (location, oldPrice, newPrice, link) => 
      `Great news from Property Wala Bhaiya! 🏠\n\nThe property you liked in ${location} just got a price cut!\n\n📉 Old Price: ₹${oldPrice} ✅ New Price: ₹${newPrice}\n\nDon't miss out, call the owner now: ${link}`
  },
  SOLD_RENTED: {
    title: "Property Sold/Rented",
    content: (propertyName, location, link) => 
      `Update on ${propertyName}:\n\nThis property has been Sold/Rented out. 🤝\n\nDon't worry! We have 5 similar properties in ${location} waiting for you.\n\nCheck them out here: ${link}`
  }
};
