// src/components/Equation.jsx
import katex from 'katex';

export function Equation({ children, displayMode = true }) {
  const html = katex.renderToString(String(children), {
    throwOnError: false,
    displayMode: displayMode, // true para bloco, false para inline
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}