import './image-picker.css';

function ImagePicker({ imageFile, onRemoveImage }) {
    return (
        <section className='img-container'>
            {imageFile?.map((image, index) => (
                <>
                    <div key={image.name}>
                        <img src={URL.createObjectURL(image)} alt={`Preview ${image.name}`} />
                        <p className='file-name'>{image.name}</p>
                    </div>
                    <button type='button' onClick={() => onRemoveImage(index, image.name)}>
                        Remove
                    </button>
                </>
            ))}
        </section>
    )
}

export default ImagePicker