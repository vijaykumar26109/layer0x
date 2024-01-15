import statistics

def calculate_statistics(students_data):
    # Dictionary to store individual grades for each subject
    subject_grades = {grade["subject"]: [] for student in students_data for grade in student["grades"]}

    # List to store individual grades for each student
    student_grades = []

    # Loop through each student's grades
    for student in students_data:
        # Calculate average grade for the student
        student_grade = sum(grade["grade"] for grade in student["grades"]) / len(student["grades"])
        student_grades.append(student_grade)

        # Store each grade in the respective subject's list
        for grade in student["grades"]:
            subject_grades[grade["subject"]].append(grade["grade"])

    # Calculate average grades for each subject
    average_subjects = [statistics.mean(subject_grades[subject]) for subject in subject_grades]

    # Calculate overall average grade
    overall_average = statistics.mean(student_grades)

    # Calculate standard deviation of grades across all students
    std_deviation = statistics.stdev(student_grades)

    # Return the results as a dictionary
    return {
        "average_grades": student_grades,
        "average_subjects": average_subjects,
        "overall_average": overall_average,
        "std_deviation": std_deviation
    }

# Example usage with the provided data
students_data = [
    {
        "name": "John Doe",
        "grades": [
            {"subject": "Math", "grade": 90},
            {"subject": "English", "grade": 85},
            {"subject": "Science", "grade": 92},
            {"subject": "History", "grade": 88},
            {"subject": "Art", "grade": 95}
        ]
    },
    {
        "name": "Jane Smith",
        "grades": [
            {"subject": "Math", "grade": 88},
            {"subject": "English", "grade": 92},
            {"subject": "Science", "grade": 87},
            {"subject": "History", "grade": 90},
            {"subject": "Art", "grade": 93}
        ]
    },
    {
        "name": "Bob Johnson",
        "grades": [
            {"subject": "Math", "grade": 78},
            {"subject": "English", "grade": 85},
            {"subject": "Science", "grade": 80},
            {"subject": "History", "grade": 88},
            {"subject": "Art", "grade": 82}
        ]
    }
]

# Call the function and store the result
result = calculate_statistics(students_data)

# Print the result
print(result)
