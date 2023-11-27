/**
 * Represents an address with dynamic keys.
 * @interface Kinnisvara24Address
 */
interface Kinnisvara24Address {
  [key: string]: string
}

/**
 * Represents the parameters for a Kinnisvara24 API search.
 * @interface Kinnisvara24ApiSearchParams
 * @property {null} hash - A null value for the hash.
 * @property {Kinnisvara24Address[]} addresses - An array of addresses with dynamic keys.
 * @property {string} area_min - The minimum area for the search.
 * @property {string} area_max - The maximum area for the search.
 * @property {string[]} deal_types - The types of deals to include in the search.
 * @property {boolean} from_owner - Indicates whether the property is from an owner.
 * @property {string[]} object_types - The types of objects to include in the search.
 * @property {number} price_max - The maximum price for the search.
 * @property {number} price_min - The minimum price for the search.
 * @property {null | number} rooms_max - The maximum number of rooms for the search.
 * @property {null | number} rooms_min - The minimum number of rooms for the search.
 * @property {string} sort_by - The field to sort the results by.
 * @property {string} sort_order - The sort order for the results.
 * @property {number} page - The page number for the search results.
 * @property {string} amount - The amount field for the search.
 * @property {string} rooms - The rooms field for the search.
 */
interface Kinnisvara24ApiSearchParams {
  hash?: null
  addresses: Kinnisvara24Address[]
  area_min?: string
  area_max?: string
  deal_types?: string[]
  from_owner?: boolean
  object_types?: string[]
  price_max?: number
  price_min?: number
  rooms_max?: null | number
  rooms_min?: null | number
  sort_by?: string
  sort_order?: string
  page?: number
  amount?: string
  rooms?: string
}

/**
 * Represents the parameters for a Rendin API search.
 * @interface RendinApiSearchParams
 * @property {number} priceMin - The minimum price for the search.
 * @property {number} priceMax - The maximum price for the search.
 * @property {number} roomsMin - The minimum number of rooms for the search.
 * @property {number} roomsMax - The maximum number of rooms for the search.
 * @property {string[]} districts - The districts to include in the search.
 * @property {string} country - The country code (e.g., "EE").
 * @property {string} city - The city name.
 */
interface RendinApiSearchParams {
  priceMin?: number
  priceMax?: number
  roomsMin?: number
  roomsMax?: number
  districts: ["Põhja-Tallinn", "Haabersti", "Kesklinn", "Kristiine", "Lasnamäe", "Mustamäe", "Nõmme", "Pirita"]
  country: "EE"
  city: "Tallinn"
}

/**
 * Represents the city codes used in the City24SearchParameters interface for making API calls to City24.
 * @interface City24CityCodes
 * @property {number} 2670 - City code for Nõmme linnaosa.
 * @property {number} 3039 - City code for Pirita linnaosa.
 * @property {number} 540 - City code for Haabersti linnaosa.
 * @property {number} 1240 - City code for Kesklinna linnaosa.
 * @property {number} 1897 - City code for Lasnamäe linnaosa.
 * @property {number} 2413 - City code for Mustamäe linnaosa.
 * @property {number} 3166 - City code for Põhja-Tallinna linnaosa.
 *
 * These city codes are used in the address[city][] parameter when making API calls to City24.
 * They represent different city districts within Tallinn.
 */
interface City24CityCodes {
  2670: "Nõmme linnaosa";
  3039: "Pirita linnaosa";
  540: "Haabersti linnaosa";
  1240: "Kesklinna linnaosa";
  1897: "Lasnamäe linnaosa";
  2413: "Mustamäe linnaosa";
  3166: "Põhja-Tallinna linnaosa";
}


/**
 * Represents the parameters for a City24 API search.
 * @interface City24SearchParameters
 * @property {number} cc - The country code (e.g., 1).
 * @property {City24CityCodes[]} city - The city codes.
 * @property {string} tsType - The type of the search (e.g., "rent").
 * @property {string} unitType - The type of unit (e.g., "Apartment").
 * @property {number} price - The price range.
 * @property {number} roomCount - The number of rooms.
 * @property {number} itemsPerPage - The number of items per page.
 * @property {number} page - The page number.
 */
interface City24SearchParameters {
  address: {
    cc: 1
    city: City24CityCodes[]
  }
  tsType: "rent"
  unitType: "Apartment"
  price?: {
    gte: number
    lte: number
  }
  roomCount?: number
  itemsPerPage?: number
  page?: number
}
