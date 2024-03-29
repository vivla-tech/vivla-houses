import './image-picker.css';

function ImagePicker({ imageFile, onRemoveImage, onRemoveExistingImage }) {

    const obtainNameFromUrl = (url) => {
        const decodedUrl = decodeURIComponent(url);

        const segments = decodedUrl?.split('/');
        const lastSegment = segments[segments.length - 1];

        const fileName = lastSegment.split('?')[0];

        return fileName;
    };

    return (
        <section className='img-container'>
            {imageFile?.map((image) => {
                const isFile = image instanceof File;
                const imageUrl = isFile ? URL.createObjectURL(image) : image;
                const imageName = isFile ? image.name : obtainNameFromUrl(imageUrl);

                return (
                    <div key={imageName}>
                        <img src={imageUrl} alt={`Preview ${imageName}`} />
                        <p className='file-name'>{imageName}</p>
                        <button type='button' onClick={() => {
                            isFile
                                ? onRemoveImage(imageName)
                                : onRemoveExistingImage(imageUrl)
                        }}>
                            Remove
                        </button>
                    </div>
                );
            })}
        </section>
    )
}

export default ImagePicker