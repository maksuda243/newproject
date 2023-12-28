const BASE_URL = 'http://localhost/reactcrud/api';

export const Comments = async (blog_id) => {
    try {
        const response = await fetch(`${BASE_URL}/comment.php?blog_id=${blog_id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching comments data: ${error.message}`);
    }
};