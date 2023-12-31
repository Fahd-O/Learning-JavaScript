{
    let grades = [12, 32, 41, 19, 21, 12, 23];
    grades.length = 30;

    for (let i = 0; i < grades.length; i++)
    {
        console.log(grades[i]);
    }

    grades.forEach(function(elimenti){console.log(elimenti);});

    grades.forEach(function(elimenti, j){console.log(elimenti, j);});

    grades.forEach(function(elimenti, i, array){console.log(elimenti, i, array);});
    
}