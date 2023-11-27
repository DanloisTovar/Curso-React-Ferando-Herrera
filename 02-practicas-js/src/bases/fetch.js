const apiKey = '1I5mQGrImzz5wRXT8OQBMZksvdBF2bLe';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const getGift = fetch(url);

getGift
    .then((res) => res.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)
    .finally(() => {
        console.log('Se termino el proceso');
    });
