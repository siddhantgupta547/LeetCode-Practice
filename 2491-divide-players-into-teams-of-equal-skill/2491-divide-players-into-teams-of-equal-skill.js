/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let skills=0
    let map=new Map()
    let result=0
    for(let i=0;i<skill.length;i++){
        skills+=skill[i]
        if(map.has(skill[i])){
            map.set(skill[i],map.get(skill[i])+1)
        }else{
            map.set(skill[i],1)
        }   
    }
    let pairs=skill.length/2
    const eachTeamSkill=skills/pairs
    for(let i=0;i<skill.length;i++){
        const target=eachTeamSkill-skill[i]
        let skillVal;
        let targetVal;
        if(map.has(skill[i])){
            skillVal=map.get(skill[i])
            map.set(skill[i],skillVal-1)
        }
        if(map.has(target)){
            targetVal=map.get(target)
            map.set(target,targetVal-1)
        }
        if(skillVal>0 && targetVal>0){
            result+=skill[i]*target
            pairs--
        }else{
            if(targetVal){
                map.set(target,targetVal)
            } if(skillVal){
            map.set(skill[i],skillVal)
            }
        }
    }
    if(pairs===0){
        return result
    }else{
        return -1
    }
};