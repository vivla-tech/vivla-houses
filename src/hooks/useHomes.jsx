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
    }, [homes]);

    const removeHome = async (id) => {
        const homeToDelete = homes.find(home => home.id === id);

        await removeHomesData(id)
        await removeImageFromStorage(homeToDelete.id)
        setHomes(prevHome => prevHome.filter(home => home.id !== id))
    }

    const updateHome = async (id, updateFields, newFiles, existingImages) => {
        try {
            const updatedImageUrls = await updateImagesInStorage(id, newFiles, existingImages);

            const finalUpdateFields = { ...updateFields, urlImages: updatedImageUrls.join(', ') };

            const updatedRecord = await updateHomeData(id, finalUpdateFields);

            setHomes(prevHomes =>
                prevHomes.map(home => home.id === id
                    ? { ...home, ...finalUpdateFields }
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