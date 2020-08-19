
let about = document.querySelector(".about");
about.innerHTML = "<h1>My Profile</h1><br/><p>Hi! My name is <b>Ugoh Ifeanyi</b>. A Student from the University of Lagos (UNILAG), Nigeria. As an Electrical and Electronics Engineering student, I also do Website designing with great diligence and hardwork. I always seek challenging Projects or Organisations where I can use my skills for the success of the company. I speak English Language, and I love to Sing, listen to music, Draw and Dance.</p>"
// Creating element and textNode for Education
let education = document.querySelector(".education");

let educationChild1 = document.createElement("p");
educationChild1.innerHTML = "<h1>Education</h1><br/><p><strong><li>NURSERY & PRIMARY SCHOOL:</strong>TUNKEM International School (September 2002 - July 2009).</li></p>";

let educationChild2 = document.createElement("p");
educationChild2.innerHTML = "<li><strong>JUNIOR SECONDARY SCHOOL:</strong> Gbagada Comprehensive Junior High School (September 2009 - July 2012).</li>";

let educationChild3 = document.createElement("p");
educationChild3.innerHTML = "<li><strong>SENIOR SECONDARY SCHOOL:</strong> Gbagada Senior Grammar School (September 2012 - July 2015).</li>";

let educationChild4 = document.createElement("p");
educationChild4.innerHTML = "<li><strong>TERTIARY:</strong> University of Lagos (October 2015 - Date).</li>";

education.appendChild(educationChild1);
education.appendChild(educationChild2);
education.appendChild(educationChild3);
education.appendChild(educationChild4);

let slider = document.querySelector("#slider");
function move(){
    let num = 0;
    let t = setInterval(next,5000);
// Image Array
    let images = [
        "realImage1.jpg",
        "realImage2.jpg",
        "realImage5.jpg",
        "realImage3.jpg",
        "realImage4.jpg"
    ]
    
    function next(){
        num++;
        
        if(num < images.length & num >= 0){
            slider.src = images[num];
            
        }
        else{
            num = 0;
            slider.src = images[num];
        }
    }
}

move(); //Calling Automatic Image Slider

let skill = document.querySelector(".skill");
let skillsChild1 = document.createElement("p");
skillsChild1.innerHTML = "<h1>Skills & Achievement</h1><br/><p><strong><span>HTML</span><span>Good Communication Skills</span><span>JAVASCRIPT</span><span>USSER SUPPORT</span><span>CSS</span><span>Local Meeting Set-Up</span><span>Borehole Drilling</span><span>Video Conferencing</span><span>Digital Marketing</span><span>HUET Certified</span><span>Staging/Imaging Workstations</span><span>Oral Presentation skills</span><span>Asset Management</span><span>Inventory Handling</span><span>Website Design</span><span>Graphics Design</span></p>";
skill.appendChild(skillsChild1);
//Changing the Year for the CopyRight automatically
let date = new Date();
const copyRight = document.querySelector(".copyRight");
copyRight.innerHTML = "CopyRight &copy;" + date.getFullYear() + "<i> powered by </i> BinCom Dev Center";
//Display on Smaller screens

