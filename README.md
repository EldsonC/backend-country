# Country Information API

## Description
This backend API allows you to fetch information about countries, including:
- All available countries.
- Specific information about a country, including borders, population, and flag.

The API integrates with external services to gather data.

## Technologies Used
- **Languages**: TypeScript
- **Frameworks/Libraries**: Express, Axios
- **Other Tools**: CORS, dotenv

## Installation

### Prerequisites
- **Node.js**
- **Yarn** or **npm**

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/EldsonC/backend-country.git
    ```

2. Navigate into the project directory:
    ```bash
    cd backend-country
    ```

3. Install the dependencies:
    ```bash
    yarn install
    # or
    npm install
    ```

4. Create the `.env` file with the following variables:
    ```bash
    ALL_COUNTRIES_URL="https://date.nager.at/api/v3/AvailableCountries"
    COUNTRY_INFO_URL="https://date.nager.at/api/v3/CountryInfo/"
    POPULATION_URL="https://countriesnow.space/api/v0.1/countries/population"
    FLAGS_URL="https://countriesnow.space/api/v0.1/countries/flag/images"
    PORT=3000
    ```

5. Start the project:
    ```bash
    yarn dev
    # or
    npm run dev
    ```

## API Endpoints

### Get All Countries
**GET** `/countries`

Returns a list of all available countries.

#### Response Example:
```json
[
  {
    "commonName": "United States",
    "officialName": "United States of America"
  },
  {
    "commonName": "Brazil",
    "officialName": "Federative Republic of Brazil"
  }
]
