import { useState, useEffect } from "react";
import { getHomesData, removeHomesData, updateHomeData } from "../services/airtableServices";
import { removeImageFromStorage, updateImagesInStorage } from "../firebase/storage";


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

    const updateHome = async (id, updatedFields, newFiles, existingImages) => {
        try {
            const homeToUpdate = homes.find(home => home.id === id);

            let updatedImageUrls = existingImages;

            if (newFiles && newFiles.length > 0) {
                const homeName = updatedFields.homeName || homeToUpdate.homeName;
                const newImageUrls = await updateImagesInStorage(homeName, newFiles);
                updatedImageUrls = updatedImageUrls.concat(newImageUrls);
            }

            updatedFields = { ...updatedFields, urlImages: updatedImageUrls.join(', ') };

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
    };

    const transformHomeData = (data) => {
        return data.map(item => {
            return {
                id: item.id,
                homeName: item.fields['homeName'],
                hub: item.fields['hub'],
                market: item.fields['market'],
                address: item.fields['address'],
                coordinates: item.fields['coordinates'],
                price: item.fields['price'],
                bedrooms: item.fields["bedrooms"],
                bathrooms: item.fields["bathrooms"],
                homeSQM: item.fields["homeSQM"],
                plotSQM: item.fields["plotSQM"],
                homeCollection: item.fields["homeCollection"],
                homeTypes: item.fields["homeTypes"],
                homeSubtype: item.fields["homeSubtype"],
                homeStatus: item.fields["homeStatus"],
                isFurnished: item.fields["isFurnished"],
                touristLicense: item.fields["touristLicense"],
                urlImages: item.fields["urlImages"],
                video: item.fields["video"],
                matterport: item.fields["matterport"],
                plots: item.fields["plots"],
                description: item.fields["description"],
                amenities: item.fields["amenities"],
                visibility: item.fields["visibility"],
                internalNotes: item.fields["internalNotes"],
            }
        })
    }

    return { homes, removeHome, updateHome }
}

export default useHomes;