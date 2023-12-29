import Airtable from "airtable";

const { API_KEY, AIRTABLE_BASE } = process.meta.env;

export const airtableBase = new Airtable({
    apiKey: API_KEY
})
    .base(AIRTABLE_BASE)








