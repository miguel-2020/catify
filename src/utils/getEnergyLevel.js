export default function getEnergyLevel(energy){
    if(Object.is(null,energy) || Number.isNaN(Number.parseInt(energy))){
      return "Unknown"
    }
    if([0,1,2].includes(energy)){
        return "Somewhat lazy"
    
    }else if([3,4].includes(energy)){
        return "Happy"
    }else if([5,6].includes(energy)){
        return "Very Happy"
    }else if([7,8].includes(energy)){
        return "Extremely Happy"
    }

    return "Too extreme (risk of burnout)"

}