let animal = {
    name: prompt("Enter animal name"),
    kind: prompt("Enter animal kind"),
    speak: function(message) {
        console.log(`${this.kind} says '${message}'`);
    }
};

animal.speak("Yo"); 
