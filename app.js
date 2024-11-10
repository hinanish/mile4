var _a;
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b;
    var picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    ;
    var generatedResume = "\n        <div>\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(pictureURL, "\" alt=\"Profile Picture\" width=\"120\" height=\"140\"><br>\n            <b>Phone:</b> ").concat(phone, "<br>\n            <b>Email:</b> ").concat(email, "<br>\n            <b>Address:</b> ").concat(address, "<br><br>\n            <b>Skills: </b><div id=\"skillsList\">").concat(skills, "</div><br>\n            <button id=\"</b>addSkillBtn\" class=\"button-hover\">Add More Skills</button> <br>\n            <b>Education:</b> <div id=\"educationList\">").concat(education, "</div><br>\n            <button id=\"addEducationBtn\" class=\"button-hover\">Add More Education</button><br>\n            <b>Experience:</b> <div id=\"experienceList\">").concat(experience, "</div><br>\n            <button id=\"addExperienceBtn\" class=\"button-hover\">Add More Experience</button><br>\n        </div>\n    ");

    var resumeContainer = document.getElementById('generatedResume');
    resumeContainer.innerHTML = generatedResume;
    resumeContainer.classList.add('slide-from-left'); 
    
    addDyEventListeners();
});

function addDyEventListeners() {
    var _a, _b, _c;
    
    (_a = document.getElementById('addSkillBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var additionalSkillsDiv = document.getElementById('additionalSkills');
        var newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.placeholder = 'Additional Skill';
        newSkillInput.classList.add('input-field');
        additionalSkillsDiv === null || additionalSkillsDiv === void 0 ? void 0 : additionalSkillsDiv.appendChild(newSkillInput);
        
        newSkillInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        newSkillInput.addEventListener('change', function () {
            var skillsList = document.getElementById('skillsList');
            if (skillsList) {
                skillsList.innerHTML += "<br>".concat(newSkillInput.value);
            }
        });
    });
    
    (_b = document.getElementById('addEducationBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var additionalEducationDiv = document.getElementById('additionalEducation');
        var newEducationInput = document.createElement('textarea');
        newEducationInput.placeholder = 'Additional Education';
        newEducationInput.classList.add('input-field');
        additionalEducationDiv === null || additionalEducationDiv === void 0 ? void 0 : additionalEducationDiv.appendChild(newEducationInput);
    
        newEducationInput.addEventListener('change', function () {
            var educationList = document.getElementById('educationList');
            if (educationList) {
                educationList.innerHTML += "<br>".concat(newEducationInput.value);
            }
        });
    });
    
    (_c = document.getElementById('addExperienceBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var additionalExperienceDiv = document.getElementById('additionalExperience');
        var newExperienceInput = document.createElement('textarea');
        newExperienceInput.placeholder = 'Additional Experience';
        newExperienceInput.classList.add('input-field');
        additionalExperienceDiv === null || additionalExperienceDiv === void 0 ? void 0 : additionalExperienceDiv.appendChild(newExperienceInput);
        
        newExperienceInput.addEventListener('change', function () {
            var experienceList = document.getElementById('experienceList');
            if (experienceList) {
                experienceList.innerHTML += "<br>".concat(newExperienceInput.value);
            }
        });
    });
}
