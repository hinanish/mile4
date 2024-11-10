document.getElementById('generateBtn')?.addEventListener('click', function () {
    const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    let pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    };

    const generatedResume = `
        <div>
            <h2>${name}</h2>
            <img src="${pictureURL}" alt="Profile Picture" width="120" height="140"><br>
            <b>Phone:</b> ${phone}<br>
            <b>Email:</b> ${email}<br>
            <b>Address:</b> ${address}<br><br>
            <b>Skills: </b><div id="skillsList">${skills}</div><br>
            <button id="</b>addSkillBtn" class="button-hover">Add More Skills</button> <br>
            <b>Education:</b> <div id="educationList">${education}</div><br>
            <button id="addEducationBtn" class="button-hover">Add More Education</button><br>
            <b>Experience:</b> <div id="experienceList">${experience}</div><br>
            <button id="addExperienceBtn" class="button-hover">Add More Experience</button><br>
        </div>
    `;

    const resumeContainer = document.getElementById('generatedResume') as HTMLElement;
    resumeContainer.innerHTML = generatedResume;
    resumeContainer.classList.add('slide-from-left');  
    addDyEventListeners();
});


function addDyEventListeners() {
    
    document.getElementById('addSkillBtn')?.addEventListener('click', function () {
        const additionalSkillsDiv = document.getElementById('additionalSkills');
        const newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.placeholder = 'Additional Skill';
        newSkillInput.classList.add('input-field');
        additionalSkillsDiv?.appendChild(newSkillInput);

        newSkillInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

        newSkillInput.addEventListener('change', function () {
            const skillsList = document.getElementById('skillsList');
            if (skillsList) {
                skillsList.innerHTML += `<br>${newSkillInput.value}`;
            }
        });
    });

    document.getElementById('addEducationBtn')?.addEventListener('click', function () {
        const additionalEducationDiv = document.getElementById('additionalEducation');
        const newEducationInput = document.createElement('textarea');
        newEducationInput.placeholder = 'Additional Education';
        newEducationInput.classList.add('input-field');
        additionalEducationDiv?.appendChild(newEducationInput);


        newEducationInput.addEventListener('change', function () {
            const educationList = document.getElementById('educationList');
            if (educationList) {
                educationList.innerHTML += `<br>${newEducationInput.value}`;
            }
        });
    });

    
    document.getElementById('addExperienceBtn')?.addEventListener('click', function () {
        const additionalExperienceDiv = document.getElementById('additionalExperience');
        const newExperienceInput = document.createElement('textarea');
        newExperienceInput.placeholder = 'Additional Experience';
        newExperienceInput.classList.add('input-field');
        additionalExperienceDiv?.appendChild(newExperienceInput);

        newExperienceInput.addEventListener('change', function () {
            const experienceList = document.getElementById('experienceList');
            if (experienceList) {
                experienceList.innerHTML += `<br>${newExperienceInput.value}`;
            }
        });
    });
}
