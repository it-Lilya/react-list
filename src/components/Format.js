

export default function Format(currency_code, price) {
    let formatted;
    if (currency_code === 'USD') {
      formatted = `$${price}`;
    } else if (currency_code === 'EUR') {
      formatted = `€${price}`;
    } else {
      formatted = `${price} ${currency_code}`;
    }
  
    return formatted;
  }