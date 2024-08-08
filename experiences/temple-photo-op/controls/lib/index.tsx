/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useMessaging } from "@footron/controls-client";
import {
  FormControl,
  NativeSelect,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormGroup, Slider
} from "@material-ui/core";
import { useCallback } from "react";

const containerStyle = css`
  padding: 16px;
  overflow-x: hidden;

  p {
    margin: 0 0 16px;
  }
`;

const names = [
[ 0, 'Aba, Nigeria' ],
[ 1, 'Accra, Ghana' ],
[ 2, 'Albuquerque, New Mexico' ],
[ 3, 'Anchorage, Alaska' ],
[ 4, 'Apia, Samoa' ],
[ 5, 'Asuncion, Paraguay' ],
[ 6, 'Atlanta, Georgia' ],
[ 7, 'Barranquilla, Colombia' ],
[ 8, 'Baton Rouge, Louisiana' ],
[ 9, 'Bentonville, Arkansas' ],
[ 10, 'Bern, Switzerland' ],
[ 11, 'Billings, Montana' ],
[ 12, 'Birmingham, Alabama' ],
[ 13, 'Bismarck, North Dakota' ],
[ 14, 'Bogota, Colombia' ],
[ 15, 'Boise, Idaho' ],
[ 16, 'Bountiful, Utah' ],
[ 17, 'Brigham City, Utah' ],
[ 18, 'Brisbane, Australia' ],
[ 19, 'Buenos Aires, Argentina' ],
[ 20, 'Calgary, Alberta' ],
[ 21, 'Campinas, Brazil' ],
[ 22, 'Caracas, Venezuela' ],
[ 23, 'Cardston, Alberta' ],
[ 24, 'Cebu City, Philippines' ],
[ 25, 'Cedar City, Utah' ],
[ 26, 'Chicago, Illinois' ],
[ 27, 'Ciudad Juarez, Mexico' ],
[ 28, 'Colonia Juarez, Mexico' ],
[ 29, 'Columbia River, Washington' ],
[ 30, 'Columbia, South Carolina' ],
[ 31, 'Columbus, Ohio' ],
[ 32, 'Concepcion, Chile' ],
[ 33, 'Copenhagen, Denmark' ],
[ 34, 'Cordoba, Argentina' ],
[ 35, 'Dallas, Texas' ],
[ 36, 'Denver, Colorado' ],
[ 37, 'Detroit, Michigan' ],
[ 38, 'Draper, Utah' ],
[ 39, 'Edmonton, Alberta' ],
[ 40, 'Fort Collins, Colorado' ],
[ 41, 'Fortaleza, Brazil' ],
[ 42, 'Frankfurt, Germany' ],
[ 43, 'Freiberg, Germany' ],
[ 44, 'Fresno, California' ],
[ 45, 'Fukuoka, Japan' ],
[ 46, 'Gila Valley, Arizona' ],
[ 47, 'Gilbert, Arizona' ],
[ 48, 'Guadalajara, Mexico' ],
[ 49, 'Guatemala City, Guatemala' ],
[ 50, 'Guayaquil, Ecuador' ],
[ 51, 'Hague, Netherlands ' ],
[ 52, 'Hartford, Connecticut' ],
[ 53, 'Hong Kong, China' ],
[ 54, 'Houston, Texas' ],
[ 55, 'Idaho Falls, Idaho' ],
[ 56, 'Indiana, Indianapolis' ],
[ 57, 'Johannesburg, South Africa' ],
[ 58, 'Jordan River, Utah' ],
[ 59, 'Kinshasa, Democratic Republic of Congo' ],
[ 60, 'Kirtland, Ohio' ],
[ 61, 'Kona, Hawaii' ],
[ 62, 'Kyiv, Ukraine' ],
[ 63, 'Laie, Hawaii' ],
[ 64, 'Las Vegas, Nevada' ],
[ 65, 'Lima, Peru' ],
[ 66, 'Logan, Utah' ],
[ 67, 'London, England' ],
[ 68, 'Los Angeles, California' ],
[ 69, 'Louisville, Kentucky' ],
[ 70, 'Lubbock, Texas' ],
[ 71, 'Madrid, Spain' ],
[ 72, 'Manaus, Brazil' ],
[ 73, 'Manhattan, New York' ],
[ 74, 'Manila, Philippines' ],
[ 75, 'Manti, Utah' ],
[ 76, 'Medford, Oregon' ],
[ 77, 'Melbourne, Australia' ],
[ 78, 'Memphis, Tennessee' ],
[ 79, 'Merida, Mexico' ],
[ 80, 'Meridian, Idaho' ],
[ 81, 'Mesa, Arizona' ],
[ 82, 'Mexico City, Mexico' ],
[ 83, 'Monterrey, Mexico' ],
[ 84, 'Montevideo, Uruguay' ],
[ 85, 'Monticello, Utah' ],
[ 86, 'Mount Timpanogos, Utah' ],
[ 87, 'Nashville, Tennessee' ],
[ 88, 'Nauvoo, Illinois' ],
[ 89, 'Newport Beach, California' ],
[ 90, 'Nukualofa, Tonga' ],
[ 91, 'Oakland, California' ],
[ 92, 'Oaxaca, Mexico' ],
[ 93, 'Ogden, Utah' ],
[ 94, 'Oklahoma City, Oklahoma' ],
[ 95, 'Oquirrh Mountain, Utah' ],
[ 96, 'Orlando, Florida' ],
[ 97, 'Palmyra, New York' ],
[ 98, 'Panama City, Panama' ],
[ 99, 'Papeete, Tahiti' ],
[ 100, 'Paris, France' ],
[ 101, 'Payson, Utah' ],
[ 102, 'Perth, Australia' ],
[ 103, 'Philadelphia, Pennsylvania' ],
[ 104, 'Phoenix, Arizona' ],
[ 105, 'Port-au-Prince, Haiti' ],
[ 106, 'Portland, Oregon' ],
[ 107, 'Porto Alegre, Brazil' ],
[ 108, 'Preston, England' ],
[ 109, 'Provo City Center, Utah' ],
[ 110, 'Provo, Utah' ],
[ 111, 'Quetzaltenango, Guatemala' ],
[ 112, 'Raleigh, North Carolina' ],
[ 113, 'Recife, Brazil' ],
[ 114, 'Redlands, California' ],
[ 115, 'Reno, Nevada' ],
[ 116, 'Rexburg, Idaho' ],
[ 117, 'Rome, Italy' ],
[ 118, 'Salt Lake City, Utah' ],
[ 119, 'San Antonio, Texas' ],
[ 120, 'San Diego, California' ],
[ 121, 'San Jose, Costa Rica' ],
[ 122, 'San Salvador, El Salvador' ],
[ 123, 'Santiago, Chile' ],
[ 124, 'Sao Paulo, Brazil' ],
[ 125, 'Sapporo, Japan' ],
[ 126, 'Seattle, Washington' ],
[ 127, 'Snowflake, Arizona' ],
[ 128, 'Spokane, Washington' ],
[ 129, 'St George, Utah' ],
[ 130, 'St Paul, Minnesota' ],
[ 131, 'Star Valley, Wyoming' ],
[ 132, 'Stockholm, Sweden' ],
[ 133, 'Suva, Fiji' ],
[ 134, 'Sydney, Australia' ],
[ 135, 'Taipei, Taiwan' ],
[ 136, 'Tampico, Mexico' ],
[ 137, 'Tegucigalpa, Honduras' ],
[ 138, 'Toronto, Ontario' ],
[ 139, 'Trujillo, Peru' ],
[ 140, 'Tucson, Arizona' ],
[ 141, 'Tuxtla Gutiérrez, Mexico' ],
[ 142, 'Vancouver, Washington' ],
[ 143, 'Veracruz, Mexico' ],
[ 144, 'Vernal, Utah' ],
[ 145, 'Villahermosa, Mexico' ],
[ 146, 'Washington, D.C.' ],
[ 147, 'Winter Quarters, Nebraska' ],

]

const ControlsComponent = (): JSX.Element => {
  const [name, setName] = useState<string>("");

  const { sendMessage } = useMessaging<any>();

  const handleNameChange = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const name = event.target.value;
    setName(name);
    sendMessage(name)
  };

  return (
    <div css={containerStyle}>
      <FormGroup>
        <p>
          <b>Pick a temple from the list to see it on the big screen! (It will show for 60 seconds)</b>
        </p>
        <FormControl>
          <InputLabel htmlFor="name-native-helper">Name</InputLabel>
          <NativeSelect
            inputProps={{
              name: 'Name',
              id: 'name-native-helper',
            }}
            id="demo-simple-select"
            value={name}
            name="Name"
            onChange={handleNameChange}
          >
            <option value="all">All names</option>
            {
              names.map((name) => <option key={"id"} value={name[0]}>{name[1]}</option>)
            }
          </NativeSelect>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default ControlsComponent;
