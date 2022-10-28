const skills = [
    {id:123456 , skill: 'test', done: false},
    {id:564738 , skill: 'also a test', done: true},
    {id:111111 , skill: 'maybe a test', done: false},
    {id:986543 , skill: 'click at your own danger', done: false},
    {id:123476 , skill: 'so you like tempting the fates', done: false}
];
  
module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    // Ensure the id is copied over
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

