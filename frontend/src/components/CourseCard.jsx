function CourseCard({ course }) {
    return (
        <div className="p-4 border rounded shadow">
            <h2 className="text-lg font-bold">{course.name}</h2>
            <p>{course.description}</p>
        </div>
    );
}

export default CourseCard;
