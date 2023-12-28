import { useForm } from 'react-hook-form';

function HomesForm() {
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data) => console.log(data);


    return (
        <>
            <h2>Add a new VIVLA home </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Home Name*
                    <input
                        type="text"
                        {...register('homeName')}
                    />
                </label>
                <label>
                    Hub*
                    <select {...register('hub')}>
                        <option hidden selected>Select a Hub </option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Formentera">Formentera</option>
                        <option value="Ibiza">Ibiza</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    Micro Market*
                    <select {...register('market')}>
                        <option hidden selected>Select a micro market </option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Formentera">Formentera</option>
                        <option value="Ibiza">Ibiza</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    Address*
                    <input
                        type="text"
                        {...register('address')}
                    />
                </label>
                <label>
                    Coordinates*
                    <input
                        type="text"
                        {...register('coordinates')}
                    />
                </label>
                <label>
                    Price*
                    <input
                        type="number"
                        {...register('price')}
                    />
                </label>
                <label>
                    Nº Bedrooms*
                    <input
                        type="number"
                        {...register('bedrooms')}
                    />
                </label>
                <label>
                    Nº Bathrooms*
                    <input
                        type="number"
                        {...register('bathrooms')}
                    />
                </label>
                <label>
                    Home SQM*
                    <input
                        type="number"
                        {...register('homeSQM')}
                    />
                </label>
                <label>
                    Plot SQM*
                    <input
                        type="number"
                        {...register('plotSQM')}
                    />
                </label>
                <label>
                    Home Collection*
                    <select {...register('homeCollection')}>
                        <option hidden selected > Select Home Collection </option>
                        <option value="City"> City </option>
                        <option value="Mountain">Mountain</option>
                        <option value="Sea">Sea</option>
                    </select>
                </label>
                <label>
                    Home Types*
                    <select {...register('homeTypes')} >
                        <option hidden selected > Select Home Type </option>
                        <option value="Piso"> Piso </option>
                        <option value="Villa">Villa</option>
                    </select>
                </label>
                <label>
                    Home Subtype*
                    <select {...register('homeSubtype')} >
                        <option hidden selected > Select Home Subtype </option>
                        <option value="Adosado"> Adosado </option>
                        <option value="Aislado">Aislado</option>
                        <option value="Atico">Ático</option>
                        <option value="Bajo">Bajo</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Pareado">Pareado</option>
                    </select>
                </label>
                <label>
                    Home Status*
                    <select {...register('homeStatus')} >
                        <option hidden selected > Select Home Status </option>
                        <option value="2Mano"> 2º Mano </option>
                        <option value="Aislado">Aislado</option>
                    </select>
                </label>
                <label>
                    <input
                        type="checkbox"
                        {...register('isFurnished', { value: 'yes' })}
                    />
                    Mark if the house is furnished
                </label>

                <label>
                    Tourist License*
                    <select {...register('touristLicense')} >
                        <option hidden selected > Select one option </option>
                        <option value="Does not have tourist license"> Does not have a tourist license </option>
                        <option value="Does not have and cannot obtain it"> Does not have and cannot obtain it</option>
                        <option value="Does not have but can obtain it"> Does not have but can obtain it</option>
                        <option value="Has a tourist license"> Has a tourist license</option>
                    </select>
                </label>
                <label>
                    Add images*
                    <input
                        type="file"
                        {...register('images')}
                        multiple
                    />
                </label>
                <label>
                    Video URL
                    <input
                        type="text"
                        {...register('video')}
                    />
                </label>
                <label>
                    Matterport URL
                    <input
                        type="text"
                        {...register('matterport')}
                    />
                </label>

                <label>
                    Add Plots*
                    <input
                        type="file"
                        {...register('plots')}
                        multiple
                    />
                </label>
                <label>
                    Description*
                    <textarea
                        {...register('description')}
                    />
                </label>

                <label>
                    Add amenities(At least three)*
                    <select multiple {...register('amenties')} >
                        <option hidden selected > Add amenities</option>
                        <option value="24/7 Concierge"> 24/7 Concierge</option>
                        <option value="Aerothermia"> Aerothermia</option>
                        <option value="Air conditioning"> Air conditioning</option>
                        <option value="Air conditioning"> Air conditioning</option>
                        <option value="Airport proximity"> Airport proximity</option>
                        <option value="Alarm services"> Alarm services</option>
                        <option value="Barbecue"> Barbecue</option>
                    </select>
                </label>

                <label>
                    Visibility*
                    <select {...register('visibility')} >
                        <option hidden selected > Set visibility </option>
                        <option value="Hidden"> Hidden</option>
                        <option value="Private"> Private</option>
                        <option value="Public"> Public</option>
                    </select>
                </label>

                <label>
                    Internal notes
                    <textarea
                        {...register('internalNotes')}
                    />
                </label>
                <button type="submit"> Submit </button>
            </form>
        </>
    )
}

export default HomesForm