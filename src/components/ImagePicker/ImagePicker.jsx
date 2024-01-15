import './image-picker.css';

function ImagePicker({ imageFile }) {
    return (
        <section className='img-container'>
            {imageFile?.map((image) => (
                <div key={image.name}>
                    <img src={URL.createObjectURL(image)} alt={`Preview ${image.name}`} />
                    <p className='file-name'>{image.name}</p>
                </div>
            ))}
        </section>
    )
}

export default ImagePicker