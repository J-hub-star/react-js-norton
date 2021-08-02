
export default function filterDataOprhanPlanets(planetData)
{
    var result = planetData.filter(d => d.TypeFlag > 2) ;
    return result;
};
