/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
        let maxL = height[0];
        let holdValue1 = 0; 
        let solutionL = 0;
        //solution from left to right until it hits the highest
        for(let i=1; i < height.length; i++){
            let current = height[i];
			//Not counting the first column when the second one is higher than it
            if(i == 1 && maxL < current){ 
                maxL = current;
            }
            if(current >= maxL){
                solutionL = holdValue1;
                maxL = current;
            }
            else{
				//Not counting the last column when the second last is higher than it
                if(i != height.length-1){
                    holdValue1 += (maxL-current);
                }
            }
        }
        //if holdValue1 != solutionL, then we need to run this from right to left
        let maxR = height[height.length-1];//last value in the array
        let holdValue2 = 0; 
        let solutionR = 0;
        if(holdValue1 != solutionL){
           for(let i=height.length-2; i >= 0; i--){
                let current2 = height[i];
                if(i == height.length-2 && maxR < current2){
                    maxR = current2;
                }
                if(current2 > maxR){
                    solutionR = holdValue2;
                    maxR = current2;
                }
                else{
                    holdValue2 += (maxR-current2);
                }
			}
		}
        return solutionL + solutionR;
};