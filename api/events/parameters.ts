import Icons from "../icons";

let icons: any = Icons;

// Parameters Functions
const iconSearch = (data: any) => {
  return data.map((item: any) => {
    return {
      name: item.label,
      data: item,
      icon: createIconSvg({
        ...icons[item.name]?.svgs?.[item.style],
        color: '#818181',
      })
    } as ParameterObject
  })
}
const uppercaseFirstLetter = ([ first, ...rest ]: any) => first.toUpperCase() + rest.join('')
const createIconSvg = (props: {
  path: string;
  viewBox: string[];
  width: string;
  height: string;
  color?: string;
}) => {
  return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${props.width}"
    height="${props.height}"
    viewBox="${props.viewBox.join(" ")}"
  >
    <path d="${props.path}" fill="${props.color}"/>
  </svg>`;
}


// Parameters Actions
const iconParameters = ({ query, result }: ParameterInputEvent) => {
  if (!query) result.setLoadingMessage('Loading icons...');

  figma.showUI(
    `
      <script type="module">
        import algoliasearch from 'https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.esm.browser.js';
      
        const client = algoliasearch("VOW5LML328", "22f7f3f67abdc32c66b9c672a931b2d7");
        const index = client.initIndex("icons");

        let searchData = "${query}";
        
        index
          .search(searchData, {
            facetFilters: [["style:line", "style:brands"]],
          })
          .then(({ hits }) => {
            console.log(hits);
            window.parent.postMessage({
              pluginMessage: {
                type: "algoliaSearch",
                result: hits
              }
            }, "*");
          })
          .catch(err => {
            window.parent.postMessage({
              pluginMessage: {
                type: "algoliaError",
                result: err
              }
            }, "*");
          });
      </script>
    `,
    { visible: false }
  );

  figma.ui.onmessage = (message) => {
    if (message.type === "algoliaSearch") result.setSuggestions(iconSearch(message.result))
    if (message.type === "algoliaError") {
      result.setError("An unexpected error has occurred!")
    }
  };
}
const styleParameters = ({ parameters, result }: ParameterInputEvent) => {

  let styleList = parameters.icon.available.map((style: string) => {
    return {
      name: uppercaseFirstLetter(style),
      data: {
        name: style,
      },
      icon: createIconSvg({
        ...icons[parameters.icon.name]?.svgs?.[style],
        color: '#818181',
      })
    } as ParameterObject
  })

  return result.setSuggestions(styleList)
}

// Parameters Loader
figma.parameters.on("input", (event) => {
  const { key } = event;

  if (key === "icon") iconParameters(event);
  if (key === "style") styleParameters(event);
});
