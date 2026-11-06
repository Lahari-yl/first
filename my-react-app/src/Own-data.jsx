function Own() {
    const stu = [
        { id: 1, name: "john",age:31 },
        {id:2,name:"kishan",age:21}
    ];

    return (
        <>
            <h1>Student</h1>

            {stu.map((student) => {
                return (
                    <div key={student.id}>
                        <h2>{student.name}</h2>
                        <h2>{student.age}</h2>
                    </div>
                );
            })}
        </>
    );
}

export default Own;