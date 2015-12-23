var addresses = [{ //0
  "venue": "South Parade Baptish Church",
  "street": "Kirkstall Lane",
  "city": "Leeds",
  "county": "West Yorkshire",
  "postcode": "LS6 3LF",
  "longditude": 1.581807,
  "latitude": 53.819683
}, { // 1
  "venue": "Brigshaw High School",
  "street": "",
  "city": "Kippax",
  "county": "West Yorkshire",
  "postcode": "WF10 2HR",
  "longditude": -1.384448,
  "latitude": 53.757327
}, { // 2
  "venue": "Kirkstall Abbey",
  "street": "",
  "city": "Leeds",
  "county": "West Yorkshire",
  "postcode": "LS5 3SB",
  "longditude": -1.608547,
  "latitude": 53.825588
}, { // 3
  "venue": "Drighlington",
  "street": "Moorland Road ",
  "city": "Bradford",
  "county": "West Yorkshire",
  "postcode": "BD11 1JY",
  "longditude": -1.663417,
  "latitude": 53.753805
}, { // 4
  "venue": "Airedale Academy",
  "street": "",
  "city": "Castleford",
  "county": "West Yorkshire",
  "postcode": "WF10 3JU",
  "longditude": -1.311235,
  "latitude": 53.721147
}, { // 5
  "venue": "Roundhay Park",
  "street": "Princes Avenue",
  "city": "Leeds",
  "county": "West Yorkshire",
  "postcode": "",
}, { // 6
  "venue": "Temple Newsam",
  "street": "",
  "city": "Leeds",
  "county": "West Yorkshire",
  "postcode": "LS15 0AE",
  "longditude": -1.459710,
  "latitude": 53.784330
}, { // 7
  "venue": "Westroyd Park Farsley",
  "street": "",
  "city": "Leeds",
  "county": "West Yorkshire",
  "postcode": "LS28 5AS",
  "longditude": -1.670865,
  "latitude": 53.808006
}, { // 8
  "venue": "Baildon Rugby Club",
  "street": "Jenny Lane, Shipley",
  "city": "Bradford",
  "county": "West Yorkshire",
  "postcode": "BD17 6RS",
  "longditude": -1.762082,
  "latitude": 53.856630
}, { // 9
  "venue": "Goals Sheffield",
  "street": "95 Norfolk Park Road",
  "city": "Sheffield",
  "county": "South Yorkshire",
  "postcode": "S2 2RU",
  "longditude": -1.455517,
  "latitude": 53.373101
}, { // 10
  "venue": "Hillsborough Park",
  "street": "",
  "city": "Sheffield",
  "county": "South Yorkshire",
  "postcode": ""
}, { // 11
  "venue": "Millhouses Park",
  "street": "",
  "city": "Sheffield",
  "county": "South Yorkshire",
  "postcode": "S7 2QN",
  "longditude": -1.498682,
  "latitude": 53.345065
}, { // 12
  "venue": "Knavesmire",
  "street": "Knavesmire Road",
  "city": "York",
  "county": "North Yorkshire",
  "postcode": "YO24 1DJ",
  "longditude": -1.098712,
  "latitude": 53.949602
}, { // 13
  "venue": "All Saints Catholic College",
  "street": "Bradley Road",
  "city": "Huddersfield",
  "county": "",
  "postcode": "HD2 2JT",
  "longditude": -1.772124,
  "latitude": 53.678399
}];

