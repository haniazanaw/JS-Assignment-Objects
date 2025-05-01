// 1. Create a User object with properties like name, stepsWalked (an array of daily steps), and a method 
// totalSteps() that calculates and returns the total number of steps walked. Add another method
//  averageSteps() that returns the average steps per day.

// Pseudocode
// 1.Create a constructor with properties name, steps walked whereby the name is a string steps walked as an array.
// 2.  Create a function that sums up the total steps walked.
// 3.  Create another function that takes in the sum of the steps and divides to the length of the steps walked array to give an average.
// 4.  Print out both values the total steps and the average.



function User(name, stepsWalked) {
    this.name = name;
    this.stepsWalked = stepsWalked;
    this.totalSteps = function() {
      return this.stepsWalked.reduce((total, steps) => total + steps, 0);
    };
  
    this.averageSteps = function() {
      if (this.stepsWalked.length === 0) return 0;
      return this.totalSteps() / this.stepsWalked.length;
    };
  }
  
 
  const user1 = new User("Hasset", [3500, 5000, 2000, 7000, 5500]);
  
  console.log("Total steps:", user1.totalSteps()); 
  console.log("Average steps:", user1.averageSteps()); 

//   2.Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method 
//      displayRecipe() that logs the name and all ingredients in a readable list, and another method 
//       isQuickMeal() that returns true if cookTime is 30 minutes or less.


// Pseudocode
// 1.Create an object with attributes name a string, ingredients as an array, and cook time as a number
// 2.Create a function that logs name and ingredients
// 3.Create a function that returns a boolean to a condition if the cook time is greater or less than 30 mins
// 4.Log both functions


  function Recipe(name, ingredients, cookTime) {
  this.name = name;
  this.ingredients = ingredients;
  this.cookTime = cookTime;

  this.displayRecipe = function() {
    console.log(`Recipe: ${this.name}`);
    console.log("Ingredients:");
    this.ingredients.forEach((ingredient, index) => {
      console.log(`${index + 1}. ${ingredient}`);
    });
    console.log(`Cook Time: ${this.cookTime} minutes`);
   };

   this.isQuickMeal = function() {
    return this.cookTime <= 30;
   };
 }

 
  const wrap = new Recipe("Chicken wrap", ["flour", "chicken", "sauce","Garlic", "Cheese", "Salt"], 20);

  wrap.displayRecipe(); 
   console.log("Is it a quick meal?", wrap.isQuickMeal()); 



  //  3. Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
  //  Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.

  // Pseudocode
  // 1.Create an object car with attributes model/string, mileage/Number, service history/array of strings,
  // 2.Create 2 functions for add service and the most recent service date
  // 3.Call both function and log


  const Car = {
    model:"Subaru Forester",
    mileage:70000,
    serviceHistory:["2020-01-25","2022-01-10"],
    addService:function(date){
        this.serviceHistory.push(date);
    },
    lastServiceDate: function(){
        if (this.serviceHistory.length === 0){
            return "No service records.";
        }
        return this.serviceHistory[this.serviceHistory.length-1];
    }
};
Car.addService("2024-01-20");
console.log("Last Service Date: ",Car.lastServiceDate());

   
  //  4.Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title)
  //   to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.

// Pseudocode
// 1.create a Playlist object with:songs(list of song titles)
//2.Define method addSong(title)
//3.Add title to songs list
//4.Add method removeSong(title)
//5.Find index of title in songs
//6.If found, remove it from songs list
//7.Define method listSongs();For each song in songs list
//8. Invoke the functions



  function Playlist() {
    this.songs = [];
  
    this.addSong = function(title) {
      this.songs.push(title);
      console.log(`"${title}" has been added to the playlist.`);
    };
  
    this.removeSong = function(title) {
      const index = this.songs.indexOf(title);
      if (index !== -1) {
        this.songs.splice(index, 1);
        console.log(`"${title}" has been removed from the playlist.`);
      } else {
        console.log(`"${title}" not found in the playlist.`);
      }
    };
  
    this.listSongs = function() {
      if (this.songs.length === 0) {
        console.log("The playlist is empty.");
      } else {
        console.log("Playlist songs:");
        this.songs.forEach((song, i) => {
          console.log(`${i + 1}. ${song}`);
        });
      }
    };
  }

  const myPlaylist = new Playlist();
  myPlaylist.addSong("Believe");
  myPlaylist.addSong("Boys of Faith");
  myPlaylist.addSong("Take me Home");
  myPlaylist.addSong("All the Love");
  myPlaylist.removeSong("All the Love");
  myPlaylist.removeSong("Boys of Faith");
  myPlaylist.listSongs();
  

  // 5. Create a Course constructor with title, lessons (an array), and completedLessons (array). 
  // Add a method markComplete(lesson) that adds the lesson to completedLessons, and a method 
  // getProgress() that returns a string like "3 out of 5 lessons completed".


  // 1. Define a constructor with:title,lessons(list of lessons),completedLessons(empty list) Inside Course:
//2.Define method markComplete(lesson)
//3.If lesson is in lessons and not already in completedLessons:Add lessons to  completedLessons
//4.Define method getProgress():
//5.Return "number of completed"as a string
//6.Create a new Course object whic contains functions,arrays objects

  function Course(title, lessons) {
    this.title = title;
    this.lessons = lessons;
    this.completedLessons = [];
  
    this.markComplete = function(lesson) {
      if (this.lessons.includes(lesson) && !this.completedLessons.includes(lesson)) {
        this.completedLessons.push(lesson);
        console.log(`Lesson "${lesson}" marked as completed.`);
      } else if (this.completedLessons.includes(lesson)) {
        console.log(`Lesson "${lesson}" is already completed.`);
      } else {
        console.log(`Lesson "${lesson}" not found in the course.`);
      }
    };
  
    this.getProgress = function() {
      return `${this.completedLessons.length} out of ${this.lessons.length} lessons completed`;
    };
  }
  
  const jsCourse = new Course("JavaScript Basics", [
    "Variables",
    "Functions",
    "Loops",
    "Objects",
    "Arrays"
  ]);
  
  jsCourse.markComplete("Functions");
  jsCourse.markComplete("Arrays");
  jsCourse.markComplete("Objects");
  
  console.log(jsCourse.getProgress()); 
  

  
  
  
  

  




  
  
  