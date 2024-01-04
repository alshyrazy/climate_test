def invert(d):
    print("Original dictionary:\n",d, "\n")
    #define reversed dict
    reversed_dict = dict()
    #loop to store dict values as key in the reversed dict
    for student, courses in d.items():
        for course in courses:
            #check if the value were found discard i
            if course in reversed_dict:
                reversed_dict[course].append(student)
            else:
                reversed_dict[course] = [student]
    #return the reversed dict
    print("Reversed dictionary:")
    return reversed_dict

student_info ={ 
'Stud1': ['CS1101', 'CS2402', 'CS2001'],
'Stud2': ['CS2402','CS2001','CS1102'] 
} 
a = invert(student_info)
print(a)