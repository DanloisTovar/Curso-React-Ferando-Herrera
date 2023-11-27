const getImages = async () => {
    try {
        const apiKey = '1I5mQGrImzz5wRXT8OQBMZksvdBF2bLe';
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
        const response = await fetch(url);
        const { data } = await response.json();
        const { url: img } = data.images.original;
        const image = document.createElement('img');
        image.src = img;
        document.body.append(image);
    } catch (err) {
        console.error;
    } finally {
        console.log('Fin del proceso');
    }
};
getImages();
console.log;
