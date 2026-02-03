import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content="impresión 3d gran formato, relievegt, esculturas 3d guatemala, publicidad volumétrica, bustos personalizados, caricaturas 3d, impresión 3d industrial" />
            <meta name="author" content="RelieveGt" />
            <meta name="theme-color" content="#E5C454" />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="RelieveGt" />
            <meta property="og:image" content="/catalog/bad-bunny/front.jpg" />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/catalog/bad-bunny/front.jpg" />
            {/* End Twitter tags */}
        </Helmet>
    );
}
