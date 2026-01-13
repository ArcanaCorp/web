import { Helmet } from "react-helmet";

export default  function SEO ({title, description, type = 'website', image='https://arcanacorp.netlify.app/og-image.png', url, jsonLd = []}) {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url || window.location.href} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            {url && <meta property="og:url" content={url} />}
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
            {jsonLd.map((item, index) => (
                <script key={index} type="application/ld+json">{JSON.stringify(item)}</script>
            ))}
        </Helmet>
    )
}