var locations = [{
  "name": "Kirkstall Abbey",
  "address": { // 2
    "venue": "Kirkstall Abbey",
    "street": "",
    "city": "Leeds",
    "county": "West Yorkshire",
    "postcode": "LS5 3SB",
    "longditude": -1.608547,
    "latitude": 53.825588
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Headingley",
  "address": { //0
    "venue": "South Parade Baptish Church",
    "street": "Kirkstall Lane",
    "city": "Leeds",
    "county": "West Yorkshire",
    "postcode": "LS6 3LF",
    "longditude": 1.581807,
    "latitude": 53.819683
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Temple Newsam",
  "address": { // 6
    "venue": "Temple Newsam",
    "street": "",
    "city": "Leeds",
    "county": "West Yorkshire",
    "postcode": "LS15 0AE",
    "longditude": -1.459710,
    "latitude": 53.784330
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Farsley",
  "address": { // 7
    "venue": "Westroyd Park Farsley",
    "street": "",
    "city": "Leeds",
    "county": "West Yorkshire",
    "postcode": "LS28 5AS",
    "longditude": -1.670865,
    "latitude": 53.808006
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Kippax",
  "address": { // 1
    "venue": "Brigshaw High School",
    "street": "",
    "city": "Kippax",
    "county": "West Yorkshire",
    "postcode": "WF10 2HR",
    "longditude": -1.384448,
    "latitude": 53.757327
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Airedale Academy",
  "address": { // 4
    "venue": "Airedale Academy",
    "street": "",
    "city": "Castleford",
    "county": "West Yorkshire",
    "postcode": "WF10 3JU",
    "longditude": -1.311235,
    "latitude": 53.721147
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "The Knavesmire",
  "address": { // 12
    "venue": "Knavesmire",
    "street": "Knavesmire Road",
    "city": "York",
    "county": "North Yorkshire",
    "postcode": "YO24 1DJ",
    "longditude": -1.098712,
    "latitude": 53.949602
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Hillsborough Park",
  "address": { // 10
    "venue": "Hillsborough Park",
    "street": "",
    "city": "Sheffield",
    "county": "South Yorkshire",
    "postcode": ""
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Millhouses Park",
  "address": { // 11
    "venue": "Millhouses Park",
    "street": "",
    "city": "Sheffield",
    "county": "South Yorkshire",
    "postcode": "S7 2QN",
    "longditude": -1.498682,
    "latitude": 53.345065
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "All Saints Catholic College",
  "address": { // 13
    "venue": "All Saints Catholic College",
    "street": "Bradley Road",
    "city": "Huddersfield",
    "county": "",
    "postcode": "HD2 2JT",
    "longditude": -1.772124,
    "latitude": 53.678399
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Baildon Rugby Club",
  "address": { // 8
    "venue": "Baildon Rugby Club",
    "street": "Jenny Lane, Shipley",
    "city": "Bradford",
    "county": "West Yorkshire",
    "postcode": "BD17 6RS",
    "longditude": -1.762082,
    "latitude": 53.856630
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}, {
  "name": "Drighlington Moor",
  "address": { // 3
    "venue": "Drighlington",
    "street": "Moorland Road ",
    "city": "Bradford",
    "county": "West Yorkshire",
    "postcode": "BD11 1JY",
    "longditude": -1.663417,
    "latitude": 53.753805
  },
  "image": null,
  "active": true,
  "outdoor": true,
  "indoor": false
}];

if (ClassLocation.find().count() === 0) {
  _.each(locations, function (location) {
    ClassLocation.insert(location);
    console.log("new location added: ", location.name);
  });
}

var instructors = [{
  "name": "Paul Smith",
  "role": "Owner and Instructor Trainer",
  "locations": [],
  "bio": "Paul is a motivational, enthusiastic, fun and adaptable trainer. He provides sessions and classes that adapt to your needs; whether you are a complete beginner or want to take your fitness to the next level. You’ll be pushed to your personal limits.",
  "specialities": [
    "Fun workouts – Group training – Sport Specific Training",
    "ViPR Training",
    "Weight Loss – Healthy Living",
    "Safe Exercise and Injury Prevention",
    "Pre-Post Natal"
  ],
  "image": "image/instructors/paul-smith.jpg",
  "social": {
    "facebook": "https://www.facebook.com/ukoutdoorfitness",
    "twitter": "https://twitter.com/fitnessleeds",
    "linkedin": "http://uk.linkedin.com/pub/paul-smith/18/2a4/904"
  }
}, {
  "name": "Lynn Moorhouse",
  "role": "Office Manager and Instructor",
  "locations": [],
  "bio": "Lynn is one of our longest serving trainers starting at Baildon Bootcamp and now running sessions all over West Leeds and Baildon. Lynn is a high class levels 3 personal trainer and group fitness instructor as well as qualified in Pilates and a black belt in Kick Boxing",
  "specialities": [
    "Personal Trainer Level 3",
    "Pre and Post Natal",
    "Level 3 Advanced Pilates",
    "Torso training and Core Stability",
    "Nutrition and Weight management",
    "Circuit training"
  ],
  "image": "image/instructors/lynn-moorhouse.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Rob Maher",
  "role": "Marketing Manager and Lead Instructor",
  "locations": [],
  "bio": "Rob has developed the nickname ‘Evil Rob’ for his enthusiastic approach, safely pushing you to your personal limits. Rob’s passion is to educate, motivate and inspire every single member his classes to achieve their personal health and fitness goals.",
  "specialities": [
    "Circuits",
    "Corrective exercise, injury management/ prevention",
    "Weight Management/Body Fat Loss",
    "Nutrition",
    "Fun session/fitness games"
  ],
  "image": "image/instructors/rob-maher.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Russ Dales",
  "role": "South Yorkshire Manager",
  "locations": [],
  "bio": "Russ motivational, enthusiastic, and Popular trainer who manages our south Yorkshire Programme. He provides sessions and classes that adapt to your needs; whether you are a complete beginner or want to take your fitness to the next level. You’ll be pushed to your personal limits.",
  "specialities": [
    "Fun workouts – Group training – Sport Specific Training",
    "Strength and conditioning",
    "Weight Loss – Healthy Living",
    "Safe Exercise and Injury Prevention",
    "Boxing style Bootcamps"
  ],
  "image": "image/instructors/russ-dales.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Rupert Harold",
  "role": "",
  "locations": [],
  "bio": "",
  "specialities": [],
  "image": "image/instructors/rupert-harold.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Ady Thorne",
  "role": "Leeds Instructor",
  "locations": [],
  "bio": "",
  "specialities": [
    "Level 3 Personal Trainer",
    "Ex Army"
  ],
  "image": "image/instructors/ady-thorne.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Jon Fawcett",
  "role": "Bootcamp Instructor",
  "locations": [],
  "bio": "",
  "specialities": [],
  "image": "image/instructors/jon-fawcett.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Lee Parfitt",
  "role": "Sheffield Trainer and Rehab Specialist",
  "locations": [],
  "bio": "Lee is one of our most qualified and experience trainers having over 20 years in the army as a PTI with level 4 in rehab and exercise. Lee runs our Saturday morning with popular classes at Hillsborough park. His sessions will push you to the max with optimum results and output but also catering for your level of fitness whether you are a beginner or advanced fitness fanatic",
  "specialities": [],
  "image": "image/instructors/lee-parfitt.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Marvin Sahebjam",
  "role": "Instructor",
  "locations": [],
  "bio": "",
  "specialities": [
    "Level 3 Personal Training",
    "Level 4 Sport Massage"
  ],
  "image": "image/instructors/marvin-sahebjam.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Chris Trott",
  "role": "",
  "locations": [],
  "bio": "",
  "specialities": [],
  "image": "image/instructors/chris-trott.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Ryan Robinson",
  "role": "",
  "locations": [],
  "bio": "",
  "specialities": [
    "Personal Training Level 3",
    "Mixed Martial Arts"
  ],
  "image": "image/instructors/ryan-robinson.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "James Green",
  "role": "Sheffield Instructor",
  "locations": [],
  "bio": "",
  "specialities": [],
  "image": "image/instructors/james-green.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Adam Endersby",
  "role": "",
  "locations": [],
  "bio": "",
  "specialities": [],
  "image": "image/instructors/adam-endersby.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Gareth Clough",
  "role": "",
  "locations": [],
  "bio": "",
  "specialities": [
    "Level 3 Personal Training",
    "Team Sports"
  ],
  "image": "image/instructors/gareth-clough.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Eric Chitty",
  "role": "",
  "locations": [],
  "bio": "",
  "specialities": [
    "Boxercise",
    "Level 3 Personal Trainer"
  ],
  "image": "image/instructors/eric-chitty.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}, {
  "name": "Mark Sullivan",
  "role": "",
  "locations": [],
  "bio": "Mark completed 22 years in the armed forces in July 1998, having served in Northern Ireland, UK mainland, Cyprus, Hong Kong, Germany and Bosnia.  Whilst serving he was awarded a Mention in Dispatches (MiD).  He left to pursue a career in Personal Training and Sports Therapy whilst completing a Masters programme.  In 2002 he started work at York St John University and at the same time also featured on Lads Army (2002) and Bad Lads Army (2004) as one of the military staff.  He has worked here in coaching studies and latterly in Sports Science and Injury Management. When not working at the University he is a member of the Territorial Army and also a member of the Queen’s Body Guard of The Yeomen of The Guard. He has completed over 40 marathons for charity and every year since 2004 has taken third year students on Trailwalker, a 100km walk on the South Downs, which has to be completed within 30 hours. Instructor on TV show Bad lads Army.",
  "specialities": [],
  "image": "image/instructors/mark-sullivan.jpg",
  "social": {
    "facebook": "",
    "twitter": "",
    "linkedin": ""
  }
}];

// if (ClassInstructor.find().count() === 0) {
//
//   _.each(instructors, function (instructor) {
//     ClassInstructor.insert(instructor);
//     console.log("new instructor added: ", instructor.name);
//   });
// }

if (Meteor.users.find().count() === 0) {

  var id = Accounts.createUser({
    username: "Admin",
    email: "admin@ukoutdoorfitness.co.uk",
    password: "admin123",
    profiles: {
      name: "Paul Smith"
    },
    roles: []
  });
  Roles.addUsersToRoles(id, ["Admin"]);
  console.log("added new admin user!");
}


// Schedule only for One locations:
// var schedule = [{
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 18, 30),
//   "finishDateTime": Date(2016, 01, 01, 19, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 17, 30),
//   "finishDateTime": Date(2016, 01, 01, 18, 30),
//   "createDate": Date.now(20),
//   "location": addresses[0],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 07, 30),
//   "finishDateTime": Date(2016, 01, 01, 08, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 18, 30),
//   "finishDateTime": Date(2016, 01, 01, 19, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 18, 30),
//   "finishDateTime": Date(2016, 01, 01, 19, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 18, 30),
//   "finishDateTime": Date(2016, 01, 01, 19, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 18, 30),
//   "finishDateTime": Date(2016, 01, 01, 19, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }, {
//   "title": "Kirkstall Abbey",
//   "description": "Some details about the event here.",
//   "startDateTime": Date(2016, 01, 19, 30),
//   "finishDateTime": Date(2016, 01, 01, 20, 30),
//   "createDate": Date.now(20),
//   "location": addresses[2],
//   "instructor": [instructors[0], instructors[1]],
//   "canRegistered": true,
//   "Registrants": []
// }];
