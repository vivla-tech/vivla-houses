import Airtable from "airtable";

const { VITE_API_KEY, VITE_AIRTABLE_BASE } = import.meta.env;

export const airtableBase = new Airtable({
    apiKey: VITE_API_KEY
})
    .base(VITE_AIRTABLE_BASE)


export const getHomesData = async () => {
    try {
        const data = await airtableBase('homes')
            .select({ view: 'Grid view' })
            .all();
        return data;
    } catch (e) {
        return console.error(e);
    }
}





