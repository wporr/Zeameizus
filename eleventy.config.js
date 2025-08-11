export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  eleventyConfig.addFilter("longDateTime", (dateObj) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
        timeZone: "America/New_York"
      }).format(dateObj);
    } catch (e) {
      return dateObj.toUTCString();
    }
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("content/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      layouts: "src/_includes/layouts",
      data: "src/_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}

