import "./equires.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { InputLabel, TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Aremenia",
  "Azerbaijan",
  "Bali",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Gerogia",
  "Hong Kong",
  "India",
  "Indonesia",
  "Japan",
  "Kazakhstan",
  "Kyrgyzstan",
  "Coas",
  "Macao",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "Oman",
  "Papua New Guinea",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Siberia & Russian Far East",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Tibet",
  "Turkmenistan",
  "UAE",
  "Uzbekistan",
  "Vietnam",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Enquire = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [isAgencyCheck, setIsAgencyCheck] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleTravelChecked = (e) => {
    setIsAgencyCheck(e.target.checked);
  };

  return (
    <div className="enquire_container">
      <p>
        Please fill out the information below or speak to your travel advisor.
        Required fields are marked with an asterisk (*).
      </p>
      <form action="" className="enquire_form">
        <div className="enquire_form_left">
          <div>
            <label>First Name *</label>
            <input type="text" required />
          </div>
          <div>
            <label>Last Name *</label>
            <input type="text" required />
          </div>

          <div className="enquire_agency_checkbox">
            {" "}
            <label>
              <input type="checkbox" onChange={handleTravelChecked} /> I am a
              travel advisor
            </label>
            <br />
          </div>
          <span
            className={isAgencyCheck && "enquire_agency_container"}
            style={{ display: isAgencyCheck ? "flex" : "none" }}>
            <input type="text" required placeholder="Agency Name*" />
            <FormControl
              sx={{
                m: 1,
                minWidth: { xl: 80, lg: 80, md: 80, sm: "30%", xs: "30%" },
              }}
              size="small">
              <InputLabel
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                Type
              </InputLabel>
              <Select
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Months">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem>Virtuoso</MenuItem>
                <MenuItem>Signature</MenuItem>
                <MenuItem>Ensemble</MenuItem>
                <MenuItem>Srandipians</MenuItem>
                <MenuItem>American Express</MenuItem>
                <MenuItem>Travel Leaders</MenuItem>
                <MenuItem>InternovaMenuItem</MenuItem>
                <MenuItem>Smartflyer</MenuItem>
              </Select>
            </FormControl>
          </span>

          <div>
            <label>Email *</label>
            <input type="text" />
          </div>
          <div>
            <label>Home Country *</label>

            <FormControl sx={{ m: 1, minWidth: 260, mr: "-1px" }} size="small">
              <InputLabel
                id="demo-simple-select-autowidth-label"
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                Your Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Your Country"
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}>
                <MenuItem value="">
                  <em>Your Country</em>
                </MenuItem>
                <MenuItem value="AF">Afghanistan</MenuItem>
                <MenuItem value="AX">Aland Islands</MenuItem>
                <MenuItem value="AL">Albania</MenuItem>
                <MenuItem value="DZ">Algeria</MenuItem>
                <MenuItem value="AS">American Samoa</MenuItem>
                <MenuItem value="AD">Andorra</MenuItem>
                <MenuItem value="AO">Angola</MenuItem>
                <MenuItem value="AI">Anguilla</MenuItem>
                <MenuItem value="AQ">Antarctica</MenuItem>
                <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                <MenuItem value="AR">Argentina</MenuItem>
                <MenuItem value="AM">Armenia</MenuItem>
                <MenuItem value="AW">Aruba</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
                <MenuItem value="AT">Austria</MenuItem>
                <MenuItem value="AZ">Azerbaijan</MenuItem>
                <MenuItem value="BS">Bahamas</MenuItem>
                <MenuItem value="BH">Bahrain</MenuItem>
                <MenuItem value="BD">Bangladesh</MenuItem>
                <MenuItem value="BB">Barbados</MenuItem>
                <MenuItem value="BY">Belarus</MenuItem>
                <MenuItem value="BE">Belgium</MenuItem>
                <MenuItem value="BZ">Belize</MenuItem>
                <MenuItem value="BJ">Benin</MenuItem>
                <MenuItem value="BM">Bermuda</MenuItem>
                <MenuItem value="BT">Bhutan</MenuItem>
                <MenuItem value="BO">Bolivia</MenuItem>
                <MenuItem value="BQ">Bonaire, Sint Eustatius and Saba</MenuItem>
                <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                <MenuItem value="BW">Botswana</MenuItem>
                <MenuItem value="BV">Bouvet Island</MenuItem>
                <MenuItem value="BR">Brazil</MenuItem>
                <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                <MenuItem value="BN">Brunei Darussalam</MenuItem>
                <MenuItem value="BG">Bulgaria</MenuItem>
                <MenuItem value="BF">Burkina Faso</MenuItem>
                <MenuItem value="BI">Burundi</MenuItem>
                <MenuItem value="KH">Cambodia</MenuItem>
                <MenuItem value="CM">Cameroon</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
                <MenuItem value="CV">Cape Verde</MenuItem>
                <MenuItem value="KY">Cayman Islands</MenuItem>
                <MenuItem value="CF">Central African Republic</MenuItem>
                <MenuItem value="TD">Chad</MenuItem>
                <MenuItem value="CL">Chile</MenuItem>
                <MenuItem value="CN">China</MenuItem>
                <MenuItem value="CX">Christmas Island</MenuItem>
                <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                <MenuItem value="CO">Colombia</MenuItem>
                <MenuItem value="KM">Comoros</MenuItem>
                <MenuItem value="CG">Congo</MenuItem>
                <MenuItem value="CD">
                  Congo, Democratic Republic of the Congo
                </MenuItem>
                <MenuItem value="CK">Cook Islands</MenuItem>
                <MenuItem value="CR">Costa Rica</MenuItem>
                <MenuItem value="CI">Cote D'Ivoire</MenuItem>
                <MenuItem value="HR">Croatia</MenuItem>
                <MenuItem value="CU">Cuba</MenuItem>
                <MenuItem value="CW">Curacao</MenuItem>
                <MenuItem value="CY">Cyprus</MenuItem>
                <MenuItem value="CZ">Czech Republic</MenuItem>
                <MenuItem value="DK">Denmark</MenuItem>
                <MenuItem value="DJ">Djibouti</MenuItem>
                <MenuItem value="DM">Dominica</MenuItem>
                <MenuItem value="DO">Dominican Republic</MenuItem>
                <MenuItem value="EC">Ecuador</MenuItem>
                <MenuItem value="EG">Egypt</MenuItem>
                <MenuItem value="SV">El Salvador</MenuItem>
                <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                <MenuItem value="ER">Eritrea</MenuItem>
                <MenuItem value="EE">Estonia</MenuItem>
                <MenuItem value="ET">Ethiopia</MenuItem>
                <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                <MenuItem value="FO">Faroe Islands</MenuItem>
                <MenuItem value="FJ">Fiji</MenuItem>
                <MenuItem value="FI">Finland</MenuItem>
                <MenuItem value="FR">France</MenuItem>
                <MenuItem value="GF">French Guiana</MenuItem>
                <MenuItem value="PF">French Polynesia</MenuItem>
                <MenuItem value="TF">French Southern Territories</MenuItem>
                <MenuItem value="GA">Gabon</MenuItem>
                <MenuItem value="GM">Gambia</MenuItem>
                <MenuItem value="GE">Georgia</MenuItem>
                <MenuItem value="DE">Germany</MenuItem>
                <MenuItem value="GH">Ghana</MenuItem>
                <MenuItem value="GI">Gibraltar</MenuItem>
                <MenuItem value="GR">Greece</MenuItem>
                <MenuItem value="GL">Greenland</MenuItem>
                <MenuItem value="GD">Grenada</MenuItem>
                <MenuItem value="GP">Guadeloupe</MenuItem>
                <MenuItem value="GU">Guam</MenuItem>
                <MenuItem value="GT">Guatemala</MenuItem>
                <MenuItem value="GG">Guernsey</MenuItem>
                <MenuItem value="GN">Guinea</MenuItem>
                <MenuItem value="GW">Guinea-Bissau</MenuItem>
                <MenuItem value="GY">Guyana</MenuItem>
                <MenuItem value="HT">Haiti</MenuItem>
                <MenuItem value="HM">
                  Heard Island and Mcdonald Islands
                </MenuItem>
                <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                <MenuItem value="HN">Honduras</MenuItem>
                <MenuItem value="HK">Hong Kong</MenuItem>
                <MenuItem value="HU">Hungary</MenuItem>
                <MenuItem value="IS">Iceland</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="ID">Indonesia</MenuItem>
                <MenuItem value="IR">Iran, Islamic Republic of</MenuItem>
                <MenuItem value="IQ">Iraq</MenuItem>
                <MenuItem value="IE">Ireland</MenuItem>
                <MenuItem value="IM">Isle of Man</MenuItem>
                <MenuItem value="IL">Israel</MenuItem>
                <MenuItem value="IT">Italy</MenuItem>
                <MenuItem value="JM">Jamaica</MenuItem>
                <MenuItem value="JP">Japan</MenuItem>
                <MenuItem value="JE">Jersey</MenuItem>
                <MenuItem value="JO">Jordan</MenuItem>
                <MenuItem value="KZ">Kazakhstan</MenuItem>
                <MenuItem value="KE">Kenya</MenuItem>
                <MenuItem value="KI">Kiribati</MenuItem>
                <MenuItem value="KP">
                  Korea, Democratic People's Republic of
                </MenuItem>
                <MenuItem value="KR">Korea, Republic of</MenuItem>
                <MenuItem value="XK">Kosovo</MenuItem>
                <MenuItem value="KW">Kuwait</MenuItem>
                <MenuItem value="KG">Kyrgyzstan</MenuItem>
                <MenuItem value="LA">Lao People's Democratic Republic</MenuItem>
                <MenuItem value="LV">Latvia</MenuItem>
                <MenuItem value="LB">Lebanon</MenuItem>
                <MenuItem value="LS">Lesotho</MenuItem>
                <MenuItem value="LR">Liberia</MenuItem>
                <MenuItem value="LY">Libyan Arab Jamahiriya</MenuItem>
                <MenuItem value="LI">Liechtenstein</MenuItem>
                <MenuItem value="LT">Lithuania</MenuItem>
                <MenuItem value="LU">Luxembourg</MenuItem>
                <MenuItem value="MO">Macao</MenuItem>
                <MenuItem value="MK">
                  Macedonia, the Former Yugoslav Republic of
                </MenuItem>
                <MenuItem value="MG">Madagascar</MenuItem>
                <MenuItem value="MW">Malawi</MenuItem>
                <MenuItem value="MY">Malaysia</MenuItem>
                <MenuItem value="MV">Maldives</MenuItem>
                <MenuItem value="ML">Mali</MenuItem>
                <MenuItem value="MT">Malta</MenuItem>
                <MenuItem value="MH">Marshall Islands</MenuItem>
                <MenuItem value="MQ">Martinique</MenuItem>
                <MenuItem value="MR">Mauritania</MenuItem>
                <MenuItem value="MU">Mauritius</MenuItem>
                <MenuItem value="YT">Mayotte</MenuItem>
                <MenuItem value="MX">Mexico</MenuItem>
                <MenuItem value="FM">Micronesia, Federated States of</MenuItem>
                <MenuItem value="MD">Moldova, Republic of</MenuItem>
                <MenuItem value="MC">Monaco</MenuItem>
                <MenuItem value="MN">Mongolia</MenuItem>
                <MenuItem value="ME">Montenegro</MenuItem>
                <MenuItem value="MS">Montserrat</MenuItem>
                <MenuItem value="MA">Morocco</MenuItem>
                <MenuItem value="MZ">Mozambique</MenuItem>
                <MenuItem value="MM">Myanmar</MenuItem>
                <MenuItem value="NA">Namibia</MenuItem>
                <MenuItem value="NR">Nauru</MenuItem>
                <MenuItem value="NP">Nepal</MenuItem>
                <MenuItem value="NL">Netherlands</MenuItem>
                <MenuItem value="AN">Netherlands Antilles</MenuItem>
                <MenuItem value="NC">New Caledonia</MenuItem>
                <MenuItem value="NZ">New Zealand</MenuItem>
                <MenuItem value="NI">Nicaragua</MenuItem>
                <MenuItem value="NE">Niger</MenuItem>
                <MenuItem value="NG">Nigeria</MenuItem>
                <MenuItem value="NU">Niue</MenuItem>
                <MenuItem value="NF">Norfolk Island</MenuItem>
                <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                <MenuItem value="NO">Norway</MenuItem>
                <MenuItem value="OM">Oman</MenuItem>
                <MenuItem value="PK">Pakistan</MenuItem>
                <MenuItem value="PW">Palau</MenuItem>
                <MenuItem value="PS">Palestinian Territory, Occupied</MenuItem>
                <MenuItem value="PA">Panama</MenuItem>
                <MenuItem value="PG">Papua New Guinea</MenuItem>
                <MenuItem value="PY">Paraguay</MenuItem>
                <MenuItem value="PE">Peru</MenuItem>
                <MenuItem value="PH">Philippines</MenuItem>
                <MenuItem value="PN">Pitcairn</MenuItem>
                <MenuItem value="PL">Poland</MenuItem>
                <MenuItem value="PT">Portugal</MenuItem>
                <MenuItem value="PR">Puerto Rico</MenuItem>
                <MenuItem value="QA">Qatar</MenuItem>
                <MenuItem value="RE">Reunion</MenuItem>
                <MenuItem value="RO">Romania</MenuItem>
                <MenuItem value="RU">Russian Federation</MenuItem>
                <MenuItem value="RW">Rwanda</MenuItem>
                <MenuItem value="BL">Saint Barthelemy</MenuItem>
                <MenuItem value="SH">Saint Helena</MenuItem>
                <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                <MenuItem value="LC">Saint Lucia</MenuItem>
                <MenuItem value="MF">Saint Martin</MenuItem>
                <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                <MenuItem value="VC">Saint Vincent and the Grenadines</MenuItem>
                <MenuItem value="WS">Samoa</MenuItem>
                <MenuItem value="SM">San Marino</MenuItem>
                <MenuItem value="ST">Sao Tome and Principe</MenuItem>
                <MenuItem value="SA">Saudi Arabia</MenuItem>
                <MenuItem value="SN">Senegal</MenuItem>
                <MenuItem value="RS">Serbia</MenuItem>
                <MenuItem value="CS">Serbia and Montenegro</MenuItem>
                <MenuItem value="SC">Seychelles</MenuItem>
                <MenuItem value="SL">Sierra Leone</MenuItem>
                <MenuItem value="SG">Singapore</MenuItem>
                <MenuItem value="SX">Sint Maarten</MenuItem>
                <MenuItem value="SK">Slovakia</MenuItem>
                <MenuItem value="SI">Slovenia</MenuItem>
                <MenuItem value="SB">Solomon Islands</MenuItem>
                <MenuItem value="SO">Somalia</MenuItem>
                <MenuItem value="ZA">South Africa</MenuItem>
                <MenuItem value="GS">
                  South Georgia and the South Sandwich Islands
                </MenuItem>
                <MenuItem value="SS">South Sudan</MenuItem>
                <MenuItem value="ES">Spain</MenuItem>
                <MenuItem value="LK">Sri Lanka</MenuItem>
                <MenuItem value="SD">Sudan</MenuItem>
                <MenuItem value="SR">Suriname</MenuItem>
                <MenuItem value="SJ">Svalbard and Jan Mayen</MenuItem>
                <MenuItem value="SZ">Swaziland</MenuItem>
                <MenuItem value="SE">Sweden</MenuItem>
                <MenuItem value="CH">Switzerland</MenuItem>
                <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                <MenuItem value="TW">Taiwan, Province of China</MenuItem>
                <MenuItem value="TJ">Tajikistan</MenuItem>
                <MenuItem value="TZ">Tanzania, United Republic of</MenuItem>
                <MenuItem value="TH">Thailand</MenuItem>
                <MenuItem value="TL">Timor-Leste</MenuItem>
                <MenuItem value="TG">Togo</MenuItem>
                <MenuItem value="TK">Tokelau</MenuItem>
                <MenuItem value="TO">Tonga</MenuItem>
                <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                <MenuItem value="TN">Tunisia</MenuItem>
                <MenuItem value="TR">Turkey</MenuItem>
                <MenuItem value="TM">Turkmenistan</MenuItem>
                <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                <MenuItem value="TV">Tuvalu</MenuItem>
                <MenuItem value="UG">Uganda</MenuItem>
                <MenuItem value="UA">Ukraine</MenuItem>
                <MenuItem value="AE">United Arab Emirates</MenuItem>
                <MenuItem value="GB">United Kingdom</MenuItem>
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="UM">
                  United States Minor Outlying Islands
                </MenuItem>
                <MenuItem value="UY">Uruguay</MenuItem>
                <MenuItem value="UZ">Uzbekistan</MenuItem>
                <MenuItem value="VU">Vanuatu</MenuItem>
                <MenuItem value="VE">Venezuela</MenuItem>
                <MenuItem value="VN">Viet Nam</MenuItem>
                <MenuItem value="VG">Virgin Islands, British</MenuItem>
                <MenuItem value="VI">Virgin Islands, U.s.</MenuItem>
                <MenuItem value="WF">Wallis and Futuna</MenuItem>
                <MenuItem value="EH">Western Sahara</MenuItem>
                <MenuItem value="YE">Yemen</MenuItem>
                <MenuItem value="ZM">Zambia</MenuItem>
                <MenuItem value="ZW">Zimbabwe</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="enquire_phone_container">
            <label>Phone *</label>
            <div>
              <span></span>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="enquire_form_right">
          <div>
            <label>Desired Destinations</label>
            <FormControl
              sx={{
                m: 1,
                width: { xl: 300, lg: 300, md: 300, sm: "100%", xs: "100%" },
              }}>
              <InputLabel
                id="demo-multiple-chip-label"
                size="small"
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                Select Countries
              </InputLabel>
              <Select
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                size="small"
                multiple
                value={personName}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Select Countries"
                    size="small"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <label>Estimated Start Date</label>
            <div className="months_year_container">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  sx={{
                    " &.MuiInputLabel-shrink": {
                      color: "#3C3D3D",
                    },
                  }}>
                  Months
                </InputLabel>
                <Select
                  sx={{
                    bgcolor: "#f1f0f3",
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  label="Months">
                  <MenuItem value="">
                    <em>Months</em>
                  </MenuItem>
                  <MenuItem>January</MenuItem>
                  <MenuItem>February</MenuItem>
                  <MenuItem>March</MenuItem>
                  <MenuItem>April</MenuItem>
                  <MenuItem>May</MenuItem>
                  <MenuItem>June</MenuItem>
                  <MenuItem>July</MenuItem>
                  <MenuItem>August</MenuItem>
                  <MenuItem>September</MenuItem>
                  <MenuItem>October</MenuItem>
                  <MenuItem>November</MenuItem>
                  <MenuItem>December</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  sx={{
                    " &.MuiInputLabel-shrink": {
                      color: "#3C3D3D",
                    },
                  }}>
                  Year
                </InputLabel>
                <Select
                  sx={{
                    bgcolor: "#f1f0f3",
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  label="Year">
                  <MenuItem value="">
                    <em>Year</em>
                  </MenuItem>
                  <MenuItem>2023</MenuItem>
                  <MenuItem>2024</MenuItem>
                  <MenuItem>2025</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <label>Trip Length</label>
            <input type="number" />
          </div>
          <div>
            <label>Total Budget for All Travellers *</label>
            <FormControl sx={{ m: 1, minWidth: 260, mr: "-1px" }} size="small">
              <InputLabel
                id="demo-simple-select-autowidth-label"
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                All Prices
              </InputLabel>
              <Select
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth">
                <MenuItem value="">
                  <em>All Prices are in USD</em>
                </MenuItem>
                <MenuItem>$10,000-$20,000</MenuItem>
                <MenuItem>$20,000-$30,000</MenuItem>
                <MenuItem>$30,000-$50,000</MenuItem>
                <MenuItem>$50,000-$75,000</MenuItem>
                <MenuItem>$75,000-$100,000</MenuItem>
                <MenuItem>$100,000-$150,000</MenuItem>
                <MenuItem>Greater than $150,000 </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <label>Number of Travellers</label>
            <input type="number" />
          </div>
          <div>
            <label>Enquiry Details</label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="6"
              placeholder="Tell us about your intrests,passions,needs and any other detail relevant to your trip"></textarea>
          </div>
          <div>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}>
              <input type="checkbox" /> Subscribe to newsletter
            </label>
            <button className="enquire_right_btn">ENQUIRE</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enquire;
