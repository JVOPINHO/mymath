const matriz1 = [
    [2, 5, 1],
    [3, 1, 6],
    [1, 4, 7],
];
  
const matriz2 = [
   [6, 5, 1],
   [7, 1, 2],
   [1, 4, 3],
];
  
const baseData = {
    x: 0,
    y: 0,
    n: 0,
};
  
function reta([aX, aY], [bX, bY]) {
    const array = [
        1, "x", "y", aX, aY, bX, bY,
    ];
  
        let results = [calculateMatriz(), calculateMatriz(true)];
    
        console.log(`${normalizerNumber(results[0].x, 'x')}${normalizerNumber(results[0].y, 'y')}${normalizerNumber(results[0].n)}-(${normalizerNumber(results[1].n)}${normalizerNumber(results[1].x, 'x')}${normalizerNumber(results[1].y, 'y')})=0`);
    
        results = [results[0], {
            x: results[1].x * -1,
            y: results[1].y * -1,
            n: results[1].n * -1,
        }];
    
        console.log(`${normalizerNumber(results[0].x, 'x')}${normalizerNumber(results[0].y, 'y')}${normalizerNumber(results[0].n)}${normalizerNumber(results[1].n)}${normalizerNumber(results[1].x, 'x')}${normalizerNumber(results[1].y, 'y')}=0`);
    
        const data = results.reduce((previous, current) => ({
            x: previous.x + current.x,
            y: previous.y + current.y,
            n: previous.n + current.n,
        }), { ...baseData });
        
        console.log(`${normalizerNumber(data.x, 'x', true)}${normalizerNumber(data.y, 'y', true)}${normalizerNumber(data.n, '', true)}=0`)
    
        function calculateMatriz(negativeNumber = false) {
        const datas = [];
        for(const matriz of negativeNumber ? matriz2 : matriz1) {
            const matrizData = {...baseData};
            
            for (const i of matriz) {
                const a = array[i - 1];
                
                if(Number(a)) {
                    if(matrizData['x']) {
                        matrizData['x'] = matrizData['x'] * a;
                    } else if(matrizData['y']) {
                        matrizData['y'] = matrizData['y'] * a;
                    } else {
                        matrizData['n'] = (matrizData['n'] || 1) * a;
                    }
                } else {
                    matrizData[a] = matrizData['n'] || 1;
                    matrizData['n'] = 0;
                }
            }
    
            datas.push(matrizData);
        }
  
        const superData = datas.reduce((previous, current) => ({
            x: previous.x + current.x,
            y: previous.y + current.y,
            n: previous.n + current.n,
        }), { ...baseData });
  
        return superData;
    }
}
  
function normalizerNumber(number, letter = '', f = false) {
    if(number == 0 && f) return '';
      
    return `${number > 0 ? '+' : ''}${number}${letter}`;
}