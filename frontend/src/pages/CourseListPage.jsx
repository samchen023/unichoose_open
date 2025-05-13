import { useEffect, useState } from 'react';
import { getCourses } from '../api/courseApi';
import CourseCard from '../components/CourseCard';

function CourseListPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(data => setCourses(data));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">課程列表</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default CourseListPage;
