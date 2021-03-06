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


// ===== DEPTH FIRST SEARCH =====
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

// ===============================


// helper to determine if nested array does not exist
const notIncluded = (arr, value) => {
    if(arr.length === 0) return true;

    const index = arr.findIndex(el => JSON.stringify(el) === JSON.stringify(value));
    if(index === -1) return true;
    return false;
};


// find all possible paths from each neighbor in the way
const findAllPossiblePaths = (graph, start, target) => {
    const paths = [];

    const vertex_and_path = [start, [start]];
    const vertexes_to_visit = [vertex_and_path];
    const visited = [];

    while (vertexes_to_visit.length > 0){
        
        const removed = vertexes_to_visit.splice(0, 1);
        visited.push(removed[0][0]);
        const current_path = removed[0][1];

        for (const neighbor of graph[removed[0][0]]){

            if (!visited.includes(neighbor)){
                
                const current = current_path.slice(0, current_path.length);
                const path = findPossiblePath(graph, neighbor, target, current);
                
                if (path) {
                    vertexes_to_visit.push([neighbor, current_path.concat([neighbor])]);
                    if(notIncluded(paths, path)) paths.push(path);
                };
            };
        };
    };

    return paths;
};

module.exports = {
    flightPaths,
    findAllPossiblePaths
};