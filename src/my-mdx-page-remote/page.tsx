import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default async function RemoteMdxPage() {
  const res = await fetch(
    "https://raw.githubusercontent.com/KomodoPlatform/komodo-docs-mdx/dev/src/pages/komodo-defi-framework/api/legacy/coin_activation/index.mdx",
  );
  const markdown = (await res.text())
    .replaceAll("{{label : 'electrum', tag : 'legacy'}}", "")
    .replaceAll("{{label : 'enable', tag : 'legacy'}}", "");
  return (
    <MDXRemote
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
      components={{
        CodeGroup: (props) => <div {...props}>{props.children}</div>,
        CollapsibleSection: (props) => <div {...props}>{props.children}</div>,
        Note: (props) => <div {...props}>{props.children}</div>,
      }}
      source={markdown}
    />
  );
}
