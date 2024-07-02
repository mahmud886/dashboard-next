export const getYouTubeVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    return searchParams.get("v"); // Get the value of 'v' parameter which is the video ID
  } catch (error) {
    // console.error("Error parsing YouTube URL:", error);
    return null; // Return null if parsing fails
  }
};