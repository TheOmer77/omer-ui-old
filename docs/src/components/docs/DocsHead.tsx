import { useConfig } from 'nextra-theme-docs';

const DocsHead = () => {
  const { frontMatter } = useConfig();

  return (
    <>
      {/* Favicons, meta */}
      <meta httpEquiv='Content-Language' content='en' />
      <meta
        name='og:title'
        content={`${frontMatter.title ? `${frontMatter.title} – ` : ''}Omer UI`}
      />
      {frontMatter.description && (
        <>
          <meta name='description' content={frontMatter.description} />
          <meta name='og:description' content={frontMatter.description} />
        </>
      )}
      <meta name='twitter:card' content='summary_large_image' />
    </>
  );
};

export default DocsHead;
