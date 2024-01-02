import Airtable from "airtable";

const { VITE_API_KEY, VITE_AIRTABLE_BASE } = import.meta.env;

export const airtableBase = new Airtable({
    apiKey: VITE_API_KEY
})
    .base(VITE_AIRTABLE_BASE)








