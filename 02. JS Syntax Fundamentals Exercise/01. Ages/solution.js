function ageDetermination (age){
    let determinedAge = '';

    if (age >= 0 && age <=2){
        determinedAge = 'baby';
    }
    else if (age >= 3 && age <=13){
        determinedAge = 'child';
    }
    else if (age >= 14 && age <=19){
        determinedAge = 'teenager';
    }
    else if (age >= 20 && age <=65){
        determinedAge = 'adult';
    }
    else if (age >= 66){
        determinedAge = 'elder';
    }
    else {
        determinedAge = 'out of bounds';
    }

    console.log(determinedAge);
}