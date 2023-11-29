# Scraper guide
The main websites from which we get data from are: `kv.ee`, `kinnisvara24.ee` and `rendin.ee`

## How to scrape?
To avoid IP bans and Cloudflare protections we need to use a multipurpose proxy tool:
https://app.zenrows.com/

[Zenrows](https://app.zenrows.com/) builds a custom client and allows a wide array of customization options. AOI for us:
* Custom proxies
* `AI Anti-bot` which makes the request even harder to detect
* Javascript rendering:
  * Wait for a CSS Selector to load in the DOM or,
    wait a fixed amount of time to return the content.
  * Block specific resources from loading using this parameter.
  * Intercept XHR / Fetch / Ajax requests. The response will be a JSON with two fields: html and xhr.

The API has by default 1000 free credits and the default request costs 1 credit, advanced requests range from 5-30+ credits. For that reason we'll try to use the default option for all requests.

Zenrows also allows integration with Node.js, sample code:
```javascript
// npm install zenrows
const { ZenRows } = require("zenrows");

(async () => {
    const client = new ZenRows("<<API_KEY>>");
    const url = "https://kinnisvara24.ee/kinnisvaraotsing?deal_types[]=rent&object_types[]=apartment&page=1&sort_by=price&sort_order=asc&addresses[0][A1]=Harju%20maakond&addresses[0][A2]=Tallinn&addresses[0][A3]=P%C3%B5hja-Tallinna%20linnaosa&addresses[0][A4]=Kalamaja";

    try {
        const { data } = await client.get(url, {});
        console.log(data);
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error(error.response.data);
        }
    }
})();
```

## Scraping data from API endpoints
### kv.ee
Since `kv.ee` doesn't have any public API's we'll need to scrape the entire website data.
```python3
# pip install zenrows
from zenrows import ZenRowsClient
import html

client = ZenRowsClient("<<API_KEY>>")
url = "https://kinnisvara24.ee/kinnisvaraotsing?deal_types[]=rent&object_types[]=apartment&page=1&sort_by=price&sort_order=asc&addresses[0][A1]=Harju%20maakond&addresses[0][A2]=Tallinn&addresses[0][A3]=P%C3%B5hja-Tallinna%20linnaosa&addresses[0][A4]=Kalamaja"

response = client.get(url)
response_html = response.text
decoded_response = html.unescape(response_html)

print(decoded_response)
```
See the [sample response](sample_scrapes/kv_sample_scrape.html)!

### kinnisvara24.ee
API endpoint: `https://kinnisvara24.ee/search`

sample payload:
```json
{
  "hash":null,
  "addresses":[
    {
      "A1":"Harju maakond",
      "A2":"Tallinn",
      "A3":"Põhja-Tallinna linnaosa",
      "A4":"Kalamaja"
    }
  ],
  "area_min":"",
  "area_max":"",
  "land_area_min":"",
  "land_area_max":"",
  "around_point":null,
  "bounds":[

  ],
  "broker_id":"",
  "bureau_id":null,
  "build_year_min":"",
  "build_year_max":"",
  "client_day_date_max":"",
  "client_day_date_min":"",
  "comforts":[

  ],
  "commercial_types":[

  ],
  "deal_types":[
    "rent"
  ],
  "developments_only":false,
  "energy_classes":[

  ],
  "exclusives":false,
  "uniques":false,
  "extras":[

  ],
  "floor_min":"",
  "floor_max":"",
  "from_owner":false,
  "with_detail_planning_only":false,
  "with_building_permit_only":false,
  "with_360_tour_only":false,
  "with_video_only":false,
  "intended_uses":[

  ],
  "keywords":[

  ],
  "materials":[

  ],
  "object_types":[
    "apartment"
  ],
  "price_max":450,
  "price_min":200,
  "price_per_m2_max":"",
  "price_per_m2_min":"",
  "land_price_per_m2_max":"",
  "land_price_per_m2_min":"",
  "water_supplies":[

  ],
  "heating_types":[

  ],
  "energy_sources":[

  ],
  "rooms_max":null,
  "rooms_min":null,
  "sewage_types":[

  ],
  "sort_by":"relevance",
  "sort_order":"desc",
  "page":1,
  "utility_join_fees_paid":false,
  "has_repairs_canal":false,
  "is_development_lot":false,
  "is_top_floor":false,
  "has_water_border":false,
  "pets_allowed":false,
  "with_usage_permit":false,
  "has_client_day":false,
  "free":false,
  "amount":"",
  "rooms":"",
  "period":"",
  "has_furniture":"",
  "has_washing":false,
  "are_pets_allowed":false,
  "show_deactivated":false,
  "price_without_utilities":false,
  "has_kitchen":false,
  "has_job_possibility":false,
  "additional":[

  ],
  "house_part_types":[

  ],
  "conditions":[

  ],
  "neighbours":[

  ],
  "road_conditions":[

  ],
  "address":[

  ]
}
```
See the [sample response](sample_scrapes/kinnisvara24_sample_scrape.json)!

### rendin.ee
API endpoint: `https://europe-west1-rendin-production.cloudfunctions.net/getSearchApartments`

sample payload:
```json
{"data":{"city":"Tallinn","districts":["Põhja-Tallinn"],"country":"EE"}}
```
See the [sample response](sample_scrapes/rendin_sample_scrape.json)!

### City24
Since the request method doesn't support json body, the parameters for the request are in the url.

API endpoint: `https://api.city24.ee/et_EE/search/realties?<<query_parameters>>`

sample payload(**URL encoded**):
```
address%5Bcc%5D=1&address%5Bcity%5D%5B%5D=3166&tsType=rent&unitType=Apartment&price%5Blte%5D=600&adReach=1&itemsPerPage=50&page=1
```