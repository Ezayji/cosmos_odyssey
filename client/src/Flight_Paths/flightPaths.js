// export  
const flightPaths = {
    'Mercury': ['Venus'],
    'Venus': ['Mercury', 'Earth'],
    'Earth': ['Uranus', 'Jupiter'],
    'Mars': ['Venus'],
    'Jupiter': ['Venus', 'Mars'],
    'Saturn': ['Earth', 'Neptune'],
    'Uranus': ['Saturn', 'Neptune'],
    'Neptune': ['Mercury', 'Uranus']
};

// distances
// Earth -> Jupiter 628730000
// Earth -> Uranus 2723950000
// Mercury -> Venus 50290000
// Venus -> Mercury 50290000
// Venus -> Earth 41400000
// Mars -> Venus 119740000
// Jupiter -> Mars 550390000
// Jupiter -> Venus 670130000
// Saturn -> Earth 1275000000
// Satrun -> Neptune 3076400000
// Uranus -> Saturn 1448950000
// Uranus -> Neptune 1627450000
// Neptune -> Uranus 1627450000
// Neptune -> Mercury 4443090000

const findPossiblePath = (graph, current, target, visited=[]) => {
    
    visited.push(current);
     
    if(current === target){ 
        return visited
    }

    for(const vertex of graph[current]){
    
        if(!visited.includes(vertex)){
              
            const path = findPossiblePath(graph, vertex, target, visited);
            if (path) return path;
            
        };
        
    };
    
    visited.pop();
    
};

console.log(findPossiblePath(flightPaths, 'Jupiter', 'Mercury'))

const findPossiblePaths = (graph, current, target) => {

};