const API = import.meta.env.VITE_API_BASE_URL;

export async function getCourses() {
    const res = await fetch(`${API}/api/courses`);
    return res.json();
}
