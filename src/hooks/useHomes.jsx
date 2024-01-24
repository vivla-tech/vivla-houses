import { useState, useEffect } from "react";
import { getHomesData, removeHomesData, updateHomeData } from "../services/airtableServices";
import { removeImageFromStorage } from "../firebase/storage";


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
        const homeToDelete = homes.find(home => home.id === id);

        await removeHomesData(id)
        await removeImageFromStorage(homeToDelete.homeName)
        setHomes(prevHome => prevHome.filter(home => home.id !== id))
    }

    const updateHome = async (id, updatedFields, newFiles) => {
        try {
            const homeToUpdate = homes.find(home => home.id === id);

            if (newFiles && newFiles.length > 0) {
                const homeName = updatedFields.homeName || homeToUpdate.homeName;
                const newImageUrls = await updateImagesInStorage(homeName, newFiles);

                updatedFields = { ...updatedFields, urlImages: newImageUrls.join(', ') };
            }

            const updatedRecord = await updateHomeData(id, updatedFields);

            setHomes(prevHomes =>
                prevHomes.map(home => home.id === id
                    ? { ...home, ...updatedFields }
                    : home
                )
            );

            return updatedRecord;

        } catch (error) {
            console.error('Error updating home data:', error);
        }
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

    return { homes, removeHome, updateHome }
}

export default useHomes;