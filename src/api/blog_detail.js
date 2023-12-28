const BASE_URL = 'http://localhost/reactcrud/api';



export const Blog_detail = async (id) => {
    try {
        const response = await fetch(`${global.config.apiUrlL}/blog_details.php?id=${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching blog data: ${error.message}`);
    }
};