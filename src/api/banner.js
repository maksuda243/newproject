const BASE_URL = 'http://localhost/reactcrud/api';



export const Banners = async () => {
    try {
        const response = await fetch(`${BASE_URL}/banner.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching blog data: ${error.message}`);
    }
};