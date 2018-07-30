// Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)

var mentor  = {
    name: "Julie",
    age: 45,
    specialties: [
        {
            nameSpecialty: "Secondary Education",
            certificate:{
                schoolName: "UofU",
                dateOfDeploma: "July 1990",
                titleOfDeploma: "Master of Education",
            },
            referals: {
                name: "John Doe",
                professionalTitle: "Dean of UofU",
                letterUploaded: true,
            }
        }
    ],
    interests: ["programming", "singing", "tennis", "soccer"],
    
    projectsInterestedIn: {
        math: true,
        science: true,
        crafts: false,
        swimming: false,
        dance: false,
        chess: true,
        basketball: false,
        soccer: true,
        interests: function(){
            console.log(mentor.name + " wants to teach?" + this.math)
        }
    },
    
   
    choiceOfLocation: [
       {city: "sacramento",
        isTrue: false,
       },
        {city : "San Jose", 
        isTrue : false
        },
        {city : "Tampa", 
        isTrue : false
        },
        {city : "Miami", 
        isTrue : false
        },
        {city : "Salt Lake City", 
        isTrue : false
        },
        {city : "Logan", 
        isTrue : false
        },
        
    ],
    
    findCity : function(){
         for (i = 0; i < mentor.choiceOfLocation.length; i ++) {
             if (mentor.choiceOfLocation[i].isTrue === true){
                console.log(mentor.name + "wants to volunteer in " + mentor.choiceOfLocation[i].city);    
             }
             
         }
        
        

    }
}


mentor.projectsInterestedIn.interests();
mentor.findCity()