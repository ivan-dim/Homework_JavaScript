let names = ["Bobi", "Toni", "Dzoni"];
let moods = ["good", "bad", "mid"];
let activities = ["reading", "sleeping", "eating"];

function tellStory() {
  for (let i = 0; i < names.length; i++) {
    console.log(
      `This is ${names[i]}. ${names[i]} is a nice person. Today they are ${moods[i]}. They are ${activities[i]} all day. The end.`
    );
  }
}

tellStory();
