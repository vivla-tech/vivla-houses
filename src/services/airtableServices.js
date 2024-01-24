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


export const removeHomesData = async (id) => {
    try {
        await airtableBase('homes').destroy([id])
    } catch (error) {
        console.error('error to remove home data', error)
    }
}

export const updateHomeData = async (id, updatedFields) => {
    try {
        const updatedRecord = await airtableBase('homes').update([{
            id: id,
            fields: updatedFields
        }]);
        return updatedRecord;
    } catch (error) {
        console.error('error updating home data', error);
    }
}





