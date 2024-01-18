import { useState, useEffect } from "react";
import { getHomesData, removeHomesData } from "../services/airtableServices";


function useHomes() {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getHomesData();
                const transformedData = transformHomeData(data);
                setHomes(transformedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const removeHome = async (id) => {
        await removeHomesData(id)
        setHomes(prevHome => prevHome.filter(home => home.id !== id))
    }

    const transformHomeData = (data) => {
        return data.map(item => {
            return {
                id: item.id,
                homeName: item.fields['Home Name'],
                hub: item.fields['Hub'],
                market: item.fields['Market'],
                address: item.fields['Address'],
                coordinates: item.fields['Coordinates'],
                price: item.fields['Price'],
                bedrooms: item.fields["Bedrooms"],
                bathrooms: item.fields["Bathrooms"],
                homeSQM: item.fields["Home SQM"],
                plotSQM: item.fields["Plot SQM"],
                homeCollection: item.fields["Home Collection"],
                homeTypes: item.fields["Home Types"],
                homeSubtype: item.fields["Home Subtype"],
                homeStatus: item.fields["Home Status"],
                isFurnished: item.fields["Is Furnished"],
                touristLicense: item.fields["Tourist License"],
                urlImages: item.fields["URL Images"],
                video: item.fields["Video"],
                matterport: item.fields["Matterport"],
                plots: item.fields["Plots"],
                description: item.fields["Description"],
                amenities: item.fields["Amenities"],
                visibility: item.fields["Visibility"],
                internalNotes: item.fields["Internal Notes"],
            }
        })
    }

    return { homes, removeHome }
}

export default useHomes;