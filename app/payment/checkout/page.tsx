"use client";

import Popup from "@/app/components/molecules/popup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdLock } from "react-icons/io";

type Props = {};

const CheckoutPage = (props: Props) => {
  const router = useRouter()
  const [paypalActive, setPaypalActive] = React.useState(false);
  const [cartActive, setCartActive] = React.useState(false);
  const [name, setName] = React.useState("");
  const [cartNumber, setCartNumber] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [popupActive, setPopupActive] = React.useState(false)
  const countries: { name: string; code: string }[] = [
    { name: "Afghanistan", code: "AF" },
    { name: "Åland Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua & Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Caribbean Netherlands", code: "BQ" },
    { name: "Bosnia & Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo - Brazzaville", code: "CG" },
    { name: "Congo - Kinshasa", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Côte d’Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Curaçao", code: "CW" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands (Islas Malvinas)", code: "FK" },
    { name: "Faroe Islands", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard & McDonald Islands", code: "HM" },
    { name: "Vatican City", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "North Korea", code: "KP" },
    { name: "South Korea", code: "KR" },
    { name: "Kosovo", code: "XK" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "North Macedonia", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar (Burma)", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Curaçao", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn Islands", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Réunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "St. Barthélemy", code: "BL" },
    { name: "St. Helena", code: "SH" },
    { name: "St. Kitts & Nevis", code: "KN" },
    { name: "St. Lucia", code: "LC" },
    { name: "St. Martin", code: "MF" },
    { name: "St. Pierre & Miquelon", code: "PM" },
    { name: "St. Vincent & Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "São Tomé & Príncipe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Serbia", code: "CS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Sint Maarten", code: "SX" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia & South Sandwich Islands", code: "GS" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard & Jan Mayen", code: "SJ" },
    { name: "Eswatini", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad & Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks & Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "U.S. Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "British Virgin Islands", code: "VG" },
    { name: "U.S. Virgin Islands", code: "VI" },
    { name: "Wallis & Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];

  const handleCart = () => {
    setCartActive((prev) => !prev);
    setPaypalActive(false);
  };

  const handlePaypal = () => {
    setPaypalActive((prev) => !prev);
    setCartActive(false);
  };

  function handleClick(): void {
    console.log("this is the function");
  }

  const handleCheckout = () => {
    setPopupActive((prev) => !prev)
    router.push("/home/my-learning")
  }

  return (
    <div>
      <div className="flex justify-between md:px-5 px-3 shadow md:py-2">
        <Image
          src="/logo-udemy (1).svg"
          alt="udemy logo"
          className="py-2 md:pl-8 md:hidden"
          width={75}
          height={28}
        />
        <Image
          src="/logo-udemy (1).svg"
          alt="udemy logo"
          className="py-2 hidden md:flex"
          width={100}
          height={100}
        />
        <p
          className="my-auto hover:cursor-pointer font-semibold text-violet"
          onClick={() => handleClick()}
        >
          Cancel
        </p>
      </div>
      <div className="md:flex md:px-4 px-5">
        <div className="md:w-[55%] md:flex">
          <p className="flex-1"></p>
          <div className="md:pr-10 md:w-[40rem]">
            <div>
              <h1 className="py-4 md:py-6 font-semibold text-2xl md:text-4xl leading-normal">
                Checkout
              </h1>
              <h2 className="py-4 md:py-6 font-semibold text-xl md:text-2xl leading-normal">
                Billing address
              </h2>
            </div>
            <div className="w-full md:w-1/2 py-3">
              <div className="flex justify-between py-2">
                <label className="font-bold">Country</label>
                <span className="text-sm text-gray">Required</span>
              </div>
              <select className="border p-4 w-full flex">
                {countries.map((item, index) => (
                  <option key={index}>{item.name}</option>
                ))}
              </select>
            </div>
            <span className="text-xs text-black pt-4">
              Udemy is required by law to collect applicable transaction taxes
              for purchases made in certain tax jurisdictions.
            </span>
            <section className="py-5">
              <div className="flex justify-between py-3">
                <h2 className="font-semibold text-xl md:text-2xl leading-normal">
                  Payment method
                </h2>
                <div className="flex justify-between gap-2 pt-4">
                  <span className="text-sm text-gray">Secured connection</span>
                  <IoMdLock />
                </div>
              </div>
              <div className="bg-gray border">
                <div
                  className="hover:cursor-pointer  p-3 flex gap-3 "
                  onClick={() => handlePaypal()}
                >
                  <input
                    type="radio"
                    className="hover:cursor-pointer w-4"
                    onChange={() => handleCart}
                  />
                  <div className="bg-white rounded">
                    <Image
                      width={40}
                      height={20}
                      src="https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg"
                      alt="paypal logo"
                    />
                  </div>
                  <p className=" font-semibold">PayPal</p>
                </div>
                <hr />
                <p className={paypalActive ? "flex p-6 bg-white" : "hidden"}>
                  In order to complete your transaction, we will transfer you
                  over to PayPal's secure servers.
                </p>
                <div
                  className="hover:cursor-pointer p-3"
                  onClick={() => handleCart()}
                >
                  <div className="flex justify-between w-full">
                    <div className="flex gap-3 flex-1 w-[60%] ">
                      <input
                        type="radio"
                        className="hover:cursor-pointer w-4"
                        onChange={() => setCartActive((prev) => !prev)}
                      />
                      <div className="bg-white h-fit my-auto rounded">
                        <Image
                          width={40}
                          height={20}
                          src="https://www.udemy.com/staticx/udemy/images/v9/card-default.svg"
                          alt="cart deault logo"
                        />
                      </div>
                      <p className="my-auto font-semibold flex-1">Credit/Debit Cart</p>
                    </div>
                    <div className="flex gap-2 flex-wrap w-[40%]  pl-8">
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
                          alt="card-amex"
                        />
                      </div>
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="	https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg"
                          alt="card-amex"
                        />
                      </div>
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
                          alt="card-mastercard"
                        />
                      </div>
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="	https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
                          alt="card-visa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={cartActive ? "w-full px-5 py-5" : "hidden"}>
                  <div className="flex justify-between py-2">
                    <label className="font-bold">Name on cart</label>
                    <span className="text-sm text-gray">Required</span>
                  </div>
                  <input
                    className="border px-4 py-3 w-full"
                    placeholder="name on cart"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div className="flex justify-between py-2">
                    <label className="font-bold">Cart number</label>
                    <span className="text-sm text-gray">Required</span>
                  </div>
                  <input
                    className="border px-4 py-3 w-full"
                    placeholder="1234 5678 9012 3456"
                    type="text"
                    onChange={(e) => setCartNumber(e.target.value)}
                  />
                  <div className="flex gap-2 pb-5">
                    <div className="w-1/2">
                      <div className="flex justify-between py-2">
                        <label className="font-bold">Expire date</label>
                        <span className="text-sm text-gray">Required</span>
                      </div>
                      <input
                        className="border px-4 py-3 w-full"
                        placeholder="MM/YY"
                        type="text"
                        onChange={(e) => setExpireDate(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <div className="flex justify-between py-2">
                        <label className="font-bold">CVC/CVV</label>
                        <span className="text-sm text-gray">Required</span>
                      </div>
                      <input
                        className="border px-4 py-3 w-full"
                        type="text"
                        placeholder="CVC"
                        onChange={(e) => setCvc(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" className="w-4 border" />
                    <span>Securely save this cart for my later purchase</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold py-4 text-xl md:text-2xl leading-normal">
                  Order details
                </h2>
                <p className="text-violet">Potential puchased course will be displayed here</p>
              </div>
            </section>
          </div>
        </div>
        <div className="md:bg-gray md:opacity-90 md:min-h-[100vh] text-black md:w-[45%] md:px-10 md:pt-20">
          <div className="w-[320px]">
            <h2 className="font-semibold py-4 text-xl md:text-2xl leading-normal">
              Summary
            </h2>
            <div className="flex justify-between py-3">
              <p>Original Price: </p>
              <span>$153.46</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold py-3">
              <p>Total: </p>
              <span>$153.46</span>
            </div>
            <p className="text-xs text-black pt-4 pb-4">
              By completing your purchase you agree to these <span className="text-violet opacity-70 hover:opacity-70">Terms of Service.</span>
            </p>
            <button
              onClick={() => setPopupActive((prev) => !prev)}
              className="py-4 bg-violet text-white w-full">
              Complete Checkout
            </button>
            {popupActive && (
              <Popup handleClose={() => setPopupActive((prev) => !prev)}>
                <div>
                  <h1 className="py-4 md:py-6 font-semibold text-2xl md:text-4xl leading-normal">
                    🎉 Thank you for purchasing the course 🎉
                  </h1>
                  <button
                  onClick={() => handleCheckout()}
                    className="p-4 bg-violet text-white w-fit flex justify-center"
                  >
                    Go to my learning
                  </button>
                </div>
              </Popup>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
