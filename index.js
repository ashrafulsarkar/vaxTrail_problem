// Trail Bongo vax
function vaxTrail(data) {
    let finalObject = {};
    let dataA = [];
    let dataB = [];
    let dataC = [];
    let dataD = [];
    for (const property of data) {
        const {name, age, temperature} = property;
        if(temperature < 100){
            if (age>=20 && age<=30) {
                const value = { name: name, age: age, temperature: temperature };
                dataA.push(value);
            }else if(age>=31 && age<=40){
                const value = { name: name, age: age, temperature: temperature };
                dataB.push(value);
            }else if(age>=41 && age<=50){
                const value = { name: name, age: age, temperature: temperature };
                dataC.push(value);
            }
        }else{
            const value = { name: name, age: age, temperature: temperature };
            dataD.push(value);
        }
    }
    finalObject = { A: dataA, B: dataB, C: dataC, D: dataD };
    return finalObject;
}