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
                dataA.sort(function (a, b) {
                    return a.age % 2 - b.age % 2;
                });
            }else if(age>=31 && age<=40){
                const value = { name: name, age: age, temperature: temperature };
                dataB.push(value);
                dataB.sort(function (a, b) {
                    return a.age % 2 - b.age % 2;
                });
            }else if(age>=41 && age<=50){
                const value = { name: name, age: age, temperature: temperature };
                dataC.push(value);
                dataC.sort(function (a, b) {
                    return a.age % 2 - b.age % 2;
                });
            }
        }else{
            const value = { name: name, age: age, temperature: temperature };
            dataD.push(value);
            dataD.sort(function (a, b) {
                return a.age % 2 - b.age % 2;
            });
        }
    }
    finalObject = { A: dataA, B: dataB, C: dataC, D: dataD };
    return finalObject;
}