export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/icons");
	eleventyConfig.addPassthroughCopy("./src/images");
	eleventyConfig.addPassthroughCopy("./src/manifest.json");
	eleventyConfig.addPassthroughCopy("./src/sw.js");
};