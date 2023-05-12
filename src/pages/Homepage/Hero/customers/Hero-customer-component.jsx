import "./Hero-customer-component.scss";

import customer1 from "../../../../assets/customers/customer-1.jpg";
import customer2 from "../../../../assets/customers/customer-2.jpg";
import customer3 from "../../../../assets/customers/customer-3.jpg";
import customer4 from "../../../../assets/customers/customer-4.jpg";
import customer5 from "../../../../assets/customers/customer-5.jpg";
import customer6 from "../../../../assets/customers/customer-6.jpg";

const Customer = () => {
  return (
    <div className="delivered--meals">
      <div className="delivered__imgs">
        <img src={customer1} alt="customer image" />
        <img src={customer2} alt="customer image" />
        <img src={customer3} alt="customer image" />
        <img src={customer4} alt="customer image" />
        <img src={customer5} alt="customer image" />
        <img src={customer6} alt="customer image" />
      </div>
      <p className="delivered__text">
        <span>500,000+ </span> meals delivered last year!
      </p>
    </div>
  );
};

export default Customer;
