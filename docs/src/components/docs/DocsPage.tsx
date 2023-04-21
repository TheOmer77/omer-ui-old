import type { ReactNode } from 'react';
import { useConfig } from 'nextra-theme-docs';

const DocsPage = ({ children }: { children: ReactNode }) => {
  const { frontMatter } = useConfig();

  return (
    <>
      {frontMatter.title && <h1 className='docs-title'>{frontMatter.title}</h1>}
      {frontMatter.description && (
        <p className='docs-description'>{frontMatter.description}</p>
      )}
      {children}
    </>
  );
};

export default DocsPage;
