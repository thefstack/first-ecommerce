const FormatPrice = ({price}) => {
    return Intl.NumberFormat("en-IN",{
      style:"currency",
      currency:"usd",
      maximumFractionDigits:2
    }).format(price);
  }
  
  export default FormatPrice
  