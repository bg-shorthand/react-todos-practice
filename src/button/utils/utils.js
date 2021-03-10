const publicURL = process.env.PUBLIC_URL;

const svgURL = fileName => `${publicURL}/assets/icons/${fileName}.svg`

export default svgURL;