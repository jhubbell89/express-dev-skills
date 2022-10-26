const skills = [
    {id: 125223, skill: 'HTML', level: true},
    {id: 127904, skill: 'CSS', level: true},
    {id: 139608, skill: 'Java Script', level: true},
    {id: 159201, skill: 'Espress', level: false}
];
  
module.exports = {
    getAll, 
    getOne,
    deleteOne
};

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
 
function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }