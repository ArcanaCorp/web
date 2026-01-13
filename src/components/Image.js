export default function Image ({ url, alt, loading='lazy', decoding='async' }) {
    return (
        <picture>
            <img src={url} alt={alt} loading={loading} decoding={decoding} draggable={"false"} />
        </picture>
    )
}