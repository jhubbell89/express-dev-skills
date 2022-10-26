 // controllers/skills.js

 // Should name the model in uppercase and singular
 const Skill = require('../models/skills');

module.exports = {
    index
};
  
function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
}
 
function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
}
