export const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? text?.substring(0, maxLength) + "..." : text;
};

export function getYouTubeVideoId(url) {
    const match = url.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?]+)/);
    return match ? match[1] : null;
}