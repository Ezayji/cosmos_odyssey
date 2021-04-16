// export  
export const flightPaths = {
    'Mercury': ['Venus'],
    'Venus': ['Mercury', 'Earth'],
    'Earth': ['Uranus', 'Jupiter'],
    'Mars': ['Venus'],
    'Jupiter': ['Venus', 'Mars'],
    'Saturn': ['Earth', 'Neptune'],
    'Uranus': ['Saturn', 'Neptune'],
    'Neptune': ['Mercury', 'Uranus']
};

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

// console.log(findPossiblePath(flightPaths, 'Jupiter', 'Mercury'))

const findPossiblePaths = (graph, current, target) => {

};