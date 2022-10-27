 // controllers/skills.js

 // Should name the model in uppercase and singular
 const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
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

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  
  res.render('skills/edit');
}