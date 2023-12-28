import { useForm } from 'react-hook-form';
import './homes-form.css';

function HomesForm() {
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data) => console.log(data);


    return (
        <>
            <h2 className='title'>Add a new VIVLA home &#128516; </h2>
            <section className='form-container'>

                <form
                    className='homes-form'
                    onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="home">
                            Home name*
                        </label>
                        <input
                            placeholder='Saona, Ribes...'
                            id="home"
                            type="text"
                            {...register('homeName')}
                        />
                    </div>

                    <div>
                        <label htmlFor="hub">
                            Hub*
                        </label>
                        <select id="hub" {...register('hub')}>
                            <option hidden defaultValue>Select a Hub </option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Formentera">Formentera</option>
                            <option value="Ibiza">Ibiza</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="market">
                            Micro market*
                        </label>
                        <select id="market" {...register('market')}>
                            <option hidden defaultValue>Select a micro market </option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Formentera">Formentera</option>
                            <option value="Ibiza">Ibiza</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="address">
                            Address*
                        </label>
                        <input
                            placeholder='C/ de Arguensola, 25'
                            id="address"
                            type="text"
                            {...register('address')}
                        />
                    </div>

                    <div>
                        <label htmlFor="coordinates">
                            Coordinates*
                        </label>
                        <input
                            placeholder='latitude, longitude (e.g: 38.7959924, 1.3175908)'
                            id="coordinates"
                            type="text"
                            {...register('coordinates')}
                        />
                    </div>

                    <div>
                        <label htmlFor="price">
                            Price*
                        </label>
                        <input
                            id="price"
                            type="number"
                            {...register('price')}
                        />
                    </div>

                    <div>
                        <label htmlFor="bedrooms">
                            Nº bedrooms*
                        </label>
                        <input
                            id="bedrooms"
                            type="number"
                            {...register('bedrooms')}
                        />
                    </div>

                    <div>
                        <label htmlFor="bathrooms">
                            Nº bathrooms*
                        </label>
                        <input
                            id="bathrooms"
                            type="number"
                            {...register('bathrooms')}
                        />
                    </div>

                    <div>
                        <label htmlFor="homeSQM">
                            Home SQM*
                        </label>
                        <input
                            id="homeSQM"
                            type="number"
                            {...register('homeSQM')}
                        />
                    </div>

                    <div>
                        <label htmlFor="plotSQM">
                            Plot SQM*
                        </label>
                        <input
                            id="plotSQM"
                            type="number"
                            {...register('plotSQM')}
                        />
                    </div>

                    <div>
                        <label htmlFor="homeCollection">
                            Home collection*
                        </label>
                        <select id="homeCollection" {...register('homeCollection')}>
                            <option hidden defaultValue > Select Home Collection </option>
                            <option value="City"> City </option>
                            <option value="Mountain">Mountain</option>
                            <option value="Sea">Sea</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="homeTypes">
                            Home types*
                        </label>
                        <select id="homeTypes" {...register('homeTypes')} >
                            <option hidden defaultValue > Select home type </option>
                            <option value="Piso"> Piso </option>
                            <option value="Villa">Villa</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="homeSubtype">
                            Home subtype*
                        </label>
                        <select id="homeSubtype" {...register('homeSubtype')} >
                            <option hidden defaultValue > Select home subtype </option>
                            <option value="Adosado"> Adosado </option>
                            <option value="Aislado">Aislado</option>
                            <option value="Atico">Ático</option>
                            <option value="Bajo">Bajo</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Pareado">Pareado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="homeStatus">
                            Home status*
                        </label>
                        <select id="homeStatus" {...register('homeStatus')} >
                            <option hidden defaultValue > Select home status </option>
                            <option value="2Mano"> 2º Mano </option>
                            <option value="Aislado">Aislado</option>
                        </select>
                    </div>

                    <div className='furnished'>
                        <input
                            id="furnished"
                            type="checkbox"
                            {...register('isFurnished', { value: 'yes' })}
                        />
                        <label htmlFor="furnished">
                            Mark if the house is furnished
                        </label>
                    </div>

                    <div>
                        <label htmlFor="touristLicense">
                            Tourist license*
                        </label>
                        <select id="touristLicense" {...register('touristLicense')} >
                            <option hidden defaultValue > Select one option </option>
                            <option value="Does not have tourist license"> Does not have a tourist license </option>
                            <option value="Does not have and cannot obtain it"> Does not have and cannot obtain it</option>
                            <option value="Does not have but can obtain it"> Does not have but can obtain it</option>
                            <option value="Has a tourist license"> Has a tourist license</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="images">
                            Add images*
                        </label>
                        <input
                            id="images"
                            type="file"
                            {...register('images')}
                            multiple
                        />
                    </div>

                    <div>
                        <label htmlFor="video">
                            Video URL
                        </label>
                        <input
                            placeholder='Enter video URL'
                            id="video"
                            type="text"
                            {...register('video')}
                        />
                    </div>

                    <div>
                        <label htmlFor="matterport">
                            Matterport URL
                        </label>
                        <input
                            placeholder='Enter matterport URL'
                            id="matterport"
                            type="text"
                            {...register('matterport')}
                        />
                    </div>

                    <div>
                        <label htmlFor="plots">
                            Add plots*
                        </label>
                        <input
                            id="plots"
                            type="file"
                            {...register('plots')}
                            multiple
                        />
                    </div>

                    <div>
                        <label htmlFor="description">
                            Description*
                        </label>
                        <textarea
                            placeholder='Your message...'
                            id="description"
                            {...register('description')}
                        />
                    </div>

                    <div>
                        <label htmlFor="amenities">
                            Amenities (At least three)*
                        </label>
                        <select id="amenities" multiple {...register('amenities')} >
                            <option hidden defaultValue > Add amenities</option>
                            <option value="24/7 Concierge"> 24/7 Concierge</option>
                            <option value="Aerothermia"> Aerothermia</option>
                            <option value="Air conditioning"> Air conditioning</option>
                            <option value="Air conditioning"> Air conditioning</option>
                            <option value="Airport proximity"> Airport proximity</option>
                            <option value="Alarm services"> Alarm services</option>
                            <option value="Barbecue"> Barbecue</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="visibility">
                            Visibility*
                        </label>
                        <select id="visibility" {...register('visibility')} >
                            <option hidden defaultValue > Set visibility </option>
                            <option value="Hidden"> Hidden</option>
                            <option value="Private"> Private</option>
                            <option value="Public"> Public</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="notes">
                            Internal notes
                        </label>
                        <textarea
                            placeholder='If you need add additional data type here :) '
                            id="notes"
                            {...register('internalNotes')}
                        />
                    </div>


                    <button type="submit"> Submit </button>
                </form>
            </section>
        </>
    )
}

export default HomesForm