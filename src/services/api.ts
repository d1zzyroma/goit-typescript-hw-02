import axios from 'axios';

interface ImageResult {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

interface SearchImagesResponse {
  results: ImageResult[];
}

export const searchImages = async (
  inputValue: string,
  page: number = 1
): Promise<ImageResult[]> => {
  try {
    const response = await axios.get<SearchImagesResponse>("https://api.unsplash.com/search/photos", {
      params: {
        client_id: "RgCToCUHAeh1oVGNncqL_zBN45r2T6G6CiDRw7tLqnk",
        query: inputValue || "cat",
        page: page,
        per_page: 12, // Specify the number of images per page
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching images:", error);
    throw error;
  }
};
