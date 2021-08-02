import getMax from './getMax';

export default function newHotPlanet(json)
    {
        var maxPpg = getMax(json, "HostStarTempK");
       return maxPpg;
    }