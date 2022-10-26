 // controllers/skills.js

 // Should name the model in uppercase and singular
 const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    delete: deleteSkill
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

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}