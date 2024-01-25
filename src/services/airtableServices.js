// import Airtable from "airtable";
import axios from "axios";

const { VITE_AIRTABLE_TOKEN, VITE_AIRTABLE_BASE } = import.meta.env;


export const axiosInstance = axios.create({
    baseURL: `https://api.airtable.com/v0/${VITE_AIRTABLE_BASE}`,
    headers: {
        'Authorization': `Bearer ${VITE_AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export const getHomesData = async () => {
    try {
        const response = await axiosInstance.get('/homes', {
            params: { view: 'Grid view' }
        });
        return response.data.records;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const removeHomesData = async (id) => {
    try {
        await axiosInstance.delete(`/homes/${id}`);
    } catch (error) {
        console.error('error to remove home data', error);
    }
};

export const updateHomeData = async (id, updatedFields) => {
    try {
        const response = await axiosInstance.patch(`/homes/${id}`, {
            fields: updatedFields
        });
        return response.data;
    } catch (error) {
        console.error('error updating home data', error);
    }
};






